# Pre-release review report

Campaign **024_ed2d571**, source **ed2d571d20aa8ad6ee77f25ad89602e82e6a653b**, version **0.14.6**, 2026-10-06. See [review plan](REVIEW-PLAN.md).

State: review in progress. No release verdict yet. Report-only branch `revision/024_ed2d571-pre-release-review`; source target `feature/architecture-revision`. Tracked source was clean at orientation; unrelated untracked work is preserved. Remote main and source target both named the reviewed baseline at orientation.

| Unit | State | Evidence |
| --- | --- | --- |
| U-001 Package | Assessed; no confirmed release blocker | [Package checks](package-checks.json), [navigation/presentation checks](navigation-checks.json); 15/15 skill validators pass; 16 SVGs parse; metadata copies match |
| U-002 Skills/workflows | Assessed; no confirmed workflow-policy defect | All 15 entrypoints and consequential handoffs inspected; scenario matrix below |
| U-003 Harness | Assessed; two confirmed defects | 107 support tests Passed; 27 static catalog cases validated; independent and coordinator reproductions |
| U-004 Documentation/consolidation | Pending | Planned |

No source repair, new live campaign or installed-client activation has been performed.

## U-001 evidence and boundaries

Agent-package-author offline validators ran with Python 3.12.14. All 15 skill entries satisfy its structural rules; names/descriptions and matching directory identities pass. All 15 OpenAI presentation files name their skill in the default prompt and resolve both local icons. Root and nested SVGs parse as XML (16). Root MIT license and the third-party TDD notice/provenance are present. Root manifest and Codex manifest match byte-for-byte at version 0.14.6; PNG/SVG presentation paths exist.

The strict portable-plugin validator exits 1: canonical Agent Plugins schema is absent and skills/hooks/interface are nonportable root keys. This is an expected target distinction, not a repair request: the user requested an exact Codex metadata copy and README explicitly disclaims portable conformance. No portable/Gemini/Antigravity installation is certified.

Navigation scan inspects 149 current Markdown files and 293 local link tokens. Its two unresolved tokens in repository-bootstrap.md occur inside a literal target-README example; they are not links intended to resolve from the policy directory. No actual missing current source navigation link was found. Anchor rendering and installed-client UI are outside this mechanical check. The README Getting started sentence means no root *conforming Agent Plugins 1.0* manifest; the later section accurately describes the existing Codex copy. Wording can be clearer, but presence alone is not a contradictory conformance claim.

Checkpoint history is retained in Git on this review branch; coordinating publication uses ordinary pushes with exact remote ref readback. No source files were changed.

## U-002 cross-skill coverage

Evidence is instruction/source inspection, not a fresh consumer execution or a certification that agents will follow the instructions.

| Concern / skills | Positive path inspected | Negative / interrupted boundary inspected | Result |
| --- | --- | --- | --- |
| Orientation / manage / conventions | Eligible repository, accepted scope and current state handoff | No Git, ambiguous owner, pending merge or unrelated index work | Mutation prerequisites and preservation explicitly assigned |
| Design / specify / plan / tasks | Accepted design → SPEC QC → PLAN/layout QC → TASKS QC | Stale Ready, changed upstream, missing decision or forbidden adjacent report path | Dependent progression blocked; routine status alone does not invalidate equivalent review |
| Implement / tdd / docs / verify / report | Task acceptance, tests, documentation, read-only boundary review, coherent commit and push | Failing required check, completed work awaiting persistence, missing test-first history, unpushed commit | Repair/persistence remains with execution owner; valid existing work retained |
| Range / phase coordination | Precise next-N units, explicit review tasks, sequential completed phase integration | Cross-list next ambiguity, out-of-range prerequisite, partial phase or unclosed predecessor | No guessed expansion, skipped review task or partial main-phase merge permitted |
| Integrate-feature | Selected accepted delta; both lists for task transfer; archival of eligible sources and QC pairs | SPEC-only selection, duplicate owner, stale checked claim, interrupted archive or active references | Unique task ownership, scoped reassessment and source retention explicit |
| Steer | Commanded amendment, changed contracts/tests/docs, merge into paused target | Assessment-only request, scope reduction invalidates status, blocked merge/publication | Amendment owns persistence; always returns control without automatic task resumption |
| Forge / backend lifecycle | Eligible phase projected fully; task issue then milestone closure; independent code review/testing | Partial projection, unknown write, duplicate managed identity, foreign issue, rate limit | Readback/reconciliation required; optional hosting distinct from local implementation |
| Authorization / credentials | Existing human scope carried through prescribed normal publication | Missing scope versus host denial, access failure versus provider limit/policy | Mandatory authorization policy read; token is access capability; no bypass or duplicate plugin approval gate |

