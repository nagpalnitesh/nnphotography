// Writes route-specific <title>, description, canonical, Open Graph and
// Twitter tags into the built HTML so crawlers and link previews see them
// without running JavaScript:
//   build/index.html       -> /
//   build/gallery.html     -> /gallery     (Netlify serves x.html for /x
//   build/about-me.html    -> /about-me     before the SPA rewrite applies)
//   build/contact-me.html  -> /contact-me
//
// Runs after `react-scripts build` (see the "build" script in package.json).
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = path.join(root, 'build');

// Reuse the app's Cloudinary helper. package.json has no "type": "module", so
// load its ES module source through a data: URL instead of a plain import.
const helperSource = await readFile(
  path.join(root, 'src/utils/cloudinary.js'),
  'utf8',
);
const { cld } = await import(
  `data:text/javascript,${encodeURIComponent(helperSource)}`
);

const config = JSON.parse(
  await readFile(path.join(root, 'src/seo/pages.json'), 'utf8'),
);

const START = '<!-- page-meta -->';
const END = '<!-- /page-meta -->';

const esc = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const replaceOnce = (html, pattern, replacement, what) => {
  const matches = html.match(new RegExp(pattern.source, 'g')) || [];
  if (matches.length !== 1) {
    throw new Error(`prerender-meta: expected one ${what}, found ${matches.length}`);
  }
  return html.replace(pattern, replacement);
};

const tagsFor = (page) => {
  const url = `${config.siteUrl}${page.path === '/' ? '/' : page.path}`;
  const image = cld(page.image.src, 1200);
  if (image === page.image.src) {
    throw new Error(`prerender-meta: preview image was not transformed: ${image}`);
  }
  // c_limit keeps the aspect ratio and never upscales.
  const width = Math.min(1200, page.image.width);
  const height = Math.round((page.image.height * width) / page.image.width);

  const meta = [
    ['property', 'og:type', 'website'],
    ['property', 'og:site_name', config.siteName],
    ['property', 'og:url', url],
    ['property', 'og:title', page.title],
    ['property', 'og:description', page.description],
    ['property', 'og:image', image],
    ['property', 'og:image:width', width],
    ['property', 'og:image:height', height],
    ['property', 'og:image:alt', page.image.alt],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:site', config.twitterSite],
    ['name', 'twitter:title', page.title],
    ['name', 'twitter:description', page.description],
    ['name', 'twitter:image', image],
    ['name', 'twitter:image:alt', page.image.alt],
  ];
  return [
    START,
    `<link rel="canonical" href="${esc(url)}"/>`,
    ...meta.map(([attr, key, value]) => `<meta ${attr}="${key}" content="${esc(value)}"/>`),
    END,
  ].join('');
};

const template = (await readFile(path.join(buildDir, 'index.html'), 'utf8'))
  // Make the script safe to re-run on an already processed index.html.
  .replace(new RegExp(`${START}[\\s\\S]*?${END}`), '');

for (const page of config.pages) {
  let html = template;
  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(page.title)}</title>`, '<title>');
  html = replaceOnce(
    html,
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${esc(page.description)}"/>`,
    'meta description',
  );
  html = replaceOnce(html, /<\/head>/, `${tagsFor(page)}</head>`, '</head>');
  await writeFile(path.join(buildDir, page.file), html);
  console.log(`prerender-meta: ${page.path} -> build/${page.file}`);
}
