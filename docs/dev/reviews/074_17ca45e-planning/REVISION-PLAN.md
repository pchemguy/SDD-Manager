# Revision plan

## Campaign and decisions

- Campaign: `074_17ca45e`; state: planned, not executed.
- Full starting baseline/branch-off commit: `17ca45ecfe1bcd5cefa2b0830af5918c7e33c963`.
- Opening commit: `59c4652951bcb27dda4a73e8412a5e7d9ffb99c8`; planning source: `c0d7056b5619737d6f34d5c12014ecb1b06997d8`.
- Working branch: `revision/074_17ca45e-planning`; creation parent/eventual integration target: `main`.
- Inputs: [focused review](REVIEW-REPORT.md) and [supplied test extracts](TEST-INPUT.md).
- Human direction: prepare revisions addressing bounded functionality increments in every phase, minimal sensible first-phase scope and version/phase conflation; generally keep needed illustrative examples abstract.
- R-001, R-002 and R-003 are selected for this planning scope. No reviewed finding is rejected or deferred; source repairs and execution remain unapproved by this planning-only request.
- Coordinator: sdd-manage; primary authoring owner: sdd-plan; shared criteria: sdd-conventions; downstream consumer: sdd-tasks.
- Execution evidence will be retained in REVISION-REPORT.md when execution is selected; that file does not yet exist.

## Required resulting behavior

1. Every delivery phase must form a bounded, coherent functionality increment on the preceding working baseline, with an explicit capability outcome, scope/non-scope, justified dependencies, applicable acceptance and completion/integration boundary. Do not gather the remaining version backlog into an oversized later phase or organize phases as disconnected technical layers. A genuinely necessary enabling/risk stage needs a bounded objective, evidence and route to the next integrated outcome; it must not masquerade as a delivered functionality increment.
2. For greenfield delivery, Phase 1 additionally defaults to the simplest sensible usable end-to-end product. An early milestone within an otherwise complete-version phase does not meet this obligation. Later phases extend the usable baseline in similarly bounded slices.
3. Preserve the complete intended design/SPEC and version scope. Independent enhancements normally follow in later bounded phases within that same planned version; do not silently remove requirements, defer them beyond the promised version or manufacture feature campaigns for originally requested work.
4. Judge baseline and later increments against actual use. A running skeleton, disconnected component or demonstration missing an interaction essential to its stated outcome is insufficient. Do not pursue an absolute minimum that sacrifices coherence or qualities necessary for safe/correct use.
5. Distinguish version/release coverage from phase boundaries. Inclusion in the first version, complete-project requests and document-checkpoint preapproval do not direct one implementation phase. Phase integration does not authorize release/tag/site publication or claim the complete version is finished.
6. Assess why each capability or prerequisite belongs in its selected phase. Retain genuine dependencies, required qualities or substantial avoidable rework where supported by evidence; minor convenience or eventual inclusion is insufficient. At every phase boundary, consider whether independent scope can form a smaller coherent subsequent increment without undermining the selected outcome.
7. Establish semantic boundaries for every phase before applying milestone/task count heuristics. Small coherent phases can be valid; add no padding, artificial phases or bundled enhancements to meet a preferred count. Small tasks/milestones cannot repair an oversized phase, including any later phase.
8. Existing systems start with the earliest meaningful bounded changed outcome while preserving their working baseline. A genuinely small scope can fit one phase; do not force a new MVP, extra phases or one phase per feature. Multi-phase features follow the same bounded-increment rule throughout.
9. Honor an actual explicit human instruction for a conflicting delivery shape, with its scope and consequences recorded. Do not invent that override from version scope or a supplied capability list. Preserve normal readiness and verification obligations.

## Reference ownership and composition

Keep detailed authoring procedure in existing `sdd-plan/references/delivery-plan.md`. The skill entry and coordinator expose brief consequential rules and route to the owner. Existing hierarchy/QC references define reusable invariants; artifact review procedures apply them. Do not copy the full procedure into each caller or create a thin standalone MVP/phase reference.

Broader references remain shallow; narrower references can be substantive within a coherent responsibility. Review the changed files for meaningful entry, scope and handoff. Split only if a distinct substantial workflow boundary emerges, not to meet a length target. No new reference file or general plugin restructuring is planned.

Prefer direct general rules over examples. When an illustration adds decision value, keep it abstract, short and explicitly illustrative/non-exhaustive; it must not define a domain, named technology, fixed feature partition, phase count or mandatory question sequence. Source assessment scenarios likewise use abstract contrasts. Retain the supplied concrete test material as historical campaign evidence; do not propagate its game-specific features into normative guidance or rewrite the original evidence as an abstract source.

