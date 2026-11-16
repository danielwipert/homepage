---
title: "Closing the Loop · Issue 14 · Prompt vs RAG vs Fine-Tuning"
date: 2026-08-22
topics: ['ai-explained']
excerpt: "Ok now that we have some basic understanding of how we can interact with LLMs, we need to do a little meta-training. Prompting is clear to everyone. RAG is clear to maybe 10%..."
source: linkedin-article
sourceUrl: "https://www.linkedin.com/pulse/closing-loop-issue-14-prompt-vs-rag-fine-tuning-daniel-wipert-lb30c"
published: true
---
Ok now that we have some basic understanding of how we can interact with LLMs, we need to do a little meta-training. Prompting is clear to everyone. RAG is clear to maybe 10% of knowledge workers. Fine-tuning, thats a whole other can of worms. Fine-tuning is really meant for machine learning experts. You are getting under the hood of the actual model itself. That is not for everyone, but everyone in knowledge work needs to know what it is, how it works, and when to turn things over to the experts.

I like to think of it this way. Let’s say your car needs a new windshield wiper. That is simple and easy; anyone can replace it. That is prompting. Any lay person can tell a model to do something different in the moment. Anyone can add instructions to a the project settings. Now let’s say your car needs an oil change. That is more like RAG. Sure, you can do it. I am not a mechanic, and I have done it several times. But it is probably just easier to get someone else to do it, someone who does it all the time. Now, let's say your engine needs work. That is for a mechanic. That is fine-tuning.

### The Trinity of Model Interaction

Before we dive into when to use each method, let's do a quick recap. **Prompting **in AI is simply the act of giving instructions to an AI model to get a specific output. **RAG **stands for **Retrieval-Augmented Generation**. In plain terms, it gives an AI model an "open-book exam" instead of forcing it to answer purely from memory. It is the bridge from the model to the outside world. Fine-tuning is not something we have covered yet.

**Fine-Tuning** is the process of taking a broad, pre-trained AI model and training it further on a smaller, highly specific dataset so it excels at a particular task, style, or domain. If pre-training gives the AI a general high school education, fine-tuning is sending it to trade school or medical residency.

***How Fine-Tuning Works:***

1. **Start with a base model:** You take an existing model that already understands general language, grammar, and reasoning.
1. **Feed it targeted examples:** You train it on hundreds or thousands of specialized pairs (e.g., legal contracts and their summaries, or customer support logs and ideal agent responses).
1. **Adjust internal weights:** The model updates its internal connections to internalize those patterns, jargon, or formatting rules directly into its memory.

### What Tool to Use and When

Imagine you run a fast-growing online clothing store called TrendCo. Here is how you would use each tool depending on the problem you're trying to solve:

***Simple Prompting* (Direct Instructions)**

- **The Scenario**: You need to write a quick promotional email for a surprise summer sale happening tomorrow.
- **Why Prompting:** You don't need company files or specialized coding. You just need the AI to write engaging copy right now using its general writing skills.
- **What You Say:** "Write a fun, 3-sentence email announcing a 20% off summer flash sale. Keep the tone light and energetic."

***RAG *(Looking Up Live / Private Facts)**

- **The Scenario**: A customer chats in asking, "Where is my order #4092, and what is your return policy for swimwear?"
- **Why RAG:** The AI’s general training doesn't know about order #4092 or your specific return policy. You can't train the AI on orders every second, so it needs to look up the live facts in your inventory database and policy documents before answering.
- How It Works: The system searches your database for order #4092 (Status: Shipped) and your return document (Swimwear: 14 days with tags), feeds those facts into the AI, and the AI replies accurately to the customer.

***Fine-Tuning *(Teaching a Strict Habit or Style)**

- **The Scenario**: You want your customer service chatbot to sound 100% like your brand’s quirky personality (think playful, casual, and using trendy slang) instead of sounding like a polite corporate robot.
- **The Problem with Normal AI**: Standard AI defaults to sounding like a neutral call-center representative: "Thank you for reaching out. We apologize for the delay. Your package is currently in transit."
- **How Fine-Tuning Fixes It**: You train the AI on hundreds of examples of how your real team talks to customers.
- **The Result**: The model naturally learns the exact personality, so it automatically responds like this without needing any extra instructions: "Oh no! Your order is taking a little detour, but don't worry, it’s officially on the move and heading your way!"

### What Goes Wrong

A team signs a six-figure fine-tuning engagement to "make the model understand our business," spending months gathering examples for a model frozen in time the day training finishes. In reality, a two-page prompt or a basic document search would have solved the problem on day one. Beyond the initial bill, you end up paying twice: first in wasted time, losing months on a project that a quick prompt change could have fixed in an afternoon, and second in extra money, having to start from scratch whenever a new base model comes out.

The quieter failure occurs when company policy changes but the internal weights do not, leaving a model that sounds convincingly right while quietly spouting obsolete rules. For any manager, the immediate tell is simple: when a proposal skips straight to fine-tuning, ask what was tried first. If the answer is "nothing," you are paying for an engine overhaul when all you needed was an open owner's manual.

### The Systems View

The real engineering trade-off across these three approaches comes down to how fast you can adapt once reality hits. A prompt can be updated in minutes, a document in a day, and a fine-tuned model in weeks. The cheaper, simpler lever is almost always the one that closes your feedback loop the fastest, letting you fix mistakes the moment your system meets the real world.

### Next Issue

*All three of these tools change what an AI says. None of them let it actually do anything. Next issue, we cover tool use, the moment AI learns to call your software and get real work done.*
