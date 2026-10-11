# Tetris: SDD Manager Demo and Test Guide

## Purpose

This guide uses a browser-based Tetris project to demonstrate and evaluate SDD Manager's project preparation, phased implementation, feature campaign, and checkpoint steering workflows.

The exercise starts with a deliberately short description. The agent should clarify the intended game, develop the governing documents with human review, and implement the accepted scope with verification and Git checkpoints.

Two variants cover different delivery workflows:

| Variant | Initial project scope | Delivery |
| --- | --- | --- |
| A: Classical baseline + modern extensions | Baseline gameplay and selected modern enhancements | Plan the full scope together; deliver a playable baseline before enhancements. |
| B: Classical baseline + feature expansion | Baseline gameplay | Complete the baseline, then introduce enhancements through a feature campaign. |

These are alternative runs. Use separate repositories or clearly recorded starting states when comparing their results.

## Starting the exercise

Use the repository's [Greenfield Project Prompt Template](<../../../Greenfield Project Prompt Template.md>) with this preliminary description:

> [!NOTE] Prompt
>
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

Start with **locking on a failed downward movement attempt** in both delivery variants. Reaching a supported position does not itself lock the piece: a subsequent gravity or soft-drop attempt that cannot move it down locks it. Keep the ordinary gravity schedule; landing does not start a fresh lock timer. Successful horizontal movement or rotation does not reset that schedule.

The selected enhancements are:

- Hold piece functionality.
- Ghost piece display.
- Seven-bag randomization.
- Wall kicks.
- Hard drop.

During specification, resolve the details needed to implement and test these mechanics, including input handling and gravity scheduling. Full-gravity-interval locking is introduced through the steering exercise below.

### Hard-drop policy choices

When preparing the enhancement scope, choose one of these policies and record it in the governing documents:

| Policy | Required behavior |
| --- | --- |
| Immediate locking exception | Hard drop moves the piece to its landing position and locks it immediately, regardless of the general locking policy. |
| General delayed locking policy | Hard drop moves the piece to its landing position and leaves it active under the general locking policy. Initially, it waits for an ordinary failed downward movement attempt; after the locking amendment, it follows the full-interval timer rules. |

For the general delayed policy, finding the landing position during hard drop does not count as a failed downward movement attempt. Hard drop itself does not force locking or restart an already active timer. The choice is a requirement for the trial; the exercise does not require a player-facing policy selector.

Multiplayer, backend leaderboards, and mobile touch controls are outside the selected scope.

## Variant A: Classical baseline + modern extensions

The target is a browser-based Tetris game combining the classical baseline with hold, ghost piece, seven-bag randomization, wall kicks, and hard drop. Both the baseline and extensions belong to the initial project scope. This combination provides a natural multi-phase delivery option: first deliver a playable baseline, then add the modern extensions.

The governing documents should describe the complete accepted project. The plan should distinguish baseline delivery from enhancement delivery, with meaningful exit conditions. Two phases are a natural arrangement; additional phases should have a clear delivery purpose.

Use this prompt as an initial project description in the greenfield template or as a continuation after the short seed description:

> [!NOTE] Prompt
>
> Create a browser-based Tetris game with a playable classical baseline and these modern enhancements:
>
> - Hold piece.
> - Ghost piece.
> - 7-bag piece randomization.
> - Wall kicks.
> - Hard drop.
>
> Include a scoring bonus for clearing multiple lines at once.
>
> Adopt locking on a failed downward movement attempt as the general locking policy. Next, ask me whether hard drop should lock the piece immediately or follow the general locking policy.

See [examples/PROJECT_phased-project.md](examples/PROJECT_phased-project.md) for a good example of an agent-generated project brief from an earlier trial. Interactive clarification established the combined baseline and enhancement scope, which the brief presents through the target audience, goals, and non-goals. Its Canvas and vanilla JavaScript choices illustrate that trial; they are not mandatory for this demo.

