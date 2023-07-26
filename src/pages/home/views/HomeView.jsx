import React from 'react'
import { About, Contact, Gallery, Hero2, Hero1, Location, Rooms, Services, SocialMedia, Testimonials, Testimonials2, Newsletter, Bacity } from "../components/homeComponents"

const HomeView = () => {
    return (
        <div>
            <Hero2 />
            <About />
            <Services />
            <Rooms />
            <Gallery />
            <Newsletter />
            <Contact />
            <Testimonials2 />
            <Bacity />
            <Location />
        </div>
    )
}

export default HomeView
