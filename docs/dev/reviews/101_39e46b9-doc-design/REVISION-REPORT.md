# Doc-design revision campaign

## Identity and authority

- Campaign: `101_39e46b9`.
- Starting baseline and full branch-off: `39e46b9c159838a87baca6501dc0d75ac4bd1702`.
- Branch: `revision/101_39e46b9-doc-design`; records: `docs/dev/reviews/101_39e46b9-doc-design/`.
- Creation parent, eventual integration and return: main on origin, pchemguy/SDD-Manager.
- Human request: “Open another doc-design campaign.”
- State: open; awaiting the human's doc-design requirements. No parent campaign is suspended.

## Scope and stopping boundary

Open a new revision campaign for SDD Manager's document-design workflows. The request selects a new campaign rather than reopening the completed comprehensive review. No specific defect, mode change, review unit or implementation action has been supplied. Record subsequent requirements here, then prepare the appropriately scoped revision plan when requested or authorized. Do not infer a new mode, repeat the completed review or begin source changes merely from this opening.

Current authority covers branch setup, this opening record, continuity/navigation, commit and publication. Stop after publishing/readback and leave the campaign open. No plugin changes, target-project document reset, hosted DOCS mutations, implementation, integration, version bump, release or closure is selected.

## Opening evidence

Fresh bounded fetch confirms main and origin/main at the baseline above, with a clean worktree. Campaign 100 is actually closed by that published explicit two-parent merge; its source parent is `79b242d2fecd1803059420f46e54b9c4d1be3e01`. Retained result/readback establishes confirmed publication and cleanup; its older HANDOFF is a pre-merge checkpoint, not unfinished work. Prior campaign contents remain frozen.

Identity discovery across review/feature/phase-revision paths and local/fetched refs found 100 as the highest allocated sequence. Reserve 101 with the same branch/directory suffix. Actual execution host remains Linux/Bash; the contributor/acceptance instructions apply and there are no nested docs instructions. Opening verification checks identity, three-path ownership, local links and whitespace; no runtime/product test is needed for this record-only operation.

Commit and publish/read back this checkpoint, then wait for requirements. Recover later publication from Git and its owning session rather than treating this pre-commit record as evidence of future effects.

## R-001 — Document-design workflow leaks into the project brief

The human supplied this PROJECT.md excerpt from the first attempted run:

> Bag randomization, wall kicks and delayed locking become requirements only when the predefined second pass revises the scope.

The sentence describes a documentation pass and future document revision, rather than the project. The human explicitly requires PROJECT.md to describe the project, not the doc-design workflow. This is accepted campaign scope; source implementation has not yet been selected.

### Required boundary

PROJECT.md must stand alone as the brief for the project's currently intended scope: purpose, users, outcomes, principal capabilities, non-goals and consequential constraints. Express that scope directly. Do not explain it through pass numbers, a scope-revision sequence, cursor state, approval policy or what a later document pass will make a requirement. Product scope/exclusions may be stated when useful; their description must not narrate the document-authoring process.

Mode, pass/cursor, predefined scope sequence, reset/approval decisions and completion evidence belong in DOCS_TASKS and existing preparation/continuity records. The agent uses that context to select the current project scope; it must not copy the workflow context into PROJECT.md. Future pass scope remains in its workflow owner until that scope is adopted. This preserves current-scope isolation without turning a future scope addition into a permanent product non-goal.

### Source assessment and revision target

Inspected `sdd-design/references/project-brief.md` and `sdd-manage/references/doc-design-modes.md` at opening source `dc08e08f3500b4d3d34796203099cc0b03346c88`. The brief owner already assigns PROJECT to project intent and calls for intended-state prose; the mode owner assigns pass/sequence records to DOCS_TASKS/preparation evidence. However, their current-pass/future-sequence guidance does not explicitly prohibit carrying that workflow narrative into the authored brief, and the brief's create/review checks do not name this failure. Clarify the output-content boundary with the brief owner and its mode handoff, using concise routing rather than another workflow copy or a new document.

Objective recheck: a brief prepared for an early or later pass explains its product scope without mentioning documentation passes, future document revisions or mode mechanics; the complete sequence and workflow decisions remain recoverable from the designated records. Current requirements must not be expanded to include future pass scope merely to remove the offending sentence.

Evidence limit: the excerpt is user-supplied; the target demo's complete PROJECT.md and execution trace were not inspected. It establishes the reported content defect, not the exact causal path taken by the consuming agent. No target demo file is edited by this campaign. Opening `dc08e08` is published with matching exact-ref readback and confirmed cleanup. This update records the requirement/finding only; keep the campaign open for further requirements or revision planning/execution direction.

## Execution authorization and plan

