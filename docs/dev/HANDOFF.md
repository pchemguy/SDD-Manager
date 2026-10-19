# SDD Manager handoff

Nested campaign 086_65c7d37 has implemented and verified the accepted browser-environment revision and is ready for integration. Parent prerelease campaign 081 remains open and suspended; 085 and earlier campaigns remain closed.

## Workflow and current scope

- Owner: sdd-manage; child revision finalization/integration. Reporting: Standard; Minimal and Explicit remain available.
- [Child plan](reviews/086_65c7d37-browser-guidelines/REVISION-PLAN.md), [child opening](reviews/086_65c7d37-browser-guidelines/REVISION-REPORT.md), [parent plan](reviews/081_5b2442e-prerelease/REVISION-PLAN.md), [parent evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md), [index](reviews/README.md).
- Accepted and implemented: dedicated contained Chromium by default, Firefox when required, isolated state and compatible contained reuse. All other browsers and personal/system installations/profiles are excluded. Normal setup, conditional Playwright managed builds, capability evidence and failure recovery share one substantial reference with shallow implementation/testing/verification/coordinator routes.

## Git and evidence

Working/publication branch: revision/086_65c7d37-browser-guidelines on origin, pchemguy/SDD-Manager. Full branch-off: 65c7d37f10c9eba2082c31c956a41acf9f1dbdf4, the verified published child 085 merge. Creation parent, eventual integration target and return branch: revision/081_5b2442e-prerelease. Every owned commit is published/read back before advancing; recover actual opening/publication identity from Git.

Published package source 976b2e7ce1d2f527bbffbaee981dafacdd96f9b0 passes 139 support and 37 publisher tests, 13 source contrasts, structural/current-link checks and an exact reproducible 154-file verification package. The revision changes seven packaged Markdown files and the development contract plus active records; runtime scripts, tests, CI, version/release inputs and closed records are preserved. Browser execution/native Windows/client trials and hosted-test waiting were not performed.

## Checkpoint and retained parent boundary

Publish/read back finalization, then explicitly merge the completed child into its recorded parent. Restore the parent's suspended context, verify the merged state and two parents, publish/read back and confirm clean return; only then is child closure established. Stop with 081 suspended. No parent preparation continuation, main merge, version bump, release-input refresh, release/tag/dispatch or installation.

Version remains 0.15.1. Parent prepared source ddb86fc926ddc2cfbd15946946c75a9c3672645d and its notes/handoff/package association remain historical after nested amendments; refresh only when parent work is separately selected. Preserve all closed records and keep credentials/transient helper paths out of handoff/evidence.
