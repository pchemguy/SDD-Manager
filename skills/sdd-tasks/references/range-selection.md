# Range selection

Resolve a human request against the current TASKS hierarchy before implementation starts. Read the relevant PLAN exits, dependency notes, and the current Git and worktree evidence from orientation. A checked item alone does not establish completion; use [progress and reconciliation](progress-and-reconciliation.md) if status is disputed or stale. Do not start new work while an interrupted or ambiguous task needs the recovery workflow.

1. Identify the requested unit: one named task, the next eligible task, the next N eligible tasks, a named milestone, the next milestone, a named phase, or the next phase. Count **tasks** only for “N tasks”; count phase or milestone units only when the request names that unit. Resolve “next” from verified completion and dependency order, not from the first unchecked box alone.
2. Expand the request to precise task IDs and the enclosing milestone or phase. Check prerequisites and identify any blocked or out-of-range dependency. Do not silently expand the authorized range; report the dependency and obtain its resolution through the appropriate workflow.
3. State the selected IDs, prerequisite evidence, expected end condition, and the stopping boundary. An implementation agent must stop at that boundary for human review, even if subsequent tasks are ready. If no eligible work remains, report why without inventing work.

Selection is read-only. It does not mark tasks done, run checks, create a commit, or authorize the implementation workflow. A user may explicitly select a different valid order; document the dependency consequences instead of silently replacing their range.
