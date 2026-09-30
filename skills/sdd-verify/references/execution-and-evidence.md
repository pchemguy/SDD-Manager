# Execution and evidence

## Run against an identified state

- Record the branch and commit, relevant pending changes, command working directory, and material runtime or dependency conditions. Evidence from committed HEAD alone does not describe uncommitted code being tested.
- Use the project's declared commands and environment. Inspect potentially mutating build, test, or example commands before execution; use controlled fixtures or temporary output locations where practical. Do not install dependencies, change configuration, or operate external services beyond the authorized scope.
- Capture the actual command, exit status, relevant output, counts, warnings, skips, and artifacts where applicable. Inspect collection and execution: zero selected tests or unexpected deselection does not verify the intended behavior merely because the runner exits successfully.
- Run independent checks together only when they do not contend for shared resources or invalidate each other's results. Keep dependent checks in the required order.
- If execution is interrupted, report the incomplete run and available output. Do not describe a started command as a completed check.

## Assess coverage

| Condition state | Meaning |
| --- | --- |
| Verified | Observed evidence supports this condition for the stated implementation and environment. |
| Failed | Observed evidence contradicts the condition or its required check failed; identify the cause separately where known. |
| Blocked | Required evidence cannot be obtained because of a concrete prerequisite or execution problem. |
| Not checked | The condition was not assessed; give the reason and remaining work. |

Associate conditions with the checks that actually exercise them. Record partial coverage, expected failures, skipped scenarios, platform limitations, or manual inspection explicitly. A passing suite is evidence about its tested behavior, not proof that every requirement is covered. Do not invent coverage percentages or measurements.

Reuse prior evidence only when its implementation state, environment, and condition coverage are still applicable; identify it as prior evidence. After relevant code, test, configuration, dependency, or generated-output changes, repeat affected checks. Do not repeatedly run already sufficient checks without a changed state, failure, or unresolved gap that justifies it.

## Preserve and return evidence

Inspect resulting worktree changes to distinguish expected generated output from unexpected mutations. Preserve unrelated work and report unexplained changes; do not reset or clean the repository to conceal them. Temporary fixtures owned by this verification operation may be cleaned up when no longer needed.

Return evidence facts and locations to the active implementation workflow (**sdd-implement** or **sdd-steer**) and **sdd-report**, including unresolved failures and limitations. Preserve raw outputs or artifacts when the project requires them or they are needed to review a consequential claim. Use existing project evidence locations rather than introducing a mandatory journal or new report format.
