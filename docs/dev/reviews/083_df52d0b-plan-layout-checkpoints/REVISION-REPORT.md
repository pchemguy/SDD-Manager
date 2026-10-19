# PLAN and layout checkpoint revision — campaign opening

## Identity and authority

- Campaign: 083_df52d0b; opened 2026-10-19 from df52d0bba5c0872a06d3277951624091dcab6b5c.
- Working/publication branch: revision/083_df52d0b-plan-layout-checkpoints on origin, pchemguy/SDD-Manager. Directory: docs/dev/reviews/083_df52d0b-plan-layout-checkpoints.
- Immediate parent, creation parent, eventual integration target and return branch: revision/081_5b2442e-prerelease at that exact published baseline. Campaign 081 remains open and suspended; its eventual main integration target is not this child's target.
- Human request: “Open a nested revision campaign - PLAN and layout have distinct checkpoints.” This opens the child and establishes the desired checkpoint separation. It does not select source-repair execution, integration, closure or parent continuation.
- State: Open, opening checkpoint only. [Parent evidence](../081_5b2442e-prerelease/REVISION-REPORT.md), [handoff](../../HANDOFF.md), [index](../README.md).

## Objective and bounded scope

Ensure necessary new PLAN and layout proposals retain separate human review/acceptance checkpoints: present and obtain acceptance of PLAN before dependent layout authoring, then present and obtain acceptance of layout before TASKS. A combined planning request or the same skill owning both documents must not collapse their checkpoints. Preserve explicitly scoped future-checkpoint preapproval and reuse of acceptable existing inputs; repository-operation authority, technical QC and publication are separate from human acceptance.

The focused follow-up should inspect both sides of the relevant handoffs: coordinator preparation/continuation, direct sdd-plan entry, delivery and physical-layout procedures, main/feature paths, checkpoint presentation/recovery, and affected tracking definitions/templates or guidance. Identify actual contradictory or incomplete routing before proposing repairs. Keep detailed policy in its cohesive owning reference with concise callers; avoid duplicating a workflow across AGENTS or splitting trivial references.

Primary current sources are [sdd-manage](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/SKILL.md), [human document review](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/references/human-document-review.md), [main preparation](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/references/main-preparation.md), [sdd-plan](../../../../.agents/plugins/sdd-manager/skills/sdd-plan/SKILL.md), its [delivery](../../../../.agents/plugins/sdd-manager/skills/sdd-plan/references/delivery-plan.md) and [layout](../../../../.agents/plugins/sdd-manager/skills/sdd-plan/references/physical-layout.md) owners, and affected callers/templates discovered from them. These are prospective review inputs, not a claim that every listed module has been reviewed.

Exclude unrelated design or implementation changes, new general approval mechanisms, release/version changes, plugin installation and live demo mutation. Closed campaign 082 and earlier records remain frozen; no historical compatibility review is selected. No executable task list governs this repository's campaign work, so no task IDs are invented.

## Initial source observation

At the starting source, the coordinator's shared gate already says PLAN/layout have separate checkpoints. sdd-plan explicitly requires PLAN approval before dependent layout/TASKS and layout approval before TASKS. The human-review table separately lists PLAN and layout and says they remain distinct when requested together. This opening therefore records an existing declared rule and the human's requested emphasis, not a demonstrated absence or a verified implementation defect. Consistency, discovery, tracking and actual checkpoint behavior remain for the focused assessment; no finding or repair is claimed here.

## Opening verification and persistence

The source is an eligible clean Linux Git worktree on the established parent branch. Bounded remote-head readback confirmed the parent's exact published baseline above. Repository-wide review/feature/phase-revision names and local/published refs reserve at most campaign 082; 083 is available and its branch name is valid. Parent 081's current merge contains the published completed 082 child; no pending merge or carried uncommitted work exists.

This opening changes only this record, current parent suspension evidence, HANDOFF and the shared campaign index. Check their local links, Markdown structure and exact changed-path scope before the opening commit; verify no plugin, runtime, test, release-note or closed-record changes. Opening checks passed for four current Markdown/navigation files and 260 local links, with no missing targets or style candidates; 234 frozen targets were existence-checked without loading their contents. Exact changed-path comparison confirmed the stated opening-only scope. No product test run or live consumer behavior is claimed for this documentation-only setup. Publish and exactly read back the opening commit before further work; Git identifies its actual opening SHA rather than a self-referential future value.

