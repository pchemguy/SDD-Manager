# Revision plan

## Campaign and decisions

- Campaign: `073_a5bc041`; state: planned, execution not authorized by this planning request.
- Starting baseline and creation point: `a5bc0410f726162397f53e3462e2915d7fa24f07`.
- Original opening commit: `87641d2706684dc9b059e923a70fcc5f126d1a94`.
- Planning source: `238222d16a1ce9e866eefcda40b6f89e931404af`.
- Working branch: `revision/073_a5bc041-exploration`; creation parent/eventual integration target: `main`.
- Accepted design: [exploration record](EXPLORATION.md), including explicitly illustrative examples and context-led scope.
- Human decision: accept the exploration design and prepare this plan; keep references bounded in breadth and depth, avoiding insubstantial fragments and overloaded documents.
- Scope: strengthen proactive exploration within sdd-design, align affected callers and readiness handoffs, and define proportionate assessment coverage.
- No formal review report is required: this revision follows accepted prompt-defined requirements and the scoped source assessment. Action IDs below are revision actions, not invented findings or executable product tasks.
- Planned execution evidence: REVISION-REPORT.md, to be created when execution is selected.

## Outcomes and boundaries

The agent should critically evaluate an initial idea, proactively expose consequential missing aspects and credible alternatives, recommend context-aligned directions, and facilitate focused human decisions before PROJECT creation. It should adapt the same procedure to feature deltas and later design uncertainties without replaying settled work.

The procedure must remain proportionate: no universal interview, compulsory technology catalogue, exhaustive architecture before PROJECT, extra exploration approval gate or mandatory exploration document. Preserve existing disclosure/bootstrap, repository-write, document acceptance, scope and prototype rules. Clarification and delegated choices remain distinct from artifact approval.

This campaign changes plugin guidance and its source assessment cases. It does not change product release version, Git/tracking policy, HANDOFF cadence, document task identities, development-document ownership or the package architecture. No code prototype, release publication or live consumer trial is selected.

## Reference architecture and size discipline

| Surface | Responsibility and intended depth | Boundary |
| --- | --- | --- |
| `sdd-design/references/exploration.md` | Canonical, cohesive facilitation procedure: entry assessment, relevance lenses, conversational loop, decision state, depth adaptation and readiness/handoff | Complete exploration workflow; does not own PROJECT authoring, full architectural design, repository administration or acceptance tooling |
| `sdd-design/SKILL.md` | Shallow routing with a clear pre-brief, feature and later-stage exploration trigger | Link to the procedure; do not repeat its lenses or conversation steps |
| `sdd-manage/references/workflows.md` | Shallow main/feature selection and handoff | Ensure proactive exploration is selected when needed; do not become an interview guide |
| Design document references | Specific inputs, appropriate detail and readiness for their own artifact | Reuse the exploration owner; no copied facilitation procedure |
| `docs/dev/PLUGIN-CONTRACT.md` | Focused source assessment contrasts for entry and handoff | Assess routing and expected boundaries; retain detailed procedure in its owner |
| PLUGIN.md and packaged README | Broad, shallow capability projection, only if their current wording becomes inaccurate | No detailed questions, extra protocol or automatic content expansion |

Prefer revising the existing exploration module. Organize it around meaningful workflow steps rather than mirroring every discussion turn. Keep common lenses concise and examples few, integrated where they clarify reasoning. Broader references should orient and route; narrower references may explain their bounded procedure in depth.

Assess the candidate by whether an agent can find its entry trigger, carry out a complete coherent operation and identify its handoff without unnecessary loading. File size is a signal to inspect cohesion, not a numeric split threshold. Do not create a short file that merely repeats a principle or requires another file to supply almost all its substance. Do not append unrelated procedures because they share vocabulary.

A new reference is justified only if it has a distinct substantive responsibility, entry condition, inputs, output/stop and selective loading route. If the resulting exploration module becomes overloaded around a natural workflow boundary, establish that boundary before splitting and record the rationale in execution evidence. Do not use a separate examples file or separate greenfield/feature procedures by default.

## Authoritative updates and owners

Paths below are relative to `.agents/plugins/sdd-manager/skills/` unless stated otherwise.

| Owner / surface | Required change | Prerequisite |
| --- | --- | --- |
| sdd-design / exploration reference | Accepted proactive early exploration procedure and adaptations | Before caller/readiness alignment |
| sdd-design / entry and project-brief reference | Route insufficient seeds into exploration; preserve direct draft requests and confirmed/deferred decision state | Canonical procedure established |
| sdd-design / architecture and decomposition references | Inspect their inputs; adjust only affected readiness/handoff wording | Canonical procedure established |
| sdd-manage / workflows reference | Align main/feature and later-stage selection; preserve reuse, stops and write gates | Design-owner procedure established |
| Source development contract | Add bounded assessment cases and source ownership links | Guidance and callers aligned |

No separate PROJECT, SPEC, PLAN, layout or TASKS amendment is needed for this instruction-only source change. This revision plan owns its accepted amendment scope; the existing plugin development contract governs entry and coordinator organization.

## Ordered revisions

