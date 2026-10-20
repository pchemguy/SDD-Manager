# SDD Manager handoff

Windows shell handling campaign 089_8e719ce is reopened for a focused shell-selection/wrapper amendment. Parent prerelease campaign 081 remains open/suspended.

## Accepted amendment and stop

- Owner: sdd-manage; reporting Standard. [Child plan](reviews/089_8e719ce-windows-shell-handling/REVISION-PLAN.md), [child evidence](reviews/089_8e719ce-windows-shell-handling/REVISION-REPORT.md), [parent evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md), [index](reviews/README.md).
- A-008: Generated Windows command lines remain CMD-only. CMD is the default and needs no explicit cmd /c wrapper; Git Bash may also be available. Avoid unnecessary wrappers unless instructed. CMD wrappers always use cmd /c; Bash commands always use bash -c because the shim executes through CMD. Retain CMD-only summaries, PowerShell defaults, project precedence, exact shim and probe/recovery procedure.
- The human authorized reopening, execution and closure again, and explicitly clarified no wrapper by default. Publish each owned commit; integrate the verified amendment back into the recorded parent, close and return there. Do not resume parent prerelease preparation or advance release inputs/version/main/release/installation.

## Git identity and evidence

Working branch revision/089_8e719ce-windows-shell-handling; creation parent/return revision/081_5b2442e-prerelease. Original opening 17e5aa90c5b2edba9f2b8768ecf36cf62323e89b and branch-off 8e719ce965526dbbae266009ff8c1114b7d70a80 are retained. Qualifying prior merge 735814e0740d7727c2aba0175335bf81d793d6d6 is the latest first-parent merge on the parent. Reopening checkpoint d7fa983f731a38bf5fca41102ee418b6af336358 is exactly read back from origin; its only post-merge change records closure. Synchronization 87bf920ec3b4ff91c6874701a860a40b4e28c041 is published/read back, retaining this amendment identity and stop.

A-008 is implemented and passes scoped wording, standalone/exact-shim and Markdown checks. Publish the amendment and integrate into the refreshed parent, then verify/publish, record reclosure and return. Runtime scripts, tests, CI and acceptance code are unchanged; prior native/support/publisher/package evidence retains its source. No fresh runtime or live-client result is claimed.

## Retained prerelease boundary

Version remains 0.15.1. The parent's prepared source ddb86fc926ddc2cfbd15946946c75a9c3672645d and notes/handoff/package association remain historical after nested amendments. Refresh only on separately selected parent continuation. Earlier closed campaigns remain frozen; routine work uses current source and this active parent. Preserve per-commit publication, credential protection and unrelated work. Keep credential/transient diagnostic paths out of continuity records.
