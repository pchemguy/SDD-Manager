# Whole-feature workflow review

## Source and evidence boundary

Campaign 129_a7f6c86; original baseline a7f6c8604f7412d26e8b8dce26688f691fad6acb. Reviewed plugin source: 8bcfec948e67ad0760d918323a9954781a5652eb. [Review plan](REVIEW-PLAN.md) defines the human-selected greenfield-parity objective. Existing FEATURE/FEATURE_PREPARATION implementation remains intact. This review is source/handoff analysis, not a live-agent trial or authorization to execute proposed repairs.

## Coverage and findings

| Unit | State | Coverage / findings |
| --- | --- | --- |
| U-001 | Reviewed | Feature/main preparation, brief/exploration, approval/mode, document progression and QC. R-001–R-003. |
| U-002 | Reviewed | Shared task execution/tracking/review and scoped incorporation/archive are substantial; R-004 identifies feature multi-phase integration ambiguity. |
| U-003 | Reviewed | Entry/proactive guidance and ten source scenarios assessed; consolidated four findings and proposed repair order. |

| Finding | Type / priority | Disposition |
| --- | --- | --- |
| R-001 | Requested parity gap / High | Open: interactive/autodoc feature mode semantics missing. |
| R-002 | Workflow completeness gap / High | Open: no feature whole-package QC and explicit completion/checkpoint sequence. |
| R-003 | Requested parity gap / Medium | Open: feature document-stage progression/tracking policy not formalized. |
| R-004 | Cross-owner protocol ambiguity / Medium | Open: multi-phase feature integration/continuation is less explicit than main phases. |

## U-001 findings

### R-001 — Feature modes lack a defined selection and approval contract

**Evidence:** sdd-manage/references/doc-design-modes.md, Select and retain the mode, defines interactive/onepass, autodoc/onepass and multipass/autoloop only for main preparation; it names PROJECT and DOCS-008/009. feature-preparation.md, Checkpoints and persistence, explicitly keeps those modes/cursors/tasks main-only. sdd-design/sdd-plan/sdd-tasks entries load this mode contract under fresh/resumed main preparation only.

**Consequence:** An ordinary request to prepare a feature in autodoc mode has no documented mapping from FEATURE approval to downstream preapproval, decision delegation or the final preparation stop. Generic human-document-review defaults enforce individual approvals unless explicitly overridden; the agent must improvise or fall back to interactive behavior. Multipass/reset rules cannot simply be applied by replacing filenames because their counters, issues and scope protection are tied to main preparation.

**Correction direction:** Define shared interactive/autodoc approval semantics with workflow-specific brief, record and stop mapping. FEATURE is the feature brief checkpoint; the companion retains effective mode/delegation and current scope. Explicitly decide whether multipass/autoloop is part of feature parity rather than silently importing main DOCS IDs. Keep no implicit implementation authority, technical gates and optional unchanged-document reuse.

**Objective recheck:** A feature-autodoc request clearly selects the first FEATURE approval, which later approvals are preapproved, decision authority and the pre-package-QC stop; an interactive request retains each applicable checkpoint. Mode changes/resume preserve that exact state. Confidence: high; current main-only scope is explicit, not a claim that features previously promised full mode parity.

### R-002 — Feature preparation has no explicit whole-package QC exit

**Evidence:** main-preparation.md, Final package QC, integration and checkpoint, requires sdd-verify assessment of the entire document set, a DOCS-QC-REPORT, repair/recheck, publication, document integration and a final implementation checkpoint. feature-preparation.md, Checkpoints and persistence, jumps from completed document acceptance/readiness to HANDOFF and the preparation integration gate. document-qc-gates.md provides FEATURE and SPEC/PLAN/TASKS handoffs and adjacent reports, but no whole-feature-package assessment. branch-management.md, Preparation integration gate step 2, gives main its explicit final-QC sequence while other preparation-only paths stop on design-docs.

**Consequence:** Individual feature documents can each be accepted/locally Ready without a named assessment of the combined delta against unchanged main guarantees, current implementation, physical ownership and executable work. No deterministic feature counterpart to main's final package-QC/advance boundary exists. A generic implementation request can move toward the preparation merge without an explicit whole-set readiness report.

