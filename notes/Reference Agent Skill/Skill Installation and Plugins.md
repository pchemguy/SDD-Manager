---
url: https://chatgpt.com/c/6ab8aa44-157c-83eb-872c-9531e400d897
---

## 📗 Skill Installation

> [!NOTE] Prompt
>  
>  How do I install my Hello World skill into my GH repo? I need a widely recognized standard convention.

For a GitHub repository, the best broadly recognized, vendor-neutral convention in 2026 is:

```text
<repo>/
└── .agents/
    └── skills/
        └── hello-world/
            ├── SKILL.md
            ├── ...
```

So I would install your reference skill as:

```text
my-repo/
├── .agents/
│   └── skills/
│       └── hello-world/
│           ├── SKILL.md
│           ├── modules/
│           │   └── ...
│           ├── resources/
│           │   └── ...
│           └── scripts/
│               └── ...
├── src/
├── tests/
└── ...
```

The important distinction is that **`SKILL.md` is the portable standard; discovery directories are host conventions**. OpenAI explicitly describes Skills as compatible with the open Agent Skills standard, with each skill represented by a directory containing `SKILL.md`. :chatgpt-content-reference{index="0"}

For the repository location, `.agents/skills/<skill-name>/` is currently the strongest portability choice. GitHub Copilot officially recognizes all three of these project locations:

```text
.github/skills/
.claude/skills/
.agents/skills/
```

and specifically treats `.agents/skills` as a supported project-level Agent Skills directory. :chatgpt-content-reference{index="1"}

I would **not** make this your canonical layout:

```text
.github/skills/hello-world/
```

It is perfectly valid for Copilot, but `.github` makes the artifact look GitHub-specific even though the skill itself is intended to be portable.

Likewise, I would not make this canonical:

```text
.claude/skills/hello-world/
```

because that is visibly Claude-specific.

### Recommended convention for your Hello World project

Given that one of your explicit design goals was broad agent compatibility, I would standardize on:

```text
.agents/
└── skills/
    └── hello-world/
        └── SKILL.md
```

with all supporting material contained below the skill directory.

That gives you a useful separation:

```text
.agents/skills/
```

means:

> repository-local, agent-oriented reusable capabilities

while:

```text
.agents/skills/hello-world/
```

is the self-contained installation unit.

GitHub's own current documentation makes this layout particularly attractive because Copilot recognizes `.agents/skills`, `.github/skills`, and `.claude/skills` equivalently, so choosing the neutral one does **not** cost you GitHub Copilot compatibility. :chatgpt-content-reference{index="2"}

### `SKILL.md`

The minimum portable structure should remain:

```markdown
---
name: hello-world
description: >
  Demonstrates a portable Agent Skill using progressive disclosure,
  supporting resources, nested modules, and deterministic scripts.
---

# Hello World

...
```

`name` and `description` are the essential metadata recognized by the Agent Skills convention and by GitHub's implementation. GitHub recommends lowercase hyphenated names and normally matching the directory name. :chatgpt-content-reference{index="3"}

So these should agree:

```text
.agents/skills/hello-world/
               ^^^^^^^^^^^
```

and:

```yaml
name: hello-world
```

### Installing it into an existing repo

If your source skill repo currently looks approximately like:

```text
hello-world/
├── SKILL.md
├── modules/
├── resources/
└── scripts/
```

then on Windows CMD the conceptual operation is simply:

```bat
mkdir TARGET_REPO\.agents\skills\hello-world
xcopy /E /I /Y hello-world TARGET_REPO\.agents\skills\hello-world
```

The resulting committed files are:

```text
TARGET_REPO/
└── .agents/
    └── skills/
        └── hello-world/
            ├── SKILL.md
            ├── modules/
            ├── resources/
            └── scripts/
```

Commit `.agents/skills/hello-world/**` normally. It should **not** go in `.gitignore`.

There is now also an official GitHub CLI skill workflow. Current GitHub documentation describes `gh skill install`, including installation of specific skills from repositories, and validation/publishing against the Agent Skills specification. It is currently marked public preview, though, so I would treat the filesystem layout—not the CLI—as your normative installation mechanism. :chatgpt-content-reference{index="4"}

For example, a consumer can increasingly use:

