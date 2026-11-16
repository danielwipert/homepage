---
title: "New Paper: Voice AI still gets the timing wrong: talking over you, leaving..."
date: 2026-06-10
topics: ['research-notes']
excerpt: "New Paper: Voice AI still gets the timing wrong: talking over you, leaving awkward silences, and missing the right moment to jump in. A new paper shows these behaviors can be..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7470539150203658240"
published: true
---
New Paper: Voice AI still gets the timing wrong: talking over you, leaving awkward silences, and missing the right moment to jump in. A new paper shows these behaviors can be trained directly.

Researchers from Kyutai and Gradium (the team behind the Moshi voice model) developed a reinforcement learning technique targeting the four behaviors that make conversation feel natural: handling pauses, taking turns, backchanneling (the "mm-hm"s that signal you're listening), and yielding gracefully when interrupted.

The method: extract short audio clips of each behavior from real human conversations, then train the model with a separate reward function for each one. A quality check using an LLM ensures the model doesn't get better at timing by getting worse at substance.

Why this matters: previous methods fixed one or two of these behaviors at a time and some reported that the behaviors they weren't measuring got worse. This approach improved all four simultaneously, and improvements learned from short clips carried over to full real-time, multi-turn conversations on Full-Duplex-Bench v2.

This is the pattern I keep coming back to in Closing The Loop, my AI newsletter. The team didn't hope the model would develop good timing. They defined each behavior they cared about, measured it, and fed the measurement back into training, with a separate guard watching for the thing that usually breaks when you optimize something else. That's a closed loop.

You get the behavior you measure. The dimensions you don't measure are the ones that quietly drift.

Deploying voice AI in customer service? The vendor question that matters: which conversational behaviors do you measure, and what happens to the ones you don't? Expect what you inspect!

Paper: Multi-Faceted Interactivity Alignment in Full-Duplex Speech Models, Ohashi et al.

https://lnkd.in/ghr3u3En
