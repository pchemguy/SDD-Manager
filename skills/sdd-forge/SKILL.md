---
name: sdd-forge
description: Use when projecting software-development phases, milestones, and tasks to a hosted repository; creating or reconciling GitHub labels, milestones, and task issues; finding an issue for a task ID; or closing a verified task issue. GitHub is the available backend. Ordinary local Git and SDD work does not require hosting access.
---

# Hosted task coordination

Use this skill only for a requested hosted operation. Identify the selected hosting provider before loading a backend. If a remote is ambiguous or the provider is unsupported, report that boundary without guessing. Do not make hosting access a prerequisite for local project work.

## Available backends

- **GitHub:** Read [GitHub backend](references/github.md) when the requested operation targets a GitHub repository. It resolves repository identity and access, then routes task projection and issue lifecycle operations.

Add a backend here when it supports a concrete hosted operation with its own repository resolution, authentication, object mapping, and reconciliation rules. Give it a focused reference and an explicit trigger; do not advertise a provider before its workflow is defined.

**sdd-manage** accepts and stores a user-provided hosting token in an approved credential store outside the project, then supplies it to **sdd-forge** for a requested operation. If no suitable token is available, **sdd-manage** asks the user. A caller may also provide a token directly to **sdd-forge**. Pass the credential to the selected backend without recording it in project files or handoff text; the backend checks provider-specific access. If the backend reports a 403, request a suitable credential from **sdd-manage** and return the endpoint and required access without exposing the token. For direct use without **sdd-manage**, ask the user for a suitable credential. Do not treat a replacement token as proof that the requested operation is permitted.

Before changing hosted objects, **sdd-manage** must coordinate the user's requested hosted operation and a current **sdd-orient** handoff establishing the project's eligible Git worktree and governing instructions. Read-only inspection requires no Git mutation gate. Do not create commits, push branches, or create or merge pull requests here.

Return the repository identity, task ID to issue number and URL associations touched, created or changed objects, access failures, ambiguity, and remaining differences. Pass issue references to the implementation and reporting workflows for commit composition. Do not infer task completion from issue state.
