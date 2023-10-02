import React from "react";
import { Autoplay, Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomStyles from "../../../../utils/CustomStyles";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';

import CardRooms from "./CardRooms";
import roomsList from "./roomsList";
import "./Rooms.css";

const Rooms = () => {
  return (
    <div id="section-rooms" className="main-container rooms mb-10">
      <div className="rooms-container">
        <div className="rooms-header">
          <CustomStyles.title1 className='mb-1'>Habitaciones</CustomStyles.title1 >
          <p> Ofrecemos una variedad de opciones de alojamiento para adaptarnos a tus necesidades. Ya sea que prefieras dormitorios compartidos o habitaciones privadas, todas están diseñadas para brindarte comodidad y privacidad.</p>
        </div>

        <div className="rooms-body">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
              stopOnLastSlide: true
            }}
            scrollbar={{
              hide: false,
            }}
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1240: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1500: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay, Navigation, Scrollbar]}
            navigation={true}
            className="rooms-swiper"
          >
            {roomsList.map((room) => (
              <SwiperSlide className="rooms-swiperSlide">
                <CardRooms
                  key={room.id}
                  image={room.image}
                  category={room.category}
                  bathroom={room.bathroom}
                  type={room.type}
                  color1={room.color1}
                  color2={room.color2}
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
