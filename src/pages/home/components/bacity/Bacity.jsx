import React from 'react'
import "../bacity/Bacity.css"
import bacityImage from "../../../../assets/images/bacity1.jpg"
import "../hero2/Hero2.css"

const Bacity = () => {
    return (
        <div className="bacity"
            style={{
                backgroundImage: `url(${bacityImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            <div className="pattern-overlay">
            </div>
        </div>
    )
}

export default Bacity


