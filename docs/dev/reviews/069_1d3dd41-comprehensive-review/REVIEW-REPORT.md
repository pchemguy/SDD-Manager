# Broad SDD Manager review findings

## Source and state

- Campaign: `069_1d3dd41`.
- Reviewed baseline: `1d3dd41c29c4534fc84490b78b534017ef0af4a8`.
- [Plan](REVIEW-PLAN.md); [inventory](SOURCE-INVENTORY.md).
- State: Open; review in progress. No source changes or live acceptance authorized.

## Coverage

| Unit | State | Findings |
| --- | --- | --- |
| U-001 | Reviewed | None |
| U-002 | Reviewed | R-001 |
| U-003 | Reviewed | R-002 |
| U-004 | Reviewed | None |
| U-005 | Reviewed | R-001 corroborating interface; no new ID |
| U-006 | Reviewed | None |
| U-007 | Reviewed | None |
| U-008 | Reviewed | R-002 corroborating assessor criterion; no new ID |

Pending coverage is not passing coverage. Structural checks and source scenarios do not establish live behavior. No finding is allocated before inspection.

## U-001 — Composition, entry projections and source/package boundaries

Assessed all 57 selected package/root/documentation/presentation artifacts at their inventory depth. Read the current templates/protocol and greenfield prompt; cross-read PLUGIN/README/contract/capability projections and demo workflows with their operational owners. Existing current-source knowledge was reused where unchanged; no closed campaign contents were imported as findings. All fifteen client-presentation files and seventeen SVG/two PNG assets were checked for identity/path/structural consistency, not visual quality or installed-client behavior.

No substantive finding allocated. The package has one core manifest, optional OpenAI presentation under its extension namespace, all fifteen skills and their components, explicit PLUGIN/coordinator loading and sufficient fallback to canonical owners. Source development/acceptance instructions remain outside runtime dependencies; package links resolve within its root. Root README is navigation, full README human guidance, PLUGIN agent routing, contract source-only assessment. Demo phase/feature/steering/release examples preserve human selection and do not imply that a release or feature starts at every commit.

Source contrasts covered installed/extracted versus checkout paths, absent custom entry, later context reuse, fresh versus resumed initialization and preapproved versus pending checkpoints. Template defaults remain project policy, not plugin-wide activation. Required assets and first-approval semantics agree with main-preparation; root four-file preservation, mixed-state stop and full-package completion have canonical owners. All reference routing and actual provider/evidence behavior are assessed further in their owning units, not inferred from these projections.

Minor editorial observation: the discovery report template spells “Coordinator” as `Coordintator`. This is not a routing/containment defect and does not justify altering displayName handling or unrelated discovery behavior. Retained demo PROJECT text is explicitly an earlier-trial example, not a second canonical brief template.

Local current Markdown checks passed at opening (208 documents/1,057 links, frozen campaigns excluded). Pinned core-schema and native package checks passed at the reviewed merge baseline during closure; their exact provenance is retained in Git and will be consolidated with U-007/U-008. No external URL, client presentation or live discovery acceptance is claimed.

## U-002 — Coordinator, orientation and lifecycle conventions

Assessed the 25 selected entries/modules at their stated source/handoff depth, using current operative sections, reverse outlines and both sides of consequential routes. Reused unchanged, recently inspected canonical Git/preparation/token/history rules while checking current callers. Traced main/feature/revision/steering, direct focused operations, new/existing/interrupted context, reporting levels, preapproval, hosted choice/projection, preparation integration, nested/reopened return, per-commit publication and frozen records. Orientation remains read-only and distinguishes preparation from implementation evidence.

No new finding for the recently revised DOCS audit, preparation-only stop, pre-write credential or checkpoint reminders: current source routes those specific gates consistently. Scope checks precede writes, short consequential gates remain visible before conditional detail, and the coordinator works without PLUGIN. Reference ownership/routing remains discoverable; module length alone is not a defect.

### R-001 — Generic verification-repair routing excludes preparation owners

