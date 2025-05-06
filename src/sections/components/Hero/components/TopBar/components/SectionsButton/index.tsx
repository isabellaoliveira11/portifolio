import { useContext, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

import { Context } from "../../../../../../../App";
import smoothScroll from "../../../../../../../shared/utils/smoothScroll";

import brazilFlag from "../../../../../../../shared/assets/icons/brazil-flag.svg";
import usaFlag from "../../../../../../../shared/assets/icons/usa-flag.svg";

import Pulse from "../../../../../../../shared/components/Pulse";

import { Container } from "./styles";

const SectionsButton = () => {
  const { language, setLanguage } = useContext(Context);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    "status",
    "hero",
    "aboutMe",
    "portfolio",
    "skills",
    "career",
    "contacts",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <Container language={language}>
      <div className="sections">
        <button
          onClick={() => smoothScroll("status")}
          className={activeSection === "status" ? "active" : ""}
        >
          <Pulse /> Status
        </button>
        <button
          onClick={() => smoothScroll("hero")}
          className={activeSection === "hero" ? "active" : ""}
        >
          Home
        </button>
        <button
          onClick={() => smoothScroll("aboutMe")}
          className={activeSection === "aboutMe" ? "active" : ""}
        >
          <FormattedMessage id="about-me" />
        </button>
        <button
          onClick={() => smoothScroll("portfolio")}
          className={activeSection === "portfolio" ? "active" : ""}
        >
          <FormattedMessage id="portfolio" />
        </button>
        <button
          onClick={() => smoothScroll("skills")}
          className={activeSection === "skills" ? "active" : ""}
        >
          Skills
        </button>
        <button
          onClick={() => smoothScroll("career")}
          className={activeSection === "career" ? "active" : ""}
        >
          <FormattedMessage id="career" />
        </button>
        <button
          onClick={() => smoothScroll("contacts")}
          className={activeSection === "contacts" ? "active" : ""}
        >
          <FormattedMessage id="contact" />
        </button>
      </div>

      <div className="lang">
        <button
          className={`language ${language === "pt" ? "active" : ""}`}
          onClick={() => setLanguage("pt")}
        >
          PT <img src={brazilFlag} alt="Bandeira do Brasil" />
        </button>
        <button
          className={`language ${language === "en" ? "active" : ""}`}
          onClick={() => setLanguage("en")}
        >
          EN <img src={usaFlag} alt="Bandeira dos EUA" />
        </button>
      </div>
    </Container>
  );
};

export default SectionsButton;
