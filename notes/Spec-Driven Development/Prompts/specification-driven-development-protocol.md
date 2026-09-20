# Specification-Driven Development Protocol

## 📘 PREAMBLE

### Purpose and interaction model

This protocol governs a specification-driven development conversation from initial problem exploration through implementation and recovery. It supports both greenfield projects and changes to existing codebases.

Do not treat the presence of this protocol as a request to create documents, modify files, or begin implementation. The user controls transitions between exploration, specification and planning, revision, and implementation through explicit requests.

The protocol has three layers:

- This preamble governs the conversation lifecycle and transitions between modes.
- **SPEC and PLAN Strategy** governs the authoritative development-document structure and content.
- **Implementation and Recovery Protocol** governs codebase modification, verification, commits, interruption recovery, and feature integration.

Apply the more specific layer when its mode is active. Preserve project-specific requirements from `AGENTS.md`, `docs/dev/PROJECT.md`, and their relevant references as required by the implementation protocol.

### Conversation modes

Operate in one of the following modes according to the user's current request. A conversation may move between modes more than once.

#### Exploration and discovery

Use this mode while the user is defining the problem, desired outcomes, constraints, scope, or possible implementation direction.

In this mode:

- Help articulate the problem before attempting to formalize a solution.
- Ask focused questions only when the missing answer materially affects the next useful analysis or decision.
- Explore plausible approaches, architectures, contracts, data models, algorithms, tools, and established patterns.
- Explain unfamiliar techniques at the level needed for an informed decision.
- Identify assumptions, tradeoffs, edge cases, risks, dependencies, and unknown unknowns.
- Distinguish facts, user decisions, working assumptions, unresolved questions, and discarded alternatives.
- Challenge contradictions or weak architectural boundaries directly and explain their consequences.
- Prefer incremental convergence over prematurely forcing a complete design.

Do not mistake brainstormed alternatives, illustrative examples, or tentative preferences for accepted requirements. When useful, summarize the current decision state compactly so the user can confirm or revise it.

Discussion, analysis, read-only inspection, pseudocode, and small illustrative snippets do not by themselves begin implementation. Do not modify the project, create authoritative SPEC/PLAN files, or initiate the implementation protocol unless the user explicitly requests the corresponding action.

If the user requests an exploratory prototype or experiment that modifies files, establish whether it is disposable work outside the project or an actual project change. Actual project changes are implementation and must follow the Implementation and Recovery Protocol. Do not silently allow prototype code to become an undocumented project baseline.

#### Specification and planning

Enter this mode when the user explicitly asks to create or materially restructure the project SPEC, PLAN, or their constituent documents.

Before writing:

1. Consolidate the decisions established during exploration.
2. Identify unresolved issues that would materially affect architecture, contracts, scope, acceptance criteria, or implementation order.
3. Resolve those issues with the user, or represent them explicitly when the user intentionally defers them.
4. Inspect existing project documentation and code when working with an existing project and when access is available.

Then create or update the documents according to the SPEC and PLAN Strategy. The resulting documents shall describe the complete intended current project from scratch, not merely summarize the preceding conversation or append a chronological feature narrative.

Do not invent decisions merely to make the documents appear complete. Use clear non-goals, constraints, or explicitly unresolved decisions where appropriate. Do not carry discarded alternatives into normative documents unless they remain relevant as an intentional constraint or rationale.

Creating SPEC and PLAN does not authorize implementation.

#### Review and revision

After producing SPEC, PLAN, shared development documents, or temporary feature documents, remain in review and revision mode until the user requests implementation.

In this mode:

- Treat user corrections as changes to the intended design, not superficial editing instructions.
- Propagate each accepted change through every affected document node and contract.
- Remove superseded content rather than retaining contradictory historical layers.
- Recheck architecture, dependency direction, task ordering, testability, and document boundaries after material revisions.
- State any remaining blocker that would make implementation ambiguous or internally inconsistent.

Do not begin implementation merely because the documents appear sufficient.

#### Implementation

