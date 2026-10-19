# SDD Manager handoff

Prerelease campaign 081_5b2442e remains open and suspended. Child 084 has finalized the requested Windows shell probe alignment; its containing explicit parent merge, verified target publication and confirmed return establish child closure. Children 082/083 and earlier campaigns remain closed.

## Workflow and retained scope

- Owner: sdd-manage. Parent stage: prepared-candidate checkpoint, suspended after nested revisions. Reporting: Standard; Minimal and Explicit remain available.
- [Parent plan](reviews/081_5b2442e-prerelease/REVISION-PLAN.md), [parent evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md), [child plan](reviews/084_e034a38-windows-shell-probe/REVISION-PLAN.md), [child evidence](reviews/084_e034a38-windows-shell-probe/REVISION-REPORT.md), [index](reviews/README.md).
- The human selected full child execution/closure and then directed “bail out on github test.” CI waiting/polling has ended; no further CI work is required in child 084. Parent preparation, main integration, publication of a product release and installation are not resumed by child completion.

## Child result and Git boundary

- Child branch: revision/084_e034a38-windows-shell-probe. Original branch-off: e034a38bcdd6f18fd028af1f831730fe9e558587. Opening/plan: 10e6d068d70d54185c0f9fe2ce5afd6f65edbbc7. Published repair: 4befe7b5f061286f317a1abaaf2149472342f026. Final published child tip: f929044e861414facf4d46ed6cb5c311b416ec9d. Each checkpoint was exactly read back before advancing.
- Creation parent, integration target and actual return branch: revision/081_5b2442e-prerelease on origin, pchemguy/SDD-Manager. Refreshed pre-merge parent: e034a38bcdd6f18fd028af1f831730fe9e558587. The explicit merge's two parents and subsequent exact target readback/clean worktree provide integration/publication/return facts; recover its actual SHA from Git rather than this commit's self-reference.
- The guide and matching existing native invocation now use `cmd /c echo SDD_CMD_PROBE_%SystemDrive%`. Exact source comparison, syntax, links/style and frozen-path checks pass. Adapter bytes, other fixture flags, workflow, manifest/version and release inputs are preserved. The exact 154-file verification package and reproducible hash are recorded in child evidence.
- Python 3.12.14/Linux discovered and skipped all six Windows contracts. The [native run](https://github.com/pchemguy/SDD-Manager/actions/runs/39282149988) for the published repair was last observed queued during reported Actions degradation. Native execution is unverified; no runtime pass or live-client shim activation is claimed. The human-ended wait is an evidence limit, not a source failure.

## Parent inputs and stop

Version remains 0.15.1. Earlier prepared source ddb86fc926ddc2cfbd15946946c75a9c3672645d and its notes/handoff/package association remain historical. Nested source amendments require refreshed history coverage, complete notes and exact source/body/package association when parent continuation is separately selected. Child verification packages do not replace that preparation.

The parent's eventual target/return is main. This recovered workspace's local main remains 425b3eef464e74bd940d061b07cf103c5bc17d4c; origin/main was observed at 5b2442e3315da91bcbc8ccd0efc14c0c59106b27. Neither is advanced by this child. Refresh actual target state when parent integration is authorized.

Finish only the containing child merge's verification, target publication/readback and return confirmation. Then stop on revision/081_5b2442e-prerelease with 084 closed and 081 open/suspended. Do not continue preparation, alter release inputs, merge to main, create a tag/release/dispatch or install a plugin. Preserve closed child records. Keep protected credentials and ignored inputs outside reports; arrange their separate safe availability on transfer.
