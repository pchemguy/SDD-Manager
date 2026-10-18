# Authentication recovery revision plan

## Campaign and authority

- Campaign: `075_89fdf79`; baseline: `89fdf79637e59c558b3a265d5e458c22e58d49b7`; original opening: `fc381bd8b0ec46ccbf4f1e5dc78d5095cfd80bbb`.
- Planning source: `9794b8a99a1ff128315b811a1305afcec16775a8`.
- Working branch: `revision/075_89fdf79-scripting`; creation parent/eventual target: main.
- Human authorized completion of this plan followed by execution, covering the script, code review, documentation and SDD workflow integration. No intermediate approval is needed; campaign merge/release remains unselected.
- Inputs: [candidate assessment](REVIEW-REPORT.md) and unchanged [supplied script](candidates/git-auth-recover.mjs). Accept R-001–R-007 for correction; retain original observations and attribute live-platform limits honestly.

## Design and ownership

Place the shipped script at `.agents/plugins/sdd-manager/skills/sdd-manage/scripts/git-auth-recover.mjs`. The coordinator owns authentication recovery; plugin-root scripts would imply a broader unrelated owner. Preserve the candidate under campaign evidence, not the shipped package.

Implement one dependency-free Node.js 22+ ES module, safe to import, with JSDoc explaining exported contracts, effects, errors and security boundaries. A companion `git-auth-recover.md` beside it is justified for invocation, outcome semantics, Windows ACL requirements, runtime/failure recovery and test limits; keep normative workflow policy in credentials.md rather than duplicate it in code/docs.

Default to transient Git credential-helper protocol, not permanent wincred/libsecret configuration. Git launches the same script through its documented shell helper interface using the actual Node executable and quoted paths, including spaces/Unicode. No generated secret/helper files, vault installation, token in arguments/environment, PowerShell prerequisite or persistent Git config changes. Helper `get` supplies credentials only for the selected HTTPS host/path; `store`/`erase` are no-ops. The helper reuses the protected ignored token file and is active only in the selected Git invocation. This is the portable counterpart of ASKPASS without localized prompt parsing.

Persistent credential-store setup remains an existing alternative under credentials.md, not an automatic fallback or an additional script mode. Missing facilities return a concrete blocker rather than installing packages or silently introducing plaintext storage.

## CLI and behavior contract

Expose `push` and `readback` only, with explicit `--repo`, `--remote`, `--url`, `--ref` and `--expect`; optional root-relative `--token-file` defaults to gh.tkn and bounded `--timeout-ms`. No arbitrary Git command tail, forced push, deletion, multi-ref push, remote rewrite or SSH conversion. `--url` pins the coordinator's intended effective HTTPS push destination, including a distinct push URL. Ref must be one full heads/tags ref and expected value a full local object ID. Tags compare their actual ref object; release-source peeling remains the release owner's separate check.

Resolve a non-bare repository/worktree root, validate source ref and unique effective push URL, token containment/type, ignore and untracked status before reading. Reject symlink/out-of-root tokens and multiline/NUL or oversized content; accept normal terminal LF/CRLF. POSIX checks require current ownership and owner-only mode. Windows conservatively checks the token DACL using native whoami/icacls and parsed SDDL, allowing only current user, SYSTEM and Administrators; unsupported/ambiguous ACLs block rather than claim protection. Read-only ACL export metadata is temporary and cleaned; no credential material is copied there.

Use direct Git executable argument arrays; provide context-scoped helper reset/useHttpPath and disable credential prompts/HTTP redirects for the operation. Reject credential-bearing URLs, relocated Git environment and ambiguous destinations. Bound process time/output and sanitize all public failures: return no raw credential/helper/Git output. Preserve caller network/proxy settings except credential/trace channels that conflict with the selected mode. Check effective destination again before network effects.

`push` retries the one already-authorized operation once using an explicit source/ref and no follow-tags/submodule expansion, then reads back that exact push destination/ref. A push failure or timeout may still have remote effects; distinguish process failure, absent/different remote ref, unverified outcome and verified matching ref. No automatic re-push or claim of credential validity based on storage. `readback` performs no push. Coordinator/publication owner retains authorization, classification of original failure, interpretation of outcomes and separate release/tag contracts.

