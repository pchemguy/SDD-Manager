/** Synthetic-only recovery contracts; run with node --test tests/git-auth-recover.test.mjs. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as auth from '../.agents/plugins/sdd-manager/skills/sdd-manage/scripts/git-auth-recover.mjs';

test('strict token format accepts a terminal line ending, rejects protocol injection', () => {
  assert.equal(auth.validateToken('synthetic-token\r\n'), 'synthetic-token');
  for (const value of ['', 'one\ntwo', 'one\rtwo', 'one\0two', ' token ', 'x'.repeat(17000)]) {
    assert.throws(() => auth.validateToken(value));
  }
});
test('explicit HTTPS target excludes embedded credentials, SSH and query/fragment', () => {
  assert.equal(auth.validateTargetUrl('https://example.invalid/owner/repo.git').host, 'example.invalid');
  for (const url of ['git@example.invalid:repo', 'http://example.invalid/repo',
    'https://user:secret@example.invalid/repo', 'https://example.invalid/repo?token=x',
    'https://example.invalid/repo#x']) assert.throws(() => auth.validateTargetUrl(url));
});
test('helper command quotes Node and script paths without embedding a token', () => {
  const cmd = auth.helperCommand('C:\\Program Files\\nodejs\\node.exe', "C:\\plugin's files\\auth.mjs", ['repo', 'gh.tkn', 'https://example.invalid/a.git'], 'win32');
  assert.match(cmd, /^!'/); assert.ok(cmd.includes('C:/Program Files/nodejs/node.exe'));
  assert.ok(cmd.includes("'\\''")); assert.ok(!cmd.includes('password='));
});
test('Windows ACL policy allows only owner/SYSTEM/Administrators grants', () => {
  const sid = 'S-1-5-21-1-2-3-1001';
  assert.doesNotThrow(() => auth.checkWindowsDacl(`D:P(A;;FA;;;SY)(A;;FA;;;BA)(A;;FR;;;${sid})`, sid));
  for (const sddl of ['D:', 'D:(A;;FR;;;WD)', 'D:(A;;FR;;;AU)', 'D:(A;;FR;;;BU)',
    'D:(XA;;FR;;;SY;condition)', 'not-sddl']) assert.throws(() => auth.checkWindowsDacl(sddl, sid));
});
test('CLI rejects arbitrary commands, unknown/duplicate options and incomplete scope', () => {
  assert.throws(() => auth.parseCli(['config', '--global', 'x']));
  assert.throws(() => auth.parseCli(['push']));
  assert.throws(() => auth.parseCli(['push', '--repo', '.', '--repo', '.']));
});
test('exact readback rejects duplicates and uses actual tag ref, not peeled target', () => {
  const oid = 'a'.repeat(40), ref = 'refs/tags/v1';
  assert.equal(auth.remoteOid(`${oid}\t${ref}\n`, ref), oid);
  assert.equal(auth.remoteOid('', ref), null);
  assert.throws(() => auth.remoteOid(`${oid}\t${ref}\n${oid}\t${ref}\n`, ref));
});

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const SCRIPT = fileURLToPath(new URL('../.agents/plugins/sdd-manager/skills/sdd-manage/scripts/git-auth-recover.mjs', import.meta.url));
const CANARY = 'synthetic-only-canary-token';
const TARGET_URL = 'https://example.invalid/owner/repo.git';
function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "sdd auth's-λ-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const git = args => {
    const result = spawnSync('git', ['-C', root, ...args], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr); return result.stdout.trim();
  };
  git(['init', '-q']); git(['config', 'user.name', 'Fixture']); git(['config', 'user.email', 'fixture@example.invalid']);
  fs.writeFileSync(path.join(root, '.gitignore'), '*.tkn\n');
  fs.writeFileSync(path.join(root, 'gh.tkn'), CANARY + '\r\n', { mode: 0o600 });
  if (process.platform === 'win32') {
    const sid = spawnSync('whoami.exe', ['/user', '/fo', 'csv', '/nh'], { encoding: 'utf8' }).stdout.match(/S-1-\d+(?:-\d+)+/)[0];
    assert.equal(spawnSync('icacls.exe', [path.join(root, 'gh.tkn'), '/inheritance:r', '/grant:r', `*${sid}:F`], { encoding: 'utf8' }).status, 0);
  }
  git(['add', '.gitignore']); git(['commit', '-qm', 'fixture']);
  const ref = git(['symbolic-ref', 'HEAD']), oid = git(['rev-parse', 'HEAD']);
  git(['remote', 'add', 'origin', TARGET_URL]);
  const options = auth.parseCli(['push', '--repo', root, '--remote', 'origin', '--url', TARGET_URL, '--ref', ref, '--expect', oid]);
  return { root, git, ref, oid, options };
}
function controlled(f, { push, readback, changedDestination } = {}) {
  const calls = [];
  const execute = (exe, args, options) => {
    calls.push({ exe, args, env: options.env });
    const operation = args.indexOf('push');
    if (operation >= 0) return push || { status: 0, stdout: '', stderr: '' };
    if (args.includes('ls-remote') && args.includes('--refs')) return readback || { status: 0, stdout: `${f.oid}\t${f.ref}\n`, stderr: '' };
    if (changedDestination && args.includes('get-url')) return { status: 0, stdout: 'https://other.invalid/repo.git\n', stderr: '' };
    return spawnSync(exe, args, { ...options, encoding: 'utf8' });
  };
  return { calls, execute };
}

test('native Git invokes scoped helper through paths with spaces and quotes', t => {
  const f = fixture(t), config = f.git(['config', '--local', '--list']);
  const helper = auth.helperCommand(process.execPath, SCRIPT, [f.root, 'gh.tkn', TARGET_URL]);
  const result = spawnSync('git', ['-C', f.root, '-c', 'credential.helper=', '-c', `credential.helper=${helper}`,
    '-c', 'credential.useHttpPath=true', '-c', 'core.askPass=', 'credential', 'fill'], {
    input: 'protocol=https\nhost=example.invalid\npath=owner/repo.git\n\n', encoding: 'utf8',
    env: { ...process.env, GIT_TERMINAL_PROMPT: '0', GIT_ASKPASS: '', SSH_ASKPASS: '' }, timeout: 10000,
  });
  assert.equal(result.status, 0, result.stderr); assert.ok(result.stdout.includes(`password=${CANARY}`));
  assert.equal(f.git(['config', '--local', '--list']), config);
});
test('helper never supplies credentials for another path or host; store is a no-op', t => {
  const f = fixture(t);
  for (const [action, input] of [['get', 'protocol=https\nhost=wrong.invalid\npath=owner/repo.git\n\n'],
    ['get', 'protocol=https\nhost=example.invalid\npath=other/repo.git\n\n'], ['store', 'password=synthetic\n\n'], ['erase', '']]) {
    const result = spawnSync(process.execPath, [SCRIPT, '--credential-helper', f.root, 'gh.tkn', TARGET_URL, action], { input, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr); assert.equal(result.stdout, ''); assert.equal(result.stderr, '');
  }
});
test('one explicit push uses transient context, retains config and verifies actual push destination', t => {
  const f = fixture(t); const before = fs.readFileSync(path.join(f.root, '.git', 'config'));
  const runner = controlled(f), result = auth.recover(f.options, runner.execute);
  assert.equal(result.ok, true); assert.equal(result.remote_state, 'matching');
  const pushes = runner.calls.filter(c => c.args.includes('push'));
  assert.equal(pushes.length, 1); assert.ok(pushes[0].args.includes(`${f.oid}:${f.ref}`));
  for (const call of runner.calls) assert.ok(!JSON.stringify(call).includes(CANARY));
  assert.deepEqual(fs.readFileSync(path.join(f.root, '.git', 'config')), before);
});
test('readback operation never pushes; absent/different/uncertain refs are distinct', t => {
  const f = fixture(t);
  for (const [stdout, state] of [['', 'absent'], [`${'b'.repeat(40)}\t${f.ref}\n`, 'different']]) {
    const runner = controlled(f, { readback: { status: 0, stdout, stderr: '' } });
    const result = auth.recover({ ...f.options, operation: 'readback' }, runner.execute);
    assert.equal(result.ok, false); assert.equal(result.remote_state, state);
    assert.ok(!runner.calls.some(c => c.args.includes('push')));
  }
  const runner = controlled(f, { readback: { status: 128, stderr: CANARY } });
  const result = auth.recover(f.options, runner.execute);
  assert.equal(result.remote_state, 'unknown'); assert.ok(!JSON.stringify(result).includes(CANARY));
});
test('push error can be reconciled by exact readback without another push', t => {
  const f = fixture(t), runner = controlled(f, { push: { status: null, error: { code: 'ETIMEDOUT' }, stderr: CANARY } });
  const result = auth.recover(f.options, runner.execute);
  assert.equal(result.ok, true); assert.equal(result.code, 'verified_after_push_error');
  assert.equal(runner.calls.filter(c => c.args.includes('push')).length, 1);
});
test('mismatched destination or source blocks all network effects', t => {
  const f = fixture(t); const runner = controlled(f, { changedDestination: true });
  assert.throws(() => auth.recover(f.options, runner.execute), /destination_mismatch/);
  assert.ok(!runner.calls.some(c => c.args.includes('push') || c.args.includes('--refs')));
  assert.throws(() => auth.recover({ ...f.options, expect: 'f'.repeat(40) }, runner.execute), /source_mismatch/);
});
test('tracked, unignored, external, symlink and permissive token files block recovery', t => {
  const f = fixture(t), runner = controlled(f);
  assert.throws(() => auth.recover({ ...f.options, tokenFile: '../outside.tkn' }, runner.execute), /token_outside_repository/);
  fs.writeFileSync(path.join(f.root, '.gitignore'), '');
  assert.throws(() => auth.recover(f.options, runner.execute), /token_not_ignored/);
  f.git(['add', 'gh.tkn']);
  assert.throws(() => auth.recover(f.options, runner.execute));
  f.git(['reset', '--', 'gh.tkn']); fs.writeFileSync(path.join(f.root, '.gitignore'), '*.tkn\n');
  if (process.platform !== 'win32') {
    fs.chmodSync(path.join(f.root, 'gh.tkn'), 0o644);
    assert.throws(() => auth.recover(f.options, runner.execute), /token_permissions/);
    fs.unlinkSync(path.join(f.root, 'gh.tkn')); fs.symlinkSync('.gitignore', path.join(f.root, 'gh.tkn'));
    assert.throws(() => auth.recover(f.options, runner.execute), /token_symlink/);
  }
});
test('import and public failure paths cannot read a token or print subprocess secrets', t => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'sdd-import-'));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  const result = spawnSync(process.execPath, [SCRIPT, 'config', '--global', 'danger'], { cwd: directory, encoding: 'utf8' });
  assert.equal(result.status, 1); assert.equal(JSON.parse(result.stdout).code, 'invalid_operation'); assert.equal(result.stderr, '');
});

test('API scope validation cannot be bypassed by avoiding CLI parser', t => {
  const f = fixture(t), runner = controlled(f);
  assert.throws(() => auth.recover({ ...f.options, operation: 'config' }, runner.execute), /invalid_operation/);
  assert.throws(() => auth.recover({ ...f.options, timeoutMs: 0 }, runner.execute), /invalid_timeout/);
});
test('readback can reconcile an older known object after local branch advances', t => {
  const f = fixture(t); f.git(['commit', '--allow-empty', '-qm', 'later local checkpoint']);
  const runner = controlled(f);
  assert.equal(auth.recover({ ...f.options, operation: 'readback' }, runner.execute).ok, true);
  assert.throws(() => auth.recover(f.options, runner.execute), /source_mismatch/);
});
test('effective push URL divergence and multiplicity are enforced', t => {
  const f = fixture(t); f.git(['remote', 'set-url', '--push', 'origin', 'https://publish.invalid/owner/repo.git']);
  const runner = controlled(f);
  assert.throws(() => auth.recover(f.options, runner.execute), /destination_mismatch/);
  assert.equal(auth.recover({ ...f.options, url: 'https://publish.invalid/owner/repo.git' }, runner.execute).ok, true);
  f.git(['remote', 'set-url', '--add', '--push', 'origin', TARGET_URL]);
  assert.throws(() => auth.recover(f.options, runner.execute), /destination_mismatch/);
});
test('URL-scoped helper resets supersede inherited broken helpers without editing them', t => {
  const f = fixture(t); f.git(['config', `credential.${TARGET_URL}.helper`, 'does-not-exist']);
  const runner = controlled(f); auth.recover(f.options, runner.execute);
  const prefix = runner.calls.find(c => c.args.includes('push')).args;
  const configBefore = f.git(['config', '--local', '--list']);
  const result = spawnSync('git', [...prefix.slice(0, prefix.indexOf('push')), 'credential', 'fill'], {
    input: `url=${TARGET_URL}\n\n`, encoding: 'utf8', env: { ...process.env, GIT_TERMINAL_PROMPT: '0' }, timeout: 10000,
  });
  assert.equal(result.status, 0, result.stderr); assert.ok(result.stdout.includes(CANARY));
  assert.equal(f.git(['config', '--local', '--list']), configBefore);
});
test('Git spawn error, signal and oversized output stop before network effects', t => {
  const f = fixture(t);
  for (const outcome of [{ error: { code: 'ENOENT' }, status: null }, { status: null, signal: 'SIGKILL' },
    { error: { code: 'ENOBUFS' }, status: null }]) {
    let calls = 0;
    assert.throws(() => auth.recover(f.options, () => { calls++; return { ...outcome, stderr: CANARY }; }));
    assert.equal(calls, 1);
  }
});
test('credential parsing and Windows ACLs reject ambiguity, accept Azure-style user SID', () => {
  assert.throws(() => auth.credentialRequest('protocol=https\nprotocol=http\n\n'));
  assert.throws(() => auth.credentialRequest('x'.repeat(66000)));
  const sid = 'S-1-12-1-1-2-3-4';
  assert.doesNotThrow(() => auth.checkWindowsDacl(`D:P(A;;FA;;;${sid})`, sid));
  assert.throws(() => auth.checkWindowsDacl('D:(A;;FA;;;SY)', sid));
});
test('malformed token never escapes public CLI failure output', t => {
  const f = fixture(t); fs.writeFileSync(path.join(f.root, 'gh.tkn'), CANARY + '\nprotocol=bad');
  const result = spawnSync(process.execPath, [SCRIPT, 'readback', '--repo', f.root, '--remote', 'origin', '--url', TARGET_URL, '--ref', f.ref, '--expect', f.oid], { encoding: 'utf8' });
  assert.equal(result.status, 1); assert.equal(JSON.parse(result.stdout).code, 'invalid_token');
  assert.ok(!result.stdout.includes(CANARY)); assert.equal(result.stderr, '');
});


test('repository identity tolerates native Windows path spelling differences', t => {
  const f = fixture(t);
  const actual = fs.realpathSync(f.root);
  const alternate = process.platform === 'win32' ? actual.toUpperCase() : actual;
  const runner = controlled(f);
  assert.equal(auth.recover({ ...f.options, repo: alternate, operation: 'readback' }, runner.execute).ok, true);
});

test('native Git decodes percent-encoded repository paths for credential requests', t => {
  const f = fixture(t);
  for (const url of ['https://example.invalid/owner/repo%2dname.git',
    'https://example.invalid/owner/repo%20name.git', 'https://example.invalid/owner/r%C3%A9po.git']) {
    const helper = auth.helperCommand(process.execPath, SCRIPT, [f.root, 'gh.tkn', url]);
    const result = spawnSync('git', ['-C', f.root, '-c', 'credential.helper=',
      '-c', `credential.helper=${helper}`, '-c', 'credential.useHttpPath=true',
      '-c', 'core.askPass=', 'credential', 'fill'], {
      input: `url=${url}\n\n`, encoding: 'utf8', timeout: 10000,
      env: { ...process.env, GIT_TERMINAL_PROMPT: '0', GIT_ASKPASS: '', SSH_ASKPASS: '' },
    });
    assert.equal(result.status, 0, result.stderr);
    assert.ok(result.stdout.includes(`password=${CANARY}`));
  }
  for (const url of ['https://example.invalid/owner/repo%09name.git',
    'https://example.invalid/owner/repo%ff.git', 'https://example.invalid/owner/repo%zz.git']) {
    assert.throws(() => auth.validateTargetUrl(url), /invalid_url/);
  }
});
test('configured remote VCS helpers block before any push or ref readback', t => {
  const f = fixture(t);
  f.git(['config', 'remote.origin.vcs', 'sdd-probe']);
  const runner = controlled(f);
  assert.throws(() => auth.recover(f.options, runner.execute), /remote_helper_unsupported/);
  assert.ok(!runner.calls.some(c => c.args.includes('push') || c.args.includes('--refs')));
});
test('native Windows ACL export is parsed as metadata', t => {
  if (process.platform !== 'win32') return;
  const f = fixture(t), saved = path.join(f.root, 'fixture-acl.txt');
  const exported = spawnSync('icacls.exe', [path.join(f.root, 'gh.tkn'), '/save', saved, '/q'], { encoding: 'utf8' });
  assert.equal(exported.status, 0);
  const dacl = auth.parseWindowsAclExport(fs.readFileSync(saved));
  const sid = spawnSync('whoami.exe', ['/user', '/fo', 'csv', '/nh'], { encoding: 'utf8' }).stdout.match(/S-1-\d+(?:-\d+)+/)[0];
  try { auth.checkWindowsDacl(dacl, sid); }
  catch { assert.fail(`Synthetic fixture ACL policy: ${JSON.stringify({ dacl, sid })}`); }
});
test('ACL exports support observed BOM-less UTF-16LE and reject malformed records', () => {
  const dacl = 'D:PAI(A;;FA;;;SY)(A;;FA;;;S-1-5-21-1-2-3-1001)';
  const text = `gh.tkn\r\n${dacl}\r\n`;
  for (const bytes of [Buffer.from(text, 'utf16le'),
    Buffer.concat([Buffer.from([0xff, 0xfe]), Buffer.from(text, 'utf16le')]), Buffer.from(text)]) {
    assert.equal(auth.parseWindowsAclExport(bytes), dacl);
  }
  for (const bytes of [Buffer.alloc(0), Buffer.from([0xff, 0xfe, 0x41]),
    Buffer.from(`gh.tkn\n${dacl}\nextra\n`), Buffer.from('gh.tkn\nnot-a-dacl\n')]) {
    assert.throws(() => auth.parseWindowsAclExport(bytes), /acl_unverified/);
  }
});
