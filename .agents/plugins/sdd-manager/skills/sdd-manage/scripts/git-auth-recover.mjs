/**
 * Request-scoped HTTPS Git recovery. Node >=22; no third-party packages.
 *
 * Main entry: push|readback --repo PATH --remote NAME --url HTTPS_URL
 *   --ref refs/heads/NAME|refs/tags/NAME --expect FULL_OBJECT_ID
 *   [--token-file gh.tkn] [--timeout-ms 30000]
 *
 * Policy/authorization belongs to sdd-manage/references/credentials.md. This
 * utility validates one destination/ref, supplies credentials through Git's
 * helper protocol and returns JSON. It never installs helpers, edits Git config,
 * persists credentials, force-pushes, deletes refs, or retries a push in a loop.
 * Imports have no effects. See git-auth-recover.md for the complete CLI contract.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const SCRIPT = fileURLToPath(import.meta.url);
const OID = /^(?:[a-f0-9]{40}|[a-f0-9]{64})$/;
const MAX_TOKEN = 16384;
const USAGE = 'push|readback --repo PATH --remote NAME --url HTTPS_URL --ref FULL_REF --expect FULL_OBJECT_ID [--token-file gh.tkn] [--timeout-ms 30000]';

/** A public error code/stage, deliberately excluding raw subprocess output. */
export class RecoveryError extends Error {
  constructor(code, stage = 'preflight') { super(code); this.code = code; this.stage = stage; }
}
const fail = (code, stage) => { throw new RecoveryError(code, stage); };

/**
 * Parse and validate the narrow CLI without I/O.
 * @param {string[]} args Operation and explicit options, excluding node/script.
 * @returns {object} Validated scope, defaults and bounded timeout.
 * @throws {RecoveryError} Invalid or incomplete scope; never embeds input values.
 */
export function parseCli(args) {
  if (!['push', 'readback'].includes(args[0])) fail('invalid_operation');
  const options = { operation: args[0], tokenFile: 'gh.tkn', timeoutMs: 30000 };
  const names = { '--repo': 'repo', '--remote': 'remote', '--url': 'url', '--ref': 'ref',
    '--expect': 'expect', '--token-file': 'tokenFile', '--timeout-ms': 'timeoutMs' };
  const seen = new Set();
  for (let i = 1; i < args.length; i += 2) {
    const key = names[args[i]], value = args[i + 1];
    if (!key || seen.has(key) || !value || value.startsWith('--')) fail('invalid_arguments');
    seen.add(key); options[key] = value;
  }
  if (!['repo', 'remote', 'url', 'ref', 'expect'].every(key => seen.has(key))) fail('missing_scope');
  if (!/^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/.test(options.remote) || !OID.test(options.expect)) fail('invalid_scope');
  if (!/^refs\/(heads|tags)\/.+/.test(options.ref) || /[\x00-\x20\x7f]/.test(options.ref)) fail('invalid_ref');
  options.timeoutMs = Number(options.timeoutMs);
  if (!Number.isInteger(options.timeoutMs) || options.timeoutMs < 100 || options.timeoutMs > 120000) fail('invalid_timeout');
  validateTargetUrl(options.url);
  return options;
}

/**
 * @param {string} value Exact canonical HTTPS destination from the coordinator.
 * @returns {URL} Parsed credential-free URL; no network or rewrite is performed.
 * @throws {RecoveryError} Unsafe, noncanonical or unsupported URL.
 */
export function validateTargetUrl(value) {
  let url;
  try { url = new URL(value); } catch { fail('invalid_url'); }
  if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash ||
      !url.hostname || url.pathname === '/' || /[\s\x00-\x1f\x7f]/.test(value) ||
      /%(?:00|0a|0d)/i.test(value) || url.href !== value) fail('invalid_url');
  return url;
}

/**
 * Accept one normal line ending; never trim malformed credential values.
 * @param {string} raw Bounded file contents; never pass via argv/logging.
 * @returns {string} Secret, for private helper protocol only.
 * @throws {RecoveryError} Empty, oversized or non-single-line ASCII token.
 */
export function validateToken(raw) {
  const token = raw.replace(/\r?\n$/, '');
  if (!token || Buffer.byteLength(raw) > MAX_TOKEN || /[^\x21-\x7e]/.test(token)) fail('invalid_token');
  return token;
}

/**
 * Build Git's documented shell-helper command; credentials are never arguments.
 * @param {string} node Actual Node executable path.
 * @param {string} script Installed script path.
 * @param {string[]} args Repository, token-file path and selected URL only.
 * @param {string} platform Platform used to normalize native executable paths.
 * @returns {string} Command-local helper setting with shell-quoted arguments.
 */