## Ordered revisions

Paths in this table are relative to `.agents/plugins/sdd-manager/skills/` unless identified as source-only.

| Action | Findings | Outcome and target owners | Dependencies | Objective recheck |
| --- | --- | --- | --- | --- |
| V-001 | R-001, R-002 | Revise `sdd-plan/references/delivery-plan.md`: establish bounded coherent functionality scope for every phase, the additional simplest-baseline obligation for Phase 1, full-version coverage and justified prerequisites. Align the default sentence in `sdd-plan/SKILL.md`. | Planned behavior established | Every phase has a bounded integrated outcome, including later phases. Earliest milestones cannot excuse an oversized phase; later phases cannot absorb an undifferentiated backlog. Complete version requirements remain covered with scoped exits. Distinguish explicit shape overrides from scope statements. |
| V-002 | R-001, R-002 | Align concise hierarchy semantics in `sdd-conventions/references/task-hierarchy.md` and the delivery strategy handoff in `sdd-manage/references/workflows.md`. Inspect feature/preparation interfaces for affected contradictions only. | V-001 | Phase, milestone, task and version boundaries stay distinct. Each phase preserves and extends its predecessor through a bounded outcome that can complete/integrate independently of later scheduled capabilities; no automatic release or feature campaign. Existing systems and narrow scopes remain proportionate. |
| V-003 | R-003 | Strengthen `sdd-plan/references/review.md`, shared `sdd-conventions/references/development-document-qc.md` and affected downstream `sdd-tasks/references/conformance-review.md` guidance. | V-001–02 | Explicitly assess every phase's scope, functional cohesion, included-capability necessity, dependency/acceptance boundaries and possible independent deferrals even with in-range counts; allow small coherent phases. Block unsuitable strategy before TASKS/phase activation; return upstream corrections to sdd-plan rather than silently restructuring TASKS. |
| V-004 | R-001–03 | Add concise abstract assessment contrasts in source-only `docs/dev/PLUGIN-CONTRACT.md`, linked to canonical planning/QC owners. Inspect PLUGIN.md/README projections and amend only demonstrated inaccuracies. | V-003 | Cover authoring and review plus coordinator/downstream handoffs, including misleading version language, early-milestone-only compliance, oversized later phases, technical-layer slicing, small valid phases, true prerequisites and explicit overrides. Preserve current case IDs and evidence classes. |
| V-005 | R-001–03 | Verify combined candidate and reference cohesion; complete campaign evidence/navigation and final checkpoint when execution is selected. | V-001–04 | All scenarios below have located pass/gap assessment; applicable suites, schema/package/current links and preservation checks pass or report blockers. Distinguish source checks from unrun live behavior. |

Use the existing development contract before changing coordinator guidance. No target-project design/SPEC/PLAN/layout/TASKS files need amendment in this instruction-only campaign. Keep Git, hosting projection, task identities, mandatory reviews, HIL and HANDOFF cadence unchanged.

## Authoring and QC decision evidence

For every phase, the plan owner should make its functionality outcome, scope/non-scope, preceding baseline, dependencies and applicable acceptance legible. QC should assess functional cohesion, whether independent scope can move to a subsequent bounded increment, and whether retained scope has a consequential reason. Apply the additional simplest-sensible-baseline test to Phase 1; do not stop semantic review after that phase. A final phase must also be bounded rather than a bucket for everything remaining. A compact rationale and grouped contract mapping suffice; do not require a new document or a justification row for every minor requirement.

Review full-version coverage separately from each phase's scoped exit coverage. Required checks for included behavior and previously delivered behavior remain required. A later-phase requirement must not be presented as already satisfied, but its scheduled realization must not block an otherwise complete earlier phase merely because the full SPEC describes the intended version. Genuine cross-cutting obligations and inseparable dependencies still apply where relevant.

If existing accepted strategy or task boundaries conflict with the rule, identify the affected owner and necessary amendment. Do not silently rewrite scope, move task IDs, waive a required failure or label a knowingly unresolved QC issue Ready. An actual authorized exception remains an exception, with consequences visible.

## Assessment matrix

All illustrations below are abstract and non-exhaustive. They specify source/interface assessment, not performed live-agent trials or a universal phase template.

