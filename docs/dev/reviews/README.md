# Review and revision campaigns

Campaign directories combine a stable repository sequence with the starting commit. Full baselines and exact reviewed/tested states are recorded inside the artifacts. Existing IDs and historical evidence are preserved; a missing optional stage has no placeholder file.

| Campaign | Scope / state | Records |
| --- | --- | --- |
| `001_49143fa` | Historical plugin review with corrections and verification in one report. Reviewed baseline known. | [Review report](001_49143fa/REVIEW-REPORT.md) |
| `002_81011e7` | Systematic review and verified SDD-R-001 / SDD-R-002 follow-up. | [Review plan](002_81011e7/REVIEW-PLAN.md), [review report](002_81011e7/REVIEW-REPORT.md), [revision plan](002_81011e7/REVISION-PLAN.md), [revision report](002_81011e7/REVISION-REPORT.md) |
| `003_39374c8` | Independent critique followed by accepted branching/failure-handling revisions; source campaign merged and published. Campaign start known; independent reviewed baseline unknown. | [Review report](003_39374c8/REVIEW-REPORT.md), [revision plan](003_39374c8/REVISION-PLAN.md), [revision report](003_39374c8/REVISION-REPORT.md) |
| `004_af715bb` | Focused design/SPEC articulation and MVP-first PLAN/TASKS strategy review; revisions verified, explicitly merged, and target publication verified. | [Review report](004_af715bb/REVIEW-REPORT.md), [revision plan](004_af715bb/REVISION-PLAN.md), [revision report](004_af715bb/REVISION-REPORT.md) |
| `005_79fab0e` | Prompt-defined repository token convention and shell authentication recovery; revisions verified, explicitly merged, and target publication verified. | [Revision plan](005_79fab0e/REVISION-PLAN.md), [revision report](005_79fab0e/REVISION-REPORT.md) |
| `006_0393fee` | Three core development workflows and lightweight steering revision; revisions verified, explicitly merged, and target publication verified. | [Revision plan](006_0393fee/REVISION-PLAN.md), [revision report](006_0393fee/REVISION-REPORT.md) |

New campaigns use REVIEW-PLAN, REVIEW-REPORT, REVISION-PLAN, and REVISION-REPORT in their directory as applicable. A focused review may start from a prompt and record its scope/criteria in REVIEW-REPORT. Accepted changes update relevant governing project documents while campaign records remain retained. Additional independent reports can use named subdirectories within the same campaign.
