# Task audit and forward recovery review

## Campaign and assessment

- Campaign: **062_60c9ac4**; ordinary focused review, open.
- Starting/reviewed source: `60c9ac4b2fdab26eb51af79b1240c205195a8910`, refreshed origin/main.
- Working branch: `revision/062_60c9ac4-task-audit`; eventual integration target: `main`.
- Authority: open the task-audit revision campaign and evaluate the supplied incident statement. Persist/publish this assessment; stop before runtime remediation, product-repository operations or campaign closure.
- Identity: 062 follows the maximum repository-wide reservation 061, checked by directory names and local/refreshed remote references. No parent campaign is associated with this opening.
- Exclusion: automatic-review denial, its cause and any approval/retry mechanism are explicitly out of scope.
- Evidence: current instruction inspection and the human-supplied statement. No target-repository commits, test logs, T-022-RECOVERY.md, tool payload or automatic-review rejection trace was supplied/inspected. Its product identity, actual authorization and implementation state are not independently established here.

## Submitted incident

The reported agent says it published T-022 before inspecting a failed production test, then fixed a bootstrap defect locally. It claims 40 unit, 14 development Chromium and two production Chromium tests pass and names T-022-RECOVERY.md. It requests approval to publish the forward correction, preserve history and resume full P1, citing the task audit's “authorized scoped recovery or explicit exception” and a separate automatic-review rejection of stopped GitHub side effects. It says no further publication was attempted.

These are attributed claims, not verified test results or a confirmed denial diagnosis. This campaign does not execute the quoted approval request.

## Located coverage

| Concern | Current source and observed coverage |
| --- | --- |
| Inspect failures before completion | [Task execution](../../../../skills/sdd-implement/references/task-execution.md), development-cycle steps 4–5, requires actual failure/evidence inspection, scoped repairs and rechecks. [Task completion](../../../../skills/sdd-implement/references/completion-and-checkpoints.md), completion step 1, blocks missing/contradictory acceptance evidence. |
| Preserve published history | Task commit contract permits later task-specific repairs; its audit prohibits automatic rebase/reset/force-push, replay and retroactive relabeling. |
| Existing implementation authority | [Coordination](../../../../skills/sdd-manage/references/coordination.md), execution/handoff and scope checks, carries actual human authority and returns repairs to the active implementation owner. It does not require fresh permission for routine authorized work. |
| Preserve original range and stop | [Startup/continuation](../../../../skills/sdd-implement/references/startup-and-continuation.md) retains the requested range and finishes interrupted work first. An independently established full-P1 grant need not be granted again merely because a repair was needed. Actual pause/withdrawal or missing authority still controls. |
| Recovery note | Existing task evidence may link a scoped recovery note; the audit forbids requiring a new registry/journal. A filename alone establishes neither acceptance nor publication. |

## Findings

### R-001 — Recovery authorization wording leaves the decision owner and reusable authority unclear

