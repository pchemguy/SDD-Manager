# Single HTML page app prompt revision plan

## Campaign and scope

- Campaign: 133_7b43552; directory: 133_7b43552-single-html-prompt.
- Baseline and creation-parent checkpoint: 7b43552e5a9e7b66e8dcd60a456486e19680b9d5.
- Working branch: revision/133_7b43552-single-html-prompt; creation parent and return target: main.
- Objective: prepare a demo prompt for a single HTML page app.
- State: Open; focused conversion authorized. No suspended parent.
- Evidence: [Revision report](REVISION-REPORT.md).

## Preparation boundary

Copy docs/demo/tetris/prompts/Autodoc.md to Single Page Autodoc.md, leaving the original unchanged. Require one organized HTML file containing all application HTML/CSS/JavaScript, with external dependencies limited to widely used JavaScript libraries from established CDNs. Remove the Windows Electron delivery subsection and future Electron-reuse paragraph. Preserve gameplay, configuration, persistence and layout scope. This is not an offline or file-URL execution requirement.

V-001: Copy and revise the new prompt, then update both READMEs and the Tetris guide so links and delivery summaries include and distinguish this additional single-page variant from the browser/Electron and 3in1 variants. Recheck exact changes, links, cross-variant descriptions and package documentation snapshots. Keep the campaign open; no application implementation or release/closure is selected.

## Verification and persistence

Record accepted revisions and action IDs when defined. Verify requested scope, wording, examples and affected links; distinguish prompt review from execution of an application generated from it. Commit owned source and evidence together, publish/read back each commit before further work, and preserve prior closed records. Final integration follows the authorized closure boundary with merged-state checks and verified target publication.

## V-002 — Single-page featured companion

Copy Featured Autodoc.md to Single Page Featured Autodoc.md, preserving the original. Apply the same embedded application HTML/CSS/JavaScript and widely used CDN-library constraint; remove future Electron reuse and the Electron feature campaign. Preserve Greenfield plus all eight game-feature sections. Add the companion to both READMEs and the Tetris guide and generalize the single-page delivery exception. Verify the exact copy delta, unchanged originals, active links and affected documentation checks; keep campaign open.
