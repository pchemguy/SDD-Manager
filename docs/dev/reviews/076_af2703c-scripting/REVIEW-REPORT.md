# Review of forge-close.mjs

## Assessment and source

- Campaign: `076_af2703c`; starting baseline: af2703c57fb0222c9f36e7cd34b8503f7c659cf2.
- Review entry: published ea77dde34d8d65c6258b401412dcf7ee353c3c84 on revision/076_af2703c-scripting; creation parent/return target: main.
- Candidate C-001: [forge-close.mjs](candidates/forge-close.mjs), supplied in chat. Original execution repository/version and operational trace are not supplied; the hardcoded demo target does not establish provenance of any actual run.
- Preserved input SHA-256: 104c1b03084fbe2f9f8a4e694b342ac5a2fad44d7cc964321e1a705f95ebb7d8.
- Focused criteria: behavior/effects, hosted identity and completion gates, pagination, interruption/retry safety, credentials/target binding, transport/results, Windows/Linux portability and plugin ownership.
- Evidence: source/interface inspection, current official GitHub/Node documentation and ten controlled local observations. Candidate implementation is unchanged; no package edits or live provider mutations.
- Result: useful execution prototype; unsuitable for direct integration unchanged. Eight open findings below are proposed corrections, not accepted implementation scope.

## What it does

At module load it reads gh.tkn from the process working directory, then constructs an authenticated REST client for one hardcoded demo repository. Task mode reads a JSON payload, searches the first issue page across states, excludes pull requests, accepts a matching body marker or title prefix, posts payload.comment unconditionally, closes an open issue as completed and reads its state back. Milestone mode searches the first milestone page across states, matches a title prefix, refuses any returned open associated item, closes the milestone and checks closed state plus zero open_issues. Errors produce stderr and exit 1; success prints a human-readable line.

The basic sequence is useful: look up before changing, reject multiple matches on the observed page, await dependent requests, preserve issue content and use a final GET. Task lookup correctly excludes PRs. Milestone lookup deliberately does not filter open PRs; an open associated PR blocks closure, which agrees with the current backend's foreign-object gate. State checks and explicit API-version pinning are retained strengths, with the limitations below.

## Findings

| ID | Priority | Concern | Status |
| --- | --- | --- | --- |
| R-001 | High | Repository/root/credential binding is implicit and unsafe for reuse | Open |
| R-002 | High | First-page lookup cannot establish absence or uniqueness | Open |
| R-003 | High | OR identity matching admits unmarked or contradictory issues | Open |
| R-004 | High | Hosted state substitutes for SDD completion eligibility | Open |
| R-005 | High | Comment/state transitions are not safely resumable | Open |
| R-006 | High | Readback omits completion reason and evidence consistency | Open |
| R-007 | Medium | Request bounds, provider failure classification and safe results are incomplete | Open |
| R-008 | Medium | CLI, import boundary, runtime/input contracts and professional documentation are missing | Open |

### R-001 — Bind target and credential input before use

Location: OWNER/REPO constants, top-level readFileSync and ghFetch URL/header construction. Every invocation targets the demo, while the token comes from whichever directory launched Node. No repository-root, ignored/untracked status, file protection or token-format eligibility is established. This is a source guard gap, not evidence that the original user's credential was unprotected or misused.

Correction: resolve the explicitly authorized repository and eligible root before reading its protected credential, preserving Git and API authentication as separate capabilities. Apply the existing hosting-token rules and supported Windows ACL/POSIX protection checks through a cohesive design. Keep API origin/destination bounded. The helper accepts arbitrary absolute URLs and header overrides, but its present main calls use fixed relative routes: no user-controlled cross-origin leak is demonstrated. Generalizing it or following pagination must not widen credential scope accidentally.

Recheck: invocation from an unrelated directory, conflicting remote/explicit target, ineligible credential files and unexpected URL/origin stop before requests; eligible Windows/Linux inputs retain the exact authorized destination without config/store changes.

### R-002 — Complete lookup before absence or uniqueness decisions

Location: task issue list and milestone list, both per_page=100 without following response links. A match on a later page appears missing; a duplicate later in the collection is invisible and the first match can be closed. P-001/P-002/P-009 reproduce these outcomes with full first pages and a supplied next link. GitHub paginates these endpoints; 100 is a page size, not a complete repository listing.

