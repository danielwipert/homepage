---
title: Dossier
fullName: Closed-loop document intelligence
summary: Lock the facts. Three models summarize on their own. Any contradiction fails the run.
kicker: PIPELINE
tier: main
group: chorus
order: 1
status: shipped
chorus: true
stack: [Python, Claude Haiku 4.5, Qwen2.5-72B, Llama 3.3 70B, DeepSeek-V3]
siteUrl: https://danielwipert.github.io/chorus-ai-dossier/
repoUrl: https://github.com/danielwipert/chorus-ai-dossier
stat: "0.0"
statLabel: CONTRADICTION TOLERANCE
fileName: DOSSIER.EXE
termValue: LIVE
related: [casdam]
---

## The problem

Ask a language model to summarize a document and you get something fluent. Whether it's faithful is another question. For a compliance file, a contract, or a board pack, fluent and wrong is worse than no summary at all.

## What I built

Dossier is a closed-loop, multi-model document intelligence pipeline. A PDF goes in. What comes out is a dossier in which every claim traces back to a span of the source, every gap is labeled as a gap, and the system stops visibly when it can't be sure.

## How it works

1. **Extract and lock.** The pipeline pulls atomic facts out of the document and locks them into a fact list. Nothing downstream can change it.
2. **Summarize independently.** Three models from different vendors each write their own summary. Different makers fail in different ways, so they're harder to fool in the same direction.
3. **Check against the facts.** Every summary is tested against the locked fact list. The tolerance for contradiction is zero: one contradicted fact and that summary fails.
4. **Assemble with receipts.** The final dossier cites a source span for every claim and marks what the document doesn't say.

The pipeline runs in seven stages, at temperature zero, with no agent autonomy. The control flow lives in code, not in a model's judgment.

## The result

A summary you can audit line by line, or an honest halt. Its sister project, [CASDAM](/work/casdam/), applies the same closed-loop pattern to operating data.
