Let's proceed by discussing high-level concepts.

1. I want to convert sdd-man into a plugin and split it into a set of capabilities/skills
2. I want to abandon the option of working on non-git projects - the plugin/skills will refuse to modify non-git projects.
3. I want to abandon transaction workflow with backup files. Since non-git projects are no longer supported, the checkpoints are simply git commits and the resumption process will reset dirty files in working tree when a reliable resumption of interrupted incomplete task cannot be performed.