# Documentation development workflow revision

## Campaign

- Identity: `067_80e175a`.
- Starting baseline: `80e175adb3b7a797fedea85e9f69046bfe05298d`.
- Working branch: `revision/067_80e175a-docs-dev-workflow`.
- Integration target: `main`.
- Objective: revise the documentation development workflow.
- State: V-001–V-006 complete and source/package verified; campaign closes at verified explicit main integration/publication. Git retains the actual final merge and publication identity.

## Scope and authority

The user requested a new revision campaign for the documentation development workflow. This opening establishes its identity, branch and retained record. The subsequent request authorizes planning earlier artifact tracking and a three-file initialization checkpoint for fresh or resumed main preparation.

The opening made no workflow source changes. The [revision plan](REVISION-PLAN.md) now records the requested initialization behavior, proposed preparation lifecycle, affected owners and verification scenarios. Source implementation and campaign integration remain pending plan acceptance.

## Opening evidence

- The working tree was clean on `main`; local HEAD matched the published `origin/main` baseline.
- Repository campaign paths and remote branch names identify `066` as the highest allocated sequence; `067` is newly allocated.
- Changes are limited to this opening record and the review/revision index.
- Publication of the opening commit is verified through remote branch readback; its actual identity is retained in Git.

## Planning checkpoint

Inspected current bootstrap, agent orientation, document-review checkpoints, tracking selection, phase activation and hosted lifecycle routing. Current bootstrap combines setup with the first result and may reconcile existing files; current hosted preparation stops short of object creation until PLAN/TASKS-driven activation. The proposal separates main preparation tracking and initialization while preserving implementation and non-main adoption behavior. No target-project operations or live acceptance were performed.

## Task-list and completion amendment

The user additionally requested predefined DOCS_TASKS, task/issue progression, initial acceptance recorded atomically with document submission, final package QC as the last task/issue, documentation merge before milestone closure, a final preimplementation checkpoint and future-checkpoint preapproval. The plan incorporates these requirements and supersedes its earlier eight-issue, no-local-list and milestone-before-integration proposals. Implementation remains pending.

## Template draft checkpoint

Created [DOCS_TASKS_TEMPLATE.md](DOCS_TASKS_TEMPLATE.md) and [AGENTS_TEMPLATE.md](AGENTS_TEMPLATE.md) in this campaign for review. The task template defines nine preparation units, atomic acceptance completion, issue progression, package QC and integration/milestone ordering. The initial agent template supplies concise workflow, document, human checkpoint, publication and tracking instructions. Normalized the proposed asset names in the plan. Package assets and operational skills remain unchanged.

## First-approval tracking clarification

Clarified both drafts and the plan: document tasks/issues track development through first approval. Mark the task complete in the commit submitting the approved document, publish and verify, then close the issue. Later revisions leave that task complete and its issue closed; current document readiness remains subject to applicable review and QC. Removed the proposed reopening behavior and the unclear “initial checkbox transition” wording.

## Discovery protocol asset amendment

Pulled published campaign commit `54930ba`, which adds the supplied SKILL_DISCOVERY_PROTOCOL.md draft. Updated the plan and DOCS-001 draft to include it as a fourth root initialization file, copied unchanged from the future assets location when absent and preserved when present. The partial-presence pause now covers any mixed state among the four files. Added a dedicated Initialization link to the AGENTS template. The supplied protocol remains unchanged in the campaign; package deployment is still pending.

## User template revision review

Pulled `57551e6` and reviewed the updated AGENTS template. The [focused review report](REVIEW-REPORT.md) proposes four improvements to terminology, coordinator loading, section ownership and project-specific maintenance placement. The user’s draft is preserved unchanged; revisions await selection.

## Accepted AGENTS draft improvements

The user authorized updating the AGENTS draft. Applied and source-rechecked all four focused review findings, retaining checkpoint, first-approval, publication and tracking emphasis. Only the campaign draft and its review evidence changed; the repository’s controlling AGENTS.md and packaged source remain unchanged.

## V-001 — Main preparation coordination

Implemented the main-preparation module and direct coordinator routing, early preparation tracking selection, four-file initialization/preservation/partial-state stop, first-approval completion, package QC and merge/milestone/final-checkpoint ordering. Bootstrap and agent-orientation instructions now distinguish this main-only path from other adoption. Added shared future-checkpoint preapproval and removed the contradictory downstream-preacceptance prohibition. Source inspection and whitespace checks passed; asset/backend links and coupled verification finish in V-002–V-006.

## V-002 — Hosted preparation lifecycle

