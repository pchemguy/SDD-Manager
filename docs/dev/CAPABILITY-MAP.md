# SDD Manager capability map

This document records the plugin's intended capabilities, ownership, and present implementation status. It does not grant authorization to modify a project. **Included** means packaged as a skill. The central `sdd-manage` coordinator and the focused capabilities are included; packaging validation does not establish end-to-end client execution.

## Package rules

- A mutating workflow requires an eligible Git worktree. Read-only inspection and discussion may occur without Git. Repository initialization lies outside this plugin.
- `sdd-manage` coordinates authorization, shared prerequisites, focused skills, work boundaries, and handoffs. Focused skills declare their prerequisites without implementing shared workflows.
- Git commits provide durable implementation checkpoints. `sdd-orient` compares the last completed task commit with the owning checklist and pending changes, then hands the identified task state to `sdd-implement`. Before any other work, `sdd-implement` pushes all unpushed commits on the current branch to its established remote branch, even when the worktree is clean. Dirty state alone does not require reset.
- Scoped working branches retain task/amendment checkpoints. `sdd-manage` coordinates default explicit two-parent merges at verified boundaries, merged-state checks, and target publication. Steering targets the paused implementation branch and stops after integration; Git merge and feature-document incorporation remain separate.
- Review/revision campaigns use stable ordered baseline directories under `docs/dev/reviews/`. `sdd-manage` coordinates review plans, review reports, accepted revision plans, and revision reports; focused review may use prompt-defined criteria. Relevant accepted decisions enter governing documents while campaign artifacts remain retained.
- Authentication assumes a usable shell session and attempts the authorized push first. sdd-conventions defines ignored repository `*.tkn` storage; sdd-manage selects/saves tokens and recovers shell/client access after credential failures. Provider-specific permission profiles belong to the active backend, and Git transport access does not prove API access.
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
| `docs/dev/PLAN.md` | Meaningful end-to-end MVP and small capability increments, phases/milestones, dependencies, verification exits, and human decision evidence. |
| `docs/dev/FEATURE-PLAN.md` | Scoped delivery-strategy delta when a change needs one, until reconciled into the main PLAN. |
| `docs/dev/TASKS.md` | Complete intended phase → milestone → task hierarchy, stable task IDs, bounded selection, and evidence-backed progress. |
| `docs/dev/FEATURE-TASKS.md` | Active feature's scoped task delta and evidence-backed progress until reconciled into TASKS. |
| `docs/dev/layout.md` | Physical ownership of implementation, tests, documentation, and other artifacts. |
| `docs/dev/verification-map.json` | Optional current component-to-check routing where selection is nontrivial. |

ARCHITECTURE describes major structure and rationale; DECOMPOSITION refines logical responsibility and collaboration; SPEC defines observable guarantees linked to relevant structural owners/consumers. Conflicts return to their owners for accepted decisions. PLAN stages the complete intent through an early meaningful usable slice and small testable growth, with appropriate functional/usability decisions kept human-controlled.

The main design, SPEC, PLAN, and layout documents describe the intended system, strategy, and physical ownership. Temporary feature documents describe explicit deltas that are reconciled into the main documents when accepted. TASKS records the complete intended work breakdown and evidence-backed progress. An active FEATURE-TASKS records only the feature's executable delta; task IDs are unique across both lists, and reconciliation preserves verified status and Git evidence. Parent documents may link to focused children without duplicating their detailed requirements.

## Capability ownership and status

