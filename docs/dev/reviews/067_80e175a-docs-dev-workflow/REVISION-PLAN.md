# Main documentation preparation tracking

## Campaign and authority

- Campaign: `067_80e175a`.
- Starting baseline: `80e175adb3b7a797fedea85e9f69046bfe05298d`.
- Planning source: `ca177e27418be46fbda054888a8a0653badf5e51`.
- Branch: `revision/067_80e175a-docs-dev-workflow`; eventual integration target: `main`.
- Companion: [revision report](REVISION-REPORT.md).
- State: Proposed; planning authorized, implementation and closure pending.

## Objective and boundaries

Extend main documentation preparation for greenfield projects and resumed incomplete main preparation. When backend tracking is enabled for this workflow, establish and verify preparation issues and their milestone before modifying the target repository. Keep the existing document sequence, technical QC, human acceptance and commit/push gates.

The requested initialization behavior is fixed below. Milestone naming, document-issue closure and template content are proposals for approval with this plan. Feature preparation, checkpoint steering and implementation task hierarchy are outside this extension; preserve their existing behavior. Planning this extension does not authorize applying it to a target project or running live acceptance.

## Proposed tracking model

Use the native milestone `docs-main`, representing main documentation preparation. Do not number it Phase 0, add it to product PLAN phases, allocate implementation task IDs or generate an administrative TASKS list before TASKS exists. On GitHub it is a milestone object, not a label. A backend without milestones may use its explicitly defined equivalent.

Create or reconcile these eight issues, all associated with `docs-main`:

| Preparation unit | Scope | Completion evidence |
| --- | --- | --- |
| Repository initialization | Preserve or copy the three root files below and report the initial state | Verified file outcomes, published commit when files were added, initialization report and verified issue closure |
| PROJECT | Project brief and necessary focused children | Applicable QC, published reviewable state and human acceptance |
| ARCHITECTURE | Architecture and necessary focused children | Applicable QC, published reviewable state and human acceptance |
| DECOMPOSITION | Component decomposition and necessary focused children | Applicable QC, published reviewable state and human acceptance |
| SPEC | Behavior and acceptance contracts | Required QC, published reviewable state and human acceptance |
| PLAN | Delivery strategy and milestones | Strategy-scoped QC, published reviewable state and human acceptance |
| layout | Physical repository layout | Layout and combined PLAN/layout QC, published reviewable state and separate human acceptance |
| TASKS | Executable task hierarchy | Required QC, published reviewable state and human acceptance |

Define stable machine-readable preparation markers scoped to this repository and main preparation, independent of issue numbers and mutable titles. Reuse matching open or closed objects; ambiguous or duplicate matches require resolution rather than another object. Do not reuse implementation `T-*` markers. Store purpose, dependencies and completion criteria in issue bodies; do not create a second local status registry.

Close `docs-main` after initialization and all required document issues meet their completion criteria and closures are verified. Preparation completion does not imply implementation authorization or default-branch integration; retain the existing preparation integration gate before implementation branching.

## Entry and pre-write gate

1. Perform read-only orientation: establish repository, instructions, pending ownership, existing files/documents, retained human decisions and requested stopping boundary. Recover an incomplete main preparation campaign rather than starting another one.
2. Establish whether tracking covers preparation. An explicit request for tracking throughout development covers this stage; preserve a prior explicit narrower scope or decline. Do not silently broaden a recorded implementation-only selection.
3. For enabled preparation tracking, create/reconcile and read back `docs-main`, all eight issues and their associations before target-repository writes, branch/ref creation, staging or commits. Authentication or local helper setup must not mutate the target repository ahead of this gate. Unavailable or uncertain projection blocks repository modifications unless the human explicitly authorizes an exception.
4. With tracking disabled, apply the same initialization/file-preservation and human checkpoint behavior without hosted objects. Existing read-only requests remain read-only.

## Initialization contract

Introduce packaged `assets/agents_template.md` and copy it unchanged to target-root `AGENTS.md` when absent. Copy the existing packaged `assets/AI_DISCLOSURE.md` and `assets/SDD-MANAGER.md` to their same-named target-root files when absent.

Before copying anything, inspect all three destination paths and record the complete presence classification. Read applicable existing instructions. Preserve every existing file unchanged during this initialization unit; do not reconcile it with a template merely because contents differ. Resolve unsafe path types, ownership conflicts or incompatible controlling instructions before affected writes; an occupied symlink or directory is not permission to overwrite or follow it.

| Initial presence among the three files | File action | Report and continuation |
| --- | --- | --- |
| None present | Copy all three | Report initialization and continue without a new approval pause |
| All present | Preserve all three; no artificial file change or empty commit | Report reuse and continue without a new approval pause |
| One or two present | Preserve existing files and copy only missing files | Warn with exact retained/copied filenames, finish initialization persistence and issue closure, then end the turn before document work |

