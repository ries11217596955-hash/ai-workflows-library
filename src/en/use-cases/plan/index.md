---
layout: base.njk
title: "Turn notes into a plan"
description: "Convert messy notes into steps, owners, and deadlines."
lang: en
translationKey: usecase-plan
siteTagline: "Practical AI use cases & templates"
navUseCases: "Use cases"
navTools: "Tools"
navTemplates: "Templates"
footerLine1: "This site provides workflow examples and templates. Always verify outputs before using them."
footerLine2: "Affiliate links (if any) will be disclosed on-page. © 2026"
---

# Turn notes into a plan

**Goal:** Create an actionable plan from raw notes.

## What you need (inputs)
- Raw notes
- Deadline (if any)
- Constraints (budget/tools/people)

## Copy‑paste prompt templates
**Prompt 1 — Plan from notes**

```text
Turn these notes into a plan.
Output:
- Goal (1 sentence)
- Assumptions
- Steps (numbered)
- Owners (roles) and deadlines (if unknown, propose)
- Risks and mitigations
Notes:
<<<NOTES>>>
```

**Prompt 2 — RACI-lite**

```text
Create a RACI-lite table for this plan: Task | Responsible | Consulted | Informed.
Plan:
<<<PLAN>>>
```

**Prompt 3 — Weekly status format**

```text
Convert this plan into a weekly status template with KPI, blockers, next week priorities.
Plan:
<<<PLAN>>>
```


## Quality check (30 seconds)
- Steps are specific
- Each step has an owner
- Risks are realistic
- Assumptions are visible

## Common mistakes
- Too many steps without owners
- No deadlines at all
- No risk section

## Next
- [AI for office work](/en/pillars/ai-office/)
- [Draft a SOP/policy](/en/use-cases/sop-policy/)

