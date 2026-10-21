# Authentication helper diagnostic review

## Scope, provenance and result

Campaign 082_d0d7438; focused review requested by the human after [opening](REVISION-REPORT.md). Reviewed source: 107afd226345fa3e6d6d45a01251b451e25cacdf on revision/082_d0d7438-auth-helper. Helper, shared protected-input module, tests and workflow bytes equal the parent branch-off and prepared candidate ddb86fc926ddc2cfbd15946946c75a9c3672645d. Review date: 2026-10-19. Parent 081 remains open and suspended; no source repair or integration selected.

The supplied diagnosis is supported by independent local reproduction. Git's actual HTTPS transport supplies GIT_DIR to the private helper in this environment; the shared environment guard rejects it before returning credentials. Removing only that variable in a temporary wrapper permits the same synthetic credential to push and yields matching readback. This establishes a functional defect in the reviewed utility, not a need to replace credentials.

The supplied external report identifies Linux, Node 24.19.0, Git 2.51.1 and a successful external readback of 0f695a4c75f131ab92694feda44b9a8a03423336 at refs/heads/design-docs/main. Its exact plugin source SHA is not supplied. Those live actions, API permissions, workaround file and retry count are imported observations; this review did not inspect or mutate the demo repository or repeat provider authentication. Their source trace and causal explanation agree with the current independently tested source.

Inspected both sides of the public recovery → Git transport → private helper → token-validation handoff, the helper guide, credential/retry workflow, authentication contracts and Windows/Linux Node 22/24 CI definition. Local reproduction used Linux, Node v24.19.0, Git 2.51.1 and Python 3.12.14, isolated temporary repositories, a localhost HTTPS server backed by native git-http-backend, one synthetic credential and an explicitly trusted temporary certificate. No real token or provider operation was needed. Windows was assessed from source only.

## Findings index

| Finding | Type / priority | Status | Evidence |
| --- | --- | --- | --- |
| R-001 | Functional defect / High | Open | Actual HTTPS push/helper failure and one-variable successful control |
| R-002 | Diagnostic improvement / Medium | Open | Push exit, timeout and signal collapse to the same readback-only failure result |
| R-003 | Diagnostic improvement / Medium | Open | Helper failure exits silently; neither protocol output nor actionable safe code returned |
| R-004 | Coverage gap / Medium | Open | All 27 existing contracts pass while the actual transport path fails |

Subsequent human decision: R-001–R-004 are Accepted for execution under [REVISION-PLAN.md](REVISION-PLAN.md). The index above retains the review checkpoint's original disposition; current rechecks/results are recorded in the execution report.

No repair plan is accepted by this review. R-002 and R-003 identify distinct diagnostic boundaries, not two functional causes. The retry issue below is an imported execution deviation, not a fifth product defect.

## R-001 — Git-generated helper context is rejected as caller relocation

**Locations and confidence:** [helperMain/recover](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/scripts/git-auth-recover.mjs), [childEnv/readToken/windowsPermissions](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/scripts/protected-token.mjs). High confidence for the reproduced Linux path; Windows impact is source-derived and remains unexecuted.

The public recover invocation rejects its listed ambient relocation/configuration variables before validating its explicitly selected worktree. It then launches Git with a command-local helper. Git's transport invokes that helper with GIT_DIR; helperMain's Git adapter calls childEnv while readToken checks the token's repository. The same guard rejects the inherited variable, throwing relocated_git_environment before any credential response. The helper catch reduces the exception to exit 1. Clean direct invocation and git credential fill therefore do not establish transport compatibility.

The native control is stronger than a multi-variable workaround: preserving the actual helper environment fails; removing only GIT_DIR succeeds against the same authenticated local repository, credential and ref. Readback then equals the expected commit, and the client's persistent helper configuration is unchanged. This is a characterization experiment, not a permanent fix or a guarantee that clearing arbitrary relocation variables is safe.

**Bounded correction direction:** distinguish the top-level caller's ambient environment from the Git-created private-helper context, establish explicit repository identity, and construct deliberately validated/sanitized subprocess context without weakening the shared public guard globally. Account for Git-provided configuration channels as well as location variables. Windows permissions independently call childEnv from windowsPermissions: changing only helperMain's Git adapter can leave that path failing. Preserve protected token/host/path checks, command-local configuration and process bounds.

**Objective recheck:** actual authenticated native Git transport succeeds and exact ref readback matches on Windows CMD/Linux Node 22/24; invalid caller relocation/configuration and wrong repository/host/path remain rejected. Exercise Windows ACL inspection through the helper, not only pure DACL parsing. No credential/configuration persistence or secret-bearing diagnostics result.

