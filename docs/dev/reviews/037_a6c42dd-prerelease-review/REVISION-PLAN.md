# Comprehensive prerelease revision and acceptance plan

## Campaign, authority and state

- Campaign: `037_a6c42dd`; original baseline `a6c42dd754843abf9bafca7dee2aee9e733b046a`.
- Supplemental reviewed product: `b246f8f92f35a8d2077bce467102f63270d64f2b`; review/report checkpoint: `b2cc1d4133ca8fa78dad50c803e26423f73b7047`.
- Working branch: `revision/037_a6c42dd-prerelease-review`; final integration target: `main`, `pchemguy/SDD-Manager`.
- Inputs: [canonical review report](REVIEW-REPORT.md), [review plan](REVIEW-PLAN.md), [source inventory](SOURCE-INVENTORY.md) and current source owners. Campaigns 038–041 remain closed, retained and unchanged.
- Human instructions, 2026-10-10: resume 037; prepare a detailed plan covering all targets, including optional targets; define clear intermediate commit checkpoints. The human will supply the test repository at execution.
- State: execution authorized on 2026-10-10 with the dedicated playground. CP-001–CP-014 source/publisher corrections and actual provider rechecks are recorded; CP-015 preparation, selection-only and eligible tracking/reconciliation independently Passed and playground evidence is published. Five required variants Passed; the remaining required campaign and selected supplements remain open. No product implementation, production release or final integration has begun. See [revision report](REVISION-REPORT.md) for exact pins, first attempts, publication and limits.
- Execution destination: `https://github.com/pchemguy/SDD-Manager-Prerelease-Playground`; preserve its initial main commit and isolate publisher fixtures from TextStats work. See [revision report](REVISION-REPORT.md) for actual checkpoint state.
- Initial planning commit: `80bc30018f205ce88e96cbbc10a6cc4d132ffe69`; its first publication was rejected by host automatic approval review. After the human explicitly authorized publishing campaign 037’s updated plan, report and index, the retained commit was pushed and exact remote readback matched on 2026-10-10 before this detailed-plan checkpoint. The destination is the established `origin`, `https://github.com/pchemguy/SDD-Manager.git`; no alternative transport/account or history rewrite was used.

## Complete selected scope

All R-001–R-006 are included in the plan. R-006's previously optional diagram improvement is a planned delivery target. R-005's complete required acceptance campaign, both catalog optional variants and supplementary current-workflow coverage are planned. Inclusion does not imply facilities exist or a test passed; required and optional evidence classes remain distinct.

| Finding | Planned outcome | Canonical owner / completion evidence |
| --- | --- | --- |
| R-001 | Packaged root navigation works: local shipped-resource links resolve; excluded source-only content uses absolute `https://github.com/pchemguy/SDD-Manager/blob/main/<repository-path>` destinations as explicitly directed by the human. Preserve package exclusions. | sdd-docs and package orientation; source plus extracted-package root link/anchor verification. |
| R-002 | Capability map accurately covers every current skill and path, release/highlights, preparation baseline, human/QC/publication gates, tracking readiness, revision modes and task commit audits. | sdd-docs/current map; row-by-row owner comparison with canonical links, without duplicating detailed rules. |
| R-003 | Exactly selected candidate receives curated Markdown notes through the single publisher; human sections survive, missing/mismatched inputs stop safely. Generated notes do not replace curation. | sdd-forge workflow and sdd-report notes; local transfer tests and actual test-provider published-body readback. |
| R-004 | Serialized/reconciled draft → assets → publication, inspected archive/checksums, safe retry/uncertainty handling and actual source/body/asset/state/latest verification. | sdd-forge package/release owners; local negative/recovery tests and authorized test-provider first/retry/fault observations. |
| R-005 | Candidate-specific independently assessed TextStats required campaign plus catalog optional/native/live targets and current-workflow follow-ups; explicit remaining installed/platform limits. | Acceptance coordinator and separate consumers/assessors; real attempts, source/runtime/loading pins, Git/provider chronology and honest required/optional totals. |
| R-006 | Implementation diagram/key makes initial requested tracking readiness, blocked execution, atomic task closure and continuation/integration audit discoverable and readable. | sdd-docs with manager/executor; semantic scenario comparison and actual Mermaid rendering/visual inspection. |

Do not expand this into strict-format migration, new product functionality, a new task/status registry, provider settings changes or edits to frozen child campaigns. Run strict compatibility validators and report their actual findings; passing a package-resource check does not establish portable-standard conformance. No version bump or production product release is selected by accepting source correction/testing alone.

## Inputs resolved when execution begins

