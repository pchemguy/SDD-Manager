---
name: sdd-manager
displayName: SDD Manager
---

# SDD Manager

SDD Manager provides specification-driven development workflows for Git projects through a set of focused skills. Use this document to select skills and coordinate workflows. Each skill's `SKILL.md` defines its procedure, with supporting sub-workflows in `references/*.md`. The [README](README.md) describes capabilities and composite workflows through examples and diagrams.

If the client does not load `PLUGIN.md`, read it explicitly before selecting a workflow. Bundled skills link to one another with relative Markdown links and identify handoffs by skill name. Load only the skills and references needed for the current work.

## Establish the request and context

Identify the objective, operational mode, current stage, authorized outputs and stopping boundary. For compound work or unresolved workflow selection, use [sdd-manage](skills/sdd-manage/SKILL.md). Use [sdd-orient](skills/sdd-orient/SKILL.md) to inspect the actual target project, Git worktree, controlling root/nested AGENTS.md, governing documents, pending ownership and interrupted work. Read-only work may occur without Git; mutations require an existing eligible worktree. Do not initialize Git implicitly.

Reuse sufficient accepted inputs and existing workflow identities. Clarification supplies requirements; it does not accept newly created documents. Honor explicit human reviews and pending checkpoints before dependent work. A direct focused-skill request selects that owner and its prerequisites without requiring an unrelated full campaign.

## Human checkpoints and Git publication

