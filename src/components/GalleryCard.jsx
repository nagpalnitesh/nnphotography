import { captionFor } from '../data/gallery';
import { cld, cldSrcSet } from '../utils/cloudinary';

// Rows in index.css are justified: each card keeps its photo's aspect ratio, so
// nothing is cropped, and rows grow to at most MAX_ROW_HEIGHT tall. Phones
// (<=600px) get one full-width column inside .gallery-section's 1em padding.
const MAX_ROW_HEIGHT = 420;
const gallerySizes = (ratio) =>
  `(max-width: 600px) calc(100vw - 32px), ${Math.round(ratio * MAX_ROW_HEIGHT)}px`;

const GalleryCard = ({ image, eager = false, onOpen }) => {
  const { title, location, story } = captionFor(image);
  const hasCaption = title || location || story;
  const ratio = image.width / image.height;

  return (
    <li className='gallery-list-item' style={{ '--photo-ratio': ratio }}>
      <figure className='gallery-card'>
        <button
          type='button'
          className='gallery-card-img'
          onClick={(e) => onOpen(image, e.currentTarget)}
          aria-label={`View larger: ${image.alt}`}
        >
          <img
            src={cld(image.src, 800)}
            srcSet={cldSrcSet(image.src)}
            sizes={gallerySizes(ratio)}
            width={image.width}
            height={image.height}
            alt={image.alt}
            loading={eager ? 'eager' : 'lazy'}
            decoding={eager ? 'auto' : 'async'}
          />
        </button>
        {hasCaption && (
          <figcaption className='gallery-caption'>
            {title && <span className='gallery-caption-title'>{title}</span>}
            {location && (
              <span className='gallery-caption-location'>{location}</span>
            )}
            {story && <span className='gallery-caption-story'>{story}</span>}
          </figcaption>
        )}
      </figure>
    </li>
  );
};

export default GalleryCard;
