# Content Guidelines

This publication is for practical engineering writing: incident analysis, system design, defensive security research, lab notes, and applied research. Content should be useful to engineers without exposing private systems, confidential data, secrets, or unsafe instructions.

## Editorial Principles

- Write for working engineers who need clear context, trade-offs, and operational detail.
- Prefer precise claims over broad lessons.
- Separate facts, hypotheses, and opinions.
- Use concrete dates, durations, systems, and metrics when approved for publication.
- Keep the tone professional, blameless, and focused on learning.

## Frontmatter

Every MDX article should include:

```yaml
---
title: "Article title"
description: "One-sentence summary."
date: "YYYY-MM-DD"
author: "Author name"
category: "ENGINEERING"
tags:
  - tag-one
status: "Draft"
readingTime: "0 min read"
---
```

Use uppercase category values that match the publication UI: `INCIDENT`, `ENGINEERING`, `SECURITY`, `LABS`, `RESEARCH`, and `POST-MORTEM`.

## Safety And Privacy

- Do not publish secrets, tokens, credentials, private hostnames, customer data, or confidential vendor details.
- Do not include real company confidential data unless it has been explicitly approved for publication.
- Redact identifiers before writing examples, logs, metrics, traces, or screenshots.
- Keep security content limited to authorized labs, defensive analysis, secure design, detection, hardening, and ethical research.
- Do not publish offensive security instructions, exploit chains, persistence methods, evasion steps, or guidance for unauthorized access.

## Writing Structure

- Start with a concise summary of what the reader will learn.
- Give enough system context to make the analysis understandable.
- Explain decisions and trade-offs, not just outcomes.
- Include operational evidence when available.
- End with next steps, corrective actions, or practical implications.

## Review Checklist

- [ ] Frontmatter is complete and valid.
- [ ] The article has a clear audience and category.
- [ ] Claims are supported by evidence or framed as hypotheses.
- [ ] Sensitive details are removed or generalized.
- [ ] Security content is defensive, authorized, and ethical.
- [ ] Follow-up actions include owners or clear next steps when appropriate.
