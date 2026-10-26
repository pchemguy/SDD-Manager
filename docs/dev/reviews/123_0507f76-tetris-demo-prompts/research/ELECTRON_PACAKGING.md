**Usually, you can keep the browser app and add Electron afterward.** For your Tetris or calculator app, this would mainly be a desktop wrapper and packaging feature, with some integration changes.

Electron bundles Chromium and Node.js, so users install the resulting application without separately installing Node or running Vite. [Electron](https://www.electronjs.org/docs/latest/?utm_source=chatgpt.com)

The work would include:

- **Desktop entry:** add an Electron main process that opens a window and loads the production-built app.
- **Build and installer:** bundle the frontend and configure a packaging tool such as Electron Forge to generate the chosen desktop artifacts. [Electron Forge](https://www.electronforge.io/import-existing-project?utm_source=chatgpt.com)
- **Loading adjustments:** check asset paths, workers, SQLite/WASM files and routing in the packaged application.
- **Desktop behavior:** verify keyboard focus, window sizing, persistence, Save/Restore, downloads and file selection.
- **Native integration, if wanted:** add narrowly exposed desktop operations through a preload bridge. The browser UI can retain its normal isolation and sandboxing. [Electron](https://www.electronjs.org/docs/latest/tutorial/sandbox?utm_source=chatgpt.com)

**You do not need to change the AIO prompt to make later conversion possible.** If Electron is already an intended deliverable, however, state that upfront so the design and testing account for it:

> Keep the application usable in a browser. Also deliver an Electron desktop package for Windows, bundling all required runtime assets and requiring no separate Node.js installation or development server. Share application logic and UI between browser and desktop versions.

You can also add this later through a feature campaign. The important verification is testing the **actual packaged application**—a successful browser or Vite run does not establish that its packaged workers, WASM and persistence work.

---

Electron separates the application into two main parts:

- **Renderer:** your Tetris interface, running in Chromium. It uses normal browser APIs.
- **Main process:** manages desktop windows and can access operating-system features through Node.js.

A **preload bridge** lets the interface request specific desktop operations without giving it unrestricted access to Node.js.

For example, if you wanted a native “Export scores” feature, the bridge could expose one function:

```js
window.desktop.exportScores(scores)
```

The main process would handle the save dialog and write the file. The interface would receive the result, without receiving general filesystem access.

**“Narrowly exposed” means exposing specific functions**, such as `exportScores()`, rather than powerful general functions such as `writeAnyFile(path, data)` or `runCommand(command)`.

**“Isolation and sandboxing” means the game interface continues running with browser-style restrictions.** Electron’s privileged code handles the desktop operations behind that bridge.

For your Tetris app, **you may not need a bridge at all**. Gameplay, browser storage and ordinary file imports/downloads can work using browser APIs. A bridge becomes useful when you want desktop-specific behavior, such as application menus, native filesystem integration or system shortcuts.
