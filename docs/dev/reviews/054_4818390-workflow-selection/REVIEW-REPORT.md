# Workflow selection and chat decision review

## Campaign and scope

Campaign: **054_4818390**. Baseline/reviewed source: `4818390aebaef921b463e58962eb82d9d0cb90e6`. Date: 2026-10-13. Branch: `revision/054_4818390-workflow-selection`; target: `main`. Focused review of entry-only discovery, core selection (main/feature/revision and steering), project context, continuity/switching and user-visible evidence. The prompt supplies the criteria; no separate review plan is necessary.

Current request authorizes campaign artifacts and publication, not source implementation or merge. Newer origin edits to `docs/agents/jules/Skill Discovery.md` were retained by fast-forward before allocation; that guide is outside this focused revision. Closed campaigns remain untouched.

## Assessment

Definitions are sufficient, but their entry trigger and visible decision requirement are incomplete. PLUGIN is 2,286 words: keep the discoverable obligation there and progressive procedure routing, replacing existing prose rather than appending a new detailed section. [Concrete proposed revision](PROPOSED-REVISION.md) shortens the entry overall; [size assessment](size-assessment.json).

| Source / concern | Coverage | Gap |
| --- | --- | --- |
| PLUGIN Establish request and Composite workflows | Context/operational mode, owner routing, core purposes and reuse are present. | Coordinator trigger is compound work or unresolved selection; ordinary broad requests do not explicitly require context-based selection/recovery and a chat decision. |
| sdd-manage entry and workflow catalog | Core choices are defined by intended scope; main supports existing projects; steering is a revision variant; standalone operations remain possible. | No cohesive entry/changed-request selection procedure with a required visible result. |
| Coordination Request / Proactive handoff | Decision source, observed state, next owner and stop are carried through handoffs. | Does not explicitly distinguish continuing the workflow, changing its stage/range and switching it; internal handoffs need not appear in chat. |
| sdd-orient inspection/report | Supplies real project/Git/document/pending-work facts and keeps selection with orchestrator. | Correct ownership; do not transfer selection into the read-only observer. |
| sdd-report entry/completion reports | Evidence-backed output distinguishes performed/verified/published and pending decisions. | Outcome reporting does not establish a before-work selection report; no new reporting workflow needed. |
| Steering/revision modes | Paused target, scope, parent suspension/return and no automatic resume are explicit. | Selector must discover and apply them after the routing decision; their existence alone does not trigger selection. |

## Findings

### R-001 — Entry-only discovery does not require proactive workflow selection

Medium; instruction gap; high confidence. Located in `PLUGIN.md` Establish the request and context and `skills/sdd-manage/SKILL.md` Establish the request. “For compound work or unresolved workflow selection” leaves a broad ordinary project/functionality request able to route directly to a stage without first recovering new/existing/interrupted context and selecting the applicable core path. The catalog's definitions are adequate once loaded.

Propose explicit entry/absent-context routing to the coordinator's canonical selection procedure, retaining narrow direct operations and current-context reuse. Recheck project, existing whole-system, bounded feature, review/revision and paused steering inputs through progressive discovery from PLUGIN alone.

### R-002 — Request changes lack an explicit workflow continuity/switch decision

Medium; instruction gap; high confidence. `coordination.md` refreshes material scope/baseline and the catalog describes core purposes, but neither requires classifying a new request as continue, stage/range change or workflow switch before dependent work. Correct parent/steering procedures can remain undiscovered.

Propose a bounded continuity step keyed to changed objectives/scope/boundaries, preserving pending work and human decisions and loading existing branch/revision-mode rules where needed. Recheck same-range resume, document correction within preparation, new feature during a campaign and amendment at a paused task checkpoint. Do not infer switching from missing files or force unrelated formal campaigns.

### R-003 — Workflow decision and supporting evidence need not be reported in chat

Medium; instruction gap; high confidence. `coordination.md` Proactive handoff and sdd-orient's report collect useful facts; `sdd-manage`/`sdd-report` emphasize outcome reporting. None requires a user-visible before-work selection/continuity brief containing the core/variant, basis, current stage/owner, authorized outputs and next checkpoint.

Propose a concise chat/progress message at initial selection and material routing/boundary changes. User-visible commentary is sufficient; hidden reasoning is not. No per-response preamble or mandatory repository artifact. Recheck that an internal-only handoff cannot satisfy the visible report requirement.

## Proposed scope and verification

Replace PLUGIN's existing context paragraphs and shorten its composite introduction; preserve pronounced HIL, publication and tracking rules. Add the canonical procedure to the existing workflow catalog, point the manager entry to it, reconcile handoff fields and add focused examples. Keep existing definitions, observer/reporting ownership, branch identities and approval gates.

This review used current source inspection and composition/word-count analysis, not a fresh consumer trial. Only report/proposal links and diff/closed-path preservation need checking now; no product source changed, so support/publisher suites were not rerun. Proposed scenarios are not executed outcomes.

State: review/proposal complete; source revision awaits human instruction. Publication of these artifacts does not accept or implement the proposal. Stop after campaign-branch push/readback, without integration.
