---
title: "Beyond Text: How AI Sees and Hears"
date: 2026-06-26
topics: ['ai-explained']
excerpt: "AI can not only read, but it can also see and hear. We have focused mostly on the textual aspect of Large Language Models, but Generative AI is much more powerful than that. In..."
source: linkedin-article
sourceUrl: "https://www.linkedin.com/pulse/beyond-text-how-ai-sees-hears-daniel-wipert-yeenc"
published: true
---
AI can not only read, but it can also see and hear. We have focused mostly on the textual aspect of Large Language Models, but Generative AI is much more powerful than that. In actuality, the big breakthrough in Gen AI came from two garage punk computer scientists who rigged a couple of Nvidia GPUs together and trained a neural network to see images. So in reality, Gen AI could see before it could read. Spend 5 minutes with me to learn how AI can see and hear.

Most of the models you use today are called **Multi-Modal Models** *or a model that handles images, audio, and video alongside text*. When I say **Modal **here, what I mean is a uniquea modal. channel of communication. So text is a modal, audio is a modal, images are a modal, and video is a modal. Generative AI was a huge leap forward for computing, but multi-modal models feel like an even bigger leap towards the future. Initially, Gen AI felt a little wonky until you could upload a photo, then audio, then a video, and it could accurately and appropriately respond to your query in all these different formats. It has been a truly amazing moment in human history.

### One Map for Many Modals

Let’s say you have an expense report in a PDF. There is a table in there that you want ChatGPT to explain to you. You take a quick screenshot and upload it. How exactly does ChatGPT see this screenshot?

A classical large language model would be of no help in this situation. It can only process one **Modal**, which is text. A multi-modal model takes the screenshot image and chops it into little tiles. Each tile is then turned into a vector, as we talked about in the last issue, a location in a unique geometric space. In this unique space, both words and images are mapped together. This means the written number “450” and a photo of the same number are neighbors in this world. That is how AI can "see," by combining language and images into the same mathematical space.

It is very important to note that Gen AI is not “seeing” in the way computers used to. This is not old-school OCR (Optical Character Recognition) where a separate program scans for letter shapes and types them out. The model isn't transcribing the image first and reading second. It places the visual content directly into the same meaning space as language and works on both together. The picture is the input, not a thing that has to be converted into text before the model can think about it.

### Seeing Is Not Believing

As you have already learned, all of Generative AI is based on probability, meaning it can easily be wrong. This can be a big problem when your input is not super clear, whether it be an image or audio. Say an invoice you want to analyze is a poorly scanned PDF. That is going to make it hard for the model to accurately predict what the best response will be. Garbage In, Garbage Out is still a motto to live by with Gen AI.

Just like hallucinations in large language models, incorrect outputs are just a fact of life when dealing with images and audio in multi-modal models. There is simply no way around it. The best you can do is reduce the chance of hallucination, but you can never fully eliminate it. And because images and audio are more dynamic than text, you need to be extra careful when using Gen AI in these extra-textual modalities. Be a healthy skeptic.

### You Need to Close the Loop

The verification step of multi-modal Gen AI does not have to be complicated. If you are using a multi-modal model to process expense reports, contracts, or invoices, build one rule into your workflow: anything the model reads that triggers a payment or a legal obligation gets a human eye on the original before it moves. That is not a lack of trust in the tool. That is how you use the tool correctly. The model handles the volume. You handle the stakes.

Most teams already do a version of this without thinking about it. Someone approves the expense before it gets reimbursed. Someone reviews the redlined contract before it goes out. The only change multi-modal AI requires is making sure that the approval step happens after the model reads the document, not instead of it.*** The model is not the last set of eyes. It is the first.***

*Next Issue: How AI models mimic human reasoning…*
