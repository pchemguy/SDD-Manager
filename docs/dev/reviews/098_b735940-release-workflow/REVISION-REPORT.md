# Release workflow revision campaign

## Identity and authority

- Campaign: `098_b735940`.
- Starting baseline and branch-off commit: `b7359405ae35faac59b8182bca91b347d5e75d94`.
- Working branch: `revision/098_b735940-release-workflow`.
- Creation parent, eventual integration target and return branch: `main` on `origin`, `pchemguy/SDD-Manager`.
- Request: “Open release workflow revision campaign.”
- State: Open; the human authorized execution of the [revision plan](REVISION-PLAN.md). Campaign closure and a product release are not selected.

## Scope and stopping boundary

The opening established the campaign identity, branch and continuity checkpoint. The subsequent human instructions establish the release rules below and authorize plan execution. Execute its bounded actions and stop with the campaign open, before a version bump, tagging, release publication or campaign closure.

Source owners are sdd-manage for coordination and Git boundaries, sdd-forge for release preparation and provider publication, sdd-report for messages, and sdd-verify for release checks. The plan includes repository publisher/CI enforcement and affected current documentation.

## Accepted release rules and planning checkpoint

The human specified that release tags are always created on the actual repository default branch. The tagged release commit is either made directly on that branch or is the merge commit bringing the designated primary development branch into it. Release documents may be prepared and committed within the campaign revision directory and moved to their final locations during the release commit when necessary.

The [plan](REVISION-PLAN.md) translates those rules into A-001 through A-005, covering Git placement, staged documents and exact body preservation, provider/verification handoffs, deterministic publisher enforcement and integrated rechecks. This is a directly accepted objective, so no separate review report or invented findings precede the plan. Plans, reports and other retained campaign evidence keep their existing storage convention.

Opening commit `dc9b2b5d79c1dd99608d5a48d72f8bb75e3b2f0c` was pushed and exact-ref readback matched, with confirmed process cleanup. Existing authentication failed with the remote ref absent; the previously supplied credential restored eligible publication without persistent helper configuration changes. The token value is excluded from evidence and Git. No source, version, tag or release was changed.

Planning inspected the current release Git boundary, message preparation/reporting, GitHub lifecycle/workflow guidance, release-check criteria and repository publisher/workflow. Checks passed for the four owned paths, nine active-document link targets, heading separation and `git diff --check`; closed campaign records are untouched. These checks apply to this planning checkpoint only; no product/runtime tests, provider mutation or implemented-action verification is claimed. Publish/read back the plan commit before further campaign work.

## Execution evidence

### A-001 — Default-branch Git release boundary

Defined direct default-branch releases and release merges from the designated primary development branch in git-workflows.md, with a shallow branch-management reminder. The merge itself carries the release message. Default-branch publication precedes tag creation, first-parent provenance excludes side-history candidates, and recovery retains a pinned eligible commit after default advances. Source-only requests cannot bypass eligibility; prior tags/releases remain unchanged. Document placement and retained campaign records have distinct ownership.

Source inspection covers direct/default, designated-development merge, side-branch rejection and advanced-default recovery. Checked changed Markdown formatting and patch scope; no runtime or live-release claim follows from this procedural action. Per-action publication is recorded by its containing commit and exact-ref readback.

### A-002 — Release-document staging and exact message

Message preparation now distinguishes preparation and final paths, permits tracked release documents within the active revision directory, and moves only owned documents during the default-branch release commit. Final notes are retained; campaign plans/reports keep their paths. Reporting and commit guidance cover both direct and development-merge commits with identical finalized Markdown. Highlights include the final default-branch result, including changes arriving from its other parent.

Inspected tracked/untracked staging, existing/foreign final files, preparation-only stops, pure moves, exact-body handling and merge coverage. Scoped whitespace/link checks pass; these are instruction/source assessments, not runtime filesystem or consumer execution evidence. Publication follows the containing action commit.

### A-003 — Provider and documentation handoffs

Aligned the GitHub release lifecycle and workflow requirements, release-check criteria, forge entry, coordinator routing, packaged PLUGIN.md and README. They now carry default-branch first-parent eligibility, exact tag/package/publisher source agreement, direct-versus-development-merge handling, staged documents and qualified recovery without source-only bypasses. The workflow execution ref remains distinct from the release source. Entry detail remains shallow; no new reference fragment was added.

Source rechecks cover side-history rejection, wrong merge direction, pinned-source recovery after default advances, preparation-only stops and no duplicate release marker. Scoped formatting/link checks are applied to current changed documents; closed records and published releases are unchanged. Live agent/CI/provider behavior is not claimed by this instruction action.

### A-004 — Deterministic publisher provenance gate

The publisher now reads the repository's actual default branch and pinned Git ref, following only first-parent Git objects before release mutation and again at final readback. It accepts a pinned direct/default commit or default-branch release merge after later advancement, rejects side-history candidates and wrong merge direction, and fails closed on unavailable/substituted/cyclic or over-bound history. The handoff schema is unchanged; no workflow fetch-depth change is needed because ancestry comes from provider Git objects. Build-only performs no provider calls. The source handoff guide defines the check and its 1,000-step bound. Designation of a primary development role and exact release-commit body equality remain coordinator checks, not claims inferred from graph structure.

Test-first evidence: the new mutation-gate regression failed on the original implementation because no exception was raised and publication proceeded; the adapter graph tests also reported the not-yet-existing method (12 errors across subcases). Those missing-method errors are not counted as independent behavioral RED evidence. After implementation, all nine initial tests passed. Three additional recovery/request-scope/bounded-history tests bring the provenance set to 12.

Verification: `/tmp/sdd098-venv/bin/python -B -m unittest discover -s .github/tests -v` passes all 49 publisher tests, including the 12 new provenance contracts. The first full-suite attempt found missing jsonschema rather than a source defect; installing the declared `.github/requirements.txt` in an isolated temporary virtual environment resolved it. `python -B -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v` passes 139 support tests. Scoped current-document checks pass 249 link targets and whitespace checks. A build from committed package source `e12f6e4b00f70393c3eb10c2596faa54b6682553`, using the new local publisher, verifies all 153 members; ZIP SHA-256 is `14e5b4423038764d67df5250f3e6c00fb3b3a405ce0d118dc3fadf4eee3a2a1a` (459,168 bytes). Publisher/test/doc changes in this action are source-only and excluded from that package.

These are Linux local Git/ZIP and controlled-provider results. No release tag, workflow dispatch, live provider mutation or fresh Windows runtime is exercised. Each action's commit is published/read back before the next action.

## Opening evidence

Freshly cloned main is clean at the full baseline above; origin/main matches it. Campaign identity discovery across current tracked paths and fetched refs found the highest reserved sequence to be 097. The published 095, 096 and 097 tips are contained in main. The existing handoff records the completed v0.15.2 release; current main additionally contains the URL.md update at the starting baseline.

Execution host: Linux with Bash, Node.js 24.19.0 and Python 3.12.14. Loaded source development and acceptance instructions, discovery protocol, coordinator and applicable campaign identity, continuity, artifact, bootstrap, Markdown and publication guidance. Existing disclosure/usage records are retained. No executable or plugin content is changed by this opening.

Opening verification is limited to identity allocation, branch/baseline, clean initial state, scoped document checks and preservation of closed records. No product tests, release build or hosted release operation is selected. Publish and read back the opening commit before further campaign work; Git establishes its actual publication state.
