# Developing SDD Manager

This entry applies to the SDD Manager source repository. It is excluded from the plugin package. Agents using SDD Manager in another project start at [PLUGIN.md](.agents/plugins/sdd-manager/PLUGIN.md) and follow that project's own controlling instructions.

## Contributor entry

Before source edits, verification or campaign work, explicitly load [acceptance/AGENTS.md](acceptance/AGENTS.md), including work outside acceptance/. It owns source orientation, verification commands, publisher/package prerequisites, acceptance coordination and the closed-record boundary. Read applicable nested instructions before work on their paths; TextStats has a separate coordinator entry.

Use current source and the selected active campaign rather than reading frozen reports as a routine work queue. Discover ownership and actual branch/pending state through Git. Preserve unrelated changes, controlling human instructions and closed campaign artifacts. This repository uses campaign plans/reports instead of a root executable TASKS owner; do not invent task IDs from findings.

## Persistence and scope

Coordinate source changes through [sdd-manage](.agents/plugins/sdd-manager/skills/sdd-manage/SKILL.md) within the accepted request and stopping boundary. Publish and read back every workflow-owned commit before further work or another commit; unresolved publication pauses progression. Follow [Git integration and recovery](.agents/plugins/sdd-manager/skills/sdd-manage/references/git-workflows.md), using explicit verified integration only at the authorized complete boundary. Keep credentials protected and out of source/evidence.

Maintain abbreviated repository README.md, full packaged README.md and packaged agent-facing PLUGIN.md and source-only contributor/acceptance documents according to their audiences. Before editing PLUGIN.md or the `sdd-manage` entry/module boundaries, load the [plugin development contract](docs/dev/PLUGIN-CONTRACT.md) for its architectural scope, responsibilities, organization and assessment guidance. Root AGENTS.md is development guidance, not a package workflow entry; package/snapshot contracts exclude it. Apply the shared [Markdown conventions](.agents/plugins/sdd-manager/skills/sdd-conventions/references/markdown-style.md) and verify relevant commands/links through the contributor entry.

## Source and package roots

The Git repository root owns development documents, acceptance and CI. The complete plugin source is `.agents/plugins/sdd-manager/`; its manifest, entries, skills and assets are relative to that package root. Repository agents may load this local source when developing SDD Manager; separate installation remains optional. Loading configuration and instruction reload are user-controlled. Keep target-project root paths distinct from package-source paths. Root usage/disclosure notices remain repository records; packaged templates live only in package assets/. Keep root and package LICENSE copies identical.