Implemented a separate routed GitHub preparation module with exact milestone/task/scope markers, all-nine projection/readback before repository writes, first-approval issue closure, idempotent/uncertain-write recovery and merge-before-milestone closure. Existing implementation projection/issue/milestone procedures explicitly route DOCS work to that owner. Shared lifecycle distinguishes preparation from phase activation. Inspected the fresh, partial/unknown projection, first-approval and final-merge handoffs; whitespace checks passed. No hosted target-project operation was performed.

## Publication recovery and V-003 — Packaged templates

The V-002 push and read-only GitHub checks returned HTTP 502. A later exact-ref readback recovered at V-001, then the retained `2101ec7` commit was pushed normally and read back before further work. Added all three campaign drafts under package assets byte-for-byte, including the user-edited AGENTS template and supplied discovery protocol. Linked the task/agent/discovery assets from the main procedure; target repository files were not copied or modified. Verified asset/draft byte identity and whitespace. Source root discovery and development AGENTS remain unchanged.

## V-004 — Owner and integration handoffs

Aligned direct document-owner entry with the main pre-write/first-approval lifecycle and explicit future preapproval. Main preparation-only now includes package QC, verified published documentation integration and milestone closure before the final implementation checkpoint; explicit narrower stops remain controlling. Updated orientation, documentation, verification/reporting owners, workflow routing and six source scenarios. Checked that DOCS completion is not delegated to the implementation T-task audit and later revisions retain first-approval completion. Source/whitespace rechecks passed; full coupled checks follow V-006.

## V-005 — Entry and human documentation

Updated PLUGIN highlights, full README including preparation diagram/assets, capability map and plugin contract. Canonical procedures remain in coordinator/backend modules; entries now expose pre-write preparation tracking, four-file initialization pause, first-approval scope, final QC/merge/milestone ordering and scoped future preapproval. Removed the full README’s superseded first-commit/merge-only-if-implementation framing. The abbreviated root README already points to the full documentation and needs no duplicated procedure. Whitespace and source walkthrough checks passed; package/link/support verification follows.

## V-006 — Acceptance coverage and verification

Extended A-001 assessment with a dedicated main-preparation scenario module, including all 16 four-file presence combinations, first approval/later revisions, explicit preapproval, fresh/resumed/unknown effects, final package QC and merge-before-milestone closure. Updated setup/checkpoint assessment to preserve main bootstrap timing and distinguish DOCS completion from product implementation. These are acceptance component extensions; no live trial or 16-case pass is claimed.

Publisher inventory now requires all three preparation assets. A new publisher regression checks their exact ZIP bytes, assets-only placement and rejection of each missing asset. A support regression checks exact committed snapshots versus changed dirty template bytes. Corrected the new DOCS-001 anchor found during link checks.

- Python 3.12.14: 137 support tests passed.
- Publisher: initial run could not import jsonschema; installed the declared jsonschema 4.26.0 dependency into a temporary tooling path, then all 34 publisher tests passed.
- Catalog: all 33 case assets/contracts validate; live acceptance false.
- Current Markdown plus active campaign: 211 documents, 1,043 local links; heading separation, consecutive blank lines, package containment and local anchors passed. Closed campaign contents excluded.
- Agent Package Author plugin validation/inventory: zero errors, 46 bundle cross-skill warnings; client loading/runtime is not verified.
- Campaign draft assets and package asset bytes match. Full campaign diff changes no prior closed campaign contents.

Exact committed package and final merged-state checks follow this action checkpoint. Native consumer, controlled/live provider, installed-client discovery and actual human interaction acceptance are not run.

## Coupled source recheck

A final handoff read found the commit composer’s generic closing-composition paragraph could still send DOCS tasks to the implementation audit. Restricted that paragraph and the forge hierarchy rule explicitly to implementation, and linked DOCS completion to its separate main procedure. This removes an instruction ambiguity without changing executable tooling. Markdown/link and author validation are rechecked on the final candidate.

## Final verification and integration boundary

Verified committed source `61a64e1efb61cd68807eb3c15e3bb307d7855bee` using Python 3.12.14 and the pinned offline manifest schema/jsonschema 4.26.0. Native archive bytes match committed TextStats snapshot bytes for all 137 package files; dirty/committed package snapshots agree. All 15 skill entries route their 77 reference modules. The three shipped assets match the campaign drafts, remain assets-only and do not include source development/acceptance records. Native package SHA-256 for that exact source: `f35653dd04d1191b24d1c768c4f2c05c03daf6d10642ab0f36e4cb2310f4f2ad`. Later report-only commits/merge carry their own archive metadata identity; this digest is not reused as their artifact hash.