Correction: exhaust relevant pages under finite bounds, validate responses and deduplicate object identities before deciding. Incomplete or failed enumeration retains unknown lookup rather than permitting a write. Apply equivalent completeness to comment/evidence reconciliation and milestone membership assessment.

The open-associated-items query has a narrower consequence: a nonempty first page already blocks closure, even if more results exist. Omitted pagination there does not by itself create a false-zero gate for a consistent result set; it limits the count and cannot replace complete membership/ownership review.

Recheck: later-page matches/duplicates, more than one page of PRs/issues, malformed or repeated pagination and interruption produce correct complete mappings or a retained blocker without mutation.

### R-003 — Validate exact managed identity and ownership

Location: task matches predicate using marker OR title prefix; milestone title-only predicate. P-003 closes an issue titled for one task but marked for another. P-004 closes an unmarked issue solely because its title matches. The current issue/projection procedures require concordant exact managed identity, owning task and association checks. A marker anywhere in arbitrary text is also insufficient evidence of a valid generated identity section.

Correction: use both title and managed marker, reject contradictory/duplicate markers and validate repository, task and expected phase/milestone context. A title prefix can identify candidates, not authorize closure. Validate milestone identity/name/description/parent scope through the existing projection/lifecycle rules. Re-read the selected object immediately before mutation and verify its identity afterward; acknowledge that a read alone cannot make a multi-request sequence atomic.

Recheck: missing/conflicting markers, quoted markers, duplicate managed identities, renamed/moved objects, wrong parent associations and foreign objects stop rather than being silently repaired or closed.

### R-004 — Separate closure mechanics from completion authority

Location: both main branches, especially openIssues.length and readback.open_issues. Task input is an arbitrary comment; milestone input includes no expected task set, report or exit evidence. P-008 closes an empty milestone with no local acceptance or report inputs. The script cannot distinguish that milestone from a projection missing all expected work.

Correction: sdd-implement/sdd-manage and sdd-forge must establish requested tracking, completed acceptance, published task/result/status or report commits, review/exits and required predecessor closures. Forge must resolve all expected constituent issues and complete actual membership, including accepted retirements and foreign items. Pass an explicit bounded execution handoff to the utility. It need not become a second parser of the whole development-document chain, but its contract must say what the caller establishes and what the utility independently verifies. No remote counter proves local completion.

Recheck: missing expected issues, closed issues lacking evidence, empty or foreign milestones, incomplete review/report publication and unmet predecessor closure cannot enter an eligible close transition. A valid caller handoff can execute the exact selected operation without new approval ceremony.

### R-005 — Reconcile comments and uncertain effects before replay

Location: unconditional POST comment followed by PATCH and final GET; main catch loses transition detail. P-005 adds a second identical comment after a successful rerun. P-006 simulates a comment applied before connection loss; replay adds it again. An already closed matching issue still receives another comment. An uncertain PATCH or unavailable readback similarly leaves no explicit known/unknown effects result.

Correction: inspect existing evidence with complete pagination; identify the specific task/commit/evidence operation and reuse matching comments. After any uncertain write, read affected state/comments before deciding which remaining transition is safe. Retain earlier successful effects, unresolved effects and pending work separately. Do not automatically retry POST just because its response failed. Use existing Git/issue evidence rather than introducing a transaction journal or local issue database.

Recheck: successful reruns, comment-applied/disconnected, PATCH-applied/disconnected, unavailable readback and concurrent execution preserve one justified evidence record or return a concrete conflict/unknown state. Read-before-write alone does not guarantee exactly-once POST under concurrent invocations; establish suitable execution ownership rather than promising unsupported atomicity.

### R-006 — Verify disposition, identity and evidence, not only closed state

Location: task already-closed branch and final state check. P-007 starts with state_reason=not_planned: the script posts evidence, skips PATCH and reports closed/verified without reconciling why it was closed. Final task readback checks no reason, task marker, associations or evidence comment. Milestone readback verifies state/count but does not establish expected membership or local acceptance.

Correction: validate the exact requested transition and supported completion reason, managed identity/associations and matching evidence. Distinguish verified completed work from accepted retirement, other prior closure and unresolved state. Return changed versus already-matched state accurately. A conflicting reason is not permission to reopen or rewrite it; route that decision through the owning lifecycle. GitHub's update semantics ignore state_reason unless state changes, so blindly patching only a reason is not a general repair.

