# PLUGIN-CONTRACT revision report

Campaign **056_6a91259**; [campaign scope](REVISION-PLAN.md). State: **Open**.

Created the new campaign branch and records from main baseline `6a912594f7b9cb7b9ca5888947100f6a077ab48d`. The opening left contract content unchanged; subsequent human-directed revisions are recorded below.

The opening commit is published to the campaign branch and verified through Git remote readback. No merge or closure is authorized at this opening boundary.

## V-001 — Scope and motivation

Pulled human draft `0be161c` by fast-forward. Rewrote the first section into the composition hierarchy, two parallel purposes, skill-level progressive loading, distribution-only bundles, integrated skill composition and optional coordinator routing. Preserved the general architectural scope and conditional coordinator model.

Only “Scope and motivation” changed in the contract; the title and subsequent sections retain the supplied draft bytes. Meaning/section-boundary and Markdown spacing checks passed. No runtime or package behavior changed; suites were not rerun for this prose-only action. Commit/push/readback is the action boundary; campaign remains open, without integration.

V-001 wording follow-up: added “At the skill level” to connect the skill decomposition paragraph to the hierarchy introduced above, as requested by the human. No other contract wording changed.

V-001 composition follow-up: applied the accepted capability-module sentence and moved its paragraph directly after the opening hierarchy sentence. The two-purpose list now follows “This two-level decomposition serves two purposes”; the subsequent bundle discussion transitions to the plugin level. Remaining contract sections unchanged.

V-001 opening refinement: integrated the accepted shared modular-organization opening, skill-level explanation and plugin composition sentence, followed by “The modular architecture enabled by skills and plugins provides two major benefits.” Preserved the subsequent bundle/integrated-workflow/coordinator discussion.

V-001 paragraph refinement: combined the shared opening and skill-level explanation into the single paragraph supplied by the human; wording unchanged.

V-001 supplied-scope follow-up: pulled human update `dd9ffe9`; clarified common workflow capabilities as shared skills reusable by other bundled skills, preserving the software-library analogy. Corrected the integrated-entry sentence and separated it from the optional coordinator paragraph. Opening/benefits/bundle text and later contract sections remain unchanged. Meaning and section-boundary checks passed.

V-001 naming follow-up: applied the human-supplied sentence explicitly naming `PLUGIN.md` as the integrated plugin’s shared entry.

## V-002 — Grouped responsibilities

Replaced Purpose and audience, prior Responsibilities, Required coverage, Organization, Content boundaries and Review criteria with one Responsibilities section containing three subsections: Orientation and routing; Composite workflow definitions; Key operational requirements. Covered coordinator pointer, context, workflow selection/reassessment, progressive skill routing, workflow stages/handoffs, authority/stop, HIL, Git publication, backend tracking, branch/integration/continuity and visible evidence. Detailed procedures remain with owners.

Accepted Scope and motivation preserved verbatim. Root development AGENTS and capability-map link descriptions now match the revised contract. Source prose/links/spacing and first-section preservation checked; runtime/package source unchanged, so suites were not rerun. Campaign remains open and unmerged.

## V-003 — Review concerns and guidance assessment

Added four review concerns: canonical ownership and level of detail; concision and explicit guidance; ordinary-request routing; continuity and scope preservation. Selective summary duplication is intentional, while essential operational guidance must also be reachable from canonical skill entries. Changed the Responsibilities introduction to describe summary and routing rather than original workflow definition.

Added ten context/prompt/assessment cases directly to the contract, using Tetris/Calculator situations plus recovery, review/revision and release-message requests. Prompts omit expected skill/workflow names; assessment distinguishes initial phased scope, existing whole-project scope, features, steering, bounded execution and standalone operations. Expectations remain reviewer material, separate from consumer inputs.

Source coverage, scenario boundaries, relative links, Markdown spacing and accepted first-section preservation checked. No consumer/model run performed; these are assessment examples, not observed acceptance results. Runtime and packaged source unchanged; suites were not rerun. Campaign remains open and unmerged.

## Subsequent critical review

Performed the requested review at published contract baseline `9aeeb01`; [review report](REVIEW-REPORT.md) retains eight findings, proposed additions and organization. Contract and packaged source preserved. Findings are proposed revisions, without inferred acceptance or execution. Campaign remains open.

## V-004 — Critical review remediation

Executed the accepted plan for R-001 through R-008 after plan commit `5b69891` was published/read back. Preserved Scope and motivation verbatim; packaged PLUGIN.md, skills, acceptance tooling and publisher remain unchanged.

### Name assessment

Retained PLUGIN-CONTRACT.md and changed its title to “PLUGIN.md development contract.” The document still sets responsibilities, coverage and assessment criteria; its explanation and editing method support that contract. PLUGIN-GUIDE.md would understate the requirements, while PLUGIN-SPEC.md would suggest a detailed execution specification. A filename change would add navigation churn without clarifying the role more than the revised title and purpose do.

### Finding rechecks

| Finding | Changed coverage and result |
| --- | --- |
| R-001 | Purpose/use identifies source-only status, human/development readers, packaged subject and concrete coordinator. Source recheck passed. |
| R-002 | Composite summaries replace full-definition wording; visible obligations and deferred procedures have an explicit depth boundary. Source recheck passed. |
| R-003 | Nine-row concrete coverage/source map includes core workflows, artifacts/PROJECT, independent operations and operational gates. Source recheck passed. |
| R-004 | Six adaptable organization groups explain order and section jobs; prominence and merging rules supplied. Source recheck passed. |
| R-005 | Five-step bounded change/review method establishes canonical guidance before projection and checks affected cases/links. Source recheck passed. |
| R-006 | Sixteen identified cases state decision-relevant context, separate entry/discovery from execution boundaries and define evidence/outcome recording. Source recheck passed; consumer behavior unrun. |
| R-007 | Contrasts cover assessment/execution, tracking requested/declined, unpushed recovery, pending acceptance, highlights/full message, unavailable owner and non-Git mutation; separate canonical-access check included. Source recheck passed; trials unrun. |
| R-008 | Stopping rule explicitly names tagging/hosted release publication and preserves required Git publication. Source recheck passed. |

Root contributor and capability-map navigation now describe development/organization/assessment guidance. Checked 32 relevant source links/anchors, Markdown spacing, 16 case identities, accepted-section bytes and source/package path preservation. A preliminary broad link scan encountered a capability-map fenced illustration whose relative paths intentionally belong to its example context; the final scan assessed actual contract/contributor navigation, not literal example targets. No runtime suites or model/client acceptance runs performed for this source-only prose action.

Commit/push/readback establishes the action boundary. Campaign remains open and unmerged as explicitly requested; source rechecks do not imply observed guidance effectiveness.
