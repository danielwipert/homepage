---
title: "New Paper: A new automated audit of 168 AI benchmarks found that over a..."
date: 2026-05-26
topics: ['research-notes']
excerpt: "New Paper: A new automated audit of 168 AI benchmarks found that over a quarter contain critical flaws that distort how we measure model capability. The audit, called Auto..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7465045297837088770"
published: true
---
New Paper: A new automated audit of 168 AI benchmarks found that over a quarter contain critical flaws that distort how we measure model capability.

The audit, called Auto Benchmark Audit (ABA), systematically checks individual tasks in benchmarks for issues like ambiguous instructions, hidden environment dependencies, and incorrect grading logic. It flagged major issues in 25.7% of the 34,285 tasks it examined across nine domains, from coding to safety.

The finding is broader than it sounds. The flaws are not random noise but systematic: in math benchmarks, 65% of major issues stem from ambiguous prompts, while safety and retrieval tasks are plagued by unreliable grading.

Crucially, removing these problematic tasks shifted model rankings and boosted average performance on SWE-bench Verified and Terminal-Bench 2 by 9.9% and 9.6%, respectively.

For teams that rely on benchmarks to make build, buy, or research decisions, this is a direct signal to treat published leaderboards as lower bounds. The real capability of a system may be higher than the score suggests, obscured by benchmark bugs. It argues for internal validation suites and a more skeptical eye on vendor claims built atop a single, potentially flawed, leaderboard.

Paper: Automated Benchmark Auditing for AI Agents and Large Language Models, Wang et al. https://lnkd.in/dhnKDpjX
