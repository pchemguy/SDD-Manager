# Agent instructions

## Workflow context

This project uses SDD Manager. Load the available `sdd-manage` entry to establish or recover the workflow before coordinated development. Use the plugin's `PLUGIN.md` when available for capability and skill routing; the coordinator remains usable without it.

Read applicable nested instructions and inspect current repository state before changes. Preserve existing and unrelated work. Recover established decisions, accepted inputs and the current stopping boundary rather than restarting preparation or guessing lost approvals.

## Development documents

Main development documents belong in `docs/dev/`. During preparation, `DOCS_TASKS.md` owns documentation tasks; `TASKS.md` owns product implementation tasks once prepared. Inspect existing documents and their evidence before relying on them. Do not treat document presence or a checked box as proof of acceptance or verification.

Maintain project-specific navigation and validated setup/check commands here as they become established. Do not invent commands, paths, requirements or completion claims.

## Human checkpoints

Present each necessary new development document with concise substantive analysis and pause for acceptance before dependent work. PLAN and layout have separate checkpoints. Honor the user's requested implementation range and stop when it is complete.

The user may explicitly preapprove future checkpoints at any time. Retain the scope and conditions of that decision, including after interruption; do not repeat a covered approval request. Preapproval does not waive QC, resolve blockers or expand the authorized implementation range.

## Commits and publication

Keep each task's verified result, required evidence and initial completion checkbox in the same commit. For documentation tasks, complete that checkpoint after initial human acceptance or applicable preapproval. Push every owned commit and verify remote containment before further work or another commit, unless the user explicitly directs local-only or deferred publication.

Use SDD Manager's integration procedure at the authorized complete boundary. For main preparation, pass package QC, publish the documentation merge, close the preparation milestone when tracking is enabled and confirm the final checkpoint before implementation.

## Requested tracking

When backend tracking is enabled, establish and verify the required objects before dependent repository work. Keep each task's issue associated with its actual milestone and close it only after verified completion is committed and published. GitHub milestones are milestone objects; labels do not replace them.

On interruption or backend failure, reconcile actual state and report pending operations. Preserve completed work without claiming unverified hosted effects or bypassing required gates.
