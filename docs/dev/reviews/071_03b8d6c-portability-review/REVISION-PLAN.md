# Cross-agent continuity revision plan

## Campaign and decisions

- Campaign: `071_03b8d6c`; starting baseline `03b8d6c9e06f22bad62a00f53190e99f90386295`.
- Planning source: `39e40d6a96e5ee6fa1f3eee6b181317bc1712081`; subsequent changes in this planning commit are campaign records only.
- Working branch: `revision/071_03b8d6c-portability-review`; creation parent and integration target: `main`. Original campaign-opening commit: `97a99be31334664a552a23a07d3aefb61d3ac841`.
- Sources: [review plan](REVIEW-PLAN.md), [review report](REVIEW-REPORT.md) and its [consolidated handoff decisions](REVIEW-REPORT.md#consolidated-handoff-decisions).
- State: **Planned; execution not started.** A future execution maintains `REVISION-REPORT.md` in this directory. Do not create a report claiming unperformed actions.
- Current authority: integrate the discussion and prepare, verify, commit and publish this plan. Stop before source revision, adoption, live acceptance, integration or closure. Continue using this campaign when execution is selected.

The objective is for a receiving agent to recover an SDD workflow through repository AGENTS guidance, a durable checkpoint, current development records and Git, without the former conversation. Preserve actual scope, human decisions, work ownership and hosted-operation identity while keeping record maintenance proportionate.

### Finding disposition

| Finding | Planning decision | Remaining work |
| --- | --- | --- |
| R-001 | Accept the continuity/discovery extension. | Define the checkpoint and recovery contract, AGENTS route and owner interfaces. |
| R-002 | Accept the lifecycle extension with milestone/finalization cadence. | Establish automatic checkpoint production and reconstruction between checkpoints; preserve existing atomic commits. |
| R-003 | Resolve the design choice through branch discovery and explicit selection. | Record creation parents, align branch setup/integration and handle nested/legacy/concurrent contexts. No separate active-branch registry. |
| R-004 | Accept repository-only continuation coverage extensions. | Extend acceptance contracts and useful native Git fixtures. Actual fresh-agent trials remain separately selected. |

All findings remain Open until their relevant changes and rechecks are evidenced. The earlier per-commit handoff refresh proposal is superseded. A second chronological handoff log, saved phase patch files and an additional default-branch locator are not selected.

## Resulting design

### Canonical owner and discovery

Add package reference `skills/sdd-manage/references/continuity.md`. It owns checkpoint establishment, scheduled refresh, branch selection, reconstruction, transfer readiness and parent return. Route it from `sdd-manage/SKILL.md` before these operations and from the affected owners; do not replicate its procedure across entries.

Target-project AGENTS supplies a concise dedicated continuity section. PLUGIN exposes the capability and coordinator route. `sdd-orient` reads relevant files and refs, reports facts and missing evidence, and does not fetch, switch branches, alter files or execute continuation. The coordinator handles authorized remote refresh, selection and mutation. Keep both discovery protocol copies unchanged and retain read-only capability discovery as a separate operation.

### Record contract

Add `assets/HANDOFF_TEMPLATE.md`, producing target-project `docs/dev/HANDOFF.md`. The file describes a named checkpoint, not every change up to the current branch tip. Its own containing commit can identify the snapshot; no self-referential commit SHA or follow-up commit is required.

Keep the checkpoint identity and a brief outcome summary above four substantive sections:

1. **Workflow and sources:** active workflow/variant, stage/owner, applicable campaign/phase and links to governing documents, task list and evidence.
2. **Scope and human decisions:** objective, authorized range/exclusions, exact stop, pending approvals, applicable preapprovals/overrides and their sources. Link records containing later decisions.
3. **Branches and return:** working branch, creation parent, full branch-off commit, integration target, suspended parent stage and return boundary. Parent and target agree for new workflow branches.
4. **Pending work and next action:** incomplete work, blockers, effects requiring confirmation and next eligible operation as of the checkpoint. Include necessary package/setup/input availability and dirty-work limitations only when relevant.

Retain selected reporting preferences without another settings file. Compress old outcomes into short phase/campaign summaries with evidence links; keep recent detail bounded to the current checkpoint. TASKS/DOCS_TASKS, accepted documents, decision records and completion/campaign reports remain the detailed owners. Git supplies changes since the checkpoint and between phase baselines/endpoints; do not duplicate them as patch files or incremental handoff documents.

### Mandatory cadence

| Event | Required continuity action |
| --- | --- |
| Authorized workflow entry/adoption | Establish or reconcile its handoff, scope, source records and parent relationship. Preserve existing controlling/manual content. |
| Final review/report task in each main/feature implementation milestone | Automatically refresh HANDOFF with the verified milestone outcome, evidence, remaining scope and next boundary in the same commit as the review report and task-completion checkbox. |
| Phase review/report task | Automatically refresh HANDOFF with the overall phase outcome, evidence and integration readiness in that task's completion commit. |
| Workflow completion or eligible integration | Reconcile the completed outcome and target/return context through existing completion and merge procedures. |
| Revision finalization | Automatically refresh the completed revision checkpoint; restore parent context during integration. Incremental work remains in the campaign records. |
| Nested campaign entry/return or steering return | Preserve suspension and restore the actual parent boundary without authorizing resumption. |
| Main/feature preparation completion | Refresh at the completed preparation/integration boundary. Intermediate approvals remain in existing preparation records. |
| Ordinary task/action commit between those boundaries | No mandatory HANDOFF edit, review or duplicate progress entry. Existing result/evidence/decision records and Git carry the change. |
| Consequential decision/change between checkpoints | Persist it in the existing owning record when received. Refresh HANDOFF early only if those records cannot adequately preserve it. |
| Explicit request to prepare a handoff | Reconstruct current state, optionally refresh the checkpoint and verify transfer/publication prerequisites without claiming incomplete work is complete. |

Publication remains required after every owned commit. Handoff cadence does not change task atomicity, DOCS first-approval semantics, technical checks, hosted gates or the human's requested stop. A milestone inside an incomplete main phase remains on its phase branch.

Use the existing review/report tasks as the refresh owners; do not create separate handoff tasks or routine follow-up commits. If one task closes both the final review milestone and the phase, one combined update covers both boundaries. A failed or blocked review retains its actual findings and pending boundary; neither the task nor the handoff may present the milestone/phase as successfully complete.

### Recovery and branch policy

Start from the available repository guidance and actual branch/worktree. On a new or reconstructed context, discover local and remote revision/feature branches plus relevant preparation/phase branches. Evaluate integration relative to each recorded parent, not solely main. Establish remote freshness; unavailable remote access is unknown state, not proof of no work. Avoid loading unrelated closed reports or treating every retained branch as active.

Unless the continuation branch is already explicitly selected or established in sufficient current context, present candidate branches and ask which to continue, even for one candidate. Inspect candidates before asking only as far as needed to identify workflow, parent and pending boundary. Do not switch, merge, reset or resume merely because AGENTS was loaded. With no pending candidate, report the current default/main checkpoint and interpret the actual request rather than replay an old range.

After selection, load its checkpoint and relevant current records. Locate the checkpoint commit and inspect intervening commits/diffs, task/approval changes and pending work. Reconstruct actual scope, decisions and completion, then invoke the proper owner at the earliest eligible operation. An unchanged handoff across later task commits is valid. Missing, contradictory, foreign-scope or unresolvable evidence requires bounded recovery or the specific missing human decision.

Record the creation parent and branch-off commit when creating a workflow branch. Integrate a completed eligible branch into that same parent, then return to its context. Git history corroborates provenance but cannot always recover the original branch name. For legacy workflows, use existing source/target records and history; ask when consequential ambiguity remains. Do not rewrite histories or retroactively retarget active work to make the new rule appear satisfied. Explicit human overrides remain recorded exceptions.

For nested work, preserve the immediate parent and return boundary. Reconcile HANDOFF semantically during merge so it describes the restored parent and points to the child's result, rather than retaining the child's active instructions. A child already integrated into its parent is not independently unfinished just because the parent is absent from main. Final branch return does not select more parent tasks or clear its pending HIL.

## Authoritative project updates and boundaries

The source repository has no root executable TASKS owner. Use the actions below and retained campaign evidence; do not invent implementation task IDs or add unrelated PROJECT/SPEC/PLAN files.

| Owner / artifacts | Planned change | Required before |
| --- | --- | --- |
| Source `docs/dev/PLUGIN-CONTRACT.md` | Add checkpoint/recovery ownership, cadence and consequential assessment contrasts; keep detailed procedure in coordinator reference. | Coupled entry/module revisions. |
| Packaged coordinator entry, continuity reference and HANDOFF asset | Establish canonical behavior, selection conditions and small output contract. | Producer/receiver integration. |
| Branch/workflow and nested-campaign owners | Make creation-parent/integration agreement explicit; preserve prerequisite baselines, same-parent return and legacy handling. | New branches and merged handoff claims. |
| AGENTS template and orientation owners | Provide discovery/navigation and distinguish checkpoint state from later facts. | AGENTS-led receiver assessment. |
| Preparation, implementation, campaign/steering/reporting owners | Produce checkpoints at selected boundaries and preserve intermediate decisions in existing records. | Claiming automatic continuity across composite workflows. |
| TextStats component | Add repository-only variants and evidence boundaries; keep coordinator/assessor expectations out of consumer instructions. | Any future live portability claim. |

The full package root is `.agents/plugins/sdd-manager/`; package paths below are relative to it. Target-project `docs/dev/HANDOFF.md` is a project record, not a package-root runtime file. Only its reusable template ships. Root source AGENTS, contract, acceptance and the source project's own HANDOFF remain outside the package.

## Ordered revisions

Each action below is **Planned**. Complete the named dependencies, inspect both sides of changed handoffs, retain actual results in the future revision report, then commit/push/read back before advancing to another action. Closely coupled edits within one action may share its commit; do not certify downstream behavior before its own integration/recheck.

### V-001 — Define the continuity module and template

- Findings: R-001/R-002; dependency: execution selection and current-source reconciliation.
- Targets: source `docs/dev/PLUGIN-CONTRACT.md`; package `skills/sdd-manage/SKILL.md`, new `references/continuity.md`, `references/coordination.md` and new `assets/HANDOFF_TEMPLATE.md`.
- Define the record/cadence/reconstruction contract above. Replace coordination's conflicting claim that existing documents/session decisions always suffice without a continuity artifact. Preserve the ban on mandatory transaction journals and duplicate registries.
- Route the module explicitly by purpose/boundary and load conditions. Reference detailed branch/Git/owner procedures rather than reproducing them. Support direct coordinator access without PLUGIN.
- Recheck: every template field has a source and owner; all four substantive groups are covered; no own-SHA requirement, per-task refresh, second checklist, saved patch series or undocumented settings file. Compare a checkpoint at branch tip with the same checkpoint followed by several task commits; both must be supported.

### V-002 — Align branch provenance, integration and nested return

- Findings: R-002/R-003; dependency: V-001.
- Targets: `sdd-manage/references/branch-management.md`, `git-workflows.md`, `revision-modes.md`, relevant feature/preparation sequencing in `workflows.md`; `sdd-conventions/references/workflow-identity.md` and `sdd-report/references/campaign-artifacts.md` / `object-drafts.md` only where provenance is defined.
- Record actual creation parent and full branch-off commit alongside existing workflow identity; preserve original campaign identity on reopening and record its distinct reopening checkpoint.
- Resolve the current default-based implementation / different phase-target allowance: first satisfy the accepted published preparation prerequisite on the intended parent, then create the implementation branch from that parent. If propagation requires an authorized merge, use the existing verified integration procedure; missing authority or incompatible history is a blocker, not permission to retarget.
- Make same-parent completion/return explicit, keeping default-branch discovery portable and preserving explicit narrower/no-merge exceptions. Handoff refresh does not create an extra merge boundary.
- Define deliberate HANDOFF reconciliation in prospective merges and recovery of an interrupted merge/publication. Restore parent context and retain child evidence without auto-resumption. Do not back-edit frozen child reports after closure.
- Recheck: ordinary and nested revisions, feature inside phase, reopened campaign, completed retained child, parent advanced since branching, ambiguous legacy parent, worktree occupancy and unmerged partial phase. No silent reset, force-push, branch deletion or parent substitution.

### V-003 — Connect AGENTS startup and scoped orientation

- Findings: R-001/R-003; dependencies: V-001/V-002.
- Targets: `assets/AGENTS_TEMPLATE.md`, `sdd-manage/references/agent-orientation.md`, `workflows.md`, and `sdd-orient/SKILL.md` / `references/inspection-and-handoff.md` where their actual route/report needs adjustment.
- Add dedicated AGENTS continuity guidance: read HANDOFF, use coordinator recovery and inspect later records before dependent work. Keep durable instructions separate from changing state and from the existing Initialization/discovery section.
- Extend orientation's evidence paths/report to include handoff checkpoint, relevant subsequent changes and branch/parent observations. Keep it read-only; coordinator supplies permitted remote refresh and chosen checkout.
- Define startup candidate selection against recorded parent containment and unfinished operations. Present one or several candidates for user choice when no selection is established. A selected branch does not trigger repeated selection questions on ordinary continuation.
- Recheck: explicit branch, default clone with one/multiple candidates, suspended parent/child, stale refs, no remote access, missing handoff/plugin and no unfinished work. Both discovery protocol files remain byte-identical to planning source; passive discovery performs no workflow work.

### V-004 — Establish handoffs during adoption and preparation

- Findings: R-001/R-002; dependencies: V-001–V-003.
- Targets: `sdd-manage/references/main-preparation.md`, `repository-bootstrap.md`, `human-document-review.md`, feature preparation in `workflows.md`, and `assets/DOCS_TASKS_TEMPLATE.md` only for affected output/evidence guidance.
- Establish the initial generated handoff within authorized workflow setup. For fresh main preparation, do so after enabled pre-write tracking and with the owning initialization checkpoint on design-docs; it is generated workflow metadata, not a fifth copied root guidance file. Preserve any existing record and its ownership, and retain the original four-file presence outcomes/mixed-state stop.
- The default branch receives the initial main-preparation handoff through the normal complete documentation merge. Discover an unfinished design-docs branch before then; do not bypass preparation gates with an extra default-branch write or premature merge just to expose the record. Existing-project adoption uses its selected branch and normal integration boundary.
- Persist intermediate acceptance, preapproval/revocation and original initialization evidence in existing DOCS_TASKS/preparation records. Do not refresh HANDOFF at every proposal/approval. Refresh at preparation completion/integration with package QC, pending milestone confirmation and the exact preimplementation stop.
- Recheck: none/all/mixed initial guidance presence; existing handoff; resumed partial documents; unchanged first-approved document; later amendment; preparation-only and early document stop; tracking disabled or blocked. Nine DOCS issues, four copied guidance files and first-approval atomicity remain unchanged.

### V-005 — Add milestone checkpoints and reconstruction to implementation

- Findings: R-001/R-002; dependencies: V-001–V-004.
- Targets: `sdd-implement/references/startup-and-continuation.md`, `range-selection.md`, `completion-and-checkpoints.md`, its SKILL entry only for a necessary pre-action route, and `sdd-report/references/completion-reports.md`.
- Make each milestone's final review/report task and each phase review/report task explicit automatic HANDOFF refresh triggers. Include the handoff update, verified review report, task-owned result and initial completion checkbox in the same task-completion commit. Preserve existing task ownership and subject rules; do not add separate handoff tasks or routine maintenance commits.
- The milestone update retains the demonstrated outcome, evidence, unresolved findings/operations, remaining authorized scope and next boundary; the phase update also establishes overall exit evidence and integration readiness. One task closing both boundaries produces one combined update. Failed or blocked review remains incomplete and cannot produce a successful-completion snapshot. During the later integration, reconcile HANDOFF to the resulting parent context.
- Give phase/feature completion reports useful baseline/end references for on-demand diffs. Retain bounded recent outcomes and summarize older completed phases; do not store every task description again.
- On resume, recover task state and later decisions since the handoff checkpoint before using its next action. Preserve the existing push-first prerequisite, task audit, unsafe-completion recovery and exact selected range. A mid-milestone stop remains recoverable without a freshly rewritten HANDOFF.
- Route changed tracking choices, pending host operations and human grants to their existing evidence owners. Do not invent a new audit requiring HANDOFF to change in every task commit.
- Recheck: milestone/phase review closing commits contain their HANDOFF updates; one review task covering both boundaries needs no second update; failed/blocked review does not claim completion; last handoff at M1 followed by valid M2 task commits; changed/revoked scope recorded later; clean or dirty interruption; retained unpublished commit; exact mid-milestone stop; feature subset versus whole-project parent status; milestone complete within incomplete phase. Resume valid work; do not discard incomplete milestones automatically.

### V-006 — Cover campaign, steering, feature and supporting-operation returns

- Findings: R-001/R-002/R-003; dependencies: V-001–V-005.
- Targets: coordinator `review-and-revision.md`, `revision-modes.md` and relevant operation routes; `sdd-steer/references/objective-and-impact.md` / `verification-and-stop.md`; `sdd-integrate-feature/SKILL.md` / `references/feature-incorporation.md`; report formats where they own decision/result persistence.
- Keep incremental revision/feature details in their existing active records. Automatically establish entry context and refresh revision finalization; nested entry and merge return preserve the parent's stage, scope and pending decision.
- Incorporation updates governing-owner links when paths move/archive and retains unresolved reassessment. Do not make archived checklists active or maintain frozen records.
- Ensure read-only reviews and focused calls preserve their narrow scope. An operation that changes an active workflow returns the necessary facts to its checkpoint/decision owners; a release/support operation does not silently create a task campaign or alter release-message/commit/tag rules.
- Define optional “prepare handoff” routing through the same module: inspect checkpoint plus delta, optionally create an accurate transfer checkpoint, and check publication/input availability. No special client command, new skill or transfer ritual is required for ordinary continuation.
- Recheck: review-only return; final revision without merge authority; nested child finalization; steering stop; partial feature incorporation; uncertain hosted operation; explicit transfer with missing ignored bytes. Preserve the actual pending operation for readback without recursive post-push bookkeeping commits.

### V-007 — Update concise projections and adopt the source-project record

- Findings: R-001/R-002; dependencies: V-001–V-006.
- Targets: package `PLUGIN.md` and full `README.md`; source `docs/dev/CAPABILITY-MAP.md` where affected, `AGENTS.md` and new `docs/dev/HANDOFF.md`; abbreviated root README only if its existing navigation needs adjustment.
- Describe checkpoint-based portability, branch choice and recovery briefly, linking canonical instructions. Explain that normal work maintains checkpoints automatically and an explicit handoff request is optional. Do not enlarge PLUGIN with a second procedure.
- Give source AGENTS a dedicated concise continuity pointer while retaining its discovery initialization and contributor/acceptance boundaries. Establish the source-project HANDOFF from this campaign's actual state and main parent; its first default-branch placement is the eventual authorized campaign merge. Do not fabricate completed execution or retroactive checkpoints.
- Recheck audience boundaries, selective loading and entry independence. The source HANDOFF is not shipped; `assets/HANDOFF_TEMPLATE.md` and the continuity reference are shipped. Keep all root/package notices, licenses, manifest fields and unrelated user prompts unchanged.

### V-008 — Extend repository-only acceptance coverage and native Git checks

- Findings: R-004 plus R-001–R-003 rechecks; dependencies: V-001–V-007.
- Targets: `acceptance/textstats/cases/assessor/INTERRUPTIONS.md`, consumer `continuation.md` / `uncontrolled-continuation.md`, relevant `cases/catalog.json` variant metadata and setup/recovery documentation where needed; support tests only for executable fixture, catalog or package-boundary behavior. Extend this campaign's Git probe in a new evidence file if necessary; preserve the original six-check result.
- Define separate repository-only variants for fresh receivers, receiving only an ordinary continuation request, the genuine project checkout/instructions, selected package and permitted facilities. Do not inject the expected workflow, range, approvals or next action into a coordinator-authored continuation summary. Record actual handoffs/isolation.
- Cover prepared worktree, selected published branch, and default clone with explicit subsequent branch choice. Add checkpoint-plus-commits, changed/revoked grant, pending review/tracking override, nested return, ambiguous parents, missing inputs and hosted readback contrasts. Existing coordinator-assisted interruption cases retain their identities and meaning.
- Use disposable native Git fixtures for transport, relative-parent containment and checkpoint/diff retrieval. Test only behaviors scripts actually exercise; do not create textual assertion tests that merely repeat prose. Update package/snapshot fixtures if the new module/asset expose real inventory assumptions.
- Recheck catalog validity, unchanged historical evidence and honest distinction among component extension, native Git execution and actual consumer trials. No dedicated test repository, new hosted objects, provider mutation or fresh live agent run is selected by this action.

### V-009 — Verify the integrated source revision and prepare its closure

- Findings: R-001–R-004; dependencies: V-001–V-008.
- Reassess all affected producer/receiver interfaces against the scenario matrix below. Search current owners for conflicting per-commit refresh, default-only branch selection, unconditional session-only recovery and parent/target assumptions; repair within the accepted scope.
- Check affected Markdown formatting/links and package containment, inspect exact candidate package contents and run the required support/publisher suites. Record source/environment, exact outcomes and limitations. Run the package-author structural validator if the new asset/reference warrants it, qualifying plugin-contained cross-skill advisories separately from errors.
- Update revision evidence and finding dispositions from observed checks. Source/fixture resolution does not establish actual cross-agent behavior; R-004 can be closed as a coverage extension while live portability remains explicitly unverified.
- Only when execution and integration/closure are selected, finish reports/navigation, reconcile the source HANDOFF to the parent/main checkpoint, verify the full prospective branch difference, explicitly merge into the recorded main parent, verify/push/read back and return there. Freeze campaign records after closure. A failed check/publication or narrower stop retains an open campaign.

## Acceptance and regression matrix

These are planned checks, not passed results. Source walkthroughs establish instruction coverage; native fixtures establish only their exercised Git/support behavior. Genuine fresh-agent execution is a separate evidence level.

| Case | Setup / contrast | Required result |
| --- | --- | --- |
| P-01 | Workflow entered; no earlier handoff | Establish one checkpoint from actual state and preserve unknown decisions. |
| P-02 | Several task commits after a completed milestone | Recover results/range from later records and Git without requiring HANDOFF edits. |
| P-03 | Human stop/preapproval revoked after that checkpoint | Apply the newer persisted decision; do not execute from superseded scope. |
| P-04 | Pending document approval; technical QC passed | Retain the human pause; no guessed acceptance or unnecessary replay of other approvals. |
| P-05 | Milestone final review task; containing main phase incomplete | Its successful closing commit contains the report, checked task and HANDOFF update; remain on phase branch. Failed/blocked review does not claim milestone completion. |
| P-06 | Phase review task and complete eligible phase/feature | Its successful closing commit contains the HANDOFF update; one task closing both milestone and phase needs one combined update. Reconcile parent context during eligible integration into the recorded creation parent. |
| P-07 | Fresh default clone; one unfinished branch | Present and request the continuation branch; do not choose automatically. |
| P-08 | Several branches; one suspended parent with active child | Identify the relationship and request selection without implying both may run. |
| P-09 | Branch explicitly selected in request/current context | Reuse selection, reconstruct state and avoid repeated selection prompts. |
| P-10 | Child merged into parent; parent absent from main | Treat child as integrated; show the parent's remaining boundary. |
| P-11 | No unfinished branch or inaccessible remote state | Distinguish complete/no candidate from unknown; do not resurrect or invent work. |
| P-12 | Shared branch-off SHA, ambiguous/missing legacy parent | Use retained evidence or ask the consequential parent decision; no guessed branch. |
| P-13 | Nested child merge/return; parent HIL pending | Restore parent HANDOFF and branch/context, retaining the stop. |
| P-14 | Published milestone checkpoint with later issue closure unknown | Read exact hosted state before replay; no claim that saved text proves closure. |
| P-15 | Unpublished commit or owned/unrelated dirty paths | Apply existing publication/ownership recovery and preserve valid work. |
| P-16 | Fresh clone lacks required ignored/unpublished inputs | Identify exact transfer limit; do not claim repository-only completeness. |
| P-17 | None/all/mixed DOCS-001 four-file presence | Preserve original behavior, evidence and mixed-state stop; handoff is not a fifth member. |
| P-18 | Preparation targets default, feature targets active phase | Satisfy published preparation prerequisite on the intended parent before creating the child. |
| P-19 | Existing record deliberately older / record truly contradictory | Reconstruct the valid delta in the former; bound recovery in the latter. |
| P-20 | Direct focused call, no PLUGIN, or read-only discovery | Canonical continuity remains available where relevant; discovery/review does not execute unrequested work. |
| P-21 | Source package/archive snapshot | Ship the continuity module/template; exclude source HANDOFF and contributor records. |
| P-22 | Explicit prepare-handoff request mid-milestone | Verify recoverability and publish eligible checkpoint without faking milestone completion. |

## Verification, persistence and stopping

For this planning delivery, check only the changed active records and shared index: internal consistency, local links/anchors, Markdown separation, accepted cadence/branch decisions and allowed diff paths. Preserve all closed records and the original Git probe/result. No runtime package change has occurred, so support-suite success would not verify this plan.

During future execution, run focused useful checks after each action and the combined suites at the coherent integration boundary, rather than repeating full suites after prose-only units. From the repository root, with the declared publisher dependency available:

```text
PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v
PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s .github/tests -v
```

Honor the current source instructions, relevant nested acceptance instructions and their actual runtime/dependency requirements. A changed package, failure or unresolved concern justifies the appropriate additional check. Report structural/source, native Git, support-suite and consumer/provider evidence separately.

Commit the integrated discussion and this plan, push the campaign branch and verify remote containment before any further work. The present deliverable stops there: **campaign open, source revision unexecuted, no merge or live acceptance**. No repeated permission is needed for the already authorized planning publication; later execution follows the user's selected scope and stop.