The human's “Execute revision” authorizes R-001's bounded source correction under the [revision plan](REVISION-PLAN.md). The finding checkpoint `fce68ab0866fd45aaae1b5fb572cd5333054e479` is published/readback verified with confirmed cleanup. Add the explicit authoring/review content boundary with the brief owner, qualify the mode handoff and verify/publish the result. No separate review campaign or broader mode redesign is needed. Keep campaign 101 open; no target demo repair, main integration, version bump or release is selected.

## All-doc-design scope decision

The human explicitly extends this requirement to **all doc-design**. A-001 now covers all seven development-document roles, feature counterparts and focused children, in every mode and pass-control selection. The [expanded plan](REVISION-PLAN.md#accepted-scope-expansion--all-document-design) makes the invariant prominent at plugin/coordinator and direct author entry and enforces it during review/QC, with one canonical definition. Legitimate implementation planning/task content remains with PLAN/TASKS; documentation-workflow state stays in its existing records. The original PROJECT excerpt remains the concrete evidence, not a restriction on the correction's scope.

Initial plan `e3a7c00f8ac175522aa19c4ab08d799c1a7d8966` is published with matching exact-ref readback and confirmed cleanup; no source edits have begun. Publish this scope extension before implementing the broader accepted correction. No closure, release or target-project mutation is selected.

## A-001 — All-document content boundary implemented

Expanded-plan checkpoint `e856dc3454d71fb7cd2167d7e74fcae37d53e9b3` is published with exact-ref readback and confirmed cleanup. Implemented one canonical content-boundary section in the shared document-review procedure. PLUGIN and coordinator expose the invariant before document work; all four authoring skill entries require it for authoring/revision/review of roots, feature counterparts and children, regardless of mode. Review/presentation and dependent QC check it explicitly. The brief owner and mode handoff preserve current scope without narrating preparation passes.

The rule prohibits SDD preparation mode/pass/cursor, future document-revision sequence, approval/reset narrative and requirements conditional on later documentation passes in the product documents. DOCS_TASKS and existing preparation/HANDOFF/campaign records retain those facts. PLAN/TASKS retain actual implementation phases, milestones, work, dependencies and exits. It also prevents adopting future scope early or treating current absence as a permanent product exclusion. No new reference, template or workflow behavior is introduced.

### Source rechecks

| Document / context | Assessed boundary |
| --- | --- |
| PROJECT | Purpose/users/current intended scope stands alone; the reported future-document-pass sentence violates the explicit authoring/review criterion. |
| ARCHITECTURE | Major blocks, dependencies and rationale remain project design; preparation-pass state belongs in records. |
| DECOMPOSITION | Component responsibilities/collaboration remain design; documentation revision order is excluded. |
| SPEC | Current intended behavior/contracts remain requirements; a future documentation pass does not condition their meaning. |
| PLAN | Actual delivery phases, dependencies and exits remain valid; documentation-pass sequencing is excluded. |
| layout | Physical ownership and structure remain valid; cursor/reset mechanics are excluded. |
| TASKS | Executable project work/dependencies/status remain valid; documentation-pass control stays in DOCS_TASKS/evidence. |
| Feature counterpart / focused child / direct owner | The shared definition and all four author-entry routes explicitly include them. |
| Every mode, early/later pass and unchanged retained document | Selected scope is obtained from records; content review is not waived by mode/preapproval or unchanged-file reuse. Future changes remain recoverable without early inclusion or permanent exclusion. |
| Existing controlling project instructions | Normal ownership/reconciliation authority is preserved; this revision does not edit an existing target PROJECT or strip unrelated instructions. |

These are source walkthroughs of the revised criteria, not a consuming-agent trial or a repair of the demo's reported PROJECT. The public README/capability summaries remain consistent with the existing owner roles and need no duplicate detailed procedure. Reference size remains bounded: a substantive shared definition plus concise entry/handoff reminders; no trivial file split or additional journal is added.

### Verification and current result

Linux source checks pass: 139 support tests and 49 publisher tests, zero failures/skips. Current-document link/anchor scan initially covers 131 Markdown files and 1,181 local occurrences; all 18 coordinator reference routes resolve. Scope/whitespace checks confirm only the ten accepted instruction paths and active campaign/continuity/navigation records change. Runtime, tokens/hosting definitions, templates, manifest/version/release notes, external policies, approved demos and every closed package remain unchanged. No new mirrored-text test is added for instruction prose.

R-001 is Verified as an instruction/content-boundary correction across the accepted all-doc-design scope. Agent behavior in an independent rerun remains untested. Check the exact committed package and five extracted CLI help paths before result publication; Git/tool evidence will identify that committed source and outcome. Refresh this completed revision checkpoint, publish/read back and stop with campaign 101 open. No main integration, campaign closure, target-project mutation, version bump or release is selected.
