---
title: "Most RAG systems have a big problem: they'll hand you a confidently wrong..."
date: 2026-05-28
topics: ['building-reliable-ai']
excerpt: "Most RAG systems have a big problem: they'll hand you a confidently wrong answer and no one has any idea they've done it. Quick refresher: RAG (retrieval-augmented generation)..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7465773619046944768"
published: true
---
Most RAG systems have a big problem: they'll hand you a confidently wrong answer and no one has any idea they've done it.

Quick refresher: RAG (retrieval-augmented generation) is the standard way we get a language model to answer questions about documents it wasn't trained on. You give it a pile of files, it retrieves the most relevant-looking pieces when a question comes in, and it writes an answer based on what it pulled. It's the backbone of most "chat with your documents" tools out there.

RAG is what makes LLMs actually useful. But RAG has a severe systemic flaw that you need to counter when creating your Gen AI systems.

Here's where the common RAG methods fail. Back in 2022, Netflix told everyone it had no plans to add advertisements to its streaming video platform. Then, of course, it launched ads. That kind of reversal happens constantly in corporate filings.

So say you've built a RAG chatbot over ten years of Netflix's financial documents, and someone asks a simple question: what's Netflix's stance on advertising?

RAG systems will do what they are trained to do: they will find the text chunk in the database of documents that looks most similar to the question and then send it to your LLM to write an answer. RAG will grab the 2022 "no Ads" statement, send it to your LLM, who assumes it is fact, and then you get an output that is totally false but sounds confident.

The model isn't broken when this happens. It's doing exactly what it was built to do:

- RAG retrieved the most relevant-looking text.
- The LLM wrote a fluent, well-cited answer based on the RAG evidence.
- At no point did the system ask whether that evidence was stale, restated later, or quietly reversed in a filing two years down the line.

The core issue is the last gap here. In casual use, a confidently wrong answer is mostly annoying. In financials, being confidently wrong is about the worst way an AI can fail because it doesn't look like a failure. A hallucination usually has a whiff of uncertainty to it. A stale fact reads as authoritative. The system sounds most sure of itself right when it's most wrong.

Standard RAG has no immune system. It trusts whatever it pulls back, full stop. So I built one that doesn't and called it BRAG (Boosted Retrieval-Augmented Generation)

Over the next few posts I want to walk through how it catches this kind of thing, starting with the design choice the whole system hangs on: two AI agents whose entire job is to disagree with the evidence before anyone gets an answer.

BRAG Overview: https://lnkd.in/gyWAwqBM
