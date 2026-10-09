# Shared Markdown style revision report

## Campaign and result

- Campaign: `034_c9cee3d`; baseline: `c9cee3dc61ab3362b30d449d25852e8f35ee70b5`.
- [Review](REVIEW-REPORT.md); [accepted plan](REVISION-PLAN.md).
- Working branch: `revision/034_c9cee3d-shared-markdown-style`; target: `main`.
- Planning checkpoint `185d0c4` was pushed and read back before execution. The user authorized campaign execution on 2026-10-09.
- State: all four actions completed and coherent source boundary verified; final explicit merge/publication is established by the containing Git merge and remote readback. Version remains `0.15.0`.

## Revision evidence

| Action / findings | Actual change | Evidence and limits | State |
| --- | --- | --- | --- |
| V-001 / R-001, R-002 | Added the shared Markdown reference and catalogue trigger. | Source inspection: heading separation, four-space nesting, continuation attachment, code/template boundary and scoped review are explicit. Live consumer behavior not tested. | Verified by the coupled source/parser checks. |
| V-002 / R-001, R-002 | Connected all 14 other skill entries, current root guidance, scoped QC/verification, documentation and GitHub draft guidance to the shared owner. | Direct relative paths resolve to the bundled reference; local generic heading rules reconciled; task-specific hierarchy unchanged. | Verified by direct-entry and link checks. |
| V-003 / R-001, R-002 | Inspected 98 maintained/current Markdown files, including templates; no further formatting changes needed. Added scoped parser/source verification evidence. | All ten planned scenarios passed local assertions; 428 local path links resolve; literal non-Markdown code contents and task-derivation template unchanged. | Verified locally; live consumer behavior untested. |
| V-004 / R-001, R-002 | Built the committed-source release package and completed campaign navigation and reports before integration. | Unmodified workflow build produced 131 files matching Git byte for byte, including the new reference; SHA-256 verified. 113 support tests passed. | Coherent working boundary verified; merged-state checks and publication follow the Git boundary. |

## Verification scope and limits

The evidence script uses preinstalled Node and marked 17.0.5, not a new plugin dependency. It scans current Markdown candidates and checks representative parsed heading/list structures, task checklist nesting, mixed and wide numbered markers, continuation paragraphs and fenced blocks. Its negative fixtures reject missing heading blank lines and two-space children. One initial fixture incorrectly counted a second unspaced heading; it was corrected. The initial link scan also treated generated-template paths as live source links; parser-based link traversal now excludes literal code templates.

The scan is not a complete general-purpose Markdown linter or browser rendering test. ATX and Setext cases are covered; literal code/data is preserved. Verbatim root conversation transcripts, closed campaigns and the separate acceptance harness documentation are outside the maintained plugin-document check scope. Preservation of closed packages is checked from Git diffs without reading their contents.

All 113 support tests passed. The shared convention passes the strict standalone skill validator. Other skills' cross-skill bundled references are rejected as resource escapes by that isolated validator; these remain explicit plugin dependencies whose actual package-local targets passed the independent link checks. No claim of all-skills standalone conformance is made. See [skill results](evidence/skill-validation.json), [source/parser checks](evidence/source-checks.json), [verification script](evidence/verify_markdown.mjs) and [support log](evidence/support-tests.log).

No version/manifest change, release/tag creation or live acceptance was performed. Package verification passed; the full campaign tip must undergo the required merged-state checks before its explicit integration commit and target push.

## Composition and integration

The shared reference owns the two formatting rules. Direct skill entries expose its bundled path, existing local generic heading guidance points to that owner, and TASKS retains its checklist identity and parentage rules. Existing scoped QC and verification check presentation without replacing substantive review or granting repair authority. Current root orientation and README describe the same scope. No new skill, formatter or runtime plugin dependency was introduced.

Working source `640f26c` passed [final source checks](evidence/final-source-checks.json) and the actual committed [package build](evidence/package-check.json). Completing this report/index does not change shipped source or package inputs. The integration target was read back as `c9cee3d`; the complete report and all action commits will be included in the two-parent merge. The containing merge records final parent identities and completion; no post-closure report commit is required.

R-001 and R-002 are verified at the written-policy and local fixture level. Live consumer acceptance, browser rendering and isolated-skill portability beyond the explicit bundled dependencies remain unverified. No unresolved source finding remains within this campaign's accepted scope.

## Reopened amendment

The user explicitly reopened campaign 034 on 2026-10-09 to add blank lines around non-indented top-level lists and code blocks. The published starting checkpoint for this continuation is `8b9749c75b56eff028fee1575fdeaf917fe5d7f0`; the original campaign identity remains unchanged. Actions V-005 and V-006 in the amended plan are authorized for execution. State: reopened; amendment implementation and verification pending.
