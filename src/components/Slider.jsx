import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

const Slider = () => {
  // console.log("Slider");
  const [images, setImages] = useState();

  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = async () => {
    try {
      const response = await fetch('https://backend.nnphotography.in/api/home');

      if (response.ok) {
        const data = await response.json();
        setImages(data);
        // console.log(data); // Handle the fetched data here
      } else {
        console.error('Failed to fetch data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
        {images &&
          images.map((image) => {
            return (
              <SwiperSlide key={image.id}>
                <img src={image.url} alt={'Rose Pelican Swim'} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default Slider;
