# Prerelease preparation revision plan

## Campaign and decisions

- Campaign: `070_891a0ad`; starting baseline `891a0ad69dce859e3622750c51201d6c26127499`.
- Branch: `revision/070_891a0ad-prerelease-preparation`; eventual integration target: main.
- Request: retain the prepared release documents through a prerelease revision campaign and commit/push them.
- Scope: root [RELEASE-NOTES.md](../../../../RELEASE-NOTES.md), this campaign's preparation report/evidence and the shared review index.
- State: closure and release authorized by the subsequent request, “Make release and close campaign.” Integrate the verified preparation into main, then execute the release commit/tag and single publisher.
- [Revision report](REVISION-REPORT.md) and [release readiness](RELEASE-READINESS.md) retain actual preparation results. No separate comprehensive review was selected by this persistence request.

## Accepted revision

| Action | Outcome and targets | Verification |
| --- | --- | --- |
| V-001 | Track the complete root release message; retain readiness and local verification evidence in this campaign; publish the records on its revision branch. | Preserve note bytes and version, evidence/source association, exact asset hashes and current links; preserve packaged source and all closed campaign artifacts; verify the commit and remote branch. |
| V-002 | Finalize campaign records and index, integrate preparation into main, then release stable v0.15.0 as latest. | Verify the complete merged boundary and publication; refresh coverage; compare raw release-commit body with notes; verify tag, workflow, release body and downloaded archive/checksum. |

The initial preparation used the release-message workflow's ignored/untracked default. The user's follow-up selects durable Git persistence. Keep RELEASE-NOTES.md tracked for subsequent authorized refreshes. The generated ZIP/checksum, local build handoff and internal `.release-highlights.md` remain ignored/untracked.

## Execution and persistence

Retain the initial candidate evidence at its actual source, `891a0ad69dce859e3622750c51201d6c26127499`; documentation commits do not retroactively change what those tests checked. Commit the owned records and notes together, push the campaign branch and verify exact remote readback before further work. Refresh local coverage through the published tip and check that the record-only change adds no product highlight. Rebuild any later release candidate from its own exact commit.

## Accepted release boundary

The initial preparation stopped on the published campaign branch for human review. The human then requested release and campaign closure, accepting progression with the prepared message. Close this preparation campaign on verified explicit integration/publication to main; product publication follows that Git boundary. Retain these records without post-closure edits.

Refresh notes/source coverage and use the required release commit/body/tag agreement procedure. Publish through the established release.yml workflow, with stable/latest selected, and verify its actual result and assets. Do not start live agent/client acceptance or alter package behavior as part of release execution.
