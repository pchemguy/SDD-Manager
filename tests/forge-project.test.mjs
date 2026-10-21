/** Observable projection/input contracts; synthetic credentials and provider. */
import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { GitHubTransport } from '../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/github-client.mjs';
import { GitHubClient as CompletionClient } from '../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/forge-close.mjs';
import { parseOwner, draftProjection, validateProjection, renderProjection } from '../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/projection-input.mjs';
import { reconcileProjection, parseCli, run as runProject } from '../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/forge-project.mjs';
import { run as runDraft, parseCli as parseDraftCli } from '../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/forge-project-draft.mjs';

const ownerText = '# Work\n\n## Phase 1 — Bounded outcome\n\n- [ ] Phase 1 — Bounded outcome\n    - [ ] Milestone 1.1 — Core\n        - [ ] T-101 — Deliver bounded work\n            Scope: bounded work.\n        - [ ] T-102 — Review core\n    - [ ] Milestone 1.2 — Phase review\n        - [ ] T-103 — Review phase\n\n## Phase 2 — Expansion\n\n- [ ] Phase 2 — Expansion\n    - [ ] Milestone 2.1 — Additional capability\n        - [ ] T-104 — Extend capability\n';
const source = { root: 'repo', path: 'docs/dev/TASKS.md', sha256: 'a'.repeat(64) };
const inventory = () => parseOwner(ownerText, 'phase', '1');
function projectionRequest() {
  const request = draftProjection('example-owner/example-project', source, inventory());
  request.phase.description = 'Bounded first capability.';
  request.milestones[0].kind = 'delivery'; request.milestones[0].review_task = 'T-102';
  request.milestones[1].kind = 'phase-review'; request.milestones[1].review_task = 'T-103';
  request.milestones.forEach(item => { item.description = 'Accepted outcome and exits.'; });
  request.tasks.forEach((item, index) => Object.assign(item, {
    role: ['delivery', 'milestone-review', 'phase-review'][index],
    depends_on: [[], ['T-101'], ['T-102']][index], prerequisites: 'Caller verifies required boundary.',
    scope: 'Bounded accepted work.', acceptance: 'Required checks and evidence.', sources: ['docs/dev/PLAN.md'],
  }));
  Object.keys(request.eligibility).forEach(key => { request.eligibility[key] = true; });
  return request;
}

test('canonical extraction selects one phase and leaves semantics/dependencies unresolved', () => {
  const value = inventory();
  assert.deepEqual(value.tasks.map(item => item.id), ['T-101', 'T-102', 'T-103']);
  assert.deepEqual(value.all_task_ids, ['T-101', 'T-102', 'T-103', 'T-104']);
  const request = draftProjection('example-owner/example-project', source, value);
  assert.equal(request.tasks[0].depends_on, null);
  assert.equal(request.tasks[0].scope, null);
  assert.equal(request.milestones[0].kind, null);
  assert.ok(Object.values(request.eligibility).every(item => item === false));
  assert.throws(() => validateProjection(request, value, true));
});

test('hierarchy rejects mismatches, duplicate IDs and ambiguous indentation; fenced examples do not count', () => {
  for (const input of [
    ownerText.replace('- [ ] Phase 1 — Bounded outcome', '- [ ] Phase 1 — Other'),
    ownerText.replace('    - [ ] Milestone 1.1', '  - [ ] Milestone 1.1'),
    ownerText.replace('T-102', 'T-101'),
    ownerText.replace('Milestone 1.1', 'Milestone 2.1'),
  ]) assert.throws(() => parseOwner(input, 'phase', '1'));
  const fenced = ownerText + '\n~~~markdown\n        - [ ] T-101 — Example only\n~~~\n';
  assert.equal(parseOwner(fenced, 'phase', '1').tasks.length, 3);
});

test('complete request renders bounded abstract content with exact identity and no source hash upload', () => {
  const request = validateProjection(projectionRequest(), inventory(), true), rendered = renderProjection(request);
  assert.equal(rendered.label.name, 'sdd-phase-1-Bounded-outcome');
  assert.equal(rendered.milestones[0].title, 'sdd-1.1-Core');
  assert.equal(rendered.issues[0].title, '[T-101] Deliver bounded work');
  assert.match(rendered.issues[0].body, /^## Task brief <!-- sdd-forge:task-id=T-101 -->\n/);
  assert.match(rendered.issues[1].body, /Depends on:\*\* T-101/);
  assert.ok(!JSON.stringify(rendered).includes(source.sha256));
  const original = projectionRequest(); original.tasks[0].scope = 'First\r\nSecond';
  assert.equal(validateProjection(original, inventory(), true).tasks[0].scope, 'First\nSecond');
});

test('schema and dependency/review gates reject malformed, missing, self, cyclic and unknown work', () => {
  const changes = [
    r => { r.extra = true; }, r => { r.eligibility.ready = false; },
    r => { r.tasks[0].depends_on = ['T-101']; }, r => { r.tasks[0].depends_on = ['T-999']; },
    r => { r.tasks[0].depends_on = ['T-102']; }, r => { r.tasks[1].depends_on = []; },
    r => { r.tasks[2].depends_on = []; }, r => { r.tasks[0].name = 'Different source name'; },
    r => { r.tasks.pop(); }, r => { r.tasks[0].scope = '<!-- sdd-forge:task-id=T-999 -->'; },
    r => { r.source.path = '../outside.md'; }, r => { r.tasks[0].scope = '\ud800'; },
  ];
  for (const change of changes) { const request = projectionRequest(); change(request); assert.throws(() => validateProjection(request, inventory(), true)); }
  const external = projectionRequest(); external.external_task_ids = ['T-999']; external.tasks[0].depends_on = ['T-999'];
  assert.doesNotThrow(() => validateProjection(external, inventory(), true));
});

test('projection capability permits only bounded creation; completion cannot borrow it', async () => {
  const calls = [];
  const fetchImpl = async (url, options) => {
    calls.push({ url, options });
    return Response.json({ id: 1 }, { status: 201 });
  };
  const options = { repository: 'example-owner/example-project', token: 'synthetic-fixture', fetchImpl };
  const creation = { name: 'sdd-phase-1-Outcome', color: '1d76db', description: 'Bounded delivery.' };
  const projection = new GitHubTransport({ ...options, capability: 'projection' });
  await projection.request('POST', '/labels', creation);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].options.headers.Authorization, 'Bearer synthetic-fixture');
  const completion = new CompletionClient({ ...options, capability: 'projection' });
  await assert.rejects(completion.request('POST', '/labels', creation));
  await assert.rejects(projection.request('PATCH', '/issues/10', { state: 'closed', state_reason: 'completed' }));
  await assert.rejects(projection.request('POST', '/issues', { title: 'Unmanaged issue', body: 'Text', labels: [], milestone: 1 }));
  await assert.rejects(projection.request('POST', '/labels', { ...creation, extra: 'No' }));
  assert.equal(calls.length, 1);
});

