---
title: "I just finished building a new version of Dossier called Earnings Call"
date: 2026-03-25
topics: ['building-reliable-ai']
excerpt: "I just finished building a new version of Dossier called Earnings Call. It is a Closed-Loop, Multi-LLM Pipeline that transforms corporate earnings calls into verified intel..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7442412979121278976"
published: true
---
I just finished building a new version of Dossier called Earnings Call. It is a Closed-Loop, Multi-LLM Pipeline that transforms corporate earnings calls into verified intel briefs with in-depth analysis from historical reports, industry data, and business theory.

Every factual claim in the final report traces back through a chain: claim → verified fact → verbatim quote → confirmed in transcript. If any link breaks, the system catches it and halts. Not sometimes. Every single time, which makes it verifiable and trustworthy.

Here's what makes the architecture different: Three model families, zero shared blind spots. Generation, verification, and holistic review each use a different model family (Llama, Mistral, DeepSeek).

Why? Because if the same model generates an answer and checks its own work, it shares the same biases and training gaps. The errors it makes are exactly the errors it can't see. Structural diversity in the verification pipeline is how you actually catch hallucinations, not by asking a model "are you sure?"

Before any analysis begins, the system extracts every atomic fact from the transcript, each one carrying a character-exact verbatim quote and speaker attribution. No downstream agent can add, modify, or remove facts. Every analytical claim must cite back to specific fact IDs. The verification gate then mechanically checks: does this fact actually support this claim? Yes, no, or contradicted.

Governance gates between every stage. Nothing advances without passing a checkpoint. Gate 1a validates the FactList itself (below 80% quote fidelity = hard halt). Gate 2 verifies every claim in every analytical section against the FactList. The holistic verifier (a third model family) then checks cross-section consistency. If it detects investment advice language? Immediate halt, no report released.

Four levels of graceful degradation instead of silent failure. When confidence drops, the system doesn't push through and hope for the best. It narrows scope: retry the failing section (Level 1), omit it with a visible notice (Level 2), or halt the entire pipeline (Level 3).

Every report ships with a Verification Notes section that discloses grounding scores, model disagreements, omitted sections, and the known limitations of the verification process itself. The system observes its own observation mechanisms, and tells you where its blind spots are.

This isn't a wrapper around a single LLM call. It's a closed-loop control system grounded in cybernetic theory (Beer's Viable System Model, Ashby's Law of Requisite Variety, von Foerster's Second-Order Cybernetics) adapted for the specific failure modes of AI: hallucination, blind spot propagation, and silent degradation.

The full architecture is here https://lnkd.in/gE_6JKsG

If you're building AI systems where trust actually matters, I'd love to connect.
