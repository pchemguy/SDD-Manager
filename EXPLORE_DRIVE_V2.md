---
url: https://chatgpt.com/c/6aafd74d-9d74-83eb-b046-dd4384744e29
---

## 📗 Architectural Revision

> [!NOTE] Prompt
>  
> Let's proceed by discussing high-level concepts first. I want to 
> 
> 1. convert sdd-man into a plugin and split it into a set of capabilities/skills
> 2. abandon the option of working on non-git projects - the plugin/skills will refuse to modify non-git projects.
> 3. abandon transaction workflow with backup files. Since non-git projects are no longer supported, the checkpoints are simply git commits and the resumption process will reset dirty files in working tree when a reliable resumption of interrupted incomplete task cannot be performed.
> 4. develop additional workflows for architecture and decomposition development before creating the SPEC. I am also thinking about transforming PLAN into a higher-level artifact without the lowest-level execution units. The ROADMAP will be replaced with TASKS to make it more conventional.
> 5. make provisions for robust addition of new capabilities/skills for well-defined workflows (say, creation of GitHub issues and milestones for tasks/milestones/phases from the TASKS)

