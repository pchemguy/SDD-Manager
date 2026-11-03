# Independent V-001 repair recheck

**Conclusion: Ready.** No confirmed defect, regression or required repair remains in the bounded R-001–R-011 changes. This is readiness of the V-001 repair set for coordinator persistence; it does not complete V-002 version/package preparation or V-003 integration/release publication.

## Reviewed state and independence

Repository: `/workspace/scratch/f5adda9293ed/SDD-Manager`. Base/observed HEAD: `efdfb9e7a7b8c78ab2caa31c730edf1465a49f40`. Reviewed head: the complete 29-file uncommitted source diff supplied by the coordinator (172 insertions, 46 deletions). The coordinator subsequently added active campaign evidence; those later evidence files were not used to substitute for source inspection. The coordinator reports the 29 source-file hashes stayed unchanged.

Loaded root `AGENTS.md`, `acceptance/AGENTS.md`, `acceptance/textstats/AGENTS.md`, repository discovery entries, current active campaign `REVIEW-REPORT.md` and `REVISION-PLAN.md`, and relevant current owners/contracts. Inspected actual production changes, tests and surrounding call paths. No frozen campaign <=141 contents were read. The review changed no repository source, index, refs, configuration or hosted state and did not inspect any `*.tkn` contents. Probe/report artifacts exist only in `/tmp`.

## Findings

None. No severity/location entries are necessary because no candidate observation met the threshold for a confirmed defect.

## Acceptance and regression assessment

| Finding | Located source and objective recheck | Result |
| --- | --- | --- |
| R-001 | `protected-token.mjs:53` now rejects ambient `GIT_CONFIG` with the existing relocation/configuration error. `git-auth-recover.mjs:209`, its private helper at 328 and forge's shared runtime at 85 consume this boundary. The focused tests first demonstrate that alternate config hides native `remote.origin.vcs`, then require rejection with zero direct-runner calls. Both public CLIs reject from ordinary and linked worktree roots with `push_attempted:false` and confirmed cleanup. | Satisfied; no unrelated credential/config behavior changed. |
| R-002 | `.github/scripts/release.py:74–80` sets `GIT_NO_REPLACE_OBJECTS=1` in the one Git wrapper used by `rev-parse`, `ls-tree`, manifest `show`, `archive` and verification `cat-file`. The new fixture installs a real replacement commit, verifies ordinary Git sees its substituted README, then requires original bytes, original inventory and original archive source comment. Independent replay of this regression with the baseline wrapper produces its expected assertion failure; repaired code passes. | Satisfied; all candidate read/archive paths use raw selected objects. |
| R-003 | `.github/scripts/release.py:50–71` now independently requires the publication entry/supervisor, DOCS tracking JSON and all naming-policy runtime/guide/case resources, in addition to the existing utility resource set. The committed deletion fixtures exercise each resource, assert exact bytes for healthy builds and assert no output directory on missing-resource rejection. Replaying the expanded deletion fixture against the baseline required set produces six expected assertion failures and no test errors. | Satisfied; broad assets/skills selection still preserves the existing distribution boundary. |
| R-004 | `SCENARIO.md:13`, A-001/A-005, selected feature/transfer/recovery criteria and catalog prerequisite now match current `backend-object-lifecycle.md` explicit-review rules. Traced multi-milestone phases with 1–3 delivery tasks (folded boundary), four delivery tasks (standalone review) and a phase with one delivery milestone (folded boundary even at four tasks). The special one-task phase review remains separate and excluded from both counts; folded review/report/HANDOFF and initial task closure stay with the final implementation task. | Satisfied; no stable product IDs, task-count padding or additional range authority introduced. |
| R-005 | `acceptance/textstats/scripts/core.py:968–977` validates record dictionary/id/kind/allowed-key shapes before remote-observation selection or repository observation. The CLI regression covers scalar, null and list records both alone and after a valid publication check, asserting exit 2, `invalid_contract`, empty stderr, no evidence artifact and rejection before a deliberately invalid checkout can be observed. A direct isolated baseline/current comparison yields `AttributeError` versus `Stop:invalid_contract`, both with zero repository calls. | Satisfied; subsequent deterministic evaluation still follows validated record kinds. |
| R-006 | `acceptance/textstats/EXECUTION.md:49` correctly names the source repository root. Ran the exact documented validator there: 33 catalog cases validate and the result explicitly declares static validation, not live acceptance. | Satisfied. |
| R-007 | `assets/AI_DISCLOSURE.md:3,5,13` uses provider-neutral present-tense assistance and keeps maintainer responsibility. Current main preparation copies missing templates unchanged and preserves existing files; other adoption follows bootstrap. Neither the copied disclosure nor its README excerpt asserts completed implementation/testing/review or an unestablished provider. | Satisfied for fresh initialization and existing-system adoption. |
| R-008 | `assets/AGENTS_TEMPLATE.md:5–7,17–27` establishes one selected installed/pinned package root and resolves all four policy resources relative to it, checks availability and forbids a silent source switch. Traced an external installation and the checkout `.agents/plugins/sdd-manager/` layout; each uses the same package-owned assets without requiring target-project vendoring. The separate root discovery file remains a DOCS-001 copy under the existing contract. | Satisfied. |
| R-009 | `github-feature-preparation.md:24–30` now requires full open/closed paginated milestone membership including PRs, validates the nine exact campaign/stage identities/associations and published preparation integration, and blocks foreign open work/PRs, ambiguous ownership and incomplete lookup. Traced complete unambiguous membership (eligible), missing/duplicate or incompletely read membership (blocked), foreign open issue/associated PR (blocked), already closed milestone (verify only) and uncertain closure (read actual state before replay). | Satisfied; unrelated work remains preserved and main-only utilities are not repurposed. |
| R-010 | `object-drafts.md:7` preserves ordinary `[T-xxx]` and `[DOCS-xxx]` issue titles, uses `[campaign/FDOCS-xxx]` for selected feature preparation, preserves the bare stage marker and separate exact feature-scope marker, and resolves missing campaign context before drafting. Its canonical feature-identity link and bare-stage commit-subject rules agree. | Satisfied; known-campaign and missing-campaign paths remain distinct without guessed identities. |
| R-011 | Root `README.md:7` links the packaged prerequisites; packaged `README.md:15–23` states native Git, Node 22+, Python 3.11+ and Windows/Linux ownership facilities conditionally for use of the bundled supervised HTTPS utility. The relative runtime-guide target and anchor exist, and the wording matches its runtime contract. Other operations retain their own toolchains. | Satisfied; onboarding does not turn optional runtime use into a universal product dependency. |

