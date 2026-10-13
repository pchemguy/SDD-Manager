# PLUGIN.md and development-contract alignment review

Campaign **057_e338c2c**; [review plan](REVIEW-PLAN.md). Reviewed baseline: `e338c2ca04f4492741f6d87780c7f7aff800f813`. Opening: `eefdb96e941477cc5445bee9d8d47ec80d3cc29a`. State: **Review complete; all eight findings accepted and source-remediated**.

## Assessment

[PLUGIN.md](../../../../PLUGIN.md) has substantially complete capability coverage and strong checkpoint visibility, but predates the contract's clarified entry/context distinction. It mixes orientation with a condensed coordinator/implementation manual. The most useful revision is selective: clarify entry and recovery, define core purposes locally and remove procedural repetition while preserving prominent obligations.

The [development contract](../../PLUGIN-CONTRACT.md) is a sound basis for this revision. Its recommended order already broadly matches the entry, and its source-only nature keeps assessment material out of the package. Two refinements would help: explicitly allow a concise directory of lower-level capabilities without making PLUGIN.md interpret every follow-up, and add representative whole-project review/revision entry prompts. Neither requires reversing the accepted architecture or changing the document name.

Eight findings: six concerning PLUGIN.md, two contract recommendations. R-001 is the highest-priority responsibility mismatch; the rest are medium-priority coverage, composition or wording improvements. No critical operational failure or live model failure is established. Recommendations are not accepted revisions.

## Reviewed coverage and actual checks

Read complete current PLUGIN.md and development contract, relevant human README/template material, coordinator entry and workflow/selection catalog, implementation range ownership, human document review, steering, release-message persistence, Git publication and hosting credential conventions. Used current source, not closed campaign contents. Exact locations below refer to the reviewed baseline.

| Dimension | Assessment |
| --- | --- |
| Coordinator pointer and progressive loading | Early explicit pointer is effective; availability and contextual reuse need clarification (R-001/R-002). |
| Workflow purpose and generic entry | Canonical links exist; local core-purpose distinctions are insufficiently explicit (R-003). |
| Human checkpoints and implementation ranges | Prominent, separate checkpoints; PLAN/layout distinction and human range stop preserved. Keep these. |
| Task/Git publication and integration | Main invariants present and source-backed; procedural repetition and overloaded “publication” need attention (R-004/R-005). |
| Requested backend tracking | Native GitHub milestones, pre-execution projection, lifecycle maintenance and blocked effects clearly highlighted. Keep prominence; defer execution detail selectively. |
| Skill ownership and standalone scope | All fifteen entries linked; narrow operations preserved. Clarify directory versus request interpretation in the contract (R-007). |
| Composite coverage | Main preparation/delivery, features, revision, steering and release present. Principal owners/outputs/stops retained; selected procedures can be deferred (R-004). |
| Branches, records and continuity | Actual identities, incomplete phase stop, eligible integration, frozen history and preservation are present and source-backed. |
| Human/source/package boundaries | README owns examples/diagrams; contributor instructions stay source-only. No excluded source dependencies in PLUGIN.md. |
| Prompt/scenario coverage | Entry/context/recovery groups are appropriate; whole-project review/revision examples can improve entry assessment (R-008). |

Static checks: PLUGIN.md has 2,296 whitespace-delimited words; the contract has 3,360. These counts describe size, not acceptance thresholds. All 49 PLUGIN local links/anchors and 26 contract local links/anchors resolved. All fifteen packaged skill entries are linked. PLUGIN dependencies are inside the 134-file shipped inventory; the contract is excluded as intended. No multiple-blank-line issue found in either reviewed file.

No fresh model/client trial, hosted operation, automatic discovery test or execution of assessment cases performed. Static source agreement does not prove effectiveness for local or less capable models. Runtime suites passed during the preceding integration but are not new review evidence; this review does not rely on those checks to establish routing behavior.

## Findings

### R-001 — Entry does not clearly yield to established workflow context

**Owner:** PLUGIN.md. **Priority:** high. **Type:** contract/source alignment gap. **Location:** opening and Establish the request and context, lines 8–18; contract Entry and established context, lines 28–34.

The entry says to use this document to “select skills and coordinate workflows,” then directs development/functionality/review/revision requests through selection and a chat brief. It mentions reuse of evidence and narrow scope, but does not clearly distinguish initial entry, routine follow-up and exceptional recovery. The coordinator is more precise: reuse an applicable selection and repeat the brief when the routing/boundary materially changes. The contract expressly leaves milestone/range requests to active implementation context.

**Consequence:** a literal reader can route ordinary contextual prompts back through plugin entry or repeat a selection report instead of using its already activated owner.

**Propose:** identify PLUGIN.md as orientation/discovery and coordinator handoff. State that established workflow/skill context resolves normal follow-ups; use sdd-manage when workflow/owner interpretation is unclear or a consequential switch is needed. Reuse sufficient context; recover discoverable state and clarify only unrecoverable consequential decisions. Keep chat evidence for consequential entry/selection, not a per-response preamble.

