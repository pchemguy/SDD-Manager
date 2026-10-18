/**
 * Native local execution boundary shared by forge utilities.
 * Explicit Git root/remote, bounded subprocesses, regular JSON input and
 * common-directory lock ownership; no credential or network import effects.
 * Protected token policy remains owned by sdd-manage/protected-token.mjs.
 */
import fs from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { fail, ForgeError, repositoryName } from './github-client.mjs';
import { ProtectedInputError, readToken, sameDirectory, childEnv } from '../../sdd-manage/scripts/protected-token.mjs';
const MAX_JSON = 1024 * 1024;
/** Normalize established GitHub HTTPS/SSH push destinations without changes. */
export function remoteRepository(value) {
  let name;
  if (/^git@github\.com:/i.test(value)) name = value.slice(value.indexOf(':') + 1);
  else {
    let url; try { url = new URL(value); } catch { fail('unsupported_remote'); }
    if (url.hostname.toLowerCase() !== 'github.com' || url.password || url.search || url.hash
        || !['https:', 'ssh:'].includes(url.protocol) || (url.protocol === 'https:' && url.username)
        || (url.protocol === 'ssh:' && url.username !== 'git') || (url.port && !['443', '22'].includes(url.port))) fail('unsupported_remote');
    name = url.pathname.slice(1);
  }
  return repositoryName(name.replace(/\.git$/, ''));
}
/** Read one regular bounded UTF-8 JSON input; optional UTF-8 BOM is accepted. */
export function requestFile(filename) {
  const descriptor = fs.openSync(filename, 'r');
  try {
    const info = fs.fstatSync(descriptor);
    if (!info.isFile() || info.size > MAX_JSON) fail('invalid_request_file');
    const raw = Buffer.alloc(MAX_JSON + 1);
    const count = fs.readSync(descriptor, raw, 0, raw.length, 0);
    if (count > MAX_JSON) fail('invalid_request_file');
    try { return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(raw.subarray(0, count))); }
    catch { fail('invalid_request_json'); }
  } finally { fs.closeSync(descriptor); }
}
/** Acquire a common-directory lock; return cleanup bound to its nonce. */
export function acquireLock(common) {
  const directory = path.join(common, 'sdd-forge-close.lock'), nonce = randomUUID();
  try { fs.mkdirSync(directory, { mode: 0o700 }); }
  catch (error) { fail(error.code === 'EEXIST' ? 'operation_busy' : 'lock_unavailable', 'lock'); }
  const file = path.join(directory, 'owner.json');
  try { fs.writeFileSync(file, JSON.stringify({ nonce, pid: process.pid, created_at: new Date().toISOString() }), { flag: 'wx', mode: 0o600 }); }
  catch { try { fs.rmdirSync(directory); } catch {} fail('lock_unavailable', 'lock'); }
  return () => {
    if (JSON.parse(fs.readFileSync(file, 'utf8')).nonce !== nonce) fail('lock_ownership_changed', 'lock');
    fs.unlinkSync(file); fs.rmdirSync(directory);
  };
}

/** Produce safe known/unknown failure metadata without raw exception messages. */
export function failure(error, effects = {}) {
  const safe = error instanceof ForgeError || error instanceof ProtectedInputError;
  return { schema_version: 1, ok: false, code: safe ? error.code : 'operation_failed', stage: safe ? error.stage : 'preflight',
    remote_state: Object.values(effects).includes('unknown') ? 'unknown' : 'not_verified', effects: { ...effects },
    ...(safe && error.http_status ? { http_status: error.http_status } : {}), ...(safe && error.retry_at ? { retry_at: error.retry_at } : {}),
    ...(safe && error.request_id ? { request_id: error.request_id } : {}),
    ...(safe && Number.isSafeInteger(error.attempts) ? { attempts: error.attempts } : {}) };
}
/** Reject a protected credential's literal occurrence in structured content. */
export function containsCredential(value, token) {
  if (typeof value === 'string') return value.includes(token);
  return value && typeof value === 'object' && Object.values(value).some(item => containsCredential(item, token));
}


/** Establish the exact root/destination and bounded native Git context. */
export function createContext(options, repository, started = performance.now()) {
  const repo = fs.realpathSync(options.repo), env = childEnv();
  const remainingMs = () => options.timeoutMs - (performance.now() - started);
  const git = args => {
    if (remainingMs() <= 0) return { error: { code: 'ETIMEDOUT' }, status: null };
    return spawnSync('git', ['-C', repo, ...args], { encoding: 'utf8', env, windowsHide: true, shell: false,
      timeout: Math.max(1, Math.floor(Math.min(10000, remainingMs()))), maxBuffer: 1024 * 1024 });
  };
  const checked = args => {
    const result = git(args);
    if (result.error || result.signal || result.status !== 0) fail('git_preflight_failed');
    return result.stdout.trim();
  };
  if (!sameDirectory(checked(['rev-parse', '--show-toplevel']), repo)) fail('repo_must_be_root');
  const urls = checked(['remote', 'get-url', '--push', '--all', options.remote]).split(/\r?\n/);
  if (urls.length !== 1 || remoteRepository(urls[0]) !== repository) fail('destination_mismatch');
  const common = fs.realpathSync(path.resolve(repo, checked(['rev-parse', '--git-common-dir'])));
  return { repo, git, checked, remainingMs, common };
}

/** Read only an already eligible protected token, consuming remaining budget. */
export function protectedToken(context, tokenFile) {
  return readToken(context.repo, tokenFile, context.git, process.platform, { remainingMs: context.remainingMs });
}

/** Native file identity handles Windows case/short-path entry spellings. */
export function isMain(metaUrl) {
  try {
    if (!process.argv[1]) return false;
    const a = fs.statSync(process.argv[1]), b = fs.statSync(fileURLToPath(metaUrl));
    return a.dev === b.dev && a.ino === b.ino;
  } catch { return false; }
}
