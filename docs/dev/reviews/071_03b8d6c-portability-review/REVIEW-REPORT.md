# Cross-agent continuity review

## Campaign and state

- Campaign: `071_03b8d6c`; [review plan](REVIEW-PLAN.md).
- Reviewed baseline: `03b8d6c9e06f22bad62a00f53190e99f90386295`.
- Working branch: `revision/071_03b8d6c-portability-review`; target: main.
- State: U-001 assessed; U-002 pending. No plugin/source fixes or live acceptance performed.

The required outcome is repository-based recovery by a different agent following AGENTS.md, without relying on the former agent's conversation or private notes. The review distinguishes the same-worktree and fresh-clone cases, and separates persistent project decisions from current external state and execution facilities.

## Evidence boundary

Findings will identify current source locations, consequences for the requested outcome, priority, confidence, correction owner and objective recheck. A gap against this requested extension is not automatically a violation of an existing instruction. Existing safe-stop rules and durable records receive explicit credit; no failed client behavior is inferred from missing coverage.

The campaign's source assessment and document checks do not establish real agent/client portability. Runtime/client trials, secrets, hosted mutations and unrelated frozen campaign contents are excluded.

## U-001: What survives without the former conversation

Assessed the target AGENTS and discovery templates, PLUGIN context/checkpoint guidance, coordinator entry and context/reporting sections, orientation inspection/handoff, main preparation and DOCS task template, human document review, implementation startup/range selection, phase activation, tracking decisions and completion reporting. The reviewed package is `.agents/plugins/sdd-manager/`; locations below refer to that baseline.

| Existing owner/artifact | Durable or recoverable information | Remaining distinction |
| --- | --- | --- |
| PROJECT/design/SPEC/PLAN/layout | Accepted product intent, contracts, delivery hierarchy and physical ownership when maintained under their procedures. | The latest user request and current execution range are not the entire planned backlog. |
| DOCS_TASKS and approval evidence | Initialization outcomes; first approval with exact accepted document state; final package QC. | Future checkpoint preapproval, revocation and a currently pending review still need their recorded scope/source. Later document changes do not reopen first-approval tasks automatically. |
| TASKS/FEATURE-TASKS, task commits and linked evidence | Task identity, checked transitions, verified result and acceptance disputes. | Completed/eligible tasks do not identify how far the human authorized this run to proceed. |
| Git and branch records | Actual files, commits, ancestry, current worktree changes and publication/merge evidence available to the receiver. | Branch existence does not identify the selected active workflow, ownership of dirty files or a human stop. |
| Existing preparation/campaign/phase reports | Scope, findings, decisions, reviewed sources and boundaries when those reports contain them. | No common current-context locator or required latest-request update is defined for all stages. |
| Coordinator/owner handoffs | The instructions require rich scope, authority, prerequisites, tracking and stop information to be passed. | A handoff in the conversation is not necessarily available in another agent's clone. |
| Ignored/untracked local files | Can survive a shared worktree. | They do not travel through an ordinary clone/push; a critical dependency needs an explicit portable disposition. Secrets are provisioned separately. |

### Existing coverage to preserve

