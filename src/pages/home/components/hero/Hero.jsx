import React from 'react'
import heroImage from "../../../../assets/images/hostel_image_1.jpg";
import "./Hero.css"
import "../../../../utils/global.css"

const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        
        <div className="hero-content-container">
          <div className="hero-content-inner-container">
            <h1 className='mb-1 mx-3'>Bill&Bill — amazing hostel for the free spirited traveler</h1>
            <p className='mx-3 px-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum vero nisi dicta libero error aut itaque sunt, porro odio eveniet.</p>
          </div>

        </div>
        <div className="hero-image-container">
          <div className="hero-image-inner-container"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>
            {/* <img src={hostelImage} alt="" /> */}
          </div>
        </div>

      </div>

    </section>
  )
}

export default Hero
