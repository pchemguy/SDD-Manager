# Prerelease review — SDD Manager 0.15.1

## Identity and current state

Campaign 081_5b2442e; baseline 5b2442e3315da91bcbc8ccd0efc14c0c59106b27; branch revision/081_5b2442e-prerelease; creation parent/integration/return main. The human explicitly selected prerelease preparation and patch bump. [Plan](REVIEW-PLAN.md), [preparation](REVISION-PLAN.md), [execution](REVISION-REPORT.md).

State: U-001–U-003 assessed; no unresolved required defect found in the selected review. P-001 candidate 47360015b3fe727b655b48d013d1361f0a7c9319 was published/read back. One non-substantive wording polish below means published U-001 commit ddb86fc926ddc2cfbd15946946c75a9c3672645d is the exact updated candidate. Campaign 080 is closed by the baseline's verified published merge; its records remain frozen. Current source has its five verified corrections, original CMD body and separate client/provider evidence limits. Campaign 081 remains open at preparation, without release publication.

## Coverage

| Unit | State | Findings / evidence |
| --- | --- | --- |
| U-001 | Assessed; no substantive finding | Current source/metadata/documentation composition checkpoint |
| U-002 | Assessed; no required defect | Exact 0.15.1 package/runtime/support checkpoint |
| U-003 | Assessed; no required defect | Complete release-range accounting, notes and validated build-only handoff |

No canonical finding was needed. The refreshed notes identify the assessed candidate and actual evidence. No tag, hosted release, live acceptance or client installation selected.

## U-001 — Current product, instructions and documentation

Inventoried all 154 package files, 15 complete skill entries, 79 references, optional scripts/guides, assets/presentation and maintained source/contributor/demo/acceptance/publisher material. Exact Git comparison to campaign 080's fully corrected/tested c5c6ae908978e55341011a254864698ff6f4400d initially found only plugin.json different across the product and maintained source scopes; the new value is 0.15.1 and all other manifest fields agree. Reused the immediately preceding complete domain/composition assessment for those exact unchanged bytes, with its no-consumer/client/provider limits. Did not reopen or routine-load closed campaign contents.

| Concern | Current assessment and basis |
| --- | --- |
| Entry/routing and portability | All 15 entry/presentation contexts match; 15 default prompts contain the correct named skill, both icon paths exist and SVGs parse. The sole manifest retains portable core/client-extension separation. Actual installed discovery/activation remains unrun. |
| Coordination and preparation | Current template is concise policy/routing. Canonical main preparation owns the complete pre-write/approval/QC/integration procedure and permits only the explicitly bounded transient projection lock. The optional backend/JSON/assessor agree; no broad filesystem permission is inferred. |
| Exploration, design and bounded delivery | Current source matches the assessed complete owner/reference set: examples remain illustrative; each phase is a useful bounded increment and full-version intent is distinct from the simplest initial slice. No technology catalogue, quota or generic feature-phase split is imposed. |
| Execution, tracking, steering and return | Same source-matched single-task result/evidence/checkbox, per-commit publication, eligible-phase projection, separate review/testing and parent return/stop gates. No task owner or release effect is invented for this campaign. |
| Guides, API docs and reference boundaries | Root/package audiences, substantial focused procedures and shallow routing remain coherent. Canonical CMD body/quote notice and source-only helper API contracts are preserved. One awkward phrase, “establishing/read-backing projection”, was polished to “establishing and reading back projection”; no policy or interface changes. |
| Public claims and evidence | README/contract distinguish supported instructions, synthetic/native support and unrun consumers/clients/providers. Earlier root release notes are pending refresh in U-003, not current-candidate readiness. Previous release/version results are not relabelled as new. |

Executed structural validator: exit 0, 0 errors, 48 existing plugin-contained sibling/client-handoff warnings. Current navigation covered 219 selected maintained/active Markdown files, 1,042 local links and 269 heading fragments with no unresolved actual target or package escape; 11 frozen targets were existence-checked without loading. Heading/marker/tab screening found no candidates. The wording polish was inspected separately; no reference path/heading/activation changed. Diagrams' unchanged source semantics retain prior assessment, not a new rendering trial. Closed records and historical run content remain excluded.

