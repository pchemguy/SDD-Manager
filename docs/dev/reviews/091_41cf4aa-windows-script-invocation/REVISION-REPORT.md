# Windows script invocation revision campaign

## Opening

Campaign 091_41cf4aa opens from published/read-back 41cf4aac038bbc1541e7dac39cd841feb7331e27 on parent revision/081_5b2442e-prerelease. Working branch revision/091_41cf4aa-windows-script-invocation; parent 081 remains open/suspended. The human supplied the inline-script prohibition and two permitted temporary-file forms. The [plan](REVISION-PLAN.md) owns accepted actions. Publish the focused revision and stop on this child branch; no closure or integration is selected.

## A-001 — Policy gap and selected interpretation

Current windows-shell.md requires one command per call and temporary CMD files for sequences/complex quoting, but does not explicitly prohibit embedded interpreter source. A one-line, quoted interpreter expression can satisfy the command-count rule while still exposing source to the tool/shim parsing boundary. A separate rule is therefore warranted; the command-count rule and source-placement rule address distinct properties.

The new rule must cover script text in any language, including one-liners, quoted evaluation arguments and shell command strings. Either source is moved to a temporary script file or the entire call is moved into a temporary CMD file. Only the resulting file invocation reaches the agent shell tool. Ordinary script-file invocation and non-script command arguments remain supported. The exact shim and existing general/project precedence remain unchanged. No native Windows cause or new runtime behavior is claimed by this instruction assessment.

## Pending checkpoint

Opening/plan publication precedes source edits. Then implement A-002 and verify A-003, publish evidence and leave the campaign open/unmerged for further direction. Other closed campaign records stay frozen.

## A-002 — Explicit source-placement rule

Opening 12ff5a0dfd7a38d6e59997c224afa4ac003e3b9e is published/read back. windows-shell.md now separates command count from source placement: direct script text is forbidden even when quoted or one line, and interpreter evaluation arguments/shell command strings are explicitly included. Both permitted alternatives are stated in full: temporary script file or the entire call in a temporary CMD file. Only the file invocation reaches the agent shell tool.

Command shape/source placement now precede wrapper selection in the command rules, so the Bash -c requirement cannot imply an inline-source exception. The general reference remains self-contained; manage gate/routing, README and source contract/K-16 carry brief aligned coverage. The exact shim, startup/recovery, project-specific precedence and wrapper policies are unchanged. Runtime scripts, tests and CI are not edited.

## A-003 — Verification checkpoint

| Selected contrast | Assessed behavior |
| --- | --- |
| Inline source, including a quoted one-liner | Prohibited directly in the shell-tool command regardless of language, length or quotation. |
| Source extracted to a temporary language-script file | Invoke the interpreter with that file; source text is absent from the shell-tool command. |
| Entire interpreter call in a temporary CMD file | The shell tool invokes the CMD file; embedded source remains inside the file. |
| Shell command-string argument | The same file-placement rule applies alongside the existing required wrapper flags. |
| Existing script-file invocation | Supported; the policy does not require copying an already file-based script. |
| Ordinary command arguments without script source | Retain existing CMD, one-command and complexity rules; no new blanket wrapper is required. |

These are source assessments, not observed agent behavior or a new native Windows trial. Linux/Python 3.12.14 verification passes 139 support and 37 publisher tests without failures/skips. Scoped Markdown checks pass 435 local targets and 35 maintained fragments across ten current/active files, including 93 package-contained links. The general policy has no plugin terms/outgoing dependencies and its embedded shim matches the native-verified runtime exactly. Whitespace checks pass.

Git comparison confirms runtime scripts, tests, CI, acceptance code and manifest are unchanged. Only active parent/child campaign records and navigation differ from the baseline; other closed records are preserved. Publish the source checkpoint, verify its exact committed package, publish final evidence and stop with campaign 091 open/unmerged.
