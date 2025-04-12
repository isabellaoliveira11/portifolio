import { FormattedMessage } from "react-intl";
import { WhatsappLogo } from "phosphor-react";

import { Container } from "./styles";

const LetsTalkButton = () => {
  return (
    <Container
      onClick={() =>
        window.open("https://api.whatsapp.com/send/?phone=5544984280993")
      }
    >
      <WhatsappLogo size={24} weight="thin" color="rgba(123, 74, 226, 0.5)" />
      <h1>
        <FormattedMessage id="lets-talk" />
      </h1>
    </Container>
  );
};

export default LetsTalkButton;
