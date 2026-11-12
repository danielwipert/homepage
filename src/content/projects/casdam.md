---
title: CASDAM
fullName: Chorus AI Systems Data Analytics Manager
summary: AI that governs itself. Weekly ecommerce data in, a verified leadership report out.
kicker: PIPELINE
tier: main
group: chorus
order: 2
status: shipped
chorus: true
stack: [Python, Pydantic, asyncio, OpenRouter]
siteUrl: https://casdam.aioperationsmanagement.ai/
repoUrl: https://github.com/danielwipert/cas.dam
stat: $0.05 · 2 MIN
statLabel: PER WEEKLY REPORT
fileName: CASDAM.EXE
termValue: LIVE
related: [dossier]
---

## The problem

Every Monday, someone in an ecommerce business pulls exports from Shopify, the carriers, and the warehouse, reconciles them by hand, and writes up what happened last week. It takes hours. And when an AI tool is asked to do it instead, it will happily invent a number that looks right.

## What I built

CASDAM is a five-stage, multi-model pipeline that turns a week of raw operating data (Shopify, FedEx, DHL, and 3PL exports) into a verified report for leadership. It's built so that it can't put an unchecked number in front of an executive.

## How it works

- **Python does the math.** Every KPI is recomputed in code. Models never calculate.
- **The facts are locked.** Computed results go into an immutable fact list, and every claim in the report is checked against it. A claim that doesn't trace to a fact is stripped out.
- **Generators and verifiers differ.** The model that writes and the model that checks come from different families, so their mistakes don't line up.
- **Failure is visible.** When something can't be verified, the pipeline halts or discloses it in the report. It never papers over the gap.

The design borrows from Stafford Beer's Viable System Model: the system watches and governs itself, rather than relying on a person to catch it.

## The result

About **$0.05** and **two minutes** per weekly report, in place of hours of analyst time.

## The pattern, twice

The same architecture powers a second system, the [Earnings Call Dossier](https://github.com/danielwipert/dossier-earnings-call), which turns earnings calls into a governed brief. In testing it reached **97% source grounding with zero contradictions.** That's the point of CASDAM: not a one-off report generator, but a pattern that holds up on new kinds of data.
