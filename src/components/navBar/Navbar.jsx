import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import billbillLogo from './../../assets/billbill_logo_png.png';
import "../../../src/components/navBar/navbar.css";
import { menuItems } from "../../../src/components/navBar/menuItems.js";
import { TfiLocationPin } from "react-icons/tfi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import "../../utils/global.css"
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [alpha, setAlpha] = useState(0.3);
  const [logoSize, setLogoSize] = useState(60);
  var calcLogoSize = 0;
  var calcAlpha = 0;
  const SCROLL_BREAK = 1000;
  const LOGO_SIZE = 80;
  const BILL_SIZE = 20;
  // useEffect(() => {
  //   setToggleMenu(true);
  // }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLogoSize(1);

      const handleScroll = () => {
        calcAlpha = window.scrollY;
        calcAlpha = 0.5 + calcAlpha / SCROLL_BREAK;
        setAlpha(calcAlpha > 1 ? 1 : calcAlpha);

        calcLogoSize = 1 - (window.scrollY / SCROLL_BREAK);
        setLogoSize(calcLogoSize < 0 ? 0 : calcLogoSize);
      }

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className={toggleMenu ? 'navbar': 'navbar navbar-100vh'}
      style={{  
      backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, ${alpha}), rgba(255,255,255, ${alpha}))`
      }}>
      <div className="main-container navbar-container">
        <div className="navbar-logo mx-2">
          <img
            style={{
              width: `${LOGO_SIZE * logoSize}px`,
              height: `${LOGO_SIZE * logoSize}px`
            }}
            src={billbillLogo} />
          <p style={{ fontSize: `${BILL_SIZE * (1 - logoSize)}px`, }}>
            Bill<span style={{ fontSize: `${BILL_SIZE * (1 - logoSize)}px`, color: "var(--jungle-green)" }}>&</span>Bill
          </p>
        </div>

        <div className="navbar-content">
          <div className="navbar-links-container">
            {menuItems.map((item, index) => {
              return (<p key={index}><a className="mx-2 underline-effect" href={item.tag}>{item.name}</a></p>)
            })}
          </div>
        </div>
        <div className="navbar-info">
          <a href="https://www.facebook.com/profile.php?id=100093606550739&mibextid=ZbWKwL" target='_blank'><FaFacebook size={35} /></a>
          <div className='mx-1'></div>
          <a href="https://www.instagram.com/billandbillsantelmo/" target='_blank'><FaInstagram size={35} /></a>
        </div>
        <div className="gpt3__navbar-menu">
          {!toggleMenu
            ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(true)} />
            : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(false)} />}
        </div>
      </div>



      <div className={toggleMenu ? 'gpt3__navbar-menu_container show-menu' : 'gpt3__navbar-menu_container  hide-menu'}>
        <div className="gpt3__navbar-menu_container-links">
          {menuItems.map((item, index) => {
            return (<p key={index}><a className="mx-2 underline-effect" href={item.tag}>{item.name}</a></p>)
          })}
        </div>
      </div>

    </div>
  );
};

export default Navbar;

