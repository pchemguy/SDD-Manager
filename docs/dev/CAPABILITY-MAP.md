# SDD Manager capability map

This document records the plugin's intended capabilities, ownership, and present implementation status. It does not grant authorization to modify a project. **Included** means packaged as a focused skill, not operational as an end-to-end plugin: `sdd-manage` is the required central coordinator and has not been implemented.

## Package rules

- A mutating workflow requires an eligible Git worktree. Read-only inspection and discussion may occur without Git. Repository initialization lies outside this plugin.
- `sdd-manage` coordinates authorization, shared prerequisites, focused skills, work boundaries, and handoffs. Focused skills declare their prerequisites without implementing shared workflows.
- Git commits provide durable implementation checkpoints. `sdd-orient` compares the last completed task commit with the owning checklist and pending changes, then hands the identified task state to `sdd-implement`. Before any other work, `sdd-implement` pushes all unpushed commits on the current branch to its established remote branch, even when the worktree is clean. Dirty state alone does not require reset.
- Scripts are optional for deterministic, well-defined operations. External integrations are optional capabilities with explicit inputs, effects, and reconciliation rules.

## Document ownership

| Document | Canonical responsibility |
| --- | --- |
| `docs/dev/PROJECT.md` | Concise project brief: purpose, users, scope, outcomes, and constraints. |
| `docs/dev/ARCHITECTURE.md` | System blocks, relationships, dependency direction, patterns, and consequential decisions. Focused children are allowed. |
| `docs/dev/DECOMPOSITION.md` | Component responsibilities, boundaries, collaborations, and provisional interfaces. Focused children are allowed. |
| `docs/dev/FEATURE_ARCHITECTURE.md`, `docs/dev/FEATURE_DECOMPOSITION.md` | Bounded architectural change definition and affected component breakdown when necessary. |
| `docs/dev/SPEC.md` | Intended behavior, final contracts, errors, invariants, and acceptance conditions. |
| `docs/dev/FEATURE-SPEC.md` | Scoped change to specified behavior until reconciled into the main SPEC. |
| `docs/dev/PLAN.md` | Implementation strategy, phases, milestones, dependencies, and exit conditions. |
| `docs/dev/FEATURE-PLAN.md` | Scoped delivery-strategy delta when a change needs one, until reconciled into the main PLAN. |
| `docs/dev/TASKS.md` | Complete intended phase → milestone → task hierarchy, stable task IDs, bounded selection, and evidence-backed progress. |
| `docs/dev/FEATURE-TASKS.md` | Active feature's scoped task delta and evidence-backed progress until reconciled into TASKS. |
| `docs/dev/layout.md` | Physical ownership of implementation, tests, documentation, and other artifacts. |
| `docs/dev/verification-map.json` | Optional current component-to-check routing where selection is nontrivial. |

The main design, SPEC, PLAN, and layout documents describe the intended system, strategy, and physical ownership. Temporary feature documents describe explicit deltas that are reconciled into the main documents when accepted. TASKS records the complete intended work breakdown and evidence-backed progress. An active FEATURE-TASKS records only the feature's executable delta; task IDs are unique across both lists, and reconciliation preserves verified status and Git evidence. Parent documents may link to focused children without duplicating their detailed requirements.

## Capability ownership and status

