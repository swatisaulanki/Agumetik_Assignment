// import React from 'react'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Modulecarouse.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Homecarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <Link to="/shome">
              <img src="https://cdn.dribbble.com/users/1756963/screenshots/15109502/media/0d931ce8f2f3aecc2908902c4b9d61a4.png?compress=1&resize=1000x750&vertical=top" />
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src="https://cdn.dribbble.com/users/1756963/screenshots/15109502/media/a1bceaa24cbc8b7ee566bd87796c24c6.png?compress=1&resize=800x600&vertical=top" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Homecarousel;
