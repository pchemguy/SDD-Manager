# Campaign 069 revision execution

## Campaign and state

- Campaign: `069_1d3dd41`; [revision plan](REVISION-PLAN.md); [baseline review](REVIEW-REPORT.md).
- Reviewed baseline: `1d3dd41c29c4534fc84490b78b534017ef0af4a8`; revision starting source: `880e4d490efe3302c8b2b8e72275a1b7aa5f9960`.
- Branch: `revision/069_1d3dd41-comprehensive-review`; eventual target: `main`.
- State: Executing; V-001 and V-002 source corrections and focused rechecks complete. R-001 and R-002 are Revised pending final regression/package checks. Campaign stays open and unmerged.

## Action evidence

| Action | Findings | State | Evidence |
| --- | --- | --- | --- |
| V-001 | R-001 | Revised; source recheck passed | Four affected caller/verification files; detailed contrasts below. |
| V-002 | R-002 | Revised; source recheck passed | PROJECT/PLAN/layout reminders and matching feature-assessor criterion. |
| V-003 | Both | Planned | Final source/structural/regression verification and publication. |

## Limits

Live acceptance and actual provider/client/model behavior are out of scope. Baseline review observations remain unchanged; this report records the authorized corrections and actual subsequent checks. No merge or campaign closure is authorized by this execution boundary.

## V-001 — Active-owner repair and evidence routing

The plan was committed/published as `5854fc5cd6dc99bc5dbb0718b1c8436cf7ee43d8`, with exact origin branch readback before editing. Updated coordination's verification step, the verifier entry's matching ownership sentence, failure classification/handoff and evidence return. Preparation uses its coordinator/document owners; implementation and checkpoint amendments retain their execution owners. Task recovery is explicitly implementation-specific. Evidence can belong to the reviewed document as well as a TASKS/FEATURE-TASKS entry; no new task or journal is required.

The entry footer correction was added to the plan after its consequential interface inspection: leaving that unqualified implementation-only sentence would preserve the same finding despite fixing the references. No entry routing, module boundary, metadata or unrelated instructions changed.

| Source contrast | Observed current guidance |
| --- | --- |
| DOCS-009 finds an omission within authorized preparation | Coordination and verifier handoffs now agree with main-preparation/document-QC: coordinator routes correction to the owning document skill, then recheck. No nonexistent implementation owner is required. |
| Correction needs a new requirement or an out-of-scope change | Coordination step 4, document-QC step 4 and failure assessment retain the missing-decision/scope boundary; verification cannot rewrite governing inputs to pass. |
| Implementation/checkpoint-amendment failure or invalid task closure | sdd-implement/sdd-steer retain repair/completion; linked task recovery retains actual authority, publication and historical-exception distinctions. |
| sdd-docs review requires an upstream amendment | Coordination explicitly links the existing governing-amendment referral to the human; preparation authority does not override it. |
| Standalone verification | Coordination and verifier references return findings without starting repair; the verifier entry still leaves source/tests/documents/status unchanged. |

These are manual source/handoff consistency checks against the actual current owner procedures, not executed model trials. Checked both caller and verifier with main preparation, document QC and sdd-docs referral; retained approval/range, publication and hosting gates. Local Markdown/link/containment checks and git diff --check passed before persistence. Full regression/package verification follows V-002.

## V-002 — Applicable checkpoint preapproval

V-001 was committed/published as `4565dc8ed643313dca4dfef895bb60a5352de315`; exact origin branch readback preceded this action. PROJECT's detailed procedure now states its preapproval alternative. PLAN/layout review clears PLAN before dependent layout and retains a separate layout decision before TASKS; any layout preapproval must cover layout itself. Both still present substantive results and perform/publish their required QC. A-008's guide and JSON criterion now match A-001's explicit preapproval alternative and the shared checkpoint protocol.

| Source contrast | Observed current guidance |
| --- | --- |
| Newly created PROJECT with no preapproval | Present and pause before dependent use; clarification, QC and publication do not supply acceptance. |
| Explicit preapproval covers PROJECT | Presentation/publication/QC remain; the repeated acceptance pause is excluded for that covered checkpoint. |
| Preapproval covers PLAN only | PLAN may clear without another acceptance pause; layout remains a distinct checkpoint requiring acceptance or its own coverage before TASKS. |
| Explicit coverage includes PLAN and layout | Dependency order, separate presentations and strategy/combined QC remain without repeated covered pauses. |
| Conditional, unrelated or revoked preapproval | The unchanged canonical policy retains real scope/conditions/revocation; inapplicable coverage cannot clear either local checkpoint. |
| Feature preparation | A-008's guide and contract carry the same criterion as A-001 and reference the shared independent checkpoint assessment. Normal uncovered human gates remain required. |

Performed manual entry/reference/shared-policy comparisons for these contrasts. A direct JSON/text comparison confirmed A-008 guide/contract agreement with A-001 and unchanged deterministic checks. Static catalog validation passed all 33 cases; local Markdown/link/containment checks and git diff --check passed. No consumer/model interaction or preapproval trial was executed. No template, README, PLUGIN, discovery or controlling AGENTS change was needed.
