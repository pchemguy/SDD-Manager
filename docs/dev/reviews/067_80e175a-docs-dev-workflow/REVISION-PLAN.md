# Main documentation preparation tracking

## Campaign and authority

- Campaign: `067_80e175a`.
- Starting baseline: `80e175adb3b7a797fedea85e9f69046bfe05298d`.
- Planning source: `ca177e27418be46fbda054888a8a0653badf5e51`.
- Branch: `revision/067_80e175a-docs-dev-workflow`; eventual integration target: `main`.
- Companion: [revision report](REVISION-REPORT.md).
- State: Accepted by “Execute campaign revisions”; V-001–V-006 implemented and locally verified. Final campaign integration/publication is recorded by Git.

## Objective and boundaries

Extend main documentation preparation for greenfield projects and resumed incomplete main preparation. When backend tracking is enabled for this workflow, establish and verify preparation issues and their milestone before modifying the target repository. Keep the existing document sequence, technical QC, human acceptance and commit/push gates.

The requested initialization behavior is fixed below. The additional requested behavior includes a predefined documentation task list, atomic acceptance checkpoints, a final package QC task, merge-before-milestone closure and scoped future-checkpoint preapproval. Detailed template content and naming remain proposals for approval with this plan. Feature preparation, checkpoint steering and implementation task hierarchy are outside this extension; preserve their existing behavior. Planning this extension does not authorize applying it to a target project or running live acceptance.

## Proposed tracking model

Use the native milestone `docs-main`, representing main documentation preparation. Do not number it Phase 0, add it to product PLAN phases, allocate implementation task IDs or require product TASKS before preparation begins. Use the separate predefined `docs/dev/DOCS_TASKS.md` as the preparation task owner. On GitHub it is a milestone object, not a label. A backend without milestones may use its explicitly defined equivalent.

Create or reconcile these nine issues, all associated with `docs-main`:

| Preparation unit | Scope | Completion evidence |
| --- | --- | --- |
| Repository initialization | Preserve or copy the four root files below and report the initial state | Verified file outcomes, published commit when files were added, initialization report and verified issue closure |
| PROJECT | Project brief and necessary focused children | Applicable QC, published reviewable state and human acceptance |
| ARCHITECTURE | Architecture and necessary focused children | Applicable QC, published reviewable state and human acceptance |
| DECOMPOSITION | Component decomposition and necessary focused children | Applicable QC, published reviewable state and human acceptance |
| SPEC | Behavior and acceptance contracts | Required QC, published reviewable state and human acceptance |
| PLAN | Delivery strategy and milestones | Strategy-scoped QC, published reviewable state and human acceptance |
| layout | Physical repository layout | Layout and combined PLAN/layout QC, published reviewable state and separate human acceptance |
| TASKS | Executable task hierarchy | Required QC, published reviewable state and human acceptance |
| Documentation package QC | Cross-document consistency, readiness and complete preparation evidence | Verified package QC result and published final task completion before documentation-branch integration |

Define stable machine-readable preparation markers scoped to this repository and main preparation, independent of issue numbers and mutable titles. Reuse matching open or closed objects; ambiguous or duplicate matches require resolution rather than another object. Do not reuse implementation `T-*` markers. Project each predefined documentation task to exactly one corresponding issue. `DOCS_TASKS.md` owns local preparation completion; issues project those tasks. Store purpose, dependencies and completion criteria in issue bodies without introducing another status registry.

Close `docs-main` only after all nine tasks and issues are complete, the documentation branch is explicitly merged into the actual default branch, and the merged result is verified, pushed and read back. Then present the final preparation checkpoint before implementation. Neither completed docs nor milestone closure selects an implementation range.

## Documentation task owner and acceptance commits

Add packaged `assets/DOCS_TASKS_TEMPLATE.md` as the predefined source for target `docs/dev/DOCS_TASKS.md`. Use nine stable preparation IDs, proposed as `DOCS-001` through `DOCS-009`, matching the initialization, seven documents and final package QC units above. Each task states its artifact, dependencies, completion criteria and corresponding issue identity when tracking is enabled. This list exists independently of implementation TASKS and remains useful when tracking is disabled.

