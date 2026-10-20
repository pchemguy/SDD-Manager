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

## Closure

Campaign 089_8e719ce is completed and closed. Explicit merge 735814e0740d7727c2aba0175335bf81d793d6d6 has verified parents 8e719ce965526dbbae266009ff8c1114b7d70a80 and 476947767c3a645a11320aac4cdaba4d80c3af84. The supervised publisher pushed that merge to origin's revision/081_5b2442e-prerelease and independently read back the exact object, with confirmed process cleanup and exit status 0. The worktree is on the parent branch and was clean after publication. Both campaign branches are retained.

Final merged-state scoped checks pass 543 local link targets and 65 maintained fragments, standalone-policy/exact-shim checks and whitespace checks. All actions and selected integration obligations are complete; no unresolved blocker remains within this campaign. Live-client limits remain as documented. Publish/read back this closure record under the ordinary per-commit gate, then stop. Parent 081 stays open/suspended; version/release inputs, main, release/tag/dispatch and plugin installation are not advanced. This campaign package becomes frozen history after closure recording.

## Reopening — Shell selection and required wrapper flags

The human explicitly reopened this campaign for additional shell notes, authorized execution and requested closure again. The clarification selects no wrapper by default: CMD is the default shell; Git Bash may also be available; unnecessary cmd/bash wrapping is avoided unless instructed; necessary wrappers always use cmd /c or bash -c. Action A-008 owns this amendment, including alignment of existing CMD-only caller wording. No runtime/shim change is selected.

Eligibility is established on the clean parent branch revision/081_5b2442e-prerelease: its latest first-parent merge is this campaign's published explicit merge 735814e0740d7727c2aba0175335bf81d793d6d6, with verified parents and containment of completed child 476947767c3a645a11320aac4cdaba4d80c3af84. The sole later parent commit d7fa983f731a38bf5fca41102ee418b6af336358 records closure and is exactly read back from origin. It is the distinct reopening checkpoint; original opening 17e5aa90c5b2edba9f2b8768ecf36cf62323e89b and branch-off 8e719ce965526dbbae266009ff8c1114b7d70a80 remain unchanged.

The retained child branch synchronizes that published parent baseline through an explicit two-parent merge. HANDOFF preserves the reopened child identity, accepted amendment and suspended parent boundary. This checkpoint changes only active continuity/campaign records; source execution follows its publication. Original results and closure facts above remain historical; other closed records stay frozen.

## A-008 — CMD command lines and wrapper use

Synchronization 87bf920ec3b4ff91c6874701a860a40b4e28c041 is published/read back. The human then explicitly clarified that command lines remain CMD-only: this is distinct from adding cmd /c. The initial proposal to alter CMD-only summaries is withdrawn. Current summaries remain; the policy now states default CMD/direct execution, possible Git Bash availability, avoidance of unnecessary wrappers and mandatory cmd /c or bash -c when a wrapper is necessary or requested. Routing and K-16 reflect that distinction. The exact shim, probe, recovery branches, project precedence and placement/ignore rules are unchanged.

The subsequent clarification is explicit in the policy and K-16: Bash commands always require bash -c because the shim executes commands through CMD. CMD remains the command-line syntax/default; this does not authorize automatic shell switching or add an unnecessary cmd /c wrapper.

Scoped source review confirms all four additional notes and the subsequent CMD-only clarification. Standalone-policy/exact-shim checks pass; current Markdown checks pass 542 local targets and 65 maintained fragments without findings, and git diff --check passes. Runtime scripts, tests, CI and acceptance code are unchanged from reopening checkpoint d7fa983; no new runtime test is needed or claimed for this wording amendment. Prior native/support/publisher/package evidence keeps its recorded source. A-008 is implemented and ready for publication and explicit parent integration; reclosure remains pending.

## Amendment integration verification

Amendment d5adfc3cf98d89dd655c21ba7cd4add6c4f93795 is published and exactly read back. Its exact 156-file verification archive passes pinned schema, inventory, identical rebuild, exact shim and five extracted CLI help checks: 463768 bytes, SHA-256 d78cab355c13048399fe855d0bb52262ba9b5e89a4b3ea8019889b68623f3938. The hash identifies that exact source; later commit-stamped archives differ. The unchanged version is 0.15.1; this verification build does not refresh release preparation.

The parent remote still exactly matches reopening checkpoint d7fa983f731a38bf5fca41102ee418b6af336358. The prospective explicit completion merge has no conflicts; HANDOFF restores the parent's suspended scope. Authored package bytes match the verified amendment, and runtime/test/CI/acceptance bytes retain the original native-verified source. Other closed campaign records remain unchanged. Target publication and amended closure follow merged-state documentation checks.

## Amendment reclosure

Campaign 089_8e719ce is completed and closed again. Explicit amendment merge 204d7e91b1d0e40d1fb53c61cb024f21452e417f has verified parents d7fa983f731a38bf5fca41102ee418b6af336358 and d5adfc3cf98d89dd655c21ba7cd4add6c4f93795. The canonical publisher pushed it to origin's revision/081_5b2442e-prerelease and independently verified that exact object, with confirmed cleanup and exit status 0. The worktree returned to the parent branch and was clean after publication; both branches are retained.

Merged-state documentation checks pass 543 local targets and 65 maintained fragments, standalone/exact-shim checks and whitespace checks. A-008 and its integration obligations are complete; earlier runtime evidence retains its source and no new live-agent or Bash runtime result is claimed. Publish/read back this reclosure record, then stop. Parent 081 stays open/suspended with release inputs/version/installation unchanged. This campaign package returns to frozen history after reclosure recording.
