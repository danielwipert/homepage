# danielwipert.com

Dan Wipert's personal homepage: one front door for the projects, the research, and the writing.

**Status:** Phase 1 built (Home, Work, 8 project pages, About, Writing placeholder, 404). Going live on Cloudflare Pages.

## What this site is

- **Projects first.** Here's what I build.
- **Writing second.** A library of my AI writing, brought home from LinkedIn.
- **CV last, and quietly.** It lives inside About. No "hire me" energy.

Film, art, and music writing go on a separate site later. This one is AI and work only.

## Sections

| Section | What's in it |
|---|---|
| Work | Project cards in two Main groups (Research, Chorus AI Systems), plus a Minor row |
| Writing | Featured shelf of 5 to 6 pieces, then the full library: newest first, topic tags, search |
| About | Short story of my path, a compact timeline, a small PDF CV link |

## Tech

- **Framework:** Astro (each post is a Markdown file)
- **Hosting:** Cloudflare Pages (free for static sites)
- **Domain:** danielwipert.com, registered on Cloudflare
- **LinkedIn import:** a Python script (Phase 2)

## Build phases

1. **Phase 1:** Homepage, project pages, About. Live on the domain.
2. **Phase 2:** Import the LinkedIn archive, Featured shelf, tags, search.
3. **Phase 3:** Live project details (like this week's OpenRouter numbers) and polish.

## Docs

- [Site spec](docs/spec.md): every page, the content model, design, SEO, tech, and build phases
- [Decision log](docs/decisions.md): every choice made so far, and why
- [Project inventory](docs/projects.md): what goes on the Work page, what's cut, and what's still missing

## Running it

You need Node 22.

```bash
npm install        # once
npm run dev        # local preview at http://localhost:4321
npm run build      # builds the site into dist/
```

Cloudflare Pages builds the site on every push to `main` (build command `npm run build`, output folder `dist`).

## Where things live

| To change | Edit |
|---|---|
| A project's text, numbers, links | `src/content/projects/<project>.md` |
| The CV (About page and PDF) | `src/data/cv.ts`, then re-run `scripts/make_assets.cjs` |
| Name, intro line, email, social links | `src/site.ts` |
| A piece of writing | `src/content/posts/<post>.md` (set `published: true` to show it; `featured: 1` to 6 puts it on the Start Here shelf) |
| Writing topics | `src/data/topics.ts` |
| Colors and fonts | `src/styles/global.css` (top of the file) |

## Importing LinkedIn writing

```bash
python3 scripts/import_linkedin.py path/to/LinkedIn_export.zip
```

Every post and article becomes a Markdown file in `src/content/posts/`, unpublished. A review list is written to `scripts/import_review.csv`.
