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
import { capture, gitHttpsFixture } from './helpers/git-auth-https.mjs';
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
  fs.writeFileSync(path.join(root, 'gh.tkn'), CANARY + '\r\n');
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
test('ordinary readable token supports recovery without permission setup', t => {
  const f = fixture(t), runner = controlled(f);
  if (process.platform !== 'win32') fs.chmodSync(path.join(f.root, 'gh.tkn'), 0o644);
  const result = auth.recover(f.options, runner.execute);
  assert.equal(result.ok, true);
  assert.equal(result.code, 'remote_verified');
});
test('tracked, unignored, external and symlink token files block recovery', t => {
  const f = fixture(t), runner = controlled(f);
  assert.throws(() => auth.recover({ ...f.options, tokenFile: '../outside.tkn' }, runner.execute), /token_outside_repository/);
  fs.writeFileSync(path.join(f.root, '.gitignore'), '');
  assert.throws(() => auth.recover(f.options, runner.execute), /token_not_ignored/);
  f.git(['add', 'gh.tkn']);
  assert.throws(() => auth.recover(f.options, runner.execute));
  f.git(['reset', '--', 'gh.tkn']); fs.writeFileSync(path.join(f.root, '.gitignore'), '*.tkn\n');
  if (process.platform !== 'win32') {
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
test('credential parsing rejects ambiguous and oversized requests', () => {
  assert.throws(() => auth.credentialRequest('protocol=https\nprotocol=http\n\n'));
  assert.throws(() => auth.credentialRequest('x'.repeat(66000)));
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
    'https://example.invalid/owner/repo%20name.git', 'https://example.invalid/owner/r%C3%A9po.git',
    'https://example.invalid/owner/repo.git/', 'https://example.invalid///owner//repo.git///',
    'https://example.invalid/%2Fowner/repo.git%2F', 'https://example.invalid/owner/repo%252dname.git']) {
    f.git(['remote', 'set-url', 'origin', url]);
    f.git(['config', `credential.${url}.helper`, 'does-not-exist']);
    const runner = controlled(f);
    auth.recover({ ...f.options, url }, runner.execute);
    const args = runner.calls.find(c => c.args.includes('push')).args;
    const result = spawnSync('git', [...args.slice(0, args.indexOf('push')), 'credential', 'fill'], {
      input: `url=${url}\n\n`, encoding: 'utf8', timeout: 10000,
      env: { ...process.env, GIT_TERMINAL_PROMPT: '0', GIT_ASKPASS: '', SSH_ASKPASS: '' },
    });
    assert.equal(result.status, 0, result.stderr + " URL=" + url);
    assert.ok(result.stdout.includes(`password=${CANARY}`));
  }
  for (const url of ['https://example.invalid/owner/repo%09name.git',
    'https://example.invalid/owner/repo%ff.git', 'https://example.invalid/owner/repo%zz.git',
    'https://example.invalid///', 'https://example.invalid/%2f%2F']) {
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

test('private helper context accepts its Git directory and discards inherited command config', t => {
  const f = fixture(t), directory = f.git(['rev-parse', '--absolute-git-dir']);
  const result = spawnSync(process.execPath, [SCRIPT, '--credential-helper', f.root, 'gh.tkn', TARGET_URL, 'get'], {
    cwd: f.root, encoding: 'utf8', input: `url=${TARGET_URL}\nprotocol=https\nhost=example.invalid\npath=owner/repo.git\n\n`,
    env: { ...process.env, GIT_DIR: directory, GIT_CONFIG_PARAMETERS: "'core.bare=true'",
      GIT_CONFIG_COUNT: '1', GIT_CONFIG_KEY_0: 'core.bare', GIT_CONFIG_VALUE_0: 'true' }, timeout: 10000,
  });
  assert.equal(result.status, 0, result.stderr); assert.ok(result.stdout.includes(`password=${CANARY}`));
});

test('private helper context rejects another Git directory and unadmitted relocation', t => {
  const f = fixture(t), other = fixture(t);
  for (const extra of [{ GIT_DIR: path.join(other.root, '.git') }, { GIT_WORK_TREE: f.root }, { GIT_INDEX_FILE: path.join(f.root, '.git', 'index') }]) {
    const result = spawnSync(process.execPath, [SCRIPT, '--credential-helper', f.root, 'gh.tkn', TARGET_URL, 'get'], {
      cwd: f.root, encoding: 'utf8', input: 'protocol=https\nhost=example.invalid\npath=owner/repo.git\n\n',
      env: { ...process.env, ...extra }, timeout: 10000,
    });
    assert.equal(result.status, 1); assert.equal(result.stdout, ''); assert.ok(!result.stderr.includes(CANARY));
  }
});

test('private helper context supports a linked worktree Git administration directory', t => {
  const f = fixture(t), linked = path.join(f.root, 'linked');
  f.git(['worktree', 'add', '--detach', linked, f.oid]);
  fs.writeFileSync(path.join(linked, 'gh.tkn'), CANARY + '\n');
  const directory = spawnSync('git', ['-C', linked, 'rev-parse', '--absolute-git-dir'], { encoding: 'utf8' }).stdout.trim();
  const result = spawnSync(process.execPath, [SCRIPT, '--credential-helper', linked, 'gh.tkn', TARGET_URL, 'get'], {
    cwd: linked, encoding: 'utf8', input: 'protocol=https\nhost=example.invalid\npath=owner/repo.git\n\n',
    env: { ...process.env, GIT_DIR: directory }, timeout: 10000,
  });
  assert.equal(result.status, 0, result.stderr); assert.ok(result.stdout.includes(`password=${CANARY}`));
});

test('public callers reject ambient relocation and command configuration', t => {
  const f = fixture(t);
  // A missing guard must still stop locally rather than contacting any host.
  f.git(['remote', 'set-url', 'origin', 'https://different.invalid/owner/repo.git']);
  for (const extra of [{ GIT_DIR: path.join(f.root, '.git') }, { GIT_CONFIG_PARAMETERS: "'core.bare=true'" }]) {
    const result = spawnSync(process.execPath, [SCRIPT, 'readback', '--repo', f.root, '--remote', 'origin', '--url', TARGET_URL, '--ref', f.ref, '--expect', f.oid], {
      encoding: 'utf8', env: { ...process.env, ...extra }, timeout: 10000,
    });
    assert.equal(result.status, 1); assert.equal(JSON.parse(result.stdout).code, 'relocated_git_environment');
    assert.ok(!result.stdout.includes(CANARY));
  }
});

test('native HTTPS Git transport recovers credentials and verifies the exact ref', { timeout: 45000 }, async t => {
  const f = fixture(t), server = await gitHttpsFixture(t, CANARY);
  f.git(['remote', 'set-url', 'origin', server.url]);
  // Honor the explicit fixture CA on Schannel; no production TLS change.
  f.git(['config', 'http.schannelUseSSLCAInfo', 'true']); f.git(['config', 'http.schannelCheckRevoke', 'false']);
  const config = fs.readFileSync(path.join(f.root, '.git', 'config'));
  const result = await capture(process.execPath, [SCRIPT, 'push', '--repo', f.root, '--remote', 'origin', '--url', server.url,
    '--ref', f.ref, '--expect', f.oid, '--timeout-ms', '10000'], { cwd: f.root, env: server.env });
  assert.equal(result.status, 0, result.stdout + result.stderr);
  const data = JSON.parse(result.stdout); assert.equal(data.code, 'remote_verified'); assert.equal(data.observed, f.oid);
  assert.ok(server.events.some(event => event.write && event.authorized));
  assert.deepEqual(fs.readFileSync(path.join(f.root, '.git', 'config')), config);
  assert.ok(!(result.stdout + result.stderr).includes(CANARY));
});

test('process summaries preserve failed push independently of each readback state', t => {
  const f = fixture(t);
  const pushes = [
    [{ status: 128, stderr: CANARY }, 'git_failed', 128, null],
    [{ status: null, error: { code: 'ETIMEDOUT' }, signal: 'SIGKILL', stderr: CANARY }, 'process_timeout', null, 'SIGKILL'],
    [{ status: null, signal: 'SIGTERM', stderr: CANARY }, 'process_signal', null, 'SIGTERM'],
    [{ status: null, error: { code: 'ENOENT' }, stderr: CANARY }, 'process_unavailable', null, null],
    [{ status: null, error: { code: 'ENOBUFS' }, stderr: CANARY }, 'process_output_limit', null, null],
    [{ status: null, error: { code: CANARY }, stderr: CANARY }, 'process_error', null, null],
  ];
  const readbacks = [
    [{ status: 0, stdout: '' }, 'absent', 'succeeded'],
    [{ status: 0, stdout: `${'b'.repeat(40)}\t${f.ref}\n` }, 'different', 'succeeded'],
    [{ status: 0, stdout: `${f.oid}\t${f.ref}\n` }, 'matching', 'succeeded'],
    [{ status: 128, stderr: CANARY }, 'unknown', 'git_failed'],
  ];
  for (const [push, code, status, signal] of pushes) for (const [readback, remote, readCode] of readbacks) {
    const runner = controlled(f, { push, readback }), result = auth.recover(f.options, runner.execute);
    assert.ok(result.push_result, 'Missing independent push_result');
    assert.ok(result.readback_result, 'Missing independent readback_result');
    assert.equal(result.push_result.code, code); assert.equal(result.push_result.exit_status, status); assert.equal(result.push_result.signal, signal);
    assert.equal(result.readback_result.code, readCode); assert.equal(result.remote_state, remote);
    assert.equal(result.ok, remote === 'matching'); assert.equal(result.push_attempted, true);
    if (result.ok) assert.equal(result.code, 'verified_after_push_error');
    assert.equal(runner.calls.filter(call => call.args.includes('push')).length, 1);
    assert.ok(!JSON.stringify(result).includes(CANARY));
  }
});

test('process summaries distinguish no push and invalid readback content', t => {
  const f = fixture(t), runner = controlled(f);
  const onlyRead = auth.recover({ ...f.options, operation: 'readback' }, runner.execute);
  assert.ok(onlyRead.push_result, 'Missing not-attempted push summary');
  assert.deepEqual(onlyRead.push_result, { code: 'not_attempted', exit_status: null, signal: null });
  assert.equal(onlyRead.readback_result.code, 'succeeded');
  assert.equal(runner.calls.filter(call => call.args.includes('push')).length, 0);
  const invalid = controlled(f, { readback: { status: 0, stdout: `${f.oid}\t${f.ref}\n${f.oid}\t${f.ref}\n` } });
  const result = auth.recover(f.options, invalid.execute);
  assert.equal(result.remote_state, 'unknown'); assert.equal(result.code, 'ambiguous_readback');
  assert.equal(result.push_result.code, 'succeeded'); assert.equal(result.readback_result.code, 'succeeded');
  assert.equal(result.readback_result.validation_error, 'ambiguous_readback');
});

test('private helper diagnostics are allowlisted and never contain credential data', t => {
  const f = fixture(t), input = 'protocol=https\nhost=example.invalid\npath=owner/repo.git\n\n';
  const invoke = (body, tokenFile = 'gh.tkn', extra = {}) => spawnSync(process.execPath,
    [SCRIPT, '--credential-helper', f.root, tokenFile, TARGET_URL, 'get'],
    { cwd: f.root, env: { ...process.env, ...extra }, input: body, encoding: 'utf8', timeout: 10000 });
  const cases = [
    [invoke(input, 'gh.tkn', { GIT_WORK_TREE: f.root }), 'relocated_git_environment', 'preflight'],
    [invoke('protocol=https\nprotocol=http\n\n'), 'invalid_credential_request', 'helper'],
    [invoke(input, 'missing-token.tkn'), 'helper_failed', 'helper'],
  ];
  for (const [result, code, stage] of cases) {
    assert.equal(result.status, 1); assert.equal(result.stdout, '');
    assert.equal(result.stderr, 'SDD_GIT_AUTH_HELPER ' + JSON.stringify({ code, stage }) + '\n');
    assert.ok(!result.stderr.includes(CANARY)); assert.ok(!result.stderr.includes(f.root));
  }
});

test('process summaries accept only unambiguous allowlisted helper diagnostics', t => {
  const f = fixture(t), diagnostic = { code: 'token_not_ignored', stage: 'preflight' };
  const line = 'SDD_GIT_AUTH_HELPER ' + JSON.stringify(diagnostic) + '\n';
  const cases = [
    [CANARY + '\n' + line, diagnostic], [line + line, diagnostic],
    ['SDD_GIT_AUTH_HELPER ' + JSON.stringify({ code: CANARY, stage: 'preflight' }) + '\n', undefined],
    ['SDD_GIT_AUTH_HELPER {bad json}\n', undefined],
    [line + 'SDD_GIT_AUTH_HELPER ' + JSON.stringify({ code: 'invalid_token', stage: 'preflight' }) + '\n', undefined],
    ['SDD_GIT_AUTH_HELPER ' + JSON.stringify({ ...diagnostic, detail: CANARY }) + '\n', undefined],
  ];
  for (const [stderr, expected] of cases) {
    const runner = controlled(f, { push: { status: 128, stderr } });
    const result = auth.recover(f.options, runner.execute);
    assert.ok(result.push_result, 'Missing sanitized push summary');
    assert.deepEqual(result.push_result.helper_error, expected);
    assert.ok(!JSON.stringify(result).includes(CANARY));
  }
});

test('native HTTPS Git transport reports safe helper failure after token eligibility changes', { timeout: 45000 }, async t => {
  const f = fixture(t), server = await gitHttpsFixture(t, CANARY, {
    onChallenge: () => fs.writeFileSync(path.join(f.root, '.gitignore'), ''),
  });
  f.git(['remote', 'set-url', 'origin', server.url]);
  f.git(['config', 'http.schannelUseSSLCAInfo', 'true']); f.git(['config', 'http.schannelCheckRevoke', 'false']);
  const result = await capture(process.execPath, [SCRIPT, 'push', '--repo', f.root, '--remote', 'origin', '--url', server.url,
    '--ref', f.ref, '--expect', f.oid, '--timeout-ms', '10000'], { cwd: f.root, env: server.env });
  assert.equal(result.status, 2); const data = JSON.parse(result.stdout);
  assert.equal(data.remote_state, 'unknown'); assert.equal(data.push_attempted, true);
  assert.ok(data.push_result, 'Missing native push failure summary');
  assert.equal(data.push_result.code, 'git_failed'); assert.equal(data.push_result.exit_status, 128);
  assert.deepEqual(data.push_result.helper_error, { code: 'token_not_ignored', stage: 'preflight' });
  // Each independently owned attempt revalidates its token. Eligibility loss
  // blocks readback rather than falling through to anonymous/another account.
  assert.equal(data.readback_result.code, 'not_attempted');
  assert.deepEqual(data.local_error, { code: 'token_not_ignored', stage: 'preflight' });
  assert.ok(!server.events.some(event => event.write && event.authorized));
  assert.equal(result.stderr, ''); assert.ok(!JSON.stringify(data).includes(CANARY));
});
