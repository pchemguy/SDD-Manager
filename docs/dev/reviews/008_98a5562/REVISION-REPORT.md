# Historical notices and composed workflow revision report

## Campaign and suspension

- Campaign: `008_98a5562`; reviewed baseline `98a556218d81870a4751ad308f6586587ac1d7da`.
- Plan: [REVISION-PLAN.md](REVISION-PLAN.md); findings: [REVIEW-REPORT.md](REVIEW-REPORT.md).
- Execution start: `98a083b555a211e45f8a16bfd3ea83829b9aa25e`.
- Source branch: `revision/008_98a5562-runtime-acceptance`; established target: `feature/architecture-revision`.
- State: **Suspended at the user's request on 2026-10-02.** No further agents or workflows are to start without a resume request.
- Source boundary merge remains pending because the acceptance revision is incomplete. Preserve both branches and unrelated source work.

## Revision evidence

| Action | Actual result / checks | Disposition |
| --- | --- | --- |
| V-001 / R-002 | Historical notices added after preserved frontmatter in both root EXPLORE transcripts; removing inserts reproduces original contents. Current links and heading/diff checks passed. Commit `529e98d` pushed and exact source remote tip checked before continuation. | R-002 verified within its document scope. |
| V-002 / R-001 | AgentPlayground initialized and exact portable package pinned. First push failed for missing shell credentials; protected supplied-PAT recovery and same-destination GitHub push succeeded. Setup `b9a4549` published. | Git Contents write demonstrated; distinct API evidence follows. |
| V-003 / R-001 | Independent harness published at `d6c542b`; nine sensitivity/self-tests passed. Initial task-table mismatch corrected to actual nested checkbox owners before consumer assessment. Protected GET milestones returned200; helper setup `61f9670` published. | Harness checks are not consumer-case passes. |
| V-004 / R-001 | Preparation and selection-only consumers passed independent checks. Hosted projection created two phase labels and four milestones, then connector issue creation returned403. No task issue is confirmed; no product implementation on live main. | A-001/A-002 Passed; A-003 Suspended. Positive implementation sequence has not started. |
| V-005 / R-001 | Controlled API routing, credential exclusion, verification limits and staged-work consumers executed. Commit hook stopped an actual verified task before commit; fresh recovery has not run. | A-020/A-024/A-025/A-026 Passed within stated fixture scope; A-015 Suspended. Remaining negative cases Pending. |
| V-006 / V-007 | Final campaign assessment and completed source integration not executed. | Resume required; no complete runtime or installed-client certification. |

## Published consumer evidence

