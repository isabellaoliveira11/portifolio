import { ArrowLineDown } from "phosphor-react";
import { FormattedMessage } from "react-intl";

import LetsTalkButton from "../../../../../../../shared/components/LetsTalkButton";
import TagSection from "../../../../../../../shared/components/TagSection";

import Github from "../../../../../../../shared/assets/icons/github-white-circle.svg";
import Linkedin from "../../../../../../../shared/assets/icons/linkedin-white-circle.svg";
import heroAvatar from "../../../../../../../shared/assets/illustrations/hero-avatar.svg";

import ResumePT from "../../../../../../../shared/docs/curriculo-isabela-abr-2025.pdf";
import ResumeEN from "../../../../../../../shared/docs/resume-isabela-abr-2025.pdf";

import { Container } from "./styles";
import { useContext } from "react";
import { Context } from "../../../../../../../App";

const Desktop = () => {
  const { language } = useContext(Context);
  const isLanguagePt = language === "pt";

  return (
    <Container>
      <div className="left">
        <TagSection text="greetings" />

        <div className="name-and-title">
          <h1>
            Isabela <br /> Oliveira
          </h1>

          <h6> Full-Stack developer </h6>
        </div>

        <div className="social-medias">
          <img
            src={Linkedin}
            alt=""
            onClick={() =>
              window.open("https://www.linkedin.com/in/isabela-barros-oliveira-dev/")
            }
          />
          <img
            src={Github}
            alt=""
            onClick={() => window.open("https://github.com/isabellaoliveira11")}
          />

        </div>
      </div>

      <img src={heroAvatar} alt="" />

      <div className="right">
        <a
          href={isLanguagePt ? ResumePT : ResumeEN}
          download={
            isLanguagePt
              ? "curriculo-isabela-abr-2025.pdf"
              : "resume-isabela-abr-2025.pdf"
          }
          target="_blank"
        >
          <FormattedMessage id="download" /> CV
          <ArrowLineDown size={24} color="rgba(123, 74, 226, 0.5)" />
        </a>

        <LetsTalkButton />
      </div>
    </Container>
  );
};

export default Desktop;
