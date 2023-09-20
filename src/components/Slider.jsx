import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import SlideImg1 from "../assets/images/nature-1.jpg";
import SlideImg2 from "../assets/images/nature-2.jpg";
import SlideImg3 from "../assets/images/nature-3.jpg";

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
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={SlideImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlideImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlideImg3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
