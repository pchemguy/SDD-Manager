# SDD Manager

SDD Manager composes focused skills into specification-driven development workflows for Git projects, from project exploration and design through bounded implementation, verification and releases.

The plugin source package is in [`.agents/plugins/sdd-manager/`](.agents/plugins/sdd-manager/README.md). It is intended to be available for agents to load from this checkout when working on SDD Manager itself. A separate agent installation remains an option; this layout does not configure automatic loading. Instruction reload is controlled by the user. For an explicit discovery-only turn, use the [skill and plugin discovery protocol](SKILL_DISCOVERY_PROTOCOL.md).

See the **[full README](.agents/plugins/sdd-manager/README.md)** for capabilities, workflow diagrams, human checkpoints, reporting profiles, usage examples and packaging information. The [plugin entry](.agents/plugins/sdd-manager/PLUGIN.md) routes agent workflows.

For source development, start with [AGENTS.md](AGENTS.md) and [acceptance/AGENTS.md](acceptance/AGENTS.md). [Testing with TextStats](acceptance/TEXTSTATS.md) explains the acceptance project; [campaign navigation](docs/dev/reviews/README.md) retains development evidence.

Development uses [SDD Manager](SDD-MANAGER.md). See the [AI-assisted development disclosure](AI_DISCLOSURE.md) and [MIT license](LICENSE).
