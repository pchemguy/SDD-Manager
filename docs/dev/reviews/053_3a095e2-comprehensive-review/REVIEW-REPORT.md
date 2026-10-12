# Comprehensive review report

## Campaign and assessment

Campaign: **053_3a095e2**. Baseline/reviewed source: `3a095e23bcefd341933ca2353275c5243da32a97`. Date: 2026-10-12. Reviewer: Codex. Scope and criteria: [review plan](REVIEW-PLAN.md).

State: comprehensive review complete; five open findings (three medium, two low). Local support/package checks pass; staged human-checkpoint and task-history acceptance coverage need extension. No source repairs, merge or product release performed. Evidence will distinguish source assessment, local execution and unavailable live/client observations. Source repairs and integration are outside this request.

## Coverage

| Unit | State | Evidence / findings |
| --- | --- | --- |
| U-001 | Assessed | 99 current Markdown files inventoried/thematically scanned, 15 entries; consequential preparation/execution/tracking/release handoffs inspected. R-001/R-002. |
| U-002 | Assessed | 124 support tests passed; 33-case catalog valid. R-003/R-004 identify assessor coverage gaps. |
| U-003 | Assessed | 30 publisher tests passed; manifest/assets and reproducible 134-file package verified; package/source links resolve. R-005. |

## Findings

| ID | Type | Priority | Status |
| --- | --- | --- | --- |
| R-001 | Documentation defect | Medium | Open |
| R-002 | Documentation defect | Low | Open |
| R-003 | Acceptance component coverage gap | Medium | Open |
| R-004 | Acceptance component coverage gap | Medium | Open |
| R-005 | Navigation formatting defect | Low | Open |

### R-001 — Preparation diagram delays publication until the end of the document chain

- **Location:** `README.md`, Project preparation diagram, lines 105–124; compare `skills/sdd-manage/references/human-document-review.md`, Created-document checkpoints step 1, and `PLUGIN.md`, Human checkpoints and Git publication. Confidence: high.
- **Observation:** The depicted path passes human acceptance and dependent design/SPEC/PLAN/layout/TASKS stages before reaching its sole “Commit and push design-docs” node. Canonical instructions require each new reviewable document to be committed, pushed and remotely verified before presentation and dependent work. Nearby prose explains separate human decisions but does not explain per-document publication in the diagram.
- **Consequence:** The principal human-facing illustration teaches a delayed persistence boundary inconsistent with the operational contract.
- **Correction:** Show or explicitly annotate each grouped preparation stage's publication-before-human-review checkpoint; keep PLAN/layout decisions distinct. Remove the impression of one end-of-chain publication. Owner: `sdd-docs` with `sdd-manage` gate semantics. No source behavior change required.
- **Recheck:** Trace PROJECT through TASKS; each necessary newly created artifact has publication/readback before human presentation, acceptance before dependent authoring, and accepted-preparation integration remains a separate boundary. Render if available; report rendering limits separately.

### R-002 — GitHub QC prerequisite still mentions milestone labels

- **Location:** `skills/sdd-forge/references/github-projection.md:38`, “phase/milestone labels or milestones”; compare the same file's native-milestone mapping and `PLUGIN.md:45`. Confidence: high.
- **Observation:** A GitHub-specific prerequisite paragraph retains milestone-label terminology although its operative mapping correctly uses a phase label and native milestones. The provider-neutral hierarchy allows milestone-label equivalents only with backend-defined lifecycle semantics.
- **Consequence:** The residual wording can suggest redundant GitHub milestone labels; the recent entry correction has not reached every relevant paragraph.
- **Correction:** Name GitHub phase labels, native milestones and task issues consistently. In the entry's provider-neutral fallback, retain the requirement for supported equivalent lifecycle/reconciliation semantics rather than suggesting labels alone replace milestones. Owner: `sdd-forge`/`sdd-conventions`.
- **Recheck:** GitHub instructions request one native milestone per SDD milestone, no milestone-label projection; any non-native fallback remains conditional on a defined backend lifecycle. Preserve phase labels and issue associations.

## U-001 coverage and source scenarios

| Scenario / concern | Source assessment |
| --- | --- |
| New PROJECT → design → SPEC → PLAN → layout → TASKS | Canonical owners enforce individual human decisions, separate PLAN/layout reviews and publication-before-presentation. R-001 concerns the README diagram. |
| Existing/interrupted documents and clarification | Acceptable existing inputs can be reused; pending/requested human reviews survive interruption. Clarification/QC/Git authority cannot accept unseen documents. |
| Next-N / milestone / phase implementation | Range selection counts review tasks, blocks out-of-range dependencies and stops for human continuation/steering. No per-task human approval imposed. |
| Task commit, publication and recovery | One task result/evidence/initial checkbox and leading owning ID; per-commit publication, bounded persistence audit and protected recovery are explicit. No automatic history rewriting. |
| Requested tracking | Decision, eligible-phase projection, task/review issue associations, closure/reopening and transition gates are explicit across manager/implementation/backend. R-002 is residual wording. |
| Feature/steering/revision | Selected document scope, unique task ownership, feature archive eligibility, paused steering target and frozen unrelated records retained. Review-only does not authorize repairs/integration. |
| Release preparation/publication | Highlights-only versus complete message, retained final file, source/coverage/version freshness, same release-commit/provider body and exact tag target are specified; publication tooling assessed in U-003. |
| Contributor and plugin entries | Source AGENTS routes to acceptance; packaged PLUGIN routes all 15 owners. No source-contributor section remains in PLUGIN. |
| Credentials/environment | Protected token exclusion, distinct Git/API access, cause classification, supported recovery and actual environment evidence are specified. No credential values included in evidence. |

