# Revision execution — Review findings and workflow ownership

## Context and state

Campaign 080_17cef14 continues from published review checkpoint 68c8574d5b72d9fbc610b29c8bf5e693d245cbfc under the human's plan/execute/close instruction. [Plan](REVISION-PLAN.md), [baseline findings](REVIEW-REPORT.md). Original source 17cef14c69dd7a84dc035ac8e864f446ee3668c5; opening c97ea71020f3ce494bad49f3a47e882889c5d955. Working branch revision/080_17cef14-comprehensive-review; main is creation parent, integration and return target. All five findings selected. State: V-001–V-006 verified and finalized for integration. Campaign closure takes effect only after the recorded two-parent main merge is verified, published and read back.

## Action evidence

| Action | Current result | Checks / limits | Persistence |
| --- | --- | --- | --- |
| V-001 / R-001 | Removed preparation/JSON and neighboring operational procedure duplication; retained tracking policy, routing, checkpoints, continuity and publication. Fixed two bootstrap indentation lines and both discovery-label typos. | Direct template/owner inspection and assertions passed; canonical complete preparation gates unchanged. Documentation-only; no new behavior test. | This action commit; push/readback required before V-002. |
| V-002 / R-002 | Canonical preparation gate now permits only the existing nonce-owned transient projection lock; backend/utility guide, predefined DOCS-001 prerequisite, source contract and independent assessor agree. All durable/config/ref/document writes remain gated. | Four focused docs projection/template tests passed. New controlled native-Git test observes the lock at the first synthetic GET, unchanged config/refs/status and other Git-directory entries, synthetic 403 with no hosted mutation, then exact owned cleanup. | This action commit; push/readback required before V-003. |
| V-003 / R-003 | Shared request/source readers precheck regular type/size, retain descriptor checks and use POSIX-only nonblocking open; guides retain trusted-filesystem limits. | New FIFO regression failed on the prior implementation through an actual child timeout, then both request/source cases passed. Completion 39/39 and projection 40/40 passed locally (3.053 s / 13.534 s). Windows skips only the POSIX FIFO case; affected native matrices pending CI after publication. Node filesystem flag/platform behavior checked against official docs. | This action commit; push/readback required before V-004. |
| V-004 / R-004 | Moved the single adapter to skills/sdd-manage/scripts/PowerShell.cmd; updated owner link, native test/CI/snapshot paths and publisher required-resource inventory/fixtures. | Exact original bytes retained, SHA-256 1473511e47a9ca8702844cb286438c730f1a7b0c3307e2af248c4028d4b815d6. Five package-doc checks and 37 publisher tests passed (3.805 s / 10.917 s); no active old path. Six Linux skips are not native evidence; Windows CI pending publication. | This action commit; push/readback required before V-005. |
| V-005 / R-005 | Added six callable contracts for capture/channel/process observation and catalog/contract/render helpers, including caller mutation, remote/process effects, failure retention and evidence limits. | Executable AST/signatures identical before/after; full 139-test support suite passed. Authentication 27/27 also passed against unchanged utility bytes. Current 1,036 links / 269 fragments checked without unresolved actual targets or style candidates. No behavior change. | This action commit; push/readback required before V-006. |
| V-006 / all | All five objective rechecks pass; no unresolved finding. Complete branch inspected separately from test execution. Reports/index/HANDOFF finalized; source/package/old-record boundaries preserved. | 282 unique passing tests across the applicable Linux suites; successful fresh source-matched native matrices and Windows adapter job; exact package/schema/link/structural checks below. | This finalization commit; publish/read back before explicit main integration. Closure requires merge publication/return. |

## Scope and stop

Execute/publish each action before the next, verify and integrate the full campaign, then close at exact target publication/readback. Continue to the separately authorized new prerelease campaign only after returning to main. Preserve the original CMD bytes and frozen earlier records. No release publication is selected.

## Final verification and finding disposition

| Finding | Corrected condition / recheck | Current disposition |
| --- | --- | --- |
| R-001 | Quoted AGENTS preparation subsection, JSON rendering and adjacent procedural copies absent; concise policy/routing retained and canonical complete gates remain reachable. | Verified |
| R-002 | One canonical narrow transient-lock exception, aligned predefined/assessor/guide wording, and a first-request synthetic-denial probe retaining config/refs/status/other Git entries and cleaning the nonce-owned lock. | Verified |
| R-003 | Actual prior FIFO timeout reproduced; request/source FIFO rejection now prompt and classified. Descriptor/size/encoding/containment regressions and native platforms retained. Trusted-filesystem boundary remains explicit. | Verified |
| R-004 | One skill-local adapter, exact original SHA-256/bytes, active paths updated, required in publisher inventory, real package snapshot retained and new native Windows workflow successful. | Verified |
| R-005 | Six proportional callable contracts; executable AST/signatures unchanged; full support suite passed. | Verified |

