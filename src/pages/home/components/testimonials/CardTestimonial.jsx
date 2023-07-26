import React from 'react'
import "./Testimonials.css"

const CardTestimonial = ({id, image, name, nationality, website, description }) => {
    return (
        <div className="card">
                <img src={image} alt={website}/>
                <p>{name}</p>
                <p>{nationality}</p>
                <p>{description}</p>
                <p>{website}</p>   
        </div>
    )
}

export default CardTestimonial
