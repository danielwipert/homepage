---
title: "Let's walk through how you can use AI in your job today, here is a case..."
date: 2026-04-28
topics: ['building-reliable-ai']
excerpt: "Let's walk through how you can use AI in your job today, here is a case study I did using my CASDAM framework. Here is how you can do it: Ok, so one of the biggest problems..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7454915222063955968"
published: true
---
Let's walk through how you can use AI in your job today, here is a case study I did using my CASDAM framework. Here is how you can do it:

Ok, so one of the biggest problems with any type of company is that data lives everywhere, but you need to know it, analyze it, and report on it up the chain. Literally every job I have had since my 20s has involved this exact problem. I have 6 data sets, all on different systems. I need to pull it all, clean it all, connect it all, analyze it, and report on it via like KPIs or whatever.

I have worked in Ops, CX, and Supply Chain, mostly startups. Now, one issue I saw at my most recent companies. I am running fulfillment and warehousing, and I have to report on specific KPIs literally every single day. The problem is I have Shopify order data, 3PL warehouse data, FedEx shipping data, and DHL shipping data. They don't really talk to each other, certainly not enough to pull a single robust report from a single system.

So we had to pull all the data on a daily basis, run it through Excel, clean, organize, connect, analyze, report on it. Even when it was hyper streamlined, you are looking at a good hour a day. Longer for weekly rollups. Now you might have an ERP or data reporting system. That is great. Most people don't. Data is tragically still like this bizarre black hole within most businesses, especially outside of anything tech related.

Now let's say you want to use AI to do this. You can run this through ChatGPT or Claude, and it will certainly help. But it won't really be automated or trustworthy. Simply prompting is essentially the best way to get an LLM to hallucinate. What I decided to do was replicate this exact workflow in a deterministic python based pipeline using LLMs as nodes. This is essentially just an automation using LLMs, that's it. But where it differs is that my systems is a closed-loop, meaning it always checks it own work. Something not even Mythos will do.

I have stage gating. I have verification loops. A stage will never progress unless another stage checks and verifies the output. So I rebuilt my little supply chain metrics workflow. I took maybe a couple week of work. But now it runs for essentially for less than $.05 a run. The final product is verified repeatedly during the process. The average data analyst makes 85k a year. That's $40 an hour. I did that $40 of daily work for $.05.

To be honest, a deterministic pipeline is going to be much faster, more accurate, and insanely cheaper than any data analyst. I don't want to put anyone out of work. But we are in the horse vs car moment of AI. A data analyst should not be pulling data from 5 different sources to clean, collate, and report. That all should be automated. It can be right now with LLMs.

Check out the case study here: https://lnkd.in/divZs_Xn
