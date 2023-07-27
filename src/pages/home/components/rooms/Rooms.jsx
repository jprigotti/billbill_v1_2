import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import CardRooms from "./CardRooms";
import roomsList from "./roomsList";
import "./Rooms.css";

const Rooms = () => {
  return (
    <div className="main-container rooms">
      <Swiper
        // loop={false}
        // grabCursor={true}
        // centeredSlides={true}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="rooms-swiper"
      >
        {roomsList.map((room) => (
          <SwiperSlide id={room.id} className="rooms-swiperSlide">
            <CardRooms
              image={room.image}
              title={room.title}
              priceTag={room.priceTag}
              price={room.price}
              description={room.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Rooms;