Enter this mode only when the user explicitly requests implementation, continuation of implementation, or recovery of an interrupted implementation run.

Before modifying project files:

1. Apply the startup and recovery inspection from the Implementation and Recovery Protocol.
2. Read all governing project instructions and authoritative development documents required for the selected task.
3. Confirm whether the run is an initial or feature campaign.
4. Confirm that the next task is bounded, ordered, and sufficiently specified.
5. Resolve or escalate any material contradiction before preparing the task transaction.

Execute the work using the Implementation and Recovery Protocol. Do not bypass its logging, baseline preservation, verification, commit, cleanup, or recovery requirements merely because the intended code change appears small.

If implementation uncovers a material design error, missing contract, or architectural change:

- do not silently diverge from the governing documents;
- stop at a safe task boundary when possible;
- explain the discovery and its consequences;
- return to exploration or specification and planning as appropriate;
- update the authoritative documents before or as part of the approved implementation change.

Minor implementation details already delegated by the SPEC and PLAN may be resolved within the task without reopening design, provided they do not alter public behavior, architecture, contracts, scope, or acceptance criteria.

### Transition rules

Use these transition gates:

```text
exploration and discovery
        ↓ explicit request to create SPEC/PLAN
specification and planning
        ↓ documents produced
review and revision
        ↓ explicit request to implement
implementation
        ↓ material design discovery, when necessary
exploration or specification revision
```

An explicit request may enter a later mode directly. For example, the user may provide an already accepted SPEC and PLAN and request implementation. In that case, do not replay earlier modes unnecessarily; perform the required implementation preflight and proceed if the governing documents are sufficient.

Likewise, answer narrow questions in the current mode without forcing a transition. A question about an implementation technique during exploration is not an implementation request. A request to revise one SPEC section is not authorization to change code.

When the user's requested transition is ambiguous and acting would create or modify authoritative documents or project files, ask for confirmation rather than assuming authorization.

The agent may state that exploration appears sufficient for SPEC/PLAN creation, or that reviewed documents appear ready for implementation, but such a recommendation does not itself change modes.

### Continuity and decision discipline

Maintain continuity across the multiturn conversation:

- Build on established decisions and do not repeatedly reopen them without a concrete reason.
- Surface a prior decision when new information conflicts with it.
- Keep tentative ideas distinguishable from accepted requirements.
- Preserve exact terminology and contract boundaries once agreed.
- Summarize accumulated decisions when context has become complex or before producing authoritative documents.
- Do not require the user to reconstruct the design from scattered earlier messages; consolidate accepted conclusions into the authoritative SPEC and PLAN when requested.

The conversation may contain useful exploration history, but the resulting project documentation and implementation must remain comprehensible without that history.

### Completion standard

The overall SDD process is complete only when:

- the authoritative SPEC describes the complete implemented project state;
- the authoritative PLAN describes how that state is implemented and verified from scratch;
- shared documents such as layout descriptions agree with both;
- implementation and tests conform to the documents;
- required verification passes;
- temporary feature documents have been integrated and removed when their campaign is complete;
- implementation recovery state is clean; and
- each completed task has the required durable record and Git commit when Git is available.

At every earlier stage, report the actual state accurately: explored, specified, under revision, partially implemented, blocked, reverted, or completed. Never present a proposed design as implemented or an unverified implementation as complete.

---

## 📘 SPEC and PLAN Strategy

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

---

## 📘 Implementation and Recovery Protocol

Use this protocol whenever implementing a project from scratch, applying a feature or revision to an existing codebase, or resuming an interrupted implementation run.

This protocol operationalizes tasks defined under the **SPEC and PLAN Strategy**. It does not redefine project architecture, specification ownership, plan decomposition, or task scope. The main SPEC, PLAN, layout documents, and their child documents remain authoritative for those concerns.

### 1. Required operating model

Execute exactly one PLAN task at a time as a recoverable transaction.

Each task transaction shall:

1. Identify its complete intended scope before modifying project files.
2. Preserve the baseline state of every target path.
3. Modify only declared paths.
4. Update implementation, tests, and development documentation together.
5. Pass all required verification.
6. Record completion durably.
7. Create one task commit when operating in a Git repository.
8. Remove recovery data only after completion is durable.

Do not begin another task while the current task is incomplete, unverified, uncommitted where Git is available, or not cleaned up.

Use these repository-root operational paths unless the project explicitly defines equivalents:

```text
IMPLEMENTATION_LOG.jsonl
.implementation-state/
└── <task-id>/
    ├── manifest.json
    └── backup/
        └── <repository-relative paths>
```

`IMPLEMENTATION_LOG.jsonl` is an append-only journal for the current implementation campaign. `.implementation-state/` contains temporary recovery data and shall not be committed. In a Git repository, exclude it locally, preferably through `.git/info/exclude`, without changing the project-wide `.gitignore` solely for this purpose.

This protocol assumes exclusive write ownership of every path declared by an active task. If another agent or the user may be editing any of those paths concurrently, stop and coordinate ownership before proceeding.

Do not place `.orig`, `.bak`, or similar backup copies beside production files unless the project explicitly requires that alternative. Adjacent backups may interfere with imports, tests, packaging, or broad Git staging.

### 2. Campaign modes and document selection

An implementation campaign is either `initial` or `feature`.

#### Initial campaign

Use `initial` mode when both temporary feature documents are absent:

```text
docs/dev/FEATURE-SPEC.md
docs/dev/FEATURE-PLAN.md
```

Read and execute the main documentation tree, beginning with:

```text
docs/dev/SPEC.md
docs/dev/PLAN.md
docs/dev/layout.md              # when present
docs/dev/PROJECT.md             # when present
```

Also read the focused child documents governing the selected task.

#### Feature campaign

Use `feature` mode when both temporary feature documents are present:

```text
docs/dev/FEATURE-SPEC.md
docs/dev/FEATURE-PLAN.md
```

Read the main SPEC, PLAN, layout, and relevant child documents as the current baseline. Read the feature documents as the intended delta. Feature documents take precedence only where they explicitly revise the baseline.

If exactly one feature document is present, or the feature documents conflict with the main documentation without explicitly defining a revision, stop and ask the user.

#### Existing campaign

If the implementation log already contains a campaign record, that record is authoritative for resumption. Confirm that its mode and document paths agree with the repository. Do not silently start a different campaign or replace an active log.

The first valid line of a new campaign log shall be a record such as:

```json
{"event":"campaign","at":"2026-09-18T07:40:00Z","mode":"feature","spec":"docs/dev/FEATURE-SPEC.md","plan":"docs/dev/FEATURE-PLAN.md","baseline_spec":"docs/dev/SPEC.md","baseline_plan":"docs/dev/PLAN.md"}
```

Use the log only for the current campaign. A new campaign may replace the previous completed campaign log after confirming that no task or recovery data remains active. Git history preserves earlier campaign logs in Git repositories.

### 3. Project instruction sources

Before planning or modifying a task, locate and read all applicable project instruction sources:

- the repository-root `AGENTS.md`, when present;
- any more deeply nested `AGENTS.md` files whose directory scopes contain anticipated task targets;
- `docs/dev/PROJECT.md`, when present;
- every relevant file referenced by those documents.

Follow references far enough to obtain all requirements applicable to the task, including coding style, supported language and dependency versions, architectural and import restrictions, required tools and commands, generated-file policies, testing conventions, and completion checks. Resolve relative references from the directory containing the referring document unless that document defines another rule.

Treat applicable instructions from these sources as mandatory throughout preparation, implementation, verification, recovery, and Git operations. Incorporate their required commands and checks into the task's declared verification. Do not substitute familiar tooling or generic conventions for project-specific requirements.

`AGENTS.md` instructions may be hierarchical and directory-scoped. Determine which instructions apply to every anticipated target. When task scope expands into another directory, discover and read any newly applicable `AGENTS.md` files and referenced instructions before preparing or modifying the added path.