| Action | Published source checkpoint | Result |
| --- | --- | --- |
| V-001 | `705a4ca` | Coordinator/main preparation, initialization, preapproval and bootstrap ownership |
| V-002 | `2101ec7` | Separate hosted preparation creation/readback and completion lifecycle |
| V-003 | `a0f8a18` | Exact AGENTS, DOCS_TASKS and discovery assets |
| V-004 | `70d04d5` | Direct owner, acceptance commit and final integration handoffs |
| V-005 | `b7f2b43` | PLUGIN, full README/diagram, capability map and contract |
| V-006 | `3f9c621` | Acceptance scenarios and native package/snapshot regressions |
| Coupled correction | `61a64e1` | DOCS completion separated from implementation history audit |

All checkpoints above were pushed and read back before subsequent work. The temporary V-002 HTTP 502 publication blocker was recovered without rewriting history. The full branch difference modifies no earlier closed campaign contents; the root development AGENTS and root discovery protocol are unchanged.

### Source scenario assessment

| Concern | Inspected owners and result |
| --- | --- |
| Pre-write tracking and missing PLAN/TASKS | Coordinator main preparation and GitHub preparation module explicitly verify nine template-derived issues/native milestone before target writes; implementation activation remains separate. |
| None/all/partial four-file presence and recovery | Main procedure and task asset preserve/copy by original classification; all partial subsets share the same stop; original evidence survives copies/push/closure and interruption. |
| First approval, later revision and resume | Owner entries, approval procedure and issue lifecycle keep completed first-approval tasks/issues closed while checking current document/package validity separately. |
| Preapproval and explicit limits | Human review, entries and templates retain scoped future preapproval and revocation, QC/publication/tracking requirements and execution-range boundaries. |
| Atomic approval task commit and publication | Coordinator owns the accepted-document/checked-DOCS result, allows unchanged approved blobs and requires push/readback before issue closure or dependent work. |
| Final QC and integration/closure | DOCS-009 passes whole-package review; final issue closes after publication; explicit verified/published docs merge precedes native milestone closure and final implementation checkpoint. |
| Other workflows and source/package separation | Implementation/feature/revision adoption retain their own gates; new main rules are explicitly scoped and no implementation task IDs are fabricated. |

These are source walkthroughs, not consumer executions. Relevant tooling suites passed (137 support, 34 publisher), all 33 catalog contracts validate, current/active links and spacing pass, and author validation/inventory reports zero errors/46 cross-skill warnings. No live consumer, provider, installed-client or end-to-end interaction run was performed. No confirmed source finding remains open from this execution; the focused AGENTS findings were already verified in the accepted draft.

Final target is the refreshed `main`. The integration owner explicitly merges the complete campaign tip, checks merged package identity/links/closed-record preservation, commits the two-parent result and publishes/readbacks main. The merge message records the original opening `ca177e27418be46fbda054888a8a0653badf5e51`, baseline `80e175adb3b7a797fedea85e9f69046bfe05298d`, actual parent tips and merged checks. Closure follows that publication, without a later unintegrated report edit.

## Reopening — Tracking default amendment

Original campaign closed at the published two-parent main merge `1a0bab5421409d6c11454242a5c85e803dfe5eb2`. Verified current main/remote equality, latest first-parent merge, both parent identities and original campaign-tip containment. The human explicitly reopened for default GitHub tracking in the AGENTS template, split documentation/implementation obligations and corresponding README guidance. Fast-forwarded the retained campaign branch to that target checkpoint, preserving all original provenance. V-007 is accepted and pending; no source changes are included in this reopening checkpoint. Target remains main; other closed records stay frozen.

## V-007 — GitHub default and separate tracking gates

Updated both campaign and packaged AGENTS templates: GitHub tracking is enabled by default for documentation preparation and implementation, with an explicit user-changeable mode and separate documentation/implementation subsections. The docs rule names native docs-main and all nine issues before repository writes, first-approval closure and merge-before-milestone completion. Implementation names phase activation, labels, all milestone/task objects including reviews, readback and ongoing lifecycle maintenance. Missing tracking prerequisites report a blocker and stop affected work; access failure does not silently disable tracking.

Aligned coordinator selection/main startup, phase handoff, backend lifecycle/projection, PLUGIN, full README and capability map. Fresh main preparation applies the bundled default before copying AGENTS, while explicit choices and existing controlling project policy take precedence. Other workflows without a default/choice retain optional selection. No unsupported provider is advertised or alternate repository guessed. Source development AGENTS.md is unchanged.

Extended independent A-001 assessment with default, disabled/local-only/narrower-policy, interruption/token-supply and non-GitHub mismatch scenarios. Source walkthroughs confirm the default is selected before the docs gate, an established opt-out wins and survives recovery, implementation waits for readback, and docs retain their separate merge/closure order. No live consumer/provider execution is claimed.

