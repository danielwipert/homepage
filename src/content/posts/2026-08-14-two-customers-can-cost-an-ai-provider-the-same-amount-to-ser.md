---
title: "Two customers can cost an AI provider the same amount to serve and still..."
date: 2026-08-14
topics: ['ai-economics']
excerpt: "Two customers can cost an AI provider the same amount to serve and still receive different bills. That difference does not, by itself, show unfairness. It reflects how the..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7494068025420087296"
published: true
---
Two customers can cost an AI provider the same amount to serve and still receive different bills. That difference does not, by itself, show unfairness. It reflects how the price was constructed.

Every PRICING RULE calculates a charge from a set of inputs. But the system determines which inputs are available by determining what the AI provider can measure and attribute. If it records only access, the RULE can charge for access, and differences in use do not affect the bill. If it measures usage and ties that usage to a customer, the RULE can charge for usage, and heavier users can pay more.

The last 18 months gave us live demonstrations of my slide, because several providers discovered their access-priced rule couldn't see their usage-driven costs:

- OpenAI Pro ($200/mo): Sam Altman admitted in January 2025 that OpenAI was losing money on it because "people use it much more than we expected." That's the yellow column failing exactly as drawn, the exposure kept running, and the cost variance landed on the provider.

- Cursor (June 2025): moved Pro from fixed "fast request" allotments to usage-based credit pools pegged to model API costs, literally changing the input from request counts to tokens. The rollout was so poorly communicated (no real-time meter, surprise overage bills) that Cursor apologized and refunded unexpected usage between June 16 and July 4.

- Anthropic Claude Code (August 2025): kept the flat subscription but bolted on weekly compute caps affecting the heaviest ~5% of users, with an option for Max subscribers to buy overflow at standard API rates. Hybrid correction: an access rule with a usage valve, plus an escape hatch into usage pricing.
