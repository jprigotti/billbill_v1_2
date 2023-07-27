import React from "react";
import "./Rooms.css";

const CardRooms = ({ id, image, title, priceTag, price, description }) => {
  return (
    <div className="rooms-card">
      <div className="rooms-card-header">
        <img src={image} alt="room image" />
      </div>
      <div className="rooms-card-description">
        <div>
          <p>{description}</p>
        </div>
      </div>
      <div className="testimonials-card-body">
        <div>
          <p>{priceTag}</p>
          <p>{price}</p>
        </div>
      </div>
      <div className="testimonials-card-footer">
        <p>
          <button>Mas info</button>
        </p>
      </div>
    </div>
  );
};

export default CardRooms;
