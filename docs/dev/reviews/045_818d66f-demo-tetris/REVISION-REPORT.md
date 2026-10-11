# Demo Tetris revision report

## Campaign and current result

- Campaign: `045_818d66f-demo-tetris`.
- Starting baseline and inspected source: `818d66f6baf8e3a324d29f3430d3bac3278f0dd2`.
- Plan: [revision plan](REVISION-PLAN.md).
- Working branch: `revision/045_818d66f-demo-tetris`; eventual target: `main`.
- State: open campaign; accepted guide draft added. The authorized stopping boundary is committing/pushing this checkpoint, with no integration or closure.

## V-001 — Accepted guide draft

Added [the Tetris demo/test guide](../../../demo/tetris/README.md) from the accepted conversational draft. It covers clarification from the short seed, shared baseline with lock delay, five enhancements, phased delivery and feature expansion alternatives, human checkpoints, gameplay checks, and contextual result recording. The text remains a guide draft; it is not a completed trial or a Tetris specification.

The only editorial adjustments to the guide are an actual relative link to the greenfield template and ASCII apostrophes. Root README navigation points to the campaign branch because source demo documents are outside the installed plugin package. The campaign index records the open campaign and its plan/report. No workflow source, manifest, packaging, game code, or closed campaign package was changed.

## Verification

On 2026-10-11, inspected the accepted draft against the added guide and ran a scoped Python assertion check over guide coverage, heading/list spacing, trailing whitespace, available relative links, and the exact owned changed/untracked paths. It passed. Ran `git diff --check`; it passed.

The final checkpoint check additionally resolves links to this report and inspects the staged five-file set before commit. Git commit identity and exact remote readback establish publication outside this same-commit report; no self-referential commit SHA or premature push result is claimed here.

## V-002 — Agent-generated project brief example

On 2026-10-11, the human requested adding the supplied earlier trial brief and linking it from the corresponding scenario. Added [examples/PROJECT_phased-project.md](../../../demo/tetris/examples/PROJECT_phased-project.md), using the standard PROJECT filename instead of the prompt's `RPOJECT.md` transposition. Preserved the supplied wording, headings, and four-space list nesting; removed the supplied trailing space.

Variant A now identifies it as a good example of an agent-generated brief after interactive clarification. The guide explains that Canvas/vanilla JavaScript are example choices and that lock delay remains in this demo's baseline despite its grouping in the supplied brief.

The preceding V-001 checkpoint `e033edb09b56c802a98300be03c6e0029e8da545` was pushed and exact remote identity verified. V-002 is a separate scoped documentation checkpoint. The scoped Python assertion check passed for supplied-content fidelity, links, Markdown structure, whitespace, and the exact four-file change set; `git diff --check` passed. Exact remote readback establishes publication separately without claiming game execution.

## V-003 — Initial locking and two steering exercises

On 2026-10-11, the human accepted starting with locking on a failed downward movement attempt, two hard-drop policies, and two steering options. Updated the guide's baseline, both delivery prompts, feature prompt, example-context note, verification table and result recording. Added explicit hard-drop policy choices and copyable steering requests in both directions.

Initial locking uses the ordinary gravity schedule and failed gravity/soft-drop attempts. Hard drop either locks immediately as an exception or leaves the piece active under the current general rule; landing-position search does not itself trigger failed-attempt locking. Full-interval steering starts a timer on grounding, snapshots the interval, does not reset it for movement/rotation/failed downward attempts, and cancels it while airborne. The immediate hard-drop exception survives that amendment unless separately changed. General delayed hard drop does not restart an existing timer.

Both exercises apply to either delivery variant at an implemented/verified checkpoint while the owning phase or feature campaign remains incomplete. Hard-drop steering requires implemented hard drop and can run with either general locking rule. The supplied earlier trial PROJECT remains byte-identical; its different lock-delay scope is explained in the guide rather than rewritten.

The scoped Python check passed for policy/exercise coverage, current initial prompts, relative links, Markdown structure, exact owned paths and byte preservation of the supplied example. `git diff --check` passed. Manual composition review checked both policy directions, checkpoint eligibility and the stop-before-resumption boundary. These are documentation checks, not executed steering trials or gameplay tests.

V-002 checkpoint `7a4a79b0c2a887c2fc6095e7ddd7711713c24889` was pushed and verified by exact remote readback. V-003 updates only the guide and this active campaign's plan/report; no closed campaign package changed. Commit and exact remote readback establish V-003 publication separately.

## V-004 — Variant-specific example filename

