import { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';

import ArrowIcon from '../assets/icons/arrow-90.png';
import LeftArrowIcon from '../assets/icons/left-arrow-90.png';
import HeaderImg from '../assets/images/DSC_2725.jpeg';
import HeaderImg3 from '../assets/images/DSC_9634.jpg';
import HeaderImg2 from '../assets/images/DSC_9885.jpg';
import Footer from '../components/Footer';
import GalleryCard from '../components/GalleryCard';
import GallerySkeleton from '../components/GallerySkeleton';
import Lightbox from '../components/Lightbox';
import PageHeader from '../components/PageHeader';
import { fetchGallery } from '../data/gallery';
import usePageMeta from '../seo/usePageMeta';

// The first desktop row can be in view on load, so those images load eagerly;
// everything after it is lazy-loaded.
const EAGER_COUNT = 3;
const EMPTY_GALLERY = { featuredImages: [], remainingImages: [] };

const Gallery = () => {
  usePageMeta('/gallery');
  const [gallery, setGallery] = useState(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const openerRef = useRef(null);
  const { featuredImages, remainingImages } = gallery ?? EMPTY_GALLERY;

  useEffect(() => {
    let cancelled = false;
    fetchGallery()
      .then((result) => {
        if (!cancelled) setGallery(result);
      })
      .catch((error) => {
        console.error('Error fetching gallery:', error);
        if (!cancelled) setLoadFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const openImage = useCallback((image, opener) => {
    openerRef.current = opener;
    setSelected(image);
  }, []);

  const closeImage = useCallback(() => {
    setSelected(null);
    openerRef.current?.focus();
  }, []);

  return (
    <>
      {/* 
        <div className="background-slider">
          <Slider />
        </div> */}
      <div className='gallery'>
        <Navbar activeMenu='Gallery' />
        {/* TODO: parallax background with overlay */}
        <div className='overlay'></div>
        <div className='banner'>
          <img src={HeaderImg} alt='' />
        </div>
        <div className='gallery-page-header'>
          <PageHeader
            pageName={'Gallery'}
            // headerStyle={"gallery-header-img"}
            headerImg={HeaderImg2}
          />
        </div>
        {/* <div className="gallery-header">
        <div className="gallery-header-img">
          <h1 className="gallery-header-text">Gallery</h1>
        </div>
      </div> */}

        {/* Gallery-Tagline */}
        <div className='gallery-section-text'>
          {/* <p>Captured Moments, Framed Eternally</p> */}
          <hr />
          <p>A Gallery of Timeless Memories</p>
          <hr />
        </div>
        {/* Display Image in FullView */}
        <Lightbox image={selected} onClose={closeImage} />
        {/* Gallery Section */}
        {!gallery && (
          <p
            className={loadFailed ? 'gallery-show-all' : 'visually-hidden'}
            role='status'
          >
            {loadFailed
              ? "The gallery couldn't be loaded. Please refresh the page to try again."
              : 'Loading photographs…'}
          </p>
        )}
        <ul className='gallery-section'>
          {!gallery && !loadFailed && <GallerySkeleton />}
          {featuredImages.map((image, index) => (
            <GalleryCard
              key={image.id}
              image={image}
              eager={index < EAGER_COUNT}
              onOpen={openImage}
            />
          ))}
          {showAll &&
            remainingImages.map((image) => (
              <GalleryCard key={image.id} image={image} onOpen={openImage} />
            ))}
        </ul>
        {remainingImages.length > 0 && !showAll && (
          <div className='gallery-show-all'>
            <button
              type='button'
              className='gallery-show-all-button'
              onClick={() => setShowAll(true)}
            >
              Show all photographs
            </button>
          </div>
        )}
        {/* CTA */}
        <div className='call-to-action'>
          <a
            href='/contact-me'
            className='action-block w-inline-block'
            style={{
              backgroundImage: `url(${HeaderImg3})`,
              transformStyle: 'preserve-3d',
              opacity: '1',
              transform:
                'translate3d(0px, 0px, 0px) scale3d(1.08, 1.08, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPositionY: '35%',
            }}
          >
            <div className='action-text action-text-style'>
              <div className='action-small-title'>Contact Me</div>
              <h5>Let's Work Together</h5>
            </div>
            <img
              src={LeftArrowIcon}
              className='action-arrow-icon action-arrow left-arrow'
              alt=''
              // style={{ transform: "rotate(-180deg)" }}
            />
          </a>
          <a
            href='/about-me'
            className='action-block w-inline-block'
            style={{
              backgroundImage: `url(${HeaderImg2})`,
              transformStyle: 'preserve-3d',
              opacity: '1',
              transform:
                'translate3d(0px, 0px, 0px) scale3d(1.08, 1.08, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPositionY: '25%',
            }}
          >
            <div className='action-text action-text-style'>
              <div className='action-small-title'>
                Behind the Lens: My Journey, Your Story
              </div>
              <h5>Learn More About Me</h5>
            </div>
            <img
              src={ArrowIcon}
              className='action-arrow-icon action-arrow'
              alt=''
            />
          </a>
        </div>
        {/* FOOTER */}
        <div className='footer-section'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Gallery;
