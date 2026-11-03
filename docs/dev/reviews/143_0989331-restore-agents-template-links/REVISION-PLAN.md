# Restore AGENTS template links

Campaign **143_0989331**, ordinary focused revision opened from main **0989331ddc01fd5687043b37a2b294af2836de78** on revision/143_0989331-restore-agents-template-links. Creation parent and eventual integration target are main; no suspended parent. Campaigns through 142 remain closed/frozen.

## Accepted scope

The human requested: "Open a revision campaign and revert it", referring to the AGENTS_TEMPLATE.md change in 6aa9950fd81dc8f64b50da507431effd7dfda4e4. This directly accepts the bounded rollback. Restore that file byte for byte from the parent of that commit, retaining its four Markdown policy links and removing the added package-root-resolution paragraph. No new link-resolution design or independent review stage is selected.

| Action | Work | Acceptance |
| --- | --- | --- |
| V-001 | Restore .agents/plugins/sdd-manager/assets/AGENTS_TEMPLATE.md to blob 3dada5ea7f73323b8c70ae0579afd877b5163d8e from 6aa9950f^; verify and publish with campaign evidence. | Exact Git blob/byte equality, all five restored Markdown targets resolve in the intended checkout/project-root layout, one package file changed, whitespace and campaign links pass, prior closed records unchanged. |

## Boundary

The selected source changes are the V-001 rollback and the later V-002 paragraph relocation. Commit/publish/read back the verified result through the GitHub connector and stop on the revision branch with this campaign open. Campaign closure/main integration and another version/release are not selected by this request.

The [revision report](REVISION-REPORT.md) owns actual checks and reached state. No runtime behavior or installed-client portability is established by restoring historical prose.

## V-002 — Release-section paragraph order

The human supplied the existing PLUGIN.md artifact-name paragraph and specified that it should be the second paragraph in its section. Move it verbatim after the highlights/complete-message routing paragraph within Release preparation and publication, before the authorized-release paragraph. Preserve the rest of the document byte for byte and retain one occurrence of the rule and its existing link. This extends the original template-only scope within the same active campaign. Verify section order, exact paragraph bytes, unchanged outside content and link/block inventories, canonical link target/anchor, unchanged V-001 restoration, whitespace and active record links; publish/read back and keep the campaign open.

## V-003 — Authorized closure and subsequent release

The human now requests: "Close, bump patch version, create release". This supersedes the earlier open/no-release stopping boundary. Finalize V-001/V-002 evidence, explicitly merge the verified campaign into its recorded parent main, publish/read back and return to main to close/freeze the campaign. Then perform the separately authorized direct-default release operation: bump 0.16.2 to 0.16.3, prepare fresh complete notes since v0.16.2, verify the eligible release commit/body and exact committed package/names, tag and invoke the existing single publisher, verify downloaded bytes/latest and retain an outcome checkpoint. No approval pause is required between those requested stages. Release evidence belongs outside the frozen campaign after closure.
