# README structure review

## Campaign, source and authority

- Campaign: `048_bb940a9`; [revision plan](REVISION-PLAN.md); [executed removal](REVISION-REPORT.md).
- Starting baseline: `bb940a97bfa71a9791000fcc89557115be5861e6`.
- Original opening and exact reviewed source: `e79375d22ebf18d5d81c41be4a3a15ea9060083e`.
- Working branch: `revision/048_bb940a9-readme-structure`; target: `main`.
- Review date: 2026-10-12. Full remaining root README inspected after the authorized section deletion was committed, pushed and read back.
- Focus: section purpose, hierarchy, repetition, overload, reader sequence and appropriate splits/merges. Repository-text editorial assessment only; no external fact-checking, historical-report inspection, runtime acceptance or fresh Mermaid rendering.
- State: focused review complete; R-001–R-007 are proposed editorial recommendations, not implemented changes or confirmed runtime defects. Campaign remains open awaiting acceptance.

## Assessment

The README offers useful coverage but mixes three reading tasks: starting a project, looking up supported operations and understanding detailed workflow/maintainer rules. A user must traverse four substantial diagrams before reaching the command examples, while document ownership and its checkpoints are spread across distant sections. Several persistence and integration rules appear repeatedly with similar detail. This increases reading and maintenance effort without adding a distinct explanation each time.

The solution is selective consolidation, clearer audience boundaries and shorter procedural summaries. Different representations are not automatically duplicates: workflow categories, ordinary requests and skill owners answer different questions. Likewise, human acceptance and agent QC must remain distinct even when placed together.

## Reverse outline and disposition

| Existing section | Actual job | Recommended treatment |
| --- | --- | --- |
| Opening | Product purpose, coordinator entry, evidence caveat and early nested-revision detail | Keep purpose/entry; move nested/reopened detail to revision workflow coverage |
| Getting started | Seed template, demos, loading, bootstrap, credentials/permissions and examples | Keep a short start path; group prerequisites and move detailed bootstrap/authentication to linked instructions |
| Plugin package | Inventory, manifest/presentation, sibling links, artwork and exclusions | Keep; make it the single README owner of manifest/inventory details |
| Core development workflows | Main/revision/feature purposes and steering distinction | Keep concise; place next to Operations |
| Human document review | Human acceptance and existing-input behavior | Merge under Project documents and checkpoints; preserve a distinct human-review subsection |
| Workflow diagrams | Four paths plus detailed gates, audit/tracking rules and recovery qualifications | Retain useful visual paths, reduce duplicated procedure and link canonical owners |
| Operations | Ordinary request/result lookup, then a substantial release procedure | Move lookup earlier; split release procedure into its own top-level section |
| Branches and integration | Branch identities, eligibility, publication and artifact locations | Consolidate with Completion and continuity under Work boundaries and continuity |
| Review and revision records | Publication, frozen history, Markdown, record locations and reviewer/host ownership | Split user-facing campaign identity/record navigation from contributor policy; remove repeated Git explanations |
| Testing with TextStats | Contributor entry, harness purpose, test-repository history and a pinned outcome | Combine purpose/routing under Testing and contributing; keep historical provenance in an evidence subsection/navigation |
| Skills | Skill-to-responsibility lookup | Keep as a separate reference view, later than ordinary requests |
| Development-document quality gates | Agent QC, adjacent reports and task-size heuristics | Merge with document ownership/checkpoints; keep agent QC distinct and link detailed heuristics |
| Development documents | Artifact table, boundary review/report/hosting rules, MVP policy and feature overlays | Keep artifact table with document checkpoints; move completion/hosting detail to work boundaries and shorten policy detail |
| Completion and continuity | Completion evidence, preservation, Git checkpoints and hosted-state distinctions | Merge with Branches and integration |
| Package status and references | Current limits, historical acceptance counts and unrelated reference links | Split current Status and evidence from References; reduce repeated TextStats history without losing provenance |
| License / Related projects | Legal attribution / related reading | Keep separate, near the end |

## Recommendations

