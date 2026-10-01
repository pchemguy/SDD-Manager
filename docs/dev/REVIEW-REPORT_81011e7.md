# Systematic plugin review report

## Campaign metadata

| Field | Value |
| --- | --- |
| Source baseline | `81011e7db200f0eef89a52d35896bbf97575b6c1` (`81011e7`) |
| Plugin version at baseline | `0.14.1` |
| Review plan | [REVIEW-PLAN_81011e7.md](REVIEW-PLAN_81011e7.md) |
| Historical review | [PLUGIN-REVIEW_49143fa.md](reviews/PLUGIN-REVIEW_49143fa.md) |
| Campaign state | In progress; findings-only review |
| Review execution date / reviewer | 2026-10-01; primary agent with consuming-agent scenario assessments |
| Evidence boundary | Fixed source baseline; individual evidence levels recorded below; no live provider/client mutation |

The source baseline is fixed. Report commits can advance the working branch without changing the reviewed source revision. Review-only findings are reserved for a subsequent revision agent; this scaffold makes no readiness claim.

## Executive summary

Review in progress. Findings and coverage are recorded incrementally; final priority counts and readiness are reserved for P03. An empty index at an intermediate checkpoint is not a global zero-findings result.

## Unit progress and checkpoints

| Unit | Scope | Status | Finding IDs | Report checkpoint / push evidence |
| --- | --- | --- | --- | --- |
| S01 | sdd-conventions | Reviewed | None in examined scope | Commit subject identifies S01; push gate before next unit |
| S02 | sdd-orient | Reviewed | SDD-R-001 | Commit subject identifies S02; push gate before next unit |
| S03 | sdd-report | Reviewed | None in examined scope | Commit subject identifies S03; push gate before next unit |
| S04 | sdd-design | Reviewed | None in examined scope | Commit subject identifies S04; push gate before next unit |
| S05 | sdd-specify | Reviewed | None in examined scope | Commit subject identifies S05; push gate before next unit |
| S06 | sdd-plan | Reviewed | None in examined scope | Commit subject identifies S06; push gate before next unit |
| S07 | sdd-tasks | Reviewed | None in examined scope | Commit subject identifies S07; push gate before next unit |
| S08 | sdd-tdd | Reviewed | None in examined scope | Commit subject identifies S08; push gate before next unit |
| S09 | sdd-docs | Reviewed | None in examined scope | Commit subject identifies S09; push gate before next unit |
| S10 | sdd-verify | Not started | Not assessed | None |
| S11 | sdd-integrate-feature | Not started | Not assessed | None |
| S12 | sdd-forge | Not started | Not assessed | None |
| S13 | sdd-implement | Not started | Not assessed | None |
| S14 | sdd-steer | Not started | Not assessed | None |
| S15 | sdd-manage | Not started | Not assessed | None |
| P01 | Package validation | Not started | Not assessed | None |
| P02 | Cross-skill/workflow synthesis | Not started | Not assessed | None |
| P03 | Consolidation/revision handoff | Not started | Not assessed | None |

## Skill coverage and evidence

Populate each unit with the per-skill template in the plan. Account for every C01–C12 criterion, inspected baseline file, relevant contract, scenario, finding ID, and checkpoint.

### S01 — sdd-conventions

**Status:** Reviewed (coverage complete; open findings may remain).
**Inspected baseline files:** `skills/sdd-conventions/SKILL.md`; `skills/sdd-conventions/agents/openai.yaml`; `skills/sdd-conventions/assets/icon.svg`; `skills/sdd-conventions/references/design-heuristics.md`; `skills/sdd-conventions/references/modularity.md`; `skills/sdd-conventions/references/task-hierarchy.md`. No files excluded.
**Relevant contracts:** Passive criteria consumed by design, specification, planning, task derivation, review, and hosting. SKILL.md explicitly owns no artifacts, workflow execution, or mutation authorization; the hosting backend owns projection effects.

