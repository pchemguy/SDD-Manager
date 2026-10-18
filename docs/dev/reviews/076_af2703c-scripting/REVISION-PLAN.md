# Revision plan — GitHub closure utility

Current scope: the completed C-001 plan/evidence below is retained. The human subsequently accepted related C-002 tracking projection work and authorized final campaign integration/closure, superseding the earlier open/unmerged stop. The complete amendment plan follows [C-002 revision](#c-002-revision--tracking-projection).

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

## Execution status

V-001–V-006 are complete; [execution evidence and finding dispositions](REVISION-REPORT.md) pin implemented source 61a7798c10ad6355003a5997b72b446141d5c4db, actual native Windows/Linux runs, regressions and exact reproducible package checks. Script placement, shared protection, documentation and integration into existing SDD Manager workflows/package are implemented. The final records checkpoint is to be published/read back before stopping.

The campaign remains open/unmerged as requested. No live hosted closure, real-token utility trial, release, external demo repair or parent implementation continuation is selected.

## C-002 revision — Tracking projection

### Authority and source

Amendment checkpoint e55d6ac707d66f5451eb2cf08ac58ad90c6a90f6; [accepted analysis R-009–R-015](REVIEW-REPORT.md#candidate-c-002--tracking-projection) published at 5cfd067ed751fe47b81da5836ff7b7076a741bfc. The original campaign ID/baseline/opening, branch and main return target remain unchanged. C-002 shares the hosted tracking objective with C-001 and belongs here; it is not a reopening or nested campaign.

The human authorized full planning, fixes, professional documentation and integration, execution and closure; then a new comprehensive SDD Manager review/revision campaign through closure. This includes needed routine design choices, source/package/CI changes, checks, per-commit publication and explicit verified campaign merges. No additional approval pause is needed for this stated sequence. No live test projection/closure, external demo repair, release/version change or installed-client trial is selected.

All seven added findings are accepted. Retain original C-001 review/source/probes and actual historical verification. Its utility API and behavior remain supported; extract shared mechanics with regressions. Do not rewrite the supplied project's delivery plan or carry its domain choices into plugin defaults.

### Result and cohesive boundaries

| Owner/path under skills/sdd-forge/scripts | Contract |
| --- | --- |
| forge-project.mjs | Optional Node 22+ CLI/import-safe hosted projection of exactly one eligible implementation phase or docs-main preparation. Project is the verb; activation/eligibility remains coordinator-owned. Create absent objects, reuse exact managed objects and verify; conflicts/renames/unsupported layouts return to the existing backend rather than overwrite user material. |
| forge-project-draft.mjs | Local input-authoring CLI. Extract canonical hierarchy IDs/names/parentage/status and source identity into an explicitly incomplete JSON draft. No credential/API access or semantic dependency inference. Output stdout or an explicit exclusively created file; docs-main pre-write output must stay outside the target repository. |
| projection-input.mjs | Cohesive canonical-list reader, request validation, draft builder and outgoing template renderer. No hosted effects. Used by both projection entries; schema/format contract in the input-authoring guide, not duplicated in generic references. |
| github-client.mjs | Shared bounded GitHub transport, pagination, metadata binding and safe errors. Separate enforced completion/projection capabilities; closure cannot create labels/issues/milestones and projection cannot close/reopen/edit existing objects. No arbitrary destination/header override. |
| forge-runtime.mjs | Shared native root/remote validation, bounded local Git, request/source reading, protected-token use, Git-common-directory locking and main-entry identity. Preserve existing closure CLI/API outcomes and token protections. Do not import a mutating executable for a general helper. |
| forge-project.md | Complete execution/effects/platform/JSON result/recovery contract; routes to input authoring and existing lifecycle policy. |
| forge-project-input.md | Complete JSON shape, generated draft/template contract, agent enrichment, outgoing content review, source binding and supported canonical grammar. Local input preparation is a substantive workflow boundary distinct from authenticated remote execution. |

Keep task/milestone policy in existing projection/docs-preparation references, readiness in manager gates, brief composition in report and task semantics in task owners. These two guides own distinct complete workflows; use shallow caller routes, no trivial reference fragments or generic all-provider framework. Drafts/templates come from the schema-aware generator and central body renderer, avoiding parallel static examples as another implementation.

### Versioned handoff and outgoing template

Define schema_version=1, repository, kind (phase or docs-main), source (root=repo or plugin, relative path and SHA-256), phase (identity/name/brief description/color, or null for docs-main), milestones, tasks, external_task_ids and eligibility. Reject extra/missing fields, invalid Unicode/controls/markers/paths, duplicates, unsupported versions/IDs and excessive sizes before credentials/network. Bound the whole JSON/source to 1 MiB and selected arrays to 1000 elements.

Each milestone supplies id, name, kind (delivery, phase-review or docs-main), description and review_task (null for docs-main). Each task supplies id, name, milestone_id, role (delivery, milestone-review, phase-review or documentation), depends_on (task-ID array), prerequisites (nonblank semantic gate text), scope, acceptance and sources (explicit document-reference strings). The issue title/outcome/context and phase/milestone host names are rendered from validated identities; do not accept arbitrary outgoing URLs, body/header overrides or raw documents.

The phase label is generated from the selected phase name and stable ID. Milestone descriptions are agent-authored outcomes/exits; task bodies use one canonical generated section with the exact task marker, identity-derived outcome/context, scope, dependencies/prerequisites, acceptance/checks and selected sources. DOCS bodies additionally identify docs-scope=main and use native docs-main without implementation phase labels/review milestones. Bound GitHub field/body lengths and normalize LF deterministically. All sample prose/IDs remain abstract and explicitly illustrative.

Eligibility booleans state tracking confirmation, current document readiness, acceptance, publication, phase/preparation eligibility, exclusive execution ownership and outgoing-content review. The caller must establish those facts; true is an assertion, not independent authorization or proof. --apply requires all true and complete validated input. --check performs local validation/source binding and shows exact planned outgoing payloads without reading a credential or calling GitHub. --reconcile-only inspects complete remote state without hosted writes. Exactly one execution flag is required; unsupported semantics retain the backend route rather than falsifying the request.

The final source hash must match actual bytes. A repo-owned implementation/list source must also match committed HEAD bytes; remote containment/QC/approval are still caller-owned. Before docs-main repository writes, use the pinned running package's DOCS task template when no target list exists; on resume prefer the actual existing DOCS_TASKS and preserve its identities. Verify a plugin source is the bundled task template, rather than reading an arbitrary external path. Check exact selected tasks/milestones/order/names against the current canonical source; future phases remain outside the projection. Read the full owning hierarchy to identify dependencies; cross-list uniqueness and external_task_ids remain explicitly checked caller assertions.

### Structural extraction and agent work

Support the established exact-four-space Phase → Milestone → T-ID checklist grammar with matching phase heading/check item, and the predefined nine DOCS tasks. Ignore fenced examples and completion evidence as task declarations; reject malformed/missing/duplicate/ambiguous hierarchy instead of approximating a Markdown parser. Leave alternative established formats to agent-authored translation and the existing backend, with an explicit unsupported-format result. No dependencies are inferred from sequence, prose or numbering.

Drafts carry known identities/hash/status-derived context, false eligibility, and null semantic/review/dependency fields where needed. An agent reads actual TASKS/FEATURE-TASKS, PLAN/SPEC/layout/QC or the DOCS template/list, resolves dependencies and review roles, writes meaningful scope/acceptance/source text, removes no required tasks and checks post-task versus task-local gates. It must not merely set positive claims or copy stale prose. A draft cannot be submitted directly.

Validate dependency IDs, duplicates/self-reference and cycles among selected tasks; external_task_ids explicitly identify caller-verified prerequisites outside the owning list. Require a final milestone-review task per delivery milestone with its constituent dependencies, and a last single-task phase-review milestone depending on delivery reviews. Those are structure checks, not semantic assurance. The agent owns actual cross-milestone prerequisites, review/exit/publication gates and the resolution of circular or contradictory requirements.

### Hosted discovery, effects and recovery

Bind explicit native Git root and sole effective selected remote to the request repository, then GitHub metadata/numeric identity and observed visibility. Reuse shared protected-token handling unchanged on Windows/Linux. Read all relevant labels, milestones and issues across states using constrained pagination, duplicate/cycle/response/time bounds and no redirects. Exclude PRs from task matching but preserve/report foreign conflicts. Exact stable candidates must agree with title/marker/generated brief/parent fields; case-insensitive label collisions and multiple stable-ID candidates block.

Preflight the complete selected set before the first mutation so already observable conflicts do not leave needless partial writes. Re-discover each exact identity before POST and verify its complete post-create lookup/identity. Reuse exact existing label metadata, milestone description/title and issue generated section/associations, preserving suffix user material, unrelated labels/comments/assignees and all existing states. No PATCH/DELETE/closure or automatic field repair is selected for this utility; report an explicit conflict for the backend's authorized reconciliation. Unknown original content is not evidence of safe ownership.

Serialize/rate-pace writes, retain known created/reused objects and verified numeric identities, then perform fresh complete final readback. Do not use earlier creation responses as final proof. An uncertain create triggers lookup only, never POST replay; uniquely observed matching creation can be reused, while absent/contradictory/unavailable outcome stays unknown. A rerun after uncertainty is read-only until independently settled. Local common-directory locking covers linked worktrees; the caller controls other clients/machines. No exactly-once distributed guarantee.

Emit versioned JSON stdout with ok/code/stage/remote_state, repository/request identity, observed visibility, created/reused/unknown effects, current object associations/states and sanitized provider/retry metadata. Normal success means projection_verified, not product completion or permission to execute. Exit 0 for verified; 2 for pending/unknown; 1 for invalid/blocked/conflict. Preserve earlier effects when later verification fails. No required map/journal/log artifact or absolute output path; the caller may retain the exact result with existing workflow evidence.

Only reviewed rendered fields leave the machine; source bytes/hashes and local paths are not automatically uploaded. --check exposes the exact payload for content review, while normal result/error output omits full briefs/raw provider bodies/credentials. Reject the active credential's literal occurrence anywhere in request content before authenticated calls. The agent still excludes all other secrets/private inappropriate material. Repository visibility is reported, not treated as permission to disclose.

### Ordered amendment actions

| Action | Findings / outcome | Dependency and required evidence |
| --- | --- | --- |
| V-007 | Publish C-002 analysis, fit/naming/data-flow decision and original mechanics observations. | Seven controlled observations; three corrected-behavior sensitivity failures. Retain provenance limits and superseding human closure authority. |
| V-008 | Publish this complete interfaces/module/behavior/workflow/verification plan. | V-007 published/read back; no production source implementation yet. |
| V-009 | Extract shared GitHub/native execution support with unchanged completion capability; add canonical draft/template/request boundary. | Existing 35 completion and 27 Git recovery contracts; meaningful new structural/dependency/source/CLI RED tests before corresponding implementation. Harmless import/help and protected-input/native regressions. Publish/read back. |
| V-010 | Implement complete bounded projection/reuse/preflight/readback/uncertainty and local drafting. | Synthetic success/negative/recovery tests, later-page/duplicate/stale/foreign conflicts, actual Git/root/hash/protection/lock/output behavior, no live token/provider writes. Preserve initial failures and corrected results. |
| V-011 | Integrate professional in-code/adjacent docs, exact input templates and existing forge/manager/docs-preparation routes. | State caller boundaries, enrichment and pre-write-safe draft output; validate illustrative JSON/help/commands. Update required archive/snapshot resources, acceptance command and Windows CMD/Linux Node 22/24 CI; include shared changes in all relevant triggers. |
| V-012 | Review interfaces/cohesion/code and run affected/full source verification; repair in-scope defects. | Completion/projection/Git suites, full support/publisher, static catalog, package structure/current links, offline manifest and exact reproducible committed-source archive, native matrices and closed-record preservation. Distinguish source/synthetic/native/unrun client/live claims. |
| V-013 | Finalize both candidate dispositions, reports/navigation/HANDOFF and integrate/close campaign 076. | Every checkpoint published/read back; refresh main, inspect full proposed delta, explicit two-parent merge of complete verified tip, merged-state checks, publish/read back target, return to main. No post-closure edits to this package. |

Use one coherent verified commit per action or bounded tested checkpoint where needed; update revision evidence with actual source/checks and publish/read back before any further unit or commit. Campaign IDs are not executable product task IDs. Preserve all other closed packages by Git path/object checks, without loading their contents.

### Verification and continuation boundary

Test contrasting outcomes: harmless/draft versus complete apply input; native eligible root/token/hash versus wrong/stale/unsafe inputs; phase versus docs-main; later-page/ID-based links versus ambiguous/malformed pagination; exact reuse versus human-modified/foreign objects; initial apply versus idempotent reuse; applied/disconnected POST versus absent/unknown outcomes; preflight conflict versus partial later failure; linked-worktree lock contention; UTF-8/BOM/CRLF and spaced/Unicode Windows paths; finite header/body waits, response limits and provider retry timing; review/dependency roles versus missing/self/cyclic/unknown prerequisites. The ordinary utility may not broaden its capability just to make a fixture pass.

The subsequent comprehensive campaign begins only after verified 076 closure on main. Allocate its new identity from actual local/ref state, pin the integrated baseline, publish a review plan and assess the whole current SDD Manager plugin, selected source tooling/tests/CI and consequential interfaces, including this scripting addition. Track each bounded review unit with report/commit/publication; prepare its full revision plan, execute/verify corrections, explicitly integrate/publish and close. Do not retroactively maintain the then-closed 076 records or unrelated history. No product release or live hosted trial is implied.
