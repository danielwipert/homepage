import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per project. A missing or wrong field fails the build.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    fullName: z.string().optional(),
    summary: z.string(), // one line, used on cards and as the page description
    kicker: z.string(), // e.g. TEXTBOOK, PIPELINE, RETRIEVAL
    tier: z.enum(['main', 'minor']),
    group: z.enum(['research', 'chorus', 'trackers']),
    order: z.number(),
    status: z.enum(['shipped', 'building']),
    chorus: z.boolean(),
    stack: z.array(z.string()),
    siteUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    siteLabel: z.string().optional(),
    stat: z.string(), // the headline number on the card
    statLabel: z.string(),
    fileName: z.string(), // its line in the homepage terminal
    termValue: z.string(),
    related: z.array(z.string()).default([]),
    published: z.boolean().default(true),
  }),
});

// One Markdown file per piece of writing. Imported posts start unpublished.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    topics: z.array(z.string()).default([]), // slugs from src/data/topics.ts
    excerpt: z.string(),
    featured: z.number().int().min(1).max(6).optional(), // position on the Start Here shelf
    source: z.enum(['linkedin-post', 'linkedin-article', 'original']),
    sourceUrl: z.string().url().optional(),
    published: z.boolean().default(false),
  }),
});

export const collections = { projects, posts };
