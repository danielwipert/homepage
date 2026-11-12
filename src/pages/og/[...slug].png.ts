// One share-card image per project and per published post: /og/work/<id>.png, /og/writing/<id>.png
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { renderCard, type Card } from '../../lib/og';
import { liveValues } from '../../lib/live';
import { getPosts, fmtDate } from '../../lib/posts';
import { topicName } from '../../data/topics';

const GROUP = { research: 'RESEARCH', chorus: 'CHORUS AI SYSTEMS', trackers: 'WEEKLY TRACKER' } as const;

export async function getStaticPaths() {
  const projects = await getCollection('projects', ({ data }) => data.published);
  const posts = await getPosts();
  const cards: { params: { slug: string }; props: { card: Card } }[] = [];

  for (const p of projects) {
    const v = liveValues(p);
    cards.push({
      params: { slug: `work/${p.id}` },
      props: { card: { kicker: p.data.group === 'trackers' ? GROUP.trackers : `${GROUP[p.data.group]} · ${p.data.kicker}`, title: p.data.title, sub: p.data.summary, stat: v.stat, statLabel: v.statLabel, path: `danielwipert.com/work/${p.id}` } },
    });
  }
  for (const p of posts) {
    const topic = p.data.topics[0];
    cards.push({
      params: { slug: `writing/${p.id}` },
      props: { card: { kicker: `WRITING${topic ? ` · ${topicName(topic).toUpperCase()}` : ''}`, title: p.data.title, sub: fmtDate(p.data.date), path: 'danielwipert.com/writing' } },
    });
  }
  return cards;
}

export const GET: APIRoute = async ({ props }) => {
  const png = await renderCard((props as { card: Card }).card);
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
