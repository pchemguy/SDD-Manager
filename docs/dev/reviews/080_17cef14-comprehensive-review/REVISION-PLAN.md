# Revision plan — Review findings and workflow ownership

## Campaign and decisions

- Campaign: 080_17cef14, continuing revision/080_17cef14-comprehensive-review.
- Original reviewed/branch-off source: 17cef14c69dd7a84dc035ac8e864f446ee3668c5; revision starting checkpoint: 68c8574d5b72d9fbc610b29c8bf5e693d245cbfc.
- Original opening: c97ea71020f3ce494bad49f3a47e882889c5d955; parent/integration/return: main at the reviewed baseline.
- Human instruction: prepare and execute the revision plan, close this campaign, then open a prerelease campaign, prepare the next release and bump its patch version.
- [Review](REVIEW-REPORT.md) supplies R-001–R-005; all five are selected within this instruction. [Execution report](REVISION-REPORT.md) records actual results.
- State: Planned; publish/read back before execution. No executable task owner governs this repository; V-IDs are campaign actions, not invented product tasks.

## Bounded design decisions

R-001 removes the complete quoted preparation subsection and neighboring operational duplication from the generic AGENTS template. Retain concise policy, coordinator routing, human checkpoints, publication and continuity. Canonical references retain procedures; templates do not grow another workflow copy.

R-002 explicitly permits only the optional utility's transient nonce-owned local coordination lock before main-preparation tracking readback. The Git-common-directory lock already serializes linked worktrees and completion/projection; retain that useful design. The exception allows no credential/config/ignore, ref/branch, document or product writes. Keep external drafts and existing/transient authentication requirements. Explain it once in the canonical preparation boundary, link it from relevant utility/backend guidance, and align predefined issue/assessor wording. No distributed-lock or transaction registry is introduced.

R-003 checks file type before a potentially blocking read and retains descriptor validation. Preserve supported regular files, BOM/size/encoding/source binding and current symlink/containment semantics. A POSIX nonblocking open can also avoid blocking on a raced special file; do not claim a generally race-free filesystem or hard real-time bound. R-004 moves the single exact adapter into the coordinator's scripts directory; no duplicate copy or behavior change. R-005 adds proportionate callable contracts, leaving detailed machine formats in their existing guides.

## Ordered revisions

| Action | Findings and owner | Outcome / targets | Dependencies and verification |
| --- | --- | --- | --- |
| V-001 | R-001; manage/docs | Simplify assets/AGENTS_TEMPLATE.md to orientation and policy; remove quoted preparation procedure, exact JSON rendering and adjacent implementation procedure duplication. Include the two bootstrap indentation and discovery spelling nits in this bounded documentation cleanup. | Published plan; inspect owner/gate retention and template navigation, current Markdown checks. |
| V-002 | R-002; manage/forge | Define the narrow transient-lock exception in main-preparation; align projection/backend guide, predefined DOCS-001 prerequisite and assessor wording, with no other pre-write effect authorized. | V-001 publication; controlled docs-main first-request probe observes only the owned lock, preserves repository files/refs/config and cleans it; relevant projection/template checks. |
| V-003 | R-003; forge/runtime | Reject non-regular request/source files before blocking; retain bounded reads/descriptor checks and qualify filesystem boundary in docs. Add meaningful native POSIX FIFO regression coverage with Windows-specific skip. | V-002 publication; completion/projection suites and affected Windows/Linux Node 22/24 jobs; positive regular/BOM/size/encoding/containment coverage retained. |
| V-004 | R-004; manage/package | Move PowerShell.cmd to skills/sdd-manage/scripts and update active link/test/CI/package paths; require the resource in publisher inventory. | V-003 publication; exact old/new byte comparison, package assertions, native Windows six LF/CRLF contracts and no active old path. Preserve original assignments and notice. |
| V-005 | R-005; docs | Document capture/invoke/channels and render/catalog/contract functions: inputs, returns, caller mutation, process/remote effects, failures and evidence limits. | V-004 publication; compare AST executable content/signatures before/after; relevant support tests; no implementation changes. |
| V-006 | All; verify/report/manage | Consolidate regressions/native evidence, objective finding rechecks, package/link/schema/presentation checks, complete reports/index/HANDOFF and explicit main integration/publication/return. | All actions published and required checks passed; inspect full delta and preserve every prior frozen record. Close 080 only at verified published two-parent main merge. |

## Authoritative sources and scope

This repository's plugin contract and focused workflow/code/interfaces govern the changes; no PROJECT/SPEC/PLAN/layout/TASKS chain is introduced. The narrowly clarified preparation exception is reflected in existing current contract summaries only where needed; those summaries route to the canonical owner instead of repeating it. Each action preserves examples as illustrative and existing substantive reference boundaries. No new reference is needed.

## Execution, persistence and verification

For each action, make its bounded source/docs/check changes, retain evidence and disposition in REVISION-REPORT, commit together, push/read back before any next action. Run focused checks first and the complete source support/publisher suites at the coupled final boundary; broaden/repeat only for changed state or failures. Node shared-runtime changes require completion/projection native matrices. Adapter movement requires new native Windows evidence rather than Linux skips. Reuse unaffected authentication evidence with exact-source qualification. Keep synthetic, native CI, installed-client and live-provider evidence distinct.

At closure use the campaign integration summary with title/objective, actual review/revision scope, evidence/limits, original opening and baseline, both parents and return target. Preserve original findings, append dispositions rather than rewriting observations. Review and revision records remain in 080; earlier records remain frozen.

## Subsequent prerelease campaign

After 080 closure, allocate the next available shared campaign identity from actual Git/remote state and branch from published main. Record a prerelease review/preparation plan. Bump canonical plugin.json patch from 0.15.0 to 0.15.1, assess the full current package using risk/delta to set depth, prepare current complete release notes with validated Git coverage, run build-only candidate/package checks and retain exact hashes/limits. No release tag, GitHub release or publishing dispatch is requested by preparation. Leave that new campaign at a published prepared-candidate checkpoint unless a later instruction selects publication or closure.
