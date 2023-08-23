import React from "react";
import Intro from "./Header/Intro";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "./Footer/Footer";
import TsParticles from "../UI/TsParticles";
import About from "./About/About";
const Home = () => {
  return (
    <>
      <TsParticles />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
};

export default Home;