| Criterion | Outcome | Evidence / finding IDs / reason |
| --- | --- | --- |
| C01 | Satisfied | Entry/frontmatter and all linked references valid; matching metadata and local SVG checked. |
| C02 | Satisfied | SKILL.md Shared conventions and three explicit triggers keep criteria separate from operational workflows. |
| C03 | Satisfied | SKILL.md requires applicable instructions and established contracts; no authority to mutate. |
| C04 | Satisfied | Consumers load modularity, design heuristics, or task hierarchy only for relevant concerns; no required execution dependency. |
| C05 | Satisfied | task-hierarchy.md requires one task owner, one milestone parent, stable project-wide IDs, and matching feature/main parent names. |
| C06 | Not applicable | Passive conventions do not select or resume implementation; lifecycle invariant is delegated to execution owners. |
| C07 | Satisfied | task-hierarchy.md Hosted projection assigns object effects to the active backend and evidence-backed closure to the lifecycle. |
| C08 | Not applicable | No token acceptance, credential transfer, or access-check operation owned here. |
| C09 | Satisfied | Consuming-agent SC-001 rejects speculative interfaces and blocks identity/parent ambiguity; no implementation correctness claimed. |
| C10 | Satisfied | Task hierarchy states host object state is not task completion evidence. |
| C11 | Satisfied | Short entry with directly linked focused references, examples labeled by actual role, and heading spacing passed. |
| C12 | Satisfied | No unexplained supplied-context or revision-history dependencies; GitHub names are explicitly substituted examples. |

**Structural evidence:** `validate_skill.py /tmp/sdd-review-81011e7/skills/sdd-conventions` exited 0; local resource/heading checks, YAML prompt/icon consistency, and SVG XML/containment checks passed. Tool source: `/root/.codex/skills/remote-skills/skill-6ab91e941cbc8191a00ce5e8e34d83fd/scripts/validate_skill.py`. These checks do not verify display or installation.

**Scenarios:** SC-001: read-only consuming agent loaded all references and returned three concrete dispositions. It rejected a hypothetical SOLID interface and blocked duplicate T-012 projection and two-parent milestone projection; missing authoritative repair decisions were reported rather than guessed.

**Findings:** None in examined scope.
**Checkpoint:** Validate report, commit with S01 in its subject, push, and verify containment before advancing.

### S02 — sdd-orient

**Status:** Reviewed (coverage complete; open findings may remain).
**Inspected baseline files:** `skills/sdd-orient/SKILL.md`; `skills/sdd-orient/agents/openai.yaml`; `skills/sdd-orient/assets/icon.svg`; `skills/sdd-orient/references/inspection-and-handoff.md`. No files excluded.
**Relevant contracts:** Supplies scoped facts and unknowns to manage/implementation; does not authorize edits or run verification. Root/scoped instructions, active lists, last actual task commit and dirty ownership govern its handoff.

| Criterion | Outcome | Evidence / finding IDs / reason |
| --- | --- | --- |
| C01 | Satisfied | Entry, one complete reference, metadata and SVG checked; resource links resolve. |
| C02 | Satisfied | SKILL.md defines read-only discovery and scoped factual readiness. |
| C03 | Satisfied | Instruction scopes and ownership are inspected; no Git initialization, restoration, or tests authorized. |
| C04 | Satisfied | Handoff identifies prerequisites and unknowns for manage/implement; re-orientation follows material state changes. |
| C05 | Satisfied | Main/feature lists and task commits are distinguished; maintenance/steering commits do not advance completed-task boundary. |
| C06 | Satisfied | Non-Git, unborn, detached/conflicted, and incomplete evidence states are explicitly reported; consuming assessment covers readiness and pending task inference. |
| C07 | Finding | SDD-R-001: plain status command can refresh index, contradicting the stated no-index-mutation invariant. |
| C08 | Not applicable | Orientation owns no credential operation and must not execute hosting. |
| C09 | Satisfied | Disposable Git fixture observed index effect with identical clean status; guarded variant preserved bytes. No project verification performed. |
| C10 | Satisfied | Report slots distinguish none/unknown/not inspected and observed facts from inferences; checks are not repeated. |
| C11 | Satisfied | Reference scopes evidence collection and gives a usable compact handoff; headings and links passed. |
| C12 | Satisfied | No hidden conversation or revision-history requirement; declared paths permit project-specific equivalents. |

**Structural evidence:** `validate_skill.py /tmp/sdd-review-81011e7/skills/sdd-orient` exited 0; local resource/heading checks, YAML prompt/icon consistency, and SVG XML/containment checks passed. Tool source: `/root/.codex/skills/remote-skills/skill-6ab91e941cbc8191a00ce5e8e34d83fd/scripts/validate_skill.py`. These checks do not verify display or installation.

**Scenarios:** SC-002 uses read-only consuming-agent dispositions for six readiness/continuation cases. SC-003 actually executes the status example in a disposable initialized repository after a metadata-only mtime change; both runs report clean but the unguarded run rewrites index bytes.

**Findings:** SDD-R-001.
**Checkpoint:** Validate report, commit with S02 in its subject, push, and verify containment before advancing.

### S03 — sdd-report

