# Feature incorporation

Treat each accepted feature document as a scoped delta and each main document as the complete intended description of its own concern. Identify which main nodes the selected delta changes and which unchanged nodes it references. Project instructions and accepted decisions govern; observed code or an unchecked task does not settle a design or behavioral conflict.

## Select and incorporate

1. Confirm the selected main target or targets and the corresponding accepted feature source. A feature may have no overlay for some levels. Permit a single document, such as SPEC alone, when its change can be expressed coherently there. Record affected but unselected dependents; do not expand the edit scope silently.
2. For PROJECT, integrate changes to purpose, users, scope, outcomes, or constraints into the brief. For ARCHITECTURE and DECOMPOSITION, integrate accepted block and component boundaries, dependencies, interfaces, and relevant rationale into the owning root and focused children. Preserve the difference between architectural structure and final behavioral contracts.
3. For SPEC, integrate final supported and unsupported behavior, errors, invariants, and objective acceptance into the owning root and children. For PLAN, integrate delivery strategy, phase and milestone definitions, dependencies, and exit checks. For layout, integrate changed physical ownership only where the accepted change requires it. Keep each concern in its main owner rather than copying it across documents.
4. When transferring tasks from FEATURE-TASKS into TASKS, require both lists in the selected edit scope. Move each owning entry into the complete hierarchy once, retiring its independently checked source entry in the same change while preserving project-wide IDs, dependencies, verified status, and durable evidence. If FEATURE-TASKS is outside scope, defer the transfer and report the required scope extension; TASKS-only reconciliation of existing main entries may still proceed. Reconcile parent placement and exit conditions against the accepted PLAN. A feature parent checkbox does not establish completion of its whole-project parent. Task-list creation and review belong to **sdd-tasks**; executable range selection, implementation, and completion updates belong to **sdd-implement**.
5. Read every changed main root and child as a coherent description of the intended end state. Remove superseded claims and editing-history language. Keep genuine backward compatibility or transition requirements as present obligations. Check parent-child links, affected cross-document contracts, and task references within the selected scope.

When a selected target depends on a still-unaccepted decision in another concern, stop that target and report the specific decision and owner. Continue independent selected targets only where their meaning remains sound. In particular, do not incorporate a task list against an unreconciled conflicting PLAN or SPEC.

## Task-list reconciliation

When TASKS or FEATURE-TASKS is selected, reconcile the accepted changes in its owning list; this need not incorporate the feature list into TASKS.

For an accepted feature delta, compare the intended final SPEC, design, PLAN, and layout with existing work, TASKS, and any active feature documents and FEATURE-TASKS. Revise affected tasks and dependency edges, remove obsolete uncompleted work, add necessary corrective work, and identify previously checked items whose acceptance has changed. Keep unaffected completed work and stable IDs. Revise an active feature list within its scope; revise main TASKS when the accepted end state changes its complete hierarchy. Do not leave a chronological amendment section or a list of discarded approaches in the main TASKS; Git retains that history. Preserve evidence for an implemented capability that was later removed in Git, while the current checklist describes only work required for the accepted end state.

When changed acceptance makes a checked task or parent claim stale:

- Record **Completion reassessment pending** beneath the affected owning entry, or in its existing linked evidence location, only when that location is in the edit scope. Identify the stable task or parent ID, changed acceptance and authoritative source, prior evidence whose scope no longer suffices, and required reassessment.
- Preserve the checkbox and previous evidence. The pending note makes the checked claim disputed; it is not current completion evidence. **sdd-implement** owns acceptance reassessment and checkbox correction. Direct checkpoint amendments retain **sdd-steer** ownership.
- Keep the note with the owning entry during task transfer. Preserve prior evidence as historical, and flag affected checked parent claims without inferring whole-project completion from feature results.
- If the owning list or evidence location is outside scope, report the deferred reassessment and needed edit scope without adding a note there or changing its status. Do not invoke implementation or change hosted state from the finding.

If the feature is withdrawn, preserve Git history and resolve the disposition of completed work before removing its task list. Task execution and completion verification belong to **sdd-implement**; reconciliation preserves evidence and the durable pending-reassessment notes for its review.

## Scope and cleanup

Feature source documents can remain while other levels are integrated. For each incorporated source, remove it only when its accepted content is represented in the relevant main owner and no active work still depends on that file as the sole source. Update links from other active feature documents or FEATURE-TASKS only when those files are in the selected edit scope; otherwise retain the source if needed and report the link updates for later work. After transferring entries, FEATURE-TASKS may retain untransferred work or navigation to the main owning entries, but must not retain duplicate executable checkboxes. Keep FEATURE-TASKS until its remaining work and evidence are represented in TASKS; document-only integration never removes or edits it by implication.

Compare the selected main documents with active feature sources and affected neighbors after editing. Report any inconsistency outside the selected scope as a concrete follow-up; do not claim global integration or task completion from a narrower document edit. If hosted task projection is active, report the task identity and parentage changes for **sdd-forge** without changing hosted objects here. Do not delete historical evidence: Git retains earlier drafts, and task evidence must remain findable after task-list incorporation.
