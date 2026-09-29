# Phase, milestone, and task hierarchy

Use one Phase → Milestone → Task hierarchy. Each task has exactly one parent milestone, and each milestone has exactly one parent phase. `docs/dev/TASKS.md` holds the current IDs and names for all three levels; the phase heading and checkbox must agree. PLAN defines strategic outcomes and exit conditions, and TASKS carries the corresponding names into the executable hierarchy. Do not derive host-facing names from a stale PLAN title, a GitHub object, or an inferred filename when TASKS is present.

Keep IDs stable when inserting work or revising names. A host projection uses the TASKS ID to recognize an existing object and reconciles its displayed name when the TASKS name changes. Resolve duplicate IDs, mismatched phase headings and checkboxes, or ambiguous parentage before publishing. Task completion remains evidence-backed in TASKS; a host object's state is not completion authority.

## Hosted projection

When the selected backend supports issues, as GitHub does, create an associated issue for every TASKS task. Represent each phase with a phase label and create a host milestone for each SDD milestone when supported; use a milestone label when native milestones are unavailable. Assign each task issue its phase label and its parent milestone or milestone label when creating it. After the task is implemented, verified, committed, and reconciled in TASKS, close its issue as completed.

The active backend owns object creation, lookup, and reconciliation. It may define equivalent host objects while preserving the phase → milestone → task relationships and issue lifecycle.

For the GitHub backend, use these names from TASKS:

| Host object | Title or name |
| --- | --- |
| Phase label | `sdd-phase-2-Archive-streams` |
| Milestone | `sdd-2.2-ZIP-support` |
| Task issue | `[T-012] Implement ZIP stream support` |

If a host has no native milestones, an equivalent milestone label may be named `sdd-milestone-2.2-ZIP-support`. Replace example IDs and words with the actual TASKS ID and name. For labels and milestone titles, trim the name and replace whitespace with hyphens while preserving meaningful case and acronyms; normalize other host-incompatible characters deterministically. The stable ID distinguishes objects even when their names change. Give labels brief descriptions of their phase or milestone scope; use the backend's available metadata for milestone outcomes and exit conditions.
