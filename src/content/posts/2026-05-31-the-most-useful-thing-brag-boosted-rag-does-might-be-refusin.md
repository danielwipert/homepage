---
title: "The most useful thing BRAG (Boosted RAG) does might be refusing to answer you"
date: 2026-05-31
topics: ['building-reliable-ai']
excerpt: "The most useful thing BRAG (Boosted RAG) does might be refusing to answer you. Check out how... Quick context if you're just joining: BRAG (Boosted Retrieval-Augmented..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7466873619931971584"
published: true
---
The most useful thing BRAG (Boosted RAG) does might be refusing to answer you. Check out how...

Quick context if you're just joining: BRAG (Boosted Retrieval-Augmented Generation) is a system I built that does what normal RAG does (answer questions over a pile of documents) but with guardrails that catch the confidently wrong answers regular RAG hands you without blinking.

Last post I covered those guardrails: two agents whose job is to disagree with the retrieved evidence before it reaches you. Which raises the obvious question: what happens when they actually find a problem? Normal RAG has one move: answer anyway. BRAG has four, and picking the right one is most of the work.

The trap with almost every AI tool is that it treats every question as equally answerable. Rock-solid evidence vs thin and contradictory evidence, doesn't matter, you get the same confident tone either way. That uniform overconfidence is exactly what makes a wrong answer dangerous in most Gen AI systems. So BRAG steps down through levels based on how good the evidence actually is:

- Normal — evidence is clean, adversarial agents are satisfied, you get a direct answer.

- Partial — there's a real answer, but something's incomplete or contested, so it answers and flags what it couldn't pin down.

- Clarification / Hard Halt — the question's too vague to answer responsibly, or it's outside what the documents cover, so BRAG asks you to narrow it or stops the process cold rather than bluffing.

That last one matters most. Ask my Netflix-trained system about Disney's subscriber numbers, and it won't scrape together a guess from loosely related text. BRAG tells you that's out of scope and just stops. AI that knows the edges of its own knowledge beats one that's articulate everywhere, including where it's wrong.

Most systems are built to always have an answer, because a confident answer feels more useful than a careful one. BRAG bets the opposite: in anything high-stakes, "here's what I can't tell you" is a feature.

Next: where the actual numbers come from, because letting a language model read a revenue figure off a page is a trap, and there's a cleaner way.

Learn more about BRAG: https://lnkd.in/gyWAwqBM
