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
| 15 | Main projects split into two groups: "Research" (renamed from "Research & Writing" in #23) and "Chorus AI Systems" | Two clear sides of my work | Work page |
| 16 | The textbook and Case Study Library stand alone, with no Chorus label | They're their own thing | Project cards |
| 17 | Earnings Call Dossier appears inside the CASDAM case study | Proves the pattern works twice | CASDAM page |
| 18 | Jev vs. the Frontier promoted to Main | Hard numbers; shows I can measure, not just build | Work page |
| 19 | Dossier gets its own Main card, as CASDAM's sister project | Complete project with its own site and repo | Work page |
| 20 | TokenTicker, AI Research Radar, Job Stream, Working America tracker, and AI Supply Chain map stay off until built | Only show finished work | Project inventory |
| 21 | Cut: n8n automations, task manager, political forecasting, Prairie Community Bank case study, Leucothea Consulting | Not part of this site's story | Project inventory |
| 22 | This repo is `danielwipert/homepage` | Houses the plan, decisions, and site code | GitHub |

## Spec questions (2026-11-12)

| # | Decision | Why | Where it lives |
|---|---|---|---|
| 23 | The textbook and Case Study Library group is called "Research" | Avoids a clash with the Writing tab | Work page, Home |
| 24 | Small headshot on About only | A face where people look for one; Home stays about the work | About |
| 25 | Contact: LinkedIn plus a contact email | Easy for recruiters and readers | About, footer |
| 26 | Claude drafts the About story; Dan rewrites | Fastest path to a page that's still his | About |
| 27 | Home intro: "I build AI systems that can't afford to be wrong, and I write the research behind them." Title: Dan Wipert · AI systems and research | Projects first, in Dan's own Chorus language | Home, SEO |
| 28 | Metro Economic Health Report updates weekly; second live-detail candidate for Phase 3 | It refreshes on its own | Metro card |
| 29 | OpenRouter provider-variance experiment stays off the site until it's run | Only finished work | OpenRouter page |

## Design and build (2026-11-12)

| # | Decision | Why | Where it lives |
|---|---|---|---|
| 30 | Look: mid-century modern meets old-school computing, modernized. Warm off-white, near-black, orange, mustard, teal; no brown | Dan's taste; earlier passes felt flat, then too old | `src/styles/global.css` |
| 31 | Fonts: Inter Tight (headings and name), Newsreader (reading), IBM Plex Mono (labels), VT323 (screens) | Modern headings, readable body, computing accents | Base layout |
| 32 | Name shown as "Daniel Wipert"; plain orange "DW" badge | Dan's call | Header, hero |
| 33 | Hero terminal shows a DIR listing of all projects, built from the project files | More creative than a status readout; updates itself | Home |
| 34 | Amber screens for the hero and footer; deep violet screens for project stats | Amber was hard to read on small cards | Cards |
| 35 | Contact Me button in the header and a contact section in the footer; footer links as glowing terminal boxes | Make reaching out obvious | Base layout |
| 36 | Light theme by default, dark theme follows the visitor's device | Spec 8.2 | `global.css` |
| 37 | Writing shows a "moving in" page until the LinkedIn import (Phase 2) | No placeholder titles on a live site | `/writing/` |

## Phase 2 and 3 (2026-11-12)

| # | Decision | Why | Where it lives |
|---|---|---|---|
| 38 | Writing library built ahead of the LinkedIn export: importer, Start Here shelf, search (Pagefind), topic pages, year archive, RSS | Ready the moment the export arrives | `scripts/import_linkedin.py`, `src/pages/writing/` |
| 39 | Live numbers: a GitHub Action reads both trackers every Monday and commits `src/data/live.json`; the commit triggers a Cloudflare rebuild | JSON-in-repo, auditable, keeps last week's numbers if a source fails | `.github/workflows/refresh-live.yml`, `scripts/refresh_live.py` |
| 40 | Interactive homepage terminal: boot sequence once per visit, typed commands, quick keys for phones | The site's signature moment | `src/scripts/terminal.ts` |
| 41 | Animated how-it-works diagrams on all six main project pages | Makes each system click instantly | `src/data/diagrams.ts` |
| 42 | Custom share cards per project and post, generated at build | Better LinkedIn previews | `src/lib/og.ts` |
| 43 | Small touches: CRT page transitions, reading progress bar, update stamp, skip link, print styles; passes automated accessibility scan (WCAG A/AA) in light and dark | Polish and access | `global.css`, Base layout |

## Open items

- Update LinkedIn's CASDAM description to match: Chorus AI Systems Data Analytics Manager, five stages, about $0.05 and 2 minutes per run.
- Contact email: site uses hello@danielwipert.com; needs Cloudflare Email Routing set up, or a different address.
- Headshot photo for About (placeholder circle until then).
- Review drafted case studies and About story.
- Metro Economic Health Report repo link (if public).
- Featured shelf picks and final topic list (after the LinkedIn import).
- Typefaces, colors, card style, headshot treatment (mockup step).
