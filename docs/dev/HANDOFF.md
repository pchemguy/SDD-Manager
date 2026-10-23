# SDD Manager handoff

Campaign [099 — doc-design modes](reviews/099_242b6fb-doc-design-modes/REVISION-REPORT.md) is finalized for human-selected closure. All four actions in its [revision plan](reviews/099_242b6fb-doc-design-modes/REVISION-PLAN.md) are implemented and verified; actual closure requires explicit main integration, merged-state checks, target publication/readback and clean return. Reporting: Standard.

## Workflow and scope

sdd-manage coordinates this revision. Current/default mode is `interactive/onepass`. Autodoc retains the PROJECT human checkpoint, preapproves subsequent document checkpoints through TASKS, and requires proactive resolution of important scope interactions/boundary cases and surfacing material decisions before brief approval. Stop after recording/publishing TASKS completion and required tracking effects, before whole-package docs QC (DOCS-009). Per-document technical checks and other workflow obligations remain required.

Cursor reset retains existing documents, records the pass transition and reopens DOCS-002 through DOCS-009 plus existing associated issues; DOCS-001 remains complete. One pass spans DOCS-002–008. Human-controlled multipass retains each PROJECT approval and stops for reset/advance direction. For predefined scope-revision sequences, autoloop is the default unless human-controlled multipass is requested: clarify the sequence upfront, obtain first PROJECT approval and explicitly announce that later PROJECT approvals are waived. New material decisions are delegated to agent judgment, with concise visible decision/rationale summaries and no mandatory pause. Stop after final DOCS-008; no package QC or Git integration is implied.

Implementation adds one cohesive mode/pass reference, coordinator/preparation/review/continuity routing, early brief decisions, same-identity hosted reset semantics, the revised task template and aligned entries/README/diagram. Fixed tracking JSON and AGENTS_TEMPLATE are unchanged. Verification at `c99cb341fa9afb3655fa2f78bd767dfa79d9273b`: 49 publisher, 139 support and 84 forge contracts pass (272 total); scoped links/routes/style, exact 154-file package and five extracted CLI help checks pass. Scenario walkthroughs assess source semantics; fresh Windows, independent consumer/live reset/provider and rendered Mermaid behavior remain unclaimed.

## Git context

Campaign branch: `revision/099_242b6fb-doc-design-modes`. Creation parent, integration and return: `main` on `origin`, pchemguy/SDD-Manager. Full baseline/branch-off: `242b6fbceab48196ae8f75c40a3f739f1129864d`; original opening: `1a47b5001479507cc820ad2a449062b4b6cce091`. No parent campaign is suspended. The final main merge supplies exact source/target parents and merged-state checks. Main contains completed 098; its closed records and all earlier campaign packages remain frozen.

## Pending boundary

Completion checkpoint `0221c2ccf2d5444d01eccacf22073b2444d5ed17` is published and verified. The human selected closure. Publish/read back finalization, explicitly merge the complete campaign into main, verify the merged source, publish/read back main and confirm clean return. If interrupted, reconcile the retained branch/merge/publication state rather than replaying it. After actual closure freeze the records and stop; no real project reset/hosted DOCS mutation, plugin installation, version bump, tag or release is selected.