Create or reconcile the local list only after the enabled backend pre-write gate. Include its creation and initialization completion in the initialization commit, including when all four root setup files already exist. Do not overwrite a resumed list or recreate checked tasks. No empty commit is required when both the list and initialization evidence are already complete.

Mark a document task complete after its initial human acceptance, including an applicable explicit preapproval. The same commit that submits the accepted document state must contain that task's task marked complete in `DOCS_TASKS.md` and identify the accepted artifact state and decision. Do not defer the checkbox to a later bookkeeping commit. Publish and verify that commit before closing/readback of the corresponding issue or dependent authoring.

An initial proposal may already have been committed and published for review with its task unchecked. In that case the acceptance commit retains the exact accepted document blob, records acceptance and checks its task; it need not rewrite unchanged document bytes. A draft commit, QC result or issue closure alone cannot mark initial human acceptance. Document tasks and their issues track development through first approval. Later revisions leave these tasks complete and issues closed; assess the revised documents through their applicable review and QC procedures. First approval does not freeze the document or assert its permanent readiness.

On resume, reconcile documents, task checkboxes, acceptance evidence, commits/publication and issue states. Recover pending operations in order; do not assume an existing artifact is accepted or repeat completed work. Retained accepted documents may be recognized from current readiness and available decisions under existing continuation rules, with the evidence basis reported rather than an invented past approval.

## Final package QC and preparation completion

The final task and corresponding issue are the documentation package QC gate. Assess the whole set: PROJECT, ARCHITECTURE, DECOMPOSITION, SPEC, PLAN, layout, TASKS and relevant children/QC reports, plus initialization/orientation and documentation-task evidence. Check cross-document scope, contracts, dependencies, physical allocation, task derivation, unresolved blockers, acceptance decisions and publication. Per-document QC does not replace this gate. Retain a concise package QC report alongside the preparation documents; its final filename will be defined during implementation.

1. Complete all preceding documentation tasks and verified issue closures. Perform package QC, resolve in-scope blockers through the owning documents and recheck affected acceptance/readiness.
2. Commit the package QC report and final checked task together, push and read back; then close/read back the final QC issue. A failed gate remains open.
3. Explicitly merge the complete verified documentation branch into the actual default branch under the existing integration procedure. Verify the merged state, commit the merge, push and read back. A failed or uncertain integration keeps preparation incomplete even if all issues are closed.
4. Close and read back `docs-main` only after published integration is verified. With tracking disabled, retain the same local completion/integration order without hosted closure.
5. Confirm the final preparation checkpoint in chat: package/QC result, merge/publication, milestone state and the next implementation decision. Pause unless an explicit applicable preapproval already covers this checkpoint and an implementation range is authorized. Do not activate implementation objects or start task execution merely because document preparation finished.

This extends preparation-only completion to include the documentation merge. Revise the current rule that preparation-only stops on its documentation branch for this main workflow; preserve the user's explicit local-only, no-merge or other narrower boundary and report the corresponding incomplete transitions.

## Future-checkpoint preapproval

The user may explicitly preapprove any future human checkpoint at any point, individually or as a clearly scoped set. Preserve the actual scope, conditions and decision in existing workflow evidence, including after interruption. Generic repository-operation authority or a broad development request is not checkpoint preapproval.

When a covered checkpoint is reached, still perform its authoring, QC, evidence, commit/push and tracking obligations and report the result; proceed without another acceptance pause if the preapproval remains applicable. Preapproval does not waive technical failures, unresolved consequential decisions, publication/tracking gates or expand the implementation range. Explicit revocation or scope changes govern subsequent work. Apply this rule consistently to document acceptance, the mixed-initialization continuation decision and the final preimplementation checkpoint, rather than leaving contradictory unconditional pause instructions elsewhere.

## Entry and pre-write gate

