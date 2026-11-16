---
title: "An update on my Jev testing"
date: 2026-10-14
topics: ['building-reliable-ai']
excerpt: "An update on my Jev testing. The quick recap on what I did prior: Jev is just as good as Sonnet and costs 50 times less for automated sorting of chat messages. So that's a huge..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7515956130934693888"
published: true
---
An update on my Jev testing. The quick recap on what I did prior: Jev is just as good as Sonnet and costs 50 times less for automated sorting of chat messages. So that's a huge win. But maybe a bit of a straw man, because there are good models that are much keeper. Like DeepSeek V4 Flash. So I test Jev vs the value play in frontier models.

I ran DeepSeek V4 Flash through the same pipeline: the same 1,000 bank customer messages, the same 77 categories, and the same evaluation rules, written before the run. Jev won overall, but not on everything.

--Where DeepSeek wins--

💰 Price -- $0.013 per 1,000 messages versus $0.10. At one million messages a month, that is $13 versus $100.

🔓 Open weights -- You can run it on your own servers and keep data in-house. Jev is a hosted beta product.

🎛️ A finer dial -- Its confidence scores allow 349 automation settings, versus 67 for Jev.

🧰 General-purpose capability -- The same model can summarize, draft replies, and explain itself. Jev only makes decisions.

--Where Jev wins--

🎯 Accuracy where it counts - Set to automate about 70% of messages, Jev was right 91.4% of the time. DeepSeek was right 88.0%. Jev was ahead at every setting I tested.

🧭 Honest confidence - DeepSeek reported confidence of 99.9% or higher on 45% of messages, yet was right on 93.8% of them. Jev’s highest score was right 98% of the time. When the score determines what goes out without human review, that calibration difference is decisive.

⚡ Speed - 0.22 seconds per message versus 1.46 seconds for DeepSeek.

🔧 Less plumbing - To get DeepSeek’s confidence score, I had to pin a provider that exposes the model’s internal probabilities and add a retry for empty replies. Jev returns a score out of the box.

The math that decides it:

Take each model’s 731 most confident answers. Jev got 91.4% right; DeepSeek got 85.2%. That is about 45 more wrong answers per 1,000 messages sent out unchecked, in exchange for saving nine cents. DeepSeek comes out ahead only if a wrong answer costs less than one-fifth of a cent.

One surprise: when Jev was confidently wrong, DeepSeek usually made the exact same mistake, 56 times out of 63. A review found that many of those were errors in the answer key. On the re-checked key, the gap narrows but remains: 98.8% versus 96.3%.

When I would choose DeepSeek: a person reviews every decision anyway and the AI only pre-sorts; data cannot leave your servers; or one model needs to perform several jobs.

When I would choose Jev: decisions go out without a human in the loop.

Caveats: this was one task, sorting short bank messages; one run per model; and Jev is still in beta.

Full results and every log: https://lnkd.in/giZ_qYZb
