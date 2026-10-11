# Root manifest only revision report

## Opening

Campaign `043_6294eee-root-manifest-only` is prepared under the human's explicit open/prepare/run instruction. Starting main `6294eee53dc00b3e3ccfac0372996384dbe9c548` is clean and previously remotely verified. [Accepted revision plan](REVISION-PLAN.md) covers directory removal, current guidance and package tooling/test reconciliation, and verified integration. Execution follows this opening checkpoint.

Inspection found obsolete dependencies in root AGENTS/README, publisher inventory/build validation, acceptance snapshot inventory/manifest eligibility, acceptance setup/helper documentation and associated tests. `.codex-plugin` contains one tracked file, `plugin.json`. Root manifest already declares the portable schema and inline OpenAI interface. No closed campaign changes are selected.

## V-001–V-002 — root-only package correction verified

Removed the single compatibility manifest and directory. Root `plugin.json` is byte-identical to baseline and passes Draft 2020-12 validation against the canonical schema retained with SHA-256 `0a4aad95ce337878ad38802ebf0daa3fde76abe3f65400c86bcbb1ec0b3ab883`. All OpenAI interface metadata remains present in that unchanged manifest.

Updated README/AGENTS, publisher inventory and build preconditions, acceptance committed/dirty snapshot inventory and manifest eligibility, and setup/helper guidance. Publisher now checks required inventory before reading the sole root manifest. Updated fixtures require root-only builds and prove leftover compatibility files are excluded; legacy-only input is rejected. Dirty snapshots preserve root metadata, orientation and binary assets without packaging obsolete files.

Initial publisher run with root-only fixtures failed with four errors under the old legacy requirement. A new legacy-only refusal test exposed missing-root lookup before inventory validation; moving inventory validation first fixed that error. Final 27 publisher tests passed in 0.229 seconds; 113 support tests passed in 17.681 seconds. Whitespace checks passed. Actual committed archive and final merged-state checks follow this checkpoint; no release/client discovery is claimed.
