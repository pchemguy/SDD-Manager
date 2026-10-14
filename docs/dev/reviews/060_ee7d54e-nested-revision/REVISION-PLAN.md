# Coordinator contract revision plan

Campaign **060_ee7d54e**; nested under **059_937ec6c**. Starting baseline: `ee7d54ef5f8516cfcf6232366929e3eb64e5e3ab`; opening checkpoint: `1499773494f91f7504b1e974516b35e2b3737d91`. [Revision report](REVISION-REPORT.md). Branch: `revision/060_ee7d54e-nested-revision`; integration/return target: `revision/059_937ec6c-coordinator-entry-review`.

## Accepted scope

The human requested COORDINATOR-CONTRACT.md within this nested campaign. Create `docs/dev/COORDINATOR-CONTRACT.md`, titled “sdd-manage development contract,” using the parent review's proposed entry/module responsibility boundary and review program. It is source-only maintainer guidance, not a packaged runtime dependency or implementation of parent findings. Coordinator entry and references remain unchanged; no merge/closure selected.

## V-001 — Contract, discoverability and verification

Define purpose, coordinator responsibilities, essential entry gates, conditional module/skill ownership, recommended organization, composition/duplication review method and targeted entry/continuation/recovery contrasts. Preserve the distinction from PLUGIN-CONTRACT: the coordinator may own canonical orchestration guidance. Use existing owner links and scenarios; no new operational gate, size quota, workflow registry or duplicate procedure manual.

Link the contract from CAPABILITY-MAP's source-development navigation and root development AGENTS.md for future coordinator-entry/module-boundary edits. README already routes contributors to the capability map; no human workflow claim changes. Record actual changes and checks in this campaign's revision report/index. Check links/anchors, Markdown separation, claim/source alignment, package exclusion and unchanged coordinator/closed records. Full suites and live acceptance are unnecessary for this source-only documentation change. Commit/push/read back the result; leave child open and parent suspended.

## V-002 — Temporary campaign placement

The human subsequently requested moving the contract into this campaign directory for the time being. Move it to `COORDINATOR-CONTRACT.md` beside these records, preserving content and resolving relative links from the new location. Remove the permanent contributor pointers added by V-001 while the document is retained as a campaign draft; expose it through active campaign navigation instead. Preserve the original creation scope/evidence above. Check moved-document links, unchanged content apart from link targets, package exclusion and owned diff; commit/push/read back and retain the explicit open/unmerged boundary.

## V-003 — General skill review and coordinator specialization

The human requested preserving the mixed contract as COORDINATOR-CONTRACT-DRAFT.md, extracting portable general skill-entry review guidance into skill-review.md, creating a coordinator-specific COORDINATOR-CONTRACT.md and beginning PROPOSED-REVISIONS.md for a later Agent Package Author revision agent. All new/changed files stay inside this campaign.

Preserve the draft's exact bytes under the new name. General guidance covers purpose/activation, composition, entry/module boundaries, progressive loading, authority/context, observable scenarios and evidence limits without SDD-specific Git/HIL/tracking rules. The new coordinator contract applies that guidance to SDD Manager responsibilities, shared gates, owner map and handoff cases; justify necessary repetition. PROPOSED-REVISIONS identifies package contents, proposed APA integration points, preserved boundaries and downstream verification without claiming APA was changed. Update active campaign links and evidence; check abstraction fidelity, draft preservation, generic-module independence, source/package preservation and Markdown links. Commit/push/read back; child stays open/unmerged and parent suspended.

## V-004 — Independent coordinator contract

The human rejected the coordinator contract's dependency on skill-review.md. Remove its link and assumed prerequisite; make coordinator-specific review instructions and evidence limits sufficient within COORDINATOR-CONTRACT.md. Preserve the general module as an independent APA candidate and the exact draft snapshot. Keep all changes in this campaign, verify links and independent use, commit/push/read back, and remain open/unmerged.

## V-005 — Explicit reference-module review

