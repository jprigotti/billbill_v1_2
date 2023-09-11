import React from 'react'
import "../about/About.css"
import image1 from "../../../../assets/images/hostel_image_1.jpg"
import CustomStyles from "../../../../utils/CustomStyles";
import "../../../../utils/global.css"
import { content } from "./content"

const About = () => {
  return (
    <div className='about main-container mb-5'>
      <div className="about-container">
        <div className="about-header">
        </div>

        <div className="about-body">
          <div className="text-container">
            <CustomStyles.title5 className='mb-1'>Bienvenidos!</CustomStyles.title5 >
            <div className="text">
              <p>{content[0].paragraph}</p>
              <p>{content[1].paragraph}</p>
              <p>{content[2].paragraph}</p>
              <p>{content[3].paragraph}</p>
            </div>
          </div>

          <div className="image-container">
            <div className="image"
              style={{
                backgroundImage: `url(${image1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div >
    </div>
  )
}

export default About
