// Writing topics. Final list, set after the LinkedIn import (2026-11-15).
// Each post carries one or two of these slugs in its `topics` field.
export const TOPICS = {
  'building-reliable-ai': { name: 'Building reliable AI', blurb: 'Closed loops, verification, and the systems I build at Chorus AI: Dossier, CASDAM, BRAG, and Jev.' },
  'ai-economics': { name: 'AI economics', blurb: 'What AI really costs, who pays, and how to make it pay for itself.' },
  'ai-safety-governance': { name: 'AI safety and governance', blurb: 'Feral AI, agents, hijacking, and keeping AI inside its bounds.' },
  'models-and-market': { name: 'Models and the market', blurb: 'The labs, the models, open vs. closed weights, and the bubble question.' },
  'ai-explained': { name: 'AI explained', blurb: 'Closing the Loop, my newsletter on how AI actually works, one idea per issue.' },
  'research-notes': { name: 'Research notes', blurb: 'Short reads on new AI papers and why they matter.' },
  'work-and-careers': { name: 'Work and careers', blurb: 'Jobs, layoffs, leadership, and how AI is changing work.' },
  'retail-ecommerce': { name: 'Retail and ecommerce', blurb: 'DTC, retail, and the companies I watch.' },
  'economic-reporting': { name: 'Economic reporting', blurb: 'Fed surveys, jobs, inflation, sentiment, and my City Economic Health reports.' },
} as const;

export type TopicSlug = keyof typeof TOPICS;
export const topicName = (slug: string) => (TOPICS as Record<string, { name: string }>)[slug]?.name ?? slug;
