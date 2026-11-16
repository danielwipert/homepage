---
title: "I don't remember when I started saying the model is not the system; it is a..."
date: 2026-10-19
topics: ['building-reliable-ai']
excerpt: "I don't remember when I started saying the model is not the system; it is a node within the system. It feels like a long time ago, but in the AI Era that could have been six..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7518047273801388032"
published: true
---
I don't remember when I started saying the model is not the system; it is a node within the system. It feels like a long time ago, but in the AI Era that could have been six months ago. This is being peddled now as harness engineering. I really dislike the term "harness," because it still centers the LLM. Yes, a jetliner is powered by jet engines (LLMs), but no one would mistake a single engine for a 787.

I think the better terminology is Applied AI using Compound AI Systems. Sure, not as catchy as Harness, but it actually makes sense. In the latest episode of me getting to say I was right, here is a new paper called JevAgentHarness from a group at the University of Illinois Urbana-Champaign, Princeton, and Google. The paper is a good starting point for building compound AI systems using a mixture of decision models, LLMs, and deterministic code:

1️⃣ Separate decisions from generation  
I am actually way stricter in my system building than they are in the paper. But the idea is simple. Use type 1 decision models at the start of the pipeline. Refine the inputs before you process anything. I would add: never let generation go unchecked.

2️⃣ Let the small model go first, not last.  
This takes some tweaking, but you let the decision models define the open moves and path. You need to be precise with the confidence level feedback loop. It's like one of those scales at the doctor's office. A little movement changes the impact a lot.

3️⃣ Fit the confidence gate to the actual work.  
If the conf gate is finicky, then you need to measure before you dial it in and turn it on. Run shadow mode, observe, then set the conf gate to the actual work: input, process, output.

4️⃣ Keep irreversible actions under stricter control.  
Ahem! This is where I am way more dogmatic, probably because my career has been in bridging digital reality to physical reality. You can't go back if you put the wrong item on the wrong ship. Box in the smaller models, guardrail the output severely. Leave the generation for LLMs.

5️⃣ Measure the system, not the component.  
A model that wins a static tool-choice benchmark may be worse inside a working agent. One wrong step changes the next state, and errors compound. Evaluate decisions in the live workflow, then monitor for drift as tools, policies, and task types change.

That is what “compound AI” should mean in practice: not piling models on top of one another, but assigning each component the work it can do reliably, cheaply, and safely.  
In the paper, a 4B decision model trained on the agent’s own trajectories cut costs by more than 80% and improved speed, without a material quality decline. But the deeper result is architectural: the model did not create the value alone. The real value comes from what you build around the model.

Paper: https://lnkd.in/gVTn2NAe
