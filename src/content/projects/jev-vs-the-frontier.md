---
title: Jev vs. the Frontier
fullName: Research note · September 2026
summary: A small model matched a frontier model on automated decisions, at one-fiftieth of the cost.
kicker: EXPERIMENT
tier: main
group: chorus
order: 4
status: shipped
chorus: true
stack: [Python, Jev, Claude Sonnet 5, Claude Haiku 4.5, DeepSeek V4 Flash, Banking77]
siteUrl: https://danielwipert.github.io/jev.sorter/
repoUrl: https://github.com/danielwipert/jev.sorter
siteLabel: Read the research note
stat: 91.4% vs 91.0%
statLabel: $0.10 vs $5.25 PER 1K
fileName: JEV-VS-FRONTIER.LOG
termValue: 91.4%
---

## The question

Can a small, specialized model do everyday business sorting work as well as a frontier model? If it can, a lot of companies are overpaying for AI.

## The test

I set up a realistic triage task on Banking77, a public set of customer banking messages sorted into 77 categories. The rule was the one a real operation would use: answers the model is confident about are accepted automatically, and everything else goes to a person.

To keep the result honest, the rules were written down before the test ran, and the test set was locked so nothing could be tuned against it. The whole experiment cost **$16**.

## The result

On the decisions it made automatically, Jev was right **91.4%** of the time. Claude Sonnet 5 was right **91.0%** of the time.

Jev did it for **$0.10 per thousand messages.** Sonnet cost **$5.25.** Same accuracy, one-fiftieth of the price.

## Why it matters

Most AI cost is decided by habit: send everything to the biggest model. Measured carefully, many tasks don't need it. That's the routing problem at the heart of the [AI Operations Management](/work/aiom-textbook/) textbook, shown with real numbers.

## What's next

Phase 2 runs the same test on real emails.
