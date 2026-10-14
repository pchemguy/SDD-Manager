# SDD Manager plugin development contract

## Scope and ownership

Develop and review SDD Manager's packaged [PLUGIN.md](../../PLUGIN.md) and its [sdd-manage](../../skills/sdd-manage/SKILL.md) coordinator using the responsibilities, organization and assessment criteria below. This document is source-only; target-project agents use packaged entries and references. Contributor verification follows [acceptance/AGENTS.md](../../acceptance/AGENTS.md).

| Layer | SDD Manager responsibility |
| --- | --- |
| `PLUGIN.md` | Project the plugin's capabilities, workflow paths and essential obligations; route entry requests to `sdd-manage` and focused skills |
| `sdd-manage` | Own coordination decisions, context recovery, shared readiness, handoffs, eligible integration and completion boundaries |
| Focused skills | Own document, task, steering, verification, reporting, incorporation and provider procedures |

## Plugin entry responsibilities

The entry generally leads the agent to load `sdd-manage` alongside it before other skills at workflow entry. It must identify supported paths through ordinary requests without making the human name skills or sequences. A directory can identify all fifteen capabilities, while activated owners interpret subsequent contextual requests.

Established workflow/skill context resolves ordinary follow-ups. When it cannot identify a clear path or owner, route to `sdd-manage` for selection/recovery using `sdd-orient` evidence as needed. Preserve pending approvals, task ranges and integration authority; ask only for consequential decisions that cannot be recovered. Detailed recovery stays with the coordinator and active owners.

### Orientation and routing

- **Coordinator pointer:** identify `sdd-manage`, link its entry and state when to load it alongside `PLUGIN.md`.
- **Context:** route entry-time establishment of project state, governing instructions, active workflow, accepted inputs and pending work to the coordinator; point to recovery when the request cannot be resolved from available context.
- **Workflow selection:** distinguish core workflows, variants and independent operations at entry. Identify the coordinator as owner of consequential stage changes or switches; preserve ordinary follow-ups within established workflow/skill context.
- **Skill routing and progressive loading:** map workflow/capability entry triggers to owners; explain selective loading and handoff. A concise directory may identify all bundled capabilities, including implementation, testing and reporting. Listing an owner does not make the entry interpret every later request; contextual range selection and procedures remain with activated skills.

### Composite workflow summaries

- Summarize canonical workflows through purpose/trigger, principal stages and owners, important outputs, human checkpoints and stopping boundaries.
- Identify consequential handoffs and the owner of the next action. Link the coordinator's workflow definition and the selected skills' procedures.
- Distinguish core workflows and variants from reusable stages and independent operations; show how skills compose a path without reproducing their execution instructions.

## Coordinator responsibilities

The coordinator establishes the development context and eligible stage, selects or recovers the workflow, checks shared prerequisites and delegates work to focused owners. It preserves the human's actual scope and decisions across stage changes, interruptions and handoffs, then coordinates eligible persistence/integration and returns the reached boundary.

- **Selection:** main development covers whole-project definition/delivery; feature adds a bounded capability; revision corrects or improves defined work. Steering is revision's human-directed amendment at a paused implementation checkpoint. New/existing project state informs the starting stage, not compulsory workflow selection.
- **Workflow loading:** explain selected workflows and actual loaded sources in chat when requested before development; do not turn loading into project preparation or mutation.
- **Scope and reporting:** check scope/instructions/pending decisions before each coherent unit and path/change before each write. Use event-based briefs, honor requested reporting detail and preserve consequential decisions, evidence and checkpoints at reduced detail. Canonical detail belongs to workflow/coordination references, not PLUGIN.md.
- **Continuity:** reuse sufficient owner/context on ordinary follow-ups. Recover missing/stale evidence before an evidence-backed decision. Explain material selection, stage/range changes or workflow switching in chat, including the basis, next owner and authorized stop.
- **Delegation:** range selection and task execution belong to `sdd-implement`; checkpoint amendments to `sdd-steer`; accepted feature reconciliation to `sdd-integrate-feature`. Document, verification, reporting and provider procedures retain their focused owners. The coordinator establishes their shared readiness rather than copying those procedures.
- **Completion:** collect actual results, acceptance/verification evidence, pending decisions and publication/hosting state. Coordinate only the eligible authorized boundary; a finished child operation or ready next task is not authority to resume its parent.

## Shared SDD gates

