# SDD Manager capability map

This document records the plugin's intended capabilities, ownership, and present implementation status. It does not grant authorization to modify a project. **Included** means packaged as a focused skill, not operational as an end-to-end plugin: `sdd-manage` is the required central coordinator and has not been implemented.

## Package rules

- A mutating workflow requires an eligible Git worktree. Read-only inspection and discussion may occur without Git. Repository initialization lies outside this plugin.
- `sdd-manage` coordinates authorization, shared prerequisites, focused skills, work boundaries, and handoffs. Focused skills declare their prerequisites without implementing shared workflows.
- Git commits provide durable implementation checkpoints. Recovery compares the last completed task commit with the owning checklist and pending changes, commits completed work, and pushes outstanding commits even when the worktree is clean. Dirty state alone does not require reset; reset policy and task isolation require design before implementation.
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
| `sdd-orient` | Resolve project and Git roots; discover applicable instructions, documents, relevant tooling, dirty paths, and execution evidence; produce a read-only scoped handoff. | **Included** |
| `sdd-conventions` | Evaluate chosen designs, patterns, component and task boundaries, code changes, and Phase → Milestone → Task identity and hosted mapping conventions. | **Included** |
| `sdd-manage` | Coordinate authorization, transitions, prerequisites, delegated scope, evidence, and stopping boundaries; accept, securely store, and supply hosting credentials, escalating to the user when none is available. | Planned |
| `sdd-design` | Explore facts, assumptions, alternatives, and accepted decisions; develop project brief, architecture, and decomposition for initial work or architectural changes. | **Included** |
| `sdd-specify` | Define and review complete behavioral requirements and scoped feature deltas; retain objective acceptance. | **Included** |
| `sdd-plan` | Define and review delivery strategy, phases, milestones, boundary verification, and physical ownership in separate PLAN and layout workflows, without task-level instructions. | **Included** |
| `sdd-tasks` | Derive and maintain TASKS and scoped FEATURE-TASKS; select bounded work, update evidence-backed progress, and revise tasks after steering. | **Included** |
| `sdd-integrate-feature` | Incorporate accepted feature deltas into selected main documents; optionally incorporate FEATURE-TASKS into TASKS without forcing task edits for document-only work. | **Included** |
| `sdd-report` | Draft task issues, commit messages, PR descriptions, and evidence-backed task, milestone, or phase reports with change-kind-specific emphasis. | **Included** |
| Verification | Derive direct, dependent, integration, and boundary checks from contracts; optionally maintain test routing; classify failures. | Planned |
| Implementation | Execute the requested bounded range, verify each task, maintain in-code documentation, commit durable results, and stop for steering. | Planned |
| `sdd-recover` | Identify interrupted work from task commits, the owning checklist, and pending changes; commit completed tasks, hand incomplete tasks back for implementation, push all outstanding commits even with a clean worktree, and reconcile hosted completion. | **Included** |
| Steering | Review checkpoint results, make focused corrections, analyze dependents, reconcile documents and tests, and pause before further work. | Planned |
| In-code documentation | Review documentation after substantive code changes; use project conventions, Google style where applicable, and project-wide audits when requested. | Planned |
| `sdd-forge` | Pass managed or directly supplied credentials to the selected backend; optionally project TASKS or active FEATURE-TASKS to GitHub phase labels, milestones, and task issues; resolve issue references and close verified task issues without transferring authority over completion. | **Included** (GitHub backend) |

An included skill does not imply that any other planned capability is implemented. The repository's instructions and actual evidence govern the current project; a checklist or file's presence alone does not prove completion.
