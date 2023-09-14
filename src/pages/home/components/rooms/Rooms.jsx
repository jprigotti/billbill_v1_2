import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomStyles from "../../../../utils/CustomStyles";
import "swiper/css";
import "swiper/css/pagination";

import CardRooms from "./CardRooms";
import roomsList from "./roomsList";
import "./Rooms.css";

const Rooms = () => {
  return (
    <div className="main-container rooms mb-10">
      <div className="rooms-container">
        <div className="rooms-header">
          <CustomStyles.title5 className='mb-1'>Habitaciones</CustomStyles.title5 >
          <p> Ofrecemos una variedad de opciones de alojamiento para adaptarnos a tus necesidades. Ya sea que prefieras dormitorios compartidos o habitaciones privadas, todas están diseñadas para brindarte comodidad y privacidad.</p>
        </div>

        <div className="rooms-body">
          <Swiper
            // loop={false}
            // grabCursor={true}
            // centeredSlides={true}
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
              200: {
                // slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1240: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="rooms-swiper"
          >
            {roomsList.map((room) => (
              <SwiperSlide className="rooms-swiperSlide">
                <CardRooms
                  key={room.id}
                  image={room.image}
                  title={room.title}
                  priceTag={room.priceTag}
                  price={room.price}
                  category={room.category}
                  type={room.type}
                  description={room.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
