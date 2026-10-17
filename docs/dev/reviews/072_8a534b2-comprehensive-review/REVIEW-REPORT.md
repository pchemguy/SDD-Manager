# Comprehensive SDD Manager review

> Revision continuation: the human selected corrections after this assessment. R-001–R-004 are rechecked in the [revision report](REVISION-REPORT.md); baseline observations and review-only decisions below retain their original scope.

## Campaign and evidence boundary

- Campaign: `072_8a534b2`; [review plan](REVIEW-PLAN.md), [coverage inventory](SOURCE-INVENTORY.md).
- Exact reviewed baseline: `8a534b21f6318f0b76b11a19783f7d40ca94d698`.
- Working branch/parent: `revision/072_8a534b2-comprehensive-review` / `main`.
- State: review complete; campaign open and unmerged for the human’s revision decision. Review remains open; no remediation is selected.
- Source/code inspection and bounded local verification only. No live agent/client/provider trial or source repair is selected. Package/acceptance/publisher bytes remain pinned to the baseline.

## Review result

Four proposed findings: **three Medium and one Low**. R-004 is a reproduced checker false negative; R-001/R-002 are instruction/policy gaps established by source tracing; R-003 is a nonblocking version-policy clarification. No Critical/High finding was established within this review's scope and depth. No finding is repaired or accepted by this assessment.

| ID | Priority / type | Needed revision |
| --- | --- | --- |
| R-001 | Medium — instruction ambiguity | Separate incoming baseline synchronization from final integration into the creation parent. |
| R-002 | Medium — bootstrap policy gap | Resolve when the generated AGENTS tracking default takes effect, before its dependent writes. |
| R-004 | Medium — checker defect | Accept the permitted release subject contract instead of requiring a hidden exact tag spelling. |
| R-003 | Low — compatibility policy | Document the publisher version subset or support the intended build-metadata form consistently. |

All 139 package files, 15 skill entries and 78 references are accounted for, alongside 178 source/support paths: 317 baseline paths total. Per-file performed depth distinguishes full-content/code readings, targeted interfaces and structural checks; no full line-by-line audit of every supporting guide/test is claimed. The review does not establish production release readiness or fresh-consumer/client acceptance.

## Coverage

| Unit | Assessment | Findings / evidence |
| --- | --- | --- |
| U-001 | Assessed: core procedures in full; long projections/examples/source guides targeted; package metadata structurally checked | R-001. All 78 reference modules are linked by their own entries. All 102 package Markdown files pass the bounded local-link/heading check (613 links). |
| U-002 | Assessed: design/specification/strategy/task procedures and cross-owner gates; shared QC targeted where noted | R-002. Distinct document owners, first-approval versus current-readiness gates and explicit delivery/phase review units are coherent in inspected paths. |
| U-003 | Assessed: implementation/recovery, feature/steering, test/docs/verification and reporting interfaces | No additional finding; R-001 affects shared Git integration. Release-specific verification continues with U-004. |
| U-004 | Assessed: release/tracking contracts, publisher implementation, workflow/schema and targeted test bodies | R-003 (Low compatibility-policy clarification). 34 publisher tests pass; exact baseline 139-file archive verified; offline author validator: 0 errors, 48 cross-skill warnings. |
| U-005 | Assessed: coordinator/contracts, all consumer prompts, case asset/graph validation, targeted harness and test review | R-004 reproduced. 138 support tests pass; 33-case/48-variant catalog validates. No live acceptance performed. |

## Findings

### R-001 — Distinguish completion integration from incoming baseline synchronization

