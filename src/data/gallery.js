import data from './gallery.json';

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

export const buildGallery = ({ featured = [], showRemaining = false, images = [] }) => {
  const byId = new Map(images.map((img) => [img.id, img]));
  const featuredImages = [];
  featured.forEach((id) => {
    const img = byId.get(id);
    if (img) featuredImages.push(img);
    // eslint-disable-next-line no-console
    else console.warn(`[gallery] featured id "${id}" not found in images`);
  });
  const featuredIds = new Set(featuredImages.map((img) => img.id));
  const remainingImages = showRemaining
    ? images.filter((img) => !featuredIds.has(img.id))
    : [];
  return { featuredImages, remainingImages };
};

export const { featuredImages, remainingImages } = buildGallery(data);
export const allImages = data.images;
