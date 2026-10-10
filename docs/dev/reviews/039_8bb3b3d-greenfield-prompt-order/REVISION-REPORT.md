# Greenfield prompt order revision report

## Campaign and execution

- Campaign: `039_8bb3b3d`; baseline `8bb3b3da38471b21a385261edda898da191b86c9`; [accepted plan](REVISION-PLAN.md).
- Working branch: `revision/039_8bb3b3d-greenfield-prompt-order`; target: `revision/037_a6c42dd-prerelease-review`.
- V-001: moved “Preliminary project description:” and its complete fenced placeholder after the explicit GitHub tracking instruction, immediately before the copied prompt’s outer closing fence. Operating instructions now precede the description as one contiguous group. Wording and placeholders are preserved.
- State: V-001 complete; direct source and local support checks pass. Final integration/publication facts are recorded in Git. No separate findings or review report are fabricated for the directly accepted amendment.

## Verification and integration

- Exact baseline comparison verifies that only the complete description block’s position changed; its heading, fenced text and trailing blank line moved verbatim. All instructions and placeholder counts are unchanged.
- Inspected inner three-backtick and outer four-backtick fences, blank lines after the header/around code blocks, active campaign links and Markdown markers. Current README link resolves and no navigation target changed.
- Release-workflow archive selection still includes the same root template; actual staged-tree archive extraction matches the revised file. Canonical and legacy manifests are byte-identical.
- Declared support suite: `PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v`; 113 tests passed in 16.100 seconds, exit 0, Python 3.12.14. The subsequent trailing blank-line adjustment was directly rechecked; support code/assets were unchanged.
- Whitespace check and full path diff verify the change is confined to the template, this campaign and current index. Earlier campaign files remain unchanged. Final action identity, explicit two-parent merge, merged-state evidence and target publication are retained in Git. No live consumer comparison or client loading is selected; an ordering change does not establish improved compliance.

## Stopping boundary

Campaign 037 remains suspended and its records are unchanged. Main integration, product release and changes to earlier campaigns are outside this amendment.
