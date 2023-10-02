import React from "react";
import "./Rooms.css";
import CustomStyles from "../../../../utils/CustomStyles";

const CardRooms = ({ id, image, category, type, bathroom, color1, color2 }) => {

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
            <p className="mb-2">{category}</p>
            <p className="mb-2">{type}</p>
            <p className="mb-2">{bathroom}</p>
            <p>
              <CustomStyles.buttonBook onClick={abrirWhatsApp}>Reservar</CustomStyles.buttonBook>
            </p>
        </div>
      </div>

      <div className="rooms-card-footer"
        style={{ background: `linear-gradient(to bottom, ${color1}, ${color2})` }}>
        <div>
          {/* <p>{category}</p>
          <p className="mb-1">{type}</p> */}
          <div className="rooms-card-body-footer">

          </div>
        </div>

      </div>

    </div>
  );
};

export default CardRooms;
