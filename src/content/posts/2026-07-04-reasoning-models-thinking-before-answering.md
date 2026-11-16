---
title: "Reasoning Models: Thinking Before Answering"
date: 2026-07-04
topics: ['ai-explained']
excerpt: "Large Language Models have advanced to the point where they no longer just rely on a gut chain reaction response. They now process prompts before trying to answer them. Think..."
source: linkedin-article
sourceUrl: "https://www.linkedin.com/pulse/reasoning-models-thinking-before-answering-daniel-wipert-eenac"
published: true
---
Large Language Models have advanced to the point where they no longer just rely on a gut chain reaction response. They now process prompts before trying to answer them. Think of it like an old-school detective. He is at a crime scene. His gut tells him that Col Mustard did it with the candlestick in the library. Traditional large language models would just guess based on the info they had at the start of the game of Clue. Not super effective or accurate. Now models spend time investigating the clues to make a more informed decision and perhaps win the game.

### Cogito, Ergo Eum

This newer type of large language model that analyzes the prompt before generating a response is called a **Reasoning Model**, *a model that works through a problem in steps before giving a final answer, rather than replying immediately*. Most models you work with now are reasoning models. They have become the norm. The process we call “reasoning” is really just **chain-of-thought, ***the step-by-step working the model produces on the way to its answer*.

This extra processing does not come for free, of course. Breaking down a prompt and then making a plan to answer it takes extra **inference-time**, *the duration required for a trained machine learning model to process an input and generate an output*. Older models just answered based on their training data, which was fast. Reasoning models create a plan of action to answer via increased inference-time.

Another thing to consider with reasoning models is that the added planning and inference time will increase **latency**, *the delay between your question and the answer*. The best way to see this is by opening Gemini. Choose the normal Gemini model and ask a question. Now select the Flash model and ask the same thing. You will see latency in action.

Ask the normal model, “Why did World War 1 start?” and then the same in the flash model. While the flash model will be much faster, the answer will be probably much less robust than the normal or pro model. Large Language Models come in many different forms; some are better for complex multi-step questions, and others are great for super fast, low-stakes questions.

### Picking The Right Car

As you start to incorporate Gen AI into your daily workflows, it is important that you select the right type of model for your work. For example, if you have a messy expense report that is due EOD, you might be tempted to just toss it at any model and say, "Make this make sense." AI only works as well as you set it up. Cheap and indiscriminate prompting mixed with no model strategy is going to be a bad time. For something like an expense response that needs to read receipts from varying formats and then bucket them into the correct accounting category, you need both a well-thought-out prompt and a reasoning model. A flash model won’t cut it.

The best approach to get your expense report done well and quickly starts with creating a **prompt spec, ***a work plan that includes output specifications*. You build that with a reasoning model. Then you let the model do the work. This takes more time (increased latency) due to increased inference time. But you are pulling out the big guns because it's your expense report. If it's wrong, you are going to hear about it. Now, if you just need to quickly draft an email or look up a concept you are not familiar with, just toss that at Gemini Flash. It will take seconds and be in line with your fast workflow. Throw that at Fable 5, and it will just cost you a lot more tokens and slow you down. Choose the right model for the right ask.

### Trust No One

If you have used **Frontier Models**, *foundation model that exhibits capabilities at or exceeding the current state of the art in technical performance, reasoning, and generalization, *then you know exactly how reasoning models function. Anything like the latest ChatGPT or Opus or Gemini Pro will take any prompt and give you an essay in response. They will tell you what they are doing each step of the way to demonstrate their chain-of-reasoning. But showing “reason” is not actual reason. Nor is it a self-audit. Remember, LLMs are incapable of checking their own work, no matter how advanced they are.

This is all to say, even the most advanced model that costs $10 per million tokens cannot be trusted. Honestly, they are mostly going to be right most of the time, but their error rate will never be lower than your typical knowledge worker. So when we say reasoning model, we don’t mean human reason. We really just mean a model that asks itself questions before responding. Fable 5 isn’t going to replace your data analyst. And if you think AI will do that, I have bridge to sell you…

*Next Issue: Gen AI flight training, get your wings...*
