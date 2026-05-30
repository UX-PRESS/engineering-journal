# Article Templates

The source templates live under `src/content/*/template.mdx`. Duplicate the relevant template inside its category folder when drafting a new article.

## Content Folders

- `src/content/incidents/` for incident reports and live-operational summaries.
- `src/content/engineering/` for architecture notes, implementation writeups, migrations, and engineering decisions.
- `src/content/security/` for authorized defensive analysis, secure design reviews, and ethical research.
- `src/content/labs/` for controlled experiments, prototypes, and benchmark notes.
- `src/content/research/` for applied research, measurements, and literature-informed analysis.
- `src/content/post-mortems/` for blameless incident reviews and corrective action records.

## Required Base Frontmatter

```yaml
---
title: "Article title"
description: "One-sentence summary."
date: "YYYY-MM-DD"
author: "Author name"
category: "CATEGORY"
tags:
  - tag-one
status: "Draft"
readingTime: "0 min read"
---
```

## Category-Specific Fields

Incidents:

```yaml
severity: "SEV-0 | SEV-1 | SEV-2 | SEV-3"
impact: "Brief impact summary."
affectedSystems:
  - "system-name"
```

Engineering:

```yaml
projectStatus: "Proposal | In progress | Shipped | Archived"
stack:
  - "Next.js"
domain: "Platform | Product | Infrastructure | Developer Experience"
```

Security:

```yaml
securityDomain: "Application Security | Cloud Security | Identity | Supply Chain"
labOnly: true
defensiveFocus: "Detection, hardening, verification, or secure design."
```

Labs:

```yaml
tools:
  - "tool-name"
environment: "Local | Staging | Simulated | Authorized lab"
difficulty: "Introductory | Intermediate | Advanced"
```

Research:

```yaml
researchArea: "Distributed Systems | Runtime | Observability | Developer Experience"
hypothesis: "A clear, testable claim or question."
references:
  - "Reference title or URL"
```

Post-mortems:

```yaml
incidentDate: "YYYY-MM-DD"
duration: "0h 00m"
rootCause: "Confirmed root cause summary."
correctiveActions:
  - "Corrective action placeholder"
```

## Drafting Flow

1. Copy the matching `template.mdx` into the appropriate category folder.
2. Rename the file with a stable slug, such as `api-failover-retry-amplification.mdx`.
3. Fill in frontmatter before drafting body content.
4. Keep comments in place while drafting, then remove comments before publication.
5. Review against `docs/content-guidelines.md` before merging.