On 2026-10-11, the human requested a `_<slug>` suffix to identify the example's particular variant. Renamed the supplied brief to [PROJECT_phased-project.md](../../../demo/tetris/examples/PROJECT_phased-project.md), identifying Variant A: Phased project. Updated the guide and active plan/report links; the example's bytes are unchanged.

The scoped Python check passed for byte identity against the preceding committed example, absence of obsolete active link targets and resolution of all active relative links. `git diff --check` passed. V-003 checkpoint `316ef06b35c3ef1f496bacbd404e4b88adf103b7` was pushed and exact remote identity verified before this amendment. The campaign remains open at the same publication-only stopping boundary.

## V-005 — Prompt callout format

On 2026-10-11, the human supplied the `> [!NOTE] Prompt` template. Applied its exact header and quoted blank line to all eight sample prompt blocks in the guide, including the seed description, delivery/feature requests, steering requests and shared stopping boundary. Prompt wording is unchanged.

The scoped Python check passed: all eight blocks have the requested header; removing only the added headers reproduces the preceding guide byte-for-byte; the changed paths are confined to the guide and active campaign plan/report. `git diff --check` passed. No rendered-client result is claimed. V-004 checkpoint `aaae04fd0f0febeeeb320e011598686b10caa126` was pushed and exact remote identity verified before this amendment.

## V-006 — Target-first variant composition

On 2026-10-11, the human required each variant section to define its target before presenting instructions, with Variant A's opening also explaining natural multi-phase delivery. Renamed the headings to "Classical baseline + modern extensions" and "Classical baseline + feature expansion" and aligned the overview table.

Variant A now opens with the combined target, all five extensions, their inclusion in initial scope and baseline-first multi-phase delivery. The following paragraph explains full-project documents and delivery exits before the clarification prompt. The example discussion follows the prompt in two focused paragraphs: brief composition/technology choices, then the example's different locking requirement. Variant B now opens with the initial baseline target and later separately scoped expansion, then explains initial document scope before presenting the baseline and feature prompts.

Manual composition review checked topic sentences and target/scope/delivery relationships. The scoped Python check passed for both opening paragraphs, preservation of all eight prompt blocks, unchanged example bytes and steering/verification sections, resolving local links and heading spacing. `git diff --check` passed. The guide's requirements and exercise behavior are unchanged; no game execution or rendered-client check is claimed.

V-005 checkpoint `51f5e1a54e90ec7231de5bc1432fe327149d38f9` was pushed and exact remote identity verified before this amendment. V-006 changes only the guide and active campaign plan/report; the campaign remains open.

## V-007 — Game-focused initial or continuation prompt

On 2026-10-11, the human replaced Variant A's procedural prompt with a direct game request and required the next question to select hard-drop locking. Polished the supplied text into a browser-based classical-baseline request, a five-item modern enhancement list, failed-downward-attempt general locking and an explicit next question between immediate hard-drop locking and the general policy. The introduction now states that the prompt serves as an initial description in the greenfield template or a continuation after the short seed. Delivery guidance remains in the surrounding guide.

The scoped Python check passed for prompt scope, all five enhancements, the next policy question, exact `NOTE` callout, preservation of the other seven prompt blocks and unchanged Variant B/steering/verification text. Local links resolve; `git diff --check` passed. No runtime or rendered-client check is claimed. V-006 checkpoint `02cbfb00fbd118d16e48241fea217e85e3c5ab38` was pushed and exact remote identity verified before this amendment.

## V-008 — Direct baseline and feature prompts

On 2026-10-11, the human supplied replacements for Variant B's baseline and feature prompts. The polished baseline request creates a playable browser-based classical Tetris game, excludes modern enhancements from the project scope and adopts failed-downward-attempt general locking. The feature request opens a campaign for the five listed modern enhancements and explicitly asks next whether hard drop locks immediately or follows the general policy.

Both retain the requested `NOTE` / `Prompt` callouts; the feature list has quoted blank lines before and after it. The scoped Python check passed for replacement scope, all five list items, next-question wording, callout/list spacing, six unchanged prompt blocks and resolving local links. `git diff --check` passed. No runtime or rendered-client check is claimed. V-007 checkpoint `4fb9146dad841a4a55eef723aaf856c07b4687af` was pushed and exact remote identity verified before this amendment.

## V-009 — Multi-line clearing bonus

On 2026-10-11, the human requested a concise multi-line clearing bonus in the current prompts, explicitly without scoring specifics. Added "Include a scoring bonus for clearing multiple lines at once." to both initial game prompts. No point values, scoring formula or level convention is supplied.

The scoped Python check passed for the exact sentence in both prompts, absence of scoring specifics, preservation of the other six prompts and resolving local links. `git diff --check` passed. V-008 checkpoint `0ad03c2badda26eea9ff63768463a3f9cdaa1505` was pushed and exact remote identity verified before this amendment. The campaign remains open; no live game or trial execution is claimed.

