import React from "react";
import "./App.css"
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import ScrolUp from "./components/scrolUp/ScrolUp";
/* import Services from "./components/services/Services"; */
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>
     <Header />
     
     <main className="main">
      <Home />
      <About />
      <Skills />
      {/* <Services /> */}
      <Qualification/>
      <Contact/>
     </main>

     <Footer/>
      <ScrolUp/>
    </>
  )
}

export default App;