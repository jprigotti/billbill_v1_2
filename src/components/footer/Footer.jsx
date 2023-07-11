import React from 'react'
import "../../utils/global.css"
import "../../../src/components/footer/Footer.css"
import logo from './../../assets/billbill_logo_black_1.png';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter
} from "react-icons/fa";
import {
  TfiLocationPin,
  TfiHeadphoneAlt,
  TfiEmail
} from "react-icons/tfi";


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className="footer-logo">
          <figure>
            <a href="#">
              <img src={logo} alt="Bill & Bill Logo" />
            </a>
            <figcaption>Hostel de Amigos</figcaption>
          </figure>
        </div>
        <div className="footer-help">
          <h3>Contacto</h3>
          <a href="#">
            <TfiEmail className='icon-help' size={15} />
            <span>billbill@email.com.ar</span>
          </a>
          <a href="#">
            <TfiHeadphoneAlt className='icon-help' size={15} />
            <span>+54911-23914629</span>
          </a>
          <a href="#" className='no-link'>
            <TfiLocationPin className='icon-help' size={15} />
            <span>Chile 680, Buenos Aires, Argentina</span>
          </a>
        </div>
        <div className="footer-social">
          <h3>Seguinos!</h3>
          <a href="#">
            <FaFacebook size={35} />
          </a>
          <a href="#">
            <FaInstagram size={35} />
          </a>
          <a href="#">
            <FaYoutube size={35} />
          </a>
          <a href="#">
            <FaTwitter size={35} />
          </a>
        </div>
        <div className="footer-copyright">
          <small>&copy; 2023 <b>JP</b> -Todos los derechos reservados. </small>
        </div>
      </div>
    </div>
  )
}

export default Footer
