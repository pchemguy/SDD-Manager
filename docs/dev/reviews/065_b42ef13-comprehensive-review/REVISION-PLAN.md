# Post-refactor revision plan

## Campaign and authority

Campaign `065_b42ef13`; original baseline `b42ef135345b5f0376e8f6f484592e1ac5b38df2`; planning checkpoint `b10193fb63fdae85017ee325cf250c827e8f694a`. Original opening commit `10a69811be8c7a8e3badc0724b4bd875f4df4a24`. Working branch `revision/065_b42ef13-comprehensive-review`; target `main`.

[Review report](REVIEW-REPORT.md); [coverage](COVERAGE.md). State: Execution authorized by the human’s “Execute” instruction after plan publication. All four corrections and the plan’s verified integration/closure steps are accepted. Preserve the reviewed observations and literal failed-probe evidence. The `_agents` ignore rule is already implemented and remains in this campaign.

Scope is the native publisher, TextStats package selection/helper instructions, and forge/implementation entry discovery. No product design/SPEC/PLAN/TASKS change or preparation branch is needed. No new task IDs, registry or runtime state file. Installed-client loading/reload, live acceptance, hosted tracking/release operations, unrelated workflows and closed campaign contents remain excluded.

## Supporting-module discovery

Use **Supporting modules** as the section title. These modules remain routed through an owning reference; the entry exposes their identity and selection conditions. The primary routing section selects the workflow/backend. The support table identifies downstream modules without requiring their immediate loading or repeating their procedures.

Each row names and links the actual file and supplies **Purpose and boundary**, **Route through**, and **Load when**. State once above the table that the named parent supplies the prerequisite context and directs selective loading. A parent route is not optional prerequisite guidance: a direct request for a support capability still loads its governing parent before dependent operations. Do not describe these files as “non-routed” or make table membership an instruction to load them all.

For `sdd-forge/SKILL.md`, retain the shared local release-message/highlights routes and GitHub backend entry. Add these six support rows:

| Module | Purpose and boundary | Route through | Load when |
| --- | --- | --- | --- |
| `github-packaging.md` | Package inventory, archive assessment and names; preparation boundary | `github.md` | Assessing or developing GitHub release packaging |
| `github-release-workflows.md` | Workflow authoring, dispatch and monitoring within the selected effects | `github.md`; package contract as required | Preparing, inspecting or running a release workflow |
| `github-releases.md` | Release reconciliation, upload, publication and readback | `github.md`; accepted package contract | Creating, completing, inspecting or recovering a release |
| `github-projection.md` | Eligible-phase labels, native milestones and task issues | `github.md` | Creating/reconciling the selected task hierarchy |
| `github-milestone-lifecycle.md` | Milestone closure/reopening and backlog reconciliation | `github.md` | Reconciling milestone completion or invalidation |
| `github-issue-lifecycle.md` | Exact task/issue identity and verified issue state changes | `github.md` | Resolving a task issue or closing/reopening it |

The implementation will turn filenames/parent names into relative Markdown links. `github.md` continues to own backend access and detailed operation routing. Preserve its dependency conditions; local highlights/message preparation must remain provider-independent.

For `sdd-implement/SKILL.md`, add `browser-capabilities.md` as conditional support reached through `environment-recovery.md` for browser provisioning/session/rendering problems. Keep ordinary browser verification discoverable through the verification owner; support-table visibility must not make every browser task an environment-recovery workflow or impose browser dependencies on CLI work. Keep environment-recovery itself clearly discoverable; consolidate its existing introduction/table wording only where necessary.

This resolves R-001 through complete entry-level discovery with explicit parent routing, rather than promoting every reference to a separate workflow entry. Assess against the existing per-file routing criterion; no general review-policy change or broad skill rewrite is required.

## Ordered actions

### V-001 — Restore deterministic release archives (R-002)

- **Targets:** .github/scripts/release.py, .github/tests/test_release.py; release handoff/dependency guidance only if the selected implementation changes their contract.
- **Change:** retain exact committed nested subtree selection and the `sdd-manager/` archive prefix. Fix archive timestamps to a deterministic value derived from the selected source commit. The local Git exposes `git archive --mtime`; verify compatibility with the supported CI/tooling environment before relying on it. If that would impose an unsupported Git requirement, normalize ZIP metadata with the standard library instead. Do not disable the expected-hash gate or substitute working-tree bytes.
- **Regression coverage:** build the same source under distinct archive times/output directories and assert byte-identical ZIP/checksum. Exercise the real CLI expected-sha256 guard on a matching rebuild and a stale hash, without provider writes. Verify changed package content changes the hash and all exact inventory/member checks remain effective. Use controlled time where practical; retain one separated-invocation reproduction at integration.
- **Acceptance:** both build and publishing invocation patterns reproduce the same artifact for the same candidate in the supported environment; stale/corrupt input still stops before provider access. Run the publisher suite and the retained rebuild probe. If changing the archive implementation, inspect file modes, directory entries, compression and source-only exclusions as well as payload bytes.

