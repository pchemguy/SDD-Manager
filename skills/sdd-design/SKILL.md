---
name: sdd-design
description: Use when exploring a software project or feature, forming architecture decisions, developing a component decomposition, or creating and revising docs/dev/PROJECT.md, ARCHITECTURE.md, DECOMPOSITION.md, and scoped architectural change documents before specification.
---

# Explore and design

Choose the work requested and load only its reference. A request for a later stage can start there when its inputs are established; do not replay earlier stages as ceremony.

| Work | Load |
| --- | --- |
| Clarify the problem, compare alternatives, resolve decisions, or identify open questions | [exploration](references/exploration.md) |
| Define or revise major system blocks, dependency direction, and architectural decisions | [architecture](references/architecture.md) |
| Define or revise component responsibilities, collaboration, and provisional interfaces | [decomposition](references/decomposition.md) |

When the request crosses stages, load the next reference as that stage becomes relevant. Exploration can remain conversational. Do not create project documents solely because discussion has matured. Document creation or revision requires the user's request for that work and a current **sdd-orient** handoff identifying a usable Git worktree, applicable instructions, target paths, and unresolved dirty state. The invoking agent coordinates this prerequisite until `sdd-manage` owns coordination. This skill does not perform orientation or authorize a different workflow.

Use the **sdd-conventions** modularity reference when defining or reviewing boundaries, and its design heuristics when comparing approaches. Keep these checks separate from the document-specific procedures below. Observe project instructions and existing contracts; do not overwrite unowned changes. If required project evidence conflicts, resolve the conflict before mutation.

`PROJECT.md` owns the concise project brief, `ARCHITECTURE.md` owns high-level design, and `DECOMPOSITION.md` owns detailed logical component boundaries. Both architecture and decomposition may have focused children. Scoped feature documents express a proposed architectural delta where necessary. These documents inform SPEC; they neither replace its behavioral contracts nor authorize implementation, planning, layout authoring, or task execution.

At completion, state what was explored or changed, the decisions established, unresolved material questions, and which documents were inspected or updated. Report design as design, never as implemented functionality.