**Status:** Reviewed (coverage complete; open findings may remain).
**Inspected baseline files:** `skills/sdd-report/SKILL.md`; `skills/sdd-report/agents/openai.yaml`; `skills/sdd-report/assets/icon.svg`; `skills/sdd-report/references/change-kinds.md`; `skills/sdd-report/references/completion-reports.md`; `skills/sdd-report/references/object-drafts.md`. No files excluded.
**Relevant contracts:** Consumes owning task, diff, verification and Git evidence; forge supplies unique associations. Owns draft format only; implementation/steering or manage persists changes, forge mutates issues, PR operations remain outside current backend.

| Criterion | Outcome | Evidence / finding IDs / reason |
| --- | --- | --- |
| C01 | Satisfied | All six skill files checked, directly linked output-specific references and metadata valid. |
| C02 | Satisfied | SKILL.md limits effects to requested text/structured drafts; labels adapt to the actual change. |
| C03 | Satisfied | A draft grants no mutation/completion authority and project conventions are read as inputs. |
| C04 | Satisfied | Forge supplies verified associations when available; object-drafts.md assigns other persistence to manage and active implementation. |
| C05 | Satisfied | Stable owning IDs required for task work; explicit no-invented-ID exception for taskless preparation; feature parent claims are scoped. |
| C06 | Satisfied | completion-reports.md names orient/manage/implement for interrupted state and reports pending commits separately. |
| C07 | Satisfied | Partial Refs versus supported closing keywords, draft-only PR scope, and branch integration distinction are explicit. |
| C08 | Not applicable | No credential acceptance or provider endpoint execution; credential disclosure prohibited in security reporting. |
| C09 | Satisfied | Evidence language requires actual checks, measurements, missing reproduction, and coverage limits; consuming scenarios assessed these distinctions. |
| C10 | Satisfied | Planned issue, performed change, verified result, pending durable commit, and unknown PR base remain separate. |
| C11 | Satisfied | Output routing and domain tables are concise, separate Risk/Solution and adjacent performance fields; examples at the end of their modules. |
| C12 | Satisfied | Examples are explicitly illustrative and cannot supply current measurements; no stale recovery owner remains. |

**Structural evidence:** `validate_skill.py /tmp/sdd-review-81011e7/skills/sdd-report` exited 0; local resource/heading checks, YAML prompt/icon consistency, and SVG XML/containment checks passed. Tool source: `/root/.codex/skills/remote-skills/skill-6ab91e941cbc8191a00ce5e8e34d83fd/scripts/validate_skill.py`. These checks do not verify display or installation.

**Scenarios:** SC-004: consuming agent drafts/assesses planned performance, partial issue contribution, taskless README, checked-but-uncommitted completion, and PR with unknown base/limited verification. No publication or runtime checks performed.

**Findings:** None in examined scope.
**Checkpoint:** Validate report, commit with S03 in its subject, push, and verify containment before advancing.

### S04 — sdd-design

**Status:** Reviewed (coverage complete; open findings may remain).
**Inspected baseline files:** `skills/sdd-design/SKILL.md`; `skills/sdd-design/agents/openai.yaml`; `skills/sdd-design/assets/icon.svg`; `skills/sdd-design/references/architecture.md`; `skills/sdd-design/references/decomposition.md`; `skills/sdd-design/references/exploration.md`. No files excluded.
**Relevant contracts:** Owns PROJECT/ARCHITECTURE/DECOMPOSITION design and optional scoped deltas; manage/orient governs writing, conventions informs boundaries, SPEC settles behavior, integrate-feature incorporates accepted overlays.

| Criterion | Outcome | Evidence / finding IDs / reason |
| --- | --- | --- |
| C01 | Satisfied | Metadata, routing links, six baseline files and resource checks valid. |
| C02 | Satisfied | Exploration, architecture and decomposition bounded; no behavioral implementation authority. |
| C03 | Satisfied | User decisions, document request and current manage/orient gate explicit; instruction-bearing PROJECT preserved. |
| C04 | Satisfied | Conventions informs boundaries; SPEC owns final contracts; integrate-feature incorporates overlays. |
| C05 | Satisfied | Roots and focused children have scoped ownership; optional feature deltas avoid duplication. |
| C06 | Not applicable | No task execution or interruption recovery owned here. |
| C07 | Satisfied | No incidental document creation/prototype mutation; governing instructions preserved before replacement. |
| C08 | Not applicable | No provider credentials or hosted execution. |
| C09 | Satisfied | Design review checks ownership, cycles and verifiable seams without claiming executable tests. |
| C10 | Satisfied | Facts, decisions, assumptions and open questions separate; design not reported implemented. |
| C11 | Satisfied | References are focused and stages may start directly with established inputs. |
| C12 | Satisfied | Current-state main documents and proposed feature deltas explicitly distinguished. |

