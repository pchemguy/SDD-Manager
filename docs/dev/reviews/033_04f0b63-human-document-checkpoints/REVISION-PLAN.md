# Mandatory human document review — proposed revision plan

## Campaign and decisions

- Campaign: `033_04f0b63-human-document-checkpoints`.
- Starting/reviewed baseline: `04f0b63ed923ff97860a3205cf369b3421d41665`, version **0.15.0**.
- Working branch: `revision/033_04f0b63-human-document-checkpoints`; eventual integration target: `main`.
- Review: [REVIEW-REPORT.md](REVIEW-REPORT.md), committed and remotely verified as `f2f127c82f35760de5e08c601bde0bb89e2f6623` before this plan.
- Human-defined direction: mandatory **human review checkpoints** after creation of each PROJECT, ARCHITECTURE, DECOMPOSITION, SPEC, PLAN, layout and TASKS.
- Findings R-001–R-003 are proposed repair inputs. No finding is marked corrected or verified.
- State: Proposed; campaign opened and baseline review complete. Source revision execution has not started. Detailed continuation/material-change rules below are proposed policy, distinct from the user's confirmed seven-checkpoint requirement.

## Intended checkpoint contract

1. Complete the selected document/root and relevant children, perform applicable owner QC, and persist the reviewable result through authorized Git operations.
2. Present that specific document scope to the human with links, a concise decision summary, assumptions/open questions, applicable QC result/limits, and the exact dependent operation being held.
3. Pause for the human's review decision. Passing agent QC, a Ready report, a commit/push, or general authorization to develop the project does not supply that decision.
4. Record the actual decision and its document/version/scope in existing preparation, handoff or campaign evidence. A request to revise returns to the current owner and holds the dependent stage. Silence or unresolved review discussion leaves acceptance pending.
5. Continue only after acceptance of the presented scope and within the previously authorized work. An explicit acceptance-and-proceed response can clear the presented checkpoint and authorize its stated next step; it cannot preaccept documents that have not been presented.

| Created document | Presenting owner | Dependent progression held |
| --- | --- | --- |
| PROJECT | sdd-design | ARCHITECTURE or other work relying on the created brief. |
| ARCHITECTURE | sdd-design | DECOMPOSITION or other work relying on the created architecture. |
| DECOMPOSITION | sdd-design | SPEC or other work relying on the created component model. |
| SPEC | sdd-specify | PLAN and dependent work relying on the created behavioral contracts. |
| PLAN | sdd-plan | Subsequent dependent layout/TASKS work relying on the created strategy. |
| layout | sdd-plan | TASKS and other work relying on the created physical ownership. |
| TASKS | sdd-tasks | Implementation and hosted task projection using the created list. |

Preserve the existing dependency order, with SPEC before PLAN. PLAN and layout receive distinct checkpoints during combined preparation. Present a root's relevant children together. Use already accepted, unchanged sufficient inputs without replaying creation or fabricating missing stages. Apply equivalent checkpoints to applicable created feature roots while retaining optional feature-document scope and existing main inputs.

Repository-operation authority remains usable for the authorized commit/push at a checkpoint. The human review concerns document acceptance; it does not add repeated permission questions for the same authorized repository operations. An explicit human change to checkpoint scope is retained as such; generic project authorization is not an implicit waiver.

Proposed revision/resumption rule: material edits that alter accepted decisions or dependent guarantees invalidate acceptance for their affected scope; present that changed scope for renewed human review before dependent use. Preserve unaffected accepted scope and routine status/evidence updates. After interruption, inspect actual document/Git identities and the last human decision, finish any pending authorized persistence, and resume at the pending checkpoint. Store this in existing evidence rather than a new journal or registry.

## Ordered revisions

| Action | Findings | Intended outcome and affected owners | Dependencies / objective recheck |
| --- | --- | --- | --- |
| V-001 | R-001, R-003 | Define one canonical mandatory human-review protocol through sdd-manage; connect preparation scheduling and accepted-input handoffs. Include seven root boundaries, presentation, decision scope, pending state and continuation. Retain current agent QC gates. | First action. Source walkthrough must hold every next dependent operation without a human decision. Canonical policy placement is resolved before duplicating owner text. |
| V-002 | R-001, R-003 | Wire sdd-design PROJECT/ARCHITECTURE/DECOMPOSITION, sdd-specify SPEC, sdd-plan PLAN/layout and sdd-tasks TASKS authoring/direct calls to the canonical protocol. Reconcile shared readiness/reporting and orientation observation where affected. | V-001. Check direct and coordinated calls, combined PLAN/layout requests, existing accepted inputs and applicable feature deltas. Preserve selected-stage and read-only limits. Resolve QC scope at the PLAN checkpoint without authoring the future layout before human review; complete affected combined QC at the subsequent layout boundary. |
| V-003 | R-002, R-003 | Reconcile manager workflow/coordination language, examples, README preparation flow and the greenfield prompt with the distinction between operation authority and document acceptance. | V-001–V-002. Broad “develop the project” or “prepare through TASKS” authorization must still pause per created root; accepted result persistence must not ask for duplicate operation permission. |
| V-004 | R-001–R-003 | Recheck all affected current sources and explicit positive/negative control paths. Record actual changes, outcomes, remaining decisions and evidence limits in the active campaign revision report. Finish eligible verified integration/publication only after execution is authorized and complete. | V-001–V-003. Verify the scenarios below, changed links and package inclusion as applicable; run the repository-required support suite for the coherent plugin source integration. Support tests remain distinct from live agent/client acceptance. |

No project TASKS owner exists in this repository; V-001–V-004 are campaign action IDs, not invented executable task IDs. Existing closed packages stay frozen. Retain source version **0.15.0** as requested; this plan adds no product release or version bump.

## Planned acceptance scenarios

| Scenario | Required result after revision |
| --- | --- |
| Combined initial preparation request | Seven human boundaries occur; the next dependent root/use remains pending at each one. |
| Direct creation request for any named root | Same human-review contract; no unrequested downstream creation/execution. |
| PLAN and layout requested together | Review PLAN before continuing to dependent layout, and review layout before TASKS; no single deferred end-of-bundle checkpoint. |
| Agent QC Ready and broad execution authorization | Human review still pending for the newly created root. |
| Human accepts the presented document and asks to continue | That scope clears; only the authorized next operation proceeds. |
| Silence, comments without acceptance, or request for revision | Pending state retained; dependent work held and requested revisions routed to the current owner. |
| Accepted current inputs reused or optional feature stages absent | No repeated acceptance ceremony or invented document stage. |
| Material accepted-document change | Affected acceptance/dependents rechecked; unchanged unrelated scope retained. |
| Interrupted awaiting-human workflow | Actual document/decision state reused; no invented acceptance or duplicate generation. |
| Git/token authorization already established | Ordinary checkpoint persistence uses it; no duplicate repository-operation approval. |

These are planned checks, not executed acceptance results. Source-level review can establish articulation; runtime or installed-client acceptance needs separate observed evidence within its authorized scope.

## Current persistence and stopping point

The review report and this proposed plan are retained on the campaign revision branch with navigation in the current campaign index. Opening/assessment does not merge an unfinished campaign into main. Source-policy changes, support tests, product packaging and live acceptance have not been executed. The campaign remains open for subsequent revision execution; no REVISION-REPORT is fabricated before revisions begin.