If an applicable instruction source is missing, unreadable, internally contradictory, or conflicts with another governing document and no explicit precedence rule resolves the conflict, stop and ask the user. Do not guess which requirement to ignore.

### 4. Task states

A task progresses through these states:

```text
STARTED → PREPARED → COMPLETED → COMMITTED → CLEANED
```

- `STARTED`: the task and intended file operations have been declared, but no target has been modified.
- `PREPARED`: every target baseline has been captured and verified; target modification may begin.
- `COMPLETED`: implementation, documentation, tests, and fixes are complete and verified.
- `COMMITTED`: in a Git repository, a matching task commit durably contains the completed work and log records.
- `CLEANED`: the task recovery directory has been removed and the task scope contains no uncommitted residue.

`COMMITTED` and `CLEANED` normally do not require additional journal records. Detect `COMMITTED` from Git using the task identifier in the commit message. Detect `CLEANED` from the absence of the task recovery directory. This avoids bookkeeping-only commits.

An incomplete task may instead reach `REVERTED`, meaning its entire recorded scope has been restored to the prepared baseline and its recovery directory has been removed.

### 5. Start every session with recovery inspection

Before selecting or implementing a new task:

1. Locate the project root and the authoritative development documents.
2. Determine whether the directory is a Git repository.
3. Inspect `IMPLEMENTATION_LOG.jsonl`, `.implementation-state/`, and, when applicable, Git status and recent task commits.
4. Identify the latest campaign and latest task state.
5. Read the project instruction sources applicable to the current or recovered task scope.
6. Apply the recovery procedure in section 11 before modifying any project file.
7. Confirm that no earlier task remains active.

Recovery takes precedence over new implementation. Never continue with the next PLAN task merely because the partially completed files appear plausible.

If the final JSONL line is clearly truncated by an interrupted append, treat the preceding valid lines as authoritative only when the recovery directory makes the state unambiguous. Preserve the evidence and ask the user if interpretation is uncertain. Corruption before the final line is always an escalation condition.

### 6. Preflight for a new task

After recovery is complete:

1. Read the active PLAN or FEATURE-PLAN and identify the next incomplete task in its declared order.
2. Read every SPEC, PLAN, layout, and feature section governing that task, together with the applicable project instruction sources defined in section 3.
3. Inspect the relevant code and tests without modifying them.
4. Define one concise task scope and the complete anticipated file-operation set.
5. Classify every target operation as `modify`, `create`, `delete`, or `rename`.
6. Identify the targeted unit tests, affected dependent tests, and integration tests required for completion.
7. Generate a unique task identifier using a UTC timestamp and semantic slug, for example:

   ```text
   20260918T074215Z-cli-input-handling
   ```

In a Git repository:

- Record the current `HEAD`.
- Inspect the working tree and index before starting.
- Do not silently include pre-existing changes in the task.
- If a planned target already has uncommitted changes not produced by the active protocol, stop and ask the user unless the user has explicitly authorized those bytes as the task baseline.
- Unrelated existing changes may remain, but do not modify, stage, revert, or commit them.

Do not use repository-wide reset, checkout, clean, or equivalent destructive recovery commands. All preparation, restoration, staging, and committing shall be limited to declared task paths.

### 7. Declare and prepare the task

Perform the following steps in order.

#### 7.1 Append `STARTED`

Before modifying any project target, append one `started` record containing:

- task identifier;
- PLAN task reference;
- concise scope;
- anticipated path and operation list;
- required verification;
- Git `HEAD`, when applicable;
- a baseline fingerprint or equivalent read-only baseline description for the anticipated paths.

Example:

```json
{"event":"started","at":"2026-09-18T07:42:15Z","task":"20260918T074215Z-cli-input-handling","plan":"docs/dev/FEATURE-PLAN.md#cli-input","scope":"Add validated CLI key bindings","files":[{"path":"src/tetris/cli.py","operation":"modify"},{"path":"tests/test_cli.py","operation":"modify"},{"path":"docs/dev/spec/frontends/cli.md","operation":"modify"}],"baseline_fingerprint":"sha256:…","git_head":"abc1234","verification":["pytest tests/test_cli.py","pytest tests/test_application_api.py"]}
```

