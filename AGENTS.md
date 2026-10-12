# Using SDD Manager

SDD Manager is an Agent Plugin for specification-driven development in Git repositories. This entry guides agents using the plugin in a project. Read [README.md](README.md) for capabilities, package contents and getting started.

## Workflow entry and instructions

Start coordinated work at [sdd-manage](skills/sdd-manage/SKILL.md). Use [sdd-orient](skills/sdd-orient/SKILL.md) to establish the target project's instructions, Git state, existing documents and interrupted work. Load the selected skill's SKILL.md and only the references needed for the requested stage. Bundled skills use relative Markdown links and named workflow handoffs; client loading and routing depend on the host.

Use an existing eligible Git worktree for project changes. Follow the target project's controlling instructions, accepted requirements and requested stopping boundary. Clarification answers do not accept new development documents; apply the [human document checkpoints](skills/sdd-manage/references/human-document-review.md) before dependent work. Preserve unrelated files and pending changes.

## Project work and persistence

Apply the shared [Markdown style](skills/sdd-conventions/references/markdown-style.md) to authored or maintained documents: blank lines after headings and around top-level lists and code blocks, four spaces per structural indentation level and one space after each list marker. Preserve literal code/data syntax and closed records.

For task-list execution, follow the [task commit contract](skills/sdd-implement/references/completion-and-checkpoints.md#task-commit-contract): one executable task's closing result/evidence and initial checklist completion in the same commit, with a leading single owning task ID. Non-task campaign actions and merge commits do not invent task IDs. Use the linked audit/recovery rules for continuation and integration.

Push every workflow-owned commit and read back the remote before further project work or another commit. Pause on unresolved publication; honor explicit local-only or deferred-publication instructions within their stated scope. Follow [Git integration and recovery](skills/sdd-manage/references/git-workflows.md) and the selected workflow's integration boundary. Preserve unrelated staged work; never force-push or reset it. Keep credentials out of source, reports and handoffs.

## Source contributors

For work on SDD Manager itself, load the source repository's [contributor entry](https://github.com/pchemguy/SDD-Manager/blob/main/acceptance/AGENTS.md) and applicable nested instructions. That source-only entry is outside the installed package.
