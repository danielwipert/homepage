---
title: "RAG has to be one of the more misunderstood aspects of Gen AI"
date: 2026-03-26
topics: ['building-reliable-ai']
excerpt: "RAG has to be one of the more misunderstood aspects of Gen AI. It often feels like the weakest link in an LLM pipeline. It is not only the chunking method, but also the actual..."
source: linkedin-post
sourceUrl: "https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7442941577796370432"
published: true
---
RAG has to be one of the more misunderstood aspects of Gen AI. It often feels like the weakest link in an LLM pipeline. It is not only the chunking method, but also the actual act of retrieval from the vector database. The act of retrieval is not AI. It’s classical information retrieval: nearest neighbor search, cosine similarity, inner product space optimization, and approximate indexing (FAISS, HNSW, etc.).

In other words, the most critical step in grounding these systems is still driven by decades-old statistical and geometric methods, not intelligence.

I would love to see real innovation here: where retrieval itself becomes adaptive, contextual, and model-driven rather than static math bolted onto probabilistic generation.
