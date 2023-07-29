import React from 'react';
// import required modules
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../services/Services.css';
import CustomStyles from "../../../../utils/CustomStyles";
import { servicesItems } from "./servicesItems"

import CardService from "./CardService"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Services1 = () => {
  return (
    <div className='services mb-10'>
      <div className="main-container services-container">
        <div className="services-header">
          <CustomStyles.title1 className='mb-2'>Servicios</CustomStyles.title1>
        </div>
        <div className="services-body">
          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={5}
            centeredSlides={false}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
          >
            {servicesItems.map((service, index) => {
              return (
                <SwiperSlide key={index}>
                  <CardService
                    iconComponent={service.icon}
                    text={service.name} />
                </SwiperSlide>
              )
            })}
          </Swiper>

        </div>

      </div>
    </div>
  )
}

export default Services1
