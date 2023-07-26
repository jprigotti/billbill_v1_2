import React from "react";
import "./Testimonials.css";

const CardTestimonial = ({
  id,
  image,
  name,
  nationality,
  website,
  description,
}) => {
  return (
    <div className="testimonials-card">
      <div className="testimonials-card-header">
        <img src={image} alt={website} />
        <div>
          <p>{name}</p>
          <p>{nationality}</p>
        </div>
      </div>
      <div className="testimonials-card-body">
        <p>{description}</p>
      </div>
      <div className="testimonials-card-footer">
        <p>{website}</p>
      </div>
    </div>
  );
};

export default CardTestimonial;
