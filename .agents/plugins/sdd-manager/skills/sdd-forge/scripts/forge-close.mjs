/**
 * Bounded GitHub completion mechanics for SDD implementation tasks/milestones.
 *
 * Node >=22; native Git and protected-token.mjs. Imports/help do not read a
 * credential or invoke Git/network. The CLI consumes an explicit root/remote
 * and versioned JSON handoff; see forge-close.md for the full contract.
 *
 * Callers establish real authority, acceptance, publication and exclusive
 * execution across machines. JSON assertions are not proof of those facts.
 * This module validates target/hosted identity and evidence, reconciles only
 * completed closure and returns safe known/unknown effects. It never creates
 * issues/milestones, changes Git/configuration, installs tools, reopens work,
 * retires tasks, deletes comments or blindly retries a mutation.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { ProtectedInputError, readToken, sameDirectory, childEnv } from '../../sdd-manage/scripts/protected-token.mjs';

const API = 'https://api.github.com';
const MAX_JSON = 1024 * 1024;
const MAX_RESPONSE = 8 * 1024 * 1024;
const MAX_PAGES = 100;
const OID = /^(?:[a-f0-9]{40}|[a-f0-9]{64})$/;
const TASK_ID = /^T-\d{3,}$/;
const MILESTONE_ID = /^[1-9]\d*(?:\.[1-9]\d*)+$/;
const USAGE = 'task|milestone --repo PATH --remote NAME --request FILE [--token-file gh.tkn] [--timeout-ms 60000] [--request-timeout-ms 15000] [--reconcile-only]';

/** Safe public failure metadata; raw transport/credential values are excluded. */
export class ForgeError extends Error {
  constructor(code, stage = 'preflight', details = {}) {
    super(code); this.code = code; this.stage = stage; Object.assign(this, details);
  }
}
const fail = (code, stage, details) => { throw new ForgeError(code, stage, details); };
const positive = value => Number.isSafeInteger(value) && value > 0;
function text(value, max = 16000, multiline = false) {
  return typeof value === 'string' && value.trim().length > 0 && Buffer.byteLength(value) <= max
    && Buffer.from(value).toString('utf8') === value
    && !(multiline ? /[\x00-\x08\x0b-\x1f\x7f]/ : /[\x00-\x1f\x7f]/).test(value)
    && !value.includes('<!-- sdd-forge:');
}
function keys(value, required, optional = []) {
  if (!value || typeof value !== 'object' || Array.isArray(value)
      || required.some(key => !Object.hasOwn(value, key))
      || Object.keys(value).some(key => !required.includes(key) && !optional.includes(key))) fail('invalid_schema');
}
function repositoryName(value) {
  if (typeof value !== 'string' || !/^[a-zA-Z0-9][a-zA-Z0-9-]{0,38}\/[a-zA-Z0-9_.-]{1,100}$/.test(value)
      || ['.', '..'].includes(value.split('/')[1])) fail('invalid_repository');
  return value.toLowerCase();
}
function reportPath(value) {
  if (!text(value, 1024) || value.includes('\\') || value.includes(':') || value.startsWith('/')
      || value.split('/').some(part => !part || part === '.' || part === '..')) fail('invalid_report');
}
function milestoneInput(value) {
  keys(value, ['id', 'number', 'title', 'description']);
  if (!text(value.id, 80) || !MILESTONE_ID.test(value.id) || !positive(value.number) || !text(value.title, 255)
      || !value.title.startsWith('sdd-' + value.id + '-') || value.title === 'sdd-' + value.id + '-'
      || !(value.description === null || text(value.description))) fail('invalid_milestone');
}
function taskInput(value) {
  keys(value, ['id', 'issue', 'title', 'commit', 'branch', 'verification', 'report']);
  if (!TASK_ID.test(value.id) || !positive(value.issue) || !text(value.title, 255)
      || !value.title.startsWith('[' + value.id + '] ') || value.title === '[' + value.id + '] '
      || !OID.test(value.commit) || !text(value.branch, 255) || /[\s~^:?*\\[\]]/.test(value.branch)
      || !text(value.verification, 16000, true)) fail('invalid_task');
  if (value.report !== null) reportPath(value.report);
}

