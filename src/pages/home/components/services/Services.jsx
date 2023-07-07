import React from 'react';
import './Services.css';
import CustomStyles from "../../../../utils/CustomStyles";
import { servicesItems} from "./servicesItems"
import { FaWifi, FaSnowflake, FaConciergeBell, FaUmbrellaBeach, FaLaptopHouse, FaThermometerFull, FaLock } from "react-icons/fa";
import { MdSignalWifi2Bar, MdLaptopChromebook } from 'react-icons/md';

const iconMapping = {
  wifi: FaWifi,
  snowflake: FaSnowflake,
  bell: FaConciergeBell,
  beach: FaUmbrellaBeach,
  laptop: FaLaptopHouse,
  thermometer: FaThermometerFull,
  lock: FaLock,
  wifiSignal: MdSignalWifi2Bar,
  laptopChromebook: MdLaptopChromebook,
};


const Services = () => {
  return (
    <div className='services'>
      <div className="services-container">
        <div className="services-header">
          <CustomStyles.title1 className='mb-2'>Servicios</CustomStyles.title1>
        </div>
        <div className="services-body">
          {servicesItems.map((service, index) => {
            const IconComponent = iconMapping[service.icon];
            return (
              <div className="service-content" key={index}>
                <div className="service-icon">
                <IconComponent size={40} className="mx-2 my-2" />
                </div>
                
                <p className='service-text'>{service.name}</p>
              </div>
            );
          })}
        </div>


      </div>
    </div>
  )
}

export default Services
