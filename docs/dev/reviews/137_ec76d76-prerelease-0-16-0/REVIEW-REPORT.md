# Comprehensive prerelease review report

Campaign **137_ec76d76**. Baseline: `ec76d76cd1177e3ff0b02321aa462b7ed731eb08`. Intended version 0.16.0. [Plan](REVIEW-PLAN.md).

Status: opened; U-001–U-003 pending. No findings or passes claimed before assessment.

## U-001 — Package, documentation and charts

Assessed source: opening `bb897f7e2593f97a5dbb349d3555bbd826d45d8e` (product source equals starting baseline). [Coverage inventory](COVERAGE.tsv) accounts for all 168 distributed files, 15 skills and 120 Markdown files. Entry routes name all 89 own reference modules; source inspection distinguishes entry duties, coordinator procedures, focused owners and project-activated environment assets. README Quick Starts match after destination normalization and expose all ten standalone prompts, with explicit Tetris/calculator guide collections.

[Source audit](source-audit.json): 141 current Markdown owners, 1,108 resolving local links, zero errors, contextual project-template links classified separately, 17 SVG assets parsed. Structural validator exits successfully: zero errors, 67 bundled sibling-reference warnings; these do not certify client handoffs. [Chart rendering](chart-rendering.json): all eight Mermaid 11.12.2 diagrams render using isolated Chromium 153 and Playwright; contact sheet inspected for labels/flow. A local third-party browser package required explicit safe extraction after its asynchronous extraction/launch failed; this is diagram evidence only, not target-client or app acceptance.

### R-001 — Recent campaign navigation rows are outside the table

- **Type / priority / confidence:** documentation defect; low; high.
- **Baseline location:** `docs/dev/reviews/README.md`, paragraph beginning "New campaigns use" after campaign 130, followed by rows 131–136; the current opening row 137 continues the same broken structure.
- **Observation / consequence:** prose and blank separators terminate the table. Later rows lack a header/delimiter, so Markdown renders navigation as raw pipe text rather than table rows.
- **Correction owner:** source documentation under this campaign. Move the existing explanatory paragraph before the table and keep all campaign rows contiguous, without changing historical row content or closed packages.
- **Objective recheck:** exactly one header/delimiter, every campaign row in one contiguous table; links resolve and prior closed package bytes unchanged.
- **Disposition:** confirmed; accepted for repair under the human's run-and-fix request.

No other confirmed U-001 defect. External platform docs and historical acceptance/transcripts are not revalidated; source inspection/structural/rendering evidence remains distinct from live workflow/client acceptance.
