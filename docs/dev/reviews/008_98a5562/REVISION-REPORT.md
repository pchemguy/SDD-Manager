# Historical notices and composed workflow revision report

## Campaign and state

- Campaign: `008_98a5562`; reviewed baseline `98a556218d81870a4751ad308f6586587ac1d7da`.
- Plan: [REVISION-PLAN.md](REVISION-PLAN.md); findings: [REVIEW-REPORT.md](REVIEW-REPORT.md).
- Execution start: `98a083b555a211e45f8a16bfd3ea83829b9aa25e`.
- Working branch: `revision/008_98a5562-runtime-acceptance`; target: `feature/architecture-revision`.
- Consumer: pchemguy/AgentPlayground; observed baseline `608cf1212aedb570c88748d4a22b3d20807c462c`.
- State: In progress.

## Revision evidence

| Action | Actual result / checks | Disposition |
| --- | --- | --- |
| V-001 / R-002 | Added non-authoritative historical notices after preserved frontmatter to both tracked EXPLORE transcripts. Removing the inserted notice reproduces original content exactly; current entry links resolve; diff whitespace passed. | R-002 verified within document scope; commit/push follows with this report. |
| V-002 / R-001 | Pinned exact package/environment and initialized consumer/evidence worktrees; first credential-free push failed, protected supplied-PAT recovery and same-destination GitHub push succeeded. Source V-001 remote tip equality verified. | Setup published; supplied PAT Contents write demonstrated by actual push, API access remains unverified. |

## Consumer evidence

AgentPlayground setup commit `b9a4549` pins exact portable source `529e98d4d3cd7002e3a49e34394552a44bf0a8d0` with hashes/environment, root instructions and ignored-token policy. Initial push failed for missing shell credentials; the repository-local helper recovered HTTPS access from protected process input and the same main push succeeded. No token appears in tracked content. Evaluation worktree uses evaluation/008-runtime-acceptance; harness creation underway. No consumer runtime case has passed yet.

## Integration and limits

Boundary integration pending. Explicit source loading and client discovery/installation are distinct evidence classes. Native complete session transcripts may be unavailable; retained consumer prompts/action journals/final outputs will be labeled accurately. No credential values enter records.
