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
