# Windows shell handling revision campaign

## Opening

- Campaign: 089_8e719ce.
- Full starting baseline and branch-off: 8e719ce965526dbbae266009ff8c1114b7d70a80.
- Working branch: revision/089_8e719ce-windows-shell-handling.
- Creation parent and eventual return target: revision/081_5b2442e-prerelease.
- State: Open; awaiting the human's scope and direction.
- Authority: Open and publish the campaign only. The human explicitly instructed: “No proposals yet.”

## Boundary and persistence

The subject is Windows shell handling. No proposal, revision plan, assessment result, source repair or test change is defined or executed by this opening. Earlier conversation does not select a solution for this campaign. Parent 081 remains open/suspended. Do not resume prerelease work, alter release inputs/version, merge, close the campaign or install a plugin through this opening.

The parent worktree was clean and its published ref exactly matched the full starting baseline before branch creation. Opening records, navigation and HANDOFF are the only authorized file changes. Publish/read back the opening commit, then stop on the new campaign branch. Subsequent work awaits human direction; retain the ordinary per-commit publication and closed-record boundaries.

## Subsequent selected revision

The human has now supplied the Windows shell requirements and exact replacement shim. The opening-only boundary above records the original checkpoint; the subsequent grant selects the [revision plan](REVISION-PLAN.md). State: revision authorized, native regression and implementation pending. The earlier “No proposals yet” direction does not block execution of these now-supplied requirements. Campaign 089 remains open; no parent integration or closure is selected.

## A-001 — Native regression checkpoint

The source-only fixture now models the reported harness escaping, checks unchanged apostrophes, quoted native Node/script/argument paths, actual forge helper startup, output/status and temporary CMD-script sequencing. Inline command-chain tests and the removed conversion expectation were replaced. CI selects native Windows CMD with Node 22/24 and Python 3.11. The old adapter is deliberately retained for the first native regression run; this checkpoint is not a completed repair. Local Linux collection can only skip these Windows contracts and is not runtime evidence.

Native RED evidence: exact checkpoint adad9d5fc37e00abd8d58219d10353f55ca7087e failed on Windows CMD with Node 22/24 in [run 39397406340](https://github.com/pchemguy/SDD-Manager/actions/runs/39397406340). Each job collected seven tests and reported ten failing LF/CRLF subcases: literal escaped executable quotes, changed apostrophes and an invalid quoted CMD-script path. The remaining probe/status/literal-exclamation cases passed. The repair proceeds from observed native failure, not Linux skips. The actual helper-startup case subsequently uses bare node plus a quoted script path to match the reported module-loading boundary; the argv case still covers a quoted Node executable.

## A-002 — Policy, adapter and current routing

Replaced windows-shell-recovery.md with windows-shell.md: 490 words instead of 1,079, retaining one cohesive CMD policy and bounded setup procedure. The reference states unconditional PowerShell/pwsh unavailability, forbids agent-authored PowerShell/cmdlets, requires one command per call or a temporary CMD script, and distinguishes the unavoidable Antigravity wrapper from the generated CLI. It specifies the reported escaping and exact adapter recovery, plus a quoted-path readiness check before dependent use.

The bundled adapter is exactly the human-supplied text; apostrophe conversion and its activation warning are removed. Current plugin/manage/orient/implementation recovery routing, README, contributor guidance, source entry contract/assessment, CI path filters and the package snapshot fixture now refer to the Windows policy. No closed record was repaired or used as a compatibility target. Structural plugin validation passed; native GREEN verification remains pending publication of this source.

Local source checks passed: 139 support tests and 37 publisher tests. Scoped link/style inspection covered 16 changed maintained/active Markdown files, 543 local targets and 66 maintained fragments, with no missing targets or style candidates; 255 frozen targets were checked for existence only. Native Windows tests remain explicitly distinct from these local Linux checks. No live client, real PowerShell, demo tracking or release operation was invoked.

## A-003 — Verified revision checkpoint; campaign remains open

Exact published implementation 76ecc64b674ac627308203974a85a4cc7d2f3e35 passed all seven native Windows CMD contracts on both Node 22/24 with Python 3.11, [run 39398210283](https://github.com/pchemguy/SDD-Manager/actions/runs/39398210283). Downloaded job logs confirm seven tests and OK per job; no runtime case was skipped. Tests exercised LF/CRLF adapter bytes, quoted Node executable/script paths and arguments, actual forge helper --help startup, preserved apostrophes/exclamation marks, output/status and a temporary CMD sequence. The unchanged human-supplied adapter resolved the controlled failures. These are controlled native harness results, not an observed original Antigravity/Codex session or proof of agent policy compliance.

The exact committed candidate package passed pinned schema, exact 156-member inventory and identical rebuild checks: 463639 bytes, SHA-256 61932d03e72bdd82887c6edf7d5777d0f60a1e49644370b613ad6c9e377c2b03. It contains windows-shell.md, excludes windows-shell-recovery.md and preserves the supplied shim byte-for-byte. Five extracted CLI help checks passed. This archive identifies source 76ecc64 specifically; later evidence-only commits have different commit-stamped archive bytes. Version remains 0.15.1; release inputs were not refreshed.

Content/routing assessment traced the unconditional Windows rules through plugin/manage/orient entry and implementation recovery, including a known hardcoded wrapper before dependent use, quoted-path readiness, separate calls versus a temporary script, and failed-setup/failed-retry stop. Other execution hosts retain their shell; unavailable or differently shaped tool launchers remain explicit blockers, never PowerShell fallbacks. No old conversion notice or old module link remains in current package/development guidance. Historical campaign packages are preserved without compatibility repair.

Actions A-001–A-003 are complete for this selected revision checkpoint. All owned commits are published/read back individually; the final evidence commit follows the same gate before stopping. Campaign 089 stays open on revision/089_8e719ce-windows-shell-handling, unmerged, awaiting further human direction. Parent 081 stays suspended. No integration, campaign closure, installation, release/tag/dispatch or demo modification occurred.

## A-004 — General Windows policies and procedures

The human clarified that windows-shell.md must not depend on a specific plugin. Removed skill ownership, preparation/continuity terminology, the plugin-specific probe marker and all outgoing cross-references. The general policy now includes the exact shim inline and describes filesystem placement and actual-tool verification without requiring plugin context. Plugin coordination roles and workflow gates remain in callers; the source development contract records this boundary. No runtime script or native fixture changed. Verification and publication follow before stopping with campaign 089 open.

Verification passed: the 468-word policy has no plugin terms or outgoing references; its embedded batch code matches the native-verified shim exactly. Scoped current/active Markdown checks passed 543 local targets and 65 maintained fragments, excluding historical record compatibility. Runtime script, fixture and CI bytes match native-verified 76ecc64, so no fresh native run is claimed for this documentation correction. Publish/read back this checkpoint and retain the open, unmerged child boundary.

## A-005 — Observe the probe before selecting recovery

The human identified an incorrect prerequisite: the agent cannot be expected to know a tool's hidden PowerShell wrapper. The policy now first calls the actual shell/terminal tool with echo CMDPROBE%SystemDrive%, checks output/error/exit, and branches on the observation. A PowerShell-related failure triggers shim placement and the exact same probe retry; success continues, and another failure retains its actual blocker. Plugin callers and K-16 assess that same ordering without making the general policy depend on plugin context. The native fixture uses the exact bare echo probe; the supplied adapter is unchanged. Native recheck/publication follow before stopping with campaign 089 open.
