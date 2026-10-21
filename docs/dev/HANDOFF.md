# SDD Manager handoff

Campaign 081 has completed its selected preparation, main integration and stable 0.15.1 release. Publish/read back this final closure checkpoint and stop on main. All selected review findings are resolved; earlier closed records remain frozen.

## Scope and authority

The human requested “Create release, close campaign.” P-001–P-006 and U-001–U-003 are complete. [Plan](reviews/081_5b2442e-prerelease/REVISION-PLAN.md), [review](reviews/081_5b2442e-prerelease/REVIEW-REPORT.md), [release evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md#release-outcome-and-campaign-closure), [index](reviews/README.md). Reporting remains Standard. No further development or installation is selected.

## Published identities

Working/return branch: main. Original campaign parent: main at 5b2442e3315da91bcbc8ccd0efc14c0c59106b27. Published integration ce0abce526a7737a4167afd23605f7f015a7a672 has parents 5b2442e3315da91bcbc8ccd0efc14c0c59106b27 and 3f2e500789655ab70a0679cb6a0fe568746a650f; the campaign branch is retained.

Published release/tag v0.15.1 points to exact release commit 52e9a03dcd1dd47e80b4549754165fc44da3b071. Its raw body matches the retained notes and hosted body. [Release 419146627](https://github.com/pchemguy/SDD-Manager/releases/tag/v0.15.1) is stable and actual latest. Final history coverage is 248 identities since v0.15.0. Later closure evidence advances main without moving the release tag.

## Verified outputs and limits

The 153-file/15-skill package is reproducible; schema, exact archive, presentation/SVG paths and five extracted CLI checks pass. ZIP SHA-256: 278ced5581d62dab3f42983cddfb9c6275b403c43999376da2ddcc2af438de6c. Both hosted assets were downloaded and compared with the local final-source ZIP/checksum. Saved notes/handoff retain exact body/source/hash; local outputs are at /workspace/scratch/46b31bb4dff6/081-release-0.15.1.

Current evidence includes 308 distinct local passes; seven Windows contracts skip on Linux. Initial workflow dispatch returned HTTP 403, and direct publication's timed-out invocation was settled by exact readback without mutation replay. The human's replacement token is saved. [Build-only CI 39542743689](https://github.com/pchemguy/SDD-Manager/actions/runs/39542743689) then succeeds on the exact released source: 139 support/37 publisher tests pass, both package hashes match the published assets and publishing is skipped. No fresh native Windows/client/consumer/launcher/diagram result is claimed.

## Completion boundary

Retain root RELEASE-NOTES.md, campaign branch and records. The owned ignored highlights checkpoint is consumed only after the verified published-body match. Confirm this final evidence commit's remote containment and clean main, then stop. No pending release effect remains; future work requires a new selected scope. Preserve credentials, unrelated work and frozen records.
