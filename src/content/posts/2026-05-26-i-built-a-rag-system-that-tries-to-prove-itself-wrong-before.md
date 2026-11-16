---
title: "I built a RAG system that tries to prove itself wrong before it answers"
date: 2026-05-26
topics: ['building-reliable-ai']
excerpt: "I built a RAG system that tries to prove itself wrong before it answers. It's called BRAG (Boosted Retrieval-Augmented Generation), and here's the problem it solves: Normal RAG..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7465024056472264704"
published: true
---
I built a RAG system that tries to prove itself wrong before it answers.

It's called BRAG (Boosted Retrieval-Augmented Generation), and here's the problem it solves: Normal RAG has a trust problem. It retrieves the most similar passage, hands it to an LLM, and whatever it pulls, it trusts. That works for a static product manual. It breaks the moment your corpus changes over time or contradicts itself.

Here's a real example from the project. Ask a normal RAG system: "Did Netflix ever say it had no plans to add ads?"

It returns the top cosine-similarity match — a 2017 earnings call — and confidently answers: "No. Netflix has stated that not having advertising is an important strategic differentiator." That's wrong. Netflix reversed that position in 2022.

BRAG catches this because every confident answer is gated by two LLM agents whose only job is to disagree with the evidence, a Verifier and a Refutation Agent.

The Refutation Agent runs a "later_reversal" strategy, finds the 2022 announcement, and forces the system to disclose the contradiction before the answer goes out.

What reaches the reader is either correct or honest about what's missing. Never a confident hallucination.

I tested it on 10 years of Netflix's public financial reporting (~120 filings and earnings call transcripts), a corpus where stale facts, contradictions, and reversed positions appear constantly.

Over the next month, I'll break down the six principles behind the design.

https://lnkd.in/gyWAwqBM
