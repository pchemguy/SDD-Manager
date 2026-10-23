# Separate documentation tasks from preparation control and evidence

## Campaign, authority and objective

Campaign `102_4a16f6d`; full starting baseline/branch-off `4a16f6dc3d3025a87183fdf4acb09601a125f649`; opening `f52904ceb24e73bb5912e85c2d6d6b784c1bc1d3`, published/readback verified with confirmed cleanup. Working branch is `revision/102_4a16f6d-docs-task-boundary`; creation parent, eventual integration and return target are main on origin, pchemguy/SDD-Manager. No parent campaign is suspended.

The human requires DOCS_TASKS to hold tasks and a separate document for the other preparation content. This plan defines that separation across templates, lifecycle, recovery, hosted handoffs and package documentation. The current request authorizes planning and its publication; execution and closure are not yet selected. The [campaign record](REVISION-REPORT.md) retains the preceding assessment and accepted boundary.

## Resulting document ownership

| Owner | Content and boundary |
| --- | --- |
| `docs/dev/DOCS_TASKS.md` | The nine stable task definitions, ordered dependencies, task-specific acceptance criteria and completion checkboxes. A title, short purpose sentence and companion link are sufficient navigation. No separate mode, scope-sequence, approval, initialization-result, reset, progress or evidence sections; no general workflow manual. |
| `docs/dev/DOCS_PREPARATION.md` | One main-preparation control/evidence record: effective mode and authority, current pass and scope sequence, decisions/accepted-state identities, initialization/reset outcomes, evidence references and pending transitions. It does not duplicate task completion checkboxes. |
| `docs/dev/HANDOFF.md` | Periodic continuity checkpoint, branch/return context and concise result/next boundary, linking both owners. Keep the existing refresh cadence; no per-document or per-commit duplicate register. |
| Project roots/children | Project intent, design, contracts, delivery, layout and executable work. Documentation mode/pass/reset narrative remains excluded. |
| Adjacent QC reports and Git | Detailed review findings/check results and historical document/pass versions. Link these instead of copying them into either task or preparation file. |

### Preparation-record structure and size

Add `assets/DOCS_PREPARATION_TEMPLATE.md` to the plugin. Use one cohesive template with these sections, instantiated only with known facts or explicit pending/unknown state:

1. **Current control:** effective mode, current pass/scope reference, actual approval/delegation basis and stop. Derive the next eligible task from DOCS_TASKS together with pending effects; a cursor summary cannot override either.
2. **Scope sequence:** the human-defined ordered pass deltas and current position, when multipass is selected. Preserve enough scope to execute later passes without consulting transient chat. Reference a durable detailed scope source when present; keep material requirements when no such source exists. Do not impose multipass machinery on onepass work.
3. **Decisions and document evidence:** concise task/pass-qualified approval or preapproval basis, exact proposed/accepted root-and-child state identity, required QC references and unresolved material choices. Keep current evidence for the nine tasks without repeating checkbox status or creating extra tasks. Accepted product decisions belong in their product owner; this record retains the decision basis/reference.
4. **Initialization and current reset:** retained/copied filenames, checks and any mixed-state continuation decision; the current reset's prior checkpoint, scope change, next pass and authority. Distinguish historical acceptance from evidence for the active pass.
5. **Pending transitions:** only unresolved publication, hosted reopening/closure, integration or final-checkpoint effects, with known identities and the next permitted operation. Clear or replace resolved pending entries using verified facts.

Maintain current state rather than appending a narrative after every action. Keep the predefined scope sequence needed for remaining work; link known prior-pass/reset commits for history instead of retaining successive copies of every evidence table. Do not create per-pass files, a new issue map, command logs, transcripts or duplicate specifications. The template gives concise field guidance, not a copy of coordinator procedures. Main preparation remains the canonical lifecycle owner, with a substantive section defining this record and migration; no additional small reference is needed.

## Lifecycle and atomic persistence

| Boundary | Required change |
| --- | --- |
| Fresh initialization | After enabled pre-write projection clears, create/reuse both templates from the same running package. In DOCS-001's completion commit, retain initialization/control evidence in DOCS_PREPARATION, check DOCS-001 in DOCS_TASKS and establish/reconcile HANDOFF. Keep the four-root-file presence test and mixed-state stop unchanged; the new record is not a fifth tested root file or a tenth task. |
| Proposal / human decision | Keep task unchecked for an unaccepted proposal. Persist proposal identity, decision/preapproval scope and material changes in DOCS_PREPARATION before dependent work. No extra human checkpoint is introduced for generated control metadata. |
| Document completion | Commit the accepted document state, current-pass decision/QC evidence in DOCS_PREPARATION and the owning checked DOCS task together. Retain an unchanged approved blob when appropriate. Use a known proposal commit or content/blob identity; do not embed the completion commit's own future SHA. Publish/read back before issue closure or dependent work. |
| Ordinary later document edit | Preserve completed first-approval checkboxes/issues. Update preparation evidence when a material decision/readiness/pending boundary changes; do not pretend each later edit is a new first approval. Keep active-pass acceptance and current validity distinguishable. |
| Cursor reset | In one commit, put prior/next pass, scope change, authority and reset evidence in DOCS_PREPARATION; uncheck DOCS-002–009 in DOCS_TASKS; refresh HANDOFF. Preserve DOCS-001, documents and identities. Publish/read back before reopening/readback of the same issues; partial reopening resumes the same reset. |
| Autodoc DOCS-008 stop | Commit TASKS, checked DOCS-008, current-pass preparation evidence and HANDOFF together. Preserve the stop before DOCS-009, or perform only the next authorized predefined reset. |
| DOCS-009 and integration | Commit passing package report, checked DOCS-009, preparation evidence and HANDOFF together. Later merge/publication/milestone effects remain pending until verified. Preserve the separate final preimplementation checkpoint and authorized-range requirement. |

