import React from 'react'
import { About, Contact, Gallery, Hero2, Hero1, Location, Rooms, Services1, SocialMedia, Testimonials, Testimonials2, Testimonials3, Newsletter, Bacity } from "../components/homeComponents"

const HomeView = () => {
    return (
        <div>
            <Hero2 />
            <About />
            <Rooms />
            <Services1 />
            <Gallery />
            <Testimonials3 />
            <Contact />
            <Newsletter />
            <Location />
        </div>
    )
}

export default HomeView
