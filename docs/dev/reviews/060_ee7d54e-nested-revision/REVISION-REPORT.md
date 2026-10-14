# Nested revision campaign opening

Campaign **060_ee7d54e**. State: **V-001 through V-008 complete; open and unmerged**. Opening scope was pending; subsequent accepted scope and execution are recorded below.

## Identity and parent context

- Starting source: `ee7d54ef5f8516cfcf6232366929e3eb64e5e3ab`, verified against the published parent checkpoint.
- Working branch: `revision/060_ee7d54e-nested-revision`.
- Immediate parent: **059_937ec6c**, [coordinator-entry review](../059_937ec6c-coordinator-entry-review/REVIEW-REPORT.md).
- Integration and return target: `revision/059_937ec6c-coordinator-entry-review`, not main.
- Parent state: suspended, open and unmerged. Its focused review is complete; proposed coordinator revisions/contract remain unaccepted and unexecuted.

## Authorized opening and stopping boundary

The human requested a nested revision campaign. Reserved a new repository-wide identity, branched from the clean published parent checkpoint and recorded the child/parent association. No source changes, review findings, accepted correction objective or execution plan are inferred from opening alone. At opening, the child's substantive scope had not yet been supplied; no review or revision work had started.

Live acceptance remains excluded. Prior closed records and packaged source remain unchanged. The parent does not resume automatically. Any later accepted child execution uses its scoped plan, verification and per-commit publication; eligible final integration is an explicit two-parent merge into the refreshed parent branch, followed by merged-state checks, publication/readback and return to that branch. Child closure would not close or resume campaign 059.

## Opening verification

The highest prior repository-wide reservation was 059. Source and published parent SHA agree; worktree was clean. New active record links/heading spacing and the owned opening diff were checked. Publish/read back this opening before dependent work. No support suite or live trial is needed for campaign setup only.

## Accepted contract scope

The human subsequently requested creation of COORDINATOR-CONTRACT.md. [Revision plan](REVISION-PLAN.md) defines V-001: source-only contract and contributor navigation, with bounded documentation checks. Earlier scope-pending opening evidence remains historical. At scope acceptance: planned; child open, parent suspended. Coordinator source repair and final integration remain unselected.

## V-001 — Coordinator development contract

Executed after planning checkpoint `4af32d3376bfb9b68c5adbeade133d5eddfa9d87` was pushed/read back. Created the mixed contract, now preserved as [COORDINATOR-CONTRACT-DRAFT.md](COORDINATOR-CONTRACT-DRAFT.md), titled “sdd-manage development contract”: source-only purpose, coordinator responsibilities, essential entry gates, conditional ownership across all fifteen coordinator modules, recommended section jobs, composition/duplication review method and ten assessment contrasts. It distinguishes the coordinator's canonical orchestration role from PLUGIN.md's capability projection and keeps runtime instructions with packaged owners. No size quota, new workflow gate, runtime dependency or full procedure copy was introduced.

Linked the contract from CAPABILITY-MAP.md and root development AGENTS.md for future entry/module-boundary edits. README already routes source contributors through the capability map; no packaged user-facing claim changed. The parent entry findings remain unimplemented; contract creation does not mark those findings verified or resume parent execution.

### Verification

- Checked changed source documents: 53 local prose links/anchors resolve; heading spacing and Git whitespace checks pass. Literal examples in capability-map fences are excluded from path validation.
- Inspected the contract against current selection, coordination, HIL, publication, tracking, phase/stop and revision-mode owners and the parent review's accepted contract proposal. Its assessment cases specify source coverage separately from selected consumer trials; no model behavior is claimed.
- Compared every one of 134 packaged files with starting source Git blobs: unchanged. The contract, capability map and root development AGENTS.md remain source-only under native publisher package paths. Coordinator entry/references, tests, metadata and prior closed packages are unchanged.
- Full support/publisher suites and live acceptance were not run: this action changes only source-development documents and active campaign evidence/navigation. No release or provider operation performed.

