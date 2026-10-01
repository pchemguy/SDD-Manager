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
