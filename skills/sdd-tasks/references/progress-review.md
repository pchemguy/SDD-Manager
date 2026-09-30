# Progress review

TASKS and an active FEATURE-TASKS are human-readable status views of the complete hierarchy and scoped feature delta respectively. Git commits, verification results, and inspected artifacts provide the evidence behind them. Compare checked items in the applicable list with the present implementation and the task's acceptance evidence; do not infer completion from a checkbox, a commit message, or file presence alone. Review is read-only; report missing or conflicting evidence to the owning workflow.

## Completion evidence

Use these criteria to review existing progress; **sdd-implement** owns execution, verification, and completion updates:

- A completed task has its intended change, relevant tests and documentation, and task-specific verification complete. Its result and status are durable in Git, with concise evidence alongside the task or in a linked durable record. No separate transaction journal is required.
- A completed milestone has its constituent tasks and PLAN exit conditions verified; a completed phase has its milestones and phase exit conditions verified. In FEATURE-TASKS, a parent checkbox covers only listed feature work and applicable FEATURE-PLAN exit checks; it does not establish completion of the corresponding whole-project parent in TASKS. An empty or blocked group is not complete by default.
- A completion report summarizes implemented features and cites verification and Git evidence; **sdd-report** composes it from the implementation workflow's evidence.

## Route findings

Pass task-list reconciliation, including changed task scope, dependencies, or parentage after accepted steering and FEATURE-TASKS incorporation into TASKS, to **sdd-integrate-feature**. Pass unfinished implementation or completion-evidence gaps to **sdd-implement**. Report findings before selecting further work when they affect eligibility or dependencies.
