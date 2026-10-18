/** Synthetic closure contracts; no real token or provider mutation. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { parseCli, validateRequest, evidenceComment, GitHubClient, reconcileClosure, run } from '../../../../../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/forge-close.mjs';

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


const state = fixture();
state.issues[0].labels.push({name:'sdd-phase-2-Other'});
const result = await close(state);
console.log(JSON.stringify({scenario:'contradictory phase labels',ok:result.ok,code:result.code,writes:writes(state),final_state:state.issues[0].state}));
