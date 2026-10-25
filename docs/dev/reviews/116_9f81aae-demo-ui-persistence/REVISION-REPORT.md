# Demo UI layout and persistence revision report

Campaign **116_9f81aae**, baseline `9f81aae18c52df99b8084183619cf9e38cd25e0c`. Working branch `revision/116_9f81aae-demo-ui-persistence`; creation parent, eventual integration and return **main** on origin. [Revision plan](REVISION-PLAN.md). Original opening `988887f38b529fa4cf6ba20b7b7135b907a8c2ee`; accepted scope checkpoint `d3bb661d7cc1e079ddfd7147cc0d24dd08e7fe88`. Both published and readback verified.

## Changes and evidence

- **A-001 — Scope established:** the human supplied five-panel layout, optional-panel toggles above the primary game buttons, and combined leaderboard/settings file persistence. The follow-up explicitly requests corresponding sections in the other prompts as well.
- **A-002 — Revised:** Interactive, Autodoc and Multipass Autoloop share identical layout and persistence bodies. The board stays centered; game info/controls stays visible immediately left; leaderboard is farther left, settings immediately right and controls/help farther right. Individual toggles for the three optional panels sit above Pause and Start/Restart in game info/controls. Bonus/status and settings terminology now names the corresponding panels.
- **A-002 — Persistence expanded:** Leaderboard and settings persistence includes both sets of Save/Restore buttons, top 10 results and all six game configuration settings in either JSON or SQLite. The schema covers results and settings; SQLite adds settings storage. Whole-file validation precedes changes; failure preserves results, settings, cookies and URL. Successful restored settings synchronize cookies and URL. Hiding settings hides its buttons. Pass 8 retains persistence and pass 9 adds UI layout; the README count is nine.
- **A-003 — Verified:** focused source checks confirm identical shared bodies, unchanged mode distinction, sequential passes 1–9, preservation of earlier scope except the three deliberate panel terminology changes, unchanged design clarification, and the exact one-word README count update. Full source diff stays within the four demo files and active campaign/navigation/HANDOFF. Current-source Markdown links/fences/heading checks pass and closed records are preserved. These are prompt/source checks, not an implemented application or live agent trial; runtime/browser/package suites are unnecessary for this text-only change.

## Current boundary

The requested text revision is ready for publication/readback in this action commit. The campaign remains **open** for further human directions; no integration, closure, version bump, release, plugin change or application implementation is selected. This record cannot establish its own subsequent push; recover that from Git/readback.
