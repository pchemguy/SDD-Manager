# Calculator: SDD Manager Demo and Test Guide

## Purpose

This guide develops a browser-based calculator through three initial phases, two optional steering exercises, and a proposed sequence of feature campaigns. It demonstrates SDD Manager's preparation, phased implementation, checkpoint steering, feature integration, and GitHub release workflows.

Follow the sequence below for a straightforward trial. The human may change the scope or order through the appropriate workflow; record such deviations when evaluating results.

## Initial project: Calculator

The target is a browser-based calculator. Phase 1 delivers the basic arithmetic baseline; Phases 2 and 3 extend the same application with scientific functions. All three phases belong to the initial project scope.

| Phase | Functions | Delivery result |
| --- | --- | --- |
| 1: Basic arithmetic | Addition, subtraction, multiplication, division, clear, and Enter/evaluate | A usable basic calculator; the baseline. |
| 2: Powers and logarithms | `pow`, `root`, `exp`, `ln`, `lg`, and parentheses | Powers, roots, logarithms, and grouped expressions. |
| 3: Trigonometry | `sin`, `cos`, `tan`, `asin`, `acos`, and `atan` | A scientific calculator with trigonometric and inverse trigonometric functions. |

Use the [Greenfield Project Prompt Template](<../../../.agents/plugins/sdd-manager/assets/Greenfield Project Prompt Template.md>) to supply the repository, authorization, and GitHub tracking preference. Use this as the project description, or as a continuation when clarifying the project:

> [!NOTE] Prompt
>
> Create a browser-based calculator. Deliver its initial functionality in three phases:
>
> 1. Addition, subtraction, multiplication, division, clear, and Enter/evaluate.
> 2. Powers (`pow`), general roots (`root`), the exponential function (`exp`), natural logarithms (`ln`), base-10 logarithms (`lg`), and parentheses.
> 3. Sine, cosine, tangent, and their inverse functions: `sin`, `cos`, `tan`, `asin`, `acos`, and `atan`.
>
> Phase 1 should deliver a usable basic calculator. Each subsequent phase should extend the working application.

During preparation, clarify input and evaluation behavior, operator precedence and associativity, function notation, numerical precision, error handling, and angle units. Distinguish the general root function from square root and define `exp` as the natural exponential function. Choose front-end technology and supported browsers through clarification.

Review each preparation artifact at SDD Manager's human checkpoints before selecting an implementation range and execution method. Verify each phase before advancing. Phase 1 is a natural first release boundary; the subsequent phases also provide release candidates once complete, integrated, and verified.

## Optional steering exercises

Use either exercise at a verified task checkpoint while its owning phase remains incomplete. The proposed placement is Option 1 during Phase 1 and Option 2 during Phase 2, after the relevant evaluation behavior is working. Steering amends the paused implementation; it does not automatically resume it.

### Option 1: Absolute value, reciprocal, and negation

Add three common unary operations to the calculator: absolute value (`abs`), reciprocal (`inv`, or `1/x`), and sign negation (`neg`). Clarify how these operations apply to the current input or expression and how reciprocal handles zero.

> [!NOTE] Prompt
>
> Use SDD Manager's steering workflow to add absolute value (`abs`), reciprocal (`inv`, meaning `1/x`), and sign negation (`neg`) to the calculator.
>
> Reconcile the governing documents, implementation, tests, and user documentation. Verify, commit, push, and integrate the amendment into the paused implementation branch, then stop before resuming implementation.

### Option 2: Square and square root

Add dedicated square (`sqr`) and square-root (`sqrt`) operations alongside the Phase 2 general power and root functions. Clarify their input behavior and the treatment of negative square-root arguments.

> [!NOTE] Prompt
>
> Use SDD Manager's steering workflow to add dedicated square (`sqr`) and square-root (`sqrt`) operations to the calculator.
>
> Reconcile the governing documents, implementation, tests, and user documentation. Verify, commit, push, and integrate the amendment into the paused implementation branch, then stop before resuming implementation.

## Feature campaign sequence

After the three initial phases are complete, follow these campaigns in order. Each completed, integrated, and verified campaign provides a natural release boundary. Use SDD Manager's release workflow to prepare and publish selected GitHub releases rather than treating every checkpoint commit as a release.

### 1. Basic/scientific mode toggle

Add a toggle between basic and scientific calculator modes. Basic mode exposes the Phase 1 controls; scientific mode additionally exposes the Phase 2 and Phase 3 functions. Assign any implemented steering additions to appropriate modes during preparation.

