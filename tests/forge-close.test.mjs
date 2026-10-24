/** Synthetic closure contracts; no real token or provider mutation. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { parseCli, validateRequest, evidenceComment, GitHubClient, reconcileClosure, run } from '../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/forge-close.mjs';

const script = fileURLToPath(new URL('../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/forge-close.mjs', import.meta.url));
const repository = 'example-owner/example-project';
const commit = 'a'.repeat(40);
const common = () => ({
  schema_version: 1, repository, phase_label: 'sdd-phase-1-Delivery',
  milestone: { id: '1.1', number: 7, title: 'sdd-1.1-Core', description: 'Synthetic milestone.' },
  eligibility: { tracking: true, verified: true, published: true, exclusive: true },
});
const task = () => ({ id: 'T-001', issue: 10, title: '[T-001] Core', commit, branch: 'phase/1-core', verification: 'Unit checks passed.', report: null });
const request = () => ({ ...common(), task: task() });
const expectedEvidence = (value = task()) => '<!-- sdd-forge:completion task=' + value.id + ' commit=' + value.commit + ' -->\nTask: ' + value.id + '\nCommit: ' + value.commit + '\nBranch: ' + value.branch + '\nVerification:\n' + value.verification + '\nReport: ' + (value.report || 'None');
const hostedIssue = (value = task(), extra = {}) => ({
  id: value.issue + 1000, number: value.issue, title: value.title,
  body: '## Task brief <!-- sdd-forge:task-id=' + value.id + ' -->\nWork.\n<!-- /sdd-forge:task-id=' + value.id + ' -->',
  state: 'open', state_reason: null, labels: [{ name: common().phase_label }],
  milestone: { number: 7 }, ...extra,
});

function fixture() {
  const state = {
    issues: [hostedIssue()], additional: [], milestones: [{ ...common().milestone, id: 700, state: 'open', open_issues: 0 }],
    comments: new Map([[10, []]]), calls: [], hook: null, time: 0,
  };
  state.fetch = async (raw, options = {}) => {
    const url = new URL(raw);
    assert.equal(url.origin, 'https://api.github.com');
    assert.equal(options.headers.Authorization, 'Bearer synthetic-fixture');
    const suffix = url.pathname.replace('/repos/' + repository, '');
    const method = options.method || 'GET';
    const body = options.body ? JSON.parse(options.body) : undefined;
    state.calls.push({ method, suffix, query: url.search });
    if (state.hook) {
      const response = await state.hook({ url, suffix, method, body, options });
      if (response !== undefined) return response;
    }
    let value;
    if (suffix === '') value = { id: 123, full_name: repository };
    else if (suffix === '/milestones') value = state.milestones;
    else if (suffix === '/issues') value = state.issues;
    else if (/^\/issues\/\d+\/comments$/.test(suffix)) {
      const number = Number(suffix.split('/')[2]);
      const comments = state.comments.get(number) || [];
      state.comments.set(number, comments);
      if (method === 'POST') {
        value = { id: 9000 + comments.length, body: body.body };
        comments.push(value);
      } else value = comments;
    } else if (/^\/issues\/\d+$/.test(suffix)) {
      value = [...state.issues, ...state.additional].find(item => item.number === Number(suffix.split('/')[2]));
      if (method === 'PATCH') Object.assign(value, body);
    } else if (/^\/milestones\/\d+$/.test(suffix)) {
      value = state.milestones.find(item => item.number === Number(suffix.split('/')[2]));
      if (method === 'PATCH') Object.assign(value, body);
    } else assert.fail('Unexpected fixture route: ' + suffix);
    assert.notEqual(value, undefined);
    return Response.json(value, { status: method === 'POST' ? 201 : 200 });
  };
  state.client = (extra = {}) => new GitHubClient({
    repository, token: 'synthetic-fixture', timeoutMs: 10000, requestTimeoutMs: 1000,
    fetchImpl: state.fetch, clock: () => state.time, sleep: async ms => { state.time += ms; }, ...extra,
  });
  return state;
}
const close = (state, value = request(), options = {}) => reconcileClosure('task', value, state.client(), options);
const writes = state => state.calls.filter(call => call.method !== 'GET');

test('import and help are harmless; CLI rejects missing/duplicate/unknown scope', () => {
  assert.deepEqual(parseCli(['--help']), { help: true });
  for (const args of [[], ['other'], ['task'], ['task', '--repo', '.', '--repo', '.'], ['task', '--unknown', 'x']]) assert.throws(() => parseCli(args));
  const result = spawnSync(process.execPath, [script, '--help'], { encoding: 'utf8', cwd: os.tmpdir() });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /reconcile-only/);
});

test('strict schema, eligibility, IDs, evidence and milestone gates validate before requests', () => {
  assert.equal(validateRequest(request(), 'task').task.id, 'T-001');
  const values = [
    { ...request(), extra: true },
    { ...request(), schema_version: 2 },
    { ...request(), repository: 'https://example.invalid/repo' },
    { ...request(), eligibility: { ...common().eligibility, published: false } },
    { ...request(), task: { ...task(), verification: '' } },
    { ...request(), task: { ...task(), report: '../outside.md' } },
    { ...request(), task: { ...task(), id: 'T-001\nx' } },
  ];
  for (const value of values) assert.throws(() => validateRequest(value, 'task'));
  assert.equal(evidenceComment(task()), expectedEvidence());
});

test('Windows CRLF verification summaries normalize to deterministic LF evidence', async () => {
  const value = request(); value.task.verification = 'First check passed.\r\nSecond check passed.';
  const normalized = validateRequest(value, 'task');
  assert.equal(normalized.task.verification, 'First check passed.\nSecond check passed.');
  const state = fixture();
  assert.equal((await close(state, value)).ok, true);
  assert.ok(!state.comments.get(10)[0].body.includes('\r'));
});

test('a credential accidentally included in request content is blocked before network', async () => {
  const state = fixture(); const value = request();
  value.task.verification = 'Accidental synthetic-fixture inclusion';
  const result = await close(state, value);
  assert.equal(result.ok, false);
  assert.equal(state.calls.length, 0);
  assert.ok(!JSON.stringify(result).includes('synthetic-fixture'));
});

test('task closure verifies exact comment/reason; matching rerun performs no writes', async () => {
  const state = fixture();
  let result = await close(state);
  assert.equal(result.ok, true, JSON.stringify(result));
  assert.equal(state.issues[0].state_reason, 'completed');
  assert.deepEqual(state.comments.get(10).map(item => item.body), [expectedEvidence()]);
  const count = writes(state).length;
  result = await close(state);
  assert.equal(result.ok, true);
  assert.equal(result.code, 'already_verified');
  assert.equal(writes(state).length, count);
});

test('changed parent milestone prevents a successful final task claim', async () => {
  const state = fixture();
  state.hook = ({ method }) => { if (method === 'PATCH') state.milestones[0].title = 'sdd-1.1-Changed'; };
  assert.equal((await close(state)).ok, false);
  assert.equal(state.issues[0].state, 'closed');
});

test('mutation pacing cannot start a write after the overall budget expires', async () => {
  const state = fixture();
  const client = state.client({ timeoutMs: 1500, sleep: async () => { state.time += 2000; } });
  const result = await reconcileClosure('task', request(), client);
  assert.equal(result.ok, false);
  assert.equal(state.calls.filter(call => call.method === 'PATCH').length, 0);
  assert.equal(state.comments.get(10).length, 1);
});

test('conflicting, missing, quoted/fenced/duplicate task markers never close an issue', async () => {
  const bodies = [
    'No managed marker',
    '<!-- sdd-forge:task-id=T-002 -->',
    '> <!-- sdd-forge:task-id=T-001 -->',
    '~~~\n<!-- sdd-forge:task-id=T-001 -->\n~~~',
    '<!-- sdd-forge:task-id=T-001 -->\n<!-- sdd-forge:task-id=T-001 -->',
  ];
  for (const body of bodies) {
    const state = fixture(); state.issues[0].body = body;
    assert.equal((await close(state)).ok, false);
    assert.equal(writes(state).length, 0);
  }
});

test('HTML-wrapped or improperly closed fenced identity is not a managed opening', async () => {
  for (const body of [
    '<pre>\n<!-- sdd-forge:task-id=T-001 -->\n</pre>',
    '~~~\n~~~not a closing fence\n<!-- sdd-forge:task-id=T-001 -->',
  ]) {
    const state = fixture(); state.issues[0].body = body;
    assert.equal((await close(state)).ok, false);
    assert.equal(writes(state).length, 0);
  }
});

test('task ID prefixes do not collide with longer IDs', async () => {
  const state = fixture();
  state.issues.push(hostedIssue({ ...task(), id: 'T-0010', issue: 11, title: '[T-0010] Other' }));
  assert.equal((await close(state)).ok, true);
  assert.equal(state.issues[1].state, 'open');
});

test('wrong phase/milestone, issue number, title and closure reason are blocked', async () => {
  for (const extra of [{ labels: [] }, { milestone: null }, { number: 11 }, { title: '[T-001] Changed' }, { state: 'closed', state_reason: 'not_planned' }]) {
    const state = fixture(); Object.assign(state.issues[0], extra);
    assert.equal((await close(state)).ok, false);
    assert.equal(writes(state).length, 0);
  }
});

test('complete pagination finds later-page issues and detects hidden duplicates', async () => {
  for (const duplicate of [false, true]) {
    const state = fixture(); const match = state.issues[0]; state.additional = [match];
    state.issues = duplicate ? [match] : [];
    state.hook = ({ suffix, url }) => {
      if (suffix !== '/issues') return;
      if (url.searchParams.get('page') === '2') return Response.json([duplicate ? { ...match, id: 2222, number: 12 } : match]);
      return Response.json(state.issues, { headers: { Link: '<https://api.github.com/repos/' + repository + '/issues?state=all&per_page=100&page=2>; rel="next"' } });
    };
    const result = await close(state);
    assert.equal(result.ok, !duplicate, JSON.stringify(result));
    if (duplicate) assert.equal(writes(state).length, 0);
  }
});

test('foreign/cyclic/filter-changing pagination and duplicate page objects block writes', async () => {
  for (const next of [
    'https://example.invalid/issues?page=2',
    'https://api.github.com/repos/other/project/issues?state=all&per_page=100&page=2',
    'https://api.github.com/repos/' + repository + '/issues?state=open&per_page=100&page=2',
    'https://api.github.com/repos/' + repository + '/issues?state=all&per_page=100&page=1',
  ]) {
    const state = fixture();
    state.hook = ({ suffix }) => suffix === '/issues' ? Response.json(state.issues, { headers: { Link: '<' + next + '>; rel="next"' } }) : undefined;
    assert.equal((await close(state)).ok, false);
    assert.equal(writes(state).length, 0);
  }
});

test('pagination compares decoded query entries without delimiter collisions', async () => {
  const state = fixture();
  state.hook = ({ url }) => url.searchParams.has('page')
    ? Response.json([{ id: 2 }])
    : Response.json([{ id: 1 }], { headers: {
      Link: '<https://api.github.com/repos/' + repository + '/issues?per_page=100%26state%3Dall&page=2>; rel="next"',
    } });
  await assert.rejects(state.client().list('/issues', { state: 'all' }), { code: 'invalid_pagination' });
  assert.equal(state.calls.length, 1);
});

test('duplicate/conflicting evidence blocks; ordinary unrelated comments are preserved', async () => {
  for (const bodies of [[expectedEvidence(), expectedEvidence()], [expectedEvidence() + '\nChanged']]) {
    const state = fixture(); state.comments.set(10, bodies.map((body, index) => ({ id: index + 1, body })));
    assert.equal((await close(state)).ok, false);
    assert.equal(writes(state).length, 0);
  }
  const state = fixture(); state.comments.set(10, [{ id: 1, body: 'Human discussion.' }]);
  assert.equal((await close(state)).ok, true);
  assert.equal(state.comments.get(10)[0].body, 'Human discussion.');
});

test('later-page evidence is reused and confirmed numeric-repository pagination is accepted', async () => {
  const state = fixture();
  state.hook = ({ suffix, url }) => {
    if (suffix === '/issues/10/comments') {
      if (url.searchParams.get('page') === '2') return Response.json([{ id: 99, body: expectedEvidence() }]);
      return Response.json([], { headers: { Link: '<https://api.github.com/repositories/123/issues/10/comments?per_page=100&page=2>; rel="next"' } });
    }
    if (url.pathname === '/repositories/123/issues/10/comments') return Response.json([{ id: 99, body: expectedEvidence() }]);
  };
  assert.equal((await close(state)).ok, true);
  assert.equal(state.calls.filter(call => call.method === 'POST').length, 0);
});

test('applied-but-disconnected comment is read back and not duplicated', async () => {
  const state = fixture(); let dropped = false;
  state.hook = ({ suffix, method, body }) => {
    if (!dropped && suffix.endsWith('/comments') && method === 'POST') {
      dropped = true; state.comments.get(10).push({ id: 90, body: body.body });
      throw new Error('Synthetic lost response');
    }
  };
  assert.equal((await close(state)).ok, true);
  assert.equal(state.comments.get(10).length, 1);
  assert.equal((await close(state)).ok, true);
  assert.equal(state.comments.get(10).length, 1);
});

test('unobserved comment effect remains unknown; reconcile-only never replays a write', async () => {
  const state = fixture();
  state.hook = ({ method }) => { if (method === 'POST') throw new Error('Synthetic lost response'); };
  const result = await close(state);
  assert.equal(result.ok, false);
  assert.equal(result.effects.comment, 'unknown');
  const count = writes(state).length;
  const again = await close(state, request(), { reconcileOnly: true });
  assert.equal(again.ok, false);
  assert.equal(writes(state).length, count);
});

test('applied-but-disconnected PATCH is verified; unavailable readback preserves uncertainty', async () => {
  for (const unavailable of [false, true]) {
    const state = fixture(); let changed = false;
    state.hook = ({ suffix, method, body }) => {
      if (method === 'PATCH') { Object.assign(state.issues[0], body); changed = true; throw new Error('Synthetic lost response'); }
      if (unavailable && changed && suffix === '/issues/10') return Response.json({}, { status: 503 });
    };
    const result = await close(state);
    assert.equal(result.ok, !unavailable, JSON.stringify(result));
    if (unavailable) assert.equal(result.effects.closure, 'unknown');
    assert.equal(state.calls.filter(call => call.method === 'PATCH').length, 1);
  }
});

function milestoneRequest() {
  const review = { ...task(), id: 'T-002', issue: 11, title: '[T-002] Review', commit: 'b'.repeat(40), report: 'docs/dev/reports/phases/1/1.1.md' };
  return { ...common(), kind: 'delivery', tasks: [task(), review], review_task: review.id, report: review.report, predecessors: [] };
}
function milestoneFixture(value = milestoneRequest()) {
  const state = fixture();
  state.issues = value.tasks.map(item => hostedIssue(item, { state: 'closed', state_reason: 'completed' }));
  for (const item of value.tasks) state.comments.set(item.issue, [{ id: item.issue + 8000, body: expectedEvidence(item) }]);
  return state;
}

test('milestone closes only with exact complete completed issue/evidence set and review/report input', async () => {
  const value = milestoneRequest(); const state = milestoneFixture(value);
  const result = await reconcileClosure('milestone', value, state.client());
  assert.equal(result.ok, true, JSON.stringify(result));
  assert.equal(state.milestones[0].state, 'closed');
  assert.equal(state.calls.filter(call => call.method === 'POST').length, 0);
});

test('delivery milestone closure accepts its final implementation task as the report owner', async () => {
  const final = { ...task(), report: 'docs/dev/reports/phases/1/1.1.md' };
  const value = { ...common(), kind: 'delivery', tasks: [final], review_task: final.id, report: final.report, predecessors: [] };
  const state = milestoneFixture(value);
  const result = await reconcileClosure('milestone', value, state.client());
  assert.equal(result.ok, true, JSON.stringify(result));
  assert.equal(state.milestones[0].state, 'closed');
  assert.equal(state.issues.length, 1);
  assert.equal(state.calls.filter(call => call.method === 'POST').length, 0);
  const missing = structuredClone(value); missing.tasks[0].report = null;
  assert.throws(() => validateRequest(missing, 'milestone'), error => error.code === 'review_report_missing');
});

test('empty/missing/foreign/PR/open/retired milestone members cannot close', async () => {
  for (const change of [
    state => { state.issues = []; },
    state => state.issues.pop(),
    state => state.issues.push(hostedIssue({ ...task(), id: 'T-003', issue: 12, title: '[T-003] Foreign' })),
    state => { state.issues[0].pull_request = {}; },
    state => { state.issues[0].state = 'open'; },
    state => { state.issues[0].state_reason = 'not_planned'; },
  ]) {
    const value = milestoneRequest(); const state = milestoneFixture(value); change(state);
    assert.equal((await reconcileClosure('milestone', value, state.client())).ok, false);
    assert.equal(writes(state).length, 0);
  }
  assert.throws(() => validateRequest({ ...milestoneRequest(), tasks: [] }, 'milestone'));
});

test('phase review requires one review task and closed expected predecessor milestones', async () => {
  const base = milestoneRequest(); const value = { ...base, kind: 'phase-review', tasks: [base.tasks[1]], predecessors: [{ id: '1.2', number: 8, title: 'sdd-1.2-Prior', description: null }] };
  for (const priorState of ['open', 'closed']) {
    const state = milestoneFixture(value);
    state.milestones.push({ ...value.predecessors[0], id: 800, state: priorState, open_issues: 0 });
    assert.equal((await reconcileClosure('milestone', value, state.client())).ok, priorState === 'closed');
  }
});

test('phase-review readback detects a predecessor reopened during closure', async () => {
  const base = milestoneRequest();
  const value = { ...base, kind: 'phase-review', tasks: [base.tasks[1]], predecessors: [{ id: '1.2', number: 8, title: 'sdd-1.2-Prior', description: null }] };
  const state = milestoneFixture(value);
  state.milestones.push({ ...value.predecessors[0], id: 800, state: 'closed', open_issues: 0 });
  state.hook = ({ method }) => { if (method === 'PATCH') state.milestones[1].state = 'open'; };
  assert.equal((await reconcileClosure('milestone', value, state.client())).ok, false);
  assert.equal(state.milestones[0].state, 'closed');
});

test('rate limits defer safely; errors omit provider body and credential data', async () => {
  const state = fixture();
  state.hook = () => Response.json({ message: 'private synthetic provider text' }, { status: 429, headers: { 'Retry-After': '3600' } });
  const result = await close(state);
  assert.equal(result.ok, false);
  assert.equal(result.code, 'rate_limited');
  assert.equal(result.http_status, 429);
  assert.ok(result.retry_at);
  assert.ok(!JSON.stringify(result).includes('private synthetic'));
  assert.ok(!JSON.stringify(result).includes('synthetic-fixture'));
  assert.equal(state.calls.length, 1);
});

test('successful safe-read retry retains sanitized prior failure evidence', async () => {
  const state = fixture(); let first = true;
  state.hook = ({ suffix }) => {
    if (!suffix && first) { first = false; return Response.json({ message: 'private failure body' }, { status: 503 }); }
  };
  const result = await close(state);
  assert.equal(result.ok, true);
  assert.equal(result.read_retries, 1);
  assert.equal(result.retry_failures[0].code, 'service_unavailable');
  assert.ok(!JSON.stringify(result).includes('private failure body'));
});

test('transport cannot create objects, reopen work or post unrelated content', async () => {
  for (const [method, suffix, body] of [
    ['POST', '/issues', { title: 'Unexpected creation' }],
    ['PATCH', '/issues/10', { state: 'open' }],
    ['PATCH', '/milestones/7', { state: 'closed', title: 'Changed' }],
    ['POST', '/issues/10/comments', { body: 'Unrelated discussion' }],
  ]) {
    const state = fixture();
    await assert.rejects(state.client().request(method, suffix, body));
    assert.equal(state.calls.length, 0);
  }
});

test('redirect, malformed response and failed identity readback never become successful closure', async () => {
  for (const response of [new Response(null, { status: 301, headers: { Location: 'https://example.invalid' } }), new Response('not JSON')]) {
    const state = fixture(); state.hook = () => response.clone();
    assert.equal((await close(state)).ok, false);
    assert.equal(writes(state).length, 0);
  }
});

test('stalled native response body is cancelled within the selected request budget', async t => {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write('{"id":123,');
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => { server.closeAllConnections(); server.close(); });
  const port = server.address().port;
  const fetchImpl = (url, options) => fetch('http://127.0.0.1:' + port + new URL(url).pathname,
    { ...options, headers: { Accept: 'application/json' } });
  const started = performance.now();
  const state = fixture();
  const result = await reconcileClosure('task', request(),
    new GitHubClient({ repository, token: 'synthetic-fixture', timeoutMs: 150, requestTimeoutMs: 40, fetchImpl }));
  assert.equal(result.ok, false);
  assert.ok(['request_timeout', 'deadline_exceeded'].includes(result.code), JSON.stringify(result));
  assert.ok(performance.now() - started < 2000);
});

test('oversized and invalid UTF-8 responses stop lookup without exposing their bodies', async () => {
  for (const response of [
    new Response(' '.repeat(8 * 1024 * 1024 + 1)),
    new Response(Buffer.concat([Buffer.from('{"id":123,"full_name":"' + repository + '","extra":"'), Buffer.from([255]), Buffer.from('"}')])),
  ]) {
    const state = fixture(); state.hook = () => response.clone();
    const result = await close(state);
    assert.equal(result.ok, false);
    assert.equal(writes(state).length, 0);
  }
});

test('acknowledged comment with unavailable readback retains an unknown evidence outcome', async () => {
  const state = fixture(); let posted = false;
  state.hook = ({ suffix, method }) => {
    if (method === 'POST') posted = true;
    else if (posted && suffix.endsWith('/comments')) return Response.json({}, { status: 503 });
  };
  const result = await close(state);
  assert.equal(result.ok, false);
  assert.equal(result.effects.comment, 'unknown');
  assert.equal(state.calls.filter(call => call.method === 'POST').length, 1);
});

function git(root, ...args) {
  const result = spawnSync('git', ['-C', root, ...args], { encoding: 'utf8', windowsHide: true });
  assert.equal(result.status, 0, result.stderr);
  return result.stdout.trim();
}
function localRepo(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'sdd-forge-空 格-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  git(root, 'init', '-q'); git(root, 'remote', 'add', 'origin', 'git@github.com:' + repository + '.git');
  fs.writeFileSync(path.join(root, '.gitignore'), '*.tkn\n');
  const token = path.join(root, 'gh.tkn'); fs.writeFileSync(token, 'synthetic-fixture');
  const filename = path.join(root, 'request 空.json');
  fs.writeFileSync(filename, '\ufeff' + JSON.stringify(request()));
  return { root, filename, token, options: { operation: 'task', repo: root, remote: 'origin', requestFile: filename, tokenFile: 'gh.tkn', timeoutMs: 10000, requestTimeoutMs: 1000, reconcileOnly: false } };
}

test('ordinary readable token, real Git/root, Unicode/BOM request and local lock cleanup work natively', async t => {
  const local = localRepo(t); const state = fixture();
  if (process.platform !== 'win32') fs.chmodSync(local.token, 0o644);
  const result = await run(local.options, { fetchImpl: state.fetch });
  assert.equal(result.ok, true, JSON.stringify(result));
  assert.ok(!fs.existsSync(path.join(local.root, '.git', 'sdd-forge-close.lock')));
  assert.equal(git(local.root, 'remote', 'get-url', 'origin'), 'git@github.com:' + repository + '.git');
});

test('wrong target, tracked token and existing lock block before network', async t => {
  const local = localRepo(t); let calls = 0;
  const fetchImpl = async () => { calls++; throw new Error('Network must not run'); };
  git(local.root, 'remote', 'set-url', 'origin', 'https://github.com/other/project.git');
  await assert.rejects(run(local.options, { fetchImpl }));
  git(local.root, 'remote', 'set-url', 'origin', 'https://github.com/' + repository + '.git');
  const lock = path.join(local.root, '.git', 'sdd-forge-close.lock'); fs.mkdirSync(lock);
  await assert.rejects(run(local.options, { fetchImpl }));
  fs.rmdirSync(lock);
  git(local.root, 'add', '-f', 'gh.tkn');
  const result = await run(local.options, { fetchImpl });
  assert.equal(result.ok, false);
  assert.equal(calls, 0);
  assert.ok(!fs.existsSync(lock));
});

test('linked Git worktrees share the same exclusive operation lock', async t => {
  const local = localRepo(t);
  git(local.root, 'config', 'user.name', 'Fixture'); git(local.root, 'config', 'user.email', 'fixture@example.invalid');
  git(local.root, 'add', '.gitignore'); git(local.root, 'commit', '-qm', 'fixture');
  const linked = path.join(local.root, 'linked worktree');
  git(local.root, 'worktree', 'add', '-q', '-b', 'linked-fixture', linked);
  const lock = path.join(local.root, '.git', 'sdd-forge-close.lock'); fs.mkdirSync(lock);
  await assert.rejects(run({ ...local.options, repo: linked }), error => error.code === 'operation_busy');
  assert.ok(fs.existsSync(lock));
});

test('non-root input is refused before credential or network work', async t => {
  const local = localRepo(t); const child = path.join(local.root, 'child'); fs.mkdirSync(child);
  await assert.rejects(run({ ...local.options, repo: child }), error => error.code === 'repo_must_be_root');
});


test('contradictory or malformed phase labels block task and milestone completion before writes', async () => {
  const expected = common().phase_label;
  for (const labels of [
    [{ name: expected }, { name: 'sdd-phase-2-Other' }],
    [{ name: expected }, { name: 'SDD-PHASE-2-Other' }],
    [{ name: expected }, { name: expected }],
    [{ name: expected }, null],
    [{ name: expected }, { name: '' }],
  ]) {
    const state = fixture(); state.issues[0].labels = labels;
    const result = await close(state);
    assert.equal(result.code, 'issue_identity_conflict'); assert.equal(writes(state).length, 0);
    const value = milestoneRequest(), milestone = milestoneFixture(value);
    milestone.issues[0].labels = labels;
    const parent = await reconcileClosure('milestone', value, milestone.client());
    assert.equal(parent.code, 'issue_identity_conflict'); assert.equal(writes(milestone).length, 0);
  }
});

test('unrelated labels and explicit custom phase-label conventions survive completion', async () => {
  for (const expected of [common().phase_label, 'project-phase-core']) {
    const state = fixture(), value = request(); value.phase_label = expected;
    state.issues[0].labels = [{ name: expected }, { name: 'team-context' }];
    assert.equal((await close(state, value)).ok, true);
    assert.deepEqual(state.issues[0].labels.map(label => label.name), [expected, 'team-context']);
  }
});

test('a phase conflict on fresh issue readback blocks the first completion write', async () => {
  const state = fixture();
  state.hook = ({ method, suffix }) => {
    if (method === 'GET' && suffix === '/issues/10') state.issues[0].labels.push({ name: 'sdd-phase-2-Other' });
  };
  const result = await close(state);
  assert.equal(result.code, 'issue_identity_conflict'); assert.equal(writes(state).length, 0);
});

test('phase drift after evidence preserves that effect and blocks closure', async () => {
  const state = fixture();
  state.hook = ({ method, suffix }) => {
    if (method === 'GET' && suffix === '/issues/10' && writes(state).length) state.issues[0].labels.push({ name: 'SDD-PHASE-2-Other' });
  };
  const result = await close(state);
  assert.equal(result.code, 'issue_identity_conflict'); assert.equal(result.effects.comment, 'created');
  assert.equal(state.comments.get(10).length, 1); assert.equal(state.issues[0].state, 'open');
  assert.equal(state.calls.filter(call => call.method === 'PATCH').length, 0);
});
