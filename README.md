# SDD Manager

SDD Manager is being rebuilt as an Agent Plugin for specification-driven development in Git repositories. The first included skill, `sdd-orient`, inspects a project without changing it and prepares a scoped evidence handoff for later workflows.

The intended document sequence is project brief, architecture, decomposition, specification, delivery plan, and executable tasks. `ARCHITECTURE.md` and `DECOMPOSITION.md` may each have focused children. A future `sdd-manage` skill will coordinate shared prerequisites and focused workflow skills. The package currently includes **only** `sdd-orient`; it does not yet implement design, specification, planning, implementation, recovery, or orchestration.

See [V1 migration inventory](docs/dev/V1-MIGRATION.md) for the reviewed capabilities and their planned treatment. The prior implementation remains available on the `main` branch and in the separate main snapshot.
