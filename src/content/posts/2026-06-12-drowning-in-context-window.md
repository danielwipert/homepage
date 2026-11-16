---
title: "Drowning in Context (Window)"
date: 2026-06-12
topics: ['ai-explained']
excerpt: "You are three hours into an intense Claude Code session, and your coding partner starts acting like they took a psychedelic. Claude starts repeating themselves, contradicting..."
source: linkedin-article
sourceUrl: "https://www.linkedin.com/pulse/drowning-context-window-daniel-wipert-q2dic"
published: true
---
You are three hours into an intense Claude Code session, and your coding partner starts acting like they took a psychedelic. Claude starts repeating themselves, contradicting decisions you made hours ago, and then starts looping on a simple task. Then it just circles, endlessly spinning. This is LLM brainrot, aka Drowning in Context.

### Dropping Tokens

Think of a ChatGPT session as your work desk. You have your computer, probably a 2nd monitor, mouse and pad, keyboard, that old mug filled with pens, your 4th cup of coffee, and a legal pad for notes. Every inch is spoken for. You got some Chipotle for lunch, and you have to shove your keyboard out of the way to make room for your burrito bowl. The mug full of pens gets pushed off the desk, and the pens spill out all over the floor. This is what happens when you give an LLM too much information. Things start falling off the desk.

Large Language Models have a finite amount of workspace, just like your desk. At some point, it gets too full. Think of the LLM’s work desk as the **Context Window,** *which is essentially the fixed amount of data or tokens it can handle at once*. We can measure this workspace size in **Tokens **or *small chunks of text*. When you are working with ChatGPT or Fable, all your prompts, inputted files, and model answers are stored as tokens. The longer your session or more difficult your asks, the more tokens are consumed and stored. At some point, the desk is full, there is no more room, and you have maxed out the* Context Window***.** That is when the model starts acting odd, repeating things, and forgetting others.

If you max out the context window, tokens start falling off the desk. They disappear. Maybe the question you asked 30 minutes ago falls off the desk. The model then totally forgets what you asked and what it answered. This is where you start to see the LLM fail, loop, and degrade. There is not a backup. No filing cabinet or under-desk storage. Once the context window fills up, tokens from the sessions start dropping off the desk. But when tokens fall off the desk, they are silent, unlike the pen mug that hits your toe, spilling pens everywhere. You will never know when tokens start dropping.

### We’re Gonna Need a Bigger Context Window

Let’s say you have a 200-page contract you need to review. Maybe it’s a new service contract for one of your vendors. In the past, you would need to read and redline the entire thing in MS Word. It would take days. Now you can just upload to ChatGPT and ask the model, "What are the bad things in this contract?" ChatGPT shoots back a list of key risks in maybe 30 seconds.

A miracle, right? No, not really. What actually has happened is that the contract document you uploaded is very long, too long for the context window of the LLM. The model can’t input all those tokens into its context window. Instead of telling you this, it just reviews what it can, not the entire contract, and sends back a very polished and convincing answer. The model will not even read important parts of the contract, but it won’t tell you that. A silent failure, the most dangerous kind.

While context windows have grown, they are limited. The advertised context windows of the biggest models are highly inflated. They start to fall off at maybe 60% of the advertised limit. Also, the bigger the context window gets, the more the model tends to degrade in recall. The most important concept to remember here is this. Your work desk has limited space. You can't just upload 1,000 pages and expect the model to read it all and understand it all. Kind of like a human can’t.

### Ignore Silicon Valley AGI Babble

The fix is not a bigger context window. The better fix is simply understanding and respecting the limits of AI. This might sound hilarious after the bizarre and absurd marketing campaign from Anthropic, telling us Mythos could destroy the world. Contrary to the Silicon Valley collective death cult, AI is not omnipotent. AGI is not here, nor will it be anytime soon.

Here is what you can do now to respect the very real memory limits of Gen AI. Keep your sessions focused and short. When you are doing a long Claude Code session, start a fresh session when the work shifts to a new problem. When you are reviewing a long document, break it into sections and feed them one at a time. Ask the model to summarize what it knows before you move on. Think of it like clearing your desk at the end of the day before starting something new. A clean desk is a productive desk.

The deeper lesson here is about trust. A model that is drowning in context does not tell you it is drowning. It just starts failing quietly: repeating, looping, missing things. The confident answer it gives you after you uploaded that 200-page contract? It felt right. It read well. But it may have been built on only half the document. The danger with AI is never the obvious breakdown. It is the silent one. The token that fell off the desk, the clause on page 170 that the model never saw, and the decision you made three hours ago that the model has now forgotten. Know the limits of your desk. Work within them.

*Next week: AI doesn't read words. It creates coordinates. Learn how to read the map... *
