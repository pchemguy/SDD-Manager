# `sdd-manage` development contract

## Purpose and scope

[sdd-manage](../../../../skills/sdd-manage/SKILL.md) coordinates SDD Manager workflows: it establishes context, selects the path, checks shared prerequisites, delegates to focused skills and preserves the authorized completion boundary. Its `SKILL.md` entry must make the next coordination decision clear and route conditional procedures to `references/*.md` or their owning skills.

This source-only document guides maintainers reviewing or changing that entry and its module boundaries. It defines responsibilities, composition criteria and a targeted assessment program. Target-project agents use the packaged skill instructions; this contract is not a runtime dependency. Contributor verification follows [acceptance/AGENTS.md](../../../../acceptance/AGENTS.md).

The [plugin entry contract](../../PLUGIN-CONTRACT.md) governs the plugin's capability projection and entry routing. The coordinator is a standard skill entry and can define canonical orchestration guidance. Its entry and references must remain sufficient when `PLUGIN.md` is unavailable. Development contracts describe the architecture and its assessment; operational instructions remain in packaged owners.

## Coordinator responsibilities

- **Context and selection:** establish or recover the project, active workflow/stage, accepted inputs, pending decisions and unfinished work. Select by objective, assess continuation or switching, and explain consequential decisions in chat.
- **Prerequisites and authority:** identify the next eligible operation, required inputs, human checkpoints, Git baseline, requested tracking and available capabilities. Preserve the actual request and session decisions through handoffs.
- **Delegation:** identify the responsible skill, load its entry and relevant modules, and pass scope, evidence, permitted effects and stopping point. Execution, range selection, document authorship and provider operations retain their focused owners.
- **Continuity and completion:** reconcile observed results and blockers; coordinate persistence and eligible integration without expanding scope or resuming work beyond the requested checkpoint.
- **Evidence:** return actual results, verification limits, publication/hosting state, unresolved decisions and the reached boundary. Distinguish technical readiness, human acceptance and performed operations.

Established owner/context should resolve routine follow-ups. Missing or stale evidence requires scoped recovery, not compulsory workflow re-entry. A narrow operation need not activate a full development campaign.

## Entry and module boundaries

The entry needs enough explicit guidance to orient less capable or local models while keeping detailed procedures under their owners. Concision is assessed by usefulness, structure and maintenance cost, not a fixed byte or word ceiling.

### Guidance that must remain visible

| Concern | Entry-level obligation |
| --- | --- |
| Selection and context | Recover sufficient evidence before an evidence-backed selection. Reuse valid context; explain a material path or boundary change before dependent work. |
| Authority and HIL | Assessment does not authorize repairs. Each necessary new development document has its human acceptance gate; acceptable existing inputs do not require automatic replay. |
| Git publication | Push/read back each workflow-owned commit before further work or another commit. Preserve explicit scoped publication exceptions; unresolved publication blocks advancement. |
| Task closure | The implementation owner closes one executable task with its verified result, evidence and initial completion checkbox together, and performs the applicable persistence audit. |
| Requested tracking | Once selected, required eligible-phase objects and associations must be verified before dependent implementation. Authentication and object existence do not establish the tracking decision. |
| Integration and stops | A partial main phase pushes and pauses. Integrate only an eligible authorized boundary; steering returns without resuming implementation. |
| Preservation and recovery | Preserve unrelated work and pending human decisions. Keep closed campaign records unchanged except an explicitly authorized eligible reopening. |

A concise reminder and loading condition may repeat an owner's rule where they prevent a consequential handoff error. Repetition that reproduces syntax, payload fields, eligibility algorithms or recovery steps belongs in the detailed owner. Before removing a qualifier from the entry, verify that the destination preserves it and remains reachable when needed.

### Conditional procedure ownership

| Coordination need | Load / owner |
| --- | --- |
| Workflow selection, continuity and operation boundaries | [workflows.md](../../../../skills/sdd-manage/references/workflows.md), including its selection, core-workflow and release-operation sections |
| Shared prerequisites, handoff payloads, persistence, results and environment recovery | [coordination.md](../../../../skills/sdd-manage/references/coordination.md) |
| Repository guidance and first SDD adoption records | [agent-orientation.md](../../../../skills/sdd-manage/references/agent-orientation.md), [repository-bootstrap.md](../../../../skills/sdd-manage/references/repository-bootstrap.md) |
| Human acceptance and technical document readiness | [human-document-review.md](../../../../skills/sdd-manage/references/human-document-review.md), [document-qc-gates.md](../../../../skills/sdd-manage/references/document-qc-gates.md) |
| Branch identity, preparation integration, publication and Git recovery | [branch-management.md](../../../../skills/sdd-manage/references/branch-management.md), [git-workflows.md](../../../../skills/sdd-manage/references/git-workflows.md) |
| Tracking selection, eligible-phase readiness and credential recovery | [tracking-decision.md](../../../../skills/sdd-manage/references/tracking-decision.md), [phase-activation.md](../../../../skills/sdd-manage/references/phase-activation.md), [credentials.md](../../../../skills/sdd-manage/references/credentials.md) |
| Formal reviews, accepted revisions, nested/reopened campaigns and selected prerelease review | [review-and-revision.md](../../../../skills/sdd-manage/references/review-and-revision.md), [revision-modes.md](../../../../skills/sdd-manage/references/revision-modes.md), [prerelease-review.md](../../../../skills/sdd-manage/references/prerelease-review.md) |
| Representative requests and scope contrasts | [examples.md](../../../../skills/sdd-manage/references/examples.md) |

