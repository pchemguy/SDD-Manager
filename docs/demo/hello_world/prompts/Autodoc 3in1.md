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

#### Platforms

Deliver three platform groups in separate phases, in this order: browser app, Windows Electron app, then sidebar extensions. Deliver the Chromium and Firefox extensions together in the same phase and release. Publish a release after each platform group is added.

Design application logic and UI for reuse from the outset so that most of the codebase can be shared, keeping platform-specific code separate. Preserve previously delivered platforms when adding another. Adapt layout, lifecycle and any in-scope persistence or file operations without introducing additional application capabilities. Preserve session-only behavior where specified.

##### Browser app - baseline delivery

Deliver the baseline as a browser app.

##### Windows Electron delivery

Deliver an Electron packaged app for Windows. Bundle all required desktop runtime assets; users must not need a separate Node.js installation or development server.

##### Browser extension delivery

Deliver sidebar extensions for desktop Chromium and Firefox with all required extension runtime assets bundled. Users must not need a separate Node.js installation, local development server or backend. Adapt the layout to a narrow, resizable sidebar while retaining access to the same in-scope capabilities, and define panel closing and reopening behavior. Use extension-local storage where persistent data is required.

### Design clarification

During document preparation, resolve unspecified behavior and platform adaptations within the stated scope. Present decisions that materially affect application behavior or delivery for human review before implementation.