// Bound our wait even if an injected stream does not propagate fetch abort.
async function abortable(promise, signal) {
  if (signal.aborted) throw new Error('aborted');
  let abort;
  const stopped = new Promise((_, reject) => { abort = () => reject(new Error('aborted')); });
  signal.addEventListener('abort', abort, { once: true });
  try { return await Promise.race([promise, stopped]); }
  finally { signal.removeEventListener('abort', abort); }
}

/**
 * Validate a caller assertion and exact object/evidence schema, without I/O.
 * @param {object} input Parsed UTF-8 JSON request, not an authorization grant.
 * @param {'task'|'milestone'} operation Completed-closure operation.
 * @returns {object} Independent normalized request; invalid/unsupported scope throws.
 */
export function validateRequest(input, operation) {
  const base = ['schema_version', 'repository', 'phase_label', 'milestone', 'eligibility'];
  if (!['task', 'milestone'].includes(operation)) fail('invalid_operation');
  keys(input, [...base, ...(operation === 'task' ? ['task'] : ['kind', 'tasks', 'review_task', 'report', 'predecessors'])]);
  if (input.schema_version !== 1 || !text(input.phase_label, 100)) fail('invalid_schema');
  const repository = repositoryName(input.repository);
  keys(input.eligibility, ['tracking', 'verified', 'published', 'exclusive']);
  if (Object.values(input.eligibility).some(value => value !== true)) fail('eligibility_not_established');
  milestoneInput(input.milestone);
  if (operation === 'task') taskInput(input.task);
  else {
    if (!['delivery', 'phase-review'].includes(input.kind) || !Array.isArray(input.tasks)
        || input.tasks.length < 1 || input.tasks.length > 1000 || !Array.isArray(input.predecessors)
        || input.predecessors.length > 1000) fail('invalid_milestone_scope');
    input.tasks.forEach(taskInput);
    if (new Set(input.tasks.map(item => item.id)).size !== input.tasks.length
        || new Set(input.tasks.map(item => item.issue)).size !== input.tasks.length) fail('duplicate_expected_task');
    const review = input.tasks.find(item => item.id === input.review_task);
    reportPath(input.report);
    if (!review || review.report !== input.report) fail('review_report_missing');
    input.predecessors.forEach(milestoneInput);
    const all = [input.milestone, ...input.predecessors];
    if (new Set(all.map(item => item.id)).size !== all.length || new Set(all.map(item => item.number)).size !== all.length) fail('duplicate_milestone');
    if ((input.kind === 'delivery' && input.predecessors.length)
        || (input.kind === 'phase-review' && (input.tasks.length !== 1 || !input.predecessors.length))) fail('invalid_review_dependencies');
  }
  return { ...structuredClone(input), repository };
}

/** Parse the narrow CLI with no file/credential access. Help is side-effect free. */
export function parseCli(args) {
  if (args.length === 1 && ['--help', '-h'].includes(args[0])) return { help: true };
  if (!['task', 'milestone'].includes(args[0])) fail('invalid_operation');
  const result = { operation: args[0], tokenFile: 'gh.tkn', timeoutMs: 60000, requestTimeoutMs: 15000, reconcileOnly: false };
  const names = { '--repo': 'repo', '--remote': 'remote', '--request': 'requestFile', '--token-file': 'tokenFile', '--timeout-ms': 'timeoutMs', '--request-timeout-ms': 'requestTimeoutMs' };
  const seen = new Set();
  for (let i = 1; i < args.length; i++) {
    if (args[i] === '--reconcile-only') {
      if (seen.has('reconcileOnly')) fail('invalid_arguments');
      seen.add('reconcileOnly'); result.reconcileOnly = true; continue;
    }
    const name = names[args[i]], value = args[++i];
    if (!name || seen.has(name) || !text(value, 4096) || value.startsWith('--')) fail('invalid_arguments');
    seen.add(name); result[name] = value;
  }
  if (!['repo', 'remote', 'requestFile'].every(key => seen.has(key))) fail('missing_scope');
  if (!/^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/.test(result.remote)) fail('invalid_remote');
  for (const [key, min, max] of [['timeoutMs', 1000, 300000], ['requestTimeoutMs', 100, 60000]]) {
    if (!/^\d+$/.test(String(result[key])) || Number(result[key]) < min || Number(result[key]) > max) fail('invalid_timeout');
    result[key] = Number(result[key]);
  }
  return result;
}

