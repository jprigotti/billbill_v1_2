import React from "react";
import "./Rooms.css";
import CustomStyles from "../../../../utils/CustomStyles";

const CardRooms = ({ id, image, title, priceTag, price, category, type, description, color1, color2 }) => {

    const abrirWhatsApp = () => {
      const numeroTelefono = "+5491123914629"; // ¡Asegúrate de incluir el código de país!
      const mensaje = "¡Hola! Estoy contactándote para reservar una habitación";
      const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(
        mensaje
      )}`;
      window.open(url, "_blank");
    };

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

        </div>
      </div>

      <div className="rooms-card-footer"
        style={{ background: `linear-gradient(to bottom, ${color1}, ${color2})` }}>
        <div>
          <p>{category}</p>
          <p className="mb-1">{type}</p>
          <div className="rooms-card-body-footer">
            <p>
              <CustomStyles.buttonBook onClick={abrirWhatsApp}>Reservar</CustomStyles.buttonBook>
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default CardRooms;
