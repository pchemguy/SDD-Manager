# Layout governance

`docs/dev/layout.md` is the canonical map of **physical ownership**. It answers where source, tests, fixtures, development documents, assets, generated outputs, build inputs, packaging, and runtime artifacts belong. Architecture and decomposition own logical responsibilities; SPEC owns behavioral requirements; PLAN owns delivery strategy; TASKS owns executable work. Layout routes to those owners where useful without copying their content.

## Root document

Keep `layout.md` useful on its own. Include only the material justified by the project:

- a concise repository map and important root-level files;
- location and owner of major physical domains;
- location of authoritative development documents and their focused children;
- source-to-test and fixture ownership, plus how to find relevant checks;
- placement and visibility rules that enforce component and dependency boundaries;
- ownership of generated content, packaging inputs and outputs, ignored disposable files, and runtime files;
- a short routing map to logical owners when the relationship is not obvious;
- rules for moves, splits, merges, and keeping affected links and checks aligned.

Prefer a navigable root over a complete file inventory. Do not add headings, domains, or tables that have no concrete ownership information.

## Focused children

When domains have substantial independent detail, add focused children under `docs/dev/layout/`, for example `source.md`, `tests.md`, `documentation.md`, or `packaging-runtime.md`. Split by **physical ownership domain**, rather than delivery phase or one child per logical component. A parent defines each child's exact scope, shared constraints, and relevant relationships; each child owns its detail. Do not make a generic `repository.md` a repository-wide overflow file.

Use stable semantic filenames. When moving content, move its canonical rule, update routes, and remove obsolete claims. For simple projects, one `layout.md` is sufficient.

## Cross-document checks

- Can a contributor locate the owner of a component, test, fixture, or generated file without guessing?
- Does placement reflect stated dependency direction and package visibility?
- Are physical moves reflected in affected layout paths, tests, build inputs, and navigation without changing unrelated behavior requirements?
- Can ordinary work load the root and only the few relevant children?

An optional component-to-check registry may provide detailed executable routing when paths alone are insufficient. Layout identifies physical test ownership; the registry identifies current verification targets. Neither is evidence that a test passed.
