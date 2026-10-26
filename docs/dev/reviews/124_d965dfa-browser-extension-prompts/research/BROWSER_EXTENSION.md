# Browser-extension sidebar packaging

## Conclusion and evidence

Confirmed online against official documentation on 2026-10-26: a Tetris game can run entirely inside a desktop Chromium extension side panel or Firefox extension sidebar, using packaged HTML, CSS, JavaScript and assets. Users need the target browser and installed extension, with no separate Node.js installation, local server or backend. Node/Vite may remain development/build tools; a plain-JavaScript implementation can omit them.

This note consolidates the two supplied discussions with fresh documentation checks. It establishes documented platform support, not a successful extension build, installation, sidebar interaction or screenshot in either browser. No runtime experiment was performed. Planning recommendations below are derived from the documented constraints and the existing Tetris scope; they are not accepted prompt amendments.

## Browser support and packaging

| Target | Manifest entry | Panel API | Planning detail |
| --- | --- | --- | --- |
| Chrome / compatible desktop Chromium builds | `side_panel.default_path` | `chrome.sidePanel` | Manifest V3; request `sidePanel`. The panel path identifies a packaged HTML page. Chrome documents availability from 114; explicit `open()` requires 116+ and a user interaction. Select minimum versions from the methods actually used. [1] |
| Desktop Firefox | `sidebar_action.default_panel` | `browser.sidebarAction` | The required panel entry identifies an HTML document. Supported in manifest version 2 or higher, including V3; this API is incompatible with Chrome's sidePanel API. [2][3] |

Chromium source independently defines side_panel and requires local packaged panel resources. This supports the upstream capability claim, not compatibility of every Chromium-derived product. Explicitly name and verify browser products/builds; Chrome, an upstream Chromium build and other derivatives are distinct targets. Microsoft separately documents Edge support, but Edge need not enter this project's scope. [4][5]

Use one shared gameplay/UI codebase with two browser-specific manifests or generated manifest variants and a small panel/storage adapter. A namespace alias alone cannot reconcile the different sidebar APIs. Both targets can host bundled HTML, CSS and JavaScript. An extension is a separate delivery artifact from the browser app and Windows Electron package; preserve existing deliverables unless the human selects a replacement.

## Adaptations and decisions for the Tetris scope

- **Responsive layout:** fit a narrow, user-resizable sidebar. Preserve board proportions and usable controls; stack or collapse settings, leaderboard and help. Agree minimum practical dimensions and keyboard accessibility.
- **Storage:** use an adapter backed by `chrome.storage.local` / `browser.storage.local` for extension settings and scores, with the storage permission. These APIs are asynchronous and extension-specific. Mozilla and Chrome recommend extension storage over localStorage for this purpose. Do not assume website, Electron and extension storage automatically share data. [6][7]
- **Cookie/URL rules:** explicitly adapt the existing per-setting precedence and persistence contract for the extension. Decide whether launch parameters are supported, how they override saved values and how changes are retained. Extension storage is not an automatic equivalent of website cookies; do not silently discard accepted configuration behavior.
- **Save/Restore:** retain the user-visible manual JSON/SQLite contract unless changed explicitly. Keep extension-local persistence distinct from exported files. Verify file selection/download behavior and exact restored data in the extension origin.
- **Lifecycle:** keep the game loop in the panel document. Chrome can terminate an idle extension service worker; it is unsuitable for a continuously running game loop. Firefox unloads sidebar documents on panel/window closure. Define blur/hide pause, reopening behavior, restart versus resumable game state and whether multiple windows own independent games. Do not rely on an unload callback as the only durable-save opportunity. [8][9]
- **Panel controls:** decide whether the toolbar button opens the panel and what a shortcut does. Respect user-interaction requirements for programmatic opening. Verify focus returns and held-key cleanup when switching to a webpage; gameplay keys should act only in the intended game context. [1][2]
- **Background code:** add it only for required event/control work. Do not copy Chrome's service-worker manifest into Firefox unchanged. MDN documents separate V3 background implementations using service_worker versus scripts; generate the appropriate browser variant. [10]
- **Permissions:** derive them from actual capabilities. A self-contained sidebar game should not need arbitrary website access, content-script injection or a native-messaging companion merely to play; additional capabilities require their own justification.