/** Canonical managed evidence for one verified task/commit, without I/O. */
export function evidenceComment(task) {
  taskInput(task);
  return '<!-- sdd-forge:completion task=' + task.id + ' commit=' + task.commit + ' -->\nTask: ' + task.id
    + '\nCommit: ' + task.commit + '\nBranch: ' + task.branch + '\nVerification:\n' + task.verification + '\nReport: ' + (task.report || 'None');
}

/**
 * GitHub-only bounded transport. Credentials stay in request headers only.
 * fetchImpl/clock/sleep are injectable dependency boundaries for controlled
 * execution. Production defaults use native fetch and monotonic elapsed time.
 * No mutation is retried here; safe reads have at most three retries.
 */
export class GitHubClient {
  constructor({ repository, token, timeoutMs = 60000, requestTimeoutMs = 15000, fetchImpl = globalThis.fetch,
    clock = () => performance.now(), sleep = ms => new Promise(resolve => setTimeout(resolve, ms)) }) {
    if (typeof token !== 'string' || !/^[\x21-\x7e]{1,16384}$/.test(token)
        || !Number.isFinite(timeoutMs) || timeoutMs <= 0 || !Number.isFinite(requestTimeoutMs) || requestTimeoutMs <= 0
        || typeof fetchImpl !== 'function' || typeof clock !== 'function' || typeof sleep !== 'function') fail('invalid_client_options');
    this.repository = repositoryName(repository); this.base = API + '/repos/' + this.repository;
    this.token = token; this.fetchImpl = fetchImpl; this.clock = clock; this.sleep = sleep;
    this.deadline = clock() + timeoutMs; this.requestTimeoutMs = requestTimeoutMs; this.lastMutation = null; this.repositoryId = null;
    this.readRetries = 0; this.retryFailures = [];
  }
  remaining() { return Math.max(0, this.deadline - this.clock()); }
  async wait(ms, code = 'deadline_exceeded', retryAt) {
    if (ms >= this.remaining()) fail(code, 'transport', retryAt ? { retry_at: retryAt } : {});
    await this.sleep(ms);
  }
  // Accept only this repository, including GitHub's identity-based page links.
  target(raw) {
    let url;
    try { url = new URL(raw.startsWith('https://') ? raw : this.base + raw); }
    catch { fail('invalid_api_target', 'transport'); }
    const prefixes = ['/repos/' + this.repository, ...(this.repositoryId ? ['/repositories/' + this.repositoryId] : [])];
    const prefix = prefixes.find(item => url.pathname === item || url.pathname.startsWith(item + '/'));
    if (url.origin !== API || url.username || url.password || url.hash || !prefix) fail('api_target_mismatch', 'transport');
    const suffix = url.pathname.slice(prefix.length);
    if (!/^(?:|\/issues(?:\/\d+(?:\/comments)?)?|\/milestones(?:\/\d+)?)$/.test(suffix)) fail('api_target_mismatch', 'transport');
    return url;
  }
  async once(method, raw, body) {
    const url = this.target(raw);
    if (!['GET', 'POST', 'PATCH'].includes(method)) fail('invalid_method', 'transport');
    const suffix = url.pathname.replace(/^\/(?:repos\/[^/]+\/[^/]+|repositories\/\d+)/, '');
    if (method === 'POST') {
      keys(body, ['body']);
      const comment = body.body;
      if (!/^\/issues\/\d+\/comments$/.test(suffix) || typeof comment !== 'string' || Buffer.byteLength(comment) > 32768
          || Buffer.from(comment).toString('utf8') !== comment || /[\x00-\x08\x0b-\x1f\x7f]/.test(comment)
          || !/^<!-- sdd-forge:completion task=T-\d{3,} commit=(?:[a-f0-9]{40}|[a-f0-9]{64}) -->\n/.test(comment)) fail('unsupported_mutation', 'transport');
    } else if (method === 'PATCH') {
      if (/^\/issues\/\d+$/.test(suffix)) {
        keys(body, ['state', 'state_reason']);
        if (body.state !== 'closed' || body.state_reason !== 'completed') fail('unsupported_mutation', 'transport');
      } else if (/^\/milestones\/\d+$/.test(suffix)) {
        keys(body, ['state']);
        if (body.state !== 'closed') fail('unsupported_mutation', 'transport');
      } else fail('unsupported_mutation', 'transport');
    } else if (body !== undefined) fail('unsupported_request_body', 'transport');
    if (this.remaining() <= 0) fail('deadline_exceeded', 'transport');
    if (method !== 'GET' && this.lastMutation !== null) await this.wait(Math.max(0, 1000 - (this.clock() - this.lastMutation)));
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), Math.min(this.requestTimeoutMs, this.remaining()));
    let sent = false;
    try {
      sent = true;
      if (method !== 'GET') this.lastMutation = this.clock();
      const response = await abortable(this.fetchImpl(url.href, { method, redirect: 'manual', signal: controller.signal,
        headers: { Accept: 'application/vnd.github+json', Authorization: 'Bearer ' + this.token,
          'X-GitHub-Api-Version': '2022-11-28', 'Content-Type': 'application/json', 'User-Agent': 'sdd-manager-forge-close' },
        ...(body === undefined ? {} : { body: JSON.stringify(body) }) }), controller.signal);
      const chunks = []; let size = 0;
      if (response.body) {
        const reader = response.body.getReader(); let finished = false;
        try {
          for (;;) {
            const item = await abortable(reader.read(), controller.signal);
            if (item.done) { finished = true; break; }
            size += item.value.byteLength;
            if (size > MAX_RESPONSE) fail('response_too_large', 'transport');
            chunks.push(item.value);
          }
        } finally {
          // A tee/foreign stream can leave cancel pending on its other reader.
          // Do not let cleanup renew the operation budget or conceal uncertainty.
          if (!finished) void reader.cancel().catch(() => {});
          reader.releaseLock();
        }
      }
      let rawBody;
      try { rawBody = new TextDecoder('utf-8', { fatal: true }).decode(Buffer.concat(chunks)); }
      catch { fail('invalid_response', 'transport'); }
      if (!response.ok) {
        const rate = response.status === 429 || (response.status === 403 && (response.headers.get('retry-after')
          || response.headers.get('x-ratelimit-remaining') === '0' || /secondary rate limit/i.test(rawBody)));
        let delay = 0;
        if (rate) {
          const after = response.headers.get('retry-after'), reset = response.headers.get('x-ratelimit-reset');
          if (after) delay = /^\d+$/.test(after) ? Number(after) * 1000 : Math.max(0, Date.parse(after) - Date.now());
          if (response.headers.get('x-ratelimit-remaining') === '0' && /^\d+$/.test(reset || '')) delay = Math.max(delay, Number(reset) * 1000 - Date.now());
          if (!Number.isFinite(delay) || delay <= 0) delay = 60000;
        }
        const identifier = response.headers.get('x-github-request-id');
        fail(rate ? 'rate_limited' : response.status === 401 ? 'authentication_failed'
          : response.status === 403 ? 'access_or_policy_denied' : response.status === 404 ? 'access_or_missing'
            : response.status >= 300 && response.status < 400 ? 'redirect_rejected'
              : response.status >= 500 ? 'service_unavailable' : 'request_rejected', 'transport', {
          http_status: response.status, uncertain: method !== 'GET' && response.status >= 500,
          retryable: rate || response.status >= 500, delay,
          ...(rate && delay < 8e15 - Date.now() ? { retry_at: new Date(Date.now() + delay).toISOString() } : {}),
          ...(identifier && /^[a-zA-Z0-9:-]{1,128}$/.test(identifier) ? { request_id: identifier } : {}),
        });
      }
      if (response.status !== (method === 'POST' ? 201 : 200)) fail('unexpected_status', 'transport');
      let data;
      try { data = JSON.parse(rawBody); } catch { fail('invalid_response', 'transport'); }
      return { data, link: response.headers.get('link') };
    } catch (error) {
      if (error instanceof ForgeError) {
        if (method !== 'GET' && sent && error.uncertain === undefined) error.uncertain = true;
        throw error;
      }
      throw new ForgeError(controller.signal.aborted ? 'request_timeout' : 'transport_failed', 'transport',
        { uncertain: method !== 'GET' && sent, retryable: true });
    } finally { clearTimeout(timer); }
  }
  /** Issue one exact request, with bounded retries only for safe reads. */
  async request(method, raw, body) {
    for (let attempt = 0; ; attempt++) {
      try { return await this.once(method, raw, body); }
      catch (error) {
        if (error instanceof ForgeError) error.attempts = attempt + 1;
        if (!(error instanceof ForgeError) || method !== 'GET' || !error.retryable || attempt === 3) throw error;
        const delay = error.delay || 100 * 2 ** attempt;
        if (delay >= this.remaining()) throw error;
        await this.wait(delay, error.code, error.retry_at);
        this.readRetries++;
        if (this.retryFailures.length < 8) this.retryFailures.push({ code: error.code, ...(error.http_status ? { http_status: error.http_status } : {}) });
      }
    }
  }
  /** Exhaust a bounded collection; incomplete pages never imply absence. */
  async list(suffix, params = {}) {
    const first = this.target(suffix); first.search = new URLSearchParams({ ...params, per_page: '100' }).toString();
    let url = first, page = 1; const seen = new Set(), ids = new Set(), result = [];
    for (;;) {
      if (page > MAX_PAGES || seen.has(url.href)) fail('pagination_incomplete', 'lookup');
      seen.add(url.href);
      const response = await this.request('GET', url.href);
      if (!Array.isArray(response.data)) fail('invalid_response', 'lookup');
      for (const item of response.data) {
        if (!item || !positive(item.id) || ids.has(item.id)) fail('pagination_conflict', 'lookup');
        ids.add(item.id); result.push(item);
      }
      if (!response.link) return result;
      const entries = response.link.split(',').map(item => item.trim());
      const next = [];
      for (const entry of entries) {
        const match = entry.match(/^<([^>]+)>;\s*rel="([^"]+)"$/);
        if (!match) fail('invalid_pagination', 'lookup');
        if (match[2].split(' ').includes('next')) next.push(match[1]);
      }
      if (!next.length) return result;
      if (next.length !== 1) fail('invalid_pagination', 'lookup');
      const candidate = this.target(next[0]); page++;
      const strip = value => {
        const copy = new URL(value); copy.searchParams.delete('page');
        return [...copy.searchParams].sort().map(pair => pair.join('=')).join('&');
      };
      const suffixOf = value => value.pathname.replace(/^\/(?:repos\/[^/]+\/[^/]+|repositories\/\d+)/, '');
      if (candidate.searchParams.getAll('page').length !== 1 || candidate.searchParams.get('page') !== String(page)
          || suffixOf(candidate) !== suffixOf(first) || strip(candidate) !== strip(first)) fail('invalid_pagination', 'lookup');
      url = candidate;
    }
  }
  /** Bind repository identity before following identity-based page links. */
  async identify() {
    const { data } = await this.request('GET', '');
    if (!data || !positive(data.id) || typeof data.full_name !== 'string' || data.full_name.toLowerCase() !== this.repository) fail('repository_mismatch', 'lookup');
    this.repositoryId = data.id;
  }
}

