# PLUGIN-CONTRACT critical review

Campaign **056_6a91259**; [review plan](REVIEW-PLAN.md). Reviewed source: `9aeeb01c4ff45220421414a532259df2cb8a6a36`. Target: [PLUGIN-CONTRACT.md](../../PLUGIN-CONTRACT.md). State: **Review complete; R-001 through R-008 accepted and source-remediated**.

## Assessment

The contract now gives a coherent architectural rationale and a useful responsibility inventory. It correctly treats PLUGIN.md as a projection of canonical skills, emphasizes progressive loading and preserves ordinary-request routing, human checkpoints, publication, tracking and continuity. The Tetris/Calculator examples distinguish several consequential routing cases.

It is stronger as an explanation of intent than as a tool for developing PLUGIN.md. It does not yet specify the SDD Manager coverage baseline, provide a composition model, or turn its concerns into a repeatable source-and-guidance assessment. Its central unresolved tension is how much operational detail belongs in a projection: the responsibilities can demand a second coordinator manual, while the review concerns ask for concision.

Preserve the accepted Scope and motivation. Add the missing development guidance after it; do not expand that section into a tutorial or repeat canonical execution procedures in the contract.

## Coverage and evidence

Inspected the complete contract and current packaged PLUGIN.md; relevant coordinator entry, workflow selection/core/operation catalog and examples; sdd-orient authority; source contributor navigation/capability map; release publisher PACKAGE_PATHS; active campaign records. Used the technical-writing assistant's composition and software-documentation guidance. Review locations below refer to the pinned contract baseline, not later line numbers.

No substantive defect found in the skill/module/plugin hierarchy, distribution-only versus integrated-plugin distinction, optional general coordinator architecture, main-versus-feature starting-state distinction, separation of static versus model evidence, or decision to retain assessment prompts in the source-only contract. The existing responsibility grouping is useful and should remain.

Eight findings follow: seven development/composition gaps or recommendations and one concrete wording ambiguity. None establishes an observed consumer failure or a defect in all of the current PLUGIN.md. Confidence in the located source observations is high; model effectiveness remains unobserved.

## Findings

### R-001 — The contract's own role and SDD Manager applicability arrive indirectly

**Priority: medium. Location:** title, Scope and motivation, Responsibilities opening, and canonical-ownership concern (lines 1–22, 50–54). **Type:** development-context gap.

The opening explains modular architecture generally. It never directly says that this file is a source-only authoring/review contract for the packaged SDD Manager entry. The generic optional coordinator discussion also never transitions to this plugin's actual coordinator, `sdd-manage`. Readers must infer the document's role from contributor navigation and later concerns.

**Propose:** after the accepted first section, add a short Purpose and use section identifying human maintainers and development agents, the source-only contract versus packaged entry, the concrete coordinator, and how Responsibilities, composition guidance and assessment cases support editing. Put the non-standard-entry constraint here so it informs development from the outset. Do not present PLUGIN.md as a standardized discoverable entry.

**Recheck:** a reader arriving directly at this file can identify its subject, users, source/package boundary and canonical coordinator without consulting prior conversation or external navigation.

### R-002 — Responsibility wording can produce excessive detail

**Priority: high. Location:** Composite workflow definitions and operational requirements (lines 31–46), contrasted with lines 52–58. **Type:** contract ambiguity.

“Define each workflow's purpose, entry conditions, stages, dependencies, participating skills, outputs and completion boundary” can be read as requiring a complete specification of every workflow in PLUGIN.md. Detailed handoff-state and hosted lifecycle inventories compound that reading. The later instruction to summarize canonical definitions does not establish a usable depth boundary.

**Propose:** retain the responsibility inventory but distinguish essential entry guidance from deferred procedures. PLUGIN.md should expose workflow purpose/trigger, principal stages/owners and consequential output/checkpoint/stop distinctions. Detailed task eligibility, handoff payloads, recovery algorithms and provider reconciliation belong behind owner links. Repeat a rule where it prevents a consequential entry or stopping error; collapse repetition that merely restates a procedure.

**Recheck:** each proposed paragraph or table row has a clear routing, loading or boundary purpose. Readers can reach omitted procedures, while the entry itself exposes obligations that must be noticed before the handoff. No fixed word budget is required.

### R-003 — The responsibility inventory lacks a concrete coverage baseline

**Priority: high. Location:** Responsibilities (lines 20–46). **Type:** development-guidance gap.

The inventory says what categories to cover but not which SDD Manager concepts make that coverage complete. It does not name the three core workflows, steering as a revision variant, main as whole-project scope, the preparation artifact chain, PROJECT's brief role, or the principal independent operations. Some appear only inside examples; examples are explicitly not additional requirements. A future rewrite could satisfy the broad bullets while removing essential distinctions.

**Propose:** add a compact SDD Manager coverage/source map: coordinator/selection; main, feature and revision with steering; preparation artifacts and entry-at-established-stage behavior; bounded implementation; standalone review/verification, accepted feature incorporation, hosted synchronization and release operations; prominent cross-cutting checkpoints/publication/tracking/continuity. Link canonical owners, including the PROJECT brief contract. Identify representative sources rather than duplicate a second fifteen-skill catalog or every procedure.

