# PLUGIN.md development contract

## Scope and motivation

Skills and plugins enable modular organization of agent capabilities. Within a skill, complex functionality can be decomposed into capability modules in `references/*.md`. The skill’s `SKILL.md` entry orients the agent and explains when to load each module, providing enough guidance to select relevant instructions without loading every reference at once.

Plugins add a further level of composition by grouping skills. The modular architecture enabled by skills and plugins provides two major benefits:

- **Development:** maintainable units with clear responsibilities and limited coupling.
- **Context management:** progressive loading that limits unnecessary context use and context pollution.

At the plugin level, unrelated skills can be bundled for distribution. Each skill is loaded independently through its own entry; such a bundle does not require a shared workflow entry.

For an integrated set of capabilities, a plugin provides a broader decomposition: relatively weakly coupled capabilities become skills, while closely related sub-workflows remain references within each skill. Shared workflow capabilities can be factored into dedicated skills that other bundled skills reuse, much as software libraries support reuse across components.

An integrated plugin should have a shared entry, `PLUGIN.md`, analogous to `SKILL.md` to orient the agent across the system and route workflows that compose several skills.

A sufficiently complex plugin may also define a dedicated coordinator skill to manage composite workflows. The loading path becomes `PLUGIN.md` → coordinator `SKILL.md` → selected skill entries and references. Other skills can link primarily to the coordinator and a small set of shared capabilities, forming a star-like dependency structure.

## Purpose and use

This source-only contract guides human maintainers and development agents creating or reviewing SDD Manager's packaged [PLUGIN.md](../../PLUGIN.md). It explains the entry's responsibilities, content boundaries, organization and assessment. It does not supply instructions for running SDD Manager in a target project.

For SDD Manager, [sdd-manage](../../skills/sdd-manage/SKILL.md) is the coordinator. `PLUGIN.md` is its front: a concise projection of capabilities, workflows and essential obligations defined in skill entries and references. It should generally lead the agent to load the coordinator before other skills. `PLUGIN.md` is a non-standard entry convention; essential operational guidance must remain reachable through the coordinator and owning skills when the host does not load it.

Use Responsibilities to check coverage, Recommended organization to compose the entry, and Development and review to assess changes. The assessment cases distinguish workflow entry, established-context requests and recovery, checking the responsible layer and its handoffs. Contributor verification remains governed by [acceptance/AGENTS.md](../../acceptance/AGENTS.md).

### Entry and established context

`PLUGIN.md` orients the agent at workflow/capability entry and routes it to the coordinator and appropriate skills. Those entries and handoffs establish the context for subsequent work. A follow-up such as “implement through the first milestone, then stop” is normally interpreted by the active workflow and `sdd-implement`, using established inputs, task ownership and authority. It does not normally require reloading `PLUGIN.md` or selecting the workflow again.

