# Coordinator entry composition review

Campaign **059_937ec6c**; [review plan](REVIEW-PLAN.md). Starting/reviewed source: `937ec6cc74545a7b3555b368ce86c4f4ff42c6c4`. Branch: `revision/059_937ec6c-coordinator-entry-review`; target: main. State: **Review complete; R-001–R-004 accepted for resumed execution; open pending verification/integration**.

Review covers the coordinator entry's composition, progressive-discovery boundary and a proposed source-only development contract. Evidence is source inspection and bounded local measurements; no live acceptance or model trial. Source repair and contract implementation are not selected.

## U-001 — Composition and entry structure

The entire entry was inspected, including frontmatter. It contains 10,541 UTF-8 bytes, 1,206 whitespace-delimited words and 44 lines. These measures do not establish excessive model context use: no tokenizer or model was evaluated. There is no size-based defect or required reduction target.

### Reverse outline

| Baseline location | Actual function | Bytes / words excluding surrounding separator newlines | Assessment |
| --- | --- | --- | --- |
| Lines 1–4 | Discovery metadata; coordination and release triggers | 633 / 70 | Broad supported activation; release operations lead the description |
| Line 8 | Shared Markdown conventions and applicability | 435 / 59 | Detailed formatting is foregrounded before coordinator purpose |
| Line 10 | Purpose, proactive coordination, authority, review/publication, host review, stage/stop and document acceptance | 1,125 / 145 | Several different concerns in one paragraph |
| Lines 12–30 | Seventeen conditional routing rows | 2,680 / 282 | Useful direct discovery, but ungrouped concerns interrupt the opening-to-procedure sequence |
| Lines 32–36 | Five-step coordination procedure | 3,243 / 380 | Sound overall lifecycle; handoff step combines several distinct gates and branch procedures |
| Lines 38–44 | Task persistence, every-commit publication, reporting/recovery and closed records | 2,367 / 266 | Consequential rules appear as unheaded trailing paragraphs after the procedure's finish step |

The title is the only body heading. Routing is roughly a quarter of the bytes; the procedure and closing obligations together exceed half. Useful improvement lies in assigning section/paragraph jobs and separating invariant reminders from conditional detail, rather than treating the routing table as the sole source of bulk.

### R-001 — No visible hierarchy between routing, procedure and obligations

**Type/priority:** composition defect, medium. **Confidence:** high for source structure; behavioral consequences untested. **Location:** entry lines 10–44.

An opening paragraph, an seventeen-row table, numbered steps and four policy paragraphs follow one H1 without section headings. Conditional lookup precedes the principal coordination procedure, while essential task/publication/closed-record requirements trail “Finish and stop.” The boundaries between “what coordination does,” “what must always be respected,” and “which module to load” are implicit. This increases reader navigation and retention demands; it does not prove agents currently miss a rule.

**Proposal:** Give purpose, coordination gates, lifecycle and conditional routing distinct visible section jobs. Put short consequential invariants before their dependent actions and keep only one principal lifecycle. Group routing by decision or lifecycle concern; do not require a fixed heading count or remove all rows merely to shorten the file.

**Recheck:** A reverse outline assigns a distinct job to each section; an agent arriving through this entry can identify baseline/selection, next owner/module, prerequisites and stop without searching trailing unheaded prose. Preserve direct links for every required conditional procedure. **Disposition:** source-verified in V-001; behavior untested.

### R-002 — Paragraph and step overload obscures controlling actions

**Type/priority:** composition defect, medium. **Confidence:** high. **Location:** line 10; step 3 at line 34; reporting paragraph at line 42.

The opening's purpose sentence is followed by proactive handoffs, routine authorization, review commit/publication, host automatic review, review-only limits, stage entry, stopping and HIL. Its controlling idea is too broad to organize those distinctions. Step 3 starts as an implementation-tracking gate, then switches to general handoff payload, instruction loading, preparation/default-branch integration, campaign-record branches and dirty-state preservation. The reporting paragraph likewise changes from return evidence to prohibited recovery artifacts and missing skills.

**Proposal:** Keep the purpose paragraph focused on coordinator responsibility. Give lifecycle actions concise controlling sentences. Place universal authority/HIL/stop reminders together, move conditional review/platform distinctions to the review owner, keep preparation and tracking gates identified with their destination modules, and route handoff/recovery details to coordination.md. Preserve explicit gate-before-action wording and owner availability; a link with no condition is insufficient.

**Recheck:** Each paragraph/step has one principal action or coherent concern; qualifiers remain adjacent to their rule. A handoff can still identify tracking readiness, accepted preparation, actual scope and blockers before dependent execution. **Disposition:** source-verified in V-001; behavior untested.

### No-finding coverage and cautions

