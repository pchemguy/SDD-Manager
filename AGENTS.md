# Developing SDD Manager

## Initialization

Execute the [skill and plugin discovery protocol](SKILL_DISCOVERY_PROTOCOL.md).

## Windows shell

On **Windows execution hosts only**, follow [WINDOWS_SHELL_POLICY.md](.agents/plugins/sdd-manager/assets/WINDOWS_SHELL_POLICY.md): CMD syntax, unavailable PowerShell/pwsh, temporary files for script text and shell operations, and the documented tool probe/recovery. This repository policy is independent of the plugin.

## Browser development

When developing or testing browser-based applications or browser extensions, follow [BROWSER_DEV_POLICY.md](.agents/plugins/sdd-manager/assets/BROWSER_DEV_POLICY.md). Prioritize Chromium and include Firefox by default; project documents may specify other choices. Use dedicated, isolated environments.

## Contributor instructions

Before source edits, verification or campaign work, explicitly load [acceptance/AGENTS.md](acceptance/AGENTS.md), including work outside acceptance/. It owns source orientation, verification commands, publisher/package prerequisites, acceptance coordination and the closed-record boundary. Read applicable nested instructions before work on their paths; TextStats has a separate coordinator entry.

Use current source and the selected active campaign rather than reading frozen reports as a routine work queue. Discover ownership and actual branch/pending state through Git. Preserve unrelated changes, controlling human instructions and closed campaign artifacts. This repository uses campaign plans/reports instead of a root executable TASKS owner; do not invent task IDs from findings.

## Workflow continuity

For continuation, read [HANDOFF.md](docs/dev/HANDOFF.md) and use the coordinator's [continuity subworkflow](.agents/plugins/sdd-manager/skills/sdd-manage/references/continuity.md) to recover later campaign decisions and Git changes. Treat the handoff as a checkpoint. Inspect unfinished branches against their recorded parents and request the continuation branch unless already selected; preserve the actual scope and stopping boundary.

## Persistence and scope

Coordinate source changes through [sdd-manage](.agents/plugins/sdd-manager/skills/sdd-manage/SKILL.md) within the accepted request and stopping boundary. Publish and read back every workflow-owned commit before further work or another commit; unresolved publication pauses progression. Follow [Git integration and recovery](.agents/plugins/sdd-manager/skills/sdd-manage/references/git-workflows.md), using explicit verified integration only at the authorized complete boundary. Keep credentials protected and out of source/evidence.

Maintain abbreviated repository README.md, full packaged README.md and packaged agent-facing PLUGIN.md and source-only contributor/acceptance documents according to their audiences. Before editing PLUGIN.md or the `sdd-manage` entry/module boundaries, load the [plugin development contract](docs/dev/PLUGIN-CONTRACT.md) for its architectural scope, responsibilities and organization; load its assessment companion when selecting relevant review cases. Root AGENTS.md is development guidance, not a package workflow entry; package/snapshot contracts exclude it. Apply the shared [Markdown conventions](.agents/plugins/sdd-manager/skills/sdd-conventions/references/markdown-style.md) and verify relevant commands/links through the contributor entry.

## Source and package roots

The Git repository root owns development documents, acceptance and CI. The complete plugin source is `.agents/plugins/sdd-manager/`; its manifest, entries, skills and assets are relative to that package root.

BROWSER_DEV_POLICY.md, WINDOWS_SHELL_POLICY.md, playwright.md and vite-worker-loading.md are bundled in assets/ for project-level instructions. Do not link to or load them from plugin entries, skills or workflow references. AGENTS_TEMPLATE.md retains the explicit project-level policy links.
