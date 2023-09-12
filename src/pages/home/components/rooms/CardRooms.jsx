import React from "react";
import "./Rooms.css";
import CustomStyles from "../../../../utils/CustomStyles";

const CardRooms = ({ id, image, title, priceTag, price, category, type, description }) => {
  return (
    <div className="rooms-card">
      <div
        className="rooms-card-image"
        style={{
          backgroundImage: `url(${image})`,
        }}>
      </div>
      <div className="rooms-card-body-content">
        <div>
          <p>{priceTag}</p>
          <p className="price mb-5">{price}</p>
        </div>
        <div className="rooms-card-body-footer">
          <p>
            <CustomStyles.buttonSend>Mas info</CustomStyles.buttonSend>
          </p>
        </div>
      </div>
      <div className="rooms-card-footer">
        <div>
          <p>{category}</p>
          <p>{type}</p>
        </div>
      </div>

    </div>
  );
};

export default CardRooms;
