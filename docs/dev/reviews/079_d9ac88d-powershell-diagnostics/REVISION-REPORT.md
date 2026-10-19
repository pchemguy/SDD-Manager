# PowerShell diagnostics revision

## Campaign and opening

- Campaign: 079_d9ac88d; opened 2026-10-19.
- Full starting baseline/branch-off: d9ac88d6b08eb805cace6c8e873d4be9c9e0b407.
- Working/publication branch: revision/079_d9ac88d-powershell-diagnostics on origin, pchemguy/SDD-Manager.
- Creation parent, eventual integration and return target: main at that baseline. No parent task workflow is suspended.
- Human instruction: “Open powershell diagnostic revision campaign”.
- Owner/stage: sdd-manage; campaign opening. Reporting: Standard.
- State: Open; initialization only. The concrete symptom, reproduction evidence, diagnostic questions and accepted repair scope remain to be established.

## Scope and stopping boundary

The selected topic is PowerShell diagnostics in SDD Manager. This opening establishes the campaign branch, this record, current index navigation and HANDOFF, committed and published together. It does not identify a root cause or prescribe a shell/runtime change. No PowerShell command, diagnostic script, environment/configuration change or plugin repair has been performed.

Keep later assessment grounded in the supplied evidence and actual execution environment, distinguishing PowerShell, CMD, POSIX shell, runtime and hosting behavior where relevant. The user's existing environment preferences remain in force until explicitly amended. Load only the responsible current owners once the concrete concern is known; do not invent a revision plan, findings or test results merely from the campaign title. Keep references cohesive and bounded, and any illustrative examples abstract and explicitly non-exhaustive.

Stop after this opening is committed, pushed and verified. Subsequent diagnosis, revision planning/execution, integration, closure, installation and release are not selected by this request. Closed campaign packages, including 078, remain frozen and outside routine content loading or compatibility checks.

## Setup evidence and persistence

The selected worktree was clean on main at the full baseline. Exact remote-main readback matches that baseline. Repository-wide campaign path/local-ref discovery and complete remote branch enumeration (84 branches) found highest allocated/reserved sequence 078, with no 079 collision. The abbreviated baseline resolves to the full starting commit, and the proposed branch passes `git check-ref-format --branch`.

Established repository skill discovery and unchanged governing instructions are reused. The coordinator owns setup/persistence; conventions/report supply identity and record formats. Only this campaign's record and current navigation/HANDOFF are changed. Opening checks cover owned paths, links/heading separation, preservation of all earlier index rows and whitespace; no runtime suite is needed for this metadata-only operation.

Git supplies the opening commit identity and later push/readback evidence; this snapshot cannot contain its own future SHA or prove subsequent publication. Resolve any pending publication before dependent work, then retain this open campaign for the human's specific diagnostic evidence or next instruction.

## Accepted requirements and source assessment

Opening d494766a732f219e0e28f5d4307d58313c6522a5 is pushed and verified by exact remote-ref readback. The subsequent human direction supplies the Windows startup/probe/shim/retry workflow, required activation reminder about apostrophe-to-double-quote conversion, and Antigravity's actual `PowerShell -Command "<USER COMMAND>"` invocation. That call shape explains the provided `%~2` extraction. It is human-reported client evidence, not a live client trial performed in this campaign.

At that opening source, sdd-orient's entry/inspection reference has no execution-OS/Windows shell preflight. The manager's coordination reference has generic environment recovery, and the implementation environment reference addresses task/runtime provisioning, without the requested startup shim path. The [revision plan](REVISION-PLAN.md) establishes the accepted direction, bounded owner/reference changes, native checks and open-campaign stop.

Technical assessment preserves two consequential distinctions: a probe must verify actual CMD output/expansion rather than accept literal percent-variable text; and the shim must be resolvable by the observed launcher. Microsoft's [CreateProcessW contract](https://learn.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-createprocessw) requires a command interpreter to execute batch files and describes executable-path/extension resolution. Its [PowerShell invocation documentation](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_powershell_exe?view=powershell-5.1) describes the command-string interface; [CMD guidance](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cmd) covers command-interpreter execution and parsing. These sources inform compatibility limits, not proof that every shell tool resolves a PowerShell.cmd file.

Execute the bounded revision after publishing the plan checkpoint. The supplied script body remains the known adapter; unsupported invocation formats are reported rather than silently reinterpreted. Required success notice: the adapter is active, commands run through CMD, and **all single quotes (`'`) are replaced with double quotes (`"`)**, including literal apostrophes. Continue only after the repeated probe succeeds; otherwise report and stop the turn.

The human additionally reports similar historical local Codex failures, while explicitly noting that current local behavior has not been tested recently. Startup detection/recovery therefore remains client-neutral. Antigravity supplies the confirmed call shape; local Codex is a relevant possible host, with actual launcher/profile and recovery success to be established from current evidence. No current Codex defect or universal adapter compatibility is claimed.
