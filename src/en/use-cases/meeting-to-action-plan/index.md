---
layout: base.njk
title: "Meeting notes → Action plan"
description: "Turn messy meeting notes into a clear action plan with owners, deadlines, and next steps."
lang: en
translationKey: usecase-meeting-to-action-plan
navUseCases: "Use cases"
navTools: "Tools"
navTemplates: "Templates"
---

# Meeting notes → Action plan

Goal: turn meeting notes (or a transcript) into a **clean action plan**: decisions, tasks, owners, deadlines, and risks.

## Input (copy & fill)
- Meeting topic:
- Date/time:
- Participants (names/roles):
- Notes or transcript (paste below):
- Constraints: (deadline, budget, tools, “must/never”, etc.)
- Output style: (strict / friendly / executive)
- Deadline timezone: (e.g., UTC+4)

## Prompt (paste into AI)
Role: you are an operations manager.  
Task: convert the notes into an action plan. Do **not** invent facts. If something is unclear, add it as a question in the “Open questions” section.

Output format (in this exact order):

1) **Summary (5 bullets max)**
2) **Decisions made**
   - Decision → rationale (if stated) → impact
3) **Action plan table**
   - Task | Owner | Due date | Priority (H/M/L) | Dependencies | Evidence/Link (if any)
4) **Risks & blockers**
   - Risk/blocker → why it matters → mitigation → owner
5) **Open questions (must be answered)**
6) **Next meeting agenda (10–20 min)**
7) **Follow-up message draft** (short email/Slack message with tasks & deadlines)

Notes to follow:
- If due dates are not stated, write “TBD” and list it again in Open questions.
- If owners are not stated, write “Unassigned” and propose a role, not a person.

## Quality check (fast)
- Are all tasks actionable (verb + object)?
- Is every task assigned to an owner (or “Unassigned”)?
- Are deadlines present (or clearly marked TBD)?
- Do risks have a mitigation and an owner?
- No invented facts?
