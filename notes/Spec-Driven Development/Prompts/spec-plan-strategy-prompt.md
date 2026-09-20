## SPEC and PLAN Strategy

Use the following strategy when creating, restructuring, or maintaining the project's development specification and implementation plan.

### 1. Governing model

Maintain SPEC and PLAN as authoritative, recursively decomposable descriptions of the complete current project.

- The SPEC defines the system that shall exist: scope, behavior, architecture, component responsibilities, contracts, invariants, data formats, interfaces, and acceptance conditions.
- The PLAN defines how to implement that complete system from scratch in bounded, dependency-ordered, testable increments.
- Neither document set is a history of migrations or accumulated feature additions. A reader shall not need old proposals, feature specifications, or Git history to reconstruct the current system.
- Decompose documents only along meaningful architectural boundaries, contracts, or implementation slices. Do not fragment prose into arbitrary topic files or numbered requirement buckets such as `STREAM-001` and `STREAM-002`.

The normal root structure is:

```text
docs/dev/
├── SPEC.md
├── spec/
├── PLAN.md
├── plan/
└── layout.md
```

`SPEC.md` and `PLAN.md` are compact entry points, not merely tables of contents. Each must orient a human or coding agent without requiring an initial traversal of the entire tree.

### 2. Recursive architectural decomposition

Treat every document as a node in a hierarchy. A parent node shall define:

- its own scope and level of abstraction;
- the child nodes into which that scope is decomposed;
- the responsibility and explicit boundaries of each child;
- the contracts, dependencies, and shared invariants connecting the children;
- where each normative subject has its canonical definition.

A child shall add detail within the scope assigned by its parent. It shall not silently broaden its responsibility or duplicate requirements owned elsewhere. Other nodes should link to a canonical definition rather than restate it normatively.

Keep a node as one file while it remains focused and navigable. When it becomes too broad, decompose it by responsibility or contract and turn the original file into the overview for its children. Refactor this tree whenever the project architecture changes; document boundaries are not permanent if the corresponding system boundaries are no longer sound.

Use descriptive, stable names that communicate scope, such as:

```text
spec/game-model.md
spec/rules-engine.md
spec/frontends/cli.md
spec/frontends/gui.md
```

Do not use ordinal or opaque names such as `spec-3.md`, `phase-2.md`, or requirement-code files.

### 3. SPEC tree

`SPEC.md` shall provide, at the appropriate high level:

- purpose, complete scope, and explicit non-goals;
- system context and principal use cases;
- architectural decomposition;
- system-wide terminology and invariants;
- top-level component contracts and dependency constraints;
- a scope map of the subspecifications;
- system-level acceptance conditions.

Place detailed behavior in the lowest appropriate subspecification. Higher-level specifications define broader guarantees and relationships; they shall not repeat all lower-level details.

Specification boundaries should normally correspond to cohesive components, public interfaces, external protocols, persistent formats, or other independently understandable contracts. A large subspecification may have its own directory and child overview:

```text
spec/
├── game-model.md
├── rules-engine.md
├── configuration.md
├── frontends.md
└── frontends/
    ├── cli.md
    └── gui.md
```

The exact tree must follow the actual project architecture; do not impose this example mechanically.

### 4. PLAN tree

`PLAN.md` shall define:

- the implementation strategy for the complete specified system;
- the named implementation phases and their order;
- dependencies between phases and major components;
- the relationship between plan nodes and specification nodes;
- project-wide verification and completion requirements.

Phases are named functionality slices, not numbered stages. Their order is declared in `PLAN.md`, so phases can be inserted, removed, or reordered without renaming files or repairing ordinal references.

A phase or other subplan that becomes too broad may be decomposed into named child subplans. Its parent remains responsible for the capability delivered by the whole subtree, the scopes of its children, and their implementation order. Thus, every plan node defines the order within its own scope, while `PLAN.md` defines the order of the top-level phases.

The first phase shall produce the smallest useful testable MVP or prototype with as little code as reasonably possible. Each later phase shall deliver the smallest meaningful, independently verifiable functionality increment.

Each phase subplan shall state:

