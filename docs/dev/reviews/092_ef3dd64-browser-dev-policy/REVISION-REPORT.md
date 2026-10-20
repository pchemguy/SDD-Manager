# External browser policy revision campaign

## Opening

Campaign 092_ef3dd64 opens from published/read-back ef3dd64d322a5035bb65630a6a65994905136dec on parent revision/081_5b2442e-prerelease. Working branch revision/092_ef3dd64-browser-dev-policy, returning eventually to the same parent. The clean baseline, maximum 091 and collision-free allocation are verified. The [plan](REVISION-PLAN.md) owns selected actions and the [critical review](REVIEW-REPORT.md) records A-001 findings and technical-source limits.

The human selects root-policy promotion and generic project-policy handling, then adds critical review. Publish this opening before source changes; implement A-002 and verify A-003, retaining unselected review recommendations. Leave the child open/unmerged and parent 081 suspended. Version 0.15.1 and the parent's historical release-source/body/package association are not refreshed.

## A-001–A-002 — Review and selected promotion

Opening b602fa601d1d59c7be051762b218f87e63869d7f is published/read back. The critical review covers content and size, with five located findings and bounded checks of the policy's linked official documentation. The baseline has 1,226 words/9,411 bytes: one cohesive file is appropriate, but repetition and generic detail warrant compression. Review recommendations beyond selected externalization remain unimplemented.

The policy now lives at root [BROWSER_DEV_POLICY.md](../../../../BROWSER_DEV_POLICY.md), with concise root AGENTS guidance. Only five standalone text substitutions are made: title, apply trigger, two generic user-escalation references and removal of the unavailable recovery-module dependency. Substantive browser restrictions, examples and evidence limits are preserved. The promoted text has 1,225 words/9,360 bytes; it is not presented as the recommended shortening.

SDD no longer contains or references the policy or its fixed engine/isolation rules. sdd-implement explicitly discovers/follows project-defined browser development policies before selecting or using facilities, with aligned startup/recovery guidance. Testing and verification retain contract-driven coverage and evidence limits without a mandatory framework, browser matrix or policy filename. The source contract reflects external ownership. Package exclusion assertions are aligned; runtime scripts, manifest, CI, Windows policy and earlier closed records are unchanged.

## A-003 — Verification checkpoint

On Linux/Python 3.12.14, 139 support tests pass. The initial publisher invocation fails because its declared jsonschema dependency is absent (20 errors); this is an environment prerequisite, not a policy/source failure. Installing the declared jsonschema 4.26.0 requirement in a task-owned temporary virtual environment resolves it, and all 37 publisher tests pass. No system toolchain or /pyenv content is changed.

Source checks confirm exactly the selected standalone substitutions, no packaged policy references, preserved runtime/manifest/Windows policy and frozen campaign packages. Scoped Markdown/whitespace checks pass. Publish the source, verify its exact 153-file package, then publish final evidence and stop open/unmerged. No browser execution, live agent behavior, release refresh or installation is claimed.
