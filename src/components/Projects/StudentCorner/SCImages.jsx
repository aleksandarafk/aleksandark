import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './scimages.css';

// import required modules
import { EffectCards, Autoplay } from 'swiper/modules';

export default function SCImages() {
  return (
    <>
     <div className='imagecanvas'>
     <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className='studentcorner1'/>
        <SwiperSlide className='studentcorner2'/>
        <SwiperSlide className='studentcorner3'/>
      </Swiper>
      </div>
    </>
  );
}
