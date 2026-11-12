# danielwipert.com: Site Spec

**Version:** 1.1 · **Date:** 2026-11-12 · **Owner:** Dan Wipert

This is the build spec for danielwipert.com. It turns every decision in [decisions.md](decisions.md) into pages, files, and steps. Where something isn't decided yet, it says so and points to the open questions at the end.

Related docs: [projects.md](projects.md) (what goes on the Work page) · [cv.md](cv.md) (source for About and the PDF CV)

---

## 1. Purpose

One front door for everything Dan builds, researches, and writes about AI.

1. **Projects first.** A visitor should see what Dan has built within five seconds.
2. **Writing second.** A full library of Dan's AI writing, brought home from LinkedIn, so people can see how he thinks.
3. **CV last, and quietly.** Present and complete, but never a sales pitch.

**Out of scope:** film, art, and music writing (separate site, later); anything unbuilt; a blog engine, comments, or a newsletter.

## 2. Audience

| Who | What they need |
|---|---|
| Hiring managers and recruiters | Proof of real, shipped AI work; a clean CV one click away |
| AI builders and practitioners | The technical depth behind each project; links to repos |
| Leaders, students, general readers | The textbook and case studies; the writing library |
| Search engines | Clear signals that this is Dan Wipert's site and what he's made |

## 3. Guiding rules

- **Show only finished work.** Unbuilt projects stay off until they ship.
- **Hub, not copy.** Each Main project gets a short case study here that links to its full site. We don't rebuild those sites.
- **One source of truth.** Project facts live in one file each; the CV lives in one file; pages are built from them.
- **Static and fast.** No server, no database. Every page is plain HTML built ahead of time.
- **Readable first.** Body text is set for long reading on a phone.
- **No em dashes** in site copy (house style shared with the textbook).

## 4. Site map

```
/                         Home
/work/                    Work index (all projects)
/work/<project-slug>/     One page per project
/writing/                 Writing library (Featured shelf + full archive)
/writing/<post-slug>/     One page per post
/writing/topics/<topic>/  All posts with one topic tag
/about/                   About: story, timeline, CV link
/cv.pdf                   Downloadable CV
/rss.xml                  RSS feed of writing
/sitemap-index.xml        Sitemap for search engines
/404                      Not-found page
```

Navigation (every page): **Work · Writing · About**, with the name "Dan Wipert" linking home.

## 5. Pages

### 5.1 Home

Order, top to bottom:

1. **Intro line.** Name, then: *"I build AI systems that can't afford to be wrong, and I write the research behind them."* No headshot on Home.
2. **Research.** Two large cards: AI Operations Management textbook, Applied AI Case Study Library.
3. **Chorus AI Systems.** Four large cards: Dossier, CASDAM, BRAG, Jev vs. the Frontier. A one-line note under the group heading explains Chorus.
4. **Also built.** Two small cards: OpenRouter Weekly, U.S. Metro Economic Health Report.
5. **Featured writing.** The 5 to 6 pinned pieces, as a horizontal shelf (stacks vertically on phones).
6. **Latest writing.** The 3 newest posts, with a link to the full library.
7. **Footer.** LinkedIn, GitHub, contact email, RSS, copyright.

### 5.2 Project card (used on Home and Work)

Every card shows:

| Field | Example |
|---|---|
| Title | BRAG |
| One-line summary | RAG with two skeptics that try to disprove every answer |
| Status chip | Shipped · Building |
| Label (Chorus projects only) | Chorus AI Systems |
| Stack (up to 4 items) | Python · BM25 · OpenRouter |
| Live detail (Phase 3, where available) | "Open-weight share this week: 73%" |

The whole card links to the project's page on this site. Main cards are large with room for two or three sentences; Minor cards are compact.

### 5.3 Work index

All shipped projects, grouped exactly as on Home (Research, Chorus AI Systems, Also built). Same cards, no Featured writing.

### 5.4 Project page: Main (case study)

For the six Main projects. Target length: a 3 to 5 minute read.

1. **Header:** title, one-line summary, status chip, label, and two buttons: **Visit the full site** and **View the code** (where a repo exists).
2. **The problem.** What was broken or missing.
3. **What I built.** What goes in, what comes out.
4. **How it works.** A short walkthrough plus one simple diagram.
5. **The result.** The headline numbers (for example, Jev: 91.4% vs 91.0% at 1/50th the cost).
6. **What I learned.** Two or three sentences.
7. **Stack.**
8. **Related.** Links to the sister project or companion (Dossier ↔ CASDAM; textbook ↔ Case Study Library) and to any related writing.

Special cases:
- **CASDAM** includes a section on the Earnings Call Dossier as the second run of the pattern.
- **Textbook** and **Case Study Library** show no Chorus label.

### 5.5 Project page: Minor

For OpenRouter Weekly and the Metro Economic Health Report. Header (same as Main), then one or two paragraphs covering problem, what it does, and the result, then stack and links.

### 5.6 Writing library

