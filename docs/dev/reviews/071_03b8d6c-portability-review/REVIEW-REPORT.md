# Cross-agent continuity review

## Campaign and state

- Campaign: `071_03b8d6c`; [review plan](REVIEW-PLAN.md).
- Reviewed baseline: `03b8d6c9e06f22bad62a00f53190e99f90386295`.
- Working branch: `revision/071_03b8d6c-portability-review`; target: main.
- State: U-001/U-002 assessed; discussion integrated and accepted [revision plan](REVISION-PLAN.md) executed. See [revision results](REVISION-REPORT.md) for source/component rechecks and integration boundary. Live acceptance remains unrun.

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

Existing decision producers can use preparation, handoff or campaign evidence, but the receiving startup has no common contract identifying the authoritative current record and its required contents across these stages. The same product files/task completion can accompany different human instructions: stop at the current milestone versus continue through the phase; retain an interactive review versus apply scoped preapproval. The receiver must locate the recorded decision; result files alone cannot establish it. This is not a claim that existing approval-recording requirements can be ignored.

**Consequence:** A fresh agent cannot be guaranteed to recover the requested workflow/range, pending checkpoint, scoped policy choices or next permitted action from AGENTS-led repository discovery. Existing instructions often produce a safe ambiguity stop; this review does not establish an actual unsafe continuation.

