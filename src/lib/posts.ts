import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => data.published);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function featured(posts: Post[]): Post[] {
  return posts.filter((p) => p.data.featured).sort((a, b) => a.data.featured! - b.data.featured!);
}

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

export const readingMinutes = (body: string | undefined) => Math.max(1, Math.round((body ?? '').split(/\s+/).length / 230));
