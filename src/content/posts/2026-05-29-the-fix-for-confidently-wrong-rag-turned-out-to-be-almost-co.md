---
title: "The fix for confidently wrong RAG turned out to be almost counterintuitive:..."
date: 2026-05-29
topics: ['building-reliable-ai']
excerpt: "The fix for confidently wrong RAG turned out to be almost counterintuitive: instead of trying to make the system more sure of its answers, I built two AI agents whose entire..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7466120026404646912"
published: true
---
The fix for confidently wrong RAG turned out to be almost counterintuitive: instead of trying to make the system more sure of its answers, I built two AI agents whose entire job is to doubt them.

Last post I laid out the core problem, a normal RAG system retrieves the most similar-looking text and trusts it completely, which means it'll happily report Netflix's old "no plans for ads" statement as current fact.

There's no step where anything pushes back. So in BRAG (my Boosted RAG framework), before any answer reaches the user, the retrieved evidence has to survive two agents who are actively trying to poke holes in it.

The first one is the Verifier. Its job is to check that the evidence actually covers the question being asked, not just that it's topically similar, but that it genuinely supports an answer. Did the retrieval pull the right reporting period? Do the numbers line up exactly? It grades the evidence against a rubric and, crucially, it's allowed to say "this isn't good enough." A similarity score got the chunk in the door; the Verifier decides whether it deserves to stay.

The second agent is where it gets fun, the Refutation Agent. This one doesn't check the evidence; it attacks it. Its whole premise is adversarial: assume the retrieved answer is wrong and go looking for the reason why. And it doesn't just guess, it runs through a fixed set of failure patterns that actually show up in financial filings:

- Was this value restated or revised in a later filing?
- Was this guidance, and did the actual result end up contradicting it?
- Was this stance later reversed, the exact "no ads, then ads" trap?

If either agent finds a problem, the system doesn't just shrug and answer anyway. It either flags the disagreement right in the output, or it steps down to a more cautious response. That stepping down is its own deliberate design, and it's what I want to get into next: what BRAG does when the evidence isn't good enough to answer cleanly, and why knowing when to say less is half the battle.

Learn more about BRAG here: https://lnkd.in/gyWAwqBM