| Action | Deliverable / target | Dependencies | Acceptance and recheck |
| --- | --- | --- | --- |
| V-001 | Revise `sdd-design/references/exploration.md` into the accepted cohesive subworkflow | Accepted exploration | Explicit proactive seed assessment; six adaptable relevance lenses; recommendation/question/synthesis loop; decision provenance, delegation, depth and exit boundaries. Examples explicitly illustrative/non-exhaustive and unable to define scope or preferred choices. Review against SC-01–12. |
| V-002 | Align `sdd-design/SKILL.md`, `project-brief.md` and only necessary architecture/decomposition handoffs | V-001 | Pre-brief exploration reachable; brief readiness distinct from architecture readiness; later-stage exploration returns to the selected owner. No procedure copying, new artifact gate or authority expansion. |
| V-003 | Align main/feature entry and preparation routes in `sdd-manage/references/workflows.md`; inspect relevant main-preparation/bootstrap interfaces | V-002 | Greenfield selects proactive exploration; feature explores only consequential uncertainty in the delta; established inputs are reused. Preserve actual direct-call, bootstrap, tracking-before-write and human-document gates. Change additional coordinator references only for a demonstrated affected interface. Inspect PLUGIN.md/README projections and record whether changes are necessary. |
| V-004 | Add concise entry/handoff assessment contrasts to `docs/dev/PLUGIN-CONTRACT.md`, preserving existing case identities | V-003 | Cover terse/context-constrained seeds, feature/later-stage reuse, delegated details, example independence and premature progression. Map cases to canonical owners and retain source-versus-live evidence limits; do not copy the complete conversation procedure. |
| V-005 | Verify combined candidate, reference boundaries and retained scope; complete campaign execution evidence when authorized | V-001–04 | Execute applicable checks below, record scenario assessments and actual limitations, inspect full branch delta and preservation of closed records. Refresh HANDOFF at campaign finalization; integration only within subsequently authorized scope. |

During execution, create and maintain REVISION-REPORT.md after each action. Commit the action's result and evidence together, push and verify remote containment before the next action. These are non-task campaign commits; do not fabricate TASKS checkboxes or task IDs.

## Scenario acceptance matrix

The following are planned source/interface assessments. They do not claim observed agent behavior or require live trials within this campaign.

| Scenario | Contrast | Required guidance outcome |
| --- | --- | --- |
| SC-01 | Terse open-ended idea / already well-defined seed | Proactively identify significant gaps; avoid unnecessary interview when context is sufficient |
| SC-02 | Browser game with unspecified stack/rendering | Explain consequential choices by role and practical effect; do not mix language, tooling/runtime, UI framework and rendering into one false either/or |
| SC-03 | Explicit TypeScript/Canvas/offline constraints | Reuse accepted direction; explore remaining consequential uncertainty rather than reopen a generic stack debate |
| SC-04 | Python preference for browser delivery / different deployment context | Assess the underlying need and relevant implications; no unsupported feasibility claim or mandatory preferred stack |
| SC-05 | Systems-oriented or other unillustrated project | Derive relevant concerns and options from context; examples do not bound supported domains or impose C/Rust/Go comparisons |
| SC-06 | Feature in accepted architecture / fundamental change requested | Explore the delta and affected constraints; challenge established choices only for an actual consequential reason |
| SC-07 | Specific uncertainty during architecture or decomposition | Use appropriate technical depth, resolve the scoped issue and return to the current owner without replaying greenfield discovery |
| SC-08 | Human delegates technical decisions / material preference remains unknown | Retain delegation scope and proceed on eligible choices; ask only consequential unresolved questions rather than infer acceptance from silence |
| SC-09 | Contradictory constraints or risky central premise | Critically surface the conflict, assumptions and useful resolution/validation options; no guessed accepted resolution |
| SC-10 | Enough clarity for PROJECT / unresolved structural decision needed for architecture | Distinct readiness boundaries; defer safely with explicit owner/dependency rather than overdesign or invent a choice |
| SC-11 | Conversation only / explicit draft request / pending human checkpoint | Preserve actual authority and requested output; no automatic files, prototype or checkpoint bypass, and no invented extra approval ceremony |
| SC-12 | Recommendations and examples across all cases | Clearly separate facts, confirmed decisions, proposals and delegated choices; examples are explicitly illustrative/non-exhaustive and do not bias coverage |

Assess reference cohesion separately: every touched reference retains a clear purpose, loading trigger, meaningful scope and handoff; routing summaries stay shallow; detailed procedures have one canonical owner. Check both incoming and outgoing routes, not merely link existence.

## Verification and evidence

- Inspect each changed guidance passage and both sides of affected handoffs against the matrix and accepted exploration. Record actual locations and pass/gap outcomes in the revision report.
- Run `git diff --check`, affected current Markdown/link checks and applicable package/schema checks. Exclude frozen campaign contents from current-validity review.
- For the combined instruction/coordinator candidate, run the contributor-prescribed support suite: `python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v`.
- Load the publisher's declared dependency as required, then run `python -m unittest discover -s .github/tests -v`; verify the exact committed package using the established publisher procedure. Record source/interpreter and actual results, not expected historical test counts.
- Run catalog validation if its contract or scenario data is affected. Inspect actual package links/assets and source/package boundaries; new content must not depend on excluded development records.
- Do not add brittle tests for particular prose or infer model behavior from text searches. Use existing structural suites for their real contracts and explicit source assessments for semantic coverage.
- Inspect the full campaign delta for unowned edits and changes to closed campaign objects. Recheck affected README/PLUGIN capability projections without enlarging them automatically.
- No live agent/client, provider publication or benchmark result is established by these checks. Retain such checks as unrun; a live trial requires separately selected scope.

## Persistence and current stop

This planning checkpoint changes campaign records/navigation only. Commit and push this plan and its exploration-status amendment, then verify the remote commit. Keep campaign 073 open on its existing branch. No source revision, campaign merge or release is authorized by this request.

When execution is selected, preserve per-action publication and explicit verification. At any authorized finalization, reconcile HANDOFF with actual outcome, pending decisions and parent return; a future completion merge must use the recorded parent and existing integration gates. A planning commit or accepted design does not itself establish implementation or verification.
