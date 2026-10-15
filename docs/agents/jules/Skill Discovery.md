---
url: https://chatgpt.com/c/6acbd77f-a90c-83e9-9161-aafa5f1c6b0d
---

> [!NOTE] Skill and Plugin Discovery
> 
> Use this prompt at the beginning of a new Jules' **Start** session to force discovery of skills (.agents/skills/) and plugins (.agents/plugins/). Do not use other session types (system prompts are junk).

Discover and load repository-provided skills and plugins using the protocol below. Inspect their manifests, metadata, and entry-point documentation to identify their purposes and capabilities. Follow the execution plan and constraints bellow.

### Discovery Protocol

Use the following directories for discovery relative to `<REPO_ROOT>/.agents/`:

| <center>Target</center> | <center>Discovery Root</center>  | <center>Protocol</center> |
| ----------------------- | -------------------------------- | ------------------------- |
| Standalone Skills       | `./skills`                       | **Skill Discovery**       |
| Plugins                 | `./plugins`                      | **Plugin Discovery**      |
| Bundled Skills          | `./plugins/<PLUGIN_NAME>/skills` | **Skill Discovery**       |

1. **Skill Discovery**
    Identify each  `./<SKILL_NAME>/SKILL.md` skill entry.
    For each skill:
    - Read and load `SKILL.md` in full and extract declared `name` and `description`.
    - Identify capabilities, sub-workflows, scope, and routing rules from `SKILL.md`.
    - Produce a skill brief using the template below.
2. **Plugin Discovery**
    Identify each `./<PLUGIN_NAME>/plugin.json` manifest. When not available, inspect vendor-specific locations.
    For each plugin:
    - Read `plugin.json` in full and extract declared `name`, `description`, and `displayName`, where present.
    - Read `PLUGIN.md` in full, if present.
    - Apply the  **Skill Discovery Protocol** to the plugin's directory.
    - Produce a plugin brief using the template below.

### Reporting Templates

The report should be generated in the **chat only** using the following templates.

#### Skill Brief

```markdown
##### <SKILL_NAME>

- **name**: <declared name from SKILL.md>
- **path**: .agents/skills/<SKILL_NAME>
- **description**: <declared description from SKILL.md>
- **Summary**: <concise capability summary derived from SKILL.md>
```

####  Plugin Brief

```markdown
### <PLUGIN_NAME>

- **name**: <declared name from manifest>
- **displayName**: <declared displayName from manifest>
- **path**: .agents/plugins/<PLUGIN_NAME>
- **manifest**: <actual manifest path>
- **description**: <declared description from the manifest>
- **Summary**: <concise summary derived from PLUGIN.md, or “PLUGIN.md not present”>

#### Bundled Skills

<BUNDLED_SKILL_BRIEFS>
```

###  Discovery Report

```
# Discovery Report

## Standalone Skills

<STANDALONE_SKILL_BRIEFS>
  
## Plugins

<PLIGIN_BRIEFS>
```

### Execution Plan

1. Discover standalone skills, load their entry points, and prepare their briefs.
2. Discover plugins, load their manifests and entry points, and prepare their briefs and bundled skill briefs.
3. Output the complete discovery report in chat.
4. End your turn without formally submitting the task.

### Strict Execution Constraints

- READ-ONLY discovery and reporting task.
- NO file modifications, creations, or deletions.
- NO Git operations.
- NO formal submission (just finish the task by reporting in chat).
