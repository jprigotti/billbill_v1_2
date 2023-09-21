import React from 'react'
import "../location/Location.css"

const Location = ({mapHeight}) => {


  return (
    <>
        <div  className='location'
    style={{height: `${mapHeight}px` }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4019.201367822542!2d-58.3788932965266!3d-34.61635712794022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb2a721f0bb3%3A0x548d3ae518a7a280!2sChile%20680%2C%20C1098AAN%20CABA!5e0!3m2!1ses!2sar!4v1688496925730!5m2!1ses!2sar"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
    </div>
    <div className='border-bottom mb-5'></div>
    </>


  )
}

export default Location
