# Prepare a complete release message

## Entry and routing

Load for requests to prepare, draft, assemble or update a release message or release notes. These requests select complete-message preparation. **sdd-manage** establishes repository context, output ownership and the stopping boundary; **sdd-forge** supplies validated [Git release highlights](release-highlights.md); **sdd-report** assembles the complete Markdown through [release reporting](../../sdd-report/references/releases.md#complete-release-message). Local preparation needs an eligible Git worktree, not a provider, token, tracking activation or TASKS.

A narrower request to collect release highlights selects only the shared highlights workflow. An explicit request to edit supplied text without collecting project changes stays within that editorial scope. Seed text for a complete release message supplies material and preferences; it does not establish complete Git coverage or authorize publication.

## Establish inputs

1. Pin the exact target and previous release baseline using the shared highlights rules. Exclude a pending release tag from baseline discovery; retain a valid prior baseline on retry. With complete initial history and no qualifying tag, use the established null baseline. Resolve a consequential unknown release line or target before dependent collection; do not create a version/tag by implication.
2. Discover the project template, requested version/channel, package/install documentation, verified assets and relevant compatibility/known-issue evidence. Use supplied accepted sections and current authoritative sources. Unknown facts remain unknown; omit unsupported claims rather than inventing URLs, contributors, checks or release status. A preparation draft may identify intended assets as intended, not available downloads.
3. Establish the complete-message destination and its ownership before writes. Default to `<project-root>/RELEASE-NOTES.md`; honor an explicit path or project template. This is a provider-independent SDD convention, not a hosting requirement. Read an existing file and retain applicable accepted human sections, edits and cuts, correcting stale facts and superseded outcomes. Existing content alone is not proof of workflow ownership. Resolve unreadable/foreign destinations or symlinks before replacement; never follow a link to overwrite external content.

## Assemble and persist

Collect or refresh the internal highlights checkpoint through the pinned target before editorial assembly. Reuse valid incremental coverage; an unchanged target does not require replaying history. Do not advance its watermark past incomplete analysis. If the internal checkpoint was consumed/deleted after a prior publication, establish fresh coverage using the shared baseline rules; the retained final message has no coverage metadata and cannot substitute for that checkpoint.

Ask **sdd-report** to assemble the complete message from the curated changes and ancillary verified inputs. Return body-only Markdown, without YAML metadata, raw logs or internal campaign transcripts. Use a project's template or the adaptable structure in release reporting; omit empty sections and repeated highlights. A GitHub release title is a separate field and need not be duplicated in the body.

Default new generated output is ignored/untracked. **sdd-manage** adds a narrowly scoped ignore rule for the selected generated destination using existing Git persistence rules, preserving current ignore content and foreign work. A tracked destination remains tracked; update and persist it only within authorized repository scope, without silently untracking it. Complete required persistence/publication of owned ignore or tracked-note changes before further work.

Validate the entire candidate, applicable human-content preservation and current source association before replacement. Save atomically using a temporary sibling and filesystem replacement; failed collection, editing, validation or writing retains the prior complete file. Recheck ownership/current contents before replacement; do not clobber intervening edits. Remove only workflow-owned temporary files. Replace the selected file rather than append another message. If both target and applicable ancillary facts/body are unchanged, retain the existing bytes without a needless rewrite; changed verified ancillary facts may require an update even at the same Git target.

Return the retained path, final body, exact target/baseline, coverage checkpoint and evidence limits. Preparation stops here: no tag, release, asset upload, workflow dispatch or version bump is implied.

## Retention and publication handoff

Keep `RELEASE-NOTES.md` after preparation and publication, including draft-only, failed, uncertain or successful outcomes. The next authorized preparation refreshes/replaces that same file; explicit deletion or retention/path policy overrides the default. Do not delete it as highlights-draft cleanup.

The internal `.release-highlights.md` retains its separate [verified-consumption cleanup](release-highlights.md#consume-and-retain-or-clean-up). Preserve applicable human curation from the retained message even when fresh internal coverage must be established. Other destinations follow the same distinction between final message and internal checkpoint.

Before an authorized publication, refresh Git coverage and ancillary sections through the exact final release source. Any commit caused by tracked notes or ignore-rule persistence advances that source; perform the required incremental refresh and inspect whether it changes user-visible facts. Do not manufacture another tracked edit for an unchanged body. A retained message may belong to an earlier source and is not automatically valid for the next release.

Pass the complete message's exact UTF-8 Markdown bytes, source association and body hash to the selected publisher through its supported notes-file/API/structured handoff. An ignored file is absent from CI checkout; transfer the body explicitly, not merely its local pathname or a tag. Preserve accepted human sections and avoid inserting highlights twice. Read back the actual published body before claiming consumption; uncertain writes require reconciliation. Successful readback may permit cleanup of the owned internal checkpoint, while the complete-message file remains.
