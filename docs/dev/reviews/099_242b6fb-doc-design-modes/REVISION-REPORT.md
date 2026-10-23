# Doc-design modes revision campaign

## Current reopening — Tetris autoloop example

The original campaign closed through published two-parent main merge `655228e4091a3d057dd0f5515bd61f8e05ca6117`, retaining source tip `eae552fa6e2bc3253009c460b94ed2fbb1305670`. Fresh fetch confirms that merge is main's current tip and most recent first-parent merge, with parents `242b6fbceab48196ae8f75c40a3f739f1129864d` and the finalized source tip. Both named remote branches match the retained commits. The human explicitly requested a related amendment: a Tetris demo prompt exercising the modes delivered here.

Reopen the same identity and branch at target checkpoint `655228e4091a3d057dd0f5515bd61f8e05ca6117`, preserving all original evidence below. Incoming synchronization has no source conflicts or incoming content difference from the finalized campaign tree; its owned changes are this reopening record, plan, index and HANDOFF. Original opening and branch-off remain unchanged. No other closed campaign is reopened.

Added A-005/A-006 in the [plan](REVISION-PLAN.md#reopened-amendment--tetris-autoloop-example). Read the complete existing “All-inclusive project prompt” in `docs/demo/tetris/README.md` and compare against the implemented mode owner. Present a complete draft in chat; append it to the demo only after chat approval. Documentation passes remain distinct from implementation phases, with current-pass scope, first PROJECT approval, announced later waiver, automatic retained-document resets, delegated decisions and final DOCS-008 stop. Preserve gameplay/configuration content and later version/release policy.

Scoped reopening checks: refreshed branch/parent identity, conflict-free prospective synchronization, unchanged Tetris README and plugin source, four-file record-only delta and whitespace. No runtime/product evidence is claimed or needed for these record changes. Publish/read back this synchronization before returning the draft. Current boundary: campaign open, A-005 chat proposal, A-006 waiting for approval; no final integration or closure is selected.

## Identity and authority

- Campaign: `099_242b6fb`.
- Starting baseline and full branch-off commit: `242b6fbceab48196ae8f75c40a3f739f1129864d`.
- Working branch: `revision/099_242b6fb-doc-design-modes`.
- Creation parent, eventual integration and return: `main` on `origin`, `pchemguy/SDD-Manager`.
- Request: open a doc-design revision, define doc-design modes and retain the following initial rules; additional modes will be supplied in later turns.
- State: A-001 through A-004 of the [revision plan](REVISION-PLAN.md) are executed and verified within the evidence limits below. The human selected closure; finalized for explicit main integration, merged-state verification/publication and clean return. Product development/release remains unselected.

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

### A-002 — Brief decisions and current-pass tracking

Exploration and PROJECT guidance now require proactive resolution of important scope interactions/boundary cases before brief approval and route autoloop choices through actual delegated authority. The forge docs lifecycle adds explicit same-identity reset reopening after the published reset commit, with idempotent evidence comments, exact issue/milestone readback, partial-operation recovery and current-pass closure evidence. Backend conventions and DOCS_TASKS match this exception to ordinary first-approval retention. The fixed JSON issue definitions and IDs are unchanged; no projection or close-script reset flag is advertised.

Source assessments cover local-before-hosted reset, DOCS-001 preservation, all eight remaining issues, unknown/partial reopen, stale prior approval and unchanged document reuse. The dependent forge reset anchor from A-001 is now defined. `node --test tests/forge-project.test.mjs` passes 46 contracts with no failures/skips; 117 current-document link targets and heading/whitespace checks pass. These supply controlled runtime/structure evidence, not an independently executed agent reset. A final template wording correction explicitly confines the DOCS-008 stop to autodoc, preserving interactive/onepass behavior.

### A-003 — Entry, documentation and boundary projections

Aligned direct design/specification/planning/task entries, forge/verify handoffs, coordinator catalog/branch gates, PLUGIN.md, packaged README and the source plugin contract. Public guidance distinguishes approval mode from pass control; the preparation diagram now shows the DOCS-008 stop, explicit advance and reset-to-PROJECT route. Default interactive/onepass retains its original selected preparation path. Later-approval waiver and delegated decisions remain visible without duplicating detailed reset mechanics in entries. AGENTS_TEMPLATE and fixed JSON tracking content remain unchanged.

Source checks assess the direct-entry route, default versus named-mode boundaries, separate PLAN/layout checkpoints and the diagram's reset/advance branches. No rendered Mermaid or independent consuming-agent behavior is claimed. Current-document links, heading/whitespace and reference routing are checked before publication.

### A-003 follow-up — Current-pass scope and reset preservation

The final source walkthrough found that the generic complete-project brief rule needed an explicit current-pass qualification, so future predefined changes are clarified upfront but applied only in their scheduled pass. Added it in the pass owner and PROJECT contract. Reset preservation now explicitly names the retained PROJECT/design/SPEC/PLAN/layout/TASKS content, avoiding an overly broad byte-preservation statement that could include the intentionally changed DOCS_TASKS/HANDOFF metadata. Scoped source checks pass; no runtime behavior or new mode is added by these clarifications.

### A-004 — Consolidated verification and stopping boundary

Verified source: `c99cb341fa9afb3655fa2f78bd767dfa79d9273b`. Final checks run on Linux, Node.js 24.19.0 and Python 3.12.14, with the declared jsonschema dependency in the existing isolated temporary virtual environment:

| Check | Observed result | Evidence boundary |
| --- | --- | --- |
| Publisher suite | 49 tests pass | Real Git/ZIP fixtures and controlled provider contracts |
| Support suite | 139 tests pass | Source support/harness contracts, not an independent consumer run |
| Forge projection and completion suites | 84 tests pass; no failures/skips | Existing utility/template contracts; no new reset CLI was introduced |
| Current documents | 401 local link targets, headings and whitespace pass | Scoped current files/active records including completion evidence; closed records excluded |
| Mode/reset routes | 19 affected anchor targets and all 18 coordinator references resolve | Route/structure assessment, not runtime agent activation |
| Exact committed package | 154 files; new mode reference included; every member inspected against source | ZIP 467,314 bytes; SHA-256 `4788e19dd50b06a96e075ae1f7e40f5f6b22263afab93f7c31a0aa6e76c0099a` |
| Extracted package | Five CLI help commands pass | Startup/resource completeness only |
| Scope preservation | AGENTS_TEMPLATE, fixed DOCS_TRACKING_TEMPLATE JSON, manifest/version, RELEASE-NOTES and prior closed campaign contents unchanged | Git path/object diff and scoped checks |

The final 84 forge tests include the earlier 46 projection tests; totals are 272 distinct selected tests, without double-counting the earlier run. Source-only changes required no new mirrored-text tests. The README diagram was assessed for source semantics; no Mermaid rendering is claimed.

The following are source walkthroughs of the implemented procedure, not observed consuming-agent runs:

| Scenario | Located outcome |
| --- | --- |
| Default interactive/onepass | Mode selection and human review retain necessary checkpoints, including separate PLAN/layout, and the original selected preparation path. |
| Autodoc onepass | PROJECT approval stays active; downstream document checkpoints are preapproved; complete/publish/close DOCS-008, then stop before DOCS-009. |
| Human-controlled multipass | Current scope is clarified; each PROJECT approval and end-of-pass reset/advance decision remains active. |
| Predefined autodoc sequence | Autoloop is the default only for explicitly supplied pass scopes; later PROJECT waiver is announced before first approval. |
| New material autoloop choice | Agent decides using available context/domain knowledge, explains the decision and continues without acknowledgment. |
| Future scope revision | Clarify it upfront but retain it in the sequence until its pass; PROJECT contains complete current-pass scope. |
| Early reset | Record prior/next pass and scope; retain DOCS-001 and document contents, uncheck DOCS-002–009 and keep IDs. |
| Local reset versus hosted effects | Publish reset commit first; verify all same-identity issues open before resumed document work. |
| Partial or uncertain reopening | Read exact states and complete only pending effects; no extra reset/pass or replacement issue. |
| Prior-pass completion | Old approvals/QC/comments do not close the reset task; require current-pass evidence. |
| Unchanged retained document | Reuse bytes without artificial edits; record applicable current-pass approval/preapproval and QC. |
| DOCS-008 pass boundary | Normal publication/closure finishes; next predefined scope resets automatically, otherwise autodoc stops with DOCS-009/milestone open. |
| Mode steering | Retain actual changed scope/order/mode and restore human-controlled subsequent checkpoints without retroactive approval claims. |
| Explicit advance | Selects existing package-QC stage within scope, not implementation; integration/milestone gates still apply. |
| Direct document owner | Entries load main preparation/mode authority; verification checks DOCS-009 eligibility before package QC. |
| Tracking off or initialization pause | Local reset/completion remains required; no hosted writes without tracking; initialization gates are not waived by mode selection. |

One cohesive reference owns mode/pass mechanics; document, tracking and QC owners retain their detailed procedures. The new reference is approximately 1,100 words with selection, decision, pass, reset and recovery boundaries; it is not split into trivial fragments. Entries and public summaries link the owner instead of repeating its procedure. No unresolved correction remains from the bounded source assessment.

Publication checkpoints through source verification: plan `8183c01c718e6442b427c38caec6f147177e4186`, A-001 `cd930076105b1db4fc4ebd8fd6da2fb0deeac034`, A-002 `eea247b12da42b2790ee3f2ea0e820f447c2a37c`, A-003 `da70528acb88693e2e5e451d7be16b0dd42fe53e` and scope clarification `c99cb341fa9afb3655fa2f78bd767dfa79d9273b` have matching exact-ref readback and confirmed cleanup. Publish/read back this completion checkpoint before returning. Keep the campaign open on its revision branch; no main merge, product cursor/issue reset, live-provider operation, version bump, tag or release is selected. Fresh Windows, live agent/provider behavior and a rendered diagram remain unclaimed.

## Finalization and closure boundary

The human's “close it” selects closure. Fresh bounded remote inspection confirms origin/main at the original baseline `242b6fbceab48196ae8f75c40a3f739f1129864d` and the published campaign completion tip at `0221c2ccf2d5444d01eccacf22073b2444d5ed17`. Its exact-ref readback and confirmed process cleanup are verified. Original opening remains `1a47b5001479507cc820ad2a449062b4b6cce091`, distinct from the starting baseline.

All accepted actions and the current-pass scope clarification are complete, with no unresolved correction from the bounded source assessment. Finalize navigation and HANDOFF, check scoped links/style and prior closed-path preservation, and publish/read back this finalization commit before integration. Then explicitly merge its complete tip into refreshed main with two parents; verify the prospective merged tree, 49 publisher/139 support/84 forge contracts and package integrity. The final merge and its message retain exact source/target parents and actual merged-state results; do not edit this record after closure.

Actual closure requires the verified main merge, target publication/readback and clean return. This pre-merge record does not claim those later effects have happened. Stop after closure, retaining the campaign branch and frozen records. No actual target-project cursor reset, hosted DOCS mutation, plugin installation, version bump, tag or product release is included. Fresh Windows, live agent/provider and rendered diagram evidence remain unclaimed.

## Opening evidence and next boundary

Fresh remote inspection confirms main at the full starting baseline, a clean worktree and campaign 098 integrated/published. Identity discovery across current paths and fetched refs found 098 as the highest allocated sequence; 099 is newly reserved. Prior closed records are retained unchanged. Execution host remains Linux/Bash with Node.js 24.19.0 and Python 3.12.14; source development, acceptance and campaign conventions remain applicable.

This opening changes only the active campaign record, handoff and review index. Check their identity, links, whitespace and scope; commit and publish/read back the opening before further work. No product/runtime tests are needed for this record-only checkpoint. Wait for the human's additional mode definitions or explicit planning/execution direction. No version bump, tag, release or closure is selected.

## A-005/A-006 — Approved Tetris prompt integration

Reopening synchronization `0c2798508529bce7947d58f57d4a9bf2098b0746` is published with matching exact-ref readback and confirmed cleanup. In chat, the human rejected the initial draft's workflow recitation. A revised six-pass prompt invokes `autodoc/autoloop` once and contains project requirements and cumulative scope additions; it leaves checkpoints, resets, delegated decisions and stops to SDD. The human approved the generated revision with “OK.”

Append the approved text verbatim as “Multipass autoloop project prompt” after the existing all-inclusive section, using the same `> [!NOTE] Prompt` form and a concise lead. The prior README remains byte-for-byte intact. Retain all gameplay/locking, ghost, penetrator, six configuration controls, cookie/URL precedence and later implementation release requirements. No plugin instruction or workflow is revised.

Verification on this documentation result: extracted prompt equals the approved chat text; six pass headings are ordered 1–6; the original README prefix is unchanged; current local links and Markdown whitespace pass. The five-file delta is limited to the demo README and this campaign's plan/report/index/HANDOFF. Plugin source and other closed records remain unchanged. These are content/structure checks, not an execution of the demo or a fresh runtime/consumer test.

Commit and publish/read back this result before returning. A-005/A-006 are complete subject to that publication boundary. Keep campaign 099 open on its branch; no final main integration, version bump, tag, release or campaign closure is authorized by this prompt approval.

## A-007 — Entry exposure planning

The approved demo result `e7e79ba1e5ae754c639f158c130d64f9d6fccb43` is published with matching exact-ref readback and confirmed cleanup. The human additionally requests clear early exposure of doc-design modes in PLUGIN.md and the coordinator. This extends the existing open amendment; it does not reopen another campaign or authorize closure.

Read the current plugin development contract and relevant entry/contextual assessment cases. Source inspection finds the existing modes paragraph below PLUGIN.md's generic checkpoint table, a mode link without named choices in the coordinator gates, and an unqualified generic checkpoint summary in workflows.md. The packaged README already exposes all four selections and remains accurate; no duplicate public procedure is needed. A-007 in the plan scopes concise entry/selection projections and proportional checks, retaining the canonical detailed owner unchanged. Publish/read back this planning checkpoint before source changes.

### A-007 execution and evidence

Planning checkpoint `bb9d534132f5b601b6fcbcec35143f44a1c2aa76` is published with matching exact-ref readback and confirmed cleanup. PLUGIN.md now routes mode selection before the generic checkpoint table and exposes four choices in a concise table at the start of Composite workflows, replacing the prior dense paragraph. The coordinator's description/gates name document-design modes and require selection/recovery before main preparation. Workflow selection and its generic human-preparation summary preserve the actual selected approvals and stop. No detailed reset procedure or new mode is introduced.

Source walkthroughs cover default interactive/onepass, autodoc/onepass, human-controlled multipass and predefined autodoc/autoloop via both plugin and direct coordinator entry. Entries reach the unchanged mode owner before applying checkpoints; necessary separate PLAN/layout checkpoints, first PROJECT approval, announced later autoloop waiver, delegated material decisions and final DOCS-008 stop remain as defined there. These are source assessments, not independent consuming-agent trials.

Linux checks pass: 139 support tests and 49 publisher tests, 146 entry local links/anchors, all 18 coordinator reference routes and Markdown whitespace. The canonical mode procedure, packaged README and approved demo prompt are unchanged. The delta remains limited to three packaged entry/catalog files and campaign plan/report/index/HANDOFF; other closed records and runtime utilities are unchanged. Existing runtime tests add no claim of observed agent mode compliance or Windows behavior. Build/check the exact committed package before publishing this result; stop with the campaign open after publication/readback. No main merge or release is selected.
