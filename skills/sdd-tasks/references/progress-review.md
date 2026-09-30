# Progress review

TASKS and an active FEATURE-TASKS are human-readable status views of the complete hierarchy and scoped feature delta respectively. Git commits, verification results, and inspected artifacts provide the evidence behind them. Compare checked items in the applicable list with the present implementation and the task's acceptance evidence; do not infer completion from a checkbox, a commit message, or file presence alone. Review is read-only; report missing or conflicting evidence to the owning workflow.

## Completion evidence

Review existing claims against their accepted task or parent exit conditions and the implementation, verification, documentation, and Git evidence supplied by **sdd-implement**. It owns completion criteria and task or parent checkbox updates. **sdd-report** composes the resulting implementation summaries. Report missing evidence or a claimed scope broader than the evidence supports; this review does not perform completion updates.

## Route findings

Pass task-list reconciliation, including changed task scope, dependencies, or parentage after accepted steering and FEATURE-TASKS incorporation into TASKS, to **sdd-integrate-feature**. Pass unfinished implementation or completion-evidence gaps to **sdd-implement**. Report findings before selecting further work when they affect eligibility or dependencies.
