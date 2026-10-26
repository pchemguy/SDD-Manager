SDD Manager 0.15.4 adds reusable browser and development-worker diagnostics and makes the demo entry paths easier to follow.

## Highlights

- **Playwright environment recovery:** proactive checks for pinned runner/browser compatibility, isolated browser storage, Chromium headless-shell execution, download integrity and official image fallbacks. Firefox content-process recovery is limited to diagnosed, trusted local test environments and preserves required browser coverage.
- **Vite worker diagnostics:** distinguish HTML worker-entry responses from import, WASM, protocol and data failures. Guidance includes a conditional development-route workaround and fail/pass/remove-fix regression evidence, with native Windows observations kept separate from modeled failures.
- **Tetris prompt choices:** standalone Interactive, Autodoc, Multipass Autoloop and Featured Autodoc prompts distinguish complete-scope preparation from separately submitted baseline/feature campaigns. Configuration, next-piece preview, leaderboard, combined JSON/SQLite persistence and panel layout requirements are aligned.
- **Quick Start:** the repository README now links template setup, token creation, all four Tetris workflows, the calculator demo and the generic project template. Campaign navigation is restored to a single table.

## Compatibility and installation

The package retains its single manifest and 15 skills. Supervised HTTPS Git publication requires Node.js 22+, Python 3.11+ and native Git on supported Windows or Linux hosts. Optional GitHub projection/completion utilities require Node.js 22+ and Git. Target projects retain their own frameworks, browser matrix and setup requirements; the new recovery modules do not select them automatically.

Download [`sdd-manager.zip`](https://github.com/pchemguy/SDD-Manager/releases/download/v0.15.4/sdd-manager.zip) and its [`SHA-256 checksum`](https://github.com/pchemguy/SDD-Manager/releases/download/v0.15.4/sdd-manager.zip.sha256). Verify the checksum and extract the package using your agent client's supported loading mechanism. Load PLUGIN.md or the coordinator explicitly when required; automatic discovery depends on the client. See the [package guide](https://github.com/pchemguy/SDD-Manager/blob/v0.15.4/.agents/plugins/sdd-manager/README.md).

Demo guides, repository Quick Start and standalone browser/shell policies remain source-repository documents rather than ZIP contents.

## Validation and limitations

The prerelease review passed 327 local tests on Linux with Node.js 24.22.1 and Python 3.12.14: 139 acceptance-support, 50 publisher and 138 Git/forge contracts. Seven Windows-only tests skipped locally. Successful prior Linux/Windows CI runs cover unchanged helper, test, workflow and shell-policy bytes; they are not fresh candidate-wide Windows runs.

Package structure, exact committed archive contents and extracted CLI entry points are checked separately from live agent behavior. No installed-client trial, autonomous-agent acceptance, fresh diagram rendering or native reproduction of the reported Windows/Vite incident is claimed. SDD Manager remains an experimental, learning-by-doing project.
