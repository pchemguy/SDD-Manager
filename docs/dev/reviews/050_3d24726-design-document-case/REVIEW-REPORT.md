# Architecture and decomposition capitalization review

## Campaign and evidence

- Campaign: `050_3d24726`; [review plan](REVIEW-PLAN.md).
- Reviewed baseline: `3d24726abb4ca2a17f15fbb89c9c6fca2e93fe27`.
- Original opening: `8aedeaacfdaa6d888537cdba7cd6f2a7c0ebe4b8`.
- Working branch: `revision/050_3d24726-design-document-case`; target: `main`.
- Evidence: [current-source inventory](evidence/case-inventory.json), 102 matching lines across 36 files, plus inspected shared Markdown guidance and immediate context. Includes plugin/README, skill sources/references/metadata, capability map, acceptance contracts and current examples. Closed packages and historical exploration transcripts are excluded from current validity assessment.
- State: focused review complete. Three low-priority editorial recommendations are proposed; no source changes or integration performed.

## Conclusion and proposed convention

Capitalization should identify the referent. Uppercase is appropriate for named development documents or their established shorthand; lowercase is appropriate for the design concept or activity. Normal heading capitalization is a separate presentation choice. Exact filenames/paths retain their actual spelling.

| Context | Preferred form | Example |
| --- | --- | --- |
| Canonical development document/path | Exact uppercase basename, preferably inline code | `docs/dev/ARCHITECTURE.md`, `DECOMPOSITION.md`, `FEATURE_ARCHITECTURE.md`, `FEATURE_DECOMPOSITION.md` |
| Document shorthand, already established by context | Uppercase | Read ARCHITECTURE and DECOMPOSITION before SPEC |
| Artifact/output enumeration | Consistent uppercase document names/shorthand | PROJECT, ARCHITECTURE, DECOMPOSITION |
| General design concept or activity | Lowercase, subject to normal sentence capitalization | architecture decisions; component decomposition; task decomposition |
| Human-readable reference heading | Normal heading capitalization | Architecture; Decomposition; Task-list conformance and decomposition review |
| Existing skill reference or focused-child directory | Exact literal path | references/architecture.md; references/decomposition.md; docs/dev/architecture/ |
| Verbatim user request, fixture, machine value or example | Preserve literal meaning/syntax; assess before any edit | plugin keyword architecture remains lowercase |

For the quoted PLUGIN sequence, **PROJECT, ARCHITECTURE, DECOMPOSITION** is better: the parentheses enumerate the design owner's document outputs alongside SPEC, PLAN and TASKS. This is a document reference, not a generic discussion of architecture. The same correction applies to the corresponding README diagram label. Backticks can mark identifiers in prose; Mermaid label text should use the names directly unless its rendering conventions require otherwise.

## Findings

### R-001 — Normalize explicit document-output/root references

Priority: low; type: case/terminology inconsistency; confidence: confirmed by immediate context; status: proposed.

| Baseline location | Existing use and reason | Proposed treatment |
| --- | --- | --- |
| PLUGIN.md, Project preparation and bounded delivery | sdd-design output parentheses contain PROJECT followed by lowercase architecture/decomposition; adjacent stages name their artifacts in uppercase. | PROJECT, ARCHITECTURE, DECOMPOSITION |
| README.md, Project preparation Mermaid label | Same mixed document-output list. | PROJECT, ARCHITECTURE and DECOMPOSITION |
| PLUGIN.md, sdd-design routing handoff cell | Handoff names the PROJECT contract followed by architecture/decomposition or feature deltas; it describes produced documents. | Name ARCHITECTURE/DECOMPOSITION explicitly, retaining the canonical brief link and feature qualification |
| sdd-manage/references/branch-management.md, Preparation integration gate | Preparation project documents include PROJECT, architecture/decomposition and children. The sentence explicitly identifies documents. | ARCHITECTURE/DECOMPOSITION and children |
| sdd-design/SKILL.md, ownership paragraph | Both architecture and decomposition may have focused children immediately after named file owners. Children are document children. | Both ARCHITECTURE and DECOMPOSITION may have focused children |
| sdd-design/references/decomposition.md, Existing systems and changes | Main architecture and decomposition describe the intended system, contrasted with feature documents and accepted incorporation. | Main ARCHITECTURE and DECOMPOSITION |

