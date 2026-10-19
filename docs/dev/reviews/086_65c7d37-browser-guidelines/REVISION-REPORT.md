# Browser guidelines campaign opening

## Identity and scope

- Campaign: 086_65c7d37. Full branch-off: 65c7d37f10c9eba2082c31c956a41acf9f1dbdf4, the verified published 085 parent merge.
- Working/publication branch: revision/086_65c7d37-browser-guidelines on origin, pchemguy/SDD-Manager. Creation parent, eventual integration target and return: revision/081_5b2442e-prerelease. Directory: docs/dev/reviews/086_65c7d37-browser-guidelines.
- Human request: open a nested campaign to define browser guidelines for targets requiring a browser. [Proposed definition/plan](REVISION-PLAN.md), [parent evidence](../081_5b2442e-prerelease/REVISION-REPORT.md), [handoff](../../HANDOFF.md), [index](../README.md).
- Current boundary: opening, focused current-source assessment and proposed guidelines/plan. No packaged instruction repair or closure is selected at this checkpoint. Parent 081 remains open/suspended; 085 and earlier packages remain frozen.

## Current-source assessment

The [browser capability module](../../../../.agents/plugins/sdd-manager/skills/sdd-implement/references/browser-capabilities.md) covers conditional provisioning, repeated sessions, rendering, native events and reproducibility. Its current [implementation entry](../../../../.agents/plugins/sdd-manager/skills/sdd-implement/SKILL.md) routes it through failure recovery. [Startup](../../../../.agents/plugins/sdd-manager/skills/sdd-implement/references/startup-and-continuation.md) likewise routes observed environment blockers; [verification](../../../../.agents/plugins/sdd-manager/skills/sdd-verify/references/check-selection.md) can load capability guidance when checks need it. [Generic recovery](../../../../.agents/plugins/sdd-manager/skills/sdd-implement/references/environment-recovery.md) correctly requires a relevant observed blocker and supported alternatives within scope. [Testing strategy](../../../../.agents/plugins/sdd-manager/skills/sdd-tdd/references/testing-strategy.md) favors declared tools and meaningful contract evidence.

The gap is normal browser-environment readiness: no concrete priority for the declared framework's setup, distinction between its compatible managed assets and arbitrary local executables, or explicit relationship between an agent browser session and the project test harness. There is no explicit current instruction to prefer a system browser over Playwright, and existing recovery already conditions alternatives on failure; the proposal strengthens the normal route rather than inventing such a prior instruction or diagnosing unseen agent behavior.

The plan keeps a single substantial conditional browser reference, with shallow caller changes. Proposed guidance is framework-neutral at entry and concrete for Playwright when selected. It preserves configured branded/remote setups, existing compatible caches, conditional capability checks and required matrix coverage. Illustrative assessment cases use abstract situations.

## Evidence and stop

Primary Playwright documentation was inspected for version-matched browser assets, normal CI setup, configured caches/channels and custom-executable constraints; links and the 2026-10-19 retrieval date are retained in the plan. No browser installation, browser search, live product run or hosted test was performed. This source/definition assessment is not runtime or autonomous-consumer evidence.

Opening changes only this campaign's records, active parent suspension evidence, HANDOFF and shared navigation. Verify current links/style and preservation of closed records, commit/publish/read back, then stop with 086 open for elaboration. Packaged source, tests, version/release inputs and the parent's earlier candidate association remain unchanged. Actual opening identity/publication is established by Git rather than a future self-reference here.

Opening verification passed: exact five-path scope, whitespace and focused Markdown links/style (five files, 274 local links, no unresolved candidates). The 243 frozen targets were existence-checked without loading their contents. Git comparison confirms no packaged source, test, contributor/CI, release-input or closed-campaign record changes. No runtime suite is needed for this definition-only checkpoint.

## Accepted policy and execution

After the published opening a98281b3dc5f8447e524c8a1e4787b71032f4617, the human accepted dedicated environment-contained Chromium by default and Firefox when required, then requested updating the revision plan and executing it. All other browsers are prohibited for agent use. Existing system/personal installations and profiles are excluded; compatible environment-owned copies may be reused. Playwright remains conditional and uses its standard package with managed Chromium/patched Firefox and the same contained browser path for install/run. This decision supersedes the opening proposal's branded/remote exceptions; controlled remote facilities must meet the same policy.

The updated plan selects V-001 through V-003, including workflow routing, source/scenario and package verification, and completed child integration/publication back to revision/081_5b2442e-prerelease. Parent 081 remains suspended. Reconstructed source is the clean published opening on the established child branch; Linux/bash execution needs no Windows shell shim. No source repair or browser execution is claimed by this plan checkpoint.

## V-001 — Dedicated browser readiness procedure

Expanded the existing browser reference into one cohesive procedure covering need, accepted Chromium/Firefox policy, binary/state isolation, compatible contained reuse, normal project setup, conditional Playwright provisioning, representative capability evidence and failure recovery. Explicit CMD/POSIX examples use the installed CLI, a contained browser path and Chromium selection; required Firefox uses the same standard package/path with its patched build. The guidance excludes all other browsers, global installation, personal/system executable discovery and personal profiles/sessions. Agent tools and controlled remote facilities retain the same constraints. Existing contracts demanding a prohibited browser are reported for authorized amendment rather than silently rewritten.

Source assessment traces the accepted rules to this procedure and the official Playwright browser documentation inspected on 2026-10-19. The capability table retains session teardown, fonts/Canvas, reproducibility and native-event evidence boundaries. Examples are explicitly illustrative and no framework/product matrix is imposed. No browser was installed or run for this instruction change; scenario/routing and final package checks remain in V-002/V-003.

The plan checkpoint 14ef4fe1b852e7d803f1f0fd93699489a7a3f63f was pushed and exactly read back before source work. Default shell authentication failed to provide a username; the already supplied credential was transferred through a destination-restricted temporary external helper with command-local settings. The recovery push exited zero and exact-ref readback matched. Token contents, permissions and persistent Git configuration were unchanged.

## V-002 — Normal setup and owner handoffs

The implementation entry now routes directly to the cohesive browser procedure for planning/preparation and execution evidence. Removed the obsolete failure-only supporting-module route. Startup establishes normal browser readiness before dependent execution; generic recovery remains failure-only and explicitly retains the shared browser policy. Verification check selection loads the procedure before choosing browser facilities, and testing strategy derives the required matrix/setup under that policy while remaining read-only when only strategy is selected. Each caller links the detailed owner rather than duplicating its procedure; no coordinator/template policy was added.

V-001 source commit 5815deb96a3361e30ce86f304935e55f8c12e4a5 was pushed and exactly read back with zero exit before this action. Its scoped whitespace/link assessment passed. Official npm npx documentation confirmed the examples' `--no` option; the deprecated `--no-install` spelling was removed before that commit. Current source assessment follows normal setup from the implementation entry/startup, standalone verification from check selection, test strategy without provisioning, and observed failure through generic recovery back to the policy owner. Final consolidated scenario/package evidence follows in V-003; no autonomous consumer run is claimed.