export function helperCommand(node, script, args, platform = process.platform) {
  const quote = value => "'" + String(value).replaceAll("'", "'\\''") + "'";
  const executable = value => platform === 'win32' ? value.replaceAll('\\', '/') : value;
  return '!' + [executable(node), executable(script), '--credential-helper', ...args].map(quote).join(' ');
}

/**
 * Conservative Windows DACL policy, not a complete effective-access audit.
 * @param {string} sddl DACL from native icacls metadata export.
 * @param {string} userSid Current user's SID from whoami.
 * @returns {void}
 * @throws {RecoveryError} Unsupported ACL or grant to another principal.
 */
export function checkWindowsDacl(sddl, userSid) {
  if (!/^S-1-\d+(?:-\d+)+$/.test(userSid) || !sddl.startsWith('D:')) fail('acl_unverified');
  const aces = sddl.match(/\([^()]*\)/g) || [];
  const remainder = sddl.replace(/\([^()]*\)/g, '');
  if (!aces.length || !/^D:[PAIR]*$/.test(remainder)) fail('acl_unverified');
  const allowed = new Set([userSid, 'SY', 'BA', 'S-1-5-18', 'S-1-5-32-544']);
  let ownGrant = false;
  for (const ace of aces) {
    const parts = ace.slice(1, -1).split(';');
    if (parts.length !== 6 || !['A', 'D'].includes(parts[0]) || parts[3] || parts[4]) fail('acl_unverified');
    if (parts[0] === 'A' && !allowed.has(parts[5])) fail('token_permissions');
    if (parts[0] === 'A' && parts[5] === userSid && !parts[1].includes('IO')) ownGrant = true;
  }
  if (!ownGrant) fail('acl_unverified');
}

/** Child environment excludes other credential/trace channels, never adds token. */
function childEnv(base = process.env) {
  const env = {};
  for (const [key, value] of Object.entries(base)) {
    if (/^(GIT_DIR|GIT_WORK_TREE|GIT_COMMON_DIR|GIT_INDEX_FILE|GIT_CONFIG_COUNT|GIT_CONFIG_KEY_\d+|GIT_CONFIG_VALUE_\d+)$/i.test(key)) fail('relocated_git_environment');
    if (/^(GIT_ASKPASS|SSH_ASKPASS|GIT_TRACE.*|GIT_CURL_VERBOSE|GIT_TRACE_CURL.*|GIT_TERMINAL_PROMPT|GCM_INTERACTIVE)$/i.test(key)) continue;
    env[key] = value;
  }
  return { ...env, GIT_TERMINAL_PROMPT: '0', GCM_INTERACTIVE: 'never' };
}

/** Direct executable launch with bounded captured output; caller never prints it. */
function processResult(executable, args, { cwd, env, timeoutMs = 30000, input } = {}) {
  return spawnSync(executable, args, { cwd, env, input, encoding: 'utf8', shell: false,
    windowsHide: true, timeout: timeoutMs, killSignal: 'SIGKILL', maxBuffer: 1024 * 1024 });
}
function checked(result, stage) {
  if (result.error) fail(result.error.code === 'ETIMEDOUT' ? 'process_timeout' : 'process_unavailable', stage);
  if (result.signal) fail('process_signal', stage);
  if (result.status !== 0) fail('git_failed', stage);
  return result.stdout || '';
}

/** Inspect Windows ACLs without PowerShell or exporting credential material. */
function windowsPermissions(filename) {
  const env = childEnv();
  const identity = checked(processResult('whoami.exe', ['/user', '/fo', 'csv', '/nh'], { env }), 'acl');
  const sid = identity.match(/S-1-\d+(?:-\d+)+/)?.[0];
  if (!sid) fail('acl_unverified');
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'sdd-auth-acl-'));
  try {
    const saved = path.join(directory, 'acl.txt');
    checked(processResult('icacls.exe', [filename, '/save', saved, '/q'], { env }), 'acl');
    const bytes = fs.readFileSync(saved);
    const content = bytes[0] === 0xff && bytes[1] === 0xfe ? bytes.subarray(2).toString('utf16le') : bytes.toString('utf8');
    const records = content.split(/\r?\n/).filter(Boolean);
    if (records.length !== 2 || !records[1].startsWith('D:')) fail('acl_unverified');
    checkWindowsDacl(records[1], sid);
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
}

/**
 * Validate a selected root-relative token before bounded reading. The trusted
 * repository/user owns the path; this is not a hostile same-user race sandbox.
 * POSIX owner-only mode and Windows conservative DACL checks do not modify ACLs.
 * @param {string} repo Resolved eligible worktree root.
 * @param {string} tokenFile Root-relative selected token-file path.
 * @param {Function} git Bounded Git runner returning spawnSync-style results.
 * @param {string} platform Native platform; tests may assess pure ACL separately.
 * @returns {string} Secret for private credential use, never diagnostic output.
 * @throws {RecoveryError|Error} Invalid protection/context, format or local I/O.
 */
