import React from "react";
import "./Testimonials.css";

const CardTestimonial = ({
  id,
  image,
  name,
  nationality,
  website,
  description,
  flag
}) => {
  return (
    <div className="testimonials-card">
      <div className="testimonials-card-header">
        <img src={image} alt={website} />
        <div>
          <p className="name">{name}</p>
          <div className="nationality-container">
            <img className="flag" src={flag} alt="flag"></img>
            <p className="nationality">{nationality}</p>
          </div>
        </div>
      </div>
      <div className="testimonials-card-body">
        <p className="comments">{description}</p>
      </div>
      <div className="testimonials-card-footer">
        <p>{website}</p>
      </div>
    </div>
  );
};

export default CardTestimonial;
