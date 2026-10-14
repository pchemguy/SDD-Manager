# Coordinator entry composition review

Campaign **059_937ec6c**; [review plan](REVIEW-PLAN.md). Starting/reviewed source: `937ec6cc74545a7b3555b368ce86c4f4ff42c6c4`. Branch: `revision/059_937ec6c-coordinator-entry-review`; target: main. State: **U-001 complete; U-002 pending; open and unmerged**.

Review covers the coordinator entry's composition, progressive-discovery boundary and a proposed source-only development contract. Evidence is source inspection and bounded local measurements; no live acceptance or model trial. Source repair and contract implementation are not selected.

## U-001 — Composition and entry structure

The entire entry was inspected, including frontmatter. It contains 10,541 UTF-8 bytes, 1,206 whitespace-delimited words and 44 lines. These measures do not establish excessive model context use: no tokenizer or model was evaluated. There is no size-based defect or required reduction target.

### Reverse outline

| Baseline location | Actual function | Bytes / words excluding surrounding separator newlines | Assessment |
| --- | --- | --- | --- |
| Lines 1–4 | Discovery metadata; coordination and release triggers | 633 / 70 | Broad supported activation; release operations lead the description |
| Line 8 | Shared Markdown conventions and applicability | 435 / 59 | Detailed formatting is foregrounded before coordinator purpose |
| Line 10 | Purpose, proactive coordination, authority, review/publication, host review, stage/stop and document acceptance | 1,125 / 145 | Several different concerns in one paragraph |
| Lines 12–30 | Eighteen conditional routing rows | 2,680 / 282 | Useful direct discovery, but ungrouped concerns interrupt the opening-to-procedure sequence |
| Lines 32–36 | Five-step coordination procedure | 3,243 / 380 | Sound overall lifecycle; handoff step combines several distinct gates and branch procedures |
| Lines 38–44 | Task persistence, every-commit publication, reporting/recovery and closed records | 2,367 / 266 | Consequential rules appear as unheaded trailing paragraphs after the procedure's finish step |

The title is the only body heading. Routing is roughly a quarter of the bytes; the procedure and closing obligations together exceed half. Useful improvement lies in assigning section/paragraph jobs and separating invariant reminders from conditional detail, rather than treating the routing table as the sole source of bulk.

### R-001 — No visible hierarchy between routing, procedure and obligations

**Type/priority:** composition defect, medium. **Confidence:** high for source structure; behavioral consequences untested. **Location:** entry lines 10–44.

An opening paragraph, an eighteen-row table, numbered steps and four policy paragraphs follow one H1 without section headings. Conditional lookup precedes the principal coordination procedure, while essential task/publication/closed-record requirements trail “Finish and stop.” The boundaries between “what coordination does,” “what must always be respected,” and “which module to load” are implicit. This increases reader navigation and retention demands; it does not prove agents currently miss a rule.

**Proposal:** Give purpose, coordination gates, lifecycle and conditional routing distinct visible section jobs. Put short consequential invariants before their dependent actions and keep only one principal lifecycle. Group routing by decision or lifecycle concern; do not require a fixed heading count or remove all rows merely to shorten the file.

**Recheck:** A reverse outline assigns a distinct job to each section; an agent arriving through this entry can identify baseline/selection, next owner/module, prerequisites and stop without searching trailing unheaded prose. Preserve direct links for every required conditional procedure. **Disposition:** open; no repair accepted.

### R-002 — Paragraph and step overload obscures controlling actions

**Type/priority:** composition defect, medium. **Confidence:** high. **Location:** line 10; step 3 at line 34; reporting paragraph at line 42.

The opening's purpose sentence is followed by proactive handoffs, routine authorization, review commit/publication, host automatic review, review-only limits, stage entry, stopping and HIL. Its controlling idea is too broad to organize those distinctions. Step 3 starts as an implementation-tracking gate, then switches to general handoff payload, instruction loading, preparation/default-branch integration, campaign-record branches and dirty-state preservation. The reporting paragraph likewise changes from return evidence to prohibited recovery artifacts and missing skills.

**Proposal:** Keep the purpose paragraph focused on coordinator responsibility. Give lifecycle actions concise controlling sentences. Place universal authority/HIL/stop reminders together, move conditional review/platform distinctions to the review owner, keep preparation and tracking gates identified with their destination modules, and route handoff/recovery details to coordination.md. Preserve explicit gate-before-action wording and owner availability; a link with no condition is insufficient.

**Recheck:** Each paragraph/step has one principal action or coherent concern; qualifiers remain adjacent to their rule. A handoff can still identify tracking readiness, accepted preparation, actual scope and blockers before dependent execution. **Disposition:** open; owner destinations to be checked in U-002.

### No-finding coverage and cautions

The entry already identifies coordinator purpose, a factual orientation owner, workflow selection and a visible chat decision, focused execution/steering/incorporation owners, requested tracking gates, human document review, per-commit publication, partial-phase stops, missing skills and preservation of closed records. Most routing labels convey an actual loading condition, not just a filename. These capabilities should survive restructuring.

The table and procedure intentionally overlap in several places: one supports lookup, the other sequence. This is not automatically harmful duplication. Similarly, a concise publication or HIL reminder can be necessary even when the detailed procedure has a canonical owner. U-002 will assess which repetitions reproduce detail without adding a decision or gate.