| Input | Required resolution / consequence |
| --- | --- |
| Test repository | Human-supplied URL or checkout; inspect existing data and fresh/resume state before writes. Never substitute this source repository or a remembered demo destination. |
| Test effects and namespaces | Confirm scoped test commits/pushes, labels/milestones/issues, fixture workflow files/dispatch and disposable tags/releases, where selected. Preserve existing product/foreign objects; isolate publisher fixtures from TextStats product/evidence work. |
| Access | Existing protected authentication first; establish operation-specific Contents, Issues, Workflows and conditional Actions access. Job GITHUB_TOKEN permissions differ from repository credential permissions. Keep secrets out of inputs, logs, manifests and evidence. |
| Runtime/context control | Observe real fresh consumer/assessor facilities, protected handoffs, fault controls, native termination, installed discovery, renderers and platform runtimes. Missing facilities are recorded individually; do not infer them from tool names or scripted probes. |
| Human document checkpoints | The user explicitly delegates assessment and acceptance of all intermediate test artifacts to the coordinator. Review each concrete artifact before dependent progression and retain exact scope/identity/decision. Report delegated acceptance separately from direct-human review; do not preaccept unseen artifacts. |
| Source and package pins | Pin repaired plugin commit, actual archive hash/member inventory, harness/runtime and supported loading mode. Source stays immutable throughout each acceptance run. |
| Release route decision | Recommend one explicit manual dispatch accepting pinned source/tag, curated notes and publication policy as structured data, with build-only mode. If a tag route is retained, implement an actual source-associated transport and integrity/readback checks first. Confirm consequential trigger-policy changes before implementation. |
| Latest/prerelease and ownership | Resolve intended test release policy and expected asset inventory per fixture. Never silently displace a pre-existing unrelated latest release or delete/clobber foreign assets. |

One provided test repository may serve both tracks only with demonstrably isolated branches/tags/provider namespaces and preserved default-branch contents. Establish separate worktrees and a verified publisher workflow/ref/source setup; a manual-dispatch workflow must actually be discoverable on its required default branch. If safe coexistence is impossible, report the specific conflict and request a suitable additional destination. Do not overwrite test main or copy source credentials into it.

## Action hierarchy and dependencies

Retain action IDs V-001–V-006 from the initial proposal. Commit checkpoints below refine those actions; they are campaign work units, not invented executable T IDs.

| Action | Work and ordering | Gate to dependent work |
| --- | --- | --- |
| V-001 | Execution orientation, permissions/facilities and selected release handoff design. | Published accepted setup and resolved consequential source/notes/trigger policy. |
| V-002 | Publisher correction with meaningful test-first cases, exact build/archive checks, curated notes, safe lifecycle/retry and readback. | Complete locally verified publisher and no unresolved implementation failure. |
| V-003 | R-001/R-002 documentation/package navigation corrections after the actual publisher route is known. | Extracted-package links and owner-aligned map pass. |
| V-004 | R-006 graph/key amendment and diagram rendering. | Current semantic gates verified; actual rendered readability or explicitly unresolved facility. |
| V-005 | Cross-source regression, exact package and immutable candidate pin; final findings consolidation and main integration after V-006 evidence. | Published source-ready candidate for testing; later final reconciliation before closure. |
| V-006 | Real test-provider publisher trials, full TextStats campaign, all optional variants and supplemental consumer/platform/installation targets. | Independent actual observations, resolved required outcomes and explicit optional/unavailable evidence dispositions. |

V-005's candidate checkpoint precedes V-006; its final consolidation follows V-006. Provider tests and TextStats follow the actual prerequisite graph, not an arbitrary desire to run all failures last. Do not run dependent cases from invented completed fixtures.

## Intermediate commit checkpoints

Each row is a distinct reviewable checkpoint: include its owned changes plus actual verification/finding evidence in the same source-repository commit, inspect its contents, push to the established branch and verify containment before the next checkpoint. Where a test case itself has finer persistence requirements, those additional test-repository commits remain mandatory. Do not combine the rows for convenience.

