# Focused review of checkpoint and handoff wording

## Scope and result

- Campaign: `069_1d3dd41`; reviewed source: `d5735a6d042f1e50a2aeddf94c46d46292bce1a7`.
- Request: check elsewhere for wording like the overloaded PLAN/layout checkpoint paragraph. This follow-up reviews composition and instruction clarity, not a new comprehensive functional audit.
- Reviewed passages: PLUGIN's checkpoint section; design/specify/plan/tasks entries; PROJECT brief and planning references; coordinator human-review, document-QC, main-preparation and execution handoffs; shared development-document QC; DOCS_TASKS_TEMPLATE. Current surrounding owner context was inspected/reused. No closed contents or live acceptance.
- The three editorial recommendations below were subsequently applied and verified under V-006. The review stage made no source edits; execution and current evidence are recorded at the end of this report.

The issue is presenting a straightforward action or already-defined checkpoint through repeated procedural qualifications and abstract status language. Retain conditions that change the actual next action. Keep human acceptance, technical QC, publication and hosted effects distinct; brevity does not justify removing their obligations.

## R-003 — PLAN/layout bookkeeping is repeated in three other places

**Priority:** Medium editorial/composition recommendation. **Status:** Verified by source/local checks; live behavior unrun. High source confidence; no model failure claimed.

Locations:

- `sdd-manage/references/human-document-review.md`, QC, operation authority and continuation: PLAN-specific paragraph beginning “At the PLAN checkpoint”.
- `sdd-manage/references/document-qc-gates.md`, final paragraph under Human acceptance alongside QC.
- `assets/DOCS_TASKS_TEMPLATE.md`, DOCS-006 and DOCS-007 QC/acceptance substeps.

The first two repeat the same PLAN → layout → TASKS sequence already specified by the human-checkpoint table, skill entry and main-preparation tasks. They mix the timing of human decisions with technical review-report bookkeeping, using phrases such as “strategy-scoped QC”, “pending layout/TASKS readiness” and “the distinct layout checkpoint is cleared on the same basis”. The template imports those abstractions into an otherwise concrete task list. The valid distinction is simple: review PLAN's delivery strategy; review layout when it exists; retain both required human checkpoints before their dependent work.

Proposed revision:

1. Remove the PLAN-specific technical-QC paragraph from human-document-review; its table and common procedure already define the human points.
2. In document-qc-gates, state the actual checks: assess PLAN against SPEC; assess layout against design and PLAN when layout is prepared; include the layout assessment in the PLAN review report before TASKS. Leave human decision mechanics with their owner.
3. Give DOCS-006 and DOCS-007 direct QC/approval actions, consistent with their named artifacts and the template's existing completion/publication rules. Remove the repeated negative warning about PLAN approval not being layout approval.

Recheck new versus existing layout, PLAN-only and PLAN-plus-layout preapproval, separate first approvals, current QC evidence and report persistence. No checkpoint, report requirement or preapproval condition should be added or lost.

## R-004 — Four document entries repeat generic checkpoint boilerplate

**Priority:** Low editorial recommendation. **Status:** Verified by source/local checks; live behavior unrun. High source confidence.

Location: the opening human-review paragraph in `sdd-design/SKILL.md`, `sdd-specify/SKILL.md`, `sdd-plan/SKILL.md` and `sdd-tasks/SKILL.md`.

All four use the same long paragraph about newly created necessary documents, substantive review, dependent progression, explicit applicable preapproval, existing inputs, requested interactive review and the limits of QC/Git authority. The design and plan versions additionally repeat “including” in their first sentence. The reminders have a valid role at entry; copying the whole shared policy makes each entry harder to scan without making its own handoff more concrete.

Proposed revision: retain a short artifact-specific checkpoint instruction with its actual next dependent stage, the preapproval alternative and the shared-policy link. Keep the entry's consequential obligations visible; let the shared owner explain existing-input/recovery and decision details. Remove the duplicate “including” clauses. This is a proposal to improve the reminders, not delete all repetition or hide approval rules in references.

Recheck direct skill entry, necessary feature deltas, acceptable existing inputs, requested interactive review, uncovered and preapproved checkpoints. A concise entry must still expose the relevant stop without loading unrelated skills.

## R-005 — Coordination's verification step combines five separate concerns

**Priority:** Low composition recommendation. **Status:** Verified by source/local checks; live behavior unrun. High source confidence.

Location: `sdd-manage/references/coordination.md`, Coordinate execution, step 5, including the recent R-001 correction.

One item now combines ordinary repair routing, preparation versus implementation ownership, invalid task-completion recovery, reuse of existing range/publication authority, standalone verification and sdd-docs upstream referral. The functional distinctions are supported; the dense paragraph obscures which condition selects which instruction. The accepted R-001 correction improved ownership but did not improve this composition sufficiently.

Proposed revision: state the ordinary active-owner handoff first, then separate the named special cases into concise conditional bullets and links: invalid implementation completion → task recovery; standalone verification → findings only; sdd-docs upstream amendment → human referral. Preserve authority/publication/history distinctions through the existing recovery owner rather than expanding them again in the generic step. Do not recreate a second recovery protocol.

Recheck all five R-001 source contrasts and the direct verifier entry. The change must retain preparation ownership, actual recovery authority and review-only limits.

## Useful repetition and coverage limits

No similar revision is proposed for PLUGIN's explicit artifact/checkpoint table, the main-preparation task/output/owner table, the ordinary first-approval commit/push/issue sequence or the shared QC review matrix. Those name concrete actions, artifacts and boundaries. Their justified visibility at handoffs differs from repeating a dense technical subprocedure.

This was focused source/composition review, not a universal style pass over every plugin file. No defect is inferred merely from paragraph length, a repeated safety condition or use of a technical term. Source/Markdown checks cannot establish agent compliance. No new behavioral tests or live acceptance were run; prior suite results retain their original source identity.

## Original revision handoff

Address R-003 first, then compact the entry reminders and the generic verification handoff under R-004/R-005. Preserve the published two-point sdd-plan section. These are proposed changes; this follow-up stops at its report with campaign 069 open and unmerged.

## Execution and current dispositions

All three recommendations were applied in `135fec465a4c14109a0d77b0b0b14961ffafdfe2` after published plan `4263676099ddcaae84c454af7aa27fd35f91185d`. Original observations/proposals above are retained as the reviewed-source record.

| Finding | Applied correction | Current status |
| --- | --- | --- |
| R-003 | Removed the duplicate human-review paragraph; stated actual QC checks and direct DOCS task actions. | Verified: source/local checks |
| R-004 | Replaced the four generic entry paragraphs with concrete document/stage checkpoints and their applicable shared-policy conditions. | Verified: source/local checks |
| R-005 | Separated ordinary verification routing from three named conditional handoff cases. | Verified: source/local checks |

[Wording verification](WORDING-VERIFICATION.json): 137 support tests and 34 publisher tests passed; all 33 catalog cases validated; native package/core schema/snapshot and local Markdown checks passed. Author validation has zero errors and 46 unchanged cross-skill advisories. The tests validate infrastructure and package boundaries; the wording itself received manual source/contract review. Live model/provider/client acceptance remains unrun. No source correction remains pending from this focused review; campaign 069 stays open and unmerged.
