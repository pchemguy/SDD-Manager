# Revision campaign modes revision plan

## Campaign and proposed decisions

- Campaign: `040_a0685b5`; baseline `a0685b578045637f9f503aef39ab3a5bf0930456`; [review report](REVIEW-REPORT.md).
- Working branch: `revision/040_a0685b5-revision-campaign-modes`; proposed target: suspended `revision/037_a6c42dd-prerelease-review`. Main is outside this campaign’s target boundary.
- State: Proposed, not executed. The human requested the two modes; proposed names, detailed eligibility and integration wording are presented for acceptance before source revision.
- Proposed names: **nested revision campaign** and **reopened campaign amendment**. Both are modes of the existing revision workflow. “Extension” describes the relationship of the change; “amendment” names the additional authorized scope. Git commit amend/history rewriting is not part of either mode.
- Scope: definitions/routing, branch selection/reuse, parent suspension/return, latest-merge eligibility, scoped reopening of retained records, stable action/evidence handling and relevant navigation/examples.
- Exclusions: campaign 037 repair/resumption/re-pinning, edits to earlier campaign packages, new skills/registries, acceptance-tool implementation, live provider/consumer testing, main integration and release publication.

## Ordered proposed actions

| Action | Findings | Targets / outcome | Dependencies | Acceptance/recheck |
| --- | --- | --- | --- | --- |
| V-001 | R-001 | Add manager-owned references/revision-modes.md with selection and nested revision definition. Link from review-and-revision, branch-management, workflows and manager entry. Keep lifecycle/provider/Git procedures in existing owners. | Accepted names/scope. | New identity; actual immediate parent branch/checkpoint as default source and target; clear suspend/return boundary; preserve pending work and per-commit publication. Explicit override and prerequisite gates retained; no automatic parent completion/resumption. |
| V-002 | R-002 | Add reopened amendment definition/eligibility to the same owner; align review-campaigns, workflow-identity, report campaign-artifacts and manager/root orientation freezing cues with a narrow human-authorized reopening exception. Include contextual proposal guidance. | V-001. | Verify latest first-parent merge matches published closure of the related campaign and established target/source; retain original identity/baseline/paths and history, add reopening checkpoint/new stable actions/results, bring branch forward safely and merge again. Proactive suggestion is not reopening authority. All other closed records remain frozen. |
| V-003 | R-001/R-002 | Add concise examples/current README navigation as needed; inspect all consequential entry/identity/report handoffs and focused positive/negative cases, actual package links/content and declared support suite. Finish revision report/index before eligible integration. | V-001/V-002. | Cover nested parent types, review-only and execute boundaries, target override, dirty/unpublished/ambiguous parent, qualifying related amendment, later non-merge work, disqualifying later merge/wrong target/unknown closure/unrelated change, repeated amendments, suggestion versus accepted reopening, blocked push/merge recovery and parent return. Record checks actually performed; distinguish text/source checks from live fidelity. |

## Proposed mode contracts

### Nested revision campaign

Identify the actual active parent campaign and branch; already suspended but still active parents remain eligible. A new child revision defaults to starting at the parent’s refreshed published checkpoint and merging back into that branch. Record the parent suspension and unfinished boundary in existing active evidence; no new state registry. Retain/publish coherent verified owned work as authorized and preserve dirty work/index without implicit stash/reset. Use a separate worktree if safe switching is unavailable. Ambiguous parent ownership/target or unfinished verification/publication blocks dependent setup rather than selecting main by guesswork.

The child keeps its own campaign identity, scope and evidence. Review and execution authority remain separate. Its completed authorized revision requires explicit two-parent integration, merged-state checks and parent-target publication. Return to the parent context with remaining work and affected candidate/evidence reassessment identified; do not resume, close or advance the parent solely because the child merged. Existing explicit continuation authority may cover resumption; otherwise return control.

### Reopened campaign amendment

Use the actual active worktree branch as the proposed return target and verify its most recent first-parent merge. It must be the final published explicit merge of the last closed revision campaign being extended, with consistent established campaign branch/target/parents/closure evidence. Another intervening merge is disqualifying for this default mode; do not search farther back for a convenient candidate. A merge title, highest sequence number or ancestry alone is insufficient. Non-merge commits after the qualifying merge are retained in the current target checkpoint and assessed for scope/dependencies; the human’s condition does not require HEAD itself to be a merge.

An explicit related reopening request authorizes the mode once eligibility is established; do not ask again for granted scope. Without such authority, readily available context may support a concise proposal naming the campaign, qualifying merge and relationship. Do not load unrelated closed histories merely to hunt for a reuse opportunity, and do not amend automatically. If eligibility is unavailable/false, explain the concrete mismatch and propose a new campaign or resolve it; do not silently substitute an older campaign or broaden authorization.

Reopen only the selected package, retain original identity/full baseline/branch/directory, record current target/reopening SHA and accepted delta, and append unused stable action IDs and actual results while preserving original observations/closures/checks. Bring the amendment branch forward to the refreshed target using existing Git recovery rules; preserve divergence and pending work. Published history is never rewritten. Execute/check/publish amendment scope, explicitly merge again into the same established return target, verify/publish and close. Incomplete execution/integration/publication remains active/blocked and resumes rather than falsely reopening a second time.

## Verification, publication and stopping

After acceptance, update the revision report with each action’s actual changes and objective rechecks; commit/push/read back before the next action or other project work. Run current-document Markdown/links, owner alignment, package checks and the declared support suite for coherent integration. Preserve parent/closed campaign records by full path diff. Final accepted revision explicitly integrates into suspended campaign 037, with prospective merged-state checks and target publication; Git may retain final integration facts without post-closure record edits. Stop at this selected boundary. The parent prerelease assessment stays suspended and requires separately authorized re-pinning/reassessment when resumed.
