# GitHub TASKS projection

Create a GitHub issue for each TASKS task, a GitHub milestone for each SDD milestone, and a phase label for each SDD phase. Assign each task issue its parent milestone and phase label when creating it. After a task is implemented, verified, committed, and reconciled in TASKS, close its issue as completed under [issue lifecycle](github-issue-lifecycle.md).

Project the Phase → Milestone → Task hierarchy into one GitHub repository. Re-read TASKS and the relevant PLAN outcomes and exit conditions before writing. Take all three levels' IDs and names from TASKS; use PLAN for supporting descriptions, not to rename hosted objects. Follow an established project naming convention only when it preserves unambiguous stable identity and the hierarchy.

| SDD item | GitHub object | Name or title | Brief description or body |
| --- | --- | --- | --- |
| Phase `2` — Archive streams | Label | `sdd-phase-2-Archive-streams` | Brief phase name and purpose. |
| Milestone `2.2` — ZIP support | GitHub milestone | `sdd-2.2-ZIP-support` | Milestone outcome and exit conditions. |
| Task `T-012` — Implement ZIP stream support | GitHub issue | `[T-012] Implement ZIP stream support` | Task brief and exact identity marker. |

Derive names from TASKS using the hierarchy convention's normalization rule. Match managed objects by stable ID before reconciling a changed name; do not create a duplicate because a title changed. Give the phase label a brief description rather than copying the whole PLAN. The GitHub milestone reflects the milestone's outcome and exit condition; it is not a nested child of the phase. Assign each task issue the phase label and its GitHub milestone. Do not strip unrelated labels when reconciling.

When **sdd-report** is available, request its issue draft (`title`, `body`) using TASKS and applicable documents, then enforce the stable task prefix and identity marker here. When it is unavailable, compose a baseline draft with task outcome, reason or relevant context, expected scope, dependencies, acceptance and prescribed checks, and document links where present. Include code context, measurements, or task-kind instructions when the actual task calls for them; example prose from other projects is not a source of requirements. Do not fill absent facts with invented content. Separate each Markdown heading from adjacent content with a blank line, including in generated issue bodies; a heading at the start of a file or template needs no leading blank line. Reserve a clearly delimited backend-owned section, for example:

```markdown
## Task brief <!-- sdd-forge:task-id=T-012 -->

**Outcome:** ...
**Context:** ...
**Scope and dependencies:** ...
**Acceptance and verification:** ...
**Sources:** ...
<!-- /sdd-forge:task-id=T-012 -->
```

Use the exact ID for lookup. Before creation, search open and closed issues and exclude pull requests; validate any candidate's marker and title against TASKS. Reuse a unique match and report a conflict for multiple or contradictory matches. Create or reconcile the phase label and GitHub milestone, then the task issue with both associations. Re-read after a failed or interrupted write before retrying. Do not close or reopen an issue merely because TASKS changed; use the issue lifecycle procedure.

Report created, matched, updated, and conflicted objects with IDs and URLs. Return the task-to-issue associations as the handoff; a separate checked-in mapping artifact is not required for this projection.
