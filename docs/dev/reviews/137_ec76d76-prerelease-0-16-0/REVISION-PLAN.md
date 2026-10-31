# Prerelease revision and release preparation plan

Campaign **137_ec76d76**, from main `ec76d76cd1177e3ff0b02321aa462b7ed731eb08`; working `revision/137_ec76d76-prerelease-0-16-0`, return target main. Human authority: review and fix, minor bump, prepare release, close campaign, then create release.

| Action | Outcome and owners | Recheck / boundary | State |
| --- | --- | --- | --- |
| V-001 (R-001) | Repair source campaign-index table structure; preserve row text and closed packages | Single contiguous table; all links and frozen paths unchanged | Verified |
| V-002 | Bump canonical manifest 0.15.4 → 0.16.0; collect full release-range coverage and prepare body-only RELEASE-NOTES in this active directory for later root placement | Version/schema, exact committed archive/stable names/checksum, notes coverage and supported claims | Verified: exact 168-member package and five extracted CLI checks |
| V-003 | Finalize campaign evidence and explicitly integrate/publish main | Scoped merged checks, source/target provenance, no historical edits and clean return | Finalized; actual main integration/publication remains |

After campaign closure, coordinate the separately authorized direct default-branch release commit with the finalized notes as its exact body. Publish/read back commit and tag; use the repository's existing Python publisher as the sole direct publisher, with protected token input, exact handoff and complete draft/upload/publication/readback. No Actions publication dispatch or competing publisher is selected. Retain the final root notes and a source-only release outcome after publication.

Finalization adjustment: root RELEASE-NOTES.md is refreshed before campaign freeze, preserving applicable utility prerequisites. The later default-branch release marker retains the exact notes body and may be empty; no post-closure campaign move is needed.