When files were copied, verify their bytes and staged ownership, commit the initialization result, push and verify remote containment. Close/read back the initialization issue with the actual retained/copied outcomes and commit evidence; if all files already existed, use inspected-state evidence without inventing a commit. Report repository initialization separately from completion of main preparation.

The mixed-state pause is a decision about proceeding, not permission to copy the missing files: those copies are already part of the requested initialization. No PROJECT or other dependent authoring occurs before the human chooses to continue. A later explicit continuation clears that pause; do not repeatedly stop merely because the completed initialization now has all three files. On interruption recover pending copies, publication, issue closure and any unsatisfied pause from actual evidence rather than reclassifying only the final filesystem state.

README notice links remain an existing discoverability obligation, but are outside this three-file classification and must not be added before the mixed-state pause. Specify their later eligible preparation checkpoint when revising bootstrap instructions.

## Initial AGENTS template

Keep the template useful before project documents exist: direct agents to establish current repository/instruction/workflow context, find applicable SDD Manager instructions, preserve existing work and obey human checkpoints and publication boundaries. Do not embed installation paths, credentials, invented commands, nonexistent document links, task/status snapshots or another discovery protocol. Detailed procedures remain owned by the installed skills.

The copy is an initial template, not a completed project-specific orientation document. Later authorized maintenance may add verified project navigation and commands. Existing AGENTS.md is preserved at initialization; any necessary later changes require their own established scope and cannot bypass the mixed-state stop.

## Ordered revision actions

| Action | Owners and affected material | Intended outcome and recheck |
| --- | --- | --- |
| V-001 | `sdd-manage`: bootstrap, human-document review, tracking selection and preparation routing | Define the early tracking gate, initialization unit, presence matrix and recovery. Remove contradictory combined-first-result requirements for this main preparation path; preserve non-main adoption rules. Trace fresh and resumed entry to the same procedure. |
| V-002 | `sdd-forge` and shared backend lifecycle | Define preparation identity, object creation/readback and closure without requiring PLAN/TASKS or phase activation. Distinguish preparation milestone semantics from implementation review milestones; preserve implementation lifecycle gates. |
| V-003 | Package assets and agent orientation | Add the initial template and reconcile copy-versus-later-maintenance ownership. Verify no overwrite of existing files, byte copies and truthful initial guidance. |
| V-004 | Document owners and coordinator handoffs | Make each preparation issue follow its artifact's existing QC/publication/human checkpoint. Reconcile resumed accepted artifacts from evidence, preserve pending reviews, and update/reopen affected issues when accepted revisions invalidate completion. No automatic replay or acceptance based on presence alone. |
| V-005 | PLUGIN, full README, capability map and affected source documentation | Expose preparation tracking and the initialization pause concisely, with canonical procedures linked. Load the plugin contract before entry edits; avoid duplicating the complete procedure across entries. |
| V-006 | Package verification and TextStats acceptance coverage | Include the template in package/snapshot contracts as needed; add preparation scenarios to the component's acceptance coverage. Run appropriate static, package, support and publisher checks; retain live behavior as unrun unless separately authorized. |

Execute actions only after plan acceptance. Publish and read back each action commit before proceeding; keep campaign evidence with its action. Close/integrate only after authorized execution, verification and final publication.

## Verification scenarios

- Fresh repository: all tracking objects/associations verified before the first repository write; three files copied; initialization published/closed; no extra human pause.
- All three files present: bytes unchanged, no initialization commit fabricated, issue closed from actual inspected evidence, normal continuation.
- Every partial-presence combination: preserve existing bytes, copy missing files, publish/close initialization, name both groups and stop before document work.
- Tracking disabled: same file matrix and stops; no hosted calls or objects.
- Backend partial creation, outage or unknown write: reconcile exact identities; no duplicate objects or repository writes past an unmet gate.
- Interrupted initialization before/after copy, commit, push or issue closure: recover remaining operations and preserve a pending mixed-state decision.
- Resumed incomplete documentation: reuse accepted valid artifacts, reconcile their issues and continue at the next eligible stage; preserve pending human reviews and readiness blockers.
- Document published but not accepted: issue remains open; PLAN acceptance does not accept layout; TASKS acceptance does not authorize implementation.
- Existing conflicting instructions or occupied non-file paths: preserve contents and report the actual blocker.
- New package template: present in native package and snapshots, source-only files still excluded, documentation links resolve.
- Non-main adoption and implementation tracking: existing first-result/bootstrap and phase/task semantics remain intact outside the selected main-preparation extension.

Deterministic support checks establish tooling behavior; source walkthroughs establish instruction coverage. Neither establishes live agent compliance. Adding acceptance scenarios extends the acceptance component; executing live consumer trials is a separate operation.
