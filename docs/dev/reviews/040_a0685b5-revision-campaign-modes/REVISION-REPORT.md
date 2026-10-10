# Revision campaign modes revision report

## Campaign and execution

- Campaign: `040_a0685b5`; baseline `a0685b578045637f9f503aef39ab3a5bf0930456`; [accepted plan](REVISION-PLAN.md), [baseline review](REVIEW-REPORT.md).
- Human instruction: “Execute campaign”, 2026-10-10.
- Working: `revision/040_a0685b5-revision-campaign-modes`; target: suspended `revision/037_a6c42dd-prerelease-review`.
- State: V-001 delivered; V-002/V-003 pending. Source checks do not certify live agent compliance.

## Action evidence

| Action | Actual result and checks | Disposition/publication |
| --- | --- | --- |
| V-001 / R-001 | Added manager-owned revision-modes reference defining new identity, parent suspension and default parent source/target, safe pending-work handling, review-only boundary and verified return without automatic parent resumption. Linked manager entry, lifecycle, branch management and workflow routing. Inspected linked owner/entry alignment and unchanged preparation/Git gates; current relative links resolve. | R-001 Revised; complete scenario recheck pending V-003. This action is published/read back before V-002. |

## Limits and integration

Only accepted source/document scope is executed. Parent 037 remains suspended; earlier campaign packages are unchanged. Final verification, explicit parent merge and target publication facts are retained in Git. Main integration/release/live consumer tests are outside this campaign.
