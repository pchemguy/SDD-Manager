# Revision plan: demo prompt navigation

## Campaign and acceptance

Campaign **111_8b545a4**, baseline `8b545a47f733d7322e2b5c8655cf03dd8e069909`, follows the [published comprehensive review](REVIEW-REPORT.md). Working branch: revision/111_8b545a4-comprehensive-review; creation parent/integration/return: main on origin, pchemguy/SDD-Manager. Original opening: `c88051fe52ab888078715d0c29f6736aed8347b1`. No parent suspended; Standard reporting.

The human's request to fix review findings authorizes **R-001**, a low-priority documentation navigation improvement. U-001/U-002 found no confirmed defect requiring runtime/workflow changes. All 327 local tests and 14 native CI jobs pass. Do not invent additional repairs to populate the campaign.

## Ordered action

| Action | Finding / owner | Bounded change | Recheck |
| --- | --- | --- | --- |
| A-001 | R-001 / sdd-docs | Add a concise preparation-mode/standalone-prompt table to docs/demo/tetris/README.md: interactive/onepass → AIO.md; autodoc/onepass → Autodoc AIO.md; autodoc/autoloop → Multipass Autoloop AIO.md. | All three local links resolve; labels match each prompt's actual opening; standalone files and existing inline prompt bodies remain byte-identical. Recheck current Markdown navigation/style and unchanged package/runtime/test/CI blobs. |

Preserve game objectives, manual prompt wording, existing guide structure, all frozen campaign records and every unselected path. No source behavior, version, dependency, release, installation, new tests or target-project edits belong to this repair. Release 0.15.3 remains the next separately recorded operation after closure.

## Persistence and completion

Publish/read back this plan, perform A-001 and record actual rechecks in REVISION-REPORT.md. No prose-mirroring test is needed for this reversible link addition. Reuse unaffected runtime/CI evidence only after comparing exact source blobs. Finalize HANDOFF/navigation, publish/read back the verified result, refresh main and explicitly merge the complete campaign tip. Verify both parents, merged current links/scope and exact package, publish/read back main and return clean. Those actual effects close/freeze 111; a planned merge or report sentence does not. Then proceed to the authorized patch-release campaign.
