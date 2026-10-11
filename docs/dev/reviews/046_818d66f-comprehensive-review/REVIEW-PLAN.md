# Comprehensive review plan

## Campaign and scope

- Campaign: `046_818d66f`; branch: `revision/046_818d66f-comprehensive-review`; return target: `main`.
- Starting and reviewed source: `818d66f6baf8e3a324d29f3430d3bac3278f0dd2`; version: `0.15.0`; date: 2026-10-11.
- Request: pull origin, open and run comprehensive review. Pull was already current; full fetch discovered campaign 045 on a separate branch, so 046 is the next reserved identity.
- Scope: the complete current supported plugin, documentation, package assets, workflow handoffs, publisher and TextStats acceptance tooling. Inventory every current source; prioritize detailed assessment by consequence and record depth explicitly.
- Authorized effects: review artifacts, local disposable verification, campaign commits and publication. No source repairs, release/tag creation, provider writes, or automatic revision execution.
- Closed review/feature/steering packages are excluded from content loading and current-validity checks. Their names may be inspected for identity allocation. Protected credentials and unrelated work are excluded.
- Planned companion: `REVIEW-REPORT.md`.

## Review units and criteria

| Unit | Scope and owners | Criteria and scenarios | Evidence |
| --- | --- | --- | --- |
| U-001 | Public documentation, manifest, package and navigation; sdd-docs, sdd-forge, sdd-verify | Accurate scope/claims, current links, bundled containment, schema/assets, real archive inventory; malformed package rejection and exclusions | Source inspection, actual archive/schema/link checks |
| U-002 | Preparation and shared conventions; sdd-design/specify/plan/tasks/tdd/manage | Contract chain, owner QC, human checkpoints, optional feature inputs, phase/tracking readiness; existing-progress, missing-input and blocked-gate paths | Source assessment with located handoffs; no fresh-consumer claim |
| U-003 | Implementation, steering, integration, reporting and release; affected owners | Task atomicity, publication/recovery, campaign identity, release notes freshness/body/tag consistency; bounded stop, uncertain push, stale notes and recovery paths | Source assessment and appropriate disposable Git fixtures |
| U-004 | Publisher, CI and TextStats tooling; sdd-verify, sdd-tdd | Meaningful success/failure/boundary tests, source/package identity, provider recovery, role isolation, credentials and durable evidence | Actual support/publisher suites; code inspection; CI configuration validation |
| U-005 | Cross-product consolidation | Coherence, maintainability, evidence limits, canonical findings and readiness; verify unchanged reviewed source and frozen packages | Consolidated evidence, final diff/link checks |

Units run in this order. After each unit commit the report/evidence, push and verify the remote before the next unit. Record exact commands, coverage, findings, no-finding areas and unavailable checks. Passing local tests does not establish installed-client, fresh-agent, Windows, Python 3.11, CI or live-provider acceptance.

## Findings and stopping

Use stable R-001 onward, type, priority, confidence, baseline location, observation/consequence, bounded proposal and objective recheck. Keep observed defects separate from recommendations and evidence gaps. No recommendation is accepted by implication. Finish with a published report and proposed revision queue on this campaign branch, then stop before repairs or release operations.

## Authorized branch rebase

On 2026-10-11 the human requested closing 045 and rebasing 046 onto its published main integration. Preserve original review evidence and campaign identity, resolve navigation conflicts, assess added documentation and record changed-source limits. No repair or review-branch integration authority is added.
