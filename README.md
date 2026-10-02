# SDD Manager

**Develop from explicit requirements, implement in bounded steps, and keep the human in control.**

SDD Manager is an Agent Plugin for specification-driven development in Git repositories. It takes a project from exploration and design through specifications, plans, executable task lists, implementation, and verification. It also supports feature changes, interruption recovery, and focused amendments at implementation checkpoints.

Start with **sdd-manage**, the central coordinator. It routes your request to the relevant skills, reuses established project decisions, and stops at the boundary you specify.

## Getting started

Load the package using your agent client's supported plugin mechanism. The package contains a root `plugin.json` and 15 skills under `skills/`; discovery and invocation depend on the client. The workflows require an agent with access to project files and the tools needed for the requested work.

- **Project changes:** Use an existing, eligible Git worktree with applicable project instructions. Repository initialization is outside the plugin's scope.
- **Commits and pushes:** Establish the branch and remote destination. Implementation pushes outstanding commits before starting further task work, then commits and pushes each completed task before advancing.
- **Checks:** Use the project's declared test, build, and documentation tools.
- **Authentication:** Attempt pushes with the current shell session. On an access/credential failure, sdd-manage reuses a suitable ignored repository token or requests and saves one beside the root .gitignore before recovering the client session. `*.tkn` files remain untracked.
- **Hosting:** GitHub access is needed only for remote operations. The conventional fine-grained token selects solely the target repository with read/write for Commit statuses, Contents, Issues, and Pull requests; Metadata read access is automatic. Git and API clients authenticate separately. Local development does not require a hosting token.

Give the coordinator a concrete objective and stopping point. For example:

```text
Use sdd-manage to inspect this repository and prepare the development
specification, plan, layout, and task list for a line-based archive reader.
Use the attached brief as input. Stop before implementation.
```

Once the task list is ready:

```text
Use sdd-manage to implement milestone 1.1 from TASKS.md.
Verify, commit, and push each completed task. Merge the verified milestone
into its established target with an explicit merge commit, verify and push
the target, then stop.
```

Use the milestone and task IDs from your actual task list. You can start at a later stage when its inputs are already established; the coordinator does not repeat earlier stages by default.

## Core development workflows

| Workflow | Purpose and typical path |
| --- | --- |
| **Main / greenfield** | Define the complete system, then implement it in bounded increments from design, SPEC, PLAN/layout, and TASKS. Existing projects can enter at an established stage. |
| **Revision** | Correct, simplify, or improve defined/implemented work, typically through the retained review/revision process. A focused accepted prompt can supply the revision objective directly. |
| **Feature** | Add a scoped capability through the necessary feature document package and FEATURE-TASKS, then implement and incorporate accepted deltas within the authorized boundary. |

**Steering is a lightweight revision path** at a paused implementation checkpoint. You command a focused amendment; the agent updates existing documents, code, tests, and documentation without feature overlays or an obligatory formal campaign. It verifies and integrates into the paused branch, then returns control so you decide when to resume.

