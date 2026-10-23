# SDD Manager handoff

Campaign [098 — release workflow](reviews/098_b735940-release-workflow/REVISION-REPORT.md) is open. All five actions in its [revision plan](reviews/098_b735940-release-workflow/REVISION-PLAN.md) are executed and locally verified; closure is not selected. Reporting: Standard.

## Workflow and scope

sdd-manage coordinates this revision campaign. Release instructions, reporting, provider/check handoffs and repository publisher now require default-branch release commits, either direct or the designated development merge into default. Release documents can be committed inside the active revision directory and moved during that release commit. The publisher enforces actual default-branch first-parent ancestry without a caller-supplied branch or full CI checkout. Revision preparation can integrate before release-campaign closure; later finalization does not replace the release tag.

Verification: 49 publisher tests (12 new provenance tests), 139 support tests, exact 153-file package build and scoped current-document checks. See the campaign report for tested sources, hashes, RED/repair evidence and dependency setup. Live CI/provider publication, fresh Windows and consuming-agent behavior remain unclaimed.

## Git context

Working branch: `revision/098_b735940-release-workflow`. Creation parent, eventual integration and return target: `main` on `origin`, pchemguy/SDD-Manager. Full baseline and branch-off commit: `b7359405ae35faac59b8182bca91b347d5e75d94`. No parent campaign is suspended.

Main includes the completed v0.15.2 release through merge `0067242f092f19742fdacd21632efef80bd39e25`, followed by the URL.md update at this campaign's baseline. Preserve all closed campaign records, published tags and releases.

## Pending boundary

Opening, plan and A-001 through A-004 commits are published and verified; the report records their exact identities. Publish/read back this A-005 completion checkpoint, then await further direction with the campaign open. No merge into main, version bump, tag or release operation is selected or performed. Authentication/publication failures retain the pending commit and block further work.