- the capability produced when the phase is complete;
- the SPEC nodes and contracts it implements;
- its prerequisites and affected components;
- its ordered implementation tasks;
- tests and other verification required during and after the phase;
- objective completion conditions.

An implementation task should normally modify one production code file plus its associated tests and directly affected documentation. Do not force a one-file boundary when an atomic, internally consistent change inherently spans a contract declaration and implementation or similarly inseparable artifacts.

After every task:

1. Run the unit tests associated with the changed files or component.
2. Fix all failures until those tests pass.
3. Run relevant integration tests and unit tests for components dependent on the change.
4. Fix all regressions before beginning the next task.

Require broader integration or full-suite verification at appropriate phase boundaries and at final completion. The PLAN is an executable implementation blueprint, not a diary: preserve the tasks needed to construct the current system, but remove abandoned approaches and obsolete migration history.

### 5. LAYOUT tree and shared development documents

Some project information is canonical input to both SPEC and PLAN and should live beside their roots rather than be owned artificially by either tree. The principal shared structure is the LAYOUT tree, rooted at `docs/dev/layout.md`.

The three trees answer different questions:

```text
SPEC      What components, behavior, and contracts constitute the final system?
PLAN      In what testable functionality slices and dependency order is it built?
LAYOUT    Where do implementation, tests, documentation, and artifacts physically live?
```

Keep these views aligned, but do not force them into identical trees. SPEC normally decomposes behavioral and architectural responsibility. PLAN decomposes construction order. LAYOUT decomposes physical ownership. A source file may participate in several PLAN phases, and one physical package may implement several related SPEC contracts; the LAYOUT tree should describe that final ownership without shadowing either tree or duplicating its normative content.

#### 5.1 LAYOUT authority and root responsibilities

`docs/dev/layout.md` is the canonical description of physical project organization when that organization is substantial enough to require explicit design. It should define, at the appropriate level:

- the repository's major directories and important root-level files;
- the responsibility and ownership boundary of each important location;
- the correspondence among SPEC areas, implementation locations, tests, and PLAN phases;
- allowed dependency directions, import boundaries, and other constraints enforced through physical organization;
- the treatment of generated, build, installation, and runtime artifacts;
- global physical invariants and rules for evolving the layout.

SPEC nodes may identify the implementation locations that realize their contracts, and PLAN tasks may identify files to create or modify, but neither should duplicate the detailed physical-ownership definition from the LAYOUT tree.

Keep `layout.md` as a compact architectural entry point rather than a large file inventory or a link-only table of contents. Whether or not it has children, it should provide:

1. Purpose and authority.
2. A concise repository overview or tree.
3. The LAYOUT decomposition and the precise scope of each child.
4. Cross-tree relationships and routing information.
5. Global physical invariants.
6. Change and refactoring rules for the complete LAYOUT tree.

#### 5.2 When and how to decompose LAYOUT

`layout.md` may remain a single file while it is focused, navigable, and economical for an agent to load. Split it when distinct physical ownership domains have substantial independent detail or when ordinary work repeatedly requires loading large amounts of unrelated layout material.

Decompose by physical ownership domain, not by current heading size alone. A common structure for a repository organized around documentation, production source, and tests is:

```text
docs/dev/
├── SPEC.md
├── spec/
├── PLAN.md
├── plan/
├── layout.md
└── layout/
    ├── repository.md
    ├── docs.md
    ├── src.md
    ├── tests.md
    └── packaging-runtime.md
```

This structure is illustrative. Use the project's actual physical domains and directory names; for example, use `app.md`, `packages.md`, or `services.md` instead of `src.md` when those names better match the repository.

Typical ownership is:

| LAYOUT node | Canonical responsibility |
|---|---|
| `layout.md` | Authority, top-level physical map, child scope map, cross-tree relationships, global invariants, and change rules |
| `layout/repository.md` | Repository-root files and genuinely repository-wide physical conventions |
| `layout/docs.md` | Documentation directories, SPEC/PLAN/LAYOUT organization, and documentation ownership relationships |
| `layout/src.md` | Production implementation tree, module and package ownership, and dependency or import rules |
| `layout/tests.md` | Test directories, helpers, fixtures, unit/integration organization, and implementation-to-test mapping |
| `layout/packaging-runtime.md` | Generated and runtime artifacts, build outputs, distribution contents, and installed behavior |

