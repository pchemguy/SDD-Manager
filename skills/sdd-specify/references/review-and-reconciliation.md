# Review and reconciliation

For a review-only request, read the relevant SPEC root and children, accepted design, and any active change specification. Assess completeness, clarity, ownership, objective acceptance, and consistency without editing files. State concrete findings and their consequences; do not demand invented detail where the project intentionally delegates a decision.

For an authorized correction or normalization:

1. Identify the canonical SPEC owner for each changed behavior and all affected consumers. Confirm that a requested contract change is an accepted decision rather than a convenient description of current code.
2. Update the focused owning node. Adjust the root's system-wide guarantee, scope, and navigation only where affected. Update other SPEC nodes only when their contracts depend on the change.
3. For a settled feature delta, incorporate the final supported and unsupported behavior into the main SPEC. Remove superseded claims and reconcile acceptance conditions. Once no intended behavior depends on the temporary specification, remove it within the authorized document scope.
4. Check alignment with PROJECT, ARCHITECTURE, and DECOMPOSITION. Report needed revisions to their owners rather than silently redefining their architecture or the project brief. Identify impacts on PLAN, TASKS, tests, and user documentation for their respective workflows.
5. Recheck parent-child routing, public contracts, errors, formats, compatibility, and end-to-end acceptance. Report unresolved conflicts instead of choosing the easiest description.

Keep the main SPEC a direct description of the complete intended system. Historical steps belong in Git history or explicitly required compatibility notes, not appended amendment sections. A review or SPEC correction alone does not authorize code changes or implementation of a newly specified capability.