The human requested extending skill-review.md to assess references without treating them as compositional roots. Apply shared composition/language/ownership criteria to both entries and references; add role-sensitive module purpose, cohesion, scope, context, inbound/child loading and result/return checks. Distinguish procedures from guidance/contracts/examples, and inherited context from independent use. Update APA proposal coverage, verify links and retained boundaries, commit/push/read back, and keep all files in the open campaign.

## V-006 — Structural boundary within the general review module

The human requested clear dedicated reference sections in skill-review itself. Separate shared composition criteria, skill-entry review and reference-module review at the top level; keep reference-specific boundary/context/genre contrasts in the reference section and common procedure/evidence outside both. Preserve V-005's criteria without mixing root activation/metadata responsibilities into reference review. Update handoff description, inspect the reverse outline and retained coverage, check links/spacing, commit/push/read back and remain open/unmerged.

## V-007 — Review criteria without format instruction

The human rejected architecture-teaching prose in skill-review.md. Remove the introductory format explanation and similar standard-design exposition, retaining actionable shared/entry/reference review criteria. Keep the APA handoff explicit about format guidance ownership; check meaning/coverage, links and spacing, then commit/push/read back without closing.

## V-008 — Complete entry-level reference routing

The human requires an explicit routing section, preferably a table, identifying every reference and its purpose/scope/boundary and trigger/use conditions so relevance is determinable from SKILL.md alone. Add inventory-completeness and unopened-reference selection checks, including nested modules; carry the proposed policy into the APA handoff without presenting it as a standard requirement. Verify campaign links/spacing, commit/push/read back and keep the campaign open/unmerged.

## V-009 — Remove nested-module qualification

Remove “, including nested reference modules,” from the routing criterion and the corresponding qualification in the APA proposal, as requested. Retain other routing criteria and the open/unmerged boundary.

## V-010 — Explicit reference-file pattern

Make the routing requirement and inventory checks explicitly identify `references/*.md`, and align the APA proposal wording. Retain the campaign’s open/unmerged boundary.

## Focused critical text review

The human requested another full-file critical review of skill-review.md. Assess the complete current text at `a485934fcb7eb9a52b6b4c4391b8941076e43eaa` for composition, organization, flow, duplication, wording and internal consistency. Record findings and bounded correction proposals in REVIEW-REPORT.md; do not infer remediation authority. Publish/read back the report and retain the open/unmerged boundary.

## V-011 — Accepted critical-text revisions (R-001 through R-006)

The human authorized planning and executing the six findings in [REVIEW-REPORT.md](REVIEW-REPORT.md), published at `009f8f20cc08860f5a2493d416983570dce63cce`. Accept all six for a coherent editorial revision of skill-review.md. Preserve the approved opening/routing paragraph, existing section hierarchy, `references/*.md` inventory scope and complete entry-only routing requirement. No runtime skills, coordinator contract/draft, APA repository or integration/closure changes.

1. **Table and scope (R-001/R-002):** replace the inconsistent entry table with concern/review-criterion columns; remove the unbounded child-reference sentence. Retain local onward dependency review without introducing recursive entry inventory.
2. **Cases and evidence method (R-003/R-004):** express comparable successful/deficient reference conditions, and distinguish analytical entry coverage from a selected entry-only consumer trial before reference exposure. No trial becomes mandatory.
3. **Composition and voice (R-005/R-006):** keep full routing criteria in their dedicated subsection, shorten procedural repetition and local loading wording, phrase review criteria as assessments, and move dependency-inspection detail into verification. Preserve meaningful gate reminders and technical precision.
4. **Recheck and handoff:** inspect all six objective rechecks, approved sentences, role/authority boundaries, section flow and absence of standard-teaching or SDD-only policy. Check campaign links/headings/spacing, exact unchanged coordinator/draft/package bytes and owned paths. Update report dispositions and APA proposal status, commit/push/read back source plus evidence and stop open/unmerged. Support/publisher suites and live acceptance are unnecessary for campaign-only text changes.

