# Cross-agent continuity review

## Campaign and state

- Campaign: `071_03b8d6c`; [review plan](REVIEW-PLAN.md).
- Reviewed baseline: `03b8d6c9e06f22bad62a00f53190e99f90386295`.
- Working branch: `revision/071_03b8d6c-portability-review`; target: main.
- State: U-001/U-002 assessed; review complete, campaign open. No plugin/source fixes or live acceptance performed.

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

**Proposed correction:** The coordinator should own one concise current-context contract, exposed through a stable AGENTS pointer and supported without PLUGIN.md. A tracked `docs/dev/HANDOFF.md` is a suitable proposed default; an established project equivalent can satisfy the same contract. Store current request/scope, workflow/owner, exact range/stop, material human decisions and evidence pointers. Keep TASKS, governing documents and their reports authoritative.

**Owners:** sdd-manage, sdd-orient and target AGENTS template; affected workflow owners supply their scoped facts. **Objective recheck:** Remove the sender conversation, supply only the repository and a continuation request, and verify recovery of two distinct recorded scopes without guessing or loading unrelated historical campaigns.

### R-002 — A cross-agent transfer lifecycle is not defined

**Priority:** High for the requested portability objective. **Type:** capability gap. **Confidence:** High from source inspection.

**Located evidence:** Human-review decision persistence and tracking evidence are explicit, but destination/refresh rules are distributed. `skills/sdd-implement/SKILL.md:40` records selected task IDs/exits; `references/startup-and-continuation.md:34` keeps the range visible. `skills/sdd-manage/references/coordination.md:77` says no extra workflow-state artifact is required. None of these defines a cross-agent preparation/consumption protocol tying a discoverable latest context to publication, stale-state checks and retirement.

**Consequence:** A handoff file added without producer/receiver rules could remain stale after a changed range, revoked preapproval, steering return or completed workflow. A same-worktree handover can expose unsaved/local files that a fresh clone lacks. Repeating a completed hosted effect from an old handoff would also conflict with the existing readback-first lifecycle.

**Proposed correction:** Define material update points, responsible owner and checkpoint persistence; an explicit handover verifies publication and necessary file availability. The receiver loads the record, compares it with actual Git/current instructions and relevant evidence, rechecks uncertain hosted effects, then resumes the earliest eligible operation or reports a specific unresolved decision. Superseded/completed work must lose its active-execution status. Preserve existing atomic task/document commits and scope-safe recovery; do not add a per-message journal or a second checklist.

**Owners:** sdd-manage lifecycle; sdd-orient observation; implementation/preparation/steering/feature/campaign/reporting owners update their own handoffs. **Objective recheck:** Assess changed/revoked scope, stale records, interrupted publication, dirty ownership and completion/steering return across a clean active-branch clone. A stale green summary must not waive a current gate.

### R-003 — The starting checkout and plugin source need an explicit transfer rule

**Priority:** Medium. **Type:** design boundary requiring a decision. **Confidence:** High; source review plus native Git experiment.

**Located evidence:** `skills/sdd-manage/references/branch-management.md:8–18` preserves actual branch/target identities and leaves incomplete workflows on their branches. `assets/AGENTS_TEMPLATE.md:5` loads an installed or repository-local plugin and blocks missing availability; it does not select or provision an exact package for another client. Main preparation reuses assets from the same installed/pinned source. Capability discovery is read-only and does not choose or execute a continuing workflow.

An active handoff committed only to a design-docs/phase/feature/revision branch is not necessarily the record read by an agent starting on default. Available remote branches do not select the human's intended workflow, particularly with concurrent work. Likewise, a repository's instructions can name a required plugin without supplying that plugin or credentials to a new host. Existing safe-block behavior is appropriate; it is not a complete zero-extra-context transfer guarantee.

**Executed evidence:** A disposable local Git experiment passed six transport checks: a default clone checked out main and its main handoff; the published active branch was discoverable; explicitly cloning that branch obtained its committed handoff; unpublished work and ignored evidence were absent. See [probe](evidence/git-transfer-probe.py) and [result](evidence/git-transfer-result.json). This tests Git transport, not SDD instructions or agent decisions.

**Proposed correction:** State the supported transfer modes. A prepared handover of the same worktree or selected published branch needs no default-branch selector. To support a fresh default-branch clone with no branch hint, define a stable discoverable locator on default or an explicit fixed published ref; it must identify the selected active context without merging unfinished work. Multiple eligible workflows need an explicit selection rule or a targeted question. Record the intended plugin source/version and access/install prerequisites; provide the package in-repository or establish its availability separately.