```bash
gh skill install OWNER/REPOSITORY hello-world
```

but your documentation should still define the durable end state as:

```text
.agents/skills/hello-world/
```

### One convention I would add to your reference skill

I think your Hello World README/SPEC should explicitly distinguish **source distribution layout** from **installed layout**:

```text
# Distribution repository

hello-world/
├── SKILL.md
├── modules/
├── resources/
└── scripts/
```

versus:

```text
# Repository-local installation

consumer-repo/
└── .agents/
    └── skills/
        └── hello-world/
            ├── SKILL.md
            ├── modules/
            ├── resources/
            └── scripts/
```

Normatively, I would phrase it roughly as:

> For repository-local installation, the skill SHOULD be installed under `.agents/skills/<skill-name>/`. The skill directory MUST remain self-contained and MUST contain `SKILL.md` at its root. Host-specific locations such as `.github/skills/` or `.claude/skills/` MAY be used when required by a target agent, but are not the canonical portable layout.

That aligns particularly well with the architecture we established for your Hello World skill: **portable Agent Skills semantics first; host-specific adapters only where necessary.**

---
---

## 📗 Skill Installation

> [!NOTE] Prompt
>  
>  Is /.skills/hello-world/ a standard installation?

No. A repository-root `/.skills/hello-world/` directory is **not** a widely recognized standard project installation location for Agent Skills.

For a repo-local skill, the currently recognized conventions include:

- `.agents/skills/hello-world/`
- `.github/skills/hello-world/`
- `.claude/skills/hello-world/`

GitHub Copilot explicitly discovers all three of those locations; it does **not** list `.skills/` as a project skill directory. :chatgpt-content-reference{index="0"}

So this:

```text
repo/
└── .skills/
    └── hello-world/
        └── SKILL.md
```

may work only with a particular tool if you configure that tool to scan `.skills`, but it is not a portable default.

For your Hello World reference skill, I would use:

```text
repo/
└── .agents/
    └── skills/
        └── hello-world/
            └── SKILL.md
```

That is the best neutral choice because `.agents/skills/` is explicitly supported by GitHub while avoiding a GitHub- or Claude-specific namespace. GitHub also uses `~/.agents/skills/` as a recognized personal/global skill location. :chatgpt-content-reference{index="1"}

One subtlety: the **Agent Skills specification standardizes the skill package itself**—a named directory containing `SKILL.md` and optional resources—but host discovery paths remain implementation conventions. So I'd describe `.agents/skills/` as the **portable installation convention**, not as something mandated universally by the core skill format.

---
---

## 📗 Plugins

> [!NOTE] Prompt
>  
> Now tell me about agent plugins in general and specifically about
> 
> ```
> /.agents/plugins
> /.codex-plugin
> ```
> 
> How do plugins differ from sklls? Why do I need those?

The cleanest mental model is:

> **A skill teaches the agent how to do something. A plugin packages capabilities so the agent can install and use them as a unit.**

That distinction is now fairly well standardized.

A **skill** is fundamentally an instruction/workflow bundle centered on `SKILL.md`. It may also contain scripts, templates, references, and examples. It tells the model when to use the workflow, what sequence to follow, how to combine available tools, and what a successful result should look like. It does not inherently add a new authenticated external capability. :chatgpt-content-reference{index="0"}

A **plugin** is a distributable package. Under the current Agent Plugins 1.0 standard, a plugin can contain one or more skills plus MCP server configuration. Individual clients may add client-specific extensions such as hooks, agents, commands, or LSP configuration. :chatgpt-content-reference{index="1"}

The portable standard structure is approximately:

```text
my-plugin/
├── plugin.json
├── skills/
│   ├── workflow-a/
│   │   └── SKILL.md
│   └── workflow-b/
│       └── SKILL.md
├── mcp.json
└── com.example.client/
    └── ...
```

The important point is that **`plugin.json` at the plugin root is the portable Agent Plugins 1.0 manifest**. The standard fixes `skills/` and `mcp.json` as conventional locations. :chatgpt-content-reference{index="2"}

### Why would you need a plugin?

You do **not** automatically need one.

For your current Hello World project, if its purpose is:

```text
teach an agent a reusable workflow
        ↓
SKILL.md + resources/scripts
```

then a skill is sufficient.

