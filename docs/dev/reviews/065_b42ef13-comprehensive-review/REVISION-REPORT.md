# Post-refactor revision results

## Campaign and scope

Campaign `065_b42ef13`; baseline `b42ef135345b5f0376e8f6f484592e1ac5b38df2`; original opening `10a69811be8c7a8e3badc0724b4bd875f4df4a24`. [Accepted plan](REVISION-PLAN.md); [baseline review](REVIEW-REPORT.md). Branch `revision/065_b42ef13-comprehensive-review`; target `main`. Execution authorized after plan checkpoint `e3df0eba7660311bee082d0ce4deb5a3550e65cc`. State: executing; integration pending.

## Action evidence

### V-001 — Deterministic release archives (R-002)

The publisher now archives the full source commit with nested package path selectors, then rebases only package members into sdd-manager/. It preserves the commit timestamp, extended ZIP metadata, permissions, compression and source comment; Git uses command-scoped UTC. The standard-library rewrite adds no Git-version requirement. Exact member/inventory validation and the expected hash gate remain enabled. The source handoff guide describes deterministic source timestamps.

Added three publisher tests: separated build-clock simulation and distinct timezones with executable-member/commit metadata checks; actual CLI matching/stale hash guards; changed package content changing the archive. The timestamp regression failed on the prior publisher as intended. Initial fixture option placement was corrected before recording that RED assertion; UTC handling was then added after the metadata check exposed local-time dependence.

`PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=/tmp/062-validator-deps python -m unittest discover -s .github/tests -v`: **33 passed**, Python 3.12.14. The retained real probe builds twice three seconds apart: all 132 member contents/names match and archive SHA-256 is identical. [Corrected result](evidence/rebuild-corrected.json), tested candidate e3df0eba7660311bee082d0ce4deb5a3550e65cc with the V-001 working-tree publisher. Full committed-candidate/merged-state checks follow completion of the coupled revisions. R-002 locally verified; no hosted release/CI run claimed.

### V-002 — Validate every committed package component (R-003)

Source selection now checks each occupied component of .agents/plugins/sdd-manager before choosing the nested root or standalone fallback. Symlink, regular-file and Git-link components reject with package_mode_unsupported. Genuinely absent nested layout and ordinary parent directories still allow standalone selection. No external symlink content is read.

Added two support tests covering 12 malformed-ancestor combinations (two parents, three kinds, both capture modes) and four positive ordinary-parent/root-layout combinations. After correcting fixture parent-directory setup, all 12 negative combinations failed against the prior helper as expected. With the fix, the full support suite passed: **136 tests in 26.860s**, Python 3.12.14. The retained four-case probe now rejects every malformed candidate: [corrected results](evidence/ancestors-corrected.jsonl). R-003 locally verified. V-001 commit c4e8f4be4e3019b825c0617142a90dd39572d522 was published/read back before this action.

### V-003 — Correct helper source-root instructions (R-004)

The helper guide now explicitly runs the support command from the SDD Manager source repository’s Git root, clarifies committed-component rejection and combines the doubled assets parenthetical. The acceptance/textstats/tests path exists there and is excluded from the distributable root. Markdown links/spacing passed. Reused V-002’s full **136-test** pass because helper/test executable bytes are unchanged by this wording action; no redundant suite run. R-004 verified. V-002 commit 360f746fd13fb28d1e2435c9c1cf45167ff3963a was published/read back before this action.

### Remaining actions

V-004/R-001 remains pending. Original failed evidence remains unchanged. No live acceptance or provider operations are selected.
