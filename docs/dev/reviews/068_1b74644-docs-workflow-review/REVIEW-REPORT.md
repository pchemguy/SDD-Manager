# Documentation workflow comprehensive review

## Baseline and state

- Campaign: `068_1b74644`.
- Starting/reviewed source: `1b74644cb0b97e074cc407086be13b5597620b80`.
- [Review plan](REVIEW-PLAN.md); [source inventory](SOURCE-INVENTORY.md).
- State: Open; review units pending.
- Evidence boundary: current source inspection and local structural/support/publisher execution; no live acceptance, source repairs or workflow deployment.

## Coverage

| Unit | State | Findings | Evidence |
| --- | --- | --- | --- |
| U-001 | Reviewed | None | Templates/bootstrap/discovery |
| U-002 | Reviewed | R-001 | Authoring/acceptance/QC |
| U-003 | Reviewed | R-002 | Tracking/backend |
| U-004 | Reviewed | R-003, R-004 | Git/recovery |
| U-005 | Pending | None allocated | Entry/README/composition |
| U-006 | Pending | None allocated | Package/tooling/acceptance coverage |

## Findings

No findings allocated before inspection. Pending units are not passing coverage.

## U-001 — Templates, bootstrap and discovery

Read all three packaged templates/protocols, main-preparation, repository-bootstrap, agent-orientation and the orientation entry. Cross-read the direct authoring-entry prerequisites for the first handoff. Source composition is coherent: main-preparation owns state transitions; the task asset supplies the fixed nine units; AGENTS exposes durable project obligations; discovery has its own read-only scope and chat report.

No blocking finding allocated in this unit. Verified in source: complete four-file classification precedes copies; existing bytes are preserved; missing assets come from the pinned package; DOCS-001 completion and enabled issue closure precede the mixed-state pause; none/all present adds no pause; original presence/stop evidence survives resume; task-list creation lives in bootstrap rather than its own task; later project navigation maintenance has a separate owner. The protocol's `Coordintator` report label is a minor spelling defect, retained as an editorial observation rather than a workflow blocker.

Fresh/partial/all-present, existing list and interrupted-copy contrasts were source walkthroughs only, not observed consumer executions or 16 passing runs. Template tracking-policy timing is assessed with selection/backend interfaces in U-003; no plugin-wide default change is proposed here.

## U-002 — First approval, owner handoffs and QC

Read all selected owner entries, human-document review, document-QC gates, shared QC policy and reporting procedures. First-approval semantics are consistent across the main procedure, templates and composer: proposals leave DOCS tasks unchecked; first approval/explicit preapproval enables the approved-state/checked-task commit; publication precedes issue closure; later revisions retain the historical completion while current readiness is assessed separately. These first-approval procedures explicitly exclude the implementation T-task audit; the generic coordinator/Git callers are assessed separately in U-004. PLAN and layout remain separate with strategy-scoped versus combined QC; final package review has its own output and coordinator persistence owner.

### R-001 — Remaining checkpoint reminders omit the preapproval exception

- **Type/priority/status:** Instruction-consistency issue; Medium; Open. Confidence high from the located text; actual model behavior is untested.
- **Locations:** `skills/sdd-manage/references/document-qc-gates.md`, “Human acceptance alongside QC”; `repository-bootstrap.md`, “Human review at startup”. Canonical `human-document-review.md`, “Future-checkpoint preapproval”, and direct document-owner entries explicitly support covered checkpoints without another pause.
- **Observation:** The former reminder still says each necessary new proposal pauses; the bootstrap reminder still says to pause at every created root. The linked canonical policy provides the exception, but these locally unconditional imperatives require the reader to reconcile it rather than state the applicable condition. A model following the last-loaded reminder can solicit approval despite explicit scoped preapproval.
- **Source contrast:** Human explicitly preapproves remaining PLAN/layout checkpoints; owner loads shared QC at the strategy/layout handoff. Canonical policy permits progression after QC/reporting, while the local reminder independently orders a pause. This is a source ambiguity, not an observed failed consumer run.
- **Bounded proposal/owner:** In an accepted future revision, have the coordinator’s two reminders explicitly preserve applicable future-checkpoint preapproval. Keep their QC/persistence obligations and normal human stops; do not broaden blanket authorization or change unrelated workflow policy.
- **Objective recheck:** Trace covered, absent, conditional and revoked preapproval through bootstrap, owner entry and QC handoff. The reminders agree on when to pause while all technical/publication gates remain.

No additional finding allocated for report identity, one-root/child scope, document versus implementation task ownership or authoring/review authority. Minor repeated reminders are justified at consequential handoffs; the preserved shared AGENTS tracking/recovery paragraphs are intentional requirements, not proposed deletions.

## U-003 — Tracking and hosted lifecycle

Read all nine selected tracking/backend artifacts and the consequential credential-save and hosting-token procedures (two adjacent inputs added to the inventory). Main preparation is explicitly routed separately from implementation projection: no product PLAN/TASKS or Phase 0 is required; native milestone and exact issue/task/scope markers have complete lookup/readback and uncertain-write handling. First-approval issues remain closed through later revisions. Final QC issue publication precedes explicit docs integration, which precedes native milestone closure. Foreign objects and ambiguous identities are preserved.

### R-002 — Define credential recovery before the hosted pre-write gate

