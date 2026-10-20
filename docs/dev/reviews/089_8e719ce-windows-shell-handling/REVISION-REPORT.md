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

Verification passed at published implementation 62de0ff1dde49b8a3c73d0633b09c56af04006a8: both native Windows CMD Node 22/24 jobs passed seven tests in [run 39400587582](https://github.com/pchemguy/SDD-Manager/actions/runs/39400587582), including the exact bare probe with expanded drive output. Current link/style checks passed 543 local targets and 65 maintained fragments. The 491-word policy remains general, has no plugin terms or outgoing references, and embeds the unchanged native-verified adapter verbatim. Source assessment verifies probe-before-recovery ordering; live agent/tool error classification is unrun. Earlier support/publisher/package results retain their recorded sources rather than being represented as fresh A-005 runs. Publish/read back the evidence checkpoint and stop with 089 open and unmerged; parent 081 stays suspended.

## A-006 — Project precedence and direct shim guidance

Starting from published 6fab0a68831f3b47256330806a0dca87e7e71fe5, applied the human's qualification: a project specifically targeting PowerShell or defining explicit project-specific shell policies overrides the corresponding general rules. Current entries, caller summaries and K-16 preserve that precedence. Replaced the rejected shim sentence with a direct instruction to create PowerShell.cmd and repeat the failed probe. Placement now explicitly names the actual shell tool's current working directory (CWD) or an existing writable directory on its effective PATH.

Scoped verification passed: the 500-word general policy has no plugin terms or outgoing references, and its inline shim matches the unchanged native-verified adapter exactly. Current Markdown checks passed 543 local targets and 65 maintained fragments with no link/style findings; git diff --check passed. Runtime scripts, tests and CI are unchanged from the starting checkpoint. Native Windows results retain source 62de0ff, and earlier support/publisher/package results retain their recorded sources; none is represented as a fresh A-006 run. Live client activation and observed agent behavior remain unrun.

Publish/read back this amendment and stop on the child branch with campaign 089 open and unmerged. Parent 081 remains suspended; no release, installation or integration is selected.

The amendment above was published and exactly read back at 5e9e062ac91abe3a2049d0bd1772f88803686fd3. The human then required .gitignore handling for a shim placed inside a repository. The placement step now explicitly adds the shim's repository-relative path to .gitignore in that case. The resulting 512-word policy passed the standalone/verbatim-shim check; scoped documentation checks again passed 543 local targets and 65 maintained fragments, and git diff --check passed. Runtime, tests and CI are unchanged. Publish/read back this follow-up and retain the same open campaign boundary.

## A-007 — Full-file editorial revision and section order

The human requested full-file review, then authorized revision and explicitly included section-order assessment. The six findings cover duplicated recovery instructions, mixed branches/sequential steps, repeated quoted-path verification, overloaded placement guidance, abstract wording and ambiguous CLI terminology. The preceding placement/ignore follow-up was published/read back at a0c93d7fa830696054bd7f002380b892449508e7, the starting source for this revision.

Retained the useful section order: general policies first, the actual-tool probe and conditional recovery next, and Antigravity-specific wrapper/code last. Moved the short hidden-wrapper explanation to the procedure's opening, where it explains the need for the probe. This makes the initial action independent of prior launcher knowledge and keeps format details beside the conditional shim. No new module or reference dependency is introduced.

Recovery now has one owner in the text. Explicit probe outcomes direct success past recovery, PowerShell-related errors into recovery, and other failures to a reported stop. The recovery step owns exact shim placement, repository .gitignore handling, retry and activation reporting. Quoted-path verification appears once after either successful path. Ancillary filesystem/configuration constraints form one separate paragraph. Prose consistently uses command terminology; the exact batch code remains unchanged.

The revised policy is 432 words, down from 512 without removing the agreed policies or recovery boundaries. Standalone/verbatim-shim and scoped Markdown checks passed: no plugin terms or outgoing policy links, exact native-verified shim agreement, 543 local targets and 65 maintained fragments with no findings. Whitespace checks passed. Runtime scripts, tests and CI are unchanged; earlier native/support/publisher/package evidence retains its recorded source, with no fresh runtime or live-agent result claimed. Publish/read back this revision and stop with campaign 089 open and unmerged; parent 081 stays suspended.

## Accepted finalization

The human accepted the result and instructed closure. Actions A-001–A-007 are complete. Final source e5853e9b99cf15cafdfc596ac97d273b9db72d1c is published/read back and passed both native Windows CMD Node 22/24 jobs, seven tests each, in [run 39404566217](https://github.com/pchemguy/SDD-Manager/actions/runs/39404566217). Retrieved job logs confirm seven tests and success per job. These controlled harness results do not establish live Antigravity/Codex activation or agent compliance.

The exact committed final-source verification archive passes pinned manifest/schema, complete 156-file inventory, identical rebuild, new-guide/old-guide exclusion, exact shim and five extracted CLI help checks: 463611 bytes, SHA-256 3e6437b4e88b4cc6bb0c0c36f488cddba40ca30ae4a78e1912243119d7365680. This hash identifies source e5853e9 specifically, not later commit-stamped archives. Scoped Markdown checks pass 543 targets/65 maintained fragments; the 432-word policy remains standalone and embeds the unchanged shim. Git path comparison confirms all prior closed campaign records remain unchanged.

The local and remote parent checkpoint both match 8e719ce965526dbbae266009ff8c1114b7d70a80. Finalization publication and explicit two-parent integration into revision/081_5b2442e-prerelease follow next, with merged-state support/publisher/documentation checks. This record does not yet claim completed integration or closure. Version remains 0.15.1; parent release inputs remain historical/stale and no installation or release operation is selected.

## Integration verification

Finalization tip 476947767c3a645a11320aac4cdaba4d80c3af84 is published/read back. The prospective explicit merge into refreshed parent 8e719ce965526dbbae266009ff8c1114b7d70a80 has no conflicts. HANDOFF deliberately restores the parent scope and suspended stop. Merged-state checks pass 139 support and 37 publisher tests on Linux/Python 3.12.14; package/runtime/test/CI bytes match final verified source e5853e9. Prior closed records are unchanged. Target merge publication and final closure recording remain pending at this checkpoint.