The example also includes full-interval lock delay. This guide starts with failed-downward-attempt locking and introduces full-interval locking as a steering amendment. Use the example for its brief structure and scope presentation, and apply this guide's initial locking rule when developing the trial project.

Evaluate whether the agent:

- Preserves the full scope across design, specification, planning, and tasks.
- Makes the baseline independently playable.
- Assigns enhancements to later delivery work.
- Verifies baseline completion before advancing.
- Reports implemented capabilities and remaining work accurately.

## Variant B: Classical baseline + feature expansion

The initial target is a playable browser-based Tetris game with the classical baseline mechanics. Hold, ghost piece, seven-bag randomization, wall kicks, and hard drop are deferred until the baseline is complete, then added through a feature campaign. This variant demonstrates preparation and delivery of a complete baseline project followed by a separately scoped expansion.

The initial governing documents and executable scope should cover the baseline. Deferred enhancements may be recorded as future direction without becoming initial implementation obligations.

During clarification, request:

> [!NOTE] Prompt
>
> Create a browser-based Tetris game with a playable classical baseline. Modern enhancements are outside the project scope.
>
> Include a scoring bonus for clearing multiple lines at once.
>
> Adopt locking on a failed downward movement attempt as the general locking policy.

After completing and verifying the baseline, open the feature campaign with this request:

> [!NOTE] Prompt
>
> Open a feature campaign to add these modern enhancements:
>
> - Hold piece.
> - Ghost piece.
> - 7-bag piece randomization.
> - Wall kicks.
> - Hard drop.
>
> Next, ask me whether hard drop should lock the piece immediately or follow the general locking policy.

Evaluate whether the agent:

- Completes and verifies the baseline before opening the expansion.
- Prepares and presents feature documents for human review.
- Identifies changes to existing behavior and component boundaries.
- Derives feature tasks from the accepted feature scope.
- Verifies enhancements and baseline regressions.
- Integrates accepted feature requirements into the governing project documents.

## Further feature campaigns

### Conditional ghost-piece visibility

The next feature campaign candidate dynamically hides the ghost piece when its projected landing position is in the upper half of the board, above the midline, and shows it when the projection returns to the lower half. This changes the display of the landing preview while retaining the ghost-piece capability.

Run this campaign after ghost-piece support is implemented and verified: after the combined game in Variant A or after the modern enhancement campaign in Variant B. Completing and verifying the feature provides another natural release boundary for testing SDD Manager's release workflow. During feature preparation, clarify how visibility is determined when the projected piece spans the midline.

> [!NOTE] Prompt
>
> Open a feature campaign to dynamically hide the ghost piece when its projected landing position is in the upper half of the board, above the midline. Show it again when its projected landing position returns to the lower half.

Verify visibility changes in both directions as the projected landing position crosses the midline, including the accepted overlap rule. Check that hiding the preview does not change the landing calculation, piece movement or hard-drop behavior.

## Human review and implementation checkpoints

Follow SDD Manager's document review checkpoints as each preparation artifact is produced. Review the substantive decisions, unresolved questions, and readiness for the next stage.

Select an implementation range and execution method after preparation is accepted.

During implementation, inspect whether task completion records, verification evidence, commits, and enabled GitHub tracking agree. A completed checklist alone does not demonstrate working gameplay.

## Steering exercises

Both exercises apply to either delivery variant. Pause at an implemented and verified task checkpoint while the owning implementation phase or feature campaign remains incomplete. Choose the initial policy before implementation, then request the change after its behavior can be observed. These are amendments to the paused work through [sdd-steer](../../../skills/sdd-steer/SKILL.md).

### Option 1: Switch to full-gravity-interval locking

Use this exercise once baseline locking is implemented. In Variant A, pause before advancing to enhancement work; in Variant B, pause before completing the baseline. It can also be applied later at an eligible implementation checkpoint.

