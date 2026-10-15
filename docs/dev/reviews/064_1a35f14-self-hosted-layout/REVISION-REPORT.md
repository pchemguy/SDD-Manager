# Nested package restructuring opening

Campaign **064_1a35f14**, baseline `1a35f14682050297d5a4a9f97eb4921ea35be048`; branch `revision/064_1a35f14-self-hosted-layout`, target main. State: **Open; plan prepared**. The human requested the nested package layout, assets-only packaged notices with root repository copies, package license copy and complete READMEs at both levels. See the [revision plan](REVISION-PLAN.md).

Verified refreshed main and a clean worktree. Sequence 064 follows maximum directory/ref reservation 063; no parent campaign is associated. Existing root/assets notices are byte-identical and bootstrap already selects assets templates. The package publisher and TextStats source selectors currently assume repository-root package paths and require explicit remapping. Internal sibling-relative links should retain their topology.

Proposed README ownership: full canonical packaged README with a deterministic checked root projection that rebases relative links, retaining complete content at both locations. No source files moved or tooling changed in this opening. Loading/registration and active instruction updates are explicitly excluded; user controls reload. Closed records remain frozen.

Check opening/plan/index links, spacing, owned paths and Git whitespace; commit/push/read back the opening before further work. No support/publisher execution or live trial is needed for record-only setup.

## README scope refinement

The human requested an explicit README statement that the plugin source package lives at `.agents/plugins/sdd-manager/` and is intended for agents to load when developing SDD Manager, with separate agent installation remaining optional. The earlier dual-full-README/generated-root proposal is superseded: the plan now selects an abbreviated root introduction linking to the full package README and contributor guidance. No README generation/link-rewriting helper or sync-specific CI is selected. Distinguish checkout source paths from installed package layout and do not claim automatic loading. Source restructuring remains pending.
