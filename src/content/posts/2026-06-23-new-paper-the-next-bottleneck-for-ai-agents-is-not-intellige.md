---
title: "New Paper: The next bottleneck for AI agents is not intelligence"
date: 2026-06-23
topics: ['research-notes']
excerpt: "New Paper: The next bottleneck for AI agents is not intelligence. It is orchestration. The first wave of agentic AI has been sold as a story about capability. Give the model..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7475003922932228097"
published: true
---
New Paper: The next bottleneck for AI agents is not intelligence. It is orchestration.

The first wave of agentic AI has been sold as a story about capability. Give the model tools, connect it to systems, and let it act. But the harder problem may be less glamorous: before an agent can use a tool, it has to understand what the work is made of.

A new paper, “Compositional Skill Routing for LLM Agents: Decompose, Retrieve, and Compose,” gets at this problem directly. The author studies what happens when an AI agent has access to a large library of external skills, but the user’s request requires several of them in sequence.

This is closer to how actual business work happens. A useful request is rarely a single tool call. It is usually a chain: pull the data, transform it, summarize it, send it somewhere, update a record, notify a team.

The paper introduces SKILLWEAVER, a system that decomposes a request into smaller sub-tasks, retrieves the right skill for each one, and then composes those skills into an executable plan.

The striking result is where the system fails. On COMPSKILLBENCH, a benchmark built from 300 compositional queries and 2,209 real MCP skills, standard decomposition got the exact number of steps right only 51.0% of the time. With Skill-Aware Decomposition, a feedback loop that uses retrieved tool hints to refine the plan, that rose to 67.7%.

The retrieval improvement was much smaller. That is the lesson. If an agent divides the work incorrectly, it is already searching for the wrong tool. A better retriever can help, but it cannot fully repair a bad understanding of the task.

For companies building agents, this points to a larger shift. The advantage will not necessarily belong to whoever connects the most tools. Large tool libraries may even make the problem harder. The real advantage will belong to systems that can turn ambiguous human requests into the right sequence of executable steps.

In the demo era, it was enough to ask whether the model could use a tool. In the systems era, the better question is whether the agent knows what work has to happen before the tool is chosen. The future of agents is not just more tools. It is better orchestration.

Paper: Compositional Skill Routing for LLM Agents: Decompose, Retrieve, and Compose  
Author: Xueping Gao

https://lnkd.in/gmikyeDk