function fixture() {
  const state = { labels: [], milestones: [], issues: [], calls: [], time: 0, hook: null, after: null };
  state.fetch = async (raw, options) => {
    const url = new URL(raw), route = url.pathname.replace('/repos/example-owner/example-project', ''), method = options.method;
    assert.equal(url.origin, 'https://api.github.com');
    assert.equal(options.headers.Authorization, 'Bearer synthetic-fixture');
    const body = options.body ? JSON.parse(options.body) : undefined;
    state.calls.push({ route, method, body, at: state.time });
    const data = { url, route, method, body, options };
    if (state.hook) { const response = await state.hook(data); if (response !== undefined) return response; }
    let value;
    if (route === '') value = { id: 123, full_name: 'example-owner/example-project', private: true };
    else if (['/labels', '/milestones', '/issues'].includes(route)) {
      const collection = state[route.slice(1)];
      if (method === 'POST') {
        value = { ...body, id: 1000 + state.calls.length, number: 10 + state.calls.length };
        if (route !== '/labels') { value.state = 'open'; value.open_issues = 0; }
        if (route === '/issues') {
          value.labels = body.labels.map(name => ({ name })); value.state_reason = null;
          value.milestone = state.milestones.find(item => item.number === body.milestone);
        }
        collection.push(value);
      } else value = collection;
    } else assert.fail('Unexpected route: ' + route);
    if (state.after) { const response = await state.after({ ...data, value }); if (response !== undefined) return response; }
    return Response.json(value, { status: method === 'POST' ? 201 : 200 });
  };
  state.client = () => new GitHubTransport({ repository: 'example-owner/example-project', token: 'synthetic-fixture', capability: 'projection',
    timeoutMs: 120000, requestTimeoutMs: 1000, fetchImpl: state.fetch, clock: () => state.time, sleep: async ms => { state.time += ms; } });
  return state;
}
const project = (state, input = projectionRequest(), options = {}) => reconcileProjection(input, inventory(), state.client(), options);
const writes = state => state.calls.filter(item => item.method !== 'GET');

test('eligible projection creates and verifies one bounded scope; rerun preserves identities without writes', async () => {
  const state = fixture(), first = await project(state);
  assert.equal(first.ok, true, JSON.stringify(first));
  assert.equal(first.code, 'projection_verified');
  assert.equal(first.visibility, 'private');
  assert.equal(writes(state).length, 6);
  assert.equal(state.labels.length, 1); assert.equal(state.milestones.length, 2); assert.equal(state.issues.length, 3);
  assert.ok(state.issues.every(item => item.state === 'open'));
  assert.deepEqual(first.associations.map(item => item.task_id), ['T-101', 'T-102', 'T-103']);
  assert.ok(writes(state).slice(1).every((item, i) => item.at - writes(state)[i].at >= 1000));
  const ids = first.associations.map(item => item.issue_number);
  const second = await project(state);
  assert.equal(second.ok, true, JSON.stringify(second));
  assert.equal(writes(state).length, 6);
  assert.deepEqual(second.associations.map(item => item.issue_number), ids);
  assert.ok(!JSON.stringify(second).includes('Bounded accepted work.'));
});

test('all observable existing conflicts block before any new object creation', async () => {
  for (const change of [
    s => { s.labels[0].description = 'Changed purpose'; },
    s => { s.milestones[0].description = 'Changed exits'; },
    s => { s.issues[0].title = '[T-999] Contradictory owner'; },
    s => { s.issues[0].body = 'Unmarked user material'; },
    s => { s.issues[0].milestone = { number: 999 }; },
  ]) {
    const state = fixture(); assert.equal((await project(state)).ok, true);
    change(state); state.issues.pop(); state.calls = [];
    const result = await project(state);
    assert.equal(result.ok, false, JSON.stringify(result)); assert.equal(writes(state).length, 0);
  }
});

test('exact reused generated section preserves user suffix, unrelated labels and closed states', async () => {
  const state = fixture(); assert.equal((await project(state)).ok, true); state.calls = [];
  state.issues[0].body += '\n\nUser-authored follow-up.';
  state.issues[0].labels.push({ name: 'team-context' }); state.issues[0].state = 'closed'; state.issues[0].state_reason = 'completed';
  state.milestones[0].state = 'closed';
  const result = await project(state);
  assert.equal(result.ok, true, JSON.stringify(result)); assert.equal(writes(state).length, 0);
  assert.match(state.issues[0].body, /User-authored follow-up/);
  assert.equal(result.associations[0].state, 'closed');
});

test('later-page duplicates and incomplete enumeration cannot establish unique projection', async () => {
  const state = fixture(); assert.equal((await project(state)).ok, true); state.calls = [];
  state.hook = ({ route, url }) => {
    if (route !== '/issues') return;
    if (url.searchParams.get('page') === '2') return Response.json([{ ...state.issues[0], id: 99999, number: 999 }]);
    return Response.json(state.issues, { headers: { Link: '<https://api.github.com/repos/example-owner/example-project/issues?state=all&per_page=100&page=2>; rel="next"' } });
  };
  const result = await project(state);
  assert.equal(result.ok, false); assert.equal(result.code, 'ambiguous_issues'); assert.equal(writes(state).length, 0);
});

