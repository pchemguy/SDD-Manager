# SDD Manager 0.15.0 release preparation

The initial candidate and complete message are prepared for 0.15.0. This record retains that preparation in campaign `070_891a0ad`. The subsequent human release/closure request authorizes verified main integration followed by product publication.

## Candidate and coverage

| Item | Prepared state |
| --- | --- |
| Source | `891a0ad69dce859e3622750c51201d6c26127499` on main |
| Manifest / intended tag | `0.15.0` / `v0.15.0`; no version bump or tag created |
| Previous release | `v0.14.9`, peeled commit `98cbc3d2fb81de225e5e1088517b86fc22feec3a` |
| Change coverage | All 554 range identities, parents and subjects reconciled across 103 first-parent integration/direct scopes; 59 reachable merges, with 46 selected integration summaries plus targeted direct-change and net-package evidence |
| Complete notes | Root [RELEASE-NOTES.md](../../../../RELEASE-NOTES.md); body-only UTF-8 Markdown, now tracked for review and later release use |
| Incremental checkpoint | Root `.release-highlights.md`, ignored/untracked and analyzed through the candidate |
| Build handoff | Initial local `release-preparation/0.15.0/` handoff/event; `publish: false`, used only for local builds. Retained output: [build observation](evidence/build-observation.json) |

Coverage consolidates nested and reopened campaigns, excludes routine records from public highlights, and accounts for superseded work. In particular, the temporary version 0.16.0, reverted standalone authorization policy, legacy manifest restorations, temporary workflow renaming and reverted plugin-wide tracking-default changes are not presented as current delivery. Combined merge changes are record/index updates plus the source development contract; no extra product change was identified there. Frozen report contents were not loaded for routine assessment.

The latest hosted stable release was read as v0.14.9. Complete fetched Git history is not shallow; no qualifying side-history tag complicated baseline selection.

## Prepared assets

| File | Bytes | SHA-256 |
| --- | --- | --- |
| `sdd-manager.zip` | 357046 | `cef1e54796ec0b8581213ebc3d7f816c391798be54ef916ea0f70386052def2c` |
| `sdd-manager.zip.sha256` | 82 | `78edecfd5b3313daa649f98f81c8240b51ef3181cfac28374d6e347062f14522` |

The archive contains 137 committed package files under `sdd-manager/`, including all 15 skills and 77 reference modules. Native inspection compares every member with the exact committed package subtree and validates inventory, path safety, modes and source identity. A second build passed the expected-hash gate and matched byte for byte. Source-only root instructions, acceptance, campaign records and CI tooling are excluded. The complete package README and LICENSE are included; usage/disclosure templates remain in assets/.

## Verification

All checks below ran on initial source `891a0ad69dce859e3622750c51201d6c26127499` using Linux, Python 3.12.14, Git 2.51.1 and the declared jsonschema 4.26.0 dependency. Retained logs: [support](evidence/support-tests.log), [publisher](evidence/publisher-tests.log), [author validation](evidence/author-validation.log). Documentation persistence does not retroactively change their tested source.

| Check | Result |
| --- | --- |
| TextStats support suite | 137 passed, 65.019 seconds |
| Publisher contract suite | 34 passed, 2.104 seconds |
| TextStats static catalog | 33 valid cases; not live acceptance |
| Pinned offline core schema | Exact committed manifest passed during both native builds |
| Author validator | Zero errors; 46 `resource-cross-skill` advisories for plugin-contained sibling references |
| Native build-only publisher | Passed; no provider call, tag, release or workflow dispatch |
| Rebuild | Same exact ZIP and checksum bytes; selected source retained in archive comment |
| Notes/handoff | Version, body-only Markdown, source association and exact UTF-8 body hash checked |

The 46 advisories concern client handling of bundled cross-skill references. They are not core-schema validation errors or package-root containment escapes.

## Remaining release operations

A subsequent release request must refresh notes and coverage if source or relevant ancillary facts change, preserve the finalized Markdown bytes in the release commit body, publish/read back that commit and create the tag on that exact commit. Rebuild from that final release commit: Git source identity and timestamps mean its archive hash can differ from this preparation candidate even when package file bytes are unchanged.

Confirm the requested publication state and latest policy, then use the single established publisher with the final source/body/hash. The included handoff is explicitly build-only; its current source and policy are not a publication authorization. Verify actual CI results, release state/body, tag target and downloaded assets before reporting publication. Retain RELEASE-NOTES.md; consume/remove only the owned highlights checkpoint after published-body readback.

Hosted CI, local Python 3.11, installed-client discovery/routing, fresh live consumer/provider behavior and cross-platform installation were not executed in this preparation. Local checks do not establish these outcomes.

Initial preparation was local-only: no commit, push, release marker, tag, dispatch or hosted write occurred. The subsequent user request selected campaign persistence: root RELEASE-NOTES.md and these records were committed/pushed as `925ae9533f0fe30de67dd9a49dd727733920b5a1`. Generated package/checksum, build handoff and internal highlights remain ignored/untracked. The later release/closure request authorizes verified main integration, then an exact release commit/tag and the established publisher. The hashes above retain their original candidate association; rebuild final assets from the actual release commit.

Complete notes SHA-256: `6704b9db800112aa411087c1936d42bc03f804a0d19255442e05f042e812d101`.

## Local commands

```text
PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v
PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=/tmp/067-validator-deps python -m unittest discover -s .github/tests -v
PYTHONDONTWRITEBYTECODE=1 python acceptance/textstats/cases/assessor/catalog_tools.py validate
PYTHONDONTWRITEBYTECODE=1 python /root/.codex/skills/remote-skills/skill-6acf8e6652d48191b366454e2c0ab7ec/scripts/validate_plugin.py .agents/plugins/sdd-manager
PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=/tmp/067-validator-deps python .github/scripts/release.py --event release-preparation/0.15.0/build-event.json --root . --output release-preparation/0.15.0 --build-only
PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=/tmp/067-validator-deps python .github/scripts/release.py --event release-preparation/0.15.0/build-event.json --root . --output /tmp/release-015-rebuild --expected-sha256 cef1e54796ec0b8581213ebc3d7f816c391798be54ef916ea0f70386052def2c --build-only
```

The temporary dependency/validator/output paths describe this environment, not portable installation requirements. Install the declared .github/requirements.txt dependency in another environment before using its publisher.