| Scenario | Setup / contrast | Expected guidance outcome |
| --- | --- | --- |
| SC-01 | Initial version requires a useful core plus independent extensions | Full-version coverage spans bounded phases; Phase 1 defaults to the simplest sensible core |
| SC-02 | A tiny early milestone sits inside a phase containing the full version | Reject milestone-only compliance; assess and correct phase scope |
| SC-03 | Oversized Phase 1 has 3–5 well-counted delivery milestones and small tasks | In-range counts and task slicing cannot supply semantic phase acceptance |
| SC-04 | Coherent first phase naturally needs only 1–2 delivery milestones | Accept justified shape without padding or adding extensions; keep existing review units |
| SC-05 | A purported baseline runs but lacks an interaction essential to its intended use | Reject the technical-loop substitute; restore coherent core usefulness |
| SC-06 | Prerequisite is truly inseparable or avoids substantial evidenced rework | Retain justified early scope, identify the consequence and preserve relevant checks |
| SC-07 | Extension is included early solely because it is in the first version or convenient later | Inclusion/convenience does not justify enlarging the first phase |
| SC-08 | Human explicitly requires a single phase / merely describes first-version scope | Distinguish a real delivery-shape override from coverage; record actual override and consequences |
| SC-09 | Very small complete scope already is the simplest sensible product | One phase is valid; no compulsory additional phases or feature-per-phase rule |
| SC-10 | Existing product with an accepted baseline and a narrow enhancement | Plan the bounded changed outcome, preserving working behavior without greenfield replay |
| SC-11 | Feature request genuinely requires several independently useful increments | Apply proportionate phase boundaries within the delta; no compulsory full-project replan |
| SC-12 | Full intended SPEC includes later-phase capabilities | Preserve complete intended contracts with phase-specific realization/exits and eventual version coverage |
| SC-13 | TASKS review discovers an oversized accepted phase | Return strategy correction to sdd-plan and recheck readiness; do not hide a redesign in tasks |
| SC-14 | Documentation checkpoints are preapproved; no phase-shape override exists | Continue only through actual authorized gates; preapproval does not collapse phase structure |
| SC-15 | First phase completes/integrates before version completion | Truthfully report the usable subset; no claim of completed version or implicit release publication |
| SC-16 | Concern arises in a domain absent from supplied evidence | General principles govern; examples do not restrict scope or bias capability choices |
| SC-17 | Phase 1 is minimal, but a later phase groups independent remaining capabilities | Reject the oversized later phase; derive bounded coherent functionality increments with justified dependencies |
| SC-18 | Phases follow technical layers and deliver no integrated capability until the end | Reject layer-only functional slicing; bound any genuine enabling exception with evidence and its route to integrated behavior |
| SC-19 | A later bounded increment needs fewer milestones or several closely dependent capabilities | Preserve its justified coherent scope without count padding or one-phase-per-feature rules |
| SC-20 | Later phase adds functionality but regresses or cannot integrate with the preceding baseline | Require integration and regression evidence for the changed outcome before its completion; do not claim a coherent increment |

Also inspect direct sdd-plan entry, coordinator handoff, shared criteria and downstream task review together. A link existing does not prove that the corresponding guidance is selected before use.

## Verification and evidence plan

- After each action, inspect changed clauses and affected handoffs against related scenarios and report actual source locations/outcomes in REVISION-REPORT.md. Preserve the original review observations and classify findings Revised/Verified only from evidence.
- Check reference cohesion, breadth/depth balance, abstract/non-exhaustive illustration wording and absence of copied full procedures. Use one canonical owner for each normative subject.
- Run `git diff --check`, current affected Markdown/link checks and package/schema validation. Preserve closed campaign objects without reviewing them for current compatibility.
- Run contributor-prescribed `python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v` for the combined instruction/coordinator candidate.
- Ensure the declared `.github/requirements.txt` dependency is available, then run `python -m unittest discover -s .github/tests -v`. Verify the exact committed package with the existing publisher and compare repeat build bytes. Record the actual interpreter, source and results; do not assume earlier test counts.
- Validate catalog/assets if affected by assessment work. Do not add brittle prose-matching tests or treat a source contrast as an observed consumer pass.
- Inspect the complete campaign delta and relevant README/PLUGIN projections; change no unrelated artifact or historical evidence. No product version bump is planned.
- Live consumer/client behavior, hosted CI, external publication and original test-agent causality remain unverified. A live trial needs separately selected scope and isolated test facilities.

## Persistence and stopping

Current request: prepare and publish this plan plus active campaign status/index updates. Stop before source changes or execution; keep campaign 074 open and unmerged.

When execution is selected, coordinate V-001–V-005 in order, commit each action's changes with its evidence, push and verify remote containment before advancing. These are non-task revision actions, not fabricated TASKS items. Refresh HANDOFF at actual campaign finalization under existing cadence; a planning amendment needs no separate handoff-maintenance commit.

Execution results and required checks determine readiness; this plan establishes none as already passed. Subsequent integration, release or parent continuation requires its applicable actual authorization and gates.
