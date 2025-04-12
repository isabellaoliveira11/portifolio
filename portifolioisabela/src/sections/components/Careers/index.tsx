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
            2016 · <FormattedMessage id="at-the-moment" />
          </h3>
          <div className="content">
            <div className="cards">
              <CardInfo
                id="status"
                title="teacher"
                description="working-at-school"
                startAndEnd="jan-2023-actually"
                tags={[
                  "Desenvolvimento de projetos",
                  "Arduino",
                  "Programação",
                ]}
                status
              />
              <CardInfo
                id="status"
                title="tutora"
                description="working-as-a-tutora"
                startAndEnd="may-2022-fev-2024"
                tags={[
                  "Suporte Acadêmico",
                  "AVA",
                ]}
              />
              <CardInfo
                title="it-support"
                description="working-in-the-support"
                startAndEnd="jun-2020-abr-2022"
                tags={[
                  "FTTH",
                  "OLT",
                  "ONU ",
                  "Zabbix",
                  "VLAN",
                  "DHCP ",
                  "PPPoE",
                ]}
              />

              <CardInfo
                title="it-support-at-hospital"
                description="network-and-support"
                startAndEnd="jun-2019-jan-2020"
                tags={[
                  "Help Desk",
                  "Suporte a Sistemas",
                  "Redes de Computadores",
                ]}
              />
              <CardInfo
                title="teacher-at-ceju"
                description="teacher-as-a-technology"
                startAndEnd="jul-2017-jun-2019"
                tags={["Arduino", "Informática"]}
              />
            </div>
          </div>
        </div>

        <div className="column">
          <h1>
            <FormattedMessage id="academic-area" />
          </h1>
          <h3>
            2015 · <FormattedMessage id="at-the-moment" />
          </h3>
          <div className="content">
            <div className="cards">
              <CardInfo
                title="mba-rocketseat"
                description="mba-rocketseat-description"
                startAndEnd="out-2024-out-2025"
                status
              />
              <CardInfo
                title="higher-degree-systems-analysis-and-development"
                description="graduated-from-fatec"
                startAndEnd="august-2019-august-2022"
              />
              <CardInfo
                title="technician-computer-networks"
                description="in-2019-i-graduated"
                startAndEnd="february-2018-june-2019"
              />
              <CardInfo
                title="english-advanced-conversation"
                description="in-the-second-half-of-2018"
                startAndEnd="july-2018-december-2018"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Careers;
