# SDD Manager capability map

This document records the plugin's intended capabilities, ownership, and present implementation status. It does not grant authorization to modify a project.

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
| `docs/dev/PLAN.md` | Implementation strategy, phases, milestones, dependencies, and exit conditions. |
| `docs/dev/TASKS.md` | Ordered executable units, stable task identity, bounded work selection, and progress backed by evidence. |
| `docs/dev/layout.md` | Physical ownership of implementation, tests, documentation, and other artifacts. |
| `docs/dev/verification-map.json` | Optional current component-to-check routing where selection is nontrivial. |

Main documents describe the intended current system. Temporary feature documents describe explicit deltas that are reconciled into the main documents when accepted. Parent documents may link to focused children without duplicating their detailed requirements.

## Capability ownership and status

| Capability | Responsibility | Status |
| --- | --- | --- |
| `sdd-orient` | Resolve project and Git roots; discover applicable instructions, documents, relevant tooling, dirty paths, and execution evidence; produce a read-only scoped handoff. | Included |
| `sdd-conventions` | Apply shared cohesion, ownership, boundary, dependency, and verifiable-change rules; define `layout.md` organization without authoring it. | Included |
| `sdd-manage` | Coordinate authorization, transitions, prerequisites, delegated scope, evidence, and stopping boundaries. | Planned |
| `sdd-design` | Explore facts, assumptions, alternatives, and accepted decisions; develop project brief, architecture, and decomposition for initial work or architectural changes. | Planned |
| Specification | Define and reconcile complete behavioral requirements and feature deltas; retain objective acceptance. | Planned |
| Planning | Define strategy, dependency order, phases, milestones, and boundary verification without task-level instructions. | Planned |
| Task derivation | Build and maintain TASKS; resolve next task, N tasks, milestone, or phase from verified state. | Planned |
| Layout authoring | Assign physical ownership and maintain clear relationships to design, SPEC, and TASKS under shared layout conventions. | Planned |
| Verification | Derive direct, dependent, integration, and boundary checks from contracts; optionally maintain test routing; classify failures. | Planned |
| Implementation | Execute the requested bounded range, verify each task, maintain in-code documentation, commit durable results, and stop for steering. | Planned |
| Recovery | Inspect interrupted work and Git evidence before new tasks; continue when reliable or use a controlled reset that preserves unrelated work. | Planned |
| Steering | Review checkpoint results, make focused corrections, analyze dependents, reconcile documents and tests, and pause before further work. | Planned |
| Reporting | Give evidence-backed task, milestone, and phase reports with implemented-feature summaries; distinguish partial, blocked, and verified outcomes. | Planned |
| In-code documentation | Review documentation after substantive code changes; use project conventions, Google style where applicable, and project-wide audits when requested. | Planned |
| External integrations | Reconcile TASKS with systems such as GitHub issues and milestones without transferring authority over task definitions or completion. | Optional, planned |

An included skill does not imply that any other planned capability is implemented. The repository's instructions and actual evidence govern the current project; a checklist or file's presence alone does not prove completion.
