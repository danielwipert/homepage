---
title: "Prompting As Instruction Design"
date: 2026-07-07
topics: ['ai-explained']
excerpt: "Let’s be honest with ourselves. We are often winging it when using Gen AI. You need a fast answer or to draft an email to your landlord; you just tell ChatGPT what you want and..."
source: linkedin-article
sourceUrl: "https://www.linkedin.com/pulse/prompting-instruction-design-daniel-wipert-f1z3c"
published: true
---
Let’s be honest with ourselves. We are often winging it when using Gen AI. You need a fast answer or to draft an email to your landlord; you just tell ChatGPT what you want and let it fly. For something quick and dumb, that works. But what happens when the severity of the task rises above this level of daily banality? What if you need a good and well-researched answer? What if you need something to be true?

We all improv prompt. We view AI as our personal assistant and speak to it in stream of consciousness. The problem we run into is that LLMs are not smart, and they can not reason. It is a parlor trick of deep learning mixed with probability. You already know this because you read the previous 9 issues of this newsletter.

You should view prompting like you are an air traffic controller, and you are giving instructions to land the plane. Your improv prompt is like working a single runway at a country airport. “Yeah, runway 2 is open; you are cleared to land.” But what if the plane is trying to land at O’Hare over Thanksgiving weekend? That is like when your boss requests a huge report that requires data mining, analysis, and strategic insight, all wrapped in a board-ready presentation. Winging it won’t work here. Let’s talk about how you can become a real ATC for your AI wingman.

### Learning to Fly

Click on a live ATC feed and you will see how complicated directing air traffic can be. But if you listen closely, you will start to hear the pattern and code. ATC gives very specific instructions at specific moments in the process to make sure planes don’t hit each other. 140k flights land safely every day, so ATC must be doing something right.

How can we replicate this ATC vibe when working with Gen AI? How can we give the LLM the right instructions in the right way to get what we want? This concept is called **Prompt Engineering**. Yeah, I know you have heard of it. It was the buzzword in 2024. But it is still important. It is pretty simple to create a solid prompt quickly. Here are some basic tools that can help:

**Who **- As in, who is the model supposed to be? The model’s persona is anchored by the opening instruction, 'You are a contracts analyst.' This directive functions as a callsign, effectively shaping the model's vocabulary and ensuring it adheres to the appropriate level of caution and professional standards.

**What **- Specify a precise deliverable. Instead of stating a general topic, define exactly what the model should produce. Think of this like a flight clearance: use a specific destination, such as "United 429, cleared to Chicago O'Hare airport, maintain flight level 3-8-0, expect further routing," rather than a vague instruction like "Cleared to Chicago."

**Where **- Identify the source material. Just as an airway name like "Via V6" dictates the exact path a pilot must follow, citing a specific source tells the model exactly where to find its information. This is the difference between a response grounded in your specific contract and one hallucinated from the model's general training memory. Also, the more information and data you give the model, the better. It can not read your mind. Upload spreadsheets, pdfs, anything that will help it answer better.

**How **- Define the output format. Just as ATC relies on standardized, unambiguous phraseology to prevent confusion while talking to multiple planes, you must dictate the structure of the response. Whether you require a table, bullet points, or a concise one-line verdict, specifying the shape of the answer is critical. If you do not explicitly define the format, the model will choose for you.

**Constraints **- Establish the hard limits. In aviation, an instruction to "climb and maintain 8,000" is a non-negotiable directive, not a suggestion. Treat your prompt constraints the same way. Whether you need a response under 200 words, a scope limited to specific clauses, or exactly five bullet points, be precise. Define the boundaries clearly, because if you don't set the hard numbers, the model will fly its own route.

**Escalation Rule **- Define how to handle uncertainty. In aviation, guessing an instruction is a safety violation; pilots are trained to use "say again" or "unable" to prevent errors. You must build this same safeguard into your prompt.

Explicitly instruct the model: if it cannot fulfill a request, it must write "UNCLEAR" and ask for clarification rather than hallucinating an answer. Because models are often trained to be helpful, they will naturally try to "guess" rather than admit a gap in knowledge. Your escalation rule provides the explicit permission they need to pause, stop, and ask for help instead of providing a wrong answer.

You should know most of the above by now, but it is a good reminder. Your prompt is an instruction. I am not saying you need a 4-page schematic to ask a simple question. But improv prompting is not for the workplace.

### An Example

Let’s walk through a simple example to clarify the importance of prompt engineering. Let’s say you have a contract you need to review, maybe for a new 3PL. It’s important. You could just upload the docx and prompt, “Summarize this contract.” Now if you are using anything at the level of ChatGPT, the model will return a very polished, confident, and robust summary. That’s the problem. As I will say one million times in this newsletter, LLMs will respond fully with high confidence even when they are not really sure of what they are saying.

Instead, you could prompt this: “You are a contracts analyst. List the 5 highest-risk clauses as bullets. Cite the section for each. If you cannot tell whether a clause is risky, write UNCLEAR.” That’s not perfect, but it's better. For anything serious, I prefer **Prompt Speccing, ***using the LLM to create a prompt spec before analyzing data or documents. *That’s pretty meta for some people, but that is actually the true power of LLMs. It is a language processor, not a thought processor. You are the thinker, so think and use the LLM as your assistant.

### The Readback

If you have ever listened to actual air traffic control chatter, you will notice that the pilot always repeats what the ATC says. Why is that? By repeating the instructions back, the pilot confirms they heard the numbers, headings, and altitudes correctly. It turns a one-way command into a two-way agreement. Use that as inspiration when you are prompting. Get the LLM to confirm what you want and how you want it before it stalls into a hallucination tailspin.

This is Closing the Loop. The whole point of this newsletter is how we can move Gen AI from a powerful and dangerous technology to the bedrock of the new economy. We cannot do that by letting AI fly the plane however it wants. AI is a technology. It does not reason. It does not have judgement. It can not think. That is what we do, you know, as humans. So let’s take the reins back and start telling AI how to fly.

*Next Week: Now that you can fly, we need to land*
