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
| U-004 | Pending | None allocated |
| U-005 | Pending | None allocated |
| U-006 | Pending | None allocated |
| U-007 | Pending | None allocated |
| U-008 | Pending | None allocated |

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
- **Baseline locations:** `skills/sdd-manage/references/coordination.md`, Coordinate execution, step 5; compare `main-preparation.md`, Final package QC, and `document-qc-gates.md`, Stage handoff steps 3–4. Paths are relative to package root unless explicitly source-relative.
- **Observation:** The common coordination procedure routes verification failures only to active sdd-implement/sdd-steer, then says documentation findings requiring governing-document changes return to the human before any authoring. Main documentation preparation instead assigns in-scope QC corrections to document owners under existing authoring scope, with only consequential missing decisions returning to the human. The specific procedure can override the generic reminder, but the shared router does not identify that owner/context distinction.
- **Consequence / source reproduction:** During DOCS-009, an authorized preparation check finds a routine cross-document omission within the agreed specification. Main-preparation routes it to the relevant document owner for correction/recheck; a reader following the generic failure step can select a nonexistent implementation owner or request fresh authoring approval. Similarly, sdd-docs’ upstream requirement-referral rule is broader in this generic reminder than its actual selected-owner context. This is an instruction conflict, not proof a model failed or that all governing changes are automatically authorized.
- **Bounded proposal / owner:** Have sdd-manage route repairs to the active authorized owner by workflow, qualify implementation task recovery, and preserve the sdd-docs referral/consequential-decision boundary in its actual context. Keep standalone verification review-only and genuine out-of-scope/requirement decisions with the human. Do not grant blanket repair authority.
- **Objective recheck:** Trace preparation QC with authorized routine corrections, a genuinely new requirement decision, implementation acceptance recovery, sdd-docs proposing an upstream amendment and standalone verification. Each returns to the correct owner/decision without invented implementation or waived approval.

No source repair performed. Local link/format checks remain separate from these source scenarios; hosted and HIL outcomes are unrun.

## U-003 — Governing documents, decomposition and task derivation

Assessed the four owner entries, thirteen document-specific references and four shared structural/QC conventions. Read operative generation/review/handoff sections; checked responsibility routing and entry/reference agreement. PROJECT is a concise brief rather than a SPEC or plan; design separates architecture/component ownership; SPEC owns behavioral guarantees; PLAN owns delivery strategy; layout owns paths; TASKS derives executable work. Optional feature deltas and focused children retain bounded canonical ownership.

No finding for count heuristics, document split thresholds, or mandatory review-unit identity. Shared QC explicitly distinguishes numerical diagnostics from defects, excludes review-only units from delivery counts without excluding them from execution, prohibits padding, and preserves semantic scope. Task-list generation, conformance review and progress review remain separate; stable IDs, one executable owner, parentage and report/exit evidence are explicit. Earlier useful behavior and meaningful MVP growth are preserved without requiring every task to deliver a standalone feature.

### R-002 — Detailed PROJECT and PLAN procedures still mandate an uncovered pause

- **Type / priority / status:** Instruction-consistency issue; Medium; Open. High source confidence; model effect untested.
- **Baseline locations:** `skills/sdd-design/references/project-brief.md`, Create or revise, step 6; `skills/sdd-plan/references/review.md`, Separate PLAN and layout checkpoints. Compare the two skill entries and `sdd-manage/references/human-document-review.md`, Future-checkpoint preapproval.
- **Observation:** Both entries explicitly honor applicable future preapproval, but the detailed brief procedure says to present then pause at a new PROJECT, and PLAN review says present/pause and await human PLAN acceptance before layout. Neither local imperative states the preapproval alternative. The linked canonical policy can resolve it; the latest loaded detailed procedure still presents an unconditional stop.
- **Source reproduction / consequence:** Human preapproves PROJECT through layout and stops before implementation. After selecting the relevant reference, an agent follows its explicit pause/acceptance wording and asks again rather than performing the covered checkpoint’s analysis/QC/publication. This is source ambiguity, not a claim of an observed failed trial; ordinary uncovered checkpoints must still pause.
- **Bounded proposal / owner:** Align these two detailed owner reminders with the existing scoped preapproval policy, including separate PLAN/layout clearance. Preserve technical checks, substantive presentation, publication and real conditions/revocation; do not broaden blanket authority or rewrite already-correct entries.
- **Objective recheck:** Trace ordinary acceptance, covered PROJECT, covered PLAN/layout, unrelated or conditional coverage and revoked preapproval through entry → reference → shared human/QC policy. Each checkpoint has one consistent pause decision while all dependent technical/publication gates remain.

No repairs made. The findings concern explicit local imperatives, not every mention of a human checkpoint or a demand to repeat the full policy at every link.