1. **Featured shelf:** the 5 to 6 pinned pieces, always at the top, in a fixed order Dan chooses.
2. **Topic filters:** a row of topic tags. Each links to that topic's page.
3. **Search box:** searches titles and full text (built at build time, no server).
4. **Archive:** every post, newest first, grouped by year. Each row shows title, date, topics, and a one-line excerpt.

### 5.7 Post page

Title, date, topics, reading time, the post, then "Originally posted on LinkedIn" with a link (for imported posts), then two related posts by shared topic.

Short LinkedIn posts with no title get an auto title from their first sentence, which Dan can edit later (see 7.4).

### 5.8 Topic page

Topic name, a one-line description, and every post with that tag, newest first.

### 5.9 About

0. **Headshot.** Small, at the top of the page. The only place a photo appears.
1. **The story.** 3 to 5 short paragraphs: retail and DTC operations at Bonobos, Etsy, HavenLock, Summersalt, and Bodily; the English MA and teaching; the move into AI; Chorus AI Systems and the textbook.
2. **Chorus AI Systems.** A short paragraph explaining the label seen on project cards.
3. **Timeline.** One line per role, built from cv.md: years, title, company.
4. **Education, certifications, license.** Compact lists, built from cv.md.
5. **CV link.** A small "Download CV (PDF)" link.
6. **Contact.** LinkedIn, GitHub, and a contact email (suggested: hello@danielwipert.com, forwarded to Dan's inbox through Cloudflare Email Routing; the address is hidden from spam bots).

Claude drafts the story from cv.md and what it knows of Dan's path; Dan rewrites it in his own voice. No skills grids, no "hire me" language.

### 5.10 404

One line, a link home, and links to Work and Writing.

## 6. Content model

Astro reads content from plain files. Each kind of content is a folder ("collection") with a fixed set of fields, checked at build time so a missing field fails the build instead of shipping a broken page.

```
src/content/
  projects/   one Markdown file per project
  posts/      one Markdown file per post
  cv/         cv.yaml (structured version of docs/cv.md)
```

### 6.1 Project fields

| Field | Required | Example |
|---|---|---|
| title | yes | BRAG |
| fullName | no | Boosted Retrieval Augmented Generation |
| summary | yes | RAG with two skeptics that try to disprove every answer |
| tier | yes | `main` or `minor` |
| group | yes | `research`, `chorus`, or `also-built` |
| order | yes | 3 (position within its group) |
| status | yes | `shipped` or `building` |
| chorus | yes | true / false (shows the label) |
| stack | yes | [Python, BM25, OpenRouter] |
| siteUrl | no | https://brag.aioperationsmanagement.ai/ |
| repoUrl | no | https://github.com/danielwipert/cas.brag |
| related | no | [casdam] |
| headline | no | the one number or fact for the result section |
| published | yes | false hides it from the site |

The body of the file is the case study (Main) or short write-up (Minor).

### 6.2 Post fields

| Field | Required | Example |
|---|---|---|
| title | yes | Closed-loop vs. open-loop AI |
| date | yes | 2026-08-14 |
| topics | yes | [ai-reliability] (one or two) |
| excerpt | yes | one sentence |
| featured | no | 1 to 6 (position on the Featured shelf) |
| source | yes | `linkedin-post`, `linkedin-article`, or `original` |
| sourceUrl | no | the LinkedIn link |
| published | yes | false keeps it off the site |

### 6.3 Topics (proposed, to confirm in Phase 2)

AI operations · AI economics and cost · AI reliability and governance · Models and the market · Retrieval and RAG · Retail and ecommerce · Operations and supply chain · Careers and the field

The final list is set after the LinkedIn import, from what the posts actually cover. Target: 6 to 10 topics.

## 7. Writing import (Phase 2)

### 7.1 Getting the data

LinkedIn's data export (Settings → Data privacy → Get a copy of your data) includes your posts and articles. The exact file names are confirmed when the export arrives; expected: a spreadsheet of posts (text, date, link) and a folder of articles as HTML.

### 7.2 The import script (Python)

`scripts/import_linkedin.py`, run by hand:

1. Read the posts file and the articles folder.
2. Skip reposts with no commentary and anything already imported.
3. Turn each item into a Markdown file in `src/content/posts/`, with `published: false`.
4. Suggest a title (articles keep theirs), an excerpt, and topic tags. A cheap model via OpenRouter suggests; Dan approves.
5. Write a review list (`import_review.csv`): one row per post with title, date, suggested topics, and an AI/work vs. creative flag.

### 7.3 Review

Dan works through the review list: keep or drop, fix titles and topics, and mark film, art, and music pieces as dropped (they go to the other site). Kept posts flip to `published: true`.

### 7.4 Going forward

New writing is published on the site first, then shared to LinkedIn with a link back, so the site is the original home.

## 8. Design

### 8.1 Direction: "editorial lab"

Magazine-quality type for reading; project cards that feel alive. Projects lead, writing reads beautifully, nothing looks like a résumé.

### 8.2 Decided

- Light and dark themes, following the visitor's device setting.
- One reading column for posts and case studies, about 65 to 70 characters wide.
- Status chips, stack tags, and the Chorus label share one small, consistent style.
- Phone first: every page works at phone width with no sideways scrolling.

### 8.3 To decide in the mockup step

- Typefaces (a reading serif plus a clean sans or mono for labels is the starting idea)
- Color palette and accent color
- Card styling and how "alive" the cards feel
- Whether the textbook's look (navy, rust, teal, amber) carries over or stays the book's own
- Headshot treatment (Dan likes filtered, faded-print photo looks; to try in the mockup)

The mockup comes right after this spec. Once approved, the colors, fonts, and spacing are written into a short design section here.

## 9. SEO

| Item | How |
|---|---|
| Page titles | `<Page> · Dan Wipert`; Home is `Dan Wipert · AI systems and research` |
| Descriptions | One sentence per page, from the summary or excerpt field |
| Sitemap | Astro's sitemap add-on, generated on every build |
| robots.txt | Allows everything; points to the sitemap |
| Canonical links | Every page names its own address as the original |
| Identity signals | Structured data on Home and About saying "this is Dan Wipert," with links to LinkedIn and GitHub |
| Project and post signals | Each project marked as a creative work, each post as an article, with author and dates |
| Share images | A generated preview image per page (title + name) for LinkedIn and other links |
| RSS | `/rss.xml` with every published post |
| Search Console | Register the site with Google after launch and submit the sitemap |

## 10. Tech and hosting

| Piece | Choice |
|---|---|
| Framework | Astro (static output) |
| Styling | Plain CSS with shared design tokens (no framework needed) |
| Search | A build-time search index (Pagefind or similar), no server |
| Scripts | Python 3.12 for the LinkedIn import |
| Code | GitHub: `danielwipert/homepage` |
| Hosting | Cloudflare Pages, connected to the GitHub repo; every push to `main` rebuilds the site |
| Domain | danielwipert.com (and www) on Cloudflare, attached to the Pages project |
| Cost | Free hosting; only the yearly domain fee |

### 10.1 Repo layout

```
homepage/
  docs/                 spec, decisions, project inventory, CV
  scripts/              import_linkedin.py
  public/               static files (cv.pdf, favicon)
  src/
    content/            projects, posts, cv
    components/         cards, chips, header, footer
    layouts/            page frames
    pages/              one file per route
    styles/             design tokens and global CSS
  astro.config.mjs
  package.json
  README.md
```

### 10.2 Previews

Cloudflare builds a private preview link for every branch, so changes can be checked on a phone before they go live.

## 11. Quality bar

- **Speed:** each page loads in under 1 second on a phone over 4G; no page ships more than a small amount of JavaScript.
- **Accessibility:** good color contrast in both themes, keyboard-friendly, alt text on every image, real headings.
- **Links:** a link check runs before launch; external project links open normally (no forced new tabs).
- **Consistency:** project facts (names, numbers) match the project's own site and LinkedIn.

## 12. Build phases

Each phase ends with something live and working.

### Phase 1: Front door
- Astro project set up in the repo, connected to Cloudflare Pages
- Home, Work index, all 8 project pages (6 case studies, 2 short pages), About, 404
- CV PDF generated from cv.md
- SEO basics, structured data, share images, sitemap
- **Done when:** danielwipert.com is live with every project and the About page, and passes the quality bar in section 11.

### Phase 2: The library
- LinkedIn export, import script, review, and publish
- Featured shelf, topic pages, search, RSS
- Featured writing and Latest writing appear on Home
- **Done when:** every kept post is live, tagged, and searchable, and the Featured shelf shows Dan's 5 to 6 picks.

### Phase 3: Alive
- Live details on cards, read from each project's published data at build time. First: OpenRouter Weekly (this week's open-weight share). Second: Metro Economic Health Report (this week's top metro); it also updates weekly.
- A weekly scheduled rebuild so live details stay fresh
- Polish from real use
- **Done when:** at least one card updates itself weekly with no manual step.

## 13. Open questions

### Answered (2026-11-12)

| # | Question | Answer |
|---|---|---|
| Q4 | Headshot? | Small headshot on About only |
| Q5 | Public contact | LinkedIn plus a contact email (address to confirm; suggested hello@danielwipert.com via Cloudflare forwarding) |
| Q6 | Home intro and title | "I build AI systems that can't afford to be wrong, and I write the research behind them." Title: Dan Wipert · AI systems and research |
| Q7 | Group naming | The textbook and Case Study Library group is called "Research" |
| Q8 | Metro report | Updates weekly; repo link still to come (card links to the site until then) |
| Q9 | OpenRouter provider experiment | Leave it out until it's run |
| Q10 | About story | Claude drafts, Dan rewrites |

### Still open

| # | Question | Needed by |
|---|---|---|
| Q1 | Which 5 to 6 pieces go on the Featured shelf? | Phase 2, after the import |
| Q2 | Final topic list | Phase 2, after the import |
| Q3 | Typefaces, colors, card style | The mockup step |
| Q11 | Contact email address: hello@danielwipert.com or another? | Phase 1 |