Shared policies and stage owners agree on concern ownership, the final single-task phase review milestone, per-task persistence, affected preparation reassessment and feature-versus-main parent completion. No concrete contradictory execution instruction was confirmed in these inspected handoffs. This outcome does not waive live consumer evidence or independent harness findings.

## U-003 harness execution and findings

Command: `PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v`. Actual result: **107 tests passed in 41.863 seconds**, Python **3.12.14**. See [complete output](support-suite.txt). Independent reviewer separately observed 107 Passed in 47.534 seconds; tests ran concurrently, so duration is environment-specific. No 3.11 execution is claimed.

Static catalog command: `PYTHONDONTWRITEBYTECODE=1 python acceptance/textstats/cases/assessor/catalog_tools.py validate`; [result](catalog-validation.json) confirms 27 cases and does not certify runtime acceptance. [Variant accounting](variant-accounting-check.json) retains missing grades as required Blocked or optional Not run and readiness false; this is a synthetic accounting check, not a current live campaign result.

Reviewed helper boundaries include committed/dirty package hashing, schema and checkpoint validation, local-only remote avoidance, deterministic-versus-agent assessment, unique task ownership, isolated consumer rendering, protected exports, held state drift, uncertainty retention, controlled ledger response loss and read-only evidence merge verification. Support tests exercise those local checks; they do not establish consumer decisions or native/live provider behavior. Source/support outcomes are distinct from legacy 20 Passed / seven Blocked.

### R-001 — Required count probe assesses the private implementation instead of the public API

- Type/severity/confidence/disposition: **Defect / Important (P2) / High / Open, proposed repair**.
- Location: `acceptance/textstats/scripts/contract_probe.py` lines 26–33 and implementation-specific injector at 61–67; public contract in SCENARIO.md Counting and API and cases/consumer/preparation.md; required use in cases/assessor/A-017.md and A-026.md.
- Observed: fresh isolated public-only package with correct literal counting and no core module returns Unavailable with zero tests/ImportError. A public count_text returning (99,99) plus correct private core.count_text returns Passed, two tests, no assertion failure. Both independent reviewer and coordinator reproduced this; see [observations](defect-reproductions.json).
- Consequence: valid consumer layouts can be blocked by harness setup, and broken required public exports can supply a false baseline. This obstructs reliable required A-017/A-026 trial setup. No new actual consumer case is labelled failed from these reproductions.
- Proposed correction: probe `textstats.count_text` through the contracted public package, verifying its actual import origin. Separate injection's supported layout from the public baseline check; permit explicitly documented equivalent isolated regression setup for other valid layouts. No production TextStats amendment is indicated.
- Objective recheck: package-only valid implementation passes; wrong public export fails despite correct private core; missing/wrong import remains setup Unavailable; disclosed injected count regression yields nonzero assertions with zero setup errors. Add boundary tests independent of production results, then run relevant/full support checks.

### R-002 — Receipt resolution defeats the symlink guard

- Type/severity/confidence/disposition: **Defect / Minor (P3) / High / Open, proposed repair**.
- Location: `acceptance/textstats/scripts/trial_control.py` lines 79–82, save at 93–98.
- Observed: Path(receipt).resolve() occurs before is_symlink(). A dangling receipt link into a different temporary directory runs a harmless manifest, returns Completed, creates the target JSON and preserves the lexical symlink. Independently reproduced twice; see defect-reproductions.json.
- Consequence: the stated path rejection does not hold and evidence can be created/updated at the referent. This caller-controlled helper reproduction does not demonstrate malicious exploitation or product corruption.
- Proposed correction: validate the original lexical receipt before canonicalization for fresh and resumed execution, retaining watched-file overlap and occupied-path checks; define/recheck parent symlink handling consistently with the supported path policy.
- Objective recheck: dangling and occupied receipt symlinks rejected without referent mutation; ordinary new receipt and held continuation work; existing drift/failed/unknown receipt non-replay tests still pass.

Fresh independent assessment is retained at [independent/REVIEW-REPORT.md](independent/REVIEW-REPORT.md). Independent-01 maps to R-001 and Independent-02 to R-002; these are two canonical defects, not duplicate findings.
