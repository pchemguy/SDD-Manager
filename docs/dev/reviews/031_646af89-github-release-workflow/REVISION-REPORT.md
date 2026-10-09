# GitHub Release Workflow revision report

## Campaign and scope

- Campaign: `031_646af89`; [accepted plan](REVISION-PLAN.md).
- Starting source: `646af8924cd06aedcf8c7edb1937ba887e40eab6`.
- Published planning checkpoint: `31e8ea73b4ff5e527f64aaad292bdaf805d49167`.
- Working branch: `revision/031_646af89-github-release-workflow`; integration target: actual default `main`.
- The user commanded “Execute” after publishing the plan. Source implementation, checkpoint publication and the complete verified merge/publication are authorized. Product release/tag/dispatch writes are outside the requested execution boundary.
- State: V-001 through V-005 implemented and locally checked; committed-package verification and final integration pending at this checkpoint.

## Implemented behavior

The GitHub backend now routes package assessment, interactive package/build-workflow preparation, workflow dispatch/monitoring, and release creation/recovery. Five focused references define packaging, workflow operations, release lifecycle, verification and reporting. Manager/forge entry points and current README/examples expose them without requiring TASKS or tracking activation for standalone release work.

Packages use version-free asset names and conventional suffixes for actual variants. Latest downloads require a complete advertised asset set. One publisher builds/uploads the verified source; direct release creation follows draft, complete uploads, verify, publish and readback, with bounded recovery for uncertain writes. Current token guidance adds Workflows read/write and distinguishes conditional Actions access and job GITHUB_TOKEN permissions. Both synchronized plugin manifests describe these capabilities and use source version `0.16.0`.

## Revision actions and actual evidence

| Action | Implemented result | Evidence and limits |
| --- | --- | --- |
| V-001 | Expanded forge/manager request triggers and operation handoffs; retained Git ownership and independent release/preparation boundaries. | Inspected both entry points, manager catalog and GitHub route table. No live consumer routing exercised. |
| V-002 | Added package contract, interactive continuation, safe archive assessment, source/output comparison, names/checksums and latest URLs. | Inspected github-packaging and workflow preparation guidance; actual committed archive check is pending below. |
| V-003 | Added workflow authoring/dispatch/monitoring and release identity/draft/upload/publish/recovery/readback procedures, with CLI/API recipes. | Checked operation semantics against current English GitHub/CLI documentation. No dispatch, tag or release API mutation performed. |
| V-004 | Added Workflows read/write in the backend profile; reconciled current README and acceptance SETUP; clarified conditional Actions and obsolete profile exclusions. | Current-source search and profile inspection agree. No existing PAT permissions were modified or asserted. |
| V-005 | Added release verification/reporting references, skill triggers and README/examples; synchronized metadata at 0.16.0. | Four skill validators pass; 126 current relative links/anchors pass; both manifests byte-identical; 113 support tests pass. |
| V-006 | Final package, scenario coverage, closed-record preservation and explicit integration checks remain pending at this source checkpoint. | No final publication claim yet. |

## Local checks

- `PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v`: 113 tests, all passed. Test log retained temporarily at `/tmp/sdd031-support.log`; source was the pending implementation delta over planning commit `31e8ea7`.
- `quick_validate.py` for sdd-forge, sdd-manage, sdd-verify and sdd-report: all four valid.
- Current changed/new Markdown relative link and anchor inspection: 126 passed. Historical campaign targets were excluded; no historical contents loaded or validated.
- `git diff --check`: passed. Canonical/legacy manifest comparison: identical, version 0.16.0.

## Evidence boundaries

This is an instruction-source implementation. No executable product packaging/release code or test implementation changed; the existing support suite is a required boundary regression, not proof of release lifecycle behavior. Source scenarios will be assessed separately from package execution. No fresh independent consumer, live CI, platform installer, credential-permission change, new tag/release or hosted asset download has been exercised. No release of SDD Manager itself is implied by updating source version metadata.

## Integration handoff

Publish coherent source/evidence on the campaign branch before dependent finalization. Verify the committed package and scenario coverage, finish current records/navigation, then explicitly merge the complete tip into refreshed main. Record exact parents, merged checks, target publication and remote containment in the merge commit; do not leave a final report commit outside integration. Prior closed campaign files remain untouched, checked by Git path/object identity only.