The entry already identifies coordinator purpose, a factual orientation owner, workflow selection and a visible chat decision, focused execution/steering/incorporation owners, requested tracking gates, human document review, per-commit publication, partial-phase stops, missing skills and preservation of closed records. Most routing labels convey an actual loading condition, not just a filename. These capabilities should survive restructuring.

The table and procedure intentionally overlap in several places: one supports lookup, the other sequence. This is not automatically harmful duplication. Similarly, a concise publication or HIL reminder can be necessary even when the detailed procedure has a canonical owner. U-002 will assess which repetitions reproduce detail without adding a decision or gate.

## U-002 — Ownership, progressive loading and review program

Inspected the full coordination.md and the selection/core-workflow portions of workflows.md; the relevant release and preparation paths; human-document-review.md, tracking-decision.md and phase-activation.md; review/revision and Git publication/recovery procedures; implementation's task-commit/audit contract; and the relevant orientation/documentation/reporting entries. PLUGIN.md and PLUGIN-CONTRACT.md were compared for responsibility boundaries, not rereviewed comprehensively. Unrelated credential, bootstrap and other module procedures were inspected only through their entry links/labels where enough to identify their role.

### R-003 — Entry repeats procedural detail already owned by references

**Type/priority:** maintainability improvement, medium. **Confidence:** high for overlap; runtime impact untested. **Location:** entry lines 8, 10, 34, 38, 40 and 42; destination sections below.

Several passages exceed the concise reminder needed to dispatch coordination. The task paragraph reproduces subject-marker syntax, cumulative/split closure prohibitions and audit/recovery detail from the implementation owner. The handoff step reproduces payload fields and branch-stage detail. The style paragraph repeats detailed formatting; the general opening introduces campaign/platform-review distinctions. These create multiple edit surfaces without consistently adding a new selection condition.

This is different from useful repetition between a conditional link table and the ordered lifecycle. Per-commit publication appears in the opening's review distinction, routing, finish step and dedicated paragraph; consolidate the full invariant in one prominent location, while keeping a short reference where publication is an actual transition. Do not remove the invariant merely because git-workflows.md contains its procedure.

| Material | Retain explicitly in entry | Detail destination / existing owner |
| --- | --- | --- |
| Markdown | Apply shared Markdown conventions to authored material | sdd-conventions/references/markdown-style.md owns formatting detail |
| Handoff | Carry established scope, authority, readiness and stop to the responsible owner | coordination.md owns the full payload and execution/persistence protocol |
| Project preparation | Accepted preparation must be integrated/published before dependent implementation branching; campaign records have separate branch ownership | branch-management.md#preparation-integration-gate; coordination.md |
| Task closure | One executable task's verified result/evidence/initial checkbox close together; task owner performs closure and the bounded audit | sdd-implement/references/completion-and-checkpoints.md owns exact marker syntax, audit procedure and exceptions |
| Publication | Push/read back every owned commit before advancement or another commit; explicit scoped exceptions remain | git-workflows.md#publish-each-commit owns execution and recovery |
| Review/platform distinction | Review alone does not authorize repair | review-and-revision.md owns report commit/publication handoff and host-control distinction |
| Results/recovery | Return actual evidence/state/limits; recover from established context | coordination.md#return-results and Git recovery own no-extra-state procedures |
| Closed records | Preserve closed packages; load selected history only for a specific need; authorized reopening is separate | conventions/review-campaigns.md and revision-modes.md own eligibility and preservation detail |

**Proposal:** Use these existing destinations; a new miscellaneous “entry details” module is unnecessary. If a removed qualifier is not fully expressed in its destination, establish it there before shortening the entry. Keep owner responsibilities and consequential entry gates explicit enough for less capable models; the target is maintainable distribution, not minimum words.

**Recheck:** Map every changed/removal clause to a canonical owner and an accessible loading condition. Inspect resulting entry and owner together against HIL, task closure, publication, tracking and stopping contrasts. No obligation disappears or becomes a source-only dependency. **Disposition:** source-verified in V-001; behavior untested.

### R-004 — Baseline acquisition and workflow selection read as two passes

**Type/priority:** sequencing ambiguity, low. **Confidence:** high for the wording difference; moderate for its practical consequence. **Location:** entry step 1 (line 32), step 2 (line 33), workflows.md#workflow-selection-and-continuity and coordination.md#establish-scope-and-prerequisites.

Step 1 applies selection/recovery and reports its evidence-backed decision. Its linked procedure already obtains orientation where current state is missing or stale. Step 2 then says “Invoke sdd-orient” at startup. Read sequentially, the entry can suggest a selection announcement followed by another orientation pass, or suggest that selection precedes the repository evidence on which it depends. The reference supplies a sound recovery-first order, so this is not an established functional contradiction or an observed double execution.

