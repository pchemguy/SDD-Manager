# Revision execution

## Context and state

Campaign 088_7d37ca7; baseline 7d37ca7606eeab1c17abe2eeb2157d99f2f6391c. Working branch `revision/088_7d37ca7-docs-projection-convenience`, creation parent/return target `revision/081_5b2442e-prerelease`. [Accepted plan](REVISION-PLAN.md). State: A-001 implemented and locally verified; A-002 documentation aligned; final package/integration verification pending. Parent remains suspended. Initial target readback exactly matched the baseline; worktree was clean.

## Evidence

The existing projection CLI requires a request file; the draft CLI repeats repo/remote scope and defaults docs-main to the package template. The new entry will remove the mechanical intermediate file while preserving explicit inputs and all hosted validation. Source inspection is not runtime verification. No live demo or hosted tracking mutation is part of this campaign.

## A-001 — Implementation and local contracts

Added the request-free docs-main path to forge-project.mjs, preserving explicit JSON and phase inputs. Both projection/draft CLIs default origin; both select actual docs/dev/DOCS_TASKS.md before the bundled bootstrap template. Shared native source selection falls back only on absence of the implicit default; explicit and invalid sources stop. Request-free apply requires --confirm-eligibility; check/reconciliation keep false eligibility. Existing root, remote, source, credential, lock, transport and readback checks remain in the execution path. No shell wrapper or intermediate file was added.

Seven new regression tests were observed failing against the old code (missing_scope/invalid_arguments), then all seven passed after implementation. The combined projection/completion suite passed 84 tests, zero failures/skips, on Linux with the current Node runtime. It includes controlled provider creation of one predefined milestone and nine issues, stable readback, no-write bootstrap reconciliation, CRLF/progress preservation, alternate source/remote selection, invalid inputs, unpublished-source gates and actual CLI invocations from an unrelated directory. These are synthetic provider/native local checks, not live GitHub or Windows client evidence.

## A-002 — Documentation and native evidence

Updated the existing projection CLI guide, input-authoring guide, GitHub preparation route, forge skill entry, packaged README and contributor entry. The detailed guide owns source/default/override/mode and confirmation semantics; callers link it without a new reference or wrapper script. Examples are abstract and omit repeated origin/request arguments for routine docs-main. Repaired the new index row placement within its existing table. Help output for both actual CLIs shows the implemented defaults and required explicit-request/eligibility cases.

Scoped Markdown inspection found no missing local targets, fragment candidates or heading/marker-spacing defects across 11 changed Markdown files (386 local links, 13 checked fragments; 251 frozen targets checked for existence only). Subsequent final checks will cover completed records. No closed record contents were loaded or changed.

Exact implementation source 70709debc45f5c6f18cd935e688edbcd82d0d45b passed all four projection jobs (native Windows CMD/Linux, Node 22/24), [run 39393610176](https://github.com/pchemguy/SDD-Manager/actions/runs/39393610176), and all four shared completion jobs, [run 39393610230](https://github.com/pchemguy/SDD-Manager/actions/runs/39393610230). These are controlled provider/native Git/filesystem checks; the original Antigravity launcher and live hosted tracking were not executed.
