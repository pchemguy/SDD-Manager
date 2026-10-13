# Comprehensive SDD Manager review

Campaign **058_fb673e8**; [review plan](REVIEW-PLAN.md). Reviewed workflow/package baseline: `fb673e8eaaa0249b966b53bf0d4d723e9090625f`. Original opening/check source: `24cd08ec13a9e14e831923027e1e3eeb5c8795e2`; only campaign records differ from baseline. State: **In progress**. Live acceptance explicitly excluded.

## U-001 — Entry, ownership, metadata and package

Reviewed current PLUGIN.md, contract role/routing/coverage and assessment boundaries, human README/package/status guidance, capability map ownership, plugin manifest and pinned-schema documentation. Inventoried all fifteen skill entry names/descriptions and their bundled entry/metadata/assets/reference paths; semantic inspection of the full entry procedures follows U-002/U-003. This unit does not claim exhaustive semantic proof of all references.

Entry and contract agree on three core purposes, steering as revision variant, coordinator discovery, established-context follow-ups, context recovery, independent capability directory and canonical access without the custom entry. Pronounced HIL/task/Git/tracking requirements remain visible; human diagrams and source-only contributor guidance retain their respective boundaries. No new located entry/contract defect confirmed.

### Actual checks

- Pinned offline manifest conformance passed, including the intended schema declaration and opaque extension namespace. Presentation image paths exist in the package; client-specific extension semantics are not validated.
- All fifteen skill entry names match their directories; descriptions present and within basic length checks. Optional agent metadata/artwork/reference paths inventoried. Installed-client activation is untested and outside this review.
- Native publisher built the exact committed source twice; actual archives matched Git blobs and were byte-identical. Inventory: 134 regular files, including 97 Markdown files. Source contributor/development/acceptance/CI files remain excluded.
- Package-wide inline/reference-definition prose scan: 477 local references resolved, with no missing/excluded/escaping target or unresolved checked heading anchor. Fenced and inline code examples excluded. Two initial missing-target candidates were target-README literal examples in repository-bootstrap.md, not actual package links; inspected and rejected as false positives.
- Python 3.12.14 publisher suite: 30 tests passed using the declared temporary dependency path. This is deterministic publisher evidence, not hosted execution or client compatibility.

No canonical findings allocated in this unit. Release/publisher semantics and failure paths remain U-003; deterministic support and acceptance-coverage review remain U-004. Review-only source preservation and closed-package boundaries maintained.

## U-002 — Preparation, execution and integration

Read the complete entries for sdd-manage, sdd-orient, sdd-conventions, sdd-design, sdd-specify, sdd-plan, sdd-tasks, sdd-implement, sdd-steer, sdd-integrate-feature, sdd-tdd, sdd-verify, sdd-docs and sdd-report. Deepened selected consequential references: PROJECT brief, preparation QC/human review, task derivation, range/startup/completion/audit, branch/preparation integration, Git gates/recovery, revision modes, feature incorporation, steering impact/amendment, environment recovery and boundary review. Some large references were inspected through relevant sections/discovery rather than exhaustively line by line; package-wide static coverage remains distinct. Hosting owner's entry/references follow U-003.

No confirmed defect found in document concern ownership, PROJECT brief definition, optional feature overlays, uppercase artifact naming, heuristic decomposition counts, separate PLAN/layout human gates, report-source currency, atomic task completion, push-first/per-commit publication, incomplete-phase stops, scoped task transfer, safe dirty-work preservation or phase/feature integration boundaries. Selection-only remains read-only; runtime/TDD/documentation/verification/persistence roles are distinguished. Canonical coordinator reuse and context recovery match the current entry. Nested/reopened review rules preserve authority, first-parent eligibility, opening provenance, frozen history and parent return/stop boundaries.

### R-001 — Steering entry unconditionally enters mutating setup for assessment

**Priority:** medium. **Confidence:** high in source inconsistency; consumer consequence unobserved. **Owner:** skills/sdd-steer/SKILL.md. **Locations:** paragraph at line 12 and numbered step 1 at line 21; contrast references/objective-and-impact.md lines 20–24.

The skill advertises both impact assessment and implementation and says discussion does not authorize repository changes. Its numbered procedure nevertheless starts with unconditional allocation/recovery of a campaign identity/revision branch and retention of a minimal REVISION-REPORT. The loaded impact reference explicitly says assessment returns its boundary/evidence and stops, and that assessment-only creates no branch.