### R-001 — Consolidate document ownership and checkpoints

Priority: medium. Locations: Human document review; Development-document quality gates; Development documents; Project preparation under Workflow diagrams.

The document chain, human decisions, agent QC and review reports are explained in separate places, with the artifact table appearing after procedural descriptions that assume those names. Development documents also drifts into hosted completion and report locations. Readers must assemble one preparation model from distant sections.

Merge the three document sections into **Project documents and checkpoints**, with an artifact table followed by **Human review** and **Agent quality checks** subsections. Keep separate acceptance for PLAN and layout and existing-input/feature nuances. Place this before the diagrams that use the artifact names. Move hosted closure/report details to work boundaries, and link detailed task-sizing/MVP guidance rather than reproducing its full policy. The remedy changes organization, not approval or QC semantics.

### R-002 — Consolidate persistence, integration and recovery rules

Priority: medium. Locations: Getting started's Commits and pushes bullet; Implementation and continuation; Branches and integration; Review and revision records; Completion and continuity.

Per-commit publication, eligible-boundary integration, preservation and hosted-state distinctions recur across several sections. Branches and integration even has separate Preparation baseline and Default publication bullets describing parts of the same gate. Review and revision records begins with a general publication rule rather than its announced records topic.

Merge **Branches and integration** with **Completion and continuity** into **Work boundaries and continuity**, with compact branch/boundary and recovery/evidence subsections. Consolidate the preparation/default-publication bullets. Let Getting started give a short prerequisite and diagram prose explain only the path-specific exception, linking the common rule. Preserve distinctions among task publication, target integration and hosted closure; retain paused-steering and incomplete-phase stopping rules.

### R-003 — Separate and shorten release operations

Priority: medium. Location: Operations → Release packages and commands.

The general request table and release-specific procedure are different reader tasks. The release subsection covers prerelease review, full-message ownership/retention/freshness, highlights-range/checkpoint internals, assets/download conventions, source-publisher dependencies and provider command routes. Its heading does not fully describe release-message preparation, and individual paragraphs carry several decision boundaries.

Promote this to **Release operations**, with compact subsections for **Highlights and release messages** and **Packaging and publication**; give optional prerelease review a brief explicitly optional note. Preserve the narrower highlights-only route, retained root RELEASE-NOTES.md, human curation, freshness/version gate and shared release commit/tag/GitHub body. Link internal ignored-checkpoint, YAML/range and provider recipes instead of repeating the workflow manuals. Move SDD Manager's own publisher dependency paragraph to source contributor guidance already owned by acceptance/AGENTS.md. Keep the Operations table's release rows as short discovery links.

### R-004 — Reduce diagram-adjacent procedural overload

Priority: medium. Location: Workflow diagrams, especially Implementation and continuation.

The four visual paths are useful and have coherent individual purposes. Overload comes from detailed prose surrounding them: native closing-commit audits, partial checkpoint handling, task association failures, outage dependencies, hosted closure ownership and phase/feature exceptions. Some duplicate later Git and document sections, so users must read an instruction-level procedure to understand a high-level map.

Keep the four workflow subsections; do not merge preparation, implementation, steering and revision into one complex diagram. Retitle the parent **Workflow guide**. Retain path purpose, important gates, stopping boundary and owner links, while linking audit/tracking/recovery detail to existing canonical instructions. If diagram simplification is accepted, check each retained gate against its owner; shortening must not erase human decisions, publish-before-audit order or separate integration eligibility. No new bundled guide or packaging-rule change is necessary for this remedy.

### R-005 — Make onboarding precede reference detail

Priority: low. Locations: opening's nested-revision paragraph; Getting started; Plugin package.

Getting started combines loading and ordinary use with template/demo navigation, detailed adoption records and a full token permission/recovery description. Manifest namespace, skills and icons are then introduced again in Plugin package. The opening describes amendment mechanics before the reader has seen the core workflow categories.

