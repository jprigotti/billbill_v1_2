import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomStyles from "../../../../utils/CustomStyles";
import "../../../../utils/global.css"
import "./Gallery_mdq.css"
import { FaInstagram } from "react-icons/fa";

// Import Swiper styles
import "./Swiper.css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { imageData } from './galleryImages_mdq';

const Gallery_mdq = () => {
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
    <div className="main-container mb-10">
      <div className="gallery-mdq-header">
        <CustomStyles.title1 >BILL&BILL MDQ</CustomStyles.title1 >
        <p>Tambien en Mar del Plata</p>
      </div>
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
                src={image.imageUrl} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="gallery-mdq-footer">
        <p className="mx-1">Visita nuestro Instagram</p>
        <div><a href="https://www.instagram.com/hostel_billandbill/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank"><FaInstagram size={45} color="var(--primary-black)" /></a></div>
      </div>
    </div>

  )
}

export default Gallery_mdq
