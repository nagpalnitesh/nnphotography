import { useEffect } from 'react';
import config from './pages.json';

// The built HTML already carries each route's metadata (see
// scripts/prerender-meta.mjs); this keeps the title and description right in
// the dev server and whenever the SPA fallback serves index.html.
const usePageMeta = (path) => {
  useEffect(() => {
    const page = config.pages.find((p) => p.path === path);
    if (!page) return;
    document.title = page.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', page.description);
  }, [path]);
};

export default usePageMeta;
