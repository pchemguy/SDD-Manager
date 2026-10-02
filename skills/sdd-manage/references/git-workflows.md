# Working branches and explicit integration

Use this protocol for a bounded implementation range, feature campaign, steering amendment, or selected document integration. **sdd-manage** establishes and coordinates the Git lifecycle; the active owner performs its scoped work and persistence. A direct invocation of a focused skill follows this same protocol. Read-only requests do not create branches or merge.

## Establish the working branch

- Identify the workflow, authorized boundary, working branch, target branch, starting checkpoint, relevant HEADs, remote destinations, and pending-change ownership. An implementation request includes default integration of its completed boundary; an explicit user instruction to stop on the working branch takes precedence.
- Before implementation execution, **sdd-implement** pushes outstanding commits on the current established branch. Do not create a branch to bypass a push blocker. Branch inspection and scope resolution establish the prerequisites; selection-only stays read-only.
- Reuse an existing branch only when its scope, target, history, and pending changes fit the requested continuation. Do not reuse a colliding name or infer ownership from its name alone. For new work, create a branch from the established target checkpoint before edits.
- Follow project branch naming policy. Otherwise use `sdd/<workflow>-<scope-id>` with a concise feature, amendment, or task-range identifier; choose a distinct suffix when the name is occupied by unrelated work. Record the actual target and checkpoint in existing task/change evidence, or the preparation/maintenance commit body for taskless work, so a fresh session can recover them. Never write credentials there.
- Use a separate Git worktree when the target must remain available or unrelated dirty work prevents safe switching. Preserve that work in its original worktree; do not stash, reset, clean, or move it implicitly. Inspect branch occupancy before selecting a worktree; do not check out the same branch in two worktrees.
- If no suitable checkpoint, target, remote, or ownership can be established, report the blocker. Never assume that the target is the default branch. A bare repository, unborn HEAD, detached state, or unresolved conflict requires an explicitly established usable setup before this protocol can proceed.

## Work and prepare the boundary

Commit and push completed task or amendment work on the working branch. Do not merge every task commit. A main range finishes at its selected task count, milestone, phase, or named checkpoint; a feature campaign finishes after its selected implementation and required document incorporation; steering finishes after its one commanded amendment.

Inspect the complete branch difference against the target, including earlier unmerged commits. If it contains unrelated or unfinished work, resolve the branch/scope conflict rather than integrating that work by implication. A narrower continuation on an existing feature branch may require a separate scoped branch; do not cherry-pick a guessed subset silently.

Verify working-branch acceptance and applicable exits. Reconcile selected feature documents on that branch before its final verification. Retain source documents still required by active work. Commit and push boundary evidence before integration. A pause or unresolved blocker retains the working branch and does not authorize a partial merge.

## Merge, verify, and publish

1. Refresh the target from its established remote and inspect divergence and worktree state without discarding changes. Resolve non-fast-forward local/remote history through project policy, not force-push. Use a clean integration worktree if unrelated work prevents safe integration. Pin the verified working tip and refreshed target tip.
2. Check whether the working tip is already an ancestor of the target. If already integrated, inspect the existing merge/evidence and publication state; do not fabricate another merge or claim a new boundary. If a prior merge is awaiting publication, verify that state and finish its push.
3. Merge the pinned working tip into the target with `git merge --no-ff --no-commit <working-tip>`. Never substitute a fast-forward, squash, or rebase for the required two-parent boundary. Inspect conflicts and the full prospective result; preserve the merge state when blocked. Do not publish a conflicted or unverified result.
4. Use **sdd-verify** to assess the merged state and relevant target regressions. Resolve conflicts and defects only within the authorized boundary; an out-of-scope consequence needs a decision. Record both parent tips, actual checks, and material conflict resolutions in existing evidence. If changes alter working-branch acceptance, recheck it rather than relying on stale results.
5. Use **sdd-report** to compose the explicit merge message. Commit the coherent verified merge result; inspect the commit's two parents, contents, and remaining worktree state. If any result changes after verification, repeat affected checks before completing the merge commit.
6. Push the target merge commit to its established remote branch and verify containment. A task-branch push or local merge alone does not establish published integration. On rejection or outage, retain the merge commit, report pending publication, and reconcile remote changes before retrying; never force-push.
7. Report working/target branches, task/amendment commits, merge SHA, verification, publication, and remaining differences. Retain the working branch unless deletion is requested or established project policy covers it. Stop at the selected boundary; steering always returns control without main-task continuation.

Git merge is a local repository operation. Protected target policy may block direct publication; report the needed supported route. Do not create or merge a pull request implicitly: the present **sdd-forge** backend does not implement PR operations.

## Continue a blocked workflow

Recover the working/target identities and starting checkpoint from Git and existing task/change evidence. Inspect actual diffs, unresolved merge entries, committed parents, accepted inputs, and pending checks. A clean tree or checked list alone does not establish completed integration. If the next action or ownership is ambiguous, preserve state and report it.

Continue the same authorized operation when commanded; do not start another task or amendment. For an in-progress merge, finish scoped conflict/verification work before its commit. A verified merge committed but not pushed needs publication, not a second merge. Aborting a merge or reverting published work is a separate explicit recovery decision with unrelated work protected; no automatic rollback or new transaction journal is required.

## Push authentication recovery

Attempt authorized pushes with existing shell authentication. For a 403 or explicit missing/invalid-credential failure, use [hosting credentials and shell recovery](credentials.md), passing sanitized destination, operation, transport, and cause. Recover the current client's access and retry the same established destination; classify rate-limit or policy restrictions before replacing a token. Keep the commit and report pending publication on an unresolved failure. Authentication recovery does not bypass push-first execution, change the target, or authorize force-pushing.
