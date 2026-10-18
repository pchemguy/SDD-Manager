/** Observable projection/input contracts; synthetic credentials and provider. */
import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { GitHubTransport } from '../../../../../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/github-client.mjs';
import { GitHubClient as CompletionClient } from '../../../../../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/forge-close.mjs';
import { parseOwner, draftProjection, validateProjection, renderProjection } from '../../../../../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/projection-input.mjs';
import { reconcileProjection, parseCli, run as runProject } from '../../../../../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/forge-project.mjs';
import { run as runDraft, parseCli as parseDraftCli } from '../../../../../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/forge-project-draft.mjs';

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


const state = fixture();
state.hook = ({route}) => route === '' ? Response.json({id:123,full_name:'example-owner/example-project',private:true,visibility:'internal'}) : undefined;
const result = await project(state);
console.log(JSON.stringify({scenario:'internal visibility',ok:result.ok,visibility:result.visibility,code:result.code}));
const conflicting = fixture();
await project(conflicting);
conflicting.issues[0].labels.push({name:'SDD-PHASE-2-Other'});
conflicting.calls = [];
const contradictory = await project(conflicting);
console.log(JSON.stringify({scenario:'case-variant foreign phase label',ok:contradictory.ok,code:contradictory.code,writes:writes(conflicting).length}));
