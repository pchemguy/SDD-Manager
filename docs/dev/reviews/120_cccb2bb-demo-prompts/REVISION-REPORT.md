# Demo prompt revision report

## Campaign and result

Campaign **120_cccb2bb**; [plan](REVISION-PLAN.md), [original findings](REVIEW-REPORT.md). Revision source: `f03dce8e9903a12089de597349d13b07308cce4b` plus the repair delta in this report's containing commit. Branch: `revision/120_cccb2bb-demo-prompts`; parent/return target: main at `cccb2bbc48e2d2c3984b82d2c0275fba1bc753fa`.

V-001 is complete. R-001, R-002 and R-003 are verified by source inspection and static checks. No findings remain unresolved in the accepted review scope.

## Changes and rechecks

- Autodoc and Interactive now explicitly require a session-only increment before persistence. The no-reload-persistence instruction is limited to that increment; the contradictory optional sentence is removed. Both retain identical project requirements and their distinct mode selection.
- Featured Autodoc uses “in this feature campaign”, preserving the separate configuration and persistence campaigns. Its quoted blank line has no trailing space.
- All four standalone prompts were inspected for these issues. Multipass Autoloop correctly uses “this pass” under Pass 5 followed by persistence in Pass 6 and remains unchanged. The Tetris guide already separates these stages and needs no additional repair.
- `git diff --check cccb2bbc48e2d2c3984b82d2c0275fba1bc753fa` passes across the complete campaign delta. All four prompt files have no trailing whitespace. Changed-document local Markdown file links resolve.
- Diff inspection confirms final persistence precedence, cookie/URL updates, file validation, gameplay, layout, eight feature headings and nine scope-pass headings are preserved. The current repair changes three prompt files and active campaign/navigation records only; closed campaign records, plugin source and the original 119 branch are unchanged.

## Publication and limits

Commit source and this evidence together; the containing Git commit identifies the exact repaired state. The coordinator must publish it and verify exact remote-tip equality before reporting publication. No application runtime or rendered-host behavior is claimed for this prose-only correction.

Campaign 120 remains open at the repair checkpoint. Main integration, closure and release have not been performed.

## Closure authorization and final checkpoint

The human subsequently requested “Close it”, authorizing integration and closure. Repair commit `17386f176a90967d7f576a75d8dcad07dd6f4295` was published with exact remote readback and confirmed cleanup. A fresh fetch confirms main remains at the recorded baseline and the remote campaign tip matches the repair commit.

All three findings are verified; no accepted work remains. Finalized for explicit integration into main. The closure merge and its verified target publication establish completion; its Git parents identify the final campaign and target tips. No release is selected. Prior closed records are unchanged by the campaign delta. Fetch observed an external reset of the remote 119 branch to its prior finalization commit; this campaign does not modify or restore that branch.

## Reopened amendment result — V-002

Reopening was explicitly requested for the root README Quick Start. Qualifying prior closure and reopening checkpoint: `4bfebd6e0dfdacb57419d83f63a69cf2e9502cdc`; incoming synchronization: `cd5cf2d77d607bfd5150a58ca31034b549fd62f6`, published with exact remote readback and confirmed cleanup. Original opening and baseline remain unchanged.

Adapted the Tetris guide’s “Starting the exercise” into root README Quick Start: template repository setup, scoped PAT convenience permissions, placeholder replacement, four prompt choices and their submission/checkpoint distinctions, plus the generic Greenfield template. Root-relative links replace guide-relative paths. Detailed gameplay remains in the guide; source prompts and package README are unchanged.

V-002 is complete by source inspection: wording preserves the source’s permission qualification, document-preparation stop points and separate feature submissions. Local Markdown links resolve, heading/list spacing and diff whitespace checks pass. The amendment changes root README and active campaign/navigation records only; other closed records remain unchanged. No new project was created, prompt executed or external link availability independently tested.

Publish the containing action commit with exact remote readback. Campaign 120 remains reopened at this review checkpoint; this amendment has not been integrated into main.
