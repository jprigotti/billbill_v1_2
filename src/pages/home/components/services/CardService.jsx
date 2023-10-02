import React from "react";
import "./Services.css";
import { FaWifi, FaSnowflake, FaConciergeBell, FaUmbrellaBeach, FaLaptopHouse, FaThermometerFull, FaLock, FaBookReader } from "react-icons/fa";
import { MdSignalWifi2Bar, MdLaptopChromebook, MdTv, MdKitchen, MdLocalBar } from 'react-icons/md';




const CardService = ({ iconComponent, text }) => {
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
        cocina: MdKitchen ,
        lectura: FaBookReader,
        tv: MdTv,
        bar: MdLocalBar,
    };

    const IconComponent = iconMapping[iconComponent];
    return (
        <div className="service-content">
            <div className="service-icon">
                <IconComponent size={40} className="mx-2 my-2" />
            </div>
            <p className='service-text'>{text}</p>
        </div>
    );
};

export default CardService;
