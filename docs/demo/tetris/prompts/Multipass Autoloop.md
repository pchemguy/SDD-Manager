Help me develop the following project using $sdd-manager in autodoc/autoloop mode with the following cumulative scope passes.

### Project repo and credentials

GitHub repository: https://github.com/{OWNER}/{REPO}

GitHub token: {FINE_GRAINED_GH_TOKEN}

### Versioning and releases

Manage the project's versioning, choosing an appropriate initial version and increasing it to reflect delivered changes. When implementation is subsequently authorized, create and publish a new GitHub release with the corresponding version tag and release notes after each implementation phase is completed, verified and integrated.

### Project: Browser-based Tetris game

Develop a browser-based Tetris game. The following cumulative passes define how its target scope evolves during document preparation.

#### Pass 1 - Playable classic baseline

Define a playable classic Tetris baseline with falling tetrominoes, movement, rotation, gravity, line clearing, scoring, game over and restart.

Keep this initial scope minimal and coherent. The enhancements and configuration capabilities listed in later passes are future additions at this point.

#### Pass 2 - Scope extension: Modern rule extensions

- Hold piece.
- Ghost piece.
- 7-bag piece randomization.
- Wall kicks.
- Hard drop.
- Full gravity interval lock delay: by default, lock after one full gravity interval from becoming grounded, including after hard drop.

#### Pass 3 - Scope extension: Conditional ghost visibility

Dynamically hide the ghost when its projected landing position is in the upper half of the board, above the midline, and show it again when that position returns to the lower half.

#### Pass 4 - Scope extension: Penetrator mode

Allow the player to turn the current falling piece into a penetrator with a hotkey, provided a penetrator bonus is available. A penetrator can pass through occupied cells without destroying them. This ability lasts until the piece locks; its final position must be entirely within the board without overlapping occupied cells.

For a penetrator, hard drop must pass through blocking cells to the lowest valid landing position. The ghost piece must preview that same position whenever it is visible.

Clearing four lines at once awards one penetrator bonus, granting one activation of the penetrator ability. Allow up to three bonuses to accumulate.

Render penetrator pieces entirely white, and do not use white for regular pieces. Show the available bonuses in the game info and controls panel using one symbol per bonus, such as a lightning bolt. Update the indicator whenever a bonus is earned or spent.

#### Pass 5 - Scope extension: Session-only game configuration

Provide a settings panel with controls for:

1. Ghost-piece visibility: always hide, hide dynamically above the board’s midline, or always show.
2. Hard drop: on or off.
3. Next-piece preview: on or off.
4. Hard-drop locking policy: follow the selected general locking policy, or lock immediately after hard drop.
5. General locking policy: lock on a failed downward movement attempt, or after one full gravity interval from becoming grounded.
6. Hold piece: on or off.

Add next-piece preview if not already available.

Use sensible defaults. Keep settings within the current page session; do not persist them across page reloads in this pass.

#### Pass 6 - Scope extension: Configuration persistence

Replace session-only configuration with support for cookies and URL query parameters for all settings above. Restore saved settings or apply URL-supplied settings when the page is reloaded or the game is opened again. Use sensible defaults where neither source supplies a value.

Resolve each setting independently in this order:

1. A value explicitly supplied by its URL parameter.
2. A saved cookie value.
3. The default value.

Whenever the player changes a setting, save its selected value in the corresponding cookie and update its URL query parameter.

Save explicit URL parameter values in the corresponding cookies, including values equal to the default. When a parameter is omitted, retain its saved cookie value rather than replacing it with the default.

#### Pass 7 - Scope extension: Leaderboard

Show a leaderboard panel with the 10 best completed-game results, ranked by score. Update it after each game and keep the history only for the current session.

#### Pass 8 - Scope extension: Persistence

Place **Save** and **Restore** buttons at the bottom of the settings panel. Hiding the settings panel also hides these buttons.

Save offers JSON or SQLite and downloads one file containing the current top 10 results and all six game configuration settings. Restore accepts either format, replaces the leaderboard and applies the saved settings, updating their cookies and URL parameters.

Preserve each result's stable ID, non-negative integer score and UTC game-completion timestamp in both formats. JSON includes a format version, results array and settings object; provide a JSON Schema and validate the complete content before loading, including timestamps and setting values. SQLite includes `high_scores(id, score, timestamp)` and `settings(key, value)`, with one uniquely keyed row per game setting and format versioning in database metadata.

Validate the entire file before changing results, settings, cookies or URL parameters. On failure, show a clear error and leave them unchanged. Saving and restoring are manual; restored results become the session leaderboard.

#### Pass 9 - Scope extension: UI layout

Arrange the panels from left to right:

| Panel | Position |
| --- | --- |
| Leaderboard | Left of game info and controls |
| Game info and controls | Immediately left of the board |
| Board | Center of the screen |
| Settings | Immediately right of the board |
| Controls/help | Right of settings |

Keep the board and game info and controls panels visible. In the game info and controls panel, place individual show/hide toggle buttons for the leaderboard, settings and controls/help panels above the **Pause** and **Start/Restart** buttons. Keep the board centered when panels are hidden or shown.

### Design clarification

During initial exploration, address important interactions across the predefined passes, including ghost positions that straddle the midline; lock-delay timing and resets; penetrator activation, hold and locking behavior; configuration changes during gameplay; and invalid configuration values.