Keep documentation, production source, and tests in separate children when each has meaningful independent structure. Combining them into a generic repository child weakens ownership boundaries and forces agents to load unrelated context. `repository.md` should remain limited to root-level files and repository-wide conventions; it must not become a catch-all for everything outside the production tree.

Do not create a separate child for every small section. Closely related subjects should remain together when they describe one physical boundary. For example, packaging, installed behavior, generated files, and runtime artifacts may form one cohesive source-to-build-to-runtime domain. If that node later becomes too broad, decompose it recursively:

```text
layout/
├── packaging-runtime.md
└── packaging-runtime/
    ├── packaging.md
    └── artifacts.md
```

The parent remains the overview and defines the scopes and relationships of its children. Apply the same recursive rule to any LAYOUT node.

A good decomposition normally lets an agent load `layout.md` plus one focused child for an ordinary task. Avoid both a monolith that obscures relevant ownership and a file salad that requires loading several tiny children to understand one routine change.

#### 5.3 Cross-tree mapping

`layout.md` should contain a concise routing map across the development-document trees. Its purpose is to tell a human or agent which focused documents and physical areas govern a change, not to restate their contents.

A generic mapping may use this form:

| Architectural area | SPEC owner | Physical implementation owner | Test owner | Principal PLAN phase or phases |
|---|---|---|---|---|
| `<area>` | `spec/<node>.md` | source module or package | unit and integration locations | `plan/<phase>.md` |

Keep this table at the level needed for navigation. Behavioral guarantees remain canonical in SPEC, implementation order remains canonical in PLAN, and detailed file ownership remains canonical in LAYOUT.

#### 5.4 LAYOUT refactoring rules

When splitting or reorganizing an existing LAYOUT document:

1. Inventory all existing normative content and assign every item one canonical destination.
2. Move ownership constraints, module descriptions, dependency rules, tables, artifact policies, packaging rules, and change rules without dropping or weakening them.
3. Rewrite only the parent/child boundary prose, navigation, cross-references, and statements made obsolete by the new structure.
4. Remove normative duplication after confirming that the canonical destination contains the complete requirement.
5. Update links from SPEC, PLAN, project instructions, and other shared documents.
6. Verify that `layout.md` still provides enough orientation to select the relevant child without reading the entire tree.
7. Verify that common implementation tasks require only the root and a small focused subset of children.

Do not split LAYOUT according to PLAN phases: phases describe construction order, while LAYOUT describes final ownership. Do not mechanically mirror the SPEC tree either: SPEC contracts and physical files frequently have many-to-many relationships. Refactor LAYOUT boundaries when physical ownership changes, not merely because another tree was reorganized.

#### 5.5 Other shared development documents

Other information genuinely shared by SPEC and PLAN may live beside their roots, such as `PROJECT.md`, a project-wide glossary, or a focused conventions document. Introduce such a document only when it has a clear canonical responsibility that does not belong naturally to SPEC, PLAN, or LAYOUT.

Shared documents follow the same rules:

- define their authority and scope explicitly;
- keep each normative fact in one canonical location;
- reference rather than duplicate requirements;
- decompose recursively when a coherent node becomes too broad;
- keep the root sufficient for routing to relevant children;
- refactor boundaries when the underlying project responsibilities change.

Do not create miscellaneous shared files as overflow containers. A shared document must improve ownership clarity and context locality rather than merely reduce the size of another file.

### 6. Dependencies and incremental revisions

Model inter-component dependencies as a directed acyclic graph. Use the convention `A → B` to mean that **B depends on A**.

- Every maximal dependency path begins at a component with no dependencies and ends at a component with no dependents.
- No component may occur more than once on a dependency path.
- Reconverging paths and diamond-shaped dependencies are allowed; directed cycles, whether direct or transitive, are prohibited.
- If two proposed components require mutual dependency, combine them into one cohesive component or extract a lower-level contract on which both can depend.

