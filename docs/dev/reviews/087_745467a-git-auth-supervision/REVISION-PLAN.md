# Deterministic Git authentication revision plan

## Identity, objective and current stop

Campaign 087_745467a starts from 745467a3929b23c6539d6319af451fbe9a6726e6 on revision/087_745467a-git-auth-supervision. Creation parent, integration target and return branch: revision/081_5b2442e-prerelease. Parent 081 stays open/suspended. [Focused assessment](REVIEW-REPORT.md) records R-001–R-003, the screenshot limits and the native offline probe.

Replace agent-dependent detection/recovery of a stuck Git credential operation with one deterministic, bounded program path. The human selected execution after published opening f191ba282ae2855b4c1d8f6a6ef4d8ba0258994e. Execute the bounded revision and its verification/integration lifecycle, returning with parent 081 suspended. No new T-task IDs, credential store, permission/ACL procedure, general shell service or workflow journal is needed.

## Recommended operation contract

### One entry point from the first attempt

Introduce one canonical coordinator-owned CLI, proposed name `git-publish.mjs`, for the existing narrow HTTPS push and exact-ref readback operations. Its name should reflect normal publication rather than an optional after-failure rescue. Reuse existing destination/context/token/readback logic. Retain git-auth-recover.mjs only as a thin compatibility entry where required, with one implementation of each policy/lifecycle decision rather than two competing utilities. A cohesive process-supervision module may be shared internally; do not split trivial helpers into separate files.

The caller supplies already authorized repository/remote, exact full ref and expected object. Resolve/check actual destination and local source before network effects; ambiguous sources, multiple push URLs, rewrites or scope mismatches return structured failure rather than guessed decisions. Preserve non-forced, single-ref semantics and existing hook/submodule/tag restrictions. This script implements the established operation; it does not grant authority, waive provider/repository restrictions or choose a campaign target.

### Deterministic credential routing

The human accepted the direct-token recommendation and confirmed that the token is fine. Change the current existing-auth-first policy for this case: when an explicit or conventional already supplied eligible repository token is available, use the command-scoped transient helper immediately and reset inherited helpers for that invocation. Do not first launch helper-selector, modify persistent Git configuration, replace the token or put it into argv/URLs/logs. Ordinary OS read access remains sufficient; do not restore ownership/ACL inspection.

Without a selected eligible token, give existing noninteractive authentication one supervised attempt. Return a clear credential-required/local-helper/transport result on failure; do not open login UI, run endless retries or silently change accounts. A present but malformed/ineligible supplied token must produce an actionable input failure rather than silently falling through to an unrelated credential mechanism. An explicit token rejection is distinct from a local helper failure and does not authorize bypassing a provider denial.

Assess an explicit same-repository credential-source root for linked worktrees so an existing protected token need not be copied or wrapped in an improvised askpass script. Require verified shared Git repository identity and retain root-relative file validation in that selected source; do not search unrelated repositories or accept arbitrary external token paths. A fresh/preparation context still obeys the existing token-storage/pre-write gates. Unsupported protected transfer is reported precisely rather than creating early repository files.

### Finite process lifecycle and result

Use a responsive supervisor from the beginning, including local preflight, credential/helper calls, transport, output collection, cleanup and readback. A blocked synchronous worker must not block the controller's deadline. Define a finite configurable whole-operation deadline, with a documented default and bounded cleanup/readback reserve; stage transitions, subprocesses and retries do not restart it. Retain per-stage limits where useful. Do not depend on GNU timeout, PowerShell, a human's polling cadence or helper-specific flags as the only bound.

Keep ownership of the attempt's process root/tree until final disposition. Validate POSIX process-group and Windows-native PID/tree cleanup against actual child/helper/grandchild behavior, including parent exit before inherited streams close. Bound the cleanup mechanism itself. Never kill by broad image name or terminate unrelated Git/IDE processes. If termination/ownership cannot be confirmed, return a finite explicit cleanup-unconfirmed blocker and prevent another write attempt; do not claim success or abandon an active process silently. Any supported limitation involving escaped processes/OS denial must be tested and documented rather than hidden behind a universal guarantee.

Use one versioned public JSON result with stable exit meanings and allowlisted stage/failure categories, elapsed/budget information, separate process/cleanup/remote state and a clear next-action classification. Optional stage progress must remain sanitized. Preserve bounded output and private helper protocol stdout; never return raw credential output, exception stacks or arbitrary Git stderr. Distinguish a completed transport with lingering pipes, credential failure, denied access, timeout, output limit and missing cleanup facility where evidence permits.

After an uncertain write, settle the original process and perform bounded exact-ref readback before replay. A matching ref can establish remote state even after a push error; unknown/different state must remain explicit. Do not infer that this attempt wrote an already matching ref or turn an uncertain result into an automatic force/retry loop. The default call performs at most one write; an extra attempt requires the defined recovery state and budget, not free-form agent improvisation.

## Ordered revisions

