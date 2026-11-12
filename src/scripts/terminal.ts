// The homepage terminal: boots up once per visit, then takes typed commands.
// Without JavaScript the screen just shows the static file listing.
import live from '../data/live.json';

interface Project { id: string; title: string; file: string; value: string; summary: string; }
interface TermData { projects: Project[]; email: [string, string]; linkedin: string; github: string; }

const W = 32; // characters per line the screen comfortably fits

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const dots = (a: string, b: string) => `  ${a} ${'.'.repeat(Math.max(2, W - a.length - b.length - 2))} ${b}`;
const pct = (x: number) => `${Math.round(x * 100)}%`;

function wrap(text: string, width = W): string[] {
  const out: string[] = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    if ((line + ' ' + word).trim().length > width) { out.push(line.trim()); line = word; }
    else line += ' ' + word;
  }
  if (line.trim()) out.push(line.trim());
  return out;
}

export function initTerminal() {
  const screen = document.getElementById('term');
  const out = document.getElementById('term-out');
  const typed = document.getElementById('term-typed');
  const input = document.getElementById('term-in') as HTMLInputElement | null;
  const dataEl = document.getElementById('term-data');
  if (!screen || !out || !typed || !input || !dataEl) return;
  const data: TermData = JSON.parse(dataEl.textContent || '{}');
  const scroller = out.parentElement!;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const history: string[] = [];
  let hIndex = -1;
  let busy = false;

  const print = (lines: string | string[], cls = '') => {
    const arr = Array.isArray(lines) ? lines : [lines];
    out.insertAdjacentHTML('beforeend', '\n' + arr.map((l) => (cls ? `<span class="${cls}">${l}</span>` : l)).join('\n'));
    scroller.scrollTop = scroller.scrollHeight;
  };
  const go = (url: string, label: string, newTab = false) => {
    print(`LOADING ${esc(label)} ...`, 'dim');
    setTimeout(() => { newTab ? window.open(url, '_blank', 'noopener') : (window.location.href = url); }, reduce ? 0 : 650);
  };
  const mail = () => `mailto:${data.email[0]}@${data.email[1]}`;

  const listing = (): string[] => {
    const groups: [string, string[]][] = [
      ['[RESEARCH]', ['aiom-textbook', 'ai-case-study-library']],
      ['[CHORUS AI SYSTEMS]', ['dossier', 'casdam', 'brag', 'jev-vs-the-frontier']],
      ['[WEEKLY TRACKERS]', ['openrouter-weekly', 'metro-economic-health']],
    ];
    const lines: string[] = [];
    for (const [label, ids] of groups) {
      lines.push(`<span class="dim">${label}</span>`);
      ids.map((id) => data.projects.find((p) => p.id === id)).filter(Boolean)
        .forEach((p) => lines.push(esc(dots(p!.file, p!.value))));
    }
    lines.push(`<span class="dim">${data.projects.length} FILES · TRY: OPEN BRAG</span>`);
    return lines;
  };

  const findProject = (q: string): Project | undefined => {
    const s = q.toLowerCase().replace(/\.(exe|bk|db|log|wk)$/, '').trim();
    if (!s) return undefined;
    return data.projects.find((p) =>
      p.id === s || p.file.toLowerCase().startsWith(s) || p.title.toLowerCase() === s ||
      p.id.includes(s) || p.title.toLowerCase().includes(s));
  };

  const commands: Record<string, (arg: string) => void> = {
    help: () => print([
      '<span class="hi">AVAILABLE COMMANDS</span>',
      '  DIR ............. LIST THE WORK',
      '  OPEN &lt;NAME&gt; ..... OPEN A PROJECT',
      '  WHOAMI .......... WHO IS DANIEL',
      '  LIVE ............ THIS WEEK',
      '  WRITING ......... THE LIBRARY',
      '  CONTACT ......... SAY HELLO',
      '  CV .............. DOWNLOAD CV',
      '  CLEAR ........... WIPE SCREEN',
      '<span class="dim">A FEW OTHERS ARE HIDDEN.</span>',
    ]),
    dir: (arg) => {
      if (/writ/i.test(arg)) return commands.writing('');
      print(listing());
    },
    open: (arg) => {
      const a = arg.toLowerCase().trim();
      if (!a) return print(['USAGE: OPEN &lt;NAME&gt;', '<span class="dim">E.G. OPEN CASDAM</span>']);
      const pages: Record<string, [string, string]> = {
        about: ['/about/', 'ABOUT'], writing: ['/writing/', 'WRITING'], work: ['/work/', 'WORK'],
        cv: ['/cv.pdf', 'CV.PDF'], home: ['/', 'HOME'],
      };
      if (pages[a]) return go(pages[a][0], pages[a][1]);
      const p = findProject(a);
      if (!p) return print([`FILE NOT FOUND: ${esc(a.toUpperCase())}`, '<span class="dim">TYPE DIR TO SEE WHAT EXISTS</span>'], 'err');
      print(wrap(p.summary.toUpperCase()).map(esc), 'dim');
      go(`/work/${p.id}/`, p.file);
    },
    whoami: () => print([
      '<span class="hi">DANIEL WIPERT · CHICAGO</span>',
      ...wrap('OPERATIONS LEADER TURNED AI BUILDER. FIFTEEN YEARS SCALING OPERATIONS AT BONOBOS, ETSY, SUMMERSALT AND BODILY. FOUNDER OF CHORUS AI SYSTEMS. WRITING A TEXTBOOK ON AI OPERATIONS.'),
      '<span class="dim">OPEN ABOUT FOR THE FULL STORY</span>',
    ]),
    live: () => {
      const o = live.openrouter, m = live.metro;
      print([
        `<span class="hi">THIS WEEK</span>`,
        esc(dots('OPEN-WEIGHT SHARE', pct(o.openShare))),
        esc(dots('TOP LAB', `${o.topLab.name.toUpperCase()} ${pct(o.topLab.share)}`)),
        esc(dots('TOP METRO', `${m.top.short} ${m.top.grade}`)),
        `<span class="dim">REFRESHED EVERY MONDAY</span>`,
      ]);
    },
    writing: () => go('/writing/', 'WRITING'),
    contact: () => { print(['OPENING A LINE TO DANIEL ...', `<span class="dim">${esc(data.email[0])}@${esc(data.email[1])}</span>`]); setTimeout(() => (window.location.href = mail()), reduce ? 0 : 650); },
    cv: () => go('/cv.pdf', 'CV.PDF'),
    linkedin: () => go(data.linkedin, 'LINKEDIN', true),
    github: () => go(data.github, 'GITHUB', true),
    clear: () => { out.innerHTML = ''; },
    cls: () => { out.innerHTML = ''; },
    date: () => print(new Date().toDateString().toUpperCase()),
    ver: () => print('DW-OS VERSION 1.0 · (C) 1966-2026'),
    // hidden
    hello: () => print('HELLO. TYPE HELP TO BEGIN.'),
    hi: () => print('HELLO. TYPE HELP TO BEGIN.'),
    coffee: () => print(['ERROR 418: I AM A TEAPOT.', '<span class="dim">TRY TEA.</span>'], 'err'),
    tea: () => print('EARL GREY. HOT. BREWING ...'),
    exit: () => print('THERE IS NO EXIT. ONLY THE NEXT PROJECT.'),
    sudo: (arg) => {
      if (/hire/i.test(arg)) { print(['PERMISSION GRANTED.', 'ROUTING TO DANIEL ...'], 'hi'); setTimeout(() => (window.location.href = mail()), reduce ? 0 : 900); }
      else print('NICE TRY.', 'err');
    },
    hire: () => commands.sudo('hire'),
  };
  commands.ls = commands.dir;
  commands.cd = commands.open;
  commands.cat = commands.open;
  commands.about = () => go('/about/', 'ABOUT');
  commands.work = () => go('/work/', 'WORK');
  commands.email = commands.contact;

  const run = (raw: string) => {
    const line = raw.trim();
    print(`C:\\DANIEL&gt; ${esc(line.toUpperCase())}`);
    if (!line) return;
    history.unshift(line); hIndex = -1;
    const [cmd, ...rest] = line.split(/\s+/);
    const fn = commands[cmd.toLowerCase()];
    if (fn) fn(rest.join(' '));
    else if (findProject(line)) commands.open(line);
    else print(['BAD COMMAND OR FILE NAME', '<span class="dim">TYPE HELP FOR A LIST</span>'], 'err');
  };

  // Typing
  const sync = () => { typed.textContent = input.value.toUpperCase(); };
  screen.addEventListener('click', () => input.focus({ preventScroll: true }));
  input.addEventListener('input', sync);
  input.addEventListener('keydown', (e) => {
    if (busy) { e.preventDefault(); return; }
    if (e.key === 'Enter') { e.preventDefault(); run(input.value); input.value = ''; sync(); }
    else if (e.key === 'ArrowUp') { if (hIndex < history.length - 1) { hIndex++; input.value = history[hIndex]; sync(); } e.preventDefault(); }
    else if (e.key === 'ArrowDown') { if (hIndex > 0) { hIndex--; input.value = history[hIndex]; } else { hIndex = -1; input.value = ''; } sync(); e.preventDefault(); }
  });

  // Quick keys: type the command out, then run it.
  document.querySelectorAll<HTMLButtonElement>('.keys [data-cmd]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (busy) return;
      const cmd = btn.dataset.cmd!;
      if (reduce) { run(cmd); return; }
      busy = true;
      let i = 0;
      const tick = () => {
        typed.textContent = cmd.slice(0, ++i).toUpperCase();
        if (i < cmd.length) setTimeout(tick, 55);
        else setTimeout(() => { typed.textContent = ''; busy = false; run(cmd); }, 120);
      };
      tick();
    });
  });

  // Boot sequence, once per visit.
  let booted = false;
  try { booted = sessionStorage.getItem('dw-booted') === '1'; } catch {}
  if (!booted && !reduce) {
    const full = out.innerHTML.split('\n');
    out.innerHTML = '';
    busy = true;
    screen.classList.add('booting');
    const intro = ['DW-OS 1.0 · MEMORY CHECK ... OK', '<span class="dim">LOADING DANIEL WIPERT</span>', ''];
    const lines = [...intro, ...full];
    let i = 0;
    const step = () => {
      out.innerHTML = lines.slice(0, ++i).join('\n');
      scroller.scrollTop = scroller.scrollHeight;
      if (i < lines.length) setTimeout(step, i < intro.length ? 260 : 75);
      else { busy = false; screen.classList.remove('booting'); }
    };
    setTimeout(step, 450);
    try { sessionStorage.setItem('dw-booted', '1'); } catch {}
  }
}