**Push every workflow-owned commit and verify remote containment before further work or another commit.** This includes completed documents, tasks, review reports, revision actions and merges. A failed push blocks progression. Follow [per-commit publication](skills/sdd-manage/references/git-workflows.md#publish-each-commit); preserve explicit human-directed local-only or deferred-publication exceptions.

**For each necessary new document, publish the reviewable state, present substantive results and pause for human acceptance before dependent work.** The same checkpoints apply to necessary feature documents/proposals. PLAN and layout require separate decisions; reuse sufficient existing inputs rather than creating optional documents to fill the sequence.

| Human checkpoint | Hold before |
| --- | --- |
| PROJECT | ARCHITECTURE or other dependent use of the brief |
| ARCHITECTURE | DECOMPOSITION or contract work |
| DECOMPOSITION | SPEC |
| SPEC | PLAN |
| PLAN | New layout or TASKS |
| layout | TASKS |
| TASKS | Implementation or hosted task projection |
| Requested implementation range completed | Any task beyond the requested count, milestone, phase or named checkpoint |
| Steering amendment completed | Resuming implementation |
| Assessment-only review completed | Repairs or revision execution |

**The human defines the implementation range and decides what follows it.** Commit each task’s verified result, evidence and initial completion checkbox together, then push and verify remote containment. At the end of the requested range, report the boundary results and stop. Do not add ready tasks, review tasks or another phase beyond the selected range. The human may request continuation or steering; start neither automatically. Partial main phases push and pause without merging. A complete phase or feature integrates only when its established verification and scope gates are met.

Clarification, agent QC, passing tests and commits/pushes do not constitute human acceptance. Broad development authority does not preaccept unseen documents or expand a selected implementation range. Preserve pending decisions after interruption. See [document review](skills/sdd-manage/references/human-document-review.md) and [implementation checkpoints](skills/sdd-implement/references/completion-and-checkpoints.md#parent-completion-and-stopping).

## Requested implementation tracking

**When tracking is requested, prepare and maintain hosted objects throughout task-list-based implementation.** Use `sdd-manage` to coordinate and `sdd-forge` for GitHub issues, labels and milestones, or supported provider equivalents.

- **Before execution:** create/reconcile the eligible phase's phase label, all milestones and all task issues, including review/report tasks. On GitHub, use milestone objects and verify each issue's phase label and milestone association. Use milestone labels only where the provider lacks milestone support. Missing or unverified objects block affected implementation. Activate later phases only when eligible.
- **During execution:** project added tasks and update changed associations before their execution. After each task is verified, committed and pushed, close its issue with evidence. Close milestones only after all constituent issues, required reviews and exit conditions are complete.
- **After amendments or interruption:** reconcile actual hosted state, reuse existing identities, finish pending operations and reopen affected issues/milestones when acceptance is invalidated.
- **At each implementation checkpoint:** report tracking status and unresolved operations. Provider failures preserve local results but do not waive required projection or dependent closure gates.

Follow [phase activation](skills/sdd-manage/references/phase-activation.md) and the [tracking lifecycle](skills/sdd-conventions/references/backend-object-lifecycle.md).

## Skill routing

| Request or concern | Owner and entry | Handoff |
| --- | --- | --- |
| Multi-stage workflow, scope, branches, credentials or transition | [sdd-manage](skills/sdd-manage/SKILL.md) | Establish mode, authorized boundary and next owner |
| Repository/instruction state or interruption inspection | [sdd-orient](skills/sdd-orient/SKILL.md) | Return actual context and mutation eligibility; no edits |
| Design/modularity, task hierarchy or shared conventions | [sdd-conventions](skills/sdd-conventions/SKILL.md) | Supply applicable criteria to the selected owner |
| Explore purpose; create/revise/review the project brief; design architecture or components | [sdd-design](skills/sdd-design/SKILL.md) | [PROJECT brief contract](skills/sdd-design/references/project-brief.md), ARCHITECTURE and DECOMPOSITION or necessary feature deltas |
| Behavior, interfaces, contracts or acceptance requirements | [sdd-specify](skills/sdd-specify/SKILL.md) | SPEC or scoped feature contracts from accepted design |
| Delivery strategy, milestones, dependencies or physical layout | [sdd-plan](skills/sdd-plan/SKILL.md) | PLAN and layout from accepted contracts |
| Executable tasks and dependency/progress review | [sdd-tasks](skills/sdd-tasks/SKILL.md) | Owning TASKS/FEATURE-TASKS from ready PLAN/layout |
| Select, execute or resume a bounded task range | [sdd-implement](skills/sdd-implement/SKILL.md) | Task-owned implementation, verification, closing commits and publication |
| Human amendment at a paused task-list checkpoint | [sdd-steer](skills/sdd-steer/SKILL.md) | Amend existing inputs/implementation; return without resuming tasks |
| Incorporate accepted feature documents or task ownership | [sdd-integrate-feature](skills/sdd-integrate-feature/SKILL.md) | Reconcile only selected main documents; no task execution |
| Test strategy, scenarios or test changes | [sdd-tdd](skills/sdd-tdd/SKILL.md) | Tests/evidence for the active execution owner |
| Checks, failures, acceptance coverage or boundary code review | [sdd-verify](skills/sdd-verify/SKILL.md) | Evidence and gaps; verification does not authorize repairs/status changes |
| README, guides or module/API documentation | [sdd-docs](skills/sdd-docs/SKILL.md) | Documentation within accepted source/scope |
| Issues, commit/merge messages or evidence-based reports | [sdd-report](skills/sdd-report/SKILL.md) | Drafts distinguish planned, executed and published effects |
| Git highlights, release messages/packages or hosted tracking/releases | [sdd-forge](skills/sdd-forge/SKILL.md) | Provider/range evidence and authorized hosted effects |

Name the destination skill in each handoff and link its entry where useful. Transfer objective, accepted inputs, actual stage/branch/checkpoint, selected IDs, pending ownership, verification/hosting state and stop. Reading a sibling reference supplies shared guidance; it does not select that skill's entire workflow. Handoffs depend on the client's execution facilities.

## Composite workflows

Main development, feature and revision describe development purpose; stages and supporting capabilities compose their actual paths. Composite workflows combine established stages and supporting skills within their prerequisites and authorized scope; they create no new workflow authority, branch convention or permission grant. The [canonical catalog](skills/sdd-manage/references/workflows.md) owns detailed entry and transition rules.

### Project preparation and bounded delivery

`PROJECT.md` is the concise project brief: purpose, users, desired outcomes, principal scope/non-goals and consequential constraints derived from the seed and actual clarification, with material assumptions/questions identified. Use `sdd-design` and its [project brief contract](skills/sdd-design/references/project-brief.md) for direct drafting, revision or review before architecture. The brief supplies shared context without replacing structural design or exact SPEC behavior.

From a project seed, `sdd-manage` coordinates `sdd-orient` → `sdd-design` (PROJECT, ARCHITECTURE, DECOMPOSITION) → `sdd-specify` (SPEC) → `sdd-plan` (PLAN, layout) → `sdd-tasks` (TASKS). Use `sdd-conventions` throughout as needed. Follow the [human checkpoints and publication requirements](#human-checkpoints-and-git-publication) above and apply [document QC](skills/sdd-manage/references/document-qc-gates.md).

Existing or interrupted projects enter at the next eligible stage after actual-state assessment; requested interactive review comes first. Persist preparation on design-docs and stop when preparation-only. If implementation is authorized, integrate accepted preparation into the actual default branch, verify/publish it, then establish the dependent phase branch. Only then hand ready TASKS, selected range, dependencies and tracking state to `sdd-implement`. See [preparation integration](skills/sdd-manage/references/branch-management.md#preparation-integration-gate).

### Task implementation and continuation

`sdd-implement` owns range selection and execution. It first publishes outstanding commits with readback, then audits the claimed closing boundary before edits/tests/task selection. `sdd-manage` establishes [tracking decision](skills/sdd-manage/references/tracking-decision.md) and [phase activation](skills/sdd-manage/references/phase-activation.md); requested tracking needs verified eligible-phase objects/associations before execution. Missing initial or added-task associations block affected work. Carry actual confirmation/decline and provider state, not an assumed default.

For each eligible task, compose `sdd-tdd`, implementation, `sdd-docs` and `sdd-verify`; use `sdd-report` for evidence/message composition and `sdd-forge` for confirmed hosted lifecycle effects. Close the task with its result/evidence and initial checklist completion in one commit, then publish/read back before advancing. Finish pending work before selecting more. Partial main phases push/pause; only a complete verified phase integrates. Required milestone/phase code review, tests and reports remain part of the owning task list. Outages permit only independently eligible, already-projected work; unknown dependent effects stop transitions.

### Feature preparation, execution and incorporation

`sdd-manage`/`sdd-orient` establish the feature scope and accepted main inputs. Use design/specification/plan/layout/task owners only for necessary deltas; do not invent optional overlays. Review each necessary new document with the human and apply QC. Integrate accepted design-docs preparation before creating the dependent feature implementation branch. Pass FEATURE-TASKS and its eligible range to `sdd-implement`.

Before final feature verification, use `sdd-integrate-feature` to incorporate selected accepted deltas into main documents and reconcile/archive ownership within scope. Transferring tasks requires both lists in scope and one executable owner per task. Verify the coherent authorized boundary, explicitly integrate/publish the established target, then stop. Document-only incorporation ends without task execution. See [feature incorporation](skills/sdd-integrate-feature/SKILL.md).

### Review and accepted revision

`sdd-manage`/`sdd-orient` pin source, concerns, evidence mode and boundary. Selected owners assess concerns; `sdd-report` retains located findings. Systematic reviews plan units; focused reviews can use prompt-defined criteria. Publish each report checkpoint. Review stops before repairs unless authorized; an accepted amendment may enter revision planning directly without invented review stages.

For execution, record accepted revisions, route bounded source/document/test changes to their owners and use `sdd-verify` for actual rechecks. Retain findings and deferred evidence; publish coherent action checkpoints. Integrate only the complete authorized verified boundary, with merged checks and target publication. [Nested and reopened revision modes](skills/sdd-manage/references/revision-modes.md) preserve parent/source/return context and original opening provenance; do not automatically resume a suspended parent.

### Checkpoint steering

At a paused implementation checkpoint, `sdd-manage`/`sdd-orient` establish the human-defined amendment and paused target, then hand to `sdd-steer`. Assessment-only returns impact. Authorized execution amends affected existing documents, implementation and tests without feature overlays or an obligatory formal campaign, using `sdd-tdd`/`sdd-docs`/`sdd-verify`/`sdd-report` where needed. Commit/publish the amendment, integrate and verify/publish its paused target, then return control. Do not resume `sdd-implement` until separately instructed. See [steering](skills/sdd-steer/SKILL.md).

### Release preparation and publication

`sdd-manage` routes [highlights-only](skills/sdd-forge/references/release-highlights.md) versus [complete release-message](skills/sdd-forge/references/release-message.md) requests through `sdd-forge` and `sdd-report`. Pin the Git range/source; use integration summaries and preserve applicable human edits/cuts. Highlights-only returns curated changes, not a complete message. Full preparation atomically refreshes retained root RELEASE-NOTES.md, including applicable ancillary sections, and stops without publication. Respect explicit templates/paths and supplied-text-only scope.

On an authorized release request, `sdd-forge` verifies source/coverage/body context and version; version match alone is insufficient. Refresh stale notes before `sdd-manage` persists the release commit. The commit body and GitHub body share exact finalized Markdown, with the tag targeting that verified commit. Publish/read back each Git boundary before dependent tagging/provider publication. `sdd-forge` owns package/workflow/provider operations; `sdd-verify` assesses source/assets/body/download evidence and `sdd-report` describes actual outcomes. Reuse matching effects on recovery. Packaging preparation alone stops before release; an optional prerelease review requires explicit selection. See [Git release boundary](skills/sdd-manage/references/git-workflows.md#release-commit-and-tag) and [GitHub release owner](skills/sdd-forge/references/github.md).

### Focused maintenance and optional hosting

Select independent design/specification/plan/task/document/test/verification/reporting work through its owner, preserving its narrow outputs. Read-only review/checks/drafts do not authorize repairs, task completion, PR creation or publication by themselves. Combine supporting work only when the actual request needs it.

When hosted tracking is selected/confirmed, `sdd-manage` carries that decision to `sdd-forge`; `sdd-forge` projects the eligible phase and verifies associations/closures. Git and API access are separate. Credential failures use [protected recovery](skills/sdd-manage/references/credentials.md), not policy bypass. Hosting-only requests stop after their authorized effects; local work does not require provider credentials.

## Branches, integration and continuity

Establish actual working/source/target branches and checkpoint before mutation; reuse them on continuation. Preparation uses design-docs, main execution uses phase branches, and feature/revision branches follow the [identity and branch convention](skills/sdd-manage/references/branch-management.md). Prefixes discover candidates; they do not prove acceptance or authorize a merge.

Apply the [task commit contract and audit](skills/sdd-implement/references/completion-and-checkpoints.md#task-commit-contract). Exactly one owning task ID leads a closing task subject; non-task actions/merge commits invent none. A checkbox, passing command, issue closure or merge summary alone cannot prove completion. Preserve owned/unrelated staged and unstaged work; dirty state does not authorize a reset.

Push/read back every workflow-owned commit before further work or another commit, under [per-commit publication](skills/sdd-manage/references/git-workflows.md#publish-each-commit). Honor explicit local-only/deferred-publication exceptions and stopping boundaries. Eligible integration uses an explicit two-parent merge, merged verification and target publication; partial ranges and assessment-only requests do not authorize complete integration. On conflict, denied publication or uncertain effects, preserve work and reconcile actual state. Never force-push or reset unrelated work. Git supplies checkpoints; no transaction journal is required.

Hosted state reflects verified local evidence. Verified/published tasks close before milestone closure; required review/report tasks and exits gate phase progression. Provider failures remain pending without erasing local results. Use [backend lifecycle](skills/sdd-conventions/references/backend-object-lifecycle.md) and [Git recovery](skills/sdd-manage/references/git-workflows.md) for detailed ownership/order.

## Campaign records and shared conventions

Formal campaign artifacts live on their revision branch under the [shared campaign convention](skills/sdd-conventions/references/review-campaigns.md); they need no preliminary default/design-docs merge. Steering and feature records use their owning report/feature locations. Retain original opening and branch-off provenance, stable findings and accepted scope through amendments. [sdd-report](skills/sdd-report/SKILL.md) owns report and integration-summary composition; source owners retain persistence responsibility.

Use current main owners and active records for routine work. Closed packages are frozen history; do not load their contents without a specific current need, edit them or assess their later compatibility. Eligible explicitly reopened revisions use the selected mode, not silent historical repair. Inspect preservation by Git path/object diffs.

Apply [Markdown conventions](skills/sdd-conventions/references/markdown-style.md): blank lines after headings and around top-level lists/blocks, four-space structural indentation and one space after list markers. Preserve code/data literals and closed records. Keep credentials out of source, prompts, reports and handoffs.
