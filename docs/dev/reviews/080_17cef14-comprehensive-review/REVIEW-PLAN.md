# Comprehensive source and documentation review plan

## Campaign and scope

- Campaign: 080_17cef14; opened 2026-10-19.
- Starting and reviewed baseline: 17cef14c69dd7a84dc035ac8e864f446ee3668c5, published main after campaign 079.
- Working/publication branch: revision/080_17cef14-comprehensive-review on origin, pchemguy/SDD-Manager.
- Creation parent, eventual integration and return target: main at the full baseline. No parent task workflow is suspended.
- Human request: “Open and run comprehesnive review”, explicitly extended by “and docs!”.
- Owner: sdd-manage; source owners supply domain criteria, sdd-docs owns documentation assessment and sdd-verify owns check interpretation. Reporting: Standard.
- Output: this plan, [review report](REVIEW-REPORT.md), current index navigation and HANDOFF. Review and scoped local verification only; source fixes, revision execution, merge/closure, live-client installation, release publication and hosted product mutations are not selected.
- State: All seven review units completed and consolidated; campaign remains open at the review-only stop. Per-unit checkpoints were published/read back. The final containing commit requires its own exact remote readback.

## Inventory and review method

Assess the complete current plugin rather than only its recent delta: 154 packaged files, 15 skill entries and 79 references, supplied script guides/templates/presentation and operational assets. Account for source-only root guidance, current docs/dev roots, demo/Jules guides and examples, release/publisher/CI sources, tests and maintained acceptance documentation/harness. Classify resources by the units below, with assessed depth and exclusions in the report; file size is a diagnostic measurement, not an acceptance ceiling.

Use current source and explicit controlling human decisions. In particular, the original PowerShell.cmd assignment is intentional; do not treat the reverted delayed-expansion implementation as pending work. Preserve closed campaign/feature/steering records without loading or validating their contents. Exclude historical AI logs, prior acceptance-run outputs, Git internals and secrets from content review. Discover historical identities through paths/refs only.

Read consequential owner/handoff instructions and assess representative positive, negative, boundary and recovery scenarios. Reverse-outline substantial instruction/docs sections, checking purpose, reader order, controlling concerns, duplication, substantive reference boundaries and sufficient context. Broad/shallow routing and narrow/detailed procedures are both valid; avoid recommending thin fragments or splits solely for size. Keep examples illustrative and avoid turning domain examples into workflow scope restrictions.

Use package-author review criteria for entry/reference composition and portable/client boundaries, plus technical-writing criteria for clarity, composition and software-documentation accuracy. This is current-source inspection and supported execution, not an independent external fact-checking campaign. Acquire only specifically relevant official/provider references or selected CI evidence if needed; distinguish inspected source, structural checks, controlled runtime, source scenario assessment and actual client observations.

## Review order and criteria

| Unit | Scope and owners | Dependencies | Criteria and representative contrasts | Evidence and checkpoint |
| --- | --- | --- | --- | --- |
| U-001 | Product architecture, manifest/presentation, PLUGIN/README, all skill entries, current capability/contract maps; conventions and package-author criteria | Published opening | Advertised capability coverage, direct entry versus shared entry, activation/routing, reference inventory/selection, portable versus client metadata, coherent role boundaries | Full entry inventory and structural/source assessment; publish unit report before U-002 |
| U-002 | Coordinator/orientation, shared conventions, preparation/tracking, Git/branch/campaign/continuity, credentials and Windows recovery | U-001 | Fresh/resumed main/feature/revision; accepted versus pending checkpoints; tracking/pre-write; normal/failing shell and publication; nested return; authorization and preservation | Trace both sides of gates and source scenarios; publish before U-003 |
| U-003 | Exploration, project/architecture/decomposition, SPEC, PLAN/layout, TASKS and feature incorporation | U-002 | Terse versus developed objectives, user-aligned options, illustrative examples, smallest sensible initial outcome and bounded increments in every phase, scope/coverage/dependency consistency | Inspect focused references and consequential templates/routes; publish before U-004 |
| U-004 | Implementation, steering, test strategy, verification, completion/reporting and documentation handoffs | U-003 | Range/phase selection, single-task atomicity, separate code review/testing, milestone/phase evidence, amendment return, acceptable versus blocking deferrals | Owner/reference assessment and positive/failure/recovery contrasts; publish before U-005 |
| U-005 | Bundled Git authentication, protected token, GitHub client/runtime, close/projection/draft scripts and exact interface docs | U-004 | Cross-platform inputs, local/provider boundaries, validation before mutation, pagination/ambiguity, idempotent/recovered effects, deadlines, token protection and output handling | Inspect implementation/tests/docs; run three synthetic Node suites and inspect applicable native CI evidence; publish before U-006 |
| U-006 | Comprehensive documentation and composition: root/package guides, all instruction modules, in-code docs, templates, current dev docs, demo/Jules guides, release and maintained acceptance docs/examples/diagrams | U-005 | Accuracy against owners/code, reader/audience fit, useful prerequisites/outcomes, standalone context, terminology, cohesion/bounded references, paragraph/section flow, examples and navigation | Editorial discrepancy/coverage review, current links/Markdown and diagram source assessment; report actual render/execution limits; publish before U-007 |
| U-007 | Release-message/highlights/backend, publisher and distribution, tests/CI/acceptance coverage; consolidate whole-package findings and readiness | U-006 | Exact candidate package/schema/bytes, release/body/tag/provenance gates, workflow protection, support versus native/client evidence, coverage gaps and required-check failures | Run full support/publisher checks, verify exact package and source-only exclusions, inspect maintained acceptance mechanism; publish consolidated report/HANDOFF and stop |

## Findings and persistence

Allocate stable R-IDs once in the report. Each canonical finding records baseline location, observed issue/consequence, type/priority/confidence, bounded owner/correction and objective recheck. Recommendations and evidence gaps are distinct from confirmed defects; no finding is an accepted revision. Retain no-finding coverage and unassessed/unrun boundaries, not only problems. Record exact tested source and qualify reused evidence by unchanged bytes.

After each unit, update and commit the report, push to the selected branch and verify exact remote containment before any next unit or additional work. Do not invent executable T-task IDs. Refresh HANDOFF at the final review checkpoint, not after every unit. Preserve every earlier index row and frozen record.

## Completion and stop

Consolidate covered inventories, findings/counts/priorities, evidence/limits and proposed revision dependencies against the pinned baseline. Publish/read back the final report and stop on this review branch with campaign 080 open. Do not repair reviewed source, prepare/execute a revision plan, integrate/close the campaign, publish a release or mutate a demo as a consequence of findings.
