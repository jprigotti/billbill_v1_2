import React from 'react'
import '../newsletters/Newsletter.css'
import { FaLocationArrow } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <div className="newsletter-container">
        <div className="arow-container">
          <FaLocationArrow size={30}/>
        </div>

      </div>
    </div>
  )
}

export default Newsletter