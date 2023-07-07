import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import billbillLogo from './../../assets/billbill_logo_png.png';
import "./Navbar.css";
import { menuItems } from "./menuItems";
import { TfiLocationPin } from "react-icons/tfi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import "../../utils/global.css"

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
    <div className="navbar"
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
            <div className="navbar-info">
              <TfiLocationPin size={20} className="mx-1" />
              <p>Chile 680, Buenos Aires, Argentina</p>
              <div className='mx-1'></div>
              <TfiHeadphoneAlt size={20} className="mx-1" />
              <p>+54911-23914629</p>
            </div>
          </div>
        </div>



        <div className="gpt3__navbar-menu">
          {!toggleMenu
            ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(true)} />
            : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(false)} />}
          {/* {toggleMenu && ( */}
          <div className={toggleMenu ? 'gpt3__navbar-menu_container show-menu' : 'gpt3__navbar-menu_container  hide-menu'}>
            <div className="gpt3__navbar-menu_container-links">
              {menuItems.map((item, index) => {
                return (<p key={index}><a className="mx-2 underline-effect" href={item.tag}>{item.name}</a></p>)
              })}
            </div>
          </div>
          {/* )} */}
        </div>
      </div>

    </div>
  );
};

export default Navbar;

