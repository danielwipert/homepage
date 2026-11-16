---
title: "The final stop on my CASDAM Agentic AI framework is the finished output, an..."
date: 2026-05-06
topics: ['building-reliable-ai']
excerpt: "The final stop on my CASDAM Agentic AI framework is the finished output, an AI generated report ready for the board room... Stage 4 (last post) had two AIs and Python verifying..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7457810693774475264"
published: true
---
The final stop on my CASDAM Agentic AI framework is the finished output, an AI generated report ready for the board room...

Stage 4 (last post) had two AIs and Python verifying every claim against an immutable FactList. Stage 5 takes everything verified upstream and renders it into a two-page PDF and HTML dashboard. No LLM. No prompts. Jinja2 templates. WeasyPrint. Done.

This is where most Gen AI reporting systems break the chain. They govern Stages 1–4, then hand final composition back to an LLM to "make it punchy." That model then paraphrases a green KPI into a yellow one, or softens a degradation disclosure into a footnote.

I designed Stage 5 to make that impossible:

🔹 No model. The entire stage is deterministic Python. There is nothing to hallucinate.

🔹 A REQUIRED_SECTIONS check runs before the PDF is emitted. Executive headline, four domain blocks, verification footer — missing one? Halt.

🔹 The verification footer is constitutional. Stage 5 cannot omit a degradation disclosure. If Stage 2 reconciliation fell below 95%, the footer says so. If Stage 4's verifier agreement hit 100%, the footer says so.

🔹 Stage 5 cannot edit, summarize, or "polish" upstream content. It assembles. The numbers in the report are byte-for-byte the numbers from the FactList.

The part most people miss: Stage 5 is still a Viable System. All seven governance layers (operational, coordination, runtime, audit, telemetry, constitutional, interface) without a single LLM in it.

System viability is a property of governance structure, not model benchmarks. System over models, this the only way to make Gen AI actually work for business and beyond.

Probabilistic generation upstream. Deterministic assembly downstream. That's the pipeline.

See the live dashboard here: https://lnkd.in/dnX7ctEw
