---
name: sdd-forge
description: Use when projecting software-development phases, milestones, and tasks to a hosted repository; creating or reconciling GitHub labels, milestones, and task issues; finding an issue for a task ID; or closing a verified task issue. GitHub is the available backend. Ordinary local Git and SDD work does not require hosting access.
---

# Hosted task coordination

Use this skill only for a requested hosted operation. Identify the selected hosting provider before loading a backend; [GitHub](references/github.md) is currently the only available backend. If a remote is ambiguous or the provider is unsupported, report that boundary without guessing. Do not make GitHub access a prerequisite for local project work.

For GitHub, load [GitHub backend](references/github.md), then the branch needed for the request:

| Request | Load |
| --- | --- |
| Create or reconcile phase and milestone labels, GitHub milestones, or task issues | [TASKS projection](references/github-projection.md) |
| Resolve task IDs to issue numbers for a commit or handoff, check issue status, or close verified issues | [issue lifecycle](references/github-issue-lifecycle.md) |

`docs/dev/TASKS.md` supplies stable task IDs and progress; PLAN supplies phase and milestone outcomes and exit conditions. SPEC and applicable design or feature documents supply requirements when a task brief needs them. GitHub is a projection, not the authority for task scope or verified completion. Use **sdd-report** to compose issue drafts if available; if unavailable, use the baseline format in the projection reference. Neither dependency is required for a read-only lookup.

Before changing hosted objects, establish the project's eligible Git worktree and governing instructions through a current **sdd-orient** handoff; resolve repository and authentication through the selected backend. The invoking agent coordinates the handoff until `sdd-manage` exists. A user request to publish, reconcile, or close issues authorizes that corresponding hosted operation. Read-only inspection requires no Git mutation gate. Do not create commits, push branches, or create or merge pull requests here; a later PR workflow must respect one PR per source branch.

Return the repository identity, task ID to issue number and URL associations touched, created or changed objects, access failures, ambiguity, and remaining differences. Pass issue references to the implementation and reporting workflows for commit composition. Do not infer task completion from issue state.
