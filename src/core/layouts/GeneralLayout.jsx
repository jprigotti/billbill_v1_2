import React from 'react'
import Footer from '../../components/footer/Footer'
import "../../../src/core/layouts/GeneralLayout.css"
import Navbar from '../../components/navBar/Navbar'
import "../../utils/global.css"
import WhatsApp from '../../components/whatsApp/WhatsApp'

const GeneralLayout = ({ children }) => {
  return (
    <div className="outer-container">
        <Navbar />
        {children}
        <Footer />
        <WhatsApp />
    </div>
  )
}

export default GeneralLayout
