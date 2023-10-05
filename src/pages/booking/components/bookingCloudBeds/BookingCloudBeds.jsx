import React from 'react'
import "../bookingCloudBeds/BookingCloudBeds.css"



const BookingCloudBeds = () => {
    return (
        <div className="bookingCloudBeds main-container">
            <h1>Booking</h1>
            <iframe
  id="inlineFrameExample"
  title="Inline Frame Example"
  width="100%"
  height="800"
  src="https://hotels.cloudbeds.com/reservation/IfktBL#checkin=2023-10-20&checkout=2023-10-22"
>
</iframe>
        </div>
    )
}

export default BookingCloudBeds