Recheck these six locations by semantic context, not a global case replacement. Retain the existing names, paths, ordering and workflow boundaries; no document rename or behavior change is required.

### R-002 — Clarify mixed stage/artifact wording where useful

Priority: low; type: context-dependent readability recommendation; confidence: contextual, not every candidate is a defect; status: proposed.

- sdd-manage/references/workflows.md, main-development Typical path: Exploration → architecture/decomposition → SPEC → PLAN/layout → TASKS mixes activity names and artifact identifiers. Choose a consistent artifact-oriented path (with exploration separately identified) or explicitly name activities throughout. Preserve the actual separate ARCHITECTURE and DECOMPOSITION stages and human checkpoints.
- The same workflow file's preparation operation names the PROJECT brief, then architecture/decomposition while assigning artifact authoring. Explicit document names would make that handoff clearer.
- sdd-design/references/decomposition.md asks to read the relevant architecture root and children. This is an input document; ARCHITECTURE root would be clearer while references to testing or revisiting architecture as a design remain lowercase.
- sdd-plan/references/delivery-plan.md says map the accepted architecture and decomposition to SPEC behavior. This can validly refer to accepted design models; use uppercase only if the sentence is meant to select the governing documents as inputs.
- Capability-map and presentation metadata describe developing architecture/component decomposition as capabilities. Lowercase is valid. Do not turn general capability descriptions into artificial filename lists merely for uniform case.

Do not mechanically uppercase before architecture, architecture work, architectural decisions or component decomposition. Where the sentence refers to a stage/process, lowercase is meaningful. If a specific artifact is required, naming its file directly removes ambiguity.

### R-003 — Add a concise shared casing rule

Priority: low; type: missing editorial convention; confidence: confirmed from the inspected Markdown style source; status: proposed.

[Shared Markdown style](../../../../skills/sdd-conventions/references/markdown-style.md) defines spacing, nesting, literal preservation and review scope but not this document-versus-concept distinction. A short rule there would support consistent authoring by all owners without adding duplicate local policies.

Proposed rule: **Use exact uppercase development-document names or established uppercase shorthand when referring to the documents. Use ordinary case for general concepts and activities; preserve literal paths, machine values and quotations.** Include a small architecture/decomposition example only if needed. Do not introduce a universal all-caps heading rule, filename linter or broad uppercase replacement.

## Appropriate usages and preservation cases

The canonical root/feature filename references inspected are already uppercase; no lowercase canonical root filename violation was found in the inventoried current material. Existing lowercase architecture.md/decomposition.md are skill sub-workflow references, and lowercase architecture/decomposition directories hold focused document children. They are not evidence that the root documents are misnamed.

Lowercase is justified for architecture decisions, observed architecture, project/architecture choices, component decomposition, phase/milestone decomposition, delivery/task decomposition and generic capability keywords. Sentence-initial Architecture and headings such as Decomposition follow ordinary presentation case. The acceptance A-004 contract/decomposition phrase concerns material change/readiness, not necessarily the named DECOMPOSITION document; it is not a confirmed case defect.

The Jules Workflow Loading prompt example refers to conceptual workflow stages; preserve it unless that example is separately revised. Current examples/templates were included in discovery, but quotations and machine syntax were not normalized. No historical report/example compatibility repair is proposed.

## Revision scope and verification

A bounded future revision can address R-001's six confirmed locations and R-003's shared rule, then reconcile R-002's ambiguous paths/handoffs individually. Keep general lowercase terms, reference paths, headings, metadata keywords, literal examples and closed records unchanged where appropriate. If diagram label text changes, check its source/meaning; do not claim fresh rendering without a renderer.

Checked scoped report headings/links, inventory source provenance, allowed Git paths and unchanged source/closed records. No runtime tests, package build, fresh diagram rendering, external research, client or provider operation was performed: this is a source/editorial review. Publish the report and stop on the open branch before revisions or main integration.

## Accepted correction evidence

The human authorized planning/execution with a concise shared rule. R-001–R-003 are revised through V-001 in [REVISION-REPORT.md](REVISION-REPORT.md); generic concepts, literal paths/metadata and quoted examples are preserved. Baseline findings above remain retained. No global replacement or document rename occurred.