Recheck: completed and not-planned closures, changed identity, missing/mismatched comment and stale membership produce distinct truthful outcomes. No task-completion claim follows merely from state=closed.

### R-007 — Bound requests and preserve safe operational evidence

Location: ghFetch fetch/res.text/error path and caller sequencing. There is no explicit request/operation deadline or cancellation, response-schema/size contract, rate-header handling or structured partial-result reporting. Raw provider bodies are echoed without sanitization or a bound. A transport/library may have internal timeouts; that does not establish a selected operation deadline. P-008 confirms the candidate supplies no request signal, without testing real network timeout behavior.

Correction: use supported finite request/body/overall bounds and cancellation, validate successful response shapes, bound/sanitize diagnostics and retain endpoint/status/request correlation plus known/unknown effects. Distinguish access, rate, validation, transport and policy failures; honor provider timing and the current bounded retry protocol. Serialize dependent mutations, retaining that existing strength, and pace bulk operations as required. Reads and uncertain writes need different replay decisions. Do not route every 403 to a replacement token.

Recheck: stalled headers/body, malformed/oversized data, rate responses, private-resource 404, policy denial, failed mutation/readback and cancellation yield bounded, sanitized and truthful outcomes without blind replay. Node provides AbortSignal.timeout; a request signal alone does not implement the whole operation/reconciliation policy.

### R-008 — Define a reusable module and CLI contract

Location: top-level token read, positional argv handling, unvalidated payload and unconditional main invocation. Importing executes credential access and the workflow; missing/extra arguments, ID grammar, JSON shape, comment type/content and UTF-8/BOM policy are unspecified. Success/error output has no stable automation contract. There is no in-code API documentation, usage/help, explicit runtime baseline or native platform evidence.

Correction: separate import-safe core and CLI entry, validate invocation/payload before secret access or requests, and document inputs, effects, outputs, error/unknown states and platform limits. Keep credentials out of arguments and evidence; accept quoted paths/Unicode and document encoding. Choose an optional supported Node baseline consistent with the plugin's utility policy. Add professional in-code documentation and an adjacent bounded CLI guide only if it adds substantive detail.

Recheck: harmless imports/help, malformed/extra arguments, invalid IDs/payloads, Unicode/spaced paths, encoding cases and a documented machine result/exit matrix. Use actual native Windows CMD/Linux evidence for any supported-platform claim.

## Platform and integration fit

The candidate uses Node filesystem/fetch APIs and no shell commands, OS-specific executable or external credential store. It has no inherent wincred/libsecret or PowerShell requirement. Its present repository/CWD, encoding, token protection and runtime issues apply on both Windows and Linux; Windows needs an appropriate native file-protection mechanism rather than a POSIX-mode assumption. Local syntax and VM checks ran on Linux, Node v24.19.0. Native Windows execution and live-provider acceptance are Not run.

The natural owner is [sdd-forge](../../../../.agents/plugins/sdd-manager/skills/sdd-forge/SKILL.md), because these are GitHub issue/milestone transitions. A future optional utility could live in that skill's scripts/ directory, keeping task and milestone modes in one cohesive closure module if their shared transport/reconciliation remains clear. One campaign need not equal one file; split only for a substantive independent boundary. Do not merge this into the coordinator's Git credential/push recovery utility merely because both use a token.

The [GitHub backend](../../../../.agents/plugins/sdd-manager/skills/sdd-forge/references/github.md), [issue lifecycle](../../../../.agents/plugins/sdd-manager/skills/sdd-forge/references/github-issue-lifecycle.md), [milestone lifecycle](../../../../.agents/plugins/sdd-manager/skills/sdd-forge/references/github-milestone-lifecycle.md) and [shared object lifecycle](../../../../.agents/plugins/sdd-manager/skills/sdd-conventions/references/backend-object-lifecycle.md) already define the required policy. A script would implement bounded API mechanics under those procedures, with concise caller/CLI routing. It should not become a parallel closure workflow or extra state log. Main DOCS preparation has a distinct milestone/merge gate and is not silently covered by the current sdd-<id>- title matcher. No reopen/retirement/new-provider operation is implied by adding completed closure.

## Controlled observations and evidence limits

