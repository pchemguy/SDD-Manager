# Shared Markdown style revision report

## Campaign and result

- Campaign: `034_c9cee3d`; baseline: `c9cee3dc61ab3362b30d449d25852e8f35ee70b5`.
- [Review](REVIEW-REPORT.md); [accepted plan](REVISION-PLAN.md).
- Working branch: `revision/034_c9cee3d-shared-markdown-style`; target: `main`.
- Planning checkpoint `185d0c4` was pushed and read back before execution. The user authorized campaign execution on 2026-10-09.
- State: executing; version remains `0.15.0`.

## Revision evidence

| Action / findings | Actual change | Evidence and limits | State |
| --- | --- | --- | --- |
| V-001 / R-001, R-002 | Added the shared Markdown reference and catalogue trigger. | Source inspection: heading separation, four-space nesting, continuation attachment, code/template boundary and scoped review are explicit. Live consumer behavior not tested. | Implemented; coupled verification pending. |
| V-002 / R-001, R-002 | Connected all 14 other skill entries, current root guidance, scoped QC/verification, documentation and GitHub draft guidance to the shared owner. | Direct relative paths resolve to the bundled reference; local generic heading rules reconciled; task-specific hierarchy unchanged. | Implemented; source/link checks pending. |
| V-003 / R-001, R-002 | Inspected 98 maintained/current Markdown files, including templates; no further formatting changes needed. Added scoped parser/source verification evidence. | All ten planned scenarios passed local assertions; 428 local path links resolve; literal non-Markdown code contents and task-derivation template unchanged. | Verified locally; live consumer behavior untested. |

## Verification scope and limits

The evidence script uses preinstalled Node and marked 17.0.5, not a new plugin dependency. It scans current Markdown candidates and checks representative parsed heading/list structures, task checklist nesting, mixed and wide numbered markers, continuation paragraphs and fenced blocks. Its negative fixtures reject missing heading blank lines and two-space children. One initial fixture incorrectly counted a second unspaced heading; it was corrected. The initial link scan also treated generated-template paths as live source links; parser-based link traversal now excludes literal code templates.

The scan is not a complete general-purpose Markdown linter or browser rendering test. ATX and Setext cases are covered; literal code/data is preserved. Verbatim root conversation transcripts, closed campaigns and the separate acceptance harness documentation are outside the maintained plugin-document check scope. Preservation of closed packages is checked from Git diffs without reading their contents.

All 113 support tests passed. The shared convention passes the strict standalone skill validator. Other skills' cross-skill bundled references are rejected as resource escapes by that isolated validator; these remain explicit plugin dependencies whose actual package-local targets passed the independent link checks. No claim of all-skills standalone conformance is made. See [skill results](evidence/skill-validation.json), [source/parser checks](evidence/source-checks.json), [verification script](evidence/verify_markdown.mjs) and [support log](evidence/support-tests.log).

No version/manifest change, release/tag creation or live acceptance was performed. Package and merged-state verification remain pending.
