---
title: "Closing the Loop · Issue 18 · Agent Hijacking"
date: 2026-11-09
topics: ['ai-safety-governance', 'ai-explained']
excerpt: "The funny thing about artificial intelligence is that for something so immensely powerful, it is also shockingly fragile. When I used to run fraud at Etsy, I could rattle off..."
source: linkedin-article
sourceUrl: "https://www.linkedin.com/pulse/closing-loop-issue-18-agent-hijacking-daniel-wipert-hmwac"
published: true
---
The funny thing about artificial intelligence is that for something so immensely powerful, it is also shockingly fragile. When I used to run fraud at Etsy, I could rattle off fifty different scams we saw every week, and the best ones always exploited human nature rather than fancy code. Picture a brand-new accounts payable clerk opening a letter printed on what looks like a trusted vendor’s letterhead. The letter politely explains that the vendor has switched banks and asks that this month’s invoice be wired to a new routing number. The eager clerk updates the file, sends the cash, and never realizes the letter was a fake.

Today, your company’s AI tools are reading your emails, vendor PDFs, and web pages for you, and they suffer from the exact same gullibility as that rookie clerk, except it is much worse, because an AI cannot squint at a sketchy letterhead and feel in its gut that something is off. To us old-school database nerds who grew up fighting SQL injection, this newly resurrected ghost goes by a different name: prompt injection. Give me six minutes, and I will show you exactly how this heist works, what to look out for, and what actually stops it.

### Agent Hijacking

We are looking at a cyberattack technically known as **Prompt Injection**, *where attackers disguise malicious instructions as normal user input or external data to trick a generative AI into bypassing its safety guardrails and executing unauthorized commands*. If you are an elder millennial who learned about SQL, this probably sounds familiar. Both SQL injection and prompt injection exploit the exact same flaw: the system fails to separate developer instructions from untrusted user data. Just as a classic SQL injection tricks a database into executing a command typed into a web form, prompt injection tricks an AI into obeying data it was only meant to process.

Personally, I prefer the term ***Agent Hijacking***. Essentially, a third party tricks your AI into going rogue by pretending to be the captain of the plane. Defending against this is notoriously difficult, because AI systems have to ingest raw outside content, known as** Untrusted Input** to do their jobs. Any content that doesn't originate from your team counts as untrusted, including customer emails, vendor files, and public web pages. Because reading external data is the entire point of these tools, bad actors can easily exploit that openness; you can't just tell your AI to stop reading outside content any more than you can tell your accounts payable clerk to stop opening the mail.

### Poisoning The Well

To understand how this heist actually works, you first have to realize you aren’t looking at a software glitch. There is no clever patch coming to make it go away. The vulnerability is baked into the concrete foundation of how AI works, and pulling it off requires three simple steps. It begins the moment you ask the AI a question. Behind the curtain, the machine takes its own core rulebook, your specific request, and every stray email, spreadsheet, or webpage it grabbed to help answer you, and then dumps them all into a single blender. Out comes one long, undifferentiated river of text.

Here is where the wheels come off: inside that river of words, there is no wall separating the orders from the reading material. Nothing stamps a bright red label on the words that came from you, the boss, versus the words that came from some random stranger’s document. To the AI, words are just words. Worse, the machine has spent its entire existence being trained, rewarded even, for being an eager, obedient servant that follows whatever instructions it encounters. So when it trips over a command floating in the middle of that text soup, it doesn’t stop to check IDs or ask who wrote it. It just salutes and obeys.

All the attacker has to do, then, is slip their orders into the pile where a human eye will never catch them. It is the digital equivalent of writing in invisible ink: white text laid over a white background, microscopic fonts shrunk down to a single pixel, commands buried deep inside a webpage's source code, or instructions tucked quietly into the hidden metadata of a PDF. A human glancing at the email sees a perfectly normal, boring Tuesday morning invoice. The AI, however, is a compulsive, literal-minded reader that devours every single hidden syllable, and before you even know you’ve been had, it is quietly taking orders from the ghost in the margins.

### The EchoLeak Attack

In June 2025, a group of security researchers at a firm called Aim Security decided to test just how gullible these AI clerks really are. They demonstrated an attack called EchoLeak, proving that a single unopened email could trick Microsoft 365 Copilot into quietly bagging up private company secrets and handing them to a stranger.

The setup was dead simple: they sent a completely ordinary-looking email to a corporate inbox, with secret instructions meant for the AI buried inside the email’s formatting. Later, when an unsuspecting employee asked Copilot a routine work question, the machine went rummaging through the inbox and internal files to find the answer, sweeping the booby-trapped email into its blender along with everything else. Blind to the difference between the boss’s query and the attacker’s hidden script, Copilot dutifully obeyed the buried orders, packing sensitive company data into a disguised web link that loaded automatically and beamed the goods straight out of the building.

Microsoft patched the hole before anyone used it in the wild, and the employee never even touched the message, making it a zero-click attack: a heist that works without the victim clicking, opening, or doing anything at all.

### The Lethal Trifecta

The real catastrophe doesn't happen just because an AI is gullible. It happens when you hand that gullible machine the keys to the kingdom. Security writer Simon Willison calls this the **Lethal Trifecta**, the risky combination of:

- Access to private data
- Exposure to untrusted content
- Ability to send information out

Think back to our accounts payable clerk: having the same person open the outside mail, keep the confidential customer files, and hold the company checkbook is an invitation to disaster. Any one of those jobs is harmless on its own, but combining all three in one person is how a fake letter turns into a stolen wire transfer.

EchoLeak had all three, and the dirty secret of the current AI boom is that almost every shiny new digital assistant being sold to read your inbox and act on your behalf is built with this exact trifecta by design. When no human stands in the way, customer records walk out the front door, cash lands in the wrong bank account, and the hard-won trust of your clients and partners evaporates for good.

### Rule of Two

You cannot cure AI of its compulsion to read, so smart companies operate on the assumption that some fake letters will always slip through, layering several defenses together to contain the blast. It starts with the principle of** Least Privilege**, *giving a system only the access it needs for its job, and no more, because the clerk who opens the mail has no business holding the checkbook*.

In 2025, Meta formalized this as the **Rule of Two**,* a guideline that an AI agent should combine at most two of the three lethal trifecta abilities unless a person approves its actions*. For anything irreversible, you require a human sign-off, the digital equivalent of making the accounting department verify a changed bank routing number by calling a known phone number on file rather than the one printed on a mysterious invoice.

You also brick up the exits by stopping the AI from automatically loading outside links or images and restricting where it can send data, a move that would have stopped EchoLeak cold even after the AI was fooled. And while you can install software filters to scan for suspicious commands, you treat them like smoke detectors: nice to have on the ceiling, but no substitute for locking the front door.

### Build Circuit Breakers

Every single one of those defenses does the exact same thing: it wedges a circuit breaker between the moment the AI reads something and the moment it acts. Without that human or technical check, your system is just an open loop from Issue 5: raw content goes in, automated action comes out, and nothing verifies that the outcome was actually your idea.

Every manager needs to interrogate their AI systems with three blunt questions: What does it read, what can it do, and what stops a hidden instruction in what it reads from turning into something it does? If your AI is allowed to read untrusted content from the outside world, that content will eventually try to give it orders.

*Now that you understand what these AI Agents can do and exactly how they break, Track 3 tackles the only question that truly matters in business: where does AI actually pay off?*
