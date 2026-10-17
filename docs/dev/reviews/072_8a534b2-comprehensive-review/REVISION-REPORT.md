# Campaign 072 revision report

## Authority and baseline

The human requested planning and execution after the comprehensive review. [Revision plan](REVISION-PLAN.md) accepts R-001–R-004 within their bounded corrections. Original review remains evidence for `8a534b21f6318f0b76b11a19783f7d40ca94d698`; revision starts at `9279a389e3b06034c6fe04f433fc00fcc5f65365` on `revision/072_8a534b2-comprehensive-review`, returning to `main`.

State: V-001–V-004 verified; V-005 combined candidate checks pass. Final main merge, merged-state verification/publication and return remain. Live acceptance and release operations are excluded.

## Actions and finding disposition

| Action | Finding | State | Evidence |
| --- | --- | --- | --- |
| V-001 | R-004 | Verified: local checker correction | Native version/tag subject regression plus retained body/tag/publication sensitivity; 15 focused tests pass. |
| V-002 | R-001 | Verified: source/native directions | Explicit merge-purpose dispatch, receiving context and completion-only exits; six native two-parent contrasts pass. |
| V-003 | R-002 | Verified: source/interfaces and component extension | Eight policy traces; five package/template tests pass; catalog validates. Live behavior unrun. |
| V-004 | R-003 | Verified: publisher contracts | Stable/prerelease metadata accepted, malformed metadata and mismatched committed version rejected; 36 tests pass. |
| V-005 | All | Candidate verified; final integration pending | 139 support/36 publisher tests, package/schema/catalog/routing/current links pass. |

The selected R-002/R-003 policy decisions are recorded in the plan. Existing review probes and failures remain unchanged. No prior closed record is reopened.

## V-001 — Observe release subjects without a hidden oracle

Removed exact `Release <tag>` spelling from mechanical agreement. Capture now retains the UTF-8 subject and its assessment limit in provenance; independent A-032 assessment checks it against the selected version/tag/project contract. Exact body bytes, peeled tag/source and published readback predicates remain required. Updated release scenario/common guidance and A-032 criteria without adding a consumer answer.

The new native Git contrast failed against baseline: `Release 1.0.0` produced false agreement, while the tag subject lacked the newly required provenance field (one behavioral failure and one missing-field error). [RED log](evidence/V-001-red.log). After correction, all 15 release-capture tests pass in 3.035s, including whitespace/newline, changed-body, wrong-tag and unpublished-readback negatives; [GREEN log](evidence/V-001-green.log). Command: `PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -p test_release_capture.py -v`. This is native helper/sensitivity evidence, not agent or provider acceptance.

## V-002 — Separate synchronization from completion

Git workflow guidance now establishes merge purpose before boundary checks. Completion retains the creation-parent/return requirement. Authorized incoming synchronization preserves the active receiver's identity, original parent, pending scope/decisions and HANDOFF; it does not require an unfinished phase to finish or authorize its outward merge. Both directions retain full incoming-diff inspection, verification, explicit two-parent persistence and publication. Synchronization messages identify actual incoming/receiving provenance rather than claim campaign closure.

Routed preparation propagation, existing-revision baseline incorporation and reopened catch-up explicitly to that purpose; continuity and examples carry the receiving-context rule. Updated the source contract/capability projection and added K-14. PLUGIN/coordinator entry loading and README's completion summary already route to these owners and need no duplicate procedure.

Source traces cover default preparation → active phase → feature creation/feature completion → phase, existing revision catch-up and reopened catch-up/final return. [Native fixture](evidence/V-002-native-git.py) and [result](evidence/V-002-native-git.json) execute six two-parent merges with deliberate receiver HANDOFF reconciliation, preserving branch-off/parent/scope/stage/stop; an unfinished phase stays outside main. The fixture verifies Git topology/state, not an agent interpreting the instructions or remote publication. Command: `PYTHONDONTWRITEBYTECODE=1 python docs/dev/reviews/072_8a534b2-comprehensive-review/evidence/V-002-native-git.py`.

## V-003 — Resolve the selected template policy before writes

Main preparation now resolves prospective AGENTS policy before its projection/branch/setup steps. Tracking selection distinguishes user choices, applicable project policy and token-only recommendations. Authorized adoption of the bundled template applies its target-project default at that point; existing AGENTS, explicit decline/local-only and resumed decisions are preserved. Copying does not reset the mode or prove prior compliance, and policy supplies neither access nor missing operation authority. Phase activation and forge preparation/projection receive the established selection/source.

Aligned AGENTS_TEMPLATE and the full README, current source contract/map and K-15; PLUGIN.md and the coordinator entry retain their existing route to canonical preparation/selection without a plugin-wide default. Extended MAIN-PREPARATION/A-001 assessment and qualified the token-only fidelity control so it does not assume away an adopted policy. These are acceptance-component extensions, not executed consumer scenarios.

