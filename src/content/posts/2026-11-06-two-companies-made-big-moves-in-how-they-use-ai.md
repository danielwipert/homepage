---
title: "Two companies made big moves in how they use AI"
date: 2026-11-06
topics: ['ai-economics']
excerpt: "Two companies made big moves in how they use AI. Apple has further restricted usage across all teams due to increasing costs. Revolut has decided to self-host their AI and cut..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7524275016436457472"
published: true
---
Two companies made big moves in how they use AI. Apple has further restricted usage across all teams due to increasing costs. Revolut has decided to self-host their AI and cut out the middle men. Both moves are two sides of the same coin.

Here is exactly what is happening at Apple:

- The daily limit for AI usage has dropped from $300 to $200 on the engineering team. A drop to $100/day is possible as well.

- Workers outside engineering already have a $100 daily cap that could be lowered to $25/day.

Similar AI usage spend caps have been put in place at Microsoft, Uber, Atlassian, etc. I think it is very easy to read this as a simple cost-cutting measure, but I would argue it is part of a much broader and deeper shift within the AI industry.

AI is a finite resource. It requires GPU inference. Whereas SaaS can scale without a mirrored increase in cost, AI costs tend to be intertwined with usage. More usage, more tokens, more inference. This is the brick wall companies are running into right now. The more you push AI usage, the more it is going to cost you. Without a clear value-add output, all you have is a ledger going in the wrong direction, very fast.

In a similar move, Revolut shifted roughly 2,000 engineers away from Anthropic’s Claude Code and OpenAI’s Codex, replacing them with a self-hosted instance of Zhipu's open-weight GLM model (specifically GLM 5.3). Revolut found that under their previous setup, individual engineers were burning through $1,000 to $10,000 a month in API usage. The financial friction was actually slowing development down, as developers began hoarding their token budgets only for the hardest tasks rather than letting the AI handle routine workflows.

By bringing the model in-house and running GLM 5.3 on their own Nvidia B200 GPUs, Revolut claims they have cut AI coding costs by roughly 90% by driving down their blended cost down to about $.30 per million tokens. They also claim this move has improved engineering lead times by 70%, as developers are now free to use the AI for all the surrounding work without worrying about an unpredictable usage bill.

Both of these moves point in the same direction. AI cannot be a free-for-all. All AI implementations and usage need to have structure, guardrails, and permissions. Whether you are putting in daily spend caps or self-hosting models, the end goal is the same. You must create economic boundaries for your AI. One boundary for cost, and another for value. Cost is the easy part; value is much harder.

https://lnkd.in/gFejGxDC