1. Perform read-only orientation: establish repository, instructions, pending ownership, existing files/documents, retained human decisions and requested stopping boundary. Recover an incomplete main preparation campaign rather than starting another one.
2. Establish whether tracking covers preparation. An explicit request for tracking throughout development covers this stage; preserve a prior explicit narrower scope or decline. Do not silently broaden a recorded implementation-only selection.
3. For enabled preparation tracking, create/reconcile and read back `docs-main`, all nine issues and their associations before target-repository writes, branch/ref creation, staging or commits. Authentication or local helper setup must not mutate the target repository ahead of this gate. Unavailable or uncertain projection blocks repository modifications unless the human explicitly authorizes an exception.
4. With tracking disabled, apply the same initialization/file-preservation and human checkpoint behavior without hosted objects. Existing read-only requests remain read-only.

## Initialization contract

Introduce packaged `assets/AGENTS_TEMPLATE.md` and copy it unchanged to target-root `AGENTS.md` when absent. Copy the existing packaged `assets/AI_DISCLOSURE.md` and `assets/SDD-MANAGER.md` to their same-named target-root files when absent. Add `assets/SKILL_DISCOVERY_PROTOCOL.md` from the campaign draft and copy it unchanged to target-root `SKILL_DISCOVERY_PROTOCOL.md` when absent. Preserve any existing target copy under the same initialization rule.

Before copying anything, inspect all four destination paths and record the complete presence classification. Read applicable existing instructions. Preserve every existing file unchanged during this initialization unit; do not reconcile it with a template merely because contents differ. Resolve unsafe path types, ownership conflicts or incompatible controlling instructions before affected writes; an occupied symlink or directory is not permission to overwrite or follow it.

| Initial presence among the four files | File action | Report and continuation |
| --- | --- | --- |
| None present | Copy all four | Report initialization and continue without a new approval pause |
| All present | Preserve all four; create/update the documentation task list only as needed | Report reuse and continue without a new approval pause |
| Some but not all present | Preserve existing files and copy only missing files | Warn with exact retained/copied filenames, finish initialization persistence and issue closure, then end the turn before document work |

When files were copied, verify their bytes and staged ownership, commit the initialization result, push and verify remote containment. Close/read back the initialization issue with the actual retained/copied outcomes and commit evidence; if all files already existed, use inspected-state evidence and publish any necessary task-list creation/completion, without inventing changes to those files. Report repository initialization separately from completion of main preparation.

The mixed-state pause is a decision about proceeding, not permission to copy the missing files: those copies are already part of the requested initialization. No PROJECT or other dependent authoring occurs before the human chooses to continue. A later explicit continuation clears that pause; do not repeatedly stop merely because the completed initialization now has all four files. On interruption recover pending copies, publication, issue closure and any unsatisfied pause from actual evidence rather than reclassifying only the final filesystem state.

README notice links remain an existing discoverability obligation, but are outside this four-file classification and must not be added before the mixed-state pause. Specify their later eligible preparation checkpoint when revising bootstrap instructions.

## Template drafts

Campaign drafts: [AGENTS_TEMPLATE.md](AGENTS_TEMPLATE.md) and [DOCS_TASKS_TEMPLATE.md](DOCS_TASKS_TEMPLATE.md). The supplied [SKILL_DISCOVERY_PROTOCOL.md](SKILL_DISCOVERY_PROTOCOL.md) is also retained here for packaging under assets. None of these campaign drafts is installed or applied to a target project.

## Initial AGENTS template

Keep the template useful before project documents exist: direct agents to establish current repository/instruction/workflow context, find applicable SDD Manager instructions, preserve existing work and obey human checkpoints and publication boundaries. Do not embed installation paths, credentials, invented commands, nonexistent document links, task/status snapshots or duplicate the discovery protocol. Include a dedicated Initialization section directing agents to execute root `SKILL_DISCOVERY_PROTOCOL.md`. Detailed procedures remain owned by the installed skills.

The copy is an initial template, not a completed project-specific orientation document. Later authorized maintenance may add verified project navigation and commands. Existing AGENTS.md is preserved at initialization; any necessary later changes require their own established scope and cannot bypass the mixed-state stop.

## Ordered revision actions

