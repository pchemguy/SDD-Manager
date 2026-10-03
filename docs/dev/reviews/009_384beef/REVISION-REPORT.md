# TextStats diagnostic test-project integration revision report

## State and scope

Campaign `009_384beef`, baseline `384beefb6186348af9b100de9bec2f5a4a024692`. The user authorized execution of [REVISION-PLAN](REVISION-PLAN.md). Execution branch: `revision/009_384beef-textstats-test-project`, starting at `78d51c4`. Established target: `feature/architecture-revision`.

The reusable test bundle is being implemented and verified. No new live consumer campaign has started. Live acceptance requires an explicitly supplied dedicated test repository; none has been supplied for this run. The previous AgentPlayground campaign is historical evidence and is not the new destination.

## Diagnostic summary

- **Demonstrated so far:** reviewed coordinator documentation and schemas; portable helper self-tests, including fresh-clone restoration of pending files, index intent and conflicted merge state. These checks establish infrastructure behavior, not new SDD Manager consumer acceptance.
- **Issues observed:** document review identified an ambiguous repeated stop on resume. Implementation inspection identified recovery of an unreferenced incoming merge commit as an edge requiring explicit export coverage. Both were addressed in the bundle; independent helper review reproduced destination reconciliation, symlink containment and SSH URL defects. Their first fixes passed 40 tests. Re-review identified incomplete shallow ancestry as a remaining reconciliation defect. Commit `3b4049e` corrected it; independent re-review accepted both specification and quality.
- **Actions taken:** added the test-project entry/procedures/schemas and support tools. Clarified one-shot reached stops. Added recovery and checker sensitivity tests. No SDD Manager plugin package files were changed.
- **Plugin changes proposed:** none on the basis of this infrastructure work. The new live campaign and its causal diagnosis remain pending; previous findings are provenance, not new outcomes.

## Interface rulings

| Boundary | Agreed contract |
| --- | --- |
| Documents / helpers | Strict version 1 inputs and run-state schemas. All helpers accept `--inputs` and `--output`; observation/assessment also require `--run-state`. Credentials are never configuration fields. |
| Documents / cases | Catalog IDs A-001–A-027; consumer preparation at `cases/consumer/preparation.md`; separate consumer and assessor assets. |
| Helpers / cases | Runtime identity checks bind actual validated checkpoint refs. Literal deterministic checks require independent actual evidence; `agent_behavior_assessed: false` prevents automatic case acceptance. |
| Bundle / live acceptance | Directory-only bootstrap must request a missing repository before setup writes. Build and verify infrastructure first; retain live execution pending its destination. |

Committed source is the default tested identity. Optional `source_mode: dirty` explicitly fingerprints a dirty snapshot. Optional `--workspace` selects a distinct fresh local workspace; preparation refuses occupied resources and never drives resumption. Initially empty dedicated remotes permit bounded setup without guessing completed product history, branch authorization or publication.

A reached, independently recorded `stop_after` is consumed on requested continuation inside the remaining authorized scope. Pending evidence/publication is completed first. Unreached stops persist; exhausted scope requires new scope. Original stop/input evidence remains retained.

Helpers never authenticate, push, mutate hosted resources or perform consumer workflows. Publication observation uses actual remote readback, with unavailable ancestry/access retained as unknown. Recovery exports remain local-only until their publication is independently verified.

## Execution ledger

### Task 1 — Documentation and schemas: complete

Commit `63322e6` added eight coordinator documents, strict inputs/run-state schemas and root README navigation. Independent specification review passed; quality review approved with low-severity DOC-001 stop clarification. Commit `cdd2451` implemented the agreed one-shot rule. [Implementation evidence](evidence/task-1-report.md) and [independent review](evidence/task-1-review.md) are retained.

Cross-task links to helpers and case assets are checked after their implementation, rather than treated as missing Task 1 work.

### Task 2 — Portable support: complete