| Capability | Responsibility | Status |
| --- | --- | --- |
| `sdd-orient` | Resolve project and Git roots; discover applicable instructions, documents, relevant tooling, dirty paths, and execution evidence; identify the last committed task and any completed pending or incomplete work; produce a read-only scoped handoff to the next workflow. | **Included** |
| `sdd-conventions` | Evaluate chosen designs, patterns, component and task boundaries, code changes, and Phase → Milestone → Task identity and hosted mapping conventions. | **Included** |
| `sdd-manage` | Coordinate authorization, transitions, prerequisites, delegated scope, evidence, and stopping boundaries; accept, securely store, and supply hosting credentials, escalating to the user when none is available. | Planned |
| `sdd-design` | Explore facts, assumptions, alternatives, and accepted decisions; develop project brief, architecture, and decomposition for initial work or architectural changes. | **Included** |
| `sdd-specify` | Define and review complete behavioral requirements and scoped feature deltas; retain objective acceptance. | **Included** |
| `sdd-plan` | Define and review delivery strategy, phases, milestones, boundary verification, and physical ownership in separate PLAN and layout workflows, without task-level instructions. | **Included** |
| `sdd-tasks` | Create and review TASKS and scoped FEATURE-TASKS; select bounded work and review progress evidence. Feature-delta reconciliation belongs to `sdd-integrate-feature`; direct checkpoint amendments belong to `sdd-steer`; main task execution and completion updates belong to `sdd-implement`. | **Included** |
| `sdd-integrate-feature` | Incorporate separately developed, accepted feature deltas into selected main documents; reconcile affected TASKS and FEATURE-TASKS and optionally incorporate feature tasks into TASKS without forcing task edits for document-only work. | **Included** |
| `sdd-report` | Draft task issues, commit messages, PR descriptions, and evidence-backed task, milestone, or phase reports with change-kind-specific emphasis. | **Included** |
| `sdd-tdd` | Define testing strategy and scenarios, create or revise behavior-focused tests with independent expectations, and guide the red → green → refactor cycle; preserve existing code when test-first evidence is absent. Adapted from Superpowers TDD and its test-writing companion. | **Included** |
| `sdd-verify` | Select and run direct, dependent, integration, and boundary checks for a task, milestone, phase, selected change, or project; assess acceptance coverage, classify failures, and return evidence and remaining gaps. | **Included** |
| `sdd-docs` | Ensure professional module and API documentation; align README and standalone guides; apply project-specified or established language-appropriate style; audit affected changes or the project; report governing-document amendments to the user and defer their decisions. | **Included** |
| `sdd-steer` | At a checkpoint during partial task-list implementation, perform a human-commanded focused amendment to previously implemented features, primarily reducing functionality; directly update affected existing development documents, code, and tests, verify, commit, push, and report, then stop without handing off to `sdd-implement`. | Planned |
| `sdd-implement` | Run the main implementation workflow driven by TASKS or FEATURE-TASKS. Push all unpushed commits before any other work, regardless of worktree cleanliness; execute or resume the selected range, coordinate `sdd-tdd`, `sdd-verify`, and `sdd-docs`, mark task completion from verified evidence, commit and push results, coordinate issue closure through `sdd-forge`, and stop at the selected checkpoint. | Planned |
| `sdd-forge` | Pass managed or directly supplied credentials to the selected backend; optionally project TASKS or active FEATURE-TASKS to GitHub phase labels, milestones, and task issues; resolve issue references and close verified task issues without transferring authority over completion. | **Included** (GitHub backend) |

An included skill does not imply that any other planned capability is implemented. The repository's instructions and actual evidence govern the current project; a checklist or file's presence alone does not prove completion.

## Execution boundaries

- **Testing and verification:** `sdd-tdd` owns test strategy, design, and changes, including test execution during the development cycle. `sdd-verify` assesses whether the checks sufficiently cover the requested acceptance and exit conditions and runs the required verification campaign. Both may execute tests for their respective purposes.
- **Verification evidence:** `sdd-verify` reports commands, environment, observed outcomes, acceptance coverage, blocked or omitted checks, and remaining uncertainty. Distinguish defects in the change, pre-existing failures, and environment problems when evidence permits. Passing checks do not establish untested acceptance conditions. Verification leaves task status unchanged and returns repairs to the active implementation workflow: `sdd-implement` for main task work or `sdd-steer` for a checkpoint amendment.
- **Documentation:** `sdd-docs` maintains docstrings, usage guides, and standalone explanations. Follow project conventions, with Google-style docstrings where applicable when no project convention overrides them. When authoritative design, SPEC, PLAN, layout, or task requirements need amendment, `sdd-docs` reports the location, issue, impact, and proposed amendment to the user and defers the decision. It does not edit those requirements or automatically invoke their owning skills; independent documentation work may continue.
- **Human-directed steering:** The human defines the amendment objective at a checkpoint and commands `sdd-steer` implementation. Steering assesses affected behavior and dependencies, directly amends the existing SPEC, PLAN, TASKS or active FEATURE-TASKS, design, and layout where needed, and aligns code, tests, and documentation. It creates no feature-document layer and requires no `sdd-integrate-feature` step. Use `sdd-tdd`, `sdd-docs`, and `sdd-verify` within that focused scope. For a reduction, verify that removed functionality is consistently removed and retained functionality remains valid; reassess affected completion claims while preserving stable task IDs and unaffected work.
- **Steering stop boundary:** `sdd-steer` verifies, commits, pushes, and reports the amendment, then stops. It neither hands off to nor resumes `sdd-implement`. The human separately decides when to resume the remaining task list.
- **Completion and reporting:** `sdd-implement` owns execution, repairs, completion checkboxes, commits, pushes, and issue-closure coordination for the main task-list workflow. `sdd-steer` owns corresponding operations within its human-commanded amendment scope. `sdd-report` presents the resulting evidence. Durable verification evidence may accompany the task or use a project-designated record; a separate verification journal is not required, and a verification map or scripts remain optional.
