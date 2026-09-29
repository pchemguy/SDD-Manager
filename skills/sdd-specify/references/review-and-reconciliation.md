# Review and reconciliation

For a review-only request, read the relevant SPEC root and children, accepted design, and any active change specification. Assess completeness, clarity, ownership, objective acceptance, and consistency without editing files. State concrete findings and their consequences; do not demand invented detail where the project intentionally delegates a decision.

For an authorized correction or normalization:

1. Identify the canonical SPEC owner for each changed behavior and all affected consumers. Confirm that a requested contract change is an accepted decision rather than a convenient description of current code.
2. Update the focused owning node. Adjust the root's system-wide guarantee, scope, and navigation only where affected. Update other SPEC nodes only when their contracts depend on the change.
3. For a settled feature delta, incorporate the final supported and unsupported behavior into the main SPEC. Remove superseded claims and reconcile acceptance conditions. Once no intended behavior depends on the temporary specification, remove it within the authorized document scope.
4. Check alignment with PROJECT, ARCHITECTURE, and DECOMPOSITION. Report needed revisions to their owners rather than silently redefining their architecture or the project brief. Identify impacts on PLAN, TASKS, any active FEATURE-TASKS, tests, and user documentation for their respective workflows.
5. Recheck parent-child routing, public contracts, errors, formats, compatibility, and end-to-end acceptance. Review the wording of every affected main SPEC node for residual references to earlier drafts or implementations. Report unresolved conflicts instead of choosing the easiest description.

## End-state language

Write the main SPEC and its children as direct descriptions of the complete intended system. Do not turn an incorporated change into an amendment or a story about prior versions. Replace transition wording such as “previously,” “formerly,” “now supports,” “newly added,” “was changed to,” “no longer,” and “this revision replaces” when it describes the document's editing history. For example, write “Encrypted archives are rejected” instead of “Encrypted archives are no longer supported.” Apply the same check to headings, rationale, acceptance conditions, and linked children.

An active feature specification may describe the baseline and proposed delta. A genuine compatibility contract may name earlier released versions or formats, but express their currently required treatment as a present guarantee. Historical steps belong in Git history, not in the main SPEC. This is an editorial check on meaning, not a ban on individual words that have a legitimate role in a requirement.

A review or SPEC correction alone does not authorize code changes or implementation of a newly specified capability.