| Gate | Coordinator entry responsibility | Detailed owner |
| --- | --- | --- |
| Human preparation checkpoints | Each necessary newly created PROJECT, ARCHITECTURE, DECOMPOSITION, SPEC, PLAN, layout and TASKS proposal has its own human acceptance boundary. PLAN/layout are separate; reuse acceptable existing inputs. | [Human document review](../../skills/sdd-manage/references/human-document-review.md) and [document QC](../../skills/sdd-manage/references/document-qc-gates.md) |
| Per-commit publication | Push/read back every owned commit before further work or another commit, preserving explicit scoped exceptions. Unresolved publication blocks advancement. | [Git publication](../../skills/sdd-manage/references/git-workflows.md#publish-each-commit) |
| Task closing boundary | The implementation owner closes one executable task with its verified result, evidence and initial checkbox together; require its applicable bounded audit at continuation/integration. | [Task completion and audit](../../skills/sdd-implement/references/completion-and-checkpoints.md#task-commit-contract) |
| Requested tracking | Selected tracking requires verified eligible-phase objects/associations before dependent execution and evidence-based lifecycle maintenance. Authentication is separate from activation choice. | [Tracking decision](../../skills/sdd-manage/references/tracking-decision.md), [phase activation](../../skills/sdd-manage/references/phase-activation.md), `sdd-forge` |
| Preparation and integration | Accepted project preparation is merged/verified/published before dependent implementation branching. Campaign records retain revision-branch ownership. Partial main phases push/pause; integrate only complete eligible boundaries. | [Branch management](../../skills/sdd-manage/references/branch-management.md), [Git integration](../../skills/sdd-manage/references/git-workflows.md) |
| Assessment and steering stops | Review or impact assessment does not authorize repairs. A commanded steering amendment returns without resuming tasks; the human defines implementation ranges and what follows them. | [Review/revision](../../skills/sdd-manage/references/review-and-revision.md), `sdd-steer`, `sdd-implement` |
| Campaign preservation | Nested children preserve parent suspension/source/return; closure does not resume the parent. Closed records remain frozen except a selected eligible reopening. | [Revision modes](../../skills/sdd-manage/references/revision-modes.md), [closed records](../../skills/sdd-conventions/references/review-campaigns.md#closed-campaign-records) |

These gates constrain delegated SDD work and must be visible before the dependent handoff. Repeating a short gate at that handoff is justified when it prevents a consequential coordination error. Exact commit syntax, provider reconciliation, branch algorithms and eligibility/recovery procedures stay with their owners.

## SDD coverage and canonical owners

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

## Entry organization and coordinator modules

| Entry | Decision order to communicate |
| --- | --- |
| `PLUGIN.md` | Identity/coordinator loading → request/context and core purposes → prominent HIL/publication/tracking obligations → capability routing → composite summaries → continuity and shared owners |
| `sdd-manage/SKILL.md` | Role → shared SDD gates → baseline/selection/handoff/result cycle → conditional coordination modules |

A different arrangement is acceptable if each required decision and gate remains clear before its dependent action. Human examples/diagrams belong in README; package entry summaries and coordinator procedures address agent use. Source-development commands and acceptance coordination stay outside runtime guidance.

The coordinator's `SKILL.md` must have a clearly identified routing section, preferably a table, individually naming and linking every `references/*.md` file. For each file, state its purpose, scope, boundary and loading conditions, including unconditional use where applicable, so selection is possible from the entry before reading the reference. Compare the file inventory with that section; domain labels alone do not establish complete routing. This does not require every module to be loaded at startup.

The domain map below identifies canonical coverage for development review:

- **Context/path:** [workflows](../../skills/sdd-manage/references/workflows.md), [coordination](../../skills/sdd-manage/references/coordination.md) and [examples](../../skills/sdd-manage/references/examples.md).
- **Preparation/adoption:** [agent orientation](../../skills/sdd-manage/references/agent-orientation.md), [repository bootstrap](../../skills/sdd-manage/references/repository-bootstrap.md), human review and document QC above.
- **Execution/continuity:** branch/Git, tracking/activation above and [credentials](../../skills/sdd-manage/references/credentials.md).
- **Review/revision/release:** review/revision and revision modes above, [prerelease review](../../skills/sdd-manage/references/prerelease-review.md) and workflows' [release operations](../../skills/sdd-manage/references/workflows.md#release-operations). Preserve highlights, complete-message preparation, packaging and release-publication boundaries.

The coordinator cycle establishes/reuses evidence before selecting and reporting the path; it does not invoke orientation twice or restart established context routinely.

## Development checks

Establish affected operational guidance in its canonical owner before projecting it into PLUGIN.md. Recheck selection, readiness, visible decisions and stops on both sides of the changed handoff. Preserve narrow operations, accepted inputs, pending human decisions and unfinished work; a changed summary cannot widen authority or accept a pending document.

Before shortening the coordinator entry, map every removed clause to its canonical destination and actual loading condition. Check that the destination preserves the clause's qualifications; establish missing detail there first. Keep a concise consequential invariant in the entry when needed before loading or handoff. Recheck selective routing and pre-action gates after relocation.

Check current packaged owner links and the actual source/package boundary. Updating either entry requires rechecking affected README/capability projections, not automatically enlarging them. The independent SDD obligations and case protocol are retained here so this contract can assess both entry layers without depending on general review modules.

## Guidance assessment cases

The [Tetris](../demo/tetris/README.md) and [Calculator](../demo/calculator/README.md) guides provide project situations; canonical owners above define expected behavior. Preserve C/K case identities. These are reviewer cases, not fixed commands or new project requirements.

Use an eligible Git repository, available required skills and working publication access for selected mutation trials unless a case states otherwise. Record actual tracking choice and requested range. Entry cases begin through PLUGIN.md; contextual cases begin with the active owner; recovery cases remove only the stated context. Assess owner/context discovery separately from downstream execution. A coordinator trial starts through sdd-manage without PLUGIN.md.

For source assessment, inspect the applicable instruction and handoff evidence. A selected consumer trial receives ordinary project facts and permitted instructions, not expectations or a named expected workflow. Retain source/model, actual initial context/prompt, selected owner, loaded instructions, visible decision, reached boundary and pass/gap/blocked/unrun result. Static checks do not establish live behavior or host discovery; routine continuation does not require a new selection brief.

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

#### Broad review and revision variants

Use these entry variants of C-10/C-11 without a preselected artifact set or correction list:

| Variant and context | User prompt | Assess |
| --- | --- | --- |
| C-10a: Existing project; whole-project review requested; no repair authority | “Use SDD Manager to review this project.” | Coordinator-led orientation and review scope/units; select affected owners without making the human name skills. Clarify consequential scope/evidence choices where needed; no automatic repairs. |
| C-11a: Existing project; improvement objective and correction scope not established | “Help me revise this project with SDD Manager.” | Discover actual context and clarify the consequential intended improvement/boundary before execution. Do not invent prior findings, a correction objective or a compulsory full document chain. |

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

## Coordinator assessment contrasts

Start through `sdd-manage` without requiring PLUGIN.md. For each affected path, inspect the entry and responsible owners together: establish what evidence and human decision select the path, which shared gates precede the handoff, and which result or blocker returns control. Check that the selected module becomes available before its dependent action. Use the [plugin cases](PLUGIN-CONTRACT.md#guidance-assessment-cases) and coordinator examples for project situations; add the relevant coordinator context. Cases specify source-review concerns, not claims of live acceptance.

| Case | Contrast | Coordinator consequence |
| --- | --- | --- |
| K-01 | New Tetris seed / existing whole-project work | Purpose-based main/feature/revision selection, eligible first owner and document checkpoints |
| K-02 | Current workflow evidence / missing or stale context | Context reuse or scoped recovery; no guessed approvals/range or repeated startup |
| K-03 | First calculator milestone / complete phase | Implementation range owner; partial push/pause versus eligible integration |
| K-04 | Tracking requested with missing objects / tracking declined | Actual decision versus projection readiness; no silent local-only downgrade |
| K-05 | PROJECT awaiting acceptance / acceptable existing inputs | Hold dependent authoring versus continue without retrospective replay |
| K-06 | Impact assessment / commanded checkpoint amendment | Read-only steering versus scoped execution and return without task resumption |
| K-07 | Review-only / accepted repairs | Report persistence versus authorized remediation with selected owners |
| K-08 | Highlights / complete notes / release publication | Selected release path and distinct effects; no implicit tag/provider writes |
| K-09 | Verified closing commit unpushed / published checkpoint | Publication/recovery before any new work, even with a clean tree |
| K-10 | Ordinary revision / nested child / eligible reopening | Identity, suspended parent return and frozen-record boundary |

For each assessed case, retain the actual source and starting context, selected stage/owner, gate evidence, visible decision and reached boundary. Source consistency does not prove observed HIL, task publication, tracking or stopping behavior; report unexecuted behavior separately. Entry revisions should also recheck affected PLUGIN.md/capability projections without automatically enlarging them.

## Workflow loading and reporting checks

Assess read-only workflow loading separately from project-document preparation: actual sources, relevant stages/checkpoints, scope and next step must be discoverable through either entry without implied writes or development authority. Selected instructions precede definitive procedure reporting and dependent work. Greenfield remains main development's starting context.

Compare default and human-requested reduced reporting on unchanged continuation, a material switch, an unavailable source and a pending approval. Check that repeated context can be omitted while consequential decisions, blockers, verification and human checkpoints remain visible. Clarification supplies requirements, not artifact acceptance. Check scope before work and both path and change before writes; reporting brevity cannot remove those obligations. These source contrasts add to the retained C/K cases without claiming model behavior.
