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

## A-004 — Shell operations require a temporary CMD file

Source 2dac09a3953b10afc060a17118461b7a88d86bc5 is published and exactly read back, with publisher cleanup confirmed. Before final package verification, the human additionally required an explicit prohibition on direct pipes, redirection and other shell operations. The same open campaign now includes that accepted delta.

windows-shell.md has a separate mandatory rule: the entire call goes in a temporary CMD file and only that file invocation reaches the agent shell tool. Grouping, conditionals, loops and variable assignment are explicitly included, with complex quoting kept inside the file. The command-count rule remains separate. Brief manage/README/contract/K-16 projections are aligned; the exact shim and other policies remain unchanged.

| Additional contrast | Assessed behavior |
| --- | --- |
| Direct pipes or input/output redirection | Prohibited in the shell-tool command; the complete call belongs in a temporary CMD file. |
| Grouping, conditional, loop or variable assignment | The same temporary CMD-file requirement applies to these shell operations. |
| Existing script-file invocation with shell operations added | A script-file argument does not exempt the surrounding call; move the complete call into a temporary CMD file. |

All nine contrasts are instruction/source assessments, not new runtime or live-agent observations. Scoped Markdown checks still pass 435 local targets and 35 maintained fragments across ten files, including 93 package-contained links; standalone/exact-shim and whitespace checks pass. The prior 139 support/37 publisher results remain applicable to unchanged runtime/test/publisher source; they were not rerun for this additional wording-only delta. Exact amended-source packaging and final evidence publication remain pending. Campaign 091 stays open/unmerged and parent 081 stays suspended.

## Verified source and stopping boundary

Amended source 0b66c9979e2518f6c56a27b198f3f9c9dc02e3b1 is published and exactly read back from the campaign branch; the publisher exited successfully with cleanup confirmed. Its version 0.15.1 package validates against the pinned manifest schema, contains exactly 156 expected files and rebuilds byte-identically. The 464978-byte archive has SHA-256 10eb61dfa82cd74e2cfdc479bca4d5539e243fd3153f2a07c0c5d883f122e053. This hash belongs only to that exact committed source.

The archive contains the revised Windows policy and unchanged supplied shim, excludes source tests/development documents and passes five extracted CLI help smokes. Scoped documentation and whitespace rechecks pass. No runtime scripts, test source, CI, acceptance code, manifest or closed campaign package changed. No new native Windows or live-agent observation is claimed; the earlier native shim evidence remains tied to its original tested source. This local packaging check does not refresh the parent's release inputs or install a plugin.

A-001–A-004 are verified for the selected instruction revision. Publish/read back this evidence checkpoint under the per-commit rule, then stop on revision/091_41cf4aa-windows-script-invocation. Campaign 091 remains open/unmerged; parent 081 remains suspended with its prior release boundary unchanged. Closure, integration and parent continuation are not selected.

## A-005 — External repository policy

After the human's CMD-wrapper simplifications, published source c3ffa7bae0f9caf6132de35da383a914d270c8ef contains the latest accepted wording. The human now explicitly selects moving that policy out of the plugin, root AGENTS/README navigation and removal of all plugin policy references. The subsequent clarification forbids retaining a PowerShell.cmd file: agents create it from the policy code when needed.

The policy is moved byte-for-byte to root [WINDOWS_SHELL_POLICY.md](../../../../WINDOWS_SHELL_POLICY.md). Root AGENTS has a concise dedicated Windows-only section and the abbreviated README has an external-policy note. The plugin no longer contains the policy or shim, advertises Windows-shell recovery, routes to the policy, or repeats its defaults. Generic host/tool observation and applicable-user/repository-instruction handling remain. The source contract and K-16 now assess those generic responsibilities rather than owning a Windows policy.

Source-only native contracts extract the existing exact batch block from the root policy and create only temporary test adapters; CI watches that root file. The publisher no longer requires a bundled shim, and support/publisher package assertions exclude the external policy and removed assets. No separate PowerShell.cmd file is retained in the checkout.

On Linux/Python 3.12.14, all 139 support and 37 publisher tests pass after these changes. Seven native Windows contracts load the extracted policy block and skip on Linux; this is not a fresh native Windows result. Policy bytes match c3ffa7b exactly, the extracted shim matches its prior asset, and a source scan finds no plugin policy/adapter routes or references. Scoped Markdown checks pass 562 local targets and 66 maintained fragments across 18 files, including 185 package-contained links. Whitespace checks pass; closed campaign packages are preserved.

Publish the selected source, verify its exact 154-file package without the external policy/shim, then publish final evidence and stop with campaign 091 open/unmerged. Parent 081, version 0.15.1 and the retained release-input boundary remain unchanged.

## A-005 verified checkpoint

Source 69cc45b18909bec370fcefce7def649640144d49 is published and exactly read back on the campaign branch; the publisher exits successfully with cleanup confirmed. Its version 0.15.1 package contains exactly 154 expected files, validates against the pinned manifest schema, rebuilds byte-identically and passes five extracted CLI help smokes. The 461017-byte archive's SHA-256 is f82314926beda89712eb642858e7b38f80271916f8fda1e50b722324b5a16e87, associated only with that source.

The package contains neither the external root policy nor the removed policy/shim assets, and no packaged documentation references or routes to them. The root policy remains byte-identical to the last accepted c3ffa7b wording. No PowerShell.cmd file is retained; native tests create ephemeral copies from its code block. The 176 local support/publisher passes and seven qualified Linux skips above remain the actual runtime evidence. Source documentation/whitespace and preservation checks pass. No fresh native Windows/client behavior, plugin installation or release-input refresh is claimed.

A-005 is complete for the selected externalization. Publish/read back this evidence checkpoint, then stop with campaign 091 open/unmerged and parent 081 suspended. No integration or further parent work is selected.

## Closure selected

The human requests campaign closure. The child is clean at published/read-back 96cc42a0fb4832f6e70c09d4f963285a2651cd79; fresh remote-ref inspection confirms that tip and the unchanged creation parent 41cf4aac038bbc1541e7dac39cd841feb7331e27. Original opening 12ff5a0dfd7a38d6e59997c224afa4ac003e3b9e and branch-off 41cf4aac038bbc1541e7dac39cd841feb7331e27 are retained. The full incoming delta contains only the selected policy revision/externalization, affected source verification and active campaign records/navigation. Earlier closed packages are preserved.

Publish this boundary checkpoint, explicitly merge into revision/081_5b2442e-prerelease, restore the parent's suspended HANDOFF, verify/publish the prospective merged state and record actual closure after target readback. Prior source/package evidence remains tied to 69cc45b; merged-state checks must establish their own boundary. No parent prerelease work resumes.

The prospective merge uses refreshed parent 41cf4aac038bbc1541e7dac39cd841feb7331e27 and published child c2bcbc415affcec5f902a9fb98c91ff6bd4d4372, with no conflicts. Merged-state verification passes 139 support and 37 publisher tests on Linux/Python 3.12.14, scoped documentation (562 targets/66 maintained fragments), exact root-policy/shim preservation and whitespace checks. Package/runtime/test/CI contents match verified authored source 69cc45b; its source-specific archive evidence is retained without assigning that hash to a later merge. Closed packages are unchanged, and HANDOFF restores parent suspension. Actual merge publication/return remains the closure gate.
