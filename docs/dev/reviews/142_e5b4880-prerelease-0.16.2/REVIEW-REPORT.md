# Comprehensive prerelease review report

Campaign **142_e5b4880-prerelease-0.16.2**, supported baseline **e5b4880dfb14a3abc550909acdbf3b916dd3c72e**, observed opening **390c4f2c768f4e89a9b63d5c085c6a812383a442**. Current package 0.16.1; target 0.16.2. Comprehensive review, confirmed repairs, patch preparation, closure and release publication are authorized.

## U-001 — Complete current-source assessment

All **381 current source files** are accounted for in [coverage](coverage.json), including the complete 171-file package. Six independent read-only concern reviews covered coordinator/templates, focused skills, forge/report, runtime/CI, acceptance and human docs/presentation. The coordinator checked the remaining license/ignore contracts and integrated coverage. The [plan](REVIEW-PLAN.md) and [inventory](source-inventory.json) define exclusions and delivery order.

Baseline checks pass **338 tests**: 139 support, 61 publisher, 48 Git utilities and 90 forge utilities. Seven Windows-only tests are skipped on Linux. All 38 Python, 43 JSON, 14 JavaScript and 17 SVG sources parse; no credential-shaped source values were found. Structural validation has zero errors and 69 bundled cross-skill reference warnings. All 19 artwork assets were rendered and visually inspected. All eight diagram source paths were semantically checked; fresh Mermaid rendering is unavailable because the current cached renderer/browser is absent.

## Canonical findings

| ID | Priority | Finding | Disposition |
| --- | --- | --- | --- |
| R-001 | P2 | GIT_CONFIG bypasses the foreign-VCS preflight | Accepted for bounded repair. |
| R-002 | P2 | Replacement refs invalidate exact-source packaging | Accepted for bounded repair. |
| R-003 | P2 | Required resource inventory omits canonical runtime dependencies | Accepted for bounded repair. |
| R-004 | P2 | Acceptance milestone criteria contradict the current threshold | Accepted for bounded repair. |
| R-005 | P3 | Malformed check records escape sanitized CLI errors | Accepted for bounded repair. |
| R-006 | P3 | Catalog validation instructions name the wrong directory | Accepted for bounded repair. |
| R-007 | P2 | Bootstrap disclosure asserts unsupported completed-stage/provider provenance | Accepted for bounded repair. |
| R-008 | P2 | Copied AGENTS policy links assume unrequired vendoring | Accepted for bounded repair. |
| R-009 | P2 | Feature preparation milestone closure omits associated-work guards | Accepted for bounded repair. |
| R-010 | P2 | Issue draft guidance omits campaign-qualified FDOCS identity | Accepted for bounded repair. |
| R-011 | P2 | Human onboarding omits publication-tool prerequisites | Accepted for bounded repair. |

### R-001 — GIT_CONFIG bypasses the foreign-VCS preflight

Location: skills/sdd-manage/scripts/protected-token.mjs:53. Priority P2; high confidence.

The ambient GIT_CONFIG redirects git config while remote/transport still uses native repository configuration, hiding remote.origin.vcs from the rejection check.

Correction: Reject that channel before transport and cover direct/public and linked-root calls.

Evidence/recheck: Owned native configuration control rejects the foreign VCS normally; the alternate config reaches intercepted push. Recheck rejection with zero transport attempts.

### R-002 — Replacement refs invalidate exact-source packaging

Location: .github/scripts/release.py:git. Priority P2; high confidence.

A replacement ref changes emitted candidate bytes while source OID/archive comment remains the selected original, and the current verifier agrees with substituted reads.

Correction: Disable replacement semantics for every candidate Git read/archive.

Evidence/recheck: Owned baseline replacement produces old README/no naming helper under the original OID; require raw selected-object bytes after correction.

### R-003 — Required resource inventory omits canonical runtime dependencies

Location: .github/scripts/release.py:PACKAGE_PATHS. Priority P2; high confidence.

Broad skills/assets selection ships current files but does not require canonical git-publish.mjs/supervisor, and other mandatory data/helper resources are absent from the independent gate.

Correction: Reconcile the explicit mandatory resource contract and deletion fixtures.

Evidence/recheck: Actual inventory-record deletion passes for omitted resources; require package rejection before output for each mandatory omission, while healthy builds remain valid.

### R-004 — Acceptance milestone criteria contradict the current threshold

Location: acceptance/textstats/SCENARIO.md; cases/assessor/A-001.json and A-005; catalog.json. Priority P2; high confidence.

Independent criteria require a standalone milestone review universally, while the same pinned policy/guide omits it below four implementation tasks or with one implementation milestone. The consumer fixture supplies no override/minimum.