Main describes the development purpose, not the default Git branch. The [canonical workflow model](skills/sdd-manage/references/workflows.md#core-development-workflows) defines entry and scope; the operations below are stages or supporting work, rather than additional core workflows.

## Operations

| Objective | Example request | Result |
| --- | --- | --- |
| Explore and prepare a project | “Compare approaches, then prepare the project through TASKS.” | Accepted design, behavior, delivery strategy, physical ownership, and executable tasks. |
| Prepare a feature | “Define ZIP support and its feature task list.” | Scoped requirements and the necessary feature design, plan, and tasks. |
| Implement a range | “Implement the next three tasks and stop.” | Verified task commits on a working branch, explicit boundary merge, merged-state verification, and target publication. |
| Resume interrupted work | “Resume milestone 2.2 without discarding pending work.” | Existing work inspected and continued before new tasks are selected. |
| Amend at a checkpoint | “Remove encrypted streams from the implemented scope, including tests and documentation.” | Verified amendment explicitly merged into the paused implementation branch, published, then control returned to the human. |
| Integrate an accepted feature | “Incorporate FEATURE-SPEC into SPEC only.” | Selected main documents reconciled without unrelated task-list changes. |
| Review and revise a project | “Plan a systematic review,” “Review this protocol,” or “Implement accepted findings.” | Retained campaign plans/reports, stable findings, and authorized verified revisions incorporated into governing documents. |
| Review or maintain a scope | “Review PLAN,” “Verify this phase,” or “Align README.” | Findings, evidence, or the explicitly requested maintenance. |
| Synchronize GitHub tracking | “Create issues and milestones for these tasks.” | Phase labels, milestones, task issues, and verified task associations. |

Preparation and review stop before implementation unless your request includes it. Steering finishes the amendment and returns control to you; you separately decide when to resume the task list. Transferring feature tasks into the main task list requires both lists in scope so each task retains one executable owner.

For detailed entry conditions and stopping rules, see the [workflow catalog](skills/sdd-manage/references/workflows.md).

## Branches and integration

Work on a scoped branch for the selected range, feature, steering amendment, or document integration. Establish its target and starting checkpoint; the target need not be the default branch. Reuse the branch when continuing the same work.

- **Task checkpoints:** Commit and push each completed task before advancing.
- **Workflow boundary:** Merge the verified completed scope by default with `git merge --no-ff`; every new integration has an explicit two-parent merge commit. Verify the prospective merged state before committing it and push the target.
- **Feature documents:** Incorporate selected accepted deltas on the feature branch before final verification and merge. A narrow request does not authorize unfinished feature work or unselected document changes.
- **Steering:** Branch from the paused implementation checkpoint and merge back there. A blocked amendment retains its work and resumes on a human command; successful steering still does not resume the main task list.
- **Failures:** Preserve valid work and report conflicts, required-check failures, or pending target publication. No automatic rollback or force-push. Separate worktrees can protect unrelated dirty work.

See the [Git workflow](skills/sdd-manage/references/git-workflows.md) for branch reuse, interruption, merge verification, and publication. Git merge and feature-document incorporation have distinct owners; hosted PR operations remain outside the current backend.

## Review and revision records

Use `docs/dev/reviews/<sequence>_<baseline-sha>/` for the complete campaign: review plan → review → review report → revision plan → revision → revision report. A focused review can start directly from a prompt and record its scope/criteria in REVIEW-REPORT. A comprehensive review plans units and report checkpoints first.

Each planned review unit and completed revision action updates its report and is committed/pushed before dependent work. Accepted revisions update relevant governing documents; all campaign records remain retained. Directory identity stays fixed as HEAD advances. **sdd-report** supplies scalable artifact templates, and **sdd-manage** coordinates scope and execution.

## Skills

The coordinator handles workflow selection and shared prerequisites. Focused skills own the work within each stage.

| Skill | Responsibility |
| --- | --- |
| [sdd-manage](skills/sdd-manage/SKILL.md) | Coordinate scope, prerequisites, branches, explicit integration, credentials, and stopping points. |
| [sdd-orient](skills/sdd-orient/SKILL.md) | Inspect instructions, repository state, documents, tooling, and interrupted work. |
| [sdd-conventions](skills/sdd-conventions/SKILL.md) | Apply shared design, modularity, and task-hierarchy criteria. |
| [sdd-design](skills/sdd-design/SKILL.md) | Explore the problem; develop the project brief, architecture, and decomposition. |
| [sdd-specify](skills/sdd-specify/SKILL.md) | Define observable behavior, contracts, and acceptance conditions. |
| [sdd-plan](skills/sdd-plan/SKILL.md) | Define delivery strategy, milestones, exit conditions, and physical layout. |
| [sdd-tasks](skills/sdd-tasks/SKILL.md) | Derive task lists and review their structure, dependencies, and progress evidence. |
| [sdd-implement](skills/sdd-implement/SKILL.md) | Select executable ranges; implement or resume tasks; verify, commit, and push. |
| [sdd-steer](skills/sdd-steer/SKILL.md) | Apply a focused human-directed amendment at a checkpoint, then stop. |
| [sdd-integrate-feature](skills/sdd-integrate-feature/SKILL.md) | Incorporate accepted feature deltas and reconcile selected task lists. |
| [sdd-tdd](skills/sdd-tdd/SKILL.md) | Develop testing strategy, write meaningful tests, and guide test-first implementation. |
| [sdd-verify](skills/sdd-verify/SKILL.md) | Run the required checks and assess acceptance evidence, failures, and gaps. |
| [sdd-docs](skills/sdd-docs/SKILL.md) | Maintain professional module/API documentation, README, guides, and examples. |
| [sdd-report](skills/sdd-report/SKILL.md) | Draft issues, commit messages, PR descriptions, and evidence-backed progress reports. |
| [sdd-forge](skills/sdd-forge/SKILL.md) | Project tasks to GitHub and reconcile verified issue status. |

## Development documents

The main documents describe the complete intended project. Task lists record executable work and evidence-backed progress. Roots can link to focused children when a concern needs substantial detail.

| Document under `docs/dev/` | Owns |
| --- | --- |
| `PROJECT.md` | Purpose, users, scope, outcomes, and constraints. |
| `ARCHITECTURE.md` | Major blocks, relationships, dependency direction, and design decisions. |
| `DECOMPOSITION.md` | Component responsibilities, collaborations, and design-level interfaces. |
| `SPEC.md` | Required behavior, final contracts, errors, invariants, and acceptance. |
| `PLAN.md` | Meaningful end-to-end MVP, small capability increments, phases/milestones, dependencies, and verification/decision gates. |
| `layout.md` | Physical ownership of source, tests, documentation, and other artifacts. |
| `TASKS.md` | Phase → Milestone → Task hierarchy, stable IDs, and progress evidence. |

PLAN defaults to the simplest practical meaningful end-to-end MVP, then grows it through small testable capability increments. Necessary prerequisites are justified; the complete intended design and SPEC remain authoritative. Appropriate milestone demonstrations and functional/usability feedback inform human decisions to continue, amend, simplify, or stop. TASKS supplies bounded work within these increments.

A scoped feature can use `FEATURE_ARCHITECTURE.md`, `FEATURE_DECOMPOSITION.md`, `FEATURE-SPEC.md`, `FEATURE-PLAN.md`, and `FEATURE-TASKS.md` as needed. Accepted deltas are incorporated into the selected main documents through **sdd-integrate-feature**. Checkpoint steering directly amends existing documents and creates no feature-document layer.

## Completion and continuity

- **Evidence determines completion.** A checkbox, passing command, or closed issue alone is insufficient. Implementation checks the task's requirements, tests, documentation, and prescribed verification before recording completion.
- **Existing work is preserved.** Orientation compares task and Git evidence with pending changes. Completed work awaiting commit is persisted without repeating its implementation; dirty state alone does not justify reset.
- **Git provides durable checkpoints.** No transaction journal or recovery directory is required. Commits and task evidence support continuation.
- **Changes remain scoped.** Unrelated staged and unstaged work is preserved. Documentation findings requiring governing-document amendments are returned to the human.
- **Hosting reflects local evidence.** GitHub issues close after verified, committed task completion. Hosting failures remain pending and do not erase local results; task-branch completion is distinct from target integration and publication. Rate limits/outages remain deferred; uncertain writes are reconciled before retrying.

## Package status and references

All 15 skills are included. Structural validation, independent coordination assessments, and local Git fixtures have been exercised. Full end-to-end execution in a target client and complete hosted-tracking workflows remain untested; an isolated live GitHub issue creation/closure check is recorded in the token revision evidence.

- [Capability map](docs/dev/CAPABILITY-MAP.md): artifact ownership and cross-skill boundaries.
- [Review campaigns](docs/dev/reviews/README.md): ordered review and revision records.
- [Revision evidence](docs/dev/reviews/003_39374c8/REVISION-REPORT.md): branch workflows, failure handling, fresh-session execution, and validation limits.
- [Plugin review](docs/dev/reviews/001_49143fa/REVIEW-REPORT.md): findings, corrections, verification evidence, and limits.
- [TDD provenance](skills/sdd-tdd/references/upstream-provenance.md): adaptation of Superpowers TDD and its test-writing companion, with the retained MIT license.
