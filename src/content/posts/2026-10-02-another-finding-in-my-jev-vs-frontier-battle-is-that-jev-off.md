---
title: "Another finding in my Jev vs Frontier battle is that Jev offers more stable..."
date: 2026-10-02
topics: ['building-reliable-ai']
excerpt: "Another finding in my Jev vs Frontier battle is that Jev offers more stable and clear tunability when it comes to creating an automated workflow for your team. When we are..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7511801458653171713"
published: true
---
Another finding in my Jev vs Frontier battle is that Jev offers more stable and clear tunability when it comes to creating an automated workflow for your team. When we are automating, we need controls that we can fine-tune. As someone who has probably built a few thousand workflows in my career across every possible vertical you could imagine, I think of the famous adage from Heraclitus: "You can never step in the same river twice."

That is, every workflow, every group of tasks, is unique. Yes, there are some patterns that work across different flows, but there will never be one size that fits all in terms of solutions. This means that the tool you use to automate needs to offer you fine-tuning options.

In my experiment of Jev vs. Sonnet vs. Haiku, I noticed an issue with Anthropics' mid-tier and budget models. They had a confidence problem. In most automated tasks, you automate the easy stuff and send the hard stuff to a person. The dial that often does this is a confidence score. That is, how confident is the automater in their judgement? In my experiment, sorting chats into the right category, the sweet spot was around 70% automated and 30% for human review.

I noticed something very interesting when trying to dial in this 70% automated setting. Jev, a model built for automating decision-making, not language generation, gave me the option to truly fine-tune the confidence nob, which is really the automation nob. I could select 65%, 75%, 80%, etc. Both Sonnet and Haiku struggled with this.

Between 50% and 90% automation, here's how many settings each model gives you:

Jev -- 38 settings  
Sonnet 5 -- 8 settings  
Haiku 4.5 -- 3 settings

For example, with Sonnet, you can choose to automate at 45% or jump up to 65%, there was no option in between. The issue is that general models like Sonnet and Haiku are not trained for decision-making like Jev. This also means they struggle with some of the basics of automation. That is a big problem. Now you can build a loop and harness around Claude models, but that is extra work and extra code you have to manage.

When you select a model to help automate a workflow, accuracy is only one side of the story. Confidence scores are just as important, because they give you control over the model. Without fine-tune controls, the model becomes much less useful in real-world Applied AI automations.

For full report on Jev vs Frontier, check out my experiment: https://lnkd.in/giZ_qYZb
