import React, { useState } from 'react'
import { About1, Contact, Gallery, Gallery_mdq, Hero2, Hero3, Location, Rooms, Services1, SocialMedia, Testimonials, Testimonials2, Testimonials3, Newsletter, Bacity } from "../components/homeComponents"
import { Helmet } from 'react-helmet-async';

const HomeView = () => {
    const [mapHeight, setMapHeigh] = useState("150")
    return (
        <div>
            <Helmet>
                <title>Hostel Bill & Bill San Telmo - Buenos Aires - Sitio oficial</title>
                <meta name="description"
                    content="Estamos en San Telmo a cuadras de plaza de mayo, en el microcento de la ciudad de buenos aires" />
                <meta name="keywords"
                    content="hostel, san telmo, buenos aires, alojamiento, obelisco, la boca, boca juniors, noche, descanso, fin de semana, estadía" />
                <link rel="canonical" href="https://hostelbillandbill.com" />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Hostel Bill & Bill San Telmo - Buenos Aires - Sitio oficial" />
                <meta property="og:description"
                    content="Estamos en San Telmo a cuadras de plaza de mayo, en el microcento de la ciudad de buenos aires" />
                <meta property="og:url" content="https://hostelbillandbill.com" />
                <meta property="og:site_name" content="Hostel Bill & Bill San Telmo" />
                <meta property="article:modified_time" content="2023-10-05T14:09:18+00:00" />
                <meta property="og:image" content="https://hostelbillandbill.com/assets/hostel_frente_4_3-87733898.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:label1" content="Tiempo de lectura" />
                <meta name="twitter:data1" content="8 minutos" />
            </Helmet>
            <Hero3 />
            <About1 />
            <Rooms />
            <Services1 />
            <Gallery />
            <Testimonials3 />
            <Contact />
            <Newsletter setMapHeight={setMapHeigh} mapHeight={mapHeight} />
            <Location mapHeight={mapHeight} />
            <Gallery_mdq />
        </div>
    )
}

export default HomeView