A plugin becomes useful when the thing you want to distribute is larger than one independently discoverable workflow:

```text
Plugin
├── skill: analyze repository
├── skill: perform migration
├── skill: validate migration
├── MCP server configuration
└── optional client-specific integration
```

Plugins give you an installation and distribution boundary. GitHub describes the practical benefits as reuse across projects, standardized configuration, shareable domain expertise, and encapsulation of MCP setup; marketplaces additionally give you discovery and versioning. :chatgpt-content-reference{index="3"}

So there is a hierarchy:

```text
MCP server
    provides tools / live capabilities

Skill
    provides workflow knowledge

Plugin
    packages those things for installation/distribution
```

OpenAI describes essentially the same separation: MCP handles live data, authentication, authorization, and controlled actions; skills define sequences, decision points, output requirements, examples, and templates. A plugin is the package containing either or both. :chatgpt-content-reference{index="4"}

---

### `/.codex-plugin`

This one requires an important qualification.

`.codex-plugin` is **OpenAI Codex's plugin-manifest convention**, not the vendor-neutral Agent Plugins 1.0 layout.

A Codex-style package can look like:

```text
my-plugin/
├── .codex-plugin/
│   └── plugin.json
├── skills/
│   └── docs-search/
│       └── SKILL.md
└── .mcp.json
```

OpenAI documents this format directly. The `.codex-plugin/plugin.json` manifest can point to the skill directory and MCP configuration. :chatgpt-content-reference{index="5"}

For example:

```json
{
  "name": "docs-helper",
  "version": "1.0.0",
  "description": "Find answers in documentation.",
  "skills": "./skills/",
  "mcpServers": "./.mcp.json"
}
```

Here `.codex-plugin` is not a directory where plugin components live. It is essentially a **Codex metadata namespace**:

```text
.codex-plugin/
└── plugin.json
```

The skills, MCP files, assets, etc. normally remain elsewhere in the plugin root.

But for a new portable project, I would **not choose `.codex-plugin/plugin.json` as the canonical manifest** if you can use Agent Plugins 1.0.

The more portable form is now:

```text
my-plugin/
├── plugin.json
├── skills/
└── mcp.json
```

with:

```json
{
  "$schema": "https://agent-plugins.org/schemas/1.0.0/plugin.schema.json",
  ...
}
```

GitHub explicitly recommends Agent Plugins 1.0 for new portable plugins and treats legacy/vendor-specific plugin formats as appropriate mainly when you need their additional behavior. :chatgpt-content-reference{index="6"}

So:

```text
.codex-plugin/plugin.json
```

means roughly:

> Codex-native plugin packaging

whereas:

```text
plugin.json
```

means:

> portable Agent Plugins 1.0 packaging

That distinction matters for the broad-compatibility objective of your project.

---

### `/.agents/plugins`

This means something rather different.

It is **not normally the contents of a plugin package**.

In OpenAI's current local plugin workflow, `.agents/plugins/` can contain **plugin marketplace/discovery metadata**, especially:

```text
~/.agents/
└── plugins/
    └── marketplace.json
```

The actual installed plugin might instead live somewhere like:

```text
~/.codex/
└── plugins/
    └── my-plugin/
```

and `marketplace.json` points to it. OpenAI explicitly says these directories are examples rather than mandatory locations; the marketplace entry references the plugin's actual source path. :chatgpt-content-reference{index="7"}

Conceptually:

```text
~/.agents/plugins/marketplace.json
             │
             │ points to
             ▼
~/.codex/plugins/my-plugin/
├── plugin.json
├── skills/
└── ...
```

So I would **not** use:

```text
repo/
└── .agents/
    └── plugins/
        └── my-plugin/
```

as the canonical structure of your plugin merely because `.agents/plugins` exists.

`.agents/plugins` is associated more with **discovery/marketplace registration** than with the portable package format.

---

### This is different from `.agents/skills`

That gives you a useful distinction:

```text
.agents/
├── skills/
│   └── hello-world/
│       └── SKILL.md
│
└── plugins/
    └── marketplace.json
```

The first is a repo-local skill discovery convention.

The second is part of a plugin installation/discovery ecosystem.

They should not be treated as symmetric:

```text
.agents/skills/foo/     ← actual skill installation
.agents/plugins/foo/    ← not equivalently the standard plugin installation
```

