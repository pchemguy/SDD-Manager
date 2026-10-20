# Windows shell handling revision campaign

## Opening

- Campaign: 089_8e719ce.
- Full starting baseline and branch-off: 8e719ce965526dbbae266009ff8c1114b7d70a80.
- Working branch: revision/089_8e719ce-windows-shell-handling.
- Creation parent and eventual return target: revision/081_5b2442e-prerelease.
- State: Open; awaiting the human's scope and direction.
- Authority: Open and publish the campaign only. The human explicitly instructed: “No proposals yet.”

## Boundary and persistence

The subject is Windows shell handling. No proposal, revision plan, assessment result, source repair or test change is defined or executed by this opening. Earlier conversation does not select a solution for this campaign. Parent 081 remains open/suspended. Do not resume prerelease work, alter release inputs/version, merge, close the campaign or install a plugin through this opening.

The parent worktree was clean and its published ref exactly matched the full starting baseline before branch creation. Opening records, navigation and HANDOFF are the only authorized file changes. Publish/read back the opening commit, then stop on the new campaign branch. Subsequent work awaits human direction; retain the ordinary per-commit publication and closed-record boundaries.

## Subsequent selected revision

The human has now supplied the Windows shell requirements and exact replacement shim. The opening-only boundary above records the original checkpoint; the subsequent grant selects the [revision plan](REVISION-PLAN.md). State: revision authorized, native regression and implementation pending. The earlier “No proposals yet” direction does not block execution of these now-supplied requirements. Campaign 089 remains open; no parent integration or closure is selected.

## A-001 — Native regression checkpoint

The source-only fixture now models the reported harness escaping, checks unchanged apostrophes, quoted native Node/script/argument paths, actual forge helper startup, output/status and temporary CMD-script sequencing. Inline command-chain tests and the removed conversion expectation were replaced. CI selects native Windows CMD with Node 22/24 and Python 3.11. The old adapter is deliberately retained for the first native regression run; this checkpoint is not a completed repair. Local Linux collection can only skip these Windows contracts and is not runtime evidence.