**Recheck:** contract C-07/C-09 use established implementation context; C-17/C-18 exercise the distinct recovery path. Source wording must not require re-entry for unchanged routine continuation. Model effectiveness remains a separate trial.

### R-002 — Manual loading instruction makes the non-standard entry an unconditional dependency

**Owner:** PLUGIN.md, with a possible contract clarification. **Priority:** medium. **Type:** portability/availability ambiguity. **Location:** line 12; contract lines 24 and 167–169.

“If the client does not load PLUGIN.md, read it explicitly before selecting a workflow” does not distinguish a present but unexposed entry from one unavailable in the client. The contract requires essential guidance to remain accessible through canonical skill entries without relying on this non-standard file.

**Consequence:** clients exposing standard skill entries can appear unable to proceed without retrieving the custom file, although the coordinator already provides canonical selection and gates. This is a source wording risk, not evidence that a tested host failed.

**Propose:** make explicit loading conditional on availability and useful entry context. When the custom entry is unavailable, use the coordinator/skill entries directly; do not claim automatic discovery. Optionally state this availability condition in the contract without expanding it into a host-specific installation procedure.

**Recheck:** present-but-unloaded and unavailable-entry cases have a supported path; essential guidance remains discoverable through sdd-manage without a mandatory PLUGIN dependency.

### R-003 — Core workflow names lack concise local definitions

**Owner:** PLUGIN.md. **Priority:** medium. **Type:** coverage/explicitness gap. **Location:** lines 16 and 76–108; contract coverage row at line 71.

PLUGIN.md names main, feature, revision and the steering variant and links canonical definitions. Its composite sections provide stages, but do not explicitly define main as whole-project scope or contrast it with bounded additions and corrections. Existing-project entry is mentioned later, without the direct statement that new/existing context does not dictate the core workflow.

**Consequence:** a less capable reader has to infer selection semantics from detailed sequences or load the reference merely to distinguish core purposes. It can associate main primarily with a project seed or feature with all existing work.

**Propose:** add a short three-purpose selector, with steering identified as a revision variant. State that starting state informs the stage, while purpose determines the path. Keep full catalog/transitions canonical. Distinguish composite stage summaries from extra core workflow types.

**Recheck:** C-01 through C-04 and the proposed broad review/revision variants can be selected from entry guidance without inventing greenfield/brownfield routing rules or treating implementation/release as additional core development purposes.

### R-004 — Entry retains detailed handoff and execution repetition

**Owner:** PLUGIN.md. **Priority:** medium. **Type:** composition/depth recommendation. **Location:** handoff payload at line 74; task/audit instructions at 90–92 and 126; feature reconciliation at 98; release procedure at 112–114; repeated publication/tracking material at 128–130. Contract depth boundary: line 62.

Some repetition protects important stops, but other passages retell owner procedures: complete handoff payloads, audit order, archive/task-transfer details, atomic replacement and release-source mechanics. Task closure/push/tracking also recur in the checkpoint section, skill table, implementation composite and continuity section.

**Consequence:** progressive loading saves less context; maintainers have more detailed summaries to synchronize. The document's size alone does not demonstrate a problem, and blanket removal would weaken the pronounced checkpoints the human requested.

**Propose:** retain prominent HIL, per-commit publication, task-closure, tracking prerequisites and partial/complete integration distinctions. In composites, retain purpose, principal owners, outputs and consequential stops; link the already stated obligations and canonical procedures. Shorten detailed handoff payloads to ownership/context/stop plus an owner link. Keep release freshness and exact finalized body/tag association as consequential requirements; defer algorithms and operational ordering.

**Recheck:** each retained paragraph has an entry, loading, invariant or stopping purpose. Detailed payloads/recovery/archive/write mechanics remain reachable from correct owners. Do not impose an arbitrary word quota or remove all deliberate repetition.

### R-005 — “Publication” means different effects without qualification

**Owner:** PLUGIN.md. **Priority:** medium. **Type:** concrete wording ambiguity. **Location:** complete message preparation “stops without publication,” line 112; focused review/drafts “do not authorize ... publication,” line 118; contrast mandatory Git publication at 22 and review report publication at 102.

The release owner requires Git persistence/publication for owned ignore or tracked-note changes during preparation. A review can also have authorized report persistence while remaining assessment-only. The entry's unqualified stopping phrases can conflict with those effects, although the intended restriction appears to be tagging or hosted publication, or unrequested persistence outside the selected scope.

**Propose:** distinguish required authorized Git persistence from release tagging/hosted publication and from unrequested repository changes. A release-message request does not create a release; an assessment-only request does not authorize repairs. Neither should silently waive already authorized report/owned-change commit pushes.

