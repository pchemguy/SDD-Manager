# Developing SDD Manager

This entry applies to the SDD Manager source repository. It is excluded from the plugin package. Agents using SDD Manager in another project start at [PLUGIN.md](PLUGIN.md) and follow that project's own controlling instructions.

## Contributor entry

Before source edits, verification or campaign work, explicitly load [acceptance/AGENTS.md](acceptance/AGENTS.md), including work outside acceptance/. It owns source orientation, verification commands, publisher/package prerequisites, acceptance coordination and the closed-record boundary. Read applicable nested instructions before work on their paths; TextStats has a separate coordinator entry.

Use current source and the selected active campaign rather than reading frozen reports as a routine work queue. Discover ownership and actual branch/pending state through Git. Preserve unrelated changes, controlling human instructions and closed campaign artifacts. This repository uses campaign plans/reports instead of a root executable TASKS owner; do not invent task IDs from findings.

## Persistence and scope

Coordinate source changes through [sdd-manage](skills/sdd-manage/SKILL.md) within the accepted request and stopping boundary. Publish and read back every workflow-owned commit before further work or another commit; unresolved publication pauses progression. Follow [Git integration and recovery](skills/sdd-manage/references/git-workflows.md), using explicit verified integration only at the authorized complete boundary. Keep credentials protected and out of source/evidence.

Maintain human-facing README.md, packaged agent-facing PLUGIN.md and source-only contributor/acceptance documents according to their audiences. Before editing PLUGIN.md or the `sdd-manage` entry/module boundaries, load the [plugin development contract](docs/dev/PLUGIN-CONTRACT.md) for its architectural scope, responsibilities, organization and assessment guidance. Root AGENTS.md is development guidance, not a package workflow entry; package/snapshot contracts exclude it. Apply the shared [Markdown conventions](skills/sdd-conventions/references/markdown-style.md) and verify relevant commands/links through the contributor entry.
