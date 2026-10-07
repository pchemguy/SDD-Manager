# Workflow identity, branches, and artifact locations

Apply these provider-neutral defaults when naming workflow branches or associating them with retained documents. **sdd-manage**'s **Branch management** procedure performs allocation and Git setup; **sdd-integrate-feature** owns incorporation/archive eligibility. This convention grants no mutation or hosting authority.

## Naming

| Workflow | Branch | Associated documents |
| --- | --- | --- |
| Revision | `revision/<campaign>-<slug>` | `docs/dev/reviews/<campaign>-<slug>/` |
| Steering | `revision/<campaign>-<slug>` | `docs/dev/reports/phases/<phase-id>/revisions/<campaign>-<slug>/`; a minimal revision record is sufficient. |
| Feature | `feature/<campaign>-<slug>` | `docs/dev/features/<campaign>-<slug>/` for package identity/navigation and completed incorporated sources. |
| Main phase | `phase/<phase-number>-<slug>` | Main governing documents and owning TASKS remain in `docs/dev/`. |

A campaign is `<sequence>_<baseline-sha>`, for example `007_df531c2`; new revision/feature/steering directory basenames match the branch suffix `<campaign>-<slug>`. The stable campaign ID is the sequence/baseline prefix, not the descriptive suffix. Use the phase number/name from accepted PLAN/TASKS, not a campaign counter. The main integration branch is established explicitly; a workflow name never selects Git's default branch.

## Identity and collisions

- **Allocate once:** Inspect `docs/dev/reviews/`, `docs/dev/features/` and `docs/dev/reports/phases/*/revisions/` plus relevant published records/refs. Use one greater than the highest allocated/reserved repository-wide positive sequence, padded to at least three digits across reviews, features and phase-nested revisions; do not fill historical gaps or reuse an ID. Reserve identity at the first record/branch preparation; resolve concurrent allocation conflicts before publication, without renumbering established records.
- **Pin baseline:** Use the campaign's starting commit, at least seven uniquely resolving hexadecimal characters, and record its full SHA in retained context. Keep branch/directory identity stable as HEAD advances, including review-to-revision continuation.
- **Slug:** Use concise lowercase ASCII words separated by hyphens. Validate the full name with `git check-ref-format --branch`. If occupied by unrelated work, keep identity and choose a distinct descriptive suffix; never reuse a branch from its name alone.
- **Overrides:** Respect explicit project/user naming and location policy; record its equivalent identity/target association. Preserve suitable legacy/in-flight branches and historical directories on continuation; never rename or delete them automatically. An occupied old phase branch needs a verified matching continuation or a distinct slug.
- **Context:** Retain workflow, campaign or phase ID, full baseline, actual working/target branch and destinations, authoritative sources, and scope in existing campaign/task/change evidence. No separate branch registry is required.

## Artifact lifecycle

Review/revision artifacts use the **Review campaigns** convention. Lightweight steering allocates the same global identity under `docs/dev/reports/phases/<phase-id>/revisions/<campaign>-<slug>/` and can use a concise REVISION-REPORT recording objective, scope, baseline, paused target, verification, and publication, without a fabricated review or plan.

Feature preparation creates a small package identity/navigation record, `docs/dev/features/<campaign>-<slug>/README.md`, referencing the active root FEATURE documents and branch context. Active FEATURE sources keep their established paths in docs/dev; isolated branches/worktrees may carry separate packages, but one worktree must not overwrite an unrelated active package. This record supplies navigation, not a second workflow state store.

After complete accepted feature incorporation and task/evidence disposition, retain eligible feature sources under that directory with their basenames. Update links and mark archived sources historical: main documents/TASKS own current state, and archived checkboxes are not executable task owners. Partial incorporation retains still-needed active sources. The feature owner verifies archive eligibility on the feature branch before final integration; naming alone proves neither incorporation nor completion.

## Discover descriptive and established packages

Parse the leading numeric sequence and hexadecimal baseline prefix in both `007_df531c2` and `007_df531c2-piece-controls`; the suffix never allocates a second campaign. Inspect the repository-wide maximum across reviews, features, phase-nested revisions and relevant refs. Two reservations using the same sequence with different slugs or baseline abbreviations require identity/ownership reconciliation before publication, not silent acceptance as separate campaigns. Resolve abbreviated baselines to their recorded full SHA.

New directory basenames include the same complete descriptive slug as their branch, including an approved collision suffix. Keep campaign ID and descriptive association stable as HEAD advances. Record actual directory, branch, full baseline and target in existing navigation/report context. Established unsuffixed packages and explicit overrides remain valid on continuation; do not infer their path by substituting the new default.

Rename only when explicitly selected. Include all affected incoming/outgoing navigation, archived source paths and evidence references in one coherent scoped update; verify active owners and archive links before publication. Never rename an existing package merely because the default changed. Main phase directories retain phase numbers.
