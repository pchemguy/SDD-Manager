# Comprehensive prerelease review report

Campaign **137_ec76d76**. Baseline: `ec76d76cd1177e3ff0b02321aa462b7ed731eb08`. Intended version 0.16.0. [Plan](REVIEW-PLAN.md).

Status: opened; U-001–U-003 pending. No findings or passes claimed before assessment.

## U-001 — Package, documentation and charts

Assessed source: opening `bb897f7e2593f97a5dbb349d3555bbd826d45d8e` (product source equals starting baseline). [Coverage inventory](COVERAGE.tsv) accounts for all 168 distributed files, 15 skills and 120 Markdown files. Entry routes name all 83 own reference modules; source inspection distinguishes entry duties, coordinator procedures, focused owners and project-activated environment assets. README Quick Starts match after destination normalization and expose all ten standalone prompts, with explicit Tetris/calculator guide collections.

[Source audit](source-audit.json): 141 current Markdown owners, 1,108 resolving local links, zero errors, contextual project-template links classified separately, 17 SVG assets parsed. Structural validator exits successfully: zero errors, 67 bundled sibling-reference warnings; these do not certify client handoffs. [Chart rendering](chart-rendering.json): all eight Mermaid 11.12.2 diagrams render using isolated Chromium 153 and Playwright; contact sheet inspected for labels/flow. A local third-party browser package required explicit safe extraction after its asynchronous extraction/launch failed; this is diagram evidence only, not target-client or app acceptance.

### R-001 — Recent campaign navigation rows are outside the table

- **Type / priority / confidence:** documentation defect; low; high.
- **Baseline location:** `docs/dev/reviews/README.md`, paragraph beginning "New campaigns use" after campaign 130, followed by rows 131–136; the current opening row 137 continues the same broken structure.
- **Observation / consequence:** prose and blank separators terminate the table. Later rows lack a header/delimiter, so Markdown renders navigation as raw pipe text rather than table rows.
- **Correction owner:** source documentation under this campaign. Move the existing explanatory paragraph before the table and keep all campaign rows contiguous, without changing historical row content or closed packages.
- **Objective recheck:** exactly one header/delimiter, every campaign row in one contiguous table; links resolve and prior closed package bytes unchanged.
- **Disposition:** confirmed; accepted for repair under the human's run-and-fix request.

No other confirmed U-001 defect. External platform docs and historical acceptance/transcripts are not revalidated; source inspection/structural/rendering evidence remains distinct from live workflow/client acceptance.

## U-002 — Lifecycle and consequential handoffs

Assessed published source `7c7dbbff1045388ecf70c4056d05d53778fc094a`; product instructions remain baseline bytes. Source traces compare each canonical owner with its entry/projection and adjacent owner. These are source assessments, not fresh-agent executions:

| Contrast | Owners inspected | Result |
| --- | --- | --- |
| Fresh main / scoped feature preparation | main-preparation, feature-preparation, design/specify/plan/tasks entries | Nine mapped stages, reuse assessments, separate evidence/task owners and preparation integration gates agree |
| Interactive / autodoc / predefined autoloop / reset | doc-design-modes, human-document-review, preparation owners, templates, README/PLUGIN | Approval/delegation basis and DOCS/FDOCS-008 stops preserved; reset retains sources/decisions and reopens existing IDs |
| Tracking selected / declined / partial projection | tracking-decision, phase-activation, GitHub main/feature preparation and projection references | Selection remains distinct from access and observed readback; feature campaign markers and main-only helper limits explicit |
| Verified outstanding commit / known-invalid completion | implementation startup/completion and Git workflows | Push-first has bounded repair preflight; task result/evidence/initial checkbox atomicity and historical composition remain distinct |
| Completed selected range / incomplete phase / completed feature phase | implementation checkpoints, feature-delivery, feature-incorporation | No extra tasks to manufacture exits; retained feature branch, phase-matched incorporation and final-only archive |
| Scoped steering / unrelated integration / task transfer | steer entry/references, incorporation, workflow catalog | Amendment returns without task resumption; transfer requires both owners and preserves unique IDs |
| Ordinary / nested / reopened / interrupted Git work | revision modes, branch management, continuity, Git workflows | Recorded creation-parent return, explicit two-parent merge, published effects and no implicit parent resumption |
| Unavailable native / unavailable full browser / real feasible failure | check-selection, browser/Playwright project assets, environment recovery | Unavailable facility checks excluded by default with truthful limits; requested deliverables and other feasible checks retained |
| Wrong artifact names / draft partial upload / published conflict | packaging, release workflows/releases, release checks, manage workflows | Independent naming gate, script/code/doc repair and exact-source rebuild; no tag move/clobber or silent acceptance |

No additional confirmed defect. Existing explicit-source acceptance and installed-client discovery remain separate evidence gaps; no claim of native Windows or fresh consumer behavior. Environment policies remain project-activated assets, absent as loads/links from plugin entries and skill/workflow references.
