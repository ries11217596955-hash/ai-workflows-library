---
layout: base.njk
title: "Quality checklist"
description: "A quick checklist to validate AI output before you use it."
lang: en
translationKey: tool-quality-checklist
---

# Quality checklist

Use this checklist to reduce mistakes and “confident wrong answers”.

## 60-second check (fast)
1) **Goal match**: does it answer the task you asked?
2) **No invention**: dates/names/numbers are not invented.
3) **Assumptions labeled**: unknowns are marked clearly.
4) **Format OK**: requested structure (table/sections) is respected.
5) **Actionability**: next steps are concrete (if requested).

## 5-minute check (safer)

### A) Factual integrity
- Any claims that need verification are labeled **[CHECK]**.
- No hidden “new facts” were introduced.
- Definitions match the context (no term drift).

### B) Completeness
- All constraints were respected (length, tone, required points).
- Missing inputs are listed as questions or assumptions.

### C) Risk & privacy
- Sensitive information is not exposed.
- The output avoids overconfident legal/medical/financial claims.

### D) Clarity
- Short sentences, minimal jargon.
- Headings reflect content.

## Copy-paste prompt (QA pass)
```text
Run a quality pass on the output below.
Rules:
- do not add new facts
- flag [CHECK] items that require verification
Output:
1) Issues list (severity: High/Med/Low)
2) Proposed safe rewrites
3) Questions for missing inputs
Text:
<PASTE>
```

## When to stop and re-ask
- The model is guessing critical details.
- The answer depends on missing data.
- The format is wrong twice.