**Structural evidence:** `validate_skill.py /tmp/sdd-review-81011e7/skills/sdd-design` exited 0; local resource/heading checks, YAML prompt/icon consistency, and SVG XML/containment checks passed. Tool source: `/root/.codex/skills/remote-skills/skill-6ab91e941cbc8191a00ce5e8e34d83fd/scripts/validate_skill.py`. These checks do not verify display or installation.

**Scenarios:** SC-005: five read-only consuming-agent dispositions preserved conversational comparison, decomposition-only scope, instruction authority, optional overlays and explicit accepted decisions.

**Findings:** None in examined scope.
**Checkpoint:** Validate report, commit with S04 in its subject, push, and verify containment before advancing.

### S05 — sdd-specify

**Status:** Reviewed (coverage complete; open findings may remain).
**Inspected baseline files:** `skills/sdd-specify/SKILL.md`; `skills/sdd-specify/agents/openai.yaml`; `skills/sdd-specify/assets/icon.svg`; `skills/sdd-specify/references/change-specification.md`; `skills/sdd-specify/references/review.md`; `skills/sdd-specify/references/system-specification.md`. No files excluded.
**Relevant contracts:** Design and accepted user decisions provide intended contracts; code/tests provide observation only. SPEC owns behavior, layout paths and PLAN delivery; manage/orient governs writing; integrate-feature incorporates accepted FEATURE-SPEC.

| Criterion | Outcome | Evidence / finding IDs / reason |
| --- | --- | --- |
| C01 | Satisfied | Six files and routing resources structurally checked. |
| C02 | Satisfied | Complete system, scoped delta and review-only modes have explicit limits. |
| C03 | Satisfied | Observed code cannot supersede accepted requirements; authoring requires current scoped authority. |
| C04 | Satisfied | Design/user resolves material undecided contracts; integrate-feature owns accepted delta incorporation. |
| C05 | Satisfied | Canonical root/child ownership, declared feature delta and objective acceptance are explicit. |
| C06 | Not applicable | No task execution or recovery owned here. |
| C07 | Satisfied | Review-only prohibits mutation; document authoring gate separates downstream code work. |
| C08 | Not applicable | No credentials or provider operations. |
| C09 | Satisfied | Acceptance is observable behavior, not test commands; undecided public choices block completion. |
| C10 | Satisfied | Reports affected contracts and unresolved decisions without implementation claims. |
| C11 | Satisfied | Focused references, bounded lists and end-state editorial checks consistent. |
| C12 | Satisfied | Active delta may explain change; final main SPEC removes editing history while retaining real compatibility contracts. |

**Structural evidence:** `validate_skill.py /tmp/sdd-review-81011e7/skills/sdd-specify` exited 0; local resource/heading checks, YAML prompt/icon consistency, and SVG XML/containment checks passed. Tool source: `/root/.codex/skills/remote-skills/skill-6ab91e941cbc8191a00ce5e8e34d83fd/scripts/validate_skill.py`. These checks do not verify display or installation.

**Scenarios:** SC-006: read-only consumer correctly withheld conflicting/invented requirements, scoped the feature delta, preserved review-only mode and required one interface owner.

**Findings:** None in examined scope.
**Checkpoint:** Validate report, commit with S05 in its subject, push, and verify containment before advancing.

### S06 — sdd-plan

**Status:** Reviewed (coverage complete; open findings may remain).
**Inspected baseline files:** `skills/sdd-plan/SKILL.md`; `skills/sdd-plan/agents/openai.yaml`; `skills/sdd-plan/assets/icon.svg`; `skills/sdd-plan/references/delivery-plan.md`; `skills/sdd-plan/references/physical-layout.md`; `skills/sdd-plan/references/review.md`. No files excluded.
**Relevant contracts:** Consumes accepted design/SPEC plus actual placement evidence; owns delivery strategy and physical layout, optional FEATURE-PLAN; tasks derives units and integrate-feature incorporates accepted delta.

| Criterion | Outcome | Evidence / finding IDs / reason |
| --- | --- | --- |
| C01 | Satisfied | Six resources and routing/metadata checks passed. |
| C02 | Satisfied | PLAN/layout separate; focused scope does not rewrite the other. |
| C03 | Satisfied | Material upstream choices return to owner; authoring requires manage/orient scope. |
| C04 | Satisfied | Tasks consumes accepted strategy and layout; integration separate from direct correction. |
| C05 | Satisfied | Objective phase/milestone exits, canonical children, optional feature strategy and physical ownership explicit. |
| C06 | Satisfied | Meaningful stopping boundaries specified for downstream execution, without executing tasks. |
| C07 | Satisfied | Review-only has no edits; authoring restricted to authorized paths. |
| C08 | Not applicable | No hosted credentials or execution. |
| C09 | Satisfied | Boundary evidence planned without claiming checks run; consumer flagged vague exit without inventing target. |
| C10 | Satisfied | Intended paths differ from observed existence; proposed strategy not implementation. |
| C11 | Satisfied | Strategy then ownership then consistency; root/child instructions scoped and navigable. |
| C12 | Satisfied | Main PLAN/layout end state separated from active transition delta and real compatibility obligations. |

