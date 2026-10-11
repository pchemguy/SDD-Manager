# Release-message and client acceptance controls

These are extensions of the TextStats test component. They diagnose the existing SDD Manager release workflows; they add no calculator/counting API or production release implementation. Source editing and support-suite validation do not execute these consumer cases.

## Selection and prerequisites

The catalog retains A-001–A-027 identities and adds A-028–A-033. A-027 remains final reconciliation, now last in execution order. Release cases are isolated P4 successors of actual completed product/prepared-message checkpoints. A-031's failed-save fork does not gate the positive A-032 publication fork. Optional A-033 cannot gate required readiness or final diagnosis.

| Case | Boundary | Evidence class |
| --- | --- | --- |
| A-028 | Separate highlights-only and complete-message request variants | Consumer |
| A-029 | Unchanged repeat, human curation and newer delivered scope | Consumer |
| A-030 | Matching-version stale coverage, wrong version and absent provenance | Controlled consumer trials |
| A-031 | Actual save/replacement failure, preserved old notes and fresh continuation | Controlled |
| A-032 | Native commit/tag/body agreement and provider reconciliation/retry | Required controlled-provider; optional live-provider |
| A-033 | Root manifest, skill/UI discovery, sibling loading and named handoff | Optional installed-client inspection with actual consumer observation |

Before a run, establish a dedicated repository, immutable package identity, selected cases/variants, authorized destinations/effects and independent roles under [AGENTS](AGENTS.md). Do not select an earlier repository or infer release authority from its access token. For a bounded release-only run, reuse independently assessed and published predecessor objects or report Blocked; do not script completed TextStats development. Establish a legitimate product version and eligible release baseline from the product's own authority; disclose fixture version setup rather than claiming consumer preparation did it.

Default case selection includes required release variants. Live GitHub publication and installation need explicit optional selection and facilities. The installed-client profile records selection of `A-033.installed-client`; it is not satisfied by mounting source files. No optional case is promoted to required or silently reported Passed.

## Fixtures, handoffs and independent criteria

Coordinator/assessor setup uses isolated forks and exact retained checkpoints. Consumer requests carry ordinary user objectives, actual product state and authority. Do not expose this guide, case IDs, assessor contracts or desired routing to a fresh consumer. Capture before and after notes, internal coverage metadata, source/target identities, tracked/ignored status, applicable human sections/cuts, task/branch/index state and exact request/result provenance. Preserve existing instructions and foreign work.

For A-028, render each variant with `current.release_request`: “Collect release highlights for the current delivered TextStats scope, then stop.” or “Prepare a complete release message for the established release version, then stop before publication.” Supply only that single request to its consumer; never send both objectives together. Assess highlights-only first, then complete-message from an eligible isolated checkpoint. A-029 uses the assessed complete-message result, not the highlights-only fork. Verify that complete notes identify the established version and meaningful ancillary material where supported, without repeating highlights or inventing checks/downloads. No release marker, tag, provider operation or workflow dispatch is implied by preparation.

For A-029, record note bytes/hash and write identity before an unchanged repeat. Supply distinctive human paragraphs and an explicit editorial cut; then introduce a documented scope change on the isolated successor. The assessor compares semantic freshness and retained applicable human content. A version string, file presence or unchanged modification time alone cannot prove coverage. Intervening human edits must not be clobbered.

A-030's three forks independently distinguish stale matching-version notes, wrong version and absent preparation provenance. The consumer receives actual available local context, not the desired freshness answer. Restrict provider access through a disclosed controlled facility and explicit stopping scope; observe freshness work before the publication boundary. Save the successful refreshed-state checkpoint for separate A-031 and A-032 successors.

For A-031, record the old complete file bytes/hash in protected-to-consumer assessor evidence. Introduce a new scope change, then intercept the actual owned temporary-file write or filesystem replacement using a supported runtime control. Observe a genuine failed operation and unchanged prior file; do not merely edit a fixture log. Retain temporary-path ownership/error provenance. Capture preservation before lifting the fault. Fresh continuation sees actual retained state and must recheck scope/ownership/intervening edits before replacement. Missing interception or fresh-context facilities are Blocked.

A-032 starts from successful refreshed notes, not the failed-save fork. Independently examine exact native commit bytes, peeled tag and provider readback. Compare the commit body after its separate release subject/blank line with complete notes and read-back release body, including final newlines. Tag must peel to that exact release commit. Check source coverage/version/hash at the final boundary, Git publication where selected, final-note retention, internal-draft cleanup only after verified consumption, completed-rerun reuse and uncertain applied-effect readback before retry. Controlled adapters must expose real consumer choices and retain sends/readbacks; they cannot certify GitHub. A live trial uses an explicitly authorized isolated release namespace and genuine destination/readback; unsupported response-loss control is an explicit coverage limit.

A-033 records client/version, package bytes/hash and installation mechanism. Observe root-only manifest loading, skill discovery, supported presentation, one sibling-relative guidance load and named skill handoff through the ordinary request. Keep unsupported OpenAI UI behavior separate from portable discovery. If only explicit source loading is available, the installed-client variant is Not run.

## Evidence and reporting

Deterministic file/literal checks are partial facts, not independent behavioral grades. A-031 preservation literals must derive from actual before/failed-write bytes; A-032 agreement literals must derive from Git objects, retained notes and provider readback, never assessor expected text. Keep evidence classes and provenance distinct. Do not retain credentials or sensitive provider bodies; release body capture must be approved public-safe material.

Extend RUN-STATE/RESUME with existing case/variant and actual cursor fields; no new production transaction journal is introduced. Preserve original attempts, interventions, local/remote objects and fault facility identity. Interrupted or uncertain writes follow [RECOVERY](RECOVERY.md); absent actual observations remain Blocked/Not run. A-027 reconciles all selected supported IDs and optional omissions, without splitting historical case grades into fabricated new passes.

## Read-only release capture

Use [release_capture.py](cases/assessor/release_capture.py) in the assessor context to capture exact root note bytes, an optional pre-operation baseline and optional native release/provider agreement. It never writes product files, creates commits/tags or contacts GitHub. Output is version 1 literal evidence plus separate hash/command provenance; neither carries an agent pass. Freshness, human-content quality and readback origin require independent judgment.

```text
python acceptance/textstats/cases/assessor/release_capture.py --product-root <checkout> --baseline <before-notes> --output <new-literals.json> --provenance <new-provenance.json>
python acceptance/textstats/cases/assessor/release_capture.py --product-root <checkout> --release-commit <full-release-SHA> --tag <release-tag> --provider-readback <readback.json> --output <new-literals.json> --provenance <new-provenance.json>
```

Supplied normalized readback has exactly `body` (public-safe text), `target_commit` (independently resolved full SHA), `evidence_class` (`controlled` or `live-provider`), `state` (`draft` or `published`) and `release_id` (positive integer). Preserve actual controlled/API readback provenance separately; a declared class does not authenticate origin. Capture stores hashes and comparisons without copying provider body text into provenance. It rejects linked/protected/non-UTF-8 or recognizable sensitive inputs and occupied outputs. Missing baseline yields no preservation literal; partial commit/tag/readback arguments fail rather than invent agreement. Failed capture preserves existing evidence; any new partial output after an interrupted write belongs to that attempt and must remain visible.
