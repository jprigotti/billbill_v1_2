import React, { useState, useEffect } from "react";
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

const Testimonials3 = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    console.log("ScrollY is: ", window.scrollY);
    console.log("scrolly/multiplier is: ", window.scrollY / parallaxMultiplier);
  };

  useEffect(() => {
    // Add event listener to track scrolling position
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Customize the parallax effect by adjusting the offset values below

  const parallaxOffsetY = -400;
  const parallaxMultiplier = 6;

  return (
    <div className="parallax-container mt-5 mb-5">
      <div className="parallax-item"
        style={{
          top: `${parallaxOffsetY}PX`,
          transform: `translateY(${scrollPosition / parallaxMultiplier}px)`
        }}>
        <Swiper
          effect={"coverflow"}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={50}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 100,
            modifier: 5,
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
          className="main-container testimonials-swiper"
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
    </div>

  );
};

export default Testimonials3;