## R-002 — Public readback outcome loses push failure information

**Location and confidence:** recover's final readback catch/result construction in [git-auth-recover.mjs](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/scripts/git-auth-recover.mjs); high confidence from source and controlled/native execution.

The utility correctly reports the remote's observed state. When a failed push is followed by successful empty readback, however, only remote_absent survives. A push exit 128, ETIMEDOUT and SIGKILL all produce that same result with push_attempted true and no retained push outcome. The native HTTPS failure reproduces this exact result. A failed readback similarly retains its own error while losing the distinct push result. A matching ref has the useful verified_after_push_error label, but the cause is still not represented.

**Bounded improvement:** preserve a separate sanitized push outcome alongside the remote/readback outcome. Specify exit/status, timeout/signal/unavailable categories and any validated helper error independently; do not infer a permission denial from absent state or print captured Git stderr. Define/document compatible JSON semantics and caller handling rather than conflating push success with readback success.

**Objective recheck:** controlled exit/timeout/signal failures remain distinguishable with absent, different, matching and unknown readback; exactly one push is attempted, known/unknown effects retain their meanings, and secret canaries never enter public output. Remote matching remains sufficient for its actual publication readback without claiming which attempt wrote it.

## R-003 — Private helper discards its actionable error code

**Location and confidence:** private --credential-helper entry catch in [git-auth-recover.mjs](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/scripts/git-auth-recover.mjs); high confidence from direct and native helper execution.

The private catch intentionally protects the credential channel, but also discards the safe relocated_git_environment code. Direct helper failure has exit 1 with empty stdout and stderr. Git can therefore report only inability to obtain a password; the coordinator cannot distinguish that local guard from other helper failures without external instrumentation. This is an observability improvement, not evidence that credential stdout should carry diagnostics.

**Bounded improvement:** define a small allowlisted diagnostic channel for helper failure, such as a constant-format stderr code/stage, and decide how the public recovery result recognizes it safely. Keep successful stdout solely for Git's credential protocol. Exclude raw exception messages/stacks, protocol input, token/path values and arbitrary subprocess output; unknown errors remain generic. R-002 and R-003 must agree at the process boundary.

**Objective recheck:** the failing guard yields its safe actionable category without any credential output; public consumers receive a bounded classification. Malformed requests, token/protection errors and unexpected exceptions remain secret-free, with existing mismatch/store/erase behavior preserved.

## R-004 — Native credential-fill coverage misses native transport

**Locations and confidence:** [authentication contracts](../../../../tests/git-auth-recover.test.mjs), [native CI matrix](../../../../.github/workflows/git-auth-recover.yml); high confidence.

All 27 current tests pass, zero failures/skips, in 64,603.719 ms. Their positive native helper tests use git credential fill; recover's push and ls-remote network effects are controlled doubles. Those checks exercise useful quoting, protection and result contracts, but do not supply the transport-generated environment that triggers R-001. Running them on both operating systems does not add the missing path.

**Bounded correction direction:** retain existing contracts and add a representative native transport/private-helper integration plus deliberate allowed/rejected environment cases. Keep deterministic controlled tests for R-002/R-003 and actual native Windows ACL/helper coverage. A small synthetic fixture is sufficient; real PAT/live pushes are unnecessary. Review whether helper/configuration propagation is realistic before treating a green mock or credential-fill check as end-to-end evidence.

**Objective recheck:** the new transport case fails against this unchanged baseline for the observed reason, then passes the accepted repair; negative relocation/token/host/path/protocol cases remain effective. The existing Windows/Linux Node 22/24 jobs execute the consequential path or explicitly retain a concrete coverage gap.

## Reproduction and evidence

[Sanitized observations](evidence/observations.json) retain statuses, presence indicators and actual fixture ref IDs. [Linux characterization](evidence/reproduce-auth-helper.py) records the fixture and expected baseline behavior; it is source-only campaign evidence, excluded from the plugin. It captures helper credentials internally and reports no credential values. Its assertions expect the unfixed behavior and are not the proposed permanent regression suite.

