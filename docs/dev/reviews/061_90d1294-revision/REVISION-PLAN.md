# Workflow loading and scope reporting revision plan

## Campaign and authority

- Campaign: **061_90d1294**.
- Starting baseline: `90d1294639c665b7a134a0326dda48fc6e24812e`.
- Inspected planning source: `95709ad3ecf85b703bc1346bf92ca4fc2f8b0fad`; runtime content is unchanged from the starting baseline.
- Working branch: `revision/061_90d1294-revision`; eventual integration target: `main`.
- State: **Executed after subsequent human authorization; final integration/publication establishes closure**.
- Companion: [revision report](REVISION-REPORT.md).
- Input: the human requested assessment of `docs/agents/jules/Workflow Loading.md`, accepted the integration direction, refined reporting requirements and requested this full plan.

Prepare and publish this plan and update active campaign navigation/evidence, then stop. Do not implement runtime changes, merge or close the campaign in this turn. Later execution follows the accepted plan and the human's actual execution/integration boundary; this plan does not itself authorize those effects.

## Objective and decisions

Integrate the Jules prompt's useful workflow-loading and scope-control protocols into canonical SDD Manager instructions. Keep reporting explicit enough to support less capable models while allowing the human to reduce visible detail. Preserve progressive loading, existing operational owners and all approval, verification, publication and tracking obligations.

The conversation assessment found that substantive document checkpoints, pending-review preservation, bounded authorization and workflow switching already exist. They need targeted reinforcement, not a second approval system. This is a prompt-defined revision plan based on that focused assessment; no separate review stage or defect classification is invented.

Accepted direction:

- Define read-only workflow loading as an independently requestable operation. Distinguish it from preparing PROJECT and later development documents.
- Report actual loaded sources, relevant stages/checkpoints, current scope and next step when workflow loading is requested.
- Load selected governing instructions before dependent action; report a definitive workflow/checkpoint decision only after the relevant instructions are available.
- Check active scope, applicable instructions and pending decisions before each coherent work unit. Before creating or editing a user file, check both its path and the proposed change against that scope. This is an operational check, not a request to expose hidden reasoning.
- Use event-based reporting rather than mandatory repeated response preambles. Report at entry, uncertain-context recovery and material changes; during unchanged work, report new results, decisions or blockers.
- Honor user-requested reporting detail. Reduced detail never reduces operational checks or consequential evidence and decision reporting. Do not infer a reporting level from presumed model strength.
- Treat clarification answers as requirements/decisions within their actual scope, not acceptance of an artifact or permission for downstream work.
- Keep pending approval in force through questions and current-stage revisions. Present revised reviewable results and return to the same checkpoint.
- Keep greenfield as starting context within main development. Workflow loading is a standalone read-only operation, not a fourth core workflow.

## Ownership and affected material

| Material | Planned responsibility and boundary |
| --- | --- |
| `skills/sdd-manage/references/workflows.md` | Canonical workflow-loading operation, entry/switch loading order and event-based selection/reporting rules |
| `skills/sdd-manage/references/coordination.md` | Operational scope checks, per-write path/change check, reporting-detail adaptation and handoff continuity |
| `skills/sdd-manage/references/human-document-review.md` | Clarification versus artifact acceptance; pending-checkpoint responses and revisions |
| `skills/sdd-manage/SKILL.md` | Concise pre-action invariants and accurate reference loading conditions; no copied detailed reporting procedure |
| `PLUGIN.md` | Small projections/pointers for workflow loading, scope checks and adjustable reporting; no original operational rules |
| `skills/sdd-manage/references/examples.md` | Selected positive/negative examples illustrating new request interpretation and stops |
| `docs/dev/PLUGIN-CONTRACT.md` | Update affected responsibility/assessment guidance while preserving existing case IDs and source-only boundary |
| `README.md`, `docs/dev/CAPABILITY-MAP.md` | Reconcile affected human-facing capability descriptions and source ownership mapping where needed |
| `docs/agents/jules/Workflow Loading.md` | Align this source-only prompt with the resulting canonical protocol; preserve explicit preparation-only intent and client-independent wording |
| Active campaign files and index | Retain plan, decisions, actual action outcomes, verification limits and eventual closure evidence |

