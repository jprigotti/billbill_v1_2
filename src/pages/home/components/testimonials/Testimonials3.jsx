import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import parallaxImage from "../../../../assets/images/bacity1.jpg";

// SwiperCore.use([Navigation, Pagination]);
// import { } from "swiper/modules";

import CardTestimonial from "./CardTestimonial";
import testimonials from "./people";
import "./Testimonials.css";

const Testimonials3 = () => {


  return (
    <div>
      <Parallax
        bgImage={parallaxImage}
        strength={400}
        className=" parallax-container mb-10">
        <div style={{height: "500px"}}>
          <div
            style={{
              width: "100%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
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
              className="main-container testimonials-swiper">
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="testimonials-swiperSlide">
                  <CardTestimonial
                    image={testimonial.image}
                    name={testimonial.name}
                    nationality={testimonial.nationality}
                    website={testimonial.website}
                    description={testimonial.description}
                    flag={testimonial.flag}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Testimonials3;