import { Fragment, useState } from "react";
import Header from "../components/Header/Header.jsx";
import Section from "../components/Section/Section.jsx";
import Projects from "../components/Projects/Projects.jsx";
import ContactForm from "../components/ContactForm/ContactForm.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CursorGlow from "../components/Cursor/CursorGlow.jsx";
import "./styleComponents.css";

import "animate.css";

function App() {
  return (
    <>
      <CursorGlow />
      <Header />
      <Section />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
