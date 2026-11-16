---
title: "As promised, here is how I would plan to get my Jev-Sonnet chat routing..."
date: 2026-10-02
topics: ['building-reliable-ai']
excerpt: "As promised, here is how I would plan to get my Jev-Sonnet chat routing system up to 99% accuracy. Right now, it sits at 82.8% accuracy. That is simply not good enough for..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7511838121685344256"
published: true
---
As promised, here is how I would plan to get my Jev-Sonnet chat routing system up to 99% accuracy. Right now, it sits at 82.8% accuracy. That is simply not good enough for real-world business automation, not even close.

To remind you, here is what I am doing. I am using the Banking77 data set, which is thousands of real customer chats from a banking company. I need to route each message to one of 77 categories.

I built a compound system using the new decision model Jev and Sonnet. Jev reads all the chats and automatically labels about 70%; the rest go to Sonnet to review. Quick and cheap model first, then the more expensive model second. I got an overall accuracy of about 83%, but I need 99% accuracy for it to go live.

Here is my roadmap to 99%:

Step 1 - Define the actual target. What I am actually looking for is 99% accuracy of what the machine does, not involving humans. That is a much more precise target than just overall 99% accuracy.

Step 2 - Do a head-to-head with humans. Have a human being label messages and compare to AI. There is going to be a real ceiling here, a hard limit due to language nuance and fuzziness. We won't beat that through systems building.

Step 3 - Fix the categories that cause the most problems. Maybe we need 140 categories instead of 77.

Step 4 - Keep AI in the shadow for weeks. Run it in parallel. This is data trawling. The more golden sets we have, the better our automation.

Step 5 - Set a threshold per category. Use the shadow data to find the confidence level where each category is 99%. Categories that never get there should stay with people. High-risk ones (stolen cards, fraud) stay with people regardless.

Step 6 - Add gates that never trust the AI. Simple rules: my keyword check caught 1 in 7 wrong answers. Use Pydantic to create a gated bridge between each stage of your pipeline.

Step 7 - Slowly roll it out, one category at a time. Start with the safest, highest-volume labels and move on.

Step 8 - Always audit. In supply chain, we use to say, expect what you inspect. Humans review a weekly audit pool of AI auto-responses.

Step 9 - Human corrections will create better descriptions and rules. Update rules and categories, run a test, roll it out. Over and over and over. Always be iterating.

This *hit is not easy. And this is just a simple chat labeling process. The goal is really to get the automated portion to 99% accuracy. That alone will save hundreds if not thousands of hours a year. Box in your spec before you build. Then build and test, build and test. Never trust the model to be correct.

This is what the next decade looks like. Not some magical model to solve every problem. LLMs will never be able to do that. It is old school systems building with lots of elbow grease. For some of us, this is actually fun 🙃

Full results and every log: https://lnkd.in/giZ_qYZb
