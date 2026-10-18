# Revision plan — GitHub closure utility

## Authority, source and boundary

- Campaign: `076_af2703c`; original baseline/branch-off: af2703c57fb0222c9f36e7cd34b8503f7c659cf2; opening: ea77dde34d8d65c6258b401412dcf7ee353c3c84.
- Accepted review source: 4cb8b765744687f585c5f7a3081a70ef1119aa7a; [findings R-001–R-008](REVIEW-REPORT.md).
- The human requested a revision plan, fixes/documentation, placement in the owning script directory and integration into SDD Manager. The subsequent explicit instruction is to keep this campaign open.
- Authorized: implement and verify the corrected optional utility, shared protected-input support, documentation/workflow/package integration, source tests/CI and campaign evidence; commit/push/read back each checkpoint.
- Stop: completed execution published on revision/076_af2703c-scripting, open/unmerged. Integration here means integration into SDD Manager's source package and workflows. No campaign merge/closure, live GitHub comment/closure, real-token utility trial, external demo repair, release or version change is selected.

## Objective and ownership

Deliver an optional dependency-free Node 22+ utility at skills/sdd-forge/scripts/forge-close.mjs with professional in-code documentation and a substantive adjacent forge-close.md CLI/contract guide. Task and milestone completion share one cohesive module; this is not a one-file-per-campaign rule. Keep the supplied candidate and original observation probes unchanged as review evidence.

The utility performs bounded GitHub mechanics. The manager/implementation owner establishes actual authorization, tracking, accepted task scope, tests/review/exits, published result/status/report commits and exclusive execution ownership. Forge resolves the exact selected host objects and invokes the utility after those gates. A validated JSON handoff is an explicit caller assertion, not independent proof that work or publication occurred. The script must not infer completion from an empty milestone, closed state or arbitrary comment.

Support completed implementation task issues and delivery/phase-review milestones. Main DOCS preparation, reopening, retirement mutations, PRs and other providers retain their existing procedures and are outside this utility. Ambiguous or unsupported membership/disposition blocks this mechanism; forge may use its existing authorized lifecycle without weakening its gates. No new issue-map database or transaction journal.

## Design and interfaces

### Package boundary and shared credential validation

- Keep forge closure logic/CLI/guide in sdd-forge/scripts/. Add a cohesive protected-token.mjs under the credential owner's sdd-manage/scripts/ and import that module from both utilities. Extract the existing ignored/untracked/root-contained, bounded format, POSIX ownership/mode and native Windows identity/ACL validation without relaxing policy. Avoid importing the Git push utility just to read a token.
- Preserve git-auth-recover.mjs's public exported validation helpers/error compatibility and its push/readback behavior. Retain native SystemRoot/System32 tool selection, ACL decoding/account-alias protections and environment restrictions. Run its full existing contracts after extraction.
- Use an explicit eligible Git worktree root and selected remote. Bind the request repository to one normalized effective remote destination, accepting established GitHub HTTPS/SSH forms without changing transport/configuration. Refuse ambiguous destinations, non-Git/nested-root mismatch and unsupported environment. API credentials remain separate from Git shell authentication.
- Read only the already eligible root-relative protected token; no token discovery, storage, permission/configuration repair or installation. No token in arguments, URLs, diagnostics or evidence.

### CLI and caller handoff

Provide import-safe exports plus task|milestone --repo PATH --remote NAME --request FILE, optional token-file and finite timeout options, a harmless help path and reconcile-only mode that performs no hosted writes. Reject missing/duplicate/unknown options, malformed IDs and malformed/oversized input before secret access or requests. Define strict UTF-8 JSON with optional UTF-8 BOM; reject other encodings and invalid Unicode. Resolve the request file explicitly and support quoted/Unicode paths.

The versioned request contains repository owner/name, exact expected phase label and milestone identity (stable ID, number, full title and description), plus explicit eligibility assertions for verified acceptance, publication, requested tracking and exclusive ownership. Task data identifies stable ID, exact title/issue number, full commit, branch, verification summary and optional report path. Milestone data supplies a nonempty complete expected task set, review-task identity, report association and kind; phase-review adds the nonempty expected predecessor milestone set and exactly one review task. Validate schema/uniqueness/associations and reject unsupported dispositions before writes. Do not parse the entire TASKS/PLAN chain into a competing completion authority.

Task evidence is deterministic from the request's task/commit/branch/verification/report fields, with a managed task/commit marker. Exact existing evidence is reused; conflicting/duplicate evidence for that operation blocks. Preserve other comments. Different verified commits remain distinguishable historical evidence. Only completed closure is emitted; not_planned or another conflicting prior reason is never silently rewritten.

### Bounded GitHub transport and identity

- Pin the supported API version, API origin and authorized repository. Read repository metadata to bind full_name and numeric identity; reject silent redirects/target changes. Do not expose an arbitrary URL/header override in the CLI.
- Completely enumerate relevant issues, milestones, membership and comments using validated next links, finite page/response/time bounds and duplicate/cycle checks. Allow only the confirmed repository's canonical or ID-based equivalent pagination route with unchanged filters. Incomplete lookup is unknown, never absence/uniqueness.
- Require concordant exact task title and managed body ID, rejecting conflicting/duplicate or quoted/fenced identity markers. Validate issue number, phase label and milestone association. Resolve unique milestones across states and validate expected title/description. Re-read selected objects immediately before mutation and verify identity/disposition/evidence afterward; do not claim a multi-request operation is atomic.
- Task mode reconciles evidence then completed closure. Milestone mode verifies the entire expected issue set, each completed reason and matching evidence, no unexpected associated issues/PRs, review/report handoff and required predecessor closed states. Zero open_issues is an additional readback check, never the acceptance authority.
- Establish finite request/body/overall execution bounds, response schemas/size limits, cancellation and sanitized structured failures. Classify access, rate, policy/validation, service and transport failures. Safe read retries are bounded; provider timing takes precedence and an unavailable delay returns a concrete deferred state. Serialize dependent effects and pace repeated mutations where required.

