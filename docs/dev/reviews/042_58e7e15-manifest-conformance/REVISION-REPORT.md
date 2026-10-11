# Manifest conformance revision report

## Opening checkpoint

Campaign `042_58e7e15-manifest-conformance` is open from published main `58e7e15a2b0bd4f1870a24f1b566e68ceb5fd70e`, on `revision/042_58e7e15-manifest-conformance`, targeting `origin/main`. The starting worktree was clean; origin fetch and remote main readback confirmed the baseline. This is a new ordinary campaign, with no active parent or reopening.

The human-selected scope is recorded in the [revision plan](REVISION-PLAN.md): remove root `skills`/`hooks`, preserve and relocate the entire `interface` object under `extensions.com.openai`, and add the canonical `$schema` declaration. Planning is complete; V-001–V-004 execution and integration are pending. Both repository manifests remain unchanged at this checkpoint.

The prior conversational constraint check found only the missing `$schema` after excluding the three root fields. That was a direct constraint check, not a successful full JSON Schema validator run; execution must provide actual validator evidence for the resulting manifest. The portable schema does not validate the internal OpenAI extension vocabulary. Existing cross-skill references and installed-client evidence gaps remain outside this campaign.

Commit identity and publication are established by Git and exact remote readback. No manifest conformance or campaign closure is claimed at opening.

## V-001–V-003 — manifest correction verified

Executed under the human's subsequent “Execute” instruction. Both canonical and compatibility manifests now omit root `skills` and `hooks`, declare the canonical `$schema`, and retain the complete baseline interface at `extensions.com.openai.interface`. Deep equality confirmed every interface field/value, including prompts and dark artwork. All four artwork paths resolve from the plugin root; manifest bytes remain identical. Version remains 0.15.0.

Actual Python jsonschema Draft202012Validator validated the complete candidate against freshly retrieved canonical schema bytes, SHA-256 `0a4aad95ce337878ad38802ebf0daa3fde76abe3f65400c86bcbb1ec0b3ab883`; schema self-validation also passed. This validates the portable extension container, not client semantics. Publisher suite: 26 tests passed. Whitespace check passed. Full support/package checks and integration remain pending V-004.
