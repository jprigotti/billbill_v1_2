import React, { useState } from 'react'
import { About1, Contact, Gallery, Gallery_mdq, Hero2, Hero3, Location, Rooms, Services1, SocialMedia, Testimonials, Testimonials2, Testimonials3, Newsletter, Bacity } from "../components/homeComponents"

const HomeView = () => {
    const [mapHeight, setMapHeigh] = useState("150")
    return (
        <div>
            <Hero3 />
            <About1 />
            <Rooms />
            <Services1 />
            <Gallery />
            <Testimonials3 />
            <Contact />
            <Newsletter setMapHeight={setMapHeigh} mapHeight={mapHeight} />
            <Location mapHeight = {mapHeight}/>
            <Gallery_mdq />
        </div>
    )
}

export default HomeView
