import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { ArrowRight } from "phosphor-react";

import useWindowSize from "../../../shared/hooks/useWindowSize";

import WebProjects from "./components/WebProjects";
import DesignProjects from "./components/DesignProjects";

import SelectButton from "../../../shared/components/SelectButton";
import TagSection from "../../../shared/components/TagSection";
import { GreenButton } from "../../../shared/components/GreenButton";

import designIcon from "../../../shared/assets/icons/design-icon.svg";
import codeIcon from "../../../shared/assets/icons/code-icon.svg";
import greenGithub from "../../../shared/assets/icons/green-github.svg";


import { Container } from "./styles";

const Portfolio = () => {
  const windowSize = useWindowSize();
  const [category, setCategory] = useState("web");

  return (
    <Container>
      <TagSection text="portfolio-emoji" id="portfolio" />

      <div className="header">
        {windowSize.windowWidth <= 768 ? (
          <h1>
            <FormattedMessage id="works" /> <br />{" "}
            <FormattedMessage id="and-projects" />
          </h1>
        ) : (
          <h1>
            <FormattedMessage id="works" />{" "}
            <FormattedMessage id="and-projects" />
          </h1>
        )}

        <div className="buttons">
          <SelectButton
            img={codeIcon}
            text="Web"
            onClick={() => setCategory("web")}
          />
          <SelectButton
            img={designIcon}
            text="Design"
            onClick={() => setCategory("design")}
          />
        </div>
      </div>

      <div className="cards">
        {category === "web" ? <WebProjects /> : <DesignProjects />}
      </div>
      <div className="see-more-projects">
        {category === "web" ? (
          <GreenButton
            icon={greenGithub}
            textId="see-more-projects-on-github"
            onClick={() =>
              window.open("https://github.com/isabellaoliveira11", "_blank")
            }
            arrow
          />
        ) : (
         
          <></> //  <GreenButton
        )}
      </div>
    </Container>
  );
};

export default Portfolio;