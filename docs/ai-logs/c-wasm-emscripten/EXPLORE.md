---
url: https://chatgpt.com/c/6ae4bf00-f9ac-83ed-86da-089f9a494554
---

> **Historical exploration transcript.** This document is retained for provenance and is not authoritative for current behavior or agent instructions.

## 📗 C Graphics Libs Supported by Emscripten

> [!NOTE] Prompt
>  
> 

**For a native Tetris written in C, raylib + raygui offers the shortest route to a complete game and settings interface. SDL3 offers a broader platform foundation and more flexibility, with more integration work.** Both let you avoid writing OpenGL code.

One correction to my earlier wording: SDL’s **2D renderer** is sufficiently high-level for Tetris. Drawing cells with filled rectangles is straightforward. Its main disadvantage here is the absence of a built-in widget toolkit.

I checked the official repositories and SDL documentation. As of **30 October 2026**, the latest releases reported are [SDL 3.4.18](https://github.com/libsdl-org/SDL/releases/tag/release-3.4.18), [raylib 6.2](https://github.com/raysan5/raylib/releases/tag/6.2), and [raygui 5.0](https://github.com/raysan5/raygui/releases/tag/5.0).

### Overall comparison

raygui is an addition to raylib, so these are really two underlying libraries and one optional GUI layer.

| Aspect | SDL3 | raylib | raylib + raygui |
|---|---|---|---|
| Main purpose | Multimedia and platform foundation | Convenient game/graphics programming | Games and graphical tools with widgets |
| Application code in C | Yes | Yes | Yes |
| Drawing Tetris cells | Easy | Easy | Same as raylib |
| Text and fonts | Normally add SDL_ttf | Built in | Built in |
| Buttons and settings controls | Add a GUI library or implement them | Implement them | Provided |
| OpenGL/shader knowledge required | No, using SDL’s 2D renderer | No | No |
| Initial development effort | Moderate | Low | Low to moderate |
| Control over platform integration | Extensive | More opinionated | Same as raylib |
| Built-in 3D drawing | Separate GPU/rendering work | Yes | Same as raylib |
| Native OS widget appearance | No built-in widget toolkit | No | Custom-drawn controls |
| Main tradeoff | More components to assemble | Deliberate simplifications | GUI layout and interaction still need application code |

### Development process

With **SDL3**, you assemble a few components:

- SDL creates the window, processes events, renders rectangles/textures, and supplies audio and platform services.
- SDL_ttf supplies font rendering.
- SDL_image and SDL_mixer are available if you need broader image-format and audio support.
- A separate GUI library supplies settings controls, unless you write them yourself.

For Tetris, you would create a window and renderer, load a font, process input events, advance the game, and render the board and panels. There is no requirement to manage GPU buffers or write shaders.

The additional effort comes from joining these pieces together: resource ownership, font/text handling, GUI input, and dependency packaging. SDL has substantial [reference documentation and companion libraries](https://wiki.libsdl.org/SDL3/FrontPage).

With **raylib**, more of this comes through one consistent API. Window creation, drawing, fonts, textures, sound, keyboard input, and timing are immediately available. This makes the first playable version quicker to build.

Its learning material emphasizes [examples and an API cheatsheet](https://github.com/raysan5/raylib#learning-and-docs), rather than a comprehensive reference manual. That is convenient for learning common tasks, though less helpful when investigating subtle behavior.

Adding **raygui** introduces a single header whose implementation you compile in one source file. It supplies buttons, toggles, checkboxes, dropdowns, sliders, text boxes, lists, and panels.

Its **immediate-mode** model means your code calls each visible control every frame. The application keeps the settings values and decides where controls appear. You do not construct a persistent tree of widget objects and let a layout engine manage everything. This fits a small settings panel well, but large interfaces require more layout and interaction code. See the [raygui documentation](https://github.com/raysan5/raygui).

### Cross-platform support

| Target | SDL3 | raylib / raygui |
|---|---|---|
| Windows | Officially supported | Supported |
| Linux | Officially supported | Supported |
| macOS | Officially supported | Supported |
| Android | Officially supported | Supported; mobile build setup still required |
| iOS | Officially supported | Not listed alongside the principal platforms in raylib’s current README; investigate before committing |
| Browser through Emscripten | Available | Available |
| Raspberry Pi / embedded Linux | Available through relevant platform backends | Explicitly covered by raylib’s documentation |
| Less common systems / consoles | Broad port ecosystem; some console ports require private access | Assess individually; do not assume equivalent coverage |

SDL distinguishes its main supported platforms from a much longer list of systems on which it has worked; the latter are not all routinely tested. Its [platform list](https://wiki.libsdl.org/SDL3/README-platforms) explains that distinction. raylib lists its platforms and build guides in its [README](https://github.com/raysan5/raylib).

For **Windows, Linux, and macOS Tetris**, platform coverage is unlikely to decide the choice. Both still require builds, packaging, and testing for each target.

If a browser port comes later, both offer a plausible path. Neither makes filesystem access, browser lifecycle, or save-file dialogs identical to desktop behavior.

### Maturity and maintenance

| Consideration | SDL3 | raylib | raygui |
|---|---|---|---|
| Track record | Long-established SDL ecosystem with substantial commercial use | Established library with years of development and many examples | Established auxiliary GUI library used in published tools |
| Current development | Recent stable maintenance release | Recent feature release | Recent major release |
| Project structure | Broad platform and contributor ecosystem | More strongly centered around its original maintainer’s design | Closely coupled to the raylib ecosystem |
| Upgrade concern | SDL2 and SDL3 APIs differ | Releases can redesign APIs | Version 5.0 explicitly introduces breaking changes |
| Documentation concern | Distinguish SDL2 tutorials from SDL3 instructions | Examples must match the selected release | Match raygui and raylib versions carefully |

The practical implication is to **pin compatible releases**. raygui’s README explicitly says its development branch follows raylib’s development branch. Combining an arbitrary raygui header with an older installed raylib is avoidable trouble.

SDL’s maturity does not make every third-party GUI library built on it equally mature. That dependency must be assessed separately.

### Capabilities that matter beyond the board

| Requirement | SDL3 | raylib + raygui |
|---|---|---|
| Board, ghost, hold and next preview | Straightforward 2D rendering | Straightforward 2D rendering |
| Score and leaderboard display | SDL_ttf plus your layout | Built-in text plus your layout; list controls available |
| Settings panel | Requires additional GUI solution | Good match for supplied controls |
| Keyboard/gamepad input | Extensive facilities | Convenient facilities sufficient for Tetris |
| Sound effects and music | Core audio plus optional higher-level libraries | Convenient built-in loading and playback |
| Native open/save dialogs | SDL3 provides asynchronous dialog APIs | Typically requires another library or platform integration |
| Multiple application windows | Supported | Current raylib lists a single-window limitation |
| Advanced text | SDL_ttf uses FreeType and HarfBuzz | Simpler text rendering with documented limitations |
| JSON or SQLite persistence | Separate serialization/database code | Separate serialization/database code |

SDL3’s [file dialog API](https://wiki.libsdl.org/SDL3/SDL_ShowOpenFileDialog) is particularly relevant to Save/Restore. The dialog chooses a file; your application still validates and reads or writes its contents.

For text, [SDL_ttf](https://wiki.libsdl.org/SDL3_ttf/FrontPage) provides a stronger foundation for sophisticated typography. raylib explicitly documents limitations involving right-to-left text, ligatures, and emoji. Ordinary score labels are an easy case; extensive multilingual text editing deserves closer evaluation.

Neither SDL nor raygui should be assumed to provide the accessibility integration of a conventional desktop widget toolkit.

### Build and distribution

Both SDL and raylib can be used with **MSVC on Windows**; choosing raylib does not require adopting MinGW. CMake is an available build option for both.

With SDL, each companion library adds build and packaging decisions. With raylib, many supporting libraries are bundled internally, reducing dependency assembly. raygui normally adds no separate runtime library when compiled into the application.

For either approach, the player receives a native executable, required libraries, and assets. They do not need a compiler, Node.js, or a local server. Static linking can simplify distribution, although the final runtime dependencies depend on the build configuration.

### My recommendation for your Tetris

Choose **raylib + raygui** if your priorities are a pure C implementation, quick development, straightforward drawing, and a modest settings panel. Its limitations are unlikely to constrain the core game.

Choose **SDL3 + SDL_ttf + a selected C GUI library** if you place more weight on extensive platform services, native file dialogs, advanced text, multiple windows, or freedom to replace individual components.

The important architectural choice in either case is to keep the Tetris rules independent of the graphics library. Then changing the GUI—or adding an Emscripten build—does not require rewriting movement, rotation, scoring, or locking behavior.

---
---

## 📗 ChatGPT Sandbox Testing

**Both options work in this sandbox.** I compiled and ran native C demos without a browser or JavaScript.

| Test | SDL3 3.4.18 | raylib 6.2 + raygui 5.0 |
|---|---|---|
| Compile and link | Passed | Passed |
| Create native window | Passed | Passed |
| Render 30 frames | Passed | Passed |
| Draw graphics and text | Passed | Passed |
| Draw GUI widgets | — | Checkbox, slider, buttons |
| Capture graphics | Passed | Passed |

Both used a virtual Linux display with software graphics. I visually checked the 640 x 480 captures.

This verifies **building, running, rendering, and capturing**. Input interaction, audio, and Windows execution remain untested.

native-c-graphics-test.zip[Download sources, Linux test binaries, screenshots, and logs](sandbox:/workspace/scratch/5c8e38a049c7/graphics-test-results/native-c-graphics-test.zip)
