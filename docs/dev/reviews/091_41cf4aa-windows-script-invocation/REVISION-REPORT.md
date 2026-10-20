# Windows script invocation revision campaign

## Opening

Campaign 091_41cf4aa opens from published/read-back 41cf4aac038bbc1541e7dac39cd841feb7331e27 on parent revision/081_5b2442e-prerelease. Working branch revision/091_41cf4aa-windows-script-invocation; parent 081 remains open/suspended. The human supplied the inline-script prohibition and two permitted temporary-file forms. The [plan](REVISION-PLAN.md) owns accepted actions. Publish the focused revision and stop on this child branch; no closure or integration is selected.

## A-001 — Policy gap and selected interpretation

Current windows-shell.md requires one command per call and temporary CMD files for sequences/complex quoting, but does not explicitly prohibit embedded interpreter source. A one-line, quoted interpreter expression can satisfy the command-count rule while still exposing source to the tool/shim parsing boundary. A separate rule is therefore warranted; the command-count rule and source-placement rule address distinct properties.

The new rule must cover script text in any language, including one-liners, quoted evaluation arguments and shell command strings. Either source is moved to a temporary script file or the entire call is moved into a temporary CMD file. Only the resulting file invocation reaches the agent shell tool. Ordinary script-file invocation and non-script command arguments remain supported. The exact shim and existing general/project precedence remain unchanged. No native Windows cause or new runtime behavior is claimed by this instruction assessment.

## Pending checkpoint

Opening/plan publication precedes source edits. Then implement A-002 and verify A-003, publish evidence and leave the campaign open/unmerged for further direction. Other closed campaign records stay frozen.
