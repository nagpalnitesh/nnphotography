import { captionFor } from '../data/gallery';
import { cld, cldSrcSet } from '../utils/cloudinary';

// Matches the grid in index.css: cards are 370px wide on desktop and fill the
// row on phones (<=600px), where .gallery-section has 1em padding and each
// .gallery-list-item has 10px side padding.
export const GALLERY_SIZES = '(max-width: 600px) calc(100vw - 52px), 370px';

const GalleryCard = ({ image, eager = false, onOpen }) => {
  const { title, location, story } = captionFor(image);
  const hasCaption = title || location || story;

  return (
    <li className='gallery-list-item'>
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
            sizes={GALLERY_SIZES}
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