Return one versioned JSON result and documented exit codes. Main/CLI has no effects on import; helper protocol stdout is internal to Git and must never be logged. Do not claim full platform support from pure quoting/ACL fixtures.

## Ordered actions

| Action | Findings | Deliverable and dependencies | Recheck |
| --- | --- | --- | --- |
| V-001 | R-001–07 | Test-first script and source-only Node tests under `tests/git-auth-recover.test.mjs`; implement validated transient operation and helper contracts. | Import safety; protocol scoping; paths/ignore/permissions/token format; exact destination/ref; no persistent config; process/error/output handling; no arbitrary commands; scoped push/readback and uncertain outcomes. Synthetic secrets only. |
| V-002 | R-001–07 | Review/fix remaining code, expand native Git/helper and platform cases, add read-only Windows/Linux Node 22/24 CI definition under `.github/workflows/git-auth-recover.yml`. Depends V-001. | Linux actual helper calls and controlled operation scenarios; conservative Windows SDDL fixtures and native Windows tests configured. No real credentials/host mutations in tests. Record any unrun CI honestly. |
| V-003 | R-001–07 | Professional JSDoc, companion guide, credentials.md and Git workflow routing; short entry reference only if needed. Depends V-002. | Runtime optional to SDD; trigger only after actual auth failure and eligible preconditions; pre-write gate preserved; exact operation authority/readback; documented support limits/JSON/failure recovery. |
| V-004 | R-001–07 | Packaging/snapshot contracts retain script+guide, documentation navigation and source acceptance command; focused isolated skill-use/code assessment and full relevant suites. Depends V-003. | Exact archive bytes, synthetic tests, support/publisher and current links, no excluded-source dependency, raw assessment distinct from live provider evidence. |
| V-005 | R-001–07 | Final fixes/rechecks and report, finding dispositions, HANDOFF and index. Depends V-004. | All accepted findings covered, actual limits recorded, prior closed records unchanged, action commits pushed/read back, campaign remains open/unmerged. |

Each action commits source and evidence together and pushes/readbacks before advancing. Test-driven local iterations may occur inside an action; do not invent product task IDs. If a first implementation commit is used as a bounded partial checkpoint, record it as partial and keep the action incomplete until its tests pass; never publish a false completion.

## Validation and boundaries

Use Node's built-in test runner with isolated temporary repositories and canary credentials. Run the same suite under native Git on Linux and Windows in CI; use CMD for Windows run steps. Cover original helper/config-loss defects, no keyring, helper context mismatch, token/ACL failures, existing URL-scoped helpers, missing tools, timeout/signal/buffer errors, contradictory readback and no leaked token in argv/env/public JSON. Controlled Git calls and test doubles do not prove live GitHub authentication or unavailable Windows execution.

Run full support/publisher suites from acceptance/AGENTS.md, catalog and current link checks; require shipped script/guide presence in package contracts and exact committed archive validation. Add no Node package dependency, test-only files to the distributed plugin, product version bump or unrelated refactor. A narrow CI addition is source-only; no release workflow dispatch is selected.

Campaigns follow coherent objectives rather than file counts. This campaign's accepted execution unit is C-001 authentication recovery and its supporting code/docs/tests. Independently useful unrelated candidates should have separately scoped campaigns when introduced; do not reject necessary support files to enforce one-script-per-campaign.

When source work is complete, refresh HANDOFF with actual evidence and next boundary. Stop after verified publication on the current branch; no campaign merge, release, real credential alteration or live external push test is implied by these tests.

## Execution status

V-001–V-005 are complete under the selected scope. The [revision report](REVISION-REPORT.md) records original failures, native Windows/Linux corrections, finding dispositions, isolated review, package/full-suite evidence and limits. Final utility source is 58cd578; later checkpoint edits affect source-only campaign continuity. Campaign remains open/unmerged after publication; no scope expansion or release is implied.


## Subsequent closure instruction

