# SDD Manager

SDD Manager is an Agent Plugin for specification-driven development in Git repositories. `sdd-orient` prepares a read-only project handoff, `sdd-conventions` provides reusable criteria, `sdd-design` guides exploration and structure, `sdd-specify` defines required behavior and acceptance, `sdd-plan` develops delivery strategy and physical layout, and `sdd-tasks` derives and tracks executable work. Optional `sdd-forge` projects tasks to GitHub labels, milestones, and issues and reconciles verified issue status.

The document sequence is project brief, architecture, decomposition, specification, delivery plan and layout, then executable tasks. A scoped feature can use FEATURE-SPEC, FEATURE-PLAN, and FEATURE-TASKS for behavioral, strategic, and executable deltas before their accepted results are reconciled into the main documents. `ARCHITECTURE.md`, `DECOMPOSITION.md`, `SPEC.md`, `PLAN.md`, and `layout.md` may each have focused children. GitHub access is required only for a hosted operation. The included focused skills do not make the plugin operational: the central `sdd-manage` coordinator is required and remains unimplemented. Implementation, recovery, and reporting are also planned capabilities.

See the [capability map](docs/dev/CAPABILITY-MAP.md) for ownership and implementation status.