**Owners:** sdd-manage branch/startup policy, sdd-orient and target AGENTS guidance; user selects the intended fresh-clone guarantee. **Objective recheck:** Start on default with active unmerged work elsewhere, then test one versus several active contexts, missing plugin and unavailable required inputs. Do not silently select another branch/version or describe a partial clone as a complete handoff.

### R-004 — Fresh-context coverage does not establish repository-only continuation

**Priority:** Medium. **Type:** acceptance evidence/coverage gap for the requested extension. **Confidence:** High from the selected contracts; no live result inferred.

**Located evidence:** The catalog already defines fresh interruption continuations for A-015/A-016/A-019/A-023 and related cases. `acceptance/textstats/cases/assessor/INTERRUPTIONS.md`, step 5, supplies the receiver with current product state/authorization and pinned skills. Its optional uncontrolled-termination/cross-machine extension preserves and imports retained work/index objects. `cases/consumer/continuation.md` and `uncontrolled-continuation.md` explicitly use an accompanying current-state handoff. A-033 concerns installed-client discovery and release-message preparation.

These are valuable existing recovery tests. They do not explicitly require the receiver to obtain the original range, preapproval, tracking override and active workflow solely through AGENTS-led files from an ordinary clone, with no coordinator-provided state/authority summary. It would be inaccurate to report either no fresh-context coverage or a demonstrated repository-only pass.

**Proposed correction:** Extend relevant existing contracts with repository-only transfer variants. Give the receiver a continuation request, target checkout, allowed tools and its genuine instruction/package facilities; put the scope/decision evidence in the repository through the sender's workflow, rather than injecting the expected state in the continuation prompt. Include same-worktree and clean-clone variants, intentional omissions/staleness and correct refusal boundaries. Assess a genuinely separate receiver independently; component extension and actual trial execution remain separate work.

**Owners:** TextStats coordinator/assessor contracts, with sdd-manage/sdd-orient acceptance criteria. **Objective recheck:** Demonstrate recovery of the exact authorized scope and stopping point, preservation of pending HIL and no duplicate hosted effects; fail hidden-context dependence. Report model/client/source and genuine isolation limits.

## U-002: Handoff recommendation

Use a small tracked **`docs/dev/HANDOFF.md`** as the proposed default current-context record, with an established equivalent allowed. Link it from a dedicated continuity section in target AGENTS.md. The coordinator owns the protocol; orientation reads/validates it, and active workflow owners maintain their facts. PLUGIN.md can expose that capability but must not own its only definition.

Keep capability discovery unchanged. Its read-only inventory is a separate operation; a continuation request routes through the coordinator after discovery. Loading AGENTS or a handoff must not itself turn a discovery-only request into implementation.

### Proposed record contents

| Information | Store or point to |
| --- | --- |
| Active work | Workflow/variant, stage, owner, campaign/phase and current governing documents/task list/report paths. |
| Current request and stop | The accepted objective, selected task IDs or preparation/revision range, exclusions, allowed next operation and exact human stopping boundary. Distinguish active, paused, blocked, awaiting decision and complete. |
| Human decisions | Pending reviews; accepted state/evidence links; applicable preapproval and conditions/revocations; tracking/local-only choices and other material overrides, with human source/provenance. Preserve existing decision records rather than duplicating their full histories. |
| Branch and return identities | Selected working/target branches, relevant starting checkpoint and suspended parent/return boundary. Do not mirror every Git status or embed a commit's own SHA. |
| Evidence and pending effects | Links to tested source/results and limits; unresolved verification, publication, integration and specific hosted operations/identities needing readback. A stored claim does not replace actual external state. |
| Preserved work and prerequisites | Necessary dirty-work ownership/disposition and blockers; required package source/version, setup commands and transferable input locations. Record availability limits without secrets or transient helper paths. |
| Next action | The earliest unfinished eligible operation, or the concrete human decision/facility needed. An optional selected reporting profile can be retained here without a separate settings file. |

TASKS/DOCS_TASKS, governing documents, current review reports and Git remain their canonical owners. The handoff points to them and supplies the current intent/decisions that cannot be inferred from them. It is not a second checklist, a copy of the conversation, an issue inventory or a chronological journal; Git retains its changes.

### Producer and receiver lifecycle

