# Skill and plugin discovery protocol

Discover and load repository-provided skill and plugin entries using protocol below. Report their purposes and capabilities in chat according to the report template.

## Strict execution constraints

These constraints apply during discovery.

- **Read-only discovery and chat reporting only.** Do not create, modify or delete files.
- **No Git operations**, commits, pull requests or hosted-object changes.
- Read complete entries as discovery material:
    - Do not execute their workflows or treat reading an entry as authorization to act.
    - Do not install packages.
    - Do not follow `references/*.md`.
- **Report discovery in chat, then continue the requested task.** Do not create a report file, commit or formal submission for discovery.

## Discovery procedure

### Skill Discovery

Enumerate skill directories. For each SKILL.md:

- Read the complete entry and extract its declared `name` and `description`.
- Identify its capabilities and scope from that entry.

Apply to

- Standalone skills
    - **Discovery root**: `.agents/skills/` 
    - **Pattern**: `.agents/skills/{skill}/SKILL.md`
- Bundled skills for each plugin `{plugin}` during **Plugin Discovery**
    - **Discovery root**: `.agents/plugins/{plugin}/skills/` 
    - **Pattern**: `.agents/plugins/{plugin}/skills/{skill}/SKILL.md`

### Plugin Discovery

Enumerate plugin directories `.agents/plugins/{plugin}/`. For each plugin:

- Read its manifest in full (`plugin}/plugin.json` or vendor-specific) and extract declared `name`, `description`, and `displayName`, where present.
- Read `PLUGIN.md` in full when present. If it defines coordinator skill, read its `SKILL.md` entry before other bundled skills.
- Apply the **Skill Discovery Protocol** to `plugin}/skills/`

## Report template

The report should be generated in **chat only** using the following template. Use declared names for headings. Report absent categories explicitly; include only fields supported by the inspected sources.

```markdown
# Skill and plugin discovery report

## Standalone skills

### {skill name}

- **Path:** {actual repository-relative SKILL.md path}
- **Description:** {declared description}
- **Capabilities and scope:** {entry-derived summary}

## Plugins

### {plugin name}

- **Display name:** {when declared in manifest}
- **Manifest:** {actual repository-relative manifest path}
- **Description:** {declared description}
- **Shared entry:** {actual PLUGIN.md path or absence}
- **Capabilities and scope:** {concise PLUGIN.md-derived summary, when available}

#### Bundled skills

##### {skill name}

- **Path:** {actual repository-relative SKILL.md path}
- **Description:** {declared description}
- **Capabilities and scope:** {entry-derived summary}
```
