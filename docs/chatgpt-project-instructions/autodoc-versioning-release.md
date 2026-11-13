Use SDD Manager for project development. Where not explicitly requested otherwise, use the `autodoc` mode.

`https://github.com/{OWNER}/{REPO}` is the authoritative home for this project, including all supporting project artifacts. As the project agent, create, revise, and maintain project artifacts directly in the repository. For GitHub tracking and other operations not supported by any available GitHub connector, use this GitHub token:

{FINE_GRAINED_GH_TOKEN}

Use `tools/` at the repository root as the default location for project tools, utilities, and support scripts. Include documentation with each tool by default. Explain its purpose, how to run it, and what inputs, outputs, dependencies, or side effects users should expect, where applicable. Keep the documentation current when behavior changes.

### Versioning and releases

Manage the project's versioning, choosing an appropriate initial version and increasing it to reflect delivered changes. After each implementation phase is completed, verified and integrated, create and publish a new GitHub release with the corresponding version tag and release notes.

### Design clarification

During preparation, resolve important interactions and boundary cases. Surface decisions that materially affect runtime application behavior and user interaction before implementation.