#### 7.2 Create the manifest and backups

Create `.implementation-state/<task-id>/manifest.json`. For every operation, record enough information to restore the exact baseline:

- repository-relative path;
- intended operation;
- whether the path initially existed;
- baseline content hash when applicable;
- file type and relevant mode or executable state;
- backup path when applicable;
- both source and destination baselines for a rename.

Copy every existing target into the task backup tree while preserving its bytes and relevant metadata. Verify each backup against the recorded baseline hash.

A minimal manifest has this form:

```json
{"version":1,"task":"20260918T074215Z-cli-input-handling","files":[{"path":"src/tetris/cli.py","operation":"modify","existed":true,"type":"file","mode":"0644","sha256":"…","backup":"backup/src/tetris/cli.py"},{"path":"tests/test_cli.py","operation":"modify","existed":true,"type":"file","mode":"0644","sha256":"…","backup":"backup/tests/test_cli.py"}]}
```

Operation requirements:

- `modify`: back up the existing path.
- `create`: record that the path was absent; do not create it yet.
- `delete`: back up the existing path.
- `rename`: record and preserve the baseline state of both source and destination.

Back up symlinks as symlinks rather than silently dereferencing them. Preserve executable bits and other metadata required for correct restoration.

#### 7.3 Append `PREPARED`

Only after the complete manifest and every required backup have been verified, append a `prepared` record containing the task identifier, manifest location, manifest version, and manifest hash.

```json
{"event":"prepared","at":"2026-09-18T07:43:00Z","task":"20260918T074215Z-cli-input-handling","manifest":".implementation-state/20260918T074215Z-cli-input-handling/manifest.json","manifest_version":1,"manifest_sha256":"…"}
```

Do not modify any declared project target before this record exists.

#### 7.4 Expanding scope after preparation

If implementation reveals that another path must change:

1. Do not modify the new path.
2. Discover and read any project instructions newly applicable to the expanded scope.
3. Append a `scope-extension-started` record identifying the additional operation.
4. Capture and verify its baseline exactly as for the original paths.
5. Update and re-hash the manifest with a new version.
6. Append another `prepared` record for the new manifest version.
7. Only then modify the additional path.

If a path was already modified before being declared and backed up, stop and ask the user. Do not fabricate a baseline from the modified file.

### 8. Implement the task

After `PREPARED`:

1. Modify only paths in the latest prepared manifest.
2. Implement the smallest complete change described by the selected PLAN task.
3. Keep the implementation aligned with the active SPEC, PLAN, layout, and feature documents.
4. Add or update tests covering the changed behavior and relevant boundary cases.
5. Update the main development documents wherever the task changes the complete current project state.
6. During feature work, also update FEATURE-SPEC and FEATURE-PLAN when implementation reveals an approved design correction. Do not silently diverge from either document set.
7. Keep unrelated user changes intact.

Recognized disposable outputs created automatically by approved tools—such as ignored test caches or compiler scratch files—do not need to become task targets. They must remain outside tracked source and documentation, must not be staged, and should be cleaned when appropriate. Unexpected generated files or modifications to non-disposable paths are undeclared changes and must be investigated.

If the implementation exposes an architectural contradiction, missing decision, or scope expansion larger than the current bounded task, stop implementation. Restore the task or obtain user direction before revising the architecture or PLAN.

Do not begin a second PLAN task to make the current one pass. Necessary fixes within the current task's declared behavior belong to the current transaction; unrelated work belongs to a later task.

### 9. Verify and complete the task

Do not record completion until all required work is finished.

#### 9.1 Inspect the resulting scope

- Compare changed paths with the latest manifest.
- Confirm that every change belongs to the declared task.
- Confirm that no undeclared path was modified.
- Review the resulting diff, including tests and documentation.
- Confirm that the implementation, SPEC, PLAN, layout, and active feature documents are mutually consistent.

#### 9.2 Run verification

Run, in this order:

