import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Careers from "./components/Careers";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

import { Container } from "./styles";

const Sections = () => {
  return (
    <Container>
      <Hero />
      <AboutMe />
      <Portfolio />
      <Skills />
      <Careers />
      <Contacts />
      <Footer />
    </Container>
  );
};

export default Sections;
