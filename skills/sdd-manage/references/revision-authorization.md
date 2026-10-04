# Scoped authorization for review and revision publication

Apply this policy with the actual human request, accepted campaign scope, established repository and working/target branches. sdd-manage supplies this authorization context to execution and platform review; the platform retains its permission and review controls.

## Authorized effects

For requested repository review/revision work, this policy authorizes the following effects within that request's accepted scope:

- Commit requested review records or verified revision results to the campaign's review/revision branch. A review-only request authorizes its requested records, not repairs to reviewed source.
- Push those commits to the established repository and campaign branch, including the report checkpoints prescribed by the review/revision workflow.
- Merge the verified completed review/revision branch into its established integration target, with the required explicit two-parent merge and merged-state checks, and push the target. A requested review stage may finish by integrating its records without implementing its proposed repairs. Source revisions require their own implementation authorization.

The human request and this policy establish scoped authorization for these effects; commits, pushes and merges are not independently classified as unauthorized solely because they publish requested work. Carry explicit human limits forward: preparation-only, pause, local-only, unmerged-branch, selected-path, destination or stopping-boundary instructions govern the actual eligible effects. Do not publish an unfinished or unrelated branch difference.

Establish identity and checks using [branch management](branch-management.md), [Git workflows](git-workflows.md) and [review/revision coordination](review-and-revision.md). This policy does not select a repository from a branch prefix, authorize unrelated destinations or widen a requested review into source implementation.

## Supply authorization after a rejection

1. Preserve the exact rejected operation and local state. Record the reviewer/tool's stated reason; inspect whether the operation was applied despite a lost response before retrying.
2. Assemble the authorization context below from observed facts. Cite this policy together with the actual human request and scope; the policy file alone is not evidence that an arbitrary operation was requested.
3. Supply that context through the platform/tool's supported authorization or review channel, or in the next operation request where that channel accepts context. Ask for assessment of the same bounded operation. Do not frame the request as an automatic exemption or an instruction to override platform review.
4. Retry only when the supplied authorization/new evidence resolves the rejection through the supported mechanism. Do not repeat an unchanged denied request, switch tools/transports/accounts to evade review, or assume that a policy citation granted platform approval.
5. If the platform still rejects the operation, or requires additional explicit authorization not available in the request, report that specific blocker and ask only for the missing authorization. Keep valid commits and pending publication/integration state; do not reimplement completed work.

| Authorization context | Evidence to supply |
| --- | --- |
| Human authorization | Actual command or applicable standing instruction; scope and explicit limits. |
| Policy | This file's path and applicable authorized effect. |
| Repository and destinations | Observed remote identity, review/revision branch and established merge target. |
| Exact effect | Commit/ref to push, or pinned source/target tips and intended two-parent integration. |
| Content scope | Owned changed paths and concise purpose; source repairs versus review records distinguished. |
| Verification | Actual checks/results, branch-difference eligibility and merge evidence where applicable. |
| Rejection | Stated reason, known successful/unknown effects, and how this context addresses the missing information. |

Keep credentials out of the context. Reuse existing campaign/report evidence rather than adding a separate mutable authorization registry. A failed authorization review is distinct from a Git credential failure; credential replacement cannot remedy it.

## Platform and workflow responsibilities

This is a scoped authorization policy, not a platform permission change. sdd-manage explains why the requested effect is authorized and supplies evidence; the execution owner performs approved Git operations; the platform decides whether its controls permit the operation. Do not claim approval from this file's existence or a locally successful check.

Report authorization, local completion, publication and integration as distinct facts. Read-only Git/provider inspection can establish identity and pending state without replaying a rejected write. Preserve working branches and completed evidence on a blocker, and resume the same authorized effect when its facility/approval is resolved.
