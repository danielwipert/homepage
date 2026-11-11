# danielwipert.com

Dan Wipert's personal homepage: one front door for the projects, the research, and the writing.

**Status:** Planning. No site code yet.

## What this site is

- **Projects first.** Here's what I build.
- **Writing second.** A library of my AI writing, brought home from LinkedIn.
- **CV last, and quietly.** It lives inside About. No "hire me" energy.

Film, art, and music writing go on a separate site later. This one is AI and work only.

## Sections

| Section | What's in it |
|---|---|
| Work | Project cards in two Main groups (Research & Writing, Chorus AI Systems), plus a Minor row |
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

- [Decision log](docs/decisions.md): every choice made so far, and why
- [Project inventory](docs/projects.md): what goes on the Work page, what's cut, and what's still missing