export function readToken(repo, tokenFile, git, platform = process.platform) {
  if (path.isAbsolute(tokenFile)) fail('token_outside_repository');
  const filename = path.resolve(repo, tokenFile), relative = path.relative(repo, filename);
  if (!relative || relative.startsWith('..' + path.sep) || relative === '..') fail('token_outside_repository');
  let current = repo;
  for (const part of relative.split(path.sep)) {
    current = path.join(current, part);
    if (fs.lstatSync(current).isSymbolicLink()) fail('token_symlink');
  }
  const info = fs.lstatSync(filename);
  if (!info.isFile() || info.nlink !== 1 || info.size > MAX_TOKEN) fail('invalid_token_file');
  const parentRoot = checked(git(['-C', path.dirname(filename), 'rev-parse', '--show-toplevel']), 'token');
  if (fs.realpathSync(parentRoot.trim()) !== repo) fail('token_outside_repository');
  if (git(['check-ignore', '--no-index', '--', relative]).status !== 0) fail('token_not_ignored');
  const tracked = git(['ls-files', '--error-unmatch', '--', `:(literal)${relative}`]);
  if (tracked.status !== 1 || tracked.error || tracked.signal) fail('token_tracked_or_unknown');
  if (platform === 'win32') windowsPermissions(filename);
  else if (info.uid !== process.getuid() || (info.mode & 0o077)) fail('token_permissions');
  const descriptor = fs.openSync(filename, fs.constants.O_RDONLY | (fs.constants.O_NOFOLLOW || 0));
  try {
    const actual = fs.fstatSync(descriptor);
    if (actual.dev !== info.dev || actual.ino !== info.ino) fail('token_changed');
    const data = Buffer.alloc(MAX_TOKEN + 1);
    const length = fs.readSync(descriptor, data, 0, data.length, 0);
    if (length > MAX_TOKEN) fail('invalid_token');
    return validateToken(data.subarray(0, length).toString('utf8'));
  } finally { fs.closeSync(descriptor); }
}

/** Parse only security-relevant credential fields; do not log protocol input. */
export function credentialRequest(input) {
  if (Buffer.byteLength(input) > 65536) fail('invalid_credential_request', 'helper');
  const result = {};
  for (const line of input.split(/\r?\n/)) {
    if (!line) break;
    const split = line.indexOf('=');
    if (split < 1) fail('invalid_credential_request', 'helper');
    const key = line.slice(0, split);
    if (!['protocol', 'host', 'path', 'username'].includes(key)) continue;
    if (Object.hasOwn(result, key)) fail('invalid_credential_request', 'helper');
    result[key] = line.slice(split + 1);
  }
  return result;
}

/** Exact ref readback. Ref object IDs, including annotated tag objects, are literal. */
export function remoteOid(stdout, ref) {
  const rows = stdout.trim() ? stdout.trim().split(/\r?\n/) : [];
  if (!rows.length) return null;
  if (rows.length !== 1) fail('ambiguous_readback', 'readback');
  const [oid, name, extra] = rows[0].split(/\s+/);
  if (!OID.test(oid) || name !== ref || extra) fail('invalid_readback', 'readback');
  return oid;
}

/**
 * Validate local context and perform at most one explicit non-forced push plus
 * readback, or readback alone. `execute` injection is for controlled tests;
 * production uses native Git. No subprocess text is returned in public results.
 * @param {object} options Explicit operation, repo, remote, URL, ref and expect.
 * @param {Function} execute Bounded process adapter; production default is native.
 * @returns {object} Versioned JSON-safe remote outcome, never credential contents.
 * @throws {RecoveryError|Error} Preflight failure; CLI maps errors to safe JSON.
 */
