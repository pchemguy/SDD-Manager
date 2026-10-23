# SDD Manager handoff

Campaign [098 — release workflow](reviews/098_b735940-release-workflow/REVISION-REPORT.md) is open. The human's release rules are recorded in its [revision plan](reviews/098_b735940-release-workflow/REVISION-PLAN.md); source execution is pending. Reporting: Standard.

## Workflow and scope

sdd-manage coordinates this revision campaign. Release tags must identify release commits on the actual default branch: either a direct commit there or the merge into it from the designated primary development branch. Release documents may be staged within the revision directory and moved during the release commit. The plan covers instruction, publisher and documentation alignment. Stop after publishing/readback of the plan; no source execution, version bump, tag, release publication, merge or closure is currently selected.

## Git context

Working branch: `revision/098_b735940-release-workflow`. Creation parent, eventual integration and return target: `main` on `origin`, pchemguy/SDD-Manager. Full baseline and branch-off commit: `b7359405ae35faac59b8182bca91b347d5e75d94`. No parent campaign is suspended.

Main includes the completed v0.15.2 release through merge `0067242f092f19742fdacd21632efef80bd39e25`, followed by the URL.md update at this campaign's baseline. Preserve all closed campaign records, published tags and releases.

## Pending boundary

Opening commit `dc9b2b5d79c1dd99608d5a48d72f8bb75e3b2f0c` is published and verified. Publish/read back this planning checkpoint, then await execution direction or further objectives. No source or hosted release change has been made. Authentication/publication failures retain the pending commit and block further work.
