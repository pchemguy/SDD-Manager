# Demo prompt revision plan

## Campaign and accepted scope

Campaign **120_cccb2bb**, branch `revision/120_cccb2bb-demo-prompts`; parent and eventual return target: main at `cccb2bbc48e2d2c3984b82d2c0275fba1bc753fa`. Revision starts from `f03dce8e9903a12089de597349d13b07308cce4b`.

The human requested “Fix all issues in all prompts”, accepting R-001–R-003 from the [review](REVIEW-REPORT.md). No findings are deferred or rejected. Use the required intermediate session-only increment in both full-project prompts; retain their final persistence requirements. No governing project specification or executable task-list change is needed.

## Ordered revision

| Action | Findings | Owner and outcome | Dependencies | Recheck |
| --- | --- | --- | --- | --- |
| V-001 | R-001, R-002, R-003 | sdd-docs: align workflow terminology in Autodoc, Interactive and Featured Autodoc; remove contradictory optional sequencing and trailing whitespace | Accepted request and existing review | Inspect all four prompt variants and guide examples; preserve persistence requirements, feature/pass boundaries and unrelated content; check complete campaign diff whitespace and changed local links |

## Persistence and boundary

The coordinator commits source with the [revision evidence](REVISION-REPORT.md), publishes and reads back the exact branch tip. Keep campaign 120 open at the published repair checkpoint; merge, closure and release are outside this selected scope. Preserve main, the original 119 branch and closed records.
