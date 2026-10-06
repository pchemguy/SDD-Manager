# Pre-release repair execution

Campaign 024_ed2d571. [Accepted plan](REVISION-PLAN.md), [original review](REVIEW-REPORT.md). User authorized R-001–R-004; live testing explicitly out of scope. R-005 remains excluded/unexecuted.

Working branch revision/024_ed2d571-pre-release-review; integration target feature/architecture-revision. Original source ed2d571d20aa8ad6ee77f25ad89602e82e6a653b; repair baseline 21d144057413473f7e402fa0ce679cf2e3095024. State: execution in progress.

| Action | State | Evidence |
| --- | --- | --- |
| V-001 / R-001 | Implemented and focused recheck passed | [RED](probe-red.txt): two actual boundary assertions fail; [GREEN](probe-green.txt): five checks pass. Public package import/origin, package-only layout, broken public export, actual injected assertions and import/setup distinction tested. Injector/assessor guides disclose its narrower layout. |
| V-002 / R-002 | Implemented and focused recheck passed | [RED](receipt-red.txt): three behavioral assertion failures and two prior resume/load errors (not behavioral RED). [GREEN](receipt-green.txt): nine tests pass; fresh/resume dangling and occupied symlinks plus parent links rejected before effects; ordinary held continuation/drift/uncertain non-replay retained. |
| V-003 / R-003 | Implemented and focused recheck passed | [RED](package-red.txt): actual snapshot omitted linked notice. [GREEN](package-green.txt): two package-documentation checks pass including notice link closure and dirty fingerprint changes. Package paths/docs aligned; identical manifests now 0.14.7. Full actual-source snapshot audited after source commit. |
| V-004 / R-004 | Implemented; source/navigation recheck passed | [Campaign index check](campaign-index-check.json): 001–024 each occur once in one contiguous table; all record links exist. Restored truthful 020 entry, repaired row gaps and added current review/revision navigation. Initial new-row spacing failed the structural check and was corrected before commit. |

No live acceptance, installed-client activation or product changes selected.
