---
title: "Closing the Loop · Issue 15 · Who Gave the AI Power of Attorney?"
date: 2026-09-16
topics: ['ai-safety-governance', 'ai-explained']
excerpt: "For a while, the AI assistant had a comfortable position in the company. It offered advice without having to live with the consequences. It could write a terrible email, but..."
source: linkedin-article
sourceUrl: "https://www.linkedin.com/pulse/closing-loop-issue-15-who-gave-ai-power-attorney-daniel-wipert-m7udc"
published: true
---
For a while, the AI assistant had a comfortable position in the company. It offered advice without having to live with the consequences. It could write a terrible email, but somebody else had to send it. Then somebody gave it the send button.

This probably did not feel like a historic decision. The AI assistant needed access, an existing login worked, and the person setting it up had six other things to finish before lunch. By Tuesday afternoon, software that used to suggest what a person might do, could do it in that person’s name.

The company had, in effect, handed its AI a power of attorney. It had spent considerably more time choosing the AI than deciding what the AI was allowed to do. Five minutes on what belonged in the document.

## Permission is Authority

A power of attorney answers a practical question: what may someone else do in your name? You might authorize them to pay your bills or sign the paperwork to sell your house. You can give them a little authority or a great deal. Either way, the document is supposed to make the boundaries clear before anyone discovers why boundaries matter.

The person receiving that authority is called an agent. Remember that when we get to Track 4. For now, the useful part is how the work happens. The agent signs an instruction. A bank moves the money, or other parties complete the property transfer. The signature sets the work in motion.

**AI Tool Use** follows a similar arrangement. *The model receives a defined list of actions it can request and uses the results to continue its work.* It might look up an order, check a calendar, or request a refund. The model chooses the action, but separate software carries it out.

The request is made through **Function Calling**. Instead of writing, “Someone should refund this customer,” the model produces a structured instruction specifying the refund action, the order, and the amount. The application checks the request, carries it out if allowed, and returns the result.

Often, the application does this through an **API**, *a defined way for one program to request information or an action from another*. The model asks for a refund. The payment system actually issues it.

People decide which actions are available. The model cannot make a new action executable merely by inventing its name. But it can choose the wrong action from the approved list, supply the wrong amount, or select the wrong customer. As Issue 5 covered, sounding certain is one of its talents. Being right is less consistent.

That makes the distinction between read-only and read-write access especially useful. An assistant that reads an order can misunderstand it. An assistant that changes an order can make its misunderstanding everybody else’s problem.

### In Whose Name?

An instruction is useful only if the receiving system accepts it. Your bank does not move money because a stranger has written an impressive sentence.

The assistant needs a working connection to the company’s systems. That is **Integration**: *connecting it to the CRM, email, finance, or other software so it can read information and, where authorized, make changes.*

These connections have often required custom work. The **Model Context Protocol (MCP)** gives developers a standard way to connect AI applications to information and tools. A connected system advertises what it offers, and a compatible application can discover and use those capabilities. Introduced by Anthropic in late 2024, MCP now sits within the Linux Foundation’s Agentic AI Foundation.

The industry calls it “USB-C for AI,” which is a useful description of the connection. It leaves the more interesting question unanswered: whose account is on the other end?

The assistant connects using a **Credential**, *a login, token, or key that proves an identity to the system*. That identity might belong to an employee. It might be a **service account**, created for software rather than a person. Either way, the system sees an account acting.

The account’s **Permissions** determine *what it can read and what it can change*. The connection gets the assistant through the door. The permissions decide which rooms it can enter and what it can do once inside.

Someone has to approve those permissions. IT can configure the access, but the business owner needs to decide whether the assistant should have it. “The login works” is a technical finding. It is a remarkably poor answer to “Should this software be allowed to change our financial records?”

### The Forecast Has a New Author

Imagine sales operations connects an assistant to the CRM. At first, it has read-only access. Before each call, it summarizes the account. It flags deals that have been sitting in the same stage for sixty days. The reps like it because it saves them from reading their own notes.

The assistant can get a summary wrong, but it cannot alter the records. Then someone notices an opportunity. “It already knows the pipeline. Why are we still making the reps update it?”

This sounds sensible because it is sensible. Data entry consumes time that salespeople would rather spend selling. Give the assistant write access, and it can update deal stages and close dates for them. It can also move a deal from Negotiation to Closed before the customer has agreed to buy anything.

Those fields feed the forecast the CFO reads on Monday. The assistant is now helping write that forecast, although nobody has invited it to explain itself at the meeting.

What began as a convenience for sales reps has become authority over information the company uses to plan. The VP of Sales should approve that change with a clear understanding of what the assistant can alter. Otherwise, she may learn about the decision from the forecast.

### The General Power of Attorney

Now meet Kevin, a fictional employee with a familiar problem. Kevin needs to connect the assistant to the CRM. A new account with limited permissions will take two weeks to obtain. An old admin account already works. Kevin has been asked to get the assistant running today, and the old account is available today.

He uses it. The account can see and change everything. It also runs three overnight jobs, and two other employees know the password. Its activity records show what the account did, but do not reliably distinguish which person or process did it.

Six weeks later, a hundred deals have the wrong close date. “Who changed these?” The records have an answer. Unfortunately, the answer is the account.

The forecast has to be repaired. Salespeople begin treating the CRM as a source of rumors. The investigation consumes more time than Kevin saved by skipping the account request. Eventually, someone disconnects the assistant, taking its useful work away with its mistakes.

Kevin’s shortcut was understandable. That was what made it easy to take. The company had made broad access convenient and limited access slow, then acted surprised when convenience won.

### Who Reads the Statement?

The activity log tends to attract less attention than the assistant’s impressive demonstrations. Nobody brings the executive team into a room to show them a beautifully recorded refund.

But those records are how the company finds out what happened. They need to connect the assistant’s request to the action taken and the result. Someone then has to check whether that result was acceptable and do something when it was not.

That is the feedback in a control loop: observe, compare, correct. Without it, the assistant keeps acting while the company keeps assuming the actions are fine. This is an **Open Loop**. When the assistant can issue refunds or change forecasts, that assumption gets expensive.

Closing the loop requires a few ordinary decisions. Give the assistant a distinct identity in each system and only the permissions its job needs. Record what it requests and what actually happens. Assign a person to review the activity and respond to mistakes. For every permission that lets the assistant change something, name the person who approved it. A department cannot explain why it said yes. A person can.

This closes Track 2. Across these six issues, we have moved from a model that answers questions to an assistant that can follow instructions, use company information, request actions, and work inside business systems.

The send button changes the management question. You still need to know whether the AI is right. You also need to know who authorized it to act, how far that authority extends, and who will notice when it gets something wrong.

*Next week: Track 3. Before choosing the tool, decide which business result you want it to improve. It is an obvious place to start, which may explain how often companies skip it.*
