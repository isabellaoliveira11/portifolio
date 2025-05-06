import { useEffect, useState } from "react";
import Logo from "../../../../../shared/assets/icons/logo.svg";
import SectionsButton from "./components/SectionsButton";

import { Container } from "./styles";

const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container className={scrolled ? "scrolled" : ""}>
      <div className="content">
        <img src={Logo} alt="Logo" />
        <SectionsButton />
      </div>
    </Container>
  );
};

export default TopBar;
