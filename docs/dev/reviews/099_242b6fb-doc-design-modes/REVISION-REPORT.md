# Doc-design modes revision campaign

## Identity and authority

- Campaign: `099_242b6fb`.
- Starting baseline and full branch-off commit: `242b6fbceab48196ae8f75c40a3f739f1129864d`.
- Working branch: `revision/099_242b6fb-doc-design-modes`.
- Creation parent, eventual integration and return: `main` on `origin`, `pchemguy/SDD-Manager`.
- Request: open a doc-design revision, define doc-design modes and retain the following initial rules; additional modes will be supplied in later turns.
- State: Open; the human authorized execution of the [revision plan](REVISION-PLAN.md). Campaign closure and any product development/release remain unselected.

## Accepted mode requirements

### Current/default mode

The current/default mode is `interactive/onepass`. `autodoc` changes document checkpoint handling; multipass controls repeat the document-design pass. Within autodoc with explicitly predefined subsequent pass scopes, autoloop is the default unless the human requests human-controlled multipass instead. This does not select multipass for an ordinary onepass request. Do not invent other modes or combinations.

### Autodoc

- Keep the project brief (PROJECT) human approval checkpoint active during initial preparation and revisions before approval. Human-controlled multipass retains this checkpoint each pass; autoloop has the explicit later-pass waiver below.
- Preapprove the subsequent document checkpoints through TASKS: ARCHITECTURE, DECOMPOSITION, SPEC, PLAN, layout and TASKS. Selecting autodoc supplies that scoped preapproval; do not require the user to repeat it at each document.
- During brief preparation or revision, proactively identify and resolve important interactions and boundary cases, and surface decisions that materially affect the current application's scope before asking for project brief approval.
- After recording TASKS completion, stop before documentation package QC. Do not continue into DOCS-009, documentation integration, implementation or another stage by implication.

Scope exploration should make material decisions visible early enough for the brief checkpoint to be meaningful. Resolve decisions with the human when they require a consequential scope choice; use established preferences and delegated authority for appropriate agent decisions. Record the actual decision basis, rather than treating checkpoint preapproval as missing requirements. This does not turn PROJECT into a detailed SPEC or require every technical detail to be decided there.

The stopping boundary is after the normal TASKS completion record and its required publication/tracking effects. In main preparation, DOCS-008 is complete with the document and checked DOCS task persisted together, published/read back and its enabled issue closure verified; DOCS-009 remains unchecked and its issue open. The overall documentation milestone/preparation is not complete. Existing per-document technical readiness/QC obligations remain distinct from the deferred whole-package docs QC stage. Mode-specific preapproval does not waive those checks, repository publication, tracking or other existing obligations, and does not authorize implementation.

### Doc-design cursor reset

The human may initiate a reset at any intermediate doc-design checkpoint. Record a reset commit containing the pass transition, reason/requested scope change, reset cursor at DOCS-002 and reopened local DOCS-002 through DOCS-009 checkboxes. DOCS-001 remains complete. Publish/read back that commit, reopen the existing associated issues and verify their states before dependent document work. Do not create replacement issues or duplicate task IDs. A reset explicitly invalidates prior document/package completion for the next pass; it is an exception to the ordinary rule that later document revisions leave first-approval tasks/issues closed.

Keep all existing development documents when resetting. They are the previous-pass inputs (version N−1), to be revised according to the new scope into version N, rather than recreated from scratch. Previous approvals do not certify the revised scope. Use dependency order to reassess and revise the retained documents. Versions describe Git-retained document states; no duplicate file set, filename suffix or artificial edit to an unchanged document is required.

Use existing task/campaign/continuity evidence for the reset record and pass identity, not a new registry. Interrupted reset recovery resumes the recorded transition and reconciles actual local/hosted state; it does not create another reset, increment the pass again or blindly repeat issue operations. Record enough prior checkpoint/pass and intended-next-scope context to make that recovery deterministic.

### Human-controlled multipass with autodoc

One complete pass spans DOCS-002 through DOCS-008. The human supplies the initial scope or scope revision at the start of the pass and may request an earlier reset at an intermediate checkpoint. Apply autodoc's proactive scope clarification and PROJECT approval checkpoint, then complete the remaining document checkpoints through DOCS-008 under preapproval. Stop for the human's choice to reset to DOCS-002 with another scope revision or advance. Here, human control concerns pass/reset decisions; it does not restore document-by-document interactive approval.

### Autoloop with autodoc

The human may supply the initial scope plus an explicitly ordered sequence of scope revisions for later passes. Proactively clarify important interactions, boundary cases and material scope choices across that predefined sequence before the first PROJECT approval; preparing those scopes does not mean drafting all future documents upfront.

