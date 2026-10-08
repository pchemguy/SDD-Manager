# Preserve closed campaign records

Campaign `029_4a93f0f`; starting and inspected baseline `4a93f0fa2723b1da11024165e6ca967701f747a6`. Branch: `revision/029_4a93f0f-closed-campaign-records`; eventual target: the established default `main`.

The user requests planning only: clearly prohibit changing review/revision records and feature documents from prior closed campaigns, including when current changes make earlier documents defective. This plan may be committed and published on its revision branch. Source implementation and default-branch integration are outside this request.

## Required behavior

1. Once a campaign closes, its retained review plans/reports, revision plans/reports, imported reviews, evidence, feature design/SPEC/PLAN/layout/TASKS documents, associated QC reports and package navigation are frozen. Do not edit or append to them, repair their links, rewrite their status, rename, move or delete them as part of a later campaign. Preserve their bytes, paths and original provenance.
2. A later campaign's removed file, changed API, renamed module, new convention, invalidated assumption or altered acceptance does not justify repairing a closed record. That record describes its recorded source and decisions; it is not a current governing document. The current campaign owns any newly discovered defect, erratum, changed interpretation, supersession or migration explanation.
3. Put such findings and corrections in the current campaign's report, referencing the prior campaign ID, path/section and recorded source or closure commit. A current document may link to an immutable Git version for historical context. Do not retrofit such links or notes into the closed artifact itself. Correct maintained main project documents and current navigation within scope; do not make an old historical claim appear to have described the new system.
4. Finish eligible archive moves, historical markers, package navigation and final report updates while that campaign is still active, before its final verification/integration/publication and closure. Archival and closure are distinct: an archived file in an active campaign can still require its authorized finalization; a closed package cannot be changed by reopening its files for convenience. Later corrective work uses a new campaign and leaves the closed package frozen.
5. Determine active, paused, incomplete and closed status from the existing campaign scope, reports, Git integration/publication and stated stopping boundary. A directory name, checked item, archived Ready report or single commit alone is not proof of closure. Do not introduce a separate mutable campaign registry. If closure or ownership is uncertain, retain the records and resolve that status before affected edits.
6. Link validation and reconciliation must distinguish maintained/current targets from frozen historical records. A later link failure can be reported as a historical incompatibility in the current campaign; it is not an instruction to repair the old document. Required checks of current maintained links still apply. Do not conceal a broken historical link or mark an affected check as passed merely because the old record is frozen.
7. Before staging and integration, inspect the full diff against the campaign starting checkpoint and confirm that paths owned by prior closed campaigns are unchanged. Include feature packages, nested steering records and retained evidence, not only the general reviews directory. Report violations and move the proposed explanation/correction to current records before completion.

## Baseline evidence and affected owners

The retention rules in `sdd-conventions/references/review-campaigns.md` preserve provenance but do not explicitly freeze closed artifacts. Workflow identity, feature incorporation and campaign reporting call for link/navigation/archive updates without a clear closure boundary. Review coordination permits appended rechecks without explicitly limiting them to active campaigns. These procedures need one consistent lifecycle rule and owner-specific handoffs, rather than a new standalone policy file.

Campaign 028 illustrates the failure: it changed six Markdown links in records from campaigns 010 and 013–016 when deleting a source file. The desired behavior is to document that incompatibility in campaign 028 or a later current campaign, preserving the original closed records. This plan records the example without retroactively editing those earlier records or campaign 028. It does not authorize undoing those historical edits.

| Action | Owners and change | Dependencies | Verification |
| --- | --- | --- | --- |
| V-001 | Establish the closure/freeze rule in sdd-conventions review-campaigns and align workflow-identity's archive/rename guidance. Cover all retained review, revision, steering and feature package artifacts; separate current main owners from snapshots. | Subsequent instruction to execute; inspect actual closure evidence. | Rule forbids post-closure edits, including link repair, append-only errata, relocation and status rewrites; active finalization and current canonical edits remain possible. |
| V-002 | Align sdd-manage review-and-revision/coordination and sdd-report campaign-artifacts: current campaign owns new findings and supersession; final records are completed before closure; no later report append to a closed campaign. | V-001. | Both reporting and execution handoffs select current evidence destinations and preserve closed packages. No conflicting permission to update prior canonical finding dispositions. |
| V-003 | Align sdd-integrate-feature incorporation/archive, sdd-docs link maintenance, relevant verification guidance and README/AGENTS navigation. Limit automatic link/status/archive fixes to maintained or active artifacts. Preserve current task reassessment in main owners without rewriting archived feature snapshots. | V-001–V-002. | Inspect both sides of archive/QC/reporting and link-check handoffs; original bytes/paths of closed records unchanged. |
| V-004 | Assess the scenario matrix, verify actual protected-path diffs and relevant source/support checks, retain results in this campaign, and publish coherent checkpoints. Explicitly integrate the complete verified campaign tip and push the actual default branch when execution is authorized. | V-003. | Full branch diff excludes prior closed paths; source links/anchors and manifest synchronization pass; required support suite passes. Fresh consumer coverage, when unavailable, is reported separately. |

## Scenario matrix

| Scenario | Required outcome |
| --- | --- |
| Current campaign deletes a file linked from a closed review | Leave the old review unchanged; record the broken historical reference and source context in the current report; fix only maintained current links. |
| Current change invalidates a closed feature's specification or completion claim | Update current main requirements/tasks and record the new finding now; retain the old feature sources, checked snapshot and reports as written. |
| New finding concerns an earlier closed campaign | Allocate a current finding with a qualified prior reference; do not append to the old report or alter its original disposition. |
| Link checker flags both a current link and a closed historical link | Repair the current link in scope, report the historical failure separately with provenance, and preserve old bytes. No fabricated all-links-pass result. |
| Feature archive/QC/navigation is being finalized before closure | Complete authorized source/report moves and navigation on the active feature branch before final verification and publication; freeze the resulting package at closure. |
| Campaign is paused or incomplete rather than closed | Continue its already authorized scope and current records; do not infer closure from its name or an archive label. |
| Closure state is unclear | Inspect existing reports, scope and Git/publication facts; preserve the potentially frozen files until ownership/status is resolved. |
| Global/current navigation needs a new entry | Add current navigation within scope; do not rewrite old campaign rows or closed package README merely to describe today's implementation. |
| Later request corrects closed work | Open/use the new campaign and change current governing implementation/docs; leave the old closed campaign records frozen. |
| Final branch includes an incidental edit or rename under a closed package | Detect the protected-path change before commit/integration; retain the old artifact and put new explanation in the current campaign. |

## Persistence and stopping

Publish this plan on its revision branch and stop. No source behavior changes, prior-record repairs, support-test changes or main merge are included in the planning request. Execution requires a subsequent instruction. Keep this campaign identity and directory for continuation.