Command: node --check candidates/forge-close.mjs for syntax, then node --test evidence/review-probes.mjs from this directory. Both exit successfully; all ten observation checks pass, with no failures/skips. Nine deliberately reproduce unacceptable behaviors; one verifies the open-PR safeguard. This is not ten product acceptance passes.

The [probe harness](evidence/review-probes.mjs) reads only candidate source from disk, removes its fs import for isolated VM injection, and substitutes in-memory fs/fetch/process/console fixtures. No original candidate invocation, actual token read or real GitHub request occurs. Observations reproduce JavaScript decisions under modeled responses; they do not establish live GitHub behavior, native Windows support, installed-agent routing or completion in the external demo.

| Probe | Observed result | Related finding |
| --- | --- | --- |
| P-001 | Existing later-page task reported missing | R-002 |
| P-002 | Issue closed despite a matching later-page duplicate | R-002 |
| P-003 | Conflicting title/body identity closed | R-003 |
| P-004 | Unmarked title-only issue closed | R-003 |
| P-005 | Successful repeat creates duplicate evidence comment | R-005 |
| P-006 | Applied-but-disconnected comment duplicated on replay | R-005 |
| P-007 | Not-planned closure reported verified without reason reconciliation | R-006 |
| P-008 | Empty milestone closed without expected-task/report inputs; requests have no signal | R-004/R-007 |
| P-009 | Milestone closed despite a matching later-page duplicate | R-002 |
| P-010 | Open associated PR correctly blocks closure without writes | Retained safeguard |

## Official references checked

Checked 2026-10-18; English primary documentation. Provider facts qualify the source analysis, not a live operation.

- [Repository issues](https://docs.github.com/en/rest/issues/issues): paginated issue/PR results, update permissions and state/reason semantics.
- [Milestones](https://docs.github.com/en/rest/issues/milestones): list/update fields and endpoint permissions.
- [Issue comments](https://docs.github.com/en/rest/issues/comments): list/create operations, comment bodies and notification/rate implications.
- [Pagination](https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api): response links and finite page sizes.
- [REST best practices](https://docs.github.com/en/rest/using-the-rest-api/best-practices-for-using-the-rest-api): serial requests, bulk pacing and provider timing for rate responses.
- [API versions](https://docs.github.com/en/rest/about-the-rest-api/api-versions): 2022-11-28 remains supported through 2028-03-10. Its age alone is not a defect; a version change needs its own compatibility check.
- [Node globals](https://nodejs.org/api/globals.html): supported cancellation facilities, including AbortSignal.timeout. Current documentation is not a native Windows execution result for this candidate.

## Disposition and stopping boundary

Recommend retaining the small task/milestone execution purpose and revising the identified boundaries before integration. This review does not itself accept a revision design or authorize implementation. A subsequent plan should resolve the caller/utility evidence contract, target/credential binding and safe uncertain-write/comment strategy before runtime work, then select proportionate deterministic and native-platform checks.

Publish/read back this focused review checkpoint and stop on revision/076_af2703c-scripting, open/unmerged. No production utility, package change, external demo repair, live mutation, release or campaign closure is selected. Full plugin regression/package suites are not rerun for this source-only review input/evidence change; relevant syntax, controlled observations, current links and preservation are checked instead.

## Subsequent accepted revision disposition

The preceding review is preserved as the historical assessment at 4cb8b765744687f585c5f7a3081a70ef1119aa7a. The human subsequently authorized [the revision plan](REVISION-PLAN.md), implementation/documentation, placement and integration into SDD Manager, explicitly keeping the campaign open. Its earlier Open statuses describe that original checkpoint.

R-001–R-008 are now addressed within the accepted caller/utility boundary at implemented source 61a7798c10ad6355003a5997b72b446141d5c4db. The [execution report](REVISION-REPORT.md#final-verification-and-disposition) maps every finding to changes and actual verification, including final 35 completion/27 Git contracts, native Windows/Linux Node 22/24 matrices, support/publisher regressions and exact reproducible package bytes. Caller authority, distributed exclusivity and unsupported-scope limits remain explicit. Installed-agent/live-provider trials are Not run.

The utility/guide and shared protection module are integrated into their owning script directories and existing forge/package workflows. This campaign remains open/unmerged for human review; no live hosted closure, external demo repair, release or campaign merge is selected.
