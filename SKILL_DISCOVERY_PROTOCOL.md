# Skill and plugin discovery protocol

Discover and load repository-provided skill and plugin entries, then report their purposes and capabilities in chat. Use this protocol for a discovery-only turn before selecting subsequent work.

## Strict execution constraints

- **Read-only discovery and chat reporting only.** Do not create, modify or delete files.
- **No Git operations**, commits, pull requests or hosted-object changes.
- Read entries as discovery material; do not execute their workflows or treat reading an entry as authorization to act.
- Do not install packages or load every reference module. Read the entries specified below and use their routing information to describe available capabilities.
- **Finish by reporting in chat. Do not formally submit the task.** Discovery produces no repository artifact.

## Discovery locations

Resolve these paths from the established repository root, `{REPO_ROOT}`. Use actual discovered directory names in the report.

| Target | Entry path |
| --- | --- |
| Standalone skill | `.agents/skills/{skill}/SKILL.md` |
| Plugin manifest | `.agents/plugins/{plugin}/plugin.json` |
| Optional shared plugin entry | `.agents/plugins/{plugin}/PLUGIN.md` |
| Bundled skill | `.agents/plugins/{plugin}/skills/{skill}/SKILL.md` |

Also inspect alternate discovery or manifest locations explicitly identified by the repository. Report the actual paths; do not guess client installation locations. Missing directories mean no entries were found there, while unreadable or malformed entries remain unresolved.

## Discovery procedure

1. **Standalone skills.** Enumerate the standalone skill directories. For each SKILL.md:
    - Read the complete entry and extract its declared `name` and `description`.
    - Identify its capabilities, inputs/outputs, scope and reference-routing conditions from that entry.
    - Prepare a skill brief with its actual repository-relative path.
2. **Plugins.** Enumerate the plugin directories. For each plugin:
    - Read its manifest in full and extract declared `name` and `description`.
    - Record an optional display name with its actual field path. SDD Manager uses `extensions.com.openai.interface.displayName`; other manifests may organize presentation differently. Do not infer a declared display name from a directory or title.
    - Read PLUGIN.md in full when present. This repository uses it as a shared entry convention; its absence does not prevent skill discovery.
    - Enumerate that plugin's `skills/` directory and apply the same complete-entry inspection to each bundled skill. Record the bundled paths rather than substituting standalone paths.
    - Prepare a plugin brief and its bundled skill briefs. Summarize composition/routing from the shared entry when available; otherwise report its absence and distinguish manifest metadata from skill-derived information.
3. **Reconcile coverage.** Account for every entry found in the selected locations. Report missing metadata, unreadable/malformed entries, duplicate declared names and unavailable optional entries without inventing values or claiming successful activation. Continue independent readable entries.
4. **Report and stop.** Output the discovery report in chat using the structure below. List the sources actually read and any unresolved locations or entries. End the turn without starting a development workflow or formal submission.

## Report structure

Use declared names for headings when available and actual paths to distinguish duplicate names. Reuse the skill brief fields for both standalone and bundled skills. Report absent categories explicitly; include only fields supported by the inspected sources. A routing summary describes the entry's selection guidance, without loading the referenced procedures.

```markdown
# Skill and plugin discovery report

## Standalone skills

### {skill name}

- **Path:** {actual repository-relative SKILL.md path}
- **Declared name:** {name}
- **Description:** {declared description}
- **Capabilities and scope:** {entry-derived summary}
- **Routing:** {relevant modules and selection conditions stated in the entry}

## Plugins

### {plugin name}

- **Manifest:** {actual repository-relative manifest path}
- **Declared name:** {name}
- **Display name:** {declared value and field path, when present}
- **Description:** {declared description}
- **Shared entry:** {actual PLUGIN.md path or absence}
- **Composition and routing:** {summary and its inspected source}

#### Bundled skills

##### {skill name}

- **Path:** {actual repository-relative SKILL.md path}
- **Declared name:** {name}
- **Description:** {declared description}
- **Capabilities and scope:** {entry-derived summary}
- **Routing:** {relevant modules and selection conditions stated in the entry}

## Coverage and unresolved entries

{Locations inspected, actual sources read, absent categories and unresolved items}
```
