# Windows shell diagnostics revision plan

## Campaign and accepted direction

- Campaign: 079_d9ac88d; full starting baseline d9ac88d6b08eb805cace6c8e873d4be9c9e0b407.
- Planning source/opening: d494766a732f219e0e28f5d4307d58313c6522a5, published/read back on `revision/079_d9ac88d-powershell-diagnostics`.
- Creation parent, eventual integration/return target: main at the starting baseline. No parent execution is suspended.
- Owner: sdd-manage; orientation supplies read-only host/shell evidence, conventions/report own record formats. [Revision report](REVISION-REPORT.md).
- Human requirements: identify the execution OS at startup; probe Windows shell commands; on a PowerShell-related probe failure create PowerShell.cmd in an effective PATH location, optionally the project root with .gitignore; retry, report success and continue, or report failure and stop the turn. Activation must remind the user that single quotes become double quotes.
- Human-supplied compatibility evidence: Antigravity run_command invokes `PowerShell -Command "<USER COMMAND>"`. Preserve the supplied shim for that two-argument form. Broader launch formats are not established by that evidence.
- Client scope is general: the human also reports similar past local Codex problems, with current behavior unverified. Apply startup detection to local Codex and other clients as well; establish actual launcher compatibility instead of gating by client branding or asserting that current Codex uses Antigravity's invocation.
- State: V-001–V-003 executed and verified, including the bounded quote-assignment correction identified by native tests. Keep this campaign open on its revision branch; closure/integration is not selected.

## Resulting workflow

At initial workflow entry or a materially changed execution host/tool, identify the actual shell execution OS from available environment/tool evidence. Do not infer it from the user's desktop, target deployment platform or path spelling. Reuse sufficient evidence for an unchanged host/tool. On Windows, perform a bounded harmless CMD probe before dependent shell/Git operations. Require expected output and exit status, including actual environment expansion where used; a successful echo of a literal percent-variable is insufficient. The user's examples are illustrative, not required disclosure of the complete PATH or a fixed drive name.

When the probe reports missing PowerShell or another PowerShell launcher/execution error, the coordinator performs the scoped shim recovery. Orientation remains read-only. Use the running package's `PowerShell.cmd`. The original human-supplied body is retained here as its starting point:

```bat
@echo off

set "CLI=%~2"
set "CLI=%CLI:'="%"

%CLI%
```

The adapter targets the observed `-Command` plus one command-string form, dispatches CMD-compatible commands and replaces every apostrophe with a double quote. It does not emulate PowerShell syntax or parse arbitrary PowerShell flags. Confirm effective launcher resolution; a PATH batch file cannot repair an absolute powershell.exe launch or a client that does not resolve/execute batch wrappers. Those failures retain the requested report-and-stop result.

Native verification refinement: the original conversion assignment consumes quoted redirection before the actual command runs. Preserve the requested conversion semantics while isolating that substitution with local delayed expansion, then disable delayed expansion for dispatch. Add native regression coverage for redirection, command separators executing once and literal exclamation marks. This is a bounded runtime correction, not a broader PowerShell parser or a change to the activation notice.

Use an available independent file facility if the shell launcher is broken. Select an existing writable user directory in the launcher's effective PATH and check destination ownership; preserve an occupied unrelated shim. A project-root fallback also requires actual discoverability and the existing repository mutation/preparation gates. Add an anchored `/PowerShell.cmd` ignore entry without replacing other rules, and verify the local shim is not staged/tracked. This recovery creates no global PATH, registry, system executable or client configuration changes and does not bypass a host denial.

Retry the same bounded probe through the same tool. On verified success, disclose activation, location and the single-to-double-quote conversion, then continue only the already authorized workflow using CMD-compatible commands. On continued failure, report the actual attempt/result and stop the turn with valid work preserved. Do not repeatedly install another shim or claim that file creation alone repaired execution. Retain concise host/probe/substitution evidence in existing workflow records, without another recovery journal.

## Ordered revisions

| Action | Outcome and targets | Dependencies | Objective verification |
| --- | --- | --- | --- |
| V-001 | Bundle the supplied shim as reusable package material and add one substantial coordinator-owned Windows shell recovery reference. Connect coordinator entry/routing, orientation startup evidence, existing environment recovery and package/user guidance; preserve read-only orientation and existing pre-write gates. | Published plan. | Source assessment covers non-Windows, healthy Windows, PowerShell probe failure, supported Antigravity launch, unsupported resolution, occupied destination, project-root gate/ignore handling, successful retry with required quote notice, and failed retry with turn stop. Main procedure remains with its owner; no thin reference fragments or duplicate procedures. |
| V-002 | Add native Windows CMD contracts and CI for the supplied adapter, plus actual package inclusion and source assessment coverage. | V-001 published/read back. | Controlled invocation uses the documented PowerShell -Command form and an isolated effective PATH, with no global installation. Exercise environment-expanded probe output, paths with spaces, quote conversion, stdout/stderr and failure exit propagation using LF/CRLF template bytes. Verify no native runtime success is claimed from Linux. |
| V-003 | Run relevant regressions, inspect actual Windows CI, verify source/package boundaries and current links/composition, then finalize evidence/HANDOFF on this branch. | V-002 published/read back. | Support/publisher suites, native adapter tests, exact package/template bytes, current owner routing and closed-record preservation. Separate human-reported Antigravity evidence, source assessment, controlled Windows runtime and unperformed live client activation. |

## Persistence and stop

Publish/read back this plan before implementation. Update the active revision report with each action's actual changes/checks/limits, then commit/push/read back before advancing. Use no fabricated T-task IDs. All earlier closed packages remain unchanged and outside routine checks. No shim is installed on this Linux editing host or in a demo repository.

The final execution boundary is verified published revision work with campaign 079 still open. Do not merge, close, install a client plugin, start product work or publish a release without the corresponding later instruction. A failed required check retains its real pending state rather than an invented pass.
