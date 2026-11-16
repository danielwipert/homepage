---
title: "I completed a Fun Build: Create an AM radio news brief for the exact content..."
date: 2026-05-02
topics: ['building-reliable-ai']
excerpt: "I completed a Fun Build: Create an AM radio news brief for the exact content you want. Pull full-text articles, LLM summaries, Text to Speech... I dreamed this one up while I..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7456378794195587072"
published: true
---
I completed a Fun Build: Create an AM radio news brief for the exact content you want. Pull full-text articles, LLM summaries, Text to Speech...

I dreamed this one up while I was on a walk a couple months ago. There is so much news out there that it feels impossible to keep up. The reality is that you can't really keep up, you have to pick and choose your niches to follow.

One of my deep passions is film. It has been since I was a kid. So I try to keep up on film news, but it is hard. I can not stand reading news on my phone, but I am a big audio guy: podcasts, lectures, audiobooks. I thought, how can I get film news in the exact format I want?

I imagined like an old school AM News break instead of the weather or traffic report, it was film news I wanted to hear.

Here is how I built it:

- The Guardian has full-text access to its news articles for non-commercial uses. I hooked into their API, run an elaborate filter, and get my full text film news articles
- I use LLMs to sort and rank the articles. Then they create a little new program via story selection and summaries of the chosen articles. Model selection here is key, you need to balance quality vs cost.
- I send that film news brief over to Microsoft Azure HD TTS and it shoots out a AM Radio news brief
- I host that file on a R2 bucket via Cloudflare and create RSS feed, then send to Apple Podcasts to access

I get up every morning, and my Film News brief is ready to listen to on Apple Podcasts. Honestly, its pretty amazing. You can replicate this for any type of news you want. I am going to build this for different categories: business, AI, soccer news, etc. All using the same framework.

Check out the build here, and you can go for it on your own. Costs like $.02 a run: https://lnkd.in/giAfyKVz
