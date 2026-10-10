# Prerelease revision execution report

## Authority and state

Campaign `037_a6c42dd` executes the [accepted detailed plan](REVISION-PLAN.md) following the human’s 2026-10-10 “Execute” instruction and supplied dedicated playground. All R-001–R-006 and optional targets remain selected. No production version, tag or release is authorized by this campaign.

## CP-001 — execution orientation

- Source: `pchemguy/SDD-Manager`, branch `revision/037_a6c42dd-prerelease-review`, clean at `b35ef19aa67fe1169664381c2deaa8e941d688c1`. Fresh origin fetch confirms the same published branch tip; origin main remains `a6c42dd754843abf9bafca7dee2aee9e733b046a`.
- Playground: `pchemguy/SDD-Manager-Prerelease-Playground`, default branch main, initial commit `e2e4750ad3be531e53b189ac8519b5376db0ee9e`; clean clone contains only the existing tracked ignore file. This is a fresh campaign in an initialized repository, not an unborn destination. Preserve that commit and ignore file.
- GitHub metadata read succeeded with authenticated connector access advertising push/admin capabilities. Public Git clone and remote HEAD read succeeded. Neither observation proves workflow dispatch, release write or authenticated Git push; verify each selected operation when reached. No permission/settings changes or write probes were performed.
- Existing author identity resolves to Codex / codex@openai.com. No global identity was changed. Source credentials remain separate; supplied playground credentials are excluded from evidence and product inputs.
- Runtime: Python 3.12.14 and Node are available. `gh`, `python3.11`, `mmdc` and Chromium executables were not discovered in PATH. Actual Windows CMD, installed client discovery, native termination and isolated live response-loss facilities are unverified. Required missing facilities block affected acceptance; optional unavailable facilities are Not run.
- Separate consumer/assessor tools are available; actual context handoff/isolation remains to be established at the immutable candidate checkpoint. Explicit source loading is not installed-client acceptance.
- Scoped playground effects include owned test branches/checkpoints, hosted tracking and isolated publisher workflows/dispatch/tags/releases. Preserve foreign objects and default-branch contents; use no force push, destructive reset, asset clobber or repository-settings modification.

Ruling: execute the plan’s recommended single manual-dispatch publisher route, with exact source/tag, curated notes and explicit build-only/publication policy. The human instructed execution of this detailed plan; the recommended route is within that accepted scope. Retiring the inadequate tag-only publisher avoids competing creators. Record the full input/lifecycle contract at CP-002 before implementation. If this interpretation is wrong, the trigger route requires amendment before integration; no production release is involved.

## Checkpoint ledger

| Checkpoint | Actual result | Publication |
| --- | --- | --- |
| CP-001–CP-006 | Orientation, handoff design, red contracts, input validation, exact package inspection and draft reconciliation. | Separate commits pushed and exact remote tips verified before successors. |
| CP-007 | Complete local publisher, 22 publisher / 113 support tests Passed. | First push rejected for missing source workflow permission; updated credential recovered the same commit, exact origin readback verified. |
| CP-008–CP-010 | Package navigation, capability map, implementation gates and all four rendered diagrams verified. | Each separate commit pushed and exact origin tip verified. |
| CP-011 | Source-ready local boundary verified below. | This checkpoint must publish/read back before immutable acceptance setup. |
| CP-012 | Immutable source, publisher/product/evidence setup published. | Source `1fe66a9` and playground refs recovered from origin after sandbox loss. |
| CP-013 | First trial Failed; matching-draft recovery Passed with assistance; complete published-release rerun Passed. | Independent provider/archive/repeated-identity evidence and recovery cursor published through `e597649`; clean first-attempt success is not claimed. |
| CP-014 | Controlled acknowledged-upload stop/recovery, actual serialized overlaps, invalid-source/body/foreign-inventory refusals assessed; repeated fresh-create defect retained. | Original playground evidence `8d6d127`; repair `21e29c4`, clean first-create proof and unchanged complete rerun now verified. |
| CP-015–CP-025 | Pending; A-001 concrete preparation through layout accepted under delegated coordinator authority; TASKS/QC in progress. | Follow separate commits and per-commit publication barrier. |

## Findings and readiness

R-001–R-006 remain Open. No source repair, package trial, independent consumer acceptance or production readiness is claimed by orientation. The reviewed product baseline and prior review evidence remain historical; execution will identify exact new candidates separately.

