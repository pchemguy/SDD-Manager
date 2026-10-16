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