All source changes fit V-001. No unrelated package feature, task identity, checkpoint, campaign-history migration or release publication behavior was added. Inspected changed prose and link destinations; `git diff --check` passed. A path/object diff of `docs/dev/reviews/` against the base was empty during the source recheck, before the coordinator's newly reported active-campaign evidence writes; no closed record was touched by the reviewed source changes.

## Independently executed checks

Host: Linux, Node `v24.22.1`, Python `3.12.14`, Git `2.51.1`.

- `node --test --test-name-pattern='GIT_CONFIG' tests/git-auth-recover.test.mjs`: **6 passed**, zero failures.
- `PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -p test_checkers.py -v`: **18 passed**.
- `PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=/tmp/sdd141-pydeps python -m unittest discover -s .github/tests -p test_release.py -q`: **39 passed**. The first bare-Python attempt lacked the declared jsonschema dependency and failed for that prerequisite; rerunning with the available declared dependency path resolved it.
- `PYTHONDONTWRITEBYTECODE=1 python acceptance/textstats/cases/assessor/catalog_tools.py validate`: **33 cases**, static catalog integrity passed, live acceptance false.
- `/tmp/sdd142-independent-red-probes.py`: passed its assertions for the expected baseline R-002 failure, six baseline R-003 deletion failures, and R-005 baseline/current exception and observation difference. It imports baseline bytes into isolated modules and uses temporary fixture repositories; it never swaps source files or repository refs.
- `git --no-optional-locks diff --check`: passed.

The coordinator independently reports full affected-suite success: support 140, publisher 62, Git 54 and forge 90 (**346 tests**), plus seven expected Windows-only skips on Linux, with logs in `/tmp/sdd142-full-recheck/`. That report supports the combined regression boundary but is not represented as this reviewer's own execution of those entire suites.

## Considered behaviors declined to judge

- **Native Windows execution and Python 3.11 specifically:** this reviewer executed Linux/Node 24/Python 3.12; Linux success and source inspection cannot establish native Windows process ownership or the exact 3.11 runtime. The repository's native CI owns those observations.
- **Fresh installed-client/consumer behavior:** criteria/template/source traces and local helper tests do not observe a fresh agent following the changed instructions. No live TextStats campaign was selected for V-001.
- **Live provider mutation/authentication and final release integrity:** the selected repair review uses synthetic/native local fixtures and prose traces. V-002/V-003 must establish their own exact committed package, integration, hosted and downloaded-byte outcomes.

These are evidence limits, not newly imposed repair requirements or grounds to withhold V-001 readiness.
