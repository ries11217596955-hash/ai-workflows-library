---
---
title: Quality Checklist
---

A lightweight, repeatable checklist to validate any AI workflow output (text, plan, document, script, dataset) before you ship it.

## When to use
Use this before publishing, sending to a client/team, or saving as a “template / reusable asset”.

## Quality gates
### A) Input clarity
- [ ] Goal is explicit (what “good” looks like).
- [ ] Audience and context are clear.
- [ ] Constraints are stated (format, length, tone, scope).
- [ ] Required sources/data are provided (or explicitly “none”).

### B) Output contract
- [ ] Output matches the requested format (headings, list types, file naming).
- [ ] All requested parts are present (no missing sections).
- [ ] Scope is respected (no extra unrelated content).
- [ ] Assumptions are explicitly marked (if any).

### C) Structure & consistency
- [ ] One idea per section; no duplicates.
- [ ] Terminology is consistent (same term = same meaning).
- [ ] Numbering is stable (no accidental auto-number drift).
- [ ] Tables/lists are readable and aligned with intent.

### D) Factuality & sources (if facts are present)
- [ ] Facts are either common knowledge or supported by citations/links.
- [ ] Dates, numbers, names are verified against sources.
- [ ] No overconfident claims when data is missing.

### E) Safety & compliance
- [ ] No sensitive personal data (PII) is included.
- [ ] No confidential client/internal info is revealed.
- [ ] No instructions that enable harm or policy violations.

### F) Release readiness (for reusable assets)
- [ ] Title and short description are present.
- [ ] Version/Status is stated (e.g., MVP / v0.1).
- [ ] Cross-links work (Tools ↔ Pillars ↔ Use cases).
- [ ] EN/RU parity exists (for MVP scope pages).

## Common failure modes
- Missing a requested section or quietly changing the format.
- Mixing “assumptions” as if they were facts.
- Link rot: relative links break after route changes.
- Parity drift: EN page updated but RU mirror left behind.
- Overloading the page with “how-to” instead of a clear contract.

## Definition of Done
- All **A–C** checks are ✅.
- If facts exist, **D** is ✅.
- If public-facing, **E** is ✅.
- If it’s a reusable page/template, **F** is ✅.