| Capability | Responsibility | Status |
| --- | --- | --- |
| `sdd-orient` | Resolve project and Git roots; discover applicable instructions, documents, relevant tooling, dirty paths, and execution evidence; identify the last committed task and any completed pending or incomplete work; produce a read-only scoped handoff to the next workflow. | **Included** |
| `sdd-conventions` | Evaluate chosen designs, patterns, component and task boundaries, code changes, Phase → Milestone → Task identity and hosted mapping, and review/revision campaign identity/retention conventions. | **Included** |
| `sdd-manage` | Coordinate authorization, transitions, prerequisites, working/target branches, verified explicit merges/publication, review/revision campaigns, delegated scope, evidence, and stopping boundaries; accept, save ignored repository tokens, recover shell authentication, and supply suitable backend credentials, escalating when none is available. | **Included** |
| `sdd-design` | Explore facts, assumptions, alternatives, and accepted decisions; develop project brief, architecture, and decomposition for initial work or architectural changes. | **Included** |
| `sdd-specify` | Define and review complete behavioral requirements and scoped feature deltas; retain objective acceptance. | **Included** |
| `sdd-plan` | Define and review delivery strategy, phases, milestones, boundary verification, and physical ownership in separate PLAN and layout workflows, without task-level instructions. | **Included** |
| `sdd-tasks` | Create and review TASKS and scoped FEATURE-TASKS; review progress evidence. Feature-delta reconciliation belongs to `sdd-integrate-feature`; direct checkpoint amendments belong to `sdd-steer`; executable range selection, main task execution, and completion updates belong to `sdd-implement`. | **Included** |
| `sdd-integrate-feature` | Incorporate separately developed, accepted feature deltas into selected main documents; reconcile affected TASKS and FEATURE-TASKS and optionally incorporate feature tasks into TASKS without forcing task edits for document-only work. | **Included** |
| `sdd-report` | Draft task issues, commit messages, PR descriptions, evidence-backed task, milestone, or phase reports, and scalable review/revision plan/report templates with change-kind-specific emphasis. | **Included** |
| `sdd-tdd` | Define testing strategy and scenarios, create or revise behavior-focused tests with independent expectations, and guide the red → green → refactor cycle; preserve existing code when test-first evidence is absent. Adapted from Superpowers TDD and its test-writing companion. | **Included** |
| `sdd-verify` | Select and run direct, dependent, integration, and boundary checks for a task, milestone, phase, selected change, or project; assess acceptance coverage, classify failures, and return evidence and remaining gaps. | **Included** |
| `sdd-docs` | Ensure professional module and API documentation; align README and standalone guides; apply project-specified or established language-appropriate style; audit affected changes or the project; report governing-document amendments to the user and defer their decisions. | **Included** |
| `sdd-steer` | At a checkpoint during partial task-list implementation, perform a human-commanded focused amendment to previously implemented features, primarily reducing functionality; directly update affected existing development documents, code, and tests, verify, commit, push, explicitly merge into the paused branch, verify/publish the target, and report, then stop without handing off to `sdd-implement`. | **Included** |
| `sdd-implement` | Select executable ranges and run the main implementation workflow driven by TASKS or FEATURE-TASKS. For execution, push all unpushed commits before any other work, regardless of worktree cleanliness; execute or resume the selected range, coordinate `sdd-tdd`, `sdd-verify`, and `sdd-docs`, mark task completion from verified evidence, commit and push results, coordinate issue closure through `sdd-forge`, and integrate the verified selected boundary through the coordinator before stopping. | **Included** |
| `sdd-forge` | Pass managed or directly supplied credentials to the selected backend; optionally project TASKS or active FEATURE-TASKS to GitHub phase labels, milestones, and task issues; resolve issue references and close verified task issues without transferring authority over completion. | **Included** (GitHub backend) |

The coordinator selects only the capabilities required by the requested workflow. The repository's instructions and actual evidence govern the current project; a checklist or file's presence alone does not prove completion.

## Execution boundaries

- **Testing and verification:** `sdd-tdd` owns test strategy, design, and changes, including test execution during the development cycle. `sdd-verify` assesses whether the checks sufficiently cover the requested acceptance and exit conditions and runs the required verification campaign. Both may execute tests for their respective purposes.
- **Verification evidence:** `sdd-verify` reports commands, environment, observed outcomes, acceptance coverage, blocked or omitted checks, and remaining uncertainty. Distinguish defects in the change, pre-existing failures, and environment problems when evidence permits. Passing checks do not establish untested acceptance conditions. Verification leaves task status unchanged and returns repairs to the active implementation workflow: `sdd-implement` for main task work or `sdd-steer` for a checkpoint amendment.
- **Documentation:** `sdd-docs` maintains docstrings, usage guides, and standalone explanations. Follow project conventions, with Google-style docstrings where applicable when no project convention overrides them. When authoritative design, SPEC, PLAN, layout, or task requirements need amendment, `sdd-docs` reports the location, issue, impact, and proposed amendment to the user and defers the decision. It does not edit those requirements or automatically invoke their owning skills; independent documentation work may continue.
- **Human-directed steering:** The human defines the amendment objective at a checkpoint and commands `sdd-steer` implementation. Steering assesses affected behavior and dependencies, directly amends the existing SPEC, PLAN, TASKS or active FEATURE-TASKS, design, and layout where needed, and aligns code, tests, and documentation. It creates no feature-document layer and requires no `sdd-integrate-feature` step. Use `sdd-tdd`, `sdd-docs`, and `sdd-verify` within that focused scope. For a reduction, verify that removed functionality is consistently removed and retained functionality remains valid; reassess affected completion claims while preserving stable task IDs and unaffected work.
- **Steering stop boundary:** `sdd-steer` verifies, commits/pushes the amendment, explicitly merges into the paused implementation branch, verifies/publishes the target, and reports, then stops. A blocked amendment resumes only on a human command. It neither hands off to nor resumes `sdd-implement`. The human separately decides when to resume the remaining task list.
- **Completion and reporting:** `sdd-implement` owns execution, repairs, completion checkboxes, commits, pushes, and issue-closure coordination for the main task-list workflow. `sdd-steer` owns corresponding operations within its human-commanded amendment scope. `sdd-report` presents the resulting evidence. Honor project-designated evidence locations; otherwise durable verification and authorized test-first exception facts accompany the owning entry or its existing linked evidence, or ordinary taskless reports/commit bodies; a separate verification journal is not required, and a verification map or scripts remain optional.
