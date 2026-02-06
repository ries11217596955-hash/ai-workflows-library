---
layout: base.njk
title: "Meeting → follow-up email"
description: "Turn meeting notes into a short follow-up email and next steps."
lang: en
translationKey: usecase-meeting-followup
siteTagline: "Practical AI use cases & templates"
navUseCases: "Use cases"
navTools: "Tools"
navTemplates: "Templates"
footerLine1: "This site provides workflow examples and templates. Always verify outputs before using them."
footerLine2: "Affiliate links (if any) will be disclosed on-page. © 2026"
---

# Meeting → follow-up email

Turn meeting notes into a clear follow-up email + next steps.

## Copy-paste prompt

```text
You are my email assistant.

Task: write a follow-up email after a meeting.

Requirements:
- Tone: neutral, professional.
- Keep it short and actionable.
- Do not invent names, dates, or decisions.
- If something is unclear, mark it as [CHECK].

Output:
1) Subject line
2) Email body (5–12 sentences)
3) Next steps (5 bullet points, each with owner + due date if available; otherwise [CHECK])

Meeting notes:
<<<PASTE NOTES HERE>>>
