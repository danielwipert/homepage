// One place for the facts every page shares.
export const SITE = {
  name: 'Daniel Wipert',
  url: 'https://danielwipert.com',
  title: 'Daniel Wipert · AI systems and research',
  intro: "I build AI systems that can't afford to be wrong, and I write the research behind them.",
  city: 'Chicago',
  // Address is split so it never sits in the page as one string (spam bots).
  emailUser: 'hello',
  emailDomain: 'danielwipert.com',
  linkedin: 'https://www.linkedin.com/in/daniel-wipert/',
  github: 'https://github.com/danielwipert',
};

export const GROUPS = {
  research: { dept: '01', name: 'Research' },
  chorus: { dept: '02', name: 'Chorus AI Systems' },
  trackers: { dept: '03', name: 'Weekly Trackers' },
} as const;
