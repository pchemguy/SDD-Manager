---
name: sdd-implement
description: Use when executing or resuming a bounded SDD implementation workflow driven by TASKS or FEATURE-TASKS, completing pending task work, coordinating tests and documentation, verifying results, marking completion, committing and pushing each task, or stopping at a requested checkpoint.
---

# Implement a selected task range

Execute the user's requested task-list boundary. **sdd-manage** coordinates authorization, prerequisites, and focused capabilities; an implementation request authorizes work within its established scope without repeated confirmation for routine steps. Use a current **sdd-orient** handoff at startup for repository instructions, Git and task state, dirty-path ownership, and environment. Read the relevant references:

| Work | Load |
| --- | --- |
| Push outstanding commits, resume pending work, and select the range | [startup and continuation](references/startup-and-continuation.md) |
| Execute tasks with tests, documentation, and verification | [task execution](references/task-execution.md) |
| Mark completion, commit and push, reconcile issues, and stop | [completion and checkpoints](references/completion-and-checkpoints.md) |

1. **Push first.** Using the established repository and branch, push all outstanding commits before task selection, tests, or edits, even when the worktree is clean. Confirm the remote contains the commits. Stop on an unresolved push blocker before beginning further implementation.
2. **Resume before advancing.** Use orientation's last task commit, owning checklist, pending changes, and existing evidence. Finish a completed task awaiting commit without repeating its implementation, or resume the identified incomplete task. Preserve valid work and resolve ambiguous ownership or task identity before the affected mutation.
3. **Select the boundary.** Use **sdd-tasks** to resolve the requested TASKS or FEATURE-TASKS range, dependencies, and stopping point. Record selected task IDs and exit conditions. Do not expand the range or invent requirements to bypass a blocker.
4. **Execute one task at a time.** Coordinate **sdd-tdd**, apply production changes, maintain documentation through **sdd-docs**, and obtain acceptance evidence through **sdd-verify**. Repair failures within scope and repeat affected checks as needed.
5. **Make each result durable.** Mark the task complete only after its implementation, tests, documentation, and required verification are complete. Use **sdd-report** for its commit message, commit the result and status, and push before advancing. When hosted tracking is active, coordinate verified issue closure through **sdd-forge**.
6. **Stop at the checkpoint.** Verify applicable milestone or phase exit conditions, update eligible parent checkboxes, and return an evidence-backed report. Stop at the requested boundary or an unresolved blocker; do not start steering or additional tasks automatically.

This skill owns task execution, repairs, completion updates, commits, pushes, and issue-closure coordination. **sdd-tasks** owns task-list creation and selection; **sdd-integrate-feature** owns feature-delta reconciliation. Human-commanded checkpoint amendments to existing development documents and prior implementation belong to **sdd-steer**. Report governing-document changes needed outside the selected implementation scope to the user rather than silently rewriting the requirements.

Git commits and the owning checklist provide continuation state. No transaction journal, recovery state directory, or separate recovery skill is required. Return completed task IDs and implemented capabilities, verification evidence and gaps, commit and push results, hosted reconciliation, remaining work, and the stopping boundary through **sdd-report**.
