---
url: https://chatgpt.com/c/6acbd77f-a90c-83e9-9161-aafa5f1c6b0d
---

> [!NOTE] Skill Discovery
> 
> Use this prompt at the beginning of a new Jules' **Interactive plan** session to force it discover skills (.agents/skills/) and plugins (.agents/plugins/). The prompt attempts to suppress
> 
> - clarifying questions,
> - plan approval,
> - submission of response as a repo PR.

Discover all available repository-provided skills and plugins, including nested skills. Inspect their manifests, metadata, and entry-point documentation to identify their purposes and capabilities.

Report the results **in chat only**, organized for quick human review, with a brief description of each discovered skill and plugin.

**STRICT EXECUTION CONSTRAINTS:**

- This is a READ-ONLY discovery and reporting task.
- Do NOT
    - create, modify, or remove any user files
    - perform any modifying git operations
    - ask clarifying questions. Make reasonable decisions about discovery and presentation, then execute immediately.
    - attempt to formally submit the task.

**Completion means reporting the findings in chat. No repository changes or modifying Git operations are required or authorized at this point. When you are finished, simply conclude the task to end your turn instead of making a formal submission.**

---

I want to revisit

```
Discover all available repository-provided skills and plugins, including nested skills. Inspect their manifests, metadata, and entry-point documentation to identify their purposes and capabilities.

Report the results **in chat only**, organized for quick human review, with a brief description of each discovered skill and plugin.

**STRICT EXECUTION CONSTRAINTS:**

- This is a READ-ONLY discovery and reporting task.
- Do NOT
    - create, modify, or remove any user files
    - perform any modifying git operations
    - ask clarifying questions. Make reasonable decisions about discovery and presentation, then execute immediately.
    - attempt to formally submit the task.

**Completion means reporting the findings in chat. No repository changes or modifying Git operations are required or authorized at this point. When you are finished, simply conclude the task to end your turn instead of making a formal submission.**
```

It seems like I should spell out a concise discovery plan, like

1. **Skill Discovery Protocol**
    1. Start from `{REPO_ROOT}/.agents/skills/`
    2. List skill containers `./{SKILL_NAME}`
    3. Dive into each `./{SKILL_NAME}` skill container:
        1. Read every `./SKILL.md` in full.
        2. Produce a skill brief, incorporating:
            1. Skill path and extracted `name` and `description` from `./SKILL.md`.
            2. Concise summary of skill capabilities derived from
                - `./refrences/*.md` sub-workflow names and
                - associated scope and routing instructions extracted from `./SKILL.md`, if applicable.
2. **Plugin  Discovery Protocol**
    1. Start from `{REPO_ROOT}/.agents/plugins/`
    2. List plugin containers `./{PLUGIN_NAME}`
    3. Dive into each `./{PLUGIN_NAME}` plugin container:
        1. Find and read plugin manifest `plugin.json` in full by checking:
            1. Standard manifest location - plugin root. If found, SKIP vendor-specific checks.
            2. Vendor-specific manifest locations/names.
        2. Read `PLUGIN.md` in full, if available.
        3. Apply **Skill Discovery Protocol** to `./skills`.
        4. Produce a plugin brief, incorporating:
            1. Plugin path and extracted `name`, `description`, and `displayName` from the plugin manifest.
            2. Concise summary of `PLUGIN.md`, if available.
            3. Plugin skill briefs.

---
---

Discover repository-provided skills and plugins. Inspect their manifests, metadata, and entry-point documentation to identify their purposes and capabilities. Treat repository paths as relative to `<REPO_ROOT>` and use the discovery protocol below.

### Discovery Protocol

1. **Skill Discovery Protocol**
    Apply this protocol to a supplied skill directory; use `.agents/` for standalone skills.  
    Identify each  `./skills/<SKILL_NAME>/SKILL.md`.
    For each skill:
    - Read and load `SKILL.md` in full and extract declared `name` and `description`.
    - Identify capabilities, sub-workflows, scope, and routing rules from `SKILL.md`.
    - Produce a skill brief, including in your report
        - skill name,
        - skill path,
        - declared metadata,
        - concise capability summary derived from `SKILL.md`.
2. **Plugin Discovery Protocol**
    Start from `.agents/plugins/`.
    Identify each `./<PLUGIN_NAME>/plugin.json` manifest. When not available, inspect vendor-specific locations.
    For each plugin:
    - Read `plugin.json` in full and extract declared `name`, `description`, and, if available, `displayName`.
    - Read `PLUGIN.md` in full, if present.
    - Apply the  **Skill Discovery Protocol** to the plugin’s directory.
    - Produce a plugin brief, including in your report
        - plugin name,
        - plugin path,
        - declared metadata,
        - concise summary of `PLUGIN.md`, if present,
        - skill briefs.

### Approved Plan

1. Explore standalone skills: Discover skills in `.agents/skills/`. For each skill, read `SKILL.md` to extract metadata and produce a skill brief.
2. Explore plugins: Discover plugins in `.agents/plugins/`. For each plugin, read `plugin.json`, `PLUGIN.md`, and apply the skill discovery protocol. Produce a plugin brief.
3. Generate report: Output the discovery report in the chat.
4. Perform required pre-commit steps only. Committing is NOT allowed.
5. Conclude: Call `done` with a summary of the task.

### STRICT EXECUTION CONSTRAINTS

Report the results **in chat only**, organized for quick human review, using Markdown headings, bullets, and table formatting as appropriate. Group standalone skills separately from plugins and their bundled skills.

- This is a READ-ONLY discovery and reporting task.
- Do NOT
    - create, modify, or remove any user files
    - perform any modifying git operations
    - ask clarifying questions. Make reasonable decisions about discovery and presentation, then execute immediately.
    - invent / infer / assume any missing metadata.
    - attempt to formally submit the task.

**Completion means reporting the findings in chat. No repository changes or modifying Git operations are required or authorized at this point. When you are finished, conclude the task to end your turn without a formal submission.**
