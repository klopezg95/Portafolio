import React, { useState } from 'react'
import './ContactForm.css'
// "use client";
// import { Button } from "keep-react";

function ContactForm() {

const [nombre,setNombre] = useState("");
const[email,setEmail] = useState("");
const[mensaje,setMensaje]= useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`MI NOMBRE ES: ${nombre}, ${email}` )
    setNombre("");
    setEmail("");
    setMensaje("");
    
  }



  return (
    <div className='container-form'>
      <h2>CONTACT ME</h2>

      <form className='form' onSubmit={handleSubmit}>

        <div className='boxform'>
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div className='boxform'>
          <label for="email">Email address:</label>
          <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='boxform'>
          <label for="message">Mensaje:</label>
          <textarea className='textarea' id="message" name="message" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
        </div>

        <button  type="submit">Enviar</button>
        {/* <Button size="md" type="primary" color="success">Enviar</Button> */}

      </form>

    </div>
  )

}
export default ContactForm;