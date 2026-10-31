import { fireEvent, render, screen } from '@testing-library/react';
import Gallery from './Gallery';

const apiImages = Array.from({ length: 150 }, (_, i) => ({
  id: `photo_${i}`,
  url: `https://res.cloudinary.com/demo/image/upload/v1/photo_${i}.jpg`,
  width: 600,
  height: 400,
  format: 'jpg',
  folder: i < 20 ? 'featured' : 'gallery-new',
}));

describe('Gallery', () => {
  let errorSpy;
  const originalFetch = global.fetch;

  beforeEach(() => {
    errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    errorSpy.mockRestore();
    global.fetch = originalFetch;
  });

  it('shows skeleton placeholders until the photographs arrive', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve(apiImages),
    });
    const { container } = render(<Gallery />);
    expect(container.querySelector('.gallery-skeleton')).toBeInTheDocument();

    await screen.findByRole('button', { name: 'Show all photographs' });
    expect(container.querySelector('.gallery-skeleton')).not.toBeInTheDocument();
  });

  it('shows every photograph the API returns, including past 100', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve(apiImages),
    });
    render(<Gallery />);
    expect(screen.getByRole('status')).toHaveTextContent('Loading photographs');

    fireEvent.click(
      await screen.findByRole('button', { name: 'Show all photographs' }),
    );

    expect(screen.getAllByRole('button', { name: /^View larger:/ })).toHaveLength(150);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  it('shows only the featured folder until asked for the rest', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve(apiImages),
    });
    render(<Gallery />);

    await screen.findByRole('button', { name: 'Show all photographs' });
    expect(screen.getAllByRole('button', { name: /^View larger:/ })).toHaveLength(20);
  });

  it('sizes each card from its photo so nothing is cropped', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve(apiImages),
    });
    render(<Gallery />);

    await screen.findByRole('button', { name: 'Show all photographs' });
    const [image] = screen.getAllByRole('img', { name: /Photograph by/ });
    expect(image).toHaveAttribute('width', '600');
    expect(image).toHaveAttribute('height', '400');
    expect(image.closest('li').style.getPropertyValue('--photo-ratio')).toBe('1.5');
  });

  it('tells the visitor when the API cannot be reached', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('network'));
    const { container } = render(<Gallery />);

    expect(await screen.findByText(/couldn't be loaded/)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /^View larger:/ })).not.toBeInTheDocument();
    expect(container.querySelector('.gallery-skeleton')).not.toBeInTheDocument();
  });
});
