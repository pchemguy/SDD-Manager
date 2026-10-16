# Agent instructions

## Software-driven development

This project uses SDD Manager agent plugin to drive software-driven development workflows. The plugin must be either available as preinstalled in agent environment/context or it should be loaded from `.agents/plugins/sdd-manager/`. In the latter case, begin by loading `PLUGIN.md` and coordinator skill indicated and referenced in `PLUGIN.md`.

Maintain project-specific navigation and validated setup/check commands here as they become established. Do not invent commands, paths, requirements or completion claims.

## Initialization

Execute the [skill and plugin discovery protocol](SKILL_DISCOVERY_PROTOCOL.md).

**YOU MUST STRICTLY FOLLOW: human checkpoints, git and GitHub workflows, and all other SDD Manager workflows.**

## Human checkpoints

Present each necessary new development document with concise substantive analysis and pause for acceptance before dependent work. Honor the user's requested implementation range and stop when it is complete.

The user may explicitly preapprove future checkpoints at any time. Retain the scope and conditions of that decision, including after interruption; do not repeat a covered approval request. Preapproval does not waive QC, resolve blockers or expand the authorized implementation range.

## Commits and publication

Keep each task's verified result, required evidence and completion checkbox in the same commit. Documentation tasks and their issues track development through first approval: mark the task complete in the commit submitting the approved document, then close its issue after verified publication. Later document revisions leave that task complete and its issue closed. Honor applicable checkpoint preapproval. Push every owned commit and verify remote containment before further work or another commit, unless the user explicitly directs local-only or deferred publication.

Use SDD Manager's integration procedure at the authorized complete boundary. For main preparation, pass package QC, publish the documentation merge, close the preparation milestone when tracking is enabled and confirm the final checkpoint before implementation.

## Requested tracking

When backend tracking is enabled, establish and verify the required objects before dependent repository work. Keep each task's issue associated with its actual milestone and close it only after verified completion is committed and published.

On interruption or backend failure, reconcile actual state and report pending operations. Preserve completed work without claiming unverified hosted effects or bypassing required gates.
