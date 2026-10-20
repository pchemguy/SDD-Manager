# SDD Manager handoff

Windows script invocation campaign 091_41cf4aa is active. Parent prerelease campaign 081 stays open/suspended; campaigns through 090 are closed/frozen.

## Selected scope and stop

- Owner: sdd-manage; reporting Standard. [Revision plan](reviews/091_41cf4aa-windows-script-invocation/REVISION-PLAN.md), [execution](reviews/091_41cf4aa-windows-script-invocation/REVISION-REPORT.md), [parent evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md), [index](reviews/README.md).
- Externalize the current Windows policy as root WINDOWS_SHELL_POLICY.md, with concise Windows-only AGENTS guidance and a root README note. Remove all plugin policy routes/defaults and the bundled PowerShell.cmd file; agents create the shim from the policy code when required. Preserve the latest accepted policy wording and embedded shim.
- The human selected the focused revision. Publish each owned commit and stop with campaign 091 open/unmerged. No closure, parent resumption, release-input refresh, version/main/release change or installation is selected.

## Git identity and verified checkpoint

Working branch revision/091_41cf4aa-windows-script-invocation; creation parent/return revision/081_5b2442e-prerelease. Full baseline/branch-off 41cf4aac038bbc1541e7dac39cd841feb7331e27 is exactly read back from origin and the worktree was clean before setup. Repository-wide maximum was 090; 091 is newly allocated without collision.

A-001–A-005 are verified. The latest accepted policy is now root WINDOWS_SHELL_POLICY.md, with concise Windows-only root AGENTS/README navigation. The plugin's policy defaults/routes and bundled shim are removed; no separate PowerShell.cmd file is retained. Agents create it from the policy code when required. The root policy and embedded shim preserve the last accepted wording/bytes.

Source 69cc45b18909bec370fcefce7def649640144d49 is published/read back. All 139 support/37 publisher tests and scoped documentation/preservation checks pass. Its exact 154-file package validates, rebuilds identically, excludes the external policy/shim and passes five extracted CLI help checks; the report owns its source-specific digest. Seven native Windows contracts skip on Linux; no fresh native/client result or plugin installation is claimed. Publish/read back this final evidence update and stop open/unmerged. No closure, parent continuation or release refresh is selected.

## Retained prerelease boundary

Version remains 0.15.1. The parent's prepared source ddb86fc926ddc2cfbd15946946c75a9c3672645d and notes/handoff/package association remain historical after nested amendments. Refresh only on separately selected parent continuation. Earlier closed campaigns remain frozen; routine work uses current source and this active parent. Preserve per-commit publication, credential protection and unrelated work. Keep credential/transient diagnostic paths out of continuity records.
