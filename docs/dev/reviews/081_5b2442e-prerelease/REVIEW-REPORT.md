# Prerelease review — SDD Manager 0.15.1

## Identity and current state

Campaign 081_5b2442e; baseline 5b2442e3315da91bcbc8ccd0efc14c0c59106b27; branch revision/081_5b2442e-prerelease; creation parent/integration/return main. The human explicitly selected prerelease preparation and patch bump. [Plan](REVIEW-PLAN.md), [preparation](REVISION-PLAN.md), [execution](REVISION-REPORT.md).

State: U-001–U-002 assessed; U-003 pending. P-001 candidate 47360015b3fe727b655b48d013d1361f0a7c9319 was published/read back. One non-substantive wording polish below means published U-001 commit ddb86fc926ddc2cfbd15946946c75a9c3672645d is the exact updated candidate. Campaign 080 is closed by the baseline's verified published merge; its records remain frozen. Current source has its five verified corrections, original CMD body and separate client/provider evidence limits.

## Coverage

| Unit | State | Findings / evidence |
| --- | --- | --- |
| U-001 | Assessed; no substantive finding | Current source/metadata/documentation composition checkpoint |
| U-002 | Assessed; no required defect | Exact 0.15.1 package/runtime/support checkpoint |
| U-003 | Pending | Release range/message not yet refreshed |

No canonical finding allocated at opening. Retained older release notes are inputs, not a fresh candidate claim. No tag, hosted release, live acceptance or client installation selected.

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

Separate code/interface assessment reused unchanged runtime/publisher/helper source only after exact byte checks; U-001's sole wording difference has no executable effect. The actual current candidate build independently checks the new version and required inventory. No additional required defect or canonical finding established. Source/local execution/native CI are qualified independently; live agent/provider, installed discovery and actual Windows client activation remain unrun. Release message/range freshness remains U-003.
