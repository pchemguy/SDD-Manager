# V-005 independent R-003 repair recheck

Accepted for the bounded source/local contract with high confidence. No new located defect was found. Intent-to-add, assume-unchanged and skip-worktree are accurately exposed; flagged exports are conservatively incomplete, and semantic flag drift rejects held continuation before its next mutation or receipt write. The repair is ready for coordinator persistence/publication and final whole-branch acceptance.

The reviewed identity is HEAD 784ead5ce6de03fa9bdb9e4a291af8ae0122b970 plus the seven pending acceptance files below. The active 146 REVISION-PLAN's V-005 requirement and current release-postponement stop were read. Previous complete acceptance source review remains the governing baseline; all seven changed paths, their changed hunks, affected code context, test assertions and interface handoffs were independently inspected. No closed campaign contents or credentials were loaded. Version 0.16.4 and retained release notes remain outside this repair.

| Pending path | Reviewed SHA-256 |
| --- | --- |
| acceptance/textstats/RECOVERY.md |a940ec5b262458d9844b1769ceff8d04290f4820f96aa49311bd3afb91f774cd|
| acceptance/textstats/TRIAL-CONTROLS.md |cd4f3ebde1f76935fb5519ce85e52aea996bdef175cb141957c92c60bee8be27|
| acceptance/textstats/scripts/HELPER-INTERFACES.md |a4aa514b5a7c1b0add16614f3af5febcde4bb8354cbc7edf041ff4e872ec9c07|
| acceptance/textstats/scripts/core.py |193581bee2947b71cf687eeef048e1aea94f744b12dbc34d744d0cb26a306603|
| acceptance/textstats/scripts/trial_control.py |2277e4ab1ba989d11a92222ce28ec79906ad13ee9eea5a306c6661e3546bd77f|
| acceptance/textstats/tests/test_recovery.py |90b04dec72a48fac25e800ab53eed21ae4de66089152e8d8afbaa5c0df8eac9f|
| acceptance/textstats/tests/test_trial_control.py |751135ea3a05d655cf312c9e8a02350606f1ac0d28c8074d239223ff4494eac7|

## Source assessment

core.index_state at core.py:552–577 reads stages and NUL-delimited ls-files -v tags, then distinguishes intent-to-add with explicit cached-diff visible/invisible modes and disabled rename pairing. The resulting path/flag representation includes combined assume-unchanged/skip-worktree values and avoids volatile index stat bytes. Existing stage output is preserved for ordinary/conflict restoration. The new state is used by observe_git rather than inferred from a stale checkpoint.

At core.py:691–693 and 758–762, eligible semantic flags are retained as exact unsupported_index_flags; both the manifest and returned recovery summary require their absence for complete:true. The explicit restoration_limit requires retaining the original checkout/index and separately preserving intent. A verified bundle does not erase that limit. Protected paths retain the existing omission/completeness boundary. No opaque index copying or flagged restoration promise was introduced.

trial_control.py:61 hashes the semantic state. At lines89–103, the current snapshot is compared to the held snapshot before save(), receipt replacement or another command. Flag-only drift and old stage-only receipts therefore reject without mutating the receipt or running the next argv. The three revised documents accurately describe this conservative limitation, flag-aware hold identity, stat-cache exclusion and legacy reconciliation requirement.

The two new tests use real temporary Git state, rather than scripted observations. Their six subcases assert exact observed flags, incomplete summary/manifest, retention guidance and preserved original state; held drift retains unchanged stage entries while requiring rejection before the second mutation and preserving receipt bytes. The intent-to-add hold case changes an empty intent-to-add entry into a real staged empty file, which is particularly useful because their stage records match.

## Executed and inspected checks

Runtime: Linux, Python 3.12.14, Git 2.51.1. Independent reviewer command:

```text
PYTHONDONTWRITEBYTECODE=1 PYTHONPATH=acceptance/textstats python -m unittest tests.test_recovery.RecoveryTests.test_semantic_index_flags_make_recovery_explicitly_incomplete tests.test_trial_control.TrialControls.test_flag_only_index_drift_rejects_resume_before_next_mutation -v
```

Observed: 2 tests passed, covering 6 flag subcases, in 1.546s, exit 0. No errors or skips.

Six additional independent synthetic native fixtures used temporary repositories under /tmp and were cleaned after the run:

| Fixture | Actual result |
| --- | --- |
| All three flags combined, with tab/newline/Unicode path |Exact combined flags reported; returned and manifest complete:false; original index/staged/unstaged state unchanged despite an available bundle.|
| Split-index combined flags |Same exact flags and incomplete classification; original state unchanged. This checks observation/classification, not shared-index reconstruction.|
| Unborn repository with intent-to-add |Exact flag reported and complete:false with explicit limit; no bundle invented and original state unchanged.|
| Combined assume-unchanged/skip-worktree drift during Held |Resume rejected before the second file mutation; receipt bytes unchanged.|
| Stat-cache-only refresh |Opaque index bytes changed while semantic snapshot stayed equal; ordinary Held resume completed.|
| Legacy stage-only Held digest |Resume rejected before the second mutation; receipt bytes unchanged.|

The coordinator's RED record/log were independently inspected: 2 test methods, 6 intended failing subcases, 0 errors before the source repair. The two new test-file hashes agree with this reviewed state. The coordinator's GREEN full-support and focused records were also inspected and all seven pending hashes match exactly. The full-support log reports 142 tests passed in 50.176s; its wrapper record reports 50.51s. This includes existing ordinary binary/stage/deletion/conflict/merge-root restoration checks. The coordinator's focused run passed separately. I did not duplicate the full suite.

Records inspected: /tmp/sdd146-review-checks/v5-red.{json,log}, v5-green-support.{json,log} and v5-green-focused.{json,log}. Detailed independent edge outcomes and per-path assessments are retained in the companion recheck JSON.

The independent probe captured source HEAD, raw source-index hash, status and pending file hashes before and after; all matched within the probe. The raw source-index SHA-256 was 7550286835792f71e2ec16a001f10fc61dcd04f8083893eb26aa45b127c038c1. Concurrent coordinator-owned active REVIEW-PLAN/evidence preparation was visible and preserved. I made no source/index/HEAD/provider changes; only the two requested /tmp recheck artifacts were retained.

## Limits and declined judgments

Flagged automatic restoration is deliberately unsupported: this acceptance is for accurate incomplete classification and original-index retention guidance. General split-index/shared-index or linked-worktree portability, arbitrary index extensions/other flags, non-UTF-8 path byte sequences and other Git/platform versions were not certified. The split-index fixture establishes only the observed semantic flag classification. No raw-index reconstruction is claimed.

Concurrent mutation during the multiple Git reads, arbitrary receipt tampering and native uncontrolled process termination were not selected by R-003's bounded recheck. Fresh consumer/assessor behavior, installed-client activation and live-provider operations were not run; local source/support evidence does not supply those grades. Final whole-branch acceptance, campaign closure and publication remain coordinator-owned. Current instructions postpone version bump/tag/release; none was performed.

R-003 may be marked resolved after the reviewed repair is persisted and published. This subreview supplies no new blocker to V-005 or final acceptance of the complete campaign tip.
