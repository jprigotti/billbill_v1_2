import React from "react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// SwiperCore.use([Navigation, Pagination]);
// import { } from "swiper/modules";

import CardTestimonial from "./CardTestimonial";
import testimonials from "./people";
import "./Testimonials.css";

const Testimonials2 = () => {
  return (
    <div className="main-container testimonials">
      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 7,
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
        className="testimonials-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide id={testimonial.id} className="testimonials-swiperSlide">
            <CardTestimonial
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

export default Testimonials2;