After completed execution was published as a7e8fec, the human requested campaign closure. The [revision report](REVISION-REPORT.md#authorized-closure) records that extension of the stopping boundary to explicit verified integration into main. The accepted implementation scope and original execution evidence remain unchanged; release/live-provider testing and additional candidates remain unselected.


## Reopened amendment A-001

Reopening source and qualifying prior closure: `115a51d5116da344f63d1475c7f8acbf19f97c25`; original opening and baseline remain unchanged. The human requested analysis only; prior V-001–V-005 execution and closure remain historical facts.

| Action | Accepted scope | Recheck and stop |
| --- | --- | --- |
| V-006 | Analyze the supplied background-push diagnosis/recovery against current Git semantics, coordinator instructions and utility. Preserve the excerpt and distinguish reported environment observations, verified general behavior, current source gaps and proposed corrections. | Primary English sources and bounded synthetic local experiments; no real token, external demo/config/store writes or source implementation. Publish the appended review and amendment checkpoint, then remain open/unmerged. |

Potential corrections are recommendations until selected. This amendment does not silently authorize implementation or reuse earlier execution authority for new findings.


### V-006 result and human clarification

The human clarified that the credential operation had remained hung until they instructed the agent to diagnose it. The [A-001 analysis](REVIEW-REPORT.md#reopened-amendment-a-001--background-credential-operation-stall) therefore centers automatic stall detection and the outer Git-operation lifecycle. V-006 is complete: four synthetic protocol probes and 27 existing utility tests pass; R-008 identifies the current workflow gap. Its bounded correction and additional persistent-recovery/reporting recommendations remain proposed, without source execution authority. Stop after published analysis, open/unmerged.


## A-001 accepted revision plan — Automatic diagnosis of pending Git operations

### Authority, objective and source

The human requested a revision plan followed by execution after V-006 analysis. Accept R-008 and the directly related recovery-selection/reporting clarifications from the [focused review](REVIEW-REPORT.md#reopened-amendment-a-001--background-credential-operation-stall). Planning source: `96f1997f43745e90e52d2ea2e976fabdf69257bc`. Reopening baseline/prior closure: `115a51d5116da344f63d1475c7f8acbf19f97c25`; original campaign identity, opening fc381bd8b0ec46ccbf4f1e5dc78d5095cfd80bbb and branch-off 89fdf79637e59c558b3a265d5e458c22e58d49b7 remain unchanged.

Objective: the agent owns the original Git/credential operation from launch through publication or a concrete blocked state, recognizes a stalled/interactive helper before a completed authentication error, and starts scoped diagnosis without a human prompt. Retain existing-auth-first, protected token handling, exact authorized destination/ref/object and per-commit publication. A quiet or slow operation is not automatically hung.

The plan and its execution are authorized together. Stop after verified publication of completed amendment work on revision/075_89fdf79-scripting; no amendment merge/closure, release, external demo repair, real-token test or permanent host credential alteration is selected.

### Design, ownership and bounded composition

- Keep the complete generic operation lifecycle in `sdd-manage/references/git-workflows.md`: operation identity/owner, runner capabilities, observation/deadline selection, progress assessment, diagnostic transition, owned cancellation, uncertain effects and verified completion. Cover the original push, exact ref readback and credential subprocesses, including background/harness sessions. Do not introduce a fixed universal deadline, platform-specific shell dependency or automatic token search.
- Keep credential-specific classification/selection in `references/credentials.md`: an observed blocked helper can enter recovery without a 403; distinguish missing credentials, helper interaction, network/rate/policy restrictions. Prefer an eligible request-local recovery mechanism over changing persistent configuration merely to unstick a call. Persistent setup remains an intentional scoped alternative, with helper multivalues/context and preservation addressed; it does not require a redundant permission request when already authorized.
- Update `references/coordination.md`, the coordinator entry's existing publication/reference routes and the adjacent utility guide only as needed to expose the canonical procedure and observed-helper trigger before the dependent action. No second full lifecycle, new reference file, skill, script, journal or task log. Review boundaries by cohesion and completeness, not a line-count target.
- Keep git-auth-recover.mjs API/runtime and its source tests unchanged unless verification exposes an actual necessary defect. Its existing timeout/reset applies to its own invocation, not an earlier separately launched task; document the caller's remaining ownership. Node stays optional outside the existing utility. No PowerShell or new mandatory tool dependency.
- Preserve original observations, prior findings/closure and other closed campaign records. Record amendment execution separately in the existing revision report, then refresh HANDOFF/index at the completed checkpoint.

### Ordered actions

| Action | Outcome and owned changes | Dependencies and objective recheck |
| --- | --- | --- |
| V-007 | Publish this complete accepted plan and execution grant; retain the actual branch/stop in HANDOFF. | Inspect clean published 96f1997 source and unchanged parent association; commit/push/read back before source edits. |
| V-008 | Add the canonical bounded Git/background-operation lifecycle to git-workflows.md and align its publication/authentication entry points. | After V-007. Initial existing-auth call has an owner and supported observation/execution bounds; suspected stall automatically enters diagnosis; legitimate progress, owned cancellation and unknown remote effects are handled explicitly; no duplicate push or scope drift. |
| V-009 | Integrate helper-blockage recovery, transient/persistent selection and truthful evidence in credentials.md; update short coordinator/caller/utility-guide routes. | After V-008. No completed-error prerequisite for a confirmed helper block, no replacement credential for every timeout, no claim that terminal-prompt suppression controls arbitrary helpers, no automatic config/vault mutation. Original operation must be reconciled and publication verified. |
| V-010 | Proportionate content/interface/cohesion review, representative branch walkthroughs, relevant synthetic regression, full support/publisher checks and exact package/link validation. | After V-009. Assess the contrasts below from entry through return; distinguish source reasoning, protocol/runtime observations and unrun agent/client behavior. Fix only accepted-scope defects, rerunning affected checks. |
| V-011 | Record R-008 disposition, actual evidence/limits, remaining boundary, cumulative retained result and final amendment HANDOFF/index; publish/read back. | After V-010. All selected actions complete, package/source preservation verified, no false behavioral or live-provider claim; remain open/unmerged. |

Each action checkpoint includes its owned source/evidence and is pushed/read back before further work. Non-task campaign action IDs do not become executable product task IDs.

### Acceptance contrasts and verification

1. A silent/non-returning helper during the first existing-auth attempt reaches automatic diagnosis within an established operation-appropriate bound; the agent does not wait for a user diagnostic instruction or completed 403.
2. A legitimate quiet/progressing transfer is assessed with elapsed/session/progress evidence; any bound adjustment is justified and finite, not an unlimited reset of the same timer.
3. A helper requiring unavailable interaction is distinguished from invalid credentials, network outage, rate limit and policy rejection. Recovery preserves actual authority and does not bypass host restrictions.
4. A timed-out/uncertain push is not overlapped or blindly repeated: the owned operation is resolved where supported, and the exact destination/ref is read back before selecting a retry. A matching ref can finish publication without another push; unknown state blocks advancement.
5. An eligible protected token and utility recover the same operation with request-local resets; persistent helper/store setup is a deliberate alternative and preserves relevant prior state. Missing runtime/token/protection/cancellation/readback facilities produce a specific retained blocker and only consequential human input.
6. Synchronous and background runners use available process/session controls; cancellation is limited to the owned process/session/verified descendants. Unavailable controls are disclosed; no arbitrary process-tree kill or claim of cleanup from a parent exit alone.
7. Evidence identifies the operation, observation/bounds, sanitized diagnostic basis, pending process/remote effects, selected recovery and verified result in existing reports; no mandatory extra journal or secret-bearing trace.

Use source/interface walkthroughs for these instruction decisions. Run the existing 27-test synthetic utility suite and retain the four local protocol observations from V-006 where applicable. Run full support/publisher suites and catalog validation, verify current package and active-document links/fragments, offline manifest and exact/reproducible archive, and compare protected paths/unchanged utility bytes. Use an isolated agent/client trial only if separately available and permitted; otherwise mark autonomous agent behavior Not run, rather than equating fixtures or a walkthrough with a consumer pass. No new tests that merely assert wording, no new presentation assets or product version change.

### Final checkpoint

Append action/finding outcomes to REVISION-REPORT, preserving original closure and A-001 review evidence. Refresh HANDOFF with the accepted scope, verified source, actual test/check limits and open amendment boundary. Publish/read back the final branch checkpoint and stop; the earlier closure request does not automatically reclose this amendment.

### V-010 caller audit clarification

The accepted interface review found three direct publication callers still requiring a completed credential error: implementation startup, task completion and steering persistence. Their existing paragraphs receive short links to the canonical monitoring/helper-blockage procedure, retaining their original publication and stopping gates. This is the planned in-scope caller correction; no lifecycle copy or new workflow boundary is added.
