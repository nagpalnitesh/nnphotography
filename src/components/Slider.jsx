// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

import slideData from '../data/slides.json';
import { cld, cldSrcSet } from '../utils/cloudinary';

// Slides fill the viewport, so offer larger widths than the gallery.
const HERO_WIDTHS = [800, 1200, 1600, 2400];

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        direction={'vertical'}
        slidesPerView={1}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className='mySwiper'
      >
        {slideData.slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <img
              src={cld(slide.src, 1600)}
              srcSet={cldSrcSet(slide.src, HERO_WIDTHS)}
              sizes='100vw'
              width={slide.width}
              height={slide.height}
              alt={slide.alt}
              // Only the first (LCP) slide is prioritised; the rest load lazily.
              fetchpriority={index === 0 ? 'high' : undefined}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding={index === 0 ? 'auto' : 'async'}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