Commit `fb5bbf1` added bounded preflight/preparation, actual-state observation/recovery exports and deterministic assessment. The full support suite collected and passed 33 tests using disposable local repositories/remotes. Tests reconstructed staged/unstaged/binary/symlink/deleted work and conflict state in fresh clones, including an incoming merge commit absent from named branches. Checker fault sensitivity evidence is retained separately. The first RED run demonstrated absent helper interfaces; it is not represented as behavioral failure evidence. Independent review reproduced four defects: pending-push readback could ignore its exact destination, dangling workspace symlinks could evade occupancy refusal, dirty-source pinning could follow external parent symlinks, and normal SSH URLs were rejected. Commits `24dc609` and `5fa622e` fixed these and passed 40 tests. Scoped re-review confirmed the concrete corrections but reproduced a remaining shallow-ancestry uncertainty defect in publication reconciliation. Fix round 2 (`3b4049e`) introduced conservative shared ancestry checks; all 41 support tests passed. Independent re-review accepted Task 2, with all four findings addressed and no new fix-diff breakage. Original implementation, review failures and correction evidence remain retained. [Implementation report](evidence/task-2-report.md), [independent reviews](evidence/task-2-review.md), [regression RED](evidence/task-2-shallow-red.log) and [final GREEN](evidence/task-2-shallow-full-green.log) are retained.

### Task 3 — Case catalog and isolated handoffs: complete

Task 2 passed its support review gate. Task 3 implementation starts at `08b700b`: preserve all 27 original intents, runtime prerequisites and separate expectations; do not copy completed records or product implementation. Commit `909e7fc` added all 27 cases, isolated requests, independent guides/literals, catalog validation, handoff rendering and actual-output capture. All 58 support/catalog tests passed. Independent review found one blocker, T3-R1: failed/timed-out nested capture could discard first-attempt provenance. Commit `5bb917d` preserves sanitized failed-capture provenance, partial channels and prior attempts without successful literal evidence. All 64 support/catalog tests passed; independent specification and quality re-review approved Task 3. [Implementation report](evidence/task-3-report.md), [independent review](evidence/task-3-review.md), [original reproduction](evidence/task-3-review-repro.log), [regression RED](evidence/task-3-fixwave1-red.log) and [final GREEN](evidence/task-3-fixwave1-tests.log) are retained. Root retains this ledger.

### Task 4 — Fresh-context bootstrap: active; live acceptance follow-up open

Directory-only missing-input behavior can be checked after the bundle is complete. Actual setup, fresh consumers/assessors, controlled and unexpected interruption recovery, hosted reconciliation and the final diagnostic report require the dedicated test repository and available facilities. Missing facilities remain Blocked/Not run, never Passed.

## Follow-up

- [ ] **Live acceptance on a dedicated test repository.** Obtain an explicitly supplied repository URL or checkout path and execute the completed bundle through fresh consumers and independent assessors. Cover real Git/GitHub lifecycle, controlled partial-work interruption and unexpected termination/resumption, then publish the final diagnostic report with retained original attempts and explicit findings, actions and plugin proposals. This is outstanding live acceptance work; helper self-tests and infrastructure reviews do not complete it. The [test-project README](../../../../tests/acceptance/textstats/README.md#follow-up-live-acceptance-on-a-dedicated-test-repository) records the same follow-up.

Copyable agent prompt (replace the placeholders):

```text
Run live acceptance for SDD Manager using <SDD-Manager-checkout>/tests/acceptance/textstats/.
Use the dedicated test repository <repository URL or existing checkout path>.
Read AGENTS.md in the bundle and follow its linked setup, execution, recovery and diagnostic procedures.
Use the full-github profile and the full supported case scope. Continue through authorized phases;
preserve actual state at interruptions and resume from retained evidence. Use fresh consumer and
independent assessor contexts, keeping assessor expectations out of consumer handoffs.
Use existing authentication first. If the repository is omitted, request it before setup writes;
request protected credentials only when required access is actually unavailable.
Publish the diagnostic report with coverage, original attempts and assistance, observed issues,
actions taken and concrete proposed SDD Manager changes, or the supported no-defect/no-change conclusion.
Do not modify the tested plugin package during the run. Record unavailable facilities as Blocked/Not run.
```

## Next action

Verify the complete bundle and directory-only bootstrap, complete whole-branch review, and publish source evidence. Live acceptance remains the explicit follow-up above; its invocation requests the dedicated destination when absent. Do not claim a new live campaign passed from infrastructure checks.
