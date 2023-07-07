import React from 'react'
import "./About.css"
import image1 from "../../../../assets/images/hostel_image_1.jpg"
import CustomStyles from "../../../../utils/CustomStyles";
import "../../../../utils/global.css"
import { content } from "./content"

const About = () => {
  return (
    <div className='about main-container'>
      <div className="about-container">
        <div className="about-header">
          {/* <h1 className='mb-1'>Bienvenidos!</h1> */}
        </div>

        <div className="about-body">
          <div className="text-container">
          <CustomStyles.title5 className='mb-1'>Bienvenidos!</CustomStyles.title5 >
            <div className="text">
              <p>{content[0].paragraph}</p>
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


          {/* {content.map((content, index) => {
              return (<p key={index} className="mb-1"> {content.paragraph} </p>)
            })} */}
        </div>
        {/* <div className="image"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>

        </div> */}
      </div>
    </div >
  )
}

export default About
