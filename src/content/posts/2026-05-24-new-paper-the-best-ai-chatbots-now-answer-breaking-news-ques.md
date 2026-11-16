---
title: "New Paper: The best AI chatbots now answer breaking-news questions with 95%..."
date: 2026-05-24
topics: ['research-notes']
excerpt: "New Paper: The best AI chatbots now answer breaking-news questions with 95% accuracy. Then you change the language, and the floor drops out. A new study from Stanford and..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7464299425272586240"
published: true
---
New Paper: The best AI chatbots now answer breaking-news questions with 95% accuracy. Then you change the language, and the floor drops out.

A new study from Stanford and Together AI ran six commercial chatbots through 2,100 factual questions drawn from same-day BBC News reports, across six languages.

The top performers were genuinely impressive: Gemini 3 Flash hit 95.6% and Grok 4 hit 95.0% on a multiple-choice test, a real leap over earlier real-time benchmarks. But that headline number hides three uncomfortable cracks:

- Language matters more than you'd expect. Every single model did worst in Hindi, trailing the other languages by nearly 10 points.

- The failures aren't about intelligence. Over 70% of errors came from retrieval, the model failing to find the right information, not from flawed reasoning.

- A bad question breaks a good model. When prompts carried subtle false premises, accuracy cratered, falling as low as 19% for GPT-5.

The takeaway for anyone deploying these tools: vendor risk has moved. It's no longer mainly about model size: it's about retrieval infrastructure and regional parity. The cheapest accuracy gains probably won't come from the next model release. They'll come from better multilingual search.

So two questions worth putting to your team: Which languages does our system serve worst? And what happens when a user asks the wrong question?

Paper: Evaluating Commercial AI Chatbots as News Intermediaries by Suzgun et al. — arxiv.org/abs/2605.22785
