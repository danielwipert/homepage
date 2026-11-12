// Structured CV. Source of truth for the About timeline and the PDF CV.
// Mirrors docs/cv.md. Edit here and both update.

export const roles = [
  {
    start: '2025', end: 'Now', title: 'Founder and Principal', org: 'Chorus AI Systems', place: 'Arlington Heights, IL',
    summary: 'Builds and deploys production AI for processes that can\'t afford to be wrong: financial workflows, compliance, and other high-stakes environments.',
    bullets: [
      'Built CASDAM, a five-stage multi-model pipeline that turns raw operating data into verified executive reports, for about $0.05 and 2 minutes per run',
      'Built BRAG, retrieval over a decade of Netflix SEC filings that gates every answer through a Verifier and a Refutation Agent',
      'Closed-loop verification throughout: immutable fact lists, structurally different generator/verifier pairs, control flow in code',
    ],
  },
  {
    start: '2022', end: '2024', title: 'Senior Director, Integrated Production, Supply Chain and Quality Excellence', org: 'Bodily', place: 'New York',
    summary: 'End-to-end logistics across DTC and omnichannel, holding 99.9% on-time delivery while the business scaled.',
    bullets: [
      'Deployed predictive analytics in live fulfillment workflows; improved allocation accuracy and cut costs 15%',
      'Built real-time KPI dashboards and cross-functional governance across CX, Marketing, and Operations',
      'Ran vendor evaluation and 3PL management end to end, from requirements to SLAs to post-launch fixes',
    ],
  },
  {
    start: '2018', end: '2022', title: 'Director of Supply Chain Operations', org: 'Summersalt', place: 'St. Louis',
    summary: 'Built fulfillment, logistics, and operating systems from scratch through Series B hypergrowth.',
    bullets: [
      'Led the WMS implementation from requirements through production',
      'Launched into Canada, Australia, the UK, and the EU; negotiated 3PL and carrier contracts (DHL, FedEx, Global-e)',
      'Built analytics on SLA adherence, delivery latency, and cost drivers across a global network',
    ],
  },
  {
    start: '2015', end: '2018', title: 'Head of Operations and Growth Systems', org: 'HavenLock', place: 'Nashville',
    summary: 'Ran operations and growth systems for a DTC hardware startup making US-manufactured smart locks.',
    bullets: [
      'Integrated ecommerce, manufacturing, fulfillment, and customer lifecycle systems',
      'Built experimentation (A/B testing, CRO) into production workflows',
      'Partnered with the founders from concept through US manufacturing to launch',
    ],
  },
  {
    start: '2013', end: '2015', title: 'Manager of Risk Operations', org: 'Etsy', place: 'Brooklyn',
    summary: 'Owned fraud and risk operations for $2B+ in annual payments; led four teams (18 analysts) in NYC, Hudson, and Dublin.',
    bullets: [
      'Built closed-loop risk intelligence: fraud outcomes fed back into detection, improving accuracy and cutting manual review',
      'Built compliance-aligned risk governance across US and EU jurisdictions',
      'Prevented $2.5M+ in attempted fraud in investigations with the FBI and US Secret Service',
    ],
  },
  {
    start: '2010', end: '2013', title: 'Manager of Ecommerce and Customer Experience', org: 'Bonobos', place: 'New York',
    summary: 'Joined under $10M in revenue and helped scale past $100M, the foundation for its acquisition by Walmart.',
    bullets: [
      'Built customer operations that absorbed 10x growth without breaking',
      'Built feedback loops connecting customer data to merchandising, marketing, and product',
      'Led a 40-person team through hypergrowth',
    ],
  },
];

export const education = [
  { school: 'Virginia Commonwealth University', degree: 'MA, English (Literary Theory)', note: 'Thesis on social criticism and narration in John Cheever\'s short fiction' },
  { school: 'Wake Forest University', degree: 'BA, English and Secondary Education', note: 'Founded the Wake Forest Film Society' },
];

export const certifications = [
  { name: 'AI Strategies for Business Transformation', org: 'Northwestern University, Kellogg School of Management', year: '2025' },
  { name: 'Mathematics for Machine Learning: Linear Algebra', org: 'Imperial College London', year: '2026' },
  { name: 'Python programming: three courses, through accessing web data', org: 'University of Michigan', year: '2025' },
  { name: 'Generative AI Leader, plus four Generative AI courses', org: 'Google', year: '2025' },
  { name: 'Career Essentials in Generative AI', org: 'Microsoft', year: '2025' },
  { name: 'Ethics in the Age of Generative AI', org: 'Project Management Institute', year: '2025' },
  { name: 'Generative AI Certification', org: 'NASBA', year: '2025' },
  { name: 'Web Development and Design', org: 'New York University; General Assembly', year: '2011' },
];

export const licenses = [
  { name: 'Professional Educator License (PEL)', org: 'Illinois State Board of Education', note: 'Language Arts, grades 9 to 12' },
];
