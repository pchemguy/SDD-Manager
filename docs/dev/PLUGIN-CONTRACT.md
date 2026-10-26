# SDD Manager plugin development contract

## Scope and ownership

Develop and review SDD Manager's packaged [PLUGIN.md](../../.agents/plugins/sdd-manager/PLUGIN.md) and its [sdd-manage](../../.agents/plugins/sdd-manager/skills/sdd-manage/SKILL.md) coordinator using the responsibilities, organization and assessment criteria below. This document is source-only; target-project agents use packaged entries and references. Contributor verification follows [acceptance/AGENTS.md](../../acceptance/AGENTS.md).

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
- **Continuity:** own the repository HANDOFF checkpoint and recovery from later records/Git, with automatic milestone/phase review and revision-finalization refresh rather than per-commit maintenance. Reuse sufficient context on ordinary follow-ups. Recover missing evidence and explain consequential selection/switching in chat; branch selection and parent return preserve actual authority.
- **Delegation:** range selection and task execution belong to `sdd-implement`; checkpoint amendments to `sdd-steer`; accepted feature reconciliation to `sdd-integrate-feature`. Document, verification, reporting and provider procedures retain their focused owners. The coordinator establishes their shared readiness rather than copying those procedures.
- **Completion:** collect actual results, acceptance/verification evidence, pending decisions and publication/hosting state. Coordinate only the eligible authorized boundary; a finished child operation or ready next task is not authority to resume its parent.

## Shared SDD gates