Python 3.12.14: 137 support tests and 34 publisher tests pass; all 33 catalog cases validate. Current/active Markdown checks pass across 211 documents and 1,045 local links; author inventory reports zero errors and 46 cross-skill warnings. Template/draft parity is preserved. Exact committed package verification follows this action checkpoint.

## Amendment final boundary

Verified exact source `e23734ea283c1c83d4ec441e71d8b55424964806`: native package and committed/dirty TextStats snapshots agree for all 137 files; all three assets match campaign drafts; 15 entries route all 77 modules; source-only artifacts stay excluded. Package SHA-256 at this source is `58110c3fb8ba76ae53fe8328d1a8224154fcdd95980ecace3951b90db2603a60`. Prior closed packages remain unchanged; only the explicitly reopened campaign records are maintained. V-007 was pushed and read back before this final evidence checkpoint.

Reclose by explicitly merging the complete amended campaign tip into refreshed main from reopening checkpoint `1a0bab5421409d6c11454242a5c85e803dfe5eb2`, verifying the merged tree/package and current documentation, then publishing and reading back main. Carry the original opening/baseline and cumulative V-001–V-007 outcomes in the amendment merge message. No subsequent unintegrated report edit is needed. Live acceptance remains unrun; source/support/package success is not live workflow proof.

## V-008 — Scope correction

The user identified that the AGENTS/optional-README request did not authorize changing PLUGIN or plugin-wide tracking selection. The V-007 expansion was incorrect. Reopened from its verified published merge `adcb264abecf3219dcc8e2997cb0d05676174005`; the prior amendment's result remains historical, not the intended current policy.

Restored all ten V-007 policy/capability/assessment files outside AGENTS and README exactly to pre-amendment `1a0bab5421409d6c11454242a5c85e803dfe5eb2`. This includes PLUGIN, coordinator entry/selection/startup/phase activation, backend lifecycle/projection, capability map and the two acceptance-assessment files. Retained campaign/packaged AGENTS tracking instructions and the README template-default note; removed its unsupported plugin-wide pre-copy default claim. Root source-development AGENTS remains untouched.

Verified exact restored bytes and template/draft equality. Current links/spacing, catalog and package validation are checked for this correction; no executable tooling changed, so prior support-suite outcomes are retained as historical evidence rather than claimed as a new run. Final correction integration/publication is recorded by Git; other closed campaign records remain unchanged.

## V-009 — Full tracking-amendment rollback; campaign open

The user explicitly required undoing every change to SDD Manager files associated with the AGENTS amendment and reopening this campaign. Reopened from verified published correction merge `e8d8124835f2ff9d115e4c466333600a80e54766`, preserving the original identity/opening and all earlier evidence. The preceding partial scope correction retained two package changes and therefore did not meet this clarified boundary.

Restored packaged README and AGENTS_TEMPLATE to their exact pre-amendment `1a0bab5421409d6c11454242a5c85e803dfe5eb2` bytes. Combined with the prior policy rollback, the entire package and all non-campaign source now match that baseline. The proposed GitHub-default AGENTS text exists only in this campaign draft. No new plugin policy, template deployment, acceptance revision or root AGENTS edit is authorized here.

State: **Open**. Publish and verify this rollback on main, then return to the reopened campaign branch. The campaign remains open for human review; no further draft execution or closure is included. Current source/link checks and exact Git tree comparison verify the rollback; this does not rerun or claim live acceptance.

## Final accepted AGENTS amendment and closure

After V-009, the user explicitly requested restoring the packaged AGENTS tracking instructions (b87dab0), adding the README note including editing AGENTS.md as a way to change project policy (5dfafa0), and restoring both shared tracking and recovery paragraphs verbatim in draft/package (9d6fdcc, 597a9a2). Those commits were each pushed and read back. Their scope is the AGENTS template/draft and README only; PLUGIN, canonical tracking-selection policy and all other non-campaign source remain at the original accepted 1a0bab5 baseline.

The current request authorizes closing campaign 067. Exact committed source `597a9a2c970fc42b8d81abbd11287a141a8f3259` passes native/schema package and TextStats snapshot parity for all 137 files, 15 skills and 77 routed modules; the three assets match campaign drafts. Current/active local link, anchor and spacing checks pass. No executable tooling changed in these final edits; earlier support/publisher outcomes are retained with their original source rather than claimed as a fresh runtime run. Live acceptance is unrun.

Final target is refreshed main `9fb0f6bcb16eeba5359b6b97c589987c63d95727`. Explicitly integrate the complete final campaign tip, verify the prospective tree/approved scope, publish and read back main. This closes the campaign; the merge records actual parent/source identities and cumulative retained scope, superseding the earlier open stopping boundary. The next comprehensive review receives a new identity and does not edit this closed package.
