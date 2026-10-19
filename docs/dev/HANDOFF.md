# SDD Manager handoff

Nested campaign 082_d0d7438 now owns the authentication-helper revision. Parent prerelease campaign 081 remains open and suspended at its verified published preparation checkpoint; campaign 080 remains closed on main.

## Workflow and scope

- Owner/stage: sdd-manage; V-001–V-003 repairs/docs/package are verified and published; V-004 final review is complete and child integration is ready. Closure still requires verified parent publication and return. Reporting: Standard; Minimal and Explicit remain available.
- [Child campaign](reviews/082_d0d7438-auth-helper/REVISION-REPORT.md), [focused findings](reviews/082_d0d7438-auth-helper/REVIEW-REPORT.md), [parent evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md), [parent review](reviews/081_5b2442e-prerelease/REVIEW-REPORT.md), [index](reviews/README.md).
- Human requests: open and review, then “Prepare revision plan, execute, and close.” Opening 107afd226345fa3e6d6d45a01251b451e25cacdf and review d5b6ea76425388a0356d87dde7c10d0777bb4eec were published/read back. [Accepted plan](reviews/082_d0d7438-auth-helper/REVISION-PLAN.md) governs execution; publish it before test/source work and close only this child.
- Scope: Git's actual transport/private-helper environment handoff, protected transient credentials, Windows/Linux behavior, meaningful tests, in-code/script documentation and affected coordinator references. R-001/R-004 now have a verified private context and native HTTPS regression; R-002/R-003 have safe helper diagnostics and independent process summaries. Auth CI on f06d5c04242ac30ccd67c5605d5feb8e2852694e passed all four Windows/Linux Node 22/24 jobs, including the helper/ACL path. Keep secrets out of evidence and preserve existing validation/operation-authority boundaries.

## Branches and return

- Working/publication branch: revision/082_d0d7438-auth-helper on origin, pchemguy/SDD-Manager. Branch-off baseline: d0d7438bf1e6ec850870cfc43be32573c784dc0c.
- Immediate/creation parent, eventual integration target and return branch: revision/081_5b2442e-prerelease at that exact published checkpoint. Parent execution is suspended; no uncommitted work was carried into the child.
- On later authorized child completion, explicitly integrate and verify/publish into that parent, restore its handoff and return to the parent branch. Keep 081 suspended at its preparation boundary unless continuation is separately selected. Do not target main for this child or infer a product release.

## Retained preparation and next action

The parent retains canonical version 0.15.1 and reviewed/built source ddb86fc926ddc2cfbd15946946c75a9c3672645d, with complete notes and build-only transfer in its [preparation evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md). Earlier tests and artifact hashes apply to that source. The child has now repaired helper/product bytes. Earlier parent artifacts remain historical and require source/message/package reassessment before any release continuation; this child does not refresh release authority or release inputs.

At the review checkpoint, the unchanged 27 authentication contracts passed while direct helper and actual native HTTPS push experiments reproduced the defect. Removing only GIT_DIR in an external synthetic wrapper allowed the same credential/ref to push and read back; persistent helper configuration remained unchanged. The review retains a source-relative Linux characterization and sanitized observations. No real credentials/provider trial were used for those experiments. The supplied external live actions/retry count remain separately attributed. The later accepted plan above now governs repairs; current action results stay in the child execution report.

Host is Linux; reuse current shell readiness. Actual affected native CI and synthetic local contracts are selected; no live-provider product trial, plugin installation, release tag or publishing dispatch. The original PowerShell.cmd assignment and mandatory quote-conversion notice remain controlling. Campaign 080 and earlier packages remain frozen.

Plan 0237cfbcf6917529dfedc0cd3d6a17c76c3ca2fe, context repair 133a4946cb6230aab9c1814f5d86fce54b889f84 and diagnostic repair f06d5c04242ac30ccd67c5605d5feb8e2852694e were published and exactly read back. Documentation checkpoint 94e972684d59aac16b30bdc03847f9b861c0bd0a was published/read back; its exact 154-file package is reproducible and four extracted CLIs pass. Final source review is complete with all four findings Verified. Publish/read back this final child checkpoint, then explicitly integrate/publish into 081 and return to its suspended preparation checkpoint. Recover this checkpoint's actual SHA and any later decisions from Git and the current campaign record; the handoff cannot encode its own future commit identity. Credentials and ignored local inputs require separate protected availability when transferring environments.