| Action | Owners and affected material | Intended outcome and recheck |
| --- | --- | --- |
| V-001 | `sdd-manage`: bootstrap, human-document review, tracking selection and preparation routing | Define the early tracking gate, initialization unit, presence matrix and recovery. Remove contradictory combined-first-result requirements for this main preparation path; preserve non-main adoption rules. Trace fresh and resumed entry to the same procedure. |
| V-002 | `sdd-forge` and shared backend lifecycle | Define nine-task preparation identity, object creation/readback and issue closure from DOCS_TASKS, plus milestone closure after verified published integration, without requiring product PLAN/TASKS or phase activation. Distinguish preparation milestone semantics from implementation review milestones; preserve implementation lifecycle gates. |
| V-003 | Package assets and agent orientation | Add initial AGENTS and predefined DOCS_TASKS templates plus the supplied discovery protocol asset and reconcile copy-versus-later-maintenance ownership. Verify no overwrite of existing files, byte copies and truthful initial guidance. |
| V-004 | Document owners and coordinator handoffs | Define atomic document acceptance/task commits and subsequent issue closure, final package QC, preparation-only integration and the preimplementation checkpoint. Honor scoped future preapprovals across affected human-review instructions. Reconcile resumed accepted artifacts from evidence, preserve pending reviews, and keep first-approval tasks complete and their issues closed during later revisions. No automatic replay or acceptance based on presence alone. |
| V-005 | PLUGIN, full README, capability map and affected source documentation | Expose preparation tracking and the initialization pause concisely, with canonical procedures linked. Load the plugin contract before entry edits; avoid duplicating the complete procedure across entries. |
| V-006 | Package verification and TextStats acceptance coverage | Include the template in package/snapshot contracts as needed; add preparation scenarios to the component's acceptance coverage. Run appropriate static, package, support and publisher checks; retain live behavior as unrun unless separately authorized. |

Execute actions only after plan acceptance. Publish and read back each action commit before proceeding; keep campaign evidence with its action. Close/integrate only after authorized execution, verification and final publication.

## Verification scenarios

- Fresh repository: all tracking objects/associations verified before the first repository write; four files copied; initialization published/closed; no extra human pause.
- All four files present: root bytes unchanged; create/publish DOCS_TASKS if absent, otherwise reuse valid completion without an empty commit; close the issue with actual evidence and continue.
- Every partial-presence combination: preserve existing bytes, copy missing files, publish/close initialization, name both groups and stop before document work.
- Tracking disabled: same file matrix and stops; no hosted calls or objects.
- Backend partial creation, outage or unknown write: reconcile exact identities; no duplicate objects or repository writes past an unmet gate.
- Interrupted initialization before/after copy, commit, push or issue closure: recover remaining operations and preserve a pending mixed-state decision.
- Resumed incomplete documentation: reuse accepted valid artifacts, reconcile their issues and continue at the next eligible stage; preserve pending human reviews and readiness blockers.
- Document published but not accepted: issue remains open; PLAN acceptance does not accept layout; TASKS acceptance does not authorize implementation.
- Existing conflicting instructions or occupied non-file paths: preserve contents and report the actual blocker.
- Document acceptance: task marked complete and accepted document state share one commit; verify both review-then-accept and preapproved paths; issue closure follows push/readback.
- Later document revisions: preserve completed first-approval tasks and closed issues while checking current document readiness separately.
- Final package QC: missing or failing cross-document evidence leaves the final task/issue open; passing per-document checks alone cannot clear it.
- Merge or milestone closure failure: preserve completed tasks/issues, retain the outstanding transition and do not start implementation.
- Future preapproval: honor individual, set-wide, conditional and revoked approvals; preserve QC/publication/tracking gates and implementation-range limits.
- Preparation-only: perform the authorized main documentation merge and milestone closure, then report/hold the final implementation boundary unless already covered by explicit preapproval and execution scope.
- Discovery protocol: copied unchanged from assets when absent; existing content preserved; AGENTS template has a dedicated Initialization link to its target-root path.
- New package templates: present in native package and snapshots, source-only files still excluded, documentation links resolve.
- Non-main adoption and implementation tracking: existing first-result/bootstrap and phase/task semantics remain intact outside the selected main-preparation extension.

