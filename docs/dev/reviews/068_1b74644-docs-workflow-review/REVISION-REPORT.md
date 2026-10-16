# Main documentation workflow revision results

## Campaign and authority

- Campaign: `068_1b74644`; starting/reviewed baseline: `1b74644cb0b97e074cc407086be13b5597620b80`.
- Execution starts at published plan commit `25df9832b8859a1117a45a31d195b754f988dfc2`.
- [Revision plan](REVISION-PLAN.md); [canonical findings](REVIEW-REPORT.md).
- Execution request: “Run, do not close.” V-001–V-005 completed at that open/unmerged boundary. Subsequent “Close it” authorizes final integration and closure.
- Branch: `revision/068_1b74644-docs-workflow-review`; integration target: `main`. Closure takes effect after verified merge/publication.
- Evidence: source scenario walkthroughs and local structural/support/package checks. Live consumer/provider/client acceptance remains out of scope.

## Progress

| Action | Findings | Current result |
| --- | --- | --- |
| V-001 | R-003 | Complete; source rechecks and combined local verification pass |
| V-002 | R-004 | Complete; source rechecks and combined local verification pass |
| V-003 | R-002 | Complete; source rechecks and combined local verification pass |
| V-004 | R-001 | Complete; source rechecks and combined local verification pass |
| V-005 | R-001–R-004 | Complete; execution stops open and unmerged |

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

## V-005 — Combined verification and retained boundary

Tested source: `0bb6cd35e184a2c8b6b5f35e74cbd282bfd3c6f6` (published V-004). Python 3.12.14, Git 2.51.1, declared publisher dependency jsonschema 4.26.0. Later edits in this checkpoint update campaign records/index only; runtime/package bytes are the tested source. No merged-state checks were run because the human expressly excluded closure/integration.

### Combined source scenarios

| Selected context | Inspected sequence and reached instruction boundary |
| --- | --- |
| Fresh main preparation; tracking requested; supplied token needed; remaining document checkpoints explicitly preapproved | Coordinator/PLUGIN select main-preparation. Protected transient API consumption → full native docs projection/readback → docs branch and durable exclusion/storage → DOCS-001 → each root’s QC/result/first-approval persistence. Preapproval removes only covered human pauses; implementation audit is not selected for DOCS. |
| Resumed main preparation; unchanged SPEC proposal published; human acceptance still pending | Preserve exact proposal/state and pending review. Approval then records decision/checked DOCS-005 while retaining its blob; publish/read back before issue closure and PLAN. No T-audit exception or repeated completed-document generation is introduced. |
| Partial original initialization or conditional/revoked preapproval | Retain original presence/decision evidence. Finish authorized pending persistence/closure and preserve the actual continuation stop; present file presence and broad Git/continue authority cannot erase it. |
| Whole package ready; main preparation only; tracking enabled or disabled | DOCS-009 report/checked task publish before enabled final issue closure; explicit verified/published docs integration precedes enabled native milestone closure and final preimplementation checkpoint. Tracking disabled omits provider effects, not local gates. No range means no implementation; explicit earlier/unmerged/local-only limits control instead. |
| Feature preparation-only or ordinary TASKS/FEATURE-TASKS implementation | Feature preparation retains its design-docs stop. Product implementation still selects the unchanged one-task commit/audit/recovery contract; valid commits proceed only within range and invalid split/bundled/history composition remains blocked. |

These are source-level rechecks against actual callers and canonical procedures. They establish resolution of the four recorded instruction inconsistencies, not observed agent/HIL/GitHub behavior. No new fixed-string prose tests or consumer trials were added.

### Executed local checks