Linux evidence: Node authentication 27 passed (24.492 s); completion 39 passed (3.053 s); projection 40 passed (13.534 s); Python support 139 passed (159.747 s); publisher 37 passed (10.917 s). Total 282 unique passing tests. Earlier focused subsets are not added again. Six native CMD tests skipped locally; the POSIX-only FIFO test is intentionally skipped on Windows. No unexplained skip/failure is accepted.

Fresh hosted CI, read-only inspection of exact matching runtime/test/workflow bytes:

- [Completion 39238646930](https://github.com/pchemguy/SDD-Manager/actions/runs/39238646930), source 6561e4cfac96db4c3cb88d748bd00fcb1cb43a38: four successful Windows/Linux Node 22/24 jobs; 10 relevant path identities matched final source.
- [Projection 39238647074](https://github.com/pchemguy/SDD-Manager/actions/runs/39238647074), same source: four successful Windows/Linux Node 22/24 jobs; 12 relevant path identities, including predefined definitions, matched final source.
- [Windows adapter 39238822765](https://github.com/pchemguy/SDD-Manager/actions/runs/39238822765), source e34106d25598185f25f88560ae4cb9df9e6eb91f: successful native-cmd job; exact adapter/test/workflow bytes matched final source.

Two exact-source builds at c5c6ae908978e55341011a254864698ff6f4400d produced identical ZIP/checksum bytes: 154 files, 449,135 ZIP bytes, SHA-256 8144dd795d720e1db583e79f17f73aee3021bf949198ed4d562abb53ee02be2a. All members matched Git and retained the moved script; no source-only instructions/tests/CI/evidence shipped. Core schema passed. APA validator returned 0, with 0 errors and 48 existing sibling-reference/client-handoff warnings. No presentation/activation contract changed. Current navigation check covered 1,036 links and 269 fragments without unresolved actual targets; whitespace and frozen-record path/object preservation passed. Original CMD bytes/quote notice remain controlling.

Separate source/diff assessment checked pre-write exception containment, regular-file/descriptor cleanup and platform flags, no new credential/config mutation, original adapter behavior, package required-resource enforcement and documentation-only helper AST identity. No additional defect found in the bounded changes. Node filesystem constants were checked against [official filesystem documentation](https://nodejs.org/api/fs.html#file-open-constants); flags unavailable on Windows are not passed there.

## Persistence and integration

Plan c85e409f65e8cc2f48850f6a3c4b31c8afb965fa; V-001 0da3c6171d1526db36d028699d56c9939717071a; V-002 1050bafe9f60af1b181223718a47382515b02461; V-003 6561e4cfac96db4c3cb88d748bd00fcb1cb43a38; V-004 e34106d25598185f25f88560ae4cb9df9e6eb91f; V-005 c5c6ae908978e55341011a254864698ff6f4400d. Each was pushed and exactly read back before the next action. The containing finalization commit receives the same publication gate before integration.

Refreshed main/origin-main are both 17cef14c69dd7a84dc035ac8e864f446ee3668c5. Complete campaign delta contains only selected corrections, their active evidence/navigation/HANDOFF and explicitly scoped source-contract/verification updates. Every prior closed campaign/feature/steering record remains unchanged. No product executable task owner exists here, so no T-task IDs or checklist audit are fabricated.

The authorized closure uses git merge --no-ff --no-commit of the pinned published finalization tip into that main parent. Inspect the prospective tree, preserve all source/test bytes from the verified tip, reconcile parent HANDOFF, run affected merged-state checks and inspect two ordered parents. Publish/read back main, then return on main. The merge and exact publication/return establish closure; this pre-merge record does not invent their future SHA. Keep the campaign branch. A conflict or publication failure retains the actual pending boundary.

## Limits and next authorized work

All R-001–R-005 are corrected and verified within stated evidence classes; no finding deferred or rejected. New source-support/native CI evidence does not establish installed-client routing, actual Antigravity/local Codex activation, fresh consumer reliability or live-provider product mutations. Those were not required for these bounded corrections and remain unrun, not fabricated passes.

After verified campaign closure, the human has separately authorized a new prerelease campaign, next patch version 0.15.1 and project/package/message preparation. That campaign records its own exact candidate and release-range coverage. No release tag, GitHub release, publication dispatch or plugin installation is selected by preparation.
