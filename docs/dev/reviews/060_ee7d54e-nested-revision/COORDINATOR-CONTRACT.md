# `sdd-manage` development contract

## Scope

This contract defines the responsibilities, instruction boundaries and assessment cases for [sdd-manage](../../../../skills/sdd-manage/SKILL.md). Its entry must establish the next coordination decision, make shared SDD gates visible and route detailed procedures to their owners.

These are campaign development documents. Runtime agents use packaged skill entries and references; contributor verification follows [acceptance/AGENTS.md](../../../../acceptance/AGENTS.md). The [plugin contract](../../PLUGIN-CONTRACT.md) governs PLUGIN.md's capability projection. The coordinator may own canonical orchestration guidance and must remain usable without that non-standard entry.

## Coordinator responsibilities

The coordinator establishes the development context and eligible stage, selects or recovers the workflow, checks shared prerequisites and delegates work to focused owners. It preserves the human's actual scope and decisions across stage changes, interruptions and handoffs, then coordinates eligible persistence/integration and returns the reached boundary.

- **Selection:** main development covers whole-project definition/delivery; feature adds a bounded capability; revision corrects or improves defined work. Steering is revision's human-directed amendment at a paused implementation checkpoint. New/existing project state informs the starting stage, not compulsory workflow selection.
- **Continuity:** reuse sufficient owner/context on ordinary follow-ups. Recover missing/stale evidence before an evidence-backed decision. Explain material selection, stage/range changes or workflow switching in chat, including the basis, next owner and authorized stop.
- **Delegation:** range selection and task execution belong to `sdd-implement`; checkpoint amendments to `sdd-steer`; accepted feature reconciliation to `sdd-integrate-feature`. Document, verification, reporting and provider procedures retain their focused owners. The coordinator establishes their shared readiness rather than copying those procedures.
- **Completion:** collect actual results, acceptance/verification evidence, pending decisions and publication/hosting state. Coordinate only the eligible authorized boundary; a finished child operation or ready next task is not authority to resume its parent.

## SDD gates that must remain visible

| Gate | Coordinator entry responsibility | Detailed owner |
| --- | --- | --- |
| Human preparation checkpoints | Each necessary newly created PROJECT, ARCHITECTURE, DECOMPOSITION, SPEC, PLAN, layout and TASKS proposal has its own human acceptance boundary. PLAN/layout are separate; reuse acceptable existing inputs. | [Human document review](../../../../skills/sdd-manage/references/human-document-review.md) and [document QC](../../../../skills/sdd-manage/references/document-qc-gates.md) |
| Per-commit publication | Push/read back every owned commit before further work or another commit, preserving explicit scoped exceptions. Unresolved publication blocks advancement. | [Git publication](../../../../skills/sdd-manage/references/git-workflows.md#publish-each-commit) |
| Task closing boundary | The implementation owner closes one executable task with its verified result, evidence and initial checkbox together; require its applicable bounded audit at continuation/integration. | [Task completion and audit](../../../../skills/sdd-implement/references/completion-and-checkpoints.md#task-commit-contract) |
| Requested tracking | Selected tracking requires verified eligible-phase objects/associations before dependent execution and evidence-based lifecycle maintenance. Authentication is separate from activation choice. | [Tracking decision](../../../../skills/sdd-manage/references/tracking-decision.md), [phase activation](../../../../skills/sdd-manage/references/phase-activation.md), `sdd-forge` |
| Preparation and integration | Accepted project preparation is merged/verified/published before dependent implementation branching. Campaign records retain revision-branch ownership. Partial main phases push/pause; integrate only complete eligible boundaries. | [Branch management](../../../../skills/sdd-manage/references/branch-management.md), [Git integration](../../../../skills/sdd-manage/references/git-workflows.md) |
| Assessment and steering stops | Review or impact assessment does not authorize repairs. A commanded steering amendment returns without resuming tasks; the human defines implementation ranges and what follows them. | [Review/revision](../../../../skills/sdd-manage/references/review-and-revision.md), `sdd-steer`, `sdd-implement` |
| Campaign preservation | Nested children preserve parent suspension/source/return; closure does not resume the parent. Closed records remain frozen except a selected eligible reopening. | [Revision modes](../../../../skills/sdd-manage/references/revision-modes.md), [closed records](../../../../skills/sdd-conventions/references/review-campaigns.md#closed-campaign-records) |

These gates constrain delegated SDD work and must be visible before the dependent handoff. Repeating a short gate at that handoff is justified when it prevents a consequential coordination error. Exact commit syntax, provider reconciliation, branch algorithms and eligibility/recovery procedures stay with their owners.

## Coordinator module coverage and organization

Routing must expose all conditional coordination domains without requiring every module to be loaded:

- **Context/path:** [workflows](../../../../skills/sdd-manage/references/workflows.md), [coordination](../../../../skills/sdd-manage/references/coordination.md) and [examples](../../../../skills/sdd-manage/references/examples.md).
- **Preparation/adoption:** [agent orientation](../../../../skills/sdd-manage/references/agent-orientation.md), [repository bootstrap](../../../../skills/sdd-manage/references/repository-bootstrap.md), human review and document QC above.
- **Execution/continuity:** branch/Git, tracking/activation above and [credentials](../../../../skills/sdd-manage/references/credentials.md).
- **Review/revision/release:** review/revision and revision modes above, [prerelease review](../../../../skills/sdd-manage/references/prerelease-review.md) and workflows' [release operations](../../../../skills/sdd-manage/references/workflows.md#release-operations). Preserve highlights, complete-message preparation, packaging and release-publication boundaries.

A suitable entry progression is role → prominent coordination gates → baseline/selection/handoff/result cycle → conditional module routing. A lifecycle-first arrangement also works if cross-cutting gates remain visible before their dependent actions. The principal cycle establishes/reuses evidence before selecting and reporting the path; it does not invoke orientation twice or restart established context routinely.

## Coordinator assessment contrasts

Start through `sdd-manage` without requiring PLUGIN.md. For each affected path, inspect the entry and responsible owners together: establish what evidence and human decision select the path, which shared gates precede the handoff, and which result or blocker returns control. Check that the selected module becomes available before its dependent action. Use the [plugin cases](../../PLUGIN-CONTRACT.md#guidance-assessment-cases) and coordinator examples for project situations; add the relevant coordinator context. Cases specify source-review concerns, not claims of live acceptance.

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
