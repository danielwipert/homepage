---
title: "How AI Represents Meaning"
date: 2026-06-22
topics: ['ai-explained']
excerpt: "The big leap in AI over the past decade can look mundane. A computer can now tell that the word \"invoice\" and the word \"bill\" mean nearly the same thing. That does not exactly..."
source: linkedin-article
sourceUrl: "https://www.linkedin.com/pulse/how-ai-represents-meaning-daniel-wipert-emwgc"
published: true
---
The big leap in AI over the past decade can look mundane. A computer can now tell that the word "invoice" and the word "bill" mean nearly the same thing. That does not exactly set the world on fire. But once you understand how it does this, you realize we are standing in a future strange enough to make Asimov's head spin.

### Meaning as a Map

The leap begins with linear algebra. But I want you to keep reading, so let me put it another way. Picture a map of the world, crossed by lines of longitude and latitude. The first thing this Gen AI does is give every word a location on that map. Say the word "dog" lands at 25.7617° N, 80.1918° W, which drops it in the middle of Miami. The process of assigning a word its spot is called **Embedding**. The real method is more involved and uses math that most of us have seen since high school. The idea is all you need: every word gets a location.

A word's coordinates are called its **Vector**. The striking part is that no human assigns them. The computer learns where each word belongs by training a neural network on enormous amounts of text, then stores the results in what is called a **Vector Database**: the map on which all the words live.

The trick of it is just distance. "Dog" sits close to "collar." That closeness is what we call **Semantic Similarity**, *meaning how near two pieces of text are on the map. Near means alike, far means unrelated*. Notice that none of this matches letters or parses grammar. It works on meaning alone. That is also how AI got past an older approach, one that tried to hand-code the rules of language and kept stalling. You do not have to write meaning down exactly. You only have to learn the patterns in how words actually get used.

### Finding a Lot of Needles in a Lot of Haystacks

Let me bring this down to earth. Forget the theory for a moment and picture a Tuesday. A big project has gone sideways, and the blame is landing on you. You know you flagged the problem to Brian, the colleague who let it slip. You just cannot remember when or exactly how you put it.

You search your inbox for the project name and Brian's address and get back hundreds of messages. That is keyword search, also called **Lexical Search**: *it matches the exact words you type*. You try a few more keywords and still cannot surface the one email where you warned Brian that skipping a single small task could sink the whole thing. Then you try **Semantic Search**, which reads the map of meaning across every email you have sent. It turns up not one message but five, each flagging the task Brian ignored. Underneath, semantic search is doing something simple: measuring the distance between vectors in a database built from all your mail. Brian is going to have a bad day now.

### A map that redraws itself

Up to now I have described each word as having one fixed address. That was a simplification. The map is not a printed atlas where every word keeps a permanent home. It gets redrawn constantly. The reason is a piece of technology called the **Transformer**, the design behind today's AI. A transformer does not judge a word in isolation. It reads each word in the company of the words around it and places it accordingly. It is less a librarian shelving a book by its title than a cartographer who redraws the map to fit the sentence.

Take the word "crashing." In a report about a software bug, the model sets it down next to "failure" and "fix." In a memo about a falling market, the same word drifts toward "risk" and "decline." Same letters, different neighborhood, because the meaning is different. So when an AI appears to "understand" your request, it is not pulling a fixed entry off a shelf. It is drawing a fresh map for the sentence in front of it, then reading the spot your words landed in.

A map of meaning is a powerful thing, but it is still a map, not the actual space. It can put two words on the same street that have no business being there or strand a phrase your company uses every day out in the boonies. Knowing that the machine measures meaning by distance tells you both what to expect from it and where to check it. Trust the map to translate reality, not be reality.

*Next week: the same move that turns a word into coordinates also works on a picture and a sound. AI goes beyond text.*