- **Type / priority / confidence:** instruction ambiguity; Medium; high confidence in the source mismatch, no observed agent failure.
- **Baseline locations:** `skills/sdd-manage/references/git-workflows.md:39` (Merge, verify, and publish step 3); `branch-management.md:51–52` (preparation propagation and existing revision synchronization); `revision-modes.md:43` (bring reopened branch forward). All paths are under the packaged skill root.
- **Observation:** the shared merge procedure unconditionally requires the target to be the recorded creation parent and restores that parent's suspended context. It is also the general Git integration procedure used when accepted default-branch preparation must be propagated inward to an active phase/revision, or a reopened campaign must catch up with its refreshed target. Those are incoming synchronization merges, not completion into the incoming branch's creation parent. No explicit distinction tells the agent which identity/return rule applies. The preparation clause authorizes a scoped incoming merge but does not qualify the shared parent test.
- **Consequence:** a literal caller can block a required baseline propagation or seek an unnecessary human exception; treating every merge as child completion can also restore the wrong HANDOFF context. This is a procedural ambiguity, not evidence Git itself rejects the merge.
- **Reproduce:** read the cited procedures with an unfinished phase branched from default, then accept/publish new preparation on default. Follow preparation step 5 to merge default into that phase before creating a feature. Apply the generic step 3: its completion-parent test does not describe this source/target relationship. The same contrast applies to merging updated default into an existing revision branch.
- **Bounded correction / owner:** `sdd-manage` Git/branch/revision-mode owners should distinguish authorized incoming synchronization from final workflow integration. Retain the creation-parent gate for completion, full incoming-difference/authority checks for synchronization, and direction-appropriate HANDOFF reconciliation. This requires no relaxation of partial-phase or unrelated-work gates.
- **Dependencies / decision:** no new product decision required; proposed correction is not accepted or implemented.
- **Objective recheck:** trace updated default → unfinished phase → new feature, then completed feature → that same phase; also reopened campaign catch-up → final campaign return. Verify each source/target, HANDOFF owner, scope, publication and stop without an unnecessary exception, unfinished phase merge or implicit parent resumption.

### No-finding observations from U-001

Core workflow selection distinguishes purpose from greenfield/brownfield starting state, supports direct coordinator entry and keeps established contextual follow-ups with their owner. Document HIL, scoped future preapproval, range stops and per-commit publication are prominent and have canonical routes. Continuity deliberately uses checkpoint-plus-delta recovery rather than per-commit handoff maintenance; its scheduled review-task atomicity and parent-return restrictions are explicit. Main initialization keeps its four-file presence test separate from generated HANDOFF metadata. Existing tracking decisions, credentials and hosted outcomes are not inferred from file presence. The manifest keeps the pinned schema first and presentation under `extensions.com.openai.interface`; metadata/assets stay inside the package. These are source/structural observations, not installed-client or consumer acceptance.

Long README/entry/catalog/contract/example/demo content received targeted composition, navigation and cross-owner checks; a complete line-by-line audit of every long example is not claimed. The spelling `Coordintator` in the discovery report template is a minor editorial follow-up, not a separate operational finding.

### R-002 — Resolve tracking policy before installing its default

- **Type / priority / confidence:** bootstrap policy gap; Medium; medium-high (documented paths conflict; no live startup trial).
- **Baseline locations:** `assets/AGENTS_TEMPLATE.md`, GitHub tracking and Documentation preparation; `skills/sdd-manage/references/main-preparation.md:8–10`; `tracking-decision.md`, decision table rows for token/no choice, no choice and confirmation pending; packaged README, Main preparation tracking. Paths are package-relative.
- **Observation:** generated AGENTS enables GitHub tracking for preparation and implementation by default and requires docs-main/nine issue readback before repository modifications. Fresh preparation first consults optional selection; token/no-choice asks for confirmation and pending choice permits independent preparation. No step resolves the prospective template's policy before the DOCS-001 writes that install it. README presents the generated policy as the preparation default. Explicit enable/decline and existing controlling AGENTS paths are clear; this finding concerns a fresh repository with no decision or AGENTS.
- **Consequence:** one permitted reading initializes without projection and only then acquires an instruction requiring projection before those writes; another pauses for a confirmation despite the advertised project default. Agents can produce different bootstrap boundaries from the same inputs.
- **Reproduce:** start source tracing with an eligible fresh Git repository, no root AGENTS and no tracking selection. Follow the pending-choice row into main preparation, then DOCS-001's unchanged AGENTS copy. Compare the resulting tracking policy and pre-write gate with the operations just allowed. Repeat with explicit decline as the preserving contrast; do not infer a grant from a supplied token.
- **Bounded correction / owner:** establish when the selected AGENTS template's project-level default is adopted and resolve it at preparation tracking selection, before dependent writes. Alternatively state a deliberately prospective-only policy consistently. Preserve explicit decisions, existing controlling instructions and optional tracking outside this project-template policy; do not turn it into a plugin-wide default. Keep README/template/canonical procedure aligned.
- **Dependencies / decision:** confirm intended effective time of the project-template default during revision planning. Proposed only; no text or tracking behavior changed here.
- **Objective recheck:** fresh/no choice, fresh/explicit enable, fresh/explicit decline, existing AGENTS policy and interrupted initialization each yield one stated policy before writes. Required preparation projection precedes writes whenever that policy enables it; a later copy neither invents consent nor retroactively claims a satisfied gate. Add the no-choice bootstrap contrast to acceptance without claiming a source trace proves consumer behavior.

### No-finding observations from U-002

