# Playwright policy revision report

Campaign **127_85954e6**; baseline `85954e6cc9c9de8f2ddd3f03277da8970494bd96`; branch `revision/127_85954e6-playwright-policy`; return main. [Plan](REVISION-PLAN.md).

## V-001 — Chromium recovery and unavailable full-browser checks

Updated assets/playwright.md with generic Chromium launch diagnostics and a bounded conditional chromiumSandbox:false probe. Inspect effective arguments first: Playwright documents sandboxing disabled by default, so an existing --no-sandbox launch is not a new recovery experiment. Distinguish denied Unix-socket operations from internal namespace/sandbox errors; do not weaken host restrictions or retry unchanged failures. Proactively exercise the managed headless shell through repeated interaction/rendering/teardown and the actual application suite, and diagnose Firefox independently.

Added a general unavailable-full-browser scope rule. After bounded diagnosis/permitted recovery, checks requiring an unavailable full-browser mode are out of scope by default for current execution. They cannot block the remaining authorized implementation, packaging, integration or release, or force repeated waivers/GUI/VM provisioning. Preserve requested artifacts and feasible checks, retain actual failures as affected-work blockers, correct agent-generated gates within authority, and report exclusions as unverified rather than passed. Distinguish headless shell from full Chromium running headlessly. In response to human clarification, the policy contains no sidebar-specific instructions or examples.

Aligned BROWSER_DEV_POLICY.md to remove its contradictory full-mode blocking default and retain the same generic scope/evidence boundary. Template activation is unchanged; no plugin entry/skill/workflow links added.

## Verification and limits

Source contrasts checked: sandbox-disabled launch already attempted; conditional probe not yet attempted; full-browser host denial with a working shell; headless full Chromium versus headless shell; unavailable-mode exclusion versus a real failing application/build; explicit deliberate human override versus agent-generated gate; continued range/release versus unverified mode-specific claims. These are instruction reviews, not fresh browser execution.

Official documentation checked 2026-10-27: [launch options](https://playwright.dev/docs/api/class-browsertype) confirms chromiumSandbox:false default; [browser modes](https://playwright.dev/docs/browsers) distinguishes shell and full headless Chromium. User-supplied incident results are context, not independently reproduced evidence. No application repository, new browser provisioning or runtime trial selected.

139 support and 50 publisher tests passed on Linux/Python 3.12.14. Five package-documentation snapshot tests were rerun after final wording changes and passed. Contents anchors, generic full-browser scope, unchanged template activation and diff whitespace pass. Changes are confined to the two policy assets and active campaign/navigation records; closed history remains unchanged. Publish/read back the containing action commit; campaign 127 remains open. No integration or release selected.

## Final verification and closure

The human authorized closure after V-001. Final policy anchor/generic-scope checks and diff whitespace pass; no sidebar-specific content or obsolete full-mode blocking defaults remain. Closed records are unchanged. Prior 189 support/publisher passes and five final snapshot passes remain applicable to unchanged policy bytes; no new browser trial claimed. Original opening: 56dc3e5c92a1bb60faab6344e9642e649cbc5a5e; baseline/return main: 85954e6cc9c9de8f2ddd3f03277da8970494bd96. Publish final records before explicit main integration. Equal merged/campaign trees, verified main readback and clean return establish closure; retain branch and releases.
