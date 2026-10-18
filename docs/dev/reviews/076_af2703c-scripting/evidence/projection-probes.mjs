/**
 * Controlled observations of candidate C-002's projection mechanics.
 * This is a mechanics transcription with a one-task abstract dataset, not a
 * byte-for-byte copy of the full chat candidate/domain task data. fs/fetch,
 * credentials, clock and output are synthetic; no real provider is contacted.
 */
import assert from 'node:assert/strict';
import vm from 'node:vm';

const mechanics = String.raw`
const BASE_URL = 'https://api.github.com/repos/example-owner/example-project';
const token = fs.readFileSync('gh.tkn', 'utf8').trim();
if (!token) throw new Error('Empty token in gh.tkn');
async function ghFetch(path, options = {}) {
  const url = path.startsWith('http') ? path : BASE_URL + path;
  const res = await fetch(url, { ...options, headers: {
    Accept: 'application/vnd.github+json', Authorization: 'Bearer ' + token,
    'X-GitHub-Api-Version': '2022-11-28', 'Content-Type': 'application/json',
    ...(options.headers || {}),
  } });
  const text = await res.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  if (!res.ok) throw new Error('GitHub API ' + (options.method || 'GET') + ' ' + path + ' failed (' + res.status + '): ' + (typeof data === 'string' ? data : JSON.stringify(data)));
  return data;
}
function buildIssueBody(t) {
  return [
    '## Task brief <!-- sdd-forge:task-id=' + t.id + ' -->', '',
    '**Outcome:** ' + t.title + '.', '',
    '**Context:** Phase 1 — Bounded outcome, ' + t.milestoneName + '.', '',
    '**Scope and dependencies:**', '',
    '- **Depends on:** ' + t.dependsOn, '- **Scope:** ' + t.scope, '',
    '**Acceptance and verification:** ' + t.acceptance, '',
    '**Sources:** docs/dev/TASKS.md, docs/dev/PLAN.md',
    '<!-- /sdd-forge:task-id=' + t.id + ' -->', '',
  ].join('\n');
}
async function main() {
  const existingLabels = await ghFetch('/labels?per_page=100');
  let phaseLabel = existingLabels.find(l => l.name === PHASE_LABEL.name || l.name.startsWith('sdd-phase-1-'));
  if (!phaseLabel) phaseLabel = await ghFetch('/labels', { method: 'POST', body: JSON.stringify(PHASE_LABEL) });
  const existingMilestones = await ghFetch('/milestones?state=all&per_page=100');
  const milestoneMap = new Map();
  for (const m of MILESTONES) {
    let found = existingMilestones.find(em => em.title.startsWith('sdd-' + m.id + '-'));
    if (!found) found = await ghFetch('/milestones', { method: 'POST', body: JSON.stringify({ title: m.title, state: 'open', description: m.description }) });
    milestoneMap.set(m.id, found);
  }
  const pureIssues = (await ghFetch('/issues?state=all&per_page=100')).filter(i => !i.pull_request);
  const issueMap = new Map();
  for (const t of TASKS) {
    const marker = '<!-- sdd-forge:task-id=' + t.id + ' -->';
    const expectedTitle = '[' + t.id + '] ' + t.title;
    const matches = pureIssues.filter(i => (i.body && i.body.includes(marker)) || i.title.startsWith('[' + t.id + ']'));
    if (matches.length > 1) throw new Error('Multiple issues matched ' + t.id);
    const targetMilestone = milestoneMap.get(t.milestoneId);
    let issue = matches[0];
    if (!issue) issue = await ghFetch('/issues', { method: 'POST', body: JSON.stringify({ title: expectedTitle, body: buildIssueBody(t), labels: [PHASE_LABEL.name], milestone: targetMilestone.number }) });
    issueMap.set(t.id, issue);
  }
  const vLabel = (await ghFetch('/labels?per_page=100')).find(l => l.name === PHASE_LABEL.name);
  if (!vLabel) throw new Error('Readback failed: Phase label missing');
  const verifyMilestones = await ghFetch('/milestones?state=all&per_page=100');
  for (const m of MILESTONES) {
    const vm = verifyMilestones.find(em => em.title === m.title);
    if (!vm || vm.state !== 'open') throw new Error('Readback failed: Milestone missing or not open');
  }
  const verifyIssues = (await ghFetch('/issues?state=all&per_page=100')).filter(i => !i.pull_request);
  const summary = [];
  for (const t of TASKS) {
    const vi = verifyIssues.find(i => i.body && i.body.includes('<!-- sdd-forge:task-id=' + t.id + ' -->'));
    if (!vi) throw new Error('Readback failed: Issue for ' + t.id + ' missing');
    const expectedM = milestoneMap.get(t.milestoneId);
    if (!vi.labels.some(l => l.name === PHASE_LABEL.name) || !vi.milestone || vi.milestone.number !== expectedM.number) throw new Error('Readback failed: missing association');
    summary.push({ taskId: t.id, issueNumber: vi.number, title: vi.title, milestone: vi.milestone.title, milestoneNumber: vi.milestone.number, state: vi.state, url: vi.html_url });
  }
  fs.writeFileSync('C:/Users/example/.agent/brain/session/scratch/phase1-projection.json', JSON.stringify({ label: vLabel, milestones: Array.from(milestoneMap.values()), issues: summary }, null, 2));
}
globalThis.result = main().then(() => ({ ok: true }), error => ({ ok: false, error: error.message }));
`;
const label = { id: 1, name: 'sdd-phase-1-Bounded-outcome', color: '1d76db', description: 'Bounded delivery.' };
const milestone = { id: 70, number: 7, title: 'sdd-1.1-Core', description: 'Accepted outcome and exits.', state: 'open' };
const task = { id: 'T-101', title: 'Deliver bounded work', milestoneId: '1.1', milestoneName: 'Milestone 1.1 — Core', dependsOn: 'None.', scope: 'Accepted scope.', acceptance: 'Observed evidence.' };
const issue = { id: 1001, number: 10, title: '[T-101] Deliver bounded work', body: '## Task brief <!-- sdd-forge:task-id=T-101 -->\nOriginal brief.\n<!-- /sdd-forge:task-id=T-101 -->', state: 'open', labels: [label], milestone };
async function observe(setup = () => {}) {
  const state = { labels: [structuredClone(label)], milestones: [structuredClone(milestone)], issues: [structuredClone(issue)], calls: [], files: [], bodyError: null, outputError: false, pages: false };
  setup(state);
  const context = {
    PHASE_LABEL: structuredClone(label), MILESTONES: [{ ...milestone, id: '1.1' }], TASKS: [structuredClone(task)],
    fs: { readFileSync: () => 'synthetic-fixture', writeFileSync: (file, content) => { state.files.push(file); if (state.outputError) throw new Error('ENOENT fixture'); assert.equal(JSON.parse(content).issues.length, 1); } },
    fetch: async (raw, options) => {
      const url = new URL(raw), route = url.pathname.split('/example-project')[1], method = options.method || 'GET';
      state.calls.push({ route, method, signal: Boolean(options.signal) });
      const collection = state[route.slice(1)];
      let value;
      if (method === 'POST') {
        const body = JSON.parse(options.body);
        value = { ...body, id: 2000 + state.calls.length, number: 20 + state.calls.length, state: 'open' };
        if (route === '/issues') { value.labels = body.labels.map(name => ({ name })); value.milestone = state.milestones.find(m => m.number === body.milestone); }
        collection.unshift(value);
      } else value = state.pages && route === '/issues' ? collection.slice(0, 100) : collection;
      const error = method === 'POST' && state.bodyError;
      return { ok: !error, status: error ? 500 : 200, text: async () => JSON.stringify(error || value), headers: { get: () => '<https://api.github.com/repos/example-owner/example-project/issues?page=2>; rel="next"' } };
    },
  };
  vm.runInNewContext(mechanics, context, { timeout: 1000 });
  return { ...await context.result, state };
}
const cases = [
  ['P-011 later-page issue duplicated', s => { s.pages = true; s.issues = Array.from({ length: 100 }, (_, i) => ({ ...issue, id: i + 1, number: i + 1, title: '[T-999] Other ' + i, body: 'Other.' })).concat(s.issues); }, r => r.state.issues.filter(i => i.body.includes('task-id=T-101')).length === 2, false],
  ['P-012 contradictory title/body certified', s => { s.issues[0].title = '[T-999] Foreign title'; }, r => r.ok, false],
  ['P-013 stale descriptions/body certified', s => { s.labels[0].color = 'ffffff'; s.milestones[0].description = 'Different exits.'; }, r => r.ok, false],
  ['P-014 foreign association blocked', s => { s.issues[0].labels = []; }, r => !r.ok && r.error.includes('association'), true],
  ['P-015 output failure follows completed hosted writes', s => { s.labels = []; s.milestones = []; s.issues = []; s.outputError = true; }, r => !r.ok && r.error.includes('ENOENT') && r.state.calls.filter(c => c.method === 'POST').length === 3, true],
  ['P-016 requests have no cancellation signal', () => {}, r => r.state.calls.every(c => !c.signal), true],
  ['P-017 uncertain create returns raw provider body', s => { s.issues = []; s.bodyError = { message: 'SYNTHETIC_PRIVATE_MESSAGE' }; }, r => !r.ok && r.error.includes('SYNTHETIC_PRIVATE_MESSAGE') && r.state.issues.length === 1, true],
];
let failed = 0;
for (const [name, setup, observation, corrected] of cases) {
  const result = await observe(setup), observed = observation(result);
  const expected = process.argv.includes('--corrected') ? corrected : true;
  if (observed !== expected) failed++;
  console.log(JSON.stringify({ name, observed, expected, pass: observed === expected }));
}
process.exitCode = failed ? 1 : 0;
