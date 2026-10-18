import { Fragment, useState } from 'react'
import Header from '../componentes/Header/Header.jsx'
import Section from '../componentes/Section/Section.jsx'
import Projects from '../componentes/Projects/Projects.jsx'
import ContactForm from '../componentes/ContactForm/ContactForm.jsx'
import Footer from '../componentes/Footer/Footer.jsx'
import './styleComponents.css'

import 'animate.css';


function App() {


  return (
    <Fragment>
      {/* <Web /> */}
      <Header/>
      <Section/>
      <Projects/>
      <ContactForm/>
      <Footer/>

    </Fragment>

  )
}

export default App
