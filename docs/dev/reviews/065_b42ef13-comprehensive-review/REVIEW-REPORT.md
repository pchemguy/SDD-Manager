# Comprehensive review report

## Campaign and assessment

Campaign `065_b42ef13`; baseline and reviewed source `b42ef135345b5f0376e8f6f484592e1ac5b38df2`; reviewer Codex, 2026-10-15. [Review plan](REVIEW-PLAN.md). Branch `revision/065_b42ef13-comprehensive-review`; target `main`. State: review complete; campaign open awaiting revision decisions. Release readiness is blocked by R-002.

Authorized source change: `_agents` added to root .gitignore. Findings repairs and integration are not authorized by this review request. Evidence comprises source inspection and local deterministic checks; live client/provider/consumer acceptance is unrun. Frozen prior campaigns and AI logs are excluded.

## Coverage

| Unit | State | Evidence |
| --- | --- | --- |
| U-001 | Assessed | 132 package files; 95 Markdown files; 505 local links/anchors contained and valid; licenses identical; source/package documentation inspected |
| U-002 | Assessed with stated depth | All 15 entries and 75 reference routes/structure; selected consequential handoffs inspected; R-001 |
| U-003 | Assessed; release blocked | All seven .github files inspected; 30 publisher tests pass; delayed native rebuild and CLI hash gate reproduce R-002 |
| U-004 | Assessed; two gaps | 134 support tests pass; native/snapshot parity and clean dirty identity pass; malformed-ancestor probe exposes R-003; R-004 documentation |
| U-005 | Assessed | Current documentation/link/path scan and final diff; consolidated four findings and revision queue |

| Finding | Priority | Classification | Status |
| --- | --- | --- | --- |
| R-001 | Medium | Entry routing improvement | Open |
| R-002 | High | Release archive reproducibility regression | Open |
| R-003 | Medium | Malformed package ancestor fallback defect | Open |
| R-004 | Low | Source-test working-directory documentation defect | Open |

Detailed package inventory and review depth: [COVERAGE.md](COVERAGE.md).

## U-001 — Refactor and package boundaries

Inspected root and packaged README, PLUGIN.md, manifest, source/acceptance AGENTS entries, source PLUGIN contract, bootstrap module and notice templates. Inventory contains 132 package files, including 15 skills and 75 reference modules. Local Markdown target/anchor inspection covered 505 links in all 95 packaged Markdown files: no missing, escaping or invalid-anchor target found. Package and repository LICENSE bytes match. Root notices remain separate from assets-only packaged templates. Presentation icon/logo paths resolve inside assets/.

Agent Package Author validate_plugin.py returned exit 0, no errors and 37 cross-skill-reference warnings. These warnings describe client handoff uncertainty for plugin-contained sibling references; they are not containment violations. No loading or client behavior was inferred.

The requested `_agents` pattern matches `_agents/test`; `.agents/plugins/sdd-manager/plugin.json` remains unignored. Opening checkpoint `10a69811be8c7a8e3badc0724b4bd875f4df4a24` was pushed and read back from origin before this unit.

The user specifically flagged .github during review. Its publisher already selects the nested subtree and its handoff guide names the two roots; this does not establish complete CI correctness. U-003 will inspect every .github file, actual packaging and remaining CI assumptions. No refactor repair is claimed here.

## U-002 — Skills, references and workflow composition

Inspected all 15 skill entries against the actual 75-file reference inventory, including entry scope, authority, output ownership, gate reminders and routing. Inspected reference headings/purposes and links throughout; traced coordinator selection/reporting, new-document human acceptance, preparation integration, phase activation, task range/closure/recovery, backend dispatch and browser investigation in their owning source. Reference content review is risk-based, not a claim of sentence-by-sentence review of all 75 modules. No fresh consumer or routing trial ran.

No new handoff defect was established in main/feature/revision selection, separate PLAN/layout acceptance, required tracking projection, partial-phase stops, steering return or direct coordinator access without PLUGIN. The common Markdown reminder and short shared-gate reminders have a safety/discovery purpose; their repetition alone is not a finding. Entry length alone is not a defect.

