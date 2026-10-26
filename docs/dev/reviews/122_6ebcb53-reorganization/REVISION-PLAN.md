# Reorganization revision campaign

## Context and authority

Campaign **122_6ebcb53**; branch `revision/122_6ebcb53-reorganization`. Creation parent and integration/return target: main at `6ebcb5318fc29ff3c369d55dade449f768f4bbce`, refreshed from origin before opening. No suspended parent. Reporting: Standard.

The human requested a new revision campaign “to do some shuffling”. Campaign setup and publication are authorized. Subsequent human requests define the bounded actions below.

## Current boundary

Execute and publish the accepted reorganization actions below; retain the campaign open for further instructions. Preserve unrelated work, published v0.15.4 and all closed campaign records. No integration, closure, version bump or release is selected at this checkpoint.

## V-001 — Flatten AI-log initialization reference

The human requested moving `sdd-manage/references/initialization/ai-logs.md` up one directory. Move it to `sdd-manage/references/ai-logs.md`, adjust its relative links and all maintained callers, including the tracking template and package-snapshot assertion. Preserve procedural text and closed records. Verify moved-file content except path changes, caller/link resolution, support and publisher checks; publish without closing the campaign.

## V-002 — Bundle environment policies and integrate agent template

Move BROWSER_DEV_POLICY.md and WINDOWS_SHELL_POLICY.md from the repository root into `.agents/plugins/sdd-manager/assets/`, preserving their contents. Add the human-supplied Windows shell and browser development sections to AGENTS_TEMPLATE.md. Update maintained navigation, Windows test/CI paths and package assertions. Verify exact policy preservation, template links in their destination-root context, support/publisher suites and applicable Windows contracts. Publish without closing or releasing.

The human additionally prohibits plugin links to these policies. Keep policy links only in project-facing AGENTS_TEMPLATE.md and source-repository guidance; do not add them to the packaged README, PLUGIN.md, skills or workflow references. Record this boundary in source contributor instructions.