Give Getting started a simple load → eligible-project prerequisites → seed/example-request path, with demos as supporting links. Group authentication under an explicitly optional hosting prerequisite and link its exact permission/recovery instructions. Keep manifest/artwork/package details in Plugin package and relocate the opening's nested/amendment paragraph to revision workflow coverage. Preserve explicit scope and credential boundaries without treating optional hosting as universal setup.

### R-006 — Separate current status, test coordination and historical references

Priority: medium. Locations: Testing with TextStats; Package status and references; the opening evidence qualification.

Testing with TextStats mixes how to run/coordinate a test with historical destinations and an older pinned result. Package status and references combines present limitations, historical counts, backend functionality and general links; TextStats and the same diagnostic are repeated. The opening already mentions the source/local-versus-live distinction, which is useful orientation but does not need another full history there.

Use **Status and evidence** for concise present coverage/limits, explicitly separating historical pinned acceptance from current-source evidence. Use **Testing and contributing** for acceptance/AGENTS.md and TextStats routing. Gather capability-map, campaign and historical evidence links under **References**. Preserve the prior test-repository list, source/version qualification, 27 historical assessed cases versus 33 current supported cases and revised-source/client evidence gaps. Do not consolidate counts into a misleading current pass claim or edit frozen historical reports.

### R-007 — Keep complementary lookup views; improve their order

Priority: low. Locations: Core development workflows; Operations; Skills.

The workflow table explains development purposes; the operation table maps ordinary requests to results; the skill table maps capabilities to owners. Their shared vocabulary is purposeful overlap. Merging all three would produce a wider, denser table mixing user commands with implementation ownership.

Keep these views separate. Put core workflows and ordinary request examples before the detailed diagrams. Put Skills later as a reference, linked from the coordinator introduction. Remove incidental repeated procedure from table cells only where a short result plus link preserves meaning. No capability removal or invocation/routing change is proposed.

## Proposed reading order

1. Product introduction and coordinator entry.
2. Getting started: loading, prerequisites, seed/example requests and demos.
3. Core development workflows.
4. Operations: ordinary request/result lookup.
5. Project documents and checkpoints: artifact table, human review, agent QC.
6. Workflow guide: preparation, implementation/continuation, steering, revision.
7. Work boundaries and continuity: branch/boundary rules and recovery/evidence.
8. Release operations: message/highlights, packaging/publication.
9. Plugin package.
10. Skills.
11. Status and evidence.
12. Testing and contributing.
13. References, followed by License and Related projects.

These headings are a proposed architecture, not a quota. Prioritize R-001–R-003 and R-006; apply R-004/R-005/R-007 while reconciling the same paragraphs. Check retained claims and links against the pre-restructure source, keeping one full explanation per concept plus short contextual reminders. Preserve user-visible checkpoints, stopping boundaries, disclosure links, source-only contributor navigation and package-safe links.

## Verification and stopping

Reviewed all remaining README sections and all four Mermaid source blocks. Section-length inventory was used only to locate dense areas; length alone did not establish a finding. No diagram rendering, runtime test, client/provider operation or external source verification occurred. Report Markdown, companion links, exact initial deletion and scoped Git path preservation are checked before publication. Only V-001 was executed; R-001–R-007 await acceptance. Stop on the open campaign branch after report publication; do not implement the proposed outline or merge into main yet.

## Expanded-scope decision — 2026-10-12

The human requested a plugin composition entry analogous in purpose to a skill entry, planning a README.md/PLUGIN.md split and integration/replacement of root AGENTS.md. This changes the proposed document architecture, not the baseline observations above. The expanded revision plan maps R-001–R-007 to human versus agent ownership, moves TextStats into a small acceptance document and includes both package/snapshot contracts. Original recommendations remain retained; the old README-only proposed order is superseded by the expanded plan. No split or package transition has yet been executed.

## Accepted revision disposition

The human authorized expanded execution and clarified a retained development-only root AGENTS.md. R-001–R-007 were revised through V-003–V-005, with source/package/composition evidence in the revision report. Baseline findings and their initial README-only outline remain historical observations in this active record; the implemented human README/agent PLUGIN/source contributor split is the final selected architecture. Local checks do not prove client discovery or runtime acceptance.
