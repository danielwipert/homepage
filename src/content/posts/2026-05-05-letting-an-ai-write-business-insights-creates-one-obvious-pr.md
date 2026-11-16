---
title: "Letting an AI write business insights creates one obvious problem: it will..."
date: 2026-05-05
topics: ['building-reliable-ai']
excerpt: "Letting an AI write business insights creates one obvious problem: it will say things that aren't true. Here is how I solved that problem... In Stage 3 of my CASDAM Agentic AI..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7457449420607918080"
published: true
---
Letting an AI write business insights creates one obvious problem: it will say things that aren't true. Here is how I solved that problem...

In Stage 3 of my CASDAM Agentic AI framework , every published number got a unique FACT_ID and was locked into an immutable FactList. Python-verified. Auditable. (my last post covered that.)

Stage 4 is where the AI does what a human analyst would do. It writes insights. It flags anomalies. It proposes actions.

This is exactly where most Gen AI reports fall apart. The model moves from "report the numbers" to "tell me what they mean." That's where the hallucinations sneak in. A made-up correlation. A confident-sounding cause. A recommendation that no number actually supports.

I solved it with two AIs working against each other:

🔹 DeepSeek V3 generates the insights. Every claim must cite specific FACT_IDs from the sealed FactList. No citation, no claim.

🔹 Qwen2.5 then independently verifies every one. Different model family. Different training data. Different architecture. Two models from the same family share the same blind spots. Two from different families don't. So when they agree, the agreement actually means something.

🔹 But neither AI gets the final word. Python runs the hard check: does every cited FACT_ID actually exist in the FactList? If a claim cites FACT_011 and the FactList only has 10 entries, the claim is stripped. No hedging. No "the AI thinks maybe."

🔹 Stripped claims don't get softened or footnoted. They get DELETED. Logged internally for review, never surfaced in the report.

🔹 The part most people miss: I track the verifier agreement rate. If DeepSeek and Qwen agree 100% on three consecutive runs, the system raises an ALER, not a celebration. Perfect agreement means the verifier has stopped doing its job. Disagreement is healthy. Disagreement means the system is working.

The result is an insight section that structurally cannot say a single thing the FactList doesn't already prove.

If the AI wants to claim "carrier costs are rising" — it must cite a cost KPI. If it wants to flag "delivery times are slipping" — it must cite the on-time delivery rate.

No FACT_ID? Stripped. FACT_ID doesn't exist? Stripped. Verifier disagrees? Stripped. You need multiple models and deterministic checks, otherwise you are just one hallucination from communicating bad data.

Probabilistic generation. Deterministic guardrails. Every Gen AI system writing business content should be doing this.

Stage 1 was data collection.  
Stage 2 was data trust.  
Stage 3 built the FactList.  
Stage 4 uses FactList to generate grounded, verifiable insights.  
Stage 5 is where we present the data and insights in a robust report.

Check out the CASDAM framework here: https://lnkd.in/divZs_Xn
