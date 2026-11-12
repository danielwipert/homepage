// Makes public/og.png (share image) and public/cv.pdf (from the /cv-print page).
// Usage: npm run build && npx astro preview --port 4321 (in another terminal), then:
//   node scripts/make_assets.cjs
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const root = path.resolve(__dirname, '..');
  const browser = await chromium.launch();

  const og = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await og.goto('file://' + path.join(root, 'scripts/og.html'), { waitUntil: 'networkidle' });
  await og.waitForTimeout(500);
  await og.screenshot({ path: path.join(root, 'public/og.png') });

  const cv = await browser.newPage();
  await cv.goto('http://localhost:4321/cv-print/', { waitUntil: 'networkidle' });
  await cv.waitForTimeout(500);
  await cv.pdf({ path: path.join(root, 'public/cv.pdf'), format: 'Letter', printBackground: true, preferCSSPageSize: true });

  await browser.close();
  console.log('Wrote public/og.png and public/cv.pdf');
})();
