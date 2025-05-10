import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import useWindowSize from "../../../shared/hooks/useWindowSize";

import TagSection from "../../../shared/components/TagSection";
import CardInfo from "./components/CardInfo";

import { Context } from "../../../App";
import { Container } from "./styles";

const Careers = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 768;

  const { language } = useContext(Context);

  return (
    <Container>
      <TagSection text="career-emoji" />

      {isMobile ? (
        <h1>
          <FormattedMessage id="trajectory" /> <br />{" "}
          <FormattedMessage id="so-far" />
        </h1>
      ) : (
        <h1>
          <FormattedMessage id="trajectory" /> <FormattedMessage id="so-far" />
        </h1>
      )}

      <div className="columns">
        <div className="column">
          <h1 id="career">
            <FormattedMessage id="profissional-area" />
          </h1>
          <h3>
            2017 · <FormattedMessage id="at-the-moment" />
          </h3>
          <div className="content">
            <div className="cards">
              <CardInfo
                id="status"
                title="teacher-at-scholl"
                description="working-at-scholl"
                startAndEnd="fev-2023-actually"
                tags={[
                  "Python",
                  "Javascript",
                  "HTML",
                  "CSS",
                  "Scratch",
                  "Arduino",
                  "Construct",
                  "Figma",
                ]}
                status
              />
              <CardInfo
                id="status"
                title="tutora"
                description="working-as-a-tutora"
                startAndEnd="may-2022-fev-2024"
                tags={[
                  "Moodle",
                  "Comunicação",
                  "Ensino Superior",
                  "Análise De Sistemas",
                  "Ciência De Dados",
                ]}
              />
              <CardInfo
                title="support-at-mhnet"
                description="working-as-support"
                startAndEnd="jun-2020-abr-2022"
                tags={[
                  "FTTH ",
                  "ONU",
                  "OLT ",
                  "Zabbix",
                  "GPON",
                  "NOC",
                ]}
              />

              <CardInfo
                title="support-at-hospital"
                description="support-of-description"
                startAndEnd="jul-2019-jan-2020"
                tags={[
                  "Help Desk",
                  "Manutenção De Computadores",
                  "Infraestrutura De Redes",
                ]}
              />
              <CardInfo
                title="teacher-at-ceju"
                description="ceju-as-a-teacher"
                startAndEnd="jul-2017-jun-2019"
                tags={["Arduino", "Pacote Office", "Scratch"]}
              />
            </div>
          </div>
        </div>

        <div className="column">
          <h1>
            <FormattedMessage id="academic-area" />
          </h1>
          <h3>
            2017 · <FormattedMessage id="at-the-moment" />
          </h3>
          <div className="content">
            <div className="cards">
              <CardInfo
                title="bolsa-tech"
                description="bolsa-tech-description"
                startAndEnd="ago-2024-jun-2025"
                status
              />
              <CardInfo
                title="computer-degree"
                description="graduated-from-uel-degree"
                startAndEnd="ago-2023-ago-2027"
                status
              />
              <CardInfo
                title="graduated-computer-forenses"
                description="in-2023-i-graduated"
                startAndEnd="jan-2023-out-2023"
              />
              <CardInfo
                title="graduated-technology-education"
                description="technology-education-description"
                startAndEnd="ago-2023-jun-2025"
              />
              <CardInfo
                title="system-information"
                description="system-system-description"
                startAndEnd="january-2017-december-2020"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Careers;