**Proposal:** Distinguish initial request interpretation from evidence-backed selection. Establish/reuse a sufficient scoped baseline, recover missing/stale state through sdd-orient, then select/assess continuity and report the decision before dependent work. Reuse still-applicable evidence on routine continuation. Do not require full repository inspection for every request, a new chat preamble on every response, or Git for conversation-only work.

**Recheck:** Fresh entry, unchanged continuation and missing-context recovery each have one clear baseline/selection order consistent with workflows.md. A consequential workflow switch still produces the required visible decision and preserves unfinished work. **Disposition:** source-verified in V-001; behavior untested.

### Metadata and routing assessment

The description is within the skill metadata limit and covers real supported triggers. Leading with complete release preparation makes that subdomain more prominent than project coordination; optionally lead with the coordinator's general role and group release operations later. This is a presentation preference, not a separate defect, and should preserve discoverability for complete messages, highlights and publication as distinct requests.

All 32 Markdown links in the entry resolve to existing files and referenced heading anchors. The seventeen routing rows reach every one of the coordinator's fifteen reference modules; sibling links are intentional. No inaccessible module or new packaged dependency was found. The release row is denser than the other rows and duplicates the release-operation dispatch choices: retain a clear release trigger and route to workflows.md#release-operations, which already distinguishes complete messages, highlights, packaging and publication. Do not turn the entry's table into another exhaustive skill catalog or require all fifteen modules to be loaded.

## Recommended entry organization

Prefer an entry organized around decisions, with existing modules retaining their procedures. This is a proposed outline, not a replacement draft.

1. **Role and scope:** coordinator purpose, delegation to focused owners, selective loading and direct-entry independence from PLUGIN.md. Put the short Markdown convention pointer here or with shared obligations, rather than a full formatting paragraph before purpose.
2. **Coordination gates:** concise, prominently grouped authority/HIL, publication, requested tracking, task-closure ownership, integration/stop and closed-record rules. Each rule states the controlling condition and its owner; do not reproduce provider or Git recovery algorithms.
3. **Coordination cycle:** establish/reuse baseline → select and explain the path → hand off within actual readiness/authority → collect and assess results → perform only eligible integration/publication and return at the selected stop. Keep scenario-specific procedures in the linked owners.
4. **Conditional module routing:** group context/preparation, execution/continuity, review/revision and release concerns. Keep direct links and useful load conditions, avoid duplicating complete lifecycle or gates in each row, and route examples to examples.md.

An alternative is a lifecycle-first entry with gates placed at their steps. It minimizes separate policy text, but makes cross-cutting HIL/publication/closed-record boundaries less conspicuous. Given the required explicit guidance and use by less capable/local models, the proposed gate summary plus short cycle offers a better balance. Group labels should help navigation rather than create many tiny sections. No byte/word ceiling or speculative reduction percentage is proposed.

## Proposed coordinator development contract

A source-only **docs/dev/COORDINATOR-CONTRACT.md**, titled **“sdd-manage development contract”**, is useful if the accepted revision covers the entry-to-module architecture and repeatable review method. It should remain a maintainer tool, linked from source-development navigation such as CAPABILITY-MAP.md, and excluded from the package. Do not require a target-project agent to load it. A SPEC is unnecessary for this editorial/architectural purpose. If its scope is restricted strictly to the single entry, COORDINATOR-ENTRY-CONTRACT.md would be more precise; the broader proposed name fits the module-boundary review.

Its content should answer the following questions concisely:

| Contract part | Development question / required content |
| --- | --- |
| Purpose and audience | What must the entry establish, and what belongs to human/agent maintainers rather than a runtime agent? |
| Responsibilities and authority | Who selects/reconciles workflows, establishes prerequisites, delegates execution, coordinates persistence and reports the boundary? Which decisions and operations belong to focused skills? |
| Entry versus module boundary | Which obligations must remain immediately visible, which conditional procedure must be loaded, and who owns each detailed rule? |
| Composition and duplication | Does each section serve a decision, does each paragraph have a controlling concern, and does repetition add a gate or merely repeat procedure? |
| Ownership and loading map | Where do selection, coordination, human review, preparation, tracking, Git, review modes and release routing live? What makes each owner necessary? |
| Review and change method | Reverse outline → clause/owner comparison → relevant contrasts → packaged-path/source-fidelity checks → actual evidence/limits. Recheck moved guidance on both sides of the handoff. |
| Assessment cases | Fresh entry, established continuation, recovery, narrow operations and scope changes with positive/negative contrasts; distinguish source coverage from consumer behavior. |

Do not copy PLUGIN-CONTRACT wholesale. PLUGIN.md is a non-standard projection; the coordinator entry is a standard skill entry and may own essential orchestration instructions. Its contract must preserve that distinction. Similarly, the contract should not retell every workflow, introduce new operational gates, duplicate the scenario catalog or mandate another journal/registry. Its review program should test ownership and load conditions, not merely check whether keywords or links occur.

