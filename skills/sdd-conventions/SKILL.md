---
name: sdd-conventions
description: Use when structuring or reviewing software architecture, component decomposition, specifications, plans, executable tasks, module boundaries, or repository layout for cohesive ownership, clear interfaces, directed dependencies, and localized verifiable changes. A shared design convention for SDD workflows.
---

# Structural conventions

Apply these principles at the abstraction level of the current work. This skill supplies shared criteria; it does not perform repository orientation, author project documents, or authorize mutation. Respect applicable project instructions and established contracts.

1. Give each unit one coherent purpose and an identifiable owner. For a system block, component, document node, module, or task, answer: **What does it do? How is it used? What does it depend on?**
2. Define the boundary that its consumers can rely on: provided behavior, required inputs or collaborators, important invariants, and errors where relevant. A consumer should understand the unit without reading its internals; internal changes should preserve the stated contract unless a change explicitly revises it.
3. Make dependency direction and cross-boundary interactions explicit. Challenge cycles, ambiguous ownership, hidden shared state, and units that cannot be tested independently at an appropriate level. Resolve a cycle by clarifying ownership, extracting a shared contract, or combining units that are truly inseparable.
4. Split when distinct responsibilities need different owners, collaborators, tests, or change schedules. Keep an orienting parent and focused children; give each normative subject one canonical owner. File length and context load are signals to review cohesion, not size limits.
5. Prefer verifiable change units touching one code module or a few closely related modules, plus the tests and documentation that keep their contracts accurate. When consumers must change together, sequence compatible increments so each completed task has a coherent, testable outcome. Avoid a task boundary that intentionally leaves dependent code broken.

For physical ownership and the compact supporting `docs/dev/layout.md` artifact, read [layout governance](references/layout-governance.md). A separate authoring workflow creates or changes project files; use these conventions to review its results. State concrete boundary problems and the smallest useful correction instead of demanding more decomposition by default.
