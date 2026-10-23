# SDD Manager handoff

Campaign [098 — release workflow](reviews/098_b735940-release-workflow/REVISION-REPORT.md) is finalized for the human-selected closure. All five actions in its [revision plan](reviews/098_b735940-release-workflow/REVISION-PLAN.md) are executed and verified; actual closure requires the explicit main merge, merged-state checks, target publication/readback and clean return. Reporting: Standard.

## Workflow and scope

sdd-manage coordinates this revision campaign. Release instructions, reporting, provider/check handoffs and repository publisher now require default-branch release commits, either direct or the designated development merge into default. Release documents can be committed inside the active revision directory and moved during that release commit. The publisher enforces actual default-branch first-parent ancestry without a caller-supplied branch or full CI checkout. Revision preparation can integrate before release-campaign closure; later finalization does not replace the release tag.

Verification: 49 publisher tests (12 new provenance tests), 139 support tests, exact 153-file package build and scoped current-document checks. See the campaign report for tested sources, hashes, RED/repair evidence and dependency setup. Live CI/provider publication, fresh Windows and consuming-agent behavior remain unclaimed.

## Git context

Campaign branch: `revision/098_b735940-release-workflow`. Creation parent, integration and return target: `main` on `origin`, pchemguy/SDD-Manager. Full baseline and branch-off commit: `b7359405ae35faac59b8182bca91b347d5e75d94`; original opening: `dc9b2b5d79c1dd99608d5a48d72f8bb75e3b2f0c`. No parent campaign is suspended. The final main merge supplies the exact verified source/target parents and merged-state results.

Main includes the completed v0.15.2 release through merge `0067242f092f19742fdacd21632efef80bd39e25`, followed by the URL.md update at this campaign's baseline. Preserve all closed campaign records, published tags and releases.

## Pending boundary

Opening, plan and all five execution actions are published and verified through `b95ed77df9d660f819565abf66b53d0511172b92`. The human selected closure. Publish/read back finalization, merge the complete campaign into main, verify the merged result, publish/read back main and confirm a clean return. If interrupted, reconcile the retained branch/merge/publication state rather than replaying it. After actual closure, freeze the records and stop; no version bump, tag, release or plugin installation is selected.
