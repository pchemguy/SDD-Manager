# Workflow examples

These examples illustrate routing and boundaries; repository instructions and the actual request determine the concrete work.

| Request and context | Coordinated result |
| --- | --- |
| “Prepare the project through TASKS.” An eligible Git worktree exists. | Orient; prepare the necessary design, SPEC, PLAN, layout, and tasks; check and persist the documents; stop before implementation. |
| “Review this SPEC.” The files are outside Git. | Perform read-only behavioral review and return findings. Do not initialize Git or rewrite files. |
| “Implement milestone 2.2.” TASKS contains its accepted requirements. | Orient; pass the boundary to **sdd-implement**; it pushes outstanding commits first, executes and persists tasks, and stops at the milestone. |
| “Resume milestone 2.2.” The last checked task is ahead of its last task commit. | Pass pending changes and evidence to **sdd-implement**. It verifies and commits the completed result without repeating implementation, then continues only within the selected boundary. |
| “Continue.” The tree is clean but task commits are unpushed. | Orient; **sdd-implement** pushes those commits before selecting tasks, testing, or editing. A push blocker prevents further implementation. |
| “Assess removing encrypted streams.” Implementation is paused at a checkpoint. | Route impact assessment to **sdd-steer**; return the proposed scope without mutation. |
| “Implement that removal.” The amendment objective is established. | **sdd-steer** amends existing documents, code, tests, and guides; verifies, commits, pushes, and reports. Create no feature documents and do not resume the main task list. |
| “Integrate FEATURE-SPEC into SPEC only.” FEATURE-TASKS is still active. | Incorporate accepted behavior into SPEC; retain sources still required by active work; leave the task lists unchanged and report affected links outside scope. |
| “Incorporate feature tasks into TASKS only.” FEATURE-TASKS owns their active entries. | Explain that ownership transfer requires both lists in scope; defer the transfer rather than duplicating IDs or editing an unselected source. Independent reconciliation of existing TASKS entries may proceed. |
| “Verify this phase.” Some required checks are blocked. | **sdd-verify** returns observed evidence and blocked acceptance conditions. Do not repair code, mark tasks complete, or close issues. |
| “Align README.” **sdd-docs** finds a conflict with SPEC. | Report the conflict and proposed governing-document amendment to the user; continue independent authorized README work. Do not invoke **sdd-specify** automatically. |
| “Create task issues on GitHub.” No suitable token is available. | Resolve the requested hosted scope; ask for a suitable credential; do not require a token for unrelated local work or write one into the project. |
| Resume active hosted tracking after an outage left several completed tasks open. | Reconcile verified completed tasks in the maintained tracking scope, including older pending issues; do not inspect only the latest task or add a recovery journal. |
| Active hosted tracking returns 403 during issue closure. | Receive sanitized operation context; check the approved store and escalate when necessary; recheck access before retrying. Report pending hosted closure separately from verified local completion. |
