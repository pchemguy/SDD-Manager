# TextStats support revision report

## Campaign and scope

Campaign `017_54d55ed`; [implementation plan](REVISION-PLAN.md), [canonical findings](REVIEW-REPORT.md). Reviewed baseline: `54d55edebd8a7af6499d625bdbb357f864a4db1d`. Execution checkpoint: `3bc079018922bc84774b58c36fd7c1482adcf9e0`. Working branch: revision/017_54d55ed-comprehensive-review; target: feature/architecture-revision.

The human commanded revision execution on 2026-10-04. Authorized repairs cover R-001/R-002 ownership checking and R-003 helper documentation, with routine scoped commits/pushes and verified integration. Campaign 011 QC implementation and live/client acceptance remain outside this revision.

## V-001 — Regression and contract checkpoint

Added independently expected regressions for custom/mixed IDs, linked reports/specifications, backtick/tilde/indented examples, incomplete fences, unsupported candidates, explicit additive child documents, unsafe/malformed options, hierarchy parents and custom table IDs. Added catalog validation sensitivity for the optional ownership field. HELPER-INTERFACES.md now defines the intended bounded parsing contract.

Actual RED command: `PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=acceptance/textstats python -m unittest tests.test_checkers tests.test_catalog.CatalogIntegrity.test_optional_ownership_documents_contract_validation -v`. [Raw output](evidence/revision-red.txt). Observed result: 16 tests ran, with 12 failing subtests/tests and one error from rejection of the new optional DSL field; exit 1. Existing checker controls run alongside new regression cases. The failures demonstrate missing behavior; production parser and validator remain unchanged at this checkpoint. This is an intentionally failing, incomplete revision checkpoint, not a completed repair. V-002 must establish GREEN before repair completion.

## TODO — pending separate later review

- **TODO-017-001:** Campaign 011 QC implementation / P-001. Pending for a separate later review against then-current source and its retained campaign plan.
- **TODO-017-002:** Live/client acceptance / E-001/E-002. Pending for a separate later review with an explicitly supplied dedicated repository, supported client/independent contexts/interruption facilities and protected credentials only when classified access failure requires them.

Neither TODO is an exit requirement or executed action in this revision. No installation refresh, live acceptance or hosted test object creation is claimed.

## V-002 — Ownership correction and GREEN

V-001 RED checkpoint: `bfb2454`, pushed on the campaign branch before production changes. The runtime checker now parses case-sensitive stable IDs without a T-prefix assumption; validates malformed checkbox/table candidates; skips properly closed backtick/tilde examples and rejects incomplete fences. Default active task roots remain authoritative; arbitrary linked Markdown is not traversed. Optional additive child documents are validated for safe normalized paths/history exclusions and checked against actual files/symlink parents. Runtime and catalog DSL validation share the option syntax validator. PurePosixPath keeps the declared slash-separated option syntax independent of the host OS.

Focused GREEN: `PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=acceptance/textstats python -m unittest tests.test_checkers tests.test_catalog -v` ran 39 tests, exit 0 ([output](evidence/revision-green-focused.txt)). Subsequent closing-fence, decorated/case-sensitive ID and malformed-path/table regressions were added during code inspection. Full GREEN: `PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v` ran **79 tests**, exit 0, 23.012 seconds, no reported skips/failures ([output](evidence/revision-green-full.txt)). Catalog validation: 27 valid static cases, exit 0 ([output](evidence/revision-catalog.json)).

All four original probe expectations now hold; the corrected result is a separate [artifact](evidence/ownership-probes-corrected.json) recording the tested pending source hashes. Original review observations are unchanged. R-001/R-002 behavior is rechecked; final composed review/integration remains V-004. Helper package pinning/recovery/capture regressions also pass; this is local support verification, not live/client acceptance.