The human explicitly instructed **not to close the campaign**. Publish/read back this action commit and stop on `revision/060_ee7d54e-nested-revision`; campaign 060 remains open and unmerged, with parent 059 suspended. Future accepted work retains the parent revision branch as integration/return target.

## V-002 — Temporary campaign placement

At the human's request, moved the contract from docs/dev/ into this campaign directory. Rebased its relative owner links and repaired this report's link; prose is unchanged. Removed V-001's permanent AGENTS.md/CAPABILITY-MAP pointers while the contract remains a campaign draft, and added direct active-campaign navigation. The original V-001 creation and verification remain historical evidence.

Checked all moved-contract and active-record links/anchors, heading spacing, Git whitespace and the full owned diff. Content comparison against `e6bad47c19c88671767598e10f4f483786094b5a` confirms only relative link destinations changed in the contract. Packaged source/tests and older closed records remain unchanged; no full suites or live acceptance required for this relocation. Publish/read back the relocation commit; campaign 060 stays open and unmerged, parent 059 suspended.

## Accepted V-003 scope

The human selected the general/specific split and Agent Package Author handoff preparation described in the [extended plan](REVISION-PLAN.md#v-003--general-skill-review-and-coordinator-specialization). The execution result follows below; all deliverables remain inside campaign 060. No APA repository/cache edit, coordinator source repair or integration/closure is selected.

## V-003 — General skill review and coordinator specialization

Executed after plan amendment `60aabd0bb23fd5595cc92f348ac2de6de17a9131` was pushed/read back. Preserved the prior mixed contract as COORDINATOR-CONTRACT-DRAFT.md, extracted a self-contained general review module and replaced COORDINATOR-CONTRACT.md with the SDD-specific specialization. Began the proposed APA revision handoff, using the installed APA entry/design/validation/authoring sources to identify tentative integration points. No APA repository, installed skill/cache or validator was edited.

| Current artifact | Role / actual change |
| --- | --- |
| [COORDINATOR-CONTRACT-DRAFT.md](COORDINATOR-CONTRACT-DRAFT.md) | Original mixed contract preserved byte-for-byte for provenance |
| [skill-review.md](skill-review.md) | General entry/module responsibilities, composition/language/ownership/progressive-loading review, scope/context and assessment/evidence method; no SDD-specific rules or repository links |
| [COORDINATOR-CONTRACT.md](COORDINATOR-CONTRACT.md) | SDD workflow selection/delegation, human document gates, task/push/tracking/integration/campaign boundaries, module coverage and K-01–K-10 specializations; applies general review by reference |
| [PROPOSED-REVISIONS.md](PROPOSED-REVISIONS.md) | Developing handoff: reading order, APA owner integration proposals, general-versus-domain boundaries and downstream verification; no claim of downstream implementation |

The new contract repeats selected general concerns only to specify the coordinator's concrete obligations and handoff contrasts. It explains that rationale, while general composition, review procedure and evidence assessment remain in skill-review.md. The preserved draft is comparison material, not the APA integration candidate. All new files and record updates are within campaign 060; permanent contributor pointers remain absent.

### Verification and limits

Verified the draft against the prior committed contract: exact SHA-256 `e0bf3d30dcd763dbacdc7dde58a3b9eef73bd9557898c532a930c3ce07ecc139`. Checked campaign Markdown links/anchors, heading separation, repeated blank lines and Git whitespace. Inspected abstraction coverage against the draft and current owners: general skill/module concerns are retained; SDD-specific Git/HIL/tracking/phase/campaign requirements stay in the specialization. The general module has no SDD identifiers, source-repository paths or external file dependencies. These mechanical checks support portability of its text, not actual model/client acceptance.

Compared all 134 packaged files with campaign starting Git blobs: unchanged. Runtime coordinator entry/references, tests and closed packages are untouched. The proposal distinguishes inspected installed APA structure from its unreviewed current repository and leaves downstream conformance/runtime checks to the receiving revision workflow. Full support/publisher suites, live acceptance and APA behavioral trials were not run for this campaign-only document action.

Publish/read back this action and stop. Campaign **060 remains open and unmerged** under the explicit human instruction; parent 059 remains suspended.

## V-004 — Independent coordinator contract

Corrected V-003's dependency on the extracted general module after the human rejected that link. COORDINATOR-CONTRACT.md now defines its own coordinator scope, gate/owner review path and evidence requirements, with no link to or prerequisite on skill-review.md. Updated the proposal's file-role description to identify the independent coordinator contract. General composition guidance remains in skill-review.md; bounded coordinator-specific review instructions are sufficient for this contract's intended use.

Checked current campaign links/anchors and Markdown spacing, and confirmed no general-module dependency remains in the coordinator contract. skill-review.md and the preserved draft retain their previous bytes; packaged source/tests and closed records are unchanged. No suites or behavioral trial required for this campaign-document correction. Publish/read back and stop with campaign 060 open/unmerged and parent 059 suspended.

## V-005 — Explicit reference-module review

Extended skill-review.md with a distinct reference-boundary section and adjusted shared dimensions, procedure and assessment contrasts. Composition, language, cohesion, duplication, ownership and fidelity remain shared; module-specific criteria now cover local purpose/scope, required parent context, inbound/child loading, shared owners and result/return. Procedures, explanatory guidance, contracts and examples are assessed according to role; references do not inherit skill-root activation, whole-workflow orchestration or entry metadata requirements. Missing context is judged against the documented reading boundary rather than a universal self-containment rule.

Updated PROPOSED-REVISIONS.md to carry explicit reference-review coverage and these boundaries into the APA handoff. The coordinator contract remains independent; preserved draft and runtime package are unchanged. Inspected the abstraction and role contrasts, checked campaign links/headings/spacing and the owned diff. No live trial, full source suite or APA implementation performed for this campaign-document extension. Commit/push/read back and stop with 060 open/unmerged and 059 suspended.

## V-006 — Structural separation of entry and reference review

Reorganized skill-review.md into shared review criteria, a dedicated Skill entry review section and a dedicated Reference module review section, followed by common procedure/evidence. Entry purpose/activation/metadata and root loading remain in entry review; local module purpose, scope, context, interfaces and procedure/guidance distinctions remain in reference review. Reference-specific assessment contrasts now sit within that section rather than the shared case table. Updated the APA handoff file-role description.

Reverse-outline recheck confirms distinct section jobs and common criteria available to both artifact types. V-005 criteria and exceptions remain: references are not compositional roots, do not acquire entry metadata/whole-workflow duties, and need not be independently self-contained when their documented parent context is required. Checked campaign links/anchors/spacing and owned diff; no runtime source, coordinator contract or preserved-draft edits. Both V-005 and V-006 checkpoints follow the publication/readback rule. No live trial or APA integration claimed. Campaign 060 stays open/unmerged; parent 059 suspended.

## V-007 — Assessment criteria instead of teaching the format

Removed the architecture explanation from the opening and similar standard-design exposition in shared/entry/reference sections. The module now begins with its review purpose; actionable purpose/activation, composition, boundary, context, loading, ownership and evidence criteria remain. APA’s existing format guidance retains conformance ownership. Checked coverage, campaign links/anchors and Markdown spacing; coordinator contract, preserved draft and runtime source remain unchanged. Commit/push/read back and retain 060 open/unmerged, 059 suspended.

## V-008 — Explicit routing for every reference

Added a dedicated entry-review routing subsection: every reference, including nested modules, is individually named/linked with purpose, scope/boundary and triggering/use conditions. The reviewer compares the complete inventory with routes, checks descriptions against targets and assesses request selection from SKILL.md before reference contents are loaded. File lists, vague labels, local child links and valid paths alone cannot satisfy the selection criterion. Reference-review onward routes and common assessment procedure/cases were aligned.

Updated the APA handoff integration and verification scope, preserving the distinction between this selected authoring/review policy and specification conformance. Checked campaign links/anchors/spacing and owned diff; runtime skills, independent coordinator contract and preserved draft remain unchanged. No APA implementation or live behavior claimed. Publish/read back; 060 stays open/unmerged and 059 suspended.
