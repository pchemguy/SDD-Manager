# Absolutely prohibit version numbers in release artifact names

Campaign **141_951256a**; branch `revision/141_951256a-release-asset-enforcement`, from/returning to main **951256ad321a477a128c4fc1234665719901225b**. No suspended parent. **Authorized now: open campaign, inspect and plan. Stop before implementation, merge, closure or release.**

## Required result

**INCLUSION OF VERSION NUMBERS IN THE NAME OF ANY RELEASE ARTIFACT IS ABSOLUTELY PROHIBITED, REGARDLESS OF TYPE.**

This prohibition applies to every release artifact without exception based on type, format, extension, purpose, platform or packaging method. Unknown and newly introduced artifact types are covered automatically. It is not a recommendation, preference or naming default. A build tool's convention, an existing script, an expected upload list or passing checksums cannot authorize a version number in any release artifact name.

Any release artifact name containing a version number fails release acceptance. The agent must repair the producer and affected code, configuration, checksums and documentation, publish the corrected source, rebuild and obtain a passing check before creating/pushing a release tag, triggering a publisher, uploading or publishing. It must not waive the prohibition or report completion while such a filename remains.

Validate the complete actual artifact inventory, not a list filtered by known types or extensions. Every artifact name must be checked. Necessary variant suffixes remain stable across releases. No temporary rename or copied faulty manifest substitutes for persistent repair.

The agent must repair the persistent producer, checks, workflow and affected documentation, publish the source, rebuild and finish an already authorized release. The requested naming rule already exists; this campaign targets missed activation, execution and behavioral evidence, not another restatement.

## Evidence and diagnostic limits

At 951256ad321a477a128c4fc1234665719901225b, the forge entry, packaging owner, release lifecycle and verification owner already require the independent naming gate and repair loop. The coordinator's own Git release/tag procedure instead refers generically to required release checks; name acceptance is not an explicit local pre-tag condition there. The implementation phase handoff needs tracing too. Existing A-032 consumer coverage tests commit/tag/body agreement and recovery, not an explicit defective artifact producer with a forbidden publication transition. These are located routing/coverage gaps, not proof of which omission occurred in the reported consumer run.

The exact newly failing repository/release, asset names, loaded plugin identity and consumer trace are not identified in the current request. The read-only [release probes](release-probes.json) found stable names in the latest known SinglePage V1/V3 releases; V4/V5 latest-release endpoints returned 404. Those observations do not reproduce or refute the report. Do not present a guessed consumer failure as diagnosed.

## Ordered revision

| Action | Concrete change | Owners and objective check |
| --- | --- | --- |
| V-001 | Pin an actual failing consumer case: repository, tag/source, uploaded names, producer/workflow and loaded SDD package. Trace preparation, phase completion or direct release through the writer; identify the first skipped/incorrect gate. Add a disposable reproduction with the actual naming pattern. | Coordinator/forge/verify; retain observed evidence and separate missing information from confirmed cause. No mutation of a consumer repository without its selected repair scope. |
| V-002 | Establish the independent expected filenames when packaging is designed, before generating build/release scripts. Carry that contract into the existing packaging task and acceptance checks. State the absolute prohibition prominently in plugin/coordinator and release-owner entries, automatic phase-release handoff, tag creation, workflow dispatch and verification. Repeat the prohibition at these action boundaries; link the detailed procedure to its canonical owner. Direct, resumed and CI releases have the same mandatory gate. | manage Git release boundary, implement completion/handoff, forge entry/packaging/workflows and verify. Ordinary project development gets no extra artifact file, task, approval or global dependency. |
| V-003 | Make the project-local check executable in the existing project stack. Reject version numbers in every actual artifact name independently of whether the expected/upload manifest agrees. Inventory every produced/uploaded artifact; filtering checks by type or extension is forbidden. Also validate stable expectations independent of generator output, missing/extra/duplicate variants, checksum entries and advertised download paths. Run it before tag/publishing transitions and in generated CI before upload and publication. A tag-trigger-only builder needs a build-only path so it can produce/check the candidate before the tag. Missing evidence or any prohibited version number blocks the transition and requires repair; no automatic exception is permitted. | Existing build/release scripts, tests and CI; demonstrate a versioned candidate and a matching-but-faulty generated manifest both fail. Do not ban all digits or assume one suffix vocabulary. |
| V-004 | Complete the repair/rebuild loop: fix all producer/configuration/consumer links, checksum generation, install/release docs and current agent-authored naming assumptions; commit/publish, rebuild the pinned source and rerun the gate. A temporary upload rename or disabling the assertion is not a fix. Verify the draft and final hosted/latest set; retain normal old-tag/immutable recovery. | Coordinated maintenance with forge/verify/report. A second build/version must keep the same external names; no stale checksum, old-tag rebuilt content, duplicate publisher or success claim while names fail. |
| V-005 | Add dedicated isolated consumer/assessor acceptance for the scenarios below. Grade actual agent actions, persistent source changes, gate exit status/order and attempted publication, not a promised command or source-string test. Use existing TextStats isolation/evidence machinery with a controlled publisher for negative cases; reserve real publication for an explicitly selected test destination. | Acceptance coordinator and independent assessor. Run against a pinned revised package with ordinary release requests, without feeding the consumer expected repairs or forbidden-name hints. Missing isolation is an evidence gap, not a pass. |
| V-006 | Recheck the changed owner/entry projections, release documentation, local support contracts, package links and exact shipped source. Align README only where its behavior description changes. Present source, deterministic and observed-agent outcomes separately; close only the selected completed campaign scope. | Source verification and campaign reporting. No source-only claim that recurrence is fixed; retain failed first attempts and concrete unresolved behavior. |

## Acceptance scenarios

| Case | Required observed result |
| --- | --- |
| Version number in any artifact name, including matching generated upload/checksum lists | Gate rejects every offending artifact name; agent fixes the producing script and dependent paths and rebuilds with the required stable names. No tag/upload/publication before the required pass. |
| Unknown format, arbitrary extension and no extension | Versioned names are rejected in every case; the check has no type/extension allowlist that can skip an artifact. |
| Automatic phase release and direct standalone release | Both reach the same naming gate without a special reminder in the user request. |
| Generated CI and direct local publisher | Real failing check prevents publication; corrected source passes through both paths. Build-only does not publish. |
| Complete variant set | Every artifact name is checked; necessary suffixes are stable, the inventory is complete and unique, and latest links/checksums agree. A missing variant cannot fall back to an older latest release. |
| Two successive versions, unchanged product/variant identities | Outer asset names remain identical while tag and internal metadata change. Legitimate digits in a product name and architecture are accepted. |
| Resume after bad draft/upload or uncertain response | Agent inspects actual state, preserves valid work and ownership, repairs only within scope and cannot mark a naming violation complete. Existing published/immutable tags are not moved or clobbered. |

## Execution boundary

This plan does not change plugin instructions, scripts, demo projects or releases. Campaign stays open for plan review. Subsequent execution must resolve the failing-case identity, implement the bounded owner changes and obtain the stated behavioral evidence; it must not edit closed campaigns or add prior-revision narration to product instructions.