## CP-002 — exact-candidate publisher contract

One manual-dispatch workflow replaces the existing tag-only generated-notes publisher. Dispatch has one structured JSON `handoff` string: full source SHA, tag, notes-source SHA, curated Markdown, notes SHA-256, publish Boolean, prerelease Boolean, make-latest Boolean and unique request ID. Reject unknown/missing fields, malformed types, SHA mismatches, blank/front-matter notes, oversized handoffs and invalid tag/version before writes. Inputs are read from the event JSON as data, never interpolated into shell commands. A 60,000-byte local bound reserves space below the provider character limit; larger bodies need a separately accepted transfer route.

The workflow ref owns publisher tooling; a separate full-SHA checkout owns candidate source/tests/package. Record both identities. Verify source HEAD and both manifest bytes, exact version/tag agreement and the curated body digest/source association. Packaging retains the explicit existing shipped path whitelist. Inspect actual ZIP member identity, safety, uniqueness and bytes against the committed candidate tree before computing the archive checksum. Build-only returns local outputs without provider tag/release writes.

Publication requires a pre-existing tag peeled to the exact candidate; tag creation remains a separate authorized manager/test setup operation. Read the complete release/asset inventory. Reuse only matching drafts or complete published releases. Foreign fields, duplicate/unexpected/starter/mismatching assets block without deletion. Draft creation precedes upload, all uploaded bytes must match local hashes, then one final publish. Partial and uncertain writes retain observed successful effects; no blind mutation retry. A subsequent run begins with full readback and uploads only verified missing assets. Read back actual tag, body, assets/downloads, draft/prerelease and latest after publication. Stable latest is opt-in; prereleases cannot request it. Preserve the pre-run latest identity when latest is not selected.

Serialize by repository/tag, `cancel-in-progress: false`; running publishers are not cancelled. Use the currently supported queued concurrency option to retain pending requests, subject to the provider queue bound. All still require reconciliation; concurrency is not a claim that every dispatched run executes.

Primary checks on 2026-10-10:

- [Workflow syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax): current dispatch limit is **25** top-level inputs and 65,535 characters, not the older ten-input assumption; workflow must exist on the default branch for dispatch discovery.
- [Concurrency](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency): running/pending distinction, case-insensitive groups, `queue: max` supports up to 100 pending runs and cannot combine with cancellation of running work. This current option will be checked by actual CI rather than YAML parsing alone.
- [Release API](https://docs.github.com/en/rest/releases/releases) and [assets API](https://docs.github.com/en/rest/releases/assets): draft/body/target fields and explicit make-latest policy; uploaded asset digest is supplementary to actual downloaded bytes.
- Official [checkout v7](https://github.com/actions/checkout/releases/tag/v7.0.0) and [setup-python v7](https://github.com/actions/setup-python/releases/tag/v7.0.0) release pages resolve; retain existing supported major references and Python 3.11 in CI.

CP-003 will add executable contract tests as an explicitly incomplete red checkpoint. CP-004–CP-007 deliver the separately scoped implementation and local verification. Actual GitHub behavior remains pending CP-013–CP-014.

## CP-003 — intentional red publisher contract checkpoint

Added 17 executable contract tests under `.github/tests/test_release.py`. Real temporary Git repositories and ZIPs cover exact tree bytes, exclusions, version/source/manifest mismatch and archive tampering. A controlled external provider boundary covers first publication, readback, complete rerun without mutations, partial drafts, conflicting/duplicate/starter/foreign assets, download-byte mismatch, upload failure, opt-in/latest preservation and lost upload response reconciliation. Multiline hostile notes are treated as literal data; malformed/missing/source/hash/type/size/front-matter inputs must stop.

Observed `PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s .github/tests -v`: **17 failures**, each explicitly reports the absent selected publisher implementation. This test-only partial checkpoint is intentionally red; it does not close R-003/R-004 or claim publisher completion. Implementation starts at CP-004. Existing release workflow remains unchanged at this checkpoint.

## CP-004 — structured curated-note validation

Implemented strict handoff validation in `.github/scripts/release.py`: exact full source/notes-source association, exact UTF-8 notes digest, literal multiline Markdown, explicit Boolean publication policies, version-tag syntax, request correlation ID and conservative aggregate payload bound. Unknown/missing fields, front matter, empty notes, malformed source/digest and prerelease/latest conflicts stop before any provider access. Observed handoff subset: **3 tests Passed** (including ten invalid-input subcases). Package/source-manifest agreement, provider lifecycle and workflow event wiring remain pending; the full 17-test suite is intentionally incomplete until CP-007. No release effect occurred.

## CP-005 — exact package inspection

Implemented committed-tree inventory and actual ZIP inspection before checksum generation. Retained the existing shipped whitelist; excluded development/acceptance files stay excluded. Candidate HEAD must match the full source, both manifests must be byte-identical and tag/version must agree. Every archive file must match its committed blob; missing, duplicate/case-colliding, unsafe, unexpected and symlink members stop. Observed package subset: **4 tests Passed**, including real Git/ZIP byte comparison and deliberately tampered ZIPs. The duplicate-member fixture deliberately creates a malformed archive; its expected writer warning is scoped to that fixture. Provider lifecycle and complete workflow remain pending.

## CP-006 — draft and asset reconciliation

Implemented read-before-write draft/asset reconciliation. Existing tag must resolve to the selected source; matching draft fields and every present asset’s actual downloaded bytes are checked before upload. Duplicate, foreign, starter, wrong-size/byte and body conflicts stop without mutation. Missing assets alone are uploaded; partial effects remain drafts. An uncertain upload exits rather than blindly replaying; the next invocation reconciles its actual effect. Build-only touches no provider interface.

Observed full publisher contracts: **14 Passed, three Failed**. The remaining intentional failures are first final publication, unexpected latest-change detection and opt-in latest verification, all pending CP-007. No final publish operation is yet implemented or claimed. These controlled provider tests are local contract evidence, not live GitHub trials.

## CP-007 — complete local publisher boundary

Added final publication/readback and the actual GitHub REST adapter. Inventory pagination, annotated-tag peeling, literal structured body/upload transfer, missing lookup versus incomplete inventory and event-file parsing have five additional tests, observed failing before implementation. One pagination fixture initially matched `page=1` inside `per_page=100`; correcting the fixture to its actual page parameter resolved that fixture error without weakening the inventory contract. Observed full publisher suite: **22 Passed**. Observed required support suite: **113 Passed**, Python 3.12.14.

The single manual workflow separates Contents-read build from Contents-write publication. Both use exact candidate source; the publisher’s rebuilt ZIP must match the verified build-job hash before provider access. Structured event input carries notes as data. Same-tag concurrency uses no running cancellation and the currently documented pending queue option. Actual source/body/download/state/latest readback completes the lifecycle. The adapter strips authorization on asset redirects and rejects requests outside the selected repository; no mutation is automatically retried. The source-only [handoff guide](../../../../.github/RELEASE-HANDOFF.md) documents invocation and failure boundaries.

YAML structure was parsed and the local diff whitespace check passed. Actual Actions validation, Python 3.11 CI and live release/retry/fault trials remain pending; R-003/R-004 are locally corrected, not closed. No production tag or release was created.

## CP-008 — packaged root navigation

Converted all **13** excluded-document link occurrences (11 README, two AGENTS) to the human-selected absolute `https://github.com/pchemguy/SDD-Manager/blob/main/` paths. Shipped skills/assets/notices stay relative. Built the actual staged-tree archive and verified every member’s bytes against Git plus all root link targets; excluded-document paths exist in source and package exclusions remain intact. The first ad hoc link checker omitted Markdown angle-bracket destinations; correcting that parser allowed the existing prompt-template link to be verified without changing its valid Markdown. Current-main navigation is deliberately mutable; exact candidate provenance remains separate. CP-007 publication recovered with the updated source credential and exact origin readback `7b974f779db93368e6b2965cfaff3ba6edac2050`.

## CP-009 — capability ownership map

Reconciled all 15 skill rows and canonical boundaries: release/highlights/package/workflow/readback ownership, strict task closure and persistence audit, per-commit publication, separate human/QC gates, preparation integration baseline, requested tracking activation/added-task/outage/omission handling and nested/reopened campaign retention. Corrected feature architecture/decomposition hyphens and campaign-slug paths. Detailed requirements stay with their canonical owners; the map links them rather than creating a second protocol. Compared summaries with current owning references and verified every linked source path and exact 15-skill row coverage. No frozen campaign was edited. Actual consumer conformance remains pending.

## CP-010 — implementation gates and rendered diagrams

Revised the implementation graph/key to make pending/partial/unknown requested tracking block edits/tests, distinguish verified activation from explicit decline, show an atomic one-task result/evidence/initial checkbox commit and strict leading ID, and expose continuation and pre-integration persistence audits. The key distinguishes an activated outage with pending closure from missing initial/added-task projection and retains dependent review/next-phase gates. Main full-phase integration and feature incorporation keep their existing boundaries.

Installed isolated local Mermaid CLI **12.0.0** and rendered all **four** current README diagrams using its actual bundled browser. All four PNGs were visually inspected: labels and branch directions are readable at native size, without clipping; the tall vertical diagrams require scrolling. Retained [render provenance](diagram-evidence/render.json) and the four actual images in this campaign, outside the shipped package. The CLI no longer accepts the older `-w` option; its actual help supplied the supported command, which then rendered successfully. This is rendering evidence, not installed plugin/client acceptance.

## CP-011 — repaired source boundary

Fresh source pin: `629d4cb7d6494fd49b9ac3c83a578ce4a9997409`. Observed publisher suite **22 Passed** and support suite **113 Passed** (15.413s), Python 3.12.14. Canonical/legacy manifest bytes match, version remains 0.15.0. Actual archive hash `b96c01003182d1e7e6f91a45b90e610b0c55525fd8a37e7da413481186a3defd`; 197 members including directories, all file bytes verified against Git and all 76 packaged root link targets checked. No package expansion. Render provenance pins the same README bytes. Git path diff against the published planning checkpoint confirms campaigns 038–041 unchanged. Removed only executor-created local bytecode; no unrelated work or protected runtime files were touched.

R-001, R-002 and R-006 meet their source/document objective rechecks and are corrected at this pin. R-003/R-004 meet local contract checks but remain Open for actual CI/provider observations. R-005 remains Open; no consumer, installed-client, Python 3.11 CI or platform acceptance is claimed. This source-ready boundary authorizes candidate pinning, not production readiness. CP-012 pins the next published immutable commit and must account for report-only source advancement and exact archive bytes.

## CP-012 — immutable acceptance setup

- Plugin and harness pin: `ea515f5624c8a34cc4572731a2590223a5eb27f4`; exact source archive SHA-256 `31c5aa9fea24d0e5d7d54376448c83b684df1514dc55cacf2e5d9e575a216d0c`. Its shipped bytes equal the source-ready product; archive identity changes with its committed source metadata and is recorded explicitly.
- Playground original main `e2e4750ad3be531e53b189ac8519b5376db0ee9e` remains retained. Default-branch publisher setup `c2dbdeb9f988d1ec66c4674bf11482429fea60df` is published. Authenticated API observes active release workflow ID `380422521`, zero releases and absent test tag `v0.15.0`. This establishes discovery/read access, not dispatch success.
- Publisher candidate `publisher/037-candidate` at `fb7324dfeb10f425938d12be9a5a60d5a28d39e3` is separately published. Compared all shipped Git tree records (path, mode and blob) with the immutable source: identical. The distinct playground commit is the provider’s release-source identity, not the original plugin commit. Selected first fixture is a prerelease with latest false, only in the playground.
- TextStats setup on playground main `eff696b38f0b8a94bd6f91ca1c64d54fd714df46` publishes 133 exact pinned package files/provenance and coordinator operating instructions, with no TextStats implementation or harness-created root disclosure/usage copies. Product worktree is separate from publisher worktree.
- Test evidence campaign `001_eff696b-prerelease-acceptance`, branch `revision/001_eff696b-prerelease-acceptance`, is published through `2cde2bb`. It contains immutable 131-file harness hashes, resolved full scope including both optional variants, cursor/recovery/diagnostic records. Catalog validation observes 27 cases, 32 required variants and two optional variants. All consumer cases remain Pending.
- A coordinator setup schema mistake (evidence_paths mapping instead of array) was corrected in a separately published evidence checkpoint, preserving the original published cursor and intervention. Both corrected inputs/cursor pass the pinned standard-library schema validator; no consumer attempt preceded correction.
- Fresh conversation handoffs and independent assessor tools exist. Workers share unrestricted filesystem access; handoffs will exclude assessor material, but filesystem isolation is **not certified** and isolation-dependent claims cannot be certified. Installed discovery, Windows CMD/native platform, native agent kill and isolated post-write live response suppression remain unestablished. Optional unavailable controls remain Not run; required missing facilities block affected claims. The observed renderer browser is not installed-plugin evidence.

Every setup commit in both repositories was pushed and its exact destination ref read back before the next commit/work unit. Source CP-012 must publish/read back before dispatch or consumer work. No tag/release, actual CI run or consumer acceptance is claimed by this setup checkpoint.

## Sandbox restoration and CP-013 continuation

On 2026-10-10 the execution-service transport disconnected and local workspaces later returned at an older state. Normal fetch/fast-forward restored source `1fe66a96cfbadb2f4e00c02c5d62857788b9c7ca`; normal clone/worktree restoration recovered playground main `eff696b`, publisher `fb7324d` and evidence `2cde2bb`. No reset, force push, history rewrite or fresh product setup was used. Original uncommitted dispatch/log files and ZIP were unavailable. Provider readbacks reconstruct effects, with lost records explicitly identified; missing command history is not invented.

First publisher run [38043868742](https://github.com/pchemguy/SDD-Manager-Prerelease-Playground/actions/runs/38043868742) failed after creating draft `408861830`, at immediate release-inventory readback. The supplied repository credential observes the exact curated draft and zero assets. A later GET-only Contents-write workflow-token probe [38044886069](https://github.com/pchemguy/SDD-Manager-Prerelease-Playground/actions/runs/38044886069) Passed: list and exact-ID reads find that draft; tag read returns 404. The backend cause of the first immediate inventory miss is unresolved. The test-only diagnostic tooling at `be0f6d4` leaves package source and publisher implementation unchanged and has no release writes.

Read-before-replay verified the existing exact draft and tag. Recovery publisher run [38045002859](https://github.com/pchemguy/SDD-Manager-Prerelease-Playground/actions/runs/38045002859) Passed with Python 3.11 CI. Independent authenticated readback verifies the original release ID, published/prerelease state, exact curated body, no latest release, two uploaded assets `627669329`/`627669376` and actual downloaded ZIP/checksum agreement. Downloaded ZIP SHA-256 `08ae8da54f128179b03cfd71f647cddf35af71f07195b971845aa126158a0217` equals the original CI builder hash; all 133 files match the pinned committed playground tree. The first failure remains Failed; successful recovery is assisted by external restoration/diagnosis. Complete-release rerun `037-complete-rerun-001` is dispatched but not yet assessed. No production source tag/release was created.

The reconstructed source ZIP at `ea515f5` passes all member-byte checks under current Git 2.51.1 but has hash `fdac66999958619b7746d9d7a1aa50a390b7472954e308f8d68a94418de588ba`, differing from the original recorded ZIP. Original ZIP container-byte identity cannot be recovered; both identities remain visible. Immutable committed package files and the actual provider ZIP are verified separately.

Sanitized recovery evidence is published at [test evidence checkpoint d61fd81](https://github.com/pchemguy/SDD-Manager-Prerelease-Playground/tree/d61fd81d75fb1df8891ea19d7d8efc729ec67715) in the playground repository. A fresh A-001 consumer has started from the retained product setup using explicit pinned-source loading. Real human document reviews remain required; no acceptance is manufactured. Filesystem isolation remains uncertified. R-003/R-004 remain Open for final repeated/fault observations; R-005 remains Open.

## CP-013 — repeated trial recorded and next human boundary

Complete-release rerun [38045221676](https://github.com/pchemguy/SDD-Manager-Prerelease-Playground/actions/runs/38045221676) Passed. Release `408861830`, both asset IDs, asset creation/update timestamps and exact body remain unchanged; no duplicate or replacement asset was observed, and latest remains absent. Native provider mutation audit logs are unavailable. CP-013 trial recording is complete with the first failure and assisted recovery retained; it does not establish clean first-attempt success or close remaining publisher fault/serialization targets. The curated body contains coordinator-supplied literal fixture sections, not an actual human-authored highlights draft; broader editorial/highlights follow-ups remain pending.

A-001 fresh consumer published [PROJECT](https://github.com/pchemguy/SDD-Manager-Prerelease-Playground/blob/b7b017cf7480bded8ad7f7de4a4eed690083b39c/docs/dev/PROJECT.md) and required bootstrap on `design-docs/main` at `b7b017cf7480bded8ad7f7de4a4eed690083b39c`. An independent assessor verified the five-file intended delta and sole setup parent, both root disclosure/usage files against pinned assets, all 133 package files against immutable source and manifest, all 19 claimed loaded-source hashes and exact public remote refs. No material durable-state defect was found at the initial PROJECT checkpoint; no premature implementation/hosted task creation occurred. Structured chronology is retained, while native transcript and filesystem isolation remain uncertified. Full A-001 is Running, pending the actual human PROJECT decision and later documents. ARCHITECTURE is held under the pinned created-document checkpoint; no acceptance is manufactured.

Evidence is published at [e597649](https://github.com/pchemguy/SDD-Manager-Prerelease-Playground/tree/e5976494000835dd42a53a3cb18c6aa1c7801b78/docs/dev/reviews/001_eff696b-prerelease-acceptance). Coordinator recovery initially wrote an invalid string pending-operation value and its validation command did not stop the subsequent commit. Published history/original cursor are preserved in an explicit intervention; the corrected structured pending-operation and INPUTS both pass pinned schema validation. This is a coordinator error, distinct from consumer/plugin outcomes. Source publication recovered from the stale credential using the already supplied replacement; the retained `65b9fe8` commit was pushed normally and exact origin readback matched before further work.

Next authorized work remains CP-014 publisher fault/partial/overlap observations and the remaining full acceptance/supplemental scope. Product preparation resumes only after the real PROJECT decision; CP-015 full preparation/selection/tracking is not completed by this initial checkpoint. Every new source/playground checkpoint was pushed and read back before successor work.

## Delegated test artifact review

The user explicitly states: “THIS IS A TEST RUN. YOU ARE RESPONSIBLE for assessing/accepting test artifacts. It is your job to verify workflows/checkpoints/behavior and evaluation of any intermediate test artifacts.” This supersedes the earlier request for a direct-human PROJECT decision in this test. The coordinator now substantively assesses each concrete artifact, retains exact commit/blob identities and scoped decisions, and enables only its dependent step. No unseen artifact is preaccepted and no delegated decision is labeled direct-human review.

A-001 PROJECT, ARCHITECTURE, DECOMPOSITION, SPEC/QC, PLAN strategy/QC and layout/combined QC have separate published decisions. Latest concrete layout checkpoint is `b3ba0338d71c167aaec8ca85317d09002557ea2d`; TASKS/QC is being prepared. Full A-001 and CP-015 are not yet Passed. Pinned plugin `ea515f5` remains unchanged.

## CP-014 — live failure, reconciliation and preservation trials

Published test tooling `fde1bf67ddcbccc0ff1e4a5ec41b3533bd076044` wraps the original publisher only for named controlled post-upload stops. Isolated package metadata fixture `83fcaa47479857f69ade044d463c793460826a61` changes synchronized manifests to `0.15.0-cp014`; annotated tag `v0.15.0-cp014` peels to it. This is separate from the immutable consumer package and original release candidate.

| Trial | Actual observation / assessment |
| --- | --- |
| Initial isolated partial attempt `38046045373` | Failed at immediate draft inventory readback after creation of empty draft `408880857`; upload injection was not reached. Retains the second observed fresh-create failure. |
| Controlled partial retry `38046245961` | After exact empty draft readback, real upload acknowledges archive `627714735` then wrapper suppresses response by raising. Draft retains one uploaded asset; independently downloaded archive matches all 133 fixture files. Controlled acknowledged-effect interruption, not native network loss. |
| Recovery `38046420841` | Passed with assistance: same release/archive ID and creation/update time, only missing checksum `627720214` added, exact body/source, published/prerelease, latest absent. ZIP hash `1ebd303abe58c45451ae67bd34ea2ac47c838db48df9b9d715257a1a939ce248` matches checksum. |
| Overlap `38046050281` / `38046055292` | Both Passed; second observed pending while first running. First executed jobs end 10:46:47Z, second begins 10:46:50Z, with no executed-job overlap. Original release/asset identities, times and body unchanged. |
| Invalid source `38046061342` | Build rejects mismatched notes-source before publisher; publish skipped and existing objects preserved. |
| Body conflict `38046659644` | Publisher rejects `Release fields conflict with selected handoff`; build succeeds. Existing exact body and package assets preserved. |
| Foreign inventory `38046666461` | Publisher rejects `Duplicate or foreign release assets`; build succeeds. Coordinator-owned sentinel `627726873`, foreign only to the expected publisher inventory, remains alongside unchanged package assets. No destructive cleanup. |

[Published evidence](https://github.com/pchemguy/SDD-Manager-Prerelease-Playground/tree/8d6d127/docs/dev/reviews/001_eff696b-prerelease-acceptance) retains inputs, before/effect/after observations and actual run/job identities. The source publisher's fresh-create path discards the acknowledged release ID and immediately requires the global inventory to contain the draft. Later direct-ID/inventory visibility and successful existing-draft runs establish the failed boundary; the provider's internal visibility cause remains unknown. Four new local contracts reproduce lagging inventory and test direct readback/missing/substituted identity safeguards; before repair the 26-test suite has three expected failures and the reproduced draft-readback exception. R-004 stays Open pending a separately published repair and fresh live first-run proof.

Coordinator validation accidentally staged bytecode in evidence commit `0e5c6d9`; corrective `8d4da19` removes that sole generated file, restoring the pinned harness. Published history is retained. This intervention is separate from consumer outcomes. Every commit is pushed/read back before successor work; no production release, source version bump or source-main integration is claimed.

## CP-014 repair checkpoint — acknowledged release identity

Changed only the source publisher and its source-only guide/tests: retain acknowledged creation ID, directly read that identity and complete asset inventory, and use the same identity before each effect and final verification. Missing/invalid/substituted identity stops without blind creation/upload replay. Initial complete global inventory still detects ambiguous existing tag identities. No write retry, delay or provider backend diagnosis is invented.

The meaningful lagging-inventory regression reproduced the exact original `Draft creation readback is missing` boundary before implementation; three additional safeguard/adapter tests also failed before repair. After repair, all **26 publisher tests Passed** and all **113 support tests Passed** (24.954s), Python 3.12.14. Changed source diff/whitespace passes. The shipped package paths and closed campaigns 038–041 are unchanged; consumer pin `ea515f5` remains valid for its own bytes. A new separately pinned playground tooling commit and isolated fresh-first-run fixture must now prove live behavior; R-004 remains Open until that evidence.

## CP-014 final repair recheck

Source publisher repair `21e29c4` is independently copied/pinned in playground tooling `4a56c7d3560297edcbc0934dcf99526841e1dab0`. New isolated metadata fixture `170adcdb861df9ea6328b4986fa3a1abf9e2de54` and annotated `v0.15.0-cp014-repair` were published/read back before dispatch; release was observed absent and latest absent. No consumer-plugin bytes were changed: its immutable identity remains `ea515f5624c8a34cc4572731a2590223a5eb27f4`.

Clean first run [38047635040](https://github.com/pchemguy/SDD-Manager-Prerelease-Playground/actions/runs/38047635040) Passed under actual Python 3.11 CI, publisher job `114200356160`. Independent authenticated readback/download verifies release `408893787`, exact curated literal body/source/name, published/prerelease state, latest absent, exactly archive `627764794` and checksum `627764858`. ZIP SHA-256 `3cf208d423726531e308bdbf004866f4516fcd03d9db014d4d01d0c55b5196e3` equals actual publisher log and checksum; all133 shipped files match the new committed fixture.

Repaired complete rerun [38047846884](https://github.com/pchemguy/SDD-Manager-Prerelease-Playground/actions/runs/38047846884) Passed (build `114200882418`, publish `114200971983`); same release/body/asset IDs, sizes and creation/update times remain, latest absent. Native provider mutation audit is unavailable. [Evidence checkpoint e0aad68](https://github.com/pchemguy/SDD-Manager-Prerelease-Playground/tree/e0aad687479ce60070b7deed6b1da8bf0fb4be21/docs/dev/reviews/001_eff696b-prerelease-acceptance) retains all old failures, controlled effects, assisted recoveries and new separate clean proof.

R-003's structured literal note-transfer defect and R-004's publisher lifecycle/readback defect are corrected at current source tooling, with actual CI/provider rechecks. No claim is made for real human-authored highlights curation, native response loss or installed-client behavior; those separately selected R-005 supplements remain pending/limited. Full A-001 preparation independently Passed at `1e3305c8659045945244c06861079fef879ca3c3` after concrete delegated assessments; final hashes, eight immediately published commits, all133 pinned package files, 37 loaded-source hashes and no hosted phase objects verified. Main intentionally remains setup `eff696b` under preparation-only stop. A-002 selection-only is now running; CP-015 stays pending until selection/tracking are independently assessed.