Correction: Align scenario/catalog/assessment expectations and final-implementation-task review/report/HANDOFF ownership.

Evidence/recheck: Trace 1–3 versus four tasks in multi-milestone phases and a single implementation milestone; retain the separate phase review milestone. No automated/live misgrade is claimed.

### R-005 — Malformed check records escape sanitized CLI errors

Location: acceptance/textstats/scripts/core.py:968. Priority P3; high confidence.

assess reads c.get before validating record shapes; checks:[1] exits 1 with AttributeError rather than generic JSON/exit 2, before repository observation.

Correction: Validate record shapes before choosing local/remote observation.

Evidence/recheck: Real scratch CLI reproduces the traceback; scalar/null/list regressions must return generic JSON, no evidence artifact, no traceback or repository observation.

### R-006 — Catalog validation instructions name the wrong directory

Location: acceptance/textstats/EXECUTION.md:49. Priority P3; high confidence.

The shown source-relative command is said to run from package root, which excludes acceptance/.

Correction: Name the SDD Manager source repository root.

Evidence/recheck: Resolve and run the documented static catalog validator from that directory; do not claim consumer acceptance.

### R-007 — Bootstrap disclosure asserts unsupported completed-stage/provider provenance

Location: assets/AI_DISCLOSURE.md:3,13. Priority P2; high confidence.

Initialization copies a fixed statement that code/testing/review already received extensive ChatGPT assistance before those stages or that provider are established.

Correction: Use truthful provider-neutral wording that does not assert completed work; retain maintainer responsibility.

Evidence/recheck: Source-trace fresh DOCS-001 and existing-system adoption with unchanged template copy; no unsupported completed-stage or provider claim.

### R-008 — Copied AGENTS policy links assume unrequired vendoring

Location: assets/AGENTS_TEMPLATE.md:15,19,23,25. Priority P2; high confidence.

The supported external installed package can be selected, but mandatory policy links assume a target-project .agents/plugins tree that initialization never copies.

Correction: Resolve policy paths from the selected installed/source package root.

Evidence/recheck: Trace copied AGENTS for external package and local-source layouts; every selected policy is reachable without introducing a new vendoring task.

### R-009 — Feature preparation milestone closure omits associated-work guards

Location: skills/sdd-forge/references/github-feature-preparation.md:24. Priority P2; high confidence.

The closure path checks the nine stage issues/integration but does not enumerate all associated objects or block foreign open work/PRs/ambiguous ownership.

Correction: Add complete paginated membership and conflict/readback guards consistent with canonical lifecycle.

Evidence/recheck: Trace exact complete membership, incomplete reads and foreign open issue/PR; only the complete unambiguous set may close.

### R-010 — Issue draft guidance omits campaign-qualified FDOCS identity

Location: skills/sdd-report/references/object-drafts.md:3,7. Priority P2; high confidence.

Bare owning FDOCS IDs produce a title conflicting with the backend campaign-qualified hosted identity.

Correction: Define the hosted FDOCS title exception and missing-campaign context gate; preserve ordinary DOCS/T-task titles and bare stage commit subjects.

Evidence/recheck: Trace ordinary/main-doc titles, known-campaign FDOCS title/markers/milestone, and missing-campaign lookup without guessing.

### R-011 — Human onboarding omits publication-tool prerequisites

Location: README.md Quick Start; packaged README Quick Start. Priority P2; high confidence.

The documented route reaches a mandatory supervised HTTPS publication utility without disclosing its Git/Node/Python and supported-host requirements.

Correction: Add concise, correctly conditional prerequisites and a canonical guide link in both entries.

Evidence/recheck: Match Git, Node 22+, Python 3.11+ and Windows/Linux utility scope to canonical runtime guidance; preserve shared Quick Start and package-relative links.

## No-finding coverage and limits

The remaining inspected ownership, optional model/API/contract artifacts, mode/checkpoint/range recovery, branch/task persistence, release notes/tag/source/latest behavior, public CLI supervision, role isolation/provenance and public prompt/diagram paths have no additional confirmed defect at the recorded depth. All ten standalone demo prompts and twenty embedded guide prompts are covered; all fifteen OpenAI presentations and their artwork are accounted for. Low-confidence MVP/example wording and optional handoff-link style observations were not promoted to defects.

Source/support evidence does not establish a fresh installed-client or live TextStats run. The review did not mutate consumer products, use real credentials in experiments, reopen frozen records or claim unrun Windows/browser behavior. Controlled runtime experiments used owned fixtures and preserved original source. U-001 is complete; [accepted revisions](REVISION-PLAN.md) define the next authorized repair boundary.
