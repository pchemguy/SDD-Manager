# Authentication helper revision — campaign opening

## Identity and authority

- Campaign: 082_d0d7438; opened 2026-10-19 from d0d7438bf1e6ec850870cfc43be32573c784dc0c.
- Working/publication branch: revision/082_d0d7438-auth-helper on origin, pchemguy/SDD-Manager. Directory: docs/dev/reviews/082_d0d7438-auth-helper.
- Immediate parent, creation parent, integration target and return branch: revision/081_5b2442e-prerelease. Its exact published checkpoint is the branch-off baseline above; campaign 081 remains open and its execution is suspended.
- Human request: “Open a nested campaign to revise authentication helper.” This opening establishes the focused scope and continuity; it does not execute a repair or close/integrate either campaign.
- State: Open, awaiting focused analysis and revision planning. [Parent evidence](../081_5b2442e-prerelease/REVISION-REPORT.md), [handoff](../../HANDOFF.md), [index](../README.md).

## Objective and bounded scope

Revise the coordinator-owned Git authentication helper so its actual Git subprocess/helper handoff works with the intended protected transient credential mechanism on Windows and Linux. Preserve exact repository/destination/ref validation, bounded processes and readback, protected token handling, noninteractive operation and the distinction between authentication and operation authority.

Primary sources are [git-auth-recover.mjs](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/scripts/git-auth-recover.mjs), its [guide](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/scripts/git-auth-recover.md), [protected-token.mjs](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/scripts/protected-token.mjs), the coordinator's [credential workflow](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/references/credentials.md), and source tests/native CI. Shared-module changes must assess their completion/projection callers rather than weakening validation globally to make one helper invocation pass.

The initial lead is a reported consumer failure: Git supplied GIT_DIR when launching the credential helper; a temporary wrapper clearing that variable reportedly allowed the push. This campaign has not reproduced that result or inspected the demo repository. Opening source inspection confirms only that helperMain calls childEnv through token validation, and childEnv rejects GIT_DIR and other relocation/config variables. The distinction between legitimate Git-provided context and hostile ambient relocation must be established before choosing a correction. No canonical finding or accepted implementation is invented from that report.

Focus subsequent analysis on the public CLI → Git transport → private helper → protected-input validation path. Check actual native helper invocation, repository identity, inherited environment/configuration, protocol/output handling, failure classification and recovery. Plan meaningful positive and rejection cases; credential-fill alone must not be assumed to cover a transport invocation. Keep Windows CMD/Node and Linux evidence distinct. Update focused in-code documentation, the script guide and owning workflow references where the resulting behavior requires it; retain cohesive reference boundaries.

This is not a general credential framework or unrelated scripting revision. No persistent helper/store changes, installed-plugin update or release operation is selected at opening. Credentials remain outside campaign evidence. Existing original PowerShell.cmd assignment and quote-conversion instructions remain controlling.

## Opening evidence

The worktree/index were clean on the parent checkpoint. Complete remote head/tag discovery returned 97 rows and verified the parent's exact SHA; shared local/remote/path identity inventory had maximum sequence 081, so 082 was free. The seven-character baseline resolves uniquely, branch syntax passed, no local/remote branch or directory collision was found, and the child branch was created from the verified parent. Execution host is Linux; no Windows shim activation is needed here.

Opening changes are limited to this report, the active parent's suspension record, HANDOFF and campaign navigation. Verify their links/style and exact path scope, then commit, push and read back the child ref before stopping. Runtime tests and a new native/client/provider trial are not claimed for this documentation-only opening. The actual opening commit and subsequent publication are recovered from Git; this document does not embed its own future SHA.

## Parent preservation and stop

Campaign 081's prepared 0.15.1 source ddb86fc926ddc2cfbd15946946c75a9c3672645d and its recorded notes/package hashes remain evidence for that exact candidate. Opening this child changes no helper/product bytes. Any later accepted repair requires affected tests and prerelease source, message, handoff and package freshness to be reassessed on parent continuation.

Stop after publishing this opening, remaining on the child branch with both campaigns open. The next eligible work is focused helper analysis and a concrete revision plan. A later authorized completed child integrates explicitly into revision/081_5b2442e-prerelease, verifies/publishes that target and returns to it with campaign 081 suspended at its prior boundary. Child completion does not resume or close 081 automatically. Campaign 080 and earlier records remain frozen.

## Subsequent review request

Before opening publication, the human supplied a detailed external diagnostic report and explicitly requested its review. Publish this opening first, then assess the report against current source and bounded local synthetic reproductions; record the focused results in REVIEW-REPORT.md. Review now supersedes the earlier opening-only stop, while source repairs, integration and parent continuation remain unselected. The supplied live push/readback and retry counts are imported observations, not actions independently witnessed by this campaign.

## Focused review checkpoint

Opening 107afd226345fa3e6d6d45a01251b451e25cacdf was published and exactly read back before the review. [REVIEW-REPORT.md](REVIEW-REPORT.md) records independent Linux direct-helper and actual HTTPS Git transport reproductions, 27 passing existing contracts and four Open findings. The native control removed only GIT_DIR and successfully pushed/read back the same synthetic fixture, with persistent helper configuration unchanged. Safe helper diagnostics and push-outcome preservation are separate proposed improvements; the native transport regression gap is explicit. No helper source/test/workflow repair was made, and no live-provider result is claimed from local checks.

