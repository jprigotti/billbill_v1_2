import React from 'react'
import video_1 from "../../../../assets/videos/video_1.mp4"
import './Hero2.css'


const Hero2 = () => {
    return (
        <div className="hero mb-5">
            <div className="pattern-overlay">
                <div className="hero-container">
                    <h2>Donde la <span style={{textShadow: "2px 2px 6px var(--jungle-green)"}}>Aventura</span> se Encuentra con la Comodidad</h2>
                    <h1 className='mb-5'>Tu <span style={{textShadow: "2px 2px 6px var(--jungle-green)"}}>Hogar</span> Lejos de Casa</h1>
                </div>
            </div>
            {/* <div className="shadow"></div> */}
            <video src={video_1} autoPlay loop muted />
        </div>
    )
}

export default Hero2


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