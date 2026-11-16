---
title: "Google’s new paper on agentic coding is worth reading because it is not..."
date: 2026-06-25
topics: ['research-notes']
excerpt: "Google’s new paper on agentic coding is worth reading because it is not really just about coding... It is about what happens when AI moves from isolated assistance into..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7475960064076328960"
published: true
---
Google’s new paper on agentic coding is worth reading because it is not really just about coding...

It is about what happens when AI moves from isolated assistance into production work. The paper draws a useful distinction between “vibe coding” and agentic engineering.

Vibe coding is fast, loose, and useful for exploration. Agentic engineering is structured: specifications, tests, evals, guardrails, observability, and human judgment around the model.

Here are some points where I totally agree with this paper:

- Scale changes the economics

A prototype can hide cost, risk, and review burden. A production workflow cannot. Once AI touches more users, repositories, tools, tickets, workflows, or deployment paths, small frictions become repeated operating costs.

- The access price is not the total cost

A subscription or API fee is only the visible layer. The real cost can include context design, debugging, code review, test generation, evals, security remediation, maintenance, and the labor required to understand what the agent actually produced.

- Measurement becomes management

If a team cannot see token usage, tool calls, agent trajectories, eval failures, latency, drift, and downstream rework, it cannot manage the system with any seriousness. Observability is not just an engineering feature. It is economic infrastructure.

- The harness matters as much as the model

The paper’s strongest idea is the “harness”: the tools, memory, orchestration, sandboxes, hooks, rules, evals, and observability around the model. This is where much of the real leverage sits. A better model may help. But a better operating system around the model can change reliability, cost, and control.

- Technical superiority is not economic superiority

A frontier model may be necessary for hard reasoning, architecture, or ambiguous tasks. But it is wasteful to use the most expensive model for everything. The better system routes work: larger models where judgment matters, smaller models where the task is routine, bounded, or easily verified.

The future of AI software development will not be decided only by model capability. It will be decided by whether teams can turn model capability into governed, observable, economically rational production systems. Vibe coding shows what is possible. Agentic engineering shows what can actually scale.

#AgenticAI #SoftwareEngineering #AIEngineering #AIProductivity #EnterpriseAI

Paper: “The New SDLC With Vibe Coding” by Addy Osmani, Shubham Saboo, and Sokratis Kartakis.

https://lnkd.in/gNk7QpFr
