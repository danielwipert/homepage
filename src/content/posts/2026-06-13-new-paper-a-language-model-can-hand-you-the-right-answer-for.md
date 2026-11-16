---
title: "New Paper: A language model can hand you the right answer for the wrong reasons"
date: 2026-06-13
topics: ['research-notes']
excerpt: "New Paper: A language model can hand you the right answer for the wrong reasons. A new diagnostic from AI2 and Liquid AI is built to catch precisely that, and it does so..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7471573403628392448"
published: true
---
New Paper: A language model can hand you the right answer for the wrong reasons.

A new diagnostic from AI2 and Liquid AI is built to catch precisely that, and it does so without needing a single labeled answer to check against. The method, called operadic consistency, puts a deceptively simple question to any model: if you break a problem into parts, do the parts add back up to the same answer the model gave in one shot?

Asked "which country contains the capital of France," a model should answer France, and it should also conclude that the capital is Paris, that Paris sits in France, and therefore, again, France. When the direct answer and the rebuilt answer disagree, the reasoning is not holding together, whatever the headline answer happens to be.

That distinction is the point. Most confidence checks measure how much a model's answers wobble when you ask repeatedly. Operadic consistency measures something different: whether the model's own sub-conclusions are structurally coherent. It is a test of logic, not of luck.

The numbers are hard to ignore. Across twelve instruction-tuned models spanning 4 billion to 671 billion parameters, on four multi-hop question-answering datasets, the signal tracked accuracy closely: a Pearson correlation between 0.86 and 0.94. The incumbent technique, chain-of-thought self-consistency, slipped to around 0.45 on two of those datasets. The new check costs three inference calls per question.

For anyone building or auditing reasoning systems, the takeaway is unglamorous but useful: the cheapest gains in reliability may come from testing a model's internal consistency, not from sampling it more often. It is worth asking whether your evaluation stack examines how a model reaches an answer, not only whether it lands on one.

Paper: "Operadic consistency: a label-free signal for compositional reasoning failures in LLMs," Bottman et al.

https://lnkd.in/gghc2asd
