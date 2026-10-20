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

## Boundaries

The general policy stays self-contained and plugin-independent. This revision changes instructions, not the shim or a language interpreter. No live Windows reproduction, new runtime test, script installation, token/hosting mutation, release-input refresh, version change, merge or plugin installation is selected. Existing tests/package checks establish only their actual source/integration properties; live agent compliance remains unrun.

A-001–A-002 are complete. Six A-003 source contrasts, 139 support/37 publisher tests and scoped documentation/standalone/exact-shim checks pass. Exact committed package verification and final evidence publication remain before stopping on the open campaign branch.