## Assets, workers and SQLite/WASM

Package runtime code, fonts and other required assets locally. Build production artifacts rather than shipping references to a Vite server. Extension CSP restricts executable sources and inline/evaluated code. Chrome and Mozilla document explicit wasm-unsafe-eval handling for WebAssembly; if sql.js remains in scope, verify a narrow compatible extension-pages policy and actual bundled WASM/worker loading. Do not enable broad unsafe-eval as a generic repair. [11][12]

Validate asset resolution from extension URLs, production worker entry points and SQLite initialization in both targets. A successful website build does not establish extension CSP or worker compatibility. Keep browser, Electron and extension adapters separate from shared gameplay and data validation.

## Verification and distribution planning

1. Build and inspect each browser-specific extension artifact: manifest, panel entry, bundled scripts/assets and required permissions. Stop the development server and test without network access to establish self-contained operation.
2. Install the extension into a dedicated isolated browser profile. Exercise the actual sidebar opening path, resizing, keyboard input, focus changes, tab/window changes, closing/reopening, saved settings/scores, Save/Restore and applicable workers/WASM. Record browser versions, artifacts, screenshots and errors.
3. Test shared gameplay logic independently and adapters separately. A mocked API or the panel HTML opened in an ordinary tab cannot prove real sidebar activation, focus or lifecycle behavior.
4. Playwright documents Chromium extensions through a persistent context and recommends its bundled Chromium because branded Chrome/Edge removed command-line sideload flags. Its chromium channel supports headless extension execution; distinguish this from the separate headless-shell binary. This is not documented Firefox extension support. [13]
5. Select an independent Firefox extension-testing method and verify its facilities before committing to an automated acceptance plan. Ordinary Playwright Firefox website tests do not prove that the Firefox extension installs or works. Headless DOM/interaction checks may cover much of the application, but actual browser sidebar chrome and lifecycle need evidence from a facility that exposes them; use headed checks where needed and state automation limits.
6. Decide whether delivery means unpacked development packages, privately distributed installable extensions or public store publication. They have different installation/review requirements. Firefox release/beta installation requires Mozilla signing, including self-distributed extensions; a temporary development load is not equivalent to a distributable signed package. Store submission and credentials remain separately selected work. [14]

## Prompt decisions to resolve

Specify the browser products/minimum versions, sidebar presentation, whether extensions supplement the current browser/Electron deliveries, storage/URL adaptation, pause/reopen behavior, multiple-window state and expected installation artifacts. Require shared gameplay/UI, bundled runtime assets and no separate Node/server at runtime. Name real-extension acceptance checks for both targets without promising that one automation tool can cover both.

## Official sources

Checked 2026-10-26; API/version statements should be rechecked when implementation selects concrete targets.

1. [Chrome Side Panel API](https://developer.chrome.com/docs/extensions/reference/api/sidePanel).
2. [Mozilla sidebarAction API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction).
3. [Mozilla sidebar_action manifest entry](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action).
4. [Chromium side-panel API definition](https://chromium.googlesource.com/chromium/src/+/main/chrome/common/extensions/api/side_panel.idl).
5. [Microsoft Edge sidebar extensions](https://learn.microsoft.com/en-us/microsoft-edge/extensions/developer-guide/sidebar).
6. [Chrome extension storage](https://developer.chrome.com/docs/extensions/reference/api/storage).
7. [Mozilla extension storage](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage).
8. [Chrome extension service-worker lifecycle](https://developer.chrome.com/docs/extensions/develop/concepts/service-workers/lifecycle).
9. [Mozilla sidebar lifecycle and UI](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars).
10. [Mozilla background manifest and cross-browser V3 implementations](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background).
11. [Chrome extension content security policy](https://developer.chrome.com/docs/extensions/reference/manifest/content-security-policy).
12. [Mozilla extension content security policy](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy).
13. [Playwright extension testing](https://playwright.dev/docs/chrome-extensions).
14. [Mozilla signing and distribution](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/).
