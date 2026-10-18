# Focused planning review

## Campaign and scope

- Campaign: `074_17ca45e`; baseline: `17ca45ecfe1bcd5cefa2b0830af5918c7e33c963`.
- Current inspected source: opening checkpoint `59c4652951bcb27dda4a73e8412a5e7d9ffb99c8`; plugin source unchanged from baseline.
- Evidence: human-supplied turns/plan, with [selected retained extracts](TEST-INPUT.md), and current source inspection.
- Scope: release/version versus implementation hierarchy, simplest sensible first phase and its QC enforcement. No source repairs, Tetris repository changes or live acceptance selected.
- Result: three current-guidance gaps; proposed corrections await revision planning/acceptance. This is a focused source/interface review, not a comprehensive plugin review or a reproduced consumer trial.

## Interpretation of the supplied result

The answer to the agent's question establishes complete first-version scope, including the named modern capabilities. It does not require a single phase. Complete V1 can span several implementation phases while retaining every accepted requirement in design/SPEC and delivery coverage. Deferring a capability to a later phase within V1 does not defer it beyond V1 or turn it into a separate feature campaign.

The generated plan does provide incremental milestones and early browser integration. Its failure against the human's intended strategy is at the phase boundary: Phase 1 remains the complete requested version, including independent enhancements, and cannot integrate as the simpler baseline. Calling milestone 1.1 a small usable path does not establish a minimal sensible Phase 1.

The supplied early slice also omits rotation and several baseline gameplay capabilities while introducing seven-bag and subsequently mixing wall kicks into baseline completion. This illustrates why a working path alone is insufficient: usefulness must be assessed against the intended core experience. Early implementation ordering and first-phase product completeness are different decisions. The supplied convenience rationale for using the intended random source early is not evidence that the enhancement is necessary for the baseline phase; genuine dependency/cost reasons still deserve case-specific assessment.

## Findings

### R-001 — MVP obligation stops at the milestone level

- Type/priority: guidance gap, High; high confidence from current source.
- Locations: sdd-plan entry's default paragraph; `sdd-plan/references/delivery-plan.md`, Establish the strategy step 2 and Incremental growth; `sdd-conventions/references/task-hierarchy.md`, Delivery meaning.
- Evidence: the canonical authoring step says “MVP or prototype as the earliest usable milestone.” Phase construction only asks for major delivery outcomes. Current rules let that early milestone sit inside a phase containing the whole requested version.
- Consequence: a plan can appear incremental yet defer the first completed/integrated phase until all enhancements and final-version obligations finish.
- Proposed correction: make the simplest sensible usable product the default first-phase outcome for greenfield delivery. Bound later phases around meaningful capability growth. Retain smaller milestones within each phase; do not replace their review/testing obligations. Existing-product and genuinely narrow scopes need an appropriately bounded changed outcome, not a manufactured new MVP.
- Recheck: reject the supplied complete-version Phase 1 even though it contains an early milestone; accept a meaningful baseline phase followed by enhancement phases that collectively deliver V1. Retain genuinely inseparable prerequisites with evidence rather than fixed feature exclusions.

### R-002 — Version scope and phase scope lack an explicit interpretation rule

- Type/priority: guidance gap, Medium; high confidence from current source, observed-test causality unverified.
- Locations: `sdd-plan/references/delivery-plan.md`, Establish the strategy and Retain full intent; `sdd-manage/references/workflows.md`, Delivery strategy handoff.
- Evidence: full intended scope and MVP deferrals are preserved, but the source does not explicitly say that a user-defined first version/release can span multiple phases or that such scope is not an instruction to collapse phase boundaries.
- Consequence: the tested plan treats completion of the initial version as the entire Phase 1 objective. Preapproved documentation checkpoints could reinforce that interpretation even though they authorize progression, not a delivery-shape exception.
- Proposed correction: interpret version/release requirements as coverage boundaries across the applicable plan. Phase boundaries follow minimal useful outcomes and dependencies unless the human actually directs a conflicting shape. Do not infer single-phase authority from “V1 includes,” “first version,” complete-project requests or checkpoint preapproval. Keep release publication authorization separate. If a human explicitly requests one phase, assess and record the actual override and consequences without pretending it is the normal minimal-phase strategy.
- Recheck: identical full-V1 capability lists permit a multi-phase plan, with no lost requirements and no unnecessary feature-campaign conversion; an explicit one-phase instruction is distinguished from version scope.

### R-003 — QC lacks a direct first-phase necessity/usefulness test

