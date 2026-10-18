# Scripting revision campaign

## Identity and entry

- Campaign: `076_af2703c`; state: accepted C-001 revision implemented, integrated into source/package/workflows and verified; open/unmerged for human review.
- Starting baseline and branch-off: af2703c57fb0222c9f36e7cd34b8503f7c659cf2.
- Working branch: revision/076_af2703c-scripting.
- Creation parent and eventual integration/return target: main.
- Repository: pchemguy/SDD-Manager; publication destination: origin, matching working branch.
- Human request: “Open a new scripting revision campaign.” This is a new campaign; no closed campaign is reopened.
- Opening checkpoint: ea77dde34d8d65c6258b401412dcf7ee353c3c84, published/read back before candidate assessment.

## Purpose and current boundary

Candidate C-001 is the human-supplied [forge-close.mjs](candidates/forge-close.mjs), which comments/closes GitHub task issues and closes milestones for a hardcoded demo repository. The selected stage is focused assessment for possible SDD Manager integration, following the campaign's scripting-review context. Original execution provenance is unknown; no original demo outcome is inferred from the source.

Initial assessment covered behavior/effects, current forge lifecycle fit, exact identity and complete lookup, completion evidence, retry/uncertain effects, credentials/destination, transport/results, Windows/Linux support and reusable-module documentation. Supplied source remains unchanged; controlled VM probes replace credential/filesystem and API access with fixtures. The initial review did not modify production source or invoke the candidate with real credentials.

The [focused report](REVIEW-REPORT.md) preserves eight original findings, strengths, ten controlled observations and official-source checks, followed by current dispositions. The human then authorized the [revision plan](REVISION-PLAN.md), fixes/documentation and integration into SDD Manager, explicitly keeping this campaign open. The utility/guide now live in sdd-forge/scripts with shared protected-token support under its credential owner. Existing issue/milestone references retain policy; the utility implements bounded mechanics. [Execution evidence](REVISION-REPORT.md) records completed fixes, native Windows/Linux contracts, regressions and reproducible package checks. Supporting code/tests/docs span a cohesive objective rather than a one-file rule.

## Continuity and next checkpoint

Main is the completed/waiting parent at the recorded baseline. Other closed campaign packages remain frozen. The entry [HANDOFF](../../HANDOFF.md) tracks this campaign; the [campaign index](../README.md) links its current record.

V-001–V-006 are complete. Publish/read back final records and wait for the human on the open/unmerged campaign branch. Integration means source/package/workflow integration, not a campaign merge. No live closure, real-token utility test, external demo repair, release or parent task continuation is selected.
