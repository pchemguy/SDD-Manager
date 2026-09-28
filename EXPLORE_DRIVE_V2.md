---
url: https://chatgpt.com/c/6aafd74d-9d74-83eb-b046-dd4384744e29
---

## 📗 Architectural Revision

> [!NOTE] Prompt
>  
> Let's proceed by discussing high-level concepts first. I want to 
> 
> 1. convert sdd-man into a plugin and split it into a set of capabilities/skills
> 2. abandon the option of working on non-git projects - the plugin/skills will refuse to modify non-git projects.
> 3. abandon transaction workflow with backup files. Since non-git projects are no longer supported, the checkpoints are simply git commits and the resumption process will reset dirty files in working tree when a reliable resumption of interrupted incomplete task cannot be performed.
> 4. develop additional workflows for architecture and decomposition development before creating the SPEC. I am also thinking about transforming PLAN into a higher-level artifact without the lowest-level execution units. The ROADMAP will be replaced with TASKS to make it more conventional.
> 5. make provisions for robust addition of new capabilities/skills for well-defined workflows (say, creation of GitHub issues and milestones for tasks/milestones/phases from the TASKS)

These changes fit together. The central shift is to make **Git the recovery boundary**, **PLAN the delivery strategy**, and **TASKS the executable work inventory**. The current skill puts task detail in PLAN, repeats its structure in ROADMAP, and maintains a separate transaction record. The revision can give each artifact a clearer job.

| Stage           | Proposed output                                                  | Responsibility                                                                                                                                  |
| --------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Exploration     | Accepted decisions and open questions                            | Establish the problem, constraints, and intended outcomes.                                                                                      |
| Architecture    | `ARCHITECTURE`                                                   | Define system boundaries, components, interfaces, dependency direction, and important design choices.                                           |
| Decomposition   | Architecture’s component tree, or a separate artifact when large | Refine responsibilities until the system can be specified coherently.                                                                           |
| Specification   | `SPEC`                                                           | State the required behavior, contracts, and acceptance conditions. Architecture informs it; SPEC becomes authoritative for the intended system. |
| Planning        | `PLAN`                                                           | Define implementation strategy, phases, milestones, dependencies, and their exit conditions.                                                    |
| Task derivation | `TASKS`                                                          | Define ordered, verifiable execution units under those milestones, with stable IDs and completion state. This replaces ROADMAP.                 |
| Implementation  | Code, tests, documentation, Git commits                          | Execute a requested range, verify it, report implemented features, and stop for steering.                                                       |

I would keep **phases and milestones canonically defined in PLAN**, with TASKS referencing them. Tasks would exist only in TASKS. That prevents the two documents from becoming competing task lists. LAYOUT can remain the physical ownership view, developed once architecture and contracts give it something concrete to locate.

For the plugin, I suggest a **small set of independently usable skills**, rather than one skill per document or every internal step:

- **Explore and design:** exploration, architecture, and decomposition. These may be one skill initially if users typically move among them in the same conversation.
- **Specify:** create and reconcile the authoritative SPEC.
- **Plan and derive tasks:** create PLAN, then derive and maintain TASKS. These are distinct outputs and could be separate skills.
- **Implement and resume:** discover status, execute bounded tasks, verify, commit, and recover interrupted work.
- **Review and steer:** inspect a checkpoint and make a focused revision or return to design.

Testing selection, reporting, and in-code documentation governance can be shared workflow rules invoked by those skills. They need their own skills only where independent invocation proves useful. This matches the plugin format’s model of multiple skills under one package, while letting each skill retain a clear activation and output. :chatgpt-content-reference{index="0"}

**Git-only recovery needs one explicit safety rule.** Every mutating workflow should verify that the project is in a valid Git worktree. A verified task ends in a commit; its TASKS entry records completion and links to that commit. At startup, the agent compares HEAD, the working tree, TASKS, and the requested range. It continues an interrupted task only when the dirty state can be attributed reliably to it; otherwise it returns to the last trusted commit and starts the task again. The old backup manifests and recovery directories can go. A lightweight journal may still be useful for narrative audit, but it should not be required to reconstruct project state.

The difficult case is **uncommitted user work mixed with interrupted agent work**. I recommend implementing tasks in a dedicated Git worktree. Then an unrecoverable interrupted task can be reset there without discarding changes in the developer’s main worktree. If implementation must also run in a shared worktree, the agent should identify ownership before resetting files; an ambiguous dirty state should block an automatic reset.

For future capabilities, define a narrow **extension contract**: when a capability activates, what authoritative artifacts it reads, what it may write, how it identifies objects across repeated runs, and how it reports drift or partial failure. A GitHub publishing skill could then read stable TASKS IDs and reconcile issues and milestones without making GitHub the source of truth. One plausible mapping is task → issue, milestone → GitHub milestone, phase → label or other grouping; GitHub exposes these as separate issue, milestone, and label facilities. :chatgpt-content-reference{index="1"} Scripts would remain optional for deterministic operations such as validation or synchronization.

The first architectural decision I would settle is: **should a dedicated Git worktree be the default requirement for implementation, or should shared-worktree implementation remain supported with a conservative reset policy?** That choice determines how strong and automatic the new recovery promise can be. I have left the feature branch untouched during this discussion.

