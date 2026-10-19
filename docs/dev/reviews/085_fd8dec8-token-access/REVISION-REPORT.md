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

## V-001 — Token access and workflow cleanup

Opening/plan becfd0d77ece8e9be0a5a1c0df060e29b20b2a25 was published and exactly read back before source edits. Existing-auth publication failed with a noninteractive username error, exit 128. One recovery used the established repository credential through an external destination-restricted askpass channel and command-local settings; publication/readback succeeded. No real credential, its permissions, ignore rules or persistent Git configuration were changed, and no secret values/helper paths are retained here.

Removed Windows identity/DACL subprocesses, SDDL parsing/account aliases, permission diagnostics/exports and their platform/environment plumbing from the shared reader and callers. Removed the parallel POSIX UID/mode gate. Ordinary OS file reads now govern access on both platforms. Existing contained regular-file identity, ignored/untracked status, bounded token format, safe credential transport/output, Git context/destination checks and forge locking remain. No optional strict mode or permission-repair path was introduced.

Updated central hosting-token and credential workflows, Git recovery/completion/projection guides, forge routing and contributor verification guidance. Token fixtures use ordinary file creation; removed four obsolete ACL-specific unit cases and both forge permission-rejection cases. Preserved credential parsing coverage and added/updated ordinary-readable-token regressions across all three public execution paths, including explicit POSIX 0644 inputs and native local HTTPS Git transport. The initial focused regression failed with token_permissions under the original reader, then passed after the implementation change.

On Linux/Node 24.19.0, all utility contracts pass: 34 Git recovery, 38 completion and 39 projection (111 total; no failures/skips). Python 3.12.14 contributor checks pass: 139 support and 37 publisher (176 total). The declared jsonschema 4.26.0 dependency was installed and the publisher suite freshly rechecked afterward; installation's standard root/PATH notices required no configuration change. Total local verification: 287 tests passing. These are controlled/local checks, not native Windows, installed-client or live-provider authentication evidence.

Whole-source review found no obsolete ACL tools/functions/error codes in the current package/tests. Git environment rejection bytes, all CI workflows, version/release inputs and the shell adapter/probe retain their branch-off content. Frozen-path and whitespace checks pass. Current focused documentation audit: 13 Markdown files, 345 local links, 65 package links and nine fragments, zero unresolved targets/style candidates; 240 frozen targets were existence-checked without loading their contents. Exact committed package verification and final integration remain V-002 after this source checkpoint's publication/readback.
