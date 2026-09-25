import { useEffect, useRef } from 'react';
import { cld, cldSrcSet } from '../utils/cloudinary';

const Lightbox = ({ image, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!image) return undefined;
    const previousOverflow = document.body.style.overflowY;
    document.body.style.overflowY = 'hidden';
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflowY = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className='fullscreenImageView fullscreen-image'
      role='dialog'
      aria-modal='true'
      aria-label={image.alt}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <img
        src={cld(image.src, 1200)}
        srcSet={cldSrcSet(image.src)}
        sizes='90vw'
        alt={image.alt}
      />
      <button
        type='button'
        ref={closeRef}
        className='closeButton'
        onClick={onClose}
        aria-label='Close'
      >
        &times;
      </button>
      {/* <a
        className='lightbox-original'
        href={image.src}
        target='_blank'
        rel='noreferrer'
      >
        Open full-resolution original
      </a> */}
    </div>
  );
};

export default Lightbox;
