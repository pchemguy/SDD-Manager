# Testing with TextStats

TextStats exercises SDD Manager through fresh consumer workflows and independent assessment in a dedicated test repository. The [TextStats README](textstats/README.md) explains setup, required variants, optional recovery, evidence and final integration into test main. Agents coordinating a run must load [TextStats AGENTS.md](textstats/AGENTS.md); source contributors load [acceptance/AGENTS.md](AGENTS.md) for local verification and package prerequisites. Support tests check the harness, not live agent acceptance.

## Evidence and limits

The [historical runtime campaign](../docs/dev/reviews/008_98a5562/REVISION-REPORT.md) records 27 independently assessed scoped cases through explicit skill-source loading, live tracking/publication and controlled recovery. Installed-client discovery/routing/activation was untested, and journals were not complete native transcripts. The current catalog has 33 supported cases, including release-message and optional client scenarios; additions require new consumer evidence and inherit no historical passes.

The [20261004 diagnostic](../docs/dev/reviews/021_85f2857/DIAGNOSTIC-REPORT.md) retains 20 Passed / seven Blocked for pinned 0.14.3; evidence was subsequently merged into test main. [Campaign 021](../docs/dev/reviews/021_85f2857/REVISION-REPORT.md) records the resulting harness/documentation amendments. [Campaign 010](../docs/dev/reviews/010_3f56922/REVISION-REPORT.md) retains source/consumer backend verification. These are historical source-qualified observations; revised-source live, release-consumer and installed-client acceptance remain separately pending. Read selected history only for a specific evidence question, not as current instructions.

## Prior test repositories

Retain this list when adding runs:

- [Skill-Test-SDD-Manager-TextStats-20261003](https://github.com/pchemguy/Skill-Test-SDD-Manager-TextStats-20261003)
- [Skill-Test-SDD-Manager-TextStats-20261004](https://github.com/pchemguy/Skill-Test-SDD-Manager-TextStats-20261004)

Names are history, not default destinations or acceptance verdicts. Resolve each run's dedicated repository, pinned package, selected variants and evidence facilities through the coordinator instructions before preparing fixtures.