## V-010 — Conditional ghost-piece visibility candidate

On 2026-10-11, the human selected dynamically hiding the ghost above the board's midline as the next feature campaign candidate. Added a further-campaign section defining hiding in the upper half and reappearance in the lower half, a direct feature prompt and verification criteria. Both delivery variants first require implemented/verified ghost support; completed feature delivery offers a natural release boundary for the requested release-workflow testing.

The midline-spanning projection case is explicitly left for feature-preparation clarification rather than silently assigned a rule. Visibility checks cover transitions in both directions and unchanged landing calculations, movement and hard-drop behavior.

The scoped Python check passed for candidate scope, prerequisite, release boundary, overlap clarification, prompt format, preservation of all eight existing prompts, heading spacing and resolving local links. `git diff --check` passed. No game, feature campaign or release was executed. V-009 checkpoint `b8fffa0b6ba04e9da860dfb2382b3cb32324803c` was pushed and exact remote identity verified before this amendment.

## V-011 — Non-persistent configuration panel candidate

On 2026-10-11, the human proposed a side panel with six configuration positions, possibly delivered as one feature per position. Added the candidate with ghost hide/dynamic/show, hard-drop on/off, next-preview on/off, hard-drop general/immediate locking, general failed-attempt/full-interval locking and hold on/off, preserving the requested order. The guide offers suitable choice/toggle controls and a concise six-item feature prompt with non-persistence across page reloads.

Delivery can use one campaign or a campaign per setting, creating the panel with the first setting and providing a possible release boundary per completed campaign. Missing capabilities or alternate rules are introduced in the relevant setting campaign rather than assumed present. Defaults, effective timing, active-piece policy changes, in-page restart behavior, inactive hard-drop policy UI and an already held piece remain preparation clarification points. Verification covers controls, disabled actions, preview modes, four locking-policy combinations and reload behavior.

The scoped Python check passed for six settings/choices, session-only scope, split delivery, dependencies, release boundaries, clarification/check criteria, numbered prompt spacing, exact `NOTE` format, preservation of the nine existing prompts, headings and local links. `git diff --check` passed. This adds guide content, not implemented settings or executed feature/release trials. V-010 checkpoint `6ccef730f33bd253aeb3add8e5414d157f7f95d5` was pushed and exact remote identity verified before this amendment.

## V-012 — Semi-persistent configuration candidate

On 2026-10-11, the human proposed cookies and URL GET parameters as independently implementable configuration options, both usable together. Added the next candidate with cookies-only, URL-only and combined per-setting resolution, separate feature prompts, either implementation order and release boundaries. The combined rule is explicit URL value, then saved cookie value, then default; valid explicit URL values update the corresponding cookies.

An explicit default-valued parameter overrides/updates cookies, while omission permits a saved cookie to override the default. Parameter syntax, invalid/duplicate input behavior, cookie lifetime/scope and panel-to-URL synchronization remain feature-preparation questions. Checks cover independent options, partial URLs, conflicts, explicit defaults, omissions, cookie updates and reloads.

The scoped Python check passed for independent options, exact per-setting precedence, explicit-default/omitted semantics, cookie updates, both implementation orders, two `NOTE` prompts, preservation of the ten existing prompts, headings and local links. `git diff --check` passed. This is guide content, not implemented storage or executed release trials. V-011 checkpoint `5f01a99842c9c38fa7677da22e366c31b0b3572e` was pushed and exact remote identity verified before this amendment.

## V-013 — Complete cookie-persistence prompt

On 2026-10-11, the human challenged the cookie prompt's completeness. Expanded it to name the Tetris configuration panel and all six settings, save their selected values on player changes, restore them on reload/reopening and use defaults for unsaved settings. The combined URL rule now explicitly covers per-setting precedence, cookie updates for explicit default-valued parameters and preservation of cookies when parameters are omitted. Surrounding preparation guidance retains URL synchronization as an open choice without making cookie saving optional.

The scoped Python check passed for six-setting scope, save-on-change, reload/reopen restoration, defaults, explicit/omitted URL semantics, callout/list spacing and eleven unchanged prompts. `git diff --check` passed. No cookie implementation or browser behavior is claimed. V-012 checkpoint `8d7b47f883183f7d2e00b9a24150984677c1e712` was pushed and exact remote identity verified before this amendment.

## V-014 — Explicit persistence mechanisms in prompts

