import data from './gallery.json';
import {
  buildGallery,
  captionFor,
  DEFAULT_ALT,
  fetchGallery,
  GALLERY_ENDPOINT,
  isVerified,
  mergeImages,
} from './gallery';

const apiImage = (id, folder = 'gallery-new') => ({
  id,
  url: `https://res.cloudinary.com/demo/image/upload/v1/NNPhotography/${folder}/${id}.jpg`,
  width: 600,
  height: 400,
  format: 'jpg',
  folder,
});

const jsonResponse = (status, body) => ({
  ok: status >= 200 && status < 300,
  status,
  json: () => Promise.resolve(body),
});

describe('gallery metadata', () => {
  it('has unique ids and required fields on every entry', () => {
    const ids = data.images.map((img) => img.id);
    expect(new Set(ids).size).toBe(ids.length);
    data.images.forEach((img) => {
      ['id', 'speciesOrTitle', 'location', 'story', 'alt'].forEach((key) =>
        expect(typeof img[key]).toBe('string'),
      );
      expect(img.alt.trim()).not.toBe('');
      expect(img.alt).not.toMatch(/^TODO/);
      expect(img).not.toHaveProperty('src');
    });
  });
});

describe('captionFor', () => {
  it('hides TODO placeholders and shows verified text', () => {
    expect(
      captionFor({ speciesOrTitle: 'TODO: species', location: 'Delhi', story: '' }),
    ).toEqual({ title: null, location: 'Delhi', story: null });
    expect(isVerified('todo: check')).toBe(false);
  });
});

describe('buildGallery', () => {
  const images = [
    { id: 'a', folder: 'gallery-new' },
    { id: 'b', folder: 'featured' },
    { id: 'c', folder: 'featured' },
  ];

  it('features only the featured folder and keeps API order', () => {
    expect(buildGallery({ showRemaining: true, images })).toEqual({
      featuredImages: [images[1], images[2]],
      remainingImages: [images[0]],
    });
  });

  it('leaves out the rest unless showRemaining is on', () => {
    expect(buildGallery({ images }).remainingImages).toEqual([]);
  });
});

describe('mergeImages', () => {
  it('maps API fields and applies metadata by id', () => {
    expect(mergeImages([apiImage('a')], [{ id: 'a', alt: 'A heron', story: 'Dawn' }])).toEqual([
      {
        id: 'a',
        src: apiImage('a').url,
        width: 600,
        height: 400,
        folder: 'gallery-new',
        alt: 'A heron',
        story: 'Dawn',
      },
    ]);
  });

  it('reads the folder from the URL when the API omits it', () => {
    const { folder, ...withoutFolder } = apiImage('a', 'featured');
    expect(mergeImages([withoutFolder])[0].folder).toBe('featured');
  });

  it('keeps photos that have no metadata, with a generic alt', () => {
    const [image] = mergeImages([apiImage('new')], []);
    expect(image.alt).toBe(DEFAULT_ALT);
    expect(captionFor(image)).toEqual({ title: null, location: null, story: null });
  });
});

describe('fetchGallery', () => {
  it('returns every API image, split by the featured folder', async () => {
    const images = [
      ...Array.from({ length: 150 }, (_, i) => apiImage(`new_${i}`)),
      apiImage('star', 'featured'),
    ];
    const fetchImpl = jest.fn().mockResolvedValue(jsonResponse(200, images));

    const { featuredImages, remainingImages } = await fetchGallery({ fetchImpl });

    expect(fetchImpl.mock.calls[0][0]).toBe(GALLERY_ENDPOINT);
    expect(featuredImages.map((img) => img.id)).toEqual(['star']);
    expect(remainingImages).toHaveLength(150);
  });

  it.each([
    ['HTTP errors', jsonResponse(500, {}), 'http_500'],
    ['non-list bodies', jsonResponse(200, { error: 'x' }), 'empty_gallery'],
    ['empty lists', jsonResponse(200, []), 'empty_gallery'],
  ])('rejects on %s', async (_, response, message) => {
    const fetchImpl = jest.fn().mockResolvedValue(response);
    await expect(fetchGallery({ fetchImpl })).rejects.toThrow(message);
  });

  it('aborts a request that exceeds the timeout', async () => {
    const fetchImpl = (_, { signal }) =>
      new Promise((_resolve, reject) => {
        signal.addEventListener('abort', () => reject(new Error('aborted')));
      });
    await expect(fetchGallery({ fetchImpl, timeoutMs: 5 })).rejects.toThrow('aborted');
  });
});
