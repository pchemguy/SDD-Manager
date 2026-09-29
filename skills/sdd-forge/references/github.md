# GitHub backend

## Operations and sources

Load only the additional reference needed for the request:

| Request | Load |
| --- | --- |
| Create or reconcile phase and milestone labels, GitHub milestones, or task issues | [TASKS projection](github-projection.md) |
| Resolve task IDs to issue numbers for a commit or handoff, check issue status, or close verified issues | [issue lifecycle](github-issue-lifecycle.md) |

`docs/dev/TASKS.md` supplies stable task IDs and progress; PLAN supplies phase and milestone outcomes and exit conditions. SPEC and applicable design or feature documents supply requirements when a task brief needs them. GitHub is a projection, not the authority for task scope or verified completion. Use **sdd-report** to compose issue drafts if available; if unavailable, use the baseline format in the projection reference. Neither dependency is required for a read-only lookup.

## Repository and access

Determine the intended GitHub repository from the invoking workflow's explicit target or its relevant remote. Normalize SSH and HTTPS remotes to the same `owner/repo` identity. If multiple plausible GitHub repositories exist, require an explicit selection before writing. Do not use a different fork or upstream merely because a token can access it.

Use the token supplied by **sdd-forge**, whether it originated with **sdd-manage** or was provided directly to **sdd-forge**, or use an approved authenticated GitHub client. Never put a token in a project file, plugin setting, command argument, URL, log, issue body, or report. Do not assume that a credential usable for `git push` is available to the API client. Check access for the requested endpoint and repository; do not substitute another identity silently. Use only the required permissions: reading issues, labels, and milestones for inspection; Issues write for their creation and reconciliation. GitHub's current endpoint documentation determines exact permission requirements.

On a 403, report the repository, endpoint, attempted operation, and permission or other cause indicated by GitHub to **sdd-forge** without including the credential. Stop the affected write. **sdd-forge** requests a suitable token from **sdd-manage**; **sdd-manage** checks its approved credential store and escalates to the user when none is available. A caller using **sdd-forge** directly can provide a suitable token there. Recheck access before retrying; do not assume every 403 is resolved by a different token or retry indefinitely.

Read existing objects before mutation. Scope all lookups to `owner/repo` and include open and closed issues or milestones as appropriate. A GitHub issue may represent a pull request in API results; exclude pull requests from task-issue matching. Treat a task ID as the stable join key and issue numbers as repository-local handles. Resolve by the exact managed ID in the issue title and body marker, validate the match, and stop on duplicates or conflicting ownership. Never silently create a second issue when lookup is ambiguous.

Reconcile only backend-owned fields: stable identity marker, generated issue title and body sections, phase and milestone labels, milestone association, and state when separately authorized and verified. Preserve unrelated issue labels, comments, assignees, and user-authored material. If a user-edited generated section cannot be safely distinguished, report a conflict rather than overwriting it. Re-run safely after partial creation: lookup each object before creating the next, and report completed work if later operations fail.

The backend is optional and has no built-in token store, remote policy, issue-to-task database, or PR operation. A later PR workflow must respect one PR per source branch.