| Checkpoint / action | Commit scope and suggested imperative subject | Evidence required before committing / advancing |
| --- | --- | --- |
| CP-001 / V-001 | Record accepted scope, test input/facilities, source/worktree and effect boundaries. `Establish prerelease execution inputs (037 CP-001)` | Current refs/dirty ownership, actual repository/access/facility observations, original finding decisions; no secret or invented readiness. |
| CP-002 / V-001 | Resolve and document publisher route, exact-source notes transfer and state/latest contract. `Define exact-candidate release handoff (037 CP-002)` | Current primary API/action/input-limit checks and accepted trigger/notes/policy decisions; single publisher and build-only boundary traced. |
| CP-003 / V-002 | Add meaningful first/negative/retry publisher and archive tests, with retained baseline failures. `Add publisher contract regression cases (037 CP-003)` | Tests fail for demonstrated missing behavior, not incidental setup; identify intentional red state. This is a test-only partial checkpoint, not a complete publisher claim. |
| CP-004 / V-002 | Implement safe structured notes transfer and pinned source/tag/version validation. `Implement curated exact-source notes transfer (037 CP-004)` | Multiline/human sections preserved; missing, mismatched, oversized/invalid and hostile-text cases stop or remain data; no generated-note replacement or shell interpolation. |
| CP-005 / V-002 | Implement explicit archive/member-byte/asset/checksum inspection and build-only behavior. `Verify release archives before publication (037 CP-005)` | Real archive tests catch absent/wrong/duplicate/unsafe members and incomplete output sets; build-only has no tag/release mutation. |
| CP-006 / V-002 | Implement matching draft/asset reconciliation and safe repeated/uncertain operation handling. `Reconcile release drafts and uploads safely (037 CP-006)` | First/retry/partial/starter/duplicate/mismatched/foreign assets and uncertainty cases; no unconditional recreation, silent deletion or clobbering. |
| CP-007 / V-002 | Implement one serialized final publisher and remote source/body/assets/state/latest verification. `Verify published release state and serialize publishing (037 CP-007)` | Configuration and local controlled state tests establish sequencing, complete inventory, body and intended latest/prerelease logic; full relevant publisher tests pass. Actual CI/live evidence remains pending. |
| CP-008 / V-003 | Fix current packaged root source-only navigation using the human-selected absolute `blob/main` URLs. `Repair packaged root navigation (037 CP-008)` | Every shipped root local link resolves after extraction; excluded-doc links use the exact absolute `blob/main` repository path and that path exists. Document that these links track current main, rather than claiming immutable candidate provenance. No package expansion or closed-record edit. |
| CP-009 / V-003 | Reconcile entire capability map to current owners. `Align capability map with supported workflows (037 CP-009)` | Every skill row/path and preparation/QC/human/publication/tracking/revision/task/release summary checked; canonical links resolve. |
| CP-010 / V-004 | Revise implementation graph/key and render all current README diagrams for affected checks. `Clarify and render implementation workflow gates (037 CP-010)` | Pending/verified/declined tracking, activated outage, continuation/invalid task persistence and full-phase integration remain coherent; inspect actual rendered legibility. |
| CP-011 / V-005 | Consolidate locally corrected source, support/contract tests, current navigation and exact archive. `Verify repaired prerelease source boundary (037 CP-011)` | Required support suite, meaningful changed tests, metadata/manifests/package bytes/checksums/links and protected historical path diff; findings distinguish local verification from provider/consumer gaps. |
| CP-012 / V-006 | Pin immutable source/archive/harness, establish safe test namespaces and publish test setup. `Pin prerelease acceptance candidate (037 CP-012)` | Exact plugin commit/hash, test branches/workflow source, context/loading/runtime and facilities recorded; test repository setup commit(s) published first. |
| CP-013 / V-006 | Real publisher positive first run and complete rerun. `Record first and repeated publisher trials (037 CP-013)` | Actual workflow run correlation, exact source/tag/body, archive/checksum inventory and downloaded bytes, state/latest readback; rerun does not duplicate or clobber. |
| CP-014 / V-006 | Real publisher failure, partial/uncertain and overlapping-run trials. `Record publisher failure and recovery trials (037 CP-014)` | Scoped actual provider faults/runs, safe stopped states, read-before-retry, serialization and final readback; no simulation relabeled live. |
| CP-015 / V-006 | TextStats P1 preparation/selection/tracking: A-001–A-003. `Assess preparation and activation acceptance (037 CP-015)` | Every reached case/variant independently assessed and published; real human/QC checkpoints and initial eligible-phase provider associations precede edits/tests. |
| CP-016 / V-006 | TextStats P2 first task/milestone/full phase: A-004–A-006. `Assess task and phase completion acceptance (037 CP-016)` | Actual one-task result/evidence/checkbox commit diffs and push order; reports and issue/milestone closures; full-phase explicit merge, merged checks and target containment. |
| CP-017 / V-006 | TextStats P3 increment/feature/steering: A-007–A-013. `Assess feature and steering acceptance (037 CP-017)` | Eligible next phase, selected incorporation, sole owning task IDs/archive rules, assessment-only no-change and steering stop; real product/evidence publication. |
| CP-018 / V-006 | Required controlled failure/continuation cases A-014–A-026, scheduled as prerequisites exist. `Assess failure and fresh-continuation acceptance (037 CP-018)` | All selected required variants independently observed; retained first failures/interventions, actual partial triggers/fresh state, no fabricated completion or scripted success. |
| CP-019 / V-006 | Both catalog optional variants and native interruption extension. `Assess optional native and live recovery targets (037 CP-019)` | Actual isolated response loss/protected recovery/termination when facilities exist; separate optional grades and unavailable facilities; no fabricated pass. |
| CP-020 / V-006 | Current tracking/prompt/document-QC and task-persistence follow-ups. `Assess current workflow fidelity follow-ups (037 CP-020)` | Ordinary requests and actual Git/provider command chronology; no oracle leaks; distinct supplemental results outside default catalog totals. |
| CP-021 / V-006 | Nested/reopened campaign and integration-summary/highlights consumer follow-ups. `Assess revision modes and highlights fidelity (037 CP-021)` | Actual identity/eligibility/return/stop, merge ancestry and fixed opening pointer, cumulative editorial coverage/watermark preservation; mechanical recipe success kept separate. |
| CP-022 / V-006 | Installed loading, runtime/platform, standards-compatibility and final diagram facility follow-ups. `Record client and compatibility evidence (037 CP-022)` | Real supported installation/discovery if available; Python 3.11 and applicable native platform/runtime evidence; strict-validator output classified without imposing migration. |
| CP-023 / V-006 | A-027 coverage/diagnostic consolidation and test evidence integration. `Consolidate full acceptance outcomes (037 CP-023)` | All 27 cases/32 required variants/two optional variants and named supplements reconciled; independent grades, first attempts and limits; test evidence merged/published under its lifecycle. |
| CP-024 / V-005 | Final revised-candidate findings, readiness, package and source evidence. `Finalize prerelease revision evidence (037 CP-024)` | Each R finding has actual recheck/disposition, exact candidate applicability and remaining checks; full source diff leaves closed campaigns unchanged; selected required failures block readiness. |
| CP-025 / final integration | Explicit two-parent merge into refreshed main and self-contained campaign summary. `Merge revision 037_a6c42dd — <final delivered title>` | Verified source/target tips, prospective merged-state checks, original opening/base and included child scope, conflicts/limits; commit both actual parents, publish and verify target containment. No production tag/release. |