[Workflow inventory](evidence/workflow-inventory.json) retains current paths/hashes/headings and criterion line indices. Inventory and thematic scans are broad coverage; deep inspection focused on consequential handoffs, not an exhaustive sentence-level editorial review. Scenarios above are source assessments, not fresh consumer execution. Demo gameplay and rendered Mermaid layout were not executed.

### R-003 — Preparation assessment does not explicitly grade the staged human checkpoints

- **Location:** `acceptance/textstats/cases/assessor/A-001.md` and `.json` independent/required agent checks; corresponding A-008 feature preparation contracts; `DOCUMENT-QC.md`. Compare the pinned human-document-review protocol and PLUGIN checkpoint table. Confidence: high.
- **Observation:** Main/feature preparation checks require produced/published artifacts, upstream QC and accepted planning, but omit explicit per-root publication-before-presentation, substantive presentation, actual human acceptance before dependent creation, distinct PLAN/layout decisions and clarification-versus-acceptance negatives. TRACKING-FIDELITY mentions real human decisions, but its selected tracking follow-ups do not replace explicit preparation case criteria.
- **Consequence:** A consumer can reach technically coherent final documents while skipping the required staged human interaction; the current primary preparation oracle does not specifically reject that sequence.
- **Correction:** Extend the TextStats component's main/feature preparation assessor contracts and focused scenarios with ordered transcript/Git decision evidence, nonacceptance clarification and interrupted pending-review cases. Keep expectations out of consumer prompts. This is component coverage work, not a request to execute live trials. Owners: `sdd-tdd`/`sdd-verify` with preparation owner semantics.
- **Recheck:** Positive graded sequence records each selected root's publication, presentation and human decision; dependent creation before acceptance, bundled PLAN/layout acceptance or clarification treated as approval is independently rejected. Missing transcript/order evidence cannot pass. Asset/catalog support checks validate consistency; consumer acceptance requires separate execution.

### R-004 — Task assessment lacks explicit atomic closing-commit and history-audit criteria

- **Location:** `acceptance/textstats/cases/assessor/A-004.md`/`.json`, A-005/A-006 implementation/review contracts and `COMMON.md`; compare `skills/sdd-implement/references/completion-and-checkpoints.md`, Task commit contract and persistence audit. Confidence: high.
- **Observation:** The assessor checks durable task/check/commit/push evidence, current task ownership and boundary integration, but does not explicitly inspect each task's parent diff for its verified result, evidence and initial unchecked-to-checked transition together, exactly one executable task per closing commit, exact leading single-ID subject, or bounded continuation/pre-integration history audit. Broad per-task publication wording does not establish these composition rules.
- **Consequence:** Bundled task closures, result-first/checkbox-later commits or malformed subjects can satisfy final-state and publication checks without a targeted history assessment.
- **Correction:** Extend relevant implementation, review-task and recovery assessor criteria with actual native commit/parent-diff evidence and negative bundled/split/malformed histories. Preserve legitimate authorized partial checkpoints and parent-only follow-ups; assess no automatic rewrite of published violations. Add deterministic capture only if it materially supports independent judgment. Owners: `sdd-tdd`/`sdd-verify`.
- **Recheck:** Independent assessment rejects each invalid history even with a clean checked list and published branch; accepts a compliant task closure and explicitly authorized exceptions from their evidence; continuation/integration remains blocked until authorized recovery or exception. Do not infer live outcomes from helper sensitivity tests.

## U-002 execution and evidence limits

[Acceptance checks](evidence/acceptance-checks.json) and [support log](evidence/support.log) record 124 passing support tests and static validation of all 33 catalog cases. Python 3.12.14; Python 3.11 was not available here. Executed checkout adds only this campaign's records to the reviewed baseline; reviewed source/tooling bytes remain unchanged.

Inspected source pinning/dirty snapshots, protected path/data handling, recovery/index/bundle retention, interruption controls, literal public API probe, release capture, evidence-class/variant accounting and consumer/assessor separation. Support tests exercise meaningful failure/sensitivity paths, including occupied/symlink evidence, wrong release body/tag/class, public-export regressions, incomplete prerequisites and uncertain interruption replay. No observed support failure or confirmed helper-code defect in this unit. Review depth is targeted across these seams; it is not a proof of all possible helper inputs.