That is an easy trap.

---

### Skills versus plugins in practical terms

| Question                           | Skill                                        | Plugin                                    |
| ---------------------------------- | -------------------------------------------- | ----------------------------------------- |
| Primary purpose                    | Teach a workflow                             | Package/install capabilities              |
| Core manifest                      | `SKILL.md`                                   | `plugin.json`                             |
| Can contain instructions           | Yes                                          | Via bundled skills                        |
| Can contain multiple skills        | No, one skill directory represents one skill | Yes                                       |
| Can expose external tools          | Not inherently                               | Yes, typically through MCP                |
| Can require authentication         | Usually no                                   | MCP/app integration may                   |
| Distribution unit                  | Skill directory                              | Plugin directory/package                  |
| Marketplace/versioning             | Not necessarily                              | Yes, natural fit                          |
| Hooks/client extensions            | No portable skill mechanism                  | Possible through plugin/client extensions |
| Best for your Hello World tutorial | Yes                                          | Probably not initially                    |

The critical architectural distinction is:

```text
skill = behavioral knowledge
plugin = capability package
```

A skill can contain executable helper scripts, but that does not make it a plugin. Scripts inside a skill support its workflow; an MCP server in a plugin adds a tool interface/capability boundary.

---

### Example: your SDD Manager idea

Your SDD work is a good example of where the distinction becomes useful.

Suppose you have:

```text
sdd-manager/
├── SKILL.md
├── modules/
│   ├── specification.md
│   ├── planning.md
│   ├── recovery.md
│   └── documentation.md
└── scripts/
```

That is naturally **one skill**.

If later you develop several independently triggerable workflows:

```text
SDD plugin

skills/
├── initialize-project/
│   └── SKILL.md
├── implement-plan/
│   └── SKILL.md
├── resume-transaction/
│   └── SKILL.md
└── audit-project/
    └── SKILL.md
```
    
and perhaps an MCP server exposing controlled project-state operations:

```text
mcp.json
```

then making the whole thing a plugin becomes sensible:

```text
sdd-manager/
├── plugin.json
├── skills/
│   ├── initialize-project/
│   ├── implement-plan/
│   ├── resume-transaction/
│   └── audit-project/
└── mcp.json
```

The user installs **SDD Manager once**, and gets all of those related workflows and tools.

That is exactly the packaging problem plugins solve.

---

### For your Hello World reference project

I would currently **keep it as a skill, not turn it into a plugin**.

Your project's stated purpose is to demonstrate portable skill architecture: progressive disclosure, nested modules, Markdown resources, deterministic scripts, etc. Turning it into a plugin would introduce an additional packaging abstraction that is not necessary to teach those concepts. 

I would, however, update its documentation to explain this evolution:

```text
Level 1 — Agent Skill

.agents/skills/hello-world/
├── SKILL.md
├── modules/
├── resources/
└── scripts/
```

Then optionally show:

```text
Level 2 — Agent Plugin

hello-world-plugin/
├── plugin.json
└── skills/
    └── hello-world/
        ├── SKILL.md
        ├── modules/
        ├── resources/
        └── scripts/
```

Notice an important consequence:

**Your existing Hello World skill could be embedded in a plugin almost unchanged.**

You don't redesign the skill. You wrap it:

```text
Before:

hello-world/
├── SKILL.md
└── ...

After:

hello-world-plugin/
├── plugin.json
└── skills/
    └── hello-world/
        ├── SKILL.md
        └── ...
```

That composability is one of the main reasons the two standards are separate.

### My recommended standards hierarchy

For the compatibility goals of your project, I would standardize on:

```text
Agent Skills
    ↓
SKILL.md
    ↓
portable workflow unit

Agent Plugins 1.0
    ↓
plugin.json
skills/
mcp.json
    ↓
portable distribution unit

Host-specific extension
    ↓
.codex-plugin/
com.github.copilot/
etc.
    ↓
use only when required
```

That is preferable to starting with `.codex-plugin`, because the Agent Plugins 1.0 specification is explicitly vendor-neutral and its steering group currently includes maintainers from Amazon, Cursor, Microsoft, OpenAI, and Vercel. :chatgpt-content-reference{index="9"}