---
---

## 📗 Explore and Design

> [!NOTE] Prompt
>  
> Let's focus first on Exploration/Architecture/Decomposition and `Explore and design` skill  Should this skill be called `sdd-design`/`sdd-explore`/`sdd-explore-design` or what? It should produce or update (in docs/dev/) PROJECT.md, which should capture concise project overview, ARCHITECTURE.md, and DECOMPOSITION.md.
> 
> Exploration stage is OK. 
> 
> ARCHITECTURE.md and DECOMPOSITION.md are necessary for from-scratch workflows, and FEATURE_ARCHITECTURE.md (may include feature scope/definition) and FEATURE_DECOMPOSITION.md may be necessary for architectural revisions. ARCHITECTURE.md will need to capture concise project overview and high-level architectural decisions and design, such as major blocks/components (like deterministic core/engine + shell + ...), patterns, etc.. ARCHITECTURE.md should probably include only limited project-specific links. The details shall be developed in DECOMPOSTION.md.

I recommend **`sdd-design`**. It names the outcome of the skill while allowing exploration to remain conversational.

| Name                 | Assessment                                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------------------ |
| `sdd-explore`        | Suggests the skill stops before producing design documents.                                                  |
| `sdd-explore-design` | Accurate, but cumbersome to invoke and narrow if the skill is later used to revise an existing architecture. |
| **`sdd-design`**     | Covers exploration, initial design, and architectural revision without implying that it writes code or SPEC. |

Its description should make the boundary explicit: _explore a software project, develop or revise its architecture and decomposition, and maintain the pre-specification design documents._

### Document responsibilities

| Document                    | Canonical content                                                                                                                                                               |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs/dev/PROJECT.md`       | Concise project brief: purpose, users, problem, desired outcomes, scope, key constraints, and terms needed to orient a reader.                                                  |
| `docs/dev/ARCHITECTURE.md`  | Concise system design: major blocks, their relationships and dependency direction, selected patterns, system-wide design principles, and the reasons for consequential choices. |
| `docs/dev/DECOMPOSITION.md` | Detailed breakdown of those blocks: responsibilities, boundaries, collaborations, interfaces needing definition, and how components subdivide.                                  |

I would keep the project overview **canonical in PROJECT.md**. ARCHITECTURE.md can open with a two- or three-sentence orientation and link to PROJECT.md, then concentrate on design. That avoids maintaining two slightly different descriptions of the project.

Your proposed boundary for ARCHITECTURE.md is sound. For example, it might establish a deterministic core, an I/O shell, and an adapter layer, explain why those boundaries exist, and show their permitted dependency direction. DECOMPOSITION.md would then identify the components within each block, what each owns, and where their interactions occur. It should be allowed to grow into focused child documents if a single file becomes unwieldy. ARCHITECTURE.md needs only a small set of navigation links to those children and other governing documents.

**DECOMPOSITION is still design, rather than an early PLAN.** It answers “what parts does this system consist of, and what does each part own?” SPEC subsequently defines their required behavior and contracts; LAYOUT assigns physical locations; PLAN determines construction order; TASKS defines execution units. Exploration can revisit architecture when decomposition exposes a weak boundary. Document production need not force a one-way sequence.

### Initial work and revisions

For a from-scratch project, `sdd-design` would produce or update all three documents before SPEC authoring. For an existing project, it would inspect the actual system first and revise only the documents supported by the requested scope.

For a material feature or architectural revision, `FEATURE_ARCHITECTURE.md` can state the feature’s scope and the **proposed changes to the system design**. `FEATURE_DECOMPOSITION.md` can detail affected components and relationships. They should describe the delta, with unchanged parts referenced rather than copied. Once the revision is accepted and implemented, the main architecture and decomposition should describe the resulting system directly; Git preserves the history.

There is one existing convention we must deliberately change: the current sdd-man reads `docs/dev/PROJECT.md` as a **project instruction file**. Under this proposal it becomes a **project overview and design input**. I recommend keeping operational instructions in `AGENTS.md` or another explicitly designated instruction file, and removing the special instruction authority currently assigned to PROJECT.md. Otherwise the new documents would have an ambiguous precedence relationship.

The question I would settle next is whether **DECOMPOSITION.md may define provisional component interfaces**, leaving precise behavioral contracts to SPEC. I recommend yes: it should capture enough interaction detail to test the architecture for coherence, while clearly marking contract details that SPEC must resolve.

---
---

## 📗 Explore and Design Refine

> [!NOTE] Prompt
>  
> Everything is accepted. Both ARCHITECTURE.md and DECOMPOSITION.md should be allowed to use focused children, when appropriate.
> 
> Before we proceed to creation of the `sdd-design` skill, I need to clarify how shared capabilities are managed within the plugin. None of the focused workflow capabilities shall integrate common/shared capabilities. Say, agent repo orientation should occur before any change to the repo occurs. At least the orchestrating agent must orient itself, for subagents workflows might vary, which is ok as orchestrating agent should include the necessary boundaries in subagent context. Orientation shall include, among other things, reading key governing repo docs, verifying availability of git, worktree status, and so on.




Let's create plugin skeleton in the feature branch and the first `sdd-design` skill. Review the saved V1 snapshot to make sure that everything important for the old design is included.

