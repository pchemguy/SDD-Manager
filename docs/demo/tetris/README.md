# Tetris: SDD Manager Demo and Test Guide

## Purpose

This guide uses a browser-based Tetris project to demonstrate and evaluate SDD Manager's project preparation, phased implementation, and feature campaign workflows.

The exercise starts with a deliberately short description. The agent should clarify the intended game, develop the governing documents with human review, and implement the accepted scope with verification and Git checkpoints.

Two variants cover different delivery workflows:

| Variant | Initial project scope | Delivery |
| --- | --- | --- |
| Phased project | Baseline gameplay and selected modern enhancements | Plan the full scope together; deliver a playable baseline before enhancements. |
| Feature expansion | Baseline gameplay | Complete the baseline, then introduce enhancements through a feature campaign. |

These are alternative runs. Use separate repositories or clearly recorded starting states when comparing their results.

## Starting the exercise

Use the repository's [Greenfield Project Prompt Template](<../../../Greenfield Project Prompt Template.md>) with this preliminary description:

> A classic browser-based Tetris game.

Supply the target repository, the required authorization, and the GitHub tracking preference through that template.

Keep the initial description short when testing clarification. For more controlled comparisons, provide the same additional decisions in each run and record when they were introduced.

The agent should clarify material ambiguities before treating them as requirements. Relevant questions include:

- Which mechanics constitute the baseline?
- Which enhancements are included, and when should they be delivered?
- Is JavaScript or TypeScript preferred? Are frameworks permitted?
- Which browsers and input methods must be supported?
- What are the scoring, progression, rotation, and locking rules?
- What evidence is required to demonstrate playable behavior?

"Classic" and "modern" are descriptive labels; the accepted documents must define the actual behavior.

## Shared gameplay scope

For this demo, the baseline includes a playable keyboard-controlled game with falling tetrominoes, movement, rotation, collision detection, locking, line clearing, and game-over behavior.

Include **lock delay equal to one full gravity interval** in the baseline.

The selected enhancements are:

- Hold piece functionality.
- Ghost piece display.
- Seven-bag randomization.
- Wall kicks.
- Hard drop.

During specification, resolve the details needed to implement and test these mechanics. For example, define when the lock timer starts and resets, how it responds to gravity changes, and whether hard drop locks immediately.

Multiplayer, backend leaderboards, and mobile touch controls are outside the selected scope.

## Variant A: Phased project

During clarification, request:

> Include the playable baseline and all five enhancements in the initial project scope. Plan delivery so that a playable baseline is completed and verified before implementing the enhancements. Keep lock delay in the baseline.

The governing documents should describe the complete accepted project. The plan should distinguish baseline delivery from enhancement delivery, with meaningful exit conditions.

See [examples/PROJECT.md](examples/PROJECT.md) for a good example of an agent-generated project brief from an earlier trial, produced after interactive clarification selected baseline gameplay plus modern enhancements. Its Canvas and vanilla JavaScript choices illustrate that trial; they are not mandatory for this demo. Although the example groups lock delay with the modern features, this guide includes it in the baseline for both variants.

A two-phase plan is a natural arrangement, but the exercise does not require exactly two phases. Additional phases should have a clear delivery purpose.

Evaluate whether the agent:

- Preserves the full scope across design, specification, planning, and tasks.
- Makes the baseline independently playable.
- Assigns enhancements to later delivery work.
- Verifies baseline completion before advancing.
- Reports implemented capabilities and remaining work accurately.

## Variant B: Feature expansion

During clarification, request:

> Implement only the playable baseline initially, including lock delay. Defer hold, ghost piece, seven-bag randomization, wall kicks, and hard drop to a later feature campaign.

The initial executable scope should contain only the baseline. Deferred enhancements may be recorded as future direction without becoming initial implementation obligations.

After baseline completion, request:

> Open a feature campaign to add hold, ghost piece, seven-bag randomization, wall kicks, and hard drop. Preserve the accepted baseline behavior except where the reviewed feature requirements explicitly amend it.

Evaluate whether the agent:

- Completes and verifies the baseline before opening the expansion.
- Prepares and presents feature documents for human review.
- Identifies changes to existing behavior and component boundaries.
- Derives feature tasks from the accepted feature scope.
- Verifies enhancements and baseline regressions.
- Integrates accepted feature requirements into the governing project documents.

## Human review and implementation checkpoints

Follow SDD Manager's document review checkpoints as each preparation artifact is produced. Review the substantive decisions, unresolved questions, and readiness for the next stage.

Select an implementation range and execution method after preparation is accepted.

During implementation, inspect whether task completion records, verification evidence, commits, and enabled GitHub tracking agree. A completed checklist alone does not demonstrate working gameplay.

## Gameplay verification

Combine automated checks with browser interaction. Include observable checks for:

| Area | Example evidence |
| --- | --- |
| Baseline | Movement, rotation, collision, line clearing, and game over behave as specified. |
| Lock delay | A grounded piece remains movable for the specified interval and locks under the accepted timer rules. |
| Hold | Storage, exchange, and reuse restrictions follow the specification. |
| Ghost piece | The preview matches the landing position without changing game state. |
| Seven-bag | Each generated bag contains all seven tetromino types exactly once. |
| Wall kicks | Defined rotation cases succeed or fail according to the accepted rules. |
| Hard drop | Keyboard input moves the piece to its landing position and applies the specified locking behavior. |

Exercise controls through the actual browser interface as well as through engine tests.

## Recording results

Record the SDD Manager version, agent/model, execution environment, other active plugins or skills, relevant prior context, chosen variant, and material human interventions.

Separate workflow findings from game defects and environment failures. Report verification that actually ran, including blocked or incomplete checks.

The result should show both whether the game works and whether SDD Manager maintained a coherent, reviewable development process.
