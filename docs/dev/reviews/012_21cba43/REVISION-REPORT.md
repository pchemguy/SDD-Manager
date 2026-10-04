# Dedicated scoped authorization policy revision

Campaign: `012_21cba43`. Full starting baseline: `21cba43132d2211d1a7e788bbc7d9cdb1fab2ae7`.
Repository: `pchemguy/Skill-SDD-Manager`, established remote `https://github.com/pchemguy/Skill-SDD-Manager.git`.
Working branch: `revision/012_21cba43-scoped-authorization`; target: `feature/architecture-revision`.
Objective: implement the human-requested dedicated sdd-manage authorization policy, authorizing scoped revision pushes and verified review-branch merging, and supplying authorization context after platform rejection rather than asserting an override.

## Changes and verification

- Added `skills/sdd-manage/references/revision-authorization.md`: authorized review-record/source-revision persistence and completed-branch integration, explicit human limits, rejection response and authorization evidence fields.
- Coordinator entry, review/revision coordination and Git workflows now route to that file. Replaced the earlier active override wording; campaign 010 policy links to the resulting authority, with historical revision evidence preserved.
- Review records and implementation repairs remain distinct scopes. Platform review is preserved, repeated unchanged denied requests and evasion are prohibited, and credential recovery is distinguished from approval rejection.
- Verification: focused source/Markdown local-link, coordinator YAML frontmatter, routing and whitespace checks. No runtime/provider lifecycle test or installed-client approval behavior is claimed from policy text.

## Persistence

Scoped source revision prepared locally. Commit/push/integration evidence is recorded when observed; no platform approval is inferred merely from this policy's existence. Existing unrelated workspace material is preserved.

## Remaining work

This amendment does not implement campaign 011's planned document-QC workflow changes or run TextStats live acceptance. Those retain their existing state. No source issue is deferred within this focused authorization amendment.
