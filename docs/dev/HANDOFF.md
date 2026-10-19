# SDD Manager handoff

Nested campaign 082_d0d7438 now owns the authentication-helper revision. Parent prerelease campaign 081 remains open and suspended at its verified published preparation checkpoint; campaign 080 remains closed on main.

## Workflow and scope

- Owner/stage: sdd-manage; nested revision opening followed by the explicitly requested diagnostic review. No source repair selected. Reporting: Standard; Minimal and Explicit remain available.
- [Child campaign](reviews/082_d0d7438-auth-helper/REVISION-REPORT.md), [parent evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md), [parent review](reviews/081_5b2442e-prerelease/REVIEW-REPORT.md), [index](reviews/README.md).
- Human requests: open a nested campaign to revise the authentication helper, then review the supplied diagnostic report. Publish the opening before focused source/local-reproduction review; publish that review and stop before repairs. No repair has been executed or accepted from a reproduced finding yet.
- Scope: Git's actual transport/private-helper environment handoff, protected transient credentials, Windows/Linux behavior, meaningful tests, in-code/script documentation and affected coordinator references. Treat the reported GIT_DIR failure as a lead until reproduced. Keep secrets out of evidence and preserve existing validation/operation-authority boundaries.

## Branches and return

- Working/publication branch: revision/082_d0d7438-auth-helper on origin, pchemguy/SDD-Manager. Branch-off baseline: d0d7438bf1e6ec850870cfc43be32573c784dc0c.
- Immediate/creation parent, eventual integration target and return branch: revision/081_5b2442e-prerelease at that exact published checkpoint. Parent execution is suspended; no uncommitted work was carried into the child.
- On later authorized child completion, explicitly integrate and verify/publish into that parent, restore its handoff and return to the parent branch. Keep 081 suspended at its preparation boundary unless continuation is separately selected. Do not target main for this child or infer a product release.

## Retained preparation and next action

The parent retains canonical version 0.15.1 and reviewed/built source ddb86fc926ddc2cfbd15946946c75a9c3672645d, with complete notes and build-only transfer in its [preparation evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md). Earlier tests and artifact hashes apply to that source. Opening this child leaves all product/helper bytes unchanged; a later repair requires affected regression checks and parent candidate/message/package reassessment before release execution.

Host is Linux; reuse current shell readiness. No live provider/client trial, plugin installation, release tag, publishing dispatch or campaign closure is selected here. The original PowerShell.cmd assignment and mandatory quote-conversion notice remain controlling. Campaign 080 and earlier packages remain frozen.

Commit/push/read back the opening before the requested review. Publish the focused review and stop with both campaigns open. Recover this checkpoint's actual SHA and any later decisions from Git and the current campaign record; the handoff cannot encode its own future commit identity. Credentials and ignored local inputs require separate protected availability when transferring environments.
