---
name: sdd-plan
description: Use when creating, reviewing, or revising docs/dev/PLAN.md, focused plan children, FEATURE-PLAN.md, or docs/dev/layout.md; deciding delivery phases, milestones, dependencies, exit conditions, and physical ownership before deriving executable TASKS.
---

# Plan delivery and physical layout

Choose the requested work and load only its references. A request for complete delivery planning develops both PLAN and layout when physical ownership needs to be established; a focused request to review or revise one document does not automatically authorize rewriting the other.

| Work | Load |
| --- | --- |
| Prepare both delivery strategy and physical placement for task derivation | [delivery plan](references/delivery-plan.md) and [physical layout](references/physical-layout.md) |
| Define or revise delivery strategy, phases, milestones, dependencies, or a scoped feature plan | [delivery plan](references/delivery-plan.md) |
| Define or revise physical ownership of implementation, tests, and documentation | [physical layout](references/physical-layout.md) |
| Review consistency or incorporate a settled feature into main documents | [review and reconciliation](references/review-and-reconciliation.md) |

Before authoring, read the relevant PROJECT, ARCHITECTURE, DECOMPOSITION, SPEC, their focused children, and any existing PLAN and layout. Inspect relevant code, tests, and packaging for existing projects; distinguish observed placement from intended placement. If inputs conflict or a required behavioral or architectural decision is unresolved, identify its owner instead of silently settling it in PLAN or layout. Start at the requested operation when its inputs are established.

Read-only review can proceed without changing files. Creating, revising, or removing project documents requires the user's request for that work and a current **sdd-orient** handoff establishing an eligible Git worktree, applicable instructions, target paths, and ownership of dirty changes. The invoking agent coordinates this prerequisite until `sdd-manage` owns coordination. This skill does not perform orientation or authorize another workflow.

PLAN owns delivery strategy and boundary verification; layout owns physical placement and ownership. SPEC owns behavior and acceptance; design owns logical structure; TASKS owns stable, ordered execution units and progress. Use **sdd-conventions** when assessing component or task boundaries, without incorporating its shared rules here. Neither PLAN nor layout is a task checklist, a progress journal, or permission to implement. The downstream task workflow consumes the accepted design, SPEC, PLAN, and layout together.

At completion, report the strategy or placement established, affected phases or ownership boundaries, unresolved material decisions, and documents inspected or updated. Describe proposed work as planned, not implemented.
