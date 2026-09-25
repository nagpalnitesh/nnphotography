import { cld, cldSrcSet, isTransformable } from './cloudinary';

const BASE = 'https://res.cloudinary.com/dhk0mr5qh/image/upload';

describe('cld', () => {
  let warnSpy;
  beforeEach(() => {
    warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });
  afterEach(() => warnSpy.mockRestore());

  it('inserts the transform after /upload/ and keeps version, path, extension', () => {
    const url = `${BASE}/v1746544769/NNPhotography/gallery-new/Uploads/DSC_5250_py0j3b.jpg`;
    expect(cld(url, 400)).toBe(
      `${BASE}/w_400,c_limit,q_auto:good,f_auto/v1746544769/NNPhotography/gallery-new/Uploads/DSC_5250_py0j3b.jpg`,
    );
    expect(warnSpy).not.toHaveBeenCalled();
  });

  it('preserves the query string and percent-encoding', () => {
    const url = `${BASE}/v1711876929/NNPhotography/slider/Rose%20Pelican%20Swim.jpg?_a=BAMAK+Go0`;
    expect(cld(url, 1200)).toBe(
      `${BASE}/w_1200,c_limit,q_auto:good,f_auto/v1711876929/NNPhotography/slider/Rose%20Pelican%20Swim.jpg?_a=BAMAK+Go0`,
    );
  });

  it('handles URLs without a version segment', () => {
    expect(cld(`${BASE}/folder/photo.jpg`, 800)).toBe(
      `${BASE}/w_800,c_limit,q_auto:good,f_auto/folder/photo.jpg`,
    );
  });

  it('leaves an already-transformed URL unchanged and warns', () => {
    const url = `${BASE}/w_400,c_limit,q_auto:good,f_auto/v1/folder/photo.jpg`;
    expect(cld(url, 800)).toBe(url);
    expect(warnSpy).toHaveBeenCalledTimes(1);
  });

  it('detects single-component and chained transformations', () => {
    expect(isTransformable(`${BASE}/f_auto/v1/a.jpg`)).toBe(false);
    expect(isTransformable(`${BASE}/c_fill,h_300,w_300/e_sepia/v1/a.jpg`)).toBe(false);
    expect(isTransformable(`${BASE}/q_auto:good/a.jpg`)).toBe(false);
  });

  it('leaves unrelated URLs unchanged and warns', () => {
    const urls = [
      'https://example.com/image/upload/v1/photo.jpg',
      'https://res.cloudinary.com/demo/video/upload/v1/clip.mp4',
      'https://res.cloudinary.com/demo/image/fetch/https://example.com/a.jpg',
      '/static/media/DSC_2725.jpeg',
      'not a url',
    ];
    urls.forEach((url) => expect(cld(url, 400)).toBe(url));
    expect(warnSpy).toHaveBeenCalledTimes(urls.length);
  });

  it('does not treat "/image/upload/" inside the query string as the path', () => {
    const url = 'https://res.cloudinary.com/demo/raw/upload/a.txt?next=/image/upload/x';
    expect(cld(url, 400)).toBe(url);
  });

  it('rejects invalid widths', () => {
    expect(() => cld(`${BASE}/a.jpg`, 0)).toThrow(TypeError);
    expect(() => cld(`${BASE}/a.jpg`, 400.5)).toThrow(TypeError);
  });
});

describe('cldSrcSet', () => {
  it('lists the 400/800/1200 derivatives', () => {
    const url = `${BASE}/v1/a.jpg`;
    expect(cldSrcSet(url)).toBe(
      [400, 800, 1200]
        .map((w) => `${BASE}/w_${w},c_limit,q_auto:good,f_auto/v1/a.jpg ${w}w`)
        .join(', '),
    );
  });

  it('returns undefined for URLs it cannot transform', () => {
    expect(cldSrcSet('https://example.com/a.jpg')).toBeUndefined();
  });
});