test('applied disconnected creation is discovered without POST replay and retains its cause', async () => {
  const state = fixture(); let thrown = false;
  state.after = ({ method, route }) => { if (method === 'POST' && route === '/issues' && !thrown) { thrown = true; throw new Error('synthetic disconnect'); } };
  const result = await project(state);
  assert.equal(result.ok, true, JSON.stringify(result)); assert.equal(writes(state).length, 6);
  const recovered = result.effects.find(item => item.status === 'observed_after_error');
  assert.ok(recovered); assert.equal(recovered.interrupted_by, 'transport_failed');
});

test('unknown absent creation stops writes; reconcile-only reports missing objects without replay', async () => {
  const state = fixture();
  state.hook = ({ method }) => { if (method === 'POST') throw new Error('synthetic uncertain send'); };
  const first = await project(state);
  assert.equal(first.ok, false); assert.equal(first.remote_state, 'unknown'); assert.equal(writes(state).length, 1);
  state.hook = null; state.calls = [];
  const second = await project(state, projectionRequest(), { reconcileOnly: true });
  assert.equal(second.ok, false); assert.equal(second.remote_state, 'pending'); assert.equal(writes(state).length, 0);
});

test('final fresh parent/content readback retains earlier applied objects on failure', async () => {
  const state = fixture();
  state.hook = ({ route, method }) => {
    if (method === 'GET' && route === '/milestones' && writes(state).length === 6) state.milestones[0].description = 'Concurrent changed exits';
  };
  const result = await project(state);
  assert.equal(result.ok, false); assert.equal(result.code, 'milestone_content_conflict');
  assert.equal(result.effects.filter(item => item.status === 'created').length, 6);
});

