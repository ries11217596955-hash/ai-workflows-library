---
layout: base.njk
title: "AI for office work"
description: "Email, documents, tables, and routine office workflows with AI."
lang: en
translationKey: pillar-ai-office
---

# AI for office work

A hub page for routine office workflows: email, docs, tables, and action tracking.

## The office loop (repeatable)
1) Capture input (notes / email / file).
2) Normalize (clean text + extract facts).
3) Produce an output (email / memo / table).
4) Validate (quality checklist).
5) Store or send.

## High-value workflows

### 1) Email triage → replies
Use case: [Email assistant](/en/use-cases/email/)

**Prompt**
```text
You are my email assistant.
Goal: draft a reply.
Constraints: <tone, max length, must include points>.
Input email:
<PASTE>
Output: 2 reply variants + subject line.
```

### 2) Notes → action plan (table)
Use case: [Meeting → Action Plan](/en/use-cases/meeting-to-action-plan/)

**Prompt**
```text
Turn these notes into an action plan table.
Columns: Action | Owner | Due | Status | Notes
Notes:
<PASTE>
```

### 3) Document cleanup (format + structure)
**Prompt**
```text
Clean and restructure this document.
Rules:
- keep meaning
- remove repetition
- add headings where needed
Output: Markdown with headings + short summary.
Text:
<PASTE>
```

### 4) Table cleanup (data hygiene)
**Prompt**
```text
Clean this table data.
Do:
- normalize dates
- unify naming
- detect duplicates
Output:
1) cleaned table (same columns)
2) list of issues found
Table:
<PASTE>
```

## Quick templates

### Office memo
```text
Write an office memo.
Topic: <topic>.
Audience: <who>.
Sections: Context / Decision / Actions / Risks.
Keep it under <N> words.
```

### Meeting summary
```text
Summarize the meeting.
Output:
1) Summary (5 bullets)
2) Decisions
3) Action items (table)
Notes:
<PASTE>
```

## Guardrails
- Never invent dates, names, or numbers.
- If something is unknown, label it as [CHECK].
- Run [Quality checklist](/en/tools/quality-checklist/) before sending.
