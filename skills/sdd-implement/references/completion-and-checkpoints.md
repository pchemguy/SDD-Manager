# Completion and checkpoints

## Complete and commit each task

1. Confirm the intended implementation, relevant tests and documentation, and task-specific verification are complete. Missing or contradictory required evidence blocks completion; a checkbox or green command alone is insufficient.
2. Mark the task complete in its owning TASKS or FEATURE-TASKS. Record concise check commands, outcomes, and relevant limitations alongside the task or in an existing linked evidence location. Commit identity can be located by the task ID; do not require embedding a commit's own SHA in its content or adding a transaction journal.
3. Resolve hosted issue references through **sdd-forge** when tracking is active. Use **sdd-report** to compose a message with the task ID and verified issue associations, including closing keywords when the commit fully resolves an issue. Never guess an issue number. If hosting is unavailable, proceed with the local task commit and report unresolved references and closure as pending; preserve any associations already verified.
4. Inspect the final diff and stage only task-owned result, test, documentation, status, and evidence changes. Preserve unrelated staged and unstaged content; do not include it through a blanket staging command. If task changes cannot be separated safely, report the conflict before committing.
5. Commit the result and completion status together. Confirm the resulting commit and remaining worktree state. A checked but uncommitted task is completed pending work, not yet a durable completed task.
6. Push the task commit and all other outstanding commits on the current branch to the established remote branch. Verify remote containment. Complete this push before implementing the next task. If it fails, preserve the commit and report the pending push rather than advancing.
7. For active hosted tracking, use **sdd-forge** to close the verified, committed task issue with the task ID, commit, and verification evidence. Reconcile existing closure without duplicate writes. If hosting is unavailable, retain local completion and report closure as pending; never equate hosting failure with implementation failure.

Provide a concise task result through **sdd-report** before advancing within the authorized range. The commit's task ID, checklist, and evidence establish the boundary for startup inspection if execution is interrupted.

## Parent completion and stopping

- Check a milestone only when its constituent tasks and applicable PLAN exit conditions are verified; check a phase only when its milestones and phase exit conditions are verified. Empty or blocked groups are not complete by default.
- In FEATURE-TASKS, a parent checkbox covers only that list's scoped work and relevant FEATURE-PLAN exits. It does not check the corresponding whole-project milestone or phase in TASKS.
- Commit and push parent status and any additional boundary evidence with the final task when available, or in a focused follow-up commit identifying the relevant task and parent boundary. Do not invent a new task solely to record an exit check.
- Stop at the requested task count, milestone, phase, or named checkpoint, even if further tasks are ready. Also stop for an unresolved implementation or push blocker or the user's pause instruction.
- Report implemented capabilities, completed IDs, acceptance and exit-condition evidence, unresolved failures or limitations, commit and push state, pending issue reconciliation, and remaining tasks. Distinguish feature-branch completion from integration into the default branch.

The human decides whether to resume the main task list or command **sdd-steer** for a focused amendment. Do not start either automatically after the selected checkpoint.
