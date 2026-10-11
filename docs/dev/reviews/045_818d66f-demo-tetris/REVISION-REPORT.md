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

## Limits and return boundary

No gameplay, browser, live agent trial, installed-client check, or support-suite execution is claimed. This documentation-only draft does not alter plugin behavior or package contents. Campaign integration was not requested; remain on the open revision branch after verified publication. Further guide development and any eventual integration remain pending.
