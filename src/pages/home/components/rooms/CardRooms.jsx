import React from "react";
import "./Rooms.css";
import CustomStyles from "../../../../utils/CustomStyles";

const CardRooms = ({ id, image, title, priceTag, price, description }) => {
  return (
    <div className="rooms-card">
      <div
        className="rooms-card-header"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="rooms-card-description">
        <div>
          <p>{description}</p>
        </div>
      </div>
      <div className="rooms-card-body">
        <div>
          <p>{priceTag}</p>
          <p className="price">{price}</p>
        </div>
      </div>
      <div className="rooms-card-footer">
        <p>
          <CustomStyles.buttonSend>Mas info</CustomStyles.buttonSend>
        </p>
      </div>
    </div>
  );
};

export default CardRooms;