- Type/priority: assessment gap, Medium; high confidence from current source.
- Locations: `sdd-plan/references/review.md`, earliest usable milestone and Required PLAN/SPEC QC gate; `sdd-conventions/references/development-document-qc.md`, Decomposition and count policy and PLAN against SPEC; downstream task conformance.
- Evidence: review examines minimality of the earliest milestone and generic semantic scope. Numeric guidance prefers 3–5 delivery milestones and does state counts alone are insufficient, but it supplies no explicit assessment of the first phase's baseline versus independent enhancements. The supplied four-delivery-milestone phase fits the preferred range.
- Consequence: counting milestones and mapping all contracts can pass while a phase is oversized; pressure to avoid 1–2-milestone fragmentation may discourage the simpler appropriate first phase.
- Proposed correction: require explicit semantic assessment of first-phase core usefulness, included capability necessity, removable independent enhancements and the rationale for any enhancement retained early. Apply count heuristics only after the functional boundary is justified; allow small coherent phases without padding or bundling extras. The first phase's demonstration must serve the actual intended core use, not just prove a running technical loop. Downstream task review returns an unsuitable phase strategy to sdd-plan rather than moving boundaries silently.
- Recheck: the supplied plan fails this semantic check despite its acceptable counts; a core phase with fewer delivery milestones can pass when justified. No rigid phase count, universal game baseline or hardcoded feature partition is introduced.

## Proposed correction principles

1. Separate complete intended product/version scope from Phase 1 scope. Preserve all accepted contracts and relevant testing; stage realization and coverage honestly.
2. Define a first phase that can complete and integrate as the simplest reasonable core product. Use the actual problem/users to decide what makes that product sensible.
3. Schedule independent enhancements in subsequent bounded phases by default. A dependency or nontrivial cost reason for retaining one early must be argued, not inferred from its inclusion in V1.
4. Judge phases, milestones and tasks at their respective levels. More milestone/task slicing does not repair an oversized phase.
5. Let semantic usefulness and necessity govern shape before count heuristics. Add no phases, milestones or features to satisfy a preferred number.
6. Keep phase completion/integration distinct from publishing a release; baseline integration need not announce a finished V1.

Illustrative direction for the supplied case: a usable classic gameplay phase, then appropriately scoped modern-enhancement phase(s), with every requested capability delivered before the planned V1 completion. This is not a mandatory Tetris template or a prescribed phase count. The same principle must work for unrelated products, tightly coupled capabilities and small single-phase projects.

## Proposed revision scope and evidence limits

Canonical authoring detail belongs in the existing sdd-plan delivery procedure. Keep entry/coordinator routing shallow; shared conventions own concise hierarchy/QC invariants, and assessment procedures own the explicit rejection tests. Reuse current references; do not create a separate MVP reference with little independent substance. Assess the coupled authoring and review surfaces together and retain the previous bounded-reference requirement.

A later revision plan should cover the owner procedure, version/phase interpretation, QC and downstream handoffs, plus assessment contrasts for complete V1, a small valid phase, true prerequisites, existing systems, explicit overrides and unrelated domains. Source changes and execution remain pending. No support/publisher suite is needed for this report-only checkpoint; whitespace, current local links and owned-path checks apply.

The original agent's exact loaded sources and SPEC/architecture were not provided. The supplied transcript establishes the reported outcome; current source establishes the permissive gap. It does not establish which internal inference caused that agent's choice or that every detail of its generated plan violates its historical installed instructions.


## Revision planning disposition

The human requested revision planning and directed that needed illustrative examples generally remain abstract. R-001–R-003 are selected for the [revision plan](REVISION-PLAN.md), which defines five ordered actions and sixteen abstract assessment contrasts. Concrete supplied test material remains campaign evidence. Source changes, execution and integration have not started.


## Human amendment: bounded increments in every phase

The human clarified that bounded functionality slicing applies to all phases, not only Phase 1. The [revision plan](REVISION-PLAN.md) now makes that universal obligation explicit across authoring, hierarchy/handoff, QC and assessment. Phase 1 additionally establishes the simplest sensible baseline. Every later phase must preserve and extend its predecessor with bounded scope, functional cohesion, justified dependencies, scoped exits and integration/regression evidence. A small first phase cannot justify an overloaded later phase or a final catch-all backlog.

The five revision actions are retained with broadened checks; SC-17–SC-20 extend the matrix to twenty abstract contrasts. No new source defect is fabricated from this clarification, and no source changes or execution are authorized by it.


## Execution disposition

The subsequent “Execute” request authorized the five planned actions. R-001–R-003 are verified in the changed source/interfaces; see [revision evidence](REVISION-REPORT.md) for the twenty scenario assessments, local suites, exact package checks and limits. All phases now require bounded coherent functionality growth; Phase 1 additionally establishes the simplest sensible usable baseline. No live consumer trial or campaign integration has run.