**Structural evidence:** `validate_skill.py /tmp/sdd-review-81011e7/skills/sdd-plan` exited 0; local resource/heading checks, YAML prompt/icon consistency, and SVG XML/containment checks passed. Tool source: `/root/.codex/skills/remote-skills/skill-6ab91e941cbc8191a00ce5e8e34d83fd/scripts/validate_skill.py`. These checks do not verify display or installation.

**Scenarios:** SC-007: consumer withheld dependent planning for unresolved SPEC/design, reused valid existing feature strategy, flagged unobservable exit and SPEC-removal conflict without inventing decisions.

**Findings:** None in examined scope.
**Checkpoint:** Validate report, commit with S06 in its subject, push, and verify containment before advancing.

### S07 — sdd-tasks

**Status:** Reviewed (coverage complete; open findings may remain).
**Inspected baseline files:** `skills/sdd-tasks/SKILL.md`; `skills/sdd-tasks/agents/openai.yaml`; `skills/sdd-tasks/assets/icon.svg`; `skills/sdd-tasks/references/progress-review.md`; `skills/sdd-tasks/references/task-derivation.md`. No files excluded.
**Relevant contracts:** Derives stable unchecked main/feature units from accepted design/SPEC/PLAN/layout and reviews progress. Implement owns selection/completion, integrate-feature reconciles, steer amends at human checkpoint.

| Criterion | Outcome | Evidence / finding IDs / reason |
| --- | --- | --- |
| C01 | Satisfied | Five files structurally valid; generation/progress routing explicit. |
| C02 | Satisfied | Derivation and read-only evidence review exclude implementation/selection/reconciliation. |
| C03 | Satisfied | Writing requires manage/orient and settled upstream decisions; review cannot check boxes. |
| C04 | Satisfied | Explicit routing to implement, integrate-feature and steer matches declared ownership. |
| C05 | Satisfied | One project-wide ID space, four-space nesting, feature-scoped parents and unique executable owner. |
| C06 | Satisfied | Dependencies and eligibility reviewed as inputs for implement, not selected here. |
| C07 | Satisfied | No hosted projection/commits authorized; initial completion claims require established evidence. |
| C08 | Not applicable | No credential or provider operation. |
| C09 | Satisfied | Checkbox/message/presence not evidence; observed prior acceptance needed for checked derivation. |
| C10 | Satisfied | Reports structures and evidence gaps separately from implemented functionality. |
| C11 | Satisfied | Clear hierarchy example, attached task detail and separate owner routing. |
| C12 | Satisfied | Example explicitly illustrative; active feature and complete main scopes retained. |

**Structural evidence:** `validate_skill.py /tmp/sdd-review-81011e7/skills/sdd-tasks` exited 0; local resource/heading checks, YAML prompt/icon consistency, and SVG XML/containment checks passed. Tool source: `/root/.codex/skills/remote-skills/skill-6ab91e941cbc8191a00ce5e8e34d83fd/scripts/validate_skill.py`. These checks do not verify display or installation.

**Scenarios:** SC-008: consumer detected ID collision, left unconfirmed existing code unchecked, routed selection/reconciliation, and preserved independent feature/main parent claims; sample used four-space nesting.

**Findings:** None in examined scope.
**Checkpoint:** Validate report, commit with S07 in its subject, push, and verify containment before advancing.

### S08 — sdd-tdd

**Status:** Reviewed (coverage complete; open findings may remain).
**Inspected baseline files:** `skills/sdd-tdd/LICENSE`; `skills/sdd-tdd/SKILL.md`; `skills/sdd-tdd/agents/openai.yaml`; `skills/sdd-tdd/assets/icon.svg`; `skills/sdd-tdd/references/test-first-cycle.md`; `skills/sdd-tdd/references/testing-strategy.md`; `skills/sdd-tdd/references/upstream-provenance.md`; `skills/sdd-tdd/references/writing-good-tests.md`. No files excluded.
**Relevant contracts:** Owns strategy, tests and development test execution; implement/steer owns production GREEN/refactor, verify acceptance campaign and active workflow persistence. Local MIT provenance retained; pinned upstream not independently fetched.

