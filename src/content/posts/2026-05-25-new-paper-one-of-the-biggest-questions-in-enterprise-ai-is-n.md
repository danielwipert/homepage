---
title: "New Paper: One of the biggest questions in enterprise AI is not whether..."
date: 2026-05-25
topics: ['research-notes']
excerpt: "New Paper: One of the biggest questions in enterprise AI is not whether agents can act. It is whether they can act consistently. Researchers at Microsoft and Tsinghua..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7464663473403371520"
published: true
---
New Paper: One of the biggest questions in enterprise AI is not whether agents can act. It is whether they can act consistently.

Researchers at Microsoft and Tsinghua University developed SkillOpt, a method for improving agent behavior by optimizing the “skill document” that sits outside the model.

Instead of fine-tuning weights, the system improves the written procedural instructions an agent uses to perform a task. The idea is simple but powerful: treat process knowledge as something that can be tested, edited, validated, and reused.

SkillOpt uses a frontier model to propose small add, delete, or replace edits to a skill document based on rollout results. It keeps only the edits that improve performance on a held-out validation set. The deployed model itself stays frozen.

That matters for AI leaders because it points to a cheaper and more governable path for agent improvement. In the paper, SkillOpt improved no-skill accuracy by +23.5 points in direct chat, with similar gains inside Codex and Claude Code execution environments.

The final skill documents were compact, usually 300 to 2,000 tokens, and often built from only a handful of validated edits. Across six benchmarks and seven target models, SkillOpt was best or tied-best across all 52 evaluated configurations.

The operational lesson is larger than the benchmark. Many companies are still treating agent performance as a model-selection problem. Bigger model. Better model. New fine-tune. New vendor. SkillOpt suggests a different frame: agent performance may depend just as much on the quality of the procedural layer around the model.

For business teams, this is a much more usable idea. Domain expertise does not have to disappear into model weights. It can live in a written artifact that can be reviewed, versioned, tested, governed, and transferred across models or execution environments.

For AI leaders, the question becomes: Before you retrain the model, have you actually trained the process?

Paper: SkillOpt: Executive Strategy for Self-Evolving Agent Skills, Yang et al. https://lnkd.in/gP4r3q53
