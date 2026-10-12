# Revision plan

## Campaign and decisions

Campaign: **053_3a095e2**. Original baseline: `3a095e23bcefd341933ca2353275c5243da32a97`. Revision starts from published review `737532bc296cb79e58d9ddf13aca0c8f38a4f667`, branch `revision/053_3a095e2-comprehensive-review`, target `main`.

The human requested planning and execution of the review findings. Accept R-001–R-005; retain baseline observations in [review report](REVIEW-REPORT.md). Scope: documentation/navigation corrections and TextStats assessor component extensions. No live acceptance, hosted object changes, product release or new runtime feature. Existing canonical workflow semantics remain unchanged.

## Ordered actions

| Action | Findings | Changes and objective rechecks |
| --- | --- | --- |
| V-001 | R-001/R-002 | README preparation diagram explicitly carries publication-before-review for each grouped root; PLAN/layout decisions stay separate. GitHub QC names native milestones; provider fallback requires a defined equivalent lifecycle. Trace stages and verify links/diff. |
| V-002 | R-003/R-004 | Extend main/feature preparation and implementation/recovery assessor criteria; add focused positive/negative/order/exception scenarios. Preserve consumer inputs and independent judgment. Validate catalog/guide alignment and support suite; component checks do not grade live consumers. |
| V-003 | R-005 | Make current campaign index a contiguous headed table with prose outside it; preserve prior row bytes/text/links and closed packages. Complete reports, run publisher/support/package/link checks, explicitly merge the verified campaign, check merged state and push/read back main. |

## Persistence and boundary

Update [revision report](REVISION-REPORT.md) with each action's actual changes and evidence. Commit/push/read back the plan and every action before the next work unit. Use no invented task IDs. Verify full diff excludes prior closed packages and unrelated work. Final integration uses an explicit two-parent merge and cumulative campaign summary with original opening/baseline, review scope, delivered corrections and verification limits. Stop after publication; no new consumer/client/provider acceptance claim.