| Criterion | Outcome | Evidence / finding IDs / reason |
| --- | --- | --- |
| C01 | Satisfied | Eight files structurally checked; local MIT notice and both-module adaptation described. |
| C02 | Satisfied | Strategy-only distinct from test edits and production handoff. |
| C03 | Satisfied | Current scope/environment, preserved code and established exceptions respected. |
| C04 | Satisfied | Test/production/acceptance/docs/report/completion owners explicit. |
| C05 | Satisfied | Accepted contracts independently determine expectations; no test-defined requirements/layout. |
| C06 | Satisfied | Missing original RED handled by characterization or isolated sensitivity, not reset/deletion. |
| C07 | Satisfied | No completion/commit/push/issue effects owned here. |
| C08 | Not applicable | No credential or provider access ownership. |
| C09 | Satisfied | Setup versus behavioral RED, refactor baseline, independent values, doubles and sensitivity assessed in SC-009. |
| C10 | Satisfied | Focused/mock passing evidence and historical RED limits explicit. |
| C11 | Satisfied | Separate cycle, strategy and test-writing modules; illustrative examples end of test-writing reference. |
| C12 | Blocked | Local provenance and no conversation-dependent directives confirmed. Independent pinned upstream content/license retrieval returned DisabledError; cannot attest remote provenance in this environment. |

**Structural evidence:** `validate_skill.py /tmp/sdd-review-81011e7/skills/sdd-tdd` exited 0; local resource/heading checks, YAML prompt/icon consistency, and SVG XML/containment checks passed. Tool source: `/root/.codex/skills/remote-skills/skill-6ab91e941cbc8191a00ce5e8e34d83fd/scripts/validate_skill.py`. These checks do not verify display or installation.

**Scenarios:** SC-009: consumer classified import failure as blocker, preserved interrupted code, allowed refactor without fabricated RED, rejected self-derived/mocked target checks and retained external integration gap. Pinned GitHub and raw upstream fetches failed with DisabledError.

**Findings:** None in examined scope.
**Checkpoint:** Validate report, commit with S08 in its subject, push, and verify containment before advancing.

### S09 — sdd-docs

**Status:** Reviewed (coverage complete; open findings may remain).
**Inspected baseline files:** `skills/sdd-docs/SKILL.md`; `skills/sdd-docs/agents/openai.yaml`; `skills/sdd-docs/assets/icon.svg`; `skills/sdd-docs/references/in-code-documentation.md`; `skills/sdd-docs/references/review-and-findings.md`; `skills/sdd-docs/references/standalone-documentation.md`. No files excluded.
**Relevant contracts:** Owns scoped module/API/README/guide documentation and checks; manage/orient governs edits, active workflow persists; governing design/SPEC/PLAN/layout amendment findings go to user without automatic invocation.

| Criterion | Outcome | Evidence / finding IDs / reason |
| --- | --- | --- |
| C01 | Satisfied | Six files and selected-work routing structurally checked. |
| C02 | Satisfied | Docs-only code edits preserve executable statements/signatures; scope/audit distinguished. |
| C03 | Satisfied | Generated/external policy respected; user decides governing amendments, independent docs continue. |
| C04 | Satisfied | Implement/steer coordinates maintenance; repairs routed, verify/report boundaries retained. |
| C05 | Satisfied | All owned modules in selected scope covered, project style or suitable fallback, main contracts not rewritten through docs. |
| C06 | Not applicable | No task selection/completion/recovery owned here. |
| C07 | Satisfied | No commits/push/host changes in docs; mutations require scoped eligible state. |
| C08 | Not applicable | No credentials or provider access. |
| C09 | Satisfied | Inspection versus execution explicit for examples/lint; final diff checked for behavior changes. |
| C10 | Satisfied | Coverage/exclusions/check outcomes and governing Location/Issue/Impact/Proposed amendment required. |
| C11 | Satisfied | Focused modules, coverage tables and blank heading/template spacing consistent. |
| C12 | Satisfied | Current facts used for snippets, planned capabilities labeled, no conversation-dependent example rules. |

**Structural evidence:** `validate_skill.py /tmp/sdd-review-81011e7/skills/sdd-docs` exited 0; local resource/heading checks, YAML prompt/icon consistency, and SVG XML/containment checks passed. Tool source: `/root/.codex/skills/remote-skills/skill-6ab91e941cbc8191a00ce5e8e34d83fd/scripts/validate_skill.py`. These checks do not verify display or installation.

**Scenarios:** SC-010: consumer selected suitable Python fallback, separated generated/vendor policy, kept docs-only repairs scoped and deferred governing amendments without calling owner skills.