Suggested subjects describe actual campaign actions; these are not executable T tasks. A subject is adjusted to the real final diff while retaining checkpoint provenance. CP-025's body follows the canonical integration-summary contract and carries title/objective, actual full review and delivered scope, fresh versus historical verification, all included nested outcomes and limits. Resolve campaign 037's original opening commit from Git before drafting; do not guess it or replace it with this planning commit.

### Finer test-repository checkpoints

- Positive product execution still commits/pushes each actual owning task separately, with its required result/evidence/initial checkbox and strict subject. A source campaign summary never replaces those task commits.
- Publish an independently assessed case/variant/attempt checkpoint before dependent test work. Allocate actual case evidence as `runs/<case>/<attempt>/<variant>/`; retain original attempts and interventions. Every A-001–A-027 boundary has a test-repository evidence commit/readback, even when several cases share one CP summary above.
- For interruption cases, publish safe coordinator evidence without making a false completion commit for pending product work. Required push blockers pause the owning workflow; do not accumulate commits in a new branch to evade them.
- On failure, commit truthful partial evidence where allowed and stop affected dependencies. A red test checkpoint, failed case or blocked optional facility is never reported as completion of its missing result.
- Source-repository evidence contains concise outcomes and stable non-secret test provenance; full live attempts remain in the authorized test repository. Preserve access limitations on links and hashes.

## Explicit root-link amendment

The human directed absolute repository links on 2026-10-10 for README/AGENTS links to documents excluded from the package. Apply this during CP-008 to every affected occurrence in both packaged root files, using meaningful existing link labels and the target pattern `https://github.com/pchemguy/SDD-Manager/blob/main/<repository-path>`.

For example, use `[Capability map](https://github.com/pchemguy/SDD-Manager/blob/main/docs/dev/CAPABILITY-MAP.md)`. Apply the same rule to excluded `docs/` and `acceptance/` targets, including the campaign index and TextStats guidance. Keep links to shipped `skills/`, notices and assets relative. Do not add excluded files to the package to solve navigation. These URLs deliberately follow current main; retain exact candidate provenance separately in verification records.

Recheck the extracted README/AGENTS files for all affected link occurrences, accurate repository paths and remaining local resources. Current-main link choice is an explicit human decision and supersedes a generic preference for pinning these navigation URLs to a version or commit. Product documentation edits remain part of accepted plan execution; this planning update records the decision without prematurely performing those repairs.

## Publisher verification matrix

| Trial | Independent acceptance / evidence class |
| --- | --- |
| P-001 exact source/body | Build checkout and peeled tag equal the selected source; published Markdown equals approved curated body with preserved human sections. Local contract tests plus actual provider trial. |
| P-002 missing/mismatched notes | No public release or draft consumption claim on absent/wrong-source input; retained input/handoff remains pending. |
| P-003 multiline/hostile input | Input passed as data, exact bytes/encoding retained as supported; no shell execution, front matter leakage or invented content. |
| P-004 wrong/incomplete archive | Wrong, missing, duplicate, unsafe or mismatched members/checksums block publication; actual built bytes inspected. |
| P-005 build-only | Valid build outputs, no tag/release/latest writes. |
| P-006 first stable/prerelease/latest policy | Complete draft assets before publish; correct requested policy and actual provider latest/state readback; preserve unrelated existing selection. |
| P-007 complete rerun | Reconcile matching published source/body/assets; no duplicate release/upload or silent overwrite. |
| P-008 partial/starter/failed asset | Preserve successful owned assets/draft, complete only verified missing content after readback; incomplete inventory never publishes. |
| P-009 conflict/foreign content | Conflicting source/body/assets or foreign names stop for scoped reconciliation; no delete/clobber or settings mutation. |
| P-010 uncertain effect | Observe an actual bounded uncertain request, inspect provider state before retry; distinguish controlled wrapper evidence from live response-loss observation. |
| P-011 concurrent triggers/runs | Same-tag publisher serialization verified in actual selected runs; no cancellation that strands uploads or competing publisher. |
| P-012 run/readback/download failure | Dispatch acceptance or successful CLI response is insufficient; correlate actual run, retain successful/pending/unknown effects and verify complete remote bytes where supported. |

Prepare safe local fixtures before any live trial. Local tests must exercise contract behavior through the selected publisher interfaces rather than merely assert that YAML strings exist. Real adverse provider trials use legitimate isolated test identities and supported controls; cannot damage foreign releases or intentionally leak/replace credentials.

## Full acceptance and optional targets

Use the existing immutable pinned TextStats assets; validate catalog before dispatch. At the current catalog, complete coverage is 27 cases, 32 required variants and two optional variants. Required readiness depends on independently Passed required variants, not a helper's return code or a raw case count. Reconfirm catalog counts at the pinned execution source and explain any actual change.