- **Type/priority/status:** Procedure-interface gap; Medium; Open. Confidence high in the conflicting sequence; an actual failed consumer run is not claimed.
- **Locations:** `skills/sdd-manage/references/main-preparation.md`, “Establish preparation before repository writes”, step 3; `credentials.md`, “Find, request, and save”, steps 2–4; `skills/sdd-conventions/references/hosting-tokens.md`, “Exclusion/Persistence”.
- **Observation:** Enabled docs projection must finish before any repository modification, explicitly including credential/ignore-file writes. The general recovery path first requires creating/updating root .gitignore and saving/reusing the conventional local token. Main preparation permits an external temporary helper but does not explicitly join that exception to the numbered save/recovery protocol or say when required durable persistence resumes. Direct forge use separately permits transient protected consumption, so this is a missing coordinated path, not proof authentication is technically impossible.
- **Source contrast:** Fresh repository, enabled docs tracking, unavailable API authentication and a newly supplied suitable token; no root ignore/token file exists. Following the recovery sequence writes before projection; obeying only the pre-write gate can appear to block the very authentication needed for projection.
- **Bounded proposal/owner:** Document the narrowly scoped main-preparation handoff: consume a suitable supplied token through an existing protected transient client channel (or return its actual facility blocker), finish/read back projection, then perform permitted durable storage/ignore updates. Keep credential values out of helper source/arguments/evidence and retain the existing no-write gate. No global tracking default or unrelated credential redesign is proposed.
- **Objective recheck:** Source trace or controlled isolated trial covers existing authenticated access, supplied token with absent ignore file, unsupported protected transfer and interrupted storage. No target file/ref is modified before full docs projection; actual persistence is neither skipped silently nor claimed early.

The AGENTS template's GitHub default is a **project instruction**, not a new plugin-wide default. Existing user choices remain controlling. Before AGENTS exists, canonical selection still uses the request/current project context; do not interpret the README note as authority to bypass that selection or retrospectively claim pre-write projection. This timing distinction is recorded as a review consideration, not a proposal to restore the rejected global default.

No further finding allocated for native milestones, nine-issue cardinality, marker uniqueness, phase isolation, completion ordering or idempotent replay. Those claims remain source-assessed; actual GitHub/consumer effects are unrun.

## U-004 — Git integration and continuity

Read the coordinator entry, branch-management, Git protocol, coordination, workflow catalog/examples and shared identity convention. Added the implementation task-contract/audit/recovery interface to verify the generic caller's effect. Explicit merge/publication, actual default-branch selection, already-integrated containment, pending merge/push recovery and the distinction between original initialization evidence and current presence are preserved. No additional Git automation or history rewriting is needed.

### R-003 — Generic task gates still route DOCS work to implementation audits

- **Type/priority/status:** Instruction-consistency issue; Medium; Open. High confidence in the text; no observed consumer failure.
- **Locations:** `skills/sdd-manage/SKILL.md`, “Shared gates / Task closure”; `references/git-workflows.md`, “Work and prepare the boundary”; compared with `references/main-preparation.md`, “Document tasks through first approval”, and the linked `sdd-implement/references/completion-and-checkpoints.md` task contract/audit.
- **Observation:** The coordinator orders implementation-owned closure/audit for “task-list work”; the Git gate requires that audit whenever executable tasks govern integration. DOCS_TASKS is now a real task list. The specific main-preparation procedure explicitly forbids routing DOCS tasks through the T-task audit, but neither generic caller identifies that separate owner. The implementation audit targets TASKS/FEATURE-TASKS and its own partial-checkpoint/composition rules; it does not implement the DOCS first-approval protocol.
- **Source contrast:** A document proposal is published before human review; approval later produces the required checked DOCS task and decision evidence while retaining unchanged accepted document bytes. The DOCS owner permits this. Applying the generic implementation audit can demand implementation ownership or misclassify the earlier proposal as result-first persistence requiring a historical exception. The specific exception can resolve the conflict, but the caller currently leaves that reconciliation to the agent.
- **Bounded proposal/owner:** Qualify the coordinator and Git callers by owning list/workflow. Route DOCS first approvals and package QC to main-preparation; keep implementation audit enforcement for its actual owning TASKS/FEATURE-TASKS. Do not remove either persistence contract or add fabricated T IDs to documentation.
- **Objective recheck:** Trace fresh and resumed DOCS completion, unchanged approved proposals, DOCS-009 integration and ordinary implementation task integration through the same coordinator/Git gates. Each reaches its correct owner; implementation composition violations remain blocked.

### R-004 — Delivery handoff retains the old preparation-only stop

- **Type/priority/status:** Workflow-boundary inconsistency; Medium; Open. High source confidence; live effect untested.
- **Locations:** `skills/sdd-manage/references/workflows.md`, “Delivery strategy handoff”, first paragraph; contrast the same module's “Prepare initial development” row, `branch-management.md`, “Preparation integration gate”, step 2, and main-preparation's completion sequence.
- **Observation:** The delivery handoff still says unconditionally, “Preparation-only stops on design-docs.” Completed main preparation now includes DOCS-009, published explicit docs integration and docs-main closure before its final preimplementation checkpoint, even without implementation authority. Other preparation-only paths and explicitly earlier/unmerged stops retain their existing boundaries. The handoff omits this main-specific distinction.
- **Source contrast:** Human requests complete main documentation preparation without implementation. Following the new main operation completes published integration and milestone closure; following the later delivery-handoff instruction can leave both unfinished on design-docs.
- **Bounded proposal/owner:** Align this coordinator handoff with the established main exception and other preparation-only boundaries; link the canonical completion procedure rather than reproduce its steps. Preserve explicit earlier/no-merge/local-only instructions and the separate implementation grant.
- **Objective recheck:** Compare completed main preparation-only, an early document stop, feature preparation-only, an explicit unmerged stop and preparation plus an authorized implementation range. All loaded summaries agree on the actual integration and human stop.

Generic implementation, feature and campaign examples remain valid within their stated scope. The updated dedicated main-preparation examples correctly include first approvals, mixed-state stopping, package QC and integration. No repair has been made under review authority.
