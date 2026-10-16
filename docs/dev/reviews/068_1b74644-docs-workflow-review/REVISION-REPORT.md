# Main documentation workflow revision results

## Campaign and authority

- Campaign: `068_1b74644`; starting/reviewed baseline: `1b74644cb0b97e074cc407086be13b5597620b80`.
- Execution starts at published plan commit `25df9832b8859a1117a45a31d195b754f988dfc2`.
- [Revision plan](REVISION-PLAN.md); [canonical findings](REVIEW-REPORT.md).
- Request: “Run, do not close.” Execute V-001–V-005, publish/read back each checkpoint, leave the campaign open and unmerged.
- Branch: `revision/068_1b74644-docs-workflow-review`; eventual target `main` is unchanged by this execution.
- Evidence: source scenario walkthroughs and local structural/support/package checks. Live consumer/provider/client acceptance remains out of scope.

## Progress

| Action | Findings | Current result |
| --- | --- | --- |
| V-001 | R-003 | Revised; source rechecks pass; combined verification pending |
| V-002 | R-004 | Pending |
| V-003 | R-002 | Pending |
| V-004 | R-001 | Pending |
| V-005 | R-001–R-004 | Pending |

## V-001 — Documentation and implementation persistence

Changed the coordinator Task closure gate, Git integration audit caller, PLUGIN reminders and capability-map task-contract paragraph. TASKS/FEATURE-TASKS retains implementation closure/audit; DOCS_TASKS reaches coordinator-owned main-preparation persistence. Adjacent Git/PLUGIN publication-preflight wording is explicitly implementation-specific for the same ownership reason. No implementation-owner contract, DOCS template or AGENTS policy changed.

Source rechecks used the changed callers and the existing main-preparation first-approval/final-QC sections plus implementation’s task-contract/audit/recovery sections:

| Input / context | Inspected path and observed instruction consequence |
| --- | --- |
| Fresh DOCS completion through direct coordinator | Task closure explicitly selects main-preparation for DOCS initialization, first approvals and package QC. Its result/evidence/checkbox and push/readback obligations remain required. |
| Same DOCS request through PLUGIN | Both generic publication and audit summaries now name implementation scope; DOCS persistence links to main-preparation before dependent work. |
| Published unchanged proposal awaiting approval | Main-preparation keeps the exact approved blob, records the human decision and checks the DOCS task in the approval commit. Neither generic caller invokes implementation’s partial-checkpoint/composition exception for it. |
| Resumed/later DOCS work | Main-preparation preserves prior first approvals and rechecks actual readiness; it does not repeat initial checkbox transitions or invent T subjects. |
| DOCS-009 integration | Git caller explicitly requires DOCS initialization/first-approval/final-QC persistence checks before documentation integration, separately from the implementation audit. |
| Valid or malformed/split/bundled implementation closure | TASKS/FEATURE-TASKS still reaches the unchanged implementation audit. Exact single task/result/evidence/initial checkbox requirements and historical-composition recovery gate remain intact. |

These are source consistency observations, not observed agent executions. `git diff --check` and current-document link/anchor/format checks are run before the action commit. The checkpoint commit contains this action and its evidence; push/readback follows before V-002. Exact published action SHAs are recorded at subsequent checkpoints/final verification rather than predicting a commit’s own identity.