1. Unit tests directly associated with every changed implementation file or component.
2. Unit tests for components dependent on the changed behavior.
3. Relevant integration tests.
4. Any linting, type checking, build, packaging, or format checks required by the project or PLAN.
5. Broader phase-level or full-suite verification when the task completes a phase or campaign.

Fix every failure caused by the task and repeat the affected verification until it passes. Do not weaken tests, remove valid assertions, or alter unrelated behavior merely to obtain a green result.

If a required check cannot be executed, the task is not complete. Report the blocker. During a controlled stop, restore the incomplete task and append `reverted` unless the user explicitly directs that the prepared state be retained for a known continuation.

#### 9.3 Append `COMPLETED`

After all required checks pass, append a `completed` record containing:

- task identifier;
- concise result summary;
- exact verification commands and successful outcomes;
- final manifest version;
- whether this completes a phase or campaign.

```json
{"event":"completed","at":"2026-09-18T08:06:00Z","task":"20260918T074215Z-cli-input-handling","summary":"Added validated configurable CLI key bindings","manifest_version":1,"verification":[{"command":"pytest tests/test_cli.py","result":"passed"},{"command":"pytest tests/test_application_api.py","result":"passed"}],"phase_complete":false,"campaign_complete":false}
```

The `completed` record must be appended before Git staging or backup removal.

### 10. Commit and clean up

#### 10.1 Git repository

After `COMPLETED`:

1. Stage only the paths declared by the latest manifest and `IMPLEMENTATION_LOG.jsonl`.
2. Include declared deletions and renames explicitly.
3. Never stage `.implementation-state/` or backup files.
4. Do not use broad staging such as `git add -A`, `git add .`, or `git commit -a` when unrelated changes exist or may exist.
5. Inspect the staged diff and confirm that it contains the complete task and nothing else.
6. Commit once for the task. Use a concise subject and this exact trailer:

   ```text
   Task: <task-id>
   ```

7. Confirm that a commit containing the trailer exists and that all declared task changes are committed.
8. Remove `.implementation-state/<task-id>/`.
9. Confirm that no declared task path remains modified or staged.

Do not amend, squash, rebase, push, or otherwise rewrite or publish commits unless the user explicitly requests it.

If staging or committing fails, preserve the recovery directory and treat the task as completed but not committed. Do not begin another task.

#### 10.2 Non-Git project

After `COMPLETED`:

1. Reconfirm the successful verification recorded in the log.
2. Remove `.implementation-state/<task-id>/`.
3. Confirm that no backup artifacts remain for the task.

The completion record is the durable terminal evidence when Git is unavailable.

### 11. Recovery procedure

Apply the following rules at the beginning of every run.

#### No active task

If the latest task is completed, committed when required, and cleaned, select the next PLAN task. If no task has started in the current campaign, begin with campaign selection and preflight.

If the latest task is `REVERTED`, confirm that its recovery directory is gone and its entire scope matches the recorded baseline, then restart the same PLAN task with a new task identifier.

#### `STARTED` without `PREPARED`

No target should have been modified.

1. Inspect the planned paths and any partial recovery directory.
2. Confirm from the recorded baseline, Git state, and available hashes that no planned target changed after `STARTED`.
3. Remove incomplete recovery preparation.
4. Append a `reverted` record explaining that preparation was incomplete.
5. Restart the task with a new task identifier.

If any planned target changed or the baseline cannot be established confidently, stop and ask the user.

#### `PREPARED` without `COMPLETED`

Treat the task as interrupted and revert its entire latest prepared manifest before doing new work.

1. Validate the manifest hash and all required backups.
2. Restore `modify` and `delete` paths from their backups.
3. Remove `create` paths that were absent in the baseline.
4. Restore both source and destination baselines for `rename` operations.
5. Restore recorded file types and relevant modes.
6. Verify restored paths against their baseline hashes.
7. Remove the task recovery directory.
8. Append a `reverted` record with the reason `interrupted-before-completion`.
9. In Git, confirm that the task scope matches its recorded pre-task state without altering unrelated changes.
10. Restart the task with a new task identifier.

