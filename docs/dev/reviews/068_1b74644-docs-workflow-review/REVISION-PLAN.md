# Align main documentation workflow handoffs

## Campaign and decisions

- Campaign: `068_1b74644`.
- Starting/reviewed baseline: `1b74644cb0b97e074cc407086be13b5597620b80`.
- Planning source: `f208280946548d0b60b047ec335865dd088bbb86`; runtime source remains identical to the reviewed baseline.
- Working branch: `revision/068_1b74644-docs-workflow-review`; eventual integration target: `main`.
- Canonical findings: [review report](REVIEW-REPORT.md). Coverage: [inventory](SOURCE-INVENTORY.md).
- State: V-001–V-005 complete under “Run, do not close”, starting from published plan commit `25df9832b8859a1117a45a31d195b754f988dfc2`. Campaign remains open and unmerged.
- Execution evidence: [revision report](REVISION-REPORT.md).

| Finding | Execution disposition | Intended outcome |
| --- | --- | --- |
| R-001 | Accepted | Checkpoint reminders preserve explicit scoped future preapproval. |
| R-002 | Accepted | Credential recovery can satisfy the hosted pre-write gate before durable repository storage. |
| R-003 | Accepted | DOCS and implementation task persistence reach their respective owners. |
| R-004 | Accepted | Preparation-only summaries agree on the main workflow's completion boundary. |
| R-005 | Exclude: not confirmed | Preserve the report's fixture/consumer distinction; no harness redesign or repair. |

No open finding is deferred. Acceptance defines the remediation scope; it does not claim implementation or verification.

## Scope and preserved decisions

Revise the located coordinator instructions and their affected entry/capability projections. Establish each correction in its canonical owner before updating summaries. Keep the changes local to the four findings; no section reorganization or new workflow module is needed.

- Keep GitHub tracking's default in the generated project AGENTS policy, with existing user overrides. Do not introduce a plugin-wide default.
- Keep enabled docs projection before every target-repository write, native `docs-main` and nine issues, first-approval task completion, later-revision preservation and final QC/merge/milestone ordering.
- Keep scoped preapproval distinct from QC, publication, tracking and implementation-range authority. An uncovered or revoked checkpoint still holds dependent work.
- Keep implementation's single-task closing commit and bounded audit. DOCS uses its own first-approval/QC persistence, not a waiver of persistence checks.
- Preserve all root/template AGENTS files, discovery protocols, assets, README files, manifest/version, publisher/harness code and closed campaigns. No finding requires changing them.

The package instructions themselves are the governing sources for these corrections. No project PROJECT, SPEC, PLAN, layout, TASKS or feature documents need creation or amendment. The existing plugin development contract remains an assessment input; no contract change is proposed.

## Ordered revisions

Use stable revision action IDs below; these are campaign actions, not executable product task IDs. Complete and publish each action's evidence checkpoint before the next action.

### V-001 — Separate documentation and implementation persistence gates

**Finding:** R-003. **Owner:** `sdd-manage`, with entry/capability projections maintained after the canonical callers.

Targets:

- `.agents/plugins/sdd-manager/skills/sdd-manage/SKILL.md`: Shared gates / Task closure.
- `.agents/plugins/sdd-manager/skills/sdd-manage/references/git-workflows.md`: Work and prepare the boundary.
- `.agents/plugins/sdd-manager/PLUGIN.md`: affected generic task-closure/audit reminders.
- `docs/dev/CAPABILITY-MAP.md`: generic task-contract/audit paragraph and affected ownership wording.

Qualify implementation closure/audit by its owning TASKS or FEATURE-TASKS. Route DOCS_TASKS first approvals and DOCS-009 evidence through the coordinator's existing main-preparation procedure. Keep result/evidence/checkbox and publication requirements visible without copying either procedure into the entries. Do not impose T-subject rules or historical implementation-composition exceptions on valid DOCS proposal/approval commits.

**Recheck:** Trace both direct coordinator and PLUGIN entry through fresh/resumed DOCS completion, a previously published unchanged proposal, package-QC integration and ordinary implementation integration. DOCS reaches main-preparation; implementation still reaches its audit and blocks malformed, split or bundled task closure. Inspect both callers and their linked owners, rather than matching keywords alone.

### V-002 — Correct preparation-only delivery handoff

**Finding:** R-004. **Owner:** `sdd-manage`.

Target: `.agents/plugins/sdd-manager/skills/sdd-manage/references/workflows.md`, Delivery strategy handoff.

Replace the unconditional design-docs stop with the established distinction: completed main preparation includes verified/published documentation integration and enabled milestone closure before the final preimplementation checkpoint; other preparation-only paths retain their design-docs stop. Link the main completion procedure rather than repeat its sequence. Preserve explicit earlier, unmerged and local-only limits and the separate authorization of an implementation range.

