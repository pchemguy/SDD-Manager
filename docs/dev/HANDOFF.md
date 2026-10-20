# SDD Manager handoff

Windows script invocation campaign 091_41cf4aa is active. Parent prerelease campaign 081 stays open/suspended; campaigns through 090 are closed/frozen.

## Selected scope and stop

- Owner: sdd-manage; reporting Standard. [Revision plan](reviews/091_41cf4aa-windows-script-invocation/REVISION-PLAN.md), [execution](reviews/091_41cf4aa-windows-script-invocation/REVISION-REPORT.md), [parent evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md), [index](reviews/README.md).
- Externalize the current Windows policy as root WINDOWS_SHELL_POLICY.md, with concise Windows-only AGENTS guidance and a root README note. Remove all plugin policy routes/defaults and the bundled PowerShell.cmd file; agents create the shim from the policy code when required. Preserve the latest accepted policy wording and embedded shim.
- The human selected the focused revision. Publish each owned commit and stop with campaign 091 open/unmerged. No closure, parent resumption, release-input refresh, version/main/release change or installation is selected.

## Git identity and verified checkpoint

Working branch revision/091_41cf4aa-windows-script-invocation; creation parent/return revision/081_5b2442e-prerelease. Full baseline/branch-off 41cf4aac038bbc1541e7dac39cd841feb7331e27 is exactly read back from origin and the worktree was clean before setup. Repository-wide maximum was 090; 091 is newly allocated without collision.

A-001–A-004 are verified. Amended source 0b66c9979e2518f6c56a27b198f3f9c9dc02e3b1 is published/read back. Direct script text has both temporary-file alternatives; pipes, redirection and other shell operations require the complete call in a temporary CMD file. Nine source contrasts, scoped Markdown and standalone/exact-shim checks pass; the 139 support/37 publisher test results apply to unchanged runtime/test source. That exact source's 156-file package passes manifest schema, identical rebuild and five extracted CLI help checks; its digest is in the report. Runtime/manifest/tests/CI are unchanged; live Windows/agent verification remains unrun.

The later human instructions simplify CMD-wrapper wording through published c3ffa7bae0f9caf6132de35da383a914d270c8ef, then select A-005 externalization. That move/removal and affected source verification are implemented: root policy bytes and embedded shim are preserved, no separate PowerShell.cmd file is retained, all plugin policy references are removed, and 139 support/37 publisher tests plus scoped documentation checks pass. Seven native Windows contracts skip on Linux. Publish this source, verify its exact committed package and publish final evidence before stopping open/unmerged. No closure, parent continuation or release refresh is selected.

## Retained prerelease boundary

Version remains 0.15.1. The parent's prepared source ddb86fc926ddc2cfbd15946946c75a9c3672645d and notes/handoff/package association remain historical after nested amendments. Refresh only on separately selected parent continuation. Earlier closed campaigns remain frozen; routine work uses current source and this active parent. Preserve per-commit publication, credential protection and unrelated work. Keep credential/transient diagnostic paths out of continuity records.
