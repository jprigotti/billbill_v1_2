import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCarousel from "../SwiperCarousel/SwiperCarousel";



const CarouselAndTitle = ({ title, data, isLoading }) => {


  return (
    <>
      <h3>{title}</h3>
      <SwiperCarousel>
        {!isLoading &&
          data.map((e) => (
            <SwiperSlide
              key={e.id}
              style={{
                background: "transparent",
              }}
            >
              <CardModern
                id={e.id}
                title={e.title}
                bg={e.backdrop}
                footer={`★ ${e.rating}`}
                textButtonA="Ver"
                textButtonB={isFavorite(e.id) ? "★" : "☆"}
                onPressedButtonA={() => {
                  openModal({
                    content: <Details id={e.id} title={e.title} />,
                  });
                }}
                onPressedButtonB={() => {
                  isFavorite(e.id) ? removeFavorite(e.id) : addFavorite(e.id);
                }}
              />
            </SwiperSlide>
          ))}
      </SwiperCarousel>
    </>
  );
};

export default CarouselAndTitle;
