# Library, package and component API-design assessment

## Scope and evidence

Campaign **139_91ad34d**. Reviewed source: `7c626c59e695c21f2ac30c1fe3674155f7851f87`; starting baseline: `91ad34dc31707032ca9781675400b52ca68abd07`. The human requests assessment of current library/package/component design instructions and proposes explicit external/internal APIs at decomposition with appropriate downstream refinement.

This is one focused source-review unit, not a repair or implementation request. Assessed canonical owners and consequential handoffs below; no installed-client, consumer trial, generated library or runtime execution. Prior closed packages excluded. Current instructions remain unchanged.

## Existing instruction coverage

| Concern | Current instruction / assessment |
| --- | --- |
| Logical API boundaries | [Decomposition](../../../../.agents/plugins/sdd-manager/skills/sdd-design/references/decomposition.md#document-ownership) requires provided/required interfaces, responsibilities, dependencies, state ownership and verification seams. It explicitly permits provisional interfaces sufficient to test design coherence. The design entry calls them provisional/design-level interfaces. |
| Consumer usability | [Modularity](../../../../.agents/plugins/sdd-manager/skills/sdd-conventions/references/modularity.md) requires consumers to understand a unit without reading internals, with stated inputs, invariants and relevant errors. This is already a useful API-design principle. |
| Precise contracts | [SPEC](../../../../.agents/plugins/sdd-manager/skills/sdd-specify/references/system-specification.md#design-traceability) owns precise success/failure contracts and acceptance; its focused children can own public interfaces, protocols and component contracts, including material resource/lifecycle/data/compatibility obligations. Feature SPEC explicitly includes changed public and internal contracts. |
| Delivery | [PLAN](../../../../.agents/plugins/sdd-manager/skills/sdd-plan/references/delivery-plan.md) maps accepted contracts to bounded increments, dependencies and integration/verification exits. Its entry sends unresolved behavioral/design choices upstream rather than settling them in PLAN. |
| Physical API allocation | [Layout](../../../../.agents/plugins/sdd-manager/skills/sdd-plan/references/physical-layout.md#establish-ownership) assigns public interfaces, implementation, tests, packaging and documentation to physical owners. It explicitly avoids duplicating interfaces from DECOMPOSITION or behavior from SPEC. |
| Executable work | [Task derivation](../../../../.agents/plugins/sdd-manager/skills/sdd-tasks/references/task-derivation.md#form-tasks) traces components/contracts/paths into bounded tasks, allows coordinated interface/consumer work, and returns unresolved choices to their owning document. TASKS is not a new API-contract authority. |
| Checks and documentation | [Testing strategy](../../../../.agents/plugins/sdd-manager/skills/sdd-tdd/references/testing-strategy.md#select-scenarios-and-levels) already covers public API/installation entry points and real component collaboration when relevant. [API documentation](../../../../.agents/plugins/sdd-manager/skills/sdd-docs/references/in-code-documentation.md#module-and-api-coverage) covers public functions/classes and consequential internal interfaces. The gap is not absence of API tests or documentation instructions. |
| Readiness | [Document QC](../../../../.agents/plugins/sdd-manager/skills/sdd-conventions/references/development-document-qc.md#preparation-gates) and the specification/plan/task review owners check contract/design conformance before dependent work. They do not explicitly enumerate an API-surface completeness/refinement check for libraries and packages. |

## Findings

| ID | Type | Priority | Confidence | Disposition |
| --- | --- | --- | --- | --- |
| R-001 | Improvement recommendation: explicit API-surface design | Medium | High | Open; not accepted or implemented |
| R-002 | Improvement recommendation: API refinement ownership and readiness | Medium | High | Open; not accepted or implemented |

### R-001 — Explicit external/internal API definitions are not a distinct decomposition deliverable

**Evidence:** decomposition's Document ownership section requires provided/required interfaces at the level needed to assess design, and expressly allows provisional shape. It does not expressly classify the consumer-facing library/package surface separately from internal component collaboration, require a complete inventory of significant exposed operations/types, or distinguish those interfaces from private implementation helpers.

**Consequence:** a component-responsibility diagram with loosely described interactions can satisfy the generic wording while leaving a library's actual usable surface unclear. This is insufficiently explicit for the human's proposed stronger design discipline; it is not evidence that the current policy requires no interfaces or that existing projects violate it.

**Proposed correction:** strengthen the decomposition owner and its entry to identify the relevant library/package/component boundaries; external consumers and internal collaborators; provided/required operations and types at useful design precision; visibility, ownership and important collaboration/lifecycle constraints. Include concrete API shape or representative signatures when needed for independent consumer design. Define external relative to the selected boundary: an in-process library API is external to that library even within the same repository. Internal APIs here mean consequential cross-component contracts, not every private function. Retain explicit routes to SPEC for precise semantics and safe deferrals; do not require boilerplate layers, separate API files or speculative APIs.

**Owners / dependent projections:** sdd-design decomposition/entry and relevant shared modularity guidance; affected document summaries only where their meaning changes.

**Recheck:** source guidance should lead a library design to identify its public surface and required collaborator APIs; a componentized app should identify internal collaboration boundaries; a small cohesive implementation should not be forced to specify private helpers or create extra modules. Every significant interface has a provider, consumer/use, design shape and canonical contract route, or an explicit applicable omission/deferral rationale.

### R-002 — Further API design needs a clearer handoff without competing contract owners

**Evidence:** SPEC's Design traceability settles precise behavior; PLAN schedules delivery; physical layout prohibits repeating design interfaces; task derivation requires accepted inputs and returns unresolved choices upstream. The chain is coherent, but no explicit instruction explains which API details must be settled before downstream consumption, which refinements may safely remain deferred, and how planned refinement stays attached to the owning design/SPEC rather than becoming a new contract inside PLAN/layout/TASKS.

**Consequence:** interpreting further design as independent API definition in each later document would conflict with current ownership. Conversely, treating provisional decomposition as adequate forever could leave an implementer or consumer inventing significant call/data/error semantics. A separate mandatory API document or blanket design-first phase would add unnecessary ceremony.

**Proposed correction:** make the handoff explicit through the existing owners and QC. DECOMPOSITION owns structural API design, refined in its existing root/children; SPEC owns canonical observable contracts. PLAN schedules needed refinement, implementation and verification with appropriate dependencies; layout assigns public entry points/headers/exports, internals, tests and docs when applicable; TASKS derives bounded work and evidence from those decisions. Material unresolved API decisions return to design/SPEC before dependent consumers rely on them. Explicitly delegated non-contract details may be refined during implementation. Any genuinely planned later design work must identify its owning artifact, allowed decision scope and dependency/readiness boundary; it must not quietly invent requirements in a task. No fixed extra stage/report or one task per API required.

**Owners:** decomposition and SPEC handoff, PLAN/layout, task derivation/conformance and existing preparation QC. Main/feature variants retain the same ownership; no feature overlay is required when existing design suffices.

**Recheck:** trace one public API and one internal collaboration API through design → SPEC → PLAN → layout → TASKS → consumer/contract checks. Verify one canonical structural/behavioral owner, explicit dependencies and no hidden decision delegated to consumers. Also verify that private helpers and harmless implementation choices need no premature specification.

## Recommended allocation

| Stage | API responsibility |
| --- | --- |
| ARCHITECTURE | Library/package/component boundaries, consumers and permitted dependency direction. |
| DECOMPOSITION | Explicit public and cross-component internal API surface, provided/required operations/types, collaboration and initial concrete shape as needed. |
| SPEC | Precise semantics: inputs/results, failures, state/resource ownership, lifecycle, compatibility and other material guarantees; objective acceptance. |
| PLAN | Delivery/refinement order, necessary prerequisites, consumer integration and verification exits. |
| layout | Physical homes and visibility for entry points/headers/exports, internal implementation, tests and docs. |
| TASKS | Bounded refinement/implementation/integration/test/documentation work with dependencies and links to the canonical design/contracts. |

The human's direction is sound with SPEC explicitly retained in the chain. Later stages should carry design into deliverable work, not independently redefine it. Exact signature and representation detail should match the risk and consumer needs; no mandate to finalize every private implementation choice before coding.

## Outcome and next boundary

Focused assessment complete: two proposed improvements, zero asserted violations of an existing explicit API-inventory mandate. Recommendations are not accepted source changes. No workflow/package/runtime/version edits, API prototype or release. Campaign remains open; a subsequent accepted revision can plan the bounded canonical-owner and QC changes. Checks: located source inspection, current report links, scoped diff/closed-record preservation and whitespace only; runtime suites are unnecessary for report-only work.
