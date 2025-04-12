import { FormattedMessage } from "react-intl";
import useWindowSize from "../../../shared/hooks/useWindowSize";

import TagSection from "../../../shared/components/TagSection";

import cssIcon from "../../../shared/assets/icons/css-icon.svg";
import figmaIcon from "../../../shared/assets/icons/figma-icon.svg";
import gitIcon from "../../../shared/assets/icons/git-icon.svg";
import githubIcon from "../../../shared/assets/icons/github-icon.svg";
import htmlIcon from "../../../shared/assets/icons/html-icon.svg";
import javascriptIcon from "../../../shared/assets/icons/javascript-icon.svg";
import nextIcon from "../../../shared/assets/icons/next-icon.svg";
import reactIcon from "../../../shared/assets/icons/react-icon.svg";
import typescriptIcon from "../../../shared/assets/icons/typescript-icon.svg";

import mysqlIcon from "../../../shared/assets/icons/mysql-icon.svg";
import nodejsIcon from "../../../shared/assets/icons/nodejs-icon.svg";
import postgresIcon from "../../../shared/assets/icons/postgres-icon.svg";
import pythonIcon from "../../../shared/assets/icons/python-icon.svg";
import sassIcon from "../../../shared/assets/icons/sass-icon.svg";
import tailwindIcon from "../../../shared/assets/icons/tailwind-icon.svg";
import vueIcon from "../../../shared/assets/icons/vue-icon.svg";

import { Container } from "./styles";

const Skills = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 768;

  return (
    <Container id="skills">
      <TagSection text="skills-emoji" />
      {isMobile ? (
        <h1>
          <FormattedMessage id="technologies" /> <br />{" "}
          <FormattedMessage id="and-skills" />
        </h1>
      ) : (
        <h1>
          <FormattedMessage id="technologies" />{" "}
          <FormattedMessage id="and-skills" />
        </h1>
      )}

    <h3>
      <FormattedMessage id="techs-i-use-on-a-daily-basis" />
    </h3>
    <div className="techs">
      <div className="tech-item"><img src={reactIcon} alt="React" /><span>React</span></div>
      <div className="tech-item"><img src={javascriptIcon} alt="JavaScript" /><span>JavaScript</span></div>
      <div className="tech-item"><img src={typescriptIcon} alt="TypeScript" /><span>TypeScript</span></div>
      <div className="tech-item"><img src={nextIcon} alt="Next.js" /><span>Next.js</span></div>
      <div className="tech-item"><img src={cssIcon} alt="CSS" /><span>CSS</span></div>
      <div className="tech-item"><img src={htmlIcon} alt="HTML" /><span>HTML</span></div>
      <div className="tech-item"><img src={figmaIcon} alt="Figma" /><span>Figma</span></div>
      <div className="tech-item"><img src={gitIcon} alt="Git" /><span>Git</span></div>
      <div className="tech-item"><img src={githubIcon} alt="GitHub" /><span>GitHub</span></div>
    </div>

    <h3>
      <FormattedMessage id="other-techs-ive-done-projects-with" />
    </h3>
    <div className="techs">
      <div className="tech-item"><img src={vueIcon} alt="Vue.js" /><span>Vue.js</span></div>
      <div className="tech-item"><img src={nodejsIcon} alt="Node.js" /><span>Node.js</span></div>
      <div className="tech-item"><img src={tailwindIcon} alt="Tailwind" /><span>Tailwind</span></div>
      <div className="tech-item"><img src={sassIcon} alt="Sass" /><span>Sass</span></div>
      <div className="tech-item"><img src={pythonIcon} alt="Python" /><span>Python</span></div>
      <div className="tech-item"><img src={postgresIcon} alt="PostgreSQL" /><span>PostgreSQL</span></div>
      <div className="tech-item"><img src={mysqlIcon} alt="MySQL" /><span>MySQL</span></div>
    </div>

    </Container>
  );
};

export default Skills;