Fresh consumers, independent runtime assessors, installed clients, native process termination and live GitHub release/tracking writes were not executed. Historical passes were not imported as current acceptance. R-003/R-004 concern missing explicit component criteria; adding them would still require new consumer evidence. Current docs accurately distinguish support success from those runtime observations.

### R-005 — Campaign index rows are split into unheaded table fragments

- **Location:** Current root navigation `docs/dev/reviews/README.md:31–84`; the first table ends after campaign 024, subsequent campaign rows are separated by blank lines, with a prose paragraph also interrupting the rows. Confidence: high.
- **Observation:** Only the initial contiguous table has a header and delimiter. Later isolated pipe rows are not continuations of that Markdown table. The active 053 navigation inherited this existing append pattern.
- **Consequence:** Much of the human-facing campaign index lacks the intended table structure and scanability.
- **Correction:** Make the root navigation one contiguous table, or intentional separately headed tables; place explanatory prose outside the table. Preserve existing row text/links and all closed package bytes. Owner: `sdd-docs`; this current navigation correction does not authorize historical report rewrites.
- **Recheck:** Every campaign row belongs to a table with a header/delimiter, explanatory paragraphs do not interrupt it, links remain unchanged and the diff contains no closed-package edits. Render with a Markdown table renderer when available; source structure inspection is distinct from visual verification.

## U-003 distribution and operation evidence

| Check | Observed result | Limits |
| --- | --- | --- |
| Publisher contracts | 30 tests passed on Python 3.12.14 with declared `jsonschema==4.26.0`; [log](evidence/publisher.log). | Controlled providers/native Git fixtures, not CI/live provider execution. |
| Exact source/native build | Two byte-identical builds from detached reviewed source `3a095e23bcefd341933ca2353275c5243da32a97`; 134 files. | Source remains version 0.15.0; no release marker/tag/publisher writes. Build used local imported `build_package`, publish false, exact source and matching manifest tag. |
| Archive/schema/assets | Committed bytes inspected against Git tree; core pinned schema passed, presentation assets present. PLUGIN included; source AGENTS/acceptance/development/CI excluded. [Package evidence](evidence/package-checks.json). | OpenAI extension contents are opaque to the portable schema; no installed-client presentation proof. |
| Package links/anchors | 473 local prose links resolve inside package; 143 cross-skill links, no missing paths/anchors. | Fenced/inline literal examples excluded. Initial unmasked scan's three example-link false positives corrected before grading. |
| Current source navigation | 188 current Markdown documents scanned; 647 local prose paths resolve, including four valid directory links. Historical targets excluded. [Source link evidence](evidence/source-links.json). | No remote URL liveness or frozen-target compatibility assessment. Initial file-only scan's directory false positives corrected before grading. |
| Source Markdown | No heading-followed-without-blank or triple-blank candidates in selected skill/root/coordinator/demo guides. R-005 affects current campaign index table structure. | This bounded scan is not complete Markdown parsing; template literals and rendered diagrams were not graded as live behavior. |
| Release workflow/reconciliation | Inspected exact source/tooling separation, input-as-data, declared runtime/dependency, read/write job permissions, manual-only dispatch, one tag concurrency group, exact source/version/build hash, draft/assets/body/tag/latest readback, conflict refusal and uncertain-write recovery. Local contracts cover positive/repeat/partial/uncertain/negative paths. | GitHub Actions validator, actual action resolution, hosted CI, release dispatch/download and visual diagram rendering not performed; no universal runtime readiness claim. |
| Access and package contents | Shipped inventory excludes credentials and source-only evidence; inspected protected transfer and owned-provider-field rules. No recognizable credential value exported in review evidence. | Pattern screening and structural inspection are not a general security certification. |
| Protected historical/source boundaries | Full campaign diff contains only campaign 053 artifacts and current review-index navigation; reviewed source and earlier campaign packages unchanged. | No historical contents revalidated. |

## Consolidation and proposed revision queue

Five open findings: **three medium** (R-001/R-003/R-004), **two low** (R-002/R-005); three documentation/navigation defects and two acceptance component gaps. No confirmed executable-code defect or failing local suite was observed. Package structure is verified for this pinned candidate; consumer interaction, installed-client compatibility and hosted CI/provider behavior remain unverified here.

1. **R-001/R-002:** Align the README preparation diagram and GitHub prerequisite wording with the pronounced PLUGIN gates and native milestone mapping. Retain only supported provider fallback semantics.
2. **R-003/R-004:** Extend TextStats assessor contracts/scenarios for per-document HIL/publication order and atomic task closing/history audit. Validate the component independently; do not treat source extension as consumer execution or invent retrospective passes.
3. **R-005:** Normalize current campaign-index table structure without changing historical records.

No revision plan or repairs have been authorized in this review request. The review report/plan/evidence are published on `revision/053_3a095e2-comprehensive-review`; `main` remains the reviewed baseline. Proposed revision execution and any fresh client/consumer/provider campaign require their own selected scope. Stop at the completed review boundary.
