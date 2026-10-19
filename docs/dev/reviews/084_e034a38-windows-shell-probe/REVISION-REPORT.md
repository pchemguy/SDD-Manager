# Windows shell probe revision — campaign opening

## Identity and authority

- Campaign: 084_e034a38; baseline/branch-off e034a38bcdd6f18fd028af1f831730fe9e558587.
- Working/publication branch: revision/084_e034a38-windows-shell-probe on origin, pchemguy/SDD-Manager. Directory: docs/dev/reviews/084_e034a38-windows-shell-probe.
- Immediate parent, creation parent, integration target and return branch: revision/081_5b2442e-prerelease at that exact published checkpoint. Parent 081 remains open and suspended.
- Human objective: remove ` /d` from the shell probe in windows-shell-recovery.md; run the full focused campaign through completed closure. [Accepted plan](REVISION-PLAN.md), [parent evidence](../081_5b2442e-prerelease/REVISION-REPORT.md), [handoff](../../HANDOFF.md), [index](../README.md).
- State: Open; source revision not yet performed at this opening checkpoint. The actual first opening commit is recovered from Git, not embedded as a future self-reference.

## Source and bounded assessment

[Windows shell readiness](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/references/windows-shell-recovery.md) contains the target probe once. The existing [native contract](../../../../tests/test_windows_shell_recovery.py) invokes that same probe and checks PATH selection, expanded drive, marker and exit across LF/CRLF adapters. Align that invocation so native verification exercises the documented command. Other `/d` uses belong to the isolated outer fixture or unrelated cases and are outside this edit. The adapter and required quote-conversion notice are unchanged.

The execution host is Linux. Initial orientation found a clean older local campaign checkout lacking the target reference; bounded remote inspection/fetch recovered the exact published 081 branch without modifying the old branch or its artifacts. Current parent Git state confirms completed child 083 integration. Name/path and local/published ref discovery reserve at most 083; 084 is available and its name is valid. No closed reports were used as a routine review queue.

## Verification and completion boundary

Use the focused existing Windows contracts, exact source diff and current link/style checks. Linux skips are not Windows runtime passes. The Windows CI workflow watches the guide/test and runs the native suite; inspect the source-matched job before successful closure. No live Antigravity/local Codex activation is implied. No acceptance tooling or executable adapter behavior changes are selected.

This opening changes only campaign/parent suspension evidence, HANDOFF and shared navigation. Publish/read back before V-001. Later publish the verified repair/evidence, finalize, explicitly merge into refreshed 081 with its parent handoff restored, verify/publish and confirm return. Close only 084, preserve 083 and earlier records, and leave 081 suspended with its existing source-bound prerelease inputs requiring refresh on separately selected continuation.
