# Comprehensive review plan

## Campaign and scope

Campaign: **053_3a095e2**. Baseline and reviewed source: `3a095e23bcefd341933ca2353275c5243da32a97`. Working branch: `revision/053_3a095e2-comprehensive-review`; target: `main`.

Assess the complete current plugin, source contributor guidance, release tooling and TextStats support. Prioritize recent PLUGIN changes without restricting coverage to their diff. Preserve closed campaign packages; discover their paths without assessing their contents. Review only: report/plan/evidence persistence and publication are authorized; source repairs, integration, releases and live provider writes are excluded.

## Review units

| Unit | Scope and owners | Criteria and representative scenarios |
| --- | --- | --- |
| U-001 | All skill entries/references; README, PLUGIN, prompt, source instructions, capability map and current demo guides. `sdd-manage`, document owners, `sdd-docs`, `sdd-conventions`. | Ownership/terminology, entry routing, PROJECT contract, main/feature preparation, human acceptance versus clarification, selected implementation ranges, atomic task closure, per-commit publication, steering/integration/recovery, tracking activation/maintenance and release boundaries. Inspect positive, blocked, interrupted and narrow-scope paths on both sides of handoffs. |
| U-002 | TextStats coordinator/product contracts, helpers, catalog, consumer/assessor isolation, support tests. `sdd-tdd`, `sdd-verify`. | Evidence provenance, deterministic fixture/control behavior, coverage of supported workflows and recent requirements, failure/recovery paths. Run support suite; distinguish support results from live acceptance. |
| U-003 | Manifest/assets, package builder, publisher workflow/tests, release handoff, current Markdown links/style and protected paths. `sdd-forge`, `sdd-verify`, `sdd-docs`. | Offline schema, exact committed inputs, package inclusion/exclusion, reproducibility, link containment, release identities/body/tag/assets, provider reconciliation and current navigation. Run publisher suite, build twice from pinned source, inspect package bytes and links. Consolidate findings and readiness. |

## Evidence and persistence

Use source inspection and local execution, retaining exact commands, source and environment in evidence. No fresh client/consumer/live-provider trial, external compatibility assertion or rendered-diagram claim. Exclude frozen snapshots from current validation. Record stable findings with location, consequence, priority/type/confidence, bounded correction and objective recheck.

After each unit, update and commit the report/evidence, push and verify remote containment before the next unit. Stop after consolidated published review. Proposed revisions require a subsequent human instruction.