Inspect relevant direct skill entry/handoff instructions, including design, implementation and steering, for contradictions or bypasses. Change them only if necessary to preserve the new scope check or existing checkpoint behavior on direct calls; record why each additional path is needed. Do not propagate a full reporting template across every skill.

No new coordinator module is planned: existing workflow selection, coordination and human-review owners fit the material. Reassess composition before introducing a new file; any such scope change needs an explicit rationale and routing update.

## Ordered revision actions

### A-001 — Define workflow-loading entry and reporting

**Dependencies:** execution authority and current source orientation.

Add a distinct operation to `workflows.md` for requests to locate/read/explain SDD Manager workflows before project work. Identify the requested workflow from supplied context; use relevant entry/routing instructions and dependencies without eagerly loading unrelated workflows or every reference. If context is insufficient, report uncertainty and resolve only a consequential missing choice.

The operation returns in chat: sources actually read using repository-relative paths, applicable stages and human checkpoints, authorized scope, explicit exclusions and next step. It creates no project files, branches, bootstrap records, hosted objects or commits by implication. A generic workflow explanation needs no target Git repository; target-specific inspection remains read-only and scoped. Workflow loading does not establish project readiness or grant development authority.

Clarify switching order: preserve current work and pending decisions; load the newly selected procedure and applicable dependencies before its definitive report and dependent work. Selection may be provisional while discovering instructions; do not claim an unread source was loaded. Routine continuation reuses sufficient context.

**Recheck:** S-01, S-02, S-08 and S-12; compare preparation-only loading with project-document preparation and implementation requests.

### A-002 — Establish operational scope checks and adaptable reporting

**Dependencies:** A-001.

In `coordination.md`, require a scope/instruction/pending-decision check before a coherent work unit, using current established evidence rather than re-running orientation on every command. Before any user-file creation/edit, check the proposed path and change; out-of-scope changes are withheld, not silently included. Clarify that this does not require permission per write or suppress necessary authorized code, tests, documentation and evidence work.

Set an explicit default for reporting at workflow entry, uncertain-context recovery and material changes: operation/workflow, current stage/owner, authorized work/outputs and next human checkpoint or stop. Explain consequential selection with its evidence; during unchanged work report only new results, decisions, blockers and materially changed scope fields. At checkpoints, present substantive review results, the dependent work held and what acceptance would clear. Clarification-only responses may answer directly; restate the pending boundary when omission could imply acceptance or advancement.

Honor the user's requested reporting detail, including later changes. Reduced detail may compress briefs and omit unchanged context, routine explanations and unrequested exhaustive source inventories. Preserve consequential decisions, scope changes, blockers, verification results and required checkpoint information. An explicit source-list request still requires the list. No automatic model-strength selection, verbosity modes, persisted verbosity setting, mandatory per-response template or exposed reasoning is introduced.

**Recheck:** S-03 through S-06 and S-10; verify the operational requirements are identical at default and reduced reporting detail.

### A-003 — Tighten acceptance semantics at pending checkpoints

**Dependencies:** A-002.

Amend `human-document-review.md` only where the existing protocol needs sharper wording: clarification answers refine requirements; acceptance applies to the artifact/execution scope and presented state actually approved. Questions, comments, tests, commits and broad authority do not accept unseen downstream documents. While acceptance is pending, answer questions and revise the selected current-stage artifact within scope, then present the result and stop at the same boundary.

Retain necessary-document checkpoints, separate PLAN/layout decisions, valid existing-input reuse, direct-call applicability and explicit human changes to checkpoint scope. Do not require fresh approval for an already authorized routine operation or turn every existing-document maintenance edit into interactive review.

**Recheck:** S-07, S-09 and S-11, including an answer that changes requirements and an explicit acceptance-and-proceed decision.

### A-004 — Reconcile entry projections and developer guidance

**Dependencies:** A-001 through A-003.

Update the coordinator entry's relevant shared gates/cycle/reference conditions so direct entry reaches these requirements without PLUGIN.md. Keep concise pre-action scope and loading invariants; leave procedural detail in the canonical references. Replace or qualify the current statement that no per-response preamble is required without introducing a universal preamble requirement.

Project the capability and reporting policy concisely into PLUGIN.md. Update the source development contract and capability map where their current responsibilities or assessment criteria need the new operation/contrasts. Inspect README coverage and amend only useful human-facing capability guidance. Preserve coordinator-first routing, selective loading, publication and hosting boundaries. Check entry/module inventory completeness after edits.

