# Prerelease preparation revision plan

## Campaign and decisions

- Campaign: `070_891a0ad`; starting baseline `891a0ad69dce859e3622750c51201d6c26127499`.
- Branch: `revision/070_891a0ad-prerelease-preparation`; eventual integration target: main.
- Request: retain the prepared release documents through a prerelease revision campaign and commit/push them.
- Scope: root [RELEASE-NOTES.md](../../../../RELEASE-NOTES.md), this campaign's preparation report/evidence and the shared review index.
- State: open for human review. Keep the campaign unmerged; release/tag creation and publishing dispatch remain outside this request.
- [Revision report](REVISION-REPORT.md) and [release readiness](RELEASE-READINESS.md) retain actual preparation results. No separate comprehensive review was selected by this persistence request.

## Accepted revision

| Action | Outcome and targets | Verification |
| --- | --- | --- |
| V-001 | Track the complete root release message; retain readiness and local verification evidence in this campaign; publish the records on its revision branch. | Preserve note bytes and version, evidence/source association, exact asset hashes and current links; preserve packaged source and all closed campaign artifacts; verify the commit and remote branch. |

The initial preparation used the release-message workflow's ignored/untracked default. The user's follow-up selects durable Git persistence. Keep RELEASE-NOTES.md tracked for subsequent authorized refreshes. The generated ZIP/checksum, local build handoff and internal `.release-highlights.md` remain ignored/untracked.

## Execution and persistence

Retain the initial candidate evidence at its actual source, `891a0ad69dce859e3622750c51201d6c26127499`; documentation commits do not retroactively change what those tests checked. Commit the owned records and notes together, push the campaign branch and verify exact remote readback before further work. Refresh local coverage through the published tip and check that the record-only change adds no product highlight. Rebuild any later release candidate from its own exact commit.

## Review boundary

Return the published campaign and notes for human review. Keep the campaign open; do not merge, create a release marker/tag, dispatch a workflow or publish a GitHub release. Any requested message revisions continue here. Before eventual publication, refresh notes/source coverage and use the required release commit/body/tag agreement procedure.
