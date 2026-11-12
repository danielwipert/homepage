// Writing topics. Proposed list (spec 6.3); final list is set after the LinkedIn import.
// Each post carries one or two of these slugs in its `topics` field.
export const TOPICS = {
  'ai-operations': { name: 'AI operations', blurb: 'Running AI inside a real organization: process, ownership, and control.' },
  'ai-economics': { name: 'AI economics', blurb: 'What AI really costs, who pays, and how to make it pay for itself.' },
  'ai-reliability': { name: 'AI reliability', blurb: 'Closed loops, verification, and AI that can be trusted with real work.' },
  'models-and-market': { name: 'Models and the market', blurb: 'The labs, the models, open vs. closed, and where usage is going.' },
  'retrieval': { name: 'Retrieval and RAG', blurb: 'Getting models to answer from the right evidence.' },
  'retail-ecommerce': { name: 'Retail and ecommerce', blurb: 'DTC, retail, and what AI changes for them.' },
  'operations': { name: 'Operations and supply chain', blurb: 'Fulfillment, logistics, and making systems work at scale.' },
  'careers': { name: 'Careers and the field', blurb: 'Working in AI, and how the field is changing.' },
} as const;

export type TopicSlug = keyof typeof TOPICS;
export const topicName = (slug: string) => (TOPICS as Record<string, { name: string }>)[slug]?.name ?? slug;
