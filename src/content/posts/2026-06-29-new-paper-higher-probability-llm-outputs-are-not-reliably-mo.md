---
title: "New Paper: Higher-probability LLM outputs are not reliably more correct"
date: 2026-06-29
topics: ['research-notes']
excerpt: "New Paper: Higher-probability LLM outputs are not reliably more correct. That sounds like a small technical point. It is not. A lot of decoding strategies quietly assume that..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7477176752176308224"
published: true
---
New Paper: Higher-probability LLM outputs are not reliably more correct.

That sounds like a small technical point. It is not. A lot of decoding strategies quietly assume that if a model assigns more probability to an answer, the answer is probably better.

A new paper by Johannes Zenn and Jonas Geiping tests that assumption across decoding methods, models, and benchmarks. The result is subtle but important: sequence probability can predict correctness when comparing different prompts inside a fixed dataset. But that signal often breaks when you use it to choose a decoding method, tune a hyperparameter, or select among repeated answers to the same prompt.

Math is the friendliest case. On tasks like MATH500, probability and correctness can align strongly. Instruction following is messier. On IFEval, the relationship can even turn negative, especially for base models that confuse fluent continuation with actual compliance.

For engineering leaders, the lesson is plain: there is no free lunch in decoding. Best-of-N, beam search, power sampling, or probability-seeking hyperparameter choices may produce more likely sequences. They do not automatically produce better answers.

The practical move is boring and correct: validate decoding choices on the task you actually ship.

Paper: “When are likely answers right? On Sequence Probability and Correctness in LLMs”

https://lnkd.in/gNJfTAge
