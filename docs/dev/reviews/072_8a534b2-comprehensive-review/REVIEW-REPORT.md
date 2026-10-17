# Comprehensive SDD Manager review

## Campaign and evidence boundary

- Campaign: `072_8a534b2`; [review plan](REVIEW-PLAN.md), [coverage inventory](SOURCE-INVENTORY.md).
- Exact reviewed baseline: `8a534b21f6318f0b76b11a19783f7d40ca94d698`.
- Working branch/parent: `revision/072_8a534b2-comprehensive-review` / `main`.
- State: U-001–U-004 assessed; U-005 pending. Review remains open; no remediation is selected.
- Source/code inspection and bounded local verification only. No live agent/client/provider trial or source repair is selected. Package/acceptance/publisher bytes remain pinned to the baseline.

## Coverage

| Unit | Assessment | Findings / evidence |
| --- | --- | --- |
| U-001 | Assessed: core procedures in full; long projections/examples/source guides targeted; package metadata structurally checked | R-001. All 78 reference modules are linked by their own entries. All 102 package Markdown files pass the bounded local-link/heading check (613 links). |
| U-002 | Assessed: design/specification/strategy/task procedures and cross-owner gates; shared QC targeted where noted | R-002. Distinct document owners, first-approval versus current-readiness gates and explicit delivery/phase review units are coherent in inspected paths. |
| U-003 | Assessed: implementation/recovery, feature/steering, test/docs/verification and reporting interfaces | No additional finding; R-001 affects shared Git integration. Release-specific verification continues with U-004. |
| U-004 | Assessed: release/tracking contracts, publisher implementation, workflow/schema and targeted test bodies | R-003 (Low compatibility-policy clarification). 34 publisher tests pass; exact baseline 139-file archive verified; offline author validator: 0 errors, 48 cross-skill warnings. |
| U-005 | Pending | Acceptance component and consolidated verification. |

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

## Verification and limits

Current checks: 34 publisher tests passed in 2.755s on Python 3.12.14 with jsonschema 4.26.0. An initial run without the declared dependency ended with 17 subtest errors (`ModuleNotFoundError: jsonschema`); the configured rerun passed without source changes. Raw final output is retained in [publisher-suite.log](evidence/publisher-suite.log). Exact baseline build: 139 files, 367,679 bytes; SHA-256 `828cc6b323f86cf70d3e9a8220ada58417826ec1326fcc88cf33935d2eeb3970`, archive source comment and every member verified. [Author validation](evidence/author-validator.txt): exit 0, zero errors, 48 plugin-contained cross-skill warnings; those warnings qualify client handoff support, not package-root escapes. Also: baseline/worktree identity; 139-file package and 15-entry/78-module routing inventory; package Markdown local links/heading separation (102 files, 613 links). The first link-check shell invocation split a filename containing spaces and did not run successfully; rerunning with a structured Python argument list passed. No reviewed source was changed. Prior campaign checks are not results of this campaign. Coverage depths and remaining checks are retained with the unit reports. The final output is a review and proposed correction queue, with the campaign open for the human's revision decision.
