# PLUGIN.md contract

## Scope and motivation

Skills and plugins enable modular organization of agent capabilities. Within a skill, complex functionality can be decomposed into capability modules in `references/*.md`. The skill’s `SKILL.md` entry orients the agent and explains when to load each module, providing enough guidance to select relevant instructions without loading every reference at once.

Plugins add a further level of composition by grouping skills. The modular architecture enabled by skills and plugins provides two major benefits:

- **Development:** maintainable units with clear responsibilities and limited coupling.
- **Context management:** progressive loading that limits unnecessary context use and context pollution.

At the plugin level, unrelated skills can be bundled for distribution. Each skill is loaded independently through its own entry; such a bundle does not require a shared workflow entry.

For an integrated set of capabilities, a plugin provides a broader decomposition: relatively weakly coupled capabilities become skills, while closely related sub-workflows remain references within each skill. Shared workflow capabilities can be factored into dedicated skills that other bundled skills reuse, much as software libraries support reuse across components.

An integrated plugin should have a shared entry, `PLUGIN.md`, analogous to `SKILL.md` to orient the agent across the system and route workflows that compose several skills.

A sufficiently complex plugin may also define a dedicated coordinator skill to manage composite workflows. The loading path becomes `PLUGIN.md` → coordinator `SKILL.md` → selected skill entries and references. Other skills can link primarily to the coordinator and a small set of shared capabilities, forming a star-like dependency structure.

## Responsibilities

`PLUGIN.md` defines how bundled skills work together. Its responsibilities fall into three groups.

### Orientation and routing

- **Coordinator pointer:** identify the coordinator skill, link its entry and state when it should be loaded alongside `PLUGIN.md`.
- **Context:** identify the project and its new/existing/interrupted state, governing instructions, active workflow, accepted inputs and pending work needed for a sound routing decision.
- **Workflow selection:** explain how to choose a core workflow or variant and assess whether a request continues it, changes its stage or requires a switch. Preserve narrow standalone operations.
- **Skill routing and progressive loading:** map capabilities and request triggers to their owning skills and entry points; explain when to load supporting references without loading the whole bundle.

### Composite workflow definitions

- Define each workflow's purpose, entry conditions, stages, dependencies, participating skills, outputs and completion boundary.
- Identify stage ownership and cross-skill handoffs, including accepted inputs, actual state, pending work, verification/tracking evidence and the next permitted action.
- Distinguish core workflows and variants from reusable stages and supporting operations. Show how skills compose the path while retaining their individual responsibilities.

### Key operational requirements

- **Authority and stopping boundaries:** distinguish assessment from execution, preserve the requested scope and identify when control returns to the human.
- **Human checkpoints:** make required document approvals and human-requested implementation range boundaries prominent. Distinguish clarification and agent checks from human acceptance; preserve pending decisions through interruption.
- **Git publication:** emphasize committing completed work, pushing each workflow-owned commit and verifying remote containment before advancing. Identify task-closure and eligible integration requirements, with links to their procedures.
- **Backend implementation tracking:** establish when requested tracking must be prepared and verified; maintain task/parent associations, evidence-based closures, reopening and pending reconciliation throughout implementation.
- **Branches, integration and continuity:** establish working/target identities, preserve unfinished work and define eligible integration, publication, interruption recovery and return boundaries.
- **Visible decisions and evidence:** require a chat explanation of the selected workflow and its basis, authorized work and next checkpoint. Reports distinguish performed, verified, published, blocked and unobserved states.

State the essential obligations and triggers in `PLUGIN.md`; link their canonical procedures. Detailed execution remains with the owning skills and their references.
