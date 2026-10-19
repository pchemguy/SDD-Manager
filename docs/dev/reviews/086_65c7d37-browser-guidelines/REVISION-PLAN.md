# Browser guidelines revision plan

## Identity and current boundary

Campaign 086_65c7d37 branches from 65c7d37f10c9eba2082c31c956a41acf9f1dbdf4 on revision/086_65c7d37-browser-guidelines. Creation parent, eventual integration target and return branch are revision/081_5b2442e-prerelease. Parent 081 remains open/suspended. The human requests opening a nested campaign to define guidelines for targets requiring a browser. This checkpoint develops a proposed definition and implementation plan; packaged instruction changes, execution and campaign closure are not selected by opening alone.

## Proposed browser guidelines

1. **Establish the actual need and environment.** Derive browser requirements from the selected target, task and verification strategy. Separate the product's supported browsers from the agent's execution host and available interactive browser tool. Browser planning does not require installation during document-only work; pure engine/CLI tasks acquire no browser prerequisites.
2. **Use the project's normal setup first.** Inspect declared dependencies, lockfile, configuration and setup/test commands. Establish that environment when browser execution is needed. Reuse an existing supported toolchain; do not introduce another framework by default. Do not begin with a filesystem hunt for an arbitrary installed browser in place of preparing the declared environment.
3. **Prepare Playwright coherently when selected.** Use the project's selected package version and CLI, its required framework-managed browser builds and necessary host dependencies. Validate existing version-compatible managed caches instead of downloading again as a ceremony. Install missing required assets through the documented setup route. Do not substitute a global/ephemeral CLI or custom executable merely because it is available. Required branded channels or deliberately configured remote browsers remain legitimate declared setups.
4. **Preserve the required coverage.** Provision and exercise the engines, operating modes and capabilities required by the selected contracts. Do not impose every possible browser on every project, or silently reduce a declared matrix to one available engine. Keep Windows CMD and other host commands appropriate to the actual execution host.
5. **Verify through the real project path.** Use its actual runner/application integration and representative required capabilities. Retain the existing session/teardown, rendering/font/Canvas, native-event and reproducibility distinctions. A manual page visit or agent browser session does not establish that the project's automated browser environment works; a launch smoke does not prove full acceptance.
6. **Recover from an observed failure.** Capture the failing normal command and relevant cause, then diagnose download/source/version, cache/configuration, host dependencies or launch/runtime problems. Use bounded supported remedies within scope. A local executable, alternate distribution, container or remote browser is a reasoned compatible substitution, not a default shortcut. Record the cause, setup difference and resulting evidence; resolve consequential requirement/platform changes through the existing workflow.
7. **Keep setup reproducible and evidence honest.** Retain the necessary project setup commands/configuration, version association and actual results in existing project documentation/checkpoints. Preserve unrelated caches/toolchains. Report missing required coverage as missing; do not relabel modeled events, an alternate browser or one successful launch as the original required evidence. No extra environment registry is needed.

These are proposed workflow rules, not a universal browser/framework mandate. Examples and assessment cases remain abstract and illustrative; they do not restrict target scope or require extra product features.

## Reference ownership and actions

| Action | Proposed change and boundary | Verification |
| --- | --- | --- |
| V-001 | Expand existing sdd-implement/references/browser-capabilities.md into a cohesive browser-readiness procedure: need/normal setup, selected-framework specifics, capability evidence and failure-only recovery. Retain its useful evidence table. Keep one substantial conditional reference; avoid a tiny Playwright-only fragment or an overloaded general environment manual. | Compare each proposed rule with the resulting source, official framework guidance and abstract positive/failure scenarios. Confirm setup precedes arbitrary executable substitution and existing valid managed assets remain usable. |
| V-002 | Align sdd-implement entry/startup routing, sdd-verify check selection, generic environment recovery and the testing-strategy handoff as needed. Normal browser readiness must be discoverable before a blocker; generic recovery retains its failure scope. Callers provide shallow routing rather than copy the detailed procedure. | Trace normal preparation, existing-environment reuse, verification and failure handoffs. Preserve non-browser scope, required evidence and coordinator authority. Assess each caller before editing it; do not spread policy to unrelated entries/templates. |
| V-003 | Review the resulting guideline boundaries and package after implementation is selected, finalize evidence and carry out the selected integration/closure boundary. | Focused source/scenario assessment, relevant current links/style and actual committed package checks; contributor suites if their declared scope applies. No prose-presence tests or browser installation merely to validate a planning document. Separate source assessment from live consumer/Windows/browser execution. |

## Assessment cases

| Abstract situation | Expected route |
| --- | --- |
| Browser task lacks its declared automation environment | Prepare that environment through normal project/framework setup before searching for a substitute executable. |
| Correct managed browsers are already cached | Reuse the compatible configured assets and verify the required project path. |
| Declared setup fails | Diagnose the actual failure, apply supported recovery and disclose material substitutions. |
| Project deliberately targets a branded channel or supported remote browser | Establish that declared route; do not replace it with a generic managed engine by assumption. |
| Existing project uses another supported automation framework | Follow its toolchain; the Playwright guidance is conditional. |
| Required matrix is only partly available | Retain the remaining coverage gap and original acceptance boundary. |
| Only an interactive agent browser is available | Distinguish its evidence from a working project automation harness. |
| Selected work is document-only or browser-independent logic | Do not provision browsers unnecessarily. |

## Technical basis and persistence

Official guidance checked on 2026-10-19: [Playwright browsers](https://playwright.dev/docs/browsers) associates package versions with specific browser builds and supports configured caches/channels; [CI setup](https://playwright.dev/docs/ci) establishes dependencies and browser assets before tests; [BrowserType launch](https://playwright.dev/docs/api/class-browsertype#browser-type-launch) cautions about custom executables. These support the proposed Playwright-specific rule without selecting Playwright for every project. Recheck applicable version-specific commands when implementation is selected rather than pinning an incidental current release in generic plugin policy.

Publish/read back this opening/definition/plan and stop on the child branch, open for elaboration. Preserve 085 and earlier closed records. No main/parent integration, release-input refresh, version bump, installation, browser provisioning or hosted-test wait is part of this checkpoint. Parent 081's prior source/message/package association remains historical until separately resumed.
