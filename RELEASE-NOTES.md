SDD Manager **0.16.4** reorders implementation, Git release and verification guidance while preserving the existing requirements and links.

## Highlights

- **Implementation integration order.** Workflow/phase gates and feature incorporation now come before authorized-release artifact-name evidence and the final integration/reporting/stopping paragraph.
- **Release preparation order.** Git release guidance starts with release-message freshness, followed by the artifact-name gate.
- **Verification entry order.** The existing artifact-name rule now sits immediately before the final boundary/reporting paragraph.

## Package and installation

The package contains 15 skills. Workflows using bundled supervised HTTPS Git publication require native Git, Node.js 22+ and Python 3.11+ on supported Windows or Linux hosts. Optional GitHub projection/completion utilities require Node.js 22+ and Git. Target projects retain their own toolchain requirements.

Download [sdd-manager.zip](https://github.com/pchemguy/SDD-Manager/releases/download/v0.16.4/sdd-manager.zip) and its [SHA-256 file](https://github.com/pchemguy/SDD-Manager/releases/download/v0.16.4/sdd-manager.zip.sha256). Verify the checksum, then import the archive through an Agent Plugins-compatible client or extract its sdd-manager directory for explicit source loading. PLUGIN.md is a non-standard composition entry; automatic discovery depends on the client.

Stable latest links: [package](https://github.com/pchemguy/SDD-Manager/releases/latest/download/sdd-manager.zip) and [checksum](https://github.com/pchemguy/SDD-Manager/releases/latest/download/sdd-manager.zip.sha256). Demo prompts and contributor evidence remain in the source repository, outside the distributable.

## Verification and limits

Fresh Linux verification passes 140 support and 62 publisher tests. Exact paragraph permutations, unchanged wording/links/outside bytes, whitespace and frozen-record preservation checks pass. Independent source review found no blocking issue; 43 local links and anchors resolve.

These checks do not establish fresh-agent compliance, installed-client discovery or universal client compatibility. No fresh live TextStats or installed-client trial was run for this documentation release.
