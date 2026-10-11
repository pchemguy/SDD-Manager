# Comprehensive review revision plan

## Objective and authority

Address the four findings in the [review report](REVIEW-REPORT.md), adding the missing release validation and acceptance coverage while reconciling documentation. Campaign: `046_818d66f-comprehensive-review`; working branch: `revision/046_818d66f-comprehensive-review`; integration target: `main`.

Planning checkpoint: `c3e328fb7446f5085d7201a7d27bac0b7ec24624`. Refreshed product baseline after closing 045: `f4741d709d5969772124a071d6d7ad60f8aeb697`. Original reviewed source remains `818d66f6baf8e3a324d29f3430d3bac3278f0dd2`; retain original evidence and rebase provenance.

The human requested preparing this plan. Publish the plan and navigation, then stop before implementation or integration. The actions below are proposed execution scope, not completed work or execution authority. Reuse this active campaign; keep closed 045 and other historical records unchanged. These are revision action IDs, not executable product task IDs.

## Finding disposition

| Finding | Planned disposition | Boundary |
| --- | --- | --- |
| R-001 | Correct capability-map filenames | Use existing underscore filenames; no historical or product-file renames |
| R-002 | Reconcile README startup ordering | Preserve prerequisite inspection and publication before the bounded task audit |
| R-003 | Add release-boundary manifest conformance validation | Current manifest already conforms; preserve `extensions.com.openai.interface` |
| R-004 | Extend TextStats release acceptance coverage; separately specify client verification | Existing release behavior is already defined. Add test material and evidence, not duplicated production workflow implementation |

The TextStats acceptance coverage extension is a required component change in this revision scope: V-004 and V-005 implement the scenarios, consumer requests, assessor contracts, harness support, support tests and documentation. Component completion requires static validation and local support/regression checks. Running those scenarios with consumer agents, an installed client or a live provider is a separate acceptance campaign and is not a prerequisite for completing or integrating this component extension. Record that execution as deferred until selected.

All findings remain Open until their objective rechecks have actual evidence. R-004 may be partially addressed by implemented scenarios while consumer or installed-client execution remains Blocked/Not run; test definitions and support-suite passes do not close the evidence gap.

## Ordered revision actions

| Action / finding | Owners and affected files | Intended result | Dependencies and objective recheck |
| --- | --- | --- | --- |
| V-001 / R-003 | sdd-forge, sdd-tdd, sdd-verify; `.github/scripts/release.py`, `.github/tests/`, `.github/workflows/release.yml`, pinned schema and development dependency/provenance files | Validate the exact candidate manifest against the canonical Agent Plugins 1.0.0 core schema before creating package outputs or accessing the provider; both CI build and publication paths use the guard | First action. Missing/wrong `$schema`, unknown root fields, invalid core types/name constraints and non-object extension values fail; current manifest and object-valued `com.openai` pass. Failure creates no package or provider effect; build-only and recovery behavior remain valid |
| V-002 / R-002 | sdd-docs with sdd-implement/manage; README implementation diagram and accompanying prose | Show prerequisite orientation, outstanding verified commit publication/readback, bounded task persistence audit, then new task work | Independently executable after V-001 checkpoint. Trace unpublished retained commit plus invalid closing boundary: publish/read back first, block new work after audit failure. Preserve unrelated-work and unresolved-push stops; check diagram source and render if a facility is available |
| V-003 / R-001 | sdd-docs with sdd-design; `docs/dev/CAPABILITY-MAP.md` | Align feature architecture/decomposition names with owner instructions and README | Independently executable after V-002 checkpoint. Current map and design entry/reference guidance agree on `FEATURE_ARCHITECTURE.md` and `FEATURE_DECOMPOSITION.md`; current links resolve; no historical edits |
| V-004 / R-004 | sdd-manage, sdd-tdd, sdd-verify; TextStats catalog, consumer requests, independent assessor contracts/guides, coordinator instructions and maps | Add focused release-message scenarios using existing case/variant/checkpoint machinery and isolated successor fixtures | Inspect current catalog and coordinator contracts before editing. Allocate unused IDs from A-028 onward; exact grouping follows scenario dependencies below. Consumer inputs remain free of assessor expectations; failed/assisted attempts and independent evidence remain visible |
| V-005 / R-004 | sdd-tdd, sdd-verify; TextStats support tests and documentation | Verify meaningful harness support for new case selection, dependencies, source/body evidence and independent grading; document consumer/client execution profiles | Depends on V-004. Catalog validates, selected prerequisite/variant totals reconcile, missing or mismatched evidence cannot grade Passed, existing scenarios regress cleanly. No script-generated lifecycle trace is promoted to consumer acceptance |
| V-006 / all | sdd-verify, sdd-docs, sdd-manage; active review/revision report and applicable README/development navigation | Consolidate rechecks, unresolved evidence and full candidate scope; prepare eligible integration after execution authorization | Depends on V-001–V-005. Record precise source, actual checks and finding dispositions; full branch delta preserves closed records. Separate readiness for source changes from unavailable consumer/client evidence; never waive a selected required test |

Each executed action includes its source/evidence and `REVISION-REPORT.md` update in one checkpoint, followed by push and remote readback before further work. Create the revision report when execution starts. Keep original review observations; append decisions/results rather than replacing historical checks.

