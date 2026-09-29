# GitHub TASKS projection

Project stable TASKS identifiers into one GitHub repository. Re-read PLAN and TASKS before writing. Treat names below as defaults; preserve an established project convention when it gives stable, unambiguous identities.

| SDD item | GitHub object | Name or title | Brief description or body |
| --- | --- | --- | --- |
| Phase `2` | Label | `sdd:phase:2` | `Phase 2 — <short phase name>: <purpose>.` |
| Milestone `2.2` | Label | `sdd:milestone:2.2` | `Milestone 2.2 — <outcome>; Phase 2.` |
| Milestone `2.2` | GitHub milestone | `2.2 <short outcome>` | PLAN outcome and exit conditions, with stable milestone ID. |
| Task `T-012` | GitHub issue | `[T-012] <imperative task outcome>` | Task brief and exact identity marker. |

Keep label names concise and independent of mutable display titles. Descriptions should explain their scope in one short sentence, not copy the whole PLAN. The GitHub milestone reflects PLAN's outcome and exit condition; it is not a nested child of the phase. Each task issue belongs to its GitHub milestone and has **both** its phase and milestone labels. Do not strip other labels when reconciling.

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

Use the exact ID for lookup. Before creation, search open and closed issues and exclude pull requests; validate any candidate's marker and title against TASKS. Reuse a unique match and report a conflict for multiple or contradictory matches. Create/reconcile phase and milestone labels, then the GitHub milestone, then the task issue and its association. Re-read after a failed or interrupted write before retrying. Do not close or reopen an issue merely because TASKS changed; use the issue lifecycle procedure.

Report created, matched, updated, and conflicted objects with IDs and URLs. Return the task-to-issue associations as the handoff; a separate checked-in mapping artifact is not required for this projection.
