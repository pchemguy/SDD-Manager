# SDD Manager handoff

Nested campaign 084_e034a38 has finalized the focused Windows shell probe revision and is ready for its authorized parent integration. Parent prerelease campaign 081 remains open and suspended; children 082/083 remain closed.

## Workflow and scope

- Owner/stage: sdd-manage; finalized child revision, publication and explicit parent integration pending. Reporting: Standard; Minimal and Explicit remain available.
- [Child plan](reviews/084_e034a38-windows-shell-probe/REVISION-PLAN.md), [child evidence](reviews/084_e034a38-windows-shell-probe/REVISION-REPORT.md), [parent preparation](reviews/081_5b2442e-prerelease/REVISION-REPORT.md), [parent plan](reviews/081_5b2442e-prerelease/REVISION-PLAN.md), [index](reviews/README.md).
- Human authorizes removal of ` /d` from the documented CMD probe and the full campaign through closure. Align the existing native test's matching probe; preserve unrelated fixture commands, adapter bytes and the required quote-conversion notice.

## Branches and return

- Working/publication branch: revision/084_e034a38-windows-shell-probe on origin, pchemguy/SDD-Manager. Full branch-off: e034a38bcdd6f18fd028af1f831730fe9e558587.
- Creation parent, integration target and return branch: revision/081_5b2442e-prerelease at that verified published checkpoint. Parent preparation remains suspended. A clean older local checkout was recovered to the actual published parent before child setup; unrelated branches/worktrees were preserved.
- Publish/read back each owned checkpoint before advancing. Finalize and explicitly merge into the refreshed parent, reconcile HANDOFF to the parent's suspended preparation context, verify/publish and confirm return. No main integration or parent continuation follows.

## Verification, retained inputs and stop

Repair checkpoint 4befe7b5f061286f317a1abaaf2149472342f026 was published and exactly read back after opening/plan 10e6d068d70d54185c0f9fe2ce5afd6f65edbbc7. The guide and matching test now use `cmd /c echo SDD_CMD_PROBE_%SystemDrive%`; exact two-file comparisons, Python syntax, links/style and frozen-path checks pass. The unchanged 0.15.1 manifest and exact 154-file verification package are recorded in the child evidence. Adapter, workflow and release inputs are preserved.

Host is Python 3.12.14/Linux; all six Windows contracts were discovered and skipped. [Native Windows CI](https://github.com/pchemguy/SDD-Manager/actions/runs/39282149988) for the published repair was last observed queued during reported Actions degradation. The human directed “bail out on github test”; stop waiting/polling and use the plan's passing static/package evidence for bounded child closure. No further CI work is required in this child, and no native pass or live-client shim activation is claimed.

Parent version remains 0.15.1. Its earlier prepared source ddb86fc926ddc2cfbd15946946c75a9c3672645d and notes/handoff/package snapshots remain historical; child amendments require refreshed association when 081 is separately resumed. Do not rewrite release inputs or create a tag/release/dispatch/install as part of this child.

Publish/read back this final child evidence, then complete only the authorized explicit child integration/publication/return, restoring the parent's suspended handoff. Stop with 084 closed and 081 open/suspended. Recover actual final-child/merge SHAs and later decisions from Git; checkpoints cannot prove their own future publication. Keep protected credentials and ignored inputs outside reports and arrange their separate safe availability on transfer.
