# Issue, commit, and PR drafts

Keep the same task identity across all outputs. Use the project-wide ID from its owning TASKS or FEATURE-TASKS entry; include a resolved issue reference only when **sdd-forge** supplies a unique repository and number. Match the requested object's time perspective: an issue describes intended work, while a commit or PR describes actual changes and available evidence.

## Task issue

Return `title` and `body` separately. Use the `[<task-id>] <task title>` shape when the host backend requires the SDD ID prefix. Draft the body from the task outcome, reason and project context, expected scope and dependencies, objective acceptance and prescribed checks, and source document links. For a performance task, identify the measurement plan and baseline if established; do not promise a speedup as achieved. For a security task, state the affected guarantee and risk without exposing exploit instructions or credentials. Add kind-specific context only when supported by the task.

Leave exact identity markers and backend-owned sections to **sdd-forge**. If the caller requests a GitHub-ready draft, accept its marker and section boundary from the backend and preserve them exactly. Never invent host labels, milestone associations, issue URLs, or resolution state.

## Git commit

Draft a short imperative subject naming the actual change; include the task ID when the project's convention calls for it. Use a body when the reason, verification, migration implications, or multiple issue references need explanation. Base it on the inspected diff and checks, not merely the task brief.

Use `Refs owner/repo#123` for each verified association that the commit genuinely advances. Multiple references are allowed when the change actually contributes to several tasks. Omit the line when no issue is resolved. Do not use `Fixes`, `Closes`, or `Resolves` merely to trigger host automation; verified issue closure is a separate **sdd-forge** operation. If verification has not been run, say so in a proposed body rather than claiming it passed. The implementation workflow makes and checks the commit.

## Pull request

Draft a title and description only when requested; this skill does not create a PR. Scope the text to the actual branch diff and its included task IDs. Summarize **What**, **Why**, **Verification**, and **Result**; add the relevant fields from [change kinds](change-kinds.md). State the base branch and integration status only when known. List unrun checks, limitations, and remaining work explicitly rather than presenting partial work as complete.

A code health PR should explain the ownership or maintainability problem and the checks supporting behavior preservation. A performance PR should include baseline and current times, input size, environment, method, and whether the measured gain is meaningful. Do not imply that GitHub PR operations are available through **sdd-forge**.

## Examples

These show formatting for an issue title, commit message, and PR draft. Use actual task IDs, issue references, checks, and results for the current work.

### Issue title

```text
[T-012] Implement ZIP stream support
```

### Commit message

```text
Clarify filesystem utility ownership (T-041)

Move shared filesystem helpers into the module named by the project layout.
Update its documented responsibility; the focused unit suite passed.

Refs owner/repo#123
```

### Code health PR

```markdown
# 🧹 Clarify filesystem utility ownership

- 🎯 **What:** Renamed `common.py` to `fs.py` and updated its documented responsibility.
- 💡 **Why:** A focused module name makes ownership clear under the project's layout rules.
- ✅ **Verification:** Inspected layout references and passed the focused unit tests.
- ✨ **Result:** Filesystem utility ownership is explicit, with behavior preservation supported by the cited checks.
```