**Recheck:** every applicable scenario through both PLUGIN.md routing and direct `sdd-manage` entry; verify no substantial new rule exists only in the non-standard plugin entry. Inspect changed paragraphs for duplicate instruction ownership and entry growth.

### A-005 — Align the Jules prompt and representative examples

**Dependencies:** A-004.

Revise the source-only Jules prompt to request preparation-only loading and the accepted default reporting behavior through canonical instructions. Remove the unconditional every-response preamble requirement; retain explicit scope, substantive checkpoints and switching safeguards where useful for a consumer prompt. Do not treat the supplied prompt as instructions for the reviewing agent or package it automatically.

Add only useful coordinator examples for read-only loading, a pending checkpoint clarification, a material switch and user-requested concise reporting. Keep examples illustrative; avoid restating whole canonical procedures. If a deliberately stricter prompt variant remains useful, make its opt-in nature explicit rather than conflicting with the default.

**Recheck:** S-01, S-03, S-07, S-08 and S-10; compare prompt and canonical policy for authority, repetition and loading boundaries.

### A-006 — Consolidate verification and publish execution results

**Dependencies:** A-001 through A-005.

Review the combined diff for consistent terminology, correct ownership/loading, no duplicated reporting mandates and no weakening of HIL, verification, per-task persistence, tracking or return boundaries. Record each action's changed paths, recheck evidence and limitations in the active revision report. Reconcile campaign navigation and preserve all closed campaign packages.

Run the checks below against the actual final committed candidate. Publish/read back every owned commit before further work or another commit. Report results and remaining decisions; campaign closure/integration occurs only within the later authorized execution boundary.

## Scenario coverage

These are planned source-assessment cases, not executed model trials. Evaluate both instruction availability and the dependent action/stop. Record actual outcomes and source locations during revision.

| ID | Situation | Required result |
| --- | --- | --- |
| S-01 | “Read and explain the greenfield workflow; development begins later.” | Selected sources/stages/checkpoints and scope/next step in chat; no project writes, bootstrap, branch or hosting operations |
| S-02 | Generic workflow explanation without a project or Git repository | Explain applicable workflow; no invented project state or mutation prerequisite for conversation |
| S-03 | Active workflow and unchanged scope; next routine development turn | Perform scope check; give useful new progress without repeating the entire entry brief |
| S-04 | User asks a simple factual question during unchanged work | Direct answer; no ceremonial preamble or scope expansion |
| S-05 | Proposed edit targets an unrelated file or adds unrelated behavior to an otherwise allowed file | Withhold that change; distinguish path ownership from change authorization |
| S-06 | New blocker or consequential design choice under reduced reporting detail | Report the consequential information and required decision despite reduced verbosity |
| S-07 | PROJECT awaits approval; user answers a mechanics clarification | Update requirements/current-stage proposal as authorized; preserve PROJECT checkpoint and hold ARCHITECTURE |
| S-08 | Paused task range; user requests steering, feature or revision work | Preserve pending context; load matching procedure/dependencies, report changed scope/checkpoint and honor its return boundary |
| S-09 | Current proposal is revised while acceptance remains pending | Present revised results/state and stop at the same checkpoint; no dependent-stage generation |
| S-10 | “Keep updates minimal” followed later by “Explain this decision and list sources.” | Adapt detail to the actual requests; preserve necessary scope/evidence/checkpoint content and requested sources |
| S-11 | Human explicitly accepts the presented document and authorizes its next stage | Advance only through the cleared boundary; downstream unseen documents retain their checkpoints |
| S-12 | Context lost; no recoverable accepted range or next stop | Recover discoverable state and report uncertainty; ask for the missing consequential decision without guessing approval |

## Verification and evidence limits

