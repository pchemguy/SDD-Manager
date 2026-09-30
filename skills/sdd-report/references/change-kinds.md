# Change kinds and evidence

Start with the actual outcome, reason, checks performed, and result. Select only the fields that improve understanding of this change; the labels below are examples, not a fixed questionnaire. Keep a planned issue in future or acceptance language and a completed report in past or present evidence language.

| Kind | Add to the shared core when relevant | Evidence boundary |
| --- | --- | --- |
| Feature or behavior | User-visible capability, changed contract, acceptance conditions | Distinguish specified behavior from verified implementation. |
| Bug fix | Reproduction, cause, affected behavior, regression check | Say whether the original failure was reproduced. |
| Code health or refactor | Maintainability problem, preserved behavior, ownership or coupling improvement | Cite checks supporting behavior preservation; do not promise it without evidence. |
| Performance | Baseline/current measurements, input size, environment, method, relative change | State uncertainty, simulated conditions, or absence of a meaningful gain. |
| Security | Risk, affected guarantee, solution, regression checks | Avoid credentials and unnecessary exploit detail; distinguish mitigation from proof. |
| Testing | Gap, added scenarios, coverage or failure-path result | Describe scenarios rather than inventing a coverage percentage. |
| Documentation | Audience, corrected guidance, links or examples reviewed | Do not claim runtime verification for a text-only check. |
| Build, packaging, or tooling | Affected environments, reproducibility, installation or build checks | Name platforms actually exercised and those still untested. |
| Integration or migration | Cross-component effect, compatibility, transition and rollback conditions | Identify data or API assumptions and the checks that exercised them. |

If the project's PR style uses a kind icon, suitable optional title prefixes include `✨` feature, `🐛` bug fix, `🧹` code health, `⚡` performance, `🔒` security, `🧪` testing, `📝` documentation, and `🔧` build or tooling. Use the actual dominant change; an icon does not certify the work.

These compact labels may help where the project accepts emoji headings or bullets:

- 🎯 **What:** The actual or intended change.
- 💡 **Why:** The underlying need or rule.
- ✅ **Verification:** Commands, inspection, and outcomes actually observed.
- ✨ **Result:** The supported effect, including limitations.
- 📊 **Measured Improvement:** Baseline and current performance with method and environment, only when measured.
- ⚠️ **Risk** and 🛡️ **Solution:** Security impact and mitigation without sensitive details.
- 📊 **Coverage:** New scenarios or measured coverage with its source.

The supplied `array.frombytes()` / `array.tobytes()` / `array.byteswap()` example illustrates a performance report: say what changed in encode and decode, why little-endian portability matters, and qualify measurements from a simulated big-endian local script as such. Record the reported times and speedup only if the current task has those actual results; never reuse an example's numbers as fresh evidence. The `common.py` → `fs.py` example illustrates code health: explain the module ownership rule, cite the layout update and exact checks, and describe the architecture result without claiming behavior changed. For security and testing work, emphasize **Risk/Solution** or **Gap/Coverage** respectively while still reporting verification limits.

## Illustrative completed summaries

The following adapt the supplied examples as *format examples*, not evidence for the current project:

```markdown
- 🎯 **What:** Moved shared filesystem utilities from `common.py` into `fs.py` and updated the documented module owner.
- 💡 **Why:** The layout assigns each module a focused responsibility and disallows generic dumping grounds.
- ✅ **Verification:** Inspected layout links and references, then ran the relevant unit tests; include the actual command and result when reporting real work.
- ✨ **Result:** Filesystem utility ownership is explicit; behavior preservation remains bounded by the checks performed.
```

```markdown
- 🎯 **What:** Replaced per-item `struct` conversion with `array` byte operations and a byte swap for big-endian hosts.
- 💡 **Why:** The persisted values remain little-endian while avoiding slow per-item packing.
- 📊 **Measured Improvement:** The supplied example reports decode from 0.154 s to 0.008 s (roughly 18×) and encode from 0.415 s to 0.013 s (roughly 30×) for one million values in an ad-hoc simulated big-endian script. These rounded figures and simulated conditions belong only to that example.
- ✅ **Verification:** State the portability and round-trip checks actually run; the illustrative benchmark alone does not establish correctness.
```

For an optimization without a meaningful measured gain, say so near the beginning of its PR or completion summary and explain why the change is still proposed. For a security fix, describe the risk, mitigation, and remaining exposure; for a testing change, identify the gap and newly exercised scenarios without inventing a coverage percentage.