PROJECT, ARCHITECTURE, DECOMPOSITION, SPEC, PLAN, layout and TASKS have distinct semantic ownership and bidirectional conflict routing. The main brief is discoverable without a mandatory fixed heading schema. PLAN defines meaningful delivery increments and review exits; TASKS derives project-wide stable IDs and mandatory review tasks without padding the 3–5 heuristics. Dedicated review units are excluded from delivery counts but remain executable tasks. PLAN/layout technical and human checkpoints are distinct. QC currency distinguishes material contract/decomposition changes from ordinary checkbox/evidence edits. Read-only review, direct author calls, scope limits and accepted feature incorporation retain separate authorities. No additional finding established in these inspected paths.

### No-finding observations from U-003

The implementation entry and task completion owner both require HANDOFF in milestone/phase review-task closing commits, with the substantive report, evidence and initial checkbox; no additional handoff task or per-commit audit is imposed. Selected next-N ranges include review tasks and cannot append an extra review outside the range. Startup distinguishes eligible retained publication from known-invalid completion, with bounded forward recovery and explicit separation of acceptance, historical composition and authority. This does not require blanket reapproval of an unchanged grant or automatic history rewriting.

Feature incorporation keeps source retention/archive eligibility, current versus historical owners and scope-limited QC distinct. Transferring a task requires both lists in scope and retires its second executable entry; archived feature reports retain provenance rather than becoming main-phase reports. Steering has direct amendment ownership and restores the paused target without resuming tasks. Test design requires independent expectations and observed failure evidence; verification classifies failed/blocked/not-checked conditions and stays read-only. Documentation findings refer governing changes to the human. Report formats distinguish actual evidence, hosting, working-branch acceptance and target integration. These source interfaces align in the inspected paths; they have not been exercised by a fresh consumer here.

Reporting templates/examples received targeted presentation/interface inspection rather than execution of their illustrative examples. Release verification contracts are cross-checked with forge/publisher in U-004.

### R-003 — State the publisher's version subset or accept build metadata

- **Type / priority / confidence:** compatibility-policy clarification; Low; high confidence in reproduced validation mismatch. Nonblocking for current `0.15.0`.
- **Baseline locations:** `.github/scripts/release.py:26–27, 183–185`; `.github/RELEASE-HANDOFF.md`, `tag` field; `.github/schemas/plugin.schema.json`, version property. Reproduction: [publisher probes](evidence/publisher-probes.py), [observed result](evidence/publisher-probes.json).
- **Observation:** the handoff documents `tag` as `v` followed by the source manifest version. The pinned core schema accepts a string version such as `0.15.0+build.1`; publisher manifest validation accepts it too, but handoff validation rejects its matching `v0.15.0+build.1` because the tag regex has no build-metadata suffix. This is not a current package schema failure or evidence of a failed hosted release.
- **Consequence:** a future manifest using SemVer build metadata can conform to the core schema and the documented equality rule yet fail the release/build-only entry. The supported publisher subset is not stated in the handoff guide.
- **Reproduce:** run the campaign probe with the declared jsonschema dependency available. It validates the altered manifest in memory, then submits an otherwise valid build-only handoff; observed `ValueError: Tag must be a version tag`. No release/tag/provider operation is attempted.
- **Bounded correction / owner:** decide whether the repository intentionally restricts version syntax. Document and consistently check that subset, or allow the intended build-metadata form while preserving exact tag/manifest equality and invalid-input rejection. Add a positive/negative contract contrast in publisher tests. No version change is proposed for this review.
- **Dependencies / decision:** project version policy decision; proposed only.
- **Objective recheck:** current stable and prerelease forms retain behavior; selected metadata support either passes both gates or fails at a clearly documented version-policy boundary. Arbitrary tag strings and source/version mismatch still stop before provider writes.

### No-finding observations from U-004

The publisher enumerates committed nested package bytes, rejects nonregular content, checks required preparation/HANDOFF assets, validates the pinned offline schema, rebases archive names and compares every emitted file with its Git object. Build-only avoids provider mutation. Controlled lifecycle tests exercise draft reuse, missing-only uploads, asset conflicts, uncertain effects, direct acknowledged-ID readback, pagination, peeled tags and latest policy. The workflow separates tooling and exact candidate, passes handoff as data and compares the publication rebuild hash with the build result. Tests do not establish GitHub's runtime acceptance of the workflow.

