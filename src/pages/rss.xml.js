import rss from '@astrojs/rss';
import { getPosts } from '../lib/posts';
import { SITE } from '../site';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: `${SITE.name} · Writing`,
    description: 'Essays and notes on AI, operations, and the economics of both.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.excerpt,
      link: `/writing/${p.id}/`,
    })),
  });
}