No new substantive canonical finding. The small authorized editorial polish updates the candidate source pin at this unit's published commit. U-002 must use that exact updated source; passing this unit does not certify package/runtime or release-message readiness.

## U-002 — Candidate runtime, support and distribution

Exact candidate: ddb86fc926ddc2cfbd15946946c75a9c3672645d, containing patch 0.15.1 and the bounded U-001 wording polish. Current available local runtime remains Linux/Python 3.12.14 and Node v24.19.0. The declared jsonschema==4.26.0 source-tooling dependency is available. No new runtime dependency or packaging workflow was introduced.

| Check / evidence class | Observed result and limit |
| --- | --- |
| Candidate support suite | 139 tests passed, zero failures/skips, 86.174 s: python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v. This tests support infrastructure, not fresh consumer acceptance. |
| Candidate publisher suite | 37 tests passed, zero failures/skips, 10.605 s: python -m unittest discover -s .github/tests -v. Actual Git/ZIP fixtures and controlled provider boundaries; no live release. |
| Complete candidate archive | 154 exact Git members; canonical manifest 0.15.1; no source-only root AGENTS, tests/acceptance/CI/dev evidence, credentials or Git internals. Moved skill-local CMD adapter required and present. Core schema and inspect_archive passed. |
| Repeat build | Two independent builds produced identical ZIP/checksum bytes. ZIP size 449,132 bytes; SHA-256 ec1c91858c0259bcfd0c662bcf49f88320914a6eed18a67777dd54b0a6f5fb25. Checksum-file SHA-256 e75cf68b0fae55b52949b3ba6f73e8f7557d25aecdb84b9fc641532231fd64e5. |
| Extracted trusted candidate smoke | Git authentication, completion, projection and draft CLI --help all executed successfully from the extracted archive in a non-Git temporary directory. This establishes packaged dependency/help loading, not installation, credentials or provider access. |
| Sensitive-content boundary | Package names exclude credential stores and recognizable GitHub-token pattern screening found no such values. This is a bounded screen, not a general secret certification. |
| Existing utility/native evidence | Reused recent 27 authentication / 39 completion / 40 projection Linux results from corrected source with runtime/test bytes unchanged. Successful completion/project Windows/Linux Node 22/24 CI runs 39238646930 / 39238647074 matched 10/12 current paths; Windows adapter run 39238822765 matched all three relevant paths. Intentional POSIX-FIFO Windows and native-CMD Linux skips retain their meanings. These are source-matched reused observations, not new whole-candidate CI/client trials. |
| Workflows and operation | All five YAML workflows parsed; exact-source/tooling separation, structured notes, restricted permissions, build-only behavior, one publisher, per-tag noncancelling concurrency and recovery remain source-matched to the assessed implementation. No dispatch performed. |

Initial selection of a repository-local build output was refused before any output write because it was not ignored. Selected a new owned external build directory instead, leaving source ignore policy unchanged. Prepared outputs are retained outside the distributed source; reproducibility is bound to the exact candidate Git commit and publisher. No failure was waived or output falsely claimed.

Separate code/interface assessment reused unchanged runtime/publisher/helper source only after exact byte checks; U-001's sole wording difference has no executable effect. The actual current candidate build independently checks the new version and required inventory. No additional required defect or canonical finding established. Source/local execution/native CI are qualified independently; live agent/provider, installed discovery and actual Windows client activation remain unrun. Release message/range freshness was reserved for U-003 below.

## U-003 — Release scope, message and readiness

Selected stable baseline v0.15.0 on the candidate's first-parent integration ancestry; local/remote annotated tag object b096e2e6431269dc5a731eaea3287c88d1e53960 agrees and peels to 2be233c7ec02be131917ceb16d6a16dc7d407d57. History is nonshallow, complete head/tag discovery was checked, and pending v0.15.1 was excluded and remains absent. The literal shared collection recipe enumerated all 150 commit identities through ddb86fc926ddc2cfbd15946946c75a9c3672645d, including merged history. No truncated range was accepted.

Read complete latest integration summaries first. Introduced ancestry plus merge identities accounts for 146 distinct selected commits across these ten summaries; four direct identities complete the disjoint 150-commit accounting. Path-level merge-resolution inspection found source-only handoff/campaign bookkeeping and an explicitly summarized PLUGIN-ASSESSMENT EOF normalization; no unaccounted product resolution remained.

