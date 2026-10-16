# Documentation workflow comprehensive review

## Baseline and state

- Campaign: `068_1b74644`.
- Starting/reviewed source: `1b74644cb0b97e074cc407086be13b5597620b80`.
- [Review plan](REVIEW-PLAN.md); [source inventory](SOURCE-INVENTORY.md).
- State: Review complete; campaign open with a [revision plan](REVISION-PLAN.md). No revision execution or integration authorized.
- Evidence boundary: current source inspection and local structural/support/publisher execution; no live acceptance, source repairs or workflow deployment.

## Coverage

| Unit | State | Findings | Evidence |
| --- | --- | --- | --- |
| U-001 | Reviewed | None | Templates/bootstrap/discovery |
| U-002 | Reviewed | R-001 | Authoring/acceptance/QC |
| U-003 | Reviewed | R-002 | Tracking/backend |
| U-004 | Reviewed | R-003, R-004 | Git/recovery |
| U-005 | Reviewed | R-003 projection; no new ID | Entry/README/composition |
| U-006 | Reviewed | No open finding; R-005 not confirmed | Package/tooling/acceptance coverage |

## Findings

Four open findings, all Medium priority, concern conflicting or incomplete instruction handoffs. No High/Critical defect was established. The findings are source-based and do not claim observed consumer failures.

| ID | Concern | Correction owner |
| --- | --- | --- |
| R-001 | Local checkpoint reminders omit explicit scoped preapproval | Coordinator bootstrap/QC reminders |
| R-002 | Credential recovery lacks an explicit route through the docs pre-write gate | Main-preparation/credential handoff |
| R-003 | Generic task gates and projections can apply implementation audits to DOCS tasks | Coordinator/Git callers and entry/capability projections |
| R-004 | Delivery handoff still says preparation-only stops on design-docs | Coordinator workflow summary |

R-005, initially recorded at the U-006 checkpoint, was not confirmed on final cross-read; its disposition is retained below. The new assets, package boundaries and local checks otherwise passed the assessed structural/tooling criteria. These passes do not establish live workflow behavior.

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
- **Locations:** `skills/sdd-manage/SKILL.md`, “Shared gates / Task closure”; `references/git-workflows.md`, “Work and prepare the boundary”; also projected in `PLUGIN.md`, “Branches, integration and continuity”, and the capability map’s generic task-contract paragraph; compared with `references/main-preparation.md`, “Document tasks through first approval”, and the linked `sdd-implement/references/completion-and-checkpoints.md` task contract/audit.
- **Observation:** The coordinator orders implementation-owned closure/audit for “task-list work”; the Git gate requires that audit whenever executable tasks govern integration. DOCS_TASKS is now a real task list. The specific main-preparation procedure explicitly forbids routing DOCS tasks through the T-task audit, but neither generic caller identifies that separate owner. The implementation audit targets TASKS/FEATURE-TASKS and its own partial-checkpoint/composition rules; it does not implement the DOCS first-approval protocol.
- **Source contrast:** A document proposal is published before human review; approval later produces the required checked DOCS task and decision evidence while retaining unchanged accepted document bytes. The DOCS owner permits this. Applying the generic implementation audit can demand implementation ownership or misclassify the earlier proposal as result-first persistence requiring a historical exception. The specific exception can resolve the conflict, but the caller currently leaves that reconciliation to the agent.
- **Bounded proposal/owner:** Qualify the coordinator and Git callers and affected entry/capability projections by owning list/workflow. Route DOCS first approvals and package QC to main-preparation; keep implementation audit enforcement for its actual owning TASKS/FEATURE-TASKS. Do not remove either persistence contract or add fabricated T IDs to documentation.
- **Objective recheck:** Trace fresh and resumed DOCS completion, unchanged approved proposals, DOCS-009 integration and ordinary implementation task integration through the same coordinator/Git gates. Each reaches its correct owner; implementation composition violations remain blocked.

### R-004 — Delivery handoff retains the old preparation-only stop