- **Plan checkpoint:** verify campaign links, heading/list spacing, consecutive blank lines, exact changed-path scope and `git diff --check`. Commit/push/read back the plan and active navigation/report changes, then stop.
- **Source assessment:** map changed instructions to owners and applicable cases; inspect affirmative and negative boundaries, direct calls and entry projections. Do not claim source consistency establishes model behavior.
- **Document checks:** resolve links/anchors in affected current documents and the active campaign only; inspect Markdown formatting and changed prose. Handle the Jules filename with spaces correctly. Exclude closed records from current compatibility checks.
- **Regression checks:** for coherent plugin integration, run `python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v`. Install/use pinned publisher requirements and run `python -m unittest discover -s .github/tests -v` under source verification instructions. Use the established supported interpreter and record its actual version; do not touch `/pyenv`.
- **Package checks:** validate the exact committed manifest and package through native pinned tooling; inspect expected files and package-contained links. Ensure source-only campaign, contract and Jules prompt stay excluded. No manifest/version/schema/publisher redesign is selected.
- **Behavioral evidence:** live acceptance, model comparisons, Jules/client runs and hosted provider actions are not selected. Default and reduced reporting scenarios are source rechecks unless separately authorized as trials. Report all unrun behavioral evidence explicitly.

## Persistence and exclusions

During later execution, commit each coherent revision action with its actual evidence/report update, push and verify remote containment before the next action or any other work. Use ordinary action IDs in campaign records; do not invent executable task IDs. Record any justified combined or split action boundaries while preserving publication cadence.

Do not alter Git history, force-push, edit installed skills/plugins, revise APA, redesign acceptance tooling, generate a tracking registry/journal, add project TASKS, create a release, access hosted tracking or repair closed campaign records. Integration, if subsequently authorized, uses the established explicit two-parent merge, merged verification, target push/readback and campaign closure evidence.

## Execution disposition

The later human command authorized execution. A-001 through A-006 are implemented and source-checked in the [revision report](REVISION-REPORT.md); the original planning-only boundary above retains its historical meaning. Final campaign closure requires verified explicit integration into main and target publication. No live acceptance or model-strength comparison was performed.

## Reopened amendment — Reporting profiles

The human authorized reopening campaign 061 to define the proposed Minimal, Standard and Explicit reporting shortcuts. Qualifying prior published first-parent merge and reopening checkpoint: `ed3099a229b59d4786fcd74bf6761dc7ac94e394` on main, parents `90d1294639c665b7a134a0326dda48fc6e24812e` and `60a6697ba142cb015157479dfe3f69f842e28a99`. Original identity, opening and baseline remain unchanged. Bring the existing campaign branch forward to this target without rewriting history. Execute only this related delta and verify/integrate/publish it back into main; original closure/check evidence above remains historical.

### A-007 — Define profiles and reconcile guidance

In coordination.md, define Minimal, Standard (default) and Explicit reporting with the previously proposed differences. Every profile retains the same operational checks, consequential reporting and human checkpoints; Explicit does not require unchanged per-response preambles. Support ordinary natural-language profile selection and switches, and one-response detail overrides that then return to the selected profile. Retain selected preferences in available conversation/workflow context and pass them through existing handoffs; no new setting file, registry, or inferred model-strength selection. More specific human instructions control the affected output. When no preference is recoverable, use Standard without inferring lost choices.

Project the shortcuts concisely into PLUGIN.md and the coordinator routing description. Give humans a profile comparison and command examples in README; reconcile capability map, developer contract, coordinator examples and Jules prompt where useful. No new module, profile-specific workflow gates or full reporting template across skills.

Recheck default behavior, each profile, mid-workflow switches, one-response override/reversion, specific instructions, requested source lists, consequential blockers/checkpoints under Minimal, Explicit without repetition, handoff/context recovery and independence from PLUGIN.md. Publish/read back the source/evidence action before further work.

### A-008 — Verify and close the amendment

Check affected current Markdown links/anchors/spacing and Git whitespace, direct coordinator discovery and unchanged operational obligations. Run support and pinned publisher suites for coherent plugin integration; verify the exact committed native manifest/package and excluded source-only files. Source scenario assessment is distinct from live model behavior; no live trial is selected. Preserve all other closed campaign packages. Finish records/navigation, publish/read back, explicitly merge the amended tip into main, verify merged state/package, publish/read back and return clean main. The new integration summary carries forward original outcomes and provenance while distinguishing A-007/A-008 and fresh verification from historical checks.

Amendment disposition: A-007/A-008 implemented and source-verified; fresh evidence is recorded in the revision report. Verified target integration/publication and return establish renewed closure. Original A-001 through A-006 remain delivered; no prior evidence was promoted to fresh acceptance.
