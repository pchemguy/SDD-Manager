# Greenfield prompt order revision plan

## Campaign and accepted scope

- Campaign: `039_8bb3b3d`; full starting baseline: `8bb3b3da38471b21a385261edda898da191b86c9`.
- Working branch: `revision/039_8bb3b3d-greenfield-prompt-order`; target: `revision/037_a6c42dd-prerelease-review`, the established suspended parent branch. Parent review remains suspended.
- Human instruction: “Implement this via a focused revision campaign”, following acceptance of the recommendation to place the preliminary project description last. Directly accepted amendment; no separate review stage or invented findings.
- Owner: root Greenfield Project Prompt Template.md; current README navigation and release archive selection already identify this same file.
- Scope: reorder the existing description heading and fenced placeholder after the tracking instruction; preserve every prompt instruction, placeholder and authorization verbatim. Maintain this campaign’s evidence and current review index, publish checkpoints and integrate the verified campaign into the established parent target.
- Exclusions: policy rewrites, credential handling changes, acceptance-case edits, earlier campaign records, prerelease resumption, main integration and release publication.
- Execution evidence: [REVISION-REPORT.md](REVISION-REPORT.md).

## Accepted action

| Action | Intended change | Objective recheck |
| --- | --- | --- |
| V-001 | Move the complete preliminary-description block to the end of the copied prompt. Keep workflow request, repository/token, authorization and explicit tracking together before it. | Compare against the pinned baseline: exact text unchanged except block position; placeholder counts unchanged; description follows tracking and is last; inner/outer fences and Markdown spacing valid. Check README link, actual release-archive inclusion and manifest synchronization. Run the declared support suite for boundary integration; passing it does not prove agent compliance. |

## Persistence and stopping

Commit the single coherent source/evidence action, push and read back before integration work. Explicitly merge into the refreshed parent branch, inspect and verify the prospective merged state, commit/push/read back the target. Record final Git identities and checks in the merge commit without leaving a post-closure report amendment. Preserve prior campaign records and stop with campaign 037 suspended.
