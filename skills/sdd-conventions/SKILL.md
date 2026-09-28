---
name: sdd-conventions
description: "Use when an SDD workflow needs a convention shared across design, specification, planning, tasks, or implementation. Covers modularity, clear contracts, directed dependencies, localized verifiable changes, and pragmatic SOLID, DRY, and KISS design heuristics."
---

# Shared conventions

Use the relevant convention only when its concern occurs in the current work. Respect applicable project instructions and established contracts. This skill supplies reusable criteria; it does not perform repository orientation, own project artifacts, execute a workflow, or authorize mutation.

## Available convention

- **Modularity:** Read [modularity](references/modularity.md) when defining or reviewing boundaries among system blocks, components, document nodes, modules, or executable tasks.
- **Design heuristics:** Read [design heuristics](references/design-heuristics.md) when comparing design or refactor options using SOLID, DRY, or KISS.

Add a convention here only when it defines a clear invariant used by multiple workflows, can be applied without absorbing their stage-specific procedures, and does not own an artifact or operational workflow. Give each added concern its own focused reference and explicit trigger. Otherwise place it with the skill that owns the work.
