# Task derivation

Derive `docs/dev/TASKS.md` from the accepted design, SPEC, PLAN, and layout. Preserve PLAN's phase and milestone boundaries and meaningful exit gates. The task hierarchy must cover the intended work and allow a human to see both progress and the next stopping point. A feature's scoped design, SPEC, or PLAN may supply a proposed delta; make the affected tasks and prerequisites identifiable without copying unchanged project requirements into TASKS.

## Form tasks

1. Trace each milestone outcome to the relevant component boundaries, behavioral contracts, physical owners, integration points, and exit checks. Identify prerequisites and work that must be coordinated across components.
2. Split work into coherent increments that can be implemented, reviewed, and verified without leaving dependent behavior incoherent. Prefer one code module or a few closely related modules, plus their tests and documentation, where feasible. An interface change may need a compatibility step and subsequent consumer changes. Avoid tasks that are merely a single keystroke or an entire subsystem.
3. Give each task a stable ID, outcome, expected edit scope, prerequisite task IDs where needed, and concrete verification or acceptance evidence. Point to owning SPEC and design sections when the connection would otherwise be unclear. The task can identify likely paths from layout but must not make an exhaustive speculative file list.
4. Put meaningful integration, failure-path, documentation, packaging, and milestone-exit work into the breakdown. Do not make every SPEC sentence a separate task or repeat all acceptance wording. Surface an unresolved choice as a blocker with its owning document rather than settling it in a task.
5. Check the critical path and phase/milestone totals. Verify that every intended milestone has executable coverage and that its exit evidence can be gathered. TASKS does not prescribe a test implementation for every contract; later verification and implementation workflows choose and run checks.

## Checklist form

Use a `##` Markdown heading for each phase and a checkbox item directly beneath it for the same phase. The heading provides navigation; the checkbox records completion. Use one checkbox item for each phase, milestone, and task. Indent each child **exactly four spaces** beyond its parent; do not use tabs or replace milestone or phase check items with headings. Keep task details within or immediately beneath their own item, indented to remain attached to it. For example:

```markdown
## Phase 1 — Streaming sources

- [ ] Phase 1 — Streaming sources
    - [ ] Milestone 1.1 — Plain stream foundation
        - [ ] T-001 — Define stream ownership and close behavior
            Scope: stream module and focused tests. Depends on: none.
            Evidence: close and early-exit behavior verified against SPEC.
        - [ ] T-002 — Integrate the public stream API
            Scope: public API and integration checks. Depends on: T-001.
            Evidence: package-level usage and error behavior verified.
```

Stable IDs may follow the project's existing convention; otherwise use monotonic task IDs such as `T-001`. Do not reuse or renumber an ID because a task is inserted or removed. Keep phase and milestone IDs and names in TASKS consistent with PLAN so a request can unambiguously target them; TASKS supplies the current names for hosted projection. A task checkbox can be marked only under [progress and reconciliation](progress-and-reconciliation.md); the initial breakdown is unchecked unless verified prior completion is established.
