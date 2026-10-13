# PLUGIN.md contract

## Scope and motivation

Agent plugin is a natural extension of the modular skill architecture with support for progressive discovery. Conceptually, plugin architecture provides a second hierarchy level (plugin->skill->workflow/reference) for modeling more complex functionalities. Modular hierarchical architecture serves at least two purposes:

- enabling scalable/maintainable development similar to development of software
- AI context use/polution management

For a complex skill, individual capabilities are conventionally implemented as `references/*.md` modules, while the main entry, `SKILL.md`, provides agent orientation and guidance: by loading `SKILL.md` into context agent should get sufficient information necessary to decide when a particular `references/*.md` module should be loaded without dumping all `references/*.md` into context at once.

While skills within a bundle may be completely unrelated, using a plugin simply as a container (convenience), the plugin feature provides a considerable advantage to implementing complex integrated set of capabilities, where target scope can be first partitioned into a relatively loosely coupled major blocks to be modeled as skills, while more closely related capabilities within a skill are modeled and implemented as `references/*.md` modules. When a plugin is simply used like a package, each bundled skill needs to be loaded into AI context independently, and no `SKILL.md` analog is necessary. However, when a plugin represents an integrated complex, modeling a system of related workflows composing multiple bundled skills,  a `SKILL.md` analog becomes important for orienting an agent. For a sufficiently complex system, it may also be appropriate to define a dedicated coordinator skill, managing composite workflows (representing something like `PLUGIN.md-><coordinator skill SKILL.md>-><bundled skills (possibly start-like architechure with bundled skills primarily linking to the coordinator and, possibly, say, 1-2 other skills)>` .

## Purpose and audience

While not covered by the standard, PLUGIN.md is aimed to provide the same functionality for a plugin as SKILL.md for a skill.

is SDD Manager's agent entry for selecting and coordinating bundled skills. Starting there, an agent must discover the coordinator, select the appropriate workflow and find its authorized next procedure.

## Responsibilities

PLUGIN.md states cross-skill obligations, identifies owners and connects workflow stages. Handoffs preserve scope, authority, human decisions, verification, publication and stopping. Skill entries and references own procedural detail.

## Required coverage

| Concern | What the entry must make discoverable |
| --- | --- |
| Coordinator and loading | `sdd-manage` is the coordinator; generally load its entry with PLUGIN.md before other skills. Load further skills/references as needed. |
| Context and workflow selection | Recover new/existing/interrupted project state; select main development, feature or revision, including steering; assess continuation, stage/range changes and workflow switches. Preserve scoped standalone/direct operations. Route to [canonical selection](../../skills/sdd-manage/references/workflows.md#workflow-selection-and-continuity). |
| Visible decision | Report the workflow/variant and request/project basis, current stage/owner, authorized outputs and next human checkpoint/stop in chat before dependent work. Reuse sufficient context; reassess material changes. |
| Human control | Necessary new main/feature documents have individual human acceptance checkpoints; PLAN/layout are separate. Clarification/QC/Git authority cannot supply acceptance. Requested implementation ranges stop for human continuation or steering. |
| Git and integration | Mutations require an eligible Git worktree. Preserve controlling instructions and pending ownership. Push/read back each owned commit before advancing; task closure is atomic. Integrate only eligible verified boundaries and publish the target; preserve scoped exceptions. |
| Requested tracking | Prepare/read back eligible phase objects before implementation; maintain associations, evidence-based closures, reopening and recovery. GitHub uses native milestones; equivalents require supported backend lifecycle semantics. |
| Skill routing and handoffs | Route every bundled capability to its entry. Distinguish shared-reference loading from workflow selection; named handoffs carry inputs, state, scope, authority, evidence and stop. |
| Composite paths and continuity | Connect preparation/delivery, continuation, feature incorporation, review/revision, steering, releases and focused operations. Identify dependencies, integration/publication boundaries, recovery owners and return points; preserve active ownership and closed records. |

## Organization

Put coordinator loading and selection first, followed by these concerns:

| Position | Content |
| --- | --- |
| Opening | Plugin identity/purpose, coordinator-first loading and progressive discovery. |
| Request and context | Selection/recovery, continuity/switch assessment and visible decision. |
| Operational checkpoints | Pronounced human acceptance, commit/push/readback and requested tracking requirements. |
| Skill routing | Compact owner/entry/handoff map covering bundled capabilities. |
| Composite workflows | Stage/skill connections with necessary prerequisites and stopping boundaries. |
| Integration and continuity | Branch/target identity, eligible integration, pending-work preservation and recovery routing. |
| Shared conventions | Active/closed record boundaries, applicable style and protected credential handling, with owner links. |

## Content boundaries

- State entry-level obligations and triggers directly; link their canonical procedures.
- Composite sections connect stages and handoffs. Owners retain algorithms, templates, command recipes and sub-workflows.
- README serves humans with examples and diagrams; contributor entries own source development/acceptance guidance. Local links resolve within shipped files; source navigation uses repository URLs.
- Preserve human/project authority and skill ownership; metadata/loading claims require evidence.

## Review criteria

1. **Entry-only discovery:** The agent can discover the coordinator, select/recover the workflow without human skill-naming guidance and load the next procedure progressively.
2. **Boundary clarity:** Human decisions, range stops, publication and requested tracking are prominent and consistent with canonical prerequisites/exceptions.
3. **Composition:** Owner links, handoff inputs and stage/return boundaries cover main, feature, revision/steering and standalone paths.
4. **Concision:** Replace/consolidate existing prose where possible. Repetition serves discovery or a consequential checkpoint; growth must justify an entry responsibility, without a fixed word quota.
5. **Verification:** Check package links and trace affected routing/transitions. Distinguish source/static checks from consumer/client/provider observations; structural success does not establish agent behavior.

