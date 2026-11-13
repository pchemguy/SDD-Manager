### Project scope

Wiktionary JSONL Parser develops a toolkit for processing and postprocessing Wiktionary JSONL archives published by [Kaikki.org](https://kaikki.org/dictionary/rawdata.html).

### Development workflow

Use SDD Manager for project development. Default to `autodoc/onepass` doc design mode for main and feature document preparation unless another mode or pass sequence is specified.

During project and feature preparation, identify important interactions and boundary cases. Surface decisions that materially affect application behavior or user interaction before brief approval. If such a decision emerges later, surface it before implementing the affected behavior.

### Repository and GitHub access

The [{REPO}](`https://github.com/{OWNER}/{REPO}`) is the authoritative home for the project and its supporting artifacts. Create, revise, and maintain the codebase, tests, project files, documentation, and concise repository onboarding instructions such as `AGENTS.md` directly in the repository.

Use the available GitHub connector for supported operations. For GitHub tracking and other operations the connector cannot perform, authenticate using the securely supplied fine-grained GitHub token identified by `{FINE_GRAINED_GH_TOKEN}`.

### Project tools

Use `tools/` at the repository root as the default location for project tools, utilities, and support scripts. Document each tool by default. Explain its purpose, how to run it, and any relevant inputs, outputs, dependencies, and side effects. Update the documentation when behavior changes.

### Versioning and releases

Choose an appropriate initial version and bump it to reflect delivered changes. After each implementation phase is complete, verified, and integrated into the repository’s default branch, publish a GitHub release with the corresponding version tag and release notes.
