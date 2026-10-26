# Demo prompt change review

## Campaign and authority

Campaign **120_cccb2bb**; branch `revision/120_cccb2bb-demo-prompts`. Creation parent, full baseline and eventual integration/return: main at `cccb2bbc48e2d2c3984b82d2c0275fba1bc753fa`. No suspended parent. Reporting: Standard.

The human requested pulling origin, opening a new demo-prompts revision campaign at main tip, rebasing the last 119 commit onto it, then reviewing changes. The selected scope includes replay and review publication, not repairs, integration or closure. Campaign 119's published branch and closed records remain unchanged.

## Replay provenance

Origin/main was pulled with --ff-only and was already current at the baseline. The last 119 commit `f1c5ba1eb5b13911b48a36ead278b229a9a9d879` was a single post-closure prompt change, not part of main's 119 merge. The highest reserved campaign sequence was 119.

Created the new branch at that source tip, then ran a one-commit `git rebase --onto cccb2bbc48e2d2c3984b82d2c0275fba1bc753fa f1c5ba1eb5b13911b48a36ead278b229a9a9d879^`. The result is `ce4d4ac08b74fae1d1d6f77ede9c3183ad925a8e`, directly based on main; original authorship is retained. That first new-campaign commit is published with exact remote readback and confirmed supervisor cleanup. No force-push or 119 history rewrite occurred.

All four resulting file blobs equal the source commit's blobs. Stable patch ID is identical: `d0d1ac52941ff00d84ca86f847e39e10fb771c77`. Replay had no conflicts.

## Scope and assessment

Reviewed the exact source patch and replayed passages in the Tetris README, Autodoc.md, Interactive.md and Featured Autodoc.md, including neighboring persistence requirements. Compared Multipass Autoloop.md only to establish the meaning of “pass”. Technical Writing Assistant's revision-check procedure guided fidelity, scope, clarity and consequential-dependency checks. This is a focused supplied-content review; no independent research, application execution or full prompt audit is claimed.

The change explicitly names session-only configuration and adds sensible defaults. That clarifies the separate Featured Autodoc configuration campaign. Removing the hard-coded feature count from README is harmless and reduces maintenance. Moving the usage lead into a note preserves the separate-submission instructions. Existing preview, gameplay, persistence formats and layout requirements remain intact. Length and substantive detail are appropriate; broad rewriting is unnecessary.

## Findings

### R-001 — “This pass” has no defined referent

**Priority:** Medium. **Status:** Open. **Confidence:** High.

Locations: the added sentence under Session-only game configuration in Autodoc.md and Interactive.md, and Feature 4 in Featured Autodoc.md. All three say “do not persist them across page reloads in this pass”. The first two describe one complete target scope delivered in phases; the third describes separately submitted feature campaigns. None defines passes. The sentence is appropriate in Multipass Autoloop.md, where explicit Pass 5 and Pass 6 supply the referent.

**Recommendation:** in Featured Autodoc, omit “in this pass” or use “in this feature campaign”. In AIO variants, express the intended intermediate implementation boundary directly and consistently with R-002. Preserve pass wording in the actual multipass variant.

**Recheck:** each standalone prompt identifies when the persistence restriction applies without requiring another prompt's workflow vocabulary.

### R-002 — AIO prompts leave session-only delivery both mandatory and optional

**Priority:** Medium. **Status:** Open. **Confidence:** High.

Locations: Autodoc.md and Interactive.md, Session-only game configuration and the end of URL GET and cookie persistence. The new heading/instruction commands a session-only stage, while the existing sentence still says it “may be delivered as an intermediate increment before persistence is added”. Both files define complete target scope including persistence, so the final application must persist settings; the change leaves the delivery obligation unclear.

**Recommendation:** choose one consistent meaning. If a separate session-only increment is required, state that it precedes persistence and remove the optional “may” sentence. If it remains optional, keep final game configuration as the capability and place the optional intermediate-stage instruction once. Do not silently drop final persistence or turn the AIO prompt into a multipass request.

**Recheck:** an agent can distinguish final application behavior from mandatory/optional delivery sequencing. No contradictory obligation remains. Featured Autodoc already supplies separate campaign boundaries, so this finding does not apply to it.

### R-003 — Introduced trailing whitespace

**Priority:** Low. **Status:** Open. **Confidence:** High.

Location: Featured Autodoc.md line 2, the quoted blank line (`> `). `git diff --check ce4d4ac^ ce4d4ac` reports trailing whitespace. Use `>` without the trailing space, preserving the quoted blank line. This is a formatting defect, not a gameplay or scope issue.

**Recheck:** the replayed delta plus the authorized correction passes git diff --check. The replay preserves the supplied source exactly, so no correction was applied during transfer.

## Verification and limits

- One-commit rebase completed without conflicts; all four file blobs and stable patch IDs match the supplied source.
- Changed-document local Markdown link targets exist; eight feature headings and the separate-submission lead remain present.
- Diff whitespace check fails only on the recorded quoted blank line; this is retained as R-003, not concealed as a passing check.
- The note's actual host rendering was not tested; no unsupported rendering defect is asserted from its custom title alone.
- Existing closed campaign records, original 119 branch, main and plugin source are preserved. No runtime or installed-agent result is claimed.

## Next boundary

Publish this review/navigation/HANDOFF checkpoint and stop with 120 open. Three findings remain open; prompt source is unchanged beyond the exact authorized replay. Revision decisions, implementation, main integration and closure require further direction. The containing record commit and Git/remote readback establish publication rather than this text claiming its own future push.