[Eight source/interface contrasts](evidence/V-003-policy-scenarios.md) cover no-choice adoption, explicit enable/decline, existing policy, no policy, resume, copied-template override and unavailable access/projection. The current catalog validates all 33 cases; five native package/document pinning tests pass in 1.895s ([log](evidence/V-003-package-tests.log)). Command: `PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -p test_package_docs.py -v`. Template pinning checks bytes/source boundaries, not whether a consumer follows the revised policy. No source-text tests were added as substitutes for that behavior.

## V-004 — Support build metadata without weakening version equality

The publisher accepts an optional `+build.metadata` suffix with nonempty dot-separated ASCII alphanumeric/hyphen identifiers. Stable/prerelease behavior and exact tag-to-committed-manifest equality remain. The handoff guide documents this publisher subset, including metadata in exact equality; the core schema and package version are unchanged.

New handoff and actual Git/ZIP package tests reproduced four baseline errors for valid stable/prerelease metadata ([RED](evidence/V-004-red.log)). After correction all 36 publisher tests pass in 2.765s ([GREEN](evidence/V-004-green.log)). The contrasts reject empty/repeated/invalid metadata and a different otherwise-valid metadata suffix, while archive manifests retain the exact committed version. Command: `PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=<declared-jsonschema-environment> python -m unittest discover -s .github/tests -v`. Python 3.12.14/jsonschema 4.26.0; no provider or release operation.

## V-005 — Combined candidate and finalization

Tested committed candidate: `c326394b696a4bd40e9ef64d4e871883681d0f4c`; package, acceptance and publisher source were clean at execution. [Verification record](evidence/V-005-verification.json) identifies actual results and limits.

| Check | Result | Evidence / limit |
| --- | --- | --- |
| Support suite | 139 passed, 43.495s | [Raw log](evidence/V-005-support.log); component/native fixtures only. |
| Publisher suite | 36 passed, 2.693s | [Raw log](evidence/V-005-publisher.log); controlled provider, no GitHub call. |
| Catalog | 33 cases / 48 variants validate | Static asset/dependency/DSL validation, no new consumer grades. |
| Exact committed package | 139 files, 369,443 bytes; manifest version 0.15.0 | [Build record](evidence/V-005-package.json); every member/source comment verified. Source root AGENTS/HANDOFF excluded, bundled HANDOFF asset retained. |
| Offline author validator | Exit 0, no errors, 48 sibling-reference advisories | [Output](evidence/V-005-author-validator.txt); client handoff behavior unproven. |
| Current Markdown | 213 files / 938 links and heading separation pass | [Output](evidence/V-005-markdown.txt); no full rendering/external-link claim. |
| Routing / preservation | All 78 references linked by 15 entries; prior closed records unchanged | Exact diff/identity check; original review evidence retained. |

The package SHA-256 is `863f7413b0775d8cc2296344c6b42e6e1bdf76c56e5856e1b4228ba480aca628` for that exact candidate/archive comment; later metadata-only commits have distinct source identities. Source/module composition was rechecked across caller/owner boundaries: synchronization retains receiving scope; template policy resolves before writes; capture retains observed subject with independent grading; publisher metadata remains part of exact version equality. No new PLUGIN procedure, skill, reference, registry or tracking backend was introduced.

Finding disposition: R-001 Verified by source/native topology; R-002 Verified by source/interface contrasts and component extension; R-003 Verified by publisher regression/build contracts; R-004 Verified by native capture regression. These qualifications do not claim live agent/client/provider acceptance. The baseline review/probes remain historical evidence of the original findings.

All action checkpoints were published/read back before the next action: V-001 `1ce9c67e727e22557c5c1c2914257ce6b5e25ca1`; V-002 `fdfdf1d5de2e276dbcf8f1a0cf8b86448f15d7d8`; V-003 `ecb2ef9a3e8a7e8822ec2a474f468583921eab43`; V-004 `c326394b696a4bd40e9ef64d4e871883681d0f4c`.

## Integration and closure boundary

Finalization records and HANDOFF are ready for the selected explicit two-parent merge into refreshed main. Verify the prospective merged state and publication before closure; an unresolved check/push retains this operation rather than starting another campaign. The containing integration commit/parents and exact remote containment establish final closure without embedding a future self-SHA. Keep the campaign branch; return the worktree to main without new development/release work.

Remaining evidence limits: no live consumer/receiver, provider publication, installed-client or hosted Actions run; no Python 3.11 or cross-platform compatibility run. The selected acceptance changes extend the component only. No source-only passing count removes those limits.