function docsRequest() {
  const template = fs.readFileSync(new URL('../.agents/plugins/sdd-manager/assets/DOCS_TASKS_TEMPLATE.md', import.meta.url), 'utf8');
  const owner = parseOwner(template, 'docs-main'), request = draftProjection('example-owner/example-project',
    { root: 'plugin', path: 'assets/DOCS_TASKS_TEMPLATE.md', sha256: createHash('sha256').update(template).digest('hex') }, owner);
  Object.keys(request.eligibility).forEach(key => { request.eligibility[key] = true; });
  return { request, owner };
}
test('docs-main consumes all nine predefined tasks with its own scope and no phase objects', async () => {
  const { request, owner } = docsRequest(), state = fixture();
  const result = await reconcileProjection(request, owner, state.client());
  assert.equal(result.ok, true, JSON.stringify(result)); assert.equal(state.labels.length, 0);
  assert.equal(state.milestones.length, 1); assert.equal(state.milestones[0].title, 'sdd-docs-main');
  assert.ok(!state.milestones[0].description.includes('<!--'));
  assert.equal(state.issues.length, 9); assert.equal(writes(state).length, 10);
  assert.match(state.issues[0].body, /^<!-- sdd-forge:docs-scope=main -->\n## Task brief <!-- sdd-forge:task-id=DOCS-001 -->/);
  state.calls = [];
  const again = await reconcileProjection(request, owner, state.client());
  assert.equal(again.ok, true, JSON.stringify(again)); assert.equal(writes(state).length, 0);
  assert.deepEqual(again.associations, result.associations);
});

test('docs definitions provide complete briefs and lifecycle ordering without agent enrichment', () => {
  const { request, owner } = docsRequest();
  const definitions = JSON.parse(fs.readFileSync(new URL('../.agents/plugins/sdd-manager/assets/DOCS_TRACKING_TEMPLATE.json', import.meta.url), 'utf8'));
  assert.deepEqual(Object.keys(definitions).sort(), ['kind', 'milestones', 'schema_version', 'tasks']);
  assert.deepEqual(request.milestones, definitions.milestones); assert.deepEqual(request.tasks, definitions.tasks);
  const draft = draftProjection(request.repository, request.source, owner);
  assert.ok(Object.values(draft.eligibility).every(value => value === false));
  assert.doesNotThrow(() => validateProjection(draft, owner));
  assert.throws(() => validateProjection(draft, owner, true), error => error.code === 'eligibility_not_established');
  assert.deepEqual(draft.tasks[0].depends_on, []);
  for (let i = 1; i < 8; i++) assert.deepEqual(draft.tasks[i].depends_on, [draft.tasks[i - 1].id]);
  assert.deepEqual(draft.tasks[8].depends_on, draft.tasks.slice(0, 8).map(item => item.id));
  assert.match(draft.tasks[0].acceptance, /some but not all four/);
  assert.deepEqual(draft.tasks, definitions.tasks);
  assert.match(draft.tasks[8].acceptance, /not prerequisites for completing DOCS-009/);
  const payload = JSON.stringify(renderProjection(draft));
  assert.ok(!payload.includes(request.source.sha256)); assert.ok(!payload.includes('eligibility'));
  // Returned requests must not mutate the module's imported definitions.
  draft.tasks[0].scope = 'Changed';
  assert.equal(draftProjection(request.repository, request.source, owner).tasks[0].scope, definitions.tasks[0].scope);
});

test('docs content and source disagreements fail rather than inventing or dropping preparation work', () => {
  const { request, owner } = docsRequest();
  for (const change of [
    r => { r.milestones[0].description = 'Agent-selected replacement'; },
    r => { r.tasks[0].scope = 'Different initialization'; },
    r => { r.tasks[1].depends_on = []; },
    r => { r.tasks[8].acceptance = 'Skip package QC'; },
    r => { r.tasks[2].sources = ['Invented source']; },
    r => { r.external_task_ids = ['T-999']; },
    r => { r.tasks.reverse(); }, r => { r.tasks.pop(); },
  ]) {
    const candidate = structuredClone(request); change(candidate);
    assert.throws(() => validateProjection(candidate, owner));
  }
  const template = fs.readFileSync(new URL('../.agents/plugins/sdd-manager/assets/DOCS_TASKS_TEMPLATE.md', import.meta.url), 'utf8');
  assert.throws(() => parseOwner(template.replace('Prepare and accept PROJECT.', 'Custom brief.'), 'docs-main'),
    error => error.code === 'docs_template_source_conflict');
  const resumed = template.replaceAll('- [ ] DOCS-', '- [x] DOCS-').replace(/\r?\n/g, '\r\n');
  assert.deepEqual(draftProjection(request.repository, request.source, parseOwner(resumed, 'docs-main')).tasks, request.tasks);
});

test('conflicting preparation milestone identities never cause duplicate creation', async () => {
  const { request, owner } = docsRequest();
  for (const [title, description] of [
    ['docs-main', 'Existing preparation'],
    ['SDD-DOCS-MAIN', request.milestones[0].description],
    ['Renamed preparation', '<!-- sdd-forge:docs-milestone=docs-main -->\nExisting preparation'],
    ['sdd-docs-main', 'Different scope'],
  ]) {
    const state = fixture(); state.milestones.push({ id: 1, number: 1, title, description, state: 'open' });
    const result = await reconcileProjection(request, owner, state.client());
    assert.equal(result.code, 'milestone_content_conflict'); assert.equal(writes(state).length, 0);
  }
  const state = fixture();
  state.milestones.push(...['sdd-docs-main', 'docs-main'].map((title, index) => ({ id: index + 1, number: index + 1,
    title, description: request.milestones[0].description, state: 'open' })));
  assert.equal((await reconcileProjection(request, owner, state.client())).code, 'ambiguous_milestones');
  assert.equal(writes(state).length, 0);
});

test('projection transport requires the fixed docs milestone title and marker-free description', async () => {
  const state = fixture(), client = state.client(), { request } = docsRequest();
  for (const body of [
    { title: 'docs-main', state: 'open', description: request.milestones[0].description },
    { title: 'sdd-docs-main', state: 'open', description: '<!-- sdd-forge:docs-milestone=docs-main -->\nDescription' },
  ]) await assert.rejects(client.request('POST', '/milestones', body), error => error.code === 'unsupported_mutation');
  assert.equal(state.calls.length, 0);
});

test('draft/help/invalid modes are harmless and require explicit execution selection', () => {
  assert.deepEqual(parseCli(['--help']), { help: true }); assert.deepEqual(parseDraftCli(['--help']), { help: true });
  for (const args of [[], ['phase'], ['phase', '--apply', '--check'], ['phase', '--unknown', 'x']]) assert.throws(() => parseCli(args));
  for (const name of ['forge-project.mjs', 'forge-project-draft.mjs']) {
    const script = fileURLToPath(new URL('../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/' + name, import.meta.url));
    const result = spawnSync(process.execPath, [script, '--help'], { cwd: os.tmpdir(), encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr); assert.match(result.stdout, /--repo/);
  }
});

function git(root, ...args) {
  const result = spawnSync('git', ['-C', root, ...args], { encoding: 'utf8', windowsHide: true });
  assert.equal(result.status, 0, result.stderr); return result.stdout.trim();
}
function localRepo(t) {
  const base = fs.mkdtempSync(path.join(os.tmpdir(), 'sdd-project-空 格-')), root = path.join(base, 'repo');
  fs.mkdirSync(root); t.after(() => fs.rmSync(base, { recursive: true, force: true }));
  git(root, 'init', '-q'); git(root, 'config', 'user.name', 'Fixture'); git(root, 'config', 'user.email', 'fixture@example.invalid');
  git(root, 'config', 'core.autocrlf', 'false'); git(root, 'remote', 'add', 'origin', 'git@github.com:example-owner/example-project.git');
  fs.mkdirSync(path.join(root, 'docs/dev'), { recursive: true }); fs.writeFileSync(path.join(root, 'docs/dev/TASKS.md'), ownerText);
  fs.writeFileSync(path.join(root, '.gitignore'), '*.tkn\n'); git(root, 'add', '.'); git(root, 'commit', '-qm', 'fixture');
  const token = path.join(root, 'gh.tkn'); fs.writeFileSync(token, 'synthetic-fixture');
  const value = projectionRequest(); value.source.sha256 = createHash('sha256').update(ownerText).digest('hex');
  const filename = path.join(base, 'request 空.json'); fs.writeFileSync(filename, '\ufeff' + JSON.stringify(value));
  return { root, base, token, filename, value, options: { kind: 'phase', mode: 'apply', repo: root, remote: 'origin', requestFile: filename, timeoutMs: 30000, requestTimeoutMs: 1000 } };
}

test('local draft supports native separators, explicit exclusive output and incomplete semantics', t => {
  const local = localRepo(t), output = path.join(local.base, 'draft.json');
  const result = runDraft({ kind: 'phase', repo: local.root, remote: 'origin', tasks: 'docs\\dev\\TASKS.md', phase: '1', output });
  assert.equal(result.source.path, 'docs/dev/TASKS.md'); assert.equal(result.tasks[0].depends_on, null);
  const before = fs.readFileSync(output); assert.throws(() => runDraft({ kind: 'phase', repo: local.root, remote: 'origin', tasks: 'docs/dev/TASKS.md', phase: '1', output }));
  assert.deepEqual(fs.readFileSync(output), before);
  assert.throws(() => runDraft({ kind: 'docs-main', repo: local.root, remote: 'origin', output: path.join(local.root, 'before-gate.json') }),
    error => error.code === 'docs_draft_requires_external_output');
  assert.ok(!fs.existsSync(path.join(local.root, 'before-gate.json')));
});

test('native docs draft binds fixed definitions for fresh and resumed sources and previews without credentials', async t => {
  const local = localRepo(t), output = path.join(local.base, 'docs request.json');
  fs.unlinkSync(local.token);
  const draft = runDraft({ kind: 'docs-main', repo: local.root, remote: 'origin', output });
  assert.ok(Object.values(draft.eligibility).every(value => value === false));
  const result = await runProject({ ...local.options, kind: 'docs-main', mode: 'check', requestFile: output });
  assert.equal(result.code, 'input_verified');
  const template = fs.readFileSync(new URL('../.agents/plugins/sdd-manager/assets/DOCS_TASKS_TEMPLATE.md', import.meta.url), 'utf8');
  const filename = path.join(local.root, 'docs/dev/DOCS_TASKS.md');
  fs.writeFileSync(filename, template.replace('- [ ] DOCS-001', '- [x] DOCS-001').replace(/\r?\n/g, '\r\n'));
  const resumed = runDraft({ kind: 'docs-main', repo: local.root, remote: 'origin', tasks: 'docs\\dev\\DOCS_TASKS.md' });
  assert.equal(resumed.source.root, 'repo'); assert.equal(resumed.source.path, 'docs/dev/DOCS_TASKS.md');
  assert.deepEqual(resumed.tasks, draft.tasks);
  assert.ok(fs.readFileSync(filename, 'utf8').includes('- [x] DOCS-001'));
  assert.equal(git(local.root, 'status', '--porcelain').trim(), '?? docs/dev/DOCS_TASKS.md');
  assert.deepEqual(JSON.parse(fs.readFileSync(output, 'utf8')), draft);
});

test('native credential-free preview requires source binding and does not contact provider', async t => {
  const local = localRepo(t); fs.unlinkSync(local.token); let calls = 0;
  const result = await runProject({ ...local.options, mode: 'check' }, { fetchImpl: async () => { calls++; throw new Error('No API'); } });
  assert.equal(result.ok, true); assert.equal(result.code, 'input_verified'); assert.equal(calls, 0);
  assert.equal(result.payloads.issues.length, 3); assert.equal(result.visibility, 'not_checked');
  fs.appendFileSync(path.join(local.root, 'docs/dev/TASKS.md'), '\nChanged.');
  await assert.rejects(runProject({ ...local.options, mode: 'check' }), error => error.code === 'source_changed');
});

test('ordinary readable token and CRLF owner/BOM request project and release the shared lock', async t => {
  const local = localRepo(t), state = fixture(), raw = ownerText.replace(/\n/g, '\r\n');
  if (process.platform !== 'win32') fs.chmodSync(local.token, 0o644);
  fs.writeFileSync(path.join(local.root, 'docs/dev/TASKS.md'), raw);
  local.value.source.sha256 = createHash('sha256').update(raw).digest('hex'); fs.writeFileSync(local.filename, '\ufeff' + JSON.stringify(local.value));
  const result = await runProject(local.options, { fetchImpl: state.fetch });
  assert.equal(result.ok, true, JSON.stringify(result)); assert.ok(!fs.existsSync(path.join(local.root, '.git/sdd-forge-close.lock')));
  assert.equal(git(local.root, 'remote', 'get-url', 'origin'), 'git@github.com:example-owner/example-project.git');
});

test('active credential in outgoing content is refused before metadata or writes', async () => {
  const state = fixture(), request = projectionRequest(); request.tasks[0].scope = 'synthetic-fixture';
  const result = await project(state, request);
  assert.equal(result.ok, false); assert.equal(result.code, 'credential_in_request'); assert.equal(state.calls.length, 0);
});

test('creation rechecks identity and reuses a matching object that appeared after preflight', async () => {
  const state = fixture(); let reads = 0;
  state.hook = ({ route, method }) => {
    if (method === 'GET' && route === '/labels' && ++reads === 2)
      state.labels.push({ id: 9000, name: 'sdd-phase-1-Bounded-outcome', color: '1d76db', description: 'Bounded first capability.' });
  };
  const result = await project(state);
  assert.equal(result.ok, true, JSON.stringify(result)); assert.equal(writes(state).length, 5); assert.equal(state.labels.length, 1);
});

test('case-insensitive managed label collisions block and pull requests are never task candidates', async () => {
  const state = fixture(); assert.equal((await project(state)).ok, true); state.calls = [];
  state.issues.push({ ...state.issues[0], id: 9999, number: 999, pull_request: { url: 'synthetic' } });
  assert.equal((await project(state)).ok, true); assert.equal(writes(state).length, 0);
  state.labels.push({ ...state.labels[0], id: 9998, name: state.labels[0].name.toUpperCase() }); state.calls = [];
  const result = await project(state); assert.equal(result.ok, false); assert.equal(result.code, 'ambiguous_labels'); assert.equal(writes(state).length, 0);
});

test('native missing eligibility, unpublished source and wrong target stop before credentials/network', async t => {
  const local = localRepo(t); fs.unlinkSync(local.token); let calls = 0;
  const fetchImpl = async () => { calls++; throw new Error('Must not contact provider'); };
  local.value.eligibility.eligible = false; fs.writeFileSync(local.filename, JSON.stringify(local.value));
  await assert.rejects(runProject(local.options, { fetchImpl }), error => error.code === 'eligibility_not_established');
  local.value.eligibility.eligible = true;
  const changed = ownerText + '\nUnpublished semantic notes.\n'; fs.writeFileSync(path.join(local.root, 'docs/dev/TASKS.md'), changed);
  local.value.source.sha256 = createHash('sha256').update(changed).digest('hex'); fs.writeFileSync(local.filename, JSON.stringify(local.value));
  await assert.rejects(runProject(local.options, { fetchImpl }), error => error.code === 'source_not_committed');
  git(local.root, 'remote', 'set-url', 'origin', 'https://github.com/other/project.git');
  await assert.rejects(runProject(local.options, { fetchImpl }), error => error.code === 'destination_mismatch'); assert.equal(calls, 0);
});

test('native shared lock blocks projection without stealing or contacting provider', async t => {
  const local = localRepo(t), directory = path.join(local.root, '.git/sdd-forge-close.lock'); fs.mkdirSync(directory); let calls = 0;
  await assert.rejects(runProject(local.options, { fetchImpl: async () => { calls++; throw new Error('No API'); } }), error => error.code === 'operation_busy');
  assert.ok(fs.existsSync(directory)); assert.equal(calls, 0);
});


test('source drift after hosted effects retains those effects and blocks final success', async t => {
  const local = localRepo(t), state = fixture();
  state.after = ({ method }) => { if (method === 'POST' && writes(state).length === 6) fs.appendFileSync(path.join(local.root, 'docs/dev/TASKS.md'), '\nConcurrent change.\n'); };
  const result = await runProject(local.options, { fetchImpl: state.fetch });
  assert.equal(result.ok, false); assert.equal(result.code, 'source_changed'); assert.equal(result.effects.length, 6);
  assert.ok(!fs.existsSync(path.join(local.root, '.git/sdd-forge-close.lock')));
});

test('source titles retain meaningful terminal punctuation and multiline list text stays attached', () => {
  const changed = ownerText.replace('T-101 — Deliver bounded work', 'T-101 — Use .NET.');
  assert.equal(parseOwner(changed, 'phase', '1').tasks[0].name, 'Use .NET.');
  const value = projectionRequest(); value.tasks[0].scope = 'First line\nSecond line'; value.tasks[0].prerequisites = 'First gate\nSecond gate';
  const rendered = renderProjection(validateProjection(value, inventory(), true));
  assert.match(rendered.issues[0].body, /- \*\*Scope:\*\* First line\n {4}Second line/);
  assert.match(rendered.issues[0].body, /First gate\n {4}Second gate/);
});

test('documented illustrative task object fits the actual request contract', () => {
  const guide = fs.readFileSync(new URL('../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/forge-project-input.md', import.meta.url), 'utf8');
  for (const content of [guide.replace(/\r\n/g, '\n'), guide.replace(/\r\n/g, '\n').replace(/\n/g, '\r\n')]) {
    const match = content.match(/~~~json\r?\n([\s\S]*?)\r?\n~~~/);
    assert.ok(match, 'Documented JSON example must be readable with LF and CRLF.');
    const example = JSON.parse(match[1]);
    assert.equal(example.id, 'T-101');
    const request = projectionRequest(); request.tasks[0] = example;
    assert.doesNotThrow(() => validateProjection(request, inventory(), true));
  }
});

test('native source failure cannot erase an unresolved hosted effect', async t => {
  const local = localRepo(t), state = fixture();
  state.hook = ({ method }) => {
    if (method === 'POST') { fs.appendFileSync(path.join(local.root, 'docs/dev/TASKS.md'), '\nChanged during uncertain send.\n'); throw new Error('synthetic disconnect'); }
  };
  const result = await runProject(local.options, { fetchImpl: state.fetch });
  assert.equal(result.ok, false); assert.equal(result.code, 'source_changed');
  assert.equal(result.effects[0].status, 'unknown'); assert.equal(result.remote_state, 'unknown');
});

function installDocs(root, filename = 'docs/dev/DOCS_TASKS.md') {
  const template = fs.readFileSync(new URL('../.agents/plugins/sdd-manager/assets/DOCS_TASKS_TEMPLATE.md', import.meta.url), 'utf8');
  const content = template.replace('- [ ] DOCS-001', '- [x] DOCS-001').replace(/\r?\n/g, '\r\n');
  fs.writeFileSync(path.join(root, filename), content);
  git(root, 'add', filename); git(root, 'commit', '-qm', 'docs fixture');
  return content;
}

test('convenience parsers default origin and retain explicit remotes and phase requests', () => {
  assert.equal(parseCli(['docs-main', '--repo', 'root', '--check']).remote, 'origin');
  assert.equal(parseDraftCli(['docs-main', '--repo', 'root']).remote, 'origin');
  assert.equal(parseCli(['phase', '--repo', 'root', '--request', 'input.json', '--check']).remote, 'origin');
  assert.equal(parseDraftCli(['phase', '--repo', 'root', '--tasks', 'tasks.md', '--phase', '1']).remote, 'origin');
  assert.equal(parseCli(['docs-main', '--repo', 'root', '--remote', 'upstream', '--check']).remote, 'upstream');
  assert.equal(parseDraftCli(['docs-main', '--repo', 'root', '--remote', 'upstream']).remote, 'upstream');
  for (const args of [
    ['docs-main', '--repo', 'root', '--request', 'input.json', '--tasks', 'tasks.md', '--check'],
    ['docs-main', '--repo', 'root', '--request', 'input.json', '--apply', '--confirm-eligibility'],
    ['docs-main', '--repo', 'root', '--check', '--confirm-eligibility'],
    ['docs-main', '--repo', 'root', '--apply'],
    ['phase', '--repo', 'root', '--check'],
    ['phase', '--repo', 'root', '--request', 'input.json', '--tasks', 'tasks.md', '--check'],
    ['docs-main', '--repo', 'root', '--remote', 'origin', '--remote', 'upstream', '--check'],
    ['docs-main', '--repo', 'root', '--apply', '--confirm-eligibility', '--confirm-eligibility'],
  ]) assert.throws(() => parseCli(args), JSON.stringify(args));
});

test('convenience preview and draft prefer the actual DOCS_TASKS without writing or credentials', async t => {
  const local = localRepo(t), raw = installDocs(local.root); fs.unlinkSync(local.token);
  const before = git(local.root, 'status', '--porcelain');
  const draft = runDraft({ kind: 'docs-main', repo: local.root });
  assert.equal(draft.source.root, 'repo'); assert.equal(draft.source.path, 'docs/dev/DOCS_TASKS.md');
  assert.equal(draft.source.sha256, createHash('sha256').update(raw).digest('hex'));
  assert.ok(Object.values(draft.eligibility).every(value => value === false));
  const result = await runProject({ kind: 'docs-main', repo: local.root, mode: 'check' }, {
    fetchImpl: async () => assert.fail('Preview must not use the provider'),
  });
  assert.equal(result.code, 'input_verified'); assert.equal(result.payloads.issues.length, 9);
  assert.equal(result.request_sha256, createHash('sha256').update(JSON.stringify(draft)).digest('hex'));
  assert.equal(fs.readFileSync(path.join(local.root, draft.source.path), 'utf8'), raw);
  assert.equal(git(local.root, 'status', '--porcelain'), before);
  assert.ok(!fs.existsSync(path.join(local.root, '.git/sdd-forge-close.lock')));
});

test('convenience bootstrap uses bundled definitions only when the default document is absent', async t => {
  const local = localRepo(t), before = git(local.root, 'status', '--porcelain'), state = fixture();
  const draft = runDraft({ kind: 'docs-main', repo: local.root });
  assert.equal(draft.source.root, 'plugin');
  const result = await runProject({ kind: 'docs-main', repo: local.root, mode: 'reconcile-only' }, { fetchImpl: state.fetch });
  assert.equal(result.code, 'projection_pending'); assert.equal(writes(state).length, 0);
  assert.equal(result.effects.length, 10);
  assert.ok(!fs.existsSync(path.join(local.root, 'docs/dev/DOCS_TASKS.md')));
  assert.equal(git(local.root, 'status', '--porcelain'), before);
  assert.ok(!fs.existsSync(path.join(local.root, '.git/sdd-forge-close.lock')));
  fs.writeFileSync(path.join(local.root, 'docs/dev/DOCS_TASKS.md'), 'Invalid source');
  await assert.rejects(runProject({ kind: 'docs-main', repo: local.root, mode: 'check' }));
  assert.throws(() => runDraft({ kind: 'docs-main', repo: local.root }));
});

test('convenience explicit tasks and alternate remote override defaults without silent fallback', async t => {
  const local = localRepo(t), raw = installDocs(local.root, 'docs/dev/SELECTED.md');
  fs.writeFileSync(path.join(local.root, 'docs/dev/DOCS_TASKS.md'), 'Invalid default');
  git(local.root, 'remote', 'rename', 'origin', 'upstream');
  const options = { kind: 'docs-main', repo: local.root, remote: 'upstream', tasks: 'docs\\dev\\SELECTED.md', mode: 'check' };
  const draft = runDraft(options);
  assert.equal(draft.source.path, 'docs/dev/SELECTED.md');
  assert.equal(draft.source.sha256, createHash('sha256').update(raw).digest('hex'));
  assert.equal((await runProject(options)).code, 'input_verified');
  assert.throws(() => runDraft({ ...options, tasks: 'docs/dev/MISSING.md' }));
  await assert.rejects(runProject({ ...options, tasks: 'docs/dev/MISSING.md' }));
  await assert.rejects(runProject({ ...options, remote: undefined }), error => error.code === 'git_preflight_failed');
  const target = path.join(local.root, 'docs/dev/DOCS_TASKS.md'); fs.unlinkSync(target); fs.mkdirSync(target);
  await assert.rejects(runProject({ kind: 'docs-main', repo: local.root, remote: 'upstream', mode: 'check' }));
});

test('convenience apply requires explicit eligibility and enforces committed sources before provider access', async t => {
  const local = localRepo(t); fs.unlinkSync(local.token); installDocs(local.root);
  const options = { kind: 'docs-main', repo: local.root, mode: 'apply' };
  const fetchImpl = async () => assert.fail('Preconditions must fail before provider access');
  await assert.rejects(runProject(options, { fetchImpl }), error => error.code === 'eligibility_not_established');
  fs.appendFileSync(path.join(local.root, 'docs/dev/DOCS_TASKS.md'), '\nUncommitted context.\n');
  await assert.rejects(runProject({ ...options, confirmEligibility: true }, { fetchImpl }), error => error.code === 'source_not_committed');
  await assert.rejects(runProject({ ...options, mode: 'reconcile-only' }, { fetchImpl }), error => error.code === 'source_not_committed');
});

test('convenience apply creates fixed tracking once and reconciliation verifies the same identities', async t => {
  const local = localRepo(t), state = fixture(); installDocs(local.root);
  const options = { kind: 'docs-main', repo: local.root, mode: 'apply', confirmEligibility: true };
  const result = await runProject(options, { fetchImpl: state.fetch });
  assert.equal(result.code, 'projection_verified', JSON.stringify(result));
  assert.equal(state.labels.length, 0); assert.equal(state.milestones.length, 1); assert.equal(state.issues.length, 9);
  assert.equal(state.milestones[0].title, 'sdd-docs-main'); assert.equal(writes(state).length, 10);
  const ids = result.associations.map(item => item.issue_number); state.calls = [];
  const readback = await runProject({ kind: 'docs-main', repo: local.root, mode: 'reconcile-only' }, { fetchImpl: state.fetch });
  assert.equal(readback.code, 'projection_verified'); assert.equal(writes(state).length, 0);
  assert.deepEqual(readback.associations.map(item => item.issue_number), ids);
  assert.ok(!fs.existsSync(path.join(local.root, '.git/sdd-forge-close.lock')));
});

test('convenience CLI resolves repo-relative defaults from an unrelated launch directory', t => {
  const local = localRepo(t); installDocs(local.root); fs.unlinkSync(local.token);
  for (const [name, tail] of [['forge-project.mjs', ['--check']], ['forge-project-draft.mjs', []]]) {
    const script = fileURLToPath(new URL('../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/' + name, import.meta.url));
    const result = spawnSync(process.execPath, [script, 'docs-main', '--repo', local.root, ...tail], {
      cwd: os.tmpdir(), encoding: 'utf8', timeout: 15000,
    });
    assert.equal(result.status, 0, result.stdout + result.stderr);
    const value = JSON.parse(result.stdout);
    if (tail.length) assert.equal(value.code, 'input_verified');
    else assert.equal(value.source.path, 'docs/dev/DOCS_TASKS.md');
  }
});

test('malformed, duplicate and foreign phase labels block projection before missing-object writes', async () => {
  for (const extra of [{ name: 'sdd-phase-2-Other' }, { name: 'SDD-PHASE-2-Other' },
    { name: 'sdd-phase-1-Bounded-outcome' }, null, { name: '' }]) {
    const state = fixture(); assert.equal((await project(state)).ok, true);
    state.issues[0].labels.push(extra); state.issues.pop(); state.calls = [];
    const result = await project(state);
    assert.equal(result.code, 'issue_content_or_parent_conflict'); assert.equal(writes(state).length, 0);
  }
});

test('docs-main permits unrelated labels but rejects case-variant managed phase labels', async () => {
  const { request, owner } = docsRequest(), state = fixture();
  const apply = () => reconcileProjection(request, owner, state.client());
  assert.equal((await apply()).ok, true); state.calls = [];
  state.issues[0].labels.push({ name: 'team-context' });
  assert.equal((await apply()).ok, true); assert.equal(writes(state).length, 0);
  state.issues[0].labels.push({ name: 'SDD-PHASE-2-Other' }); state.calls = [];
  assert.equal((await apply()).code, 'issue_content_or_parent_conflict'); assert.equal(writes(state).length, 0);
});

test('final projection readback detects phase drift while retaining earlier created effects', async () => {
  const state = fixture();
  state.hook = ({ method, route }) => {
    if (method === 'GET' && route === '/issues' && writes(state).length === 6)
      state.issues[0].labels.push({ name: 'SDD-PHASE-2-Other' });
  };
  const result = await project(state);
  assert.equal(result.code, 'issue_content_or_parent_conflict'); assert.equal(result.ok, false);
  assert.equal(result.effects.filter(item => item.status === 'created').length, 6);
  assert.equal(writes(state).length, 6);
});

test('projection reports explicit public, private and internal visibility without collapsing audiences', async () => {
  for (const [visibility, privateValue] of [['public', false], ['private', true], ['internal', true], ['internal', false]]) {
    const state = fixture();
    state.hook = ({ route }) => route === '' ? Response.json({ id: 123, full_name: 'example-owner/example-project',
      private: privateValue, visibility }) : undefined;
    const result = await project(state);
    assert.equal(result.ok, true, JSON.stringify(result)); assert.equal(result.visibility, visibility);
  }
});

test('Boolean-only visibility fallback is retained and malformed explicit metadata blocks before writes', async () => {
  for (const privateValue of [false, true]) {
    const state = fixture();
    state.hook = ({ route }) => route === '' ? Response.json({ id: 123, full_name: 'example-owner/example-project', private: privateValue }) : undefined;
    const result = await project(state); assert.equal(result.ok, true);
    assert.equal(result.visibility, privateValue ? 'private' : 'public');
  }
  for (const metadata of [{ private: true, visibility: 'public' }, { private: false, visibility: 'private' },
    { private: true, visibility: 'unsupported' }, { private: true, visibility: null }, { visibility: 'internal' }]) {
    const state = fixture();
    state.hook = ({ route }) => route === '' ? Response.json({ id: 123, full_name: 'example-owner/example-project', ...metadata }) : undefined;
    const result = await project(state);
    assert.equal(result.code, 'invalid_response'); assert.equal(writes(state).length, 0);
  }
});

test('final metadata detects private/internal audience drift despite an unchanged private Boolean', async () => {
  const state = fixture(); let observations = 0;
  state.hook = ({ route }) => route === '' ? Response.json({ id: 123, full_name: 'example-owner/example-project',
    private: true, visibility: ++observations === 1 ? 'private' : 'internal' }) : undefined;
  const result = await project(state);
  assert.equal(result.ok, false); assert.equal(result.code, 'repository_identity_or_visibility_changed');
  assert.equal(result.visibility, 'private'); assert.equal(result.effects.filter(item => item.status === 'created').length, 6);
});


test('native docs-main pre-write projection creates only its temporary owned coordination lock', async t => {
  const local = localRepo(t), { request } = docsRequest();
  const filename = path.join(local.base, 'external docs request.json');
  fs.writeFileSync(filename, JSON.stringify(request));
  const before = { config: fs.readFileSync(path.join(local.root, '.git/config')), refs: git(local.root, 'show-ref'),
    status: git(local.root, 'status', '--porcelain'), gitFiles: fs.readdirSync(path.join(local.root, '.git')).sort() };
  let calls = 0;
  const result = await runProject({ ...local.options, kind: 'docs-main', requestFile: filename }, { fetchImpl: async (_, options) => {
    calls++;
    assert.equal(options.method || 'GET', 'GET');
    const lock = path.join(local.root, '.git/sdd-forge-close.lock');
    assert.deepEqual(fs.readdirSync(lock), ['owner.json']);
    const owner = JSON.parse(fs.readFileSync(path.join(lock, 'owner.json'), 'utf8'));
    assert.equal(owner.pid, process.pid); assert.equal(typeof owner.nonce, 'string');
    assert.deepEqual(fs.readdirSync(path.join(local.root, '.git')).filter(name => name !== 'sdd-forge-close.lock').sort(), before.gitFiles);
    assert.deepEqual(fs.readFileSync(path.join(local.root, '.git/config')), before.config);
    assert.equal(git(local.root, 'show-ref'), before.refs);
    assert.equal(git(local.root, 'status', '--porcelain'), before.status);
    return Response.json({ message: 'Synthetic denial' }, { status: 403 });
  } });
  assert.equal(calls, 1); assert.equal(result.code, 'access_or_policy_denied');
  assert.deepEqual(fs.readdirSync(path.join(local.root, '.git')).sort(), before.gitFiles);
  assert.deepEqual(fs.readFileSync(path.join(local.root, '.git/config')), before.config);
  assert.equal(git(local.root, 'show-ref'), before.refs); assert.equal(git(local.root, 'status', '--porcelain'), before.status);
});

test('POSIX request and source FIFOs fail promptly before a blocking open', { skip: process.platform === 'win32' }, t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'sdd-special-input-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const runtime = new URL('../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/forge-runtime.mjs', import.meta.url).href;
  for (const [mode, name, expected] of [['request', 'request.json', 'invalid_request_file'], ['source', 'owner.md', 'invalid_source']]) {
    const filename = path.join(root, name);
    const created = spawnSync('mkfifo', [filename], { encoding: 'utf8' });
    assert.equal(created.status, 0, created.stderr);
    const child = spawnSync(process.execPath, ['--input-type=module', '-e', `
      import { requestFile, inspectSource } from ${JSON.stringify(runtime)};
      try {
        if (process.argv[1] === 'request') requestFile(process.argv[2]);
        else inspectSource({ repo: process.argv[3] }, { root: 'repo', path: 'owner.md' });
        process.exitCode = 2;
      } catch (error) { process.stdout.write(error.code || 'unclassified'); }
    `, mode, filename, root], { encoding: 'utf8', timeout: 1500 });
    assert.equal(child.error, undefined, 'Special-file rejection must not block until the child timeout');
    assert.equal(child.status, 0, child.stderr); assert.equal(child.stdout, expected);
  }
});