Deterministic support checks establish tooling behavior; source walkthroughs establish instruction coverage. Neither establishes live agent compliance. Adding acceptance scenarios extends the acceptance component; executing live consumer trials is a separate operation.

## Reopened amendment — GitHub tracking default

- Reopening source/target checkpoint and qualifying prior merge: `1a0bab5421409d6c11454242a5c85e803dfe5eb2`, published on main, parents `80e175adb3b7a797fedea85e9f69046bfe05298d` and `1cb2b9a01c64ef7146c2cd51bbc5b1a964d99306`.
- Human authority: reopen the campaign and adapt/integrate default GitHub tracking into AGENTS, clarifying documentation and implementation, with user override and a README note.
- Original identity, baseline and opening remain unchanged. Working branch remains `revision/067_80e175a-docs-dev-workflow`; target remains `main`.
- State: V-007 implemented and verified; amendment closes at verified explicit main integration/publication recorded by Git. Earlier execution and closure evidence above remains historical.

### V-007 — Default tracking and separate lifecycle reminders

Revise the campaign and packaged AGENTS template with an explicit GitHub default for documentation and implementation, subject to user/project overrides. Separate main documentation projection/closure from eligible implementation phase activation. Each names its required objects, readback gate, failure stop and ongoing maintenance. Preserve native milestones, first-approval task semantics and final docs merge-before-milestone closure.

Align coordinator tracking selection, main entry and entry/README summaries so a newly adopted default applies before DOCS-001, rather than after its copied AGENTS is first loaded. Respect existing decisions/project policy and unsupported hosting without guessing another destination or silently choosing local-only. Other workflows without an adopted/default/requested tracking policy retain optional selection.

Extend TextStats assessor scenarios for default selection and explicit opt-out/narrower scope; verify template parity, links, source handoffs, package contents and relevant support/publisher regressions. Live consumer/provider acceptance remains unrun. Publish each checkpoint, explicitly remerge the completed amendment, verify/publish main and close the campaign again without resuming unrelated work.

## V-008 — Correct the amendment scope

The user rejected the plugin-wide changes and directed correction. Reopened at published amendment merge `adcb264abecf3219dcc8e2997cb0d05676174005`, the latest first-parent merge on main, with verified parents and source containment. Retain campaign identity, original opening/baseline and prior evidence.

Restore PLUGIN, coordinator/backend policy, capability-map and acceptance-assessment files changed by V-007 to their pre-amendment `1a0bab5421409d6c11454242a5c85e803dfe5eb2` bytes. Retain the requested campaign/packaged AGENTS template and a README note describing that template policy; remove the README claim that the plugin applies the default before copying AGENTS. Keep the default as a project instruction, not a plugin-wide selection rule. Verify exact restoration, template parity, current links/catalog/package and scoped diff, then publish/integrate the correction. No runtime behavior change or live acceptance is claimed.

## V-009 — Restore all package changes from the tracking amendment

Reopened by explicit user direction at published correction checkpoint `e8d8124835f2ff9d115e4c466333600a80e54766`. Undo every package/source change introduced by the tracking-default amendment, including its packaged AGENTS template and README changes. Retain the proposed AGENTS text only as this campaign's draft. The accepted original V-001–V-006 implementation at `1a0bab5421409d6c11454242a5c85e803dfe5eb2` remains the package baseline.

Publish the complete rollback checkpoint to main and verify exact package/source equality to that baseline outside this campaign and its navigation. Keep campaign 067 open for human review; this rollback is not approval to package drafts, revise plugin policy or close the campaign.

## Final authorized closure

The user subsequently restored the packaged AGENTS instructions, requested the editable-policy README note, and required both original shared tracking/recovery paragraphs to remain. These accepted changes were published as b87dab0, 5dfafa0, 9d6fdcc and 597a9a2. The user now explicitly requests campaign closure, followed by a new comprehensive review campaign. No plugin-wide default change is part of this final accepted amendment. Close at verified publication of the complete final tip into main.
