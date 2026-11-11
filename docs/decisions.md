# Decision log

All decisions made on 2026-11-11, one gate at a time.

## Site plan

| # | Decision | Why | Where it lives |
|---|---|---|---|
| 1 | Projects first, writing a strong second, CV present but quiet | Show what I build, not a sales pitch | Homepage layout |
| 2 | Three sections: Work, Writing, About (CV inside About) | Simple, keeps focus on projects | Site navigation |
| 3 | Bring all LinkedIn writing over, AI and work topics only | My thinking should live on my own site. Film, art, and music go to a separate site later | Writing section |
| 4 | Library is newest first, with topic tags and search, plus a pinned Featured shelf of 5 to 6 foundational pieces | Easy way in, full depth for anyone who wants it | Writing section |
| 5 | "Editorial lab" look: magazine-quality type for reading, living project cards with status chips, stack, and small live details | Projects lead, writing reads well, nothing feels like a résumé | Design system |
| 6 | Astro, hosted on Cloudflare Pages | Built for content sites, fast, free for static | This repo + Cloudflare |
| 7 | Domain danielwipert.com, registered on Cloudflare | Domain and hosting in one account; no pointing step | Cloudflare |
| 8 | SEO: basics plus identity signals (structured data, share images, RSS) | Searches for my name land on my site | Astro setup |
| 9 | Build order: projects, then writing, then live details | A real site goes live fast | Phases 1 to 3 |

## Projects

| # | Decision | Why | Where it lives |
|---|---|---|---|
| 10 | Projects in tiers: Main (big cards), Minor (smaller cards); unbuilt work stays off | Spotlight the strongest work | Work page |
| 11 | Chorus AI Systems shown as a label on its projects, explained on About | The site stays about me; Chorus still gets credit | Project cards, About |
| 12 | Main projects get full case studies; Minor projects get short pages | Best work gets the spotlight; Phase 1 stays doable | Project pages |
| 13 | About: my story, a compact timeline, a small PDF CV link | Human, not salesy | About page |
| 14 | danielwipert.com is the hub. Each Main project gets a short case study here that links out to its full site | Front door to everything; the deep work keeps its own home | Work page |
| 15 | Main projects split into two groups: "Research & Writing" and "Chorus AI Systems" | Two clear sides of my work | Work page |
| 16 | The textbook and Case Study Library stand alone, with no Chorus label | They're their own thing | Project cards |
| 17 | Earnings Call Dossier appears inside the CASDAM case study | Proves the pattern works twice | CASDAM page |
| 18 | Jev vs. the Frontier promoted to Main | Hard numbers; shows I can measure, not just build | Work page |
| 19 | Dossier gets its own Main card, as CASDAM's sister project | Complete project with its own site and repo | Work page |
| 20 | TokenTicker, AI Research Radar, Job Stream, Working America tracker, and AI Supply Chain map stay off until built | Only show finished work | Project inventory |
| 21 | Cut: n8n automations, task manager, political forecasting, Prairie Community Bank case study, Leucothea Consulting | Not part of this site's story | Project inventory |
| 22 | This repo is `danielwipert/homepage` | Houses the plan, decisions, and site code | GitHub |

## Open items

- Update LinkedIn's CASDAM description to match: Chorus AI Systems Data Analytics Manager, five stages, about $0.05 and 2 minutes per run.

- Writing vs. "Research & Writing" could blur. If it does, rename the group to "Research."
- Update cadence and repo link for the Metro Economic Health Report.
- OpenRouter Weekly's provider-variance experiment: still planned, or dropped?