### V-002 — Reject malformed package ancestors (R-003)

- **Targets:** acceptance/textstats/scripts/core.py, tests/test_nested_package.py and helper contract text only where clarification is needed. Load acceptance/textstats/AGENTS.md before work.
- **Change:** inspect committed path components `.agents`, `.agents/plugins` and the package leaf before allowing root-layout fallback. An occupied component with an unsupported Git kind/mode blocks selection. Preserve fallback for a genuinely absent nested layout, including ordinary parent directories with no plugin subtree; preserve standalone/historical package semantics.
- **Regression coverage:** both committed and dirty capture reject each malformed ancestor even when a root decoy manifest exists. Cover symlink and regular-file ancestors, existing leaf/missing-manifest cases and unsupported Git links where the fixture is relevant. Confirm the helper does not read external symlink contents. Retain positive nested, genuinely root-layout and ordinary-parent/absent-subtree cases.
- **Acceptance:** all retained ancestor-probe cases reject with the established sanitized category; valid package selection, package-relative keys, dirty mode/deletion handling, provenance and native/snapshot parity remain correct. Run focused tests, then the complete support suite.

### V-003 — Correct source-test working directory (R-004)

- **Target:** acceptance/textstats/scripts/HELPER-INTERFACES.md.
- **Change:** name the SDD Manager source repository/Git root as the working directory for acceptance/textstats/tests. Remove the adjacent doubled source-inventory parenthetical while preserving its full contents. Keep package root and test-repository root distinct.
- **Acceptance:** the documented command resolves from the named directory and runs the complete support suite. No acceptance tooling becomes a distributable dependency. Reuse V-002's full-suite result if the tested helper/test bytes are unchanged; do not rerun an unchanged suite merely for wording.

### V-004 — Expose supporting modules in skill entries (R-001)

- **Targets:** package skills/sdd-forge/SKILL.md and skills/sdd-implement/SKILL.md, using the structure above. References retain their operational ownership.
- **Change:** add concise supporting-module tables with individually linked files, bounded purpose, parent route and conditional loading. Keep primary workflow routes clear and avoid a second full backend operation procedure.
- **Acceptance:** every local reference is discoverable from its entry and its reading context is explicit. Source-inspect contrasts: local highlights versus hosted release; issue lookup versus milestone closure; workflow dispatch versus package-only preparation; browser-free implementation versus browser environment investigation. Check each entry and parent together for prerequisites, effects and stop. Validate links/containment and APA structure; report static evidence without claiming a consumer routing trial.

V-001 and V-002 address independent executable defects; V-003 follows the helper repair for coherent documentation, and V-004 completes discovery. Execute in this order and preserve each verified/published action boundary. A correction that requires a consequential contract change outside these targets returns for a decision rather than silently expanding scope.

## Verification, persistence and completion

During authorized execution, create REVISION-REPORT.md and update it with each action's actual source, changes, checks, failures, finding disposition and limitations. Commit each coherent action with its evidence; push and verify remote containment before further work or another commit. Preserve original failed review evidence; later repaired outcomes belong in the revision report. Findings become Verified only after their objective rechecks pass.

After the coupled changes, run the complete publisher and TextStats support suites, pinned manifest validation, exact committed 132-file package/archive checks, native/snapshot parity, affected entry/reference checks and current-document links/style. Recheck `_agents` remains ignored and `.agents/plugins/sdd-manager` remains tracked. Compare the full campaign diff against the refreshed integration target; prior closed packages stay byte-identical. Reuse sufficient successful checks until source changes or unresolved evidence require repetition.

The final report must distinguish deterministic tests/static source assessment from unrun live/client/provider behavior. If execution and closure are subsequently authorized, finish reports/index, publish the verified campaign tip, explicitly merge into the refreshed established target, verify the merged state, publish/read back the target and return to its worktree. The merge summary records objective, reviewed and delivered scope, check results/limits, original opening and full baseline. A review/planning request alone performs none of those implementation/integration steps.

## Present stopping boundary

Persist and publish this proposed plan, then stop with the campaign open for human review. No runtime source repair, merge or closure is part of this planning turn.

## Execution handoff

All four actions are implemented and verified in [REVISION-REPORT.md](REVISION-REPORT.md). The original planning-only stopping boundary above applied to the plan-preparation turn; the subsequent execution instruction authorized the plan’s implementation and verified integration/closure. Preserve source evidence limits through completion.
