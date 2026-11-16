---
title: "AI Governance Has a Cost Problem"
date: 2026-06-24
topics: ['ai-economics']
excerpt: "ChatGPT felt like magic the first time you used it, and your manager said as much when she told you to start experimenting. Then it got better, and better again. The CEO issued..."
source: linkedin-article
sourceUrl: "https://www.linkedin.com/pulse/ai-governance-has-cost-problem-daniel-wipert-bfz7c"
published: true
---
ChatGPT felt like magic the first time you used it, and your manager said as much when she told you to start experimenting. Then it got better, and better again. The CEO issued a directive: "Everyone use AI now!” Then a dozen pilots launched with blank checks. The company declared itself "AI First," whatever that meant. Budgets swelled so that no one would be caught falling behind. For two giddy years, from 2023 to 2025, much of the corporate world ran a fever.

In 2026, the bill came due. The magical thinking skipped over the economic gravity of running an actual business, and the same executives who preached relentless cost discipline approved thousands, then millions, then billions for AI without blinking. They had been sold a story by Sam Altman, by Jensen Huang, and, most of all, by themselves. They wanted to believe AI would dissolve their most stubborn expense: the cost of paying people.

Instead of the post-work AGI future they were promised, CEOs got token bills that made their CFO want to puke. The technology hadn't failed. What collapsed was the fairy tale. The exuberance faded quickly, and the industry woke up with a hangover and a bar tab it couldn't quite account for. Sorting through the haze, companies have landed on a simpler, more painful question. Not "What can AI do for us?" but "How do we build AI into the business without going broke?" That question is harder, and it is the right one for right now.

The shift happening now is from demonstration to production. A pilot is a performance; production is a job. The difference, once you total it up, is mostly money. Agentic AI stops penciling out when all you have is an API key and a stack of elaborate prompts. You can easily spend five times what it would have cost to keep the specialist who was doing the work in the first place.

### Ground the Pilots

An AI pilot lives in the kindest possible weather. It flatters the tool. The audience is small, the usage irregular, the consequences contained. The organization can afford ambiguity, because the ambiguity hasn't yet become an invoice. Production is another climate entirely. It has volume and repetition, customers and exceptions, approvals and audits and handoffs and all the failure modes that come with them. A tool that looked cheap for ten users behaves differently across ten thousand tasks. A workflow that looked elegant in a conference room turns out to need human review, integration with other systems, monitoring, escalation rules, and someone in finance wondering why the bill no longer resembles the forecast.

This is where **AI Cost Governance** begins to take shape. The first generation of AI governance was, understandably, about risk: hallucinations, privacy, compliance, bias, security, and acceptable use. Those concerns all remain very real. But they were never the whole of it. A system can be perfectly compliant and economically ruinous; it can be safe enough to deploy and still too opaque to manage. A business, after all, exists to make money. At scale, AI Governance must also become a cost discipline.

### AI is an Operating Cost

Once AI enters production, the bill gets harder to read. The first number is always easy to find (the license fee, the seat price, the API rate) and it offers the comforting illusion that the cost has been named, contained, and filed in the proper column. But the subscription is a floor, not a ceiling, and the vendors know it. The play is familiar by now: offer a flat, all-you-can-eat price, wait until the tool is indispensable, then move the meter to usage. GitHub Copilot walked the whole path in stages: a flat seat price, then in 2025 monthly request caps with per-request overages, and by June 2026 full token-based billing. Some heavy users of its agentic features projected bills 10x higher than their previous monthly cost.

That is the half the vendor controls. The other half is yours. The real expense begins when the tool is woven into the work: systems connected, employees trained, outputs reviewed, mistakes handled, exceptions escalated, and it grows as model calls multiply quietly inside automated processes, as workflows come to lean on the tool, as the company builds the monitoring and routing and support required to keep it running. Somewhere in there, AI stops being a purchase and becomes an operating cost.

That is what cost governance is for. It isn't a matter of tracking what the vendor charged; it's the discipline of seeing where usage is growing, tracing it back to the teams and workflows that generate it, understanding the business activity it serves, and deciding whether the economics still hold. None of which makes the initial access price unimportant, just very incomplete. A company that governs the visible price alone may believe it has controlled the cost when it has merely controlled the line item easiest to see. The hard part starts after the contract is signed, when AI becomes part of how the business actually runs.

*AI Cost Governance requires four elements, each building on the other*

### Build Visibility from the Ground Up

The first discioline of AI Cost Governance is **visibility**, which sounds like the overture to a familiar corporate ritual of dashboards, reports, status meetings, metrics accumulating faster than decisions. But visibility isn't bureaucracy when the thing being measured can quietly generate real exposure. It is simply the precondition for managing anything at all. A company that can't see where AI is used can't know which workflows are coming to depend on it, which activities are consuming resources, or whether a given expense belongs to customer support, legal review, engineering, marketing, or some automated process that no longer has an obvious owner.

A monthly total won't do. "We spent more on AI this month" is an accounting fact, not a management system. The useful questions live closer to the work: Which workflow created the cost? Which model ran, at whose request? Which customer, document, or decision required it? Was the activity an experiment, a habit, or already load-bearing? AI cost doesn't become governable at the level of the invoice. It becomes governable at the level of the activity that created it.

### Split the Bill

The second discipline is **attribution**, and it overrides the inherent fallacy of aggregate spend, which makes everyone, and therefore no one, responsible. The total tells leaders that money went somewhere, but not why, or for whom, or toward what. And AI is not one economic object. An employee chatbot, a support agent, a legal-review tool, a coding assistant, and a recommendation engine may all wear the same label, yet they behave nothing alike. They differ in volume, risk, value, error cost, review burden, and operational weight. To call all of it "AI Spend" is convenient and mostly useless.

