# Task issue references and lifecycle

## Resolve for implementation

Given a stable task ID, resolve the intended GitHub repository and find the uniquely matching issue using the exact task prefix and `sdd-forge:task-id` marker. Check both open and closed issues and exclude pull requests. Return the repository, task ID, issue number, URL, and state to the invoking workflow. Do not rely on a remembered number, title substring alone, or phase/milestone label alone. For several tasks, return each mapping independently; stop the affected operation on missing, duplicate, or conflicting matches.

The implementation workflow owns the Git commit. Pass resolved issue references to its commit composer (or **sdd-report** when available), which can include `T-012` and `Refs owner/repo#123` in a title or body appropriate to the actual change. A commit may mention more than one issue if its verified change genuinely contributes to more than one task. A reference does not itself establish completion. Avoid `Fixes`, `Closes`, or `Resolves` keywords as a substitute for explicit verified closure: GitHub may close linked issues when a commit reaches the default branch, which is a different event from local task verification.

## Close or reopen

Close an issue when the user has requested hosted progress reconciliation and the task has been fully implemented, its required evidence verified, and its durable commit and TASKS completion state reconciled. Check the corresponding task ID, repository, issue association, and issue state immediately before the change. Add a concise evidence comment or report link with task ID, commit SHA, and verification facts if that information is not already available on the issue; use a completed closure reason where supported. If the issue is already closed with matching evidence, do not duplicate comments or state changes. Do not close for a checkbox alone, a partial commit, or a milestone-level promise.

If later steering invalidates completion, do not silently flip hosted state. Reassess TASKS and evidence, then reopen the unique issue if the user has requested hosted reconciliation, stating the new outstanding work and preserving its history. An issue closed on an unmerged feature branch still represents verified task work in that branch, not integration into the default branch; report the branch and commit explicitly. PR creation and merge are separate operations outside this backend's present scope.

No local issue-map file is needed initially. The stable TASKS ID, exact GitHub marker, scoped repository identity, and handoff provide bidirectional lookup. Introduce a checked-in mapping only for a demonstrated offline or cross-host requirement, with ownership and conflict reconciliation specified first; otherwise it would become a second mutable record of GitHub state.
