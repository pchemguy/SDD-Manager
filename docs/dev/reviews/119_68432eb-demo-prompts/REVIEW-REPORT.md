# Demo prompt review

Campaign **119_68432eb**. Full baseline/branch-off `68432eb07859744bd7e6d6df8589919b34b3903d`. Working branch `revision/119_68432eb-demo-prompts`; creation parent, eventual integration and return **main** on origin, pchemguy/SDD-Manager. No suspended parent; Standard reporting. Human authorizes opening and review, not prompt revision, integration or closure. Prior campaigns are closed and frozen.

## Sources, scope and assessment

Reviewed the supplied Featured Autodoc.md in full, retained byte-for-byte as [review input](input/FEATURED-AUTODOC.md), SHA-256 `43a12ce7a5081051760cecbb798d800e1bbb304a68004095eae06d62a32ac7cc`. Comparison sources are current Tetris prompt variants/guide and the relevant main/feature and document-mode boundaries at the baseline above. The intervening main change renamed existing prompt headings; those manual changes are preserved. No external research, application execution or fresh consumer trial was needed for this text review.

The draft is a baseline-autodoc prompt followed by eight implementation feature requests, not an AIO description or cumulative document-design sequence. The order is coherent: modern rules → ghost mode → penetrator → settings → cookie/URL persistence → leaderboard → file persistence → layout. Length and detail are appropriate; no broad shortening or added workflow recital is needed. Detailed existing feature bodies, file formats, button placement and layout substantially agree with current prompts.

## Findings and recommendations

All findings are **Open**, with high confidence in the cited text; revisions remain proposed. R-001 depends on intended submission style. R-002 is a scope clarification if a session-only settings stage is intended; it is not permission to add a new requirement silently.

### R-001 — Clarify submission and standalone context

**Type/priority:** usage clarification, Medium. The file starts with an autodoc main request, then independently commands eight feature campaigns without explaining whether it is a sequence of separately submitted prompts or one request to execute the sequence. Feature 5's “all settings above” also assumes surrounding text is included. Pasting everything may be read as initial project scope; copying one section may lose its contextual referent. Autodoc explicitly applies to the Greenfield request; it does not itself preapprove feature checkpoints or implementation.

**Recommendation:** add a short usage lead outside the copyable prompts explaining separate sequential submission if that is the intent. Treat each feature as its own copyable request; refer to the application's existing game-configuration settings instead of “above”. A suitable guide title is “Autodoc baseline and feature campaigns”; this belongs alongside the AIO variants, not as an equivalent full-scope AIO prompt. Do not recite the SDD workflow or invent preapproval. If a single autonomous sequence is intended, resolve that material choice before revision.

**Recheck:** a reader can identify the first request, when to use later sections and what each copied prompt relies on, without accidentally importing future features into the baseline.

### R-002 — Put session-only scope with Game configuration

**Type/priority:** scope clarity recommendation, Medium. Feature 4 defines controls but does not state their persistence boundary. Feature 5 says session-only configuration “may be delivered as an intermediate increment” even though Feature 4 is already the preceding configuration campaign. That mixes an optional AIO delivery sentence into an explicit feature sequence.

**Recommendation:** if the intended progression is session-only controls followed by persistence, put “Keep settings within the current page session; do not persist them across page reloads” in Feature 4 and remove Feature 5's intermediate-increment sentence. Keep Feature 5 focused on cookie/URL persistence.

**Recheck:** each campaign's included/next-stage scope is explicit and session-only behavior is not ambiguously introduced inside the persistence campaign.

### R-003 — Ensure next-piece preview exists

**Type/priority:** scope completeness recommendation, Low. Feature 4 offers a next-piece-preview switch, but neither the terse baseline nor Feature 1 explicitly requires the preview. A reasonable baseline may already provide it, so this is an ambiguity rather than proof of missing implementation.

**Recommendation:** add “Add next-piece preview if not already available” to Feature 4, matching the current multipass prompt's bounded treatment rather than expanding the initial baseline.

**Recheck:** the configuration campaign includes a functioning preview or retains a verified existing one, rather than presenting an inert switch or silently expanding an earlier campaign.

### R-004 — Repair the Greenfield clarification sentence

**Type/priority:** language, Low. “Surface decisions that materially affect application before implementation” is missing a determiner and leaves the affected aspect vague.

**Recommendation:** “Surface decisions that materially affect application scope or gameplay before implementation.” Retain its substantive intent. The brief classic baseline is otherwise a reasonable exploration input; there is no need to inflate it into an early SPEC.

**Recheck:** the sentence is grammatical and identifies the material decision scope without changing approval or implementation authority.

## Optional refinement and retained choices

For cleaner incremental data ownership, consider introducing result ID and completion timestamp with Feature 6, leaving Feature 7 to specify serialization/validation. This is optional, not a confirmed defect or an accepted scope change. The existing one-set Save/Restore placement at the bottom of settings, combined leaderboard/settings files, JSON validation and both SQLite table signatures are already consistent; keep them. Layout can remain the final feature; references to panel contents earlier do not require its final placement early.

## Verification and stopping boundary

The retained input matches the attachment exactly. Its eight feature headings and content were inspected against current prompt bodies; modes/implementation sequence and prerequisite references were assessed separately. No code/runtime or application correctness is claimed. Record and publish this review with campaign navigation/HANDOFF, then stop with the campaign open for revision decisions. Do not alter the uploaded original, demo prompts, plugin, version/release or closed records.