- **Type / priority / status:** Instruction-interface inconsistency; Medium; Open. Source confidence high; consumer effect unobserved.
- **Baseline locations:** `skills/sdd-manage/references/coordination.md`, Coordinate execution, step 5; corroborating generic handoffs in `skills/sdd-verify/references/failure-assessment.md` (selected-change defect and final repair handoff) and `execution-and-evidence.md` (Preserve and return evidence); compare `main-preparation.md`, Final package QC, and `document-qc-gates.md`, Stage handoff steps 3–4. Paths are relative to package root unless explicitly source-relative.
- **Observation:** The common coordination procedure routes verification failures only to active sdd-implement/sdd-steer, then says documentation findings requiring governing-document changes return to the human before any authoring. Main documentation preparation instead assigns in-scope QC corrections to document owners under existing authoring scope, with only consequential missing decisions returning to the human. The specific procedure can override the generic reminder, but the shared router does not identify that owner/context distinction.
- **Consequence / source reproduction:** During DOCS-009, an authorized preparation check finds a routine cross-document omission within the agreed specification. Main-preparation routes it to the relevant document owner for correction/recheck; a reader following the generic failure step can select a nonexistent implementation owner or request fresh authoring approval. Similarly, sdd-docs’ upstream requirement-referral rule is broader in this generic reminder than its actual selected-owner context. This is an instruction conflict, not proof a model failed or that all governing changes are automatically authorized.
- **Bounded proposal / owner:** Have sdd-manage and affected verification references route repairs/evidence to the active authorized owner by workflow, qualify implementation task recovery, and preserve the sdd-docs referral/consequential-decision boundary in its actual context. Keep standalone verification review-only and genuine out-of-scope/requirement decisions with the human. Do not grant blanket repair authority.
- **Objective recheck:** Trace preparation QC with authorized routine corrections, a genuinely new requirement decision, implementation acceptance recovery, sdd-docs proposing an upstream amendment and standalone verification. Each returns to the correct owner/decision without invented implementation or waived approval.

No source repair performed. Local link/format checks remain separate from these source scenarios; hosted and HIL outcomes are unrun.

## U-003 — Governing documents, decomposition and task derivation

Assessed the four owner entries, thirteen document-specific references and four shared structural/QC conventions. Read operative generation/review/handoff sections; checked responsibility routing and entry/reference agreement. PROJECT is a concise brief rather than a SPEC or plan; design separates architecture/component ownership; SPEC owns behavioral guarantees; PLAN owns delivery strategy; layout owns paths; TASKS derives executable work. Optional feature deltas and focused children retain bounded canonical ownership.

No finding for count heuristics, document split thresholds, or mandatory review-unit identity. Shared QC explicitly distinguishes numerical diagnostics from defects, excludes review-only units from delivery counts without excluding them from execution, prohibits padding, and preserves semantic scope. Task-list generation, conformance review and progress review remain separate; stable IDs, one executable owner, parentage and report/exit evidence are explicit. Earlier useful behavior and meaningful MVP growth are preserved without requiring every task to deliver a standalone feature.

### R-002 — Detailed procedures and a feature assessor omit applicable preapproval

- **Type / priority / status:** Instruction-consistency issue; Medium; Open. High source confidence; model effect untested.
- **Baseline locations:** `skills/sdd-design/references/project-brief.md`, Create or revise, step 6; `skills/sdd-plan/references/review.md`, Separate PLAN and layout checkpoints. Also `acceptance/textstats/cases/assessor/A-008.md`, Human document checkpoint assessment, and `A-008.json`, matching required_agent_checks. Compare the two skill entries, `sdd-manage/references/human-document-review.md`, Future-checkpoint preapproval, and the shared TextStats CHECKPOINTS policy.
- **Observation:** Both entries explicitly honor applicable future preapproval, but the detailed brief procedure says to present then pause at a new PROJECT, and PLAN review says present/pause and await human PLAN acceptance before layout. Neither local imperative states the preapproval alternative. The linked canonical policy can resolve it; the latest loaded detailed procedure still presents an unconditional stop. A-008 likewise requires an actual human acceptance without stating the applicable preapproval alternative retained by shared CHECKPOINTS and A-001.
- **Source reproduction / consequence:** Human preapproves PROJECT through layout and stops before implementation. After selecting the relevant reference, an agent follows its explicit pause/acceptance wording and asks again rather than performing the covered checkpoint’s analysis/QC/publication. This is source ambiguity, not a claim of an observed failed trial; ordinary uncovered checkpoints must still pause.
- **Bounded proposal / owner:** Align these two detailed owner reminders and the A-008 guide/contract criterion with the existing scoped preapproval policy, including separate PLAN/layout clearance. Preserve technical checks, substantive presentation, publication and real conditions/revocation; do not broaden blanket authority or rewrite already-correct entries.
- **Objective recheck:** Trace ordinary acceptance, covered PROJECT, covered PLAN/layout, unrelated or conditional coverage and revoked preapproval through entry → reference → shared human/QC policy. Each checkpoint has one consistent pause decision while all dependent technical/publication gates remain. Independently assess feature preparation with and without explicit applicable preapproval; the local criterion must agree with common checkpoint policy.

No repairs made. The findings concern explicit local imperatives, not every mention of a human checkpoint or a demand to repeat the full policy at every link.

