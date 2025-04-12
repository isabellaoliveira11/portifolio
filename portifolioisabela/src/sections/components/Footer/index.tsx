import { Container } from "./styles";

import Github from "../../../shared/assets/icons/github-white-circle.svg";
import Linkedin from "../../../shared/assets/icons/linkedin-white-circle.svg";

const Footer = () => {
  return (
    <Container>
      <h1>Copyright © Isabela Oliveira · 2025</h1>

      <div className="social-medias">
        <img
          src={Linkedin}
          alt=""
          onClick={() => window.open("https://www.linkedin.com/in/isabela-barros-oliveira-dev//")}
        />
        <img
          src={Github}
          alt=""
          onClick={() => window.open("https://github.com/isabellaoliveira11")}
        />
      </div>
    </Container>
  );
};

export default Footer;
