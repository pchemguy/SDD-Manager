# SDD Manager handoff

Nested revision 085_fd8dec8 has finalized token access cleanup and is ready for authorized parent integration. Prerelease campaign 081 remains open and suspended; 084 and earlier campaigns remain closed.

## Workflow and selected result

- Owner: sdd-manage; final child checkpoint, publication/integration pending. Reporting: Standard; Minimal and Explicit remain available.
- [Child plan](reviews/085_fd8dec8-token-access/REVISION-PLAN.md), [child evidence](reviews/085_fd8dec8-token-access/REVISION-REPORT.md), [parent plan](reviews/081_5b2442e-prerelease/REVISION-PLAN.md), [parent evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md), [index](reviews/README.md).
- Removed mandatory Windows ACL/identity inspection and the parallel POSIX owner/mode gate, supporting tools/parsers/diagnostics and ACL fixture setup. Updated all shared callers and current workflow/CLI/contributor guidance. Ordinary OS reads govern access; contained regular-file/identity, ignore/untracked, format, safe credential handling, context/destination and lock checks remain. No optional permission mode or repair path.

## Git and verification

Working/publication branch: revision/085_fd8dec8-token-access on origin, pchemguy/SDD-Manager. Full branch-off: fd8dec8e2440601827d6d640b439857451040018. Opening/plan becfd0d77ece8e9be0a5a1c0df060e29b20b2a25 and source checkpoint 9aad014ee1b1417dc2ed17994fd021233241fcf3 were each published and exactly read back before advancing. Creation parent, integration target and return branch: revision/081_5b2442e-prerelease.

Linux/Node 24.19.0 utility suites pass 34 recovery, 38 completion and 39 projection tests; Python 3.12.14 passes 139 support and 37 publisher tests (287 total). The ordinary-readable-token regression has observed RED/GREEN evidence. The exact committed 154-file package passes the manifest schema, identical rebuild comparison and four extracted CLI smokes; details/hash are in child evidence. Version remains 0.15.1. Source/docs/frozen-path checks pass.

The human ended GitHub-test waiting. No hosted tests were polled, dispatched or awaited in this campaign. Native Windows, installed-client and live-provider acceptance are unrun; local test/package success does not establish those outcomes. No real credential, its permissions or persistent Git configuration changed.

## Integration and stop

Publish/read back this final child evidence, then explicitly merge the complete pinned child into refreshed 081. Reconcile the parent handoff, verify prospective package/source/docs agreement and closed-record preservation, commit the two-parent merge and publish/read back the target. Confirm a clean actual return to 081; those facts establish 085 closure. Retain its branch/records and stop with 081 open/suspended.

Parent prepared source ddb86fc926ddc2cfbd15946946c75a9c3672645d and its notes/handoff/package association remain historical after nested amendments; refresh them only on separately selected parent continuation. Do not resume preparation, merge to main, alter version/release inputs, create a release/tag/dispatch or install a plugin. Keep credentials and transient helper paths out of handoff/evidence.