So for your projects I would apply the rule:

> **Use a Skill until you actually have a packaging/distribution problem that requires a Plugin. If you need a Plugin, prefer Agent Plugins 1.0. Add `.codex-plugin` or other client-specific extensions only for functionality that cannot be represented portably.**

---
---

## 📗 Plugin Installation

> [!NOTE] Prompt
>  
> If I make a plugin
> 
> ```
> sdd-manager/
> ├── plugin.json
> ├── skills/
> │   ├── initialize-project/
> │   ├── implement-plan/
> │   ├── resume-transaction/
> │   └── audit-project/
> └── mcp.json
> ```
> 
> how do I install it into a repo? What is the standard layout?
> 

For an **Agent Plugins 1.0** plugin, there is an important distinction:

> The standard defines the **plugin package layout**, but it does **not define one universal repository installation directory**.

The standard package itself is:

```text
sdd-manager/
├── plugin.json
├── skills/
│   ├── initialize-project/
│   │   └── SKILL.md
│   ├── implement-plan/
│   │   └── SKILL.md
│   ├── resume-transaction/
│   │   └── SKILL.md
│   └── audit-project/
│       └── SKILL.md
└── mcp.json
```

That is normative Agent Plugins 1.0 structure: `plugin.json` must be at the plugin root, skills are discovered under `skills/`, and MCP configuration is fixed at `mcp.json`. :chatgpt-content-reference{index="0"}

What the standard deliberately does **not** prescribe is something like:

```text
repo/.agents/plugins/sdd-manager/
```

or:

```text
repo/.plugins/sdd-manager/
```

The specification explicitly leaves **distribution and installation** to the client. :chatgpt-content-reference{index="1"}

So there is currently no portable equivalent of the fairly recognizable repo-local skill convention:

```text
.agents/skills/<skill>/
```

for plugins.

### The practical options

If your repository itself *is* the plugin project, the cleanest structure is simply:

```text
sdd-manager/
├── plugin.json
├── skills/
├── mcp.json
├── src/
├── tests/
└── ...
```

In other words, **the repository root is the plugin root**.

That is actually the most standards-pure representation:

```text
git repository root
        =
Agent Plugin root
```

and `plugin.json` is immediately visible at the top level.

If instead you want to install the plugin **inside some unrelated consumer repository**, you need a host convention. For example, a client could decide to place it under:

```text
consumer-repo/
└── .agents/
    └── plugins/
        └── sdd-manager/
            ├── plugin.json
            ├── skills/
            └── mcp.json
```

Structurally this is perfectly reasonable, but **`.agents/plugins/` is not mandated by Agent Plugins 1.0**. A client has to know to scan that location.

That is the key difference from the plugin's internal structure:

```text
.agents/plugins/sdd-manager/    ← host installation convention
                         │
                         ▼
                    plugin root
                    ├── plugin.json
                    ├── skills/
                    └── mcp.json
```

Only the part below `sdd-manager/` is standardized.

### What GitHub Copilot does

GitHub currently supports Agent Plugins 1.0 as a portable plugin format, but its documentation likewise treats installation/discovery as client behavior rather than defining `.agents/plugins/` as a cross-client standard. GitHub recommends Agent Plugins 1.0 for new portable plugins while keeping client-specific behavior separate. :chatgpt-content-reference{index="2"}

Therefore I would **not** document this as universally standard:

```text
/.agents/plugins/sdd-manager/
```

You can use it as your own convention, but label it accordingly.

### What I would recommend for SDD Manager

There are really two separate distribution scenarios.

If **SDD Manager is its own GitHub repo**, make that repo the plugin:

```text
sdd-manager/
├── plugin.json
├── skills/
│   ├── initialize-project/
│   ├── implement-plan/
│   ├── resume-transaction/
│   └── audit-project/
├── mcp.json
├── docs/
├── src/
└── tests/
```

That is the cleanest solution.

Then a compatible agent/plugin manager installs that package according to its own installation mechanism.

If you want a **vendored repository-local installation** in another repo, I would use:

```text
consumer-project/
└── .agents/
    └── plugins/
        └── sdd-manager/
            ├── plugin.json
            ├── skills/
            └── mcp.json
```

but describe it as:

> **recommended repository-local plugin installation convention**

rather than:

> Agent Plugins standard installation path.

That distinction is technically important.

### Why `.agents/plugins/` is still a good choice

Even though it isn't normative, it has good semantics alongside repo-local skills:

```text
.agents/
├── skills/
│   └── standalone-skill/
└── plugins/
    └── sdd-manager/
        ├── plugin.json
        └── skills/
```

This gives you a coherent repo namespace:

```text
.agents/skills/    standalone skills
.agents/plugins/   installed plugin packages
```

and avoids vendor namespaces such as:

```text
.github/
.codex/
.claude/
```

So for your project's **broad-compatibility philosophy**, I think `.agents/plugins/<plugin>/` is a sensible project convention—just not something we should misrepresent as an Agent Plugins 1.0 requirement. 

One further consequence is important. You should **not flatten the plugin's skills into `.agents/skills/`** when installing the plugin:

```text
# Don't transform this

sdd-manager/
├── plugin.json
└── skills/
    ├── initialize-project/
    └── implement-plan/
```

into:

```text
.agents/skills/
├── initialize-project/
└── implement-plan/
```

Doing that loses the plugin boundary, plugin identity, versioning, MCP configuration, and future plugin extensions.

The installed package should stay intact:

```text
.agents/plugins/sdd-manager/
├── plugin.json
├── skills/
└── mcp.json
```

So the rule I would put into your documentation is:

> **An Agent Plugin is installed as an intact directory. `plugin.json` defines its root. Agent Plugins 1.0 standardizes the contents of that root but does not prescribe the parent installation directory. For repository-local vendoring, this project recommends `.agents/plugins/<plugin-name>/`.**

That wording is both portable and technically accurate.

---
---

## 📗 Plugin Installation Cont

> [!NOTE] Prompt
>  
>  So, if I want to install SDD Manager into a consumer repo, there is no cross-vendor recognized plugin installation layout?

Correct. **There is currently no cross-vendor, universally recognized repository-local installation path for plugins** equivalent to the emerging convention for skills such as:

```text
.agents/skills/<skill-name>/
```

Agent Plugins 1.0 standardizes the **plugin package itself**:

```text
sdd-manager/
├── plugin.json
├── skills/
└── mcp.json
```

but deliberately leaves **installation and discovery** to the host/client. :chatgpt-content-reference{index="0"}

So different hosts use different mechanisms. For example, OpenAI currently supports repo-scoped plugin discovery through:

```text
$REPO_ROOT/.agents/plugins/marketplace.json
```

with the actual plugin commonly stored somewhere like:

```text
$REPO_ROOT/plugins/sdd-manager/
```

The marketplace then points to that directory. OpenAI explicitly says these plugin directories are examples rather than fixed requirements. :chatgpt-content-reference{index="1"}

GitHub Copilot takes a different approach: repo-level plugin enablement is declared in:

```text
.github/copilot/settings.json
```

and plugins may be installed from a marketplace, repository, or local path. :chatgpt-content-reference{index="2"}

So these are **not** equivalent portable standards:

```text
.agents/plugins/sdd-manager/
.github/plugins/sdd-manager/
.codex/plugins/sdd-manager/
```

None of them is a universal Agent Plugins installation location.

For SDD Manager, I would therefore separate two concerns:

```text
# Portable plugin package
sdd-manager/
├── plugin.json
├── skills/
└── mcp.json
```

and then provide **host adapters/install recipes**:

```text
OpenAI/Codex:
.agents/plugins/marketplace.json
plugins/sdd-manager/

GitHub Copilot:
.github/copilot/settings.json
+ plugin source / marketplace reference

Other hosts:
their own installation mechanism
```

This is actually a useful architectural property: **the plugin artifact stays identical; only its registration/discovery mechanism changes.**

So I would revise my earlier suggestion slightly: I would **not establish `.agents/plugins/<name>/` as your recommended general installation convention**, because that risks looking more standardized than it actually is. A better normative statement for SDD Manager would be:

> **SDD Manager is distributed as a portable Agent Plugins package rooted at `plugin.json`. Consumer repositories install or register that package using the plugin-discovery mechanism supported by their agent host. No cross-vendor repository-local plugin installation directory is currently standardized.**

That is the safest convention if broad compatibility is one of your primary design requirements.
