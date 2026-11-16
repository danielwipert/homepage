---
title: "Using Gen AI to process data, analyze, and then present reports is one..."
date: 2026-05-16
topics: ['building-reliable-ai']
excerpt: "Using Gen AI to process data, analyze, and then present reports is one thing, offering advice is another. Here is how you can do it, and trust it... The LLM saw \"shipping\" and..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7461445916378570752"
published: true
---
Using Gen AI to process data, analyze, and then present reports is one thing, offering advice is another. Here is how you can do it, and trust it...

The LLM saw "shipping" and "87%" and said something in the report that sounds like supply chain wisdom. LLMs are confident. But can you trust them? The reality is, no, you can't.

Stage 6 of CASDAM (my agentic AI data analysis tool) is the layer I built to fix this - It's called the Supply Chain Advisor. Between Stage 4 (verified insights) and Stage 5 (the final PDF), it generates the Expert Commentary panels that appear in each KPI domain of the report.

How it works (you can build this too!):

🔹 Supply chain textbooks and knowledge bases are pre-indexed into a FAISS vector store —  the SCOR Model, CSCMP definitions, and FedEx and DHL benchmark guides. Real source material.

🔹 For each KPI domain, the system retrieves the most semantically relevant passages from the knowledge base, then asks an LLM to write commentary grounded in those passages.

🔹 The LLM must cite specific chunks by ID. Python validates every citation against the actual index. If a chunk_id doesn't exist, the citation is rejected. Inline citations that leak into the prose are stripped automatically.

🔹 Recommendations must cite either a knowledge base chunk OR a verified FACT_ID from upstream. No citation, no recommendation. Period.

🔹 If the index is unavailable, Stage 6 doesn't fabricate commentary. It degrades, and the verification footer in the report says exactly what's missing.

The pattern: LLM does the prose. Python does the verification. The supply chain knowledge base is the source of truth, not the model. This is the difference between RAG bolted onto a chatbot and RAG built as an architecture. The LLM is no longer the authority. The authority is a deterministic fact-checking verification layer. This is how you use AI in the real world.

CASDAM, Learn More: https://lnkd.in/divZs_Xn
