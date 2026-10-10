# Tracking-fidelity revision report

## Campaign and execution

- Campaign: `038_d6218f1`; [accepted plan](REVISION-PLAN.md), [baseline review](REVIEW-REPORT.md).
- Human execution instruction: “Execute campaign”, 2026-10-10.
- Working branch: `revision/038_d6218f1-tracking-fidelity`; target: suspended `revision/037_a6c42dd-prerelease-review`. Main is outside this integration boundary.
- State: V-001/V-002 source revision complete; V-003 pending. Behavioral fidelity is not certified.

## Action evidence

| Action / findings | Changes and verification | Disposition / publication |
| --- | --- | --- |
| V-001 / R-001 | Explicit request is first in the tracking decision table; requested/confirmed choice is separate from projection. Manager dispatch, executor direct/resume readiness, coordination and workflow entry now explicitly load/apply the gate. Phase activation requires every eligible phase object and initial association before task edits/tests; pending/unknown projection blocks execution. Added broad-request example. Changed links and policy handoffs inspected; no repeated activation approval, no new registry and existing human/preparation gates preserved. | R-001 Revised; behavioral recheck pending. Commit `753e45a9852c4b822b6004315bf559287b4381c5`; pushed/readback matched before V-002. |

| V-002 / R-002 | Startup/completion allowances now require already verified phase/task projection and satisfied dependencies. Shared lifecycle, phase/workflow and forge entry preserve that boundary. Omission recovery distinguishes the original requested gate from genuinely late confirmation, retains files/index/commits and matched objects, and stops further affected execution until missing prerequisites are reconciled. Added initial-projection/outage/omission examples. Owner comparisons and changed-link inspection preserve closure, added-work, no-reset and no-future-phase gates. | R-002 Revised; behavioral recheck pending. This checkpoint is committed/pushed/read back before V-003. |

## Evidence limits

No fresh consumer comparison, installed-client behavior or live provider mutation has occurred. R-003 remains an evidence gap: supplied test source/trace is unknown and no dedicated consumer target is selected. Source inspection is evidence of the wording change, not proof of improved LLM compliance. Preserve original review observations and suspended campaign 037 candidate/findings.
