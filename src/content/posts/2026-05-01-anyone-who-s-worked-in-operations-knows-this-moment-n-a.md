---
title: "Anyone who's worked in operations knows this moment: N/A"
date: 2026-05-01
topics: ['building-reliable-ai']
excerpt: "Anyone who's worked in operations knows this moment: N/A. N/A. N/A. You're trying to match shipping data to orders. You write a VLOOKUP... You hit enter: N/A. N/A. N/A. Why?..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7456022035295649792"
published: true
---
Anyone who's worked in operations knows this moment: #N/A. #N/A. #N/A. You're trying to match shipping data to orders. You write a VLOOKUP...

You hit enter: #N/A. #N/A. #N/A.

Why? Because Shopify calls it "order_number." The 3PL calls it "ref_id." FedEx calls it "customer_reference." And one of those systems stripped the leading zero from "00845," so now it's just "845" and Excel thinks they're different orders.

This is the second wall every weekly reporting workflow hits. I have fixed this problem in my Agentic AI Framework for data analysis (CASDAM).

After you collate the files (Stage 1 of CASDAM), you have to match them — and exact-string matching breaks the moment any system formats things slightly differently.

The old solution: an analyst eyeballs the unmatched rows and fixes them by hand. Hours of work. Easy to miss things.

CASDAM’s Stage 2 — Reconciliation — does this in two phases:

🔹 Phase 1: Python handles the exact matches. Fast. Deterministic. No surprises.

🔹 Phase 2: An LLM looks at what’s left and uses semantic judgment. It understands that "ORD-12345" and "12345" are the same order. It understands that a tracking number missing a leading zero is still that tracking number. It proposes matches with a confidence score and explains its reasoning.

Then — and this is the important part — Python verifies every single match the LLM proposes.

Confidence below 0.90? Rejected.  
Duplicate tracking number? Rejected.  
Match rate drops below 80% across the dataset? The whole pipeline halts. No report gets generated on bad data.

--The LLM does the judgment work. Python enforces the rules.--

That’s the difference between "AI assists the analyst" and "AI replaces the analyst with no safety net." CASDAM adds a deterministic verification layer, which makes the output trustworthy enough to put in front of leadership.

Stage 1 was data collection.  
Stage 2 is data trust.  
Stage 3 is where the analyst’s actual math begins — and where I have an LLM and Python compute the same KPIs independently, just to make sure they agree.

More on that next week. Learn more about CASDAM:  https://lnkd.in/divZs_Xn
