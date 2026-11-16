---
title: "I watched a talented analyst spend 2 hours every Monday morning copy-pasting..."
date: 2026-04-29
topics: ['building-reliable-ai']
excerpt: "I watched a talented analyst spend 2 hours every Monday morning copy-pasting CSVs before she could even start her actual job... The final product was a list of KPIs we talk..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7455292063752802304"
published: true
---
I watched a talented analyst spend 2 hours every Monday morning copy-pasting CSVs before she could even start her actual job...

The final product was a list of KPIs we talk about every day, for maybe 5 minutes. But the data wrangling often took an hour or more every single day. For an ops person, this felt annoying inefficient, but sadly always necessary. This is the conflict most operator feels, we want to streamline everything, but the best work often requires very tough, rote tasks. Gen AI offers a solution for us.

Every week, an ecommerce operations team pulls reports from four different places:

📦 Shopify — what was ordered  
🏭 The 3PL warehouse — what actually shipped  
🚚 FedEx — carrier tracking data  
✈️ DHL — more carrier tracking data

Each file has different column names. Different date formats. Different ways of referencing the same order.

Before you can answer "did we ship everything on time this week?" — you have to merge four incompatible spreadsheets by hand. That's the job before the job. This is where my CASDAM framework starts. It is a lite Agentic framework for dealing with this exact problem. This is the first step:

Stage 1 of the pipeline — Ingestion & Normalization — uses an LLM to do the field mapping automatically. It figures out that "order_number" in one file is the same thing as "ref_id" in another. It standardizes dates. It flags duplicates.

The output isn't a report, YET. It's just one clean, unified dataset. But that clean dataset is the foundation everything else is built on.

No clean data → no trustworthy KPIs → no trustworthy report. Getting this step right is unglamorous. But it's the whole game.

Learn more: https://lnkd.in/divZs_Xn

CASDAM | Chorus AI Systems #AI #DataEngineering #Ecommerce #SupplyChain #Python #Shopify #GenAI #LLM
