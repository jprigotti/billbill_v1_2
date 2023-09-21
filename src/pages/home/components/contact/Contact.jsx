import React from 'react'
import { useState } from 'react';
import "./Contact.css"
import CustomStyles from "../../../../utils/CustomStyles";
import "../../../../utils/global.css"
const urlFetch = "https://script.google.com/macros/s/AKfycbw_QHPSAxQATM25EatTGmkglDZFVSJUkitHfV4UMaVnTM3nIwqjwBpt6K8l7tWi8UMf/exec";
const urlFetchDailu = "https://script.google.com/macros/s/AKfycbyKxrp0TOhXXRHhdt0_YRFeJKdMA2ei3242YwtFT5Kzlcdy4QIGbS39AzY15e9RQGut/exec";
// link google script Dailu https://script.google.com/u/1/home/projects/1I0vZLBKK4JgAeRdTIV2zrlX1S20Lsr8n8UrfLIG4kKTgqIBM5IKif5MN/edit


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [btnSubmitText, setBtnSubmitText] = useState("Enviar");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnSubmitText("...enviando...");

    const formData={
      recipient: email,
      name: name,
      message: message
    }

    fetch(urlFetchDailu, {
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
        setBtnSubmitText("Enviado!");
        setTimeout(()=>{setBtnSubmitText('Enviar')}, 2000);
        setName("");
        setEmail("");
        setMessage("");

      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };


  return (
    <div id="section-contact" className='contact main-container mb-10'>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-info-body mb-1">
            <CustomStyles.title1 >Contactate</CustomStyles.title1>
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
              <div className="form-item mb-1">
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="6" placeholder="Mensaje" required/>
              </div>
              <div className="form-item">
                <CustomStyles.buttonSend type="submit">{btnSubmitText}</CustomStyles.buttonSend>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
