import { FormattedMessage } from "react-intl";

import TagSection from "../../../shared/components/TagSection";
import profilePic from "../../../shared/assets/illustrations/profile-pic-2024.jpg";

import useWindowSize from "../../../shared/hooks/useWindowSize";

import { Container } from "./styles";

const AboutMe = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 768;

  return (
    <Container id="aboutMe">
      <img
        className="profile-pic"
        src={profilePic}
        alt=""
        width={isMobile ? "80%" : "32%"}
        height="auto"
      />

      <div className="description">
        <TagSection text="about-me-emoji" />

        <h1>
          Isabela Oliveira<br /> 
        </h1>

        <p>
          <FormattedMessage id="you-can-call-me-isabela" /> <br />
          👨‍💻 <FormattedMessage id="for-over-2-years-developing" /> <br />
          🎓 <FormattedMessage id="graduated-in-ads" /> <br />
          💡 <FormattedMessage id="interests-in-full-stack" /> <br />
          🚀 <FormattedMessage id="trying-to-be-a-little-better" />
        </p>
      </div>
    </Container>
  );
};

export default AboutMe;