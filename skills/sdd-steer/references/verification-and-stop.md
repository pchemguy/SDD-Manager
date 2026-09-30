# Verify, publish the checkpoint, and stop

## Verify the amendment

Use **sdd-verify** to assess the revised acceptance conditions, affected dependents, integration points, and required project checks. For a reduction, establish that the removed functionality is absent from the supported implementation, relevant tests and documentation agree with the reduced scope, and retained behavior remains valid. Text deletion alone does not establish behavioral removal.

Inspect governing documents and code together for obsolete claims, dangling references, inconsistent task scope, and unintended dependency effects. Use actual outcomes, including failures, warnings, skipped checks, and gaps; do not infer verification from a checklist edit. Return test-design changes to **sdd-tdd** and documentation fixes to **sdd-docs**, while this steering workflow owns production repairs.

Reassess affected task and parent completion claims against the revised acceptance and exits. Preserve unaffected verified status. Mark amended work complete only when its implementation, tests, documentation, and required evidence are complete; do not imply that all remaining tasks or the whole project are done.

## Commit and push

Use **sdd-report** to describe the actual amendment, reason, verification, and supported result. Identify the commit as a steering amendment to affected stable task IDs, rather than completion of the next main-list task, and include only resolved issue references. Stage only amendment-owned document, code, test, status, and evidence changes, preserving unrelated staged and unstaged work. Commit the coherent verified amendment and its status together; use a project-designated evidence location when needed, without adding a transaction journal.

Push the amendment commit and outstanding commits on the current branch to its established remote branch and confirm remote containment. Do not guess a destination or force-push. On a push failure, preserve the commit and report the pending push; do not resume task-list implementation.

When hosted tracking is active, use **sdd-forge** to reconcile issue state warranted by the revised task scope and evidence. Do not reopen an issue solely because historical functionality was removed, or close one solely because its task disappeared. Preserve issue history and report any access failure or ambiguous mapping as pending reconciliation.

## Return control to the human

Report the accepted objective, amended implemented behavior, retained behavior, existing development documents changed, affected task statuses, verification evidence and limitations, commit and push results, and pending hosted reconciliation. Identify consequences for remaining tasks as findings, not instructions that automatically launch their implementation.

Stop after the report, including when the amendment is successful. There is no handoff to **sdd-implement**, no automatic selection of its next task, and no automatic steering follow-up. The human decides whether and when to resume the main workflow or command another amendment.
