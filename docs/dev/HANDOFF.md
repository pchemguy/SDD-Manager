# SDD Manager handoff

Parent prerelease campaign 081_5b2442e remains open and suspended. Nested Windows shell handling campaign 089 has completed its accepted scope; the containing explicit parent merge is its current integration/return boundary.

## Parent scope and stop

- Owner: sdd-manage; reporting Standard. [Parent plan](reviews/081_5b2442e-prerelease/REVISION-PLAN.md), [parent evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md), [child plan](reviews/089_8e719ce-windows-shell-handling/REVISION-PLAN.md), [child evidence](reviews/089_8e719ce-windows-shell-handling/REVISION-REPORT.md), [index](reviews/README.md).
- The accepted child delivers a concise standalone Windows policy, CMD defaults with explicit project-specific precedence, one command per shell call, probe-first recovery, the exact replacement shim, CWD/PATH placement and repository .gitignore handling. Current callers, tests and CI are aligned; section order and full-file wording are revised.
- Stop after verified target publication/readback, closure recording and clean return on this parent branch. Do not resume prerelease preparation, refresh release inputs, merge main, bump version, release/tag/dispatch or install the plugin. A completed child is not parent continuation authority.

## Git integration and evidence

Current target/return: revision/081_5b2442e-prerelease on origin, pchemguy/SDD-Manager. Refreshed target before integration: 8e719ce965526dbbae266009ff8c1114b7d70a80. Incoming complete child: 476947767c3a645a11320aac4cdaba4d80c3af84 from revision/089_8e719ce-windows-shell-handling. The explicit two-parent merge retains both tips; recover actual publication from Git/readback. Retain the child branch. Closure requires merged-state verification, target publication and confirmed clean parent state.

Final authored source e5853e9b99cf15cafdfc596ac97d273b9db72d1c passed seven native Windows CMD contracts on each of Node 22/24. Its exact reproducible 156-file package passes pinned schema, exact shim and five extracted CLI help checks. The merged state passes 139 support and 37 publisher tests on Linux/Python 3.12.14; package/runtime/test/CI bytes match that verified source. The child report retains exact hashes and evidence limits. Live Antigravity/Codex activation and observed agent policy compliance remain unrun.

## Retained prerelease boundary

Version remains 0.15.1. The parent's prepared source ddb86fc926ddc2cfbd15946946c75a9c3672645d and notes/handoff/package association remain historical after nested amendments. Refresh only on separately selected parent continuation. Earlier closed campaigns remain frozen; routine work uses current source and this active parent. Preserve per-commit publication, credential protection and unrelated work. Keep credential/transient diagnostic paths out of continuity records.