| Action | Findings and outcome | Targets, dependencies and verification |
| --- | --- | --- |
| V-001 | R-001/R-002: establish the canonical CLI/auth/result contract and demonstrate viable supervision/cleanup backends before production changes. | Existing Git auth module/guide and native test fixtures. Resolve first-attempt token routing, default total budget/reserves, linked-worktree credential scope, old-entry compatibility and Windows process ownership. Do not promise Windows cleanup from a POSIX prototype. |
| V-002 | R-002: implement the bounded responsive runner/controller and owned cleanup. | Reuse existing validated worker/helper logic where useful; supervise all blocking work and stream lifetimes. Real public-CLI RED/GREEN fixtures must demonstrate timeout, output/pipe races and confirmed cleanup or explicit cleanup failure without affecting an unrelated sentinel. |
| V-003 | R-001: integrate deterministic credentials, exact destination/ref checks and state reconciliation into the canonical publication entry. | Depends on V-001/V-002. Reuse protected-token validation, helper context/GIT_DIR handling and secret-safe summaries. Token-assisted path must never invoke an inherited selector; tokenless path is bounded. Preserve successful existing-auth use when selected. |
| V-004 | R-001/R-003: document and integrate the scripted path into actual workflows. | Update Git publication/monitoring, credentials, implementation startup/completion and coordinator/contributor routing only where affected. Replace raw initial-push-plus-agent-watchdog instructions with the canonical call. Audit fetch/clone/other Git network entry points: give supported calls the same supervisor or explicitly retain bounded unsupported scope; do not claim the push/readback interface automatically covers them or forge API authorization. Keep one substantive CLI guide and shallow workflow handoffs, with Windows CMD/Linux examples. |
| V-005 | R-003: complete native regression/compatibility verification and selected campaign finalization. | Public CLI/native HTTPS tests on Linux and Windows CMD with Node 22/24; affected shared forge suites if shared code changes; contributor suites, exact package/schema/link checks and frozen-record preservation. Native Windows cleanup remains unverified until actually run. Persist action evidence/publish every commit; integrate/close only when execution and its completion boundary are selected. |

## Required regression contrasts

Tests must exercise real spawned processes and the public CLI, not only injected outcomes. These abstract contrasts illustrate required risks without prescribing a product domain or a test-count quota:

- Eligible supplied token with an inherited hanging selector: selector is never invoked; the requested authenticated transport/readback works.
- No token, working existing authentication: one bounded successful path without unnecessary credential storage.
- No token, helper waits forever or asks for unavailable input: the public call terminates within its documented bound with safe diagnostics.
- Nested helper/grandchild, stalled transport, parent exit with inherited pipes held, excessive output and user cancellation: bounded disposition, no continuing owned activity on a claimed cleanup success, and an unrelated process remains alive.
- Cleanup tool missing/denied or ownership uncertain: finite explicit blocker; no overlapping retry or fabricated remote outcome.
- Multiple stages approach their limits: the shared budget is not renewed; reserved cleanup/readback and actual elapsed time are accounted for.
- Push accepted remotely but response is lost, or readback is absent/different/unavailable: exact state classification and no duplicate/forced write.
- Token file/context changes, incompatible Git helper environment, linked worktree paths, spaces/quotes and malformed input: retain existing validation and secret-canary protections.
- Non-credential outage, policy denial or unsupported transport/operation: precise scope/result, no token replacement or transport/account switch by assumption.

## Evidence, persistence and limits

The opening includes source assessment and a two-second local synthetic helper stall, not the production repair. Execution now selects native regression/CI checks for the changed source; distinguish actual results from prepared jobs and do not claim Windows runtime verification from Linux checks. No remote manipulation of the user's existing Antigravity process, browser login, token replacement or permissions repair is selected.

## V-001 execution decisions

The canonical entry is git-publish.mjs. Keep the existing validated recovery core and old CLI compatibility, with a single shared implementation of credential/destination/ref checks. Execute push and readback as separately supervised attempts so the first process tree is settled before readback. The outer controller stays responsive even when a synchronous worker blocks. A present eligible token is used immediately; an explicitly selected credential-root worktree must share the actual Git common directory. Tokenless existing-helper execution is supervised and requests noninteractive behavior; helper-specific flags alone are not a guarantee about arbitrary helper UI.

Use a bundled Python 3.11+ standard-library supervisor, with Node.js 22+ and native Git. Windows starts the worker suspended, assigns it to a kill-on-close Job Object, then resumes it; descendants remain owned even after their parent exits. Linux uses an isolated process group and a process-local child subreaper to dispose/reap adopted descendants. This replaces the proposed PID-only taskkill backend, whose ownership can be lost when parents exit. No PowerShell, GNU timeout or third-party package is required. Missing runtime/OS ownership facilities produce a structured blocker before transport rather than an unbounded fallback. The Linux subreaper facility was verified locally; Windows runtime evidence remains required.

Default total deadline: 60000 ms, configurable from 1000 through 600000 ms. Reserve at most 3000 ms per attempt for cleanup and one quarter of the total (capped at 15000 ms) for readback, including its cleanup. The controller's monotonic deadline governs startup, local preflight, network work, stream collection and cleanup; new workers do not renew it. Optional progress is sanitized stage data on stderr, with one final JSON result on stdout. Stop after at most one push; retry authority and remote-state reconciliation remain explicit. Public timeout/cancellation/uncertain-cleanup results cannot claim successful completion from a matching ref alone.

Every action checkpoint must be verified, committed, pushed and exactly read back before advancing. Preserve all closed campaigns, runtime scope, unrelated work and real credentials. On later selected completion, explicitly merge the verified child into revision/081_5b2442e-prerelease, restore the parent's suspended HANDOFF, run merged-state checks, publish/read back and return. Child completion does not resume parent 081 or refresh its release inputs. No main merge, release/tag/dispatch, version bump or plugin installation follows this opening.
