---
name: sdd-forge
description: Use when projecting software-development phases, milestones, and tasks to a hosted repository; creating or reconciling GitHub labels, milestones, and task issues; finding an issue for a task ID; or closing a verified task issue. GitHub is the available backend. Ordinary local Git and SDD work does not require hosting access.
---

# Hosted task coordination

Use this skill only for a requested hosted operation. Identify the selected hosting provider before loading a backend. If a remote is ambiguous or the provider is unsupported, report that boundary without guessing. Do not make hosting access a prerequisite for local project work.

## Available backends

- **GitHub:** Read [GitHub backend](references/github.md) when the requested operation targets a GitHub repository. It resolves repository identity and access, then routes task projection and issue lifecycle operations.

Add a backend here when it supports a concrete hosted operation with its own repository resolution, authentication, object mapping, and reconciliation rules. Give it a focused reference and an explicit trigger; do not advertise a provider before its workflow is defined.

Before changing hosted objects, **sdd-manage** must coordinate the user's requested hosted operation, a current **sdd-orient** handoff establishing the project's eligible Git worktree and governing instructions, and the selected backend's repository and authentication checks. Without `sdd-manage`, this plugin does not execute hosted mutations. Read-only inspection requires no Git mutation gate. Do not create commits, push branches, or create or merge pull requests here.

Return the repository identity, task ID to issue number and URL associations touched, created or changed objects, access failures, ambiguity, and remaining differences. Pass issue references to the implementation and reporting workflows for commit composition. Do not infer task completion from issue state.
