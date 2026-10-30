# SDD Manager

SDD Manager composes focused skills into specification-driven development workflows for Git projects, from project exploration and design through bounded implementation, verification and releases.

## Quick Start

Try SDD Manager with the browser-based Tetris or calculator demo, or use the minimal template for your own project.

1. Create an initialized GitHub repository from [SDD Manager Template](https://github.com/pchemguy/SDD-Manager-Template).
2. [Create a fine-grained personal access token (PAT)](https://github.com/settings/personal-access-tokens/) restricted to the new repository. A suggested standard set grants **Read and write** permissions for:
    - Actions.
    - Commit statuses.
    - Contents.
    - Issues.
    - Pull requests.
    - Workflows.

    Individual workflows may require fewer permissions; this set is a convenience rather than a universal minimum.

3. Choose a prompt below. Replace `https://github.com/{OWNER}/{REPO}` and `{FINE_GRAINED_GH_TOKEN}` with your repository URL and token, then submit it in a new ChatGPT Work conversation or another agentic environment with SDD Manager available.

### Tetris demo prompts

Choose how to develop the Tetris game: Interactive, Autodoc and Multipass Autoloop define the complete target scope upfront and differ in documentation preparation. Featured Autodoc starts with a classic baseline, then adds capabilities through separately submitted feature campaigns.

Except for the single-page variants, the standard prompts start with a browser app and add a Windows Electron desktop package after UI layout. The 3in1 variants follow the same order, then add sidebar extensions for Chromium and Firefox as the final platform addition. They require verified release assets for the platforms delivered in each phase.

| Prompt | How to use it |
| --- | --- |
| [Interactive](docs/demo/tetris/prompts/Interactive.md) | Submit the complete prompt and review each document checkpoint. |
| [Autodoc](docs/demo/tetris/prompts/Autodoc.md) | Submit the complete prompt. After project-brief approval, the agent proceeds through the preapproved document checkpoints to TASKS, then stops before final documentation-package QC. |
| [Single Page Autodoc](<docs/demo/tetris/prompts/Single Page Autodoc.md>) | Use Autodoc preparation to deliver one HTML file with embedded application code and optional widely used CDN JavaScript libraries; no Electron delivery. |
| [Autodoc 3in1](<docs/demo/tetris/prompts/Autodoc 3in1.md>) | Follow the Autodoc workflow above with all three delivery forms added in sequence. |
| [Multipass Autoloop](<docs/demo/tetris/prompts/Multipass Autoloop.md>) | Submit the complete prompt with ten cumulative documentation passes. Approve the first project brief; the remaining predefined passes run autonomously, stopping before final documentation-package QC. |
| [Featured Autodoc](<docs/demo/tetris/prompts/Featured Autodoc.md>) | Submit Greenfield first for a classic baseline, then submit each feature request separately, in order, when ready to develop it. |
| [Single Page Featured Autodoc](<docs/demo/tetris/prompts/Single Page Featured Autodoc.md>) | Submit Greenfield, then each feature section separately, delivering one HTML file with embedded application code and optional widely used CDN JavaScript libraries; no Electron delivery. |
| [Featured Autodoc 3in1](<docs/demo/tetris/prompts/Featured Autodoc 3in1.md>) | Follow the Featured Autodoc sequence above with all three delivery forms added in sequence. |

See the [Tetris demo guide](docs/demo/tetris/README.md) for staged exercises and gameplay scope.

### Calculator demo

Follow the [Calculator demo guide](docs/demo/calculator/README.md) to build basic arithmetic, powers and logarithms, and trigonometry in three phases, then explore optional steering exercises and feature campaigns. Use its project description with the Greenfield Project Prompt Template linked below.

### Your own project

Use the [Greenfield Project Prompt Template](<.agents/plugins/sdd-manager/assets/Greenfield Project Prompt Template.md>) with a short preliminary project description. Supply the target repository, required authorization and GitHub tracking preference through the template. The agent should clarify material ambiguities before treating them as requirements.

## Documentation and development

The plugin source package is in [`.agents/plugins/sdd-manager/`](.agents/plugins/sdd-manager/README.md). It is intended to be available for agents to load from this checkout when working on SDD Manager itself. A separate agent installation remains an option; this layout does not configure automatic loading. Instruction reload is controlled by the user.

See the **[full README](.agents/plugins/sdd-manager/README.md)** for capabilities, workflow diagrams, human checkpoints, reporting profiles, usage examples and packaging information.

Development uses [SDD Manager](SDD-MANAGER.md). See the [AI-assisted development disclosure](AI_DISCLOSURE.md) and [MIT license](LICENSE).
