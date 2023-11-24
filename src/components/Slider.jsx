import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// import SlideImg1 from "../assets/nnphotography/DSC_1832.jpeg";
import SlideImg2 from "../assets/nnphotography/DSC_18891.jpeg";
import SlideImg3 from "../assets/nnphotography/DSC_3165.jpeg";
import SlideImg4 from "../assets/nnphotography/DSC_2725.jpeg";
import SlideImg5 from "../assets/nnphotography/DSC_3421.jpeg";
import SlideImg6 from "../assets/nnphotography/DSC_E0582.jpeg";
import SlideImg7 from "../assets/nnphotography/DSC_9326.jpeg";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        direction={"vertical"}
        slidesPerView={1}
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={SlideImg3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlideImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlideImg4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlideImg5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlideImg6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlideImg7} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
