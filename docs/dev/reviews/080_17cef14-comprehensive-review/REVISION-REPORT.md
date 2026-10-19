# Revision execution — Review findings and workflow ownership

## Context and state

Campaign 080_17cef14 continues from published review checkpoint 68c8574d5b72d9fbc610b29c8bf5e693d245cbfc under the human's plan/execute/close instruction. [Plan](REVISION-PLAN.md), [baseline findings](REVIEW-REPORT.md). Original source 17cef14c69dd7a84dc035ac8e864f446ee3668c5; opening c97ea71020f3ce494bad49f3a47e882889c5d955. Working branch revision/080_17cef14-comprehensive-review; main is creation parent, integration and return target. All five findings selected. State: execution in progress; V-001–V-005 complete; final verification/integration pending.

## Action evidence

| Action | Current result | Checks / limits | Persistence |
| --- | --- | --- | --- |
| V-001 / R-001 | Removed preparation/JSON and neighboring operational procedure duplication; retained tracking policy, routing, checkpoints, continuity and publication. Fixed two bootstrap indentation lines and both discovery-label typos. | Direct template/owner inspection and assertions passed; canonical complete preparation gates unchanged. Documentation-only; no new behavior test. | This action commit; push/readback required before V-002. |
| V-002 / R-002 | Canonical preparation gate now permits only the existing nonce-owned transient projection lock; backend/utility guide, predefined DOCS-001 prerequisite, source contract and independent assessor agree. All durable/config/ref/document writes remain gated. | Four focused docs projection/template tests passed. New controlled native-Git test observes the lock at the first synthetic GET, unchanged config/refs/status and other Git-directory entries, synthetic 403 with no hosted mutation, then exact owned cleanup. | This action commit; push/readback required before V-003. |
| V-003 / R-003 | Shared request/source readers precheck regular type/size, retain descriptor checks and use POSIX-only nonblocking open; guides retain trusted-filesystem limits. | New FIFO regression failed on the prior implementation through an actual child timeout, then both request/source cases passed. Completion 39/39 and projection 40/40 passed locally (3.053 s / 13.534 s). Windows skips only the POSIX FIFO case; affected native matrices pending CI after publication. Node filesystem flag/platform behavior checked against official docs. | This action commit; push/readback required before V-004. |
| V-004 / R-004 | Moved the single adapter to skills/sdd-manage/scripts/PowerShell.cmd; updated owner link, native test/CI/snapshot paths and publisher required-resource inventory/fixtures. | Exact original bytes retained, SHA-256 1473511e47a9ca8702844cb286438c730f1a7b0c3307e2af248c4028d4b815d6. Five package-doc checks and 37 publisher tests passed (3.805 s / 10.917 s); no active old path. Six Linux skips are not native evidence; Windows CI pending publication. | This action commit; push/readback required before V-005. |
| V-005 / R-005 | Added six callable contracts for capture/channel/process observation and catalog/contract/render helpers, including caller mutation, remote/process effects, failure retention and evidence limits. | Executable AST/signatures identical before/after; full 139-test support suite passed. Authentication 27/27 also passed against unchanged utility bytes. Current 1,036 links / 269 fragments checked without unresolved actual targets or style candidates. No behavior change. | This action commit; push/readback required before V-006. |
| V-006 | Pending | Native CI, consolidation, exact package and integration checks pending | Pending |

## Scope and stop

Execute/publish each action before the next, verify and integrate the full campaign, then close at exact target publication/readback. Continue to the separately authorized new prerelease campaign only after returning to main. Preserve the original CMD bytes and frozen earlier records. No release publication is selected.