[AgentPlayground acceptance records](https://github.com/pchemguy/AgentPlayground/tree/evaluation/008-runtime-acceptance/docs/dev/reviews/001_608cf12) contain the case registry, assessments, retained prompts, available action journals/final handoffs and actual checks. Reusable tools and isolated scenario setup are in the same branch's `tests/workflows/`. [RESUME.md](https://github.com/pchemguy/AgentPlayground/blob/evaluation/008-runtime-acceptance/docs/dev/reviews/001_608cf12/RESUME.md) records continuation and checkpoint restoration.

| Cases | State at suspension | Evidence / limits |
| --- | --- | --- |
| A-001, A-002 | Passed | Seven governing docs, eight uniquely owned unchecked tasks, no product source/tests. Selection returned T-001 or milestone1.1 T-001–T-003 with partial-phase pause and no mutations/tests/pushes. |
| A-003 | Suspended | Tracking statement `d769b55` published on main. Two phase labels, milestones1–4 created with protected PAT client; connector T-001 create failed403. No task issues confirmed; first projection and idempotence/preservation trial unfinished. |
| A-015 | Suspended | Local bare-origin fixture: T-001 verified with7 tests and checklist checked, six owned files staged, hook rejected commit. HEAD remains `e750d1c`; actual pending contents, hook, logs and baseline bundle retained. No fresh continuation yet. |
| A-020 | Passed | Local bare-origin fixture: owned T-001 commit `57234b3` published. Independent commit-path/index/content checks confirm unrelated staged blob, untracked content and unstaged README preserved. Six tests observed in consumer journal. No incomplete-phase merge or T-002. Checkpoint bundle retained. |
| A-024 | Passed | Consumer received injected access403, quota403 and missing API-session401. Ignored/untracked synthetic credential supplied through stdin; bounded access/session recovery returned200. Quota paused without authentication/retry. No live provider or lost Git-shell-session trial is claimed. |
| A-025 | Passed | Consumer detected tracked synthetic credential and defeating ignore negation; blocked reuse/remediation without reading values or changing repository/history. Independent checks agree. |
| A-026 | Passed | Consumer and independent reruns observed1 pre-existing baseline failure (exit1), zero selected tests (exit5), and no acceptance from empty collection. No test/source/task repairs. Runtime Python3.12.14. |
| Remaining19 cases | Pending | A-004–A-014, A-016–A-019, A-021–A-023, A-027 not executed. |

Counts: **6 Passed, 2 Suspended, 19 Pending; 0 Failed, 0 Blocked, 0 Running.** Suspension is not completion. No new source defect was established by these partial trials.

## Resume protocol

1. Re-orient source and consumer repositories, instructions, dirty paths, branch tips and remote refs. Preserve unrelated source `.codex/` and fixture staged/unstaged intent. Do not reset, delete branches or replay setup/creation drivers against existing objects.
2. Keep the tested package pinned to `529e98d4d3cd7002e3a49e34394552a44bf0a8d0`; portable provenance/hashes are on live consumer main under `vendor/`. Runtime mode is explicit skill-source loading, not installed-client discovery.
3. Resume A-003 first on AgentPlayground main at published `d769b55aa63f92d5ccbd8022cb9e87f07e541fae`. Re-read all-state identities and reuse labels/milestones1–4. Connector403 concerns its integration; supplied PAT proved metadata writes separately, not Issues write. The protected helper can attempt the authorized issue operation after appropriate access checks; do not print or commit `gh.tkn`. Complete first projection, independent readback, and second reconciliation/preservation trial before A-004.
4. Continue A-004–A-013 in the accepted order, with committed/pushed case assessments before dependent work. The live consumer has no product implementation; isolated A-020 code is acceptance evidence, not work to silently promote into main.
5. Resume A-015 separately with a fresh consumer after deliberately releasing its controlled commit hook. Use the existing checked/verified T-001 and pending files; do not reimplement or advance. Completion requires durable commit/push and independent assessment. Preserve earlier rejected attempt and recovery evidence.
6. Continue remaining isolated cases, then A-027 and source integration. Source merge must be explicit two-parent `--no-ff` into the established target only after the authorized revision boundary is complete and verified.

## Worktree and restoration map

| Purpose | Local path | Durable checkpoint |
| --- | --- | --- |
| Source revision | `/workspace/scratch/6420baa7afea` | Source revision branch; this report and plan |
| Live consumer | `/workspace/scratch/AgentPlayground-sdd-008` | AgentPlayground main `d769b55`; no product source |
| Evaluation | `/workspace/scratch/AgentPlayground-evidence-008` | `evaluation/008-runtime-acceptance`; case records and RESUME.md |
| Interrupted task | `/workspace/scratch/sdd008-A-015/repo` | `runs/A-015/` bundle, pending-file/index snapshot, actual RED/GREEN/check/hook evidence |
| Staging trial | `/workspace/scratch/sdd008-A-020/repo` | `runs/A-020/` bundle at `57234b3`, unrelated content/index snapshot |
| Controlled API / credential / verification | `/workspace/scratch/sdd008-A-024/repo`, `sdd008-A-025/repo`, `sdd008-A-026/repo` | Retained synthetic adapter, fixture setup, independent states and consumer journals |

If scratch paths disappear, clone the published source/evaluation branches, verify bundles, restore isolated fixture histories and recorded pending file/index state; recreate only synthetic credentials. Live `gh.tkn` is intentionally excluded and must be recovered through the credential protocol. Never copy a source-repository token to the consumer. Preserve exact case/source identities.

## Evidence limits

Actual runtime: Python3.12.14; Python3.11 execution was not performed. Explicit loading and fresh consumer contexts are recorded; automatic discovery/installation and complete native tool-message export were unavailable. Journals and full final handoffs are labeled as such. Fixture-only primitives are not agent-driven passes; injected failures are separate from GitHub observations. The reusable fixture recreation script was consolidated after the first isolated runs; retained individual prompts, adapter contents, logs and actual states preserve that chronology. R-001 remains partially addressed pending the campaign and separate client coverage.
