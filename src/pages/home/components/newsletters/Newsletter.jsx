import React from 'react'
import '../newsletters/Newsletter.css'
import { FaLocationArrow } from "react-icons/fa";

const Newsletter = ({setMapHeight, mapHeight}) => {

const handleLocationView = () => {
  (mapHeight==="150")? setMapHeight("600"): setMapHeight("150");
  console.log(mapHeight);
}

  return (
    <div className='newsletter'>
      <div className="newsletter-container">
        <div className="arow-container">
          <FaLocationArrow size={30} onClick={handleLocationView}/>
        </div>

      </div>
    </div>
  )
}

export default Newsletter