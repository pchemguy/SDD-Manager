# SDD Manager handoff

Campaign 080 is closed through verified published main merge 5b2442e3315da91bcbc8ccd0efc14c0c59106b27. Campaign 081_5b2442e now owns the explicitly authorized prerelease preparation and patch 0.15.1.

## Workflow and sources

- Owner/stage: sdd-manage; prerelease preparation complete, campaign open at prepared-candidate checkpoint. Reporting: Standard.
- [Preparation plan](reviews/081_5b2442e-prerelease/REVISION-PLAN.md), [evidence](reviews/081_5b2442e-prerelease/REVISION-REPORT.md), [review plan](reviews/081_5b2442e-prerelease/REVIEW-PLAN.md), [review](reviews/081_5b2442e-prerelease/REVIEW-REPORT.md), [index](reviews/README.md).
- Starting/branch-off source: 5b2442e3315da91bcbc8ccd0efc14c0c59106b27. Working/publication: revision/081_5b2442e-prerelease on origin, pchemguy/SDD-Manager. Creation parent/integration/return: main; no suspended parent task workflow.
- Human authorizes this preparation, patch bump and necessary verification. No release tag, hosted release, publishing dispatch, client installation or this campaign's closure selected. Original CMD body/quote notice remains controlling.

## Prepared candidate and evidence

The canonical manifest is 0.15.1. Exact reviewed/built candidate: ddb86fc926ddc2cfbd15946946c75a9c3672645d, published/read back. Fresh candidate checks passed: 139 support and 37 publisher tests; two identical 154-file packages, core/archive validation and four extracted CLI help smokes. Separately source-matched evidence reuses 106 recent Linux utility passes and successful native Windows/Linux Node 22/24 and Windows CMD CI. Structural validation: 0 errors, 48 existing warnings. Current source and documentation were assessed completely with qualified exact-byte evidence reuse; no required defect remains from this review. Agent/client/live-provider and actual Antigravity/local Codex activation trials remain unrun.

Complete release coverage: v0.15.0 at 2be233c7ec02be131917ceb16d6a16dc7d407d57 through the exact candidate, 150 identities accounted for. The tracked root RELEASE-NOTES.md and [retained snapshot](reviews/081_5b2442e-prerelease/RELEASE-NOTES.md) match; body SHA-256 9620c1768831bc7480624216b8eb74f91ef745d255b3114cee065342c8440c82. [RELEASE-HANDOFF.json](reviews/081_5b2442e-prerelease/RELEASE-HANDOFF.json) validates exact source/body with publish/prerelease/make_latest false. It is build-only, not a publication request. The ignored local highlights checkpoint is retained; reconstruct it from the report's range facts and snapshot if unavailable on transfer.

Prepared ZIP/checksum, matching notes/handoff and observation are locally together at /workspace/scratch/46b31bb4dff6/081-package-0.15.1. ZIP SHA-256 ec1c91858c0259bcfd0c662bcf49f88320914a6eed18a67777dd54b0a6f5fb25. The exact-source publisher reconstructs the artifacts if local outputs are unavailable; the tracked handoff transfers the complete body. See the preparation report for both asset hashes and byte counts.

## Stop and continuation

Publish/read back this checkpoint, then stop on revision/081_5b2442e-prerelease with 081 open. Main remains the recorded creation parent at the closed-080 merge. Later notes/evidence commits are outside the shipped package and do not silently replace the pinned candidate. There is no v0.15.1 tag or release dispatch.

For a subsequent release request, inspect the intervening range and reconcile current source/branch state; refresh coverage and notes through the final release commit, rebind/rebuild the handoff/package, verify the same message body, then apply the existing tag/publisher/readback procedure and selected channel/latest policy. Do not publish the earlier candidate's handoff against a new source. Keep campaign 080 and earlier records frozen. This snapshot cannot embed its own future commit SHA; recover actual publication and later decisions from Git/current campaign records.