Tracking modules use native milestones, exact issue markers and complete readback; DOCS issues retain first-approval semantics and docs-main closes after published integration. Release-message/highlights contracts distinguish source coverage, curated complete body, retained final notes, ignored internal checkpoint and verified-consumption cleanup. Release body/tag equality and version checks remain explicit agent-side gates; no fresh semantic-curation, installed-client, actual CI or live-provider trial was run.

### R-004 — Release capture rejects a subject allowed by the workflow

- **Type / priority / confidence:** acceptance-checker false negative; Medium; high, reproduced with native disposable Git objects and controlled supplied readback.
- **Baseline locations:** `acceptance/textstats/cases/assessor/release_capture.py:106,111–114`; `cases/assessor/A-032.json` requires release agreement; packaged `skills/sdd-report/references/object-drafts.md:123` permits `Release <version/tag>`. [Probe](evidence/release-subject-probe.py), [observed contrast](evidence/release-subject-probe.json).
- **Observation:** the production reporting contract permits `Release 0.15.0` as well as a tag-based subject. Capture instead requires exact `Release ` + tag, then includes that predicate in overall `release_agreement`. The release scenario controls require inspection of the native subject/body but do not establish this narrower exact tag spelling.
- **Consequence:** A-032 deterministic evidence can reject a conforming consumer solely for its permitted version-based subject, inviting unnecessary intervention or misattribution to the plugin. Passing current support tests does not cover this valid contrast.
- **Reproduce:** run the retained probe. Both fixtures have byte-identical notes/commit/provider bodies, a tag peeled to the exact release commit and published controlled readback. `Release 0.15.0` yields all agreement checks true except subject and overall agreement; `Release v0.15.0` yields overall true. The probe performs no provider operation or consumer workflow.
- **Bounded correction / owner:** TextStats release capture/contract owner should validate the actual established subject contract, or accept both permitted version/tag forms. If exact project wording is required, make it an explicit input/fixture decision rather than a universal hidden oracle. Keep exact body/source/tag/publication checks independent and intact; do not narrow the plugin merely to satisfy the checker.
- **Dependencies / decision:** no plugin behavior change needed. A bounded checker correction and regression contrast are proposed, not executed.
- **Objective recheck:** accepted version-based and tag-based subjects with exact agreement pass; changed body, mismatched tag/source and unpublished readback still fail. If an explicit expected subject is selected, mismatches fail against that supplied authority, with helper evidence still distinguished from independent acceptance.

### No-finding observations and limits from U-005

The acceptance coordinator distinguishes immutable source pins, fresh consumers, independent assessors, fixture actions, controlled/native/live-provider evidence and historical outcomes. Variant accounting keeps missing required evidence blocking, optional results separate and legacy grades unsplit. Repository-only variants withhold the coordinator's state/authorization summary, preserve ordinary producer records, allow branch-choice interactions and distinguish prepared worktree, published branch and default-clone limits. These are implemented assessment contracts, not receiver behavior demonstrated here.

Current helpers use committed/explicit dirty package pinning, mode-sensitive hashes and nested-package boundaries. Recovery exports retain index stages/objects/workfiles and merge metadata, while unavailable ancestry and uncertain hosted effects remain unknown. Literal capture does not load expected results, retains actual channels/provenance and labels failed capture. Case assets/graph/DSL were validated across all 33 IDs; consumer prompts were inspected. Long repeated assessor guides/JSON bodies received structural and targeted interface assessment, and test bodies were selectively inspected in addition to running the complete suite. No claim of full line-by-line audit or fresh agent assessment is made.

The optional repository-only receiver route is documented separately from the normal producer/current-state renderer; default assisted-core results must not be graded as receiver-only portability. This review establishes no failure of that documented receiver protocol. Required facilities and actual selected consumer trials remain separate from component validation.

## Proposed correction queue

This is a review handoff, not an accepted revision plan.

| Order | Finding / owner | Bounded work and recheck |
| --- | --- | --- |
| 1 | R-004 — TextStats release capture/contracts/tests | Remove the hidden subject overconstraint; add native positive version/tag subject contrasts and retain negative body/source/publication sensitivity. Independent of plugin changes. |
| 2 | R-001 — coordinator Git/branch/revision-mode procedures | Distinguish inward synchronization from workflow completion and reconcile HANDOFF by direction. Trace default → active phase/revision, child → creation parent and reopened catch-up/return. |
| 3 | R-002 — template/main-preparation/tracking/README owners | First choose the project-template default's effective point. Align prospective policy selection and pre-write projection without imposing a plugin-wide default or overriding existing decisions; extend no-choice and explicit-decline contrasts. |
| 4 | R-003 — repository publisher/handoff/tests | Choose/document version syntax or support selected build metadata while preserving exact version/tag equality. Current 0.15.0 needs no version change. |

