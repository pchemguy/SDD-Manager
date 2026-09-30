# Issue, commit, and PR drafts

Keep the same task identity across all outputs. Use the project-wide ID from its owning TASKS or FEATURE-TASKS entry; include a resolved issue reference only when **sdd-forge** supplies a unique repository and number. Match the requested object's time perspective: an issue describes intended work, while a commit or PR describes actual changes and available evidence.

## Task issue

Return `title` and `body` separately. Use `[T-012] Implement ZIP stream support` as the title shape when the host backend requires the SDD ID prefix. Draft the body from the task outcome, reason and project context, expected scope and dependencies, objective acceptance and prescribed checks, and source document links. For a performance task, identify the measurement plan and baseline if established; do not promise a speedup as achieved. For a security task, state the affected guarantee and risk without exposing exploit instructions or credentials. Add kind-specific context only when supported by the task.

Leave exact identity markers and backend-owned sections to **sdd-forge**. If the caller requests a GitHub-ready draft, accept its marker and section boundary from the backend and preserve them exactly. Never invent host labels, milestone associations, issue URLs, or resolution state.

## Git commit

Draft a short imperative subject naming the actual change; include the task ID when the project's convention calls for it. Use a body when the reason, verification, migration implications, or multiple issue references need explanation. Base it on the inspected diff and checks, not merely the task brief. A suitable shape is:

```text
Improve little-endian offset conversion (T-012)

Replace per-item struct conversion with array byte operations and a byte swap
on big-endian systems. Focused stream and persistence tests passed.

Refs owner/repo#123
```

Use `Refs owner/repo#123` for each verified association that the commit genuinely advances. Multiple references are allowed when the change actually contributes to several tasks. Omit the line when no issue is resolved. Do not use `Fixes`, `Closes`, or `Resolves` merely to trigger host automation; verified issue closure is a separate **sdd-forge** operation. If verification has not been run, say so in a proposed body rather than claiming it passed. The implementation workflow makes and checks the commit.

## Pull request

Draft a title and description only when requested; this skill does not create a PR. Scope the text to the actual branch diff and its included task IDs. Summarize **What**, **Why**, **Verification**, and **Result**; add the relevant fields from [change kinds](change-kinds.md). State the base branch and integration status only when known. List unrun checks, limitations, and remaining work explicitly rather than presenting partial work as complete.

For example, a code health PR may use `🧹 Clarify filesystem utility ownership` and describe the move from a generic module into `fs.py`, the applicable layout rule, the checks actually run, and the resulting ownership. A performance PR may use `⚡ Speed up little-endian offset conversion`, include baseline/current times, input size, hardware or simulated environment, method, and whether the improvement is statistically or operationally meaningful. These examples supply format, not evidence for another project. Do not imply that GitHub PR operations are available through **sdd-forge**.