**Correction direction:** Define feature package-QC inputs, owner/report, repair/recheck and exact completion sequence. Assess the delta plus affected main context, not a ceremonial rewrite of the whole project. Define autodoc's stop before this stage and the meaning of advancing/QC-only versus implementation authority, separately from subsequent main-document incorporation.

**Objective recheck:** After feature TASKS preparation, the workflow identifies the remaining package check and pending human boundary; dependent implementation branching cannot occur until its verified/published readiness/integration sequence is complete. Confidence: high for absence of a named feature package gate; generic verification readiness rules remain present and useful.

### R-003 — Preparation progression and tracking are only loosely parallel

**Evidence:** main-preparation.md defines initialization, seven document approvals and final QC through DOCS-001–009 with completion/persistence rules and enabled hosted lifecycle. FEATURE_PREPARATION's Minimum useful content retains a current preparation boundary, but explicitly adds no feature documentation task hierarchy or main preparation issues. workflows.md/feature preparation and human-document-review.md identify necessary documents and optional design overlays without a feature stage-completion map or an equivalent enabled preparation tracking policy.

**Consequence:** Feature agents lack a deterministic way to report which document stages are applicable/reused, pending, accepted or awaiting final QC and how requested preparation tracking is satisfied. This is a deliberate lighter current design, now a gap against the human's requested close parity; it is not evidence that nine main tasks should be copied unchanged.

**Correction direction:** Define a feature preparation stage model with applicability/reuse evidence, owner, acceptance/QC and selected stop. Decide whether a scoped feature documentation task list/hosted milestone is required for parity; if selected, separate its task definitions from FEATURE_PREPARATION's evidence and project-wide product T IDs. Do not introduce a preparatory feature README or duplicate decision/status registry.

**Objective recheck:** On initial work and resume, the coordinator can determine the next eligible document/checkpoint and any selected hosted operation, including why an unchanged architecture/layout needs no new overlay. Confidence: high for scope asymmetry; the exact tracking/task representation remains a proposed design decision.

## Sound U-001 coverage

The accepted brief pair, first FEATURE acceptance, per-document human/QC separation, exact-state decisions, proactive exploration of consequential changes, reuse of main design and optional overlays, preparation/product content separation, Git publication and pending-checkpoint continuation are explicitly supported. Feature scope remains a bounded change; no new whole-project MVP, preparatory README or legacy-format conversion is needed. These should be retained while closing parity gaps.

## U-002 findings and coverage

### R-004 — Multi-phase feature delivery lacks a complete integration mapping

**Evidence:** sdd-plan/references/delivery-plan.md, Delivery procedure and feature strategy, applies bounded phases and exit/integration evidence to existing-system changes; it explicitly does not impose one phase per feature. sdd-implement/references/range-selection.md, Phase branch segments, supplies phase-by-phase segmentation only for main TASKS. sdd-manage/references/phase-activation.md requires later-phase predecessor integration/publication, while workflows.md, Feature sequencing, creates a campaign feature branch and describes final incorporation/archive/integration. completion-and-checkpoints.md, Integrate the completed boundary, uses a generic coherent-authorized-boundary rule for features, full incorporation for a complete feature and preserves sources for narrower ranges. Git release commits must be on the actual default branch.

**Consequence:** A single-phase feature and a selected partial task range have usable generic rules, but an agent delivering a multi-phase feature must infer how a completed feature phase returns to the target, which portion of the delta/main documents is incorporated, which sources remain active and how the next phase resumes without claiming the entire campaign complete. This matters for phase-based releases and the requested greenfield-like lifecycle. It is an under-specified cross-owner mapping, not evidence that current instructions categorically forbid all intermediate feature integration.

**Correction direction:** Define the feature phase/campaign relationship, per-phase completion/integration/continuation and scope-matched document incorporation. Reuse task/milestone review, tracking and publication machinery. Preserve the complete feature's future scope and active evidence until final incorporation/archive; do not infer one phase per feature or archive after the first release. Keep the original creation-parent/return protocol and actual default-branch release placement.

**Objective recheck:** For a two-phase feature with a release after each authorized phase, both phases have an unambiguous working/receiving branch, affected document scope, retained future work, phase activation prerequisite and completion status; a next-N-task request does not integrate unfinished phase/campaign scope. Confidence: medium-high; generic boundary rules exist, but the explicit main phase mapping is not provided for features.

