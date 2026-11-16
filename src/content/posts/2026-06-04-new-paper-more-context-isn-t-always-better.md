---
title: "New Paper: More context isn't always better"
date: 2026-06-04
topics: ['research-notes']
excerpt: "New Paper: More context isn't always better. Sometimes it's worse... A simple change to how AI agents pass work to each other made them both faster and more accurate. The..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7468433547272339456"
published: true
---
New Paper: More context isn't always better. Sometimes it's worse...

A simple change to how AI agents pass work to each other made them both faster and more accurate. The speedup was expected. The accuracy gain was not. Here's how it happened:

The usual setup is a relay: Agent 1 writes its full answer, hands it to Agent 2, and so on. Latency stacks with every handoff.

Researchers from Zhejiang University and HKUST built StreamMA, which forwards each reasoning step the moment it's generated instead of waiting for the complete response. Downstream agents start working immediately

When a model tackles a multi-step problem, it doesn't emit the answer in one shot. It "shows its work," generating a chain of intermediate reasoning steps, one after another, over time. Step 1, then step 2, then step 3, and so on. That sequence matters for how you wire agents together.

The solution offered here is called Streaming (which is really just parallelism), which cuts down the wait time for the next runner to take the data. Think of Serial as baton-passing. This is like runners running multiple races at once. That overlap is called pipeline parallelism, and it's where the speedup comes from. Same total work, less wall-clock time, because nobody's standing around idle.

Across eight reasoning benchmarks (using Claude Opus 4.6 and GPT-5.4), it beat standard relay execution by 7.3 percentage points on average while cutting latency through pipeline parallelism. The accuracy gain is the most fascinating result.

Reasoning quality isn't uniform across a chain. Early steps tend to be reliable; later ones tend to degrade. Streaming lets the next agent build on the trustworthy early steps and skip the error-prone tail. Relay forces every agent to swallow the whole response, including the bad after taste of the previous agent. Like if a runner started to fade at their end of their lap.

So the win isn't a trick. It's structural: don't propagate your least reliable output downstream.

If you're building agent pipelines: It's a protocol-level win, separate from model scaling — you don't need a bigger model to capture it.  
Less idle time, and lower compute when KV-cache reuse is on the table.  
Most valuable for long reasoning chains where step quality decays.

Paper: Streaming Communication in Multi-Agent Reasoning — Yang et al.

https://lnkd.in/gvxzFG82
