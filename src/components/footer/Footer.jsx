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
        <div className="contact-1 footer-help">
          <h3>San Telmo</h3>
          <a href="mailto:billandbillsantelmo@gmail.com">
            <TfiEmail className='icon-help' size={15} />
            <span>billandbillsantelmo@gmail.com</span>
          </a>
          <a href="#">
            <TfiHeadphoneAlt className='icon-help' size={15} />
            <span>+54 9 11 2391-4629</span>
          </a>
          <a href="#" className='no-link'>
            <TfiLocationPin className='icon-help' size={15} />
            <span>Chile 680, Buenos Aires, Argentina</span>
          </a>
        </div>

        <div className="contact-2 footer-help">
          <h3>Mar del Plata</h3>
          <a href="mailto:billbillhostel@gmail.com">
            <TfiEmail className='icon-help' size={15} />
            <span>billbillhostel@gmail.com</span>
          </a>
          <a href="#">
            <TfiHeadphoneAlt className='icon-help' size={15} />
            <span>+54 9 223 602-2821</span>
          </a>
          <a href="#" className='no-link'>
            <TfiLocationPin className='icon-help' size={15} />
            <span>Las Heras 2821, Mar del Plata, Argentina</span>
          </a>
        </div>

        <div className="footer-social">
          <h3>Seguinos!</h3>
          <div >
          <a href="https://www.facebook.com/profile.php?id=100093606550739&mibextid=ZbWKwL" target='_blank'>
            <FaFacebook size={35} />
          </a>
          <a href="https://www.instagram.com/billandbillsantelmo/" target='_blank'>
            <FaInstagram size={35} />
          </a>
          </div>


          {/* <a href="#">
            <FaYoutube size={35} />
          </a>
          <a href="#">
            <FaTwitter size={35} />
          </a> */}
        </div>
        <div className="footer-copyright">
          <small>&copy; 2023 <b>JP</b> -Todos los derechos reservados. </small>
        </div>
      </div>
    </div>
  )
}

export default Footer
