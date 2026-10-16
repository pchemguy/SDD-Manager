# Agent instructions

## Specification-driven development

This project uses the SDD Manager plugin for specification-driven development. Load its `sdd-manage` coordinator entry before coordinated work. Use the installed plugin when available; otherwise load `.agents/plugins/sdd-manager/PLUGIN.md` and the coordinator entry it references. If neither source is available, report the missing plugin before dependent workflow work.

**Follow the applicable SDD Manager workflows, including human checkpoints, Git publication and integration, and requested GitHub or equivalent backend tracking.**

## Initialization

Execute the [skill and plugin discovery protocol](SKILL_DISCOVERY_PROTOCOL.md).

## Human checkpoints

Present each necessary new development document with concise substantive analysis and pause for acceptance before dependent work. Honor the user's requested implementation range and stop when it is complete.

The user may explicitly preapprove future checkpoints at any time. Retain the scope and conditions of that decision, including after interruption; do not repeat a covered approval request. Preapproval does not waive QC, resolve blockers or expand the authorized implementation range.

## Commits and publication

Keep each task's verified result, required evidence and completion checkbox in the same commit. Push every owned commit and verify remote containment before further work or another commit, unless the user explicitly directs local-only or deferred publication.

Documentation tasks and their issues track development through first approval: mark the task complete in the commit submitting the approved document, then close its issue after verified publication. Later document revisions leave that task complete and its issue closed. Honor applicable checkpoint preapproval.

Use SDD Manager's integration procedure at the authorized complete boundary. For main preparation, pass package QC, publish the documentation merge, close the preparation milestone when tracking is enabled and confirm the final checkpoint before implementation.

## Requested tracking

When backend tracking is enabled, establish and verify the required objects before dependent repository work. Keep each task's issue associated with its actual milestone and close it only after verified completion is committed and published.

On interruption or backend failure, reconcile actual state and report pending operations. Preserve completed work without claiming unverified hosted effects or bypassing required gates.

## Project guidance

Maintain project-specific navigation and validated setup/check commands here as they become established. Do not invent commands, paths, requirements or completion claims.
