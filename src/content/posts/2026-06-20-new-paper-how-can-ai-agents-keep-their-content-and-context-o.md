---
title: "New Paper: How can AI Agents keep their content and context organized as the..."
date: 2026-06-20
topics: ['research-notes']
excerpt: "New Paper: How can AI Agents keep their content and context organized as the information they pull begins to pile up? That is the problem taken up in ScaffoldAgent:..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7473962115482034176"
published: true
---
New Paper: How can AI Agents keep their content and context organized as the information they pull begins to pile up?

That is the problem taken up in ScaffoldAgent: Utility-Guided Dynamic Outline Optimization for Open-Ended Deep Research, a new paper from researchers at Peking University and collaborators. It focuses on open-ended deep research: tasks where an AI system must retrieve information over multiple rounds, organize what it finds, and produce a coherent, cited report.

The central claim is deceptively simple. In long-form research, the outline is not merely a pre-writing convenience. It is the operating structure of the system. Deep research agents face a problem familiar to anyone who has written a serious report. The more evidence you gather, the more the original structure begins to strain. Sections overlap. Subtopics drift. Some branches become too broad, while others become redundant. The paper calls this “scaffold drift”: the outline does not collapse; it quietly degrades.

ScaffoldAgent treats the outline as a dynamic object rather than a fixed plan. It updates the report scaffold through three operations: expansion when a section is too broad, contraction when branches become redundant, and revision when a node is weakly supported or misaligned with the evidence.  
The key is utility.

ScaffoldAgent estimates whether an outline change improves retrieval, strengthens structure, and supports better trial generation. It evaluates the outline not as a set of headings, but as an instrument for producing better work.

The results are meaningful. On DeepResearch Bench, ScaffoldAgent reached 44.70 RACE Overall with Qwen3-32B and 48.27 with DeepSeek-V3.2. On DeepResearch Gym, it achieved the highest average score, 75.83.

For enterprise AI, the lesson is broader than this architecture. Much of the current conversation treats intelligence as a property of the model: use a stronger model, give it more context, and connect it to more tools. ScaffoldAgent points to a different conclusion.

In complex work, capability depends just as much on the control structure around the model. That matters for AI systems built for research, analysis, compliance, market intelligence, due diligence, or strategy work. The hard part is rarely generating fluent prose. The hard part is maintaining durable structure as information accumulates.

The frontier model may provide the language and reasoning. But the scaffold determines whether the work holds together.

Paper: ScaffoldAgent: Utility-Guided Dynamic Outline Optimization for Open-Ended Deep Research

https://lnkd.in/ge3jBeg2
