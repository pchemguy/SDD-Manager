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

Maintain the accepted Tetris demo/test guide, including the short seed description, clarification criteria, five selected enhancements, phased delivery and feature expansion variants, human checkpoints, gameplay checks, and contextual result recording. The accepted V-003 scope starts both variants with failed-downward-attempt locking, offers two hard-drop policies, and adds full-interval and hard-drop-policy steering exercises. Preserve the supplied earlier trial brief unchanged. Keep the guide a draft for further development.

## Ordered actions

| Action | Outcome and owners | Verification | State |
| --- | --- | --- | --- |
| V-001 | Add [the guide](../../../demo/tetris/README.md), a root README navigation link, and this campaign's plan/report/index entry. | Compare with the accepted draft; inspect Markdown spacing and new local links; run `git diff --check`; confirm the owned file set and preservation of closed campaign packages. | Draft persisted; verification is recorded in the report. |
| V-002 | Add the human-supplied [example PROJECT.md](../../../demo/tetris/examples/PROJECT_phased-project.md) and reference it under Variant A as an agent-generated brief from an earlier trial. | Preserve supplied content except trailing whitespace; check relative links and Markdown structure; clarify example-specific technology and lock-delay grouping without rewriting the historical brief. | Accepted on 2026-10-11; checkpoint verification recorded in the report. |
| V-003 | Revise the guide to start with failed-downward-attempt locking, define immediate-exception and general-delayed hard-drop policies, and supply two checkpoint steering exercises for either delivery variant. | Check all initial prompts, current-policy interactions, timing/reset rules, eligible checkpoints, verification criteria and local links; verify the supplied example is unchanged and closed campaign packages are preserved. | Accepted on 2026-10-11; verification recorded in the report. |
| V-004 | Rename the supplied example to `PROJECT_phased-project.md` and update active references to identify Variant A. | Verify unchanged example bytes, updated relative links, variant association and scoped rename. | Accepted on 2026-10-11; verification recorded in the report. |
| V-005 | Format every sample prompt in the Tetris guide with the supplied `NOTE` / `Prompt` callout template. | Verify all eight prompt blocks have the exact header and retain their original text; check whitespace and scoped paths. | Accepted on 2026-10-11; verification recorded in the report. |

## Persistence and stopping boundary

Commit the draft and campaign evidence together, push the campaign branch, and verify the exact remote checkpoint. Stop with the campaign open on its revision branch. This request does not close or merge the campaign, run a Tetris trial, implement a game, change plugin behavior or packaging, or publish a release.
