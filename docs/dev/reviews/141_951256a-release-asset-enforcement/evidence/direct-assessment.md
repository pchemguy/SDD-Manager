# Direct controlled naming trial assessment

**Disposition: Failed broad permanent-gate acceptance; successful compliant first controlled publication.** The consumer completed the requested local Orion 1.2.3 release, repaired its stable-name producer/checksums/docs/CI, and retained real failing-before-passing evidence. The final published metadata is correct. A mandatory enforcement gap remains: the permanent project gate accepts explicit integer versions such as `orion-v9` when the expected list is also faulty, and then the direct release entry reaches provider access.

This is a separately selected focused follow-up under ARTIFACT-NAMES.md and COMMON.md. It is not a full TextStats/catalog result, a live GitHub result, or installed-client acceptance. No other trial scope is included here.

## Native identities and observed release

| Fact | Observed value |
| --- | --- |
| Pinned source | `78fea804e5d46aa5bd23cf181fb4c9f0fb15a9e8`; every one of 170 package files matches |
| Initial native commit | `7ec357c3bc8f91b47fd1be21aa57900f6184c44c` |
| Release commit | `66bd066659538369acd5115d38cc263823349294` |
| Annotated tag object | `95892f29c5fc544b71aacf467e34c1bbae2b7fec`, `v1.2.3`, peeled to release commit |
| Reached HEAD | `f4544c0d85c3a54e76cd8ff2cfba98cac098ffee`; only later HANDOFF differs |
| Branch/remote | Sole `main`, clean tree, no remotes; local-only publication explicitly selected |
| Notes/raw commit body/provider body | Exact bytes agree; SHA-256 `9a007fda84ad5f5f53798c5af0c64d2f09e5f0d9263eccb2f90e4c60aef2337d` |
| Controlled state | One publish event; release/latest records equal and state `published` |

The complete rebuilt/recorded inventory is `SHA256SUMS` (151 bytes), `orion` (36 bytes), and `orion.opaque` (36 bytes). Both payloads hash to `5b1573dc2478d6cf3c749ccb4012cf5bfdc367f4e61a07d09eff30f9fa3f2e61`; checksums hash to `d5f5c87b6f44b8cb3b4a0b972e6f2343585f04444a5c3f769beef534424bc0d7`. Independent clean builds from the tag match every provider-recorded name/hash. The provider stores metadata, so this does not constitute downloaded-byte verification.

## Fact and criteria matrix

| Criterion | Disposition | Evidence class | Finding |
| --- | --- | --- | --- |
| Ordinary controlled request and context separation | Verified with limitation | Observed-agent / coordinator provenance | Exact dispatch contains ordinary release request and in-scope repairs, no assessor criteria or naming hints. Coordinator reports fork_turns=none. Shared host/tools do not establish OS isolation or installed-client activation. |
| Pinned package identity | Verified | Source | All 170 pinned package files match native source 78fea804e5d46aa5bd23cf181fb4c9f0fb15a9e8; no extras at initial or final snapshot. |
| Standalone owner/entry loading | Verified | Observed-agent | Journal captures PLUGIN.md, sdd-manage, forge packaging/release/message, verify, orient, tdd, docs and report reads. No task-list workflow or fictitious phase was introduced. |
| Initial defect and independent stable contract | Verified | Source / observed-agent | Native initial build emits orion-1.2.3.opaque, orion-1.2.3 and SHA256SUMS. Journal establishes stable contract before producer changes; manifest was absent initially. |
| Executed failure before passing | Verified | Observed-agent / deterministic | Journal lines 1963–1999 preserve helper exit 1 and producer-regression failure before producer repair; lines 2286–2294 preserve project gate exit 1 on old output. Later tests/gates pass before tag. Assessor baseline rebuild independently rejects old names. |
| First-attempt preservation | Verified with limitation | Observed-agent | Journal retains two initial command-submission syntax failures, genuine RED outcomes and a template-whitespace exception. Direct run has no reported coordinator repair intervention. No runtime transcript beyond the retained journal was available. |
| Permanent producer/checksum/docs/CI repair | Verified | Source | Tagged build emits stable names, checksums enumerate those names, README/notes/contract are updated; direct release invokes build then gate before supplied provider; workflow gates build-only path and calls same release entry for optional publishing. |
| Complete actual inventory coverage | Verified structurally | Source / deterministic | Gate iterates every staging entry without extension filtering, checks complete expected equality, regular nonempty files and exact checksum coverage. This does not eliminate the separate version-notation gap. |
| Dotted arbitrary format and extensionless matching-manifest rejection | Verified | Deterministic | orion-v9.8.7.bespoke and orion-v9.8.7 added to producer, checksum list and matching faulty expected manifest: helper/project gate exit 1; release entry stops after gate, zero provider attempts. |
| All explicit version notation independently rejected | Failed | Deterministic | orion-v9.bespoke and orion-v9 with matching faulty manifests/checksums pass project gate (exit 0), then release entry attempts provider; assessor intercept exits 77 before execution. Pinned helper correctly rejects both (exit 1). |
| Legitimate product/architecture digits | Verified | Deterministic | Project gate and pinned helper accept orion2-arm64.opaque and orion2-amd64; product regression also passes. |
| Clean tagged-source rebuild and tests | Verified | Deterministic | Disposable checkout at exact release commit: 12 tests pass, build and both gates exit 0; all three rebuilt names/hashes equal controlled provider record. |
| Native commit/tag/body/source agreement | Verified locally | Source / controlled-provider | Annotated v1.2.3 peels to 66bd066659538369acd5115d38cc263823349294 on main first-parent history; retained tagged notes, raw commit body and provider body are byte-identical. Later f4544c0 only changes HANDOFF. |
| Actual provider/latest completion | Verified controlled only | Controlled-provider | One actual publish event; v1.2.3.json equals latest.json, state published, exact tag/source and all three stable assets/hashes. No real hosting or downloaded bytes were available. |
| Repeated completed consumer request | Not checked | Observed-agent | Only one release.py invocation is present in journal; no repeated completed request or resumed operation was assigned/executed. |
| Provider replay idempotence | Verified for semantic state only | Deterministic | Two repeated copied-provider calls against copied completed state exit 0, add no publish event and preserve state bytes. Client still rewrites latest.json on every replay; this is not zero-write or consumer retry acceptance. |
| Two-version stable-name behavior | Verified build-only; consumer scenario not checked | Deterministic | Owned copy builds 1.2.3 and 1.2.4 with identical three external names and changed embedded version/hash; no second consumer release/tag/provider record exists. |
| CI / live hosting / installed client | Not checked | Scope limitation | Workflow inspected but not executed on GitHub; only local Python 3.12.14 exercised. No live GitHub, installed-client activation or native download-integrity acceptance. |
| Original-state preservation | Verified after cache cleanup; procedural deviation retained | Assessor procedure | Original product/provider/state snapshots are byte-identical. Assessor import created one pinned helper __pycache__ file; only that generated file/empty directory was removed. Final complete package inventory/bytes equal initial snapshot; no source file was changed. |

