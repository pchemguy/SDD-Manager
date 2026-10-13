# Proposed workflow-selection revision

Campaign **054_4818390**; reviewed source `4818390aebaef921b463e58962eb82d9d0cb90e6`. This is a proposal, not implemented source. [Review findings](REVIEW-REPORT.md).

## Composition decision

Replace existing entry text rather than add another PLUGIN section. Reduce the composite-workflow introduction to navigation and keep all HIL/publication/tracking emphasis. The illustrative candidate is 2280 words versus 2286 current words (-6); [size method](size-assessment.json). This estimate covers only the two proposed replacements, not a claimed final implementation.

Keep detailed selection/continuity with its existing coordinator/catalog owner. No new workflow, universal per-response header, duplicate registry or extra approval gate. Do not move contributor guidance back into the package entry.

## PLUGIN.md — replace Establish the request and context body

```markdown
For project development, functionality, review or revision requests, use [sdd-manage](skills/sdd-manage/SKILL.md) to select or recover the workflow and assess whether the request continues it or requires a switch. Establish new, existing or interrupted project state through [sdd-orient](skills/sdd-orient/SKILL.md) when current context is insufficient. Select main development, feature or revision, including its steering variant, through the coordinator's [workflow selection](skills/sdd-manage/references/workflows.md#workflow-selection-and-continuity). Reuse current evidence and established identities.

Before starting the selected work, report the workflow/variant, supporting request and project evidence, current stage/owner, authorized outputs and next human checkpoint or stop in chat. Clarification does not accept new documents; preserve pending decisions and unfinished work. Narrow direct-skill or standalone requests retain their scope. Read-only work may occur without Git; mutations require an eligible worktree and do not implicitly initialize Git.
```

## PLUGIN.md — replace Composite workflows introduction

```markdown
Use the [workflow catalog](skills/sdd-manage/references/workflows.md) for core definitions and detailed transitions. The combinations below route their stages and supporting skills within established scope.
```

## sdd-manage — canonical selection procedure

Add the following section to `skills/sdd-manage/references/workflows.md` before Core development workflows; retain its existing definitions and steering procedure. The short classification here supports the decision steps; the existing table remains the complete core definition.

```markdown
## Workflow selection and continuity

Apply at a development/functionality/review/revision request when no sufficient workflow context exists, and when a later request may change the active objective, scope or stopping boundary. The human need not name a skill or core workflow.

1. **Recover context.** Use the request and established decisions; obtain `sdd-orient` evidence only where current project state is missing or stale. Distinguish a new project from existing or interrupted work, and recover the active workflow, stage, accepted inputs, pending human decisions, task range and unfinished owned work. Greenfield/brownfield is starting context, not a compulsory workflow choice.
2. **Select the path.** Apply the core definitions below. Whole-project definition/delivery uses main development; a bounded capability addition uses feature; review/correction/improvement uses revision. A human-directed amendment at a paused implementation checkpoint uses revision's steering variant. Preserve a narrow standalone operation or direct owner request when a full workflow is unnecessary. Treat explicit user selection as controlling within supported scope; ask only for a consequential ambiguity that prevents a sound selection.
3. **Assess continuity.** Determine whether the request continues the workflow, changes its stage/range, or switches workflows. A correction during preparation can remain with its current owner; a bounded addition does not require restarting main development. Do not switch from filenames, branch prefixes or missing documents alone. Before a switch, preserve pending work, authority and human checkpoints; apply the relevant branch/revision-mode procedure, including parent suspension/return where applicable. A switch cannot accept pending documents, widen scope or resume paused implementation.
4. **Report and route.** Before dependent authoring/execution, give a concise user-visible chat brief: workflow/variant (or standalone operation), continuation/stage-change/switch decision and its request/project evidence, current stage and owner, authorized outputs and next human checkpoint/stop. Cite relevant paths or observed state; distinguish facts from uncertainty. Visible progress commentary may carry the brief; hidden reasoning does not. Load only the selected owners and needed references, then act within the established boundary without another routine approval question.

Reuse an applicable selection and sufficient evidence on routine continuation; repeat the brief when the routing decision or authorized boundary materially changes. No per-response preamble, new journal or mandatory selection file is required.
```

## Entry and handoff amendments

| Target | Proposed amendment |
| --- | --- |
| `skills/sdd-manage/SKILL.md` routing row | Route workflow selection, continuity/switch assessment and the entry-time chat brief to `references/workflows.md#workflow-selection-and-continuity`. |
| `skills/sdd-manage/SKILL.md` step 1 | Establish/recover the workflow through that procedure before downstream work; retain explicit scope and missing-decision limits. Do not copy the procedure into the entry. |
| `skills/sdd-manage/references/coordination.md` Request / Proactive handoff | Carry the chosen core/variant or standalone operation, decision basis, continue/change/switch disposition and pending checkpoint through the handoff; link the canonical brief requirement. Do not rely on an internal handoff as the human report. |
| `skills/sdd-manage/references/examples.md` | Add a compact routing table for the scenarios below, including a chat decision and actual stopping point. |
| `sdd-orient` and `sdd-report` | Preserve existing roles; orientation supplies facts, coordinator selects/reports. No new reporting sub-workflow or orientation-owned selection needed. |

## Recheck scenarios

| Request / context | Expected decision and visible evidence |
| --- | --- |
| Help develop project XYZ; no project/workflow context | Inspect new/existing state, select purpose from request and observations, report entry/outputs/next checkpoint; do not assume greenfield from missing context. |
| Existing project needs whole-project design/specification | Main development at the next established stage; reuse sufficient inputs. |
| Add bounded functionality to an existing project | Feature preparation or its established continuation; necessary deltas only. |
| Review or revise existing work | Revision or focused assessment/correction within its scope; review alone stops before repairs. |
| Amend previously implemented behavior at a paused task checkpoint | Revision's steering variant; report paused target, assessment/execution authority and return boundary; no automatic resume. |
| Correct the currently reviewed PROJECT/SPEC draft | Current document-owner revision; pending presentation/acceptance remains, without inventing a feature campaign or unrelated formal review. |
| New feature request during another active campaign | Detect workflow switch, preserve/suspend appropriate parent context and pending work under existing ownership; ask only if a consequential target/scope ambiguity remains. |
| Resume the same established task range | Recover pending work and reuse selection; no ceremonial full replay or mandatory repeated preamble. |
| Prepare release notes or perform a narrow direct check | Standalone operation when appropriate; do not force a main/feature/revision campaign. |

Source trace and link checks can verify routing/discoverability and ownership. Fresh agent behavior requires separately selected consumer evidence; existing support counts do not grade automatic selection. If execution includes acceptance component changes, extend assessor-side routing scenarios without coaching consumer requests or inheriting historical passes.

## Execution boundary

Await acceptance/implementation instruction. Proposed source edits, acceptance extensions, integration and source verification suites have not run in this campaign. The current request authorizes only this review/proposal and its commit/push.