## U-004 — Implementation, steering and feature incorporation

Assessed all 13 selected entries/references: range/startup/execution/completion, environment/browser support, steering impact/execution/verification and feature incorporation. Read their operative procedures and cross-checked manager branch/Git/tracking gates and actual document/task owners.

No new finding allocated. Selection-only stays read-only; next-N counts tasks including reviews, does not mix owning lists or silently expand dependencies, and partial main phases pause rather than merge. Startup checks retained-commit eligibility before publication, permits only bounded authorized forward recovery for known-invalid completion, preserves existing work and never rewrites history to reconstruct RED or task composition. Task result/evidence/initial checkbox is atomic, while separately justified partial checkpoints, repairs and parent-only updates retain their distinct scope. Current acceptance and historical composition are not conflated.

Source scenarios covered clean-but-unpushed, checked-but-uncommitted, uncertain task ownership, out-of-range dependencies, invalid verification versus split/bundled history, missing initial projection versus post-activation outage and partial/full phases. Steering assessment creates no amendment branch; commanded steering owns affected documents/code/tests, publishes and integrates only into the paused target, then returns without task resumption. Feature incorporation requires selected owners, both lists for transfer, one executable entry, retained evidence and pending reassessment; SPEC-only work cannot archive or mutate unselected lists. Archive/QC/navigation changes finish before closure and preserve active consumers and frozen prior records.

Browser/environment guidance is conditional on actual capability requirements, distinguishes a smoke launch from rendering/native evidence, preserves unrelated toolchains/caches and reports genuine unsupported facilities. No arbitrary universal browser prerequisites or new approval per routine task was found. Source traces do not establish real agent, native browser, GitHub or installed-client behavior.

## U-005 — Test strategy, verification and documentation

Assessed all 15 selected entries/modules and the TDD provenance/license interface. Testing strategy and the RED/GREEN/refactor handoff require independent expectations and real observed failure, distinguish setup errors, preserve pre-existing code and admit actual authorized exceptions without fabricated history. Verification separates conditions from task completion, code review from testing, failure classes, current versus prior evidence and native/rendering capabilities from modeled checks. Documentation checks requirements and observed behavior without silently changing governing intent.

No new independent finding allocated. Extended R-001 with verification’s generic failure/evidence-return clauses: despite the entry’s explicit DOCS-009 coordinator return, detailed generic references still name only active implementation/steering. The same workflow-owner qualification should cover those handoffs; this is not a second finding or a request to give verification repair authority.

Source contrasts covered behavior change versus preservation/refactor, immediate-green or collection failure versus actual RED, independent fixtures versus mirrored expectations, failed/blocked/skipped evidence, read-only review versus test/document edits, governing-document discrepancies and taskless package verification. Clear accepted-requirement changes remain human/owner decisions; independent documentation work may continue without claiming the unresolved dependency is ready. Professional in-code/standalone documentation criteria are proportionate to role, not a docstring-field quota.

Release checks separate local package, actual CI, downloaded remote bytes and installed-client behavior; they require exact source/notes/body/tag agreement and do not promote dispatch acceptance to release success. Provider procedure agreement and actual tooling are checked in U-006/U-007. Upstream MIT attribution is retained, and dependency/reference links remain within the package; no legal or visual/client-acceptance opinion is claimed.

## U-006 — Reports, hosted lifecycle and release instructions

Assessed all 18 selected report/forge entries and references at their operative procedure/contract depth, with coordinator Git boundaries and verification’s release checks. Traced issue drafting/identity, DOCS versus product projection/closure, native milestones, retirement/reopening, report/evidence formats, highlights collection/curation, complete-message persistence, source/tag/body transfer, packaging, one publisher and uncertain-operation recovery. No actual provider request, tag or release was made.

No new confirmed instruction finding allocated. Hosting separates actual user selection from authenticated capability and verified projection; native milestone objects and exact issue markers prevent label substitution/substring guessing. Complete lookup/pagination and readback precede uncertain replay, foreign fields are preserved, and provider state cannot establish local acceptance. DOCS first-approval issues retain their distinct later-revision semantics and milestone-after-published-integration gate. Product review/report and retirement gates remain separate from doc preparation.

Release routing preserves highlights-only and supplied-text scope. First-parent baseline policy is distinct from complete reachable commit coverage; pending tags, initial/null baselines, shallow/tag uncertainty, cumulative/nested summaries, direct changes/reverts and pending-only updates are covered. The collection recipe is evidence collection, not semantic analysis or a successful consumer. Draft/checkpoint ownership and complete-message retention differ explicitly; atomic saves preserve prior copies/intervening human edits. Release commit body, tag target and publisher body use the same exact verified source/Markdown, with explicit existing-source-only/recovery exceptions. Tag push, dispatch, draft upload and publication are separate states.

