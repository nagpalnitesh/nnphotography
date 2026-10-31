import data from './gallery.json';

export const GALLERY_ENDPOINT = 'https://backend.nnphotography.in/api/gallery';
export const GALLERY_TIMEOUT_MS = 15000;
export const DEFAULT_ALT = 'Photograph by Nitesh Nagpal';
const FEATURED_FOLDER = 'featured';

// Caption fields still holding a "TODO:" placeholder (or empty) are treated as
// unknown and never rendered publicly.
export const isVerified = (value) =>
  typeof value === 'string' &&
  value.trim() !== '' &&
  !/^TODO\b/i.test(value.trim());

export const captionFor = (image) => ({
  title: isVerified(image.speciesOrTitle) ? image.speciesOrTitle : null,
  location: isVerified(image.location) ? image.location : null,
  story: isVerified(image.story) ? image.story : null,
});

export const hasCaption = (image) =>
  Object.values(captionFor(image)).some(Boolean);

export const buildGallery = ({ showRemaining = false, images = [] }) => {
  const featuredImages = images.filter((img) => img.folder === FEATURED_FOLDER);
  const remainingImages = showRemaining
    ? images.filter((img) => img.folder !== FEATURED_FOLDER)
    : [];
  return { featuredImages, remainingImages };
};

// Backend versions without the `folder` field still carry it in the URL path.
const folderOf = ({ folder, url }) => folder ?? url.split('/').slice(-2, -1)[0];

// Joins the API's images with the alt text and captions kept in gallery.json.
// Photos with no metadata yet still show, using DEFAULT_ALT and no caption.
export const mergeImages = (apiImages, metadata = []) => {
  const metadataById = new Map(metadata.map((entry) => [entry.id, entry]));
  return apiImages.map((image) => ({
    alt: DEFAULT_ALT,
    ...metadataById.get(image.id),
    id: image.id,
    src: image.url,
    width: image.width,
    height: image.height,
    folder: folderOf(image),
  }));
};

// Resolves with { featuredImages, remainingImages }. Rejects on HTTP errors,
// network failures, timeouts and responses holding no images.
export const fetchGallery = async ({
  fetchImpl = fetch,
  timeoutMs = GALLERY_TIMEOUT_MS,
} = {}) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl(GALLERY_ENDPOINT, {
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`http_${response.status}`);
    const images = await response.json();
    if (!Array.isArray(images) || images.length === 0) {
      throw new Error('empty_gallery');
    }
    return buildGallery({
      showRemaining: data.showRemaining,
      images: mergeImages(images, data.images),
    });
  } finally {
    clearTimeout(timer);
  }
};
