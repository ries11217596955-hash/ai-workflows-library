---
title: Meeting → Follow-up Email
---
Turn raw notes (or a transcript) into a clean follow-up email plus a stable action list.
## Inputs
- Meeting notes or transcript
- Attendees (names + roles if useful)
- Decisions made
- Actions (owner, due date, dependencies)
## Output (contract)
1) Email subject  
2) Email body (summary + decisions + action list)  
3) Action list in a small table (Owner / Action / Due / Notes)
## Steps
1) Normalize notes: decisions vs actions vs open questions.  
2) Extract actions with owners and dates (missing → **[ASSUMPTION]**).  
3) Draft the email in a neutral tone.  
4) Run the [Quality checklist](/en/tools/quality-checklist/).  
5) Ship.
## Prompt pack
Paste your notes below the prompt.
**PROMPT**
You are an operations assistant. Convert the meeting notes into:
A) a follow-up email, and
B) an action table.
Rules:
- If a key field is missing (owner/date), label it **[ASSUMPTION]** and keep the item.
- Do not invent facts. Keep decisions separate from actions.
- Use this output format exactly:
### Subject
...
### Email
...
### Action table
| Owner | Action | Due | Notes |
|---|---|---|---|
### Verified vs Assumed
- Verified: ...
- Assumed: ...
## Example notes
(Replace with your notes.)
- Decision: ...
- Action: ...
