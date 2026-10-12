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

Discover repository-provided skills and plugins using the protocol below. Report the results in chat only, organized for quick human review.

Treat repository paths as relative to {REPO_ROOT}.

### 1. Skill Discovery Protocol

Start from `.agents/skills/`. Identify all skill containers by locating their `./{SKILL_NAME}/SKILL.md` files.

For each skill:
- Read and load `SKILL.md` in full.
- Extract its declared `name` and `description`.
- Identify capabilities, sub-workflows, scope, and routing rules from `SKILL.md`.
- Report the skill path, declared metadata, and a concise capability summary derived from `SKILL.md`.

Do not execute bundled scripts or discovered workflows.

### 2. Plugin Discovery Protocol

Start from `.agents/plugins/`. Identify all plugin containers.

For each plugin:
   - Check for `plugin.json` at the plugin root and read it in full. If found, use it as the manifest and skip vendor-specific manifest checks.
   - Otherwise, inspect vendor-specific manifest locations, such as `.claude-plugin/plugin.json` and `.codex-plugin/plugin.json`. Read discovered manifests in full and identify their paths.
   - Read `PLUGIN.md` in full, if present.
   - Apply the  **Skill Discovery Protocol** to the plugin’s `skills/` directory.
   - Report the plugin path; declared `name`, `description`, and `displayName`, where present; a concise summary of its entry point; and its skill briefs.

### 3. Reporting

   Group standalone skills separately from plugins and their bundled skills. Avoid duplicate briefs for the same skill path.

   Identify missing discovery directories, absent metadata or entry points, unreadable resources, and conflicting manifests concisely. Do not invent missing metadata.

### STRICT EXECUTION CONSTRAINTS:

- This is a READ-ONLY discovery and reporting task.
- Do NOT create, modify, or remove any user files.
- Do NOT perform modifying Git operations.
- Do NOT execute discovered workflows or bundled scripts.
- Do NOT ask clarifying questions.
- Make reasonable decisions about discovery and presentation, then execute immediately.
- Do NOT attempt to formally submit the task.

Completion means reporting the findings in chat. No repository changes or modifying Git operations are required or authorized. When finished, simply conclude the task to end your turn instead of making a formal submission.
