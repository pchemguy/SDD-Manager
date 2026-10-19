/** Public supervised publication contracts; only synthetic credentials/local HTTPS. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { helperCommand } from '../.agents/plugins/sdd-manager/skills/sdd-manage/scripts/git-auth-recover.mjs';
import { capture, gitHttpsFixture } from './helpers/git-auth-https.mjs';

const SCRIPT = fileURLToPath(new URL('../.agents/plugins/sdd-manager/skills/sdd-manage/scripts/git-publish.mjs', import.meta.url));
const LEGACY = fileURLToPath(new URL('../.agents/plugins/sdd-manager/skills/sdd-manage/scripts/git-auth-recover.mjs', import.meta.url));
const TOKEN = 'synthetic-publication-only-canary';

function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "sdd publish's-λ-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const git = args => {
    const result = spawnSync('git', ['-C', root, ...args], { encoding: 'utf8', timeout: 10000 });
    assert.equal(result.status, 0, result.stderr); return result.stdout.trim();
  };
  git(['init', '-q']); git(['config', 'user.name', 'Fixture']); git(['config', 'user.email', 'fixture@example.invalid']);
  git(['config', 'http.schannelUseSSLCAInfo', 'true']); git(['config', 'http.schannelCheckRevoke', 'false']);
  fs.writeFileSync(path.join(root, '.gitignore'), '*.tkn\n');
  fs.writeFileSync(path.join(root, 'gh.tkn'), TOKEN + '\n');
  git(['add', '.gitignore']); git(['commit', '-qm', 'fixture']);
  git(['remote', 'add', 'origin', 'https://example.invalid/owner/repo.git']);
  return { root, git, ref: git(['symbolic-ref', 'HEAD']), oid: git(['rev-parse', 'HEAD']) };
}

function args(f, url, operation = 'push', extra = []) {
  return [operation, '--repo', f.root, '--remote', 'origin', '--url', url,
    '--ref', f.ref, '--expect', f.oid, ...extra];
}

function resultOf(result) {
  assert.equal(result.error, undefined);
  assert.ok(!result.stdout.includes(TOKEN) && !result.stderr.includes(TOKEN), 'public output leaked a credential');
  const data = JSON.parse(result.stdout);
  assert.equal(data.schema_version, 1);
  return data;
}

function helper(f, behavior) {
  const filename = path.join(f.root, 'fixture-helper.mjs');
  const marker = path.join(f.root, 'helper-started.json');
  const prefix = "import fs from 'node:fs'; import { spawn } from 'node:child_process';\n";
  const start = 'const action=process.argv.at(-1); if(action==="get") {\n';
  const record = 'fs.writeFileSync(' + JSON.stringify(marker) + ',JSON.stringify({pid:process.pid}));\n';
  let body = behavior === 'credential'
    ? 'process.stdout.write(' + JSON.stringify('username=x-access-token\npassword=' + TOKEN + '\n\n') + ');\n'
    : 'const child=spawn(process.execPath,["-e","setInterval(()=>{},1000)"],{stdio:"inherit"});' +
      'fs.writeFileSync(' + JSON.stringify(marker) + ',JSON.stringify({pid:process.pid,child:child.pid}));setInterval(()=>{},1000);\n';
  if (behavior === 'orphan') body = body.replace('{stdio:"inherit"}', '{stdio:"inherit",detached:true}')
    .replace('setInterval(()=>{},1000);\n', 'process.exit(0);\n');
  if (behavior === 'flood') body = body.replace('setInterval(()=>{},1000);\n',
    'process.stdout.write("x".repeat(2*1024*1024));setInterval(()=>{},1000);\n');
  fs.writeFileSync(filename, prefix + start + record + body + '}\n');
  f.git(['config', 'credential.helper', helperCommand(process.execPath, filename, [])]);
  return marker;
}

test('legacy public CLI supports existing authentication without requiring a token file', { timeout: 30000 }, async t => {
  const f = fixture(t), server = await gitHttpsFixture(t, TOKEN);
  f.git(['remote', 'set-url', 'origin', server.url]);
  fs.unlinkSync(path.join(f.root, 'gh.tkn')); helper(f, 'credential');
  const result = await capture(process.execPath, [LEGACY, ...args(f, server.url, 'push', ['--auth', 'existing'])], { env: server.env });
  const data = resultOf(result);
  assert.equal(result.status, 0);
  assert.equal(data.remote_state, 'matching');
  assert.equal(data.auth_mode, 'existing');
  assert.equal(data.cleanup_state, 'confirmed');
  assert.ok(server.events.some(event => event.write && event.authorized));
});

test('automatic token path bypasses an inherited hanging selector from the first attempt', { timeout: 30000 }, async t => {
  const f = fixture(t), server = await gitHttpsFixture(t, TOKEN);
  f.git(['remote', 'set-url', 'origin', server.url]);
  const marker = helper(f, 'wait'), config = fs.readFileSync(path.join(f.root, '.git/config'), 'utf8');
  const result = await capture(process.execPath, [SCRIPT, ...args(f, server.url), '--progress'], { env: server.env });
  const data = resultOf(result);
  assert.equal(result.status, 0); assert.equal(data.auth_mode, 'token');
  assert.equal(data.cleanup_state, 'confirmed'); assert.equal(data.remote_state, 'matching');
  assert.equal(fs.existsSync(marker), false);
  assert.equal(fs.readFileSync(path.join(f.root, '.git/config'), 'utf8'), config);
  assert.deepEqual(result.stderr.trim().split('\n').map(line => JSON.parse(line).stage), ['push', 'readback']);
});

function alive(pid) { try { process.kill(pid, 0); return true; } catch { return false; } }

test('tokenless hanging helper and grandchild are reaped within one budget; unrelated process survives', { timeout: 15000 }, async t => {
  const f = fixture(t), server = await gitHttpsFixture(t, TOKEN);
  f.git(['remote', 'set-url', 'origin', server.url]); fs.unlinkSync(path.join(f.root, 'gh.tkn'));
  const marker = helper(f, 'wait');
  const sentinel = spawn(process.execPath, ['-e', 'setInterval(()=>{},1000)'], { stdio: 'ignore' });
  t.after(() => sentinel.kill('SIGKILL'));
  const started = performance.now();
  const result = await capture(process.execPath, [SCRIPT, ...args(f, server.url), '--timeout-ms', '6000'], { env: server.env, timeout: 10000 });
  const data = resultOf(result), owned = JSON.parse(fs.readFileSync(marker, 'utf8'));
  assert.ok(performance.now() - started < 7000, 'whole budget renewed or streams remained open');
  assert.equal(result.status, 2); assert.equal(data.push_result.code, 'process_timeout');
  assert.equal(data.remote_state, 'absent'); assert.equal(data.cleanup_state, 'confirmed');
  assert.equal(alive(owned.pid), false); assert.equal(alive(owned.child), false);
  assert.equal(alive(sentinel.pid), true);
  assert.ok(!server.events.some(event => event.write && event.authorized));
});

test('present invalid token fails locally without invoking another credential source', async t => {
  const f = fixture(t), marker = helper(f, 'wait');
  fs.writeFileSync(path.join(f.root, 'gh.tkn'), TOKEN + '\npassword=injection\n');
  const result = await capture(process.execPath, [SCRIPT, ...args(f, 'https://example.invalid/owner/repo.git')]);
  const data = resultOf(result);
  assert.equal(result.status, 1); assert.equal(data.code, 'invalid_token');
  assert.equal(data.push_attempted, false); assert.equal(fs.existsSync(marker), false);
});

test('explicit missing token source never falls through even with auto selected', async t => {
  const f = fixture(t), marker = helper(f, 'wait');
  const result = await capture(process.execPath, [SCRIPT, ...args(f, 'https://example.invalid/owner/repo.git'),
    '--auth', 'auto', '--token-file', 'missing.tkn']);
  const data = resultOf(result);
  assert.equal(result.status, 1); assert.equal(data.push_attempted, false);
  assert.equal(fs.existsSync(marker), false);
});

test('missing supervisor runtime fails finitely before any Git network effect', async t => {
  const f = fixture(t);
  const result = await capture(process.execPath, [SCRIPT, ...args(f, 'https://example.invalid/owner/repo.git'),
    '--python', path.join(f.root, 'missing-python')]);
  const data = resultOf(result);
  assert.equal(result.status, 1); assert.equal(data.code, 'supervisor_unavailable');
  assert.equal(data.push_attempted, false); assert.equal(data.cleanup_state, 'confirmed');
});

test('same-repository linked worktree uses the existing token without copying it', { timeout: 30000 }, async t => {
  const f = fixture(t), server = await gitHttpsFixture(t, TOKEN), linked = path.join(f.root, 'linked worktree');
  f.git(['remote', 'set-url', 'origin', server.url]);
  f.git(['worktree', 'add', '-qb', 'linked', linked]);
  const selected = { ...f, root: linked, ref: 'refs/heads/linked' };
  const result = await capture(process.execPath, [SCRIPT, ...args(selected, server.url), '--credential-repo', f.root], { env: server.env });
  const data = resultOf(result);
  assert.equal(result.status, 0); assert.equal(data.auth_mode, 'token');
  assert.equal(fs.existsSync(path.join(linked, 'gh.tkn')), false);
  const other = fixture(t);
  const rejected = resultOf(await capture(process.execPath, [SCRIPT, ...args(selected, server.url), '--credential-repo', other.root], { env: server.env }));
  assert.equal(rejected.code, 'credential_repository_mismatch'); assert.equal(rejected.push_attempted, false);
});

test('cancellation cleans a live helper tree and never starts a second attempt', { timeout: 15000 }, async t => {
  const f = fixture(t), server = await gitHttpsFixture(t, TOKEN);
  f.git(['remote', 'set-url', 'origin', server.url]); fs.unlinkSync(path.join(f.root, 'gh.tkn'));
  const marker = helper(f, 'wait');
  const child = spawn(process.execPath, [SCRIPT, ...args(f, server.url), '--timeout-ms', '8000'], { env: server.env });
  let stdout = '', stderr = '';
  child.stdout.on('data', chunk => stdout += chunk); child.stderr.on('data', chunk => stderr += chunk);
  const deadline = Date.now() + 6000;
  while (!fs.existsSync(marker) && Date.now() < deadline) await new Promise(resolve => setTimeout(resolve, 20));
  assert.equal(fs.existsSync(marker), true);
  // Windows Node's kill(SIGTERM) forcibly terminates the controller; EOF to the
  // supervisor still owns cleanup, but no final JSON can be emitted there.
  if (process.platform === 'win32') child.stdin?.end();
  child.kill('SIGTERM');
  const status = await new Promise(resolve => child.on('close', resolve));
  if (process.platform !== 'win32') {
    const data = resultOf({ stdout, stderr, status });
    assert.equal(status, 3); assert.equal(data.code, 'cancelled'); assert.equal(data.cleanup_state, 'confirmed');
  }
  const owned = JSON.parse(fs.readFileSync(marker, 'utf8'));
  const end = Date.now() + 3500;
  while ((alive(owned.pid) || alive(owned.child)) && Date.now() < end) await new Promise(resolve => setTimeout(resolve, 20));
  assert.equal(alive(owned.pid), false); assert.equal(alive(owned.child), false);
});

for (const behavior of ['orphan', 'flood']) test(`public CLI cleans ${behavior} helper descendants and inherited streams`, { timeout: 15000 }, async t => {
  const f = fixture(t), server = await gitHttpsFixture(t, TOKEN);
  f.git(['remote', 'set-url', 'origin', server.url]); fs.unlinkSync(path.join(f.root, 'gh.tkn'));
  const marker = helper(f, behavior);
  const result = await capture(process.execPath, [SCRIPT, ...args(f, server.url), '--timeout-ms', '6000'], { env: server.env, timeout: 10000 });
  const data = resultOf(result), owned = JSON.parse(fs.readFileSync(marker, 'utf8'));
  assert.equal(data.cleanup_state, 'confirmed');
  assert.ok(['process_timeout', 'process_output_limit'].includes(data.push_result.code));
  assert.equal(alive(owned.pid), false); assert.equal(alive(owned.child), false);
  assert.ok(data.elapsed_ms < 6500);
});

test('lost successful push response is reconciled without another write', { timeout: 30000 }, async t => {
  const f = fixture(t), server = await gitHttpsFixture(t, TOKEN, { loseWriteResponse: true });
  f.git(['remote', 'set-url', 'origin', server.url]);
  const result = await capture(process.execPath, [SCRIPT, ...args(f, server.url)], { env: server.env });
  const data = resultOf(result);
  assert.equal(result.status, 0); assert.equal(data.code, 'verified_after_push_error');
  assert.equal(data.remote_state, 'matching'); assert.equal(data.push_result.code, 'git_failed');
  assert.equal(server.events.filter(event => event.write && event.authorized && event.method === 'POST').length, 1, JSON.stringify(server.events));
});

test('stalled transport consumes a finite whole deadline with confirmed cleanup', { timeout: 10000 }, async t => {
  const f = fixture(t), server = await gitHttpsFixture(t, TOKEN, { stallRead: true });
  f.git(['remote', 'set-url', 'origin', server.url]);
  const started = performance.now();
  const result = await capture(process.execPath, [SCRIPT, ...args(f, server.url, 'readback'), '--timeout-ms', '3000'], { env: server.env, timeout: 6000 });
  const data = resultOf(result);
  assert.equal(result.status, 3); assert.equal(data.code, 'process_timeout');
  assert.equal(data.remote_state, 'unknown'); assert.equal(data.cleanup_state, 'confirmed');
  assert.ok(performance.now() - started < 3500); assert.equal(data.push_attempted, false);
});
