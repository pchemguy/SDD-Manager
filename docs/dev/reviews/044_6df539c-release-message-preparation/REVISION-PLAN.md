# Release message preparation revision plan

## Campaign and accepted objective

Campaign `044_6df539c-release-message-preparation` starts at `6df539c5f66cc6cbcdd83c3f0f9ce7aaa102d5c0`, branch `revision/044_6df539c-release-message-preparation`, target `origin/main` in pchemguy/SDD-Manager. The human requested opening a revision campaign to implement complete release-message preparation, retaining the narrower collect-highlights request. Opening/preparation completed; execution was subsequently authorized by the human’s “Execute” instruction. [Revision report](REVISION-REPORT.md) records reached state.

## Design and lifecycle

Release-message preparation is a user-facing workflow with explicit trigger coverage for requests to prepare, draft, assemble or update a release message or release notes. Manage coordinates context/file ownership and the preparation boundary; forge supplies validated Git release highlights; report assembles the complete message from change evidence and verified ancillary inputs. Do not encode this as an instruction to match one exact phrase. An explicitly editing-only request remains scoped to supplied text. The narrower collect-highlights operation remains available and produces highlights rather than a complete message.

Default complete-message output is `<project-root>/RELEASE-NOTES.md`, a provider-independent SDD convention rather than a required hosting-service filename. Honor an explicit destination. It contains ready-to-use Markdown body only, without YAML coverage metadata or raw logs. Default generated output is untracked/ignored; manage owns any required ignore-rule persistence under existing Git policies. A pre-existing tracked destination is edited and persisted within explicit repository scope, retaining its tracked status; do not silently untrack it. Existing project policy and explicit retention/path directions prevail.

Retain the complete-message file after preparation and publication until the next preparation replaces its contents, or the human explicitly removes it. This file differs from the internal ignored `.release-highlights.md` coverage checkpoint: its existing verified-consumption cleanup policy remains unchanged. A new invocation refreshes/validates evidence before replacing the complete-message file atomically; interrupted or failed preparation preserves the last complete copy. Read the prior message and retain applicable accepted human sections, edits and editorial cuts, while correcting stale facts and superseded changes. Replacement updates one file rather than appending another complete release message. Foreign/unreadable ownership and symlinks must be resolved without destructive guessing; existence alone does not establish ownership. Repetition at an unchanged target creates no invented highlights or needless rewrite.

The complete-message structure is adaptable: concise release overview; consequential compatibility/upgrade notes early; highlights; other changes grouped under applicable Added/Changed/Deprecated/Removed/Fixed/Security categories; installation/downloads; known issues/limitations; optional references/acknowledgments. Omit empty/inapplicable sections, avoid duplicate highlights and do not invent versions, support claims, links, contributors or readiness. Respect an established project template. GitHub's separate release title need not be repeated as a redundant body heading.

For preparation, pin current target and previous release baseline through the existing highlights rules; a pending release tag is excluded from baseline discovery. Reuse valid internal incremental coverage and preserve human curation. Assemble ancillary sections from authoritative project/package inputs, distinguishing unverified or future release facts. Return the retained path, final body, exact source/baseline and evidence limits. Preparation alone creates no tag, release, upload or dispatch and does not invent a version bump.

Before later publication, refresh coverage and factual sections through the exact final source. The publisher consumes the final complete-message Markdown bytes via an established notes-file/API/handoff input, with exact source association and body hash. Readback proves actual consumption; it does not delete the retained complete-message file. Reconcile these distinctions with existing highlights cleanup and publisher instructions.

## Ordered actions and owner routing

| Action | Owner/scope | Outcome and checks |
| --- | --- | --- |
| V-001 | Manage entry/release operations/examples; forge entry | Define complete-message triggers/routing, editing-only scope, retained narrower highlights and preparation-only stop. Check synonymous requests and absence of unwanted hosted effects. |
| V-002 | Report release reporting; forge shared local preparation | Define complete-message assembly, optional structure, default destination, existing-file handling, atomic refresh/retention and body-only output. Check existing human content, missing facts, same-target repeat, advanced target, explicit path/template and interrupted preparation. |
| V-003 | Forge release/workflow handoff and cleanup; maintained package navigation/docs | Bind exact complete body/source/hash to the selected publisher, distinguish persistent message from internal highlights draft and update README/capability map/source handoff guidance. Check published, draft-only, failed and uncertain consumption without premature deletion. |
| V-004 | Verification/reporting/integration | Exercise bounded source/consumer scenarios as available, run applicable support/publisher tests and package/navigation checks, preserve closed records, publish each checkpoint, explicitly merge and verify main. State source walkthrough versus actual behavior and unexecuted client/provider limits. |

## Verification scenarios

Include complete preparation from Git with no hosting access; highlights-only request; supplied-text-only editing; initial release with no prior tag; pending tag exclusion; pre-existing message replaced while preserving applicable human material; unchanged/advanced targets; stale ancillary facts; tracked versus ignored destination; explicit template/path; unreadable/foreign/symlink destination; failure before atomic replacement; exact publisher body transfer and retained message after confirmed publication. Do not add arbitrary quotas or claim scenario success merely from fixture design.

## Stopping point

Commit/publish opening plan, report and index entry. Source changes, tests and final integration await the human's execution instruction. No release message for SDD Manager itself is generated by opening this capability campaign.

## Accepted execution amendment — release commit and freshness

The human additionally required on 2026-10-11 that release requests verify RELEASE-NOTES.md freshness from local context and version checks, use its complete body for GitHub, and use it for the release commit carrying the tag. V-005 covers manage Git persistence, report commit format, forge release/workflow entry and README/capability/verify/handoff reconciliation. Version equality supplements source/coverage checks rather than replacing them. Reuse matching completed effects on recovery; preparation-only creates no release marker. Tag the verified release commit and transfer its exact body/source/hash without claiming provider success in advance.
