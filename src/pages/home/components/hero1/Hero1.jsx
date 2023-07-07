import React from 'react'
import heroImage from "../../../../assets/images/hostel_image_1.jpg";
import "./Hero1.css"
import "../../../../utils/global.css"

const Hero1 = () => {
  return (
    <section>
      <div className="hero__container">

        <div className="hero__container__div2-container">
          <div className="hero__container__div2-innerContainer">
            <h1 className='mb-1 mx-3'>Bill&Bill — amazing hostel for the free spirited traveler</h1>
            <p className='mx-3 px-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum vero nisi dicta libero error aut itaque sunt, porro odio eveniet.</p>
          </div>
        </div>

<div className="hero__container__div3-container">
<div className="hero__container__div3-image"
                    style={{
                      backgroundImage: `url(${heroImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "left",
                      backgroundRepeat: "no-repeat",
                    }}>

        </div>
</div>


      </div>

    </section>
  )
}

export default Hero1