Preparation control, pending-operation notes and Git/provider readback have different time perspectives. A checkbox or saved outcome cannot prove a future push, issue closure or merge. Do not add a maintenance commit solely to replace an already recoverable pending-effect note: retain current evidence at the next owning operation and reconcile Git/provider state on recovery. Existing publication exceptions, ownership safeguards and stopping instructions remain in force.

## Existing-project adoption and compatibility

On an authorized fresh/resumed main-preparation write, preserve an existing task list and record. For a legacy mixed DOCS_TASKS, move its non-task content into DOCS_PREPARATION and leave task definitions/IDs/order/checks intact. Preserve human edits, decision provenance and unresolved stops; reconcile conflicts instead of blindly replacing either file. Remove an item from the source only after its substantive content has been retained at the new owner. Git retains prior layout/history. Unknown historical approval remains unknown; migration neither invents compliance nor mandates retrospective approval replay.

Perform this reconciliation in the next appropriate owning commit, or a bounded migration commit before dependent preparation if no such commit exists. Publish any prior pending owned commit first. A migration commit does not close/reopen a DOCS task, recreate initialization or increment the pass. Define and source-walk interrupted migration recovery using the two files and Git; do not add an automated arbitrary-Markdown migration parser. This campaign changes plugin guidance/assets only, not any external demo's documents or hosted objects.

The docs-main parser in `projection-input.mjs` reads the nine exact ordered checkbox IDs/names and ignores non-task prose. Preserve that grammar, titles and default DOCS_TASKS path; do not make DOCS_PREPARATION a new CLI input or a prerequisite for pre-write projection. No schema, authentication, transport or retry change is planned. The JSON asset remains the standard hosted-content owner, not the preparation-state store.

Update affected `DOCS_TRACKING_TEMPLATE.json` briefs/sources to locate initialization and decision evidence in the new record and preserve task completion atomicity. Names, IDs, dependency graph, milestone identity and markers stay stable. Changed fixed text may conflict with already projected issues or saved requests: document regeneration of stale requests and explicit backend reconciliation of uniquely owned standard brief fields, preserving issue numbers, comments, state, associations and unrelated content. Unknown/custom content must be resolved rather than overwritten; unchanged objects need no write. The optional projection utility must continue reporting conflicts, without silent repair or duplicate creation. No live hosted migration is authorized here.

## Ordered revision actions

### A-001 — Implement the separation across the owning workflow

Make one coherent source revision covering:

- The task-only template, new preparation template, aligned fixed JSON task briefs and main preparation's definition, lifecycle, adoption and recovery.
- Mode/pass control, human-review content boundary and acceptance evidence, document QC handoffs, continuity, branch/preparation integration and Git gates. Replace ambiguous DOCS_TASKS/preparation-evidence ownership with the explicit pair; preserve all mode and approval behavior.
- PLUGIN/coordinator and direct document-owner/orientation/verification/reporting entries where they assign evidence ownership. Keep task-only references that remain correct; do not mechanically expand every mention or reproduce the full procedure at each caller.
- Forge's main-preparation and input/projection guides, including issue completion/reset evidence and fixed-content compatibility. Preserve the existing optional utility's safety/eligibility behavior.
- Packaged README artifact/template inventory and preparation/continuity explanations; current capability/development-contract summaries where affected. Root README gets only a genuinely necessary audience-level change. Do not change demos, release notes/version, external policies or closed campaign packages.
- Required package inventory in `.github/scripts/release.py`, corresponding publisher fixtures/exact-and-missing-resource coverage, and the existing support package pin/transfer tests for the new asset. Add focused parser/projection regression coverage only where the new task-only asset and separated metadata expose a meaningful contract: unchanged nine-task grammar, bootstrap without a target preparation record, normal resumed projection and preserved conflict behavior. Do not add tests that merely search for prose sentences.

Assess remaining live references after edits and inspect both sides of each changed handoff. A source/package discrepancy within this objective is repair scope; unrelated runtime redesign or new hosting migration features require a separate decision. Do not create a target DOCS_PREPARATION in this self-development repository merely because its template is being authored: campaign records remain this repository's active work owner.

