# Windows shell probe revision plan

## Scope and authority

Campaign 084_e034a38 starts at e034a38bcdd6f18fd028af1f831730fe9e558587 on revision/084_e034a38-windows-shell-probe. Creation parent, integration target and return branch are revision/081_5b2442e-prerelease; 081 remains open and suspended. The human requests removal of ` /d` from the probe in windows-shell-recovery.md and explicitly authorizes the complete campaign through verified closure.

## Actions

| Action | Change and boundary | Verification |
| --- | --- | --- |
| V-001 | Change the documented probe to `cmd /c echo SDD_CMD_PROBE_%SystemDrive%` and align the existing native test's matching probe invocation. Preserve the outer fixture launcher, unrelated command flags, adapter bytes, marker/drive/exit checks and quote-conversion notice. | Exact before/after file comparison, focused Markdown links/style and existing Windows shell contracts. Record Linux skips honestly and inspect the updated source's actual native Windows CI result. No new tests or unrelated suites for this bounded change. |
| V-002 | Finalize evidence and explicitly merge/publish into the recorded parent, restoring its suspended handoff and confirming return. | Whole-delta review, frozen-record preservation, exact committed guide/package content as applicable, prospective merged-state source/check consistency, explicit two-parent merge and exact remote readback. |

## Verification boundary adjustment

The published repair triggered the exact-source Windows job, which remained queued without a runner during GitHub's reported Actions degradation. The human subsequently directed: “bail out on github test.” Stop waiting/polling and remove completed native CI from this child's closure gate. Acceptance covers the requested guide/test invocation alignment: exact replacements, preserved adapter/fixture/workflow bytes, syntax, links and actual package contents. Those checks pass. Native execution is unverified, not passed or silently omitted; retain the observed run/source association as an evidence limit, without requiring further CI work in this campaign. No known failing test is waived and no release or client-activation claim follows. Complete the authorized child integration/publication/return and closure.

## Persistence and stop

Publish/read back this opening/plan before source edits, then each owned action checkpoint before dependent work or another commit. Keep current evidence in this campaign; no separate review report or task IDs are needed for the directly accepted change. Campaign 083 and earlier packages remain frozen.

Close only 084 after the parent merge is verified/published and the worktree is confirmed on 081. Stop with 081 open and suspended. Do not resume prerelease preparation, alter version/release inputs, merge to main, install a plugin or create a release/tag/dispatch.
