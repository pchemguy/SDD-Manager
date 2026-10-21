# Revision execution

## Context and state

Campaign 088_7d37ca7; baseline 7d37ca7606eeab1c17abe2eeb2157d99f2f6391c. Working branch `revision/088_7d37ca7-docs-projection-convenience`, creation parent/return target `revision/081_5b2442e-prerelease`. [Accepted plan](REVISION-PLAN.md). State: A-001 implemented and locally verified; all three actions verified; final integration/publication and parent return pending. Parent remains suspended. Initial target readback exactly matched the baseline; worktree was clean.

## Evidence

The existing projection CLI requires a request file; the draft CLI repeats repo/remote scope and defaults docs-main to the package template. The new entry will remove the mechanical intermediate file while preserving explicit inputs and all hosted validation. Source inspection is not runtime verification. No live demo or hosted tracking mutation is part of this campaign.

## A-001 — Implementation and local contracts

Added the request-free docs-main path to forge-project.mjs, preserving explicit JSON and phase inputs. Both projection/draft CLIs default origin; both select actual docs/dev/DOCS_TASKS.md before the bundled bootstrap template. Shared native source selection falls back only on absence of the implicit default; explicit and invalid sources stop. Request-free apply requires --confirm-eligibility; check/reconciliation keep false eligibility. Existing root, remote, source, credential, lock, transport and readback checks remain in the execution path. No shell wrapper or intermediate file was added.

Seven new regression tests were observed failing against the old code (missing_scope/invalid_arguments), then all seven passed after implementation. The combined projection/completion suite passed 84 tests, zero failures/skips, on Linux with the current Node runtime. It includes controlled provider creation of one predefined milestone and nine issues, stable readback, no-write bootstrap reconciliation, CRLF/progress preservation, alternate source/remote selection, invalid inputs, unpublished-source gates and actual CLI invocations from an unrelated directory. These are synthetic provider/native local checks, not live GitHub or Windows client evidence.

## A-002 — Documentation and native evidence

Updated the existing projection CLI guide, input-authoring guide, GitHub preparation route, forge skill entry, packaged README and contributor entry. The detailed guide owns source/default/override/mode and confirmation semantics; callers link it without a new reference or wrapper script. Examples are abstract and omit repeated origin/request arguments for routine docs-main. Repaired the new index row placement within its existing table. Help output for both actual CLIs shows the implemented defaults and required explicit-request/eligibility cases.

Scoped Markdown inspection found no missing local targets, fragment candidates or heading/marker-spacing defects across 11 changed Markdown files (386 local links, 13 checked fragments; 251 frozen targets checked for existence only). Subsequent final checks will cover completed records. No closed record contents were loaded or changed.

Exact implementation source 70709debc45f5c6f18cd935e688edbcd82d0d45b passed all four projection jobs (native Windows CMD/Linux, Node 22/24), [run 39393610176](https://github.com/pchemguy/SDD-Manager/actions/runs/39393610176), and all four shared completion jobs, [run 39393610230](https://github.com/pchemguy/SDD-Manager/actions/runs/39393610230). These are controlled provider/native Git/filesystem checks; the original Antigravity launcher and live hosted tracking were not executed.

## A-003 — Final boundary verification

Final source/documentation checkpoint bcecba257d20c2f7b9ef886437eb86e0a9f91a62 passed all four native projection jobs, [run 39393917576](https://github.com/pchemguy/SDD-Manager/actions/runs/39393917576), and all four native completion jobs, [run 39393917886](https://github.com/pchemguy/SDD-Manager/actions/runs/39393917886). Local Linux Node 24.19.0 projection/completion results were 84 passing, zero failures/skips. Support/publisher suites passed 139/37 tests. Final source review traced both request paths through root/remote binding, source/commit checks, mode/eligibility validation, token protection, locking, bounded transport and source/readback verification; no unresolved contract finding remains within this scope. This was a focused implementation review, not a comprehensive plugin review.

The exact committed candidate package passed pinned schema, 156-member inventory and identical rebuild checks: 465431 bytes, SHA-256 8495dc79308d7eebf03c509d067b4da37bd3405450680d060a186135e40f219d. Five extracted CLI help checks and an extracted single-call docs-main preview with default source/remote passed. Source-only fixtures, development records and CI stay excluded. Version remains 0.15.1; no release preparation was refreshed. The package hash identifies bcecba2 specifically; commit-specific stamping means a later report-only commit has a different archive hash.

Earlier closed campaign packages are unchanged by path/object diff; only active parent 081, this child, current navigation and HANDOFF were touched among campaign records. PowerShell.cmd, token handling, manifest/version and release inputs are unchanged. Generated untracked Python bytecode from the required checks was removed. Original Antigravity/desktop execution, live hosted tracking mutation and installed-client routing were not run.

## Integration boundary

Original campaign opening: de8c5477dc76eb049faa012d63054fca4d1c3e1d; branch-off baseline 7d37ca7606eeab1c17abe2eeb2157d99f2f6391c. Opening, implementation and documentation checkpoints were individually pushed and exactly read back. Parent readback still matches the branch-off baseline. The finalized child tip will be published before the explicit two-parent merge into revision/081_5b2442e-prerelease. Closure requires actual merged-state verification, exact target publication/readback and clean parent return; the resulting Git merge retains both full tips without a post-closure evidence edit. Retain the child branch. Parent 081 stays open/suspended; prerelease source/body/package associations require refresh only on separately authorized continuation.
