# SDD Manager capability map

This document records the plugin's intended capabilities, ownership, and present implementation status. It does not grant authorization to modify a project. **Included** means packaged as a focused skill, not operational as an end-to-end plugin: `sdd-manage` is the required central coordinator and has not been implemented.

## Package rules

- A mutating workflow requires an eligible Git worktree. Read-only inspection and discussion may occur without Git. Repository initialization lies outside this plugin.
- `sdd-manage` coordinates authorization, shared prerequisites, focused skills, work boundaries, and handoffs. Focused skills declare their prerequisites without implementing shared workflows.
- Git commits provide durable implementation checkpoints. Interrupted work requires evidence-based continuation or a controlled return to a trusted commit; reset policy and task isolation require design before implementation.
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
| `docs/dev/TASKS.md` | Phase headings and a four-space-indented phase → milestone → task checklist, stable task identity, bounded work selection, and progress backed by evidence. |
| `docs/dev/layout.md` | Physical ownership of implementation, tests, documentation, and other artifacts. |
| `docs/dev/verification-map.json` | Optional current component-to-check routing where selection is nontrivial. |

The main design, SPEC, PLAN, and layout documents describe the intended system, strategy, and physical ownership. Temporary feature documents describe explicit deltas that are reconciled into the main documents when accepted. TASKS records the current work breakdown and evidence-backed progress. Parent documents may link to focused children without duplicating their detailed requirements.

## Capability ownership and status

| Capability | Responsibility | Status |
| --- | --- | --- |
| `sdd-orient` | Resolve project and Git roots; discover applicable instructions, documents, relevant tooling, dirty paths, and execution evidence; produce a read-only scoped handoff. | **Included** |
| `sdd-conventions` | Evaluate chosen designs, patterns, component and task boundaries, and code changes using modularity criteria and context-sensitive SOLID, DRY, and KISS heuristics. | **Included** |
| `sdd-manage` | Coordinate authorization, transitions, prerequisites, delegated scope, evidence, and stopping boundaries. | Planned |
| `sdd-design` | Explore facts, assumptions, alternatives, and accepted decisions; develop project brief, architecture, and decomposition for initial work or architectural changes. | **Included** |
| `sdd-specify` | Define, review, and reconcile complete behavioral requirements and scoped feature deltas; retain objective acceptance. | **Included** |
| `sdd-plan` | Define and reconcile delivery strategy, phases, milestones, boundary verification, and physical ownership in separate PLAN and layout workflows, without task-level instructions. | **Included** |
| `sdd-tasks` | Derive and maintain TASKS; resolve next task, N tasks, milestone, or phase from verified state and reconcile progress after steering. | **Included** |
| Verification | Derive direct, dependent, integration, and boundary checks from contracts; optionally maintain test routing; classify failures. | Planned |
| Implementation | Execute the requested bounded range, verify each task, maintain in-code documentation, commit durable results, and stop for steering. | Planned |
| Recovery | Inspect interrupted work and Git evidence before new tasks; continue when reliable or use a controlled reset that preserves unrelated work. | Planned |
| Steering | Review checkpoint results, make focused corrections, analyze dependents, reconcile documents and tests, and pause before further work. | Planned |
| Reporting | Give evidence-backed task, milestone, and phase reports with implemented-feature summaries; distinguish partial, blocked, and verified outcomes. | Planned |
| In-code documentation | Review documentation after substantive code changes; use project conventions, Google style where applicable, and project-wide audits when requested. | Planned |
| `sdd-forge` | Optionally reconcile TASKS with GitHub phase and milestone labels, milestones, and task issues; resolve issue references and close verified task issues without transferring authority over completion. | **Included** (GitHub backend) |

An included skill does not imply that any other planned capability is implemented. The repository's instructions and actual evidence govern the current project; a checklist or file's presence alone does not prove completion.
