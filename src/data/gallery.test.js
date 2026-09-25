import data from './gallery.json';
import { buildGallery, captionFor, featuredImages, isVerified } from './gallery';

describe('gallery data', () => {
  it('has unique ids and required fields on every entry', () => {
    const ids = data.images.map((img) => img.id);
    expect(new Set(ids).size).toBe(ids.length);
    data.images.forEach((img) => {
      ['id', 'src', 'speciesOrTitle', 'location', 'story', 'alt'].forEach((key) =>
        expect(typeof img[key]).toBe('string'),
      );
      expect(img.alt.trim()).not.toBe('');
      expect(img.alt).not.toMatch(/^TODO/);
      expect(img.width).toBeGreaterThan(0);
      expect(img.height).toBeGreaterThan(0);
    });
  });

  it('features 15-20 images, all of which exist', () => {
    expect(data.featured.length).toBeGreaterThanOrEqual(15);
    expect(data.featured.length).toBeLessThanOrEqual(20);
    expect(featuredImages.map((img) => img.id)).toEqual(data.featured);
  });

  it('does not open with the mushroom shots', () => {
    const opening = featuredImages.slice(0, 4).map((img) => img.alt.toLowerCase());
    opening.forEach((alt) => expect(alt).not.toMatch(/mushroom/));
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
  const images = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];

  it('orders featured first and appends the rest only when enabled', () => {
    expect(buildGallery({ featured: ['c', 'a'], showRemaining: true, images })).toEqual({
      featuredImages: [{ id: 'c' }, { id: 'a' }],
      remainingImages: [{ id: 'b' }],
    });
    expect(buildGallery({ featured: ['c'], images }).remainingImages).toEqual([]);
  });

  it('skips unknown featured ids with a warning', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    expect(buildGallery({ featured: ['zz', 'b'], images }).featuredImages).toEqual([{ id: 'b' }]);
    expect(warn).toHaveBeenCalledTimes(1);
    warn.mockRestore();
  });
});