| Coverage group | Exact planned scope |
| --- | --- |
| Preparation and baseline | A-001–A-006, with real document chain/human acceptance, technical QC, selection-only no-change, initial tracking and task/milestone/phase reports/publication. |
| Increment, feature and steering | A-007–A-013, including selected SPEC-only incorporation, task ownership/transfer/archive, assessment-only subtraction, commanded removal and explicit phase continuation. |
| Range and interruption contracts | A-014 cross-phase and prerequisite-refusal; A-015/A-016 actual partial-task/authorized-range fresh continuations; A-017 failed-check; A-018 publication; A-019 integration recovery; A-020 scoped completion; A-021 partial transfer; A-022 changed acceptance. |
| Required access/verification | A-023 controlled reconciliation; A-024 denial/rate-limit/unavailable-access; A-025 credentials; A-026 empty-selection/failing-baseline/preservation; A-027 full diagnostic accounting. |
| Catalog optional live response loss | A-023.live-response-loss, with an isolated hosted identity and actual post-write response suppression; preserve readback/retry evidence distinct from the controlled variant. |
| Catalog optional native recovery | A-024.native-recovery, with real protected handoff, recoverable native credential/session facilities and fresh context; no secret exposure or authentication substitute for policy denial. |
| Native interruption extension | Genuine supported process/context termination and native fresh recovery, including uncertain file/index/merge/push/API effects where safely observable. Cooperative holds stay a different evidence class. |
| Tracking fidelity supplement | All nine [tracking follow-ups](../../../../acceptance/textstats/cases/assessor/TRACKING-FIDELITY.md): broad seed retention, direct entry, missing/partial/unknown projection, token-only, explicit decline, activated outage, added task, original omission and next-phase control. Include equivalent baseline/revised comparison where relevant; a genuinely omitted first attempt is required for that recovery claim. |
| Document/prompt supplement | Existing [document-QC scenarios](../../../../acceptance/textstats/cases/assessor/DOCUMENT-QC.md), necessary new-document human checkpoints and acceptable-existing-progress continuation; actual seed ordering/authorization/retained tracking behavior with ordinary input, not a prompt oracle. |
| Task persistence supplement | Actual single-ID/atomic closure, review/report tasks, shared-file staging isolation, authorized partial and parent-only follow-ups, continuation audit and preserved published violations. Invalid controlled state can test recovery; it cannot be presented as a consumer-generated failure. |
| Revision-mode supplement | New nested identity/source/parent suspension; verified merge/return without parent continuation; qualifying and nonqualifying reopened amendments; fixed original opening/base/reopening provenance. |
| Highlights supplement | Human editorial meaning, latest cumulative summary, nested/enclosing deduplication, phase versus preparation, direct gaps/reverts/resolutions, prior baseline/watermark/cuts preservation and actual published-body consumption. Recipe fixtures cover collection only. |
| Installed-client target | Actual supported installation/discovery/activation and bundled reference resolution, if the facility exists. Explicit file loading is not installed discovery. Record client version/configuration and failed first attempts. |
| Runtime/platform target | Python 3.11 baseline and source-declared runtime constraints; available Windows/CMD and other represented supported environments as applicable. Never modify or execute files under /pyenv. Record unavailable platforms rather than a portability pass. |
| Strict-format/presentation target | Fresh Agent Skills/Agent Plugins validators, complete package links/assets/UI metadata and actual Mermaid render/inspection. Classify existing documented strict-format limits without inventing a migration requirement. |

Missing selected required facilities keep affected cases Blocked and prevent required acceptance readiness. Unavailable optional/native/installed/platform facilities are Not run with exact reasons; optional failures remain visible and a demonstrated required-contract failure is escalated. Inclusion of optional work in this plan does not change catalog required/optional classification or authorize silently calling unavailable work Passed. Supplemental outcomes are reported separately, never added to existing default totals.

## Candidate changes, repairs and rechecks

The test source is immutable. If a test identifies a plugin defect, retain the original failed pin/attempt and return the bounded finding to campaign 037. Only accepted repair scope changes source; commit/publish the repair and new evidence, build/pin a new package and recheck affected cases/handoffs/dependent regressions. Do not mutate the tested package in place or relabel old results as passes for a new source. New substantial scope follows the existing human decision/campaign rules rather than expanding this plan silently.

Reuse unchanged evidence only with byte/identity and semantic applicability established. Fresh consumer/provider chronology, exact package readback and changed publisher tests cannot be replaced by historical child support results. Do not repeat unaffected expensive checks without a new source change, failure or unresolved concern.

## Final verification, dispositions and closure

1. Reconcile R-001–R-006 against their objective rechecks. Documentation and graph closure needs actual current source/package/render evidence. Publisher closure needs the chosen hosted/source/body/assets/run/recovery evidence; local-only checks remain explicitly limited. R-005 closure is scoped to the executed consumer/client/platform evidence, with genuine remaining limitations recorded.
2. Publish final independently assessed A-027 diagnostics and integrate test evidence into test main under its explicit two-parent evidence-only lifecycle; verify parents, delta and remote containment. Keep product-completion SHA distinct from evidence integration SHA.
3. Finalize source revision/review reports, current index/navigation and exact source/package/verification identities before the source merge. Preserve original observations and all failed attempts; accepted deferrals/exceptions require actual human decisions.
4. Inspect the complete source campaign difference, including included nested campaigns and unchanged frozen records. Refresh main, pin both actual tips, perform explicit two-parent prospective integration, run required merged-state checks and compose the self-contained campaign summary.
5. Commit/push main and verify containment, parents and clean owned state. Retain branches and reports. No production version/tag/release/workflow dispatch occurs from campaign closure alone. Report remaining optional/unavailable evidence accurately and stop.

