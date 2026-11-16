---
title: "This paper has been making the rounds the last few days"
date: 2026-08-31
topics: ['research-notes']
excerpt: "This paper has been making the rounds the last few days. I think there are some good takeaways here for everyone... Memento Ain't Just Christopher Nolan's Best Film One of the..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7500296452003397633"
published: true
---
This paper has been making the rounds the last few days. I think there are some good takeaways here for everyone...

- Memento Ain't Just Christopher Nolan's Best Film

One of the core issues with Gen AI is that models have this persistent case of amnesia, like the protagonist in Memento. You ask a lot of questions. You do a lot of work. Then you log off. The next day you want to pick up where you left off, and the model has forgotten most of what you have done. It is very frustrating and annoying. It is also a hard ceiling to Applied AI. You have broken the context window, and it has shattered into a thousand pieces

What this paper proposes and proves is that you can build a persistent knowledge base for a model. They built a simple markdown file that acts as wiki. It uses a fantastic mult-model architecture: worker acts → maintainer journals → proposer drafts a playbook edit → gatekeeper tests it → only proven edits go back to the worker.

Like I've been saying for over a year now. Any serious Gen AI system has many, many model calls, all from different models, and hopefully from different model families. The wiki partially solves the Memento problem of Gen AI. It gives the system a persistent and growing memory that improves the performance of the model.

- The Millionaire Next Door Drives a Camry

Value is a subjective term. Bigger is not always better. More expensive is not always better. A Toyota has about a 20% of reaching 200k miles, while a Land Rover has sub 3% chance. A Land Rover costs double.

This is going to be the next revolution within Applied AI. Smaller models. We don't need 1 trillion parameters. This paper proves that, which is a huge turning point. A mid-sized model using its self-written playbook outperformed a model roughly three times its size (and cost) that had no playbook. The winners in Applied AI will be the system builders, not the model zealots.

- Markdown Files are Rosetta Stones

I think one of the crazier things in this paper is how simple markdown files can be used to transfer knowledge from one model to another. The wiki or playbooks developed for one model could be passed to another model, and the new model performance would improve: a playbook evolved by Alibaba's Qwen-27B model improved Google's Gemini-3.5-Flash on a math benchmark from 33.0% to 73.9%.

I think 2026 is the year that the model becomes subservient to the system. It has kind of felt like the inmates are running the asylum this year. The OpenAI swarm hack of Hugging Face is the paradigm. But papers like this knock models off of their pedestal. Models are powerful engines, but you can't drive an engine anywhere. You drive a car, which has a complex set of systems that harness the power of the engine. What this paper suggests is that yes, you need a system. But the system doesn't even need to be that complex; just a text file will do sometimes.

https://lnkd.in/gZiCaF-s
