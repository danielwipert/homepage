// How-it-works diagrams for the main projects. Simplified, facts only.
// kind: 'io' (what goes in / comes out), 'code' (deterministic code), 'model' (an AI model), 'check' (a gate), 'step' (a stage of work, not software).
export type Kind = 'io' | 'code' | 'model' | 'check' | 'step';
export interface Node { label: string; sub?: string; kind: Kind; fail?: string; }
export interface Stage { node?: Node; parallel?: { label: string; nodes: Node[] }; }
export interface Diagram { title: string; stages: Stage[]; loop?: string; note?: string; }

const n = (kind: Kind, label: string, sub?: string, fail?: string): Stage => ({ node: { kind, label, sub, fail } });

export const DIAGRAMS: Record<string, Diagram> = {
  dossier: {
    title: 'From a PDF to a dossier you can audit',
    stages: [
      n('io', 'Source PDF', 'any document'),
      n('model', 'Extract facts', 'atomic claims'),
      n('code', 'Lock the fact list', 'immutable from here'),
      { parallel: { label: 'Three vendors, independently', nodes: [
        { kind: 'model', label: 'Summary A' },
        { kind: 'model', label: 'Summary B' },
        { kind: 'model', label: 'Summary C' },
      ] } },
      n('check', 'Contradiction check', '0.0 tolerance', 'One contradicted fact fails that summary'),
      n('code', 'Assemble', 'claims cite source spans'),
      n('io', 'Dossier', 'gaps labeled', 'Not sure? It halts visibly'),
    ],
    note: 'Seven stages, temperature zero, no agent autonomy. Control flow lives in code.',
  },
  casdam: {
    title: 'From raw weekly exports to a verified leadership report',
    stages: [
      n('io', 'Weekly exports', 'Shopify · FedEx · DHL · 3PL'),
      n('code', 'Recompute KPIs', 'Python does all the math'),
      n('code', 'Immutable fact list', 'every number, locked'),
      n('model', 'Write the report', 'generator model'),
      n('check', 'Verify every claim', 'a different model family', 'Untraceable claims are stripped'),
      n('io', 'Leadership report', '~$0.05 · ~2 min', 'Can\'t verify? Halt or disclose'),
    ],
    note: 'Built on Beer\'s Viable System Model: the system governs itself.',
  },
  brag: {
    title: 'An answer has to survive two skeptics',
    stages: [
      n('io', 'Question', 'about 10 years of Netflix filings'),
      n('model', 'Plan the evidence', 'slots a good answer needs'),
      { parallel: { label: 'Gather, two channels', nodes: [
        { kind: 'code', label: 'Hybrid search', sub: 'BGE-small + BM25' },
        { kind: 'code', label: 'Numbers', sub: 'straight from XBRL' },
      ] } },
      n('model', 'Draft the answer'),
      n('check', 'Verifier', 'checks against evidence'),
      n('check', 'Refutation agent', 'hunts for contradictions', 'Evidence too thin? It says so'),
      n('io', 'Answer', 'dated sources · audit trail'),
    ],
  },
  'jev-vs-the-frontier': {
    title: 'A fair fight: same task, same rules, locked in advance',
    stages: [
      n('io', 'Banking77', 'customer messages, 77 categories'),
      { parallel: { label: 'Same messages, two models', nodes: [
        { kind: 'model', label: 'Jev', sub: 'small, specialized' },
        { kind: 'model', label: 'Claude Sonnet 5', sub: 'frontier' },
      ] } },
      n('check', 'Confident?', 'pre-registered threshold', 'Not confident: routed to a person'),
      n('code', 'Score', 'against a locked test set'),
      n('io', '91.4% vs 91.0%', '$0.10 vs $5.25 per 1,000'),
    ],
    note: 'Rules written before the run. Whole experiment: $16.',
  },
  'aiom-textbook': {
    title: 'The six jobs of AI operations',
    stages: [
      n('step', 'Sourcing', 'where capacity comes from'),
      n('step', 'Metering', 'what is actually used'),
      n('step', 'Attribution', 'who drove the cost'),
      n('step', 'Planning', 'demand that grows with success'),
      n('step', 'Routing', 'each task to the right model'),
      n('step', 'Value', 'did it pay for itself?'),
    ],
    loop: 'What value teaches feeds the next round of sourcing',
  },
  'ai-case-study-library': {
    title: 'How a case gets made',
    stages: [
      n('io', 'Something happens', 'AI meets the real world'),
      n('step', 'Primary sources', 'court records · filings · studies'),
      n('step', 'Trace every claim', 'to the evidence behind it'),
      n('check', 'Grade the conclusion', 'A to C, plus causal label', 'Weak evidence gets a low grade, not a pass'),
      n('io', 'Published case', 'open to contributions'),
    ],
    loop: 'Every revision is tracked in Git',
  },
};