A failed required check or uncertain external effect blocks its affected completion; do not force a green outcome to close the campaign. The next permitted action, retained refs/evidence and exact missing decision/facility must be recoverable from existing records. No separate production journal or task registry is introduced.

## Current planning and publication boundary

The human authorized this detailed all-target plan, not its source execution. The test repository is deliberately unresolved until execution as instructed. Current work consists only of active campaign planning/report/navigation updates. The human explicitly authorized publication of this updated plan/report/index on 2026-10-10. The initial planning commit’s publication is complete with matching remote readback; this expanded plan and its companion updates form the next ordinary checkpoint, whose commit/push/readback identities are retained in Git. No source execution is implied. Host rejection history remains recorded in the report; no transport/account bypass was used.

## CP-016 bounded harness finding

Actual A-004 found R-007: unchanged-integration assessor wording contradicts required document-only preparation integration. This bounded correction/recheck is within the selected acceptance-tooling scope. Keep original Failed evidence and immutable tested resources; publish corrected guide/JSON and support checks, then separately pin/reassess retained task evidence with explicit unchanged-plugin applicability. No successful predecessor is invented and no blocked gate is waived. CP-016 remains Running until actual milestone/phase results are assessed.


## CP-016 reached checkpoint

First-task/milestone corrected assessor rechecks and full A-006 independent acceptance are published. Phase1 main `e7cae5b` is explicitly integrated and remotely verified; playground assessment `39f4c3c` verifies complete phase exits, closures and preservation. CP-016 is complete with original failed harness attempts retained. CP-017 may proceed through the authorized ordinary JSON increment; CP-018 has three additional independently Passed A-026 variants, while its remaining controlled cases stay pending. No required-campaign readiness or source final integration is claimed.


CP-018 progress: controlled A023 independently Passed and published15ac1bd with exact remote readback. A020 fresh scoped completion/preservation consumer and separate assessor are active. A007 independent review remains pending. Neither CP017 nor CP018 is complete.


CP017 progress: A007 independent Passed published5f16f79 and verified; A008 ordinary named-file range feature preparation is eligible. No stdin implementation, whole Phase2 integration or full readiness claim.


CP018 progress: A020 exact foreign index/worktree preservation independently Passed and published5291d8a with remote readback. Remaining controlled trials pending; no full-campaign acceptance claim.


CP018 progress: actual A015 staged-work hold/freshrecovery independently Passed with assistance, completeobjectbundle/assessment publisheda747ab4 and verified. Distinct local A016/A018 publicationcontrols are prepared/publishedd25735b and actualworkers active. Remaining gates/coverage limits retained; no fullcampaign acceptance.


CP017 progress: A008 scopedrangefeature preparation independently Passed with sourceactivation assistance retained, published0611f1b verified. A009 mainSPEC-only incorporation eligible; remainingfeaturedelivery/steering/stdin gates pending. CP018 continues actuallocalpublication recoverytrials, with originals/interventions retained.

CP-018 progress: A017 independent recovery Passed and externally published f6cec4f, full exact objects retained. Required original-pin totals21 Passed/2 Failed/9 unresolved. A019 repair accepted with both genuine interruption states retained; final integration grade pending. A021 setup/handoff published before fresh operation selection. A014 cross-phase specific live trial destinations remain automatically rejected; continue unaffected CP017/018 and later eligible assessment work. CP017/018 are not complete.


Current execution checkpoint: A019 independent Passed and published d2f8ebc; required original-pin totals22 Passed/2 Failed/8 unresolved. A021 exact accepted recovery checkpoint is locally published and awaiting independent final grade. A010 final feature reports accepted in44d271f; final task lifecycle, ownership/archive and paused integration remain gated. Fresh stale-QC supplement Passed outside required totals, coverage inventory/addendum published1edc29f; fresh strict package checks retain known format limits inef3a458. Remaining executable follow-ups continue; unavailable optional facilities remain Not run. CP017/018 Running and R005 Open.


Latest execution checkpoint: A021 independently Passed and published ea9ab9d; original-pin totals23 Passed/2 Failed/7 unresolved. A010 reconciliation accepted in1dab6fa and publishing before paused integration. CP020 isolated tracking scope controls are active after8f625d2 setup publication; full live guide certification is not claimed. CP022 diagram byte applicability and exact persisted PNG hashes are verified in COMPATIBILITY-EVIDENCE.json; no duplicate render or native discovery claim. All remaining selected work and readiness boundaries stay explicit.


## CP-017 — full range delivery independently assessed

A010 independently Passed with assistance. Exact range feature6f161448 was integrated by two-parent795f3a3542c9981f8d43c8e182876f3efa5b5f16 into paused Phase2, immediately published and exact readback verified; main remains preparation-onlyfbe8bed. Complete143 exact screened assessor artifacts and safe hosted preservation readbacks are published in playground af641fb55bacb55f0d5d925cdfc2c4936826f265; current cursor reconciled17e766f. Original nine deterministic checks,107+107 CLI vectors,31 resource/API probes,31unit/28integration,315 real extraction cases,124 links and76 hosted comparisons Passed. Canonical24 unique owners/19checked/fivepending, current QC, three archived source/QC pairs, seven task-closing commits and preserved unmanaged issue/milestone material verified. Original failures and an interrupted assessor check with possible ignored-ZIP regeneration remain explicitly disclosed; later tests used exact owned exports. No whole Phase2 completion.

