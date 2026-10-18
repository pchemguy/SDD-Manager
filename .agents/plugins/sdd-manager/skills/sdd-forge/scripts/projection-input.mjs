/**
 * Pure canonical-list, JSON handoff and outgoing-template boundary.
 * No filesystem, credential or hosted effects. Drafts intentionally omit
 * semantic decisions; agent enrichment and caller eligibility remain required.
 * See forge-project-input.md for grammar, schema and content-review ownership.
 */
import { fail, keys, repositoryName, text } from './github-client.mjs';

const ID = /^(?:T-\d{3,}|DOCS-\d{3})$/;
const FLAGS = ['tracking', 'ready', 'accepted', 'published', 'eligible', 'exclusive', 'content_reviewed'];
const nameOf = value => value.trim().replace(/\.$/, '');
const authored = (value, max = 16000, multiline = false) => text(value, max, multiline) && !/<!--\s*\/?sdd-forge:/.test(value);
const nameValid = value => authored(value, 200);
const list = (value, max = 1000) => Array.isArray(value) && value.length <= max;
const unique = values => new Set(values).size === values.length;

/** Portable host-name normalization; meaningful case and Unicode letters remain. */
export function hostName(value) {
  const result = value.trim().replace(/[^\p{L}\p{N}._-]+/gu, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  if (!result) fail('invalid_host_name');
  return result;
}

/**
 * Read the supported canonical checkbox grammar, ignoring fenced examples.
 * This extracts structure, never prose dependencies or acceptance decisions.
 * @returns {object} Selected hierarchy and complete owning-list task IDs.
 */
export function parseOwner(content, kind, phaseId) {
  if (!['phase', 'docs-main'].includes(kind) || typeof content !== 'string'
      || Buffer.byteLength(content) > 1048576 || Buffer.from(content).toString('utf8') !== content
      || /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(content)) fail('unsupported_source_format');
  const phases = [], docs = [], all = []; let phase, milestone, fence;
  for (const line of content.replace(/\r\n/g, '\n').split('\n')) {
    const code = line.match(/^\s*([`]{3,}|~{3,})/);
    if (code) {
      if (!fence) fence = code[1];
      else if (code[1][0] === fence[0] && code[1].length >= fence.length && line.trim() === code[1]) fence = null;
      continue;
    }
    if (fence) continue;
    let match;
    if (kind === 'docs-main' && (match = line.match(/^- \[([ xX])\] (DOCS-\d{3}) [—–-] (.+)$/))) {
      docs.push({ id: match[2], name: nameOf(match[3]), milestone_id: 'docs-main', checked: match[1].toLowerCase() === 'x' }); continue;
    }
    if (kind === 'phase' && (match = line.match(/^## Phase ([1-9]\d*) [—–-] (.+)$/))) {
      phase = { id: match[1], name: nameOf(match[2]), checked: null, milestones: [] };
      phases.push(phase); milestone = null; continue;
    }
    if (kind === 'phase' && (match = line.match(/^- \[([ xX])\] Phase ([1-9]\d*) [—–-] (.+)$/))) {
      if (!phase || phase.checked !== null || phase.id !== match[2] || phase.name !== nameOf(match[3])) fail('unsupported_source_format');
      phase.checked = match[1].toLowerCase() === 'x'; continue;
    }
    if (kind === 'phase' && (match = line.match(/^ {4}- \[([ xX])\] Milestone ([1-9]\d*(?:\.[1-9]\d*)+) [—–-] (.+)$/))) {
      if (!phase || phase.checked === null || !match[2].startsWith(phase.id + '.')) fail('unsupported_source_format');
      milestone = { id: match[2], name: nameOf(match[3]), checked: match[1].toLowerCase() === 'x', tasks: [] };
      phase.milestones.push(milestone); continue;
    }
    if (kind === 'phase' && (match = line.match(/^ {8}- \[([ xX])\] (T-\d{3,}) [—–-] (.+)$/))) {
      if (!milestone) fail('unsupported_source_format');
      const task = { id: match[2], name: nameOf(match[3]), milestone_id: milestone.id, checked: match[1].toLowerCase() === 'x' };
      milestone.tasks.push(task); all.push(task); continue;
    }
    if (/^\s*-\s+\[[ xX]\]\s+(?:Phase\b|Milestone\b|T-\d|DOCS-\d)/.test(line)) fail('unsupported_source_format');
  }
  if (fence) fail('unsupported_source_format');
  if (kind === 'docs-main') {
    if (docs.length !== 9 || docs.some((item, index) => item.id !== 'DOCS-' + String(index + 1).padStart(3, '0') || !nameValid(item.name))) fail('unsupported_source_format');
    return { kind, phase: null, milestones: [{ id: 'docs-main', name: 'docs-main', tasks: docs }], tasks: docs, all_task_ids: docs.map(item => item.id) };
  }
  if (!phases.length || !unique(phases.map(item => item.id)) || !unique(all.map(item => item.id))
      || phases.some(item => item.checked === null || !nameValid(item.name) || !item.milestones.length
        || !unique(item.milestones.map(m => m.id)) || item.milestones.some(m => !nameValid(m.name) || !m.tasks.length || m.tasks.some(t => !nameValid(t.name))))) fail('unsupported_source_format');
  const selected = phases.find(item => item.id === String(phaseId));
  if (!selected) fail('phase_not_in_source');
  return { kind, phase: { id: selected.id, name: selected.name }, milestones: selected.milestones,
    tasks: selected.milestones.flatMap(item => item.tasks), all_task_ids: all.map(item => item.id) };
}

/** Generate an incomplete JSON template; no dependency/role inference or approval. */
export function draftProjection(repository, source, inventory) {
  return {
    schema_version: 1, repository: repositoryName(repository), kind: inventory.kind, source: { ...source },
    phase: inventory.phase ? { ...inventory.phase, description: null, color: '1d76db' } : null,
    milestones: inventory.milestones.map(item => ({ id: item.id, name: item.name,
      kind: inventory.kind === 'docs-main' ? 'docs-main' : null, description: null, review_task: null })),
    tasks: inventory.tasks.map(item => ({ id: item.id, name: item.name, milestone_id: item.milestone_id,
      role: inventory.kind === 'docs-main' ? 'documentation' : null, depends_on: null,
      prerequisites: null, scope: null, acceptance: null, sources: [] })),
    external_task_ids: [], eligibility: Object.fromEntries(FLAGS.map(key => [key, false])),
  };
}

function normalize(value) {
  if (typeof value === 'string') return value.replace(/\r\n/g, '\n');
  if (Array.isArray(value)) return value.map(normalize);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, normalize(item)]));
  return value;
}

/**
 * Validate the exact request, source structure, dependencies and review roles.
 * Source bytes/hash/publication and actual semantic eligibility are separate
 * caller/runtime checks; true flags alone are not evidence of those facts.
 */
export function validateProjection(input, inventory, requireEligibility = false) {
  if (!inventory || Buffer.byteLength(JSON.stringify(input)) > 1048576) fail('invalid_projection');
  const value = normalize(input);
  keys(value, ['schema_version', 'repository', 'kind', 'source', 'phase', 'milestones', 'tasks', 'external_task_ids', 'eligibility']);
  if (value.schema_version !== 1 || value.kind !== inventory.kind) fail('invalid_projection');
  value.repository = repositoryName(value.repository);
  keys(value.source, ['root', 'path', 'sha256']);
  const source = value.source;
  if (!['repo', 'plugin'].includes(source.root) || !authored(source.path, 1024)
      || source.path.includes('\\') || source.path.includes(':') || source.path.startsWith('/')
      || source.path.split('/').some(part => !part || part === '.' || part === '..') || !/\.md$/i.test(source.path)
      || !/^[a-f0-9]{64}$/.test(source.sha256)
      || (source.root === 'plugin' && (value.kind !== 'docs-main' || source.path !== 'assets/DOCS_TASKS_TEMPLATE.md'))) fail('invalid_source');
  keys(value.eligibility, FLAGS);
  if (FLAGS.some(key => typeof value.eligibility[key] !== 'boolean')) fail('invalid_eligibility');
  if (requireEligibility && FLAGS.some(key => !value.eligibility[key])) fail('eligibility_not_established');
  if (!list(value.tasks) || !value.tasks.length || !list(value.milestones) || !value.milestones.length
      || !list(value.external_task_ids) || !unique(value.external_task_ids)
      || value.external_task_ids.some(id => typeof id !== 'string' || !ID.test(id) || inventory.all_task_ids.includes(id))) fail('invalid_projection');
  if (value.kind === 'phase') {
    keys(value.phase, ['id', 'name', 'description', 'color']);
    if (value.phase.id !== inventory.phase.id || value.phase.name !== inventory.phase.name
        || !authored(value.phase.description, 100) || !/^[a-f0-9]{6}$/.test(value.phase.color)) fail('phase_identity_conflict');
  } else if (value.phase !== null) fail('invalid_projection');
  if (value.milestones.length !== inventory.milestones.length || value.tasks.length !== inventory.tasks.length) fail('source_structure_conflict');
  for (const [index, item] of value.milestones.entries()) {
    keys(item, ['id', 'name', 'kind', 'description', 'review_task']);
    const expected = inventory.milestones[index];
    if (item.id !== expected.id || item.name !== expected.name || !authored(item.description, 16000, true)) fail('milestone_identity_conflict');
  }
  const known = new Set([...inventory.all_task_ids, ...value.external_task_ids]);
  for (const [index, item] of value.tasks.entries()) {
    keys(item, ['id', 'name', 'milestone_id', 'role', 'depends_on', 'prerequisites', 'scope', 'acceptance', 'sources']);
    const expected = inventory.tasks[index];
    if (item.id !== expected.id || item.name !== expected.name || item.milestone_id !== expected.milestone_id) fail('task_identity_conflict');
    if (!list(item.depends_on) || !unique(item.depends_on)
        || item.depends_on.some(id => !known.has(id) || id === item.id)) fail('invalid_dependencies');
    if (!authored(item.prerequisites, 8000, true) || !authored(item.scope, 16000, true) || !authored(item.acceptance, 16000, true)
        || !list(item.sources, 16) || !item.sources.length || item.sources.some(ref => !authored(ref, 1024))) fail('incomplete_brief');
  }
  const visited = new Set(), visiting = new Set(), tasks = new Map(value.tasks.map(item => [item.id, item]));
  function visit(id) {
    if (visiting.has(id)) fail('cyclic_dependencies');
    if (visited.has(id) || !tasks.has(id)) return;
    visiting.add(id); tasks.get(id).depends_on.forEach(visit); visiting.delete(id); visited.add(id);
  }
  value.tasks.forEach(item => visit(item.id));
  if (value.kind === 'docs-main') {
    if (value.milestones.length !== 1 || value.milestones[0].kind !== 'docs-main'
        || value.milestones[0].review_task !== null || value.tasks.some(item => item.role !== 'documentation')) fail('invalid_docs_scope');
  } else {
    if (value.milestones.length < 2 || value.milestones.at(-1).kind !== 'phase-review') fail('invalid_review_scope');
    const reviews = [];
    for (const [index, item] of value.milestones.entries()) {
      const members = value.tasks.filter(task => task.milestone_id === item.id), review = members.at(-1);
      const final = index === value.milestones.length - 1;
      if (item.kind !== (final ? 'phase-review' : 'delivery') || item.review_task !== review?.id
          || review.role !== (final ? 'phase-review' : 'milestone-review')
          || (final ? members.length !== 1 : members.length < 2)
          || members.slice(0, -1).some(task => task.role !== 'delivery')
          || members.slice(0, -1).some(task => !review.depends_on.includes(task.id))
          || (final && reviews.some(id => !review.depends_on.includes(id)))) fail('invalid_review_scope');
      reviews.push(review.id);
    }
  }
  renderProjection(value); // Check actual rendered field sizes before any effects.
  return value;
}

/** Render only reviewed fields; local source bytes/hash/eligibility never upload. */
export function renderProjection(value) {
  const phase = value.phase;
  const label = phase ? { name: 'sdd-phase-' + phase.id + '-' + hostName(phase.name), color: phase.color, description: phase.description } : null;
  const milestones = value.milestones.map(item => ({ key: item.id,
    title: item.kind === 'docs-main' ? 'docs-main' : 'sdd-' + item.id + '-' + hostName(item.name),
    state: 'open', description: (item.kind === 'docs-main' ? '<!-- sdd-forge:docs-milestone=docs-main -->\n' : '') + item.description }));
  const issues = value.tasks.map(item => {
    const body = [
      ...(phase ? [] : ['<!-- sdd-forge:docs-scope=main -->']),
      '## Task brief <!-- sdd-forge:task-id=' + item.id + ' -->', '',
      '**Outcome:** ' + item.name + '.', '',
      '**Context:** ' + (phase ? 'Phase ' + phase.id + ' — ' + phase.name + ', milestone ' + item.milestone_id : 'Main documentation preparation, docs-main') + '.', '',
      '**Scope and dependencies:**', '',
      '- **Depends on:** ' + (item.depends_on.length ? item.depends_on.join(', ') : 'None') + '. ' + item.prerequisites,
      '- **Scope:** ' + item.scope, '',
      '**Acceptance and verification:** ' + item.acceptance, '',
      '**Sources:** ' + item.sources.join('; '),
      '<!-- /sdd-forge:task-id=' + item.id + ' -->',
    ].join('\n');
    return { key: item.id, title: '[' + item.id + '] ' + item.name, body, labels: label ? [label.name] : [], milestone_id: item.milestone_id };
  });
  if ((label && !text(label.name, 100)) || milestones.some(item => !text(item.title, 255))
      || issues.some(item => !text(item.title, 255) || Buffer.byteLength(item.body) > 32768)) fail('rendered_content_too_large');
  return { label, milestones, issues };
}
