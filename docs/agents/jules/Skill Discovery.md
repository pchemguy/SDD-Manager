---
url: https://chatgpt.com/c/6acbd77f-a90c-83e9-9161-aafa5f1c6b0d
---

> [!NOTE] Skill Discovery
> 
> Use this prompt at the beginning of a new Jules' **Start** session to force discovery of skills (.agents/skills/) and plugins (.agents/plugins/). Do not use other session types (system prompts are junk).
> 
> The prompt attempts to suppress
> 
> - clarifying questions,
> - submission of response as a repo PR.

Discover repository-provided skills and plugins. Inspect their manifests, metadata, and entry-point documentation to identify their purposes and capabilities. Treat repository paths as relative to `<REPO_ROOT>/.agents/` and use the discovery protocol below.

### Discovery Protocol

1. **Skill Discovery Protocol**
    Identify each  `./skills/<SKILL_NAME>/SKILL.md` skill entry.
    For each skill:
    - Read and load `SKILL.md` in full and extract declared `name` and `description`.
    - Identify capabilities, sub-workflows, scope, and routing rules from `SKILL.md`.
2. **Plugin Discovery Protocol**
    Identify each `./plugins/<PLUGIN_NAME>/plugin.json` manifest. When not available, inspect vendor-specific locations.
    For each plugin:
    - Read `plugin.json` in full and extract declared `name`, `description`, and, if available, `displayName`.
    - Read `PLUGIN.md` in full, if present.
    - Apply the  **Skill Discovery Protocol** to the plugin's directory.

### Reporting Requirements

The report should be generated in the **chat only** using the following templates.

#### Templates

##### Skill Brief

```
#### <SKILL_NAME>

- **name**: <SKILL_NAME>
- **path**: .agents/skills/<SKILL_NAME>
- **description**: <from SKILL.md>
- **Summary**: <Concise capability summary derived from SKILL.md>
```

#####  Plugin Brief

```
### <PLUGIN_NAME>

- **name**: <PLUGIN_NAME>
- **displayName**: <from plugin.json>
- **path**: .agents/plugins/<PLUGIN_NAME>
- **description**: <from plugin.json>
- **Summary**: <Concise summary derived from PLUGIN.md>
  _(if available)_

### Bundled Skills

<BUNDLED_SKILL_BRIEFS>
```

#####  Discovery Report

```
# Discovery Report

## Standalone Skills

<STANDALONE_SKILL_BRIEFS>
  
## Plugins

<PLIGIN_BRIEFS>
```

### Execution Plan

1. Explore standalone skills: Discover skills in `.agents/skills/`. For each skill, read `SKILL.md` to extract metadata and produce a skill brief.
2. Explore plugins: Discover plugins in `.agents/plugins/`. For each plugin, read `plugin.json`, `PLUGIN.md`, and apply the skill discovery protocol. Produce a plugin brief.
3. Generate report: Output the discovery report in the chat.
4. Perform required pre-commit steps only. Committing is NOT allowed.
5. Conclude: Call `done` with a summary of the task.

#### Constraints 

- READ-ONLY discovery and reporting task.
- NO file modifications, creations, or deletions.
- NO Git operations.
- NO formal submission (just finish the task by reporting in chat).
