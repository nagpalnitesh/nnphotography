// Builds resized Cloudinary delivery URLs.
//
// cld(url, 800) turns
//   https://res.cloudinary.com/<cloud>/image/upload/v123/folder/photo.jpg
// into
//   https://res.cloudinary.com/<cloud>/image/upload/w_800,c_limit,q_auto:good,f_auto/v123/folder/photo.jpg
//
// Anything it can't safely transform (non-Cloudinary URLs, non image/upload
// delivery types, URLs that already carry a transformation) is returned
// unchanged with a console warning, so a bad URL never turns into a broken one.

const CLOUDINARY_HOST = 'res.cloudinary.com';
const UPLOAD_SEGMENT = '/image/upload/';

export const RESPONSIVE_WIDTHS = [400, 800, 1200];

// One transformation component, e.g. "w_400", "c_limit", "q_auto:good",
// "f_auto", "fl_progressive", "$var_10". Chained transformations are joined
// with "/", and a single step can hold several comma-separated components.
const COMPONENT = '(?:[a-z]{1,3}|\\$[a-z0-9]+)_[^,/?]+';
const TRANSFORMATION_RE = new RegExp(`^${COMPONENT}(?:,${COMPONENT})*$`);
const VERSION_RE = /^v\d+$/;

export const transformFor = (width) =>
  `w_${width},c_limit,q_auto:good,f_auto`;

const warn = (message, url) => {
  // eslint-disable-next-line no-console
  console.warn(`[cld] ${message}; leaving URL unchanged: ${url}`);
};

export const isTransformable = (url) => {
  if (typeof url !== 'string') return false;
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return false;
  }
  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') return false;
  if (parsed.hostname !== CLOUDINARY_HOST) return false;

  const pathEnd = url.search(/[?#]/);
  const path = pathEnd === -1 ? url : url.slice(0, pathEnd);
  const idx = path.indexOf(UPLOAD_SEGMENT);
  if (idx === -1) return false;

  const firstSegment = path.slice(idx + UPLOAD_SEGMENT.length).split('/')[0];
  if (!firstSegment) return false;
  if (VERSION_RE.test(firstSegment)) return true;
  return !TRANSFORMATION_RE.test(firstSegment);
};

export const cld = (url, width) => {
  if (!Number.isInteger(width) || width <= 0) {
    throw new TypeError(`cld: width must be a positive integer, got ${width}`);
  }
  if (!isTransformable(url)) {
    warn('not an untransformed Cloudinary image/upload URL', url);
    return url;
  }
  const insertAt = url.indexOf(UPLOAD_SEGMENT) + UPLOAD_SEGMENT.length;
  return `${url.slice(0, insertAt)}${transformFor(width)}/${url.slice(insertAt)}`;
};

// srcset string for the standard widths, or undefined when the URL can't be
// transformed (so the browser just uses `src`).
export const cldSrcSet = (url, widths = RESPONSIVE_WIDTHS) => {
  if (!isTransformable(url)) return undefined;
  return widths.map((w) => `${cld(url, w)} ${w}w`).join(', ');
};
