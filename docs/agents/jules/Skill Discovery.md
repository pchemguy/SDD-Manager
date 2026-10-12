> [!NOTE] Skill Discovery
> 
> Use this prompt at the beginning of a new Jules' **Interactive plan** session to force it discover skills (.agents/skills/) and plugins (.agents/plugins/). The prompt attempts to suppress
> 
> - clarifying questions submission of response as a repo PR.

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

It seems like should spell out a concise discovery plan, like

1. **Skill Discovery Protocol**
    1. Start from `{REPO_ROOT}/.agents/skills/`
    2. List skill containers `./{SKILL_NAME}`
    3. Dive into each `./{SKILL_NAME}` skill container:
        1. Read every `./SKILL.md` in full.
        2. Produce a skill brief, including:
            1. Skill path and extracted name and description from `./SKILL.md`.
            2. Concise summary of skill capabilities derived from `./refrences/*.md` sub-workflows and associated routing instructions extracted from `./SKILL.md`, if applicable.
2. **Plugin  Discovery Protocol**
    1. Start from `{REPO_ROOT}/.agents/plugins/`
    2. List plugin containers `./{PLUGIN_NAME}`
    3. Dive into each `./{PLUGIN_NAME}` plugin container:
        1. Find and read plugin manifest `plugin.json` in full by checking:
            1. Standard manifest location - plugin root. If found, SKIP next point.
            2. Vendor-specific manifest locations.

    List plugin containers `{REPO_ROOT}/.agents/plugins/{PLUGIN_NAME}`. For each `{PLUGIN_NAME}` produce a plugin brief:
    4. Read any root `AGENTS.md` and `README.md` (when none is available, use child skill briefs) and derive concise plugin capabilities summary.
    5. Apply "Skill Discovery"