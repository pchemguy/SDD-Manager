# V1 capability inventory for the plugin revision

This is a migration inventory, not a new SPEC or a claim that deferred workflows already work. Its source is the V1 `main` snapshot at `b3c53d7` (`sdd-man/SKILL.md`, eleven workflow references, templates, README, SPEC, and PLAN). Keep it until the replacement skill set and governing documents account for every retained capability. The feature branch intentionally starts from an empty project tree.

## Decisions already accepted

- The package is a plugin with focused skills and shared capabilities. `sdd-manage` will coordinate prerequisite checks and workflow transitions. A focused skill may declare a shared prerequisite without duplicating its implementation. Only `sdd-orient` exists so far.
- Repository mutation requires a usable Git worktree. Read-only discovery and conversation may inspect other locations; no workflow modifies a non-Git project. Git initialization is not an implied exception.
- Git commits are durable implementation checkpoints. Retire backup manifests, recovery directories, non-Git completion, and their transaction state machine. An interrupted dirty task may continue only when ownership and state are reliable; otherwise the future recovery workflow returns task-owned work to a trusted commit under a safe worktree policy. The choice of task isolation remains to be specified.
- Design precedes SPEC for a new project: `PROJECT.md` is the concise brief; `ARCHITECTURE.md` states major structure and decisions; `DECOMPOSITION.md` develops component ownership and provisional interfaces. Architecture and decomposition may have focused children. Feature architecture and decomposition documents describe architectural revisions when needed. SPEC owns final behavioral contracts and acceptance.
- PLAN owns strategy, phases, milestones, dependencies, and exit conditions; TASKS replaces ROADMAP and canonically owns the smallest executable units and progress. LAYOUT owns physical placement. Main documents describe the current intended system; change overlays express bounded deltas before normalization.
- External capabilities such as GitHub issue and milestone synchronization remain optional future skills; define their inputs, effects, idempotence, and authority without making an external service the source of truth. Scripts are optional and reserved for clear deterministic steps.

## V1 reference-by-reference review

| V1 source | Valuable behavior to retain or adapt | Planned owner / status |
| --- | --- | --- |
| `SKILL.md`, `lifecycle.md` | Distinct exploration, authoring, status, implementation, recovery, steering, and reporting modes; explicit authorization and stopping boundaries; authority reconciliation; truthful state; selective loading. | Future `sdd-manage` and focused skill entry contracts. Not implemented yet. |
| `exploration.md` | Facts versus decisions and assumptions; alternatives and tradeoffs; scoped questions; disposable experiments; readiness for formal documents without automatic transition. | Future `sdd-design`. Not implemented yet. |
| `project-discovery.md` | Resolve nested project and Git roots; read scoped governing instructions; inspect relevant docs, code, tests, tool commands, dirty paths, and uncertain project status without mutation. | `sdd-orient` covers the read-only baseline. Further task-specific recovery/status classification belongs to future skills. |
| `document-system.md` | Complete-current-state, recursively decomposable documents; clear ownership, dependency direction, cross-document alignment, review and normalization; focused children and feature deltas. | Future `sdd-design`, specification, planning, and layout skills. Replace PLAN's task transactions with TASKS; give architecture and decomposition independent ownership. |
| `roadmap.md` | Named phases and milestones, bounded selection of next N tasks/phase/milestone, meaningful checkmarks, reconciliation with durable evidence. | Future TASKS capability and implementation coordinator. TASKS is canonical for tasks rather than a mirror of PLAN tasks. |
| `verification.md` | Derive tests from contracts; direct/dependent/integration and milestone checks; optional component-to-test JSON registry; classify task, pre-existing, and environment failures. | Future verification shared capability or focused skill. Registry remains optional when useful. |
| `implementation.md` | Exact requested work boundary, one task at a time, instruction and ownership preflight, focused verification, durable completion, stop for steering. | Future Git-only implementation skill. Replace backups and journal transactions with commit checkpoints; TASKS owns task selection. |
| `recovery.md` | Inspect state before new work, distinguish resumable from ambiguous interrupted work, preserve unrelated changes, report failures honestly. | Future Git-only recovery capability. Retire manifest validation, backup restoration, and non-Git branches. Define controlled reset policy before implementing. |
| `checkpoint-steering.md` | Human review after requested range, focused corrective revisions, impact analysis across code/tests/docs/dependencies, main-document normalization, history retained in Git, and paused state after revision. | Future steering skill and coordinator. Not implemented yet. |
| `in-code-documentation.md` | Post-change docstring review, precedence for project style and tools, professional Google style where applicable, targeted review plus project-wide audit. | Future shared in-code documentation capability invoked for substantive code work. Not part of orientation. |
| `reporting.md` | Evidence-backed task, milestone, and phase reports with implemented-feature summaries; explicit blocked and partial states; aggregate progress and steering outcomes. | Future shared reporting capability. Not implemented yet. |

## Assets, historical state, and omissions to avoid

- V1 templates for SPEC, PLAN, LAYOUT, ROADMAP, and the verification map are **reference material** for later document skills; do not copy ROADMAP or PLAN task templates without adapting their ownership. This feature branch currently carries no document-generation templates.
- V1 `IMPLEMENTATION_LOG.jsonl` and `.implementation-state/` may exist in consumer projects. Orientation detects them as legacy evidence; it does not restore backups, erase state, or treat their presence as permission to proceed.
- V1 treated `docs/dev/PROJECT.md` as operating instructions. New PROJECT is the brief. Detect legacy instructions during orientation and explicitly migrate or preserve them in a project-designated instruction source; never silently downgrade their authority.
- Maintain greenfield and existing-project paths, project-local instructions, scoped changes in monorepos, test selection, failure repair, human steering, and feature-document reconciliation in later skills. None is safely replaced by a Git-status check alone.
- Keep external GitHub synchronization out of the core workflow until its optional capability contract is designed. Do not require an MCP server or scripts merely because the package is a plugin.

## Immediate acceptance scope

The present package must pass Agent Plugins and bundled Agent Skills structural validation. `sdd-orient` must correctly report (1) a clean Git worktree, (2) dirty and path-scoped state without taking ownership, (3) a non-Git location as ineligible for mutation, and (4) an existing V1 `PROJECT.md` used for instructions as a migration issue. Future migration entries remain open until the respective skills are built and verified.
