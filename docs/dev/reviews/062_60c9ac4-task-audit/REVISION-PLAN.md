# Task audit and forward recovery revision plan

## Campaign and accepted scope

- Campaign: **062_60c9ac4**; starting/reviewed baseline `60c9ac4b2fdab26eb51af79b1240c205195a8910`.
- Planning checkpoint: `0893da494fbfe43b8184cf2ff348f505cf85517d`.
- Working branch: `revision/062_60c9ac4-task-audit`; target: `main`.
- Authority: the human commanded preparation and execution of this plan after the [review report](REVIEW-REPORT.md). Accept R-001/R-002/R-003 for bounded source remediation, verification and final campaign integration/closure.
- Exclusions: automatic-review denial and related mechanisms; actual T-022 product-repository repairs, tests/publication or hosted writes; live acceptance; history rewriting; other closed campaign records.

This revision clarifies current task recovery, not the original incident's independently unverified causes. Reuse existing implementation authority where sufficient. Keep genuine scope/acceptance/history exceptions explicit and prevent the safety preflight from becoming a general exemption from push-first.

## Ordered actions

| Action | Findings / owners | Outcome and acceptance | Dependency |
| --- | --- | --- | --- |
| A-001 | R-001/R-002: implementation completion/audit, task execution; coordination and Git integration handoffs | Classify commit composition, acceptance/evidence and ownership separately. Define manager-resolved forward recovery under existing authority versus genuinely missing human decisions/exceptions. Inspect original failure and current corrected condition; reconcile current task/parent/hosted claims within authority. Retain history and original evidence; no automatic replay, invented task ID or new recovery registry. Corrected current acceptance does not rewrite historical compliance. | Published plan |
| A-002 | R-003: startup/continuation, implementation/coordinator entries, workflow catalog, Git publication and other direct push-first projections | Inspect publication eligibility first. Verified eligible commits still push before ordinary work. Known-invalid/uncertain completion holds publication and advancement for bounded recovery. Explicitly allow only necessary inspection, checks and authorized forward correction/evidence persistence needed to produce a safe current tip; no unrelated commits or next tasks. Propagate the exception accurately, preserving normal cadence and non-Git/publication boundaries. | A-001 |
| A-003 | All: PLUGIN.md, README, capability map, developer contract and coordinator examples as affected | Concise projections and representative repair/exception/unsafe-push contrasts; detailed recovery remains with its canonical owners and direct skill entry remains sufficient. Recheck cross-owner duplication/conflicts. Update active finding dispositions and revision report with actual evidence. | A-001/A-002 |
| A-004 | All: verification and campaign records | Assess the scenarios below, run affected current Markdown/Git checks, support/pinned publisher suites and native exact committed manifest/archive checks. Preserve package exclusions and closed records. Publish evidence, explicitly merge into refreshed main, verify merged state, push/read back and return clean main before closure. | A-001–A-003 |

Commit each coherent action with actual evidence, push and remotely verify before subsequent work or another commit. Record justified action splits; do not invent executable task IDs. Keep original review observations separate from appended remediation dispositions. No root TASKS, new skill/reference module or mandatory recovery-note artifact is needed.

## Source assessment scenarios

| ID | Contrast | Required result |
| --- | --- | --- |
| S-01 | Published single-task completion; missed failed production check; existing full-P1 repair/publication authority | Inspect failure/commit, repair and verify exact corrected source, reconcile claims and publish task-specific correction under existing grant; continue only retained eligible range without blanket reapproval |
| S-02 | Published split or bundled closing commit with currently passing code | Current passing tests do not repair historical composition; retain history and resolve the specific human-controlled exception before affected integration |
| S-03 | Verification and composition violations coexist | Track both independently; a bug fix clears neither a historical composition exception nor unrelated ownership uncertainty |
| S-04 | Range/repair authority missing, human pause or out-of-scope contract change | Preserve work and ask for only the missing consequential decision; do not use recovery to expand or resume paused work |
| S-05 | Verified unpushed closing commit; clean tree | Inspect eligible evidence/ownership and push/read back before ordinary task work; no ceremonial full test replay |
| S-06 | Known-invalid unpushed completion | Hold unsafe publication; perform only authorized bounded recovery/checks and necessary corrective persistence, then publish the inspected coherent tip without history rewrite or unrelated accumulated work |
| S-07 | Uncertain ownership or evidence; pending staged/unrelated changes | Inspect/preserve state, resolve ownership before mutations/publication; no broad staging, implicit reset or assumed acceptance |
| S-08 | Corrected acceptance invalidates task/dependent/parent/hosted claims | Reconcile affected current claims and authorized hosted reopening; unknown/unresolved dependent state blocks advancement; no actual provider trial selected |
| S-09 | Recovery scope complete; original selected range remains active / requested checkpoint reached | Continue within remaining established range only when gates clear; otherwise stop at the original boundary, without extra tasks or phase activation |
| S-10 | Counts or recovery filename supplied without condition/source evidence | Do not infer acceptance; require original failure, corrected condition, exact tested state and relevant required checks |

These are source-assessment cases unless a separately selected trial establishes actual model behavior. Report evidence classes and unrun checks explicitly.

## Verification

Use Python 3.11 or the established supported runtime and record the actual version; do not touch `/pyenv`. For coherent plugin integration run the TextStats support suite and `.github/tests` publisher suite with `.github/requirements.txt` pinned dependencies. Validate native committed manifest/archive, exact regular-file package contents and package-contained links, including source-only exclusions. No new tests that merely restate the prose are planned.

Check changed current documents/active campaign only for links/anchors, Markdown spacing/consecutive blanks and Git whitespace; exclude closed record compatibility. Inspect the full campaign diff, canonical loading and direct owner paths. Final integration carries actual source/target tips, original opening and starting baseline, changed actions, current verification/limits and final target publication evidence in the established two-parent merge summary. An unresolved check retains the campaign open with its concrete blocker.

## Execution disposition

A-001 through A-004 executed. All three findings are source-verified; current checks and limits are recorded in the revision report. Final verified main integration/publication and return establish closure. Automatic-review denial and actual product-repository/live acceptance work remained excluded.
