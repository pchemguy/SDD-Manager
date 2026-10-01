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
