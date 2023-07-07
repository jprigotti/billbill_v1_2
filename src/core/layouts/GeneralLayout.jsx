import React from 'react'
import Footer from '../../components/footer/Footer'
import "./GeneralLayout.css"
import Navbar from '../../components/navBar/Navbar'
import "../../utils/global.css"

const GeneralLayout = ({ children }) => {
  return (
    <div className="outer-container">
      {/* <div className="main-container"> */}
        <Navbar />
        {children}
        <Footer />
      {/* </div> */}

    </div>
  )
}

export default GeneralLayout
