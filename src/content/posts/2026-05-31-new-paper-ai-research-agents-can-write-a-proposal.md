---
title: "New Paper: AI research agents can write a proposal"
date: 2026-05-31
topics: ['research-notes']
excerpt: "New Paper: AI research agents can write a proposal. They still cannot reliably tell when one is bad. Researchers at the University of Maryland built SoundnessBench, a benchmark..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7466841485200687104"
published: true
---
New Paper: AI research agents can write a proposal. They still cannot reliably tell when one is bad.

Researchers at the University of Maryland built SoundnessBench, a benchmark of 1,099 ML research proposals reconstructed from ICLR submissions, each paired with reviewer-derived soundness labels. The team extracted near-verbatim hypothesis-and-experiment pairings while removing experimental results and acceptance signals.

The result is important, but a bit narrow. SoundnessBench covers ML proposals from ICLR 2022–2026, not science as a whole. And reviewer soundness scores are useful but imperfect proxies for methodological validity, not final judgments of research quality.

But the practical takeaway is hard to ignore. If you are building autonomous research systems, do not treat LLMs as standalone first-pass reviewers. Under standard prompting, models produced a 74% false-positive rate, meaning most flawed proposals still passed. When prompted more aggressively, high-soundness recall collapsed to 36%, meaning the system became too harsh and started rejecting good ideas.

That is the core failure mode: too permissive, and bad science gets through. Too strict, and good science gets killed early.

For now, AI research agents may help structure, summarize, and pressure-test proposals. But proposal triage still needs human judgment, especially when the cost of being wrong is wasted compute, wasted time, or a misleading result dressed up as discovery.

"Across 12 frontier LLMs, we find a pervasive optimism bias: under standard prompting, models frequently rate low-soundness proposals as sound, while aggressive prompting largely shifts errors from false positives to false negatives"

Paper: SoundnessBench: Can Your AI Scientist Really Tell Good Research Ideas from Bad Ones?, Ho et al.

https://lnkd.in/gSKgFkSu
