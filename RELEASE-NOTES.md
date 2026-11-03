SDD Manager **0.16.3** restores explicit policy links in the AGENTS template and adjusts the order of release guidance.

## Highlights

- **Restored template links.** AGENTS_TEMPLATE.md again contains the four Markdown links to Windows/browser policies and environment guides, with the added package-root lookup paragraph removed. These links use the repository-local .agents/plugins/sdd-manager/assets/ layout.
- **Release guidance order.** The artifact-name prohibition is the second paragraph within PLUGIN.md's Release preparation and publication section, after message-preparation routing. Its wording and link are preserved.

## Package and installation

The package contains 15 skills. Workflows using bundled supervised HTTPS Git publication require native Git, Node.js 22+ and Python 3.11+ on supported Windows or Linux hosts. Optional GitHub projection/completion utilities require Node.js 22+ and Git. Target projects retain their own toolchain requirements.

Download [sdd-manager.zip](https://github.com/pchemguy/SDD-Manager/releases/download/v0.16.3/sdd-manager.zip) and its [SHA-256 file](https://github.com/pchemguy/SDD-Manager/releases/download/v0.16.3/sdd-manager.zip.sha256). Verify the checksum, then import the archive through an Agent Plugins-compatible client or extract its sdd-manager directory for explicit source loading. PLUGIN.md is a non-standard composition entry; automatic discovery depends on the client.

Stable latest links: [package](https://github.com/pchemguy/SDD-Manager/releases/latest/download/sdd-manager.zip) and [checksum](https://github.com/pchemguy/SDD-Manager/releases/latest/download/sdd-manager.zip.sha256). Demo prompts and contributor evidence remain in the source repository, outside the distributable.

## Verification and limits

Fresh Linux verification passes 140 support and 62 publisher tests. Exact template restoration, release-section paragraph order, preserved wording/links, whitespace and prior-record preservation checks pass. Independent source review found no remaining issue in the requested changes.

These checks do not establish fresh-agent compliance, installed-client discovery or universal client compatibility. No fresh live TextStats or installed-client trial was run for this documentation release.
