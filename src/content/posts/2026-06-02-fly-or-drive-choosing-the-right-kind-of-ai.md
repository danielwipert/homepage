---
title: "Fly or Drive? Choosing the Right Kind of AI"
date: 2026-06-02
topics: ['ai-explained', 'ai-economics']
excerpt: "Using the wrong type of AI can cost you a lot. Think of it like this common question: Should I fly or drive? Right now, huge companies are taking an airplane to fly 3 miles to..."
source: linkedin-article
sourceUrl: "https://www.linkedin.com/pulse/fly-drive-choosing-right-kind-ai-daniel-wipert-ox49c"
published: true
---
Using the wrong type of AI can cost you a lot. Think of it like this common question: Should I fly or drive? Right now, huge companies are taking an airplane to fly 3 miles to pick up lunch. That is how out of whack AI implementation and usage have become. So spend 6 minutes with me to determine the starting point of that question: what type of AI should I use, fly or drive?

### The two types of AI

On November 30, 2022, ChatGPT 3.5 went live as a free research preview. There wasn’t even a press release. It was just there. Within 45 days, ChatGPT had over 20 million users. Since then, Generative AI has dominated the global zeitgeist, but AI has been around for decades.

OG AI (aka Traditional AI, Classical AI, Analytical AI) has been humming along since the 1970s. **Traditional AI** is this: *You give it data, and it gives you a label, a number, or a choice*. We use it every day: the routing on your Google Maps, the Netflix homepage recommends new tv shows for you, and your Gmail sorts your inbox. This type of AI takes a bunch of existing information, finds the patterns, and makes a highly logical prediction or classification.

Generative AI does this and more. **Generative AI **is a *type of artificial intelligence that can create entirely new, original content from scratch.* Unlike Traditional AI, which only analyzes, sorts, or predicts existing data, Generative AI learns the underlying structure of human data so it can generate its own text, images, music, video, or computer code that looks and feels like it was made by a human.

For a lot of business leaders, just knowing that distinction gives you a head start. The term AI is being thrown around like rice at a wedding. Don’t do that. Use specific terms, because AI is both a mile wide and a mile deep. I like the term Classical AI over Traditional AI, but use them how you like.

### Netflix Churn Example

Let’s assume you are a VP over at Netflix, and the CEO wants you to create an AI implementation plan for reducing customer churn. Churn is Voldemort at Netflix; it is the thing that drives most of their decision-making. Netflix doesn’t want people to leave their service, so how do you spot them and stop them?

**Spot Them**: First, you need to use Traditional AI to find customers that are flight risks. Predictive models will analyze behavioral signals from millions of accounts, such as a sudden drop in weekly viewing hours, a user clicking on the "Manage Subscription" page, or a credit card expiring next month. It flags a specific user account and assigns a risk score. For example: "User 8472 has an 85% probability of churning within the next 30 days." Bucketing users into flight risk is an example of **Classification**: *the process of sorting data into pre-defined categories*

**Stop Them**: Ok, now that you have spotted the flight risks, people looking to unsubscribe, let’s stop them using Generative AI. We can take the alert from our Trad AI system and create personalized, original content in real time to convince that specific user to stay. We will ingest the traditional AI's risk profile (e.g., "This user loves sci-fi but hasn't logged in for 3 weeks") and instantly craft tailored reach-outs that act as interventions. Our Gen AI system will automatically write hyper-targeted re-engagement emails and customize the Netflix home screen UI just for them. Instead of a generic "We miss you" note, it generates: “Hey Dan, a brand new season of *3 Body Problem* just dropped today. Here is a 45-second custom video preview of what you're missing."

So Classical AI can spot patterns in data. Generative AI can create new content. You will need to use both, but you absolutely need to know the difference. It is Fly vs Drive,

### Flying To Pick Up Chipotle

What is happening now is that corporate leaders, who do not know AI well, are choosing to buy a first-class Delta ticket to go pick up their burrito bowl at Chipotle. They are spending way too much time, resources, and cash on Generative AI projects that should be, at least partially, Classical AI projects.

Flying a plane to pick up lunch is basically using a trillion-parameter LLM from OpenAI or Anthropic to sort a spreadsheet, score leads, or forecast inventory. It is extreme overkill and honestly not super reliable or scalable. Classical AI is much better, faster, and cheaper at anything that is strictly data analysis. The difference can be boiled down to this. If your requirement is to "score this, sort this, or predict this," you are facing a mathematical optimization problem, not a language problem. Math problems are for Classical AI, language problems are for Generative AI. 95% of your problems are math problems.

Now here is the funny thing. Gen AI is great at building Classical AI solutions. Claude Code is an amazing tool for building Python pipelines that can solve most of your problems. So you have to have a dynamic viewpoint. But lead with this when facing AI questions: Can this be solved without Gen AI? That is your real question.

### Try it yourself: Fly or Drive?

***1) "We get 4,000 support tickets a week and need to route each one to the right team." ***

**Classical AI.** This is sorting into pre-defined buckets (billing, technical, cancellation). It's classification, plain and simple. A cheap, fast model does this better than a language model, and you can check whether it routed correctly.

***2) "Draft personalized responses to those tickets once they're routed."***

**Gen AI.** Now you're creating new language for each customer. That's generation, not sorting. (Notice scenarios 1 and 2 are the same workflow: route, then respond. And they need *different* engines. That's the hybrid in action.)

***3) "Forecast how much inventory each store will need next month." ***

**Classical AI.** "Predict this number" is a math problem, not a language problem. A predictive model trained on your sales history gives you a number you can grade against what actually happens.

***4) "Turn our quarterly numbers into a readable summary for the board." ***

**Gen AI.** The numbers already exist, the work is producing new prose that explains them. Creating the explanation is generation.

***5) "Score incoming sales leads from 1 to 100 so reps know who to call first." ***

**Classical AI.** This is the classic trap; it *feels* sophisticated, so people reach for a chatbot. But "score this" is mathematical optimization. Don’t fly first class to Chipotle when you can drive.

*Next issue: you've picked generative AI for the job, but what is a large language model actually doing under the hood? Let's open it up.*
