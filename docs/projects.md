# Project inventory

What goes on the Work page. Last updated 2026-11-11.

## Main: Research & Writing

### AI Operations Management (textbook)
- **Status:** Building. 3 of 15 chapters published free on the web, with PDFs. Print and ebook in preparation.
- **What it is:** A founding textbook. AI is a metered operating resource, not a software subscription: cost follows every use, so organizations need a discipline (sourcing, metering, attribution, planning, routing, value) to manage it. Every claim is cited, formalized, or cut.
- **For:** Leaders, students in a course, and general readers.
- **Label:** Standalone (no Chorus label).
- **Links:** [textbook.aioperationsmanagement.ai](https://textbook.aioperationsmanagement.ai/)

### Applied AI Case Study Library
- **Status:** Shipped. 22 published cases.
- **What it is:** An open, evidence-first record of AI in practice, across law, work, safety, healthcare, public services, and infrastructure. Every claim traced to evidence, conclusions graded A to C and causally labeled, revisions tracked in Git.
- **How it's made:** All research by Dan. Primary sources only, heavily vetted.
- **Label:** Standalone, companion to the textbook.
- **Links:** [casestudy.aioperationsmanagement.ai](https://casestudy.aioperationsmanagement.ai/) · [repo](https://github.com/danielwipert/ai.case.study)

## Main: Chorus AI Systems

### Dossier
- **Status:** Shipped (V1).
- **What it is:** A closed-loop, multi-model document intelligence pipeline. Extracts atomic facts from a PDF and locks them, has three models from different vendors summarize independently, and fails any summary that contradicts a single fact. Every claim traces to a source span; it halts visibly when it can't be sure.
- **Relation:** Sister project to CASDAM.
- **Stack:** Python, Claude Haiku 4.5, Qwen2.5-72B, Llama 3.3 70B, DeepSeek-V3.
- **Links:** [site](https://danielwipert.github.io/chorus-ai-dossier/) · [repo](https://github.com/danielwipert/chorus-ai-dossier)

### CASDAM (Chorus AI Systems Data Analytics Manager)
- **Status:** Shipped.
- **What it is:** AI that governs itself. A 5-stage, multi-model pipeline that turns weekly ecommerce ops CSVs (Shopify, FedEx, DHL, 3PL) into a verified leadership report. Python recomputes every KPI, every claim is checked against an immutable fact list, and failures halt or are disclosed. Built on Beer's Viable System Model. About $0.05 and 2 minutes per run.
- **Also in this case study:** the Earnings Call Dossier, a second run of the pattern (97% source grounding, 0 contradictions).
- **Stack:** Python, Pydantic, asyncio, OpenRouter.
- **Links:** [casdam.aioperationsmanagement.ai](https://casdam.aioperationsmanagement.ai/) · [repo](https://github.com/danielwipert/cas.dam) · [Earnings Call Dossier repo](https://github.com/danielwipert/dossier-earnings-call)

### BRAG (Boosted Retrieval Augmented Generation)
- **Status:** Shipped.
- **What it is:** RAG with two skeptics. Plans each question into evidence slots, retrieves with hybrid search, then a Verifier and a Refutation Agent try to disprove the draft before it's written. Numbers come through a separate deterministic channel. Tested on ten years of Netflix filings and earnings calls.
- **Lead example:** Normal RAG says Netflix never planned ads; BRAG finds the 2022 reversal.
- **Stack:** Python, BGE-small + BM25, edgartools/XBRL, OpenRouter.
- **Links:** [brag.aioperationsmanagement.ai](https://brag.aioperationsmanagement.ai/) · [repo](https://github.com/danielwipert/cas.brag)

### Jev vs. the Frontier
- **Status:** Shipped (research note, September 2026).
- **What it is:** Can a small specialized model do business sorting work as well as a frontier model? On Banking77 triage, Jev matched Claude Sonnet 5 on automated decisions (91.4% vs 91.0%) at one-fiftieth of the cost. Pre-registered rules, locked test set, $16 total.
- **Next:** Phase 2 on real emails.
- **Links:** [site](https://danielwipert.github.io/jev.sorter/) · [repo](https://github.com/danielwipert/jev.sorter)

## Minor

### OpenRouter Weekly
- **Status:** Shipped. Updated every Monday.
- **What it is:** Who's winning the AI model race, in charts. Token share by lab, country, model family, open vs closed weights, price tier, and task, built on a hand-checked model registry.
- **Phase 3 idea:** its card shows this week's open-weight share, pulled automatically.
- **Links:** [site](https://danielwipert.github.io/openrouter.chart/) · [repo](https://github.com/danielwipert/openrouter.chart)

### U.S. Metro Economic Health Report
- **Status:** Shipped.
- **What it is:** Grades the 50 largest US metros 0 to 100 on labor demand, unemployment, wages, cost of living, permits, housing, and office activity, with a labor signal that checks whether job growth is real demand or a workforce squeeze.
- **Links:** [site](https://danielwipert.github.io/city.economic.health/index.html)

## Off the site for now

| Project | Why |
|---|---|
| TokenTicker | Never built |
| AI Research Radar | Work in progress |
| Job Stream | Work in progress |
| Working America Cost of Living Tracker | Work in progress |
| AI Supply Chain map | Work in progress |
| n8n automations, task manager, political forecasting, Prairie Community Bank case study, Leucothea Consulting | Cut |
| Film, music, and creative builds | Going to a separate site |
