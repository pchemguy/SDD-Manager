# Review and reconciliation

For read-only review, inspect the relevant PLAN root and children, layout, accepted design and SPEC, active feature plan if any, and the current repository tree where placement matters. Check that phase and milestone exits are objective, dependencies and integration points are feasible, every significant contract has a delivery route, and physical ownership supports the logical boundaries. Report concrete gaps and conflicting authorities without editing.

For an authorized correction or settled change:

1. Identify whether strategy belongs in PLAN, physical ownership in layout, behavior in SPEC, or executable units and status in TASKS. Correct the owning node and any dependent parent or child without copying the same decision across documents.
2. Incorporate the final accepted delivery strategy from an active FEATURE-PLAN into main PLAN and its affected children. Remove superseded claims and reconcile phase and milestone exits. Remove the temporary feature plan within the authorized scope once it is no longer needed to express an intended delta.
3. Revise layout where physical ownership changes. Check links and component-to-path routing in both directions, including tests, documentation, and cross-component integration.
4. Check alignment with PROJECT, ARCHITECTURE, DECOMPOSITION, and SPEC. Report any decisions their owners need to revise. Identify impacts on TASKS and any active FEATURE-TASKS for their workflow; do not silently create, reorder, or check off tasks.
5. Read the affected main PLAN and layout nodes as standalone descriptions of intended strategy and placement. Remove wording that narrates earlier drafts or implementations, such as “formerly” or “now moved,” when it describes editing history. A genuine compatibility or transition requirement can name an earlier released state, but express the currently required work or placement directly. Keep progress evidence in TASKS and Git.

A review or plan correction does not authorize code changes, task execution, or progression into another workflow.
