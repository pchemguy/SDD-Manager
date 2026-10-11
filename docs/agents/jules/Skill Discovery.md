> [!NOTE] Skill Discovery
> 
> Use this prompt at the beginning of a new Jules' **Interactive plan** session to force it discover skills (.agents/skills/) and plugins (.agents/plugins/). The prompt attempts to suppress
> 
> - clarifying questions
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
