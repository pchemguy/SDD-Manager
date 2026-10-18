# Supplied Tetris planning test

## Provenance and limits

The human supplied these test turns and a generated delivery plan in chat on 2026-10-18. The extracts below preserve the decision and decisive planning passages verbatim. They are selected evidence, not a complete copy of the supplied plan or an independently captured agent trace. The tested repository/commit and loaded instruction set were not verified. The supplied response mentions SDD Manager 0.15.0; current campaign source is a later baseline.

## Scope-setting turns

Human seed:

> Help me develop the following project
>
> A classic browser-based Tetris game.

Agent's scope question:

> Should the first version use this **classic baseline**, or also include modern features—**hold, ghost piece, 7-bag randomization, wall kicks, and hard drop**?

Human answer:

> the first version Should use this **classic baseline**, and also include modern features—**hold, ghost piece, 7-bag randomization, wall kicks, and hard drop**

Agent confirmation:

> Confirmed: the first version will include the full classic baseline plus hold, ghost piece, 7-bag randomization, wall kicks, and hard drop.
> The project brief will target a single-player TypeScript browser game with keyboard controls and automated gameplay tests. I propose desktop browsers initially; exact scoring, rotation, and locking rules will be defined during design.

The accepted baseline in the supplied turns includes movement, rotation, soft drop, gravity, line clearing, score/levels, next-piece preview, pause, restart, game over, keyboard controls and automated tests.

## Decisive generated plan passages

```markdown
Deliver the complete [SPEC](SPEC.md) capability set as one initial version. The [architecture](ARCHITECTURE.md) and [component model](DECOMPOSITION.md) guide bounded increments. Intermediate milestones demonstrate useful subsets; none is the completed initial release until all contracts and phase exits pass.

## Phase 1 — Complete browser Tetris

The phase contains four delivery milestones followed by one dedicated phase review milestone. Implement in order, retaining the usable path and regression evidence at each boundary.
```

Milestone names and scope extracted from the supplied table:

| Milestone | Extracted included scope |
| --- | --- |
| 1.1 Playable falling-block core | Tooling/browser capability, geometry, seven-bag, start/restart, movement, descent, gravity/contact lock, clearing/top-out and actual browser play |
| 1.2 Rotation, progression, and lifecycle | Rotation/kicks, score/levels/speed, pause/resume and inactive-window handling |
| 1.3 Hold and landing controls | Hold, ghost and hard drop |
| 1.4 Browser usability and delivery | Repeat, button/focus semantics, rendering/help, cross-engine acceptance and build/user guidance |
| 1.5 Phase review | Whole-phase review and reports after every delivery milestone |

```markdown
The early slice defers rotation actions, score/level progression, pause/focus lifecycle, hold, ghost, hard drop, custom key repeat, and final usability/build acceptance to their named subsequent milestones. The finished initial version still requires all of them. Seven-bag is included early so subsequent spawn/hold tests use the intended source consistently.
```

## Human assessment and requested concern

The human expects the simplest reasonable MVP in Phase 1 and independent modern enhancements in later phases within the complete first version. The scope question explicitly concerned V1; no supplied turn directs a single implementation phase. Review why current planning/conformance guidance permits this outcome and what correction is needed. Do not interpret the supplied test as authority to modify its Tetris repository or as a new universal game ruleset.
