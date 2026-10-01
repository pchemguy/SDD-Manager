# SDD Manager

SDD Manager is an Agent Plugin for specification-driven development in Git repositories. `sdd-manage` coordinates user objectives, shared prerequisites, focused skills, hosting credentials, and stopping boundaries. `sdd-orient` prepares a read-only project handoff, including interrupted-task state, `sdd-conventions` provides reusable criteria, `sdd-design` guides exploration and structure, `sdd-specify` defines required behavior and acceptance, `sdd-plan` develops delivery strategy and physical layout, `sdd-tasks` creates task lists and reviews progress, and `sdd-integrate-feature` incorporates accepted feature deltas into selected main documents and owns TASKS/FEATURE-TASKS reconciliation when included in the selected scope. `sdd-report` drafts issues, commit and PR text, and evidence-backed progress reports. `sdd-docs` maintains professional module and API documentation, aligns README and guides, and audits documentation while reporting proposed governing-document amendments to the user. `sdd-tdd` defines testing strategy, writes and reviews tests, and guides test-first implementation; it adapts both the Superpowers TDD skill and its test-writing companion while preserving existing code. `sdd-verify` selects and runs checks for the requested work boundary, assesses acceptance coverage, and reports evidence, failures, and remaining gaps without changing task status. `sdd-implement` selects executable ranges and executes or resumes the requested task-list work, pushes outstanding commits first, coordinates tests and documentation, verifies and commits each task, pushes before advancing, and stops at the requested checkpoint. `sdd-steer` performs human-commanded focused amendments at those checkpoints, directly updates existing documents and implementation, verifies, commits, and pushes, then stops without resuming the main task list. Optional `sdd-forge` projects tasks to GitHub labels, milestones, and issues and reconciles verified issue status.

The document sequence is project brief, architecture, decomposition, specification, delivery plan and layout, then executable tasks. A scoped feature can use FEATURE_ARCHITECTURE, FEATURE_DECOMPOSITION, FEATURE-SPEC, FEATURE-PLAN, and FEATURE-TASKS for behavioral, strategic, and executable deltas before their accepted results are incorporated into selected main documents. `ARCHITECTURE.md`, `DECOMPOSITION.md`, `SPEC.md`, `PLAN.md`, and `layout.md` may each have focused children. GitHub access is required only for a hosted operation. The coordinator and focused skills are packaged; end-to-end behavior in a target client requires separate validation. Human-directed checkpoint steering is packaged as `sdd-steer`.

See the [capability map](docs/dev/CAPABILITY-MAP.md) for ownership and implementation status.

## Available workflows

Invoke `sdd-manage` with a project objective and requested boundary. It starts with orientation, reuses established inputs, and coordinates only the necessary skills.

| Workflow | Example request |
| --- | --- |
| Initial preparation | Prepare this project through TASKS. |
| Feature preparation | Define ZIP support and its feature task list. |
| Bounded implementation | Implement milestone 2.2 and stop. |
| Interrupted continuation | Resume the remaining work in milestone 2.2. |
| Checkpoint steering | Remove encrypted streams from the implemented scope, then stop. |
| Accepted feature integration | Incorporate FEATURE-SPEC into SPEC only. |
| Focused review or maintenance | Review PLAN, verify a phase, or align README. |
| Hosted synchronization | Project these tasks to GitHub issues and milestones. |

Preparation, integration, and review do not implicitly start implementation. Steering returns control to the human, who separately resumes the task list. Local workflows need no hosting credentials. Requested repository changes are verified, committed, and pushed according to the established policy; hosted results are reported separately.

See the coordinator's [workflow catalog](skills/sdd-manage/references/workflows.md) for entry conditions and stopping points.

The [plugin review](docs/dev/PLUGIN-REVIEW.md) records the reviewed scope, corrections, verification evidence, and remaining runtime validation limits.