### A-002 — Verify the complete revision and record its result

Recheck the scenarios below and run the selected existing suites. Repair in-scope defects and repeat only affected checks. Record actual checks, evidence limits and A-001 disposition in REVISION-REPORT; refresh HANDOFF at completed revision finalization and update active navigation. Publish/read back each owned source/evidence commit before further work. Stop with the campaign open on its branch unless the human separately selects closure/integration.

## Verification and evidence limits

| Scenario | Required result / evidence |
| --- | --- |
| Fresh preparation, tracking enabled/disabled; none/all/mixed root-file presence | Two separate local owners are created only after applicable pre-write gates; DOCS-001 evidence/checkbox/HANDOFF atomicity and mixed stop retained. Source walkthrough. |
| Interactive and preapproved completion; unchanged approved document | Task file has only task content; preparation record owns actual decision and exact accepted-state/QC identity in the same completion commit. Source walkthrough. |
| Onepass, human-controlled multipass and autoloop | Mode, sequence, delegation and material decision evidence survive interruption in the new owner; future scope stays out of product documents; later PROJECT waiver and DOCS-008 stop/reset rules unchanged. Source walkthrough. |
| Reset interrupted before publication or during hosted reopening | Same reset/pass/issues resume; task checks, preparation evidence and HANDOFF agree; historical approval does not certify the new pass. Source walkthrough. |
| Legacy mixed list, existing preparation record, incomplete/conflicting evidence | Content and human instructions preserved; no invented approval, changed task identities, new pass or duplicate registry. Source walkthrough of migration/recovery. |
| Projection bootstrap, resume and old fixed content | New template parses as the same nine tasks; projection needs no target preparation record before writes; stale definitions/requests remain explicit conflicts and owned reconciliation preserves identities. Existing synthetic/local contracts plus source review; no live mutations. |
| Package QC/integration and continuity | DOCS_PREPARATION participates in readiness and eligible documentation integration; HANDOFF links it without per-document duplication. Pending external effects are not recorded as future successes. Source walkthrough. |
| Composition and artifact boundary | Task file has no non-task sections. New record is concise and substantive; generic workflow detail stays with its canonical owner. All live routes agree, prior closed packages unchanged. |

Run `node --test tests/forge-project.test.mjs` for the changed projection assets/contract, the publisher suite (`python -m unittest discover -s .github/tests -v`) with its declared dependency, and the support suite (`python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v`). Update relevant source-only package fixtures under their contributor instructions; no live TextStats trial or assessor-contract rewrite is required by this change. Report actual counts and skips rather than reusing prior totals as fresh evidence.

Check current Markdown links/anchors, all affected entry/reference routes, whitespace and full-delta ownership, excluding closed records from content validation. Build from the exact committed candidate, verify every packaged member against Git (including the new template), required-resource failure, exclusions and the existing five extracted CLI help paths. Package size/count may change naturally; no version bump or release is selected. Repeat affected merged-state checks only if integration is subsequently authorized.

Source walkthroughs and synthetic/local tests do not establish independent consuming-agent behavior, live-provider acceptance or native Windows execution. No browser, native-host trial or hosting write is necessary to prepare or execute this focused revision. Report any concrete blocker and preserve the earliest unmet operation.

## Planning persistence and stopping boundary

Publish/read back this plan before source execution. Preserve the campaign's original identity/baseline, the opening publication and all prior closed records. Planning changes only the active plan/report/navigation; the existing entry HANDOFF points to this owner, so no routine planning-time handoff rewrite is required. After verified publication, stop with campaign 102 open awaiting execution direction. Do not execute A-001/A-002 or merge/close the campaign from this planning request.

## Execution checkpoint

The human subsequently authorizes execution. A-001 is implemented with [observed source/test evidence](REVISION-REPORT.md#execution-authorization-and-a-001); package verification and A-002's completed revision checkpoint remain pending. The earlier planning-only stopping statement records its original request boundary. Keep the campaign open after verified execution publication; closure/integration is not selected.

## Executed result

A-001 and A-002 are complete with [final verification evidence](REVISION-REPORT.md#a-002--verified-execution-boundary). Source `a314b0fe4b9d278272f6da5b18c218b391fd4fa1` is published/readback verified with confirmed cleanup. All 236 distinct selected tests pass, as do current links/routes, scoped preservation and the exact 155-file package/five extracted CLI help checks. Publish/read back this completed revision checkpoint after exact final-package verification, then leave campaign 102 open. No integration, closure or release is selected.

## Authorized closure

The human's subsequent “Close” selects finalization and explicit main integration/publication. Both actions are complete with no remaining in-scope findings. Executed checkpoint `acec175153bff3602ae8801305ee32c84fef2af5` and its exact package are verified and published/readback confirmed. Finalize records, publish/read back the campaign tip, explicitly merge into refreshed main, verify the merged state, publish/read back main and return cleanly. Closure takes effect only after that boundary; Git/tool evidence records the actual commit and publication. No version bump, release, plugin installation or external-project migration is selected.
