# Browser development policy critical review

## Scope and method

Reviewed browser-capabilities.md at ef3dd64d322a5035bb65630a6a65994905136dec in full, including rule scope, paragraph/section organization, examples, operational decisions and evidence qualifications. Reviewed its current SDD callers and root Windows shell policy for integration consistency. This is a focused policy review, not a live browser or agent test. The Technical Writing Assistant's composition procedure informs the assessment; substantive recommendations are explicit rather than silently applied.

The intended standalone document serves agents performing browser-dependent work. Its accepted restrictions are dedicated environment-contained Chromium, Firefox when required, no existing personal/system installations and no implicit framework/matrix expansion. Those are user policy choices, not technical defects to replace with vendor defaults.

## Findings

| ID / priority | Location and problem | Consequence and recommendation | Disposition |
| --- | --- | --- | --- |
| F-001 / high | Opening, conflict paragraphs and recovery section retain plugin workflow language and a relative environment-recovery.md dependency. | Moving the file alone leaves an unavailable recovery target and implied plugin ownership. Remove that dependency and describe recovery/conflict escalation in standalone terms; remove fixed policy routes from packaged callers. | Resolved by A-002 externalization. |
| F-002 / high | Playwright Windows CMD example is an unguarded three-command sequence beginning with variable assignment. | Copying it directly to an agent shell tool conflicts with this repository's Windows policy. Saving it as a batch file also permits testing to continue after failed installation. Label it as a temporary CMD script, add bounded explicit failure handling and distinguish installation from test outcomes. Keep the example illustrative. | Resolved by A-004: removed unnecessary command examples; setup sequences require temporary shell files, explicit failure handling and stopping after a failed prerequisite. |
| F-003 / medium | Browser isolation paragraphs use environment-owned/dedicated/compatible for local, container and remote facilities without a concise operational eligibility test. | Agents may disagree about a shared cache or opaque remote browser. State the necessary observable ownership, binary origin/version and isolated-state evidence, and the disposition when it cannot be established; preserve compatible contained reuse. | Resolved by A-004: assigned binary locations, known compatible distribution/version and isolated state; an unverified facility is unavailable. |
| F-004 / medium | Title/opening emphasize readiness and loading; later prose mixes binding restrictions, conditional framework advice and optional evidence capabilities. | A reader must infer which instructions are mandatory and when they apply. Use the standalone policy title and make the browser-use trigger visible; distinguish binding rules from conditional setup and capability selection without adding irrelevant installation gates. | Resolved by A-002/A-004: explicit scope and mandatory selection/isolation rules, conditional Playwright guidance and task-selected evidence. |
| F-005 / low | Isolation, normal setup and recovery repeat the same boundary; the paragraph after the capability table lists another generic route without a clear new decision. | Repetition makes the central rules harder to retrieve. Keep the complete restriction once, preserve a short recovery invariant and trim redundant examples. The existing policy is cohesive enough to remain one file; no size-driven split or word quota is justified. | Resolved by A-004: consolidated rules, shorter setup/evidence guidance and removal of duplicated advice in the same file. |

## Strengths and technical check

The document already distinguishes browser-independent work, product support from execution evidence, compatible contained reuse from personal installations, optional engine coverage from required acceptance, and normal setup from failure recovery. Its capability table usefully separates launch, repeated sessions, visible output and native events. Preserve these distinctions during any later shortening.

Bounded checks of the official [browser documentation](https://playwright.dev/docs/browsers) and [CI guidance](https://playwright.dev/docs/ci) on 2026-10-20 support the version-matched binaries, patched Firefox and consistent install/run browser-path guidance. The browser documentation also confirms that branded Chrome/Edge installation uses the OS global location and that PLAYWRIGHT_BROWSERS_PATH does not change it. No contradictory factual claim was found in those selected points. This is not verification of every supported framework, operating system or executable example; no command was run or browser downloaded.

## Size and cohesion assessment

The baseline file has 1,226 whitespace-separated words, 68 lines and 9,411 bytes, including its examples and code. Line count understates reading effort because most paragraphs occupy single long source lines. Its length is greater than needed for a standalone agent policy: binding restrictions compete with repeated isolation/recovery advice, framework setup examples and generic investigation detail.

The scope is nevertheless cohesive: permitted browsers, environment isolation, setup and evidence boundaries all support the same browser-use decision. Keep one complete policy file. Tighten repeated restrictions and the generic paragraph after the capability table, make mandatory rules easy to scan, and retain conditional Playwright guidance and meaningful evidence distinctions. A moderate reduction is appropriate; neither a fixed word target nor a separate file for each small topic is justified. This length assessment adds weight to F-004/F-005; it does not authorize an unrequested substantive rewrite.

## Initial review boundary

Implement the explicitly selected promotion, independence and project-policy routing. Preserve the accepted browser restrictions and report F-002–F-005 as recommendations with the partial F-004 disposition above. A critical-review request does not itself authorize changing all policy content. Keep campaign 092 open for subsequent direction.

At the A-002 checkpoint, F-001 and the F-004 title/trigger portion were resolved. The promoted policy had 1,225 words/9,360 bytes after standalone substitutions; no substantive shortening or example rewrite was claimed. F-002, F-003 and the remaining F-004/F-005 recommendations remained open pending selection.

## A-004 post-revision assessment

The human subsequently authorizes continued revision, explicitly selects all four retained text issues and changes the browser defaults. The revised policy has 762 words/5,766 bytes, about 38% fewer words than the promoted version. It remains one complete document: browser selection, isolation, setup, conditional Playwright guidance and task-dependent verification/recovery. The reduction removes repeated or unnecessary detail while preserving operational decisions and evidence limits; it is not a word-budget target.

Project documents now govern browser priorities, requirements and coverage, including objectives established during design. With no browser specified, Chromium has priority and Firefox is included in the default environment; other browsers are prohibited only by default and are allowed when project documents define their use. These defaults do not impose two-browser execution on every check. Isolation requirements remain explicit and separate from browser-choice defaults.

Source assessment resolves F-002–F-005 as recorded above. This is a text and consistency review, not proof of observed agent compliance or actual browser setup/execution.
