# SDD Manager handoff

Windows shell handling revision campaign 089_8e719ce has been accepted for closure; final integration is pending. Parent prerelease 081 remains open/suspended.

## Selected scope and stop

- Owner: sdd-manage; Standard reporting. [Opening record](reviews/089_8e719ce-windows-shell-handling/REVISION-REPORT.md), [parent evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md), [parent plan](reviews/081_5b2442e-prerelease/REVISION-PLAN.md), [index](reviews/README.md).
- Human authority: the numbered requirements select concise general Windows shell rules, one command per shell call, probe-first recovery and the exact replacement adapter. The latest clarification gives precedence to a project specifically targeting PowerShell or defining explicit project-specific shell policies. [Revision plan](reviews/089_8e719ce-windows-shell-handling/REVISION-PLAN.md) owns actions and verification. The opening-only/no-proposals checkpoint remains historical in the opening record.
- Accepted final source: e5853e9b99cf15cafdfc596ac97d273b9db72d1c. Actions A-001–A-007 deliver explicit probe outcomes, one recovery procedure, general CMD policies with project precedence, exact shim, CWD/PATH placement and repository .gitignore handling. Section order and full-file wording are revised; plugin roles/gates/references stay outside the self-contained policy.
- Both native Windows CMD Node 22/24 jobs passed seven tests at this final source. Its exact reproducible 156-file package, pinned schema, five extracted CLI help checks and scoped documentation checks pass; the campaign report retains hashes and evidence limits. Earlier support/publisher results retain source 76ecc64; merged-state checks follow. Live Antigravity/Codex execution and observed agent error classification remain unrun.
- Human authority now selects closure. Publish/read back finalization, merge explicitly into parent revision/081_5b2442e-prerelease, verify/publish the target, record closure and return on that branch. Keep 081 open/suspended; no prerelease continuation follows.

## Git context

Working branch revision/089_8e719ce-windows-shell-handling. Creation parent and eventual return/integration target revision/081_5b2442e-prerelease. Full starting baseline/branch-off 8e719ce965526dbbae266009ff8c1114b7d70a80; exact parent remote readback verified before setup, with a clean worktree. The opening updates only its campaign record, active parent suspension evidence, navigation and this handoff. Preserve per-commit publication and all closed records.

## Parent continuity

Campaign 088 completed through published explicit parent merge 8e719ce965526dbbae266009ff8c1114b7d70a80. Parent 081 stays suspended; version remains 0.15.1. Prepared source ddb86fc926ddc2cfbd15946946c75a9c3672645d and release-source/body/package associations remain historical/stale after nested amendments. Refresh only on separately selected parent continuation. Do not merge main, release/tag/dispatch or install the plugin.
