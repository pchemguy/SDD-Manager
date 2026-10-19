# Authentication helper revision plan

## Authority, source and return

Campaign 082_d0d7438; branch revision/082_d0d7438-auth-helper; original branch-off d0d7438bf1e6ec850870cfc43be32573c784dc0c. Revision starts from published review d5b6ea76425388a0356d87dde7c10d0777bb4eec. The human's “Prepare revision plan, execute, and close” accepts R-001–R-004 from the [review](REVIEW-REPORT.md) and authorizes their bounded implementation, verification and child integration. [Execution evidence](REVISION-REPORT.md) retains actual results.

Creation parent/integration/return branch remains revision/081_5b2442e-prerelease at d0d7438bf1e6ec850870cfc43be32573c784dc0c, subject to target freshness inspection before merge. Close only 082; restore the parent's checkpoint and return to it with 081 open and suspended. Do not resume prerelease preparation, create a release/tag, dispatch a publisher or update an installed plugin.

## Accepted design

The public utility and other protected-token consumers retain strict rejection of ambient Git relocation/configuration. Include GIT_CONFIG_PARAMETERS in that public configuration boundary. The private credential helper has a separate context: remove inherited command-configuration channels before validation, admit GIT_DIR only after its directory identity agrees with the selected worktree's actual Git administration directory, and reject other unadmitted relocation variables. Check the explicit worktree root in the clean context; account for linked worktrees. Do not clear process.env globally or weaken childEnv through a permissive mode.

Pass the prepared private subprocess environment through readToken's optional controls to native Windows ACL inspection as well as its Git adapter. Ordinary callers keep the strict default. Token path, ownership/mode/DACL, exclusion/untracked state, host/path matching, no-store and one-push/readback bounds remain controlling.

Add process summaries for push and readback while preserving existing schema_version 1 fields, outcome codes and exit semantics. Each summary identifies not-attempted/succeeded/nonzero/timeout/signal/unavailable/output-limit/other process failure, safe exit status and signal. Readback parse failures retain a separate safe validation category. Preserve a failed push's summary with absent/different/matching/unknown readback. No captured stdout/stderr, exception text, command arguments, token or request/path values enter those summaries.

Private helper failure emits only a constant-format stderr diagnostic with allowlisted code/stage; stdout remains exclusively credential protocol. Public summaries may include a bounded allowlisted helper error extracted from that channel. Treat it as diagnostic information, not authenticated provider evidence or operation authority; malformed, unknown or ambiguous reports do not gain trust or leak text.

## Ordered actions

| Action | Findings and outcome | Targets / dependencies | Objective checks |
| --- | --- | --- | --- |
| V-001 | Repair private context and Windows propagation; add native transport coverage | git-auth-recover.mjs, protected-token.mjs; authentication contracts, a cohesive source-only HTTPS Git fixture and test certificate/key; CI path filters | Observe RED on unchanged helper using real authenticated HTTPS push. Then GREEN: public CLI native push/readback without wrapper, matching GIT_DIR and linked worktree accepted, mismatched/unadmitted relocation rejected, inherited private config removed, public config injection rejected, persistent config untouched. Existing auth/completion/projection suites pass. |
| V-002 | Add safe helper diagnostics and independent process summaries | Authentication utility and contracts after V-001 | Observe RED for missing summaries/diagnostic channel, then GREEN for push failure × readback state, timeout/signal/output-limit/unavailable, malformed/ambiguous diagnostic and secret-canary cases. Native token eligibility loss after preflight reports helper category with absent readback; stdout remains protected. |
| V-003 | Align documentation and complete native/package verification | Utility JSDoc/guide, owning credentials workflow, contributor commands and relevant package guidance; active reports/HANDOFF/index | Review both subprocess contexts and JSON consumers, Windows ACL path, retry/readback instructions and bounded documentation. Full shared suites plus support/publisher checks; actual Windows/Linux Node 22/24 CI for affected utilities; core/archive/required resources and active links. Verify frozen-record preservation. |
| V-004 | Finalize and explicitly integrate the verified child | Published action checkpoints and refreshed parent target | Whole-change code review, final disposition/evidence; explicit two-parent merge into recorded parent, merged-state checks, push/exact readback, close 082 and confirm worktree on suspended 081. |

## Test and documentation boundaries

Use isolated synthetic repositories/credentials and a local HTTPS server backed by native Git; no real PAT or live provider mutation is needed for product contracts. A clearly marked public test-only localhost TLS key/certificate stays under tests and out of the package. The fixture uses explicit local trust and supported native Git configuration, no dependency provisioning or production TLS relaxation. The new case runs in the existing native Windows CMD/Linux Node 22/24 matrix. Inspect actual CI results; source or pure ACL checks alone do not satisfy the native handoff/ACL evidence.

V-001/V-002 use observed test-first failures before production edits. Keep the earlier Linux characterization/observations as attributed baseline evidence; permanent regression tests own corrected behavior. Shared module changes require all three utility suites/matrices. Read acceptance/textstats/AGENTS.md before its support scope. Use available established Python 3.12.14 locally and the declared publisher dependency; record actual environment and skip limits.

Keep the guide with the script and the coordinator policy in credentials.md, with concise caller routing. Explain public versus private context, JSON summaries and safe diagnosis without splitting trivial references or copying the workflow into AGENTS. The existing three-recovery-retry upper bound remains; no numeric-policy defect was found.

## Persistence and stop

Publish/read back this plan before test/source work. Each action commit includes its actual source/evidence and is pushed and exactly verified before another action or commit. Report RED/GREEN/native observations separately, preserve unknown effects, and resolve required failures before closure. No T-task IDs or additional registry are introduced.

Preserve campaign 080 and earlier records through path/object comparison without loading them. Keep parent 081 active records updated for the child result; its previous candidate/hash evidence remains valid only for its original source and must be refreshed when the human resumes it. Finish with 082 closed into its actual parent, both target publication and branch return verified, and no automatic parent execution.
