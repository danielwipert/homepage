---
title: "New Paper: A new benchmark shows that AI agents are still bad at one of the..."
date: 2026-05-19
topics: ['research-notes']
excerpt: "New Paper: A new benchmark shows that AI agents are still bad at one of the hardest parts of real-world work Researchers from multiple institutions introduced SkillGenBench, a..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7462488944203423745"
published: true
---
New Paper: A new benchmark shows that AI agents are still bad at one of the hardest parts of real-world work

Researchers from multiple institutions introduced SkillGenBench, a benchmark that tests whether language models can generate deployable skills from raw materials like code repositories and technical documentation.

Most agent demos assume the skill already exists. The agent calls a tool, follows a workflow, or executes a known procedure. But in the real world, procedures are often buried inside repo structures, config files, documentation fragments, conventions, and implicit engineering logic.

SkillGenBench tests two modes:

🔹 Task-conditioned generation: the model knows the target task and generates a skill for it.  
🔹 Task-agnostic generation: the model has to build a reusable skill library before knowing what tasks will be asked of it later.

Across 187 tasks spanning code repositories and documentation, performance varied sharply depending on the method and backbone model.  
The biggest failure point was code repositories. Why? Because the procedure is not sitting there in plain English. It is distributed across folders, dependencies, config files, scripts, and project assumptions.

Even when models identify the right structural pieces, they often fail to convert them into executable procedures that pass strict verification. That is the key finding: this is not just a “better model” problem. It is a pipeline problem.

---For teams building agent systems, the implication is important: procedural knowledge extraction needs its own evaluation layer, separate from end-to-end task performance---

The hard part may not be teaching agents to use skills. The hard part may be generating reliable skills from messy real-world systems in the first place.

Paper: SkillGenBench: Benchmarking Skill Generation Pipelines for LLM Agents, Zhou et al.

https://lnkd.in/gc9w_QD7
