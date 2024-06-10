import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './bierensimages.css';

// import required modules
import { EffectCards, Autoplay } from 'swiper/modules';

export default function BierensImages() {
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
        <SwiperSlide className='bierens1'/>
        <SwiperSlide className='bierens2'/>
        <SwiperSlide className='bierens3'/>
      </Swiper>
      </div>
    </>
  );
}
