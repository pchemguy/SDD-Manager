> [!NOTE] Autodoc baseline and feature campaigns
>
> Submit the sections separately, in order. Start with Greenfield; after completing the baseline, submit each feature request when ready to develop that capability. Replace the repository and token placeholders before submitting Greenfield.

## Greenfield

Help me develop the following project using $sdd-manager in autodoc mode.

### Project repo and credentials

GitHub repository: https://github.com/{OWNER}/{REPO}

GitHub token: {FINE_GRAINED_GH_TOKEN}

### Versioning and releases

Manage the project's versioning, choosing an appropriate initial version and increasing it to reflect delivered changes. After each implementation phase is completed, verified and integrated, create and publish a new GitHub release with the corresponding version tag and release notes.

### Project: Browser-based Tetris game

Develop a browser-based classic Tetris game.

During preparation, resolve scope ambiguities, important interactions and boundary cases, such as lock-delay timing, behavior, and resets. Surface decisions that materially affect application scope or gameplay before implementation.

## Feature 1 - Modern rule extensions

Open a feature campaign to implement "modern rule extensions" capability:

- Hold piece.
- Next-piece preview.
- Ghost piece.
- 7-bag piece randomization.
- Wall kicks.
- Hard drop.
- Full gravity interval lock delay: by default, lock after one full gravity interval from becoming grounded. Hard drop follows the same locking policy unless immediate hard-drop locking is selected.

## Feature 2 - Conditional ghost-piece visibility

Open a feature campaign to implement "conditional ghost-piece visibility" capability:

Provide a ghost visibility mode that dynamically hides the ghost when its projected landing position is in the upper half of the board, above the midline, and shows it again when that position returns to the lower half.

## Feature 3 - Penetrator mode

Open a feature campaign to implement "penetrator mode" capability:

Allow the player to turn the current falling piece into a penetrator with a hotkey, provided a penetrator bonus is available. A penetrator can pass through occupied cells without destroying them. This ability lasts until the piece locks; its final position must be entirely within the board without overlapping occupied cells.

For a penetrator, hard drop must pass through blocking cells to the lowest valid landing position. The ghost piece must preview that same position whenever it is visible.

Clearing four lines at once awards one penetrator bonus, granting one activation of the penetrator ability. Allow up to three bonuses to accumulate.

Render penetrator pieces entirely white, and do not use white for regular pieces. Show the available bonuses in the game info and controls panel using one symbol per bonus, such as a lightning bolt. Update the indicator whenever a bonus is earned or spent.

## Feature 4 - Session-only game configuration

Open a feature campaign to implement "session-only game configuration" capability:

Provide a settings panel with controls for:

1. Ghost-piece visibility: always hide, hide dynamically above the board’s midline, or always show.
2. Hard drop: on or off.
3. Next-piece preview: on or off.
4. Hard-drop locking policy: follow the selected general locking policy, or lock immediately after hard drop.
5. General locking policy: lock on a failed downward movement attempt, or after one full gravity interval from becoming grounded.
6. Hold piece: on or off.

Use sensible defaults. Keep settings within the current page session; do not persist them across page reloads in this feature campaign.

## Feature 5 - URL GET and cookie persistence

Open a feature campaign to implement "URL GET and cookie persistence" capability:

Support cookies and URL query parameters for all existing game-configuration settings. Restore saved settings or apply URL-supplied settings when the page is reloaded or the game is opened again. Use sensible defaults where neither source supplies a value.

Resolve each setting independently in this order:

1. A value explicitly supplied by its URL parameter.
2. A saved cookie value.
3. The default value.

Whenever the player changes a setting, save its selected value in the corresponding cookie and update its URL query parameter.

Save explicit URL parameter values in the corresponding cookies, including values equal to the default. When a parameter is omitted, retain its saved cookie value rather than replacing it with the default.

## Feature 6 - Leaderboard

Open a feature campaign to implement "leaderboard" capability:

Show a leaderboard panel with the 10 best completed-game results, ranked by score. Update it after each game and keep the history only for the current session.

## Feature 7 - File persistence

Open a feature campaign to implement "file persistence" capability:

Place **Save** and **Restore** buttons at the bottom of the settings panel. Hiding the settings panel also hides these buttons.

Save offers JSON or SQLite and downloads one file containing the current top 10 results and all six game configuration settings. Restore accepts either format, replaces the leaderboard and applies the saved settings, updating their cookies and URL parameters.

Preserve each result's stable ID, non-negative integer score and UTC game-completion timestamp in both formats. JSON includes a format version, results array and settings object; provide a JSON Schema and validate the complete content before loading, including timestamps and setting values. SQLite includes `high_scores(id, score, timestamp)` and `settings(key, value)`, with one uniquely keyed row per game setting and format versioning in database metadata.

Validate the entire file before changing results, settings, cookies or URL parameters. On failure, show a clear error and leave them unchanged. Saving and restoring are manual; restored results become the session leaderboard.

## Feature 8 - UI layout

Open a feature campaign to implement "UI layout" capability:

Arrange the panels from left to right:

| Panel | Position |
| --- | --- |
| Leaderboard | Left of game info and controls |
| Game info and controls | Immediately left of the board |
| Board | Center of the screen |
| Settings | Immediately right of the board |
| Controls/help | Right of settings |

Keep the board and game info and controls panels visible. In the game info and controls panel, place individual show/hide toggle buttons for the leaderboard, settings and controls/help panels above the **Pause** and **Start/Restart** buttons. Keep the board centered when panels are hidden or shown.