### Interruption, concurrency and results

Use a short-lived exclusive lock in the Git common directory to prevent overlapping local invocations/worktrees; retain only ownership metadata, not a progress journal. Normal completion/error cleans up only its own lock. Never guess that a stale lock or remote operation is safe to discard. The caller still establishes exclusive ownership across other machines/clients; no unsupported exactly-once guarantee for comment POST.

After an uncertain comment/PATCH, read exact state/comments before any further transition. Reuse observed applied effects and perform no blind write replay. If effects remain unknown, return them explicitly and require read-only reconciliation or independently established resolution before another mutating attempt. Reconcile-only reports missing/conflicting/unknown work without creating it.

Return versioned JSON and documented exits distinguishing verified changed/already-matched state, blocked/rejected input or prerequisites, and pending/unknown hosted effects. Preserve known successful effects, the affected object, safe classification/status/correlation and next eligible retry timing. Exclude credential/raw response bodies and unrelated data. Imports/help have no credential, Git, network or mutation effects.

## Documentation and workflow integration

Keep the adjacent guide complete for the CLI, request/result schemas, trust/precondition boundary, protected inputs, ownership/locking, interruption and platform requirements. Keep general provider policy in github.md and task/milestone lifecycle policy in their current bounded references. Add concise selection/invocation/result routes to the forge entry/backend/issue/milestone owners; no second full closure workflow or trivial reference fragments. The manager retains coordination/authentication, forge retains hosted writes and implementation retains completion evidence/publication.

Update source acceptance commands, the affected packaged README utility note where useful, required script/guide/shared-module archive membership and snapshot byte/exclusion checks. Add a dedicated native Windows CMD/Linux Node 22/24 CI matrix for the new utility and include shared-module changes in relevant triggers. No new skill/provider, presentation redesign, manifest/version change or release is needed: existing capabilities gain an optional execution mechanism.

## Ordered actions and evidence

| Action | Findings and outcome | Required checks/dependency |
| --- | --- | --- |
| V-001 | Publish this complete accepted plan/authority and checkpoint before source implementation. | Confirm clean published review source and existing parent; no implementation in planning checkpoint. |
| V-002 | Extract shared protected-token validation, preserve the Git utility API and add the import-safe forge boundary. | Existing Git contracts and direct shared-input/native fixtures; preserve formats/protection, no network/store changes. Publish/read back. |
| V-003 | Implement strict request/target, pagination/identity, evidence/closure reconciliation, bounded transport, locking and structured outcomes. | Establish meaningful failing corrected-behavior observations against the original candidate before behavior changes; write new contract fixtures before their implementing paths. Test normal/negative/interruption paths and preserve actual RED/GREEN chronology without treating import/setup errors as behavioral RED. Publish coherent tested checkpoints as needed. |
| V-004 | Complete in-code/CLI docs, forge workflow routes, package/snapshot contracts, acceptance commands and native CI. | Trace caller/utility boundaries; exact package membership/bytes/exclusions, doc examples/help and native Windows CMD/Linux matrix. Publish/read back. |
| V-005 | Focused code/content/interface review, affected regressions, full support/publisher suites, structure/current links, offline manifest and exact reproducible archive checks. Repair in-scope defects and repeat affected checks. | Assess all accepted findings and representative success/negative/recovery contrasts. Separate synthetic/native behavior, source review and unrun live/client claims. |
| V-006 | Finalize current dispositions, revision evidence, exploration/index/HANDOFF and publish completed execution. | Preserve original candidate/probes and all other closed records; verify clean published branch. Remain open/unmerged for the human. |

Campaign action IDs are not executable product task IDs. Each owned checkpoint includes its actual evidence and is pushed/read back before further work or another commit. No postponed batch publication.

## Acceptance contrasts

1. Harmless import/help and invalid CLI/request versus an eligible explicit repository/root/remote, including spaced/Unicode paths and UTF-8/BOM input.
2. Protected ignored/untracked native Windows/POSIX credential versus tracked, broad permissions, symlink/outside/nested-worktree or malformed input; no secret-bearing error output.
3. Later-page matches/duplicates, PRs, contradictory markers, malformed/looping/foreign pagination and changed identity versus a unique complete managed mapping.
4. Valid caller handoff plus exact issue/evidence versus missing expected work, foreign membership, wrong reason, unpublished/unverified eligibility, missing review/report and unmet phase-review predecessors.
5. First execution versus already matched rerun, duplicate/conflicting evidence, applied-but-disconnected comment/PATCH, failed readback and reconcile-only; preserve known effects and block unknown replay.
6. Local contention/worktree concurrency and interrupted lock versus supported exclusive ownership; no automatic stale-lock theft or distributed exactly-once claim.
7. Delayed/stalled headers/body, malformed/oversized successful responses, rate/access/policy/service failures and finite cancellation/budgets; no blind mutation retries or raw sensitive diagnostics.
8. Existing Git utility, full package/archive/snapshot contracts and native Node 22/24 Windows CMD/Linux behavior remain valid after shared extraction and integration.

Use deterministic synthetic fixtures and actual native local/CI execution without real credentials or live issue/milestone changes. An isolated agent/client or live-provider trial is not selected; record it as Not run. If native CI or a required platform facility blocks, retain the actual incomplete evidence rather than infer Windows success from Linux. Final reporting uses verified implemented source and actual run identities, not a green test count as a substitute for closure eligibility.