At entry, explicitly tell the human that later PROJECT approvals are waived in autoloop. The first PROJECT approval authorizes the remaining predefined passes, including their revised briefs and resets after DOCS-008. This waiver is the default for the predefined autoloop sequence unless the human requests human-controlled multipass. Keep the first PROJECT approval active, then execute each agreed pass and its reset without further approval pauses.

For newly discovered material decisions outside the initial agreement, the human delegates the decision to the agent. Use best judgment from available project/conversation context and general technical knowledge to decide on the human's behalf. Provide timely, concise decision summaries explaining the issue, relevant assumptions, key tradeoffs, chosen action and scope consequences so the human can interrupt or steer. Continue without requiring acknowledgment or adding a decision checkpoint; do not silently decide or wait for a response. Record consequential decisions in existing owning documents/evidence.

After each pass, preserve normal completion/publication/tracking effects and perform the recorded reset for the next predefined revision. After the last pass, stop after DOCS-008 completion, before DOCS-009 package QC. “Incorporated scope revisions” means the revisions are reflected in the retained document set; it does not mean a Git merge or authorize package QC, default-branch integration or implementation. User steering may change the pending pass scope or switch to human-controlled multipass; retain the actual decision and cursor instead of silently changing modes.

## Initial source assessment and intended owners

The current [human document review](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/references/human-document-review.md) supports scoped future-checkpoint preapproval but has no named autodoc mode. [Main preparation](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/references/main-preparation.md) currently proceeds from DOCS-008 completion to DOCS-009 package QC, so the named mode needs an explicit earlier stop. [Exploration](../../../../.agents/plugins/sdd-manager/skills/sdd-design/references/exploration.md) and the [project brief](../../../../.agents/plugins/sdd-manager/skills/sdd-design/references/project-brief.md) own proactive framing, consequential decisions and the boundary between principal scope and downstream detail.

sdd-manage owns mode selection, scoped preapproval, cursor reset, pass continuity and stops. sdd-design owns early exploration and brief preparation/revision. The document owners retain their technical preparation responsibilities; sdd-tasks supplies the TASKS result and the coordinator records its completion. Reset implementation will also need the forge document-issue lifecycle to honor the explicit reopen transition while preserving identities. Future planning should align concise entry/public projections with those canonical owners and preserve meaningful reference boundaries. No source change or new mode reference is selected merely by this requirements extension.

## Scope extension decision

The human accepted the proposed reset/multipass clarifications, including DOCS-002–009 invalidation, retained documents, logical pass versions, reset recovery and the final DOCS-008 stop. The human changed the proposed handling of newly discovered material decisions: autoloop must make those decisions using agent judgment, explain its choices visibly and continue without a mandatory human pause. Later PROJECT approval waiver must be announced and applies by default unless human-controlled multipass is requested.

Opening commit `1a47b5001479507cc820ad2a449062b4b6cce091` is published and exact-ref readback verified with confirmed cleanup. This extension changes only active campaign requirements, continuity and the index. Check local links, formatting and preservation of closed records, then commit/publish/read back. No plugin source implementation, runtime verification or campaign closure is claimed.

## Execution authorization

The human's “Execute” selects bounded implementation of the accepted requirements under the [revision plan](REVISION-PLAN.md). Requirements extension `42168092d20cc11ae66861d87985265dd79eb257` is published with exact-ref readback and confirmed cleanup. Publish/read back this plan before A-001, then execute and report each action. Stop with the campaign open; no target-project cursor or hosted DOCS objects are reset by this plugin revision.

## Revision execution evidence

### A-001 — Mode and pass-control owner

Added one cohesive doc-design-modes reference covering selection/defaults, current-pass decisions, DOCS-008 stop, non-destructive reset commit, local-before-hosted reopening and interrupted reset recovery. Main preparation, human review, coordinator entry routing and continuity now load its rules at the required boundaries. Autoloop announces the later PROJECT waiver, makes new material decisions with visible rationale and proceeds without acknowledgment. Actual technical/publication/tracking blockers remain distinct.

Source walkthroughs assess all four declared selections, early reset, unchanged retained documents, partial reopening, first PROJECT approval and final autodoc stop. The reset route to the forge procedure will be established in dependent A-002 before final boundary verification. No consuming-agent or live target-reset evidence is claimed. Commit/publication follows this action's scoped source checks.

## Opening evidence and next boundary

Fresh remote inspection confirms main at the full starting baseline, a clean worktree and campaign 098 integrated/published. Identity discovery across current paths and fetched refs found 098 as the highest allocated sequence; 099 is newly reserved. Prior closed records are retained unchanged. Execution host remains Linux/Bash with Node.js 24.19.0 and Python 3.12.14; source development, acceptance and campaign conventions remain applicable.

This opening changes only the active campaign record, handoff and review index. Check their identity, links, whitespace and scope; commit and publish/read back the opening before further work. No product/runtime tests are needed for this record-only checkpoint. Wait for the human's additional mode definitions or explicit planning/execution direction. No version bump, tag, release or closure is selected.
