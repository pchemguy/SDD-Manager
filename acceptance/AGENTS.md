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

For changes to the optional coordinator-owned [Git authentication utility](../.agents/plugins/sdd-manager/skills/sdd-manage/scripts/git-auth-recover.md), require Node.js 22+, Python 3.11+ and run its source-only synthetic/native contracts:

```text
node --test tests/git-auth-recover.test.mjs tests/git-publish.test.mjs
```

Its CI matrix runs native Windows CMD/Linux with Node 22/24 and Python 3.11. Public contracts additionally cover deterministic selector bypass, hanging/orphaned helper trees, bounded transport, excess output, cancellation and lost-response reconciliation. Native transport contracts require Git's git-http-backend and use a local HTTPS server with the explicitly public test-only localhost certificate/key under tests; no live provider or real token is needed. They exercise the public CLI's authenticated push/readback and helper failure after preflight, alongside direct context/linked-worktree checks and ordinary token-file access. Local Linux results do not establish Windows behavior; inspect the selected source's actual matrix result. Controlled process outcomes and native HTTPS transport do not establish live-provider authentication. The source tests, TLS fixture and CI are excluded from the distributed plugin.

For the optional forge-owned [completion utility](../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/forge-close.md), run:

```text
node --test tests/forge-close.test.mjs
```

Its separate CI matrix uses native Windows CMD/Linux Node 22/24 and synthetic provider data, including native local Git/filesystem/token/locking and bounded-response checks. Changes to shared protected-token.mjs require both utility suites and affected native jobs. Keep caller eligibility/source review, synthetic/local runtime, live-provider and installed-client evidence distinct; no real-token hosted mutation is needed for these contracts.

For the optional forge-owned [projection and input workflow](../.agents/plugins/sdd-manager/skills/sdd-forge/scripts/forge-project.md), run:

~~~text
node --test tests/forge-project.test.mjs
~~~

Its Windows CMD/Linux Node 22/24 matrix covers synthetic hosted projection plus actual local draft/source/root/token/output/locking behavior. Shared github-client.mjs or forge-runtime.mjs changes require completion and projection suites/matrices; shared protected-token.mjs also requires Git recovery. The draft generator must not infer dependencies or certify readiness: phase semantics remain agent-authored, while docs-main copies the complete bundled DOCS_TRACKING_TEMPLATE.json definitions. Check asset/task-template alignment, fixed sdd-docs-main title and plain-text description, exact briefs, conflict/no-duplicate behavior, false eligibility and external pre-write drafts. Projection contracts also cover request-free docs-main preview/apply/reconciliation, origin and actual DOCS_TASKS defaults, bootstrap-only template fallback, explicit overrides and eligibility, unchanged phase/JSON input, and unrelated launch directories. Input/route/content source review remains distinct from native runtime, live-provider and installed-agent behavior.

## Windows shell contracts

For the standalone repository [Windows shell policy](../WINDOWS_SHELL_POLICY.md) and its embedded PowerShell.cmd adapter, run:

```text
python -m unittest discover -s tests -p test_windows_shell_recovery.py -v
```

These seven source-only runtime contracts read the exact batch block from the root policy; no adapter is bundled in the plugin. They require native Windows CMD, Node 22+ and Python 3.11+. They model Antigravity's reported backslash-escaped wrapper with LF/CRLF assets, isolated shim lookup, spaced paths, variable expansion, unchanged apostrophes, quoted Node executable/script/arguments, actual forge helper startup, literal exclamation marks, output/status and a temporary .cmd sequence. CI runs Node 22/24. Linux skips are not runtime passes. Inspect the selected source's actual Windows workflow result. These controlled harness cases do not establish live Antigravity/Codex activation, arbitrary launcher compatibility or observed agent compliance with command-generation rules; the tests deploy no shim to a user's host.

## TextStats acceptance coordination

The [TextStats overview](TEXTSTATS.md) maps qualified evidence and prior test repositories. [TextStats](textstats/README.md) owns the sample product, harness, fixtures, consumer requests, independent assessor contracts and run evidence protocol. Read [its coordinator entry](textstats/AGENTS.md) before touching or executing that scope; follow its ordered setup and role-isolation instructions for an actual acceptance campaign. A support-suite run is distinct from a live acceptance campaign.

Use the requested dedicated test repository and pinned plugin source for live trials. Never supply coordinator/assessor expectations to a fresh consumer or promote deterministic harness success to independent acceptance. Consumer, controlled-provider, live-provider and installed-client evidence retain their distinct meanings under the TextStats instructions.
