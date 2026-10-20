# SDD Manager handoff

Parent prerelease campaign 081_5b2442e remains open and suspended. Nested Windows shell handling campaign 089 is closed through published/read-back parent merge 735814e0740d7727c2aba0175335bf81d793d6d6.

## Parent scope and stop

- Owner: sdd-manage; reporting Standard. [Parent plan](reviews/081_5b2442e-prerelease/REVISION-PLAN.md), [parent evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md), [child plan](reviews/089_8e719ce-windows-shell-handling/REVISION-PLAN.md), [child evidence](reviews/089_8e719ce-windows-shell-handling/REVISION-REPORT.md), [index](reviews/README.md).
- The accepted child delivers a concise standalone Windows policy, CMD defaults with explicit project-specific precedence, one command per shell call, probe-first recovery, the exact replacement shim, CWD/PATH placement and repository .gitignore handling. Current callers, tests and CI are aligned; section order and full-file wording are revised.
- Child integration and clean parent return are verified. Publish/read back the closure record, then stop on this parent branch. Do not resume prerelease preparation, refresh release inputs, merge main, bump version, release/tag/dispatch or install the plugin. A completed child is not parent continuation authority.

## Git integration and evidence

Current branch/return: revision/081_5b2442e-prerelease on origin, pchemguy/SDD-Manager. Published merge 735814e0740d7727c2aba0175335bf81d793d6d6 has verified parents 8e719ce965526dbbae266009ff8c1114b7d70a80 and complete child 476947767c3a645a11320aac4cdaba4d80c3af84. Exact target readback and publisher cleanup are confirmed. The child branch revision/089_8e719ce-windows-shell-handling is retained; campaign records are closed/frozen.

Final authored source e5853e9b99cf15cafdfc596ac97d273b9db72d1c passed seven native Windows CMD contracts on each of Node 22/24. Its exact reproducible 156-file package passes pinned schema, exact shim and five extracted CLI help checks. The merged state passes 139 support and 37 publisher tests on Linux/Python 3.12.14; package/runtime/test/CI bytes match that verified source. The child report retains exact hashes and evidence limits. Live Antigravity/Codex activation and observed agent policy compliance remain unrun.

## Retained prerelease boundary

Version remains 0.15.1. The parent's prepared source ddb86fc926ddc2cfbd15946946c75a9c3672645d and notes/handoff/package association remain historical after nested amendments. Refresh only on separately selected parent continuation. Earlier closed campaigns remain frozen; routine work uses current source and this active parent. Preserve per-commit publication, credential protection and unrelated work. Keep credential/transient diagnostic paths out of continuity records.
