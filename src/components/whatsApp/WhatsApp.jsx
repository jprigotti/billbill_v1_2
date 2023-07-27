import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsApp.css";

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
        console.log("wheel es: ", event.deltaY);
        console.log("scrollWhatsApp: ", scrollWhatsApp);
        setScrollWhatsApp((prevScroll) => prevScroll + (event.deltaY/4));

        setTimeout(function() {
            setScrollWhatsApp((prevScroll) => prevScroll - (event.deltaY/4));
          }, 1000);
      };

      window.addEventListener("wheel", handleMouseScroll);

      return () => window.removeEventListener("wheel", handleMouseScroll);
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: "50px",
        top: `calc(85% + ${scrollWhatsApp}px)`,
        // top: `50%`,
        // transform: `translateY(${scrollWhatsApp/2}%)`,
        // transition: "1s ease-in-out",
        transition: "property duration cubic-bezier(0.5, 0, 0.6, 5)",
        zIndex: '999',
         }}
    >
      <button onClick={abrirWhatsApp}>
        <FaWhatsapp size={50} color="green"/>
      </button>
    </div>
  );
};

export default WhatsApp;
