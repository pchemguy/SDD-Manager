# Deterministic Git authentication revision evidence

## Identity and execution

Campaign 087_745467a; original branch-off 745467a3929b23c6539d6319af451fbe9a6726e6, published opening f191ba282ae2855b4c1d8f6a6ef4d8ba0258994e. Working branch: revision/087_745467a-git-auth-supervision. Creation parent, integration target and return: revision/081_5b2442e-prerelease. Parent 081 remains open/suspended. [Assessment](REVIEW-REPORT.md), [accepted execution plan](REVISION-PLAN.md).

The human selected execution and confirmed that the token is fine. Preserve the supplied credential and implement the scripted direct-token route, finite supervision, cleanup, exact readback and workflow integration. No ACL/permission setup, credential replacement, personal-browser login, release or parent preparation continuation is selected.

## V-001 — Operation and supervision contract

The plan records the canonical Node publication entry, shared legacy credential core, single-operation workers, total 60000 ms default budget and separate owned cleanup before readback. A Python standard-library supervisor provides Windows Job Objects and Linux process-group/subreaper ownership; Python 3.11+ is an explicit prerequisite rather than an implicit installed package. This avoids treating parent-only termination as process-tree completion. The Linux process-local subreaper facility is available on Python 3.12.14; Microsoft Job Object/structure documentation was reviewed for suspended assignment, descendant membership and kill-on-close behavior. Native Windows behavior is not yet verified.

Working source remains the clean published opening. No production source is changed by this contract checkpoint. Runtime RED/GREEN, actual source/script changes and final platform evidence will be recorded below as performed, not inferred from this design.

## V-002/V-003 — Supervised implementation and credentials

Added the canonical effect-free Node entry and private Python supervisor; retained the old CLI as a supervised token-default compatibility entry and its reusable synchronous validation API. The controller owns one monotonic deadline, bounded output/pipe collection, cancellation and separate single-operation workers. Windows uses suspended Job Object assignment; Linux uses process groups/subreaping. Missing runtime and uncertain cleanup stop without another write. Existing token/context checks remain; explicit same-common-directory credential roots avoid copying credentials between worktrees. Auto uses a present eligible token immediately, or supervised existing authentication only when absent. Explicit token selection never silently falls through.

The first behavioral RED used the existing public CLI with a selected working existing helper and no token; it failed the new public contract before implementation (one test collected/executed). The expanded native local HTTPS/process contracts then exposed Linux procfs differences: this host omits task/children and exposes outer namespace PIDs. The implementation now translates namespace IDs and verifies adopted-child parent relations under a bounded procfs scan. Tests verify owned helper/grandchild termination and reaping while an unrelated sentinel survives, including a detached orphan holding streams. A buffered daemon stdin reader also delayed Python shutdown; unbuffered OS reads removed that shutdown-lock hazard.

The native lost-success fixture suppresses the successful backend reply with a completed HTTP error after applying the ref. An empty disconnected response caused libcurl itself to replay its HTTP POST; that is transport behavior within one Git invocation, not a second scripted push. The selected fixture therefore verifies one authorized POST plus exact readback of the applied object. The script performs at most one Git push invocation, with no retry loop. Token eligibility loss after push now blocks the separately validated readback, retaining unknown remote state and its local category; the prior anonymous readback expectation was revised to enforce the pinned credential boundary.

## V-004 — Workflow integration

The existing cohesive CLI guide now defines the canonical/compatibility interfaces, Node/Python/Git prerequisites, total budget, process ownership, credential-source scope, secret-safe results, cancellation and unsupported operations. Coordinator publication/credential routing, implementation startup, human README and contributor CI instructions use the supervised entry from the first HTTPS attempt. Clone/fetch/SSH/API and previously launched commands explicitly require their own bounded facility; none acquire coverage by implication. No ACL, helper-store or credential replacement procedure was added. The Windows CMD/Linux Node 22/24 matrix now installs Python 3.11 and runs both contract suites.

Runtime verification and package/platform disposition are recorded at V-005 below. Local Linux success is not native Windows, installed-agent or Antigravity evidence.

V-002–V-004 checkpoint: Node 24.19.0/Git 2.51.1/Python 3.12.14 on Linux ran 46 native/synthetic contracts, all passing with zero skips (34 retained core plus 12 public supervision cases). Changed Markdown audit: 15 files, 496 local links, 68 fragments, no unresolved/style candidates; 246 frozen targets were existence-only. Whitespace checks passed. Native Windows evidence remains pending the published source matrix.