**Recheck:** each responsibility has identifiable SDD Manager coverage and a canonical source. The map separates purposes, variants, stages and independent operations; it does not turn greenfield/brownfield into compulsory routing categories.

### R-004 — No proposed composition makes the contract actionable for document structure

**Priority: medium. Location:** transition from Responsibilities to Review concerns (lines 46–48). **Type:** composition recommendation.

The current grouping organizes this contract, but it gives no guidance for organizing PLUGIN.md itself. Authors still must independently decide where entry/loading, request selection, prominent obligations, skill routing, composites and continuity belong. The document therefore cannot yet support a structural review beyond counting topics.

**Propose:** add a Recommended PLUGIN.md organization section with a compact ordered outline and a purpose for each group: identity/coordinator/loading; request/context/selection; prominent checkpoints and publication plus tracking; skill routing; composite summaries; branch/integration/continuity and shared record conventions. Allow sections to merge when their decision point is shared. Judge order by what must be known before routing or execution, not by exact heading names.

**Recheck:** a maintainer can draft or restructure the entry from the outline without inventing its information architecture. High-consequence obligations are prominent rather than buried inside composites. The outline does not force all responsibilities into independent sections.

### R-005 — Canonical ownership has no corresponding change/review method

**Priority: medium. Location:** canonical-ownership concern (lines 50–54). **Type:** maintenance gap.

The contract requires sources and warns about drift, but does not explain how to review an entry change or a changed skill contract. There is no explicit distinction between a new capability/behavior decision and an editorial change to its projection, nor a bounded check for changed summaries and links.

**Propose:** add a short development/review method: identify the affected canonical owner; establish or update substantive guidance there under the accepted scope; revise the projection and relevant routing/composites; recheck owner agreement, affected links/package accessibility and selected scenarios; report source inspection and model evidence separately. If ownership or behavior is unresolved, record the decision needed rather than silently defining it in PLUGIN.md. Existing contributor verification instructions remain the command owner.

**Recheck:** the method prevents PLUGIN-only operational rules and identifies which summaries/cases to revisit after a skill change. It introduces no mandatory new registry, duplicate test harness or per-edit full acceptance run.

### R-006 — Assessment cases are useful examples but not sufficiently specified evidence

**Priority: high. Location:** assessment instructions and table (lines 70–87). **Type:** assessment gap.

Contexts are abbreviated. “Accepted calculator task list” does not establish whether the first milestone completes the phase; the expected no-integration result assumes it does not. “Pending work and publication state available” leaves materially different interruption states unspecified. The steering case does not pin the existing locking policy. Some expected results demand knowledge available only after progressive loading. There are no stable case identities or simple outcome categories to retain comparable observations.

**Propose:** keep prompt examples in this file, but identify cases and supply only the context that determines the decision: accepted inputs/pending decisions, active stage/range, phase-completion relation, relevant branch/publication state and tracking choice. State expected entry decision, required discovery and stop separately from downstream execution expectations. Accept justified alternatives or clarification when context is insufficient. Retain source/model revision, supplied context, observed routing/loading/report/stop and pass/gap/blocked/unrun results in existing evidence.

**Recheck:** two reviewers can apply the same case without inventing different starting states. A valid routing decision is not failed because it has not yet executed every downstream stage. Static coverage is not labeled model success; a trial starting with PLUGIN.md is not evidence of automatic host discovery.

### R-007 — Negative and comparative coverage is too implicit

**Priority: medium. Location:** cases and closing assessment sentence (lines 76–87). **Type:** additional-content recommendation.

The set covers ordinary positive routing well, but “Across applicable cases” and “Test paraphrases and changed project state” do not define the most important negative contrasts. In particular, requested tracking lacks a concrete case; highlights-only is only mentioned inside the release-message outcome. No case checks a pending document approval, an unpushed checkpoint, unavailable required owner, or mutation outside Git. The non-standard-entry concern also has no assessment of access through standard skill entries without PLUGIN.md.

**Propose:** add a small set of contrasting cases: assessment-only steering versus commanded amendment; requested tracking with missing associations versus no tracking request; pending human acceptance or unpushed owned commit; explicit highlights-only versus complete release message; unavailable required skill; non-Git discussion versus attempted mutation. Add a separate canonical-access check starting through `sdd-manage` without PLUGIN.md. These may be variants of current cases; avoid expanding the contract into a full product acceptance catalog.

**Recheck:** cases assess correct blocking/clarification as well as correct action, preserve narrow requests and demonstrate that essential instructions remain reachable without the non-standard entry. No observed reliability claim follows until selected trials are run.

### R-008 — “Preparation must not silently become publication” conflates release and Git effects

**Priority: medium. Location:** Continuity and scope preservation, final sentence (line 66). **Type:** concrete wording ambiguity.

“Publication” elsewhere in this file includes required push/readback of preparation commits. Here it apparently means hosted release publication. The wording can therefore suggest that preparation should stop before its required Git publication.

