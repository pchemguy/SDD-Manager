# Windows script invocation revision

## Authority and scope

Campaign 091_41cf4aa; full baseline/branch-off 41cf4aac038bbc1541e7dac39cd841feb7331e27. Working branch revision/091_41cf4aa-windows-script-invocation; creation parent/return revision/081_5b2442e-prerelease. The parent checkpoint is exactly read back, its worktree was clean and repository-wide allocation maximum was 090. Parent 081 remains open/suspended.

The human selected a new Windows shell revision: prohibit direct script text in shell-tool command lines, including one-liners. Both permitted forms must be explicit: write source to a temporary script file and invoke it, or put the entire call in a temporary shell file and invoke only that file. This authorizes focused policy/caller revision and verification. Stop with the verified revision published on the child branch; closure/integration and parent resumption are not selected.

## Actions

| Action | Changes and evidence |
| --- | --- |
| A-001 | Assess current command rules and related entries against the requested restriction. Distinguish one command per call from whether that command embeds source text. Include interpreter-evaluation arguments and shell command strings; cover all languages without a narrow example catalogue. |
| A-002 | Add a separate, cohesive command rule in windows-shell.md, stating the prohibition and both temporary-file alternatives. Retain the CMD-only/default/wrapper policies, project precedence, exact shim, startup/recovery and temporary-file exclusion. Align brief manage/README guidance and source contract/assessment without creating another reference. |
| A-003 | Review direct/quoted one-liners, temporary language files, complete calls in temporary CMD files, shell command strings and normal command arguments. Check scoped Markdown/package boundaries, exact shim and unchanged runtime/frozen records; publish each owned commit. Retain qualified evidence limits and keep campaign 091 open/unmerged. |
| A-004 | Apply the human's additional restriction: prohibit pipes, redirection and other shell operations directly in shell-tool command lines; require the complete call in a temporary CMD file. Align the existing caller summaries, assess the additional direct/file-contained contrasts and verify the amended exact package. |
| A-005 | Move the current policy unchanged to root WINDOWS_SHELL_POLICY.md; add a concise Windows-only AGENTS section and root README note. Remove plugin policy routes, summaries and the bundled shim. Retain the exact shim only in the standalone policy; repoint source-only native checks and CI, update package requirements/exclusion assertions and remove plugin-contract policy ownership. Verify affected suites, current links, exact shim/policy preservation and an exact source package without these external resources. |

## Boundaries

The general policy stays self-contained and plugin-independent. This revision changes instructions, not the shim or a language interpreter. No live Windows reproduction, new runtime test, script installation, token/hosting mutation, release-input refresh, version change, merge or plugin installation is selected. Existing tests/package checks establish only their actual source/integration properties; live agent compliance remains unrun.

A-001–A-002 are complete. Six A-003 source contrasts, 139 support/37 publisher tests and scoped documentation/standalone/exact-shim checks pass. Exact committed package verification and final evidence publication remain before stopping on the open campaign branch.

Source checkpoint 2dac09a3953b10afc060a17118461b7a88d86bc5 is published/read back. The additional human instruction selects A-004 in this same open campaign before final package verification; it does not select closure/integration or change the retained parent boundary.

A-004 wording and caller alignment are implemented. Three additional contrasts and scoped documentation/standalone/exact-shim checks pass. Publish this amended source, verify its exact committed package and publish final evidence before stopping open/unmerged.

Final checkpoint: A-001–A-004 are verified. Amended source 0b66c9979e2518f6c56a27b198f3f9c9dc02e3b1 is published/read back; its exact 156-file package passes schema, deterministic rebuild, unchanged-shim and five extracted CLI help checks. The report records the source-specific digest and evidence limits. Publish/read back the final evidence update and stop with campaign 091 open/unmerged; no further execution or integration is selected.

The human subsequently simplified CMD-wrapper wording in windows-shell.md through published source c3ffa7bae0f9caf6132de35da383a914d270c8ef. The current request explicitly selects A-005: fully externalize this policy. Unlike the earlier summary expansion, changes outside the policy now serve the selected root navigation, plugin removal and affected source verification. Preserve the policy's latest wording and exact embedded shim. No closure/integration, parent continuation, installation, version change or release refresh is selected.

A-005 is verified at published/read-back source 69cc45b18909bec370fcefce7def649640144d49. Root navigation, exact policy/shim preservation, complete plugin removal, 139 support/37 publisher tests, scoped documentation and a deterministic exact 154-file package with five extracted CLI help checks pass. No PowerShell.cmd file is retained. Seven native Windows contracts skip on Linux; no fresh Windows/client result is claimed. Publish/read back the final evidence and stop open/unmerged, preserving the parent boundary.

The human now selects campaign closure. Finalize this campaign, publish its boundary checkpoint, explicitly merge the complete child into refreshed creation parent revision/081_5b2442e-prerelease, verify/publish the merged state and return there with parent 081 still suspended. This supersedes the earlier open/unmerged stop only for child closure; no release refresh, installation or parent execution is selected.

Complete: selected actions and closure are verified through published/read-back explicit merge 747c368e45e93795dbbdcfe8882cf6eb519cca0e. Merged checks pass, the parent branch is restored cleanly, and campaign 091 is closed/frozen with its branch retained. Parent 081 remains open/suspended at its original prerelease boundary.
