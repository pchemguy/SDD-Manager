---
name: sdd-recover
description: Use when identifying interrupted SDD task work from Git and TASKS or FEATURE-TASKS, distinguishing a completed task awaiting commit from an incomplete task, and preparing a recovery handoff to sdd-implement. Read-only.
---

# Recover interrupted task work

Use a current **sdd-orient** handoff for the repository, governing instructions, branch, dirty paths, and ownership. **sdd-manage** coordinates recovery and the handoff to **sdd-implement**. Read the owning TASKS or active FEATURE-TASKS, the relevant task brief and existing verification evidence, and Git history. Git and the task list supply recovery state; no separate transaction journal is required. This skill performs read-only inspection and produces a handoff.

1. **Establish the committed boundary.** Find the latest completed task identified by a task commit. Inspect its committed task list and result; later maintenance commits do not advance the task boundary. If no task has been committed, use the established preimplementation commit as the baseline. Compare that boundary with the working task list and inspect staged, unstaged, and untracked changes.
2. **Identify the current task.** If the last checked task is ahead of the last committed task, it is complete work awaiting a commit. Confirm that its pending changes belong to that task and its completion evidence is present. Otherwise identify the current unchecked task from the selected execution order and changes since the boundary. Future unchecked tasks do not identify the interrupted task. If the worktree is clean and the checklist agrees with the committed boundary, report no pending task changes. Report ambiguous task identity, change ownership, or missing completion evidence without guessing.
3. **Hand off to sdd-implement.** For completed pending work, identify the task and evidence so **sdd-implement** can commit it without repeating implementation. For incomplete work, identify the existing changes and remaining task work. **sdd-implement** owns verification, task completion, commits, pushes, and coordination of issue closure through **sdd-forge**.

Return the last committed task and commit, current task and status, owning task list, pending changes and ownership, existing verification evidence, and remaining work or ambiguity. Finish this recovery handoff before selecting a new task.
