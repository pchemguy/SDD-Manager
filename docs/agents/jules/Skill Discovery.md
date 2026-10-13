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

Discover repository-provided skills and plugins. Inspect their manifests, metadata, and entry-point documentation to identify their purposes and capabilities. Treat repository paths as relative to `<REPO_ROOT>` and use the discovery protocol below.

### Discovery Protocol

1. **Skill Discovery Protocol**
    Apply this protocol to a supplied skill directory; use `.agents/` for standalone skills.  
    Identify each  `./skills/<SKILL_NAME>/SKILL.md`.
    For each skill:
    - Read and load `SKILL.md` in full and extract declared `name` and `description`.
    - Identify capabilities, sub-workflows, scope, and routing rules from `SKILL.md`.
2. **Plugin Discovery Protocol**
    Start from `.agents/plugins/`.
    Identify each `./<PLUGIN_NAME>/plugin.json` manifest. When not available, inspect vendor-specific locations.
    For each plugin:
    - Read `plugin.json` in full and extract declared `name`, `description`, and, if available, `displayName`.
    - Read `PLUGIN.md` in full, if present.
    - Apply the  **Skill Discovery Protocol** to the plugin's directory.

### Approved Plan

1. Explore standalone skills: Discover skills in `.agents/skills/`. For each skill, read `SKILL.md` to extract metadata and produce a skill brief.
2. Explore plugins: Discover plugins in `.agents/plugins/`. For each plugin, read `plugin.json`, `PLUGIN.md`, and apply the skill discovery protocol. Produce a plugin brief.
3. Generate report: Output the discovery report in the chat.
4. Perform required pre-commit steps only. Committing is NOT allowed.
5. Conclude: Call `done` with a summary of the task.

### Reporting Requirements

1. **Format:** The report should be generated in the chat only, using Markdown formatting (headings, bullets, tables).
2. **Grouping:** Standalone skills should be grouped separately from plugins and their bundled skills.
3. **Content per Standalone Skill (Skill Brief):**
    - Name
    - Path
    - Declared Metadata (name, description extracted from SKILL.md)
    - Concise Capability Summary (derived from SKILL.md capabilities/sub-workflows/scope/routing rules)
4. **Content per Plugin (Plugin Brief):**
    - Name
    - Path
    - Declared Metadata (name, description, displayName from plugin.json)
    - Concise summary of PLUGIN.md
    - Bundled Skill Briefs (applying the Skill Discovery Protocol to its skills)
5. **Constraints:**
    - READ-ONLY discovery and reporting task.
    - NO file modifications, creations, or deletions.
    - NO Git operations.
    - NO formal submission (just finish the task by reporting in chat).
