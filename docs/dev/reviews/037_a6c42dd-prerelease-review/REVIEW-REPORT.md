# Comprehensive prerelease review report

## Campaign, candidate and evidence

- Campaign: `037_a6c42dd`; [review plan](REVIEW-PLAN.md), [complete source inventory](SOURCE-INVENTORY.md).
- Exact reviewed source: `a6c42dd754843abf9bafca7dee2aee9e733b046a`; version `0.15.0`. Reviewer: coordinating assistant, 2026-10-09 UTC / 2026-10-10 Europe/Moscow; no independent/fresh reviewer is claimed.
- Exact locally built package: `sdd-manager.zip`, 132 regular files, 298720 bytes; SHA-256 `52a828f85e7ff619a0ebe028b446650ba999d89b2445efe573714ba96a012b2d`.
- Branch: `revision/037_a6c42dd-prerelease-review`; main is unchanged. Review authority covers artifacts/publication and scoped checks, not repairs or product release.
- State: In progress; U-001–U-004 assessed, U-005–U-007 pending; two Open findings.
- Findings remain Open unless an actual human disposition is recorded. No deferral or risk acceptance has been supplied.

## Unit coverage and checkpoints

| Unit / criterion | Outcome and evidence | Findings | Persistence |
| --- | --- | --- | --- |
| U-001 / C-001 | Root documentation/manifest/prompt/notices and all nine convention references inspected; supported owners, scope and frozen-history rules coherent. | None | `a7a3da2ea7ea384edd4525bbc2858b196176bdcc`; push/readback matched. |
| U-002 / C-002 | All five preparation/incorporation skill entries and thirteen focused references inspected; scope, ownership, QC and human checkpoints align. | None | `2fc398a3113d3a218989d952153d4c532c749233`; push/readback matched. |
| U-003 / C-003 | All manager/orientation/execution/steering entries and references assessed; owned effects, continuation and stopping gates are explicit. | None | `a5758ed0401b15cc2d5eb443a882fd124f92a49b`; push/readback matched. |
| U-004 / C-004 | All docs/report sources and current root/capability navigation assessed; two located documentation defects; four diagrams semantically inspected, rendering unavailable. | R-001, R-002 | This unit report checkpoint; commit/push readback established in Git before the next unit. |

## Assessment detail

### U-001 — Product scope, authority and conventions

Inspected root README/AGENTS.md, canonical/legacy manifest contract, greenfield prompt, usage/disclosure assets and root notices/license, ignore rules, and every sdd-conventions entry/reference. S-001–S-003 source-assessed: README explicitly distinguishes source checkout from installed package, local support from live acceptance and lack of universal format conformance; root AGENTS routes current owners without reproducing the workflow chain. Direct calls retain the same conventions and authority constraints; explicit user/project instructions control. Shared hierarchy, phase lifecycle, QC, modularity, identity and closed-record criteria are mutually consistent. The 3–5 decomposition preference is explicitly a heuristic with exceptions, not padding or a quota. No confirmed finding in this unit. Package portability/resource resolution and diagram implications are reserved for U-004/U-007 rather than inferred passed here.

### U-002 — Preparation and feature incorporation

S-004–S-007 source-assessed across sdd-design, sdd-specify, sdd-plan, sdd-tasks and sdd-integrate-feature. Main roots retain complete intended end-state contracts; logical design, behavior, delivery, physical placement and task status have separate owners. Feature overlays are conditional, stable task IDs are project-wide and transfer requires both lists in scope. SPEC-only incorporation preserves unselected active sources and reports their invalidation rather than expanding edits. Archive procedure keeps eligible sources/reports together, updates active links and freezes history only after closure. New PLAN strategy and layout have separate human/QC checkpoints; existing adequate layout is reusable. Missing upstream readiness triggers focused review; downstream owners cannot rewrite requirements/strategy to fit their outputs. Code-review/testing/report tasks are derived from PLAN rather than inserted during execution. No confirmed defect found at instruction-source level; actual consumer execution remains unverified.

### U-003 — Coordination, execution and recovery

S-008–S-012 source-assessed. Compared manager coordination/branch/QC/human/tracking/activation/bootstrap/credentials/Git/campaign/profile/examples/workflow sources with orient inspection and implement/steer execution references. Partial main-phase ranges pause without merge; complete phases integrate only after review/exit/hosted closure gates. Clean-tree continuation resolves outstanding publication first. Every owned commit, including ancillary report/status and merge commits, must be pushed/read back before independent or dependent work; uncertainty permits inspection/recovery only. Existing merge/publication is finished rather than duplicated; unrelated staging/dirty work is preserved. Steering updates existing owners, targets the paused branch, reconciles changed acceptance and stops without resuming implementation. Preparation, review, tracking activation, human acceptance and permission capability remain distinct. The new prerelease reminder is advisory and explicit review is candidate-scoped/report-only unless separately authorized. No confirmed instruction defect in this unit; these branch paths were assessed, not executed in a fresh product consumer.