So the cost has to be traced to its source: by team, workflow, product, segment, vendor, model, whatever unit the business actually runs on. This isn't about blame. This is about legibility. When the people who create AI costs are separated from the budget that pays for it, no one feels its real weight. The employee using the tool experiences it as free. Finance sees a number with no story attached to it. Leadership sees a line item that keeps growing and can't say why. A cost like that can't be governed in the aggregate; only once you can name who created it, who owns it, and what it was for. Without those three answers, there's no accountability. There's just a bill no one can explain.

### Start Reading the Meter

The third discipline is **budgeting **that tracks usage. Traditional software budgeting likes stable shapes: licenses, seats, renewals. AI seldom cooperates. The contract looks fixed while the activity beneath it oscillates wildly. The interface looks like software while the economics begin to resemble a metered utility, or a labor substitute, or a production input. Agentic systems sharpen the contrast. A person who opens a chatbot a few times a week is one kind of exposure; a background process calling models all day to classify, retrieve, summarize, decide, and escalate is another entirely. The second has turned AI into a recurring mechanism inside the business.

That moves the unit of budgeting away from the seat and toward the workflow, the document, the transaction, the engineering task, whatever the AI is actually metabolizing. Once it's embedded in the work, the budget has to follow the work, which means budgeting can no longer sit apart from operations. No single team can own this. Finance has to see how the tool is actually being used. Engineering has to see what that usage costs. And leadership has to catch the moment a promising experiment has quietly become infrastructure the business now depends on. If you budget AI like ordinary software, you will miss how vital and dynamic its costs will be. It is a metered utility that goes up and down with usage, not a per-seat stable cost.

### You Can't Fly A Plane without a Yoke

The fourth discipline is the one most easily confused with the others. Every company has policies, and policies matter, but they are better at declaring intentions than producing control. A policy can say AI should be used responsibly. It cannot, by itself, halt a runaway workflow, route a trivial task to a cheaper model, flag a manager when usage crosses a line, or show finance which division is driving the bill. For that you need **instruments**: usage monitoring, budget alerts, approval thresholds, rate limits, model routing, chargeback and showback, and separate rules for experiments and for production. Where AI touches regulated, high-volume, or customer-facing work, the machinery has to be formal; elsewhere it can stay light.

The aim is not to bury a useful technology in compliance. It is to keep it from becoming an ungoverned operating expense. Good governance shouldn't make adoption harder to justify; it should make adoption easier to understand. It will show where AI is used, what it costs, who owns it, and whether the case for it still holds. Without instruments, governance is a statement of preference. With them, it becomes a system of control.

### The lesson of the cloud

All of which is why "AI FinOps," or something like it, is starting to sound less like a buzzword than a necessity. Cloud computing went through the same education. At first the cloud was freedom (no servers, no waiting, no procurement cycle) and then freedom became sprawl, and companies learned that flexibility without cost visibility wasn't strategy but drift. AI isn't the cloud, but the temptation rhymes. The easier it is to use, the easier it is to lose track of; the more valuable it becomes, the deeper it embeds; and the deeper it embeds, the less plausible its cost will be governed through procurement alone.

The executive question, then, is no longer "Are we using AI?" or even "Are we using it safely?" It is sharper and less flattering: can the organization see, attribute, and control the economics of AI in production? Can it tell an experiment from a system, connect a cost to an owner, explain why one model is used instead of another, and say whether a given expense bought a productivity gain, a better customer experience, a reduction in risk? These are unglamorous questions, offering none of the thrill of a demo. But firms are not run on demos. They are run on recurring decisions made under constraint. They are run on reduced costs and better outputs.

### Thesis of AI Cost Governance

My argument has limits. Not every pilot needs heavy oversight. Not every prompt an employee types should be logged like a financial transaction. A weekend experiment is not a production system. A tool a person checks before it acts is not the same as one that runs on its own. A tool a handful of people use inside the company is not the same as one running thousands of times a day in front of customers. The oversight should match the stakes. My thesis is this: **When AI becomes scaled production infrastructure, economic control requires cost governance inside the relevant deployment boundary**. When the business genuinely runs on AI, you can't keep the money under control without managing cost inside the system itself. Or even sharper: At scale, you can't control what AI costs you from a contract, you have to govern it where the work and usage actually happen.

This sounds deceptively straightforward. But look at your company right now. How far away are you from this? My guess is many, many miles, and you can't even see it on the horizon. This is the future of AI Governance. While we solve the myriad problems with privacy, reliability, and trustworthiness, we must face the ultimate question: is AI actually worth it? The answer often will not be kind. But I believe that when we honestly say NO, we will actually start building the next era of Gen AI, which will be smaller, faster, and more modular.

### The Real Winner

The next phase of enterprise AI won't belong to whoever adopts the most tools or buys access to the most capable model. It will belong to whoever can make AI governable once the novelty has worn off, who can ask not only whether a model can perform a task but whether the task, the model, the workflow, the usage, the review burden, and the cost all make sense together. It is a quieter question than the one dominating the conversation, and a good deal closer to the actual life of a firm. AI governance began as an argument about risk. ***It is becoming a discipline of economic control***. The companies that win will not be the ones that adopted AI fastest. The winners will be the ones who can explain what AI is doing, what it costs, and why it is worth it.
