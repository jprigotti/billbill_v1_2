import React from 'react'
import "./About.css"
import image1 from "../../../../assets/images/hostel_image_1.jpg"
import CustomStyles from "../../../../utils/CustomStyles";
import "../../../../utils/global.css"
import { content } from "./content"

const About1 = () => {
  return (
    <div className='about main-container mb-5'>
      <div className="about-container">
        <div className="about-header">
          <CustomStyles.title1 className='mb-1'>Bienvenidos!</CustomStyles.title1 >
        </div>

        <div className="about-body">
              <p>{content[0].paragraph}</p>
              <p>{content[1].paragraph}</p>
              <p>{content[2].paragraph}</p>
              <p>{content[3].paragraph}</p>
        </div>
      </div >
    </div>
  )
}

export default About1
