Help me develop the following project using $sdd-manager in autodoc mode.

### Project repo and credentials

GitHub repository: https://github.com/{OWNER}/{REPO}

GitHub token: {FINE_GRAINED_GH_TOKEN}

### Versioning and releases

Manage the project's versioning, choosing an appropriate initial version and increasing it to reflect delivered changes. After each implementation phase is completed, verified and integrated, create and publish a new GitHub release with the corresponding version tag and release notes.

Each GitHub release must include the installable or deployable artifacts for every platform delivered by that phase. Include installation instructions and clearly distinguish development packages from signed or store-distributed packages. Verify packaged artifacts using the applicable checks under the project's environment policies, and explicitly report unavailable checks and unverified behavior. Do not describe unverified behavior as verified.

### Project

Treat this description as the complete target scope. Deliver the baseline functionality across the platforms specified below.

#### Baseline MVP scope

Display the message "Hello World" and a group of three vertically stacked radio buttons labeled "red", "blue" and "green". Selecting a radio button immediately changes the message's text color to the selected color, without a separate apply action. Exactly one radio button is selected at a time; initially select "red" and display the message in red.

##### Browser and Electron layout

Keep the main panel displaying "Hello World" centered in the application viewport. Place the settings panel containing the three stacked color radio buttons to its right. Keep the main panel centered independently of the settings panel's width. Resolve narrow-window behavior during document preparation so that both panels remain usable.

##### Browser extension layout

Display the main panel containing "Hello World" within the active webpage, preserving the page's existing content and functionality. Place the settings panel containing the three stacked color radio buttons in the extension sidebar. Selecting a color in the sidebar must immediately update the message on the associated webpage.

#### Platforms

Deliver three platform groups in separate phases, in this order: browser app, Windows Electron app, then sidebar extensions. Deliver the Chromium and Firefox extensions together in the same phase and release. Publish a release after each platform group is added.

Design application logic and UI for reuse from the outset so that most of the codebase can be shared, keeping platform-specific code separate. Preserve previously delivered platforms when adding another. Adapt layout, lifecycle and any in-scope persistence or file operations without introducing additional application capabilities. Preserve session-only behavior where specified.

##### Browser app - baseline delivery

Deliver the baseline as a browser app.

##### Windows Electron delivery

Deliver an Electron packaged app for Windows. Bundle all required desktop runtime assets; users must not need a separate Node.js installation or development server.

##### Browser extension delivery

Deliver extensions for desktop Chromium and Firefox whose sidebars control or interact with the active webpage. Place page-side and sidebar functionality according to the application scope; the extension must work with ordinary webpages rather than require a dedicated application tab. Adapt sidebar controls to a narrow, resizable panel.

Bundle all required extension runtime assets. Users must not need a separate Node.js installation, local development server or backend. Use extension-local storage where persistent data is required.

During document preparation, resolve supported pages, required permissions, page activation and sidebar-to-page communication. Define behavior when switching tabs, navigating, closing or reopening the sidebar, or encountering an unsupported page. Keep sidebar actions associated with the intended page and preserve existing website content and functionality.

### Design clarification

During document preparation, resolve unspecified behavior and platform adaptations within the stated scope. Present decisions that materially affect application behavior or delivery for human review before implementation.
