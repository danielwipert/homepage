---
title: "In the span of three months, we have transitioned from loops to harnesses to..."
date: 2026-09-02
topics: ['research-notes', 'building-reliable-ai']
excerpt: "In the span of three months, we have transitioned from loops to harnesses to now... Systems. This new paper helps shift us towards Applied AI, where the model becomes a part of..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7500764854161428480"
published: true
---
In the span of three months, we have transitioned from loops to harnesses to now... Systems. This new paper helps shift us towards Applied AI, where the model becomes a part of a system instead of the system itself.

This paper helps establish a working path toward more stable, safe, and scalable Gen AI systems via a new take on memory management.

1.) Solve the Memento Problem

I posted about the Google WikiSkill paper earlier this week. This paper attempts to solve the same general issue, AI Amensia. LLMs are trained on large sets of data, but that data is old and stale by the time you engage with the model. Any new data arrives into their purview via the context window, which is limited. Think of the context window as RAM. It starts up fresh when you boot your computer, it gets wiped clean when you turn it off. That is the context window, in simplified terms. AI can not scale until we solve this Memento Problem.

This paper creates a context memory manager called Scroll. Scroll stores every interaction between you and the LLM. It stores this information and then allows for recall. All conclusions can be traced back to the Scroll knowledge base. This doesn't totally solve the Memento problem of AI Amensia, but it is a step in the right direction. The AI does not remember everything itself. The system remembers everything for it and gives it a way to recover the right evidence when needed.

- Separate the Language vs Math

This is the true paradigm shift we need. LLMs are language processors. They are semantic translators, which makes them brilliant. But they are not calculators. The system in this paper separates interpretation from calculation. The AI decides what the user means, which evidence matters, and what calculation is needed. Code then performs that calculation consistently. This does not eliminate mistakes, but it makes them easier to locate: either the AI framed the question incorrectly, selected the wrong evidence, or the computation itself was wrong.

Watch this space closely over the rest of the year. I think the more interesting builds will start to quarantine LLMs and surround them with deterministic old-school guardrails. Quarantine the LLM to what it does best, language processing, and leave the rest to Python.

- Prompts are Views, Not Memory Managers

Today most Gen AI systems still try to solve every problem by putting more information into the prompt. Scroll reverses that approach. The complete history remains outside the model, while the prompt contains only the evidence needed for the current task.

That matters because more context does not automatically produce better reasoning. Large prompts cost more, introduce more noise, and become harder for the model to use reliably. That is the larger shift this paper represents: away from prompt engineering and toward actual systems engineering.

#ArtificialIntelligence #GenerativeAI #AIAgents #AIEngineering #AppliedAI

https://lnkd.in/gKWuBkA3