**Propose:** qualify the boundary as release-message/package preparation versus tagging or hosted release publication. Preserve mandatory publication of workflow-owned preparation commits and explicit human exceptions.

**Recheck:** the stopping rule cannot be read as suppressing required Git pushes, and preparing release material does not authorize tagging or a hosted release.

## Proposed organization of the contract

Keep one document; its two uses complement each other when separated by purpose:

1. **Scope and motivation:** preserve the accepted architectural explanation.
2. **Purpose and use:** identify this source contract, its readers, SDD Manager's coordinator and the non-standard-entry boundary.
3. **Responsibilities and canonical coverage:** retain the three groups; add a concise source map and explicit summary/procedure boundary.
4. **Recommended PLUGIN.md organization:** give an adaptable order and section jobs.
5. **Development and review:** explain source-first changes and organize concerns around source fidelity, routing sufficiency, prominence, loading/accessibility and continuity/scope.
6. **Guidance assessment cases:** keep contextual prompts here, with the minimal repeatable context and evidence method.

Responsibilities state what the entry must communicate; review concerns state how to judge whether it does so effectively. That distinction justifies some shared topics. Avoid restating the entire responsibility list in each concern or converting every group into another checklist.

## Additional review concerns worth retaining

- **Prominence:** obligations needed before action must be visible at that decision point; correct text buried in a composite is insufficient.
- **Progressive-discovery completeness:** links identify the correct owner and enough instructions to select the next module; unavailable owners, excluded package paths and ambiguous handoffs are reportable gaps.
- **Change resilience:** revised canonical behavior has corresponding summaries and selected cases checked; unneeded repetition does not multiply maintenance obligations.

These complement the existing four concerns. Group them under existing headings where practical rather than automatically adding three more sections.

## Proposed revision order and status

First resolve purpose/ownership/depth (R-001/R-002), then add concrete coverage and composition guidance (R-003/R-004), then the bounded development method (R-005), and finally refine assessment contexts/variants (R-006/R-007). Correct R-008 with the same wording revision. Preserve Scope and motivation throughout. No execution plan or accepted finding disposition is inferred from this review request.

Report links, Markdown spacing, reviewed-source preservation and unchanged packaged instructions checked. No runtime suites rerun for review-only records. No model trial, client discovery test or hosted effect performed. Review records are committed/pushed under campaign policy; the contract remains unchanged and campaign remains open and unmerged.

## Subsequent disposition

The human accepted planning/execution of the proposed revisions while keeping the campaign open. V-004 in the [revision report](REVISION-REPORT.md) records all eight source rechecks and naming assessment. Original located findings above retain their reviewed-baseline meaning. Source remedies are complete; model/client effectiveness remains unobserved. Campaign closure/integration remains outside authority.

## Second review — Entry versus in-workflow requests

Reviewed baseline `7df62ae0e906a7e2f7cc0c62d7ada2fe35c45959` against the human's clarified entry responsibility. Inspected the contract's responsibilities/coverage/organization/assessment method and canonical workflow-selection and implementation-range ownership. This is a focused scope correction, not a new consumer trial.

### R-009 — Entry responsibilities extend into routine contextual interpretation

**Priority: high.** Purpose/use and Orientation and routing broadly assign ordinary request interpretation, continuation and range handling to PLUGIN.md. Normally, workflow entry routes through the coordinator and supplies appropriate skill context; a later milestone/range request belongs to that context and its owner. **Correction:** define PLUGIN.md's normal role as workflow/capability entry and high-level discovery; keep contextual requests with the active coordinator/skill. Retain prominent invariant summaries without making PLUGIN.md a per-turn dispatcher. **Recheck:** range selection routes through established sdd-implement context rather than requiring re-entry or PLUGIN reload.

### R-010 — One assessment start condition conflates entry and continuation

**Priority: high.** Assessment starts all sixteen cases from PLUGIN.md. C-07/C-08 range requests, C-09 continuation and C-14 pending approval are normally in-workflow requests, and paused steering relies on implementation context. **Correction:** distinguish entry cases, contextual handoff/continuity cases and exceptional recovery; supply the appropriate starting context and record what layer is assessed. Contextual cases assess the entry's handoff contribution indirectly, not independent PLUGIN interpretation of every later prompt. **Recheck:** the same range prompt is assessed once with valid workflow context and separately with lost context, without conflating the two.

### R-011 — Context-loss fallback is not bounded clearly

**Priority: medium.** Continuity is described, but there is no clear boundary between reuse, recovery and unrecoverable human decisions. **Correction:** point to sdd-manage when available context cannot identify a reliable workflow/owner interpretation; recover context with focused orientation/skill discovery, preserving authority and stops. Ask only for consequential missing decisions. Do not require the user to learn lower-level skills or reconstruct technical context manually, and do not guess erased approvals/ranges. **Recheck:** available context is reused, recoverable state is recovered and unrecoverable authority is clarified before dependent effects.

The coordinator already requires reuse of sufficient context and owns recovery/selection; implementation owns executable ranges. No canonical skill change is needed for this contract correction. Proposed remediation stays source-only; packaged PLUGIN.md compliance is outside this round.
