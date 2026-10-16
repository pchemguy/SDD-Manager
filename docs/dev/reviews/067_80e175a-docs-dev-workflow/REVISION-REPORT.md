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
