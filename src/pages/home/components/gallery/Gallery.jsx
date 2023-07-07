import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../utils/global.css"

// Import Swiper styles
import "./Swiper.css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { imageData } from './galleryImages';



const Gallery = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='main-container mt-5'>
      <Swiper
        loop={true}
        pagination={false}
        observer={true}// adding this solve my issue
        navigation={true}
        modules={[Pagination, Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        className="mySwiper">
        {imageData.map((image, index) => {
          return (
          <SwiperSlide 
          key={index}
          style={{
            background: "transparent",
          }}>
            <img
              className=""
              src={image.image} />
          </SwiperSlide>)
        })}
      </Swiper>
    </div>
  )
}

export default Gallery
