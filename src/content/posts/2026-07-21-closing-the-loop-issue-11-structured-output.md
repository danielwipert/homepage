---
title: "Closing the Loop · Issue 11 ·  Structured Output"
date: 2026-07-21
topics: ['ai-explained']
excerpt: "Pretend you work at USPS and you have two outbound packages in front of you. One has a handwritten return and ship-to address; the other has a printed label with a barcode...."
source: linkedin-article
sourceUrl: "https://www.linkedin.com/pulse/closing-loop-issue-11-structured-output-daniel-wipert-qzlwc"
published: true
---
Pretend you work at USPS and you have two outbound packages in front of you. One has a handwritten return and ship-to address; the other has a printed label with a barcode. With the first package, you have to read the writing, if you can, then manually enter all the details into a computer, then print the label, place it on the package, and finally scan it. With the second package, you just scan it. That is the difference between structured and unstructured output.

Large Language Models are always probabilistic. This means every generation is different. Unless you put guardrails on how the LLM acts, the output will have too much variation to incorporate in an automated workflow. One of the best ways to do that is to create a formatted output for the LLM to produce. Just like a shipping label contains all the required information to ship an item from point a to point b. You want your LLM output to have all the information you need to complete the task at hand. That requires you to plan the output before you ever query the LLM.

### Bring Order to the Chaos

A shipping label is a type of **Structured Output** - *a response organized into named fields, categories, and values that software can read and act on without human interpretation*. You can create something very similar when dealing with LLMs and AI Agents. The most used protocol or framework for communicating between computers, apps, or agents is **JSON (JavaScript Object Notation)** - a lightweight format used for storing and transporting data. Think of it as a universal language that allows different computer systems or LLMs to talk to each other and share information easily.

The amazing thing about JSON is how open-ended it is beyond the basic formatting rules. You can create your own label and content system within JSON. This is called a **Schema **- *the template that specifies which fields are required, what type of data goes in each one, and what values are allowed*. A shipping label is structured output with a locked-in schema. You have to include a ship-to street address, state, zip code, etc. JSON allows you to build a customized schema to include or exclude any data points you want so you are not locked into specific fields. It is very flexible and a great way to connect any type of computing system or app to another, including LLMs and AI Agents.

For example, let’s say you are building an LLM pipeline to ingest a couple of spreadsheets, then compute KPIs, and then create a report. If you are following Applied AI system design theory, the generation and verification layers hould be handled by two different models, or maybe an LLM passes its output to be checked via a Python script. In both cases, you need the LLM to ingest the spreadsheets, review them, and then output its findings into a very specific format (JSON) so that another LLM or Python can review the work. The second layer in this system, the verifier, will need to **Parse **the outputted JSON from the first layer or LLM. Parsing simply means *reading a piece of text and converting it into a usable format that your programming language can understand*.

This is how you can keep Gen AI from flying off the tracks. There is a lot of nuance to corralling LLMs, but using JSON outputs is a good starting point.

### Prose vs JSON

One of the most remarkable features of Large Language Models is that they take in written inputs and then output very readable and often logical responses. They are natural language processors at their core. The problem with a prose output is that it is much too wobbly and mutable to be used in automation workflows. Automation requires data or text to be uniformly formatted so one part of the system can talk to the others.

Think about a customer service system that is starting to incorporate Gen AI. The goal is to use AI to review incoming tickets and route them to the correct bucket for agents to answer or maybe for even an automated response. A customer writes in: "I've been trying to reset my password for three days and nobody has gotten back to me. I'm about to cancel." This gets sent to an LLM to review, and you have two options for how the LLM will output its answer:

**Prose Output**: a paragraph summarizing the issue, suggesting it might be urgent, recommending the identity team might want to look at it. A human has to read that paragraph, decide the priority, and forward it. That takes time. Multiply that time by hundreds of tickets a day.

**Structured Output**: The LLM will only output these JSON fields (category: "account_access", urgency: 4, suggested_team: "identity", needs_human: true, churn_risk: "high") Software reads the fields, routes the ticket to the identity team, flags it for a manager, and logs the churn risk. No one has to read a paragraph, and the ticket gets to the right person on the shortest timeline.

Same AI, same input, vastly different results, all because of how the data was requested and shaped via the output.

### Structured Outputs Create Systems

A free-form prose output in an automated workflow is a silent failure: the system cannot validate what it cannot parse. Consider the same AI pipeline above designed to route inbound support emails. If the LLM outputs a paragraph instead of structured data, a script might catch explicit phrases like "This should go to sales," but completely miss equivalents like "the commercial team." The ticket misroutes silently without throwing an error, sitting undetected until a customer escalates.

The rule is simple: if a human has to read the AI's output before the next step can run, you do not have an automation. Structured outputs can help turn an AI chatbot into a reliable and scalable business system. You cannot measure, log, or correct what you cannot parse. A JSON output with a numerical score of 4 for the urgency field can be benchmarked against historical data and tracked for spikes; a paragraph stating a ticket "seems fairly urgent" offers nothing for a program to evaluate. Defined fields supply the rigid data structure needed to close the feedback loop, monitor performance, and govern the system at scale.

*Next Issue: controlling the input the model sees. Context engineering is where demos become working systems.*