Report modules retain What/Why/Verification/Result as adaptable concerns, not mandatory empty headings. Task subjects identify one owner; DOCS and implementation composition contracts are distinct. Campaign summaries provide cumulative user outcomes plus opening/baseline/parent provenance without claiming future push/closure; QC reports preserve original findings and append actual correction cycles. No competing progress journal or invented task is required for taskless maintenance/release work.

Source scenarios covered normal/late/missed tracking, missing/duplicate/renamed/retired objects, native versus unsupported milestone semantics, draft/published conflicts, failed uploads, unknown dispatch/body/latest state, backports, human-curated notes and ancillary refresh at unchanged Git source. Actual publisher enforcement and fixture sensitivity are assessed next; external endpoint currency and live/client behavior remain unverified.

## U-007 — Publisher implementation, CI and schema

Assessed all seven selected CI/publisher/schema files. Read actual input validation, committed-tree inventory/archive construction, offline schema resolution, remote adapter, draft/upload/publication reconciliation and CLI/build guard; mapped all 34 fixture tests and inspected consequential assertions. The adapter uses exact acknowledged release IDs, paginates inventories/assets, checks downloaded bytes and distinguishes missing objects from transport failure. Uncertain writes are not blindly replayed. Exact committed source, manifest version, archive membership/modes, checksum and build/publish byte agreement are enforced.

No new confirmed finding allocated. Workflow separates read-only build from contents-write publication and passes event input as data rather than interpolated shell. The committed handoff guide retains agent-owned release authorization, notes freshness/curation and commit-body checks; the helper is not a semantic notes author or general authorization engine. Controlled provider fixtures establish local implementation behavior, not live endpoint/client success. Arbitrary release-conflict reconciliation remains deliberately blocking.

Checked current official upstream documentation on 2026-10-16: [checkout](https://github.com/actions/checkout) and [setup-python](https://github.com/actions/setup-python) document v7; GitHub documents [concurrency queue: max](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency), compatible with cancel-in-progress: false. These are supported current declarations, not obsolete-version findings. This did not execute hosted CI. Pinned local schema/dependency validation, native build and support suites are reported with their actual provenance in final verification.

## U-008 — TextStats component and acceptance interfaces

Assessed all 157 selected acceptance artifacts at their stated depths: ordered coordinator guides, schemas/template, all 33 consumer/contract/guide/dependency sets, shared independent assessment protocols, literal input/expected suites, helper implementations and test fixture/method coverage. Read actual configuration, nested/root source pinning, preparation, Git observation/reconciliation, recovery export, ownership/DSL assessment, coverage accounting, trial controls, failure adapter, contract probe, capture/renderer and evidence-merge code. Reviewed selected consequential test assertions and reused current unchanged fixture knowledge; this is not a line-by-line independent review of every test body.

No new independent finding allocated. Corroborated R-002 in A-008's detailed feature-preparation assessment, which omits the explicit preapproval alternative present in common checkpoint policy and A-001. Correct the local criterion with the production owner reminders; do not weaken ordinary pending human gates or report a failed consumer trial.

Coverage contrasts included absent/ambiguous destination, committed versus explicitly dirty source, nested versus historical root package, fresh/unborn versus resumed runs, occupied output, source/consumer/assessor isolation, genuine versus fixture-created pending work, starting versus reached checkpoints, shallow/unavailable ancestry, explicit pending push destination, stage/worktree/conflict reconstruction and uncertain hosted effects. Helpers retain unknown effects and never authorize replay. Variant totals distinguish independent required passes, optional omissions and historical unsplit grades; retained consumer/provider/native evidence remains a separate obligation.

All catalog contracts were checked against their selected requests, predecessor/variant/protocol semantics and governing workflow boundaries. Literal vectors cover API/BOM/newlines, named-file/error channels, JSON, range precedence/decode/EOF, subtraction, stdin and extracted-source entry. Expected constants remain separate from observation; non-sampled lifetime/unreadability/docs/coverage and semantic lifecycle judgments remain independent assessor duties. Source-defined sixteen initialization combinations and added checkpoint/routing/tracking scenarios are not observed passes.

Fresh local runs at source 7a6351182fe5a8d48090d431a3cbce284973f539 passed 137 support tests and 34 publisher tests; all tested non-review files equal the reviewed baseline. Catalog integrity passed all 33 cases. Actual release/installed-client, live provider, human decision and interruption behavior remain unrun. Current guides state those limits; support or structural success cannot complete live acceptance.
