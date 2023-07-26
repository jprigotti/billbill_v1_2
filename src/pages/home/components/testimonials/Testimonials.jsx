import React from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);
import CardTestimonial from './CardTestimonial';
import testimonials from './people';
import './testimonials.css'

const Testimonials = () => {
  return (
    <div className='carousel'>
      <p>Testimonios 2</p>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
      >
        {
          testimonials.map((testimonial) => (
            <SwiperSlide id={testimonial.id}>
              <CardTestimonial
                image={testimonial.image}
                name={testimonial.name}
                nationality={testimonial.nationality}
                website={testimonial.website}
                description={testimonial.description}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Testimonials
