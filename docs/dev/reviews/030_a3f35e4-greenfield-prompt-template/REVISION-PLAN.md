# Greenfield Prompt Template

## Campaign and scope

- Campaign: `030_a3f35e4`.
- Starting baseline: `a3f35e4c2ef1148a6829dacbb39f44a7636dd071`.
- Branch: `revision/030_a3f35e4-greenfield-prompt-template`.
- Eventual integration target: the repository default branch, currently `main`.
- Request: open a new revision campaign titled **Greenfield Prompt Template**.
- State: opened; planning checkpoint. Template development and source changes have not started.

The objective is a reusable seed prompt for starting a greenfield project through SDD Manager. The prompt should accept a preliminary project description, repository identity, authorization/credential instructions and GitHub tracking preference, while preserving the manager's design decisions, preparation gates and implementation stopping boundaries. These are proposed drafting topics, not newly accepted workflow changes.

## Proposed revision actions

| Action | Intended outcome / owners | Dependency | Verification |
| --- | --- | --- | --- |
| V-001 | Establish the template's user-facing requirements, supplied seed/draft and desired destination within current maintained documentation or assets. | Further campaign direction. | Clearly distinguish required inputs, optional preferences and workflow choices; resolve consequential missing decisions before drafting. |
| V-002 | Draft the reusable greenfield prompt and any selected current README navigation. Include scoped standing repository authorization and protected credential handling without embedding a real token in committed material. | V-001. | A reader can substitute project/repository inputs; the prompt delegates workflow coordination to SDD Manager, respects explicit stopping instructions and does not invent extra approval gates. |
| V-003 | Inspect prompt composition against current manager workflow, preparation, tracking and credential owners; record actual checks and publication evidence. | V-002. | Assess representative project descriptions and tracking choices; check placeholders, current links, secret-free artifacts and the full protected-path delta. Distinguish source inspection from any separately authorized live project run. |

## Boundaries and persistence

This opening request authorizes creation, commit and publication of this campaign record on its revision branch. Stop after publishing the opening checkpoint. Do not implement the proposed template, change skill behavior or merge into the default branch as part of opening the campaign.

Campaign records remain on this revision branch. If later execution requires project preparation documents, use their prescribed design-docs ownership and default-branch publication gate separately. Keep prior closed campaigns frozen and outside routine context loading or compatibility checks; verify their preservation using Git paths/object identities only.

Later authorized execution retains this identity, completes its report before eligible integration, publishes coherent checkpoints and explicitly merges the complete verified tip into the actual default branch. No review report or completed revision report is fabricated at this opening stage.
