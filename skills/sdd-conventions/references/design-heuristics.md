# Design heuristics

Use these as review prompts when comparing a design, implementation approach, or refactor. Explain the project-specific consequence behind a recommendation; a named principle alone is not evidence.

- **SOLID:** In object-oriented designs, apply the principles that fit the actual types and extension needs. Ask whether responsibilities are cohesive, real extensions avoid changing unrelated consumers, subtypes preserve expectations, interfaces avoid unnecessary dependencies, and high-level policy depends on stable contracts. Do not introduce an interface, inheritance hierarchy, or extension point for a hypothetical consumer.
- **DRY:** Give a decision, rule, or contract one authoritative representation. Consolidate repeated code when it expresses the same knowledge and changes for the same reason. Similar-looking behavior with distinct owners or change drivers may remain separate.
- **KISS:** Choose the simplest approach that meets the agreed behavior, constraints, testability, and evolution needs. Avoid speculative indirection and configuration, while retaining boundaries needed for actual consumers and verification.

When heuristics point in different directions, prefer the design with the clearest evidenced responsibilities and smallest justified complexity. Record the specific tradeoff; do not force mechanical compliance with an acronym.
