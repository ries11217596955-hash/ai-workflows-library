---
layout: base.njk
title: "Prompt contract"
description: "A compact request contract for consistent AI outputs."
lang: en
translationKey: tool-prompt-contract
---

# Prompt contract

A “contract” is a stable structure for requests. It reduces drift and improves repeatability.

## The contract (copy-paste)
```text
Task: <what you want>.
Context: <why / background>.
Inputs: <facts you provide>.
Constraints: <privacy, tone, length, must-include>.
Output format: <sections/table/list>.
Quality rules:
- do not invent facts
- label unknowns as [CHECK]
- keep key terms unchanged: <terms>
```

## Minimal vs Pro

### Minimal (fast)
```text
Task: <one sentence>.
Constraints: <tone/length>.
Output: <bullets or table>.
```

### Pro (controlled)
```text
Task:
Context:
Inputs:
Constraints:
Output:
1) Draft
2) Assumptions (if any)
3) QA pass (issues + fixes)
```

## Common failures (and fixes)
- Vague task → add “Output format”.
- Invented facts → add “do not invent facts”.
- Too long → add max length.
