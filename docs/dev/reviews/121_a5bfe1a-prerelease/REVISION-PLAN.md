# Prerelease revision plan

Campaign **121_a5bfe1a**; baseline `a5bfe1a2e9c08424ebc3b4dd997f0150e68be11c`; [review](REVIEW-REPORT.md). Human authority covers fixes and patch release.

| Action | Scope | Verification |
| --- | --- | --- |
| V-001 | Repair R-001 by joining all campaign-navigation rows into the existing table and placing explanatory prose afterward; preserve every row’s contents/order | Compare original row list byte-for-byte; one contiguous Markdown table; no closed-record edits |
| V-002 | Bump sole manifest version 0.15.3 → 0.15.4; collect complete release range; prepare retained notes | Manifest/schema and actual source-matched ZIP; exact notes/source association; final main/tag/publication checks |

Execute and publish each action separately. Close after verified main integration; the separately authorized release then uses a default-branch release commit, tag and the single repository publisher. No unresolved findings are deferred by implication.
