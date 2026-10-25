# Demo UI layout and persistence revision plan

Campaign **116_9f81aae**. Starting baseline and branch-off: `9f81aae18c52df99b8084183619cf9e38cd25e0c`. Working branch: `revision/116_9f81aae-demo-ui-persistence`. Creation parent, eventual integration and return: **main** on origin, pchemguy/SDD-Manager. No suspended parent; Standard reporting. Prior campaigns are closed and frozen.

## Objective and current boundary

Open a new demo revision campaign to revise the Tetris demo's UI layout and persistence feature definitions. The current owners are the standalone Interactive, Autodoc and Multipass Autoloop prompts under docs/demo/tetris/prompts/, with docs/demo/tetris/README.md as their guide.

The human has now supplied the layout and persistence revision. Update all three AIO prompts together. Arrange the board centrally, game info/controls immediately left, leaderboard farther left, settings immediately right and controls/help farther right. Keep the board and game info/controls visible; put individual toggles for the other panels above Pause and Start/Restart.

Rename Persistent leaderboard to Leaderboard and settings persistence. Both the existing leaderboard buttons and added settings-panel buttons save/restore the same JSON or SQLite bundle containing the top 10 results and current game settings. Hiding settings hides its buttons. Extend schema/database content and whole-file validation to settings, preserving both current results and settings on failure. Successful settings restoration follows the existing cookie/URL synchronization rules.

Keep the prior eight cumulative pass boundaries, expanding pass 8 persistence in place; add UI layout as pass 9 and update the guide's count. No new workflow instructions or application implementation are needed. Keep the campaign open after this revision.

## Revision sequence

- **A-001 — Establish the revision scope:** requirements captured above from the current human direction. No prior gameplay rules, six configuration choices, or cookie/URL precedence changes.
- **A-002 — Apply the accepted revisions:** synchronize persistence and panel-layout text in all three prompts, retain mode selection and cumulative scope, and update the README pass count.
- **A-003 — Verify and report:** check current links, Markdown, exact agreement of shared sections, sequential nine-pass placement, unchanged prior scope and the complete scoped diff; preserve closed records. Runtime/browser/package tests are unnecessary for prompt-only changes.

Publish/read back every owned commit before further work. Stop after the requested revision with the campaign open. Do not close or integrate it, change plugin/runtime/version/release content, or start another campaign. Later closure requires the authorized completed scope, final evidence/HANDOFF, explicit verified parent integration and target publication/readback.

## Closure authorization

The human subsequently requested closure. Actions A-001–A-003 are complete in published/readback-verified `7d6225db310f887a13a55ecc653933cf5af2a493`. Finalize the report/navigation/HANDOFF, publish/read back, then explicitly merge the verified source into refreshed main, verify the result and both parents, publish/read back main and return clean. Stop after closure; no new work or release is selected.