Required original-pin totals24Passed/2Failed/6unresolved; originalA004/A005 failures and corrected rechecks remain separate. CP017 continues through assessment/steering/stdin completion; R005Open. Supplemental tracking scope, focused QC and first nested local review Passed outside32 with limited facility/chronology scope. New A014 live refs remain automatically rejected without retry.


## CP-017 — assessment-only JSON withdrawal independently Passed

A011 fresh consumer/static independent assessment Passed, no product changes. All187tracked bytes/modes/raw-semanticindex/refs/status/HEAD unchanged. Actual breaking CLI/API/SPEC/PLAN/TASKS/docs/checker/distribution and retained text/count/BOM/range/full-decode/error impacts independently checked; two originalDSLChecks passed separately. Complete safe29-file derivative published playground f45e8d9822468669570d397009554a89d8e4c86d, originalNULstdout scalars retained in exactsidecars/provenance and originalsunchanged. Root timezone falsealarm and correction retained; no knownoriginaloverwrite. Required25Passed/2Failed/5unresolved; correctedA004/A005 rechecks separate. A012 authorized JSON-removal steering is next, integratepausedPhase2 thenSTOP; no current fullphasecompletion. R005Open.


## CP-018 — changed checked-task acceptance independently assessed

A022 Passed after explicitassistance; original concludedcandidate Failed and retained because prospectivechecks didnotestablishdurablepending-reassessment. Correctedpendingf8c3a4f9/LOCALpub thenfresh16actualchecks/currentQC Revision5/rootgatecc05559 and resolvede454fda verified. ThreeoriginalDSLchecks and independent16probes Passed;185unrelatedfiles/all24owners19checked5pending/historicalevidence+parentstates preserved. Selectedsuperscriptspecimen derivesexistingASCIIcontractalreadyenforced; no fabricatedruntimebug/codechange. Complete540screenedartifacts/objects/bundle/index/commands/grade published playground f8a75572a960d065bf0dbc02e188dbf200b09966, LOCAL/sharedfilesystem/runtime/providerlimits andallfailuresretained. Required26Passed/2Failed/4unresolved; correctedA004/A005 rechecks separate. A012positiveproductJSONremoval active; R005Open. Actualnested/reopened042supplementPassed outside32, published244dd65 withtwoexactsyntheticnegativefileomissions/provenance andoriginalprivateexports intact; nonqualifyingcontrol/highlightsremainpending.


## CP020/021 continuation — exact same-file preservation and bounded QC proposals

The fresh mixed same-file trial independently Passed outside the original32 required variants. Actual T002 `7cf8d5e287c317ee7cdc458eff466550d2a3114c`, parent `639e7e0cb54d5dd1f9c1a6e73de31e76301ae932`, closes acquisition/result/tests/docs/current evidence and its initial checkbox in one seven-path owning commit. Immediate LOCAL push/readback and all312 complete Git objects agree. The committed API facade excludes both foreign comments; the real index retains the exact original staged suffix over owned HEAD, and the worktree retains the exact original unstaged suffix over that index. The untracked foreign note is unchanged/excluded;156 nonowned baseline files preserve bytes/modes. Independent exported-only15 unit/7 integration/four semantic probes Passed. All4926 screened artifacts and independent grade are published at playground `e2056325d8d28098520c51cf79a66f2b0bdc20d4`; original RED failures and an earlier parallel logger race remain retained. LOCAL/shared-filesystem scope does not certify live provider/native isolation.

The nonqualifying reopening control independently Passed read-only outside32, published at `3b04091c032521bad9dc75d71310818307f45e8d`: an actual caller-authored unrelated first-parent merge means closed042 is no longer the most recent qualifying integration. The fresh consumer refused reopening without hunting another campaign, and587 tracked files/index/refs remained unchanged. This follows the actual qualifying nested/reopened042 successes, rather than replacing their original outcomes.

Four further read-only caller-authored QC proposals were prepared from genuine accepted8036 and published at `a9bf69706b619d89dce69c00c80e329b9a614bd4`. They exercise delayed useful delivery across ten seam milestones, overlapping tiny tasks, public API SPEC/design conflict and third-party benchmark TASKS drift. Consumer and independent semantic assessment remain pending; proposal preparation is not acceptance. Counts exclude dedicated reviews and numbers alone do not establish a defect. Shared batch/local-proposal limits are explicit.

A012 corrected implementation/report gate `0cea6338b3ca4e33374c05437e577a2664922522` accepted exact19 artifacts after independent31 unit/28 integration/241 extracted cases, four pinned literal captures,33 semantic probes on candidate and extraction, and ten actual documentation fences. Implementation `1dc6851aef7fdcc9581b00aaffc8c4661ff67d3f` was immediately pushed/read back before managed hosted updates. Root rejected the first hosted plan before any write because its titles included later TASKS suffixes and bodies omitted owning briefs; the corrected bounded15 briefs/19-operation plan and original failed candidate are preserved. Hosted reconciliation is still in progress: a transport proxy403 interrupted the readback after acknowledged issue15 PATCH, requiring read-before-replay. No A012 final Passed/integration is claimed here; five stdin/final tasks stay paused. Original-pin totals remain26 Passed/2 Failed/4 unresolved. R005 remains Open; CP017/018/020/021 and final CP023–025 remain incomplete, with A014 named new live destinations still automatically rejected and unretired.