## Sound U-002 coverage

- TASKS/FEATURE-TASKS share one execution owner, project-wide task IDs, dependency/range selection and single-task result/evidence/checkbox persistence. Count/milestone/phase stops and pause/recovery requirements apply to features.
- Product implementation tracking is not missing for features: phase activation and backend lifecycle use the owning plan/list, eligible-phase projection/readback, issue and milestone closures, review tasks and predecessor evidence. R-003 concerns preparation tracking/progression, not this already shared implementation machinery.
- Main/feature task review, milestone/phase reports and HANDOFF boundary updates share the same completion gates. A feature parent never closes a broader main-project parent merely by name or checkbox.
- Preparation is separately merged/verified/published before dependent implementation branching. Git incorporation into the actual default baseline and later completion into the recorded creation parent are distinct transitions; active-phase parents require verified propagation.
- sdd-integrate-feature handles selected PROJECT/design/SPEC/PLAN/layout deltas and task reconciliation; task transfer requires both lists in scope and one executable owner. Document-only/narrow requests do not acquire whole-feature incorporation authority. Affected conformance is reassessed after incorporation.
- Archive preserves active inputs until their scope/acceptance/evidence disposition permits moving; FEATURE_PREPARATION remains evidence and does not become product narrative. Closed records remain frozen. This is a genuine feature-specific addition to greenfield, not a reason to maintain a separate execution discipline.
- Release publication is separately authorized and pinned to a verified default-branch release commit. No new native-platform blocker is introduced; missing target-native execution remains excluded by the existing default policy. A phase or feature merge alone neither publishes a release nor proves all target runtimes executed.

No new plugin repairs or live implementation/hosted operations were performed for U-002. Reviewed source remains 8bcfec9; only campaign evidence changes in this review unit.

## U-003 — Proactive guidance and composition

The coordinator entry and coordination.md's Proactive handoff already require relevant capabilities/prerequisites, consequential gaps, next owner, observed state, pending checkpoint and stop at entry/preparation/activation/completion. PLUGIN.md routes ordinary requests and scoped feature preparation to the coordinator/design owners. Exploration assesses the seed critically, compares credible options, recommends, distinguishes human/proposed/delegated choices and avoids irrelevant interviews. Its feature paragraph expressly explores delta/compatibility against the accepted main system. FEATURE first-brief presentation and human-document-review apply substantive scope/compatibility analysis, not a Ready-only announcement.

These are sound existing capabilities, not absent proactive guidance. The unresolved operational problem is that feature modes, stage model and package exit do not supply the same concrete destinations for this guidance as main preparation (R-001–R-003). Main mode-specific exploration resolves current-scope interactions before PROJECT and defines later delegated autoloop decisions; feature guidance has only generic explicit-delegation rules. Consequently the agent can identify a concern but lacks a feature-autodoc decision/stop policy. Correct those owners and entry projections together rather than adding another general exhortation to be proactive.

### Source scenario synthesis

| Scenario | Source assessment at 8bcfec9 | Finding / sound coverage |
| --- | --- | --- |
| Ordinary feature request, no mode | Brief first and individual necessary-document checkpoints exist; no new whole-project discovery required. | Sound interactive foundations; stage reporting needs R-003. |
| Feature explicitly requested in autodoc | Main-only mode reference does not define feature brief/later-approval mapping or final stop. | R-001. |
| Human approves FEATURE then says continue | With no scoped later preapproval, next necessary document remains interactive. Brief acceptance alone is not broad future approval. | Sound current acceptance rule; feature autodoc mapping missing. |
| Existing architecture/layout remains sufficient | Reuse and optional overlay rules exist; stage applicability/reuse evidence is not normalized. | Sound scope principle; R-003 for explicit stage record. |
| Terse capability seed with material interactions | Exploration must assess delta/compatibility and offer context-based choices before relying on invented intent. | Sound proactive rule; no live behavior trial performed. |
| Delegated choice versus unapproved assumption | Generic provenance/preapproval distinctions exist; feature mode-specific delegation is absent. | Sound basis; R-001. |
| All individual feature documents accepted | No feature whole-package QC/report and preimplementation completion protocol mirrors main. | R-002. |
| Requested tracking includes preparation | Implementation phase objects are defined; feature preparation stage/object lifecycle is not. | R-003, distinct from working implementation tracking. |
| Two-phase feature with a release after each | Generic coherent-boundary gates exist; partial phase incorporation, receiving branch and next-phase continuation need an explicit feature mapping. | R-004. |
| Partial incorporation, interrupted archive or read-only review | Selected-target rules, source retention, one task owner, evidence-based continuation and frozen history are defined; review does not authorize repairs. | Sound feature-specific layer. |

