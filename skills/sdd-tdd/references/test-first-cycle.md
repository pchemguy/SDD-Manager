# Test-first cycle

Use the cycle for one observable behavior at a time. Read [writing good tests](writing-good-tests.md) before writing or changing a test. Run the project's actual commands; commands in examples are not evidence from the current task.

## RED

1. State the contract and the defect the test should catch. Write a focused test with an independently established expected result.
2. Execute the test before the relevant production change. Inspect the failure and confirm it demonstrates the missing or incorrect behavior.
3. Distinguish a behavioral failure from collection, import, syntax, dependency, or environment failures. Fix test setup or report the blocker before treating the run as RED. An expected exception may be the behavior under test; it is not automatically a setup error.

If the test passes immediately, determine whether it covers existing behavior, misses the intended defect, or exposes a mistaken requirement. Do not alter valid behavior merely to manufacture a failure. Record the actual outcome and resolve the test or contract before proceeding.

## GREEN

Hand the failing scenario and observed evidence to **sdd-implement** for the smallest production change that satisfies the accepted contract. Run the focused test again and the relevant regression checks. If the test still fails, return the failure for repair. Do not weaken a valid assertion to make the implementation pass; correct an erroneous expectation only against independent contract evidence.

Report every observed failure and significant warning. Distinguish new failures, established baseline failures, and environment problems where evidence permits; an unexplained failure remains unresolved. A focused green run does not establish that the whole suite passes.

## REFACTOR and repeat

Improve test clarity and remove test duplication while preserving coverage. Hand production refactoring to **sdd-implement** within the accepted task scope. Re-run affected checks after changes; refactoring does not introduce new behavior. Repeat the cycle for remaining scenarios.

Return command and outcome evidence to **sdd-verify** and **sdd-implement** for the required boundary verification, including the declared full suite when project policy or the selected boundary requires it. Do not mark task completion from this development cycle alone.

## Interrupted or non-test-first work

Use existing code and Git evidence without discarding pending work. Characterization tests can establish current behavior; they do not prove a past RED run. When useful and safe, demonstrate regression-test sensitivity against a prior implementation in an isolated worktree or controlled fixture. Label that demonstration accurately and keep the working implementation intact. Report missing evidence, blockers, or an authorized exception rather than claiming strict TDD occurred.
