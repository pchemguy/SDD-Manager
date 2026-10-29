# Feature preparation record

Load when opening or resuming feature preparation, recording feature decisions/acceptance, or handing off its preparation package. **sdd-manage** coordinates this procedure; **sdd-design** owns the [feature brief](../../sdd-design/references/feature-brief.md). It does not select implementation, main-only doc-design modes or hosted preparation tasks.

## Required pair and separate owners

For a new feature campaign, create `docs/dev/FEATURE.md` and its required lightweight `docs/dev/FEATURE_PREPARATION.md` companion together at the first brief-draft checkpoint, after establishing the authorized design-docs branch/package and existing prerequisites. A campaign opening may establish identity and explore the seed before that checkpoint. Preserve occupied active sources; never overwrite another feature's pair. Follow [workflow identity](../../sdd-conventions/references/workflow-identity.md) for association and disposition.

| Artifact | Responsibility |
| --- | --- |
| FEATURE.md | Product intent, scoped change/non-goals, compatibility/constraints and material product questions; sdd-design owns content. |
| FEATURE_PREPARATION.md | Request and decision provenance, actual acceptance/QC evidence and current preparation boundary; sdd-manage owns control/evidence, with focused owners supplying their results. |
| HANDOFF.md | Existing durable workflow checkpoint and links to these owners; no per-decision or per-commit rewrite. |
| FEATURE-TASKS and adjacent QC reports | Executable feature work and their established document assessments; the companion links them rather than copying checkboxes/findings. |

FEATURE_PREPARATION is workflow evidence, so product-document content restrictions do not prohibit its explicit preparation/approval state. Do not incorporate that state into FEATURE or main product documents. This pair adds no mandatory main DOCS_TASKS issues, feature documentation task hierarchy or separate approval for the record.

## Minimum useful content

Keep one current record, using sections or tables suited to the campaign. Retain enough evidence to distinguish:

- **Identity:** Campaign/full baseline, working/target branches, active source paths and intended archive package; use this record rather than an additional preparation navigation artifact.
- **Request:** Original feature request or a durable exact reference, its scope and subsequent human amendments. Preserve supplied requirements separately from agent interpretations.
- **Decisions:** Consequential proposals, assumptions, confirmed choices, explicitly delegated choices and unresolved questions. Record source/basis and concise rationale; retain superseded/rejected decisions through clear references or Git rather than presenting them as current requirements. Safe implementation detail does not need a decision entry.
- **Acceptance and QC:** Selected documents, exact reviewed/presented commit/blob/content identities, actual pending/accepted/revise decisions or scoped preapproval, conditions/revocations and relevant QC/report references. A saved status or source file alone proves neither acceptance nor readiness.
- **Current preparation boundary:** Current stage, active authoritative sources, material blockers/deferred questions and next human checkpoint or authorized handoff/stop. Keep executable progress with the task owner and publication state with actual Git/provider readback.

No fixed table, schema, decision-ID sequence or mandatory per-turn journal is required. Reference existing adjacent QC and hosted evidence rather than duplicate it. Preserve the actual original seed even when the feature is refined; do not misattribute agent-proposed details to the human.

## Checkpoints and persistence

Publish the draft pair before presenting the new FEATURE checkpoint. Unless explicitly preapproved, hold dependent feature architecture/decomposition/specification until brief acceptance. Reuse the ordinary [human review](human-document-review.md) presentation and exact-state decision rules for each subsequent necessary feature document. Record human acceptance and affected document/preparation evidence coherently before dependent use, then publish/read back every owned commit. Explicit feature-scoped preapproval/delegation is supported; broad repository or implementation authority does not supply it.

Update this existing record when consequential scope/decisions, approval basis, readiness or the preparation boundary changes. Do not create parallel ledgers or routine HANDOFF updates. Retain actual QC failures and dependencies; preapproval does not clear them. Main preparation's autodoc/autoloop preapproval, DOCS cursor/reset rules, nine tasks and projection are main-only and do not activate for features merely because these records have analogous roles.

At completed preparation, record actual document acceptance/readiness, unresolved deliberately deferred matters and the selected next boundary. The coordinator refreshes HANDOFF and performs the existing verified/published preparation integration before dependent implementation branching. Implementation authority remains a separate scope decision. During implementation, task completion and reports remain with their owners; update preparation evidence only for relevant changed inputs/decisions.

## Continuation and disposition

On continuation, recover the pair's exact current state, decisions, pending acceptance and publication from FEATURE_PREPARATION and Git. Reuse accepted documents and established decisions rather than replaying completed steps; preserve actual pending review or consequential blockers. Narrow later-stage work consumes the accepted pair and other sufficient inputs without restarting preparation. Simple corrections and checkpoint steering retain their own workflows. Explicit path restrictions prevail: report missing required write scope rather than silently place a competing record elsewhere.

Before final feature completion, **sdd-integrate-feature** incorporates accepted product intent into the selected main owners and archives eligible active sources. Retain FEATURE_PREPARATION beside the archived FEATURE and other feature evidence; do not merge its workflow narrative into PROJECT/SPEC. Partial incorporation leaves still-needed sources/evidence active. Withdrawn features preserve decision/evidence disposition without implying completed implementation. Closed packages remain frozen.