- **Type/priority/status:** Workflow-boundary inconsistency; Medium; Open. High source confidence; live effect untested.
- **Locations:** `skills/sdd-manage/references/workflows.md`, “Delivery strategy handoff”, first paragraph; contrast the same module's “Prepare initial development” row, `branch-management.md`, “Preparation integration gate”, step 2, and main-preparation's completion sequence.
- **Observation:** The delivery handoff still says unconditionally, “Preparation-only stops on design-docs.” Completed main preparation now includes DOCS-009, published explicit docs integration and docs-main closure before its final preimplementation checkpoint, even without implementation authority. Other preparation-only paths and explicitly earlier/unmerged stops retain their existing boundaries. The handoff omits this main-specific distinction.
- **Source contrast:** Human requests complete main documentation preparation without implementation. Following the new main operation completes published integration and milestone closure; following the later delivery-handoff instruction can leave both unfinished on design-docs.
- **Bounded proposal/owner:** Align this coordinator handoff with the established main exception and other preparation-only boundaries; link the canonical completion procedure rather than reproduce its steps. Preserve explicit earlier/no-merge/local-only instructions and the separate implementation grant.
- **Objective recheck:** Compare completed main preparation-only, an early document stop, feature preparation-only, an explicit unmerged stop and preparation plus an authorized implementation range. All loaded summaries agree on the actual integration and human stop.

Generic implementation, feature and campaign examples remain valid within their stated scope. The updated dedicated main-preparation examples correctly include first approvals, mixed-state stopping, package QC and integration. No repair has been made under review authority.

## U-005 — Entry projections and composition

Read packaged PLUGIN/README, root README, capability map and plugin development contract. The new main path is discoverable from both entry layers and ordinary preparation requests. Main-preparation and hosted docs procedures own the substantial new rules; entry/README/capability summaries link them. Dedicated initialization, task-list, first-approval, package-QC and final integration boundaries are described without making PLUGIN the sole source. The README distinguishes its AGENTS project default and user override from optional plugin-wide selection; no restoration of a global default is proposed.

No new independent finding allocated. Added PLUGIN’s generic audit paragraph and the capability map’s generic T-subject/task-contract paragraph as affected projections of R-003, rather than duplicate findings. Their main-specific summaries are correct, but a revision should make both projections agree with their narrowed canonical callers. R-004 remains a coordinator delivery-handoff defect; the entry’s main preparation-only summary already states the new completion boundary correctly.

Organization remains serviceable: the human README supplies examples/diagrams, project document meanings and an explicit workflow narrative; the agent entry puts coordinator loading, context and consequential HIL/publication/tracking gates before routing and composites. Short repeated main summaries serve discovery, gates and composition; their presence or byte count alone does not justify deleting obligations. A future revision can correct the located distinctions in place; no broad reorganization is needed for these findings. The abbreviated root README remains navigation rather than a duplicated full manual.

The development contract retains generic C/K routing/continuity assessments. Their existence is not new-docs behavioral coverage; the concrete A-001 assessor/scenario reachability and automated checks are assessed in U-006. No external specification or client-discovery behavior was validated by reading these documents.

## U-006 — Publisher, snapshots and acceptance coverage

Inspected the changed publisher selectors and their tree/archive/build callers, asset tests, snapshot pinning/dirty capture, catalog contract validation and affected acceptance guides/contracts. Added the existing empty-repository preparation test as a consequential interface. The new assessor module is reachable from A-001 JSON/Markdown and execution/setup guidance; it defines all 16 presence combinations, first approval, scoped preapproval, later revision, resume, hosted uncertainty, package QC and final ordering. No live consumer/provider execution occurred.

### R-005 — Not confirmed: harness operating AGENTS versus template copying

Final disposition: **Not confirmed; no required correction**. The U-006 checkpoint initially treated the empty-repository operating AGENTS.md as conflicting with the new root-copy restriction. Full cross-read distinguishes them: SETUP’s “Fresh or resume” explicitly permits bounded operating instructions, while “Consumer repository disclosure” prohibits preparing the target asset copies on the consumer’s behalf. The helper writes different operating text, not AGENTS_TEMPLATE bytes. The existing test intentionally verifies that bounded setup and no publication. This does not establish a helper defect or justify removing the operating entry.

Retain the coverage distinction: that ordinary empty-remote setup reaches the consumer as an existing-AGENTS fixture. Its consumer can demonstrate preservation and the partial-presence stop, but cannot demonstrate copying AGENTS_TEMPLATE or receiving its generated tracking policy. The assessor’s separately defined none-present/template-copy scenarios need genuinely corresponding initial state and actual observations. They remain unrun, not failed. No acceptance redesign or runtime repair is proposed on this basis.

