---
title: "New Paper: New technique for shrinking LLMs, called SUBFIT, makes them..."
date: 2026-06-02
topics: ['research-notes']
excerpt: "New Paper: New technique for shrinking LLMs, called SUBFIT, makes them smaller while holding onto more of what they could do before... Shrinking a model (\"compression\") usually..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7467595577971765248"
published: true
---
New Paper: New technique for shrinking LLMs, called SUBFIT, makes them smaller while holding onto more of what they could do before...

Shrinking a model ("compression") usually means cutting it down in big chunks, removing whole layers at a time. SUBFIT, developed at the University of Trento, works at a finer grain: it removes the model's smaller internal components one at a time, and for each piece it cuts, it installs a lightweight stand-in that approximates the work that piece was doing. It builds those stand-ins from a small sample of data, with no retraining required.

The payoff shows up in the numbers. When SUBFIT strips out a quarter of the model, the result still performs at 84.6% of the full model's accuracy, compared with 81.6% for the best existing method. A few points may not sound like much, but at deployment scale it's the difference between a model that holds up and one that visibly degrades.

The catch is that those stand-ins aren't free: each one adds a bit of size back. So the real question for any team is what you're actually optimizing for. If your hard limit is total model size, the extra stand-ins may not be worth it. But if you care about getting the most capability per unit of memory, SUBFIT keeps more of the model intact for roughly the same footprint.

Worth reading if you're evaluating structured compression for production.

Paper: From Layers to Submodules: Rethinking Granularity in Replacement-Based LLM Compression, Cunegatti et al.

https://lnkd.in/g44n-7Qk