No source-scenario row claims actual consumer execution, installed-client activation or observed compliance. Four canonical findings remain Open; no extra finding is invented for already covered proactive/implementation rules.

## Proposed target composition

Use one shared preparation discipline with main/feature mappings, rather than copying the entire greenfield procedure into another divergent workflow:

| Shared concern | Main mapping | Feature mapping / deliberate difference |
| --- | --- | --- |
| Brief and control record | PROJECT + DOCS_PREPARATION | FEATURE + FEATURE_PREPARATION; compare the requested delta with accepted main context. |
| Preparation progression | Document stages through TASKS, then package QC | Equivalent applicable stages through FEATURE-TASKS, with explicit reuse/optional-overlay outcomes, then feature package QC. |
| Interactive | Applicable document acceptance checkpoints | Same checkpoint discipline; do not regenerate unchanged main documents. |
| Autodoc | First brief acceptance, scoped later preapproval, stop before package QC | Equivalent FEATURE-based policy, explicit delegated-decision boundary and stop before feature package QC. |
| Multipass/autoloop | Existing scope/reset/strict-versus-flexible policy | Decide explicit support/mapping; protect earlier delivered/accepted ranges and retain decisions without importing main-specific object IDs. |
| Preparation progress/tracking | Main preparation tasks and enabled hosted objects | Define feature applicability/task/object policy, retaining separation between task checkoffs and evidence; no preparatory README. |
| Delivery | Shared task/phase tests, reviews, reports, tracking and Git discipline | Same execution discipline against current system, with explicit feature phase/campaign mapping. |
| Incorporation/archive | No feature delta archive | Scope-matched integration into main product documents and unique task ownership; final feature archive retains evidence only when eligible. |

### Proposed repair sequence (not executed)

1. **R-001/R-003:** Define the shared workflow-specific stage/mode model, FEATURE first approval, exact later preapproval/delegation, applicability/reuse reporting and preparation progress/tracking choice. Keep runtime context and source mapping authoritative in one place. Decide feature multipass/autoloop coverage and whether preparation task checkoffs need a separate task-only owner; do not hide these decisions in an implementation patch.
2. **R-002:** Define final feature package QC/report, impacted-main regression/consistency assessment, repair/recheck, explicit advance/implementation checkpoint and preparation merge/publication sequence. Match autodoc's stop to that boundary.
3. **R-004:** Define multi-phase feature integration/continuation and phase-matched main-document incorporation while future feature sources remain active; distinguish phase release from final campaign archive.
4. Reconcile PLUGIN/coordinator/focused-owner entry guidance, exact record responsibilities, source contract/map and relevant tracking helpers/tests. Verify positive, pending/preapproved, narrow-scope, mode-switch, resume and multi-phase cases. Add live-agent evidence only through an explicitly scoped trial, retaining its limits.

## Review outcome and limits

U-001–U-003 are complete. Main-only preparation semantics are a substantial parity gap despite the now-defined brief pair; execution, tracking, review/persistence and incorporation foundations are largely reusable. Four findings are proposed for revision, not implemented or accepted by this review. The requested goal supports largely parallel preparation/checkpoint semantics while retaining feature-specific changed scope and incorporation, optional unchanged design reuse and no whole-project bootstrap replay.

Verification for this review is source inspection and handoff/scenario analysis, campaign link/scope checks and whitespace. Prior 189 support/publisher passes belong to the earlier brief-pair implementation and are not fresh behavioral evidence for these proposals. Plugin source stays byte-identical to 8bcfec9; the example/demo repository and closed campaigns remain unchanged. Publish/read back this final review checkpoint and return with campaign 129 open; no repair execution, main integration or release selected.
