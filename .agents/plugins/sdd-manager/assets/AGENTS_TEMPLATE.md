# Agent instructions

## Specification-driven development

This project uses the SDD Manager plugin for specification-driven development. If not already in the context, load `PLUGIN.md` from installed location or from `.agents/plugins/sdd-manager/PLUGIN.md` and the coordinator skill entry it references. If neither source is available, report the missing plugin before dependent workflow work.

Establish the actual root of that selected installed or pinned package from its `PLUGIN.md` or `skills/sdd-manage/SKILL.md` location. Resolve the `assets/...` policy resources below relative to that same root, whether it is installed elsewhere or available at `.agents/plugins/sdd-manager/`. Verify the selected resource is available before dependent use; report a missing resource without silently switching package sources. These paths require no package copy into the target project.

**Follow the applicable SDD Manager workflows, including human checkpoints, Git publication and integration, and the tracking policy below.**

## Initialization

Execute the [skill and plugin discovery protocol](SKILL_DISCOVERY_PROTOCOL.md).

## Windows shell

On **Windows execution hosts only**, follow `assets/WINDOWS_SHELL_POLICY.md` from the selected package root: CMD syntax, unavailable PowerShell/pwsh, temporary files for script text and shell operations, and the documented tool probe/recovery. This repository policy is independent of the plugin.

## Browser development

When developing or testing browser-based applications or browser extensions, follow `assets/BROWSER_DEV_POLICY.md` from the selected package root. Prioritize Chromium and include Firefox by default; project documents may specify other choices. Use dedicated, isolated environments.

## Environment diagnostics

When Playwright is selected, follow `assets/playwright.md` from the selected package root before dependent setup and execution, and when provisioning or browser runtime blocks required checks.

When a Vite-served module worker fails to start, especially from a linked Windows checkout or with an HTML entry response, follow `assets/vite-worker-loading.md` from the selected package root. Diagnose the loading stage before applying a workaround; this guidance does not apply to every SQLite or worker failure.

## Workflow continuity

For continuation, read `docs/dev/HANDOFF.md` and use `sdd-manage`'s continuity subworkflow to reconstruct later work from current development records and Git. The handoff describes a checkpoint, not necessarily the branch tip. At startup, inspect unfinished workflow branches against their recorded parents and request the continuation branch unless already selected. Preserve the recovered scope, approvals and stopping boundary.

## Human checkpoints

Present each necessary development-document proposal and its selected artifacts with concise substantive analysis and pause for acceptance before dependent work. Model/API-design artifacts share the decomposition checkpoint; contract artifacts share specification, without additional documentation tasks or approval rounds. Honor the user's requested implementation range and stop when it is complete.

The user may explicitly preapprove future checkpoints at any time. Retain the scope and conditions of that decision, including after interruption; do not repeat a covered approval request. Preapproval does not waive QC, resolve blockers or expand the authorized implementation range.

## Commits and publication

Keep each task's verified result, required evidence and completion checkbox in the same commit. Push every owned commit and verify remote containment before further work or another commit, unless the user explicitly directs local-only or deferred publication.

Use SDD Manager's integration procedure at the authorized complete boundary.

## GitHub tracking

Enable and maintain GitHub tracking for documentation preparation and implementation **by default**. The user may disable tracking, select local-only work or choose another supported backend. Preserve an established choice through interruptions and access failures; copying this template does not reset it.

Follow `sdd-manage`'s preparation and phase-activation workflows for required tracking readiness and lifecycle updates. Reconcile uncertain effects before retrying and report unmet prerequisites before dependent work.

## Project guidance

Maintain project-specific navigation and validated setup/check commands here as they become established. Do not invent commands, paths, requirements or completion claims.
