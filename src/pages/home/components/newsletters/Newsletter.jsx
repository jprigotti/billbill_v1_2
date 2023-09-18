import React, { useState } from 'react'
import '../newsletters/Newsletter.css'
import CustomStyles from "../../../../utils/CustomStyles";
import { FaLocationArrow } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";

const Newsletter = ({ setMapHeight, mapHeight }) => {

  const [rotationAngle, setRotationAngle] = useState(0);

  const handleLocationView = () => {
    (mapHeight === "150") ? setMapHeight("600") : setMapHeight("150");
    setRotationAngle(rotationAngle + 180);
    console.log(mapHeight);
  }

  return (
    <div id="section-location" className='newsletter'>
      <div className="newsletter-container main-container">
        <div className='newsletter-title'>
          <CustomStyles.title1 className='mb-1'>Donde estamos?</CustomStyles.title1>
          <p className='mb-1'><span><TfiLocationPin /></span>Chile 680, San Telmo - Buenos Aires - Argentina</p>
        </div>
        <div className='newsletter-text'>
          <p className='pt-1'>Explora San Telmo a pie: Nuestra ubicación es inmejorable. Estamos a pocos pasos de la famosa Feria de San Telmo, donde podrás sumergirte en la cultura local, descubrir antigüedades, disfrutar de música en vivo y probar la deliciosa comida argentina en los restaurantes cercanos.</p>
        </div>
      </div>
      <div className="arrow-container"
        style={{
          transform: `rotate(${rotationAngle}deg)`,
          transition: 'transform 0.5s ease-in-out', // Optional: Add a smooth transition
        }}
        onClick={handleLocationView}>
        <FaLocationArrow size={30} className='arrow-icon' />
      </div>
    </div>
  )
}

export default Newsletter