**Selected correction for planning:** The coordinator owns checkpoint-based continuity through tracked `docs/dev/HANDOFF.md`, exposed by AGENTS and usable without PLUGIN.md. Record checkpoint context and evidence pointers; recover later changes through current task/campaign records and Git. Existing owners retain detailed results and subsequent decisions. See [consolidated decisions](#consolidated-handoff-decisions); no source correction has been implemented.

**Owners:** sdd-manage, sdd-orient and target AGENTS template; affected workflow owners supply their scoped facts. **Objective recheck:** Remove the sender conversation, supply only the repository and a continuation request, and verify recovery of two distinct recorded scopes without guessing or loading unrelated historical campaigns.

### R-002 — A cross-agent transfer lifecycle is not defined

**Priority:** High for the requested portability objective. **Type:** capability gap. **Confidence:** High from source inspection.

**Located evidence:** Human-review decision persistence and tracking evidence are explicit, but destination/refresh rules are distributed. `skills/sdd-implement/SKILL.md:40` records selected task IDs/exits; `references/startup-and-continuation.md:34` keeps the range visible. `skills/sdd-manage/references/coordination.md:77` says no extra workflow-state artifact is required. None of these defines a cross-agent preparation/consumption protocol tying a discoverable latest context to publication, stale-state checks and retirement.

**Consequence:** A handoff file added without producer/receiver rules could remain stale after a changed range, revoked preapproval, steering return or completed workflow. A same-worktree handover can expose unsaved/local files that a fresh clone lacks. Repeating a completed hosted effect from an old handoff would also conflict with the existing readback-first lifecycle.

**Selected correction for planning:** Establish the handoff at entry and refresh automatically at completed implementation milestones and revision finalization, with workflow transitions and an explicit transfer check covered by the same coordinator subworkflow. Do not require per-commit refresh or repeat task evidence. The receiver reconstructs changes since the checkpoint, including later decisions and hosted effects requiring readback. Distinguish an intentionally older checkpoint from contradictory or unusable evidence. Preserve task/document atomicity and existing scope-safe recovery.

**Owners:** sdd-manage lifecycle; sdd-orient observation; implementation/preparation/steering/feature/campaign/reporting owners update their own handoffs. **Objective recheck:** Assess changed/revoked scope, stale records, interrupted publication, dirty ownership and completion/steering return across a clean active-branch clone. A stale green summary must not waive a current gate.

### R-003 — The starting checkout and plugin source need an explicit transfer rule

**Priority:** Medium. **Type:** design boundary requiring a decision. **Confidence:** High; source review plus native Git experiment.

**Located evidence:** `skills/sdd-manage/references/branch-management.md:8–18` preserves actual branch/target identities and leaves incomplete workflows on their branches. `assets/AGENTS_TEMPLATE.md:5` loads an installed or repository-local plugin and blocks missing availability; it does not select or provision an exact package for another client. Main preparation reuses assets from the same installed/pinned source. Capability discovery is read-only and does not choose or execute a continuing workflow.

An active handoff committed only to a design-docs/phase/feature/revision branch is not necessarily the record read by an agent starting on default. Available remote branches do not select the human's intended workflow, particularly with concurrent work. Likewise, a repository's instructions can name a required plugin without supplying that plugin or credentials to a new host. Existing safe-block behavior is appropriate; it is not a complete zero-extra-context transfer guarantee.

**Executed evidence:** A disposable local Git experiment passed six transport checks: a default clone checked out main and its main handoff; the published active branch was discoverable; explicitly cloning that branch obtained its committed handoff; unpublished work and ignored evidence were absent. See [probe](evidence/git-transfer-probe.py) and [result](evidence/git-transfer-result.json). This tests Git transport, not SDD instructions or agent decisions.

**Selected correction for planning:** Keep the handoff on the actual main/default integration branch, with branch-local copies maintained until integration. On startup, inspect local and remote workflow branches for work not integrated into their recorded parents. If no continuation branch is already explicitly selected, present candidates and request the branch even when there is only one candidate. No additional branch registry or default-branch locator is selected. Record the creation parent and branch-off checkpoint; Git history corroborates them but may not uniquely identify the original branch. Complete eligible work into that same parent, reconcile the handoff and return to its context without inventing continuation authority. Package/access prerequisites remain explicit. See [branch selection and return](#branch-selection-and-return).

**Owners:** sdd-manage branch/startup policy, sdd-orient and target AGENTS guidance. The branch-selection design decision is now resolved for planning; implementation and rechecks remain pending. **Objective recheck:** Start on default with active unmerged work elsewhere, then test one versus several active contexts, missing plugin and unavailable required inputs. Do not silently select another branch/version or describe a partial clone as a complete handoff.

### R-004 — Fresh-context coverage does not establish repository-only continuation

**Priority:** Medium. **Type:** acceptance evidence/coverage gap for the requested extension. **Confidence:** High from the selected contracts; no live result inferred.

**Located evidence:** The catalog already defines fresh interruption continuations for A-015/A-016/A-019/A-023 and related cases. `acceptance/textstats/cases/assessor/INTERRUPTIONS.md`, step 5, supplies the receiver with current product state/authorization and pinned skills. Its optional uncontrolled-termination/cross-machine extension preserves and imports retained work/index objects. `cases/consumer/continuation.md` and `uncontrolled-continuation.md` explicitly use an accompanying current-state handoff. A-033 concerns installed-client discovery and release-message preparation.

These are valuable existing recovery tests. They do not explicitly require the receiver to obtain the original range, preapproval, tracking override and active workflow solely through AGENTS-led files from an ordinary clone, with no coordinator-provided state/authority summary. It would be inaccurate to report either no fresh-context coverage or a demonstrated repository-only pass.

**Proposed correction:** Extend relevant existing contracts with repository-only transfer variants. Give the receiver a continuation request, target checkout, allowed tools and its genuine instruction/package facilities; put the scope/decision evidence in the repository through the sender's workflow, rather than injecting the expected state in the continuation prompt. Include same-worktree and clean-clone variants, intentional omissions/staleness and correct refusal boundaries. Assess a genuinely separate receiver independently; component extension and actual trial execution remain separate work.

**Owners:** TextStats coordinator/assessor contracts, with sdd-manage/sdd-orient acceptance criteria. **Objective recheck:** Demonstrate recovery of the exact authorized scope and stopping point, preservation of pending HIL and no duplicate hosted effects; fail hidden-context dependence. Report model/client/source and genuine isolation limits.

## Consolidated handoff decisions

The discussion after U-002 selects the following design for revision planning. The final checkpoint cadence supersedes the earlier proposal to refresh at every commit. These decisions record the accepted design before execution; the revision report owns actual implementation and verification claims.

### Ownership and record

Add `skills/sdd-manage/references/continuity.md` as the canonical subworkflow, routed through the coordinator for all composite workflows and focused calls affecting them. Orientation observes and reconstructs state; each active owner supplies its facts and persistence. Keep PLUGIN concise, with a pointer to this capability rather than an independent procedure. AGENTS directs agents to the handoff and coordinator; capability discovery remains read-only and does not select or execute continuation.

Use tracked `docs/dev/HANDOFF.md` as a durable project checkpoint. Keep it on the actual main/default integration branch and inherit it on workflow branches. The branch-local copy advances at its own checkpoints until integration. Initial creation must respect main preparation's pre-write gate and existing integration rules; it does not add a fifth file to DOCS-001's four-file presence test or justify an early merge of unfinished documents.

The checkpoint identifies its workflow and evidence boundary, with these four groups:

1. Active workflow/stage and links to governing documents, tasks and evidence.
2. Authorized range, exact stop, pending approvals and scoped preapprovals/overrides, with decision sources.
3. Working/target branches, recorded creation parent and branch-off checkpoint, suspended parent and return boundary.
4. Pending work or hosted operations, blockers and the next eligible action as of that checkpoint.

Keep only a brief progress summary and links to completed phase/campaign evidence. Necessary package/version/setup availability, dirty-work limitations and reporting preference can be recorded or linked within those groups. Do not duplicate full task lists, verification logs, issue inventories or conversation history. No additional incremental handoff files or stored patch series are selected.

### Refresh cadence and recovery

- **Establish at entry:** create or reconcile the active workflow checkpoint with its actual scope and parent. First adoption uses current evidence; it does not manufacture past approvals.
- **Main/feature implementation:** refresh automatically on completed milestones; phase/workflow completion and integration reconcile the final checkpoint. A completed milestone inside an incomplete main phase does not authorize a merge.
- **Revision:** refresh automatically at finalization, including the parent return context. Incremental revision progress stays in existing campaign records. Nested entry/return preserves the suspended parent even before finalization.
- **Preparation and other operations:** use the existing workflow entry and completed preparation/operation boundary; intermediate document approvals and progress remain in DOCS_TASKS and existing evidence. Do not create a second per-document handoff checklist.
- **Between checkpoints:** ordinary task commits do not require a handoff edit or a new handoff review procedure. Persist changed grants, revocations, stops and pending effects in their existing owning records when they arise. Refresh earlier only when those records cannot adequately preserve a consequential change, or an explicit transfer is requested.

On continuation, find the checkpoint, inspect the relevant current owners and Git changes since it, then reconstruct the reached state and actual remaining authority. An older handoff is expected between milestones; do not label it broken solely because later task commits exist. Missing, contradictory or unresolvable checkpoint/decision evidence is a separate recovery problem. Do not infer acceptance or a larger range from ready tasks.

Identify checkpoints through a stable workflow/milestone identity and the containing handoff commit, with explicit baseline/end commits in completion evidence where useful. Do not embed a commit's own SHA in its file or create a follow-up commit just to record it. Git provides milestone/phase diffs on demand; no exported patches are required.

### Branch selection and return

At coordinator startup, discover local and remote workflow branches and establish whether their work is integrated into their recorded parents. Include preparation and phase branches where they carry unfinished work. Orientation inspects available refs without fetching or switching; the coordinator owns any permitted refresh and selected checkout. Distinguish stale refs, unknown remote state, completed integration awaiting push, suspended parents and unfinished children.

When continuation is not already explicitly selected, present candidate branches and request the choice, including when there is only one candidate. Do not silently pick a branch because it is newest or uniquely named. An explicitly selected branch or sufficient established continuation context does not need the same question repeated. With no unfinished candidate, report the reached main/default checkpoint without resurrecting a completed range.

New workflow branches record their actual creation parent, branch-off commit and return target; completion returns to that same parent. History is corroboration, not a reliable way to recover a branch name in every case. Existing preparation rules that permit a default-based branch with a different phase target need revision before claiming this invariant. Preserve eligible existing workflows and resolve ambiguous legacy provenance rather than rewriting history.

During a child merge, deliberately reconcile HANDOFF to restore the parent's suspended stage and stop, retaining a concise child outcome/evidence link. A child already merged into its unfinished parent must not appear as an independently pending campaign merely because neither branch is in main yet. Return the worktree/context to the parent, without automatically resuming its tasks. Explicit no-merge, local-only or narrower human boundaries continue to apply.

### Transfer and external state

An explicit handoff command checks the checkpoint and intervening records, necessary transferable files, publication and receiving prerequisites. It is optional convenience, not a prerequisite for ordinary cross-agent recovery. Mid-milestone work remains recoverable without that command. Existing preservation rules apply; discarding incomplete work requires actual authority and is not a new automatic recovery policy.

Record operations that occur after a checkpoint commit as requiring confirmation, rather than claiming its own push, later issue closure or eventual merge already succeeded. The receiver reads actual hosted/Git state before retrying; no chain of bookkeeping commits is needed. Credentials, host permissions and required package availability are provisioned separately. A fresh clone cannot recover unpublished, ignored or missing bytes merely because the handoff names them.

## Scenario assessment

These are source walkthroughs and proposed objective rechecks, not executed consumer cases.

| Scenario | Existing coverage and required extension |
| --- | --- |
| Pause after first PROJECT approval | DOCS_TASKS/accepted-state evidence is durable. The receiver also needs the current request and next checkpoint. |
| Pending SPEC review or changed preapproval | Existing decision-preservation rules apply; the current locator must find the latest scope/revocation and retain the pause. |
| Partially implemented milestone | Task commits/checklist recover results; retain the authorized remaining range rather than execute every ready task. |
| Tracking declined or scoped local-only | Existing tracking evidence records the human choice; startup must locate it before applying template defaults. |
| Owned and unrelated dirty work | Existing ownership/recovery rules apply. The handover must identify which bytes survive the chosen transport without claiming missing work is completed. |
| Child revision or steering completed | Existing return-without-resumption rule is explicit; the current record must point to the parent pause instead of a stale execution instruction. |
| Partial feature incorporation | Existing unique-owner, source-retention and acceptance-reassessment rules apply; retain the selected target set and deferred owners. |
| Hosted request has unknown outcome | Preserve the specific identity and inspect actual state before retry; an old local result does not prove completion. |
| Fresh clone starts on default | Inspect unmerged workflow branches against their recorded parents; present candidates and ask which to continue unless already selected. No extra branch registry is selected. |
| Tasks committed after the last milestone handoff | Recover the delta from the owning list, decisions/evidence and Git. Do not require a handoff edit for each task. |
| Completed child is absent from main but contained in its parent | Recognize integration into its recorded parent; restore the parent context without listing the child as unfinished. |
| Two active branches or missing plugin | Preserve ambiguity/missing-facility handling. Do not guess which workflow or replacement package the human intended. |
| Handoff missing or inconsistent with source | Recover derivable facts and ask only for consequential missing decisions; never treat stale readiness or scope as a new grant. |
| Workflow complete | Leave an accurate completed/paused next boundary; a new agent must not resurrect the old range automatically. |

## Revision planning disposition

The [detailed revision plan](REVISION-PLAN.md) integrated R-001–R-004 and the selected handoff design. Planning itself changed no runtime instructions. The subsequent execution implemented HANDOFF/template, coordinator and owner routes, branch policy, coverage and package checks; the [revision report](REVISION-REPORT.md#finding-disposition) records final source/coverage dispositions without attributing live receiver behavior to those checks.

## Coverage, verification and disposition

U-001 covered entry/context and durable evidence. U-002 covered branch/campaign/feature return, selected hosted/release interfaces, the TextStats catalog and interruption handoff contracts, and transfer alternatives. Complete relevant procedures were read for human review, main preparation, orientation inspection, implementation startup/range, tracking/phase activation, agent orientation and revision modes. PLUGIN, branch/Git, completion/feature/steering/backend and acceptance sources were inspected at the consequential sections stated above, not as a comprehensive unrelated content review.

The disposable native Git probe ran on Linux/Python 3.12.14 and passed its six transport assertions. New/updated campaign Markdown and local links were checked, note/source scope was inspected and prior closed packages were preserved through path diffs. No support/publisher suite or structural package validator was rerun: this campaign changes only review records, and those checks do not establish the requested receiver behavior. No live agent/client/provider trial was run.

Planning verification on 2026-10-17 checked the three active records and this campaign's shared-index row: all 22 local links/anchors resolved; heading/list separation, blank-line and indentation checks passed; nine unique ordered actions and 22 scenario criteria were present. The exact four changed paths are those three records and the shared index. Package/source instructions, acceptance, the original Git evidence and all closed campaign contents remain unchanged. This verifies the planning delivery, not the proposed continuity behavior.

The baseline assessment identified two High capability gaps (R-001/R-002), a Medium transfer-policy decision (R-003) and a Medium acceptance coverage/evidence gap (R-004). Execution resolved the source and coverage changes through coordinator-owned checkpoint recovery, milestone/finalization refresh, branch selection and parent return. Source/native/support checks do not guarantee successful receiver behavior: live agent/client/provider acceptance remains Not run. Final persistence and campaign closure follow the revision report and verified Git integration, without changing baseline observations into runtime results.
