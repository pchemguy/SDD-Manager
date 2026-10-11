# Demo Tetris revision plan

## Campaign and authority

- Campaign: `045_818d66f`; slug: `demo-tetris`.
- Starting baseline: `818d66f6baf8e3a324d29f3430d3bac3278f0dd2`.
- Working branch: `revision/045_818d66f-demo-tetris`.
- Source and eventual integration target: `main`, `pchemguy/SDD-Manager`.
- Authority: on 2026-10-11, the human accepted the conversational guide draft and requested opening this revision campaign and committing/pushing the draft.
- Mode: standalone revision. Campaign 037 has an actual published merge on main; it is not an active parent for this campaign.
- Entry: directly accepted documentation addition; no preceding review or review findings are claimed.
- Report: [revision report](REVISION-REPORT.md).

## Accepted scope

Preserve the accepted Tetris demo/test guide, including the short seed description, clarification criteria, baseline lock delay, five selected enhancements, phased delivery and feature expansion variants, human checkpoints, gameplay checks, and contextual result recording. Keep the guide a draft for further development.

## Ordered actions

| Action | Outcome and owners | Verification | State |
| --- | --- | --- | --- |
| V-001 | Add [the guide](../../../demo/tetris/README.md), a root README navigation link, and this campaign's plan/report/index entry. | Compare with the accepted draft; inspect Markdown spacing and new local links; run `git diff --check`; confirm the owned file set and preservation of closed campaign packages. | Draft persisted; verification is recorded in the report. |

## Persistence and stopping boundary

Commit the draft and campaign evidence together, push the campaign branch, and verify the exact remote checkpoint. Stop with the campaign open on its revision branch. This request does not close or merge the campaign, run a Tetris trial, implement a game, change plugin behavior or packaging, or publish a release.