## V-012 — Plugin review abstraction and integrated SDD contract

The human requested moving docs/dev/PLUGIN-CONTRACT.md into this campaign as PLUGIN-CONTRACT-DRAFT.md, extracting general plugin review into plugin-review.md, and creating a new domain-specific PLUGIN-CONTRACT.md that absorbs the active coordinator contract. General plugin guidance includes optional coordination as a plugin capability; the SDD contract remains independently usable without generic-module dependencies.

Preserve the plugin draft's prose/structure, adjusting only relative link targets after relocation; retain the existing coordinator draft prose, rebasing its relocated plugin links. Integrate coordinator responsibilities, shared gates, module coverage and assessment contrasts into the new plugin contract, then retire the redundant standalone COORDINATOR-CONTRACT.md and repair active links. Preserve all C/K case identities and their entry/established-context/recovery distinctions.

Keep new modules/contracts/proposal material within campaign 060. Repoint the root contributor/capability-map contract links to the current combined campaign contract so relocation leaves no broken source navigation. Extend PROPOSED-REVISIONS.md with the plugin module and APA integration/verification scope, without importing SDD operational rules or claiming APA changes. Inspect abstraction/specialization coverage, standalone contract use, draft fidelity, live source-link preservation, package exclusion and all active Markdown links/spacing. Commit/push/read back source and evidence; remain open/unmerged with parent 059 suspended. Runtime package/tests and unrelated closed records stay unchanged; no live trial or full suites needed.

## V-013 — Restore the plugin-entry rationale

The human identified omission of the accepted Scope and motivation section. Restore it verbatim from PLUGIN-CONTRACT-DRAFT.md into plugin-review.md: modular organization, development/context benefits, independent bundles versus integrated workflows, the non-standard PLUGIN.md rationale and optional coordinator/star-like decomposition. Preserve the distinction from skill-review, which does not teach the standard architecture. Check exact restoration, links/spacing and owned scope; publish/read back and remain open/unmerged.

## V-014 — Adapt plugin-entry rationale wording

The human authorized adapting the restored section’s title and wording. Use “Shared plugin entries and coordination” and revise for the general review module while preserving modularity benefits, independent versus integrated plugins, the shared-entry requirement/convention and optional coordinator path. Keep the original wording in the draft; publish/read back without closure.

## V-015 — Verified standards point and integrated rationale paragraph

Verify whether the published Agent Plugins specification defines PLUGIN.md, then combine the bundle/integrated decomposition/shared-entry paragraphs as requested. Separate the verified standards fact from the proposed architecture; preserve modularity benefits and optional coordinator paragraph. Publish/read back and retain open/unmerged scope.

## V-016 — Revise the human-supplied rationale section

Polish and replace the full supplied Shared plugin entries and coordination section. Preserve modularity benefits, the verified standards statement, bundle/integrated distinction, desired shared entry and SKILL/reference routing analogy, plus optional coordinator loading. Check fidelity and spacing, commit/push/read back and retain open/unmerged scope.

## V-017 — Custom-entry loading and convenience front

Append the proposed explanation: automatic PLUGIN.md loading cannot be assumed, skill entries retain full functionality without it, and an available coordinator’s SKILL.md remains the operational entry behind the convenience front. Preserve optional coordination, publish/read back and remain open/unmerged.

## V-018 — Name the defined plugin entry directly

Replace example/alternative filename wording with PLUGIN.md as the shared entry defined by this module. Align availability, canonical-ownership and recovery criteria without making unrelated skill bundles require an entry. Publish/read back and remain open/unmerged.

## Parent-report relevance assessment

The human requested pulling campaign 059’s report and assessing which findings remain relevant to current development documents. Fetch/read the published parent checkpoint, compare all four findings with current modules/contract and distinguish still-unremediated runtime source from already covered criteria and proposed document additions. Record the assessment only; retain parent suspension and open/unmerged scope.

## V-019 — APA review activation policy and parent deferral

