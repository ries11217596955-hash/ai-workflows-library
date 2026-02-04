---
layout: base.njk
title: "Build a comparison table"
description: "Compare options with criteria and a recommendation."
lang: en
translationKey: usecase-compare-table
siteTagline: "Practical AI use cases & templates"
navUseCases: "Use cases"
navTools: "Tools"
navTemplates: "Templates"
footerLine1: "This site provides workflow examples and templates. Always verify outputs before using them."
footerLine2: "Affiliate links (if any) will be disclosed on-page. © 2026"
---

# Build a comparison table

**Goal:** Make a table that helps decide between options (tools, services, plans).

## What you need (inputs)
- Options list (3–10)
- Your criteria (5–12) or ask AI to propose
- Constraints (budget, must-have)

## Copy‑paste prompt templates
**Prompt 1 — Table + scoring**

```text
Create a comparison table.
Options:
<<<OPTIONS>>>
Criteria:
<<<CRITERIA>>>
Output:
1) Table: Criteria x Options with short notes
2) Scoring (0–5) per criterion
3) Recommendation with reasons
Constraints:
<<<CONSTRAINTS>>>
```

**Prompt 2 — Criteria proposal**

```text
Propose 10 selection criteria for choosing among these options. Keep criteria measurable.
Options:
<<<OPTIONS>>>
```

**Prompt 3 — Decision memo**

```text
Write a 1-page decision memo: context, options, evaluation, decision, risks.
Use this table:
<<<TABLE>>>
```


## Quality check (30 seconds)
- Criteria match your real constraints
- Notes are factual
- Recommendation explains tradeoffs

## Common mistakes
- Too many vague criteria
- No tradeoffs explained
- Scores without reasons

## Next
- [Tool selector matrix](/en/tools/tool-selector-matrix/)
- [AI for automation](/en/pillars/ai-automation/)

