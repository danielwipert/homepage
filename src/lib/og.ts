// Share-card images (1200 x 630) for LinkedIn, Slack, texts. Built with Satori -> PNG at build time.
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const font = (pkg: string, file: string) => readFileSync(join(process.cwd(), 'node_modules/@fontsource', pkg, 'files', file));
const FONTS = [
  { name: 'Inter Tight', data: font('inter-tight', 'inter-tight-latin-500-normal.woff'), weight: 500 as const, style: 'normal' as const },
  { name: 'Inter Tight', data: font('inter-tight', 'inter-tight-latin-800-normal.woff'), weight: 800 as const, style: 'normal' as const },
  { name: 'Plex', data: font('ibm-plex-mono', 'ibm-plex-mono-latin-600-normal.woff'), weight: 600 as const, style: 'normal' as const },
  { name: 'VT323', data: font('vt323', 'vt323-latin-400-normal.woff'), weight: 400 as const, style: 'normal' as const },
];

const clip = (s: string, n: number) => (s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…');

type El = { type: string; props: Record<string, unknown> };
const h = (style: Record<string, unknown>, children?: unknown): El => ({ type: 'div', props: { style: { display: 'flex', ...style }, children } });

export interface Card {
  kicker: string;      // e.g. "CHORUS AI SYSTEMS · PIPELINE"
  title: string;
  sub?: string;        // one line under the title
  stat?: string;       // big number on the screen
  statLabel?: string;
  path: string;        // shown at the bottom, e.g. danielwipert.com/work/brag
}

export async function renderCard(c: Card): Promise<Buffer> {
  const len = c.title.length;
  const titleSize = len > 44 ? 64 : len > 30 ? 78 : len > 18 ? 96 : 122;
  const stripes = Array.from({ length: 7 }, (_, i) => h({ height: 20, marginBottom: 12, background: '#F26A2E', width: '100%', opacity: i < 7 ? 1 : 0 }));

  const tree = h({ width: 1200, height: 630, background: '#F5F3EE', position: 'relative', flexDirection: 'column', padding: '56px 64px', fontFamily: 'Inter Tight', color: '#14161B' }, [
    // sun
    h({ position: 'absolute', right: -110, top: -150, width: 460, height: 460, borderRadius: 230, overflow: 'hidden', flexDirection: 'column' }, [
      h({ height: 230, background: '#F26A2E', width: '100%' }),
      h({ flexDirection: 'column', width: '100%' }, stripes),
    ]),
    // brand
    h({ alignItems: 'center', gap: 16 }, [
      h({ width: 56, height: 56, borderRadius: 28, background: '#F26A2E', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 22 }, 'DW'),
      h({ fontFamily: 'Plex', fontSize: 20, letterSpacing: 4 }, 'DANIEL WIPERT'),
    ]),
    // kicker
    h({ marginTop: 52, alignSelf: 'flex-start', background: '#1B1F27', color: '#F2B33D', fontFamily: 'Plex', fontSize: 18, letterSpacing: 3, padding: '10px 18px', borderRadius: 10 }, c.kicker),
    // title
    h({ marginTop: 22, fontWeight: 800, fontSize: titleSize, lineHeight: 0.98, letterSpacing: -3, maxWidth: c.stat ? 760 : 1000 }, c.title),
    c.sub ? h({ marginTop: 20, fontWeight: 500, fontSize: 28, lineHeight: 1.3, color: '#3B404A', maxWidth: c.stat ? 700 : 980 }, clip(c.sub, len > 18 ? 96 : c.stat ? 110 : 160)) : h({}),
    // footer url
    h({ position: 'absolute', left: 64, top: 548, fontFamily: 'Plex', fontSize: 18, letterSpacing: 3, color: '#555B66' }, c.path.toUpperCase()),
    // violet screen
    c.stat
      ? h({ position: 'absolute', left: 786, top: 404, width: 330, boxSizing: 'border-box', flexDirection: 'column', padding: '18px 24px', borderRadius: 18, border: '3px solid #14161B',
            background: 'radial-gradient(ellipse at 50% 35%, #4A2A85, #24124A 75%)', boxShadow: '10px 10px 0 #14161B' }, [
          h({ fontFamily: 'VT323', fontSize: (c.stat ?? '').length > 9 ? 46 : 64, lineHeight: 1, color: '#F4EEFF' }, c.stat),
          h({ fontFamily: 'VT323', fontSize: 28, lineHeight: 1.1, color: '#DCCDFF', marginTop: 4 }, c.statLabel ?? ''),
        ])
      : h({}),
  ]);

  const svg = await satori(tree as never, { width: 1200, height: 630, fonts: FONTS });
  return new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
}
