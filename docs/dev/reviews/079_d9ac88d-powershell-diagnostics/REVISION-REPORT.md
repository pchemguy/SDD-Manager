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

## Revision execution

### V-001 — Startup evidence and coordinator recovery

Plan checkpoint a6b0e31a64f9a262f7f74d4fb6c84c6d84be7ad8 was pushed and verified by exact branch readback before source work. Added the reusable package asset `assets/PowerShell.cmd`, retaining the supplied executable body with explanatory comments. The coordinator's new cohesive `windows-shell-recovery.md` owns OS/probe, compatible invocation, destination/ignore handling, retry, required notice and failure stop. The coordinator entry/routing, orientation entry/inspection, generic/implementation environment routes, package entry and README now hand off to that owner.

Inspected-source scenarios:

| Scenario | Observed instruction/result |
| --- | --- |
| Non-Windows or unchanged sufficient host/tool evidence | Identify the actual execution host; skip Windows-specific repair and avoid repeated unchanged probes. |
| Healthy Windows probe | Require expected output/expansion and status; continue without installing a shim. |
| PowerShell-related probe failure | Read-only orientation reports evidence/unavailable Git checks; coordinator owns scoped recovery. |
| Antigravity versus possible local Codex | The adapter targets the observed two-argument command-string form; startup detection is client-neutral and current launcher behavior is established separately. |
| Destination/root conflict | Preserve unrelated files; require effective search resolution, writable ownership and existing repository/preparation gates. Root copies get an anchored ignore entry and are not tracked/staged. |
| Successful retry | Inform the user of location, CMD semantics and all single-to-double-quote conversion before continuing the authorized workflow. |
| Failed retry or incompatible launcher | Report concrete failure and stop the turn; no repeated installation or claim from file presence. |
| Host denial | Preserve the denial; this workflow does not change system/global settings or bypass authorization. |

Checked 192 current local links/anchors, package containment and heading/whitespace composition: passed. The 40-line recovery module contains one complete startup/recovery procedure with a visible loading trigger; routing remains shallow in callers. No previous closed records or local host configuration changed. This action establishes source guidance; native batch behavior remains pending V-002 and is not inferred from Linux inspection.

### V-002 — Native contract harness and acceptance integration

V-001 commit a5b4fc43072f834c31c9009423cf28a09ab2a2af was pushed/read back before this action. Added four native Windows CMD contracts in `tests/test_windows_shell_recovery.py`, using temporary spaced paths and process-local PATH resolution. Each exercises LF/CRLF copies of the actual asset and the documented two-argument launcher. Cases check an expanded probe and selected shim path, observable single-quote conversion including a literal apostrophe, nonzero status and stderr forwarding. The dedicated Windows workflow explicitly uses CMD and Python 3.11; no global/client/user-host shim is installed.

Extended actual package snapshot checks for the shim/recovery reference and exclusion of the source-only harness. Updated the source acceptance command/evidence boundary, plugin contract and K-16 coordinator contrast. Refined the activation example's quote notation and same-tool retry wording; the supplied executable shim body is unchanged.

Observed locally on Linux/Python 3.12.14: support suite 139 passed; publisher suite 37 passed. The new test module parses and its four Windows tests are explicitly skipped here, which supplies no Windows runtime pass. Compared the asset's executable lines with the human-supplied body retained in the plan: exact match. Whitespace checks pass. Publish this action to obtain actual native Windows CI results; native execution and live client activation remain unverified at this checkpoint.

### V-003 — Native failure diagnosis and bounded correction

V-002 commit 311dfb1dddb611c9c08d140345abef2284546451 is pushed/read back. Its [Windows run 39228487788](https://github.com/pchemguy/SDD-Manager/actions/runs/39228487788), job 117980485264, executed all four tests on Windows/Python 3.11.9. Quote conversion and nonzero status passed, while both LF/CRLF variants exposed two issues: the path assertion compared an 8.3 alias with its long name, and the quoted redirection fixture wrote its marker to stdout instead of stderr. The latter is an actual limitation in the original conversion assignment, not a passing runtime result.

Changed the path assertion to native same-file identity. In the adapter, isolated quote substitution through local delayed expansion so inserted quote/metacharacter text is retained until command dispatch, then disabled delayed expansion for dispatch. This retains apostrophe-to-double-quote behavior while preserving literal exclamation marks. Added command-separator and exclamation-mark regression cases; native contracts now total six, each covering both LF/CRLF. This candidate requires a new native recheck; the earlier failed observations remain retained. No live client compatibility is inferred.

Before that correction, the exact 311dfb1 package passed pinned schema and archive-byte/reproducibility checks: 154 files, 15 skills, 79 references, with source tests excluded. Its two archives matched SHA-256 `9d35601c2344155bc54d08995f7031db54f57284fbc5e3cf6161b8ca96bc2f05`. The corrected candidate will be checked independently; this hash is not its verification.