> [!NOTE] Prompt
>
> Open a feature campaign to add a toggle between basic and scientific calculator modes. Basic mode should expose addition, subtraction, multiplication, division, clear, and Enter/evaluate. Scientific mode should also expose powers, roots, exponential and logarithmic functions, parentheses, trigonometric functions, and inverse trigonometric functions.
>
> Include any already implemented absolute-value, reciprocal, negation, square, and square-root controls in appropriate modes. Clarify what happens to the current input and result when switching modes.

### 2. Programmer operations

Add `OR`, `NOT`, `XOR`, `AND`, and `NOR` operations as the foundation for programmer mode. Scientific capabilities remain available through their existing mode until the final mode-selector campaign separates the interfaces.

> [!NOTE] Prompt
>
> Open a feature campaign to add programmer operations to the calculator: OR, NOT, XOR, AND, and NOR.
>
> Clarify whether these operate on Boolean values or integer bit patterns. For bitwise operations, define integer width, signedness, input representation, and the behavior of NOT and NOR before implementation. Provide accessible controls within the existing interface; a dedicated programmer mode will be added in a later campaign.

### 3. Graphing

Add graphing of expressions in one variable while retaining scientific calculation. This campaign supplies graphing functionality before the final selector introduces a distinct graphing mode.

> [!NOTE] Prompt
>
> Open a feature campaign to add graphing functionality to the calculator. Let the user enter an expression in x and plot it over a selected range using the application's existing scientific functions.
>
> Clarify expression entry, axis ranges, and the treatment of undefined values and discontinuities before implementation. Keep the existing calculator modes usable.

### 4. Four-mode selector

Extend the basic/scientific toggle into a selector with basic, scientific, programmer, and graphing modes. Graphing mode includes scientific functions. Programmer mode hides scientific controls, and scientific mode hides programmer controls.

| Mode | Visible functionality |
| --- | --- |
| Basic | Basic arithmetic and evaluation controls. |
| Scientific | Basic controls plus scientific functions; programmer controls hidden. |
| Programmer | Basic controls plus OR, NOT, XOR, AND, and NOR; scientific controls hidden. |
| Graphing | Graphing controls and scientific functions, including their basic arithmetic dependencies. |

> [!NOTE] Prompt
>
> Open a feature campaign to extend the basic/scientific toggle into a selector with four modes: basic, scientific, programmer, and graphing.
>
> Basic mode should expose basic arithmetic. Scientific mode should include basic arithmetic and scientific functions. Programmer mode should expose basic arithmetic and OR, NOT, XOR, AND, and NOR while hiding scientific controls. Scientific mode should hide programmer controls. Graphing mode should include graphing and scientific functions.
>
> Clarify how existing input, results, and graph expressions behave when switching modes, including expressions that use functions unavailable in the selected mode.

## Verification and releases

Combine calculation tests with interaction through the actual browser interface. Verify accepted numerical behavior and controls at each boundary, with regression checks for previously delivered functionality.

| Boundary | Representative checks |
| --- | --- |
| Phase 1 | All four arithmetic operations, clear, evaluation, decimal input, and division-by-zero handling. |
| Phase 2 | Powers, roots, exponential/logarithmic functions, grouping, precedence, and invalid domains. |
| Phase 3 | Trigonometric and inverse functions, accepted angle units, and domain/range boundaries. |
| Steering 1 | Absolute value, reciprocal, and negation through the interface, including zero and negative input. |
| Steering 2 | Square and square root, consistency with general powers/roots, and invalid-domain behavior. |
| Basic/scientific toggle | Correct control visibility and accepted input/result handling in both directions. |
| Programmer operations | Truth tables or bitwise reference cases under the accepted semantics, including NOT and NOR. |
| Graphing | Known curves, selected ranges, scientific expressions, and discontinuities without false connecting lines. |
| Four-mode selector | All four modes, scientific controls in graphing mode, mutual exclusion of scientific/programmer controls, and accepted state handling. |

For each selected release, check the integrated source, release highlights, version/tag, package contents, and published GitHub release against the verified delivered scope. Record any environment blockers or incomplete checks. Do not report a release as published from a local tag or prepared release draft alone.

## Recording results

Record the SDD Manager version, agent/model, environment, enabled skills or plugins, repository starting state, selected steering exercises, deviations from the proposed sequence, and material human interventions.

Assess whether governing documents, completed task checkboxes, verification evidence, Git checkpoints, and enabled GitHub tracking agree. Separate calculator defects from workflow findings and environment failures. Report only checks and publication steps that actually ran.