## CP017–022 latest assessed continuation

A012 independently Passed at actual published paused-phase integration `77e7106e3134cc7053a2b1a045cf1a76cf0361ea`, ordered parents `795f3a3542c9981f8d43c8e182876f3efa5b5f16` and `160c0a980286c68f62d0d13b3238dad0748885e9`. Independent eight original deterministic checks and81 lifecycle checks,31 unit/28 integration/241 extracted cases and retained-behavior probes Passed. All19 bounded native reconciliation effects and28 root preservation/readback checks agree; actual post-acknowledgment proxy403 recovered by GET before further operations, without replaying the acknowledged PATCH. Historical JSON completion records/IDs remain retained;21 active owners/16 checked/five pending stdin/final exits. Evidence `963d058892842e97476aac734665d07b049d910e` publishes independent grade and complete screened artifacts; two explicit reversible publication derivatives preserve privately exact original seal/large-hex bytes,678 reached Git objects and2740 raw channels. Original candidate/schema/capture/export failures remain visible. This is assisted eventual acceptance, not a new failure count or claim of installed-client/runtime coverage.

Original-pin required totals now27 Passed/two original Failed/three unresolved. A004/A005 separately corrected rechecks remain Passed without erasing the original failures. A013 actual explicit stdin/final-phase continuation is running from77e under fresh ordinary consumer and independent assessor; setup/readback is published at `62f30639822f8f7281477b474ef66a560f7d84d8`. Main remains preparation-only `fbe8bedf4c6cba1ab29d53d2da05e614603d76d1` until actual final exits/hosted closures and assessed completed-phase integration. A014 cross-phase live destination rejection and A027 final reconciliation remain unresolved. R005 stays Open.

Further CP020 supplements independently Passed outside32: four caller-authored QC proposals correctly Blocked (delay of useful delivery, overlapping tiny tasks, SPEC/design API conflict, TASKS benchmark drift), final683 artifacts plus manifest at `03b3e9ffa8eddfdfb0a49ea206b23739ddcec213`; reconstructed published split completion history was correctly blocked without rewriting history, consumer Passed while fixture contract Failed, at `fbe2becd545022bf9b65a265508e4bb9ae95cb72`; bounded later parent-only TASKS reconciliation `b65f47ec4ca15a77d2a42e051f935bfa7f55efc4` Passed,44 files published at `fccf28936ec541f234819389d545cde033731bbe`. That last trial has an unresolved documentation sample cleanup chronology gap: three exact consumer-created fence sample files survive despite an earlier empty-status observation; their origin cannot be attributed to foreign work. Tracked task/atomicity claims remain verified, global lasting cleanup is not certified.

Actual same-cycle QC recovery Passed: original exact accepted correction `7062a3ed1e5719373f3f7fe6efb66d3ffdd1c80e` failed the controlled LOCAL native pre-receive push, preserved its clean checkpoint and prior remotea16, and stopped. Frozen failure evidence was published at `5358293ba6317fcbe59dddbdb846689d0db7a9ac` before root removed only its own exact hook. A fresh consumer inspected then published the same7062 checkpoint before new work, creating zero commits and zero new QC cycles. Independent twelve checks agree; complete final2755-file manifest is published within963d058. LOCAL/native-hook/shared-filesystem/channel limits and original failed outcome remain separate from successful continuation.

CP021 focused highlights Passed in two distinct scopes, final39 guarded files published within62f3063: actual LOCAL pending nested/reopened review history, direct continuation reference, reverted benchmark and native conflict resolution produced a retained local draft with cumulative deduplicated meaning and preserved editorial cuts/install sections; a separate existing actual test prerelease408893787 at170adc was freshly GET-read, matched literal body SHA5abb87b0d74e040839cbe4dd2196a2d5126cbec205a8c976782868cc02e20d3c, and its equal-watermark owned local draft was consumed. No new release/tag/provider write or publication of the new semantic draft occurred. The editorial choice is a caller-authored fixture, not established direct human authorship. Source package/version, four original diagram render bytes and frozen038–041 campaigns remain unchanged. CP023–025 final reconciliation/integration remain pending.


## CP-019 — optional facilities disposition

The two catalog optional variants remain Not run: A023 live response-loss lacks an established isolated actual post-write response-suppression facility; A024 native recovery lacks an established protected recoverable session/credential handoff. Native uncontrolled process/context termination and cross-machine recovery are also unestablished. Actual controlled local interruption, native Git hook and supported fresh-agent continuations retain their narrower assessed scopes. No simulated response is relabeled live, no runtime control is invented, and optional outcomes are excluded from required totals.

The selected checkpoint has been assessed and its facility dispositions recorded; publication/readback of this exact checkpoint precedes successor work. Unavailable targets are not Passed or silently waived. CP023–025 remain pending.
