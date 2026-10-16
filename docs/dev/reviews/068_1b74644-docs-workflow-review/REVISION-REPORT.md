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
| V-002 | R-004 | Revised; source rechecks pass; combined verification pending |
| V-003 | R-002 | Revised; source rechecks pass; combined verification pending |
| V-004 | R-001 | Revised; source rechecks pass; combined verification pending |
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

## V-002 — Preparation-only delivery handoff

Updated only workflows.md’s Delivery strategy handoff. It now names completed main preparation’s published integration/milestone/final-checkpoint path, preserves other preparation-only design-docs stops and explicit limits, and links the established completion owner. Campaign records remain on revision; implementation range authority remains separate.

Source rechecks compared that paragraph with the Prepare initial development operation, branch-management’s preparation gate, main-preparation’s final sequence and PLUGIN’s project-preparation summary:

| Input / scope | Observed instruction consequence |
| --- | --- |
| Complete main preparation; no implementation | Finish DOCS-009 and final issue, explicit verified/published docs merge, enabled milestone closure and final checkpoint; stop before implementation. |
| Stop at SPEC or another earlier document | The selected earlier stop remains controlling; completing that document does not authorize the final integration sequence. |
| Feature preparation only | Documents remain committed/pushed on design-docs; no main-preparation completion exception is applied. |
| Explicit no-merge or local-only limit | Honor it, report pending integration/publication/hosted operations and block a dependent implementation baseline when required evidence is absent. |
| Main preparation and an authorized implementation range | Complete the published default preparation baseline and clear the applicable final human checkpoint before phase activation/branching; no inferred extra range. |

All five source traces agree across the loaded summaries. These are instruction walkthroughs, not consumer runs. Diff and Markdown/link checks precede the action commit.

Prior action publication verified by remote readback: V-001 `9c76fbad334f81b1f2a9c0d965bd369ff1bd84ad`. V-002 publication follows this checkpoint before V-003.

## V-003 — Credential recovery before the projection gate

Added a narrowly scoped pre-write authentication section to credentials.md and linked it from main-preparation’s existing pre-write step. Existing safe access/token consumption is read-only; otherwise actual credential recovery uses a supported protected transient channel outside the target repository. Ignore/token/configuration writes wait for complete hosted projection/readback and docs branch setup, then the ordinary conventional storage/exclusion/publication protocol resumes with the accepted token. Unsupported protection remains a blocker. Shared token policy, provider permission profiles and tracking selection are unchanged.

Source walkthroughs inspected the two edited procedures against the unchanged token exclusion/persistence invariants and GitHub backend’s protected API-consumption boundary:

| Input / observed context | Instruction sequence and result |
| --- | --- |
| Authenticated API already available | Use it for full docs projection/readback; no token hunt or repository credential write precedes the gate. Ordinary branch/task initialization follows. |
| Suitable repository token already safely ignored/untracked/protected | Read-only checks permit reuse through the protected client; no ignore repair is allowed before projection. No second token is requested merely to satisfy storage. |
| Authentication failure; suitable supplied token; no ignore file | Use transient protected consumption outside target; verify all native milestone/issues/associations; establish docs branch; then ensure effective exclusion, save protected conventional token and persist owned ignore changes before dependent preparation. |
| Client lacks a supported protected token mechanism | Report the concrete access/transfer blocker. Projection remains unverified and target writes stay blocked; no cleartext helper source, argument or early token/ignore write substitutes for the missing facility. |
| Interruption after projection but before storage | Reconcile actual projection, branch and pending storage; reuse accepted input when available, finish exclusion/storage/publication and report any lost continuity. Do not replay hosted creation or claim a transient session was saved. |

These are source traces only; no token, external provider object or target repository was created for them. Diff and Markdown/local-link checks precede the action commit.

Prior action publication verified by remote readback: V-002 `ea44cc833189a6149daf79153f9a9705860a0136`. V-003 publication follows this checkpoint before V-004.

## V-004 — Scoped preapproval in checkpoint reminders

Updated the bootstrap and QC reminders to name explicit applicable future-checkpoint preapproval and link the canonical policy. PLAN and layout remain distinct gates, each cleared by its actual acceptance or applicable preapproval. Strategy-only QC still cannot claim combined layout/TASKS readiness. No AGENTS/template, document-owner entry or canonical human-policy change was needed.

Source walkthroughs followed bootstrap → focused document-owner prerequisites → human-document-review → shared QC reminder:

| Actual human decision / state | Observed instruction consequence |
| --- | --- |
| No preapproval or only broad continue/Git authority | Publish/present the necessary proposal and pause; technical Ready and standing operation authority do not accept it. |
| Explicit preapproval for remaining PLAN/layout checkpoints | Both are independently covered; report their results and satisfy each technical/persistence gate without repeated acceptance pauses. |
| Preapproval covers another document or range | Preserve its scope; the uncovered checkpoint still pauses before dependent authoring. |
| Conditional preapproval; condition unmet | It is not applicable, so the checkpoint remains pending. QC or inference cannot satisfy the missing human condition. |
| Revoked preapproval or interruption with a pending decision | Recover the actual latest decision, retain the human boundary and hold dependent work. A prior grant or missing context cannot erase revocation/pending acceptance. |

Cross-read canonical preapproval rules preserve QC, substantive reporting, Git publication, requested tracking and authorized implementation ranges in every case. These are source walkthroughs, not live HIL observations. Diff and Markdown/local-link checks precede the action commit.

Prior action publication verified by remote readback: V-003 `d3fe855d060b1b58f1ff6f90f25c034bd05c4d5c`. V-004 publication follows this checkpoint before combined verification.
