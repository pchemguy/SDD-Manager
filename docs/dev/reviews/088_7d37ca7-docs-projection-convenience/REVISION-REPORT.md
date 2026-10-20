# Revision execution

## Context and state

Campaign 088_7d37ca7; baseline 7d37ca7606eeab1c17abe2eeb2157d99f2f6391c. Working branch `revision/088_7d37ca7-docs-projection-convenience`, creation parent/return target `revision/081_5b2442e-prerelease`. [Accepted plan](REVISION-PLAN.md). State: opened, implementation pending. Parent remains suspended. Initial target readback exactly matched the baseline; worktree was clean.

## Evidence

The existing projection CLI requires a request file; the draft CLI repeats repo/remote scope and defaults docs-main to the package template. The new entry will remove the mechanical intermediate file while preserving explicit inputs and all hosted validation. Source inspection is not runtime verification. No live demo or hosted tracking mutation is part of this campaign.
