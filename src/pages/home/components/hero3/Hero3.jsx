import React, { useEffect, useState } from "react";
import { Autoplay, EffectFade, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../utils/global.css"
import "./Hero3.css"

// Import Swiper styles
import "./Swiper.css";
import "swiper/css/bundle";
import { images16x9, images4x3 } from './heroImages';

const Hero3 = () => {

    const [images, setImages] = useState(images16x9); // This is just an example, initialize it as per your needs

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setImages(images4x3);
            } else {
                setImages(images16x9);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id="section-hero" className="hero mb-5">
            <Swiper
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                observer={true}// adding this solve my issue
                modules={[Autoplay, EffectFade, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                className="mySwiper">
                {images.map((image, index) => {
                    return (
                        <SwiperSlide
                            key={index}
                            style={{
                                background: "transparent",
                            }}>
                            <div
                                style={{
                                    backgroundImage: `url(${image.imageURL})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    height: "100%"
                                }}>
                                <div className="pattern-overlay">
                                    <div className="hero-container">
                                        <h2>{image.imageText}</h2>
                                        {/* <h2>Donde la <span style={{ textShadow: "2px 2px 6px var(--jungle-green)" }}>Aventura</span> se Encuentra con la Comodidad</h2>
                                        <h1 className='mb-5'>Tu <span style={{ textShadow: "2px 2px 6px var(--jungle-green)" }}>Hogar</span> Lejos de Casa</h1> */}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                })}
            </Swiper>


        </div>
    )
}

export default Hero3


/**
 * Codigo youtube, funciona todo menos el Loop
 */

// const Hero2 = () => {
//     return (
//         <div className="hero-container">
//             <div className="pattern-overlay"></div>
//             <iframe
//                 style={{
//                     width: "100%"
//                 }}
//                 src="https://www.youtube.com/embed/Dn3eTlUJL6w?autoplay=1&mute=1"
//                 title="YouTube video player"
//                 allow="loop; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             ></iframe>
//         </div>
//     );
// };

// export default Hero2;