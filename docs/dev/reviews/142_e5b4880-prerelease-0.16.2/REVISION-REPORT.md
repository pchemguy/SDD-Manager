# Prerelease revision report

Campaign **142_e5b4880-prerelease-0.16.2** repairs the eleven findings in the [review report](REVIEW-REPORT.md) under the [accepted plan](REVISION-PLAN.md). Working branch revision/142_e5b4880-prerelease-0.16.2 returns to recorded parent main, branched from e5b4880dfb14a3abc550909acdbf3b916dd3c72e. The published findings/plan checkpoint is efdfb9e7a7b8c78ab2caa31c730edf1465a49f40.

## V-001 — Repairs and regression evidence

All eleven repairs are implemented. The tested state is the pending source diff over efdfb9e7, identified by per-path SHA-256 values in [repair verification](repair-verification.json). Original failed observations remain in the review report; later passing results do not replace them.

| Findings | Changes and observed recheck |
| --- | --- |
| R-001 | Reject ambient GIT_CONFIG before configuration or transport. Direct and both public entries from ordinary/linked worktrees fail with the safe relocated_git_environment category. Six regression records failed before the guard and pass afterward; the native alternate-config control establishes the trigger. |
| R-002 | Disable Git replacement objects for every candidate read/archive. A real replacement-ref fixture originally substituted README bytes under the selected original OID; the repaired build retains the original bytes, inventory and source identity. |
| R-003 | Require six previously omitted runtime/data/naming resources independently of broad directory inclusion. Each actual deletion originally built successfully; every repaired deletion blocks output. Healthy packages and optional provenance controls pass. Snapshot checks include canonical git-publish.mjs and git-process-supervisor.py bytes. |
| R-004 | Align scenario/objective/catalog and related assessor/interruption criteria with the milestone threshold. Source traces cover 1–3 versus four implementation tasks in multi-milestone phases and the single-implementation-milestone case. The final implementation task owns folded review/test/repair/report/HANDOFF; the separate one-task phase review milestone remains required. No live misgrade or consumer pass is claimed. |
| R-005 | Validate each check record before repository/remote selection. Six real CLI scalar/null/list subcases fail before repair and pass afterward with generic invalid_contract JSON, exit 2, empty stderr and no assessment output. |
| R-006 | Correct the catalog command's working directory to the source repository root. The documented validator reports all 33 cases valid there. |
| R-007 | Use provider-neutral current-assistance disclosure without asserting completed implementation/testing/review. Fresh and existing-project initialization source traces retain maintainer responsibility and unchanged copy rules; the historical root disclosure is preserved. |
| R-008 | Resolve conditional policy resources from one selected installed/pinned package root. All four resources resolve for external and local-source layouts; missing resources stop dependent use without silently changing sources or requiring vendoring. |
| R-009 | Require complete paginated milestone membership, nine unique verified stage identities, published preparation integration and foreign-work/ownership guards. Source traces cover positive, incomplete, foreign issue/PR, ambiguous identity and uncertain-closure cases. |
| R-010 | Qualify hosted feature-preparation titles with their campaign, require real campaign context and preserve separate body markers. Ordinary DOCS/T-task titles and bare FDOCS commit IDs remain consistent with their owners. |
| R-011 | Expose conditional supervised-publication prerequisites in both human entries. Requirements match the canonical guide; normalized shared Quick Starts agree, 21 demo links per README remain, and all eight diagram fence bodies are unchanged. |

Fresh full suites ran on Linux with Python 3.12.14, Node 24.22.1 and Git 2.51.1. Python checks used PYTHONDONTWRITEBYTECODE=1; publisher checks used the declared jsonschema 4.26.0 dependency from /tmp/sdd141-pydeps.

| Command from repository root | Outcome |
| --- | --- |
| python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v | 140 passed. |
| python -m unittest discover -s .github/tests -v | 62 passed. |
| node --test tests/git-auth-recover.test.mjs tests/git-publish.test.mjs | 54 passed, including four public-entry/worktree regression subcases. |
| node --test tests/forge-close.test.mjs tests/forge-project.test.mjs | 90 passed. |
| python -m unittest discover -s tests -p test_windows_shell_recovery.py -v | Seven native Windows cases skipped on Linux. |

Total **346 passed**. All five changed Python and seven JSON files parse, the diff whitespace check passes, and the repair delta touches no prior campaign record. The existing plugin validator reports zero errors and the same 69 bundled sibling-reference warnings. Owner source/path checks supplement runtime tests for instruction repairs; no new tests merely mirror prose.

The [independent repair recheck](INDEPENDENT-RECHECK.md) concludes Ready with no confirmed regression or remaining finding. It independently repeated targeted runtime/checker/publisher checks and baseline failure probes. V-001 is verified and ready for its combined connector commit; publication/readback remains a subsequent effect. Full raw local logs are under /tmp/sdd142-full-recheck; durable commands, counts, source hashes and limits are in repair-verification.json. This scratch evidence location is supplemental to the retained facts here.

## Remaining boundaries and limits

V-001 is published/read back at 6aa9950fd81dc8f64b50da507431effd7dfda4e4; local HEAD/index/worktree were synchronized by exact tree identity.

## V-002 — Version and complete-message preparation

The canonical manifest is bumped from 0.16.1 to 0.16.2. Root [RELEASE-NOTES.md](../../../../RELEASE-NOTES.md) contains the retained complete body with installation, stable downloads and explicit evidence limits. The [preparation record](release-preparation.json) accounts for every commit since v0.16.1 through 6aa9950f, using the cumulative campaign 141 integration plus direct V-001 source/evidence; no released API-design work is repeated. The ignored internal highlights draft has the pinned previous baseline and source watermark.

Publish/read back this version/notes preparation before building the exact committed 0.16.2 candidate. The two version-free asset names remain independently established by the existing delivery contract. Final package hashes/member checks and final-source coverage remain pending.

## Remaining release boundary
 V-003 campaign finalization/integration and release publication/readback remain pending. No release/tag/workflow success is claimed by the repair checks.

No fresh live TextStats or installed-client trial was run. Local results do not establish native Windows behavior or live-provider authentication. Fresh Mermaid rendering is unavailable in this environment; the reviewed diagram sources are unchanged. Native CI and hosted release observations will be recorded separately when actually obtained.
