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