The retained source-relative Linux probe was executed successfully; sanitized observations are linked from the review. Publish/read back this report checkpoint, then stop before a revision plan or repair execution. Both campaigns remain open and 081 stays suspended. The existing parent preparation evidence must be reassessed for the known affected helper bytes before any later release continuation.

## Accepted revision execution

Review d5b6ea76425388a0356d87dde7c10d0777bb4eec was published and exactly read back. The subsequent human instruction accepts preparation/execution/closure of this child. [REVISION-PLAN.md](REVISION-PLAN.md) defines V-001–V-004 and the bounded private context, diagnostics, native regression/documentation checks and parent return. R-001–R-004 are Accepted; no repair has run at this planning checkpoint. Publish/read back the plan before implementation. Close only 082 after verified integration into 081, then return with the parent still suspended.

## V-001 — Private context and native transport regression

Plan 0237cfbcf6917529dfedc0cd3d6a17c76c3ca2fe was published/read back before test/source work. Added five behavioral contracts plus a cohesive source-only native HTTPS Git fixture and explicitly public test-only localhost TLS key/certificate. The positive public-CLI test uses actual authenticated write discovery/RPC, native git-http-backend and exact readback; it preserves the client's persistent configuration. Existing CI now watches the fixture/helper paths as well as the test/module.

Observed RED against unchanged production: valid helper/config context, linked-worktree context, public command-config rejection and native HTTPS recovery failed; wrong/unadmitted relocation still rejected. Native recovery returned remote_absent, matching the review. Tightened the public-guard fixture to force a local destination mismatch if the guard is absent; its isolated RED reported destination_mismatch instead of relocated_git_environment without a network operation. These failures preceded production changes.

The private helper now strips inherited command-config channels, builds a clean strict environment and verifies GIT_DIR against the selected worktree's actual administration directory. Other relocation variables still fail; linked worktrees are supported. Public childEnv also rejects GIT_CONFIG_PARAMETERS. The same prepared environment reaches readToken's Git adapter and native Windows ACL subprocesses through an optional, revalidated control; ordinary callers retain the strict default. No process.env/global-helper mutation or extra token store was introduced.

Linux/Node v24.19.0/Git 2.51.1 GREEN: node --test tests/git-auth-recover.test.mjs passed 32/32 in 28,158.518 ms; completion 39/39 in 8,586.474 ms; projection 40/40 in 27,378.076 ms. All exited 0 with zero failures/skips. Changed-source diff checks passed. Tests were run against the pending action tree on plan 0237cfb; the containing commit identifies those bytes. R-001/R-004 are Revised with Linux evidence; actual native matrix and final documentation/package checks remain pending V-003. R-002/R-003 remain Accepted for V-002. Publish/read back this action before the next one.

## V-002 — Safe helper diagnosis and independent process outcomes

V-001 133a4946cb6230aab9c1814f5d86fce54b889f84 was published/read back before this action. Its actual auth/completion/projection runs 39253983952 / 39253983923 / 39253983951 each completed successfully with all four native Windows/Linux Node 22/24 jobs; the auth run includes private context, linked worktree, HTTPS transport and Windows token/ACL checks. V-002's updated auth source still requires its own native result.

Observed RED for five new diagnostic/summary contracts on unchanged V-001 production: missing independent push_result/readback_result, missing no-push/parse distinction, silent helper errors, absent allowlisted diagnostic extraction, and missing native post-preflight eligibility-failure detail. Each failed by assertion for the intended missing behavior before production changes.

The helper now emits only SDD_GIT_AUTH_HELPER plus fixed-shape allowlisted code/stage JSON on private stderr; unexpected exceptions use generic helper_failed. Credential stdout, mismatch/no-store behavior and protected-input policy remain separate. Public recover results preserve all existing schema_version 1 fields/codes/exits and add independent push_result/readback_result summaries with safe code/status/signal; readback parsing can add validation_error. Failed pushes retain their cause with absent/different/matching/unknown readback. Helper reports are bounded advisory hints from captured stderr, not authenticated provider or permission evidence; malformed/extra-field/unknown/conflicting reports are discarded and no raw subprocess output survives.

Final local auth GREEN: 37/37 passed, zero failures/skips, 22,192.001 ms. The tests cover six push process outcomes against four readback states, readback-only/ambiguous content, private generic/known failure codes, safe/invalid/ambiguous diagnostics and a real HTTPS challenge that invalidates token eligibility after public preflight. That native case retains git_failed/exit 128 and token_not_ignored while remote readback succeeds absent; no credential reaches the write endpoint or public output. A small mapping/shape refactor was followed by the recorded complete rerun. Shared protected-token/completion/projection bytes remain identical to V-001's passing local/native suites. R-002/R-003 are Revised with Linux evidence; final affected auth CI, documentation and package checks remain V-003. Publish/read back this action before further work.
