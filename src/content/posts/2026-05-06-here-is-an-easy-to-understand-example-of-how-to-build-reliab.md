---
title: "Here is an easy to understand example of how to build reliable AI systems"
date: 2026-05-06
topics: ['building-reliable-ai']
excerpt: "Here is an easy to understand example of how to build reliable AI systems. Multi-models, closed-loop verification... As Gen AI becomes the norm in all business, I think it is..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7457594246921879552"
published: true
---
Here is an easy to understand example of how to build reliable AI systems. Multi-models, closed-loop verification...

As Gen AI becomes the norm in all business, I think it is important to build these systems with guardrails. Sure, some tasks are fine to just one shot prompt. Most are not.

If you are working with data analysis, and you need it be accurate, you absolutely can not rely on even the most advanced models from Open AI and Anthropic. These are open loop prompts. They can never check their work, which means hallucinations will happen.

Here is what you can do to make sure your AI systems will enhance your business instead of destabilize it:

- It is fine to have an LLM to do data analysis, but make sure you have another model act like an adversary, checking all the work, trying to find errors.

- Create a FactList from the original document that will act like a fact checker on the LLM output. If any output goes against the FactList, the LLM output is tossed out. This reduces the possibility of any hallucination.

- Once the LLM output has been fact check and then tested by another model working as an adversary, run another check via Python, a deterministic final check.

This is how you build reliable AI systems. LLM outputs should NEVER be trusted. They can do the work, but it must be checked. Just like all human work needs to be check.

Check out my CASDAM Agentic AI framework for data analysis here: https://lnkd.in/divZs_Xn
