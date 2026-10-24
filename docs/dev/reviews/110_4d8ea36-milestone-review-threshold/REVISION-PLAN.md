# Revision plan: conditional milestone review tasks

## Campaign and authority

- Campaign: **110_4d8ea36**; directory: docs/dev/reviews/110_4d8ea36-milestone-review-threshold/.
- Full starting baseline/branch-off: `4d8ea36fe8add4bf4bae7c400d443bc8288ac8e9`.
- Working branch: revision/110_4d8ea36-milestone-review-threshold. Creation parent, integration and return: main on origin, pchemguy/SDD-Manager.
- Human authorizes opening, planning, execution and closure. A subsequent clarification explicitly excludes the special phase review milestone from the change.
- Entry: bounded fetch completed, main and origin/main match, worktree clean, no unmerged workflow refs; highest allocated campaign 109. No parent suspended; Standard reporting.
- State: **Source revised and locally verified; committed-package and final integration checks pending.** The opening is published; see [revision evidence](REVISION-REPORT.md). No separate review stage is invented.

## Accepted policy and decisions

For newly generated implementation work, add a standalone milestone review task **only when both** the milestone has at least four implementation tasks **and** its phase has at least two implementation milestones. Omit that task if either the milestone has fewer than four implementation tasks or the phase has only one implementation milestone. The special phase review milestone and its single phase review task remain unchanged and are excluded from the implementation-milestone count.

Count capability-bearing implementation/delivery work, including necessary integration, tests, documentation and packaging, under the existing count convention. Exclude dedicated review/report-only work and do not count a task's own checks/docs twice. Do not pad/split work to reach four or invent another milestone to force a separate review task.

Omitting the standalone task does not waive milestone acceptance, code review, tests, report, HANDOFF or closure evidence. Assign those obligations to the milestone's final implementation task, including whole-milestone review after its result is ready and before its initial completion commit. That task depends on the other milestone tasks, owns the report/HANDOFF/checkoff in the same commit and supplies the final evidence association. This avoids a circular phase-review prerequisite: the delivery milestone still closes before the unchanged special phase review starts. One implementation task may therefore carry its normal result and this milestone boundary, without becoming two executable tasks.

The current projection validator unconditionally requires a final milestone-review role. Extend it to accept the eligible folded boundary with role delivery and the same review_task field pointing to that final task; retain the schema/identity/dependency contracts and phase-review ordering. Previously accepted explicit-review hierarchies remain readable/projectable without silently removing IDs or invalidating frozen prior-pass ranges. Generation/QC applies the new threshold; adoption of an existing task list needs its existing scoped amendment authority. The completion utility already associates reports with included task IDs without requiring a title/role; clarify that contract and verify it with a focused test.

## Ordered revisions

| Action | Outcome and bounded owners | Dependency | Verification |
| --- | --- | --- | --- |
| A-001 | Shared backend lifecycle owns the threshold, count exclusions, folded boundary, persistence and closure ordering. Align task hierarchy and development-document QC. | Accepted policy | 1–3 versus 4+ implementation tasks; one versus multiple implementation milestones; phase review excluded. |
| A-002 | Align PLAN boundary guidance, TASKS derivation/example and conformance review. Propagate folded report/HANDOFF ownership to implementation, continuity, verification, reporting and GitHub closure guidance. | A-001 | No extra task when either exemption applies; whole-milestone exits and the separate phase review remain enforceable without circular dependencies. |
| A-003 | Extend projection-input validation and its CLI input guide for eligible delivery-role boundary tasks; clarify forge-close report ownership. Add focused projection/completion contracts while preserving existing accepted layouts, fixed DOCS definitions and schema. | A-001–002 | Positive folded/explicit layouts and threshold negatives; missing/incorrect boundary owner or dependencies rejected; docs-main and phase review unchanged; synthetic projection/closure succeeds. |
| A-004 | Align concise README and relevant assessor expectations; assess source proportion, abstract boundary cases and changed handoffs. Run affected Node suites, support/publisher tests, current links/scope and exact committed package/five CLI helps. | A-001–003 | Record actual source/results and limits in REVISION-REPORT.md; native/live/installed behavior remains distinct. |

## Persistence, exclusions and closure

Publish/read back this opening before source execution. Persist coupled revisions with their actual verification/report evidence, publish/read back every owned commit before further work, finalize HANDOFF/navigation, then explicitly merge the complete verified branch tip into refreshed main, check the two-parent result/exact package, publish/read back main and return clean. Actual Git effects establish closure; retain the campaign branch and records.

No target-demo, release/version, installation, authentication, projection transport/schema, fixed DOCS task or broad task-count heuristic change is selected. Closed records remain untouched; no extra registry, administrative task or mandatory per-turn HANDOFF update is added. Preserve existing strict/flexible multipass permissions and accepted task IDs rather than retroactively applying generation rules through execution.