1. **Establish:** Create/reconcile the current record during authorized adoption or entry to an active workflow, preserving controlling instructions and existing project records. For main preparation, its creation is subject to the existing pre-write tracking gate. Do not silently change the four-file DOCS-001 preservation/mixed-presence checkpoint to add another member.
2. **Maintain:** Update after a material request/range/decision change, stage or branch transition, interruption/blocker, steering/child return and completion. Include needed updates in the owning verified task/document/campaign checkpoint where possible. Do not add a commit per response or detach task completion from its required atomic commit.
3. **Prepare a transfer:** Check that the selected context and all necessary non-secret inputs are actually available in the destination mode. Publish eligible owned records/commits and verify remote containment. Do not fake task completion, force-push or overwrite unrelated work to make a handoff look clean. Unpublished/ignored/index state requires explicit safe transfer or a qualified local-only handover; an ordinary clone cannot reconstruct absent bytes.
4. **Receive:** Follow AGENTS, load the current record and only its relevant owners/evidence, establish actual branch/worktree and compare current source, decisions and readiness. Finish existing pending work before selecting another task. Treat absent, stale, conflicting or foreign-scope data as a bounded recovery/decision problem; do not infer acceptance, select a broader range or blindly replay a hosted mutation.
5. **Return or finish:** Restore the proper parent/owner context without auto-resuming it. Mark completion/pause and remove stale active-work instructions; retain useful evidence links and required human stops. A later workflow supersedes current context explicitly while Git preserves history.

Credentials, host permissions and installed capabilities must be provisioned separately where the repository does not supply them. Preserve the scoped human project decision; the file cannot grant a permission that the receiving environment lacks. Read back hosted state when required instead of treating a saved issue/release summary as current truth.

### Choosing the storage approach

| Approach | Assessment |
| --- | --- |
| Put all live state in AGENTS.md | Easy initial discovery, but mixes durable instructions with changing execution state and conflicts with its existing concise-navigation role. Not recommended. |
| Use existing reports only | Can satisfy the objective if current context is complete and uniformly discoverable, but stage-specific report locations and update timing need a common contract. A new filename alone is not mandatory. |
| One current handoff linked from AGENTS | Recommended: a stable read path and a bounded current-state owner, with references to existing evidence. It still needs update/validation rules and the selected checkout guarantee. |

For the strongest interpretation—fresh clone on default, no branch hint—the stable locator is an additional design requirement. Choose its location/publication policy before implementation. Do not claim that placing a handoff on an arbitrary unmerged branch alone achieves that goal, and do not merge unfinished project work to expose it.

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
| Fresh clone starts on default | The native probe shows the selected branch is not automatically its working checkout. Define a discoverable active-context selector. |
| Two active branches or missing plugin | Preserve ambiguity/missing-facility handling. Do not guess which workflow or replacement package the human intended. |
| Handoff missing or inconsistent with source | Recover derivable facts and ask only for consequential missing decisions; never treat stale readiness or scope as a new grant. |
| Workflow complete | Leave an accurate completed/paused next boundary; a new agent must not resurrect the old range automatically. |

## Proposed revision scope

1. Decide the supported checkout guarantee and concurrent-work selection rule (R-003).
2. Define the canonical coordinator continuity contract and a small record/template, plus AGENTS startup/navigation and orientation loading (R-001/R-002). Keep PLUGIN concise and preserve discovery-only behavior.
3. Join the existing preparation, execution, steering, feature/campaign return, tracking and evidence producers to that contract. Retain existing first-approval/task atomicity, actual decision provenance and frozen-record boundaries.
4. Add the selected repository-only variants to existing TextStats contracts, including omissions/staleness and correct stops (R-004). Actual live execution remains separately selected.

This is a proposed correction queue, not an accepted revision plan or implemented artifact. No HANDOFF.md, package template or workflow instruction was added by this review.

## Coverage, verification and disposition

U-001 covered entry/context and durable evidence. U-002 covered branch/campaign/feature return, selected hosted/release interfaces, the TextStats catalog and interruption handoff contracts, and transfer alternatives. Complete relevant procedures were read for human review, main preparation, orientation inspection, implementation startup/range, tracking/phase activation, agent orientation and revision modes. PLUGIN, branch/Git, completion/feature/steering/backend and acceptance sources were inspected at the consequential sections stated above, not as a comprehensive unrelated content review.

The disposable native Git probe ran on Linux/Python 3.12.14 and passed its six transport assertions. New/updated campaign Markdown and local links were checked, note/source scope was inspected and prior closed packages were preserved through path diffs. No support/publisher suite or structural package validator was rerun: this campaign changes only review records, and those checks do not establish the requested receiver behavior. No live agent/client/provider trial was run.

Four findings remain **Open**: two High capability gaps (R-001/R-002), one Medium design boundary (R-003) and one Medium acceptance gap (R-004). Existing recovery can support many transfers when its evidence is present; it does not currently guarantee AGENTS-led repository-only continuation across the full requested boundary. The recommended change is a discoverable current-context contract with maintained producer/receiver rules, ordinarily represented by one tracked handoff file. The campaign remains open and unmerged for the human's revision decision.
