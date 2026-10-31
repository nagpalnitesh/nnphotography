// Placeholder shapes for the justified rows, mixing landscape and portrait so
// the skeleton reads like the gallery it stands in for.
const PLACEHOLDER_RATIOS = [1.5, 0.67, 1.5, 1.5, 1.5, 0.67, 1.5, 0.67, 1.5];

// Rendered as list items inside .gallery-section so the placeholders share the
// real cards' layout. Hidden from screen readers: Gallery announces the status.
const GallerySkeleton = () =>
  PLACEHOLDER_RATIOS.map((ratio, index) => (
    <li
      key={index}
      className='gallery-list-item'
      style={{ '--photo-ratio': ratio }}
      aria-hidden='true'
    >
      <div className='gallery-skeleton' />
    </li>
  ));

export default GallerySkeleton;