**Findings:** None in examined scope.
**Checkpoint:** Validate report, commit with S09 in its subject, push, and verify containment before advancing.

### S10 — sdd-verify

Not started. Files, criteria, scenarios, and findings have not been assessed.

### S11 — sdd-integrate-feature

Not started. Files, criteria, scenarios, and findings have not been assessed.

### S12 — sdd-forge

Not started. Files, criteria, scenarios, and findings have not been assessed.

### S13 — sdd-implement

Not started. Files, criteria, scenarios, and findings have not been assessed.

### S14 — sdd-steer

Not started. Files, criteria, scenarios, and findings have not been assessed.

### S15 — sdd-manage

Not started. Files, criteria, scenarios, and findings have not been assessed.

## Package and composition results

### P01 — Package validation

Not started. Record inventory, tools/commands, actual outcomes, and unverified portability/client claims.

### P02 — Cross-skill and workflow synthesis

Not started. Record the producer/consumer matrix, workflow coverage, reciprocal contracts, and cross-skill findings.

### P03 — Consolidation and revision handoff

Not started. Reconcile coverage and findings before assigning a readiness conclusion.

## Global finding index

Finding IDs are global and stable across units. An empty index means no findings recorded so far, not that unreviewed units are defect-free.

| ID | Title | Type | Priority | Status | Units / criteria | Related IDs |
| --- | --- | --- | --- | --- | --- | --- |
| SDD-R-001 | Orientation status example can mutate the index | Defect | P2 | Open | S02 / C07 | None |

## Finding records

Canonical finding records below preserve baseline evidence and objective revision checks. Source corrections remain unperformed during this campaign.

### SDD-R-001 — Orientation status example can mutate the index

| Field | Value |
| --- | --- |
| Type / priority / status | Defect / P2 / Open |
| Units / criteria / category | S02 / C07 / Git / read-only contract |
| Affected baseline locations | skills/sdd-orient/SKILL.md:8,12; references/inspection-and-handoff.md:14–21 at 81011e7 |
| Confidence | High: executed disposable Git fixture reproduced the mutation with unchanged content and clean status |
| Evidence | SKILL.md prohibits index changes, but reference calls ordinary git status read-only. After mtime-only change, git status exited 0 and returned empty output while index bytes changed. GIT_OPTIONAL_LOCKS=0 returned the same output and preserved bytes. |
| Consequence | Routine orientation violates its promised read-only baseline and can refresh shared index state unexpectedly; this is metadata mutation, not evidence of content loss. |
| Recommended correction | Make inspection commands suppress optional Git writes, using git --no-optional-locks or a scoped GIT_OPTIONAL_LOCKS=0 environment. Preserve host portability and explain that read-only means no index refresh. |
| Recheck | On a disposable committed repo with tracked-file metadata changed but identical content, orientation reports clean status without changing index bytes; verify staged/unstaged/conflicted reporting still works. |
| Related IDs | None |
| Revision disposition | Not revised; source held at 81011e7. |

## Scenario register

Allocate stable scenario IDs `SC-001`, `SC-002`, and so on. Record actual inputs, expected behavior, observed results, evidence level, and gaps; do not mark planned experiments as performed.

