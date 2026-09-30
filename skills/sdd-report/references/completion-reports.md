# Completion and status reports

Use the requested boundary from the owning TASKS or FEATURE-TASKS list. A checked box is a claim to compare with actual artifacts, verification output, and Git commits. Inspect the current implementation and relevant acceptance or exit conditions; distinguish the local branch state from integration into the default branch and hosted issue state.

## Task

State task ID, outcome, status, and an implemented-feature summary. Then give the change and reason, files or components affected at a useful level, exact checks and outcomes, commit SHA or pending commit, and resolved issue URL or pending hosted reconciliation if applicable. Describe omissions and unverified conditions plainly. Report **completed** only when task-specific acceptance, documentation and tests, required verification, durable commit, and task-list status are reconciled. An issue closed by the host is not proof.

## Milestone and phase

Summarize the actual capabilities delivered across constituent tasks, rather than a list of checkboxes. Name task IDs and relevant commits, aggregate verification and integration evidence, the PLAN or FEATURE-PLAN exit conditions checked, unresolved defects, and the next stopping boundary. In FEATURE-TASKS, a checked parent covers only that feature's listed work and exits; it does not assert completion of the whole-project parent in TASKS. If some tasks or exits remain, report **partial** or **blocked** with the specific cause.

## Interrupted or limited evidence

For an interrupted task or unavailable check, state the last trusted Git state, observed dirty or staged work, checks completed and not completed, and the exact blocker. Do not infer that a half-written commit or test log finished the task. Recovery decisions belong to the recovery workflow; this skill summarizes its evidence. If a performance result is statistically inconclusive, a security fix has only partial regression coverage, or a test run excludes a required suite, make that limit visible in the result.

Use the kind-specific sections in [change kinds](change-kinds.md) where they materially explain the outcome. Keep source attribution near claims: task and document sections for intended behavior; command/output and commits for observed behavior. Do not create a second progress journal or alter TASKS while drafting a report.
