import React from 'react'
import Footer from '../../components/footer/Footer'
import "../../../src/core/layouts/GeneralLayout.css"
import NavbarBooking from '../../components/navBar/NavbarBooking'
import "../../utils/global.css"
import WhatsApp from '../../components/whatsApp/WhatsApp'

const GeneralLayout = ({ children }) => {
  return (
    <div className="outer-container">
        <NavbarBooking />
        {children}
        <Footer />
        <WhatsApp />
    </div>
  )
}

export default GeneralLayout
