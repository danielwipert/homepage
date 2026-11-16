---
title: "New Paper: IBM researchers taught language models to orchestrate multi-step..."
date: 2026-06-03
topics: ['research-notes']
excerpt: "New Paper: IBM researchers taught language models to orchestrate multi-step tool use with a compact, programmatic reward, no judge models, no massive datasets. Their new..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7467946613232160768"
published: true
---
New Paper: IBM researchers taught language models to orchestrate multi-step tool use with a compact, programmatic reward, no judge models, no massive datasets.

Their new framework, PROVE, trains models in live, stateful environments using a five-component reward that includes an adaptive efficiency penalty.

The results: four models across two architecture families improved by up to 10.2 points on multi-step tool-use benchmarks. Training data? Just 13,517 examples with identical reward hyperparameters across every model.

Two reward components did most of the work: an adaptive budget that allows more calls for complex tasks and a tool-name selection bonus. An ablation study showed that removing either one caused a roughly nine-point aggregate performance drop.

The takeaway: the main bottleneck isn't more data. It's smarter, programmatic incentives that directly counter the verbosity problem baked into tool-use models.

For teams building agentic systems, the implication is that effective tool-use training may need far less data than you'd assume, provided the reward function is carefully decomposed. It also calls into question the need for large-scale LLM-as-judge setups for this specific problem.

Worth asking your team: do your evaluation metrics inadvertently reward excess tool calls? Worth reading if you're scaling multi-step AI agents.

Paper: Synthesize and Reward — Reinforcement Learning for Multi-Step Tool Use in Live Environments, Abdelaziz et al.

https://lnkd.in/e57uw2qH
