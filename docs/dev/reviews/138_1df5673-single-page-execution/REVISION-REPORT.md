# Single-page execution revision record

Campaign **138_1df5673**, branch revision/138_1df5673-single-page-execution from main at `1df5673fb6070bebac9e63f6f9f5e9fe0cb268dd`, returning to main. No suspended parent. [Accepted plan](REVISION-PLAN.md).

Opened under the human request to integrate the agreed two-mode behavior into both single-page prompts and close. Current stage: opening; edits/checks pending. Fresh public clone recovered the published baseline after workspace maintenance removed the earlier checkout. No implementation or release selected.

## V-001 — Integrated execution modes

Updated both single-page Tetris prompts: baseline supports direct file and HTTP(S), including localhost, with automatic location.protocol detection and verification of both paths. Cookie/URL persistence sections explicitly apply only to HTTP(S); direct-file execution starts from defaults, retains settings in session memory and avoids cookie/configuration-URL reads/writes. Save/Restore remains conditional on its later capability and applies restored local-file settings only in memory. File-persistence sections independently qualify Restore's cookie/URL effects by mode, preserving separately submitted feature requests.

HTTP(S) URL → cookie → default precedence is unchanged. The selected local-file contract intentionally ignores query parameters even though file URLs can technically carry them. No substitute automatic storage, premature baseline features, gameplay/layout changes or other prompt edits introduced.

## Verification and finalization

Both files match their starting-baseline bytes with exactly the four selected insertions/replacement operations; all other content, including eight featured capability sections, is preserved. Five existing package-documentation checks pass on Linux/Python; focused prompt composition, active-record/navigation links, whitespace and complete baseline-relative path scope pass. All other prompts, package/version/runtime and prior closed campaign packages are unchanged. These are source/document checks, not generated Tetris/browser execution evidence.

Opening publication initially lacked credentials after workspace cleanup. The human resupplied the repository credential; it was saved only in ignored gh.tkn, and opening `80a9ea8c9ff1e1b680c3658f0b07dfeee3eb7141` was published/read back before prompt work. No credential content enters source or evidence.

V-001 verified; V-002 finalized for explicit main integration. Publish/read back this result, refresh main, explicitly merge the verified campaign tip, rerun scoped merged checks and publish/read back main with clean return. Actual integration/publication establishes closure; freeze these records afterward. No release selected; package remains 0.16.0.
