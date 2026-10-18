/**
 * Reproduce review observations with in-memory credential and API fixtures.
 *
 * Only the candidate source is read from disk. Its fs import is replaced with
 * an in-memory fixture in an isolated VM; fetch, console and process are also
 * fixtures. No real token, GitHub request, issue or milestone is involved.
 * These tests assert observed defects as well as one retained safeguard.
 * Passing this file therefore does not mean the candidate is acceptable.
 *
 * Run from any directory: node --test <path-to-this-file>
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../candidates/forge-close.mjs', import.meta.url), 'utf8');
const isolatedSource = source.replace("import fs from 'node:fs';", '');
const base = 'https://api.github.com/repos/pchemguy/SDD-Manager-Demo-Tetris-Hybrid-V1';
const marker = (id) => `<!-- sdd-forge:task-id=${id} -->`;
const issue = (number, id = 'T-001', extra = {}) => ({
  number, title: `[${id}] Synthetic task`, body: marker(id), state: 'open',
  state_reason: null, html_url: `https://example.invalid/issues/${number}`, ...extra,
});
const milestone = (number, extra = {}) => ({
  number, title: 'sdd-1.1-Synthetic', state: 'open', open_issues: 0, ...extra,
});
const clone = (value) => JSON.parse(JSON.stringify(value));

function fixture({ issues = [], issuePage2 = [], milestones = [], milestonePage2 = [], open = [], dropComment = false } = {}) {
  const state = { issues, issuePage2, milestones, milestonePage2, open, comments: [], calls: [], dropComment };
  state.fetch = async (raw, options = {}) => {
    const url = new URL(raw);
    assert.equal(url.origin + url.pathname.split('/').slice(0, 4).join('/'), base);
    const path = url.pathname.slice(new URL(base).pathname.length);
    const method = options.method || 'GET';
    const body = options.body ? JSON.parse(options.body) : null;
    state.calls.push({ method, path, query: url.search, hasSignal: Boolean(options.signal) });
    let data;
    let next;
    if (path === '/issues' && method === 'GET') {
      if (url.searchParams.has('milestone')) data = state.open;
      else {
        data = url.searchParams.get('page') === '2' ? state.issuePage2 : state.issues;
        if (state.issuePage2.length && url.searchParams.get('page') !== '2') next = `${base}/issues?state=all&per_page=100&page=2`;
      }
    } else if (path === '/milestones' && method === 'GET') {
      data = url.searchParams.get('page') === '2' ? state.milestonePage2 : state.milestones;
      if (state.milestonePage2.length && url.searchParams.get('page') !== '2') next = `${base}/milestones?state=all&per_page=100&page=2`;
    } else if (/^\/issues\/\d+\/comments$/.test(path) && method === 'POST') {
      data = { id: state.comments.length + 1, body: body.body };
      state.comments.push(data);
      if (state.dropComment) {
        state.dropComment = false;
        throw new Error('Synthetic connection loss after comment applied');
      }
    } else if (/^\/issues\/\d+$/.test(path)) {
      const found = [...state.issues, ...state.issuePage2].find((item) => item.number === Number(path.split('/')[2]));
      assert.ok(found, 'Issue fixture must exist');
      if (method === 'PATCH') Object.assign(found, body);
      else assert.equal(method, 'GET');
      data = found;
    } else if (/^\/milestones\/\d+$/.test(path)) {
      const found = [...state.milestones, ...state.milestonePage2].find((item) => item.number === Number(path.split('/')[2]));
      assert.ok(found, 'Milestone fixture must exist');
      if (method === 'PATCH') Object.assign(found, body);
      else assert.equal(method, 'GET');
      data = found;
    } else assert.fail(`Unexpected fixture request: ${method} ${path}`);
    return {
      ok: true, status: method === 'POST' ? 201 : 200,
      headers: { get: (name) => name.toLowerCase() === 'link' && next ? `<${next}>; rel="next"` : null },
      text: async () => JSON.stringify(clone(data)),
    };
  };
  return state;
}

async function run(state, mode = 'task', id = mode === 'task' ? 'T-001' : '1.1') {
  const result = { code: 0, logs: [], errors: [] };
  const context = {
    fs: { readFileSync: (name) => {
      if (name === 'gh.tkn') return 'synthetic-fixture-value';
      assert.equal(name, 'payload.json');
      return JSON.stringify({ comment: 'Synthetic evidence supplied for review probe' });
    } },
    fetch: state.fetch,
    process: { argv: ['node', 'candidate.mjs', mode, id, 'payload.json'], exit: (code) => { result.code = code; } },
    console: { log: (value) => result.logs.push(String(value)), error: (value) => result.errors.push(String(value)) },
  };
  await vm.runInNewContext(isolatedSource, context, { timeout: 1000 });
  return result;
}

test('P-001: later-page task is falsely reported missing', async () => {
  const state = fixture({ issues: Array.from({ length: 100 }, (_, index) => issue(index + 100, `T-${index + 200}`)), issuePage2: [issue(1)] });
  const result = await run(state);
  assert.equal(result.code, 1);
  assert.match(result.errors[0], /found 0/);
  assert.equal(state.calls.length, 1);
});

test('P-002: hidden duplicate does not prevent issue closure', async () => {
  const state = fixture({ issues: [issue(1), ...Array.from({ length: 99 }, (_, index) => issue(index + 100, `T-${index + 200}`))], issuePage2: [issue(2)] });
  assert.equal((await run(state)).code, 0);
  assert.equal(state.issues[0].state, 'closed');
  assert.equal(state.issuePage2[0].state, 'open');
  assert.ok(state.calls.every((call) => !call.query.includes('page=2')));
});

test('P-003: title/body identity conflict is accepted', async () => {
  const state = fixture({ issues: [issue(1, 'T-001', { body: marker('T-002') })] });
  assert.equal((await run(state)).code, 0);
  assert.equal(state.issues[0].state, 'closed');
});

test('P-004: title-only unmarked issue is accepted', async () => {
  const state = fixture({ issues: [issue(1, 'T-001', { body: 'No managed marker' })] });
  assert.equal((await run(state)).code, 0);
  assert.equal(state.issues[0].state, 'closed');
});

test('P-005: successful rerun duplicates the evidence comment', async () => {
  const state = fixture({ issues: [issue(1)] });
  assert.equal((await run(state)).code, 0);
  assert.equal((await run(state)).code, 0);
  assert.equal(state.comments.length, 2);
  assert.equal(state.calls.filter((call) => call.method === 'PATCH').length, 1);
});

test('P-006: uncertain applied comment is duplicated on replay', async () => {
  const state = fixture({ issues: [issue(1)], dropComment: true });
  assert.equal((await run(state)).code, 1);
  assert.equal(state.comments.length, 1);
  assert.equal(state.issues[0].state, 'open');
  assert.equal((await run(state)).code, 0);
  assert.equal(state.comments.length, 2);
});

test('P-007: not-planned closure is reported verified without reason reconciliation', async () => {
  const state = fixture({ issues: [issue(1, 'T-001', { state: 'closed', state_reason: 'not_planned' })] });
  const result = await run(state);
  assert.equal(result.code, 0);
  assert.match(result.logs[0], /Closed and verified/);
  assert.equal(state.issues[0].state_reason, 'not_planned');
  assert.equal(state.comments.length, 1);
});

test('P-008: empty milestone closes without task/report acceptance inputs', async () => {
  const state = fixture({ milestones: [milestone(7)] });
  assert.equal((await run(state, 'milestone')).code, 0);
  assert.equal(state.milestones[0].state, 'closed');
  assert.ok(!state.calls.some((call) => call.path === '/issues' && !call.query.includes('state=open')));
  assert.ok(state.calls.every((call) => !call.hasSignal));
});

test('P-009: hidden duplicate milestone does not prevent closure', async () => {
  const state = fixture({ milestones: [milestone(7), ...Array.from({ length: 99 }, (_, index) => milestone(index + 100, { title: `sdd-2.${index + 1}-Other` }))], milestonePage2: [milestone(8)] });
  assert.equal((await run(state, 'milestone')).code, 0);
  assert.equal(state.milestones[0].state, 'closed');
  assert.equal(state.milestonePage2[0].state, 'open');
});

test('P-010: an open pull request associated with a milestone correctly blocks closure', async () => {
  const state = fixture({ milestones: [milestone(7)], open: [issue(1, 'T-001', { pull_request: { url: 'https://example.invalid/pull/1' } })] });
  assert.equal((await run(state, 'milestone')).code, 1);
  assert.equal(state.milestones[0].state, 'open');
  assert.ok(state.calls.every((call) => call.method === 'GET'));
});
