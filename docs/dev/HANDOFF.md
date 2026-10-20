# SDD Manager handoff

Parent prerelease campaign 081_5b2442e remains open/suspended. Reopened campaign 089 has completed shell-selection/wrapper amendment A-008; its explicit parent integration and reclosure are the current boundary.

## Parent scope and stop

- Owner: sdd-manage; reporting Standard. [Parent plan](reviews/081_5b2442e-prerelease/REVISION-PLAN.md), [parent evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md), [child plan](reviews/089_8e719ce-windows-shell-handling/REVISION-PLAN.md), [child evidence](reviews/089_8e719ce-windows-shell-handling/REVISION-REPORT.md), [index](reviews/README.md).
- A-008: Generated Windows command lines remain CMD-only. CMD is the default and needs no explicit cmd /c wrapper; Git Bash may also be available. Avoid unnecessary wrappers unless instructed. CMD wrappers always use cmd /c; Bash commands always use bash -c because the shim executes through CMD. Retain CMD-only summaries, PowerShell defaults, project precedence, exact shim and probe/recovery procedure.
- The human authorized reopening, execution and closure again, including the CMD-only and Bash-under-CMD clarifications. Verify/publish the parent merge, record reclosure and stop on this parent branch. Do not resume prerelease preparation or advance release inputs/version/main/release/installation.

## Integration and evidence

Target/return revision/081_5b2442e-prerelease on origin. Refreshed parent and reopening checkpoint d7fa983f731a38bf5fca41102ee418b6af336358; incoming published amendment d5adfc3cf98d89dd655c21ba7cd4add6c4f93795 from revision/089_8e719ce-windows-shell-handling. Prior integration 735814e0740d7727c2aba0175335bf81d793d6d6 and original campaign provenance are retained in the child report. The prospective explicit merge has no conflicts; target publication and reclosure remain pending. Retain both branches.

A-008 passes scoped wording, standalone/exact-shim and Markdown checks. Its exact reproducible 156-file verification package passes pinned schema, inventory and five extracted CLI help checks; the child report retains the source/hash. Runtime scripts, tests, CI and acceptance code are unchanged. Earlier native/support/publisher evidence retains its recorded source; no fresh runtime or live-client result is claimed.

## Retained prerelease boundary

Version remains 0.15.1. The parent's prepared source ddb86fc926ddc2cfbd15946946c75a9c3672645d and notes/handoff/package association remain historical after nested amendments. Refresh only on separately selected parent continuation. Earlier closed campaigns remain frozen; routine work uses current source and this active parent. Preserve per-commit publication, credential protection and unrelated work. Keep credential/transient diagnostic paths out of continuity records.
