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
          <FormattedMessage id="technologies" /> <br />
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
        {[
          { icon: reactIcon, label: "React" },
          { icon: javascriptIcon, label: "JavaScript" },
          { icon: typescriptIcon, label: "TypeScript" },
          { icon: nextIcon, label: "Next.js" },
          { icon: cssIcon, label: "CSS" },
          { icon: htmlIcon, label: "HTML" },
          { icon: figmaIcon, label: "Figma" },
          { icon: gitIcon, label: "Git" },
          { icon: githubIcon, label: "GitHub" },
        ].map((tech, index) => (
          <div className="tech-item" key={index}>
            <img src={tech.icon} alt={tech.label} />
            <span>{tech.label}</span>
          </div>
        ))}
      </div>

      <h3>
        <FormattedMessage id="other-techs-ive-done-projects-with" />
      </h3>
      <div className="techs">
        {[
          { icon: vueIcon, label: "Vue.js" },
          { icon: nodejsIcon, label: "Node.js" },
          { icon: tailwindIcon, label: "Tailwind" },
          { icon: pythonIcon, label: "Python" },
          { icon: postgresIcon, label: "PostgreSQL" },
          { icon: mysqlIcon, label: "MySQL" },
        ].map((tech, index) => (
          <div className="tech-item" key={index}>
            <img src={tech.icon} alt={tech.label} />
            <span>{tech.label}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Skills;
