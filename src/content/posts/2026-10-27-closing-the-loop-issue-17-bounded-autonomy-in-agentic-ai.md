---
title: "Closing the Loop · Issue 17 · Bounded Autonomy in Agentic AI"
date: 2026-10-27
topics: ['ai-safety-governance', 'ai-explained']
excerpt: "In the last issue, we discussed what an AI Agent actually is, and that the final definition can be quite mutable. But within all definitions of agents, autonomy is the core...."
source: linkedin-article
sourceUrl: "https://www.linkedin.com/pulse/closing-loop-issue-17-bounded-autonomy-agentic-ai-daniel-wipert-ams4c"
published: true
---
In the last issue, we discussed what an AI Agent actually is, and that the final definition can be quite mutable. But within all definitions of agents, autonomy is the core. Let’s dive deeper into how to give power to agents while also checking and guiding their work.

As the recent months have shown us, unbounded AI agents are extremely dangerous. The paradigm of this is what I call Feral AI. That is AI being let loose to act without proper restraint or guardrails. Feral AI has gotten so bad that OpenAI had to reconfigure their entire testing process to ensure that their agents did not escape the sandbox. The core question of this issue is how do you control agents that have immense power and speed?

### The Company Card

The main concept we are seeking is **Bounded Autonomy,** which means *an AI agent acts on its own inside limits you set in advance, and the agent stops acting at the edge of your limit*. Think of this as a company credit card with a spending limit. You can get what you need when you need it, but your spend is capped. That is what we want to do with agents. We want to give them the freedom to act, but we also want to put up guardrails to prevent problems. Setting up these guardrails is more than just an exercise in process mapping and logic. It is a complex art form that requires creative intelligence as much as technical skill.

The company credit card is perhaps a weak metaphor, because the controls on the card are static and simplistic. Bounding agents is much more nuanced. With a card, you just have spending limits per day, week, or month. Maybe certain purchases are banned. But that is really it. An AI agent has so much more power and freedom if you let it, and it needs more extreme and dynamic guardrails. Your agentic guardrails need to both be made out of steel and also bend to the situation at hand. That is a tall order.

### Where did it all go wrong?

When you are thinking about how to create guardrails for your Agentic AI and agents, you need to think like an operations person. Any good ops person is always obsessing about the same thing: what is going to go wrong here? Something is always going to go wrong; that is the nature of all business processes. Assume something breaks. How can we limit the damage WHEN it does, not IF it does.

So let's talk about what goes wrong with autonomous agents:

-

**Runaway Workflow **– This is what happens when you have no Stop Condition, *a rule created before the agent starts, that tells it when to quit on its own. The agent does not decide it’s finished; the rule does*. A runaway workflow is what happens when there is no guardrail. The drop-off and damage will entirely depend on the agent’s access, power, and instructions. It could be a grass median or a sheer cliff face. But the safety mechanism is the same. Create a massive brick wall your agent can never breach.

-

**Tool Misuse** – Even if you have a stop condition guardrail, you can easily give an agent too much leeway. Think of a car crossing a flat median and driving in the wrong direction. Bad news. This is a classic access control issue. You only want your agent to be able to access certain areas of your data and you only want it to be able to do certain actions.

***Real Case - Tool Misuse**** - PocketOS, April 2026*

-

A Cursor coding agent was fixing a credential mismatch in a staging environment. It had access to a Railway API token that was scoped far wider than the task: it could issue destructive commands against production. More access than it should have.

-

It deleted a storage volume to resolve the issue, guessing at the command’s effect without checking which environments shared that volume. No check was done. No confirmation step was required. It just acted.

-

The deleted storage volume held the production database and the backups; both were gone in seconds. PocketOS spent two days recovering the lost data, which they were lucky to be able to do.

-

**Cost Spike **– This one is probably the most top of mind for business leaders. AI went from an all-you-can-eat buffet to a full IRS audit in about 6 months. Tokens are the new currency, and you better have a meter to know your AI spend. What has happened pretty much at every corporation over the last year is a rush to adopt AI and then shock when the invoice hits. From Fortune 20 companies to your mom and pop ecommerce stores. Everyone is dealing with sticker shock. The controls here are actually the easiest. This is exactly like the company card. You put daily, weekly, and monthly limits on your AI spending for every single person and agent. Maybe the idea is simple, but the execution can be hard. Just never let the token meter run without a stop condition. Live by that rule, and you will be fine. But put in place before a single prompt or automation is made.

-

**No Red Flags **- Think of your job. What happens if something bad happens and it feels bigger than you or your role. You escalate the issue to your manager. I had to do this probably 10 times a week in most of my roles (startups!). AI agents need to have the same option. If something is a big deal; the agent needs an escalation path before it acts. It needs to be able to raise a red flag. If there is no escalation logic or path, then the agent is going to act, because it has been told to act. It is going to do the wrong thing. Not all checks on autonomy need to be steel guardrails. Sometimes they need to be a short pause for a human in the loop to review and then put the agent back into action.

***Real Case - Escalation**** - Amazon, March 2026*

-

Amazon’s retail site had several high-severity outages in one week. One ran six hours and blocked checkout, sign-in, and pricing.

-

Amazon’s own account: not bad AI code. An engineer acted on advice from an AI agent that it had incorrectly drawn on an outdated internal wiki. Internal documents called it a “trend of incidents” tied to “Gen-AI assisted changes.”

-

The fix: senior-engineer review is now required for AI-assisted changes. Human oversight added back in as a soft guardrail

These four failures all have one thing in common. No rules were created, no guardrails were set up. The AI was let loose, not given proper guidance, and never given a command to stop. The more power and access the AI has, the more complex, dynamic, and severe the guardrails need to be.

### Closing the Loop

When I created this newsletter, I already had my thesis. Generative AI is very powerful. But due to its innate probabilistic nature, it will always be an open loop. To use AI in a business setting, you need to close the loop. Or, create feedback mechanisms that act as guardrails to bound the autonomy of your AI.

I ended the last issue with this: an agent closes its own loop. But it does not close yours. The agent watches whether its action worked and tries again if it did not. Nobody inside the agent loop is asking whether the action was allowed or if the action is dangerous or if the action is expensive. Those questions and decisions belong to you, not AI. And you need to set those limits and boundaries before any token gets spent.

Autonomy is not a dial that runs from zero to full. It is a set of edges and feedback loops created by humans. Inside them, the agent is free to plan, act, and adjust without asking. At the edge, it stops or hands the decision to a person. Draw the edges first. Skip them and you find out what happens when you go over the edge.

*Next Issue: It’s review time, y'all. We are going back to the first set of issues to review and remember where we started. No pop quiz, I promise!*