## Open finding DIRECT-NAMES-001

The permanent `scripts/check_release.py` regex requires numeric components separated by punctuation, while its exact-value test only covers the current `1.2.3` forms. It misses an explicit other integer version such as `-v9`. This is unambiguous version notation recognized by the pinned helper, not a legitimate product/architecture digit.

Each assessor negative used a separate owned product copy. The producer itself generated an additional candidate, the checksum list covered it, and the faulty `release-artifacts.json` exactly matched the complete actual inventory. The real release function executed real build/gate subprocesses. Its external provider command was intercepted before launch, so an accidentally passing gate could not touch the original provider.

| Added candidate | Bundled helper | Permanent project gate | Actual release-entry behavior |
| --- | --- | --- | --- |
| `orion-v9.8.7.bespoke` | Exit 1 | Exit 1 | Stops before provider; zero attempts |
| `orion-v9.8.7` | Exit 1 | Exit 1 | Stops before provider; zero attempts |
| `orion-v9.bespoke` | Exit 1 | Exit 0 | Provider attempted, intercepted exit 77 |
| `orion-v9` | Exit 1 | Exit 0 | Provider attempted, intercepted exit 77 |

No original provider effect occurred in any assessor experiment. For the failing integer-version cases, prevention came from assessor interception, not the project gate. The broader mandatory gate condition therefore cannot receive a pass. The consumer's stronger pretag helper check protected this particular published release, but the permanent direct/CI path only invokes the weaker project gate.

## Evidence and limits

The retained consumer journal records bundled helper rejection, producer regression RED, project-local rejection, corrected passing checks, committed-source rebuild, tag creation, provider output and actual readback in order. It also preserves two early command-submission syntax failures and the inherited disclosure-template whitespace exception. The initial native versioned producer was independently rebuilt and rejected in an owned copy. The final tagged source independently passed 12 tests, both gates, complete inventory and hashes.

Only one consumer release invocation and one controlled publish event are demonstrated. Two copied-provider replays preserved semantic state and added no event, but the client still rewrites latest metadata. An assessor-only build comparison for 1.2.3 and 1.2.4 preserves names while changing embedded metadata/hash. Neither establishes a second consumer release, resumed operation, or repeated completed-request behavior.

The exact ordinary dispatch is retained at `/tmp/sdd141-direct-dispatch.txt`. Coordinator provenance says it used `fork_turns=none`; the shared host and tool access are not OS-enforced isolation. No live GitHub publication, actual CI run, installed-client activation, or artifact downloads were tested.

Original product, provider and provider-state snapshots are unchanged. A procedural assessor deviation is retained: importing the pinned helper generated one Python bytecode cache file. Only that generated cache and its empty directory were removed; full final package inventory/bytes again match the initial snapshot. No package source file was changed. Original first attempts and consumer history remain intact.

Raw checks, exits, stdout/stderr, owned copies, snapshots and experiment facts are retained under `/tmp/sdd141-assessor-direct-evidence/`, particularly `facts.json`. The assessment JSON is `/tmp/sdd141-assessment-direct.json`. All assessment execution used local Python 3.12.14 and no external service calls.