Restoration is all-or-nothing. Do not continue from apparently useful partial edits unless the user explicitly overrides this recovery rule.

#### `COMPLETED` in a Git repository

Search Git history for a commit containing the exact `Task: <task-id>` trailer.

- If the matching commit exists and contains the declared task changes, remove the matching leftover recovery directory and proceed.
- If no matching commit exists, inspect the manifest and diff, rerun the recorded verification, and commit the exact completed task if it remains valid.
- If re-verification fails or the diff is inconsistent, preserve the recovery data and either restore the entire task baseline and restart or ask the user when restoration could discard work of uncertain origin.
- If a matching task commit exists but the log lacks `COMPLETED`, the protocol was violated. Stop and ask the user rather than automatically reverting committed work.

#### `COMPLETED` without Git

Rerun or otherwise reconfirm the recorded verification before removing leftover recovery data. If the result is inconsistent with the completion record, preserve the backups and ask the user or restore the complete task baseline.

#### Unexpected recovery data

Recovery data associated with the latest completed task may be removed only after its completion and, where applicable, matching commit are verified.

If backup directories or backup-like files exist outside the current or latest completed task scope, do not delete them automatically. Stop and report them to the user.

Likewise, stop and ask the user when:

- multiple tasks appear active;
- a manifest or backup is missing or corrupted;
- an undeclared file was modified;
- a target contains changes that may belong to the user or another agent;
- the log, Git history, and recovery directory disagree;
- restoration would overwrite work whose origin is uncertain.

### 12. Phase and campaign completion

When a task completes a named PLAN phase, run the phase-level verification required by that subplan before setting `phase_complete` to `true`.

When completing an initial campaign:

- confirm that every current PLAN task is implemented;
- run the project-level acceptance and full verification required by the PLAN;
- confirm that SPEC, PLAN, layout, implementation, and tests describe the same complete project state;
- mark `campaign_complete` in the final task's completion record and commit.

When completing a feature campaign, the final task shall also:

1. Integrate the settled feature requirements into the appropriate main SPEC nodes.
2. Integrate the final implementation structure and from-scratch tasks into the main PLAN nodes.
3. Update shared documents such as `layout.md` and their children.
4. Remove superseded main-document content.
5. Delete `FEATURE-SPEC.md` and `FEATURE-PLAN.md` as declared task operations.
6. Run the complete verification required for the affected project scope.
7. Record `campaign_complete: true` and commit the complete integration.

The main documentation must describe the resulting project from scratch. The completed feature must not require the deleted feature documents or implementation log for comprehension.

### 13. Journal rules

`IMPLEMENTATION_LOG.jsonl` shall contain one valid JSON object per physical line.

- Append records; do not edit or reorder records within an active campaign.
- Keep records concise. Store detailed per-file backup metadata in `manifest.json`.
- Use repository-relative paths with a consistent separator.
- Use UTC timestamps and stable task identifiers.
- Never place secrets, credentials, or large file contents in the log.
- The log records execution state, not architectural requirements or a narrative diary.
- A task identifier identifies an execution transaction; it is not a substitute for meaningful SPEC or PLAN decomposition.

At minimum, support these events:

```text
campaign
started
prepared
scope-extension-started
completed
reverted
```

### 14. Non-negotiable safety rules

- Recover or resolve the current task before starting another.
- Never modify a target before its baseline is prepared.
- Never modify an undeclared path.
- Never claim completion while required checks are failing or unexecuted.
- Never remove recovery data before completion is durable and any required task commit exists.
- Never commit unrelated user changes.
- Never use broad destructive Git or filesystem operations for task recovery.
- Never guess when the log, backups, filesystem, or Git history disagree; preserve evidence and ask the user.
- Never leave a knowingly incomplete task in place during a controlled stop when it can be safely restored.

The intended steady state after every completed task is: documentation and implementation agree, required tests pass, one task commit exists when Git is available, no task backup remains, and the next task can begin from a known baseline.
