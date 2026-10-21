# Playwright provisioning and execution recovery

## Campaign and decisions

- Campaign: 095_000d2ec; directory and branch suffix: 095_000d2ec-playwright-recovery.
- Full starting baseline: 000d2ec0ed7a3b06aa943300a5d475cf73e0a393.
- Creation parent, integration target and return: revision/094_93e8f74-demo-prompts.
- Working branch: revision/095_000d2ec-playwright-recovery; remote: origin, pchemguy/SDD-Manager.
- Authority: the human requested a revision campaign and detailed but concise instructions, then execution, and explicitly corrected the mode to nested. Parent 094 remains open and suspended; its V-001–V-008 demo changes are preserved.
- State: Planned; execution authorized. This is a directly requested revision, not a fabricated review campaign.

## Objective and boundaries

Revise [BROWSER_DEV_POLICY.md](../../../../BROWSER_DEV_POLICY.md), principally “When Playwright is selected”, so agents proactively diagnose and recover Chromium/Firefox provisioning and execution. Retain Chromium priority, Firefox inclusion, dedicated environments, project-defined coverage and framework-neutral verification. Keep procedures cohesive in the existing standalone policy; use compact steps/tables/examples rather than duplicate policy in skill entries or demo guides.

The user needs application execution, UI interaction and screenshots; a visible window or full Chromium is not required by that scope. Default Playwright Chromium headless shell satisfies that class of checks, subject to actual application verification. Firefox remains included; its sandbox override is conditional and process-local for trusted test content, with reduced browser isolation explicit.

Allowed changes: the root browser policy, this campaign's plan/report, active review index, HANDOFF and the active parent's suspension/return evidence. No plugin source/manifest/version, demo implementation, release, global browser, host security policy or closed campaign record changes.

## Evidence informing the revision

Conversation diagnostics on Ubuntu 24.04 x86_64 used Playwright 1.56.1. Official browser CDN URLs returned 195-byte HTML error pages or HTTP 503. The version-matched official Microsoft registry image was accessible: its amd64 manifest and 786741920-byte browser layer were hash-verified and selected managed browsers extracted to a disposable directory. Chromium headless shell passed repeated contexts, clicks, Canvas checks and screenshots. Full Chromium failed a host-denied socket operation. Firefox launched but page creation failed with namespace errors/child crashes; a process-local MOZ_DISABLE_CONTENT_SANDBOX=1 override passed repeated contexts, clicks, Canvas checks and teardown. These are scoped prior probes, not application acceptance or universal host support.

## Ordered revisions

| Action | Outcome and targets | Dependencies | Verification |
| --- | --- | --- | --- |
| A-001 | Expand the Playwright section with proactive preflight, bounded independent download diagnostics, official fallback selection, safe version/platform-matched image extraction, default headless-shell configuration, conditional Firefox override and stage-specific execution checks. Retain general policy ownership and record actual evidence in REVISION-REPORT.md. | Published opening/plan; accepted conversation decisions | Review concrete successful/failed routes; execute embedded launch settings against available matching binaries; inspect examples, source links, preservation and Markdown. |
| A-002 | Review the complete policy for clarity, sufficient operational detail, non-duplication, isolation and evidence limits; finalize report/navigation/HANDOFF, then explicitly integrate into parent 094 and verify publication/return. | Published A-001 | Scenario walkthrough, local links/fences, diff whitespace and exact scope/preservation; prospective merged-state inspection. |

## Required procedure coverage

1. Resolve installed runner, pinned revisions, host platform and required modes without speculative version changes. Set the same dedicated browser path for installation and execution; name browsers explicitly.
2. Identify HTTP-200 HTML, 503, TLS/proxy/timeout, corrupt archive and stale-lock failures independently per browser. Record sanitized status/body/redirect evidence, bounded retries and specific next action.
3. Prefer compatible contained assets and official endpoints/approved mirrors; offer a matching official container image, or selective verified browser extraction when no container runtime exists. Explain registry manifest/platform/config/layer inspection, digest/size checks, safe extraction, layer ordering/deletions and host dependency limits without hard-coding tested revisions as defaults.
4. Distinguish default Chromium headless shell from full Chromium and visible GUI. Give valid installed-CLI/configuration examples; preserve explicit full/headed requirements.
5. Diagnose Firefox page creation separately from launch. Give a process-local override example and eligibility/rollback limits; do not weaken the host or enable it for arbitrary remote content.
6. Require deadline-bounded launch/context/page/interaction/rendering/teardown checks, then actual application tests. Record effective mode and distinguish preflight, application, native/OS-event and security evidence.
7. Preserve authorized scope and host controls, clean only owned state, stop repeated unchanged failure, and continue independent work only where task dependencies allow.

## Persistence and stopping

Publish/read back the opening before execution and each action before further work. Source and A-001 evidence belong in one commit; finalization includes A-002 evidence. Integrate the verified child with an explicit two-parent merge into refreshed parent 094, reconcile HANDOFF to that parent's open state, verify/publish and return through its existing worktree. Do not close or resume parent 094, merge main, create a release or update an installed plugin.

This is source-only policy maintenance, not plugin-boundary integration or acceptance-tooling work. Use focused documentation/example checks; unrelated support suites and live application acceptance are outside the claim. Native Windows, headed browsers, Docker execution and other Playwright versions remain unverified unless separately exercised.
