# SDD Manager revision evidence

## Campaign

- **Plan:** [REVISION_PLAN_39374c8.md](REVISION_PLAN_39374c8.md).
- **Baseline:** `39374c8ae60f92ce8dd874774ed69ab3cb15c459`; planning commit `aa2e09c4352caf803748d3c19e25c47bf092ea04`.
- **Working branch:** `revision/39374c8-branch-workflows`.
- **Target:** `feature/architecture-revision`, starting checkpoint `aa2e09c4352caf803748d3c19e25c47bf092ea04`.
- **State:** Source revision in progress. Each stable-ID checkpoint is committed/pushed before its successor; completion requires verified explicit merge and target publication.
- **Evidence limits:** Local structural and Git/provider fixtures are distinct from installed-client execution, live hosted mutations, and credential-channel validation.

## Revision checkpoints

### SDD-V-001 — Branch and merge lifecycle

- **Source:** Added the shared Git workflow reference; linked coordination/entry points and expanded orientation's branch/merge observation contract.
- **Observed checks:** `python /tmp/branch_workflow_fixtures.py`: eight tests passed. Actual Git fixtures cover forced two-parent merges from fast-forwardable history, two task commits/one merge, divergent target and already-integrated no-op, retained conflicts, failed check with target unpublished, rejected target push retaining merge, worktree isolation preserving staged/unstaged bytes, branch occupancy/collision, and missing destination.
- **Structure:** Package validator exit 0; heading/template, local-link, metadata/icon, and skill-reference checks reported zero errors.
- **Limits:** Reviewer-operated Git mechanics, not autonomous client execution. No protected-provider writes; a local rejecting receive hook exercises publication refusal.
- **Persistence gate:** Commit subject identifies SDD-V-001; verify remote containment before SDD-V-002.

### SDD-V-002 — Task and feature boundaries

- **Source:** Connected task startup/completion and coordinator feature sequencing to the shared branch lifecycle; added merge-message and branch-result formats; clarified hosted task closure versus target publication.
- **Checks:** Initial package validation rejected a cross-skill resource link; replaced it with named-skill reference loading, then package validator exited 0 and content/link/metadata checks reported zero errors. Source inspection confirms per-task push remains before advancement, selection-only does not enter branch mutations, narrow requests cannot incorporate or merge unrelated unfinished feature work, and complete feature incorporation precedes final verification/merge.
- **Executed foundation:** SDD-V-001's two-task fixture produced one two-parent boundary merge and published it to its bare remote. Fresh workflow-consumer execution is reserved for SDD-V-007; this checkpoint does not claim agent execution from source inspection alone.
- **Prior checkpoint:** SDD-V-001 `7077cde` pushed; remote-tip equality verified before this revision.
- **Persistence gate:** Commit subject identifies SDD-V-002; verify remote containment before SDD-V-003.

### SDD-V-003 — Steering isolation and continuation

- **Source:** Steering establishes/reuses an amendment branch targeting the paused implementation checkpoint, follows default explicit verified merge/publication, and resumes a blocked amendment only on a human command. Coordinated workflows/examples distinguish Git merge from feature-document incorporation.
- **Checks:** Package validator exit 0; heading/link/metadata checks zero errors. Inspection confirms production repair/reverification remains steering-owned, target publication is required, and no main-task continuation or feature overlay is introduced.
- **Forward execution:** A fresh consumer was started against a disposable classification project and its local bare remote, with a human-commanded contract reduction and project-required external facility check. Its actual outcome is recorded in the final composition checkpoint; no successful consumer outcome is claimed here.
- **Prior checkpoint:** SDD-V-002 includes `cfc5af3`, `36c8bda`, and `0b36550`; package resource-loading corrections are retained in history. Final remote-tip equality verified at `0b36550` before this revision.
- **Persistence gate:** Commit subject identifies SDD-V-003; verify remote containment before SDD-V-004.

### SDD-V-004 — Interrupted document integration

- **Source:** Added artifact-based continuation of selected incorporation; orientation/coordinator now distinguish partial document integration from interrupted task execution. Standalone integration and incorporation inside a feature campaign share branch safety with different finish boundaries.
- **Checks:** Package validator exit 0; content/link/metadata checks zero errors. Inspection preserves SPEC-only scope, selected-list requirements for ownership transfer, pending reassessment and historical evidence, source retention, and blocked duplicate identities. No rollback/journal or automatic implementation is introduced.
- **Forward execution:** Fresh-session partial-incorporation execution and its artifacts are recorded under SDD-V-007; static inspection here does not claim that execution.
- **Prior checkpoint:** SDD-V-003 `fa19123` pushed; remote-tip equality verified before this revision.
- **Persistence gate:** Commit subject identifies SDD-V-004; verify remote containment before SDD-V-005.

### SDD-V-005 — GitHub failure classification

- **Source:** GitHub reference classifies access, rate-limit, transient/offline, invalid-input, and uncertain-write outcomes; shared credential routing now applies to access-related403 rather than every403. Projection/lifecycle require reliable re-read before replay and preserve pending local/hosted differences.
- **Provider references:** Official English GitHub REST best practices and troubleshooting pages retrieved on 2026-10-01; sources linked in the GitHub reference. They distinguish rate-limit403/429, Retry-After/reset timing, secondary-limit backoff, private-resource404, and repeated error handling.
- **Checks:** Package validator exit 0; content/link/metadata checks zero errors. A fresh consumer receives nine controlled raw response/state fixtures; dispositions are recorded under SDD-V-007. This checkpoint claims no live provider or autonomous API execution.
- **Prior checkpoint:** SDD-V-004 `e977a9f` pushed; remote-tip equality verified before this revision.
- **Persistence gate:** Commit subject identifies SDD-V-005; verify remote containment before SDD-V-006.
