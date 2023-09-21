import React from "react";
import "./Rooms.css";
import CustomStyles from "../../../../utils/CustomStyles";

const CardRooms = ({ id, image, title, priceTag, price, category, type, description, color1, color2 }) => {



  return (
    <div className="rooms-card"
      style={{ background: `linear-gradient(to bottom, ${color1}, ${color2})` }}>
      <div
        className="rooms-card-image"
        style={{
          backgroundImage: `url(${image})`,
        }}>
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
      </div>

      <div className="rooms-card-footer"
        style={{ background: `linear-gradient(to bottom, ${color1}, ${color2})` }}>
        <div>
          <p>{category}</p>
          <p>{type}</p>
        </div>
      </div>

    </div>
  );
};

export default CardRooms;