export function recover(options, execute = processResult) {
  options = parseCli([options.operation, ...['repo', 'remote', 'url', 'ref', 'expect'].flatMap(key => ['--' + key, String(options[key] ?? '')]), '--token-file', options.tokenFile ?? 'gh.tkn', '--timeout-ms', String(options.timeoutMs ?? 30000)]);
  const env = childEnv();
  const repo = fs.realpathSync(options.repo);
  const git = (args, auth = []) => execute('git', ['-C', repo, ...auth, ...args], { cwd: repo, env, timeoutMs: options.timeoutMs });
  const root = checked(git(['rev-parse', '--show-toplevel']), 'repository').trim();
  if (fs.realpathSync(root) !== repo) fail('repo_must_be_root');
  checked(git(['check-ref-format', options.ref]), 'ref');
  if (options.operation === 'push') {
    const source = checked(git(['show-ref', '--verify', '--hash', options.ref]), 'ref').trim();
    if (source !== options.expect) fail('source_mismatch');
  } else checked(git(['cat-file', '-e', options.expect]), 'ref');
  validateTargetUrl(options.url);
  const destination = () => {
    const urls = checked(git(['remote', 'get-url', '--push', '--all', options.remote]), 'destination').trim().split(/\r?\n/);
    if (urls.length !== 1 || urls[0] !== options.url) fail('destination_mismatch');
    const readUrl = checked(git(['ls-remote', '--get-url', options.url]), 'destination').trim();
    if (readUrl !== options.url) fail('readback_url_rewritten');
  };
  destination();
  readToken(repo, options.tokenFile, git);
  const helper = helperCommand(process.execPath, SCRIPT, [repo, options.tokenFile, options.url]);
  const context = `credential.${options.url}`;
  const auth = ['-c', 'credential.helper=', '-c', `${context}.helper=`, '-c', `${context}.helper=${helper}`,
    '-c', 'credential.useHttpPath=true', '-c', `${context}.useHttpPath=true`,
    '-c', `${context}.username=x-access-token`, '-c', 'credential.interactive=false',
    '-c', 'core.askPass=', '-c', 'http.followRedirects=false', '-c', `http.${options.url}.followRedirects=false`, '-c', 'http.extraHeader=',
    '-c', `http.${options.url}.extraHeader=`];
  // Re-resolve after file validation; no persistent remote/helper writes occur.
  destination();
  let pushed;
  if (options.operation === 'push') {
    pushed = git(['push', '--porcelain', '--no-follow-tags', '--recurse-submodules=no',
      options.remote, `${options.expect}:${options.ref}`], [...auth, '-c', `remote.${options.remote}.mirror=false`]);
  }
  let observed;
  try { observed = remoteOid(checked(git(['ls-remote', '--refs', options.url, options.ref], auth), 'readback'), options.ref); }
  catch (error) {
    return { schema_version: 1, ok: false, code: error instanceof RecoveryError ? error.code : 'readback_failed',
      stage: 'readback', remote_state: 'unknown', push_attempted: !!pushed };
  }
  const match = observed === options.expect;
  return { schema_version: 1, ok: match, code: match ? (pushed && (pushed.error || pushed.signal || pushed.status !== 0) ? 'verified_after_push_error' : 'remote_verified') : (observed ? 'remote_mismatch' : 'remote_absent'),
    stage: 'readback', remote_state: match ? 'matching' : observed ? 'different' : 'absent',
    push_attempted: !!pushed, expected: options.expect, observed, ref: options.ref };
}

/** Internal Git protocol entry. Credential stdout is consumed only by Git. */
function helperMain(args) {
  const [repo, tokenFile, url, action, ...extra] = args;
  if (extra.length || !repo || !tokenFile || !url || !['get', 'store', 'erase'].includes(action)) fail('invalid_helper_arguments');
  if (action !== 'get') return;
  const buffer = Buffer.alloc(65537);
  let length = 0;
  while (length < buffer.length) {
    const read = fs.readSync(0, buffer, length, buffer.length - length, null);
    if (!read) break;
    length += read;
    if (buffer.subarray(0, length).includes(Buffer.from('\n\n')) || buffer.subarray(0, length).includes(Buffer.from('\r\n\r\n'))) break;
  }
  if (length > 65536) fail('invalid_credential_request');
  const request = credentialRequest(buffer.subarray(0, length).toString('utf8'));
  const target = validateTargetUrl(url);
  if (request.protocol !== 'https' || request.host !== target.host || request.path !== target.pathname.slice(1) ||
      (request.username && request.username !== 'x-access-token')) return;
  const git = args => processResult('git', ['-C', repo, ...args], { cwd: repo, env: childEnv() });
  const token = readToken(repo, tokenFile, git);
  process.stdout.write(`username=x-access-token\npassword=${token}\n\n`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === SCRIPT) {
  if (process.argv[2] === '--credential-helper') {
    try { helperMain(process.argv.slice(3)); } catch { process.exitCode = 1; }
  } else {
    try {
      if (Number(process.versions.node.split('.')[0]) < 22) fail('node_22_required');
      if (process.argv[2] === '--help') process.stdout.write(USAGE + '\n');
      else { const result = recover(parseCli(process.argv.slice(2))); process.stdout.write(JSON.stringify(result) + '\n'); process.exitCode = result.ok ? 0 : 2; }
    } catch (error) {
      process.stdout.write(JSON.stringify({ schema_version: 1, ok: false, code: error instanceof RecoveryError ? error.code : 'local_io_failed', stage: error instanceof RecoveryError ? error.stage : 'preflight' }) + '\n');
      process.exitCode = 1;
    }
  }
}
