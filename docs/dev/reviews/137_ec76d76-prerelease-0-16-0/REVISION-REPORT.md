# Prerelease revision report

Campaign **137_ec76d76**. [Plan](REVISION-PLAN.md); [review](REVIEW-REPORT.md). Starting baseline `ec76d76cd1177e3ff0b02321aa462b7ed731eb08`, working revision branch returns to main.

## V-001 / R-001 — Campaign navigation

Moved the existing campaign-index explanatory paragraph before the table and joined all rows into one contiguous table. Historical row text/order and closed package contents are unchanged. Checks pass: one header/delimiter, no interrupted rows, every index link resolves, full baseline-relative path inspection preserves all closed packages and agent-authored whitespace is clean. R-001 verified; no other confirmed finding remains unresolved.

V-002 release preparation and V-003 campaign integration remain pending. No release has been created.

## V-002 — Minor version and release-message preparation

Changed the sole manifest version authority from 0.15.4 to **0.16.0**. Prepared [complete release notes](../../../../RELEASE-NOTES.md) for movement to root RELEASE-NOTES.md in the later default-branch release commit. [Coverage](release-coverage.json) accounts for 133 commit identities since first-parent baseline v0.15.4 (`3c0c64560d34397630c493c48cd938115eaed770`), 15 campaign integrations and six direct review/outcome/repair records through V-001. Integration summaries and current net changes supply user outcomes; bookkeeping does not duplicate earlier release highlights. The ignored/untracked internal checkpoint retains this baseline and coverage; later preparation/merge/release commits require incremental refresh.

Worktree validation: manifest/schema and package validator pass (zero errors, 67 bundled-reference warnings); current source audit still resolves 1,108 links; ten standalone prompts/shared Quick Start parity retained; five package-documentation tests pass; whitespace and changed-path preservation pass. Product change in this campaign is the version only; exact committed 0.16.0 archive/name/hash checks follow publication of this preparation checkpoint. The reviewed runtime and chart bytes remain unchanged, so their fresh/prior evidence remains applicable within its recorded limits.

No release/tag/publisher effect has occurred. Finalization and campaign closure precede the default-branch release commit and sole direct publisher.

## V-003 — Final candidate and closure readiness

[Candidate package](candidate-package.json) from published `6200b3f4ada1c1a7a37510f5ef925f8507e7c324`: 168 exact Git-blob members; offline manifest schema passes; stable archive/checksum names and checksum bytes agree; five extracted Node CLI help commands exit successfully. Its archive hash identifies that source only; the final default-branch release commit will be rebuilt independently.

Final notes now replace the unchanged tracked 0.15.4 root RELEASE-NOTES.md while this campaign remains active; relevant utility prerequisites are retained and stale release facts refreshed. This supersedes the initially planned post-closure staging move and preserves frozen records. The later authorized direct default-branch release marker may be empty, carrying the exact final notes as its body; no campaign report needs a post-closure edit.

R-001 repaired/verified; all units complete; sole package change is version 0.16.0. Baseline-relative paths preserve prior closed packages, demos, transcripts, README/chart bytes and runtime code. Fresh 327 local results and qualified prior 14-job CI readback apply to unchanged inputs; final five documentation/schema/package checks cover metadata. Link/whitespace, notes/hash, placement and two-parent merged-state checks remain at the integration boundary.

Publish/read back finalization, explicitly merge into refreshed main, verify/publish/read back and return cleanly to close the campaign; only then create/publish the default-branch release commit/tag and run the sole direct publisher. Record release outcome outside the frozen campaign. Release publication is pending.

Merged-state check identified CRLF endings emitted by the coverage TSV writer. Normalized that active evidence file to LF with every parsed field unchanged; no product source changed. Full baseline-relative whitespace now passes. This evidence-only normalization and this explanation are the intentional merged-tree differences from the published source tip.