- [Human document review](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/references/human-document-review.md#future-checkpoint-preapproval) already requires scope, conditions and revocation to survive interruption; its created-document step 4 records actual decisions and exact presented state in existing evidence.
- [Main preparation](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/references/main-preparation.md#document-tasks-through-first-approval) explicitly persists first approval with the checked documentation task; initialization retains original file-presence outcomes.
- [Tracking decisions](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/references/tracking-decision.md) already require the actual human decision/source, repository/scope and projection state in existing project/handoff evidence. It would be incorrect to report tracking decisions as wholly chat-only by design.
- [Implementation startup](../../../../.agents/plugins/sdd-manager/skills/sdd-implement/references/startup-and-continuation.md) and [orientation](../../../../.agents/plugins/sdd-manager/skills/sdd-orient/references/inspection-and-handoff.md) recover task/commit state and block ambiguous ownership or scope. They do not authorize guessing lost approvals or replaying completed work.
- [Root agent orientation](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/references/agent-orientation.md) requires current owners/navigation and publication with the owning checkpoint. The gap is not an absence of all continuity requirements.

## Findings

### R-001 — No uniform repository entry to the current execution context

**Priority:** High for the requested portability objective. **Type:** capability gap. **Confidence:** High from source inspection.

**Located evidence:** `assets/AGENTS_TEMPLATE.md:5–11` loads plugin/coordinator guidance and executes capability discovery, without naming a current continuity record. `skills/sdd-manage/references/agent-orientation.md:15` requires discoverable active ownership but no common record. `skills/sdd-manage/references/coordination.md:39` retains the reporting profile in available conversation/workflow context, and line 77 includes session decisions among continuation inputs. `skills/sdd-implement/references/range-selection.md:7–9` expands the request and states the stop; it cannot derive an absent human selection from task readiness.

Existing decision producers can use preparation, handoff or campaign evidence, but the receiving startup has no common contract identifying the authoritative current record and its required contents across these stages. Two projects with identical files/task completion can have different valid human instructions: stop at the current milestone versus continue through the phase; retain an interactive review versus apply scoped preapproval. Git alone cannot distinguish those histories.

**Consequence:** A fresh agent cannot be guaranteed to recover the requested workflow/range, pending checkpoint, scoped policy choices or next permitted action from AGENTS-led repository discovery. Existing instructions often produce a safe ambiguity stop; this review does not establish an actual unsafe continuation.

**Proposed correction:** The coordinator should own one concise current-context contract, exposed through a stable AGENTS pointer and supported without PLUGIN.md. A tracked `docs/dev/HANDOFF.md` is a suitable proposed default; an established project equivalent can satisfy the same contract. Store current request/scope, workflow/owner, exact range/stop, material human decisions and evidence pointers. Keep TASKS, governing documents and their reports authoritative.

**Owners:** sdd-manage, sdd-orient and target AGENTS template; affected workflow owners supply their scoped facts. **Objective recheck:** Remove the sender conversation, supply only the repository and a continuation request, and verify recovery of two distinct recorded scopes without guessing or loading unrelated historical campaigns.

### R-002 — A cross-agent transfer lifecycle is not defined

**Priority:** High for the requested portability objective. **Type:** capability gap. **Confidence:** High from source inspection.

**Located evidence:** Human-review decision persistence and tracking evidence are explicit, but destination/refresh rules are distributed. `skills/sdd-implement/SKILL.md:40` records selected task IDs/exits; `references/startup-and-continuation.md:34` keeps the range visible. `skills/sdd-manage/references/coordination.md:77` says no extra workflow-state artifact is required. None of these defines a cross-agent preparation/consumption protocol tying a discoverable latest context to publication, stale-state checks and retirement.

**Consequence:** A handoff file added without producer/receiver rules could remain stale after a changed range, revoked preapproval, steering return or completed workflow. A same-worktree handover can expose unsaved/local files that a fresh clone lacks. Repeating a completed hosted effect from an old handoff would also conflict with the existing readback-first lifecycle.

**Proposed correction:** Define material update points, responsible owner and checkpoint persistence; an explicit handover verifies publication and necessary file availability. The receiver loads the record, compares it with actual Git/current instructions and relevant evidence, rechecks uncertain hosted effects, then resumes the earliest eligible operation or reports a specific unresolved decision. Superseded/completed work must lose its active-execution status. Preserve existing atomic task/document commits and scope-safe recovery; do not add a per-message journal or a second checklist.

**Owners:** sdd-manage lifecycle; sdd-orient observation; implementation/preparation/steering/feature/campaign/reporting owners update their own handoffs. **Objective recheck:** Assess changed/revoked scope, stale records, interrupted publication, dirty ownership and completion/steering return across a clean active-branch clone. A stale green summary must not waive a current gate.

## Unit status and limits

U-001 establishes source gaps in a stronger requested guarantee, with substantial existing recovery behavior retained. No empirical cross-agent failure, client pass or proposed artifact implementation is claimed. U-002 will assess checkout/plugin boundaries, hosted state, acceptance coverage and the minimal proposed handoff contents/lifecycle.
