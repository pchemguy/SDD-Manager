# Comprehensive SDD Manager review plan

## Campaign and scope

- Campaign: `072_8a534b2`; reviewed baseline `8a534b21f6318f0b76b11a19783f7d40ca94d698`.
- Working branch/directory: `revision/072_8a534b2-comprehensive-review` / `docs/dev/reviews/072_8a534b2-comprehensive-review/`.
- Creation parent and eventual target: `main`; no integration or closure is selected by this review request.
- Request: open and run a comprehensive review of the current project, including the continuity extension and affected interfaces.
- Outputs: this plan, [review report](REVIEW-REPORT.md), [coverage inventory](SOURCE-INVENTORY.md), campaign-owned reproducible evidence where useful, current HANDOFF and shared campaign navigation.
- Authority: source inspection, bounded local checks and publication of review records/continuity metadata. Do not repair the plugin, acceptance or publisher source. Live agent/client/provider acceptance, product repository mutations, release operations and merge are excluded.

## Criteria and evidence

Apply Agent Package Author's plugin/skill content and validation criteria, Technical Writing Assistant's software-documentation/composition criteria, current source instructions and the plugin development contract. The mode is a source/code review with local verification, not independent external research. Assess public-standard conformance only against the supplied pinned schema and explicit validator scope; do not treat client behavior as proven by it.

Check responsibility/selection boundaries; progressive loading; dependencies and actual package inclusion; procedure order and return; authority/HIL and scoped future decisions; task/document atomicity; per-commit publication; branch/parent integration; hosted identities/readback; verification and acceptance evidence; wording/organization/duplication; source versus package and human versus agent audiences. Judge length by decision burden, not an arbitrary ceiling.

The package inventory must account for all 139 files, including all 15 skill entries and 78 reference modules. Review Markdown content and consequential caller/owner interfaces with risk-based depth, recording full versus targeted readings per file; structurally inspect metadata/assets. Record full-content, targeted code/interface, structural-only, excluded and unassessed depth separately. Supporting tests run as suites; execution does not imply every test body received a full content audit.

Closed campaigns/features/steering records are frozen and excluded from content loading and compatibility checks. Discover their paths/identities and verify preservation through Git only. Also exclude AI logs, ignored local release preparations, credentials, prior test run results and unrelated external sources. Current demos/prompts are user documentation, not evidence that a consumer ran them successfully.

## Review units

| Unit | Scope | Criteria / representative contrasts | Evidence and checkpoint |
| --- | --- | --- | --- |
| U-001 | Manifest, package/shared entry, root/full README, source contract/navigation, all coordinator/orientation instructions and templates | Direct versus composite entry; known versus lost context; checkpoint plus later commits; one/multiple branch candidates; parent/child return; narrow/read-only requests; composition and loading | Content/interface review, manifest/metadata/link/routing inventory and bounded native reproductions where necessary; publish report. |
| U-002 | Conventions, design, specification, planning and task derivation entries/references | New/resumed preparation, separate HIL and QC, four-file initialization, first approval/later revision, task granularity and explicit review tasks, component/document boundaries | Package-wide content/interface assessment plus both sides of preparation handoffs; publish report. |
| U-003 | Implementation, TDD, verification, docs, steering, feature incorporation, reporting and hosted task lifecycle | Task/range selection; atomic review-task handoff; interrupted/invalid completion; partial/complete boundary; changed grants; issue/milestone readback; archive/ownership; evidence claims | Package-wide content and interface assessment; selected local reproductions/tests; publish report. |
| U-004 | Forge release/package interfaces and all seven .github source/config/test files | Notes freshness/curation; exact commit/tag/body; one publisher; build/package exclusions; missing asset; recovery/idempotence; offline schema boundary | Source/configuration review, publisher suite and exact baseline package build; publish report. |
| U-005 | TextStats coordinator/docs, catalog/consumer/assessor interfaces, harness/scripts and supporting tests | Core versus repository-only continuation; genuinely separate receiver, no injected expected state; variant accounting; immutable pins; interruption/readback; helper versus consumer evidence | Complete inventory, targeted critical code/contract review, catalog/support suite, negative/sensitivity contrasts; publish report and consolidate. |

U-001 establishes composition, U-002 preparation, U-003 execution interfaces, U-004 release/publisher behavior and U-005 evidence validity. Revisit an earlier claim only when later evidence changes its assessment; retain finding IDs and original observations. All units must have coverage/disposition before claiming the review complete.

## Tooling and findings

Use read-only source/Git inspection and disposable local fixtures. Run current support/publisher suites and the offline package validator; check actual archive members, local links, module routing and metadata. Record exact source/environment, failures, repairs to the review's own probes, counts and limitations. A source-only campaign may author diagnostic probes, but does not edit reviewed production instructions to make a check pass.

Each finding needs stable ID, baseline location, type, priority, confidence, observation/consequence, bounded correction owner, dependencies and objective recheck. Separate confirmed source defects from recommendations, design choices, pre-existing disclosed boundaries and unrun behavioral coverage. Include no-finding coverage and residual uncertainty. Do not infer behavioral failure from missing tests or behavioral success from passing helper tests.

## Persistence and stopping

Publish this opening before review execution. After each unit, commit the updated report/inventory and any review evidence, push and verify the exact remote tip before further work or another commit. HANDOFF retains entry context; incremental unit progress belongs to the report. At the final review checkpoint, refresh HANDOFF with results and pending revision decision, publish and return the review.

Leave the campaign open and unmerged. Stop before preparing or executing remediation unless subsequently selected; do not alter the reviewed package, acceptance or publisher while assessing it.

## Review completion

U-001–U-005 and consolidation are complete at the retained report checkpoint. The inventory accounts for 317 baseline paths, including the 139-file package, with performed depth per file. Four findings remain proposed (three Medium, one Low); unit publication and actual verification evidence are in REVIEW-REPORT.md. No remediation, live acceptance, integration or campaign closure was performed.
