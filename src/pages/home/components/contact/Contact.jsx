import React from 'react'
import { useState } from 'react';
import "./Contact.css"
import CustomStyles from "../../../../utils/CustomStyles";
import "../../../../utils/global.css"

import image1 from "../../../../assets/images/hostel_image_1.jpg"


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');

    const formData={
      recipient: email,
      name: name,
      message: message
    }

    fetch('https://script.google.com/macros/s/AKfycbw_QHPSAxQATM25EatTGmkglDZFVSJUkitHfV4UMaVnTM3nIwqjwBpt6K8l7tWi8UMf/exec', {
      method: 'POST',
      redirect: "follow",
      dataType: 'json',
      accepts: 'application/json',
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the Google Apps Script endpoint
        console.log("Response status: ", data.status);
        console.log("Response message: ", data.message);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };


  return (
    <div className='contact main-container'>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-info-body mb-1">
            <CustomStyles.title6 >Contactate</CustomStyles.title6>
            <p>Tenes dudas, consultas? Escribinos!</p>
          </div>
        </div>
        <div className="contact-form">
          <div className="contact-form-body">
            <form onSubmit={handleSubmit}>
              <div className="form-item">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" required/>
              </div>
              <div className="form-item">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
              </div>
              <div className="form-item">
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="6" placeholder="Mensaje" required/>
              </div>
              <div className="form-item">
                <CustomStyles.buttonSend type="submit">Enviar</CustomStyles.buttonSend>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