function managedTask(issue, expected, request) {
  if (!issue || !positive(issue.id) || issue.number !== expected.issue || issue.title !== expected.title
      || issue.pull_request || !['open', 'closed'].includes(issue.state)
      || !Array.isArray(issue.labels) || !issue.labels.some(label => label.name === request.phase_label)
      || issue.milestone?.number !== request.milestone.number || typeof issue.body !== 'string') fail('issue_identity_conflict', 'identity');
  const raw = [...issue.body.matchAll(/<!--\s*(\/?)sdd-forge:task-id=([^>]*?)\s*-->/g)];
  const openings = raw.filter(item => !item[1]), closings = raw.filter(item => item[1]);
  if (openings.length !== 1 || openings[0][2] !== expected.id || closings.length > 1
      || closings.some(item => item[2] !== expected.id || item.index < openings[0].index)) fail('issue_identity_conflict', 'identity');
  // A conservative generated prefix avoids interpreting quoted/fenced/HTML
  // copies as ownership. Other legitimate layouts use the existing backend.
  const opening = issue.body.split(/\r?\n/).find(line => line.trim());
  if (!opening || !/^(?:#{1,6} [^<>\r\n]* )?<!-- sdd-forge:task-id=T-\d{3,} -->\s*$/.test(opening)) fail('issue_identity_conflict', 'identity');
  if (issue.state === 'closed' && issue.state_reason !== 'completed') fail('closure_reason_conflict', 'identity');
}
function managedMilestone(value, expected) {
  if (!value || !positive(value.id) || value.number !== expected.number || value.title !== expected.title
      || value.description !== expected.description || !['open', 'closed'].includes(value.state)
      || !Number.isSafeInteger(value.open_issues) || value.open_issues < 0) fail('milestone_identity_conflict', 'identity');
}
function uniqueMilestone(all, expected) {
  const matches = all.filter(item => typeof item.title === 'string' && item.title.startsWith('sdd-' + expected.id + '-'));
  if (matches.length !== 1) fail('ambiguous_milestone', 'lookup');
  managedMilestone(matches[0], expected); return matches[0];
}
function uniqueIssue(all, expected, request) {
  const marker = new RegExp('sdd-forge:task-id=' + expected.id + '(?=\\s*-->)');
  const matches = all.filter(item => !item.pull_request && (typeof item.title === 'string' && item.title.startsWith('[' + expected.id + ']')
    || typeof item.body === 'string' && marker.test(item.body)));
  if (matches.length !== 1) fail('ambiguous_issue', 'lookup');
  managedTask(matches[0], expected, request); return matches[0];
}
async function freshIssue(client, expected, request, identity) {
  const { data } = await client.request('GET', '/issues/' + expected.issue);
  managedTask(data, expected, request);
  if (identity && data.id !== identity) fail('issue_identity_changed', 'identity');
  return data;
}
async function freshMilestone(client, expected, identity) {
  const { data } = await client.request('GET', '/milestones/' + expected.number);
  managedMilestone(data, expected);
  if (identity && data.id !== identity) fail('milestone_identity_changed', 'identity');
  return data;
}
async function evidence(client, task) {
  const comments = await client.list('/issues/' + task.issue + '/comments');
  if (comments.some(item => typeof item.body !== 'string')) fail('invalid_response', 'evidence');
  const body = evidenceComment(task), marker = body.split('\n')[0];
  const matches = comments.filter(item => item.body.includes(marker));
  if (matches.length > 1 || matches.some(item => item.body !== body)) fail('evidence_conflict', 'evidence');
  return matches[0] || null;
}
function outcome(ok, code, request, operation, effects, details = {}) {
  return { schema_version: 1, ok, code, stage: 'readback', repository: request.repository,
    object: { type: operation, number: operation === 'task' ? request.task.issue : request.milestone.number },
    remote_state: ok ? 'verified' : 'pending', effects: { ...effects }, ...details };
}
function failure(error, effects = {}) {
  const safe = error instanceof ForgeError || error instanceof ProtectedInputError;
  return { schema_version: 1, ok: false, code: safe ? error.code : 'operation_failed', stage: safe ? error.stage : 'preflight',
    remote_state: Object.values(effects).includes('unknown') ? 'unknown' : 'not_verified', effects: { ...effects },
    ...(safe && error.http_status ? { http_status: error.http_status } : {}), ...(safe && error.retry_at ? { retry_at: error.retry_at } : {}),
    ...(safe && error.request_id ? { request_id: error.request_id } : {}),
    ...(safe && Number.isSafeInteger(error.attempts) ? { attempts: error.attempts } : {}) };
}
function containsCredential(value, token) {
  if (typeof value === 'string') return value.includes(token);
  return value && typeof value === 'object' && Object.values(value).some(item => containsCredential(item, token));
}

/**
 * Reconcile one validated caller assertion against bounded hosted state.
 * @param {'task'|'milestone'} operation Completed-closure mode.
 * @param {object} input Full request; eligibility remains the caller's assertion.
 * @param {GitHubClient} client Authorized repository-bound transport.
 * @param {{reconcileOnly?: boolean}} options Read-only recovery when true.
 * @returns {Promise<object>} Versioned safe outcome, including partial/unknown effects.
 */
export async function reconcileClosure(operation, input, client, { reconcileOnly = false } = {}) {
  const effects = { comment: 'not_attempted', closure: 'not_attempted' };
  const audited = value => ({ ...value, read_retries: client.readRetries, retry_failures: [...client.retryFailures] });
  let request, recovered = false;
  try {
    request = validateRequest(input, operation);
    if (client.repository !== request.repository) fail('repository_mismatch', 'preflight');
    if (containsCredential(request, client.token)) fail('credential_in_request', 'preflight');
    await client.identify();
    const milestones = await client.list('/milestones', { state: 'all' });
    const selected = uniqueMilestone(milestones, request.milestone);
    if (operation === 'task') {
      const issues = await client.list('/issues', { state: 'all' });
      const selectedIssue = uniqueIssue(issues, request.task, request);
      let current = await freshIssue(client, request.task, request, selectedIssue.id);
      await freshMilestone(client, request.milestone, selected.id);
      let comment = await evidence(client, request.task);
      if (!comment && reconcileOnly) return audited(outcome(false, 'reconciliation_pending', request, operation, effects));
      if (!comment) {
        await freshIssue(client, request.task, request, selectedIssue.id);
        effects.comment = 'unknown';
        let acknowledged = false;
        try {
          const response = await client.request('POST', '/issues/' + request.task.issue + '/comments', { body: evidenceComment(request.task) });
          if (!positive(response.data?.id) || response.data.body !== evidenceComment(request.task)) fail('invalid_mutation_response', 'evidence', { uncertain: true });
          acknowledged = true;
        }
        catch (error) {
          if (!error.uncertain) { effects.comment = 'not_applied'; throw error; }
          effects.comment = 'unknown'; recovered = true;
        }
        comment = await evidence(client, request.task);
        if (!comment) {
          effects.comment = 'unknown'; fail('comment_outcome_unknown', 'evidence');
        }
        effects.comment = acknowledged ? 'created' : 'observed_after_error';
      } else effects.comment = 'existing';
      current = await freshIssue(client, request.task, request, selectedIssue.id);
      if (current.state === 'open' && reconcileOnly) return audited(outcome(false, 'reconciliation_pending', request, operation, effects));
      if (current.state === 'open') {
        effects.closure = 'unknown';
        try {
          const response = await client.request('PATCH', '/issues/' + request.task.issue, { state: 'closed', state_reason: 'completed' });
          managedTask(response.data, request.task, request);
        }
        catch (error) {
          if (error instanceof ForgeError && error.stage === 'identity') error.uncertain = true;
          if (!error.uncertain) { effects.closure = 'not_applied'; throw error; }
          effects.closure = 'unknown'; recovered = true;
        }
      } else effects.closure = 'existing';
      current = await freshIssue(client, request.task, request, selectedIssue.id);
      if (current.state !== 'closed') {
        effects.closure = 'unknown'; fail('closure_outcome_unknown', 'readback');
      }
      if (!await evidence(client, request.task)) fail('evidence_missing', 'readback');
      if (effects.closure === 'unknown') effects.closure = recovered ? 'observed_after_error' : 'changed';
    } else {
      const issues = await client.list('/issues', { milestone: String(request.milestone.number), state: 'all' });
      if (issues.length !== request.tasks.length || issues.some(item => item.pull_request)) fail('milestone_membership_conflict', 'eligibility');
      for (const task of request.tasks) {
        const issue = uniqueIssue(issues, task, request);
        const current = await freshIssue(client, task, request, issue.id);
        if (current.state !== 'closed' || !await evidence(client, task)) fail('task_completion_missing', 'eligibility');
      }
      for (const predecessor of request.predecessors) {
        const item = uniqueMilestone(milestones, predecessor);
        const current = await freshMilestone(client, predecessor, item.id);
        if (current.state !== 'closed' || current.open_issues !== 0) fail('predecessor_not_closed', 'eligibility');
      }
      let current = await freshMilestone(client, request.milestone, selected.id);
      if (current.open_issues !== 0) fail('milestone_has_open_issues', 'eligibility');
      if (current.state === 'open' && reconcileOnly) return audited(outcome(false, 'reconciliation_pending', request, operation, effects));
      if (current.state === 'open') {
        effects.closure = 'unknown';
        try {
          const response = await client.request('PATCH', '/milestones/' + current.number, { state: 'closed' });
          managedMilestone(response.data, request.milestone);
        }
        catch (error) {
          if (error instanceof ForgeError && error.stage === 'identity') error.uncertain = true;
          if (!error.uncertain) { effects.closure = 'not_applied'; throw error; }
          effects.closure = 'unknown'; recovered = true;
        }
      } else effects.closure = 'existing';
      current = await freshMilestone(client, request.milestone, selected.id);
      if (current.state !== 'closed' || current.open_issues !== 0) {
        effects.closure = 'unknown'; fail('closure_outcome_unknown', 'readback');
      }
      const after = await client.list('/issues', { milestone: String(request.milestone.number), state: 'all' });
      if (after.length !== issues.length || after.some(item => !issues.some(before => before.id === item.id))) fail('milestone_membership_changed', 'readback');
      for (const task of request.tasks) {
        const item = uniqueIssue(after, task, request);
        if (item.state !== 'closed' || !await evidence(client, task)) fail('task_completion_changed', 'readback');
      }
      effects.comment = 'not_needed';
      if (effects.closure === 'unknown') effects.closure = recovered ? 'observed_after_error' : 'changed';
    }
    return audited(outcome(true, recovered ? 'verified_after_error' : effects.closure === 'existing' && ['existing', 'not_needed'].includes(effects.comment) ? 'already_verified' : 'closed_verified', request, operation, effects));
  } catch (error) {
    const result = failure(error, effects);
    if (request) Object.assign(result, { repository: request.repository, object: { type: operation, number: operation === 'task' ? request.task.issue : request.milestone.number } });
    return audited(result);
  }
}

function remoteRepository(value) {
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
function requestFile(filename) {
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
function acquireLock(common) {
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

/**
 * Execute an explicit CLI-equivalent scope with real local protection/locking.
 * @param {object} options parseCli output; programmatic callers use the same fields.
 * @param {{fetchImpl?: Function}} dependencies Optional controlled HTTP transport.
 * @returns {Promise<object>} Safe outcome. Pre-lock invalid local scope may throw.
 */
export async function run(options, { fetchImpl } = {}) {
  if (Number(process.versions.node.split('.')[0]) < 22) fail('node_22_required');
  const parsed = parseCli([options.operation, '--repo', options.repo, '--remote', options.remote, '--request', options.requestFile,
    '--token-file', options.tokenFile || 'gh.tkn', '--timeout-ms', String(options.timeoutMs ?? 60000),
    '--request-timeout-ms', String(options.requestTimeoutMs ?? 15000), ...(options.reconcileOnly ? ['--reconcile-only'] : [])]);
  const request = validateRequest(requestFile(parsed.requestFile), parsed.operation);
  const repo = fs.realpathSync(parsed.repo), started = performance.now(), env = childEnv();
  const remainingMs = () => parsed.timeoutMs - (performance.now() - started);
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
  const urls = checked(['remote', 'get-url', '--push', '--all', parsed.remote]).split(/\r?\n/);
  if (urls.length !== 1 || remoteRepository(urls[0]) !== request.repository) fail('destination_mismatch');
  for (const branch of new Set((parsed.operation === 'task' ? [request.task] : request.tasks).map(item => item.branch))) checked(['check-ref-format', '--branch', branch]);
  const common = fs.realpathSync(path.resolve(repo, checked(['rev-parse', '--git-common-dir'])));
  const release = acquireLock(common);
  let result;
  try {
    const token = readToken(repo, parsed.tokenFile, git, process.platform, { remainingMs });
    const remaining = parsed.timeoutMs - (performance.now() - started);
    if (remaining <= 0) fail('deadline_exceeded');
    const client = new GitHubClient({ repository: request.repository, token, timeoutMs: remaining, requestTimeoutMs: parsed.requestTimeoutMs, ...(fetchImpl ? { fetchImpl } : {}) });
    result = await reconcileClosure(parsed.operation, request, client, { reconcileOnly: parsed.reconcileOnly });
  } catch (error) { result = failure(error); }
  finally {
    try { release(); }
    catch { result = { ...result, ok: false, code: 'lock_cleanup_failed', stage: 'lock', lock: 'retained' }; }
  }
  return result;
}

// File identity handles native Windows case/short-path main-entry spellings.
let main = false;
try {
  if (process.argv[1]) {
    const left = fs.statSync(process.argv[1]), right = fs.statSync(fileURLToPath(import.meta.url));
    main = left.dev === right.dev && left.ino === right.ino;
  }
} catch {}
if (main) {
  (async () => {
    const options = parseCli(process.argv.slice(2));
    if (options.help) { process.stdout.write(USAGE + '\n'); return; }
    const result = await run(options);
    process.stdout.write(JSON.stringify(result) + '\n');
    process.exitCode = result.ok ? 0 : ['unknown', 'pending'].includes(result.remote_state) ? 2 : 1;
  })().catch(error => { process.stdout.write(JSON.stringify(failure(error)) + '\n'); process.exitCode = 1; });
}
