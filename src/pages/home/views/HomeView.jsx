import React from 'react'
import { About, Contact, Gallery, Hero2, Hero1, Location, Rooms, Services, SocialMedia, Testimonials, Newsletter, Bacity } from "../components/homeComponents"

const HomeView = () => {
    return (
        <div>
            <Hero2 />
            <About />
            <Services />
            <Rooms />
            <Gallery />
            <Newsletter />
            <Testimonials />
            <Contact />

            <SocialMedia />
            <Bacity />
            <Location />
        </div>
    )
}

export default HomeView