On 2026-10-11, the human identified "URL configuration" as undefined shorthand in the cookie prompt. Replaced it with the explicit prerequisite that the game accepts configuration values through URL query (GET) parameters. The paragraph names per-setting resolution, saving explicit parameter values in cookies, explicit defaults and retention of saved values for omitted parameters. The complementary URL prompt now names existing cookie storage directly instead of "cookie configuration."

The scoped Python check passed for removal of both shorthand phrases, explicit mechanisms, retained precedence/default/omission semantics and ten unchanged prompts. `git diff --check` passed. V-013 checkpoint `4bd5ebe9621001119853cdfadfa20a49af56f25d` was pushed and exact remote identity verified before this amendment. The campaign remains open; no runtime check is claimed.

## V-015 — Explicit setting choices in the cookie prompt

On 2026-10-11, the human identified unexplained ghost-visibility and locking-policy labels. Replaced those three cookie-prompt list items with all available choices: always hide/dynamic above-midline hide/always show; general-rule/immediate hard-drop locking; failed-downward-attempt/full-gravity-interval general locking. The full-interval choice explicitly starts from grounding.

The scoped Python check passed for the three explicit choice sets, six total settings, unchanged save/restore/precedence requirements and eleven unchanged prompts. `git diff --check` passed. V-014 checkpoint `943583c09ac385537813a14cf8392b51f899c9c1` was pushed and exact remote identity verified before this amendment. The campaign remains open; no runtime check is claimed.

## V-016 — Complete URL-parameter feature prompt

On 2026-10-11, the human requested rewriting the complementary URL prompt. It now names URL query (GET) parameters, lists all six settings with the same explicit choices as the cookie prompt, applies supplied values when the game opens and explains sensible defaults and explicit-default/omission handling. A separate paragraph defines existing-cookie precedence, updates from explicit URL values and retention of cookie values when parameters are omitted.

The scoped Python check passed for six-setting choice parity, URL application/default semantics, combined precedence and updates, quoted list spacing and eleven unchanged prompts. `git diff --check` passed. V-015 checkpoint `c58ba71e2841a63ac553b65a43936425521d65d4` was pushed and exact remote identity verified before this amendment. The campaign remains open; no runtime check is claimed.

## V-017 — Reusable persistence campaign template

On 2026-10-11, the human supplied a consolidated persistence prompt with a selectable `{FUNCTIONALITY}` field. Replaced the separate cookie and URL prompts with the polished template and its three allowed selections. The request covers all six explicit setting choices but limits scope to presently implemented settings, permits existing cookies/URL/both/neither support and defines saving cookie values and updating URL parameters on player changes.

Restore/apply wording distinguishes saved cookie settings from URL-supplied settings; sensible defaults apply when no supplied or saved value exists. Explicit-default/omitted URL semantics and per-setting URL/cookie/default precedence remain explicit. Surrounding preparation guidance now treats URL updates as required and leaves their representation of defaults for clarification; verification includes both cookie and URL updates after panel changes.

The scoped Python check passed for the implemented subset, three placeholder selections, existing support states, six choices, change/save/update rules, restoration/default/precedence semantics, prompt format, ten unchanged prompts, headings and links. `git diff --check` passed. V-016 checkpoint `011615f8631ecff19d71f41a443288e57f576af6` was pushed and exact remote identity verified before this amendment. The campaign remains open; no runtime check is claimed.

## V-018 — Penetrator-bonus feature candidate

On 2026-10-11, the human proposed one penetrator bonus per four-line clear, accumulation up to a suggested three, hotkey activation for any piece until locking, all-white rendering reserved from regular pieces, all-the-way hard drop, matching ghost projection and non-overlapping final placement. Added the candidate, direct prompt, release boundary and verification row. The hard-drop target is expressed as the lowest valid landing position rather than an overlapping bottom placement; existing occupied cells remain intact.

The cap remains explicitly proposed for preparation confirmation. Spending time, repeated activation keys, hold interaction, temporary overlap during locking attempts, descent/rotation and selected locking-policy interaction remain preparation decisions. These must preserve legal non-overlapping final placement.

The scoped Python check passed for reward/cap, any-piece activation and locking lifetime, white rendering, valid drop/ghost/lock constraints, preparation questions, release boundary, eleven unchanged prompts, heading spacing and local links. `git diff --check` passed. V-017 checkpoint `9c944f1f8d1d96dcb1f53c67705159fe8a8d3bbc` was published and exact remote identity verified after the human's explicit push continuation. The campaign remains open; no penetrator gameplay or feature/release execution is claimed.

## Limits and return boundary

No gameplay, browser, live agent trial, installed-client check, or support-suite execution is claimed. This documentation-only draft does not alter plugin behavior or package contents. Campaign integration was not requested; remain on the open revision branch after verified publication. Further guide development and any eventual integration remain pending.
