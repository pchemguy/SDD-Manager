# Manifest conformance revision plan

## Campaign and accepted scope

- Campaign: `042_58e7e15`; title: Manifest conformance.
- Baseline: `58e7e15a2b0bd4f1870a24f1b566e68ceb5fd70e`.
- Branch: `revision/042_58e7e15-manifest-conformance`; integration target: `origin/main` in `pchemguy/SDD-Manager`.
- Authority: the human requested a new conformance revision campaign with the three changes below on 2026-10-11. This checkpoint opens and plans the campaign; execution was subsequently authorized by the human’s “Execute” instruction.
- Objective: conform the root manifest to Agent Plugins 1.0.0 while retaining OpenAI presentation metadata.
- Companion: [revision report](REVISION-REPORT.md).

## Authoritative inputs

- [Agent Plugins manifest schema](https://agent-plugins.org/schemas/1.0.0/plugin.schema.json).
- [OpenAI packaging documentation](https://developers.openai.com/plugins/build/plugins): OpenAI presentation metadata belongs under `extensions.com.openai.interface`; skills use the fixed `skills/` directory.
- Root `plugin.json` is canonical. Applicable root AGENTS.md currently requires the compatibility manifest to remain byte-identical; preserve that established rule for this focused change.

## Ordered actions

| Action | Requested change | Verification |
| --- | --- | --- |
| V-001 | Remove root `skills` and `hooks` from both synchronized manifests. | Neither field exists at root; skill files remain unchanged. |
| V-002 | Move the entire root `interface` object under `extensions.com.openai.interface`. | Deep equality with the baseline interface; all asset paths remain unchanged and resolve from plugin root. |
| V-003 | Add root `$schema` with value `https://agent-plugins.org/schemas/1.0.0/plugin.schema.json`. | Validate the complete resulting manifest using a Draft 2020-12 JSON Schema validator and the retrieved canonical schema; verify both manifest copies are byte-identical. |
| V-004 | Recheck package construction and affected regressions; complete campaign records and verified integration. | Inspect actual archive manifests/assets, run the repository support and publisher checks applicable to manifest/package changes, inspect full diff and preserve all closed campaign records, publish each checkpoint with remote readback, and explicitly merge the completed campaign into main. |

## Boundaries and evidence

Treat V-001 through V-003 as one coherent manifest change and checkpoint. Record exact schema retrieval/hash, source identity, validation command and results during execution. Schema acceptance validates the extension object container, not OpenAI interface field semantics; independently check field preservation and documented placement.

This campaign does not change shared skill references, fix standalone resource-containment findings, remove the compatibility manifest, bump the version, or create a release. Installed discovery/client behavior remains unverified unless separately exercised. No preceding review is fabricated for these prompt-defined accepted corrections. Preserve campaign 037 and other closed records unchanged.

## Stopping point

Opening checkpoint: commit and publish this plan, report and review-index entry. Stop before manifest edits. Subsequent execution follows the accepted actions and applicable SDD verification/publication gates.
