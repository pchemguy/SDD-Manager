# Release workflow revision campaign

## Identity and authority

- Campaign: `098_b735940`.
- Starting baseline and branch-off commit: `b7359405ae35faac59b8182bca91b347d5e75d94`.
- Working branch: `revision/098_b735940-release-workflow`.
- Creation parent, eventual integration target and return branch: `main` on `origin`, `pchemguy/SDD-Manager`.
- Request: “Open release workflow revision campaign.”
- State: Open; release rules accepted and [revision plan](REVISION-PLAN.md) prepared. Source execution is pending.

## Scope and stopping boundary

The opening established the campaign identity, branch and continuity checkpoint. The subsequent human instruction establishes the release rules below. Record and publish their revision plan, then stop before source execution, a version bump, tagging, release publication or campaign closure.

Source owners are sdd-manage for coordination and Git boundaries, sdd-forge for release preparation and provider publication, sdd-report for messages, and sdd-verify for release checks. The plan includes repository publisher/CI enforcement and affected current documentation.

## Accepted release rules and planning checkpoint

The human specified that release tags are always created on the actual repository default branch. The tagged release commit is either made directly on that branch or is the merge commit bringing the designated primary development branch into it. Release documents may be prepared and committed within the campaign revision directory and moved to their final locations during the release commit when necessary.

The [plan](REVISION-PLAN.md) translates those rules into A-001 through A-005, covering Git placement, staged documents and exact body preservation, provider/verification handoffs, deterministic publisher enforcement and integrated rechecks. This is a directly accepted objective, so no separate review report or invented findings precede the plan. Plans, reports and other retained campaign evidence keep their existing storage convention.

Opening commit `dc9b2b5d79c1dd99608d5a48d72f8bb75e3b2f0c` was pushed and exact-ref readback matched, with confirmed process cleanup. Existing authentication failed with the remote ref absent; the previously supplied credential restored eligible publication without persistent helper configuration changes. The token value is excluded from evidence and Git. No source, version, tag or release was changed.

Planning inspected the current release Git boundary, message preparation/reporting, GitHub lifecycle/workflow guidance, release-check criteria and repository publisher/workflow. Checks passed for the four owned paths, nine active-document link targets, heading separation and `git diff --check`; closed campaign records are untouched. These checks apply to this planning checkpoint only; no product/runtime tests, provider mutation or implemented-action verification is claimed. Publish/read back the plan commit before further campaign work.

## Opening evidence

Freshly cloned main is clean at the full baseline above; origin/main matches it. Campaign identity discovery across current tracked paths and fetched refs found the highest reserved sequence to be 097. The published 095, 096 and 097 tips are contained in main. The existing handoff records the completed v0.15.2 release; current main additionally contains the URL.md update at the starting baseline.

Execution host: Linux with Bash, Node.js 24.19.0 and Python 3.12.14. Loaded source development and acceptance instructions, discovery protocol, coordinator and applicable campaign identity, continuity, artifact, bootstrap, Markdown and publication guidance. Existing disclosure/usage records are retained. No executable or plugin content is changed by this opening.

Opening verification is limited to identity allocation, branch/baseline, clean initial state, scoped document checks and preservation of closed records. No product tests, release build or hosted release operation is selected. Publish and read back the opening commit before further campaign work; Git establishes its actual publication state.
