# Windows shell probe revision evidence

## Identity and authority

- Campaign: 084_e034a38; baseline/branch-off e034a38bcdd6f18fd028af1f831730fe9e558587.
- Working/publication branch: revision/084_e034a38-windows-shell-probe on origin, pchemguy/SDD-Manager. Directory: docs/dev/reviews/084_e034a38-windows-shell-probe.
- Immediate parent, creation parent, integration target and return branch: revision/081_5b2442e-prerelease at that exact published checkpoint. Parent 081 remains open and suspended.
- Human objective: remove ` /d` from the shell probe in windows-shell-recovery.md; run the full focused campaign through completed closure. [Accepted plan](REVISION-PLAN.md), [parent evidence](../081_5b2442e-prerelease/REVISION-REPORT.md), [handoff](../../HANDOFF.md), [index](../README.md).
- Opening state: source revision not yet performed. V-001/V-002 below record execution and final disposition. The actual first opening commit is recovered from Git, not embedded as a future self-reference.

## Source and bounded assessment

[Windows shell readiness](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/references/windows-shell-recovery.md) contains the target probe once. The existing [native contract](../../../../tests/test_windows_shell_recovery.py) invokes that same probe and checks PATH selection, expanded drive, marker and exit across LF/CRLF adapters. Align that invocation so native verification exercises the documented command. Other `/d` uses belong to the isolated outer fixture or unrelated cases and are outside this edit. The adapter and required quote-conversion notice are unchanged.

The execution host is Linux. Initial orientation found a clean older local campaign checkout lacking the target reference; bounded remote inspection/fetch recovered the exact published 081 branch without modifying the old branch or its artifacts. Current parent Git state confirms completed child 083 integration. Name/path and local/published ref discovery reserve at most 083; 084 is available and its name is valid. No closed reports were used as a routine review queue.

## Verification and completion boundary

Use the focused existing Windows contracts, exact source diff and current link/style checks. Linux skips are not Windows runtime passes. The Windows CI workflow watches the guide/test and runs the native suite; inspect the source-matched job. V-002 records the later provider-availability limitation and bounded verification adjustment. No live Antigravity/local Codex activation is implied. No acceptance tooling or executable adapter behavior changes are selected.

This opening changes only campaign/parent suspension evidence, HANDOFF and shared navigation. Publish/read back before V-001. Later publish the verified repair/evidence, finalize, explicitly merge into refreshed 081 with its parent handoff restored, verify/publish and confirm return. Close only 084, preserve 083 and earlier records, and leave 081 suspended with its existing source-bound prerelease inputs requiring refresh on separately selected continuation.

## V-001 — Probe revision and publication prerequisite

Opening/plan 10e6d068d70d54185c0f9fe2ce5afd6f65edbbc7 was published and exactly read back before source edits. The initial existing-auth push failed because Git could not obtain a username with terminal prompts disabled. After confirming the known token was ignored, untracked and owner-protected, one recovery retry used a temporary external, destination-restricted askpass channel with command-local helper settings. Push and exact readback succeeded. No persistent credential configuration, token storage, ignore rules or permissions were changed; no secret values or helper paths are retained here.

Changed exactly one invocation in the guide and its matching existing native test to `cmd /c echo SDD_CMD_PROBE_%SystemDrive%`. Whole-file comparison against the branch-off source confirms these are the sole source replacements. The test's outer launcher and other command flags, adapter bytes, marker/drive/exit checks, required quote-conversion notice, workflow, version and release inputs are preserved. Python syntax and source diff checks pass.

Local Python 3.12.14/Linux unittest discovery found the six expected native contracts and skipped all six, exit 0; this is not Windows execution evidence. No new tests were added. Publish/read back this coherent repair checkpoint to trigger the existing Windows workflow, then inspect the actual source-matched result before closure. Focused current link/style and frozen-path checks precede publication; native verification and final integration remain pending V-002.

## V-002 — Focused verification and completion

Repair checkpoint 4befe7b5f061286f317a1abaaf2149472342f026 was published and exactly read back. Whole-delta review confirms only the documented probe and its existing native invocation change outside active evidence/navigation. The adapter, other test commands, workflow, manifest/version, release inputs and closed campaign records retain their branch-off bytes.

Two exact committed-source verification archives contain all 154 package files, include the revised guide and exclude source-only tests/evidence. The archives are identical: 452,422 bytes, SHA-256 e316818cbd71dcb31444f780087b61dcc3f2e112228cadaf39792c51fc7488b9. Manifest 0.15.1 is unchanged. This verification build does not refresh parent release preparation. Python syntax, exact source comparisons and whitespace checks pass; the final focused Markdown audit checked six files, 267 local links, two package links and two fragments, with 236 frozen targets existence-checked without loading them. No unresolved candidate was found.

The existing source-matched [native Windows run](https://github.com/pchemguy/SDD-Manager/actions/runs/39282149988), job 118158404376, remained queued without a runner or executed steps at the 2026-10-19 16:16 UTC observation. [GitHub's status API](https://www.githubstatus.com/api/v2/summary.json) reported Actions degraded performance and an investigating availability incident; this supplies a provider-availability observation, not proof of this job's individual cause. No native execution or live Antigravity/local Codex activation is claimed.

The completed-native-CI closure gate was an agent-selected addition. The human subsequently directed: “bail out on github test.” The [plan adjustment](REVISION-PLAN.md#verification-boundary-adjustment) stops waiting/polling, removes that closure gate and accepts this guide/test-only alignment on its passing source/syntax/link/package evidence. Adapter/runtime implementation and unrelated fixture cases are unchanged; no observed failure is waived. Native execution remains unverified and cannot support a Windows compatibility or release-readiness claim. No further CI work is required in this child.

V-001 and V-002 are finalized for the selected scope, with no unresolved source defect from the focused review. Publish/read back this evidence before merging. Close 084 only when its explicit two-parent merge into refreshed 081 has passed prospective source/link/frozen-path checks, is published and exactly read back, and the worktree is confirmed on the parent. Git supplies the actual final child/merge identities and publication/return facts; this pre-merge record does not claim those future actions. Preserve this child package after closure. Parent 081 remains open/suspended, retaining the native evidence limit and stale release-source/body/package association.
