# Reorganization revision report

Campaign **122_6ebcb53**; baseline `6ebcb5318fc29ff3c369d55dade449f768f4bbce`; branch `revision/122_6ebcb53-reorganization`, parent/return main. [Plan](REVISION-PLAN.md).

## V-001 — AI-log reference relocation

Moved `skills/sdd-manage/references/initialization/ai-logs.md` to `skills/sdd-manage/references/ai-logs.md` within the plugin. Removed the now-empty initialization directory. Updated 11 maintained reference owners, including the package README, tracking JSON, workflow references, capability map and package-snapshot test. Adjusted the moved file’s asset and sibling links; exact comparison confirms all other procedural text is preserved.

Verification: 139 acceptance-support tests and 50 publisher tests passed on Linux/Python 3.12.14. All 791 package-local file links resolve. No obsolete path remains in maintained callers; closed campaign/history records retain their original paths and are unchanged. Diff whitespace passes. This is a source relocation, with no live agent trial or new release claimed.

The containing action commit is published with remote readback before further work. Campaign 122 remains open for further shuffling; no merge or release is selected.

## V-002 — Environment policy assets and project instructions

Moved both environment policies from the repository root into plugin assets without changing either file’s bytes. Added the requested sections verbatim to AGENTS_TEMPLATE.md for project-root use, updated source navigation and Windows test/CI paths, and asserted inclusion of the assets in package snapshots and publisher archives. The human’s no-plugin-link boundary is retained in source contributor instructions: only the project instruction template links to these policies within the package; no packaged README, entry, skill or workflow reference links to them.

Verification: 139 acceptance-support tests and 50 publisher tests passed on Linux/Python 3.12.14. Both moved policies match their previous Git blobs exactly. Maintained policy links resolve, including template links interpreted at the project root. Package search confirms that policy references occur only in AGENTS_TEMPLATE.md. Seven native Windows contracts were skipped on Linux; no new Windows runtime pass is claimed. Diff whitespace passes; closed records and release contents are unchanged. Publish/read back the containing action commit; campaign 122 remains open.

## V-003 — Environment guides activated by project instructions

Moved playwright.md and vite-worker-loading.md directly into assets/ (no environment subdirectory), preserving both files byte-for-byte. Removed their routing table and module-selection text from the plugin’s general environment-recovery workflow; retained its general diagnostics. AGENTS_TEMPLATE.md now conditionally activates Playwright guidance before selected execution and Vite guidance for observed worker-loading failures. Expanded source contributor constraints to prohibit plugin entry/skill/workflow references to these guides. Updated snapshot and archive assertions for their new locations.

Verification: 139 acceptance-support and 50 publisher tests passed on Linux/Python 3.12.14 after the final flat placement. Exact Git-blob comparison confirms unchanged guide content. Project-root template links resolve; package entry/skill scans find no guide references. Diff whitespace passes. This relocation claims no new browser or Windows runtime execution. Publish/read back this action commit; campaign 122 remains open.

V-003 follow-up: removed the unsolicited policy-placement/prohibition paragraph from root AGENTS.md after human feedback. File placement, template activation and absence of plugin workflow references remain as implemented. Verified the exact paragraph removal and clean diff whitespace; no runtime behavior changed.

V-003 follow-up: at the human’s explicit request, removed the Windows shell and Browser development sections from root AGENTS.md. AGENTS_TEMPLATE.md is unchanged. Verified the scoped removal and diff whitespace; no runtime checks required for this instruction deletion.

## V-004 — Plugin entry explanation

Replaced the packaged README’s agent-entry paragraph with the three requested points: non-standard PLUGIN.md, its role analogous to SKILL.md at plugin scope, and common composite workflows across skills. Verified all three points, the existing PLUGIN.md link target and diff whitespace. Documentation-only edit; no runtime checks needed. Publish/read back the action commit; campaign 122 remains open.

V-004 amendment: added the requested coordinator point to the same README paragraph, naming sdd-manage and its workflow-selection, coordination and routing role. Verified against the current coordinator entry and checked diff whitespace.

Human-requested README cleanup: removed both standalone environment-policy paragraphs from the root README. Verified the exact scoped deletion and diff whitespace; template activation remains unchanged.

Human-requested README cleanup: removed the root README’s source-development navigation paragraph. Verified exact deletion and diff whitespace.

Human-requested README cleanup: removed the discovery-protocol and plugin-entry routing paragraphs from the root README. Verified exact deletions and diff whitespace.
