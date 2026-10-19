# Deterministic Git authentication revision evidence

## Identity and execution

Campaign 087_745467a; original branch-off 745467a3929b23c6539d6319af451fbe9a6726e6, published opening f191ba282ae2855b4c1d8f6a6ef4d8ba0258994e. Working branch: revision/087_745467a-git-auth-supervision. Creation parent, integration target and return: revision/081_5b2442e-prerelease. Parent 081 remains open/suspended. [Assessment](REVIEW-REPORT.md), [accepted execution plan](REVISION-PLAN.md).

The human selected execution and confirmed that the token is fine. Preserve the supplied credential and implement the scripted direct-token route, finite supervision, cleanup, exact readback and workflow integration. No ACL/permission setup, credential replacement, personal-browser login, release or parent preparation continuation is selected.

## V-001 — Operation and supervision contract

The plan records the canonical Node publication entry, shared legacy credential core, single-operation workers, total 60000 ms default budget and separate owned cleanup before readback. A Python standard-library supervisor provides Windows Job Objects and Linux process-group/subreaper ownership; Python 3.11+ is an explicit prerequisite rather than an implicit installed package. This avoids treating parent-only termination as process-tree completion. The Linux process-local subreaper facility is available on Python 3.12.14; Microsoft Job Object/structure documentation was reviewed for suspended assignment, descendant membership and kill-on-close behavior. Native Windows behavior is not yet verified.

Working source remains the clean published opening. No production source is changed by this contract checkpoint. Runtime RED/GREEN, actual source/script changes and final platform evidence will be recorded below as performed, not inferred from this design.
