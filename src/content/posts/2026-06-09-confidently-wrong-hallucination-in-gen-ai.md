---
title: "Confidently Wrong - Hallucination in Gen AI"
date: 2026-06-09
topics: ['ai-explained']
excerpt: "You are in a meeting, and the new guy, John, is talking. He is spouting off about the revamped AP process. He sounds confident, poised, and charming. The leadership team is..."
source: linkedin-article
sourceUrl: "https://www.linkedin.com/pulse/confidently-wrong-hallucination-gen-ai-daniel-wipert-klfsc"
published: true
---
You are in a meeting, and the new guy, John, is talking. He is spouting off about the revamped AP process. He sounds confident, poised, and charming. The leadership team is lapping it up. But you realize everything he is saying is either wrong, ill-informed, or just lies. AI hallucinations are John: confident and polished, but totally wrong.

### Feature, Not a Bug

Sounding right and being right are two separate things. Large Language Models are trained to sound right, no matter what. Think about John. He speaks well. He uses corpo jargon that the C-level loves. Best of all, he tells a good story. The problem with John is that he has no idea how anything actually works at the company. He is clueless, a total windbag. Hallucination in Generative AI sounds just like John. Fluent without factuality.

A **Hallucination **is when a model produces fluent output that is fabricated or false, stated as if it were fact. Here we can define **Fluency **as* how natural, confident, and well-formed the output sounds *and **Factuality **as the* truthfulness of any claim or output*. Large Language Models are fine-tuned in training to be fluent. So even when they are wrong, they sound right.

It is vital that you understand hallucination is a feature of AI. It is not a bug. Hallucinations are hardwired into the very DNA of how an LLM works. There is no eliminating them completely. But they are many ways to reduce them. The best way to combat this ingrained aspect of Generative AI is to build your systems with strong **Grounding **or *tying LLM outputs to a verified source instead of the model's own memory*.

### Mad Libs Law

Hallucination can be dangerous and destructive. Just look at how the legal field has been upended by Gen AI. In Mata v. Avianca (2023), a New York lawyer used ChatGPT to research a brief opposing a motion to dismiss. The brief cited six cases as precedent, and none of the six existed. They were entirely fabricated by ChatGPT. The judge described them as bogus decisions with bogus quotes and bogus internal citations. The citations carried false judicial names and fabricated docket numbers, so they read like real law.

Oh so one lawyer did this? No big deal. How about Morgan & Morgan v. Walmart (2025)? America's largest personal injury firm used its own in-house AI tool, branded MX2, which hallucinated eight of the nine cases cited in pretrial motions against Walmart. The partner never reviewed the filing before signing it. In May 2026, more than a year later, the same partner was barred from joining a high-profile case against Harvard. A Massachusetts judge pointed to the previous sanction for using Gen AI and called it a serious ethical lapse. The fake citation followed him.

The pattern is the same every time. The AI output read like real law, so nobody checked it. That is the danger. A hallucination does not announce itself with bad grammar or a hedge. It arrives polished, confident, and formatted to sound like the truth. It slips through. The damage is more than just being wrong or embarrassed. The true loss with hallucinations being incorporated into your work output is the loss of trust, which is nearly impossible to win back. LLMs and Gen AI are immensely powerful, but they can easily be mishandled and turned back against you.

### Who Watches the Watchmen

A large language model can not grade its own work. It produces text that is likely, not text that is checked or verified as true. When it writes a law case citation, it is not consulting a record and reporting back. It is generating something that looks like a case citation, because citations look a certain way. There is no internal step where it asks whether the thing it just wrote is true or not. That step does not exist inside the model.

A system that produces output and never checks it against reality is running open (remember **Open Loop)**. Information goes out, nothing comes back to correct it, and errors get sent out as facts. That is the open loop in every case above. The model produced the citation, the lawyer forwarded it, the court received it, and it became an official filing without anyone once checking that it was real.

Closing the Loop is not that complicated. But it has to be deliberate and well-planned, because the model will not do it for you. Closing open loops usually happens via two methods. The first is grounding: tying the output to a real source instead of the model's memory, so each claim cites a source you can open and read. The second is a human check, aka** Human in the Loop**: *AI makes a recommendation, but it cannot act without explicit human approval.*

Neither move is glamorous. But both methods are what separate a useful tool from one that can burn down your credibility. The model brings the fluency; you bring the verification. That step belongs to you, not the model.

### Deep Dive: Why Does AI Hallucinate?

An LLM does not store facts the way a database does. It is trained to predict the next chunk of text, called a token, that is most likely to follow what came before. For any text that shows up often in the training data set, the pattern is strong and the model is usually right. But it is a prediction, which is always probabilistic. Additionally, the LLM probably does not have access to every court case ever, so it easily could be pulling words out of thin air. If there is an edge case, LLMs will often get those wrong. Even worse, when it is wrong, the LLM knows how to present the text and data so that it looks right. The made-up law cases looked correct because the LLM knew the format of a docket number and the general language of a legal judgment. It could easily mimic actual cases. That is why hallucination can be so dangerous.

There is a second reason why AI hallucinates, and it is about how these models are graded. A 2025 OpenAI paper argued that models hallucinate because training rewards guessing over admitting uncertainty. Think of a test where a blank scores zero but a guess might get you some points. The model learns to always answer and to sound sure when it does. That is why hallucination is built in, not bolted on, and why a bigger model does not make it vanish. You are not looking at a glitch. You are looking at a system doing what it was rewarded to do.

*Next Issue… If a model can be confidently wrong, what keeps it honest is the context you give it. *
