// Live numbers from the weekly trackers (src/data/live.json, refreshed every Monday
// by .github/workflows/refresh-live.yml). Falls back to the project file's own values.
import live from '../data/live.json';
import type { CollectionEntry } from 'astro:content';

type P = CollectionEntry<'projects'>;
const pct = (x: number) => `${Math.round(x * 100)}%`;

export const LIVE = live;

/** Card and terminal values for a project, with live numbers swapped in where we have them. */
export function liveValues(p: P) {
  const d = p.data;
  if (p.id === 'openrouter-weekly' && live.openrouter) {
    const s = pct(live.openrouter.openShare);
    return { stat: s, statLabel: 'OPEN-WEIGHT SHARE', termValue: `${s} OPEN` };
  }
  if (p.id === 'metro-economic-health' && live.metro) {
    const t = live.metro.top;
    return { stat: t.short, statLabel: `TOP METRO · ${t.grade}`, termValue: `#1 ${t.short}` };
  }
  return { stat: d.stat, statLabel: d.statLabel, termValue: d.termValue };
}

/** Lines for the "This week" readout on a tracker's page. */
export function thisWeek(id: string): string[] | null {
  if (id === 'openrouter-weekly' && live.openrouter) {
    const o = live.openrouter;
    return [
      `WEEK ${o.weekLabel.replace(/^\d{4}-W/, '')}`,
      `OPEN-WEIGHT SHARE .. ${pct(o.openShare)}`,
      `TOP LAB ............ ${o.topLab.name.toUpperCase()} ${pct(o.topLab.share)}`,
    ];
  }
  if (id === 'metro-economic-health' && live.metro) {
    const m = live.metro;
    return [
      `AS OF ${m.asOf}`,
      `#1 ...... ${m.top.city.toUpperCase()} (${m.top.score}, ${m.top.grade})`,
      `BOTTOM .. ${m.bottom.map((c) => c.toUpperCase()).join(', ')}`,
    ];
  }
  return null;
}
