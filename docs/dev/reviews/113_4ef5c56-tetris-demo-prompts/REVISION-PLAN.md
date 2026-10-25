# Tetris demo prompts revision plan

## Objective and authority

The human requests a new demo revision campaign to extend the standalone Tetris prompts under docs/demo/tetris/prompts/, beginning with removal of the two full embedded prompt copies in the Tetris README. This first action replaces duplication with references to the existing standalone files. Further prompt changes await the human's extension requirements; do not invent scope or close the campaign.

## Identity and scope

Campaign: **113_4ef5c56**. Full baseline/branch-off: `4ef5c565cbd3e6464c007bdbf96c897191b04413`, refreshed origin/main including the incoming manual Project-heading edits. Working branch: `revision/113_4ef5c56-tetris-demo-prompts`. Creation parent, integration and return: main on origin, pchemguy/SDD-Manager. No suspended parent; Standard reporting. Campaigns 111 and 112 are closed by their published main merges; their records remain frozen.

Product editing scope is docs/demo/tetris/README.md and, when requirements are supplied, docs/demo/tetris/prompts/. Existing campaign evidence/navigation and HANDOFF retain their normal workflow ownership. Preserve calculator docs, plugin files, versions/releases, standalone prompt bytes during this first action, and all unrelated manual content.

## Accepted first action and pending continuation

| Action | Outcome and verification |
| --- | --- |
| A-001 — README references | Retain the All-inclusive project prompt and Multipass autoloop project prompt sections/anchors and their concise leads, with links to prompts/AIO.md and prompts/Multipass Autoloop AIO.md. Preserve PAT permissions/autonomy guidance and the existing mode index. Remove the two embedded full prompt bodies. Check referenced files/links, Markdown structure, exact preservation outside the two replacements and unchanged standalone prompt bytes. Commit source/evidence together, push and read back. |

After A-001, pause with this campaign open for the requested prompt extensions. Add accepted actions when the human defines them. Do not close or merge the incomplete campaign merely because this first action is complete. No broad tests, package build, release or runtime change is needed for removing duplicated documentation.

## A-002 — Autodoc guidance

The human identifies the generic full-autonomy advice as document automation. Replace that paragraph with a link to the existing autodoc prompt and concise, accurate mode guidance: PROJECT approval remains active, subsequent document checkpoints through TASKS are preapproved, and execution stops before final documentation-package QC. Verify against the canonical mode reference and preserve every other README paragraph and standalone prompt. Keep the campaign open for further extensions.

## A-003 — AIO organization and starting workflow

The human requests moving the three existing prompts into prompts/AIO/ and naming them Interactive.md, Autodoc.md and Multipass Autoloop.md. Preserve their exact contents. Replace the two end-of-guide prompt sections and the earlier mode index with one integrated AIO subsection under Starting the exercise, describing all three variants. Add a convenience-setup subsection there: create an initialized GitHub repository from SDD-Manager-Template, create its repository-restricted fine-grained PAT with the existing suggested read/write permission set, and substitute the repository/token placeholders in a selected AIO prompt before copying it into a new ChatGPT Work or other agentic conversation. Move shared PAT guidance out of the AIO section.

Verify template metadata read-only through the selected GitHub plugin, exact prompt-byte preservation across moves, all affected current references, coherent subsection/mode boundaries, valid Markdown links/structure and unchanged unrelated guide/product/closed records. Update active evidence/navigation references as needed without altering earlier observations. Keep the campaign open; no new repository, token or conversation is actually created by this documentation change.

## A-004 — Session best-10 results

Add a concise capability subsection after Configuration persistence in each AIO prompt: a statistics panel containing the 10 best completed-game results ranked by score, updated after each game, with history kept only for the current session. In Multipass Autoloop this is the next cumulative scope pass, pass 7; align the README pass count. Leave unspecified result details for project design rather than adding implementation rules. Verify identical capability text, correct placement/pass numbering, exact preservation of other prompt content and the narrow documentation/evidence scope. Keep campaign 113 open.

## A-005 — Leaderboard naming and manual persistence

The human accepts the discussed definition and asks to rename the preceding feature. Rename Best 10 results to Leaderboard in all three AIO variants, preserving its session-only behavior. Append Persistent leaderboard with Save/Restore below the panel, user-selected JSON/SQLite export of the top 10, replacement restore after complete validation, stable result ID/non-negative integer score/UTC completion timestamp, versioned JSON and a provided JSON Schema with actual timestamp checks, and one SQLite high_scores table with database metadata versioning. Failed loads preserve current state and report an error; restored results become the session leaderboard. Autoloop adds cumulative pass 8; align README and current navigation. Keep wording concise and avoid choosing libraries, extra statistics, merge semantics or a storage implementation. Preserve all other prompt content, verify source/definition/Markdown/path scope, publish/read back and leave the campaign open.

## Authorized closure

The human now requests closure, superseding the earlier open-campaign stop, followed by a separate comprehensive review/fix/closure campaign. Finalize A-001–A-005, verify complete scoped changes and frozen-record preservation, publish evidence, explicitly merge into refreshed main and verify/publish/return clean before closing. No release or version bump is selected.
