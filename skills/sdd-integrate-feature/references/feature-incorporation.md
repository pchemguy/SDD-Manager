# Feature incorporation

Treat each accepted feature document as a scoped delta and each main document as the complete intended description of its own concern. Identify which main nodes the selected delta changes and which unchanged nodes it references. Project instructions and accepted decisions govern; observed code or an unchecked task does not settle a design or behavioral conflict.

## Select and incorporate

1. Confirm the selected main target or targets and the corresponding accepted feature source. A feature may have no overlay for some levels. Permit a single document, such as SPEC alone, when its change can be expressed coherently there. Record affected but unselected dependents; do not expand the edit scope silently.
2. For PROJECT, integrate changes to purpose, users, scope, outcomes, or constraints into the brief. For ARCHITECTURE and DECOMPOSITION, integrate accepted block and component boundaries, dependencies, interfaces, and relevant rationale into the owning root and focused children. Preserve the difference between architectural structure and final behavioral contracts.
3. For SPEC, integrate final supported and unsupported behavior, errors, invariants, and objective acceptance into the owning root and children. For PLAN, integrate delivery strategy, phase and milestone definitions, dependencies, and exit checks. For layout, integrate changed physical ownership only where the accepted change requires it. Keep each concern in its main owner rather than copying it across documents.
4. If TASKS is selected, integrate FEATURE-TASKS tasks into the complete hierarchy once each, preserving project-wide IDs, dependencies, verified status, and durable evidence. Reconcile parent placement and exit conditions against the accepted PLAN. A feature parent checkbox does not establish completion of its whole-project parent. Task authoring, selection, and progress updates during implementation remain with **sdd-tasks**.
5. Read every changed main root and child as a coherent description of the intended end state. Remove superseded claims and editing-history language. Keep genuine backward compatibility or transition requirements as present obligations. Check parent-child links, affected cross-document contracts, and task references within the selected scope.

When a selected target depends on a still-unaccepted decision in another concern, stop that target and report the specific decision and owner. Continue independent selected targets only where their meaning remains sound. In particular, do not incorporate a task list against an unreconciled conflicting PLAN or SPEC.

## Scope and cleanup

Feature source documents can remain while other levels are integrated. For each incorporated source, remove it only when its accepted content is represented in the relevant main owner and no active work still depends on that file as the sole source. Update links from other active feature documents or FEATURE-TASKS only when those files are in the selected edit scope; otherwise retain the source if needed and report the link updates for later work. Keep FEATURE-TASKS until its remaining work and evidence are represented in TASKS; document-only integration never removes or edits it by implication.

Compare the selected main documents with active feature sources and affected neighbors after editing. Report any inconsistency outside the selected scope as a concrete follow-up; do not claim global integration or task completion from a narrower document edit. If hosted task projection is active, report the task identity and parentage changes for **sdd-forge** without changing hosted objects here. Do not delete historical evidence: Git retains earlier drafts, and task evidence must remain findable after task-list incorporation.
