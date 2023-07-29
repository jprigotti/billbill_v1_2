import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsApp.css";
import whatsAppIcon from "../../assets/whats.png";

const WhatsApp = () => {
  const abrirWhatsApp = () => {
    const numeroTelefono = "+5491134041910"; // ¡Asegúrate de incluir el código de país!
    const mensaje = "¡Hola! Estoy contactándote desde Bill&Bill";
    const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  };

  const [scrollWhatsApp, setScrollWhatsApp] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleMouseScroll = (event) => {
        if (event.deltaY < 0) {
          setScrollWhatsApp((prevScroll) => prevScroll + event.deltaY / 3);
          setTimeout(function () {
            setScrollWhatsApp((prevScroll) => prevScroll - event.deltaY / 3);
          }, 2000);
        }
      };

      window.addEventListener("wheel", handleMouseScroll);

      return () => window.removeEventListener("wheel", handleMouseScroll);
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: "40px",
        top: `calc(85% + ${scrollWhatsApp}px)`,
        // top: `50%`,
        // transform: `translateY(${scrollWhatsApp/2}%)`,
        // transition: "1s ease-in-out",
        transition: "2s cubic-bezier(.58,.22,.23,.75)",
        zIndex: "999",
        cursor: "pointer"
      }}
    >
      <button onClick={abrirWhatsApp} className="whatsApp-icon">
        {/* <FaWhatsapp size={50} color="green"/> */}
        <img src={whatsAppIcon} alt="WhatsApp-Icon" />
        {/* <div className="whatsApp-icon">

        </div> */}
      </button>
    </div>
  );
};

export default WhatsApp;