**Type:** instruction ambiguity. **Priority:** high. **Confidence:** high for source ambiguity; incident causation unverified. **Status:** Verified by [source recheck](REVISION-REPORT.md#a-004--verification-and-disposition); incident behavior unverified.

The task persistence audit says to block affected advancement/integration until the manager resolves an “authorized scoped recovery or explicit exception.” Git integration additionally calls for an “explicit scoped recovery decision or exception.” Neither defines when the manager can resolve recovery under an existing implementation grant, the minimum evidence/decision needed, or when the human must approve an exception. Nearby scope guidance allows in-scope repairs and reuse of actual authority.

This can turn a sound temporary audit hold into a request for blanket reauthorization of repair, publication and the original range. It can also produce the opposite error: treating a report of a repair as an exception to an unresolved gate.

**Proposed correction:** define separate manager-resolved in-scope forward recovery and human-controlled changes/exceptions. Carry the original grant, range, target, required verification and hosted scope into the recovery decision. Record what defect/gate is resolved and the evidence required before continuation. Ask the human only when authority, scope, a policy exception or a consequential decision is actually missing.

**Owners/recheck:** task audit plus Git integration/coordination. Compare a fully authorized forward repair, unknown authority, human pause, scope expansion, unresolved audit composition and a retained implementation range. Existing authority should prevent repeated permission requests; genuine missing decisions must remain gates.

### R-002 — Premature verification failure is insufficiently distinguished from commit-composition violations

**Type:** recovery-procedure gap. **Priority:** high. **Confidence:** high for source distinction; T-022 classification unverified. **Status:** Verified by [source recheck](REVISION-REPORT.md#a-004--verification-and-disposition); incident behavior unverified.

The named audit violation branch enumerates malformed subjects, bundled results, split result/status and uncertain ownership. The quoted incident instead reports premature publication with a failed production test. A commit might contain the correct single task/result/evidence/checkbox structure yet falsely claim verified completion; it might also violate both contracts. The quote establishes neither composition nor precise evidence history.

Current task execution already requires repairing incomplete work and correcting unsupported checked claims. But the audit lacks an explicit classification/reconciliation path for later-invalidated or prematurely claimed verification, separate from irreparable historical composition compliance.

**Proposed correction:** classify composition, acceptance/evidence and ownership separately. Inspect the published commit, original required checks/failure, current correction and task/parent/hosted claims. Preserve original evidence/history; correct unsupported completion and reassess affected dependents/parents/hosted closures within authority. Verify the actual corrected production condition, not just aggregate counts. A forward task-specific fix may establish current acceptance; it cannot retroactively make the earlier completion sound or repair historical composition. Resume only after actual applicable blockers are resolved within the retained range.

**Owners/recheck:** task execution/completion/audit and hosted lifecycle handoff. Compare a single-task commit with a missed failed test, a genuinely split result/checkbox commit and a combination. Require truthful historical/current status and bounded forward repair without invented task replay or history rewriting.

### R-003 — Push-first continuation does not expressly handle a known-invalid unpushed completion

**Type:** adjacent instruction conflict risk. **Priority:** medium. **Confidence:** high for source ordering; not established as the cause of this already-published incident. **Status:** Verified by [source recheck](REVISION-REPORT.md#a-004--verification-and-disposition); incident behavior unverified.

Startup requires all outstanding commits to be pushed before selection/tests/edits. Audit/completion requires actual commit inspection before publication and blocks unsupported completion. Startup mentions contradictory evidence later, after pushing. It does not expressly state how to handle a resumed, unpushed closing commit already known to contain failed required acceptance or unsafe/unowned contents.

**Proposed correction:** make publication eligibility inspection precede push-first when recovering a known-invalid or uncertain completion. Keep push-first for eligible verified retained commits; do not blindly publish an invalid completion, rewrite history, or accumulate new work to evade the gate. Resolve the scoped recovery with actual authority and preserve pending work. Distinguish already-published correction from an unpublished invalid boundary.

**Owners/recheck:** startup/continuation, completion audit and per-commit Git publication. Compare verified unpushed work, known failed acceptance before push, uncertain ownership and an already-published failure. A safe publication preflight must not become a routine repeat of the whole test suite or waive normal publication cadence.

## Assessment of the requested approval

The admission describes a completion/verification breach if accurate; it does not by itself establish a malformed or split closing commit. Preserving history and using a task-specific forward correction is compatible with current instructions. The quoted test totals are encouraging reported evidence, but do not prove the failing bootstrap condition, exact corrected source, task acceptance, audit composition or phase readiness.

A request to reauthorize publishing and resuming full P1 is not automatically justified by the audit phrase. If the original grant actually includes the correction, publication, hosted effects and full-P1 range, and the human has not paused or withdrawn it, reuse that grant after resolving the concrete recovery gates. The automatic-review denial is excluded from this assessment at the human's explicit direction; no conclusion about its cause, resolution or effect on publication is offered here.

The agent should report separately: the invalidated completion, verified forward correction, actual existing operation authority/range, unresolved task-audit gate and what specific task-recovery decision is still missing. Do not combine them into an opaque request to approve “the recovery.”

## Recommended revision queue and stopping point

1. R-001: define recovery decision authority and boundaries; avoid making every forward repair a new human checkpoint.
2. R-002: add acceptance/evidence failure classification and current-state recovery, preserving distinct historical composition findings.
3. R-003: qualify startup publication ordering for known-invalid/uncertain retained commits.

No runtime source changes, target-project repairs/publication or live acceptance were performed. Automatic-review denial was not assessed. Findings are source-supported proposals, not proof of the incident's exact causes. Campaign remains open for a revision plan and authorized remediation.

## Record checks

Check report/index navigation, Markdown heading/list spacing and consecutive blank lines, owned paths and Git whitespace. Commit/push/read back this opening assessment before further work. No runtime suite or model trial is needed for report-only persistence. Keep closed campaign contents unchanged and outside compatibility checks.

## Authorized remediation checkpoint

The later human request accepted planning/execution of R-001/R-002/R-003. Source changes and rechecks are recorded in the [revision plan](REVISION-PLAN.md) and [revision report](REVISION-REPORT.md). Original incident assertions and baseline observations remain historical; this does not establish the incident's exact cause or assess the excluded automatic-review denial.