Evidence locations: `acceptance/textstats/SETUP.md`, “Fresh or resume” and “Consumer repository disclosure”; `scripts/core.py`, `prepare()` empty-head block; `tests/test_preflight.py`, `test_prepare_new_unborn_remote_is_bounded_and_does_not_publish`; main-preparation assessor matrix. The complete support suite executed that helper test; it proves bounded helper behavior, not consumer copying.

### Executed local verification

Tested at `156218be2d784da6db373ed121ce9da46e203041`; package, publisher, acceptance and root instruction/navigation bytes are unchanged from reviewed baseline `1b74644cb0b97e074cc407086be13b5597620b80`. Python 3.12.14, Git 2.51.1; publisher uses its declared jsonschema 4.26.0 dependency. The review branch adds records only.

| Check | Observed result | Limit |
| --- | --- | --- |
| `PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v` | 137 passed | Harness/support sensitivity; no consumer trial |
| `PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=/tmp/067-validator-deps python -m unittest discover -s .github/tests -v` | 34 passed | Local publisher/adapter fixtures; no release/provider writes |
| `python acceptance/textstats/cases/assessor/catalog_tools.py validate` | 33 catalog cases validate | Static graph/assets/contracts; not 33 behavioral passes |
| Native `build_package`, pinned offline schema and exact ZIP inspection | 137 files; all three new assets present only under assets/; exact Git bytes/checksum; source-only files excluded | Local package, no publication or installation |
| Native publisher versus committed/dirty TextStats snapshot | Exact file/byte parity; unchanged source snapshot; package-relative paths | Current clean package only; dirty sensitivity also covered by support tests |
| Skill reference inventory | 15 skills; all 77 bundled reference files named in their entries | Inventory reachability, not proof every routing decision is correct |
| Current Markdown scan, excluding frozen campaigns and AI logs | 208 documents, 1,042 local links; no missing targets/anchors, package escapes, heading-separation or consecutive-blank errors | Local links outside code; external URLs untested |
| Agent Package Author plugin validator | Exit 0; zero errors, 46 bundled cross-skill warnings | Warnings identify client-dependent handoff; core schema passed separately |
| Baseline/path protection | Only campaign 068 records and review index differ; previous closed campaigns unchanged | Git path/object comparison, without reopening their contents |

The actual locally built archive source is the review checkpoint above, whose runtime package equals the reviewed baseline. ZIP SHA-256: `ad36d17f2dbf9c45137739368cf29be282230853822741cb35b5e2030001f122`. Build used the manifest's unchanged v0.15.0 solely for local validation; no release/tag was created. The Markdown and archive checks used disposable verification scripts outside the repository.

No finding allocated for missing required package assets, exact-byte retention, missing-asset rejection, source-only exclusions, pinned schema conformance or broken local links. Defined main-preparation scenarios are substantial coverage extension, but their consumer/provider outcomes remain unrun. Passing tooling does not disprove R-001–R-004 instruction issues. R-005 is not an open defect. Live acceptance is outside this campaign.

## Review conclusion and revision handoff

All six units are complete: 57 selected artifacts (44 changed and 13 necessary adjacent inputs), with the inventory’s stated depth and no pending review rows. Main-preparation, hosted docs projection, first-approval tasks and acceptance scenarios are implemented and discoverable. Remaining work is targeted instruction alignment, not another workflow redesign.

For an accepted revision, prioritize R-003 and R-004 at the common integration handoff, then R-002’s first-use credential sequence and R-001’s checkpoint reminders. The four can be corrected independently, but recheck them together through fresh/resumed main preparation, an already-published unchanged proposal, explicit scoped preapproval, preparation-only completion and a normal implementation task boundary. Preserve the intended AGENTS-level tracking default, user overrides, shared tracking/recovery paragraphs, strict pre-write/readback ordering and separate documentation/implementation ownership. No finding authorizes expanding the default into PLUGIN or generic workflow policy.

Do not treat this source review as live acceptance or automatic permission for repairs. Consumer/provider/client trials, the 16 presence variants and interruption sequences remain unrun. No release, tag, hosted tracking mutation or runtime source edit was performed. Campaign 067 is closed at published main merge `1b74644cb0b97e074cc407086be13b5597620b80`; campaign 068 stops at its published review records and remains open for the human’s next decision.