The human specified that sdd-manage/SKILL.md remediation belongs to resumed campaign 059. Add APA handoff routing for full/comprehensive skill/plugin reviews; ordinary/focused reviews should not automatically activate the proposed review programs. Preserve explicit module selection and scoped review effects. Commit/push/read back; leave the three parent-derived document recommendations pending and retain 060 open/unmerged, 059 suspended.

## V-020 — Accepted full-set revision; human review before finalization

The human authorized planning and executing the [full-set revision queue](REVIEW-REPORT.md#full-set-u-003--alignment-conclusion-and-revision-queue), then reviewing the final documents before finalization. Starting source: `1589cb2486c75ff31076d1bf11968d2b72551b62`. Accept R-007–R-009 and the three pending parent-derived documentation recommendations as one coupled revision of skill-review.md, plugin-review.md, PLUGIN-CONTRACT.md and PROPOSED-REVISIONS.md.

### Scope decisions and outcomes

| Work | Accepted revision and objective recheck |
| --- | --- |
| R-007: comprehensive coverage | Both procedures require an inventory/disposition of the requested target, recording depth/evidence, reasoned exclusions and unassessed items. Representative cases do not substitute for content coverage; focused requests and dependency inspection stay bounded. Align handoff activation and reporting. |
| R-008: plugin applicability | Retain general APA applicability rather than limit the module to skill-only plugins. Qualify skill-entry fallback as applying to skill workflows; account for advertised non-skill components through their supported discovery/interfaces, dependencies and owning configuration/runtime checks. Keep shared entry/coordinator criteria conditional; introduce no mandatory component or MCP manual. |
| Parent 059/R-001/R-002: plugin composition | Add concise review criteria for visible section responsibilities and coherent paragraphs/steps. Assess central constraints before dependent actions without imposing fixed headings or copying the full skill checklist. |
| Parent 059/R-004: selection order | State evidence reuse/recovery before selection and its consequential announcement; avoid duplicate orientation and routine context restart or announcement ceremonies. |
| R-009: independent coordinator routing | Require an identified sdd-manage entry routing section, preferably a table, individually naming/linking every `references/*.md` file with scope/boundary and loading conditions. Compare inventory and entry-only selection; retain domain map as navigation without recursive scope or dependence on generic modules. |
| Parent 059/R-003: relocation fidelity | Require every removed coordinator clause to have a canonical destination and actual loading condition. Establish absent qualifications there before shortening; retain consequential pre-action invariants in the entry. No runtime coordinator edit in 060. |
| Handoff status | Update proposed APA integration/verification scope and current review status to reflect actual accepted source revisions. Preserve full/comprehensive versus ordinary/focused activation and vendor/domain boundaries; no APA repository/cache edit or acceptance claim. |

The optional K/C correspondence note is deferred: distinct starting layers and additional K coverage are already explicit; adding another case map is not necessary to address the accepted findings. Preserve all C/K identities, approved skill opening/routing paragraph, accepted plugin rationale except the scoped fallback qualification, and all other essential duties/qualifiers. Keep both generic modules and the SDD contract independently usable. No runtime package, preserved drafts, parent/closed records, publication workflow, release, backend or test changes.

### Execution and verification

1. Publish/read back this accepted plan before source edits.
2. Revise the four affected documents together so scope, criteria and handoff stay aligned. Inspect their complete resulting composition and compare the diff with the accepted outcomes.
3. Recheck each finding and parent recommendation against actual source. Inspect full/focused and skill-only/mixed/no-skill applicability, entry-only reference selection, independent contract use and qualifier-preserving relocation. These are source assessments, not consumer trials.
4. Check current campaign links/anchors, heading/blank-line and Git whitespace, approved paragraphs, case identities, exact unchanged drafts/runtime/parent/closed bytes and owned paths. Proportionate source-document checks suffice; live/model acceptance, full support/publisher suites and APA integration are unselected.
5. Update retained findings/dispositions and execution evidence; commit source and reports together, push/read back and stop for human review. Campaign 060 remains open/unmerged; parent 059 stays suspended. Finalization, integration and parent resumption are not authorized by this execution request.

### V-020 execution status

Executed as the planned coherent document unit. All accepted findings and parent-derived documentation recommendations have source rechecks; optional K/C navigation remains deferred. Static/preservation checks pass and are recorded in REVISION-REPORT.md. Publish/read back source and evidence before returning the final documents. Human review/finalization is pending; 060 remains open/unmerged, 059 suspended.

## V-021 — Composition-review questions as a nested list

Address the human's format feedback on plugin-review.md, Plugin composition and ownership. The section groups questions by concern rather than comparing values; replace its table with bold category bullets and one nested bullet per question. Preserve all seven categories and fourteen question strings, their order, qualifications and following ownership/concision paragraph. Four-space nesting follows the Markdown convention. This is a local presentation revision within the open human-review stage, not another full review or policy change. Check exact content preservation, surrounding structure/spacing and three-file owned scope; commit source and evidence, push/read back and remain open/unmerged for human review.

## V-022 — Entry and coordinator questions as nested lists

The human accepted the proposed matching list format for Integrated plugin entry review and Coordinator review in plugin-review.md. Convert each category to a bold top-level bullet and each question to a four-space-indented child; preserve all twelve categories, twenty questions, order and surrounding applicability/ownership/continuity prose. Verify exact source fidelity, Markdown spacing and three-file scope, then commit/push/read back. Retain 060 open/unmerged for human review, 059 suspended; no broader rewrite or finalization.

## V-023 — Explicit coordinator assessment contrasts

Address the human's coverage concern in plugin-review.md, Assessment contrasts and evidence. Existing shared rows cover several coordination boundaries indirectly; add a conditional coordinator block for direct entry, workflow continuity/switching, successful versus blocked/failed delegation, and relevant versus unrelated coordination modules. Preserve the nine shared contrasts, source/behavior evidence paragraph and optional/proportionate trial policy. Distinguish shared contrasts, coordinator contrasts and their common evidence requirements with local headings. Recheck agreement with Coordinator review, exact preservation outside the selected section, Markdown/links and three-file scope; commit/push/read back, retaining human review/open campaign and parent suspension.

## V-024 — Skill-review question lists

The human accepted converting Shared review criteria and Reference module review to bold category bullets with nested questions, and Skill entry review to simple labelled bullets. Preserve all nineteen categories, thirty-eight questions and the required-context qualification beside its relevant question. Keep Reference routing coverage and both contrast tables, approved opening/routing paragraph, procedure and other prose unchanged. Recheck exact content and outside-section fidelity, four-space nesting, Markdown/link preservation and three-file scope; commit/push/read back. Keep 060 open/unmerged for human review, 059 suspended; no general rewrite or finalization.

## V-025 — Direct contract opening

Replace the human-rejected “This campaign contract defines…” opening in PLUGIN-CONTRACT.md with a direct instruction to develop/review the packaged entry and coordinator using the contract's responsibilities, organization and assessment criteria. Clarify that the document is source-only; preserve target-project/contributor boundaries, owner links and all remaining content. Check exact scoped replacement, whitespace and three-file ownership, then commit/push/read back; retain open human review and parent suspension.

## V-026 — General entry/coordination rules in operative plugin review

The human assigns the generic non-standard-entry/canonical-ownership paragraph to plugin-review.md and requires operative review instructions, not introduction-only explanation. Remove that paragraph from the SDD contract; retain its independently stated SDD layer responsibilities, gates, canonical-source-first development checks and direct-coordinator assessment cases. Strengthen integrated-entry questions for explicit loading without automatic discovery, substantial-rule ownership and sufficient instructions without PLUGIN.md. Make coordinator pre-action obligations explicit in its entry/module question; retain existing permission to own canonical orchestration and the instructions against copying focused procedures. Check clause coverage at operative destinations, four-file scope and preserved remaining contract/cases/rationale; commit/push/read back with human review/open campaign and parent suspension.
