# Revision plan

## Campaign and accepted objective

- Campaign: `026_ad9c0c9`; baseline: `ad9c0c9a3990d7b19ace60c5b0596bb39d6a5289`.
- Authority: the user commands a revision campaign requiring all preimplementation documents to be committed on a dedicated design-docs branch and merged into the repository default branch before implementation branches are created.
- Preparation branch: `design-docs/026_ad9c0c9-preimplementation-baseline`.
- Default target: `main`, established by `origin/HEAD -> origin/main` and refreshed remote state.
- Implementation branch: `revision/026_ad9c0c9-preimplementation-baseline`, to be created only after the preparation merge is verified and published.
- Scope: workflow instructions, branch conventions, startup gates, user-facing examples, and retained campaign evidence. Existing client compatibility manifests remain synchronized and unchanged.

## Ordered revisions

| Action | Outcome / owners | Verification |
| --- | --- | --- |
| V-001 | Establish design-docs naming and a shared preparation integration gate in sdd-conventions and sdd-manage. Cover initial, feature, and planned revision preparation; preserve scoped steering and interrupted implementation ownership. | Inspect positive, preparation-only, failed merge/publication, and continuation paths; exercise explicit Git ancestry in a disposable repository. |
| V-002 | Wire direct document owners, implementation startup, phase activation, feature sequencing, examples, and README to the shared gate. Remove conflicting same-branch feature preparation instructions. | Check all affected handoffs and relative links; verify no implementation branch is prescribed before the preparation merge. |
| V-003 | Verify source composition and support regressions, retain revision results, explicitly merge the revision into main, and publish the target. | Full support suite; manifest equality; whitespace/link checks; two-parent merge and remote containment evidence. |

## Execution and boundaries

Commit and publish this plan on its preparation branch, explicitly merge it into main, verify and publish that merge, then create the revision implementation branch from the resulting main checkpoint. Completed revisions and evidence are committed and pushed before final explicit integration. No product implementation, acceptance campaign, hosted issue creation, or changes to platform approval controls are included. This is a prompt-defined accepted revision; no preceding review report is fabricated.

## Evidence limits

Instruction consistency and local Git exercises establish their recorded coverage. They do not establish live installed-client compliance or disable host automatic review. Preserve existing unrelated work, branches, and historical records.
