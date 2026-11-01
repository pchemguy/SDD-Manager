# Prerelease assessment

Campaign **140_3218f4c**; baseline **3218f4c327f73ea51711fd236d87043a7e4b28b6**. [Plan](REVIEW-PLAN.md), [inventory](inventory.json). Review in progress; no findings or readiness conclusion yet. Source/local execution review; no fresh-agent or installed-client acceptance claimed. Prior closed records and manual provenance excluded.

## U-001 — Workflow and instruction composition

Reviewed baseline 3218f4c3. All fifteen entries and their reference inventories have explicit routes; no missing entry-to-reference route was found. Risk-weighted source assessment covered coordinator/direct entry, orientation read-only scope, main/feature modes and nine-task bundles, canonical API/model/contract ownership, tracking gates, per-task atomicity/publication, phase versus partial-range integration, steering return, campaign freezing and exact-source release handoffs. The detailed ownership rules and selected-artifact checkpoint mapping agree; a projection/runtime helper does not supply human approval or technical readiness.

Representative source contrasts: direct versus composite request; pending approval versus scoped preapproval; inline versus selected peer definitions; incomplete phase versus complete phase; publication lost response versus verified readback; child return versus parent continuation. These are source analyses, not observed consumer runs. R-001 identifies an inconsistent input/evidence projection; no other confirmed workflow defect found at this depth. Package/client evidence remains U-004.

### R-001 — Selected peer definitions are omitted from some QC identity/input summaries

- Type/priority/confidence: instruction consistency defect; medium; high.
- Baseline evidence: sdd-report/references/document-qc-reports.md, Placement and identity and compact report fields name root/children only; sdd-conventions/references/development-document-qc.md, Evidence currency names root/children; sdd-manage/references/document-qc-gates.md step 2 compares root/children state. sdd-specify and sdd-plan entry input lists similarly name focused children. Governing ownership elsewhere correctly includes selected peer model/API/contract artifacts.
- Consequence: an author following a compact input/report procedure can omit a peer definition's exact reviewed state, allowing apparently current evidence to miss a changed canonical model or contract.
- Accepted correction: include the complete selected artifact set and its governing identities in those input, evidence and currency clauses. Keep existing root reports and tasks; no new file, stage or approval.
- Objective recheck: a selected peer-only contract/model edit is visible in the root QC report's reviewed/governing identities and triggers the existing affected-readiness assessment; inline projects require no extra artifacts. Status: Accepted; repair pending.

Readiness: review continues; release not cleared.
