---
title: BRAG
fullName: Boosted Retrieval Augmented Generation
summary: RAG with two skeptics that try to disprove every answer before you read it.
kicker: RETRIEVAL
tier: main
group: chorus
order: 3
status: shipped
chorus: true
stack: [Python, BGE-small, BM25, edgartools / XBRL, OpenRouter]
siteUrl: https://brag.aioperationsmanagement.ai/
repoUrl: https://github.com/danielwipert/cas.brag
stat: 10 YEARS
statLabel: OF NETFLIX FILINGS, CHECKED
fileName: BRAG.EXE
termValue: LIVE
related: [casdam, dossier]
---

## The problem

Standard retrieval-augmented generation finds a few passages that look relevant and writes an answer from them. If the passages are old, partial, or contradicted somewhere else in the record, the answer is confidently wrong.

Ask a typical RAG system whether Netflix planned to run ads, and it may tell you no. That was true, until 2022.

## What I built

BRAG puts two skeptics between retrieval and the answer. It was built and tested on ten years of Netflix SEC filings and earnings calls.

## How it works

1. **Plan the evidence.** Each question is broken into the pieces of evidence a good answer would need.
2. **Retrieve two ways.** Hybrid search (dense embeddings with BGE-small, plus BM25 keyword search) fills those slots.
3. **Try to disprove it.** A Verifier checks the draft against the evidence. A separate Refutation Agent goes looking for anything that contradicts it.
4. **Keep numbers separate.** Figures come through a deterministic channel straight from XBRL financial data, never from a model's memory.

## The result

Answers carry dated sources, disclose contradictions in the record, and come with a full audit trail. When the evidence doesn't clear the bar, BRAG says so instead of guessing. On the Netflix question, it finds the 2022 reversal.
