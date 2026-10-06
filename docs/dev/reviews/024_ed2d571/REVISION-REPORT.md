# Pre-release repair execution

Campaign 024_ed2d571. [Accepted plan](REVISION-PLAN.md), [original review](REVIEW-REPORT.md). User authorized R-001–R-004; live testing explicitly out of scope. R-005 remains excluded/unexecuted.

Working branch revision/024_ed2d571-pre-release-review; integration target feature/architecture-revision. Original source ed2d571d20aa8ad6ee77f25ad89602e82e6a653b; repair baseline 21d144057413473f7e402fa0ce679cf2e3095024. State: execution in progress.

| Action | State | Evidence |
| --- | --- | --- |
| V-001 / R-001 | Implemented and focused recheck passed | [RED](probe-red.txt): two actual boundary assertions fail; [GREEN](probe-green.txt): five checks pass. Public package import/origin, package-only layout, broken public export, actual injected assertions and import/setup distinction tested. Injector/assessor guides disclose its narrower layout. |
| V-002 / R-002 | Pending | Receipt path preservation checks |
| V-003 / R-003 | Pending | Real package snapshot and notice navigation |
| V-004 / R-004 | Pending | Campaign table completeness/navigation |

No live acceptance, installed-client activation or product changes selected.
