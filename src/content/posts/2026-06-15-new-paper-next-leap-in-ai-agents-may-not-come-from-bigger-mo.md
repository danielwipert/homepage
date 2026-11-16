---
title: "New Paper: Next leap in AI agents may not come from bigger models"
date: 2026-06-15
topics: ['research-notes']
excerpt: "New Paper: Next leap in AI agents may not come from bigger models. It may come from a better harness. A new paper introduces HarnessX, a system for turning the runtime around..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7472286788623978496"
published: true
---
New Paper: Next leap in AI agents may not come from bigger models. It may come from a better harness.

A new paper introduces HarnessX, a system for turning the runtime around an AI model into something composable, adaptive, and evolvable.  
That runtime matters more than it sounds.

An agent is not just a model. It is the model plus the surrounding machinery: prompts, tools, memory, control flow, safety rules, tracing, evaluators, and feedback loops. In most agent systems today, that machinery is still hand-built, brittle, and relatively static.

HarnessX treats it as an engineering object. The system breaks the harness into typed components, then uses execution traces to evolve better configurations over time. Failed tool calls, bad retrieval paths, looping behavior, weak planning, reward hacking, and regressions are not just logged. They become evidence for improving the scaffold itself.

The results are notable: across GAIA, ALFWorld, WebShop, and SWE-bench Verified. HarnessX reports an average gain of 14.5 percentage points, with the largest improvement reaching 44 points. The gains were often largest for weaker models, suggesting that better scaffolding can close gaps that raw model capability alone does not.

The model is not the product. The system around the model is the product.

For companies building AI agents, this points to a different optimization frontier. Instead of reflexively reaching for the most expensive frontier model, the question becomes: can the task be improved through better orchestration, better tools, better memory, better evaluation, or better runtime control?

In the demo era, the question was: “Which model is smartest?” In the systems era, the better question is: “What harness makes this model reliable enough to use?”

Paper: “HarnessX: A Composable, Adaptive, and Evolvable Agent Harness Foundry” -- Authors: Darwin Agent Team

Link: https://lnkd.in/gedDpFUV
