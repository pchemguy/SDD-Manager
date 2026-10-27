# Demo prompts revision report

Campaign **128_8021ea3**; baseline `8021ea34fb28d6b650b918ed6fd6f0d70a3f2da6`; branch `revision/128_8021ea3-demo-prompts`; return main. [Plan](REVISION-PLAN.md).

## V-001 — Browser first, Electron after layout

Changed the four standard prompts to deliver the browser app initially while designing shared logic/UI for future delivery platforms, including Electron. Added Windows Electron packaging after UI layout: a subsection in Interactive and Autodoc, Pass 10 in Multipass Autoloop, and Feature 9 in Featured Autodoc. The later addition retains browser use, shared code, bundled runtime assets and no separate Node/server at runtime, with Windows/browser assets in applicable releases. Updated both READMEs and the Tetris guide for staged platform delivery and ten cumulative passes.

Verification: reversing only the baseline replacement and new delivery section reproduces each prior prompt exactly; gameplay/layout and existing feature/pass content are preserved. Both 3in1 files match committed bytes unchanged. Pass sequence 1–10, feature sequence 1–9, current README claims/local links and diff whitespace pass. Documentation-only amendment; no runtime tests or application implementation claimed. The opening commit was successfully published with the supplied credential before this work. Publish/read back this action commit; campaign remains open.

V-001 wording follow-up: shortened the Interactive and Autodoc section heading to Windows Electron at the human’s request. Delivery requirements and sequence are unchanged. Verified exact heading-only prompt changes and diff whitespace.

V-001 consistency follow-up: standardized the Electron heading text as Windows Electron delivery across all four standard prompts, retaining the pass/feature prefixes where applicable. Verified all four headings and diff whitespace.
