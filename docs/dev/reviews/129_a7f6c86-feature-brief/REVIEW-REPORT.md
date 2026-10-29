# Whole-feature workflow review

## Source and evidence boundary

Campaign 129_a7f6c86; original baseline a7f6c8604f7412d26e8b8dce26688f691fad6acb. Reviewed plugin source: 8bcfec948e67ad0760d918323a9954781a5652eb. [Review plan](REVIEW-PLAN.md) defines the human-selected greenfield-parity objective. Existing FEATURE/FEATURE_PREPARATION implementation remains intact. This review is source/handoff analysis, not a live-agent trial or authorization to execute proposed repairs.

## Coverage and findings

| Unit | State | Coverage / findings |
| --- | --- | --- |
| U-001 | Reviewed | Feature/main preparation, brief/exploration, approval/mode, document progression and QC. R-001–R-003. |
| U-002 | Pending | Implementation, tracking, verification, incorporation/archive and integration. |
| U-003 | Pending | Proactive guidance/entry composition, source scenarios and consolidated revision direction. |

| Finding | Type / priority | Disposition |
| --- | --- | --- |
| R-001 | Requested parity gap / High | Open: interactive/autodoc feature mode semantics missing. |
| R-002 | Workflow completeness gap / High | Open: no feature whole-package QC and explicit completion/checkpoint sequence. |
| R-003 | Requested parity gap / Medium | Open: feature document-stage progression/tracking policy not formalized. |

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