## V-001 implementation constraints

Vendor the exact canonical schema with its URL, specification version, retrieval identity/hash and applicable attribution. Use a maintained JSON Schema validator with an explicit development/CI dependency; schema validation must be offline and must not resolve remote schemas while loading/building a candidate. Wire dependency installation into both relevant CI jobs and document the local verification prerequisite. Preserve Python 3.11 compatibility and deterministic package selection; validation assets/tooling do not enter the installed skill package by implication.

Validate the candidate Git object's manifest, not an unrelated working-tree copy. Update valid publisher fixtures to include required `$schema`, then add negative fixtures proving rejection before archive output/provider access. Validate core schema constraints without inventing OpenAI interface semantics or a three-component namespace minimum. Bundled sibling-relative references retain plugin-root containment; standalone-skill restrictions are not added to this guard.

## V-004 release acceptance scenarios

Use a dedicated TextStats product repository and a pinned immutable SDD Manager package. Derive version, refs, coverage boundaries and current human content from observed product state, not fixed historical values. Each trial records exact consumer request, before/after files, Git/provider evidence where applicable, interventions and an independent assessment.

| Scenario group | Consumer behavior to observe | Independent acceptance evidence |
| --- | --- | --- |
| Routing and first preparation | Request “collect release highlights”; separately request “prepare release message” | Highlights-only request retains its narrower scope; complete preparation produces root `RELEASE-NOTES.md` with established version and covered-source context; neither request creates release commits/tags/provider releases |
| Repetition and human content | Repeat preparation unchanged, then repeat after deliberate human additions and newer delivered scope | Semantic no-op when current; meaningful human material preserved when refreshing; complete message includes relevant scope beyond the changelog without invented claims |
| Freshness | Request release with stale notes, including notes whose version matches but source coverage does not; also check a version mismatch | Consumer checks local coverage/context and version, refreshes before publication, and does not use matching version alone as proof of freshness |
| Atomic failure and recovery | Cause an actual controlled save failure during replacement, then resume from observed state | Prior notes remain byte-identical; no partial replacement or downstream release effect; recovery inspects current state before retry and records the original failure |
| Release body and persistence | Consume current notes through the release workflow and retry a completed or uncertain boundary | Complete Markdown body agrees with the native release commit and observed GitHub release; tag peels to that exact release commit; retries reconcile/reuse effects; final notes remain until preparation is repeated |

Preparation/repetition/freshness cases use consumer evidence with native Git where available. Save-failure injection is a controlled variant with genuine consumer response, not a simulated passing trace. Provider behavior needs distinctly labelled controlled and optional live-provider variants; controlled evidence cannot establish live GitHub publication. Respect actual predecessor checkpoints and isolated fixture branches so failure cases cannot corrupt the positive sequence.

Update TextStats OBJECTIVES, catalog range/coverage statements, SCENARIO/EXECUTION/RECOVERY/DIAGNOSTICS and VARIANTS where affected, plus README and developer maps at their appropriate detail levels. Acceptance mechanics stay in TextStats; ordinary SDD skill entries do not load assessor contracts or coordinator instructions. The capability map describes the existing release workflows and their test coverage accurately, without presenting harness extensions as new user-facing functionality.

## Independent consumer and installed-client execution

Preparing test material does not start a live acceptance campaign. Before consumer execution, establish the dedicated test repository, selected cases/variants, fresh consumer and independent assessor contexts, pinned source and actual facilities under TextStats AGENTS/SETUP. No previous destination or production repository is selected by assumption. Source implementation and support checks may proceed under later execution authority while this separate run remains unselected.

Installed-client verification is a separate profile: record client/version, installed package identity, root-only manifest discovery, skill discovery, OpenAI presentation where supported, a sibling-reference load and a named cross-skill handoff. Explicitly loading source files proves source execution only. Missing client facilities remain Not run; do not add vendor-specific portable-manifest fields to manufacture a pass.

A live GitHub release trial requires its own explicitly selected destination and effects. No release/tag/publication, CI dispatch, installed-plugin mutation or repository creation is authorized by this plan-preparation request. R-004 remains an evidence gap wherever these observations are unavailable.

## Verification and completion

Run meaningful targeted checks after each action. For the coherent candidate, run:

```text
PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v
PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s .github/tests -v
```

Also validate the catalog through its existing CLI, validate the candidate manifest offline, inspect the actual package inventory/content, and check changed current Markdown links/spacing plus `git diff --check`. Record interpreter/environment; the original 113/27 results are baseline evidence, not the new expected counts or fresh checks. Where Python 3.11, rendered diagrams or hosted CI cannot run, state the limit without claiming success.

After later execution authorization, assess the complete campaign delta and required rechecks before explicit two-parent integration into refreshed `main`. Merge summary must include objective, actual review/delivery, verification/limits, original opening and branch-off provenance, the 045 rebase base, and actual parent tips. Verify and publish the merged target before closure; preserve branches and historical evidence. Deferred consumer/client observations remain explicit in the final report and release-readiness assessment.

## Execution authorization and result

On 2026-10-11 the human requested execution. V-001–V-006 are implemented with evidence in [REVISION-REPORT](REVISION-REPORT.md); integration follows its actual verification/publication gate. The TextStats component extension is included; consumer/client/live-provider scenario execution remains deferred as planned.
