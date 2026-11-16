---
title: "The Information had a great article earlier this month that supports the..."
date: 2026-10-23
topics: ['ai-economics']
excerpt: "The Information had a great article earlier this month that supports the main thesis of my text, AI Operations Management. Meta and Microsoft are two of Anthropic's biggest..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7519219546679922689"
published: true
---
The Information had a great article earlier this month that supports the main thesis of my text, AI Operations Management. Meta and Microsoft are two of Anthropic's biggest customers, and they made a conspicuous shift away from Claude this year. The reason... cost.

At Meta, Claude Code users fell from 60,000 earlier in 2026 down to 30,000 by Oct. Meta spent over $105M on Claude Code in a single 28-day period. A June memo put total internal AI tool spend on pace for “billions” this year. Claude Code is quickly being replaced with internal tools like Meta Code and Muse Code. Funnily enough, Meta used Claude to build its consumer Muse agent, then swapped to its own models for the shipped product.

At Microsoft, internal Claude spend was projected at over $1B yearly run rate as of May. Microsoft has since cut that by more than a third. How did they do this? They cut Claude Code subscriptions, and then routed engineers through GitHub Copilot where the “auto” mode defaults to OpenAI models, which are nearly free to Microsoft under its OpenAI commercial deal. Executives can now see per-employee daily AI spend and model choice.

My textbook covers these exact moves and why they will be widespread throughout AI adoption:

- Token spend is now a managed budget line, not an unbounded perk. Both companies converged on the same control stack: divisional token budgets, per-seat caps, usage dashboards, and routing defaults. That is operations management, not procurement.

- Routing is the best way to immediately control cost overages. Microsoft didn’t ban Claude; it just routed traffic to the much cheaper OpenAI models. Doing this with open weight models is the move for most companies now. DeepSeek and GLM are great alternatives.

- Vendor concentration risk cuts both ways. Anthropic’s exposure to two customers mirrors the customers’ exposure to one vendor. Never put all your eggs in one basket. The AI market is wide open now. Choose the right tool for the right job. That might change on a weekly basis.

At the very least, my thesis holds true. AI is a utility being consumed, not software access. All the economics flow from this difference. Treat AI like a utility and then start creating a way to actually measure value. Ignore any urge to price and treat it like SaaS.
