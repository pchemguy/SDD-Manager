# Progress and reconciliation

TASKS and an active FEATURE-TASKS are human-readable status views of the complete hierarchy and scoped feature delta respectively. Git commits, verification results, and inspected artifacts provide the evidence behind them. On entry, compare checked items in the applicable list with the present implementation and the task's acceptance evidence; do not infer completion from a checkbox, a commit message, or file presence alone. When evidence is missing or conflicting, report the uncertainty and leave or return the item to unchecked until resolved.

## Completion updates

- Check a task in its owning list only when its intended change, relevant tests and documentation, and task-specific verification are complete. Commit the status with the task result or in a follow-up commit tied to it; do not report completion until the result and status are durable. Record concise evidence alongside the task or in a linked durable record so another agent can locate the commit and verification result. Do not create a separate transaction journal merely to check a box.
- In TASKS, check a milestone only after its constituent tasks and PLAN exit conditions are verified; check a phase only after its milestones and phase exit conditions are verified. In FEATURE-TASKS, a parent checkbox covers only listed feature work and applicable FEATURE-PLAN exit checks; it does not check the corresponding whole-project parent in TASKS. An empty or blocked group is not complete by default. If verification reveals a defect, leave the affected boundary unchecked or reopen it and route repair to the appropriate workflow.
- Do not claim a task, milestone, or phase implemented merely because its checkbox changed. A completion report at each requested boundary must summarize implemented features and cite the relevant verification and Git evidence; the reporting and implementation workflows own the full report.

## Reconcile changes

For accepted steering, compare the intended final SPEC, design, PLAN, and layout with existing work, TASKS, and any active feature documents and FEATURE-TASKS. Revise affected tasks and dependency edges, remove obsolete uncompleted work, add necessary corrective work, and re-evaluate previously checked items whose acceptance has changed. Keep unaffected completed work and stable IDs. Revise an active feature list within its scope; revise main TASKS when the accepted end state changes its complete hierarchy. Do not leave a chronological amendment section or a list of discarded approaches in the main TASKS; Git retains that history. Preserve evidence for an implemented capability that was later removed in Git, while the current checklist describes only work required for the accepted end state.

Incorporation of FEATURE-TASKS into main TASKS belongs to **sdd-integrate-feature** and is optional in a document-only integration. Continue ordinary progress updates and accepted steering in the owning task list. If the feature is withdrawn, retain Git history and reconcile completed work or rollback with evidence before removing its list.

A task status edit does not itself implement a change, verify a test, reset dirty files, or select a subsequent task. Report unresolved evidence or document conflicts to their owners; do not make a convenient checkbox authoritative.