| Scenario ID | Unit(s) / workflow | Setup and inputs | Expected behavior | Evidence level / command | Observed result | Finding IDs / limits |
| --- | --- | --- | --- | --- | --- | --- |
| SC-001 | S01 / conventions | Three cohesive functions with hypothetical consumer; duplicate T-012 across main/feature; milestone2.2 under two phases | Proportionate criteria; block ambiguous identities/parentage without performing hosted effects | Read-only consuming-agent assessment | No speculative interface; both malformed projections blocked; authority decision deferred | No actual refactor or host call; supplied structures assessed, not a complete project |
| SC-002 | S02 / orientation | Non-Git; unborn; monorepo rule conflict; checked T-002 ahead of T-001 commit; steering commit; detached/conflicted | Report factual readiness/unknowns and task ownership; no tests, reset, initialization, or verification | Read-only consuming-agent assessment | Non-Git/unborn/conflicts block ordinary mutation; scoped rule conflict deferred; T-002 pending-complete or incomplete inferred only with ownership/evidence; detached state reported without inventing universal permission | Supplied states rather than filesystem inspection of a real project |
| SC-003 | S02 / read-only Git | Disposable main branch; one committed unchanged file; advance tracked file mtime by 5 seconds | Index bytes preserved by orientation's read-only command example | Executed local fixture: git status --porcelain=v1 --untracked-files=all; repeat with GIT_OPTIONAL_LOCKS=0; commands exited 0 | Both status outputs empty; plain run changed index bytes, guarded run did not | SDD-R-001; metadata refresh observed, not staged-content corruption |
| SC-004 | S03 / drafts and status | Unmeasured performance T-012; partial T-013 with verified #123 but no checks; unassigned README; uncommitted task; PR unknown base | No promised achieved speedup or invented identity/checks; partial Refs; pending commit; unknown base disclosed | Read-only consuming-agent draft/disposition | Future benchmark plan only; partial contribution uses Refs and discloses unrun checks; taskless README has no invented ID; pending commit is not completed; unknown PR base and missing diff remain unstated | Drafts only; actual task/branch diff not supplied, so missing details must remain explicit |
| SC-005 | S04 / design scope and authority | Compare seed architecture; decomposition-only with unsettled errors; replace instruction-bearing PROJECT; behavioral-only feature; code conflicts with accepted decision | No incidental writing/overlays; material unknowns and instruction/decision conflicts resolved before dependent mutation | Read-only consuming-agent assessment | Conversation only for comparison; decomposition can preserve nonmaterial error details for SPEC; preserve PROJECT rules before replacement; no architecture overlay when boundaries unchanged; accepted-decision conflict requires resolution | No documents written; materiality of unsettled errors requires actual project evidence |
| SC-006 | S05 / specification authority and scope | Parser/design conflict; one-contract feature; review only; undecided errors; divergent duplicate root/child signatures | No code-to-requirement promotion, unrelated rewrites or guessed public behavior; resolve ownership and decisions | Read-only consuming-agent assessment | Resolved decisions required before affected authoring; FEATURE-SPEC references unaffected nodes; review remained read-only; errors block final contract; duplicate interface needs canonical accepted signature | No actual project documents or mutations; hypothetical conflict resolution needs user/project evidence |
| SC-007 | S06 / planning scope and exits | PLAN-only unresolved SPEC; feature fits current plan/layout; layout-only uncertain component; vague performance exit; PLAN removes SPEC-required behavior | Respect focused scope, upstream ownership, optionality and measurable exits | Read-only consuming-agent assessment | No automatic layout/PLAN crossover; no ceremonial FEATURE-PLAN; material uncertainties returned upstream; vague milestone and removal conflict reported; no invented acceptance thresholds | No documents changed; actual adequacy of existing strategy and materiality need project evidence |
| SC-008 | S07 / identity, form and ownership | Duplicate main/feature T012; existing code/tests with unconfirmed acceptance; select/code request; feature integration; feature-only parent complete | Unique IDs, evidence-gated status, owning skill routing, scoped parent completion | Read-only consuming-agent assessment and checklist draft | New independent feature ID required; prior task unchecked pending evidence; selection to implement and reconciliation to integrate-feature; main parent not inferred complete; sample indentation 0/4/8/12 spaces | No actual derivation, selection, verification or document mutation |
| SC-009 | S08 / meaningful testing evidence | Import-failure regression; pre-test interrupted code/no deletion; behavior-preserving refactor; self-derived expectation and target mock; unavailable external API | Behavioral RED only, preserve code, independent expectations, bounded mock claims | Read-only consuming-agent assessment; attempted remote provenance inspection | Setup failure not RED; characterization is not historical RED; refactor uses existing protection; target behavior needs real exercise and independent expected value; mocked local pass not integration completion | No tests executed; pinned upstream independently unverified because GitHub and raw fetch returned DisabledError; local license inspected |
| SC-010 | S09 / documentation authority and coverage | Python no style; generated/vendor and owned module missing docs; README/SPEC option conflict; docs-only discovers behavior bug; governing architecture/layout amendments | Suitable fallback, owned module coverage, no scope/requirement changes via docs | Read-only consuming-agent assessment | Google-style suitable within scope; generated/vendor accounted separately; inspect actual CLI before README resolution; code bug routed without repair; governing amendment fields reported to user, no automatic invocation | No docstrings/examples changed or executed; actual CLI evidence and generated editing policy not supplied |

## Revision queue and human decisions

Not established. Populate after findings are consolidated, ordering by priority and dependency while retaining the stable IDs. Source fixes are not authorized by the review plan alone.

| Order | Finding IDs | Owning skill(s) / paths | Recommended change | Prerequisites / human decisions | Required recheck |
| --- | --- | --- | --- | --- | --- |

## Validation limits and remaining work

Remaining Not started units have not been assessed. Historical evidence is linked for context and is rechecked where applicable; it is not substituted for fresh results. Record uninspected files, unavailable tools, unexecuted scenarios, external claims needing verification, and client/provider limits as the campaign progresses.