### Targeted assessment contrasts

These are source-review cases and proposed later model-trial inputs, not live acceptance results. Start through sdd-manage directly; PLUGIN.md is not a prerequisite. Supply only ordinary project/session state to any later consumer, never reviewer expectations.

| Case | Starting facts / request contrast | What the entry must make reachable |
| --- | --- | --- |
| K-01 | New Tetris seed versus existing whole-project work | Main/feature/revision selection by objective, orientation as needed, first eligible owner and explicit human document gates |
| K-02 | Current workflow and baseline versus materially stale/missing context | Reuse versus scoped recovery; no redundant full startup or guessed approvals/range |
| K-03 | First milestone is a subset of its phase versus full completed phase | Requested range belongs to implementation; partial push/pause versus eligible integration, without scope expansion |
| K-04 | Tracking explicitly requested with missing objects versus explicitly declined | Required projection before execution versus local workflow; authentication alone does not determine selection |
| K-05 | PROJECT published but pending acceptance versus acceptable existing inputs | Pending HIL blocks dependent authoring; no mandatory retrospective replay of acceptable inputs |
| K-06 | Impact-only checkpoint assessment versus commanded amendment | Steering assessment returns read-only; authorized execution uses amendment owner and stops without task resumption |
| K-07 | Review-only versus supplied accepted repairs | Review/report persistence is distinct from source remediation; formal campaign routing is conditional |
| K-08 | Highlights versus complete notes versus release publication | Separate outputs/authority and selected release owners; no implicit tag/provider writes |
| K-09 | Completed result awaiting push, including a clean tree | Publication/readback precedes any new unit or commit; owner recovery is loaded on an actual blocker |
| K-10 | Ordinary revision versus explicitly authorized eligible reopening | Closed records remain frozen unless selected reopening eligibility is established; no routine historical validation |

Existing PLUGIN-CONTRACT cases and coordinator examples can supply project situations. Reference the relevant cases and add only coordinator-specific starting conditions/contrasts, rather than maintain a second complete prompt catalog. The matrix above can become the compact assessment baseline; adjust actual trial scope when behavior, not just source organization, is selected.

## Consolidated result and revision handoff

**Four findings:** three medium (R-001/R-002 composition; R-003 maintainability), one low (R-004 sequencing clarity); no high/critical finding or demonstrated consumer failure. A coordinator contract and metadata rebalancing are recommendations, not accepted repairs or newly established runtime requirements.

Proposed revision order:

1. Accept the entry/module responsibility boundary and source-only contract scope. Retain canonical gates and the selected loading path independently of PLUGIN.md.
2. Implement the contract as a concise development/review tool and establish any missing destination qualifiers before removing them from the entry.
3. Restructure the entry under R-001/R-002; consolidate detailed repetitions under R-003 and clarify baseline/selection order under R-004. Preserve metadata discoverability and all fifteen conditional module routes.
4. Recheck entry and owners against the relevant contrasts, actual links and package exclusion boundaries. Update CAPABILITY-MAP/README/contributor navigation only where the new development document or changed organization affects their claims; do not automatically enlarge PLUGIN.md. Run required source checks when implementation/integration is selected and distinguish them from live acceptance.

### Verification and limits

U-001 checkpoint `5d2ddf26bf4ba97626cf87eabf9d0a38ccbc68b0` was pushed/read back before U-002. Coordinator source, package content, tests and prior closed campaign files remain byte-identical to starting baseline. Active campaign/index links and heading spacing were checked; new index navigation belongs to its existing table. Full support/publisher suites were not rerun for report-only work. No live trial, token measurement, external research or provider operation supports this review. Source inspection supports the stated composition/ownership findings, not quantified reliability or model-performance improvements.

The review ends with published campaign records and proposed revision scope. Campaign **059 remains open and unmerged**; no contract or coordinator source changes have been implemented.

## Accepted resumption after nested 060

The human accepted resuming/executing/finishing 059 after child closure. Resumed source e3623feb0a6beaf0f00abd5a23a7f0a46b5d5aad includes the accepted permanent plugin/coordinator contract, replacing the earlier separate-contract proposal. Runtime entry is unchanged at resumption. REVISION-PLAN.md accepts all four findings with owner/loading and source-verification scope; original observations, source locations and unrun behavioral claims remain intact. Closed 060 is not a current edit/validation target.

## Accepted source revision and recheck

V-001 source-rechecks R-001–R-004 against the resumed entry and canonical owners. Original observations/locations and review-only outcome above retain their baseline meaning. REVISION-REPORT.md records the section/owner map, source K contrasts and qualified check results. The separate-contract proposal was fulfilled and superseded by closed 060's accepted combined contract, now at docs/dev/PLUGIN-CONTRACT.md. No model/client trial supports a behavioral claim; final candidate verification and integration remain in V-002.
