# SDD Manager handoff

Nested revision 085_fd8dec8 owns token access cleanup. Parent prerelease campaign 081 remains open and suspended; 084 and earlier campaigns remain closed.

## Workflow and scope

- Owner: sdd-manage; directly accepted focused revision, opening/plan stage. Reporting: Standard; Minimal and Explicit remain available.
- [Child plan](reviews/085_fd8dec8-token-access/REVISION-PLAN.md), [child evidence](reviews/085_fd8dec8-token-access/REVISION-REPORT.md), [parent plan](reviews/081_5b2442e-prerelease/REVISION-PLAN.md), [parent evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md), [index](reviews/README.md).
- Human requests a new campaign removing the token ACL machinery, execution and closure. Remove Windows ACL/identity tooling and the corresponding POSIX owner/mode gate, align shared callers, tests and current guidance. No optional replacement mode. Preserve ordinary OS access, token-file structural/ignore/tracking/format checks, secret handling, destination/context validation and locks.

## Git and return

Working/publication branch: revision/085_fd8dec8-token-access on origin, pchemguy/SDD-Manager. Full branch-off: fd8dec8e2440601827d6d640b439857451040018, the verified published 084 merge. Creation parent, integration target and return branch: revision/081_5b2442e-prerelease. Publish/read back each owned commit before advancing. Finish the child with a verified explicit two-parent parent merge, target publication/readback and clean return. Preserve closed records and unrelated work.

## Verification and retained boundary

Run the three affected utility suites, meaningful ordinary-file regressions, local HTTPS transport and selected contributor/package/doc checks on this Linux host. Respect the human-ended GitHub-test wait: no hosted test polling, dispatch or wait, and no fresh native Windows pass claim. Do not change real credentials, their permissions or persistent Git configuration.

Version remains 0.15.1. Parent prepared source ddb86fc926ddc2cfbd15946946c75a9c3672645d and notes/handoff/package association are historical after nested amendments and need refresh only when parent preparation is separately resumed. Stop with 085 closed and 081 open/suspended. No parent continuation, main merge, release/tag/dispatch, installation or version change. Keep credentials and transient helper paths out of handoff/evidence.