| Check / command | Observed result | Evidence limit |
| --- | --- | --- |
| `PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v` | 137 passed in 36.056 s | Support/harness fixtures, not live acceptance |
| `PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=/tmp/067-validator-deps python -m unittest discover -s .github/tests -v` | 34 passed in 1.891 s | Local publisher/provider fixtures, no release writes |
| `python acceptance/textstats/cases/assessor/catalog_tools.py validate` | All 33 catalog cases validate | Static asset/graph/contract check |
| Native local publisher build and pinned offline schema | Exact 137 package files and checksum pass; required assets only under assets/; source-only files excluded | No tag, release or installation |
| Native archive versus committed/dirty TextStats snapshot | Identical package-relative file inventory and bytes; clean snapshot parity | Current tested source; fixture suite separately covers dirty sensitivity |
| Reference inventory | 15 skills; all 77 reference files named in their entries | Reachability, not live routing behavior |
| Current Markdown link/anchor/format scan and diff checks | 210 documents, 1,062 local links after final record updates; zero errors | Frozen campaigns/AI logs excluded; no external URL checks |
| Agent Package Author `validate_plugin.py` | Exit 0; zero errors; 46 cross-skill warnings | Bundled references depend on client loading; no client pass claimed |
| Whole campaign path/object checks | Exactly nine planned source/instruction files plus campaign 068/index; protected paths and closed records unchanged | Git diff/object evidence; closed contents not reloaded |

Actual local package SHA-256: `7fa06e5a6f04f9fbc8c072e8af10c314e72d8fdcc1dd4710f7a0ae9ad577dfb4`. The archive’s source comment is the exact tested commit above; the unchanged manifest version is v0.15.0. Temporary check scripts, logs, ZIP and checksum remain outside the repository; the durable result/provenance is recorded here. No release/tag was created.

Protected unchanged scope includes all root/template AGENTS files, discovery protocols, all assets, root/full README, manifest/version, publisher code/schema/dependency/tests, acceptance code/guides/tests and the plugin development contract. The AGENTS-level tracking default/shared paragraphs and user overrides are preserved. No plugin-wide default, new task hierarchy or workflow redesign was introduced.

### Finding disposition

| Finding | Action | Current disposition |
| --- | --- | --- |
| R-001 | V-004 | Resolved in source; covered/uncovered/conditional/revoked checkpoint rechecks pass |
| R-002 | V-003 | Resolved in source; pre-write protected consumption and post-gate storage sequencing rechecks pass |
| R-003 | V-001 | Resolved in source; DOCS and product implementation reach their own persistence owners |
| R-004 | V-002 | Resolved in source; main/other preparation-only and explicit-limit boundaries agree |
| R-005 | None | Not confirmed; no remediation performed |

Live consumer, controlled-provider behavior of these instructions, live GitHub and installed-client outcomes remain unrun. Local verification does not close those evidence gaps.

### Publication and stop

Each prior action was pushed and its exact remote branch tip read back before the next action:

| Action | Published checkpoint |
| --- | --- |
| V-001 | `9c76fbad334f81b1f2a9c0d965bd369ff1bd84ad` |
| V-002 | `ea44cc833189a6149daf79153f9a9705860a0136` |
| V-003 | `d3fe855d060b1b58f1ff6f90f25c034bd05c4d5c` |
| V-004 | `0bb6cd35e184a2c8b6b5f35e74cbd282bfd3c6f6` |

V-005 contains the final records and finding dispositions; its ordinary push/readback follows this commit. No merge or campaign closure is performed. Execution is complete; campaign 068 remains open on its published revision branch for human review. No other workflow resumes.

## Authorized closure

The subsequent request to close this campaign supersedes its earlier keep-open boundary. Execution was already complete and published at `9339477f33e087b53f6c26560ed4046423aadbf6`. Refreshed target `main` remains `1b74644cb0b97e074cc407086be13b5597620b80`; no new target divergence or unrelated source is present. The complete campaign diff retains only its nine planned source/instruction paths plus campaign 068/index. Closed prior campaigns and protected project/template/tooling paths remain unchanged.

Finalize these records on the revision branch, publish/read back, then explicitly merge the pinned final campaign tip into refreshed main. Verify the prospective merged state and exact committed package, inspect both parents, publish/read back main and confirm campaign-tip containment. The merge message records actual working/target tips, original campaign opening `895cd41864fa6ad8eb1601950c305c1179cef65c`, original baseline and merged verification. Closure is established by that verified published integration; these records then freeze without a later status-only edit.

Four source findings are resolved with the recorded evidence limits; R-005 remains not confirmed. Live acceptance stays unrun. No release/tag or provider tracking operation is part of closure. The new broad review is a separate campaign opened only after main publication is verified.