### R-001 — Seven reference modules lack direct entry routing

- **Type/priority/status:** content/discovery improvement; medium; Open. High confidence from exact file/entry comparison. This is an authoring-policy gap, not an Agent Skills format violation.
- **Locations:** package `skills/sdd-forge/SKILL.md`, Shared release preparation / Available backends; `skills/sdd-implement/SKILL.md`, Work/Load table.
- **Evidence:** forge routes release-message.md, release-highlights.md and github.md, but does not name/link github-issue-lifecycle.md, github-milestone-lifecycle.md, github-packaging.md, github-projection.md, github-release-workflows.md or github-releases.md. The backend reference does route these six, so they are reachable; this is not six broken links. Implementation names environment-recovery.md and indirectly mentions browser guidance but does not name/link browser-capabilities.md. The recovery reference links it.
- **Consequence:** an agent cannot identify every module and its precise selection boundary from the entry alone, as required by the requested review criteria. Two-stage backend routing remains useful but leaves entry-level selection incomplete.
- **Correction owner:** forge and implementation entries; add concise explicit per-file routing, preserving backend-specific operational detail in references and keeping browser guidance conditional.
- **Objective recheck:** compare every actual references/*.md filename with its entry's identified routing section; each has a link, purpose/boundary and load condition. Assess GitHub-only operations, shared local notes/highlights and browser-free tasks separately; no unnecessary backend/browser loading.

U-001 checkpoint `62b2c051f716c79575d746bf487629fffc3c5e5d` was pushed and read back before U-002. No package source was edited.

## U-003 — Native publisher and CI

Inspected all seven current .github files: workflow, publisher, tests, dependency pin, schema and its guide, and release handoff. Nested source selection, required assets/notices, exact committed member content, version validation, core schema hash/offline resolution, structured handoff and candidate/tooling checkout separation are implemented. The workflow remains source-only at Git root, as intended; it should not be moved into the distributable package.

Executed `PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=/tmp/062-validator-deps python -m unittest discover -s .github/tests -v`: 30 tests passed on Python 3.12.14. Native exact-candidate packages contain 132 files and validate core manifest/inventory/member bytes. However the delayed rebuild probe and actual CLI hash gate fail reproducibility. This is a confirmed release blocker despite the passing suite. No GitHub workflow dispatch or release call ran.

### R-002 — Nested tree archives are not reproducible and block release publication

- **Type/priority/status:** refactor regression; high/release blocker; Open. High confidence from two native builds and the actual CLI guard.
- **Locations:** .github/scripts/release.py:145–146 and 349–352; .github/workflows/release.yml:62–67 and 91–97; .github/tests/test_release.py, PackageTests.
- **Cause:** the refactor passes `source + ':' + PACKAGE_SUBDIR` to git archive. That expression resolves to a tree, so archive member timestamps come from the build time rather than the source commit. No explicit deterministic timestamp is supplied.
- **Observed:** tested source `1d3b402ada566ae05cf861b31c583eb643b6df5a` has the same .github and package bytes as the reviewed baseline (Git diff empty for both). Two builds three seconds apart have identical member names/content but different timestamps and SHA-256. See [probe](evidence/rebuild-probe.py) and [literal results](evidence/rebuild-result.json). The actual release.py CLI, supplied the first archive hash, exited 1 with `ValueError: Publisher rebuild differs from verified build job` before provider access.
- **Consequence:** the publishing job independently rebuilds and compares its hash with the build job. Builds in different ZIP timestamp intervals fail that prerequisite even for an unchanged candidate; retry/reconciliation cannot reproduce a prior archive reliably.
- **Reproduction:** from an eligible checkout with declared publisher dependencies, run `python docs/dev/reviews/065_b42ef13-comprehensive-review/evidence/rebuild-probe.py`. It builds twice into /tmp, waits three seconds and prints both hashes/timestamps without provider writes. Different hashes with equal file contents reproduce the defect. The script uses the current exact HEAD and v0.15.0, matching this baseline; later version changes require updating that input.
- **Correction owner:** native publisher. Retain nested subtree extraction while fixing ZIP timestamps to a deterministic source-derived value supported by the declared Git environment, or normalize archive metadata deterministically. Add a regression exercising two build times and the real expected-hash guard; keep member content/inventory checks.
- **Objective recheck:** unchanged exact source produces byte-identical ZIP and checksum across separated build times, output directories and the build/publish invocation pattern; the actual expected-sha256 gate succeeds. Changed candidate bytes still change the archive and stale hashes still stop before provider writes. Run all publisher/support regressions.

U-002 checkpoint `1d3b402ada566ae05cf861b31c583eb643b6df5a` was pushed/read back before this unit. Existing tests lack delayed rebuild coverage; no source repair was made.

## U-004 — TextStats, snapshots and acceptance infrastructure

Inspected helper source selection/snapshot/preparation, schema provenance, nested-package and documentation/preflight test fixtures, setup/execution/helper instructions, and the support suite's declared case boundaries. Reviewed helper ownership/isolation interfaces and catalog/assessor inventory; product consumer execution and independent behavior grading did not run. Existing root-layout fixtures intentionally exercise standalone compatibility; their root paths are not stale source-package locations.

Executed `PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v`: 134 tests passed in 22.253s on Python 3.12.14. The seven nested-package tests cover nested selection, dirty edit/add/delete/mode mapping, leaf/root symlinks, missing nested manifest, patch paths and historical root notices. Native committed inventory/member bytes agree with the TextStats snapshot for all 132 files; current clean dirty and committed snapshots have identical bytes, modes and fingerprints, with no changed package paths.

### R-003 — Malformed committed package ancestors silently select a root decoy

- **Type/priority/status:** snapshot source-selection defect; medium; Open. High confidence from four disposable-repository probes. Not an observed external-file disclosure.
- **Locations:** acceptance/textstats/scripts/core.py:312–334, especially unconditional fallback at 328–330; scripts/HELPER-INTERFACES.md, source selection paragraph; tests/test_nested_package.py.
- **Cause/evidence:** package_subdirectory checks only the complete nested path. With committed `.agents` or `.agents/plugins` as a symlink, git ls-tree returns no entry for the complete descendant. The helper treats this as historical root layout and accepts root plugin.json instead of rejecting the malformed ancestor. Both committed and dirty modes selected `.` and emitted only the decoy manifest. See [reproducer](evidence/ancestor-probe.py) and [results](evidence/ancestor-result.jsonl). This contradicts the documented malformed-path/no-fallback and symlinked-parent rejection contract. Existing tests cover the package leaf symlink, not these ancestors.
- **Consequence:** malformed source can be recorded as a different root package, undermining candidate identity and the intended native/snapshot parity. Current valid checkout passes; the finding concerns rejection of malformed candidates. No external target bytes were read in the probe.
- **Correction owner:** TextStats package root selection. Inspect committed path components before legacy fallback; reject unsupported occupied ancestors while retaining genuinely absent nested layout and standalone/root compatibility. Add focused fixtures for both parent components and both source modes.
- **Objective recheck/reproduction:** from repository root run `python docs/dev/reviews/065_b42ef13-comprehensive-review/evidence/ancestor-probe.py`. All four currently print accepted-root-fallback; corrected behavior rejects unsupported parents. Valid nested and genuinely root-layout sources must still select their intended package. Run full support tests and parity checks.

### R-004 — Helper support-suite command still names package root as its working directory

- **Type/priority/status:** refactor documentation defect; low; Open. High confidence from path inspection.
- **Location:** acceptance/textstats/scripts/HELPER-INTERFACES.md, immediately after the deterministic assessment shape: “Run the complete nonempty support suite from the package root”.
- **Consequence:** the shown acceptance/textstats/tests command resolves from the Git repository root. The new package root has no acceptance/ directory, so following this instruction from .agents/plugins/sdd-manager fails discovery. Root and acceptance AGENTS instructions correctly say repository root.
- **Correction owner:** helper interface documentation. Say SDD Manager source repository/Git root and keep the package distinction explicit; simplify the adjacent doubled source-inventory parenthetical while touching that paragraph only if authorized.
- **Objective recheck:** following the documented working directory runs all 134 tests; no acceptance tooling is implied to ship inside the plugin package.

U-003 checkpoint `fbc12deb1da7c53475b5bf69b3b324219c75de3f` was pushed/read back before this unit. No helper, fixture, schema or workflow repair was made.

## U-005 — Current documentation and consolidation

Checked all tracked current Markdown outside frozen review packages and AI logs, plus this campaign's three Markdown artifacts: 201 documents. Local links/directories/anchors and eight repository-source URLs were checked against the current checkout, not live HTTP. No broken target/anchor, heading-spacing or consecutive-blank-line error was found. The source URL check establishes current checkout paths only; external availability remains untested. Retained [scan results](evidence/document-check.json).

Inspected source package statements in the capability map, PLUGIN contract, source instructions, release handoff and acceptance setup/execution/helper documents; reviewed demo and Jules prompt boundaries relevant to loading/refactor. Package-relative `skills/`, `assets/` and target-project root artifact references remain valid uses; they must not all be rewritten to source checkout paths. Root/package READMEs have separate intended audiences. The current native publisher and snapshots normalize package names consistently on valid input. R-004 is the confirmed stale working-directory instruction. Review index navigation includes this campaign without changing prior campaign rows or their artifacts.

Final change-scope inspection: only .gitignore, this campaign's records/evidence and its index row differ from baseline. Package, .github, acceptance source and all prior closed campaign artifacts remain unchanged. U-004 checkpoint `368855aa41b9a76328bae40616dffcd6b8164741` was pushed/read back before this unit. Each earlier unit's checkpoint was likewise published before progression.

## Verification and evidence limits

- **Passed:** 134 TextStats support tests; 30 publisher tests; APA structural validation (37 documented sibling-reference warnings, zero errors); pinned offline core manifest validation; 132-file native archive inventory/content and TextStats parity; clean dirty snapshot identity; 505 packaged local links; current-document target/anchor/spacing checks; root/package license equality; requested ignore pattern and preservation of tracked package paths.
- **Failed adversarial checks:** delayed exact-source archive rebuild and actual CLI hash gate (R-002); four committed/dirty malformed-ancestor source-selection probes (R-003). Passing suites do not override these failures.
- **Inspection depth:** all 132 packaged files inventoried/contained; all 15 skill entries assessed; all 75 references receive structural/routing/link review, with detailed content review concentrated on consequential handoffs and refactor interfaces. No claim of exhaustive sentence editing or independent execution of every workflow. Acceptance helpers/fixtures are reviewed against source/pinning/evidence contracts and exercised by the full suite; no TextStats product run took place.
- **Unrun/excluded:** live consumer/independent acceptance, installed-client discovery/loading/reload, GitHub Actions execution and action-ref availability, hosted tracking/release writes, actual external URL availability, source-only archived campaign/log compatibility and visual artwork redesign. No provider/model behavior is established by deterministic checks.
- **Environment:** Python 3.12.14; Git 2.51.1; declared jsonschema 4.26.0 supplied from /tmp/062-validator-deps for native checks. Reviewed source is the full baseline above; later tested campaign commits change only review records/.gitignore, with package and tooling bytes unchanged.

## Proposed revision queue and stopping boundary

1. **R-002:** repair deterministic archive metadata and add separated-build/real hash-gate regression coverage. This blocks release publication.
2. **R-003:** reject malformed committed ancestors before standalone fallback; add both-parent/both-mode fixtures while preserving genuine root-layout support.
3. **R-001:** complete concise forge/implementation entry routing without duplicating backend procedures or requiring irrelevant browser loading.
4. **R-004:** correct the helper command's source-root instruction.

Recheck native/support suites and archive/snapshot parity after accepted coupled repairs. Review findings are proposals, not accepted corrections. The requested `_agents` ignore rule is implemented; no reported finding is repaired, merged or marked Verified. Campaign remains open on its published revision branch for human review.
