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

## Reopened amendment — V-002

The human explicitly reopened 120 to adapt “Starting the exercise” as Quick Start in the root README. The qualifying latest first-parent merge on main is `4bfebd6e0dfdacb57419d83f63a69cf2e9502cdc`, with parents `cccb2bbc48e2d2c3984b82d2c0275fba1bc753fa` and `72b7e76810c4f06fef30550d060bd323ef0348ef`. Fresh origin/main matches it. This related demo-entry amendment retains the original campaign ID, opening and baseline.

V-002 (sdd-docs): add a concise root Quick Start covering template setup, repository-scoped authorization and prompt selection, adapting guide-relative links for root readers. Preserve the guide and package entry. Verify Markdown, local file/anchor targets and fidelity to the source’s mode/checkpoint distinctions. Publish source with evidence and retain the reopened campaign for review; no new release is selected.

## Follow-up — V-003

Add the human-supplied GitHub personal-access-token settings link to “Create a fine-grained personal access token (PAT)” in the root and Tetris guide READMEs. Preserve the surrounding setup and permissions wording. Verify the exact destination in both files and diff whitespace, then publish the action with evidence.

## Follow-up — V-004

Clarify the root Quick Start introduction to explain all four prompt choices, including Featured Autodoc’s baseline followed by separate feature campaigns. Verify consistency with the prompt table and source guide, preserve their text, and publish the correction with evidence.

## Follow-up — V-005

Remove the TextStats acceptance-project clause from root README as requested; retain the adjacent source-development and campaign-navigation links. Check the sentence and diff whitespace, then publish.

## Follow-up — V-006

Add the missing calculator demo reference to root Quick Start, with a brief description grounded in the calculator guide and a route to its starting template. Verify the link and source fidelity, then publish.
