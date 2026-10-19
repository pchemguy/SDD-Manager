# Token access cleanup revision evidence

## Identity and accepted scope

- Campaign: 085_fd8dec8. Full branch-off: fd8dec8e2440601827d6d640b439857451040018, the verified published 084 parent merge.
- Working/publication branch: revision/085_fd8dec8-token-access on origin, pchemguy/SDD-Manager. Creation parent, integration target and return: revision/081_5b2442e-prerelease. Directory: docs/dev/reviews/085_fd8dec8-token-access.
- Human requests removal of the token-file ACL machinery and the full campaign through closure. [Plan](REVISION-PLAN.md), [parent evidence](../081_5b2442e-prerelease/REVISION-REPORT.md), [handoff](../../HANDOFF.md), [index](../README.md).
- Opening state: planned, no source changes yet. Parent 081 is open/suspended; 084 and earlier records remain frozen.

## Focused source assessment

The shared [token reader](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/scripts/protected-token.mjs) runs native Windows identity/DACL inspection and rejects non-whitelisted permissions; POSIX rejects ownership/mode differences. Git recovery and both forge utilities consume this reader. Their docs and fixtures prescribe or prepare matching permission layouts. These application-level gates exceed ordinary OS read access and can reject usable credentials before authentication.

V-001 removes those gates and their supporting APIs/tools, updates all callers and tests, and removes associated workflow prerequisites. Keep existing containment/type/identity, ignore/untracked, token-format, context/destination and protected-transfer checks. No real credential or permission mutation is selected. No optional strict mode is added.

## Verification and stop

The host is Linux; use the three local utility suites and native HTTPS fixture, selected contributor checks and exact package/doc verification. No hosted CI polling/dispatch/wait or fresh Windows runtime claim. Opening/plan publication precedes source edits; actual commit IDs/publication and final explicit parent merge are recovered from Git. Stop after verified child closure/return with 081 suspended and its prior release preparation association still requiring refresh.
