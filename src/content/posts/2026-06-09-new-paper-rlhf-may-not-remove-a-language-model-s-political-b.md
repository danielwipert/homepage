---
title: "New Paper: RLHF may not remove a language model’s political bias"
date: 2026-06-09
topics: ['research-notes']
excerpt: "New Paper: RLHF may not remove a language model’s political bias. It just teaches the model when not to say it out loud. A new paper, The Neutral Mask, looks at Llama 3.1 8B..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7470100427762724866"
published: true
---
New Paper: RLHF may not remove a language model’s political bias. It just teaches the model when not to say it out loud.

A new paper, The Neutral Mask, looks at Llama 3.1 8B before and after alignment training and finds something more interesting than the usual debate over whether models “lean left” or “lean right.” The claim is that the model’s internal partisan geometry remains largely intact, while the path from that geometry to the generated answer is weakened.

After RLHF (Reinforcement Learning from Human Feedback), the Instruct model produces the familiar neutral register: “this is a complex issue,” “there are arguments on both sides,” “perspectives vary.” The answer becomes balanced. But the underlying representational structure is not erased. It is compressed, rerouted, and masked.

The key phrase is “functional, not structural.” Alignment training appears to produce neutral behavior under ordinary conditions without necessarily removing the latent machinery that can generate partisan text. The model has not forgotten the road. It has been trained not to take it.

For companies deploying LLMs, this is a different kind of model risk. A neutral answer may be a behavioral achievement rather than a structural guarantee. That is still useful. In many products, it may be exactly what you want. But it is not the same thing as saying the model has been made neutral in any deep sense.

The practical question is not, “Is the model aligned?” It is, “What has alignment suppressed, what has it removed, and under what conditions does the suppressed behavior return?”

That matters for moderation, political content, personalization, customer support, education, search, and any product where a model adapts to the user over time. A model that is good at telling users what they want to hear can also give different users different versions of the same reality.

The paper is limited: one model family, one domain, one set of methods. It should not be treated as a sweeping verdict on every commercial model. But as a warning about how alignment may work in practice, it is a useful read.

Paper: The Neutral Mask: How RLHF Provides Shallow Alignment while

Leaving Partisan Structure Intact in a Large Language Model, Wendy K. Tam