This rule allows implementation and architectural revisions to proceed in dependency order, beginning with affected components whose dependencies are unaffected or already revised.

When changing an established contract, acyclicity alone does not keep every intermediate state valid. Use an expand–migrate–contract sequence where necessary:

1. Add the new contract while retaining temporary compatibility with the old contract.
2. Migrate dependent components in dependency order through bounded, testable tasks.
3. Remove the obsolete contract only after no dependent uses it.

Every intermediate task shall leave the repository internally consistent and testable.

### 7. Incremental project evolution

For a new feature or architectural revision:

1. Identify the lowest SPEC nodes that canonically own the affected behavior and contracts.
2. Update those nodes with the final intended system behavior.
3. Update parent SPEC nodes only where their scope maps, contracts, invariants, or architectural descriptions change.
4. Update the corresponding PLAN phases and tasks, including dependency order and verification.
5. Update `layout.md` or its children if physical ownership or file organization changes.
6. Refactor document nodes when existing boundaries no longer match the architecture.
7. Remove superseded requirements, tasks, and temporary migration material.

Changes should normally become progressively smaller toward the roots: detailed changes occur in focused leaves, while parent and root documents receive only the broader architectural or navigational changes required.

Temporary feature specifications and plans may be used as working documents during design. A feature is not fully integrated until their settled content has been incorporated into the authoritative SPEC, PLAN, and shared-document trees and the temporary documents are no longer required to understand the current project.

### 8. Illustrative Tetris model

Use this only as an example of the method, not as a prescribed architecture.

Suppose a Tetris project contains geometry primitives, a game model, a rules engine, configuration, a public application API, and CLI and GUI frontends. A plausible dependency structure is:

```text
geometry → game model → rules engine → application API → CLI
                                             └──────────→ GUI
configuration → rules engine
configuration → CLI
configuration → GUI
```

A corresponding documentation structure might be:

```text
docs/dev/
├── SPEC.md
├── spec/
│   ├── geometry.md
│   ├── game-model.md
│   ├── rules-engine.md
│   ├── configuration.md
│   ├── application-api.md
│   ├── frontends.md
│   └── frontends/
│       ├── cli.md
│       └── gui.md
├── PLAN.md
├── plan/
│   ├── headless-gameplay-mvp.md
│   ├── playable-cli.md
│   ├── configurable-gameplay.md
│   └── playable-gui.md
└── layout.md
```

Here, SPEC decomposition follows final architectural responsibilities, while PLAN decomposition follows deliverable functionality slices. They are aligned but intentionally not identical.

For example, `headless-gameplay-mvp.md` might order these tasks:

1. Implement immutable points and rotations in `geometry.py`; add and run `test_geometry.py`.
2. Implement board and piece state in `game_model.py`; run its unit tests plus geometry tests.
3. Implement legal movement, locking, and line clearing in `rules_engine.py`; run engine tests plus all dependent model tests.
4. Add a minimal headless application API; run API integration tests and the complete headless test suite.

Later, `playable-cli.md` can add a thin CLI using the stable application API without creating a CLI-to-GUI dependency. If GUI and CLI begin calling each other or duplicating game rules, the architecture and corresponding SPEC/PLAN nodes must be corrected rather than documenting the coupling as if it were acceptable.

### 9. Required working behavior

Before changing code, consult the root SPEC, root PLAN, relevant child nodes, and any shared documents governing the affected files. If the current documentation lacks a sound boundary or contract, resolve that design deficiency before expanding the implementation.

Keep all three views synchronized:

- SPEC: what the complete current system shall be;
- PLAN: how that system is built and verified from scratch;
- shared documents such as `layout.md`: canonical structures used by both.

Prefer the smallest focused documentation changes that fully and coherently describe the new current state. Never turn the documentation tree into a file salad of disconnected requirements, chronological patches, or mechanically numbered phases.

Implementation work shall follow the companion Implementation and Recovery Protocol. Each PLAN task is executed as a recoverable transaction, verified before the next task begins, and committed independently when operating in a Git repository. The companion protocol governs campaign selection, implementation logging, baseline preservation, interruption recovery, verification, commits, and cleanup.
