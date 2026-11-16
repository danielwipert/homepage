---
title: "New Paper: AI is getting better at finding scientific papers"
date: 2026-06-16
topics: ['research-notes']
excerpt: "New Paper: AI is getting better at finding scientific papers. It is still weak at deciding which papers actually count. That is the uncomfortable result from MetaSyn, a new..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7472657820644122625"
published: true
---
New Paper: AI is getting better at finding scientific papers. It is still weak at deciding which papers actually count.

That is the uncomfortable result from MetaSyn, a new benchmark from researchers at Tsinghua University. The dataset contains 442 expert-curated meta-analyses from Nature Portfolio journals, each paired with structured eligibility criteria, verified included studies, and hard negatives: papers that look relevant but fail the protocol.

The benchmark exposes a sharp divide. AI systems could retrieve as much as 90.9% of the relevant literature, but once they had to apply the full meta-analysis protocol, the best configuration recovered only 52.7% of the studies experts had included. That is not a search problem. It is a screening problem.

The failure is not ordinary search failure. The systems can often find the right scientific neighborhood. What they cannot reliably do is apply the inclusion logic that makes a meta-analysis trustworthy: the right population, the right intervention or exposure, the right comparator, the right outcome, the right study design. In other words, the bottleneck is screening.

This is exactly the kind of failure that should worry teams trying to automate evidence synthesis. A system can look competent because it retrieves plausible papers, cites familiar concepts, and writes a fluent review. But in a meta-analysis, plausibility is not enough. One paper can be topically close and still be protocol-ineligible.

For enterprise AI, healthcare AI, legal AI, policy research, and any workflow that depends on auditable evidence, the lesson is clear: retrieval is not the same as judgment.... I actually have been working on this problem for the last 8 months. Check out my CASDAM and BRAG frameworks.

Current AI systems may be useful assistants for evidence review. They should not be treated as replacements for expert screening in high-stakes synthesis.  
The risk is not just that the model misses a paper. The deeper risk is that it includes the wrong one with confidence.

Paper: “Benchmarking LLM Agents on Meta-Analysis Articles from Nature Portfolio”

Authors: Anzhe Xie, Weihang Su, Yujia Zhou, Yiqun Liu, Qingyao Ai

Link: https://lnkd.in/gjdKn6qZ
