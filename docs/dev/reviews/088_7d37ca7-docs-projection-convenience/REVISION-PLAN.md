# Main documentation projection convenience

## Campaign and authority

Campaign 088_7d37ca7 starts at 7d37ca7606eeab1c17abe2eeb2157d99f2f6391c. Creation parent and integration/return target are `revision/081_5b2442e-prerelease`; working branch is `revision/088_7d37ca7-docs-projection-convenience`. The human requests implementation of the single-call docs-main path, optional tasks using the template-created document by default, default origin, and clear workflow/CLI documentation. This is directly accepted focused maintenance, without a fabricated review stage or task IDs. Parent 081 stays open/suspended.

## Accepted contract

Extend existing forge-project.mjs rather than add a shell wrapper. For docs-main without --request, build the validated request in memory: use explicit --tasks, otherwise repository docs/dev/DOCS_TASKS.md; only absence of that default file selects the bundled DOCS task template for initial pre-write preparation. Invalid/unreadable/explicitly missing sources fail. Preserve the selected source hash and committed-source enforcement. No intermediate JSON file or target document creation occurs.

Default --remote to origin in projection and draft CLIs for both scopes; preserve explicit remotes and phase's reviewed-request requirement. Share docs source selection with the standalone draft generator. Preserve explicit-request compatibility; reject combinations that would silently ignore inputs.

Keep --check, --apply and --reconcile-only distinct. Request-free --apply additionally requires --confirm-eligibility, an explicit caller assertion of all existing scope-specific prerequisites after actual verification; no generated draft grants eligibility. Explicit requests retain their existing eligibility fields. Preserve transport, credential, deadline, locking, conflict, uncertain-write and final-readback checks.

## Ordered actions and verification

| Action | Owner and changes | Completion evidence |
| --- | --- | --- |
| A-001 | sdd-forge / sdd-tdd: add request-free docs-main input, shared source selection and origin defaults with parser/source/hosted regression cases | Observe new failing tests before implementation; projection and shared completion suites pass. Cases cover default/alternate remotes, local/template/explicit sources, malformed/uncommitted input, no repository writes in preview, modes, eligibility, input conflicts and unchanged phase/JSON paths. |
| A-002 | sdd-docs: update existing CLI/input guides, forge discovery and GitHub main-preparation route, contributor test guidance as needed | Document exact defaults, bootstrap fallback, confirmation meaning, explicit request route and mode effects; execute examples against controlled repositories, inspect changed links and bounded reference composition. |
| A-003 | sdd-verify / sdd-manage: verify complete delta and native matrix, finalize evidence, explicitly merge/publish back to parent | Native Windows CMD/Linux Node 22/24 projection suite, relevant support/publisher checks and exact candidate package validation; closed records preserved; per-commit exact publication, merged-state checks and clean parent return. |

Publish/read back every owned commit before further work. Keep detailed procedure in existing guides, shallow workflow routing, and examples abstract. Do not change PowerShell.cmd, token/authentication behavior, package version or release inputs; do not modify demo repositories, release/tag/dispatch or install the plugin. Final integration returns control without resuming 081. Runtime/provider/installed-client evidence remain distinct.