The entry's routing should identify when these procedures are needed; their presence in a table does not require loading them all. Provider execution belongs to `sdd-forge`; task execution and commit syntax/audits belong to `sdd-implement` and `sdd-report`; amendments at implementation checkpoints belong to `sdd-steer`. Design, specification, planning, tasks, documentation, verification and accepted feature incorporation retain their existing owners.

## Recommended entry organization

Use section boundaries to distinguish four jobs:

1. **Role and scope:** coordinator purpose, focused ownership and selective loading.
2. **Coordination gates:** prominent short statements of the obligations above, with owner pointers.
3. **Coordination cycle:** establish/reuse baseline → select and explain → hand off → assess results → complete eligible persistence/integration and stop.
4. **Conditional routing:** group modules by context/preparation, execution/continuity, review/revision and release decisions.

These are section jobs, not mandatory headings or a fixed section count. A lifecycle-first arrangement is also valid if cross-cutting obligations remain prominent before their dependent actions. Each paragraph or step should have one controlling concern. Avoid a long introduction mixing purpose, exceptions and unrelated procedures, or unheaded obligations after the finish step.

Metadata should lead with the coordinator's purpose and retain supported activation distinctions. Tables support conditional lookup; ordered steps support sequence. Their overlap is useful only when it adds a loading condition or consequential gate. Shared formatting needs a clear convention pointer, not a second style guide.

## Review and change program

1. **Pin scope and source.** Identify entry/module changes, affected owners and the actual source. Review current authorities and active records; exclude closed packages from routine assessment.
2. **Reverse-outline the entry.** Record each section/paragraph's job. Assess hierarchy, topic sentences, grouping, flow, emphasis and information order. Size measurements provide context; token or model-cost claims require an identified tokenizer or observed trial.
3. **Compare clauses with owners.** For each repetition or proposed relocation, identify what the entry must retain, the detailed destination and its loading condition. Preserve qualifications and exceptions; establish missing destination guidance before removing it from the entry.
4. **Assess relevant contrasts below.** Check selection, baseline recovery, authority, HIL, publication, tracking and stop on both sides of consequential handoffs. Preserve narrow/direct operations and unavailable-owner reporting.
5. **Verify and report.** Check links/anchors, packaged containment, source-only exclusions and affected projections/navigation. Run contributor checks appropriate to the change. Report source coverage, observed behavior and unrun checks separately through the active campaign.

A finding should locate the problem, explain its consequence, name a bounded correction/owner and specify an objective recheck. Do not infer a defect from length alone, keyword presence, repeated links or a failed model assumption without examining its source and context. A relocation succeeds when the required instruction is available before its action, not merely when the entry becomes shorter.

## Guidance assessment contrasts

Start through `sdd-manage`, without requiring `PLUGIN.md`. Use ordinary project/session evidence, available skills and an eligible Git repository when mutations are selected. Assessment-only cases do not authorize downstream writes. These contrasts assess the coordinator layer; they are not fixed invocation syntax or mandatory model trials for every prose edit.

| Case | Situation / request contrast | Assess |
| --- | --- | --- |
| K-01 | New Tetris seed versus existing whole-project work: “Help me develop this project.” | Selection by purpose, factual baseline, eligible first owner and necessary document checkpoints |
| K-02 | Current workflow/evidence versus stale or missing context: “Continue.” | Reuse or scoped recovery; no guessed approval/range or repeated full startup |
| K-03 | Calculator's first milestone is a phase subset versus a completed full phase: “Implement through this boundary, then stop.” | Range selection belongs to implementation; partial push/pause versus eligible integration |
| K-04 | Tracking requested with missing objects versus tracking explicitly declined | Actual decision and projection readiness remain distinct; no silent downgrade or unrequested provider writes |
| K-05 | PROJECT awaiting acceptance versus acceptable existing preparation | Pending HIL blocks dependent authoring; sufficient existing inputs permit continuation without replay |
| K-06 | “Assess this checkpoint amendment” versus “Implement this amendment” | Read-only steering assessment versus scoped execution and return without task resumption |
| K-07 | “Review these documents” versus “Plan and fix these accepted findings” | Review/report persistence does not imply repairs; selected correction scope routes to its owners |
| K-08 | Collect highlights versus prepare complete notes versus publish a release | Distinct outputs, selected release modules and authorized effects; no implicit tag/provider publication |
| K-09 | Verified task/result committed but unpushed, including a clean worktree | Push/readback or scoped recovery precedes another work unit or commit |
| K-10 | Ordinary revision versus nested child versus selected eligible reopening | Correct identity, parent suspension/return and closed-record preservation; child completion does not resume its parent |

Use the [plugin contract cases](../../PLUGIN-CONTRACT.md#guidance-assessment-cases) and coordinator [examples](../../../../skills/sdd-manage/references/examples.md) for existing project situations. Add coordinator-specific facts or a new contrast only when the change introduces a distinction; avoid another complete prompt catalog.

For source review, record inspected instructions and gaps. A selected consumer trial separately records exact source/model, initial context, prompt, loaded instructions, visible decisions and observed boundary. Do not supply reviewer expectations to the consumer. Correct routing alone does not prove HIL, task closure, tracking, Git publication or stopping behavior; those require observed execution evidence. Passing deterministic source checks does not establish live acceptance or universal client support.
