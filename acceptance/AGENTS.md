# SDD Manager source verification and acceptance

This is the source-repository entry for agents developing, verifying or assessing SDD Manager itself. Load it explicitly before source work, including checks owned by .github/ or development documents outside acceptance/. It supplements the source [development entry](../AGENTS.md) and packaged [plugin entry](../.agents/plugins/sdd-manager/PLUGIN.md); it is not an instruction file for an ordinary project using the plugin and is outside the installed package.

## Source orientation

- Workflow source: .agents/plugins/sdd-manager/skills/{skill}/SKILL.md and conditionally loaded references. Start coordinated work at [sdd-manage](../.agents/plugins/sdd-manager/skills/sdd-manage/SKILL.md); inspect the selected owner before edits and read applicable nested AGENTS.md.
- Metadata: the nested package root plugin.json is the sole manifest, with OpenAI presentation metadata under extensions.com.openai.interface. Artwork/templates live in package assets/, including SDD-MANAGER.md and AI_DISCLOSURE.md; neither notice exists at package root.
- Retained development evidence: [review/revision index](../docs/dev/reviews/README.md). This repository has campaign plans/reports rather than a root project TASKS owner; do not invent executable task IDs from findings. Discover current work and branch state through Git and the selected campaign record.

Use current source and the active campaign for routine work. Prior closed review/feature/steering records are frozen history, except a selected eligible revision explicitly reopened under [revision modes](../.agents/plugins/sdd-manager/skills/sdd-manage/references/revision-modes.md). Do not load closed contents without a specific current need, edit them or assess their compatibility with subsequent changes. Discover identities/paths without reading contents and verify preservation through Git path/object diffs. See [closed campaign records](../.agents/plugins/sdd-manager/skills/sdd-conventions/references/review-campaigns.md#closed-campaign-records).

## Local verification

Run commands from the SDD Manager repository root. For changes affecting acceptance tooling and for coherent plugin boundary integration, run the support suite:

```text
python -m unittest discover -s acceptance/textstats/tests -t acceptance/textstats -v
```

Use Python 3.11 or the established supported runtime; release CI uses 3.11. Before source publisher checks or local release builds, install the declared dependency, then run the publisher suite:

```text
python -m pip install -r .github/requirements.txt
python -m unittest discover -s .github/tests -v
```

The publisher validates exact committed candidate bytes against the [pinned offline core schema](../.github/schemas/README.md); it does not validate client-specific presentation. Check affected Markdown links, manifest conformance, presentation asset paths and actual package contents as applicable. Package-root PLUGIN.md is the packaged agent entry; root development AGENTS.md, acceptance/ and development/CI evidence remain source-only. Verify that package links do not require excluded local files.

Record the tested source, interpreter/environment, actual outcomes and evidence limits. Passing support/publisher tests or static/package checks does not establish live agent behavior, installed-client discovery/routing or provider acceptance. Keep unrun and blocked observations explicit.

For changes to the optional coordinator-owned [Git authentication utility](../.agents/plugins/sdd-manager/skills/sdd-manage/scripts/git-auth-recover.md), require Node.js 22+ and run its source-only synthetic contracts:

```text
node --test tests/git-auth-recover.test.mjs
```

Its CI matrix runs native Windows CMD/Linux with Node 22/24. Local Linux results do not establish Windows behavior; inspect the selected source's actual matrix result. Native helper tests and controlled push/readback results do not establish live-provider authentication. The source tests and CI are excluded from the distributed plugin.

For the optional forge-owned [completion utility](../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/forge-close.md), run:

```text
node --test tests/forge-close.test.mjs
```

Its separate CI matrix uses native Windows CMD/Linux Node 22/24 and synthetic provider data, including native local Git/filesystem/protection/locking and bounded-response checks. Changes to shared protected-token.mjs require both utility suites and affected native jobs. Keep caller eligibility/source review, synthetic/local runtime, live-provider and installed-client evidence distinct; no real-token hosted mutation is needed for these contracts.

## TextStats acceptance coordination

The [TextStats overview](TEXTSTATS.md) maps qualified evidence and prior test repositories. [TextStats](textstats/README.md) owns the sample product, harness, fixtures, consumer requests, independent assessor contracts and run evidence protocol. Read [its coordinator entry](textstats/AGENTS.md) before touching or executing that scope; follow its ordered setup and role-isolation instructions for an actual acceptance campaign. A support-suite run is distinct from a live acceptance campaign.

Use the requested dedicated test repository and pinned plugin source for live trials. Never supply coordinator/assessor expectations to a fresh consumer or promote deterministic harness success to independent acceptance. Consumer, controlled-provider, live-provider and installed-client evidence retain their distinct meanings under the TextStats instructions.