| Check | Observed result |
| --- | --- |
| Direct helper, clean environment | Exit 0; credential returned |
| Direct helper plus GIT_DIR=.git or GIT_WORK_TREE | Exit 1; no credential; empty stderr |
| Direct helper plus GIT_PREFIX or valid GIT_CONFIG_PARAMETERS | Exit 0; credential returned; this does not certify arbitrary configuration safety |
| Direct childEnv with GIT_DIR | relocated_git_environment, preflight |
| Controlled push exit 128 / timeout / signal, empty readback | Each returns remote_absent; one push each; push cause absent |
| Unchanged public recovery against native HTTPS fixture | Exit 2; remote_absent; no credential reached the write endpoint |
| Native push, wrapper preserving helper environment | Exit 128; helper inherited GIT_DIR and exited 1 silently |
| Same native push, wrapper removing only GIT_DIR | Exit 0; helper supplied credential; exact readback matched; persistent configuration unchanged |

The initial probe attempt timed out at a Node guard subprocess before transport testing. The isolated guard then completed in 0.288 s; the complete probe was rerun with finite larger subprocess bounds and unchanged behavioral expectations and passed. This probe-run failure is not counted as a product outcome. The retained source-relative probe was checked separately before publication. No required product failure was waived.

## Interpretation of supplied report and retries

The initial “could not read Username” and subsequent “unable to get password” messages identify a credential acquisition problem; they do not establish an invalid PAT or HTTP permission rejection. Successful issue creation is evidence for that API client/operation only. The reported success with the same PAT/repository/ref after changing helper invocation is the stronger supplied provider observation; this review's independent local experiment confirms the helper mechanism. It does not reverify the external token's scope or account state. No failed push here is classified as an observed GitHub 403.

The [credential workflow](../../../../.agents/plugins/sdd-manager/skills/sdd-manage/references/credentials.md#authenticate-and-resume) already says at most three recovery retries, with earlier stopping on repeated unchanged denial. That is an upper bound, not a requirement to use every retry; the initial existing-auth attempt is separate. If the supplied count of four recovery pushes is accurate, it exceeded that bound. This campaign did not witness those calls. The appropriate response to a deterministic helper failure is local reproduction/diagnosis before another evidence-based recovery attempt, with actual remote effects reconciled before replay. There is no evidence here that the existing numeric limit is missing or needs expansion.

## Revision handoff and stop

Four findings remain Open; none is repaired or Verified. Prioritize R-001 with the native regression gap R-004, then agree the R-002/R-003 diagnostic contract and affected documentation/caller checks. Preserve the public relocation guard and explicitly account for the Windows permission subprocess path. Keep the helper's focused guide and coordinator credential instructions as owners; no new broad reference or general authentication framework is justified by these findings.

Final scoped checks passed: six active/navigation Markdown files, 273 local links and the selected heading fragment; frozen targets were existence-checked without loading. Exact diff scope, retained probe syntax/observations, unchanged product/tests/workflows, unchanged parent refs and preservation of closed records were verified before publication.

The parent candidate contains the same affected helper bytes, so its earlier passing tests/package remain valid observations but no longer establish authentication-workflow readiness. Parent 081 needs the known defect and affected evidence resolved/reassessed on continuation. Publish/read back this review and stop on the child branch before revision planning/execution, integration, parent resumption or release operations.

## Final revision dispositions

The historical Open index and reproduction table describe the original review, not the repaired source. The human accepted all four findings under [REVISION-PLAN.md](REVISION-PLAN.md); [execution and final review](REVISION-REPORT.md#v-004--final-review-and-integration-readiness) retain RED/GREEN, native matrix and exact-package evidence.

| Finding | Current disposition | Objective recheck |
| --- | --- | --- |
| R-001 | Verified | Actual authenticated public-CLI HTTPS push/readback succeeds; bound GIT_DIR/linked worktree accepted, wrong/unadmitted context rejected, public guard retained; prepared environment reaches native Windows ACL inspection. Windows/Linux Node 22/24 jobs pass. |
| R-002 | Verified | Independent push_result/readback_result retain exit/timeout/signal/unavailable/output-limit/other failure across absent/different/matching/unknown remote states; one push, preserved exits and secret-canary checks pass. |
| R-003 | Verified | Private credential stdout remains protected; safe allowlisted stderr code/stage and generic unexpected-error fallback pass; public extraction rejects malformed/unknown/extra-field/conflicting reports, including native post-preflight token-eligibility failure. |
| R-004 | Verified | Native transport contract observed RED before the context repair, then GREEN without a wrapper; both native HTTPS scenarios run in the four-job Windows/Linux Node 22/24 authentication matrix. Shared completion/projection matrices also pass. |

No accepted finding is deferred. This focused review does not certify live provider permissions, installed-client behavior or the suspended parent's refreshed release readiness. Final child closure additionally requires the actual verified parent merge publication and worktree return described in the execution report.