**Recheck:** C-12 preserves the release-message owner's tracked/ignored-destination rules while stopping before tag/provider release; review records can be persisted under established campaign authority without implying remediation.

### R-006 — Blanket credential ban in “prompts” conflicts with supported input

**Owner:** PLUGIN.md. **Priority:** medium. **Type:** source inconsistency. **Location:** line 138; packaged Greenfield Project Prompt Template lines 5 and 13; canonical hosting token/credential guidance.

“Keep credentials out of ... prompts” does not distinguish accepting the user's supplied credential from repeating it in generated prompts, handoffs or diagnostics. The packaged template expressly supports a GitHub token input when existing access is insufficient; the coordinator owns acceptance and protected transfer. Canonical handling prohibits copying values into tracked artifacts and normal handoffs, not accepting the supported user input.

**Propose:** retain a concise rule against echoing or propagating credential values into generated content/source/evidence and normal handoffs, and link protected credential handling. Preserve supported credential acceptance and avoid adding new authorization prompts or forbidding the existing template.

**Recheck:** template input and the entry's handling summary agree; accepting a supplied token does not imply exposing it in subsequent generated content or claiming storage/authentication happened.

### R-007 — Contract should distinguish a capability directory from contextual interpretation

**Owner:** PLUGIN-CONTRACT.md. **Priority:** medium. **Type:** design recommendation. **Location:** responsibilities lines 40–45, organization lines 86–90, contextual assessment lines 144–156; compare PLUGIN routing row for sdd-implement at line 65.

The contract correctly removes routine range interpretation from PLUGIN.md. It does not explicitly say that listing lower-level skills in a capability directory remains legitimate. A strict rewrite could remove useful direct-owner discoverability merely because a skill normally runs within established workflow context.

**Propose:** state that the directory may identify all bundled capabilities, including implementation, tests and reporting; it is not a parser or full procedure for every later request. Workflow entry normally establishes owner context, while explicit direct/standalone requests retain their scope. Keep the useful fifteen-owner routing coverage without preserving every contextual trigger or handoff field.

**Recheck:** a concise sdd-implement directory entry is compatible with C-07 being an in-workflow case. The contract does not require either universal plugin re-entry or removal of low-level skill discoverability.

### R-008 — Entry assessment omits broad project review/revision prompts

**Owner:** PLUGIN-CONTRACT.md. **Priority:** medium. **Type:** assessment recommendation. **Location:** entry cases C-10/C-11 at lines 138–139.

The review case specifies ARCHITECTURE and DECOMPOSITION; the revision case supplies findings and an accepted scope. These are useful, but neither tests the common generic form “review this project” or “help revise this project” when the user has not preselected artifacts, skills or a correction list.

**Propose:** add variants of these existing cases, rather than necessarily expanding the case inventory: a whole-project review request with no repair authority, and a revision/improvement request needing a consequential objective or bounded scope established. Expect coordinator-led discovery and appropriate clarification, without invented prior findings, automatic implementation or a compulsory full artifact chain.

**Recheck:** ordinary high-level review/revision entry works without the user naming a skill, artifact set or sequence. Assessment distinguishes a needed scope decision from avoidable technical handholding and remains separate from contextual follow-ups.

## Proposed revision queue

1. **Entry semantics:** address R-001/R-002/R-003 together; establish clear normal entry, core purpose selection, context reuse and exceptional recovery.
2. **Contract precision:** address R-007/R-008 and any accepted R-002 availability clarification. Preserve accepted architecture, source ownership and grouped assessment starts.
3. **Selective composition:** address R-004 using the revised entry/contract boundaries; keep high-consequence obligations prominent.
4. **Wording consistency:** address R-005/R-006 against their canonical owners and supported inputs.
5. **Recheck:** source/contract agreement, local anchors/package dependencies, all fifteen owners, entry/context/recovery scenarios and unaffected checkpoint/tracking guarantees. Select model trials separately if observed effectiveness is required.

No detailed execution plan or finding acceptance is inferred from this review request. Most canonical skill instructions already support the proposed changes; no skill behavior change is presently established as necessary. A later accepted revision should check both sides of any consequential canonical amendment rather than adding operational rules only in PLUGIN.md.

## Preservation and status

Only new campaign review records and its navigation row are changed. Packaged PLUGIN.md, the development contract, canonical skills and prior closed packages remain unchanged. Report links/spacing and baseline-byte preservation checked. Review is committed/pushed/read back on the campaign branch; campaign stays open and unmerged.

## Accepted revision disposition

The human authorized the full [revision plan](REVISION-PLAN.md), execution and closure. All R-001 through R-008 are source-remediated and rechecked in the [revision report](REVISION-REPORT.md). Original located observations retain their reviewed-baseline meaning. Support/publisher/native package checks passed; model/client effectiveness remains unobserved. Explicit verified main integration/publication establishes closure.
