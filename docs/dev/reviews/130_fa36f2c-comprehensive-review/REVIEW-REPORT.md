# Comprehensive review report

Campaign 130_fa36f2c; baseline fa36f2c96ef1b0916f408e5976b21f8cb1a0aadb; working revision/130_fa36f2c-comprehensive-review; parent/return main. [Plan](REVIEW-PLAN.md), [inventory](package-inventory.json).

## Opening and coverage

Campaign 129 is closed through the verified published main merge at this baseline, with exact source-tree equality, five merged snapshot checks and current links/scope checks. The retained source branch and closed records remain unchanged. Allocated 130 after checking repository-wide package/ref reservations through 129. Inventory contains 168 package files, including 15 skills and 120 Markdown files.

U-001–U-004 are pending. Review/fix/close is authorized; findings and verification remain unperformed until recorded below. Structural/source/controlled execution and unrun consumer/client/provider evidence will stay distinct.

## U-001 — Package, entry routing, resources and navigation

Assessed the complete 168-file package inventory, manifest/interface paths, all 15 skill entry-to-reference maps, all 120 package Markdown owners and selected current source/demo guides (139 Markdown owners total). Every skill's reference inventory is explicitly named in its entry (83 references total); no unnamed module was found. Offline plugin validation reports zero errors and 67 bundled cross-skill-reference warnings, which correctly do not certify client handoff. Manifest icon/logo paths exist and all 17 SVG documents parse.

The [resource audit](resource-audit.json) resolves 1,049 actual local links/anchors with zero remaining issues and records five target-context template links separately. The first scan treated two inline-code root README examples as live links; excluding literal code corrected those false positives without changing source. Template links describe copied project-level policy locations and are not asserted as portable installed-client execution. Checked package/source boundaries, both READMEs' current demo/mode/asset descriptions, advertised template resources, complete reference availability and project-policy activation: plugin entries/skills contain no links to the four project-only policy/environment assets. No source-only runtime dependency or nonstandard automatic PLUGIN discovery claim was found.

No canonical defect found in U-001. This is complete inventory/structural/routing coverage plus targeted composition assessment of entries and user/source projections, not an exhaustive live semantic trial of every module or verification of external URL availability. User-specific target files, client/plugin loading and actual browser behavior remain outside the executed evidence. U-002 will assess semantic cross-owner lifecycle contracts; U-003 owns source tooling/tests.

## U-002 — Composite workflow and owner handoffs

Reviewed canonical entry/owner transitions for main and feature preparation, mapped modes/approval/QC, task execution/range/tracking/persistence, revision/nesting/reopening, steering, incorporation/archive, release placement and continuity. Fresh/preapproved/delegated, partial-range, two-phase feature, blocked/uncertain operation, resumed checkpoint and assessment-only contrasts preserve actual scope/authority and distinct acceptance/readiness/publication states. The current feature stage/mode/package/phase mapping is coherent in those primary owners; root initialization is not replayed and no preparatory feature README or special old-format support is introduced. No consumer execution is inferred from these source walkthroughs.

Two medium-priority cross-owner instruction defects require scoped repairs under the human's review/fix grant:

### R-001 — FDOCS issue lookup can fall into product-task lifecycle

- **Location:** skills/sdd-forge/references/github-issue-lifecycle.md opening/Resolve for implementation, github-feature-preparation.md Project and read back, and github.md operation routing at baseline fa36f2c.
- **Observation:** The generic issue lifecycle redirects main DOCS issues but does not redirect campaign-scoped FDOCS. Its default requires product task identity markers and TASKS/FEATURE-TASKS implementation evidence. The new feature backend defines campaign-qualified titles/associations but no matching machine scope markers or explicit lookup entry point.
- **Consequence:** A direct FDOCS issue lookup/closure can require product acceptance evidence or fail/ambiguously match repeated stage IDs across campaigns. Title/milestone alone should not establish mutable issue identity.
- **Correction:** Add an explicit feature preparation lane to generic lookup/backend routing; define stable task plus feature-campaign scope markers, title/marker/source/milestone validation with complete open/closed pagination and PR exclusion. Preserve the direct supported API/CLI path and unsupported main-helper boundary. Do not add an issue-map registry or legacy-format migration.
- **Recheck:** Same FDOCS stage in two campaigns resolves only with exact selected campaign/source/scope; missing/conflicting/unmarked candidates block instead of guessing. Closure/reset requires preparation evidence, not product implementation checks. Confidence: high; Status: Accepted, repair pending.

### R-002 — Generic QC report clause conflicts with brief evidence ownership

- **Location:** skills/sdd-manage/references/document-qc-gates.md Stage handoff table and step 5; sdd-design/references/feature-brief.md Content/readiness and preparation steps.
- **Observation:** FEATURE's row records assessment in FEATURE_PREPARATION, and its brief owner expressly introduces no separate brief QC report. The following generic step 5 nevertheless unconditionally instructs an adjacent root report. FEATURE-QC-REPORT now has a separate whole-package FDOCS-009 role.
- **Consequence:** A literal agent can create an unnecessary brief report or confuse early brief assessment with later whole-feature-package readiness.
- **Correction:** Scope adjacent-root reports to the established SPEC/PLAN/TASKS report contracts and state FEATURE's concise assessment belongs in its preparation record; reserve FEATURE-QC-REPORT for the whole-package stage. Preserve technical assessment and human checkpoint requirements.
- **Recheck:** FDOCS-002 retains source/assessment/acceptance evidence without extra report, while FDOCS-009 still requires the actual whole-package report and cannot inherit a brief-only Ready claim. Confidence: high; Status: Accepted, repair pending.

No further canonical defect was identified in the assessed handoffs. This unit is a comprehensive lifecycle/source assessment with targeted deep reads at changed/high-risk interfaces, not a line-by-line proof of every instructional paragraph or native/client behavior. Frozen campaigns were not opened for current-validity assessment.

## U-003 — Source tooling, utility contracts and CI

Executed the declared suites against unchanged baseline package/tooling on Linux: 139 support tests pass (23.653 s), 50 publisher tests pass (3.663 s), and 138 Node utility tests pass (23.578 s): **327 passing tests**. Seven Windows shell contracts are skipped on Linux, not passes. Node syntax checks pass for all nine bundled modules; the Python process supervisor and source publisher parse. Package documentation/transfer is exercised by the support suite; publisher tests cover source/schema/archive and curated release-handoff behavior.

Targeted source inspection covered protected token containment/exclusion/format and identity checks, bounded no-shell Git supervision and cleanup, GitHub endpoint/capability/response/error and uncertain-write handling, projection/closure input boundaries, publisher pinned-tree/archive/member validation and CI checkout/permission/test separation. Helpers do not claim native feature-preparation projection support. No runtime/tooling defect found in these checks; this is test/targeted trust-boundary coverage, not a new full adversarial security audit.

Inspected five workflow definitions and release permissions/manual dispatch. Public GitHub connector reads confirmed the referenced official actions/checkout@v7, actions/setup-python@v7 and actions/setup-node@v7 action manifests exist at review time (2026-10-29). Those mutable action refs were inspected for availability, not pinned/changed or executed by this review. No release was dispatched and no product/provider object was mutated. Native Windows execution, full CI matrix results for this new review, fresh-agent/client activation and live feature tracking remain unrun.

Review findings remain the two U-002 instruction handoff defects R-001/R-002. No test failure or package/schema defect was observed in U-003. Proceed to their authorized coherent repair and final affected rechecks; do not repeat unchanged utility runtime suites unless a concrete code risk appears.
