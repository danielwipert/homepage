---
title: "Another finding from my Jeb vs Frontier experiment -- Cheaper model first,..."
date: 2026-10-02
topics: ['building-reliable-ai', 'ai-economics']
excerpt: "Another finding from my Jeb vs Frontier experiment -- Cheaper model first, expensive model later. I have been doing this for a good year now, but I think it has become the..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7511819463785189376"
published: true
---
Another finding from my Jeb vs Frontier experiment -- Cheaper model first, expensive model later. I have been doing this for a good year now, but I think it has become the paradigm. But that has a lot of implications that have not yet filtered out into the general business world. We forget SF and the tech world are a snow globe world; it is not reality. What is a truth there, isn't even an inkling east of Walnut Creek.

The best result I got in my chat labeling experiment was a combination of Jev and Sonnet. I had two AI models sort 1,000 real bank customer messages into 77 categories: Jev, a small specialized model, and Claude Sonnet 5.

Here is how I routed this Compound AI system. Jev reads and routes everything first. It is super fast and super cheap. When Jev had a high confidence in its output label, I let it stand. That was 73% of the chats. It got that right 92% of the time, not bad. If Jev was not confident, it went to Sonnet.

On all 1,000 messages:

- Jev first, Sonnet second: 82.8% correct, $1.51 per 1,000
- Sonnet alone: 82.3% correct, $5.25 per 1,000

I got the same results at 1/4 the cost. That is how you build AI systems in 2026. I don't think this has really set in with the broader business world yet. There are some exceptions; look at Rippling did this year as an example.

The idea that a single model was going to solve all these problems was foolish. It honestly is kind of delusional. As a non-CS guy, I even realized that the moment I looked under the hood of any LLM.

LLM are language processors. Expecting reason, logic, and human-grounded truth from an LLM is nonsensical. We need to shift away from that pipedream. We need to start seeing LLMs as components of complex systems. As nodes. Nodes where the input and output can be checked before sending it to the next node. The final output of any AI system should be 99.9% accurate. You want to automate work done by humans; that is the level it needs to be at. We are not even close right now.

Notice my final results. Even with this setup, I am only 82.8% accurate. Not good enough. Check out my next post and how I plan to get to 99% accurate. For now, throw out the single model theory. Those days are long gone. Any serious builder is using many models in the single workflow.

Full results and every log: https://lnkd.in/giZ_qYZb