> [!NOTE] Prompt
>
> Use SDD Manager's steering workflow to replace failed-downward-attempt locking with a lock delay equal to one full gravity interval at the current level. Start the timer when a piece first becomes grounded. Horizontal movement, rotation, and unsuccessful downward attempts must not restart or bypass the timer. If the piece becomes airborne, cancel the timer; start a new delay when it becomes grounded again. Snapshot the gravity interval when the timer starts. Preserve the selected hard-drop policy: the immediate exception still locks immediately; the general delayed policy follows these timer rules.
>
> Reconcile the governing documents, implementation, tests, and player documentation. Verify, commit, push, and integrate the amendment into the paused implementation branch, then stop before resuming implementation.

### Option 2: Switch the hard-drop locking policy

Use this exercise after hard drop and the selected policy are implemented: during enhancement work in Variant A or during the feature campaign in Variant B. Either direction is valid. State the target policy explicitly and retain the general locking rule currently in effect.

To switch from the immediate exception to the general delayed policy:

> [!NOTE] Prompt
>
> Use SDD Manager's steering workflow to remove hard drop's immediate-locking exception. Hard drop must move the piece to its landing position and leave it active under the current general locking policy. Its landing-position search must not trigger failed-downward-attempt locking. Under full-interval locking, newly grounding a piece starts the normal timer; hard drop must not restart an already active timer. Preserve ordinary gravity and soft-drop locking behavior.

To switch from the general delayed policy to the immediate exception:

> [!NOTE] Prompt
>
> Use SDD Manager's steering workflow to make hard drop an immediate-locking exception. Hard drop must move the piece to its landing position and lock it immediately, including when the piece is already grounded. Preserve the current general locking policy for gravity and soft drop.

Append this boundary to either request:

> [!NOTE] Prompt
>
> Reconcile the governing documents, implementation, tests, and player documentation. Verify, commit, push, and integrate the amendment into the paused implementation branch, then stop before resuming implementation.

Evaluate whether the agent updates the existing requirements and tests coherently, preserves unrelated gameplay, and returns control without automatically continuing the paused work. Record which exercises ran, their order, and the policies before and after each amendment. Switching the hard-drop policy does not require first performing the full-interval amendment.

## Gameplay verification

Combine automated checks with browser interaction. Include observable checks for:

| Area | Example evidence |
| --- | --- |
| Baseline | Movement, rotation, collision, line clearing, and game over behave as specified. |
| Initial locking | Landing alone leaves the piece active; a failed gravity or soft-drop downward attempt locks it. Movement and rotation preserve the gravity schedule. |
| Full-interval locking amendment | Grounding starts a full interval; movement, rotation, and failed downward attempts do not restart or bypass it. Becoming airborne cancels it; grounding again starts a new interval. |
| Hold | Storage, exchange, and reuse restrictions follow the specification. |
| Ghost piece | The preview matches the landing position without changing game state. |
| Conditional ghost visibility feature | The preview hides above the midline and reappears below it under the accepted overlap rule; landing calculation and gameplay remain unchanged. |
| Seven-bag | Each generated bag contains all seven tetromino types exactly once. |
| Wall kicks | Defined rotation cases succeed or fail according to the accepted rules. |
| Hard drop | Keyboard input moves the piece to its landing position. The immediate exception locks it immediately; the general delayed policy leaves it active under the current general rule. Check both a falling piece and an already grounded piece. |
| Hard-drop policy amendment | Before/after checks demonstrate the requested policy switch and unchanged ordinary locking. Under full-interval locking, a repeated hard drop does not extend an existing timer. |

Exercise controls through the actual browser interface as well as through engine tests.

## Recording results

Record the SDD Manager version, agent/model, execution environment, other active plugins or skills, relevant prior context, chosen delivery variant, hard-drop policy, steering exercises and their checkpoints, and material human interventions.

Separate workflow findings from game defects and environment failures. Report verification that actually ran, including blocked or incomplete checks.

The result should show both whether the game works and whether SDD Manager maintained a coherent, reviewable development process.
