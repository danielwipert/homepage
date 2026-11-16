---
title: "So I finished my little Jev experiment, and the results are pretty awesome"
date: 2026-09-30
topics: ['building-reliable-ai', 'ai-economics']
excerpt: "So I finished my little Jev experiment, and the results are pretty awesome. I had a gut feeling that Jev would turn out to be a great new tool for AI engineers, but it actually..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7511097452146520064"
published: true
---
So I finished my little Jev experiment, and the results are pretty awesome. I had a gut feeling that Jev would turn out to be a great new tool for AI engineers, but it actually exceeded my expectations. Here is what I did:

I took a pretty standard sorting benchmark dataset called Banking77. It is a large set of customer chats and then a large list of labels. The job is to get the right label on each message. It's a benchmark, so the answers are included to see how your build performs.

I put Jev vs Sonnet 5. The new kid on the block vs. a mid-tier Frontier model. The job was simple. Review 1,000 chats, give them the correct label from a list of 77 labels, give it a score on confidence, and then my system decides what to do next. If the confidence score is high enough, we accept the label, and the chat moves down the CX stream. Pretty simple concept and experiment.

The sweet spot here for the AI to auto-sort was around 70%, meaning 70% of the label sorting was all AI, no human. Above that, some of the chats were just too hard to sort to the correct label without some human in the loop for both Jev and Sonnet. At that level of full AI sorting, here were the results:

- Accuracy: Jev was able to maintain a 91.4% level of accuracy on the chats it was able to auto-sort. Sonnet was nipping at its heels at 91.0 % accuracy. I think we can call that a tie.

- Cost: This is where things get pretty astounding. To sort the 1,000 chats, Jev cost $.10, yes 10 cents. Sonnet was $5.25.

I uncovered a lot more with this experiment that I will post on later, but I think my initial read and the PR from Jev seem accurate. For automated tasks, Jev is of similar quality to the mid-tier models from Frontier Labels, and it costs 50x less than them.

You all, this is what I have been talking about for a year now. The model is not king. The model is a node in a system. A system can have dozens, if not hundreds, of LLM calls. This idea that one model will solve all problems... wrong wrong wrong. Applied AI is about the system building with LLMs as nodes within that system.

Jev is the perfect example of what I mean. It is a highly refined and specialized model, yet its impact could be enormous in business process automation. If you need an automated decision in one of your flows, look at Jev first. Very high quality, miniscule cost compared to the big boys.

Check out all the details of my experiment here:

https://lnkd.in/giZ_qYZb
