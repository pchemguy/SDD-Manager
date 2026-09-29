---
name: sdd-tasks
description: Use when deriving, reviewing, or revising executable software-development tasks from an accepted design, SPEC, PLAN, and layout; creating or maintaining docs/dev/TASKS.md or scoped docs/dev/FEATURE-TASKS.md; selecting the next task, a number of tasks, a milestone, or a phase; or reconciling task completion and dependencies after implementation or steering.
---

# Derive and maintain tasks

Choose the requested operation and load only its reference. A request to generate TASKS does not authorize implementation.

| Work | Load |
| --- | --- |
| Create or revise the complete task hierarchy or a scoped feature task list | [task derivation](references/task-derivation.md) |
| Resolve a bounded request such as next task, next N tasks, milestone, or phase | [range selection](references/range-selection.md) |
| Check completion, reconcile steering, or review status and dependencies | [progress and reconciliation](references/progress-and-reconciliation.md) |

Read the relevant accepted PROJECT, ARCHITECTURE, DECOMPOSITION, SPEC, PLAN, layout, and their focused children or active feature documents as needed for the operation. Inspect TASKS and any active FEATURE-TASKS, Git evidence, and affected code or tests when status or existing work matters. Use **sdd-conventions** to assess task boundaries and Phase → Milestone → Task identity and parentage. Do not invent requirements, delivery strategy, or physical ownership when those inputs are unresolved.

Read-only selection and review can proceed without mutation. Creating or modifying TASKS or FEATURE-TASKS requires **sdd-manage** to coordinate the user's request and a current **sdd-orient** handoff establishing an eligible Git worktree, applicable instructions, target paths, and ownership of dirty changes. This skill does not implement orientation, verification, recovery, or code changes.

`docs/dev/TASKS.md` owns the complete intended phase → milestone → task hierarchy. An active `docs/dev/FEATURE-TASKS.md` owns the feature's scoped executable delta and inspectable progress until reconciled into TASKS. Use one project-wide task ID space; never copy a task as a second independently checked item. Give each phase a Markdown heading and keep its phase checkbox as the root of the nested checklist. Use **four spaces per nested level**: phase check item at the left margin, milestone indented four spaces, task indented eight. PLAN or an active FEATURE-PLAN owns strategic phase and milestone definitions and exit conditions; the applicable task list breaks them into executable work without redefining them. Layout owns physical placement; SPEC owns required behavior and acceptance. A checked box is a claim to verify against evidence, not evidence by itself.

At completion, report the range or task structure established, completion findings and evidence checked, dependencies or blockers, and documents inspected or updated. Do not report planned tasks as implemented features or continue beyond the selected work boundary.
