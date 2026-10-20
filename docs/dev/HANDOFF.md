# SDD Manager handoff

Windows shell handling revision campaign 089_8e719ce is open. Parent prerelease 081 remains open/suspended.

## Selected scope and stop

- Owner: sdd-manage; Standard reporting. [Opening record](reviews/089_8e719ce-windows-shell-handling/REVISION-REPORT.md), [parent evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md), [parent plan](reviews/081_5b2442e-prerelease/REVISION-PLAN.md), [index](reviews/README.md).
- Human authority: the numbered requirements select concise general Windows shell rules, one command per shell call, probe-first recovery and the exact replacement adapter. The latest clarification gives precedence to a project specifically targeting PowerShell or defining explicit project-specific shell policies. [Revision plan](reviews/089_8e719ce-windows-shell-handling/REVISION-PLAN.md) owns actions and verification. The opening-only/no-proposals checkpoint remains historical in the opening record.
- Full-file revision A-007 starts from published a0c93d7fa830696054bd7f002380b892449508e7. The policy now has explicit success/error branches, one recovery procedure, one quoted-path check and direct command terminology. Section order was assessed: general rules, probe/recovery, then conditional Antigravity wrapper/code. Project-specific precedence, CWD/PATH placement, repository .gitignore handling and the exact shim are preserved. Current caller summaries remain aligned; plugin roles/gates/references stay outside the self-contained policy.
- Current scoped documentation checks passed; the inline shim still matches the native-verified adapter. Both native Windows CMD Node 22/24 jobs passed seven tests at source 62de0ff1dde49b8a3c73d0633b09c56af04006a8, including the exact bare probe and LF/CRLF variants. Those results are retained, not rerun for A-007's prose changes. Earlier 139 support/37 publisher and exact 156-file package results retain source 76ecc64. Live Antigravity/Codex execution and observed agent error classification remain unrun.
- Publish/read back this evidence checkpoint, then stop on the child branch with campaign 089 open. No campaign closure/integration or prerelease resumption is selected; await further human direction.

## Git context

Working branch revision/089_8e719ce-windows-shell-handling. Creation parent and eventual return/integration target revision/081_5b2442e-prerelease. Full starting baseline/branch-off 8e719ce965526dbbae266009ff8c1114b7d70a80; exact parent remote readback verified before setup, with a clean worktree. The opening updates only its campaign record, active parent suspension evidence, navigation and this handoff. Preserve per-commit publication and all closed records.

## Parent continuity

Campaign 088 completed through published explicit parent merge 8e719ce965526dbbae266009ff8c1114b7d70a80. Parent 081 stays suspended; version remains 0.15.1. Prepared source ddb86fc926ddc2cfbd15946946c75a9c3672645d and release-source/body/package associations remain historical/stale after nested amendments. Refresh only on separately selected parent continuation. Do not merge main, release/tag/dispatch or install the plugin.
