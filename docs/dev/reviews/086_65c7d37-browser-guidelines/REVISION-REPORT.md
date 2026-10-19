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