## Parent preservation and stop

The parent retains canonical version 0.15.1 and its prior preparation evidence. Authentication child 082 is already integrated at the baseline; its verification does not refresh the parent's earlier candidate/source/body/package association. Parent preparation remains suspended and still requires reassessment when separately resumed.

Stop after publishing this opening, remaining on revision/083_df52d0b-plan-layout-checkpoints with both 083 and 081 open. A later selected focused assessment can establish any required revision plan. Do not infer permission to execute repairs or close/merge this child merely from its opening. On later authorized completion, explicitly integrate into revision/081_5b2442e-prerelease, verify/publish and return with the parent's preparation boundary preserved; child completion does not resume or close 081.

## Clarified repair authority

Opening a30cb776a15cb94a10eff7b32e29f6c7aac52b24 was published/read back. The human then explicitly directed a wording repair: define each checkpoint in line with the other document checkpoints, rather than append commentary about the planning pair. The assistant briefly proposed combining approvals in chat; that was incorrect and no repository edit implemented it. PLAN acceptance remains before layout, and layout acceptance remains before TASKS.

[REVISION-PLAN.md](REVISION-PLAN.md) records the accepted focused repair and checks. The canonical per-document table already defines the required stages; remove redundant pair-specific assertions from its callers, normalize task wording and retain the concrete QC/acceptance progression. This request now authorizes source repair, superseding the opening-only stop for that bounded work. Keep 083 open after verified publication; parent 081 remains suspended, with integration/release/installation unselected.

## V-001 — Uniform checkpoint definitions and concise callers

Plan 31361b8949c1efb68e564f4720244fd184a0d2d8 was published and exactly read back before source edits. Retained the ordinary checkpoint rows in PLUGIN and the canonical human-review protocol, including all document names, owners and dependent-stage holds. Byte comparison confirms both checkpoint tables are unchanged. Removed pair-specific commentary from the plugin entry, coordinator entry/workflow/examples, human-review protocol, README and source development contract. The QC reference now directs presentation of the layout proposal and evidence for human approval before TASKS. Main-preparation and JSON task acceptance use the same first-approval form as other document tasks.

Nine packaged files were revised, plus the source development contract and projection test. The JSON delta is confined to the two acceptance strings; its schema, nine task identities/order/dependencies, milestone and other fields are unchanged. Coordinator entry metadata is unchanged. Explicit preapproval, existing-input reuse, technical QC, publication and every other human boundary retain their prior requirements. No reference files, executable runtime changes or new policy mechanisms were introduced.

The first projection run exposed one existing assertion tied to the removed prose: 39/40 passed, with only that literal regex failing. Replaced it with verification that the full generated task array equals the bundled definitions, strengthening the actual content-transfer contract without pinning editorial wording. The complete rerun passed 40/40, zero failures/skips, in 25,627.835 ms. Publisher checks passed 37/37 in 21.083 s. Support checks passed 139/139 in 287.493 s, exit 0. All selected suites completed without failures or skips after correcting the brittle projection assertion.

Current source/link assessment found no remaining targeted pair-specific assertions. Fourteen maintained Markdown files, 523 local links and 67 fragments passed, including 212 package-contained links; 234 frozen targets were existence-checked without loading. Final evidence edits receive the same scoped link/diff check before publication. The manual change/flow review confirms that the concrete checkpoint definitions and dependency order remain intact. These checks do not establish live agent or installed-client behavior.

## V-002 — Reviewable publication checkpoint

The focused repair is complete and manually reviewed. Final source comparisons retain the canonical checkpoint tables, JSON identities/dependencies, skill metadata, unmodified runtime and source-only/frozen package boundaries. Run the final maintained-document link/style and diff checks, then publish/read back the coherent source/evidence commit. Actual commit identity and publication are established by Git/readback, not this document’s future SHA. Keep 083 open on its branch for review; 081 remains open and suspended. No integration, release, installation or live-agent trial is claimed.
