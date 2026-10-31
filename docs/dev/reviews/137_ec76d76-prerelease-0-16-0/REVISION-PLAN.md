# Prerelease revision and release preparation plan

Campaign **137_ec76d76**, from main `ec76d76cd1177e3ff0b02321aa462b7ed731eb08`; working `revision/137_ec76d76-prerelease-0-16-0`, return target main. Human authority: review and fix, minor bump, prepare release, close campaign, then create release.

| Action | Outcome and owners | Recheck / boundary | State |
| --- | --- | --- | --- |
| V-001 (R-001) | Repair source campaign-index table structure; preserve row text and closed packages | Single contiguous table; all links and frozen paths unchanged | Verified |
| V-002 | Bump canonical manifest 0.15.4 → 0.16.0; collect full release-range coverage and prepare body-only RELEASE-NOTES in this active directory for later root placement | Version/schema, exact committed archive/stable names/checksum, notes coverage and supported claims | Prepared; exact committed package recheck next |
| V-003 | Finalize campaign evidence and explicitly integrate/publish main | Scoped merged checks, source/target provenance, no historical edits and clean return | Authorized after preparation |

After campaign closure, coordinate the separately authorized direct default-branch release commit with the finalized notes as its exact body. Publish/read back commit and tag; use the repository's existing Python publisher as the sole direct publisher, with protected token input, exact handoff and complete draft/upload/publication/readback. No Actions publication dispatch or competing publisher is selected. Retain the final root notes and a source-only release outcome after publication.
