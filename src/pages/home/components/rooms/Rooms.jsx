import React from "react";
import { Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// SwiperCore.use([Navigation, Pagination]);
// import { } from "swiper/modules";

import CardRooms from "./CardRooms";
import roomsList from "./roomsList";
import "./Rooms.css";

const Rooms = () => {
  return (
    <div className="main-container rooms">
      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={50}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="rooms-swiper"
      >
        {roomsList.map((testimonial) => (
          <SwiperSlide id={testimonial.id} className="rooms-swiperSlide">
            <CardRooms
              image={testimonial.image}
              name={testimonial.name}
              nationality={testimonial.nationality}
              website={testimonial.website}
              description={testimonial.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Rooms;
