# SDD Manager handoff

Windows script invocation campaign 091_41cf4aa is active. Parent prerelease campaign 081 stays open/suspended; campaigns through 090 are closed/frozen.

## Selected scope and stop

- Owner: sdd-manage; reporting Standard. [Revision plan](reviews/091_41cf4aa-windows-script-invocation/REVISION-PLAN.md), [execution](reviews/091_41cf4aa-windows-script-invocation/REVISION-REPORT.md), [parent evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md), [index](reviews/README.md).
- Prohibit direct script source in command lines supplied to agent shell tools, including one-liners. Explicitly permit a temporary language-script file or the complete call in a temporary CMD file. Retain existing CMD/default/wrapper and project-precedence rules; preserve the exact shim.
- The human selected the focused revision. Publish each owned commit and stop with campaign 091 open/unmerged. No closure, parent resumption, release-input refresh, version/main/release change or installation is selected.

## Git identity and pending work

Working branch revision/091_41cf4aa-windows-script-invocation; creation parent/return revision/081_5b2442e-prerelease. Full baseline/branch-off 41cf4aac038bbc1541e7dac39cd841feb7331e27 is exactly read back from origin and the worktree was clean before setup. Repository-wide maximum was 090; 091 is newly allocated without collision.

A-001–A-002 are complete: a separate rule prohibits direct inline script source and defines both temporary-file alternatives, with aligned manage/README/contract/K-16 guidance. Six source contrasts, 139 support/37 publisher tests, scoped Markdown and standalone/exact-shim checks pass. Publish the source, verify its committed package and publish final evidence, then stop open/unmerged. Runtime/manifest/tests/CI are unchanged; live Windows/agent verification remains unrun.

## Retained prerelease boundary

Version remains 0.15.1. The parent's prepared source ddb86fc926ddc2cfbd15946946c75a9c3672645d and notes/handoff/package association remain historical after nested amendments. Refresh only on separately selected parent continuation. Earlier closed campaigns remain frozen; routine work uses current source and this active parent. Preserve per-commit publication, credential protection and unrelated work. Keep credential/transient diagnostic paths out of continuity records.
