---
title: "Large Language Models 101"
date: 2026-06-06
topics: ['ai-explained']
excerpt: "Start texting someone on your phone. Your text app will predict the next word in your sentence before you write it. As an experiment, start writing a text and just pick the..."
source: linkedin-article
sourceUrl: "https://www.linkedin.com/pulse/large-language-models-101-daniel-wipert-j7wzc"
published: true
---
Start texting someone on your phone. Your text app will predict the next word in your sentence before you write it. As an experiment, start writing a text and just pick the middle option it offers up, over and over. You are going to end up with nonsense. This is how **Large Language Models** generally work to predict and generate new text and, in turn, how they easily devolve into hallucination. Spend the next 6 minutes with me to dive deeper and get a solid understanding of how Generative AI actually works.

### AI is Token Prediction

You have met a large language model before, in miniature. It is the predictive text on your phone. You type "running a little," and it offers "late." It doesn't know you're late. It has just seen those two words sit next to each other often enough to make an informed prediction.

A **Large Language Model (LLM)** is that same trick at an enormous scale: *a program that writes by predicting what should come next, one small piece of text at a time*. Each piece of text is called a **Token**, and the entire process boils down to “next-token prediction.” The model lays down a likely token, looks at everything written so far, lays down the next, and repeats until the answer is finished. Like laying down words as train tracks.

What makes this process work is the massive amount of language training that happens during a model’s creation. The model reads a huge body of writing and adjusts millions of internal settings, called **Parameters**, until its predictions match the patterns in that text. Think of parameters as dials. Training is the long work of turning every dial until the guessing gets sharp.

Picture your most seasoned sales rep. Ask her the price of a product, and she answers in a second. No checking the system, no hesitation. She has quoted that number a thousand times, and it just comes out. Ninety-nine percent of the time she is right, because she is telling you what it usually costs, and usually that is still true. But yesterday the price changed, and she just handed you the old number with complete confidence.

A language model works the same way. It does not look anything up. When you ask a question, it gives you the answer that most often follows it. Usually that answer is right. But the most common answer is not always the correct one, and when it isn't, the model gives it to you anyway, with the same confidence it shows when it is right.

### Don’t get PIP’d

You are building a deck slide, and you need a KPI metric to back up a key point. So you ask ChatGPT: *What share of customers leave after a single bad experience, and where does that figure come from?* ChatGPT answers quickly: *Eighty-six percent, according to a 2025 McKinsey CX report*. It looks airtight and fits the narrative of your report, so you add it to your slide. The problem is that the cited report is made up, a total fabrication. The AI model produced an answer that looked the part, but it was “all hat, no cattle” as they say down in Texas.

ChatGPT produces fluent and confident outputs. It sounds good enough that there is no need to check the citation, right? You forward the report out to the management team. Your boss reads through it, and she is fascinated by that number. So she looks up the report. Oh wait, it doesn’t exist. Now the entire report is called into question. The hours of work you spent are down the drain, and so is your trust within the org. You got a PIP right around the corner.

A large language model sounds exactly the same whether it is right or wrong. A human expert hesitates when they are unsure. The model never hesitates or doubts, so its confidence tells you nothing.

So flip your instinct. The easier a claim is to check, the more it needs checking. The places that feel most solid, names and figures and dates and sources, are exactly where the model hands you something clean and wrong. Treat the model’s output the way you would treat a draft from a brilliant, fast, well-read assistant who is immune to self-doubt. It is a starting point, not the final product. You need to review, check, and rewrite a lot of it. But it gets the ball rolling.

### Closing an Open Loop

A large language model is a powerful engine for producing text and data, but it has no built-in sensor for truth or reality. It cannot tell if what it writes is true or just something made up. This means LLMs are not able to check their own work, ever. That is an **Open Loop**, *a system where the output is never fed back into the system for review and adjustment*. You close the loop by adding the checks that the model lacks. A person verifies the numbers before the report gets released (aka **Human in the Loop**). Or even, a second system confirms the source actually exists and says what you have cited. Either way, reliability does not live inside the model. It lives inside the system you build around the model.

So use the engine for what it is. It drafts, it summarizes, it rephrases, and it gives you a fast first pass over more text than you could read yourself. It does not certify that any of that is true, and it was never built to. An LLM is a powerful language engine, not an oracle. Treat it as the first half of a loop you are responsible for closing.

### We have the engine. Build the Plane.

I will close this issue with the best analogy I can think of for AI, Generative AI, and LLMs. The models behind Generative AI are like jet engines. They are powerful but also dangerous if not handled or controlled properly. We have not yet built the airplanes to harness the power of jet engines like Anthropic's upcoming Mythos model or ChatGPT 6. All we have right now is like a 1996 Toyota Corolla. What is happening is that we are slapping a jet engine made for a 787 onto our janky Corolla and expecting nothing bad to happen. Bad things will happen.

Our collective mission now is this. Build the plane. Build a plane that can harness the enormous power of LLMs and multi-modal models. We need to build the airframe, the propulsion systems, flight controls, avionics, etc. This is all to say: AI is just beginning. We have many years to go before it reaches anywhere near its potential. Take it slow, respect the immense power of LLMs, and be cautious, but also don’t be afraid. The more you know, the less AI becomes a threat.

*Next week: We do a deeper dive into the bogeyman of AI, Hallucinations! *