| Integration summary | Selected identities | Assessed outcome |
| --- | --- | --- |
| 8a534b21f6318f0b76b11a19783f7d40ca94d698 | 16 | Repository continuation and parent/return recovery |
| a5bc0410f726162397f53e3462e2915d7fa24f07 | 14 | Synchronization/completion distinction, prospective policy, publisher version identifiers |
| 17ca45ecfe1bcd5cefa2b0830af5918c7e33c963 | 11 | Guided early exploration |
| 89fdf79637e59c558b3a265d5e458c22e58d49b7 | 10 | Bounded functionality increments in every phase |
| af2703c57fb0222c9f36e7cd34b8503f7c659cf2 | 27 | Protected Git utility and cumulative first-call stall diagnosis amendment |
| 9bd3469351e75883fa510ff38708fc4f2982be3a | 16 | Completion, projection and JSON input utilities |
| 425b3eef464e74bd940d061b07cf103c5bc17d4c | 16 | Association/conflict/visibility checks and assessment boundaries |
| d9ac88d6b08eb805cace6c8e873d4be9c9e0b407 | 8 | Predefined main documentation preparation tracking |
| 17cef14c69dd7a84dc035ac8e864f446ee3668c5 | 11 | Windows readiness/recovery with restored original assignment |
| 5b2442e3315da91bcbc8ccd0efc14c0c59106b27 | 17 | Concise template, narrow lock, FIFO handling, adapter ownership and helper docs |

The latest cumulative scripting summary covers its original integration and amendment with original opening, baseline, prior integration and reopening provenance. Earlier bodies 115a51d5116da344f63d1475c7f8acbf19f97c25 and c88afb8dbb7c99d444b14d7795f63fddb240ec78 remained deferred because no unresolved detail required them. Their introduced ancestry and merge deltas were still accounted for. Closed report contents were not loaded as a routine release queue.

Direct changes were assessed separately: 03b8d6c9e06f22bad62a00f53190e99f90386295 has a misleading prompt-template subject but changes only the historical docs/ai-logs/URL.md path; no supported product claim was derived and that historical content was not loaded. b3878d4a442a6a53328b1afe46b2d58ba148ae89 opens this campaign, 47360015b3fe727b655b48d013d1361f0a7c9319 bumps the manifest, and ddb86fc926ddc2cfbd15946946c75a9c3672645d adds the reviewed phrase polish/evidence. Superseded Windows delayed-expansion/redirection changes were removed from the delivered account: the final package retains the human-restored assignment and its observed quoted-redirection limitation.

The prior root notes matched the v0.15.0 release commit body exactly, with no intervening human-only edits/cuts detected. Current tracked ownership was confirmed in Git, correcting the opening plan's mistaken ignored/untracked classification. Atomically replaced the complete file with 0.15.1 overview, compatibility/requirements, consolidated highlights, other changes, package/loading guidance and evidence limits. Kept public notes free of raw history and internal campaign transcripts. [Retained snapshot](RELEASE-NOTES.md) equals root RELEASE-NOTES.md; [structured handoff](RELEASE-HANDOFF.json) contains those exact UTF-8 bytes and passes the actual publisher validator.

Notes SHA-256: 9620c1768831bc7480624216b8eb74f91ef745d255b3114cee065342c8440c82; 5,165 UTF-8 bytes. Serialized handoff is 5,552 bytes, below the 60,000-byte limit, with source/notes_source equal to the exact candidate, tag v0.15.1, and publish/prerelease/make_latest all false. The ignored local highlights checkpoint records the validated baseline and candidate watermark; it is retained because no release consumed it. Matching notes/handoff are also beside the prepared ZIP.

Readiness is bounded to the selected source/package and complete prepared message, with zero unresolved required defects. The 176 fresh support/publisher passes and 106 reused unchanged Linux utility passes retain their separate provenance, as do source-matched native CI and unrun agent/client/provider trials. Later report and tracked-note commits are outside the shipped package and do not silently replace the candidate pin. A future release must inspect the intervening range, refresh notes coverage, rebind/rebuild against the final release commit, verify its same message body, then create/read back its tag and use the single publisher. Current preparation creates no release marker, tag, dispatch or hosted release.
