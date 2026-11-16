---
title: "\"A language model is never allowed to read a number\" - That's a rule I built..."
date: 2026-06-03
topics: ['building-reliable-ai']
excerpt: "\"A language model is never allowed to read a number\" That's a rule I built into BRAG that sounds almost too obvious until you do the opposite. Quick context if you're just..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7467953788109139968"
published: true
---
"A language model is never allowed to read a number" - That's a rule I built into BRAG that sounds almost too obvious until you do the opposite.

Quick context if you're just landing here: BRAG (Boosted Retrieval-Augmented Generation) is a system I built that answers questions over a decade of Netflix's financial filings, with guardrails that catch the confidently wrong answers normal RAG hands you.

The last few posts were about catching bad answers after they happen. This one's about preventing a whole category of them from ever starting.

Think about what you're actually asking when you point an LLM at a financial document and want Q2 2023 revenue. You're asking it to look at a dense table, find the right row, the right column, the right reporting period, and read a number off the page. LLMs are genuinely bad at exactly this. They transpose digits. They grab an adjacent cell. They pull a figure that was restated three quarters later and report it as if it were the original. None of that looks like an error in the output; it just looks like a number.

So in BRAG, financial figures don't come from the model at all. They come from XBRL, the machine-readable tagging the SEC already requires in every filing. The number is parsed directly from the source: It's the exact figure a human would see rendered in the filing, not a model's reading of it.

It can't be transposed, rounded, or hallucinated, because no model ever touches it. It carries its own reporting period, so a restated value can't quietly impersonate the original.

The LLM still does what it can do well. It reasons about what the question means, it explains the why behind a trend, and it composes the answer. But the moment a hard financial value is involved, that's handled by a deterministic path with no room to guess.

Gen AI is for language processing. Deterministic code is for math.

Next I want to show how BRAG proves any of this actually happened, the full audit trail it keeps of every retrieval, every check, every decision, so you can see exactly how an answer was built. More on that next.

Learn More about BRAG: https://lnkd.in/gyWAwqBM