### U-004 — Documentation, reporting and diagrams

S-013–S-015 assessed: all four README diagrams preserve owner handoffs, repair loops, authorization and stop branches; preparation prose explicitly preserves separate human checkpoints despite grouped design/PLAN-layout nodes. No semantic diagram defect confirmed. No Mermaid CLI/module is installed, so syntax/rendered legibility are not certified. Documentation/report owners consistently separate drafting from effects, verified results from intended outcomes, adjacent QC reports from implementation/campaign records and findings from accepted deferrals. Broad static discovery checked 166 current Markdown documents and 488 local link occurrences without loading closed record contents; candidate hits were manually classified. Fence-first headings, template-relative example links and inline bootstrap copy examples are legitimate template content, not confirmed broken source links/style defects. Actual package root navigation and current capability map misalignment produced R-001/R-002. Professional-module/API documentation is also assessed with executable tooling in U-006.

## Canonical findings

| Finding | Type | Priority | Disposition |
| --- | --- | --- | --- |
| R-001 | Defect | P2 | Open; proposed, no human acceptance/deferral recorded. |
| R-002 | Defect | P2 | Open; proposed, no human acceptance/deferral recorded. |

### R-001 — Packaged root navigation points at excluded source-only paths

| Field | Evidence / proposal |
| --- | --- |
| Type / priority / confidence | Defect; P2; high confidence from actual ZIP inventory and extracted-path resolution. |
| Baseline location / evidence | README.md, Plugin package and Testing with TextStats/current evidence links; AGENTS.md, Source and instructions. The pinned archive has 13 root link occurrences targeting absent acceptance/ or docs/ members (11 README, two AGENTS), including acceptance/textstats/README.md, acceptance/textstats/AGENTS.md, docs/dev/CAPABILITY-MAP.md and docs/dev/reviews/README.md. |
| Observation / consequence | Repository links exist, but those same relative targets cannot resolve in the delivered package. Explicitly saying source-only material is excluded does not provide a working destination for an installed reader/agent. Package orientation and evidence navigation are incomplete. This is a defect in current root documentation, not historical-record compatibility. |
| Bounded correction / owner | sdd-docs with sdd-manage package orientation: point source-only references in current packaged root files to explicit source-repository URLs (prefer pinned/version-associated provenance where appropriate), while keeping shipped resource references local. Preserve all closed records and the existing package exclusion contract. |
| Objective recheck | Extract the candidate archive and verify every root local link resolves within it; inspect source-only external targets at the chosen source provenance. Recheck README/AGENTS audience, scope and packaged-resource links. |
| Decision / dependencies | Open; proposed bounded root-document repair. No decision to expand the archive or claim live installation support is implied. |

### R-002 — Current capability map trails the supported workflow contract

| Field | Evidence / proposal |
| --- | --- |
| Type / priority / confidence | Documentation misalignment; P2; high confidence from current document/source comparison. |
| Baseline location / evidence | docs/dev/CAPABILITY-MAP.md, Core development workflows says feature retention under docs/dev/features/<campaign>, while workflow-identity.md requires matching <campaign>-<slug>. Its sdd-forge capability row describes tracking only, omitting the shipped highlights/package/workflow/release references; the map also omits the design-docs/default preparation baseline, per-commit publication and human created-document checkpoints present in current owners. |
| Observation / consequence | This current document claims to describe intended capabilities and present ownership/status, but sends readers to an incomplete capability model and a stale generic feature path. It can obscure release support and the required preparation/publication/human gates. It is not a closed campaign artifact. |
| Bounded correction / owner | sdd-docs/current map owner: reconcile the concise map with current supported capabilities and branch/artifact paths; link canonical release, preparation, publication, human review and optional prerelease policies rather than reproduce their detailed procedures. |
| Objective recheck | Compare every capability row and workflow/path rule with current entries and canonical owners; resolve current local links and check that gate summaries distinguish human acceptance, technical QC and publication. |
| Decision / dependencies | Open; map-only repair proposal. Does not authorize editing frozen history or redesigning the workflow. |

## Executed checks and limits

Source assessment is in progress. Local/package/external checks and unavailable facilities will be recorded in their owning units. Planned scenarios are not execution results.

## Readiness and revision handoff

Readiness not yet concluded: remaining units must be assessed. No repairs, release, live acceptance or main integration has occurred.
