SDD Manager **0.16.0** strengthens feature-campaign preparation and delivery, adds browser/desktop/extension demo choices, and improves environment recovery and release verification.

## Highlights

- **Feature preparation now parallels main development.** FEATURE.md captures the brief; FEATURE_PREPARATION records decisions and approvals; nine FDOCS stages track preparation; FEATURE-QC-REPORT assesses the complete package. Interactive, autodoc and multipass/autoloop modes preserve their checkpoints, reuse assessments and stopping boundaries. Campaign-specific GitHub preparation tracking is separate from main DOCS tracking.
- **Feature delivery supports bounded phases on one campaign branch.** Incorporate accepted changes for the completed phase, verify and publish integration, and retain future work until final incorporation and archive.
- **Broader demo choices.** Tetris prompts cover browser-first Windows Electron delivery, Chromium/Firefox sidebar extensions and single-HTML companions. Two Hello World prompts demonstrate shared platform logic and different sidebar layouts. Both Quick Starts expose these choices plus calculator all-inclusive, staged, steering and feature prompts, with concrete requests for proceeding after autodoc.
- **Proactive environment recovery.** Playwright guidance distinguishes full Chromium from headless shell, diagnoses EPERM and download failures, and checks Firefox independently. After bounded diagnosis, unavailable full-browser or target-native execution is out of scope by default; feasible checks and requested artifacts remain required, with unverified behavior reported explicitly.
- **Stronger release-artifact verification.** Stable, version-free filenames apply to raw files as well as archives and installers. Independent naming checks must run before release transitions; failures require producer/script, related code, test and documentation repairs followed by an exact-source rebuild and recheck.
- **Clearer documentation.** Main and feature workflow diagrams, package asset descriptions and continuation guidance are expanded. The source campaign index renders all recent campaigns in one table.

## Upgrade notes

Environment policies and technology guides now reside directly in plugin assets and are activated through project-level AGENTS instructions. Existing projects using older policy paths should update those references explicitly. Installing this version does not automatically rewrite project instructions.

Feature preparation introduces dedicated records and campaign-qualified tracking; the existing local docs-main helpers remain main-only. PLUGIN.md is a non-standard composition entry, and automatic discovery depends on the client.

## Package and installation

The package contains 15 skills. Supervised HTTPS Git publication requires Node.js 22+, Python 3.11+ and Git on supported Windows or Linux hosts; optional GitHub projection/completion utilities require Node.js 22+ and Git. Target projects retain their own toolchain requirements.

Download [sdd-manager.zip](https://github.com/pchemguy/SDD-Manager/releases/download/v0.16.0/sdd-manager.zip) and its [SHA-256 file](https://github.com/pchemguy/SDD-Manager/releases/download/v0.16.0/sdd-manager.zip.sha256). Verify the checksum, then import the archive through an Agent Plugins-compatible client or extract its sdd-manager directory for explicit source loading. See the bundled README for workflows and client-dependent loading limits.

Stable latest links: [package](https://github.com/pchemguy/SDD-Manager/releases/latest/download/sdd-manager.zip) and [checksum](https://github.com/pchemguy/SDD-Manager/releases/latest/download/sdd-manager.zip.sha256). Demo prompts and contributor evidence are in the source repository, outside the distributable.

## Verification and limits

Prerelease checks pass: 139 support, 50 publisher and 138 Node contracts; exact package/schema checks; current documentation links; eight rendered Mermaid diagrams. Four existing successful hosted workflows cover 14 Windows/Linux jobs whose relevant inputs are unchanged. Seven native Windows tests skip locally on Linux.

These checks do not establish fresh-agent compliance, installed-client discovery or universal client compatibility. No generated demo application, Electron package or browser extension is included in this plugin release.
