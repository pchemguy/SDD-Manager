# API, model and contract design extensions

Campaign **139_91ad34d**; branch `revision/139_91ad34d-docs-design`, from/returning to main at `91ad34dc31707032ca9781675400b52ca68abd07`. Opening `7c626c59e695c21f2ac30c1fe3674155f7851f87`. [Assessment](REVIEW-REPORT.md): R-001/R-002. **Execution authorized for V-004–V-006; campaign remains open.**

## Design rules

- DECOMPOSITION explicitly defines external and cross-component internal API surfaces for libraries, packages and components: provider/consumers, operations, types and useful signatures/shapes, visibility, dependencies and state/resource ownership. External means outside the selected unit; private implementation helpers need no advance catalogue.
- Keep models, API design and contracts inline or extract cohesive documents when shared across components or independently substantial. `MODELS.md`, `API-DESIGN.md` and `CONTRACTS.md` are optional names, not required files; roots or focused children are both permitted.
- MODELS owns entities/value types, identities, relationships, representations and invariants. API design owns the structural surface. CONTRACTS owns precise call/protocol behavior, inputs/results, errors, pre/postconditions, side effects and lifecycle guarantees. SPEC owns complete system behavior and acceptance, referencing detailed definitions rather than copying them.
- Each definition has one canonical owner. The governing design/SPEC root links every selected artifact and states its scope. Material API/model/contract decisions are resolved before dependent work; permitted later refinement names its owning artifact, decision scope and prerequisite. PLAN/layout/TASKS do not independently redefine contracts.

## Task and checkpoint ownership

Main and feature preparation retain their nine tasks, IDs, order, dependencies and mode/stop rules. Optional artifacts belong to the appropriate task's proposal, QC, human approval/preapproval, accepted-state commit, evidence and issue closure. They add no task, issue, milestone, checkpoint or approval round.

| Main / feature task | Responsibility |
| --- | --- |
| DOCS-004 / FDOCS-004 | Component decomposition, explicit provided/required APIs, model design and selected model/API-design artifacts. |
| DOCS-005 / FDOCS-005 | Precise contracts and selected CONTRACTS artifacts; assess referenced models and API design against required behavior. Route structural corrections to their owner before progression. |
| DOCS-006 / FDOCS-006 | Plan API/model/contract refinement, implementation, consumer integration and verification with explicit dependencies. |
| DOCS-007 / FDOCS-007 | Allocate public headers/exports/entry points, internal implementation, schemas, tests and documentation to physical owners. |
| DOCS-008 / FDOCS-008 | Derive bounded work against the selected definitions, including consumer/contract checks and documentation; retain the existing autodoc stop. |
| DOCS-009 / FDOCS-009 | Include every selected optional artifact in whole-package consistency, traceability and readiness checks. |

Use the existing preparation record for artifact paths/owners, exact acceptance and QC evidence. Apply the same rules to scoped feature artifacts and affected main definitions; unrelated areas stay outside scope.

## Revision actions

| ID | Change | Owners / verification |
| --- | --- | --- |
| V-001 | Open campaign | Complete; published opening. |
| V-002 | Assess API-design instructions | Complete; published report `864b17d3`. |
| V-003 | Prepare this focused plan | Complete; published plan `a159611b`. |
| V-004 (verified) | Define explicit API design and flexible artifact ownership | sdd-design entry/decomposition, sdd-specify entry/specification/review; update shared boundary guidance only where needed. Check operation/type/consumer coverage and single ownership. |
| V-005 (verified) | Bind optional artifacts to the existing preparation tasks and checkpoints | Main/feature preparation, human-review/QC guidance, DOCS/FEATURE_DOCS task templates, DOCS_TRACKING JSON and preparation-record templates. Keep exactly nine tasks and the same IDs, titles, dependencies, issues and stop/reset boundaries; align affected briefs and evidence coverage. |
| V-006 (verified) | Complete downstream handoffs and rechecks | PLAN/layout, task derivation/conformance, selected feature incorporation and package QC include linked artifact owners. Align affected entry/document tables and full README. Check focused library, componentized-app and feature-delta scenarios; run affected documentation/support and projection/template contracts plus link/package checks. |

## Completion criteria

- A library's public API and internal collaboration APIs are explicit; consumers need not invent missing contracts.
- Inline and extracted artifact arrangements both have complete, nonduplicated ownership and traceability. Small projects need no extra files or layers.
- Optional artifacts receive review/acceptance and QC within their mapped DOCS/FDOCS task. All nine task identities and interactive/autodoc/multipass checkpoints remain intact.
- Deferred refinement cannot bypass a required decision or let a consumer start before its contract is ready.
- Instructions describe the intended workflow directly. Changes stay within these API/model/contract concerns; no new workflow, registry, package version or release.

V-001–V-006 are complete. V-004–V-006 were executed under the human's Execute instruction; exact source 7ac7e1f6 passes the retained package check. Publish the final evidence checkpoint, then stop with the campaign open; integration, closure and release are not selected.