The entry should provide a concise fallback: when available context does not support a clear workflow or owner interpretation, use `sdd-manage` for [selection and context recovery](../../skills/sdd-manage/references/workflows.md#workflow-selection-and-continuity). Reuse sufficient context; recover missing project/stage/owner state through applicable skills and focused orientation. A known owner may resolve a narrow request directly through its own entry. Detailed recovery remains with these owners.

Lost context does not justify guessing approvals, task ranges or integration authority. Ask the human only for consequential decisions that cannot be recovered. Do not require the user to learn lower-level skill names or manually reconstruct technical context before making a normal workflow request.

## Responsibilities

`PLUGIN.md` summarizes how bundled skills work together and routes the agent to their instructions. Its responsibilities fall into three groups.

### Orientation and routing

- **Coordinator pointer:** identify `sdd-manage`, link its entry and state when to load it alongside `PLUGIN.md`.
- **Context:** route entry-time establishment of project state, governing instructions, active workflow, accepted inputs and pending work to the coordinator; point to recovery when the request cannot be resolved from available context.
- **Workflow selection:** distinguish core workflows, variants and independent operations at entry. Identify the coordinator as owner of consequential stage changes or switches; preserve ordinary follow-ups within established workflow/skill context.
- **Skill routing and progressive loading:** map workflow/capability entry triggers to owners; explain selective loading and handoff. Leave contextual range selection and execution instructions to the activated skills.

### Composite workflow summaries

- Summarize canonical workflows through purpose/trigger, principal stages and owners, important outputs, human checkpoints and stopping boundaries.
- Identify consequential handoffs and the owner of the next action. Link the coordinator's workflow definition and the selected skills' procedures.
- Distinguish core workflows and variants from reusable stages and independent operations; show how skills compose a path without reproducing their execution instructions.

### Key operational requirements

- **Authority and stopping boundaries:** distinguish assessment from execution, preserve the requested scope and identify when control returns to the human.
- **Human checkpoints:** make required document approvals and human-requested implementation range boundaries prominent. Distinguish clarification and agent checks from human acceptance; preserve pending decisions through interruption.
- **Git publication:** emphasize verified task closure, committing completed work, pushing each workflow-owned commit and remote readback before advancing, with explicit human exceptions preserved.
- **Backend implementation tracking:** establish when requested tracking gates execution and emphasize maintaining actual task/parent associations and evidence-based lifecycle transitions throughout implementation.
- **Branches, integration and continuity:** establish actual working/target identities, preserve unfinished work and distinguish partial checkpoints from eligible integration and recovery.
- **Visible decisions and evidence:** require a chat explanation of the selected workflow and its basis, authorized work and next checkpoint. Reports distinguish performed, verified, published, blocked and unobserved states.

Keep obligations needed before a handoff visible in `PLUGIN.md`. Defer detailed eligibility tests, handoff payloads, branch procedures, recovery algorithms and provider reconciliation to their owners. Repeat a rule where it prevents a consequential routing or stopping error; collapse repetition that merely retells a procedure. No substantial operational rule should exist only in `PLUGIN.md`.

### SDD Manager coverage and canonical sources

This map identifies the coverage baseline and principal sources. It is not a second skill catalog or an exhaustive procedure index.

| Coverage | Essential distinction | Canonical source |
| --- | --- | --- |
| Coordinator and selection | Workflow entry routes through `sdd-manage`; established context resolves follow-ups. Use coordinator recovery when interpretation is unclear, and explain consequential selection decisions in chat. | [Coordinator entry](../../skills/sdd-manage/SKILL.md), [selection and continuity](../../skills/sdd-manage/references/workflows.md#workflow-selection-and-continuity) |
| Core workflows | Main covers whole-project scope; feature adds a bounded capability; revision corrects or improves work. Steering is a revision variant at paused implementation. New/existing state informs entry, not compulsory routing. | [Core workflows](../../skills/sdd-manage/references/workflows.md#core-development-workflows) |
| Preparation | PROJECT is the project brief; ARCHITECTURE, DECOMPOSITION, SPEC, PLAN, layout and TASKS have distinct owners and dependencies. Enter at an established stage; use only necessary feature deltas. | [Preparation catalog](../../skills/sdd-manage/references/workflows.md#operation-catalog), [PROJECT brief](../../skills/sdd-design/references/project-brief.md) |
| Human checkpoints | Necessary new documents require separate human acceptance; requested implementation ranges define stops. | [Document review](../../skills/sdd-manage/references/human-document-review.md), [implementation checkpoints](../../skills/sdd-implement/references/completion-and-checkpoints.md) |
| Implementation and persistence | Summarize bounded execution and its invariants; range interpretation belongs to `sdd-implement` in established context. Task result/evidence/initial checkbox close together; publish each commit. | [Implementation entry](../../skills/sdd-implement/SKILL.md), [per-commit publication](../../skills/sdd-manage/references/git-workflows.md#publish-each-commit) |
| Requested backend tracking | Establish the tracking decision, project eligible work before execution and maintain associations/closures. GitHub uses native milestones; label fallback depends on provider support. | [Tracking decision](../../skills/sdd-manage/references/tracking-decision.md), [phase activation](../../skills/sdd-manage/references/phase-activation.md), [backend lifecycle](../../skills/sdd-conventions/references/backend-object-lifecycle.md) |
| Branches, integration and continuity | Recover actual identities and unfinished work; partial ranges preserve their branch, while complete boundaries use their eligible integration path. | [Branch management](../../skills/sdd-manage/references/branch-management.md), [Git workflows](../../skills/sdd-manage/references/git-workflows.md) |
| Independent operations | Preserve narrow review, verification, documentation, planning, task selection, accepted feature incorporation or hosted synchronization requests. | [Operation catalog](../../skills/sdd-manage/references/workflows.md#operation-catalog), [feature incorporation](../../skills/sdd-integrate-feature/SKILL.md), [hosting owner](../../skills/sdd-forge/SKILL.md) |
| Release operations | Highlights, complete retained release messages, package preparation and release publication have different outputs and authority. | [Release operations](../../skills/sdd-manage/references/workflows.md#release-operations), [release messages](../../skills/sdd-forge/references/release-message.md) |

## Recommended PLUGIN.md organization

Order information by when the agent needs it. The following groups describe section jobs, not mandatory headings or a fixed section count.

| Order | Group | Job |
| --- | --- | --- |
| 1 | Identity, coordinator and loading | Identify the plugin, coordinator entry and selective loading path. |
| 2 | Entry, context and selection | Route workflow entry, distinguish paths and identify the recovery owner; reuse sufficient context for follow-ups. |
| 3 | Prominent obligations | Surface human checkpoints, commit/push requirements and requested tracking gates before execution. |
| 4 | Skill routing | Map common concerns to owners and identify the next entry or reference. |
| 5 | Composite summaries | Explain how owners form the principal paths, with outputs and consequential stops. |
| 6 | Continuity and shared conventions | Summarize branch/integration/recovery boundaries and route record/style conventions to their owners. |

Merge groups when they serve the same decision point. Cross-reference a shared obligation from a composite instead of repeating its entire explanation. Keep human-oriented examples and diagrams in README; `PLUGIN.md` needs enough workflow structure to route an agent. Source-development commands and acceptance coordination remain outside the packaged entry.

## Development and review

### Change method

1. Identify the affected canonical owner and the accepted scope. Establish substantive operational guidance there before projecting it into `PLUGIN.md`; unresolved behavior or ownership requires a decision, not a PLUGIN-only rule.
2. Update affected routing, workflow summaries and prominent obligations. Preserve unrelated paths and narrow-operation boundaries.
3. Check agreement with canonical sources, correct owner links and progressive loading. Ensure packaged guidance does not require source-only files and resolved bundled references remain inside the plugin root.
4. Assess relevant cases below, adding a contrast when the change introduces a new routing or stopping distinction. Source inspection and model trials provide different evidence; a prose change does not automatically require a full acceptance campaign.
5. Report actual checks, unresolved decisions and evidence limits through the active development record. Follow contributor instructions for verification, publication and integration.

### Review concerns

- **Source fidelity and maintenance:** summaries agree with canonical owners; no essential operational rule exists only in `PLUGIN.md`. Changed source behavior has its affected projections and cases rechecked.
- **Concision and explicit guidance:** every passage supports selection, loading or respecting a workflow. Triggers, distinctions and boundaries remain explicit enough for less capable or local models; detailed procedures stay with owners. Evaluate useful guidance rather than a word quota.
- **Ordinary-request routing:** workflow entry does not require the human to know skill names or sequences. The entry supplies discovery and coordinator handoff; subsequent requests use established workflow/skill context. Unclear interpretation routes to recovery rather than forced user-level skill invocation.
- **Prominence:** obligations are visible before the decision or action they constrain. Correct instructions buried inside a later workflow description are insufficient.
- **Progressive-discovery completeness:** linked owners and modules are accessible and identifiable. Required unavailable skills or source-only package dependencies are gaps; relative links do not guarantee every client supports execution handoffs.
- **Continuity and scope:** established context resolves ordinary follow-ups without repeated plugin entry. Recovery or a consequential switch preserves accepted inputs, pending approvals, unfinished work and requested ranges. Review does not silently authorize repairs; steering does not resume implementation. Release-message/package preparation does not authorize tagging or hosted release publication; required Git publication still applies.

These concerns assess how effectively Responsibilities are communicated. They do not create additional target-project workflows or require another capability registry.

## Guidance assessment cases

The [Tetris](../demo/tetris/README.md) and [Calculator](../demo/calculator/README.md) guides supply representative project situations. Cases below are reviewer material, not additional plugin requirements or fixed invocation syntax. Expected behavior derives from the canonical sources above and the coordinator's [examples](../../skills/sdd-manage/references/examples.md).

### Assessment method

Supply the case's project/session facts through normal context or discoverable repository state. Unless a case says otherwise, use an eligible Git repository with required skills available, working publication access, applicable instructions satisfied and no unrelated pending changes. Explicitly record tracking choice and any established execution range; do not infer either from a project name. Do not supply expected behavior to the consumer or name its expected workflow in the prompt.

Use the starting condition of the case group below. Entry cases start with `PLUGIN.md` and allow progressive discovery. In-workflow cases start with already established coordinator/skill context; recovery cases deliberately remove selected context while retaining the stated discoverable evidence. Observe the responsible owner, context reuse/recovery, loaded instructions, consequential chat decisions and checkpoint. Do not require a new selection brief for an unchanged routine continuation. Downstream effects require a separately selected execution trial and evidence; merely naming a correct owner does not prove its procedure was followed. Accept a justified alternative or clarification when supplied state does not settle a consequential choice.

Record the case ID, source/model revisions, actual context/prompt, scope of the trial, observed behavior and result in existing development evidence. Use pass, gap, blocked or unrun with a reason. Static inspection establishes source coverage; model trials establish behavior only for the tested model and context. Starting with an explicitly supplied PLUGIN.md does not establish automatic host discovery. Test relevant paraphrases and contrasting state rather than matching literal prompt wording.

### Workflow and capability entry

Start with `PLUGIN.md` and no sufficient active workflow context. These cases assess its discovery/routing responsibility, including entry to an independent capability.

| Case and context | User prompt | Interpretation and discovery | Execution boundary to assess when selected |
| --- | --- | --- | --- |
| C-01: New Tetris repository; seed only; no accepted documents | “Help me develop a classic browser-based Tetris game using SDD Manager.” | Main development; coordinator/orientation/design; clarify material gameplay choices. | Publish each necessary new document for human review; do not invent accepted mechanics or advance through pending approvals. |
| C-02: New calculator; all three phases requested initially | “Use SDD Manager to develop a calculator: arithmetic first, then powers and logarithms, then trigonometry.” | Main scope includes all three phases; preparation owners. | Later phases do not become feature campaigns merely because they extend the baseline. |
| C-03: Calculator's initial scope complete; no paused implementation | “Use SDD Manager to add a basic/scientific mode toggle.” | Feature; inspect accepted behavior and discover necessary delta owners. | Clarify switching behavior; preserve feature document checkpoints and the authorized preparation/execution scope. |
| C-04: Existing Tetris code; whole-project completion requested; governing inputs missing | “Use SDD Manager to organize and complete this project.” | Inspect actual work; main development may fit whole-project scope. | Reuse sufficient existing work; do not force feature routing from existing code or restart everything from missing documents. |
| C-10: Existing ARCHITECTURE and DECOMPOSITION; review only | “Use SDD Manager to review the architecture and decomposition.” | Scoped design review with coordinator/conventions as needed. | Evidence-backed findings; no automatic remediation or implementation. |
| C-11: Findings and accepted correction scope supplied; no active workflow context | “Use SDD Manager to plan and fix these findings.” | Revision; discover affected owners and verification/reporting support. | Execute accepted corrections and publish coherent results; preserve pending decisions and the requested integration boundary. |
| C-12: Verified delivered range; version/context available; no release publication request | “Use SDD Manager to prepare a release message.” | Complete-message operation through coordinator/forge/report owners. | Prepare retained RELEASE-NOTES.md; no implicit tag or hosted release. Git persistence follows the selected owner procedure. |
| C-13: Same delivered range; highlights only | “Use SDD Manager to collect release highlights.” | Narrow highlights operation. | Return curated changes without upgrading the request to a full message or release publication. |
| C-16: Project directory outside Git; project-document creation requested | “Use SDD Manager to prepare this project’s documents.” | Conversation/read-only orientation may proceed; mutation requires eligible Git state. | Report mutation blocked; do not implicitly initialize Git or write project documents. |

### Requests within established workflow context

Start with the coordinator and relevant skill instructions/context already established through the workflow. These are continuity and handoff checks, not a requirement that PLUGIN.md independently interpret each prompt. For the contract review, assess whether entry routing can establish the necessary owner/context; downstream behavior belongs to those owners. Preserve case IDs when comparing prior records.

| Case and context | User prompt | Interpretation and discovery | Execution boundary to assess when selected |
| --- | --- | --- | --- |
| C-05: Established Tetris workflow/implementation context; phase paused, incomplete; verified task; hard drop currently locks immediately | “Use SDD Manager to change hard drop so it leaves the piece active under the normal locking policy.” | Context identifies an amendment; coordinator routes to steering and re-orients only if needed. | Reconcile affected documents/code/tests, verify/publish/integrate into the paused branch, then stop without resuming tasks. |
| C-06: Same state as C-05; impact assessment only | “Use SDD Manager to assess changing hard drop to follow the normal locking policy.” | Steering assessment; preserve assessment-only authority. | Return impact and proposed scope without implementing the amendment. |
| C-07: Main workflow and implementation owner already loaded; accepted calculator TASKS; first milestone is a strict subset of its phase; tracking declined | “Use SDD Manager to implement through the first milestone, then stop.” | Current implementation owner selects the requested range; no PLUGIN reload or fresh core workflow selection. | Verified task commits/pushes; stop on the incomplete phase branch, without hosted objects or phase integration. |
| C-08: Same range as C-07; GitHub tracking requested; task associations missing | “Use SDD Manager to implement through the first milestone, then stop.” | Established coordinator/implementation context invokes tracking/phase activation and hosting owners before execution. | Create/reconcile native milestones and issue associations; unresolved required projection blocks affected tasks. |
| C-09: Workflow/owner context and implementation range retained; last task committed but unpushed; clean worktree | “Continue with SDD Manager.” | Use the known implementation owner; inspect actual task/publication state without restarting discovery. | Publish/read back outstanding commit before new work; push failure blocks progression. Do not repeat completed implementation. |
| C-14: Main preparation context established; PROJECT published; human acceptance pending; no override | “Continue preparing the project with SDD Manager.” | Known coordinator/design context enforces the pending checkpoint; no new plugin entry. | Present/resolve the pending acceptance; do not treat continuation as approval or author dependent documents. |
| C-15: Implementation owner identified by the active workflow; accepted task range; required implementation skill unavailable | “Use SDD Manager to implement the first task.” | Identify the required unavailable owner and report the blocked capability. | Do not claim it ran or silently substitute instructions from an unrelated skill. |

### Missing-context recovery

Remove the stated active workflow context. Assess the entry's recovery pointer and the coordinator's recovery separately; do not assign the detailed recovery procedure to PLUGIN.md.

| Case and context | User prompt | Interpretation and discovery | Execution boundary to assess when selected |
| --- | --- | --- | --- |
| C-17: Active owner/stage context lost; project identified; retained repository records identify one active task list, eligible first milestone, tracking choice and branch | “Use SDD Manager to implement through the first milestone, then stop.” | When interpretation is unclear, discover/load `sdd-manage`; recover actual context and hand off range selection to `sdd-implement`. | Reuse recovered inputs and preserve the explicit range. Do not force the user to name a lower-level skill or restart project preparation. |
| C-18: Active range/authority context lost; repository identifies project and task list but does not retain the requested stopping point | “Continue with SDD Manager.” | Recover available state through the coordinator; identify the consequential range/authority still missing. | Ask for the unrecoverable stopping decision before execution; do not infer it from task readiness or branch names. |

### Canonical access without PLUGIN.md

Separately start through `sdd-manage` without loading `PLUGIN.md`. Check that selection/context, human checkpoints, publication, requested tracking and stopping obligations remain reachable through skill entries and references. For an observed trial, record this different starting condition explicitly. This checks independence from the non-standard entry; it does not prove host discovery or availability of every skill.

Across execution trials, retain actual evidence for HIL, task closure, commit/push, tracking and stopping behavior. Unperformed downstream checks remain unrun even when entry routing passes. Record which layer was assessed: plugin entry/handoff, contextual skill behavior or coordinator recovery.
