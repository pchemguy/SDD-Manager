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

| Checkpoint | Actual result | Remaining gate |
| --- | --- | --- |
| CP-001 | Repository/source orientation recorded; clean baseline and origin refs observed. | Published `56d5a8e2ab77bd522733481df934ba7f8d0d7cd2`; exact origin branch readback matched before CP-002. |
| CP-002 | Selected handoff/lifecycle and current primary limits documented. | Publish/read back before test-first work. |
| CP-003–CP-025 | Pending. | Follow the detailed plan’s separate commits and per-commit publication barrier. |

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
