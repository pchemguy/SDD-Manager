# Comprehensive prerelease review plan

## Candidate and authority

Campaign **121_a5bfe1a**; initial candidate and main creation/return baseline `a5bfe1a2e9c08424ebc3b4dd997f0150e68be11c`. Branch: `revision/121_a5bfe1a-prerelease`. The human authorized comprehensive review, fixes, release preparation, a patch bump from 0.15.3 to 0.15.4, closure and release creation. No suspended parent. Standard reporting.

## Ordered review units

| Unit | Scope and owners | Criteria and representative cases |
| --- | --- | --- |
| U-001 | Plugin entries, all skill/resource inventory, governing contracts, workflows, docs and diagrams; sdd-manage, sdd-docs, sdd-conventions and Agent Package Author | Activation/routing, ownership, HIL and mode boundaries, preparation/implementation/recovery/closure, cross-reference integrity and public claims. Trace interactive vs preapproved preparation, interrupted task recovery, nested/reopened revisions and release boundaries; account for all shipped resource families. |
| U-002 | Runtime helpers, acceptance tooling, CI and tests; sdd-verify and owning Git/forge workflows | Success/failure/boundary/recovery contracts, credential handling, timeout and reconciliation behavior, platform limits, package/publisher provenance. Execute declared local suites and inspect supported native CI evidence where available. |
| U-003 | Distribution, release diff, version, notes and final candidate; sdd-forge and sdd-verify | Actual package inventory/schema, excluded sensitive/source files, source-byte identity, current version, complete release coverage, default-branch/tag provenance, exact notes transfer and hosted readback. |

After each unit, commit and verify publication before advancing. Record findings with stable IDs, repairs with action IDs, evidence class and limitations. Recheck affected units after fixes and version changes. Closed campaign records and historical snapshots are excluded from current-validity review. Generated files, external dependencies and unavailable live host facilities are identified explicitly rather than silently counted as assessed.

## Completion

Prepare retained release notes, integrate the verified campaign into main, create the canonical default-branch release commit and tag, and invoke the single repository publisher. Verify actual release body, assets and source before reporting release completion. Do not create a second publisher or claim native Windows/live-client execution from local Linux checks.
