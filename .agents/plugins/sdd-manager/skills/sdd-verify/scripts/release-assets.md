# Executed artifact-name gate

**Version numbers in the name of any release artifact are absolutely prohibited, regardless of type.** Every artifact in the complete inventory is checked, including unknown extensions and names without extensions. Follow the canonical [package contract and repair loop](../../sdd-forge/references/github-packaging.md#artifact-name-gate-and-repair).

Use the project's deterministic executable check in its existing stack. When Python 3.11+ is available, this bundled read-only standard-library helper can supply the naming/inventory check; it is not a universal extra runtime prerequisite. An equivalent project check must satisfy the same positive/negative cases. Executing a check is mandatory even when this particular helper is not selected.

## Inputs and invocation

Establish the stable name contract independently from product/delivery requirements before generating build/release scripts. Retain it in existing project package/build documentation or configuration. Review every expected name for version content; never bless a generator's output by copying it into the contract. Pattern matching alone cannot establish a semantic naming contract.

For the helper, supply a JSON array of the independently reviewed expected names and a dedicated flat staging directory containing every actual release artifact. Do not filter entries by extension or omit an unrecognized type. Directories, links and special entries fail rather than hide unexamined contents; package directory artifacts into their specified release form before this check.

```text
python PATH/skills/sdd-verify/scripts/release_assets.py --expected EXPECTED.json --directory STAGING --version 1.2.3
```

For an actual provider inventory, collect every asset name with complete pagination/readback and supply its JSON array:

```text
python PATH/skills/sdd-verify/scripts/release_assets.py --expected EXPECTED.json --observed ACTUAL.json --version 1.2.3
```

Exit 0 requires every observed name to satisfy the prohibition, exact contract membership/completeness and uniqueness, including case collisions. The expected names are checked too: a matching faulty upload manifest cannot authorize a prohibited name. Common version notations and selected-version forms are rejected; ordinary product/architecture digits are not categorically banned. Exit 1 returns a JSON diagnostic. No network request, file write, source repair or publication occurs.

## Transitions and evidence

Require an observed failure for the offending artifact before correction and a passing full-inventory check after the producer/code/docs repair and committed-source rebuild. Capture the exact source, contract/inventory, command, exit status and outcome in existing release evidence. Recheck an actual complete draft before publication and hosted/latest names afterward. Reuse the project's existing checksum/content/source checks; this helper does not establish those properties.

The importable check_names function supports incomplete draft inspection only with complete=False. Such a result is not complete release acceptance. Before tag creation/push, publishing dispatch, upload and publication, the corresponding complete candidate/inventory must pass. A tag-trigger-only builder needs a nonpublishing candidate-build path before tagging. Do not replace an executed gate with an agent promise or the existence of a checker file.