**Recheck:** Compare the delivery handoff, main operation row, branch integration gate and PLUGIN summary for completed main preparation-only, an early document stop, feature preparation-only, an explicit no-merge/local-only limit and preparation with an authorized implementation range. There must be one consistent stopping/integration decision for each case.

### V-003 — Join credential recovery to the pre-write gate

**Finding:** R-002. **Owner:** `sdd-manage`; provider-specific credential consumption remains with `sdd-forge`.

Targets:

- `.agents/plugins/sdd-manager/skills/sdd-manage/references/main-preparation.md`: Establish preparation before repository writes.
- `.agents/plugins/sdd-manager/skills/sdd-manage/references/credentials.md`: Find, request, and save; its narrowly scoped pre-write handoff.

Make the sequence explicit:

1. Use existing authenticated access first. Reuse a repository token only when its required protection/exclusion checks can be satisfied without a write.
2. If credential recovery is actually needed before docs projection, use an available protected transient client channel outside the target repository. Defer ignore-file changes and token persistence; do not weaken the pre-write gate or expose values in helper source, arguments, logs or evidence.
3. Finish and read back the complete hosted docs projection. After the gate and documentation branch setup, complete required conventional storage/exclusion through the existing credential protocol and persist owned ignore changes through normal scoped Git ownership. Temporary authentication must not be reported as durable persistence.
4. If no supported protected transfer is available, report the actual authentication blocker and retain pending projection. After interruption, read actual hosted/storage state before replaying either operation.

Do not redesign the shared token convention, change permission profiles, replace credentials for a policy/rate-limit failure, or infer tracking/publication authority from possession of a token.

**Recheck:** Trace existing authenticated access, an already safely stored token, a newly supplied token with no ignore file, unavailable protected transfer and interruption between projection and storage. No file/ref write precedes complete projection; durable storage resumes afterward with effective exclusion and actual outcome reporting. Use source walkthroughs or isolated synthetic fixtures only; no real credential or provider operation is required by this plan.

### V-004 — Align checkpoint reminders with scoped preapproval

**Finding:** R-001. **Owner:** `sdd-manage`.

Targets:

- `.agents/plugins/sdd-manager/skills/sdd-manage/references/document-qc-gates.md`: Human acceptance alongside QC, including the PLAN/layout handoff wording.
- `.agents/plugins/sdd-manager/skills/sdd-manage/references/repository-bootstrap.md`: Human review at startup.

Qualify pause instructions with explicit applicable future-checkpoint preapproval and link the existing canonical policy. Preserve separate PLAN/layout checkpoints, technical readiness, substantive reporting, Git publication, requested tracking and real pending human decisions. Do not recast broad continuation or Git authority as preapproval.

**Recheck:** Follow bootstrap, focused owner and QC handoff with no preapproval, covered checkpoints, unrelated scope, unmet conditions and revoked preapproval. Only genuinely covered checkpoints proceed without another acceptance pause; all other dependent gates remain intact.

### V-005 — Verify the combined revision and record disposition

**Findings:** R-001–R-004. **Dependency:** V-001–V-004 complete and individually published.

Recheck the four handoffs together and review the full campaign diff for scope drift. Record each action's actual paths, checks, tested source, limitations and commit/publication in the revision report. Update the canonical finding dispositions only when their stated source rechecks pass. Leave R-005 not confirmed; do not convert defined acceptance scenarios into observed passes.

## Verification and evidence

The action rechecks above are required source-level scenario assessments. Record selected inputs, loaded callers/owners, their actual instruction sequence and the resulting gate/stop; final wording or a positive validator exit alone is insufficient.

For the coherent revised package, run the contributor checks from the repository root using the supported runtime and the declared publisher dependency:

```text
PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v
PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s .github/tests -v
PYTHONDONTWRITEBYTECODE=1 python acceptance/textstats/cases/assessor/catalog_tools.py validate
```

Also verify affected Markdown links/anchors and formatting, reference routing and plugin-root containment; run the author package validator and the native local package build with pinned schema validation. Compare emitted package files/bytes against the tested Git source and TextStats snapshot, including unchanged assets and source-only exclusions. Keep temporary outputs outside the repository. No new tests that merely assert prose wording are planned.

Record interpreter/dependency versions, exact tested commit and observed results. The review's 137 support and 34 publisher passes establish the earlier source only; rerun the required checks for the revision and affected merged state. Cross-skill warnings retain their client-loading qualification. Live consumer, provider and installed-client acceptance remain out of scope.

## Execution, publication and stopping

The current stopping point is completed V-001–V-005 with published execution evidence, campaign 068 open and no merge.

Retain this campaign identity/branch and baseline, establish the actual current source/target state, then perform V-001 through V-005. Source changes belong on this revision branch; campaign records do not need a design-docs branch or a preliminary main merge. Commit each action with its updated evidence, push and verify remote containment before further work or another commit. Preserve unrelated work and stop affected progression on unresolved publication.

The current request excludes integration and closure. Leave the verified changes and retained records on the published revision branch; do not merge into main, close the campaign or resume other work.
