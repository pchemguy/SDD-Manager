# Doc-design modes revision campaign

## Identity and authority

- Campaign: `099_242b6fb`.
- Starting baseline and full branch-off commit: `242b6fbceab48196ae8f75c40a3f739f1129864d`.
- Working branch: `revision/099_242b6fb-doc-design-modes`.
- Creation parent, eventual integration and return: `main` on `origin`, `pchemguy/SDD-Manager`.
- Request: open a doc-design revision, define doc-design modes and retain the following initial rules; additional modes will be supplied in later turns.
- State: Open; initial mode requirements recorded. No implementation or campaign closure is selected.

## Accepted mode requirements

### Current/default mode

The current/default mode is `interactive/onepass`. Retain that identity. `autodoc` is the alternative to interactive checkpoint handling defined below; the human has not yet defined additional modes or changes to onepass behavior. Do not infer a larger mode matrix or implement unnamed alternatives.

### Autodoc

- Keep the project brief (PROJECT) human approval checkpoint active. This applies during initial brief preparation and revisions before approval.
- Preapprove the subsequent document checkpoints through TASKS: ARCHITECTURE, DECOMPOSITION, SPEC, PLAN, layout and TASKS. Selecting autodoc supplies that scoped preapproval; do not require the user to repeat it at each document.
- During brief preparation or revision, proactively identify and resolve important interactions and boundary cases, and surface decisions that materially affect the current application's scope before asking for project brief approval.
- After recording TASKS completion, stop before documentation package QC. Do not continue into DOCS-009, documentation integration, implementation or another stage by implication.

Scope exploration should make material decisions visible early enough for the brief checkpoint to be meaningful. Resolve decisions with the human when they require a consequential scope choice; use established preferences and delegated authority for appropriate agent decisions. Record the actual decision basis, rather than treating checkpoint preapproval as missing requirements. This does not turn PROJECT into a detailed SPEC or require every technical detail to be decided there.

The stopping boundary is after the normal TASKS completion record and its required publication/tracking effects. In main preparation, DOCS-008 is complete with the document and checked DOCS task persisted together, published/read back and its enabled issue closure verified; DOCS-009 remains unchecked and its issue open. The overall documentation milestone/preparation is not complete. Existing per-document technical readiness/QC obligations remain distinct from the deferred whole-package docs QC stage. Mode-specific preapproval does not waive those checks, repository publication, tracking or other existing obligations, and does not authorize implementation.

## Initial source assessment and intended owners

The current [human document review](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/references/human-document-review.md) supports scoped future-checkpoint preapproval but has no named autodoc mode. [Main preparation](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/references/main-preparation.md) currently proceeds from DOCS-008 completion to DOCS-009 package QC, so the named mode needs an explicit earlier stop. [Exploration](../../../../.agents/plugins/sdd-manager/skills/sdd-design/references/exploration.md) and the [project brief](../../../../.agents/plugins/sdd-manager/skills/sdd-design/references/project-brief.md) own proactive framing, consequential decisions and the boundary between principal scope and downstream detail.

sdd-manage owns mode selection, scoped preapproval, continuity and stops. sdd-design owns early exploration and brief preparation/revision. The document owners retain their technical preparation responsibilities; sdd-tasks supplies the TASKS result and the coordinator records its completion. Future planning should align concise entry/public projections with those canonical owners and preserve meaningful reference boundaries. No source change or new mode reference is selected merely by this campaign opening.

## Opening evidence and next boundary

Fresh remote inspection confirms main at the full starting baseline, a clean worktree and campaign 098 integrated/published. Identity discovery across current paths and fetched refs found 098 as the highest allocated sequence; 099 is newly reserved. Prior closed records are retained unchanged. Execution host remains Linux/Bash with Node.js 24.19.0 and Python 3.12.14; source development, acceptance and campaign conventions remain applicable.

This opening changes only the active campaign record, handoff and review index. Check their identity, links, whitespace and scope; commit and publish/read back the opening before further work. No product/runtime tests are needed for this record-only checkpoint. Wait for the human's additional mode definitions or explicit planning/execution direction. No version bump, tag, release or closure is selected.
