---
title: "Closing the Loop · Issue 12 · Context Engineering - Prep Before Prompting"
date: 2026-07-25
topics: ['ai-explained']
excerpt: "Walk into a serious kitchen an hour before it opens and you will not see cooking. You will see prep. Onions chopped and waiting in a bowl. Spices weighed out. The sauce is..."
source: linkedin-article
sourceUrl: "https://www.linkedin.com/pulse/closing-loop-issue-12-context-engineering-prep-before-daniel-wipert-ouusc"
published: true
---
Walk into a serious kitchen an hour before it opens and you will not see cooking. You will see prep. Onions chopped and waiting in a bowl. Spices weighed out. The sauce is already made and resting. Cooks call this *mise en place*, everything in its place. Cooking is fast and loud. The prep is quiet, and it is the most important element outside the actual cooking itself. Give a brilliant cook last week's fish, and no amount of skill will save the dish.

AI works the same way. When a model gives a bad answer, the instinct is to fix the prompt or even change the model. Reword it, sharpen it, try again. But the wording is the cooking. The real work already happened in the material you staged for the model to use, aka The Prep. Feed it the wrong ingredients, and the best-worded prompt still plates a bad answer. This is five minutes on the part of AI that actually decides the answer. And it is not the prompt.

### Prepping Your Prompt

The AI version of *mise en place* is called **Context Engineering** - *the work of assembling the right information (instructions, examples, relevant documents, and recent history) into the model's view before it answers*. Just like in cooking, prepping your AI is very important before you start making actual calls or prompts to the model. If you do properly prep, your outputs are going to be undercooked or just wrong.

We need to do a quick review session on **Context **and the **Context Window**. Generative AI creates new content by learning patterns from massive datasets. Context provides the background information and instructions that shape its output, while the Context Window is the strict token limit defining how much data the model can simultaneously process in a single pass. Understanding these concepts is crucial because it helps you recognize why dropping long documents or messy chat histories into a prompt can cause the AI to miss vital instructions or hallucinate.

Context Engineering is the AI craft of prepping your kitchen before the dinner rush, carefully chopping, measuring, and plating the right background information, instructions, and examples so the model has everything it needs right at its fingertips. It directly addresses the limitations of the Context Window by rationing your limited counter space, prioritizing essential ingredients so critical instructions never get tossed in the trash due to token constraints. By actively managing every component on the line, you ensure your final dish is executed with peak precision, keeping the output fully cooked, flavorful, and free of hallucinations or information dropouts.

### Prompting is Cooking, Prepping is Context Engineering.

Picture an AI assistant as a cook who never leaves the stove. A company wants to utilize this AI assistant to answer one question for the sales team: "What is our price for this product?” Someone has clearly done a lot of work on the recipe, because the wording of the prompt is clean and careful. Yet the dishes keep coming back slightly off. Not inedible, just wrong enough to send back. So the team does what feels natural and reworks the recipe, tightening the phrasing, adding a line here, trying it ten different ways, and none of it changes what lands on the plate.

The recipe or prompt was never the problem. Back at the prep station, someone had set out last year's price list, and that was the bowl the cook kept reaching into. Every answer came out fluent and confident and quietly wrong, seasoned perfectly, built from a stale ingredient. The model was not confused any more than a cook is confused for using the ingredients they are given. The model works with what it was handed, but the context here was stale.

The fix is not changing the recipe or getting a new cook (model swapping). Change out the stale price list for the current one, restock the bowl, and the same plain prompt starts plating correct answers. That is the whole lesson of mise en place. When the ingredients are stale or disorganized, no technique can save the dish. Before you rewrite the recipe, walk back to the station and check what got staged. That is Context Engineering.

### Prepping Tips for Context Engineering

A **System Prompt** is the standing set of instructions that sits above every single request, not just this one. It sets the role, the rules, the tone, and the hard boundaries the model keeps for the whole session. In a kitchen, it is the standing rules every cook follows on every plate, all night long, no matter what any single customer orders.

A **Knowledge Base** is a persistent set of documents attached to your workspace so the model can draw on them in every conversation, without you staging them by hand each time. When you drop files into "Project Files" or "Sources," you are stocking a pantry that stays full between services. Retrieval is the cook walking to that pantry for one ingredient; the knowledge base is the pantry itself, stocked once and always standing ready with well-organized and correct data.

**Few-Shot Examples** are worked examples you stage inside the context so the model copies the pattern you want. Show it two support tickets already sorted the right way, and the third comes back in the same shape. Give it nothing to copy and just describe what you want in words, and that is **zero-shot**. It is the difference between handing the cook a reference plate to match vs telling them, "Make it look nice!"

A **Prompt Template** is a reusable prompt skeleton with blanks you fill in with fresh material each time. Write the instructions once, then slot in today's price list, this customer's record, the current policy. It is a standard recipe card where only the ingredients change.

### Check the Prep

The pricing assistant is not a freak case. It is one of the most common ways generative AI fails in the real world. An answer comes back wrong, and everyone in the room reaches for the prompt. Because the prompt is the part you can fully see. So the team goes to work on it. Weeks vanish into testing phrasings, reshuffling instructions, and hunting for the one magic sentence that fixes everything. It never comes. This is a frustrated cook adding salt, then more salt, to a dish built from spoiled fish. No amount of seasoning saves it. The real defect had been sitting back at the prep station the whole time, in the material nobody checked: an out-of-date document, the wrong customer's record, a policy that never made it into the bowl.

And that mistake costs you twice. First, in all the effort poured into the one lever that was never broken, the prompt. Second, quieter and worse, the wrong answers slip into real business decisions while everyone stares at the prompt. So flip the order. Make the context your first question, not your last. When an answer comes back wrong, do not touch a word of the prompt until you know the model was handed the right, current information. Check the prep first. Fix the prompt and the model last.

*The prompt is the question. The context is the knowledge. Both have to be right. *

*Next Issue: The richest source of good context is your own data. An introduction to RAG and grounding AI in your company's knowledge.*