| Gate | Coordinator entry responsibility | Detailed owner |
| --- | --- | --- |
| Execution host and tools | Identify the actual execution host and required tools under applicable user/repository instructions. Reuse current evidence, report observed readiness blockers and preserve orientation's read-only role and repository pre-write gates. | sdd-orient and coordinator facilities checks |
| Project browser policies | Follow applicable project-defined browser development policies and declared setup before browser-dependent implementation/checks. Derive coverage from accepted contracts, preserve evidence limits and report conflicts rather than silently changing acceptance. Unrelated work acquires no browser prerequisites. | sdd-implement, sdd-tdd and sdd-verify |
| Human preparation checkpoints | Explicit scoped future-checkpoint preapproval is supported at any point, without waiving technical/publication/tracking gates or expanding implementation scope. Selected [doc-design modes](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/doc-design-modes.md) define scoped autodoc/autoloop preapproval, delegated decisions and DOCS-008 stops; explicit cursor reset reopens current-pass tasks/issues without discarding documents. Otherwise each necessary newly created PROJECT, ARCHITECTURE, DECOMPOSITION, SPEC, PLAN, layout and TASKS proposal has its own human acceptance boundary. Reuse acceptable existing inputs. | [Human document review](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/human-document-review.md) and [document QC](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/document-qc-gates.md) |
| Per-commit publication | Push/read back every owned commit before further work or another commit, preserving explicit scoped exceptions. Unresolved publication blocks advancement. | [Git publication](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/git-workflows.md#publish-each-commit) |
| Task closing boundary | The implementation owner closes one executable task with its verified result, evidence and initial checkbox together; require its applicable bounded audit at continuation/integration. | [Task completion and audit](../../.agents/plugins/sdd-manager/skills/sdd-implement/references/completion-and-checkpoints.md#task-commit-contract) |
| Requested tracking | Enabled main preparation verifies native sdd-docs-main/nine DOCS issues under the canonical pre-write gate, including its narrow transient coordination-lock exception; DOCS_TASKS contains task definitions/checkoffs; the separate DOCS_PREPARATION owns mode/pass, decisions and preparation evidence, including approval/QC references. Published documentation integration precedes milestone closure and the final implementation checkpoint. Implementation selected tracking requires verified eligible-phase objects/associations before dependent execution and evidence-based lifecycle maintenance. Prospective AGENTS-template policy is resolved before initialization writes, preserving explicit choices, existing policy and resumed state; it is not a plugin-wide default. Authentication is separate from selection. | [Tracking decision](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/tracking-decision.md), [phase activation](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/phase-activation.md), `sdd-forge` |
| Preparation and integration | Accepted project preparation is merged/verified/published before dependent implementation branching. Campaign records retain revision-branch ownership. Incoming synchronization preserves the receiving workflow and its unfinished boundary; completion returns to its recorded parent. Partial main phases push/pause rather than integrate outward. | [Branch management](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/branch-management.md), [Git integration](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/git-workflows.md) |
| Assessment and steering stops | Review or impact assessment does not authorize repairs. A commanded steering amendment returns without resuming tasks; the human defines implementation ranges and what follows them. | [Review/revision](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/review-and-revision.md), `sdd-steer`, `sdd-implement` |
| Campaign preservation | Nested children preserve parent suspension/source/return; closure does not resume the parent. Closed records remain frozen except a selected eligible reopening. | [Revision modes](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/revision-modes.md), [closed records](../../.agents/plugins/sdd-manager/skills/sdd-conventions/references/review-campaigns.md#closed-campaign-records) |

These gates constrain delegated SDD work and must be visible before the dependent handoff. Repeating a short gate at that handoff is justified when it prevents a consequential coordination error. Exact commit syntax, provider reconciliation, branch algorithms and eligibility/recovery procedures stay with their owners.

Shell/browser policies and technology-specific environment guides are bundled in assets/ for project-level use. AGENTS_TEMPLATE.md supplies their conditional activation. Plugin entries, skills and workflow references must not link to or activate these documents; README may describe their purpose as assets without linking to them. Generic reminders to follow applicable project policies remain appropriate before dependent work. No separate executable shell adapter is bundled.

## SDD coverage and canonical owners

This map identifies the coverage baseline and principal sources. It is not a second skill catalog or an exhaustive procedure index.

| Coverage | Essential distinction | Canonical source |
| --- | --- | --- |
| Coordinator and selection | Workflow entry routes through `sdd-manage`; established context resolves follow-ups. Use coordinator recovery when interpretation is unclear, and explain consequential selection decisions in chat. | [Coordinator entry](../../.agents/plugins/sdd-manager/skills/sdd-manage/SKILL.md), [selection and continuity](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/workflows.md#workflow-selection-and-continuity) |
| Core workflows | Main covers whole-project scope; feature adds a bounded capability; revision corrects or improves work. Steering is a revision variant at paused implementation. New/existing state informs entry, not compulsory routing. | [Core workflows](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/workflows.md#core-development-workflows) |
| Preparation | PROJECT is the project brief; ARCHITECTURE, DECOMPOSITION, SPEC, PLAN, layout and TASKS have distinct owners and dependencies. Enter at an established stage; use only necessary feature deltas. | [Preparation catalog](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/workflows.md#operation-catalog), [PROJECT brief](../../.agents/plugins/sdd-manager/skills/sdd-design/references/project-brief.md) |
| Human checkpoints | Necessary new documents require separate human acceptance; requested implementation ranges define stops. | [Document review](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/human-document-review.md), [implementation checkpoints](../../.agents/plugins/sdd-manager/skills/sdd-implement/references/completion-and-checkpoints.md) |
| Implementation and persistence | Summarize bounded execution and its invariants; range interpretation belongs to `sdd-implement` in established context. Task result/evidence/initial checkbox close together; publish each commit. | [Implementation entry](../../.agents/plugins/sdd-manager/skills/sdd-implement/SKILL.md), [per-commit publication](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/git-workflows.md#publish-each-commit) |
| Requested backend tracking | Establish the tracking decision, project eligible work before execution and maintain associations/closures. GitHub uses native milestones; label fallback depends on provider support. | [Tracking decision](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/tracking-decision.md), [phase activation](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/phase-activation.md), [backend lifecycle](../../.agents/plugins/sdd-manager/skills/sdd-conventions/references/backend-object-lifecycle.md) |
| Branches, integration and continuity | Recover actual identities and unfinished work; partial ranges preserve their branch, while complete boundaries use their eligible integration path. | [Branch management](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/branch-management.md), [Git workflows](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/git-workflows.md) |
| Repository checkpoints | HANDOFF describes a durable checkpoint; later task/decision evidence and Git reconstruct the delta. Review-task completion owns milestone/phase refresh; revision finalization and nested return retain the parent boundary. | [Continuity](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/continuity.md) |
| Independent operations | Preserve narrow review, verification, documentation, planning, task selection, accepted feature incorporation or hosted synchronization requests. | [Operation catalog](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/workflows.md#operation-catalog), [feature incorporation](../../.agents/plugins/sdd-manager/skills/sdd-integrate-feature/SKILL.md), [hosting owner](../../.agents/plugins/sdd-manager/skills/sdd-forge/SKILL.md) |
| Release operations | Highlights, complete retained release messages, package preparation and release publication have different outputs and authority. | [Release operations](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/workflows.md#release-operations), [release messages](../../.agents/plugins/sdd-manager/skills/sdd-forge/references/release-message.md) |

## Entry organization and coordinator modules

| Entry | Decision order to communicate |
| --- | --- |
| `PLUGIN.md` | Identity/coordinator loading → request/context and core purposes → prominent HIL/publication/tracking obligations → capability routing → composite summaries → continuity and shared owners |
| `sdd-manage/SKILL.md` | Role → shared SDD gates → baseline/selection/handoff/result cycle → conditional coordination modules |

A different arrangement is acceptable if each required decision and gate remains clear before its dependent action. Human examples/diagrams belong in the full packaged README; root README supplies abbreviated repository navigation; package entry summaries and coordinator procedures address agent use. Source-development commands and acceptance coordination stay outside runtime guidance.

The coordinator's `SKILL.md` must have a clearly identified routing section, preferably a table, individually naming and linking every `references/*.md` file. For each file, state its purpose, scope, boundary and loading conditions, including unconditional use where applicable, so selection is possible from the entry before reading the reference. Compare the file inventory with that section; domain labels alone do not establish complete routing. This does not require every module to be loaded at startup.

Manual AI provenance is owned by sdd-manage/references/ai-logs.md and is listed in the coordinator entry routing alongside other reference modules. Setup executes by default within initialization, with an explicit human/project opt-out or deferral; conversation recording remains manual and optional. The entry identifies selection conditions without duplicating the setup procedure or requiring transcript loading.

The domain map below identifies canonical coverage for development review:

- **Context/path:** [workflows](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/workflows.md), [coordination](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/coordination.md) and [examples](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/examples.md).
- **Preparation/adoption:** [main preparation](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/main-preparation.md), [agent orientation](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/agent-orientation.md), [repository bootstrap](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/repository-bootstrap.md), human review and document QC above.
- **Execution/continuity:** branch/Git, tracking/activation above and [credentials](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/credentials.md).
- **Review/revision/release:** review/revision and revision modes above, [prerelease review](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/prerelease-review.md) and workflows' [release operations](../../.agents/plugins/sdd-manager/skills/sdd-manage/references/workflows.md#release-operations). Preserve highlights, complete-message preparation, packaging and release-publication boundaries.

The coordinator cycle establishes/reuses evidence before selecting and reporting the path; it does not invoke orientation twice or restart established context routinely.

## Development checks

Establish affected operational guidance in its canonical owner before projecting it into PLUGIN.md. Recheck selection, readiness, visible decisions and stops on both sides of the changed handoff. Preserve narrow operations, accepted inputs, pending human decisions and unfinished work; a changed summary cannot widen authority or accept a pending document.

Before shortening the coordinator entry, map every removed clause to its canonical destination and actual loading condition. Check that the destination preserves the clause's qualifications; establish missing detail there first. Keep a concise consequential invariant in the entry when needed before loading or handoff. Recheck selective routing and pre-action gates after relocation.

Check current packaged owner links and the actual source/package boundary. Updating either entry requires rechecking affected README/capability projections, not automatically enlarging them. This contract retains the independent SDD obligations; its [assessment companion](PLUGIN-ASSESSMENT.md) owns the developed protocol/cases. Load the relevant case sections for selected assessment or an affected handoff, without making the entire library a prerequisite for every entry edit.

## Guidance assessment cases

Load the [assessment protocol and complete case library](PLUGIN-ASSESSMENT.md#guidance-assessment-cases) when selecting or reviewing affected entry, contextual, exploration, bounded-planning or missing-context scenarios. It preserves the C/E/D case identities and source-versus-consumer evidence boundary; cases do not create project requirements.

## Coordinator assessment contrasts

Use the [K-case contrasts](PLUGIN-ASSESSMENT.md#coordinator-assessment-contrasts) to assess both sides of a changed coordinator handoff, including direct entry without PLUGIN.md. Select relevant contrasts rather than loading every scenario for an ordinary edit.

## Workflow loading and reporting checks

Use the [loading/reporting assessment](PLUGIN-ASSESSMENT.md#workflow-loading-and-reporting-checks) when those responsibilities change, including profiles, bootstrap and pending human boundaries.

## Task recovery assessment

Use the [recovery assessment](PLUGIN-ASSESSMENT.md#task-recovery-assessment) for changes to acceptance, commit composition, publication preflight or recovery authority. It retains the distinctions and evidence required for those paths.

## Source package boundary

This repository stores its complete package under `.agents/plugins/sdd-manager/`, separate from contributor instructions, acceptance, CI and evidence. Assess package-root and Git-root paths independently: preserve sibling skill links and consumer target-root paths. Full README/LICENSE ship at package root; usage/disclosure templates ship only under assets/, with repository-root copies retained separately. Root README states local-source intent and links full documentation; loading configuration and active instruction updates are excluded from this layout contract.
