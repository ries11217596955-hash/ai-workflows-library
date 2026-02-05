---
layout: base.njk
title: "AI for writing"
description: "Patterns and prompts for drafting, rewriting, and editing."
lang: en
translationKey: pillar-ai-writing
---

# AI for writing

This page is a hub: practical patterns + copy-paste prompts.

## What you will get
- A simple workflow for drafting and editing.
- 7 reusable patterns you can apply to emails, docs, and posts.
- Copy-paste prompts (minimal + pro).

## The 5-step workflow (stable)
1) Define **purpose** and **audience**.
2) Provide **inputs** (facts, links, constraints).
3) Ask for a **structure** first (outline).
4) Generate the draft.
5) Run a **quality pass** (see: [Quality checklist](/en/tools/quality-checklist/)).

## Core patterns

### 1) Outline first (then write)
**Prompt**
```text
Create an outline for: <topic>.
Audience: <who>.
Goal: <what outcome>.
Constraints: <length, tone, must-include points>.
Output: a numbered outline (H2/H3).
```

### 2) Rewrite with constraints
**Prompt**
```text
Rewrite the text below.
Keep meaning. Improve clarity.
Constraints: <tone, length, level>.
Keep terms unchanged: <term list>.
Text:
<PASTE>
```

### 3) Edit for correctness (fact guard)
**Prompt**
```text
Review the text for possible factual errors or ambiguous claims.
Mark:
- [CHECK] needs verification
- [OK] likely correct
Then propose safer rewrites that avoid unverified claims.
Text:
<PASTE>
```

### 4) Style transfer (without changing meaning)
**Prompt**
```text
Rewrite in the style: <formal / friendly / direct / technical>.
Do not change meaning or add new facts.
Text:
<PASTE>
```

### 5) Summarize for decision
**Prompt**
```text
Summarize this content for a decision maker.
Output:
1) 5 bullet summary
2) Risks / unknowns
3) Recommended next step (1)
Text:
<PASTE>
```

### 6) Turn notes into a structured doc
**Prompt**
```text
Turn these notes into a structured document.
Format:
- Title
- Context
- Key points
- Open questions
- Action list (Owner / Due / Status)
Notes:
<PASTE>
```

### 7) Generate alternatives (A/B/C)
**Prompt**
```text
Create 3 variants of the same message:
A) short and direct
B) neutral and formal
C) friendly and persuasive
Constraints: <max length, must include X>.
Draft idea:
<PASTE>
```

## Starter packs (copy-paste)

### Minimal request
```text
Task: <one sentence>.
Audience: <who>.
Constraints: <tone/length/must-include>.
Output format: <bullets / table / sections>.
```

### Pro request (better control)
```text
Task: <task>.
Context: <background>.
Inputs: <facts/data you provide>.
Constraints: <privacy, compliance, tone, length>.
Output:
1) Draft
2) Assumptions (if any)
3) Quality checks performed
```

## Related use cases
- [Meeting → Follow-up Email](/en/use-cases/meeting-to-follow-up-email/)
- [Meeting → Action Plan](/en/use-cases/meeting-to-action-plan/)
- [Email assistant](/en/use-cases/email/)
