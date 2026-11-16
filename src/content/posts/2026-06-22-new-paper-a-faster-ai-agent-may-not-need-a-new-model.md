---
title: "New Paper: A faster AI agent may not need a new model"
date: 2026-06-22
topics: ['research-notes']
excerpt: "New Paper: A faster AI agent may not need a new model. It may need a smaller memory footprint. Researchers from AMD, UCLA, and Purdue have introduced UltraQuant, a 4-bit KV..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7474640891089969153"
published: true
---
New Paper: A faster AI agent may not need a new model. It may need a smaller memory footprint.

Researchers from AMD, UCLA, and Purdue have introduced UltraQuant, a 4-bit KV cache method designed for long, multi-turn agent workflows. The idea is straightforward: compress the model’s working memory so more conversation state can stay resident on the GPU, instead of being repeatedly evicted and recomputed.

On a benchmark simulating 32 concurrent chat sessions, UltraQuant reduced median time to first token by 3.47x in later conversation rounds compared with an 8-bit KV baseline. Across all rounds, it improved TTFT by 2.3x and raised output throughput by 1.63x.

That is a meaningful systems result, but not a universal speedup. The gains show up when the accumulated context exceeds the resident cache capacity of the 8-bit baseline. In shorter conversations, or in lower-pressure serving regimes, the advantage largely disappears.

The accuracy story is also uneven: UltraQuant is stable on some benchmarks, but shows double-digit regressions on AIME25 for certain models. That makes this less of a “free lunch” than a new infrastructure lever.

For teams building agentic systems, the implication is practical. KV cache compression is becoming part of the serving stack, alongside model routing, batching, retrieval design, and context management. It can improve latency and throughput when long-running agents are memory-bound. But it also introduces an accuracy tradeoff that needs workload-specific evaluation.

This is the pattern we keep seeing as AI moves from demos into operations: the frontier model is only one part of the product. The real performance comes from the system around it. Worth reading if you are hitting memory limits with long-context agents.

Paper: “UltraQuant: 4-bit KV Caching for Context-Heavy Agents”  
Inesh Chakrabarti, David Limpus, Aditi Ghai Rana, Bowen Bao, Spandan Tiwari, Thiago Crepaldi, Ashish Sirasao

arXiv: https://lnkd.in/gi9_5Wbu