A literal entry-first consumer can allocate a branch or write records before applying the assessment stop. The later reference can prevent this; no live failure is claimed. This is an internal entry/procedure disagreement, not permission to weaken the execution report or remove commanded-amendment persistence.

**Proposed correction:** explicitly dispatch assessment-only to impact inspection/reporting and stop before branch allocation or required record creation; scope the numbered mutation/persistence procedure to commanded execution. Preserve legitimate explicitly authorized assessment-record persistence where separately selected, without inferring it from the plain assessment request.

**Objective recheck:** assessment-only with valid paused context makes no Git/file mutation and returns impact; commanded execution still establishes/reuses the amendment branch/report, verifies/publishes/integrates and stops without implementation resumption. Check both entry and impact reference; add/refine the relevant assessment oracle if coverage omits the setup effect. Live trial remains outside current scope.

U-002 complete with one medium source finding; no source remediation performed. U-003/U-004 remain pending.

## U-003 — Hosted tracking, credentials and releases

Read the complete sdd-forge entry, tracking decision/phase activation and selected backend lifecycle, GitHub issue/projection/milestone, credential, release highlights/message/workflow/readback and release verification guidance. Inspected the native publisher's handoff/archive/provider reconciliation/request/main boundaries, source workflow and handoff guide. Very large backend/reference text was inspected through consequential sections, not represented as exhaustive endpoint proof. All fifteen skill entries have now been read semantically.

No confirmed defect found in native GitHub milestone mapping, eligible-phase projection, task association/closure ordering, late-confirmation versus missed-gate recovery, uncertain-write reconciliation, Git/API credential separation, protected transfer, complete-message versus highlights routing, retained notes/freshness/version checks, exact-source packaging, tag source, single publisher, paginated assets, draft recovery, latest policy or downloaded-byte inspection. Publisher code strips authorization from HTTPS redirects and avoids blind write retries. Its deterministic suite passed in U-001; actual GitHub effects remain excluded.

Read-only current primary documentation checks confirmed that the declared v7 actions and concurrency `queue: max` have documented support: [checkout](https://github.com/actions/checkout), [setup-python](https://github.com/actions/setup-python/blob/main/README.md), [GitHub concurrency](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency). This is configuration/documentation verification, not a CI dispatch or live acceptance result.

### R-002 — Exact release commit body lacks a concrete byte-preserving Git path

**Priority:** medium. **Confidence:** high; local Git behavior reproduced. **Owners:** skills/sdd-report/references/object-drafts.md (Release commit message, line 122); skills/sdd-manage/references/git-workflows.md (Release commit and tag, lines 59–63), with deterministic coverage.

The format requires a concise subject followed by the exact complete Markdown used for GitHub and recommends a file/structured argument with intentional newline handling. It does not name Git cleanup behavior or a byte-preserving commit/readback mechanism. A normal `git commit -F` cleans whitespace: it removed two Markdown hard-break spaces and a trailing blank line in a disposable repository fixture. The resulting body was 43 bytes instead of the canonical 46. In the same fixture, `--cleanup=verbatim` preserved the exact 46-byte body and hard break. No real release/tag/provider operation was performed.

This is a reproducible tool-behavior gap in the procedure, not evidence that a past release was wrong. An informed consumer may already preserve bytes; the current abstract invariant does not make the ordinary documented file-based route safe by itself. Later mismatch detection can leave an already published wrong marker requiring additional recovery.

**Proposed correction:** document a supported byte-preserving Git message path, intentional subject/body/newline assembly and raw committed-body comparison before dependent publication/tagging; preserve one finalized body for the notes, Git commit and publisher. Account for tools that normalize message text rather than asserting a file argument guarantees preservation. Keep explicit existing-source-only exceptions and do not force preparation-only to create markers.

**Objective recheck:** disposable real Git cases with Markdown hard breaks, blank lines and Unicode demonstrate exact canonical body equality under the documented procedure; a default-cleanup negative case detects the mismatch. Cover newline handling explicitly. Link/refine release-body assessment coverage without claiming a simulated provider proves Git message preservation. Source/publisher consumers still enforce their respective authority and release gates.

U-003 complete with R-002 added. No source remediation, CI dispatch or hosted effects performed. U-004 remains pending.
