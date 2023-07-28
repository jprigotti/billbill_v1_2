import React from 'react'
import { About, Contact, Gallery, Hero2, Hero1, Location, Rooms, Services, SocialMedia, Testimonials, Testimonials2, Testimonials3, Newsletter, Bacity } from "../components/homeComponents"

const HomeView = () => {
    return (
        <div>
            <Hero2 />
            <About />
            <Rooms />
            <Services />
            <Gallery />
            <Newsletter />
            <Testimonials3 />
            <Contact />
            {/* <Bacity /> */}
            <Location />
        </div>
    )
}

export default HomeView
