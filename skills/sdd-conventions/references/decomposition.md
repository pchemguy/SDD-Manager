# Decomposition

Apply these checks at the abstraction level of the current work, from architecture and component design through specification, planning, tasks, and code changes:

1. **Cohesion and ownership.** Give each unit one clear purpose and owner. For every system block, component, document node, module, or task, answer: What does it do? How is it used? What does it depend on?
2. **Usable boundaries.** Define what consumers can rely on: provided behavior, required inputs or collaborators, important invariants, and errors where relevant. A consumer should understand the unit without reading its internals. Internal changes should preserve its stated contract unless the change explicitly revises it.
3. **Directed dependencies.** Make interactions and dependency direction explicit. Challenge cycles, ambiguous ownership, hidden shared state, and boundaries that prevent appropriate independent verification. Clarify ownership, extract a shared contract, or combine units that are inseparable.
4. **Purposeful splitting.** Split when responsibilities need different owners, collaborators, tests, or change schedules. An orienting parent defines child scope and relationships; a child owns its details. Keep each normative subject with one canonical owner. File size and context load can prompt a cohesion review, but are not split thresholds.
5. **Coherent work units.** Prefer verifiable tasks affecting one code module or a few closely related modules, together with their relevant tests and documentation. A contract change may need coordinated consumer edits or compatible increments. Each completed task should leave dependent behavior coherent and testable, without imposing a rigid file count.

Apply these as diagnostic questions, not a mandate to create extra layers or files. State the concrete boundary problem and a proportionate correction. A component need only be testable at the appropriate level; independent verification does not require mocking every collaborator.
