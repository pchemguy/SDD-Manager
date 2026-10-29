# Comprehensive revision evidence

Campaign 130_fa36f2c; baseline fa36f2c96ef1b0916f408e5976b21f8cb1a0aadb; branch revision/130_fa36f2c-comprehensive-review; return main. [Plan](REVISION-PLAN.md), [review](REVIEW-REPORT.md).

## V-001 — FDOCS identity routing and brief/package QC boundaries

Corrected the two accepted medium-priority instruction defects. Generic issue lookup now routes FDOCS to the feature preparation lifecycle, whose exact campaign-qualified title, task markers, feature-scope marker, selected source and native milestone must agree. Added direct lookup rules with full open/closed pagination, PR exclusion, unique match/readback and explicit missing/duplicate/unmarked/conflicting failure. Bare stage IDs cannot silently select a campaign or use product implementation evidence/helpers. No new utility, issue-map file or old-format conversion introduced.

Scoped generic adjacent QC reports to SPEC/PLAN/TASKS root families. FEATURE's assessment/decision/source evidence remains in FEATURE_PREPARATION with no extra brief report; FEATURE-QC-REPORT remains the whole-set FDOCS-009 gate. Reporting guidance states the same brief/root/package distinction without weakening technical or human acceptance.

Source rechecks: same FDOCS stage in two campaigns requires exact selected scope; valid title without required markers does not pass identity; preparation closure/reset uses its own accepted/pass evidence. FDOCS-002 does not create an extra brief report, and brief acceptance/Ready cannot close FDOCS-009. Changes are instructions only; no consumer/client/provider behavior claimed. Observed affected checks: all 1,051 current actual local links/anchors resolve, no template/containment regression, five package-documentation tests pass and whitespace is clean. Final exact committed archive/schema rechecks are recorded in U-004 before closure.