Reassess coupled projections and acceptance contracts after the selected corrections, run relevant local suites, and retain behavioral evidence as a separate scope. All findings remain Open/proposed; none has an inferred human acceptance, deferral or waiver. Live acceptance remains outside this campaign's selected review.

## Verification and limits

Tested source: baseline `8a534b21f6318f0b76b11a19783f7d40ca94d698`; reviewed package/acceptance/publisher source stayed unchanged on the campaign branch. Python 3.12.14, jsonschema 4.26.0. This runtime result does not demonstrate Python 3.11 or hosted CI.

| Check | Actual outcome / evidence | Limit |
| --- | --- | --- |
| TextStats support suite | 138 passed, 49.647s; [raw log](evidence/support-suite.log) | Harness/component fixtures, not independent consumers. |
| Publisher suite | 34 passed, 2.755s; [raw log](evidence/publisher-suite.log) | Native Git/ZIP and controlled provider contracts; no GitHub call. |
| Catalog | Exit 0; 33 supported cases, 48 declared variants | Asset/graph/DSL validity, not runtime grades. |
| Exact baseline package build | 139 files, 367,679 bytes; every member and source comment verified; [result/probe](evidence/publisher-probes.json) | No installation, publication or client loading. |
| Offline author validator | Exit 0; 0 errors, 48 cross-skill warnings; [output](evidence/author-validator.txt) | Plugin-contained sibling links qualify client handoff support, not package-root escapes. Core schema does not assess OpenAI presentation semantics. |
| Current Markdown | 207 files, 904 local links/anchors and heading separation passed; [output](evidence/current-markdown-check.txt) | Bounded parser; no complete rendering/list-attachment or external-link check. Earlier package-only check: 102 files/613 links. |
| Routing/assets | 15 entries link all 78 references; 19 SVG/PNG structures/headers checked | Reachability and structure do not prove selective loading, appearance or behavior. |
| Release subject counterexample | Permitted version subject falsely rejected; tag subject control passes; [native contrast](evidence/release-subject-probe.json) | Demonstrates checker behavior, not consumer or provider execution. |
| Source/preservation inventory | 317 baseline sizes/digests verified; package/acceptance/publisher and prior closed contents unchanged; [check](evidence/source-preservation.json) | Performed review depth remains explicit in the inventory. |

Exact package SHA-256: `828cc6b323f86cf70d3e9a8220ada58417826ec1326fcc88cf33935d2eeb3970`. The archive was built in a disposable clone at the baseline; its source-commit comment accounts for a different archive hash from builds at other commits with the same package tree. No new release was prepared or published.

Two local invocation failures were resolved without changing reviewed source: the first link-check shell invocation split a filename with spaces; a structured argument list passed. The first publisher run lacked the declared jsonschema dependency and ended with 17 subtest errors; loading the declared 4.26.0 dependency produced the passing run above. Owned generated bytecode was removed. Prior campaign test results are not this campaign's evidence.

Reproduce the two diagnostic contrasts from repository root with the declared publisher dependency available:

```text
python docs/dev/reviews/072_8a534b2-comprehensive-review/evidence/publisher-probes.py
python docs/dev/reviews/072_8a534b2-comprehensive-review/evidence/release-subject-probe.py
```

The normal suites remain the commands in acceptance/AGENTS.md. Catalog command: `python acceptance/textstats/cases/assessor/catalog_tools.py validate`. Existing tests pass despite the newly reproduced subject counterexample; they do not clear R-004. Renderer/current-state producer tooling was not used as a repository-only receiver handoff.

Unit checkpoints were committed, pushed and exact-tip read back before advancing: U-001 `ffc381bc1e70f2cc73968229cfeba3fd4c33c4d6`; U-002 `4a42f67824d2013bde39caefe12b6bb341a67776`; U-003 `3c7742e9e1dd8463ea865615952fa9e5dc2f543e`; U-004 `2a8f89ef4e239db74c4adb96b2af4eff5cbe08c2`; U-005 `2c1516205481db9dcf53130085fe597acb9f7cf9`. This consolidated checkpoint's containing commit/publication are discoverable through Git; no self-SHA is embedded.

Unrun: live agent/client/provider acceptance, actual Actions execution/remote workflow validation, external-source fact-checking, full diagram/UI rendering and independent compatibility testing on other runtimes/platforms. Closed reports were not loaded as a work queue or assessed for current compatibility. The completed output is the published review and proposed queue; campaign remains open/unmerged, with no source repairs, remediation execution or release selected.
