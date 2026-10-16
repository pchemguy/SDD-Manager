# Campaign 069 revision plan

## Campaign and decisions

- Campaign: `069_1d3dd41`; branch: `revision/069_1d3dd41-comprehensive-review`; eventual target: `main`.
- Reviewed baseline: `1d3dd41c29c4534fc84490b78b534017ef0af4a8`; revision starts from `880e4d490efe3302c8b2b8e72275a1b7aa5f9960`.
- Inputs: [review findings](REVIEW-REPORT.md), [source inventory](SOURCE-INVENTORY.md); results: [revision report](REVISION-REPORT.md).
- User authority: prepare the revision plan and execute it. Both supported findings, R-001 and R-002, are Accepted. No finding is deferred or rejected.
- Scope: the eight affected instruction/assessment files listed below and active campaign records/index. Keep the campaign open and unmerged. No live acceptance, hosted tracking/release, history rewrite or unrelated source changes.

## Intended behavior and owners

Verification returns failures/evidence to the active workflow's coordinator or authorized artifact owner. Preparation corrections stay with document owners within existing authoring scope; implementation and checkpoint-amendment repair stay with their execution owners. Verification itself gains no repair/completion authority. New consequential decisions, out-of-scope corrections and governing amendments raised by sdd-docs keep their human decision boundary.

New PROJECT, PLAN and layout checkpoints may be cleared by actual human acceptance or explicit applicable future-checkpoint preapproval. Preapproval retains its scope, conditions and revocation; it does not waive presentation, QC, Git publication, tracking, unresolved decisions or implementation range limits. TextStats' feature assessor must apply that same rule.

No PROJECT/SPEC/PLAN/layout/TASKS changes govern this source maintenance. The campaign plan supplies the accepted correction scope; no executable task IDs are invented. PLUGIN/README/capability projections already route to these owners and state the canonical obligations, so no projection or contract expansion is needed. Preserve templates, AGENTS files, discovery behavior, presentation metadata and frozen campaigns.

## Ordered actions

| Action | Finding | Targets / outcome | Dependency | Objective recheck |
| --- | --- | --- | --- | --- |
| V-001 | R-001 | `sdd-manage/references/coordination.md`; `sdd-verify/SKILL.md`; `sdd-verify/references/failure-assessment.md` and `execution-and-evidence.md`: route repair/evidence by active workflow and distinguish preparation from task recovery. | Published plan | Trace authorized routine preparation QC, a new requirement decision, implementation repair, sdd-docs upstream referral and standalone verification; check caller and verifier together. |
| V-002 | R-002 | `sdd-design/references/project-brief.md`; `sdd-plan/references/review.md`; `acceptance/textstats/cases/assessor/A-008.md` and `A-008.json`: qualify local checkpoint reminders and align independent feature criteria. | Published V-001 | Trace uncovered, preapproved, conditional/unrelated and revoked PROJECT/PLAN/layout/feature checkpoints. Keep PLAN before layout, distinct checkpoints and technical/publication gates. Guide and JSON criterion must agree. |
| V-003 | R-001, R-002 | Recheck composition, source contrasts, catalog, package/schema/snapshots, relevant support/publisher regression suites, Markdown links/style and exact scope preservation; consolidate results/dispositions. | Published V-002 | Record exact source/runtime, observed outcomes and limits. Each finding is verified only at the evidence level actually obtained; source checks do not prove model behavior. |

Skill paths in the table are package-relative under `.agents/plugins/sdd-manager/skills/`; acceptance paths are repository-relative. All referenced files already exist; no new skill, reference module, runtime registry or test scaffold is planned.

## Execution and persistence

V-001 interface inspection also found the same unqualified implementation-ownership sentence in the verifier entry footer. Include its one-sentence ownership correction with the detailed references so the entry cannot reintroduce R-001. This changes no module boundary, capability or projection.

Commit/push/read back this plan before source revision. For each action, inspect only its accepted changes and consequential interfaces, update the revision report, commit source and evidence together, then push/read back before further work or another commit. Preserve original review observations; append actual revision dispositions rather than replacing baseline findings. An unavailable publication blocks progression with work retained.

Use existing nonempty support/publisher suites and native package checks; add no tests that merely assert the replacement wording. Source scenarios check routing, authority and checkpoint consistency; live consumers and provider/client trials remain out of scope. Reuse unchanged authoritative context and existing verification where applicable, identifying it as prior evidence.

## Stop

Publish the execution report, finding dispositions and verification evidence on the campaign branch. Leave 069 open and unmerged for human review; do not start closure or another campaign.

## V-004 — Focused human-checkpoint wording

User feedback requests the actual existing checkpoint points. Replace the overloaded final section of sdd-plan/references/review.md with two direct points: published PLAN before dependent layout; published layout before TASKS. Keep acceptance/preapproval with the linked shared procedure. No new workflow or checkpoint is introduced. Check source agreement, local links/spacing and the exact diff; retain prior suite/package results as prior-source evidence rather than rerunning unrelated tests. Keep the campaign open/unmerged.

## V-005 — Related wording review

The user requested review for similar overcomplicated wording elsewhere. Review related checkpoint, preparation-QC and handoff passages against their existing owners; record concrete located recommendations without additional source repairs. Preserve previous source corrections and keep 069 open/unmerged. See [focused text review](FOCUSED-TEXT-REVIEW.md).

## V-006 — Apply the wording corrections

Implement R-003–R-005 from the [focused review](FOCUSED-TEXT-REVIEW.md) following the user's correction that these remained unapplied. Starting source: `951499c518ba3e79f4a9a98e47914b707512c246`.

1. R-003: remove the duplicate PLAN QC paragraph from human-document-review; state actual technical checks in document-qc-gates; simplify DOCS-006/007 actions in DOCS_TASKS_TEMPLATE. Preserve distinct approvals and report/publication requirements.
2. R-004: replace the copied opening checkpoint paragraphs in design/specify/plan/tasks entries with their concrete artifact-to-next-stage checkpoints, applicable preapproval and the common procedure link. Preserve direct calls, necessary feature proposals, existing-input reuse and requested interactive review.
3. R-005: separate coordination step 5's ordinary repair handoff from named conditional cases, retaining the task-recovery and sdd-docs referral owners.
4. Compare against the original obligations and direct-call/feature/existing/preapproval/recovery contrasts. Run source/link/style/author checks, the existing support suite and native package/schema/snapshot checks; report actual evidence limits and publish. No new wording-mirroring tests, capabilities or model trials.

These eight source targets and active campaign records/index are the full amendment scope. The already simplified sdd-plan review section stays unchanged. Keep 069 open/unmerged.
