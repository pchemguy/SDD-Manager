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

`PLUGIN.md` summarizes how bundled skills work together and routes the agent to their instructions. Its responsibilities fall into three groups.

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

## Review concerns

### Canonical ownership and level of detail

`PLUGIN.md` is the front of the coordinator: a concise projection of capabilities, workflows and essential obligations defined in skill entries and references. Selective repetition is expected. Review whether each summary helps the agent select, load or respect a workflow, and whether procedural detail belongs with its owner instead. Composite workflow definitions should summarize the coordinator's definitions.

No substantial operational rule should exist only in `PLUGIN.md`. It is a non-standard entry convention; essential guidance must remain reachable through the coordinator and owning skills when the host does not load it. Check summaries against their canonical sources for omissions, contradictions and drift.

### Concision and explicit guidance

Judge concision by what the agent needs to act correctly, rather than a word limit. Keep triggers, the coordinator loading path, workflow distinctions, mandatory checkpoints and stopping boundaries explicit enough for less capable or local models. Do not replace these with vague instructions to “use the appropriate skill.” Detailed procedures can remain behind a clearly identified handoff.

### Routing from ordinary requests

A user should be able to ask SDD Manager to develop, extend, review or revise a project without knowing skill names or sequences. Starting with `PLUGIN.md`, the agent should discover the coordinator, establish relevant context, select the workflow or standalone operation and load its owners progressively. It should explain its choice and supporting evidence in chat, asking only for consequential missing information.

### Continuity and scope preservation

Check routing against existing state as well as wording. A new request may continue a workflow, change its stage or require a switch. The selected path must preserve pending approvals, unfinished work and human-requested implementation ranges. Review must not silently become revision; steering must not silently resume implementation; preparation must not silently become publication.

## Guidance assessment prompts

These examples assess `PLUGIN.md` guidance; they are not additional plugin requirements or consumer instructions. The [Tetris](../demo/tetris/README.md) and [Calculator](../demo/calculator/README.md) guides supply representative project situations. Release and recovery cases extend the set with common coordinator requests.

For each case, supply the stated repository/session context and start the agent with `PLUGIN.md`, allowing progressive discovery. Do not supply the assessment column to the agent or name the expected workflow in the prompt. Record the selected path, loaded owners, chat explanation and stopping boundary. Static inspection establishes source coverage; model runs establish observed routing for the tested model and context. Record which was performed.

| Context | User prompt | Assess |
| --- | --- | --- |
| New repository; preliminary description only | “Help me develop a classic browser-based Tetris game using SDD Manager.” | Main development; orientation and material clarification before governing documents; document review checkpoints. No invented gameplay decisions. |
| New calculator project; three phases requested from the outset | “Use SDD Manager to develop a calculator: basic arithmetic first, then powers and logarithms, then trigonometry.” | All three phases remain initial main scope; later phases are not automatically feature campaigns. |
| Existing calculator; initial scope complete | “Use SDD Manager to add a basic/scientific mode toggle.” | Bounded feature preparation from existing accepted behavior; clarify mode-switch behavior and affected documents. |
| Existing Tetris; original whole-project scope lacks accepted governing documents | “Use SDD Manager to organize and complete this project.” | Inspect existing work; consider main development for whole-project scope. Existing code alone does not dictate a feature workflow or a fresh restart. |
| Tetris implementation paused at a verified task checkpoint; phase incomplete | “Use SDD Manager to change hard drop so it leaves the piece active under the normal locking policy.” | Steering variant; assess and reconcile affected artifacts, preserve paused work, then return control without resuming implementation. |
| Accepted calculator task list; implementation not started | “Use SDD Manager to implement through the first milestone, then stop.” | Bounded implementation; requested tracking prerequisites, verified task commits and pushes; stop at the milestone without completing or integrating an unfinished phase. |
| Interrupted implementation; pending work and publication state available | “Continue with SDD Manager.” | Recover actual task, branch, publication and checkpoint state; continue only within retained authority or clarify a missing range. |
| Existing project; no correction authorization | “Use SDD Manager to review the architecture and decomposition.” | Scoped review of ARCHITECTURE and DECOMPOSITION; evidence-backed findings, without automatic remediation. |
| Review findings available; accepted correction scope supplied | “Use SDD Manager to plan and fix these findings.” | Revision planning and execution within the accepted scope; verify and publish changes, preserving pending decisions. |
| Verified delivered changes; no release publication requested | “Use SDD Manager to prepare a release message.” | Complete retained RELEASE-NOTES.md through release-message owners; no implicit tag or hosted release. “Collect release highlights” remains a narrower operation. |

Across applicable cases, also assess prominent human checkpoints, commit/push obligations, requested backend tracking and accurate evidence reporting. Test paraphrases and changed project state rather than treating these prompts as fixed invocation syntax.
