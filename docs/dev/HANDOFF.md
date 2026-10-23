# SDD Manager handoff

Campaign [099 — doc-design modes](reviews/099_242b6fb-doc-design-modes/REVISION-REPORT.md) is open. Autodoc, cursor reset, human-controlled multipass and autoloop requirements are recorded; source planning/execution is not selected. Reporting: Standard.

## Workflow and scope

sdd-manage coordinates this revision. Current/default mode is `interactive/onepass`. Autodoc retains the PROJECT human checkpoint, preapproves subsequent document checkpoints through TASKS, and requires proactive resolution of important scope interactions/boundary cases and surfacing material decisions before brief approval. Stop after recording/publishing TASKS completion and required tracking effects, before whole-package docs QC (DOCS-009). Per-document technical checks and other workflow obligations remain required.

Cursor reset retains existing documents, records the pass transition and reopens DOCS-002 through DOCS-009 plus existing associated issues; DOCS-001 remains complete. One pass spans DOCS-002–008. Human-controlled multipass retains each PROJECT approval and stops for reset/advance direction. For predefined scope-revision sequences, autoloop is the default unless human-controlled multipass is requested: clarify the sequence upfront, obtain first PROJECT approval and explicitly announce that later PROJECT approvals are waived. New material decisions are delegated to agent judgment, with concise visible decision/rationale summaries and no mandatory pause. Stop after final DOCS-008; no package QC or Git integration is implied.

Only campaign requirements capture and extension are selected. Wait for additional definitions or planning/execution direction; do not invent other modes, change plugin source or continue into docs QC/implementation by implication.

## Git context

Working branch: `revision/099_242b6fb-doc-design-modes`. Creation parent, eventual integration and return: `main` on `origin`, pchemguy/SDD-Manager. Full baseline/branch-off: `242b6fbceab48196ae8f75c40a3f739f1129864d`. No parent campaign is suspended. Main contains the completed 098 release-workflow revision; its closed records and all earlier campaign packages remain frozen.

## Pending boundary

Opening `1a47b5001479507cc820ad2a449062b4b6cce091` is published and verified. Publish/read back this accepted requirements extension, then wait for further definitions or planning/execution direction. No source implementation, version/tag/release, integration or closure is selected. If publication is interrupted, reconcile the retained operation rather than allocating another campaign.
