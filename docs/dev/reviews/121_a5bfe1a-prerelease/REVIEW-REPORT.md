# Comprehensive prerelease review report

Campaign **121_a5bfe1a**, initial candidate `a5bfe1a2e9c08424ebc3b4dd997f0150e68be11c`; [plan](REVIEW-PLAN.md). Review is in progress. Patch target: 0.15.4. Prior campaign 120 is closed and excluded from current-validity checks.

## U-001 — Workflow, content and public entry review

Assessed the current 160-file package inventory: 15 skill entries, 112 Markdown resources, 15 skill presentation records, 17 SVG and two PNG assets, two JSON files, nine JavaScript modules, one Python supervisor and two license files. All resource families are inventoried; semantic depth is concentrated on entry/owner handoffs and consequential preparation, execution, recovery and release boundaries rather than a line-by-line editorial rewrite of every reference.

Source review traced coordinator fallback without PLUGIN.md; interactive/autodoc/autoloop stop and reset rules; pre-write preparation tracking; per-document QC and separate human acceptance; one-task result/checkbox/publication; partial-phase stops; feature reconciliation; steering return; nested/reopened campaign preservation; and release-note/default-branch provenance. The six README diagrams agree with their adjacent rules on inspected transitions. No live diagram rendering or installed-client trial was run.

Fresh structural validation reports no format errors. Cross-skill warnings describe documented plugin-contained dependencies, not broken resources or proven host loading. Link scanning distinguishes fenced template examples from actual dependencies. The new Playwright and Vite modules are conditionally routed from implementation and verification; they preserve project coverage, trust/isolation rules, scoped repairs and the distinction between reported incidents, modeled checks and native evidence. No browser installation or Windows incident reproduction is claimed in this review.

Root/demo README entry paths and current source-only contributor instructions were inspected. Existing assets/templates preserve separate product documents, preparation evidence and task checkoffs. Closed reports were excluded from current-validity inspection.

### R-001 — Campaign navigation rows fall outside the table

Priority: Low. Confidence: High. Status: Verified under V-001. Location: `docs/dev/reviews/README.md`, blank lines between later campaign rows and prose preceding rows 120–121. These rows no longer belong to the initial Markdown table, leaving current campaign navigation as pipe-delimited prose. Repair the index layout without changing historical row contents or closed campaign files. Recheck: one table contains every campaign row, original row bytes/order preserved, explanatory prose follows the table.

U-001 otherwise identifies no confirmed blocking source defect. Unrendered diagrams and unexecuted live agent/client workflows remain evidence limits, not passing behavioral tests.

## U-002 — Runtime, tests and CI

Linux, Node 24.22.1, Python 3.12.14. Executed declared suites on the current campaign source (product bytes unchanged from initial candidate):

| Command group | Observed result |
| --- | --- |
| `python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v` | 139 passed |
| `python -m unittest discover -s .github/tests -v` after declared dependency installation | 50 passed |
| `node --test tests/git-auth-recover.test.mjs tests/git-publish.test.mjs tests/forge-close.test.mjs tests/forge-project.test.mjs` | 138 passed, zero skips |
| Windows shell unittest discovery | Seven skipped: native Windows CMD required |

Reviewed runtime boundaries for protected token input, process-supervised Git deadlines/cleanup, bounded GitHub transport and scoped mutations, forge projection/closure reconciliation, and exact-candidate publisher inventory/provenance. Tests exercise bad inputs, foreign identities, failed/uncertain mutations, lost responses, timeouts, process descendants, archive/path/content mismatch and release ancestry. No confirmed runtime defect was found. Generated Python caches were removed from owned test paths.

GitHub metadata readback confirms the repository, main default branch and push access. Successful hosted runs: Git authentication 40135010118; projection 40135010113; completion 40135010138; Windows shell 40135010115, all at `63f145f42303354a81677710c8fc93cdf1f67f48`. Git object comparison confirms those helper/test/workflow/policy paths are unchanged in this candidate. These are retained native CI results for identical components, not a fresh candidate-wide Windows run.

The two bootstrap links flagged by the lightweight scanner are inline example Markdown intended for the target repository README, not package-relative dependencies. Structural and local test success does not certify live agent judgment, client installation, arbitrary downstream projects or the reported Windows/Vite incident.
